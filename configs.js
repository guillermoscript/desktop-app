
const isProduction = false;
const config = {
    dev: {
        // apiUrl: env.procces.DEV_API_URL
    },
    production: {

    },
    apiUrl: () => {
        if (isProduction) {
            // return process.env.PRO_API_URL
            return 'http://localhost:3333'
        } else {
            // return process.env.DEV_API_URL
            return 'http://localhost:3333'
        }
    }
}
export { config }