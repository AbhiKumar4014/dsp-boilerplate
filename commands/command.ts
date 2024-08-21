import { Command } from 'commander';
import logger from '../src/logger/log';
import app from '../src/main';
import dotenv from 'dotenv';

const program = new Command();
dotenv.config();

program
    .command('server')
    .option('-p, --port <number>', 'Port Number', process.env.PORT || '3000')
    .option('-d, --desc', 'Description')
    .action((cmd) => {
        if (cmd.port) {
            const PORT = cmd.port;
            app.listen(PORT, () => {
                logger.info(`Server listening on port: ${PORT}`);
            });
        } else if (cmd.desc) {
            logger.info('-p,--port:  To specify the port');
        }
        logger.debug(cmd)
    });

program
    .command('worker')
    .option('-p, --queue <string>', 'Listen to queue', 'defaultQueue')
    .action((cmd) => {
        const queue = cmd.queue;
        logger.info(`Listening to queue: ${queue}`);
    });
program.parse(process.argv);