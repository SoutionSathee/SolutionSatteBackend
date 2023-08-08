import Express from "express";
import {
  Addclientctrl,
  EditClintsctrl,
  GetAllClintsctrl,
  MyClintsctrl,
  SendMAilTOAllctrl,
  getClientById,
  getClientBymobile,
  getClientForCurrentUser
} from "../Controllers/Clientctrl.js";
import { employeeTokenCheck } from "../Middleware/Tokencheck.js";
import { adminTokenCheck } from "../Middleware/TokencheckAdmin.js";

const app = Express();

const Route = Express.Router();

Route.post("/addclient", employeeTokenCheck, Addclientctrl);

Route.post("/sendmail", SendMAilTOAllctrl);

Route.get("/getallclient", adminTokenCheck  ,GetAllClintsctrl);

Route.get("/myclient/:id", MyClintsctrl);

Route.patch("/myclient/:id", EditClintsctrl);

Route.get("/getclientforemployee", employeeTokenCheck, getClientForCurrentUser);

Route.get("/getclientbyid", employeeTokenCheck, getClientById);

Route.get("/getclientforadminbyId", adminTokenCheck, getClientById);

Route.get("/getclientbyNumber", employeeTokenCheck, getClientBymobile);

export default Route;