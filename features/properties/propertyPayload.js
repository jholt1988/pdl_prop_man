export class Property {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.address = data.address;
        this.numUnits = data.numUnits;
        this.units = data.units;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
        
    }

    get id() {
        return this.id;
    }   
    get name() {
        return this.name;
    }
    get address() {
        return this.address;
    }
    get numUnits() {
        return this.numUnits;
    }
    get units() {
        return this.units;
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
    set address(address) {
        this.address = address;
    }
    set numUnits(numUnits) {
        this.numUnits = numUnits;
    }
    set units(units) {
        this.units = units;
    }

}