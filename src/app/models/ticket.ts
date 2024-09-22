export class Ticket {
    status: string;
    assignee: string;
    coOwner: string;
    importance: string;
    customerName: string;
    invoiceId: number;
    subTasks: SubTask[]

    constructor(obj: any) {
        this.status = obj['status'] ? obj['status'] : '';
        this.assignee = obj['assignee'] ? obj['assignee'] : '';
        this.coOwner = obj['coOwner'] ? obj['coOwner'] : '';
        this.importance = obj['importance'] ? obj['importance'] : '';
        this.customerName = obj['customerName'] ? obj['customerName'] : '';
        this.invoiceId = obj['invoiceId'] ? obj['invoiceId'] : null;
        this.subTasks = obj['subTasks'] ? obj['subTasks'].map((obj: any) => new SubTask(obj)) : new SubTask({});
    }
}

export class SubTask {
    name: string;
    checked: boolean;

    constructor(obj: any) {
        this.name = obj['name'] ? obj['name'] : '';
        this.checked = obj['checked'] ? true : false;
    }
}