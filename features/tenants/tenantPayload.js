export class Tenant {
    constructor(data) {
        this.id = data.id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.email = data.email;
        this.phone = data.phone;
        this.ssn = data.ssn;
        this.driversLicense = data.driversLicense;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }
    get id() {
        return this.id;
    }   
    get firstName() {
        return this.firstName;
    }
    get lastName() {
        return this.lastName;
    }
    get email() {
        return this.email;
    }
    get phone() {
        return this.phone;
    }
    get ssn() {
        return this.ssn;
    }
    get driversLicense() {
        return this.driversLicense;
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
    set firstName(firstName) {
        this.firstName = firstName;
    }
    set lastName(lastName) {
        this.lastName = lastName;
    }
    set email(email) {
        this.email = email;
    }
    set phone(phone) {
        this.phone = phone;
    }
    set ssn(ssn) {
        this.ssn = ssn;
    }
    set driversLicense(driversLicense) {
        this.driversLicense = driversLicense;
    }
    set createdAt(createdAt) {
        this.createdAt = createdAt;
    }
    set updatedAt(updatedAt) {
        this.updatedAt = updatedAt;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}