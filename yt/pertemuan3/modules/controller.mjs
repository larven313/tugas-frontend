// Import data users
import users from "./data.mjs";

function index() {
    console.log(users);
}

function store(user) {
    users.push(user);
}

// Export fungsi index dan store
export {index, store};