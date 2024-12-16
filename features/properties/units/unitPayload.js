export class Unit{
    constructor(data) {
        this.id = data.id
        this.tenantId = data.tenantId
        this.leaseId = data.leaseId
        this.description = data.description
        this.amount = data.amount
        this.date = data.date    
    }
    get id() {
        return this.id
    }
    get tenantId() {
        return this.tenantId
    }
    get leaseId() {
        return this.leaseId
    }
    get description() {
        return this.description
    }

    get amount() {
        return this.amount
    }
    get date() {
        return this.date
    }
    set id(id) {
        this.id = id
    }
    set tenantId(tenantId) {
        this.tenantId = tenantId
    }
    set leaseId(leaseId) {
        this.leaseId = leaseId
    }
    set description(description) {
        this.description = description
    }
    set amount(amount) {
        this.amount = amount
    }
    set date(date) {
        this.date = date
    }

    
}