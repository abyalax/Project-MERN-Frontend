export const VerifyEmail = async (email: string) => {
    const response = await fetch('http://localhost:4000/api/verify/send-email', {
        method: "post",
        credentials: "include",
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
    const response = await fetch('http://localhost:4000/api/verify/verify-email', {
        method: "post",
        credentials: "include",
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
    const response = await fetch('http://localhost:4000/api/auth/register', {
        method: "post",
        credentials: "include",
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
    const response = await fetch('http://localhost:4000/api/auth/login', {
        method: "post",
        credentials: "include",
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

export const logout = async () => {
    const response = await fetch('http://localhost:4000/api/auth/logout', {
        method: "post",
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const result = await response.json();
    return result
}
