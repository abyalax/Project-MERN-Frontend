const originDevelopment = import.meta.env.VITE_ORIGIN_DEVELOPMENT
const originProduction = import.meta.env.VITE_ORIGIN_PRODUCTION

export const origin = originProduction ?? originDevelopment
console.log(origin, "From Utils Service");
