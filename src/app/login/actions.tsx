import axios from "axios";
import { Logins } from "./interface";

export async function LoginAction(params: { login: Logins, url: string }) {
    const res = await axios.post(params.url + "login", {
        email: params.login.email,
        password: params.login.password,
        })
    return res.data
}