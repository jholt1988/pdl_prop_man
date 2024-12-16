export class ExpensePayload {
    constructor(data) {
        this.id = data.id
        this.tenantId = data.tenantId
        this.tenant = data.tenant
        this.leaseId = data.leaseId
        this.lease = data.lease
        this.description = data.description
        this.amount = data.amount
        this.date = data.date
        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt
    }
    get id() {
        return this.id
    }
    get tenantId() {
        return this.tenantId
    }
    get tenant() {
        return this.tenant
    }
    get leaseId() {
        return this.leaseId
    }
    get lease() {
        return this.lease
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
    get createdAt() {
        return this.createdAt
    }
    get updatedAt() {
        return this.updatedAt
    }
    set id(id) {
        this.id = id
    }
    set tenantId(tenantId) {
        this.tenantId = tenantId
    }
    set tenant(tenant) {
        this.tenant = tenant
    }

    set leaseId(leaseId) {
        this.leaseId = leaseId
    }
    set lease(lease) {
        this.lease = lease
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