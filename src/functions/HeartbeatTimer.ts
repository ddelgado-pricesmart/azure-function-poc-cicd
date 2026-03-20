import { app, InvocationContext, Timer } from '@azure/functions';
import { logHeartbeat } from '../services/loggerService.js';

export async function HeartbeatTimer(_myTimer: Timer, context: InvocationContext): Promise<void> {
    logHeartbeat(context);
}

app.timer('HeartbeatTimer', {
    schedule: '0 */5 * * * *',
    handler: HeartbeatTimer,
});
