 export class Lease{
    constructor(data) {
        this.id = data.id;
        this.termOfLease = data.termOfLease;
        this.beginDate = data.beginDate;
        this.endDate = data.endDate;
        this.monthlyRent = data.monthlyRent;
        this.deposit = data.deposit;
        this.petDeposit = data.petDeposit;
        this.unitId = data.unitId;
        this.tenantId = data.tenantId;
        this.propertyId = data.propertyId;
        this.ultilities = data.utilities;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }
    get id() {
        return this.id;
    }
    get termOfLease() {
        return this.termOfLease;
    }
    get beginDate() {
        return this.beginDate;
    }
    get endDate() {
        return this.endDate;
    }
    get monthlyRent() {
        return this.monthlyRent;
    }
    get deposit() {
        return this.deposit;
    }
    get petDeposit() {
        return this.petDeposit;
    }
    get unitId() {
        return this.unitId;
    }
    get tenantId() {
        return this.tenantId;
    }
    get propertyId() {
        return this.propertyId;
    }
    get utilities() {
        return this.utilities;
    }
    get createdAt() {
        return this.createdAt;
    }
    get updatedAt() {
        return this.updatedAt;
    }
    set id(id) {
        this.id = id;
    }
    set termOfLease(termOfLease) {
        this.termOfLease = termOfLease;
    }
    set beginDate(beginDate) {
        this.beginDate = beginDate;
    }
    set endDate(endDate) {
        this.endDate = endDate;
    }
    set monthlyRent(monthlyRent) {
        this.monthlyRent = monthlyRent;
    }
    set deposit(deposit) {
        this.deposit = deposit;
    }
    set petDeposit(petDeposit) {
        this.petDeposit = petDeposit;
    }
    set unitId(unitId) {
        this.unitId = unitId;
    }
    set tenantId(tenantId) {
        this.tenantId = tenantId;
    }
    set propertyId(propertyId) {
        this.propertyId = propertyId;
    }
    set utilities(utilities) {
        this.utilities = utilities;
    }
    set createdAt(createdAt) {
        this.createdAt = createdAt;
    }
    set updatedAt(updatedAt) {
        this.updatedAt = updatedAt;
    }

}