export class RepairRequest {
    constructor(data) {
        this.id =  data.id
        this.name = data.name
        this.email = data.email
        this.phone  = data.phone
        this.issue  = data.issue    
        this.image  =   data.image
        this.propertyId = data.propertyId
        this.unitId = data.unitId
        this.status = data.status
        this.vendorId = data.vendorId
        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt
    }
    get id() {
        return this.id;
    }   
    get name() {
        return this.name;
    }
    get email() {
        return this.email;
    }
    get phone() {
        return this.phone;
    }
    get issue() {
        return this.issue;
    }
    get image() {
        return this.image;
    }
    get propertyId() {
        return this.propertyId;
    }
    get unitId() {
        return this.unitId;
    }
    get status() {
        return this.status;
    }
    get vendorId() {
        return this.vendorId;
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
    set name(name) {
        this.name = name;
    }
    set email(email) {
        this.email = email;
    }
    set phone(phone) {
        this.phone = phone;
    }
    set issue(issue) {
        this.issue = issue;
    }
    set image(image) {
        this.image = image;
    }       
    set propertyId(propertyId) {
        this.propertyId = propertyId;
    }
    set unitId(unitId) {
        this.unitId = unitId;
    }
    set status(status) {
        this.status = status;
    }
    set vendorId(vendorId) {
        this.vendorId = vendorId;
    }
    set createdAt(createdAt) {
        this.createdAt = createdAt;
    }
    set updatedAt(updatedAt) {
        this.updatedAt = updatedAt;
    }
}