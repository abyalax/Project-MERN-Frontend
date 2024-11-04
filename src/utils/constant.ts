const originDevelopment = import.meta.env.VITE_ORIGIN_DEVELOPMENT
// const originProduction = import.meta.env.VITE_ORIGIN_PRODUCTION

export const origin = originDevelopment

export const token = localStorage.getItem("token")
console.log("Token: ", token);

