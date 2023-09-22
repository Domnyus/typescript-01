import { User } from './classes/user.js';
import { Anything } from './classes/anything.js';
import { ListTemplate } from './classes/ListTemplate.js';
const ul = document.querySelector("#ul-users");
const list = new ListTemplate(ul);
const jonas = {
    username: "jonas",
    ID: 1,
    login(user, pass) {
        console.log("hello");
    },
    logout() {
        console.log("bye");
    }
};
console.log(jonas);
const forms = document.querySelector("#log");
console.log(forms.children);
const me = new User("Jonas", "jonas1", "today");
const she = new User("Patrícia", "paty2", "tomorrow");
let users = [];
users.push(me, she);
console.log(users);
const username = document.querySelector("#username");
const password = document.querySelector("#password");
forms.addEventListener("submit", (e) => {
    e.preventDefault();
    let new_user;
    if (username.value != "" && password.value != "") {
        new_user = new User(username.value, password.value, "today");
        console.log(new_user);
        list.render(new_user, new_user.username, "end");
    }
});
let any1;
let any2;
any1 = new User("1", "1", "today");
any2 = new Anything("2", "2", "yesterday");
let anys = [];
anys.push(any1, any2);
console.log(anys);
//
const a = (obj) => {
    let aa = Math.random() * 200;
    return Object.assign(Object.assign({}, obj), { aa });
};
let b = a({ c: 'a' });
console.log(b.c);
//
var enum_example;
(function (enum_example) {
    enum_example[enum_example["SLEEP"] = 0] = "SLEEP";
    enum_example[enum_example["HUNGRY"] = 1] = "HUNGRY";
    enum_example[enum_example["THIRSTY"] = 2] = "THIRSTY";
})(enum_example || (enum_example = {}));
const enum_ohmy = { so: enum_example.SLEEP };
//
let array_a = [1, true, '🤓'];
let tuple_a = [1, true, '🤓'];
