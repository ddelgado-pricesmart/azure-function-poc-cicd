import { InvocationContext } from '@azure/functions';

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export async function logHeartbeat(context: InvocationContext): Promise<void> {
    const timestamp = new Date().toISOString();
    context.log(`i'm running at this time.. ${timestamp}`);

    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json() as Todo[];

    context.log(`Fetched ${todos.length} todos from API`);
    todos.slice(0, 5).forEach(todo => {
        context.log(`[${todo.completed ? 'DONE' : 'PENDING'}] #${todo.id} - ${todo.title}`);
    });
}
