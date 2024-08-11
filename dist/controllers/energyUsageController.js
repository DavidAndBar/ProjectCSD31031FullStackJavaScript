"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Building_1 = __importDefault(require("../models/Building"));
const EnergyMonitor_1 = __importDefault(require("../models/EnergyMonitor"));
const RenewableEnergySource_1 = __importDefault(require("../models/RenewableEnergySource"));
const HVACSystem_1 = __importDefault(require("../models/HVACSystem"));
const LightingSystem_1 = __importDefault(require("../models/LightingSystem"));
const UserEngagement_1 = __importDefault(require("../models/UserEngagement"));
const CentralManagementPlatform_1 = __importDefault(require("../models/CentralManagementPlatform"));
const DataAnalysis_1 = __importDefault(require("../models/DataAnalysis"));
// Model Initializers
const energyMonitor = new EnergyMonitor_1.default(1000, "Hydro", 0);
const renewableEnergySource = new RenewableEnergySource_1.default(1000, "Solar", 120, 6000, 1000);
const hvacSystem = new HVACSystem_1.default(1000, "Class rooms", 21, "on", 300);
const lightingSystem = new LightingSystem_1.default(1000, "Class rooms", 7, "on", 50);
const building = new Building_1.default(1234, "Main Campus", "271 Yorkdale Blvd", 0, energyMonitor, renewableEnergySource, hvacSystem, lightingSystem);
const centralManagementPlatform = new CentralManagementPlatform_1.default(1000, "LCD", "Monthly", "Normal", building);
const user = new UserEngagement_1.default(1000, 2000);
const dataAnalysis = new DataAnalysis_1.default(1004, "Automatic Analysis", "Low energy consumption");
const executeCommand = () => {
    var _a;
    console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n"
        + "| Smart Campus Energy Management System |\n"
        + "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n");
    console.log(`${(_a = centralManagementPlatform.building) === null || _a === void 0 ? void 0 : _a.name} Building Energy Usage\n`);
    user.viewUsage(centralManagementPlatform);
    console.log(`Data has been received!\n`);
    console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n"
        + "| Analysis of Energy Consumption Data   |\n"
        + "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n");
    dataAnalysis.analyzeData();
};
const objects = { user, centralManagementPlatform, dataAnalysis, executeCommand };
exports.default = objects;
