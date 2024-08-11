import Building from "../models/Building";
import EnergyMonitor from "../models/EnergyMonitor";
import RenewableEnergySource from "../models/RenewableEnergySource";
import HVACSystem from "../models/HVACSystem";
import LightingSystem from "../models/LightingSystem";
import UserEngagement from "../models/UserEngagement";
import CentralManagementPlatform from "../models/CentralManagementPlatform";
import DataAnalysis from "../models/DataAnalysis";

// Model Initializers
const energyMonitor = new EnergyMonitor(1000, "Hydro", 0);
const renewableEnergySource = new RenewableEnergySource(1000, "Solar", 120, 6000, 1000);
const hvacSystem = new HVACSystem(1000, "Class rooms", 21, "on", 300);
const lightingSystem = new LightingSystem(1000, "Class rooms", 7, "on", 50);

const building = new Building (1234, "Main Campus", "271 Yorkdale Blvd", 0,
    energyMonitor, renewableEnergySource, hvacSystem, lightingSystem);
    
const centralManagementPlatform = new CentralManagementPlatform(1000, "LCD", "Monthly", "Normal", building);
const user = new UserEngagement(1000, 2000);

const dataAnalysis = new DataAnalysis(1004, "Automatic Analysis", "Low energy consumption");

const executeCommand = () => {
    console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n"
            +"| Smart Campus Energy Management System |\n"
            +"=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n");
    console.log(`${centralManagementPlatform.building?.name} Building Energy Usage\n`);
    user.viewUsage(centralManagementPlatform);
    console.log(`Data has been received!\n`);
    console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n"
            +"| Analysis of Energy Consumption Data   |\n"
            +"=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n");
    dataAnalysis.analyzeData();
}


const objects = {user, centralManagementPlatform, dataAnalysis, executeCommand};
export default objects;