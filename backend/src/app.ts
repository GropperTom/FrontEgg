import express, {NextFunction, Request, Response} from "express";
import adminRouter from "./modules/admin/routes"
import authRouter from "./modules/auth/routes"
import {json} from "body-parser";
import connectMongoDB from "./db";
import cors from "cors";
const app = express();

app.use(json());

// CORS
app.use(cors()); //NOTE: return to this

// Cache-control
app.use(function (req, res, next) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next()
});

// Routers
app.use(adminRouter.path, adminRouter.router);
app.use(authRouter.path, authRouter.router);

// Error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log("Error",err.message);
    res.status(500).json({message: err.message});
});

connectMongoDB().then(() => {
    app.listen(3001)
});
