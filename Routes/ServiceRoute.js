import Express from "express";
import { CreateServicectrl, MyServicesctrl, getServiceController } from "../Controllers/ServiceCtrl.js";
import { employeeTokenCheck } from "../Middleware/Tokencheck.js";

const app = Express();

const Route = Express.Router();

Route.post("/createservice",CreateServicectrl);

Route.get("/Service",MyServicesctrl);

Route.get("/getservice", employeeTokenCheck, getServiceController);

export default Route