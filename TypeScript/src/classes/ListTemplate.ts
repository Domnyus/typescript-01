import { Logged } from "../interfaces/Logged";

export class ListTemplate
{
    constructor(private containter: HTMLUListElement) {}
    render(item: Logged, heading: string, pos: 'start'|'end'){
        const li = document.createElement('li')
        
        const h4 = document.createElement('h4')
        h4.innerText = heading

        li.append(h4)

        const p = document.createElement('p')
        p.innerText = item.login()
        li.append(p)

        if (pos === 'start')
            this.containter.prepend(li)
        else
            this.containter.append(li)
    }
}