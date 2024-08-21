import pino from 'pino';
import dotenv from 'dotenv';

dotenv.config();
const isProduction = process.env.NODE_ENV === 'production';

const logger = pino({
    level: isProduction ? 'error' : 'debug',
    base: { pid: false },
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
            translateTime: 'yyyy-mm-dd HH:MM:ss',
            ignore: 'pid,hostname',
        }
    },
    serializers: {
        req: (req) => ({
            method: req.method,
            url: req.url,
        }),
    }
});

export default logger;