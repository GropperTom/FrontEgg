import backendClient from "../../../api";
import {AuthDataDto} from "./dtos/AuthDataDto";

const login = (email: string, password: string) =>
    new Promise<AuthDataDto>(async (resolve, reject) => {
        try {
            const url = `auth/login`;
            const params = {
                email,
                password
            }
            const res = await backendClient.post(url, params);
            const token = res.data['x-auth-token'];
            const msg = res.data['msg'];
            resolve({
                token,
                msg
            });
        }
        catch(e) {
            reject()
        }
    });

const register = (email: string, password: string, name: string) =>
    new Promise<AuthDataDto>(async (resolve, reject) => {
        try {
            const url = `auth/register`;
            const params = {
                name,
                email,
                password
            }
            console.log(email + "3");
            console.log(params + "4");
            const res = await backendClient.post(url, params);

            resolve({
                msg: res.data.msg
            });
        }
        catch(e) {
            reject()
        }
    });

export default {
    register,
    login
};
