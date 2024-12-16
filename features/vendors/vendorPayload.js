export class Vendor {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.address = data.address;
        this.contact = data.contact;
        this.email = data.email;
        this.status = data.status;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }
}
