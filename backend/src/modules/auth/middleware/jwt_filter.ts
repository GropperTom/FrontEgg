import jwt from "jsonwebtoken"
import config from "config"
import JwtPayload from "../models/jwt_model";

export default (req: any, res: any, next: any) => {
    const token = req.header('x-auth-token');

    if(!token) {
        return res.status(401).json({msg: 'no token, authorization denied'});
    }

    try {
        const decoded = jwt.verify(token, config.get('jwtSecret')) as JwtPayload;

        req.user = decoded.user;
        next();
    }
    catch(e) {
        res.status(401).json({msg: "invalid token"})
    }
}
