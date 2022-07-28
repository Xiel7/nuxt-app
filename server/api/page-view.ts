const startAt = Date.now();
let count = 0;

interface Post {
    userId: Number;
    id: Number;
    title: String;
    completed: Boolean;
}


async function jsonPlaceHolder() {
    const response : Post = await $fetch('https://jsonplaceholder.typicode.com/todos/1');
    return response;
}

export default defineEventHandler( async () => ({
    pageView: count++,
    startAt,
    jsonPlaceHolder: await jsonPlaceHolder()
}));