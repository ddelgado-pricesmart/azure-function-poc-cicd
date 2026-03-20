import { InvocationContext } from '@azure/functions';

export function logHeartbeat(context: InvocationContext): void {
    const timestamp = new Date().toISOString();
    context.log(`i'm running at this time.. ${timestamp}`);
}
