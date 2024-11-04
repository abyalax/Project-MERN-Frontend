import { origin } from "../../utils/constant";

export const VerifyEmail = async (email: string) => {
    const response = await fetch(`${origin}/api/verify/send-email`, {
        method: "post",
        credentials: "include",
        mode: "cors", 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
        })
    })
    const data = await response.json();
    return data
};

export const attemptToVerify = async (code: string, email: string) => {
    const response = await fetch(`${origin}/api/verify/verify-email`, {
        method: "post",
        credentials: "include",
        mode: "cors", 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            code,
            email
        })
    })
    const data = await response.json();
    return data
}

export const Register = async (name: string, email: string, password: string) => {
    const response = await fetch(`${origin}/api/auth/register`, {
        method: "post",
        credentials: "include",
        mode: "cors", 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    })
    const data = await response.json();
    return data
}

export const Login = async (email: string, password: string) => {
    const response = await fetch(`${origin}/api/auth/login`, {
        method: "post",
        credentials: "include",
        mode: "cors", 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    const data = await response.json();
    return data
}