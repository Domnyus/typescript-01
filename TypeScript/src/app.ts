import { User } from './classes/user.js'
import { Anything } from './classes/anything.js'
import { Logged } from './interfaces/Logged.js'
import { ListTemplate } from './classes/ListTemplate.js'

const ul = document.querySelector("#ul-users") as HTMLUListElement
const list = new ListTemplate(ul)

//Interfaces
interface IsUser
{
    username: string,
    ID: number
    login(username: string, password: string): void
    logout(): void
}

const jonas: IsUser = {
    username: "jonas",
    ID: 1,
    login(user: string, pass: string): void
    {
        console.log("hello")
    },
    logout() 
    {
        console.log("bye")
    }
}

console.log(jonas)

const forms = document.querySelector("#log") as HTMLFormElement
console.log(forms.children)

const me = new User("Jonas", "jonas1", "today");
const she = new User("Patrícia", "paty2", "tomorrow");

let users: User[] = []
users.push(me, she)
console.log(users)

const username = document.querySelector("#username") as HTMLInputElement
const password = document.querySelector("#password") as HTMLInputElement

forms.addEventListener("submit", (e: Event) => {
    e.preventDefault()

    let new_user: User;

    if (username.value != "" && password.value != "")
    {
        new_user = new User(username.value, password.value, "today");

        console.log(new_user)

        list.render(new_user, new_user.username, "end")
    }
})

let any1: Logged
let any2: Logged

any1 = new User("1", "1", "today")
any2 = new Anything("2", "2", "yesterday")

let anys: Logged[] = []
anys.push(any1, any2)
console.log(anys)

//
const a = <T extends {c: string}>(obj: T) =>{
    let aa = Math.random() * 200
    return {...obj, aa}
}

let b = a({c: 'a'})
console.log(b.c)

interface i_a<T>{ i_b: T}

//
enum enum_example
{
    SLEEP, HUNGRY, THIRSTY
}

const enum_ohmy = { so: enum_example.SLEEP }

//
let array_a = [1, true, '🤓']

let tuple_a: [number, boolean, string] = [1, true, '🤓']