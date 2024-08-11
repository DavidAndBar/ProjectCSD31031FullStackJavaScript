"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RenewableEnergySource {
    constructor(id, type, output, storage, energyGeneration) {
        this.id = id;
        this.type = type;
        this.output = output;
        this.storage = storage;
        this.energyGeneration = energyGeneration;
    }
    monitorOutput() {
        // TODO
    }
    storeEnergy() {
        // TODO
    }
}
exports.default = RenewableEnergySource;
