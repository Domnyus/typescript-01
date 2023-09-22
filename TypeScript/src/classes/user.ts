import { Logged } from '../interfaces/Logged.js'

export class User implements Logged{
    readonly ID: number
    public username: string
    password: string
    private date: string
    constructor(username: string, password: string, date: string) {
        this.ID = 0;
        this.username = username;
        this.password = password;
        this.date = date;
    }
    toString() {
        return `${this.username} ${this.password} ${this.date}`;
    }
    login(): string {
        if(this.password != "")
        {
            return "true"
        }
        else { return "false" }
    }
}