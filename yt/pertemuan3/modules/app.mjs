import { index, store } from "./controller.mjs";

function main() {
    const user = {
        name : "xyz",
        age: 10
    };
    index();
    store(user)
    index();
}
main()