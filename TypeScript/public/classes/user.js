export class User {
    constructor(username, password, date) {
        this.ID = 0;
        this.username = username;
        this.password = password;
        this.date = date;
    }
    toString() {
        return `${this.username} ${this.password} ${this.date}`;
    }
    login() {
        if (this.password != "") {
            return "true";
        }
        else {
            return "false";
        }
    }
}
