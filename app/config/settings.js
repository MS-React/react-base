import { resolve as pathResolve } from 'path';
import { config } from 'dotenv';

const { env } = process;
config({ path: pathResolve(__dirname, `./env/.env.${env.NODE_ENV}`) });

export default {
  environment: env.NODE_ENV,
  SERVICE: {
    baseurl: env.SERVICE_API_URL,
    port: Number(env.SERVICE_PORT)
  }
};
