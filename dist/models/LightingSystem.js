"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LightingSystem {
    constructor(id, area, lightLevel, status, energyConsumption) {
        this.id = id;
        this.area = area;
        this.lightLevel = lightLevel;
        this.status = status;
        this.energyConsumption = energyConsumption;
    }
    adjustLighting() {
        // TODO
    }
    detectMotion() {
        // TODO
    }
}
exports.default = LightingSystem;
