import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

export default function getEnvValues() {
    return {
        props: {
            URI: process.env.MONGO_URI,
            PRIVATE_KEY: process.env.PRIVATE_KEY
        }
    }
}