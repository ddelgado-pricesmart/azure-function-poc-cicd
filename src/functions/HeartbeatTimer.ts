import { app, InvocationContext, Timer } from '@azure/functions';
import { logHeartbeat } from '../services/loggerService.js';

export async function HeartbeatTimer(_myTimer: Timer, context: InvocationContext): Promise<void> {
    await logHeartbeat(context);
}

app.timer('HeartbeatTimer', {
    schedule: '0 */1 * * * *',
    handler: HeartbeatTimer,
});
