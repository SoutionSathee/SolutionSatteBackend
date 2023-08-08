import Express from "express";
import { totalMISreport, totalEmployeeAndLead, totalLeadForParticularEmployee, dashboardForTotolNumberofSuccessFailedandPendingDocumentForAdmin, dashboardForTotolNumberSuccesFailedandPendingsofDocument,dashboardForTotolNumberofDocument,dashboardForTotolNumberofDocumentForAdmin } from "../Controllers/DashboardCtrl.js";
import { employeeTokenCheck } from "../Middleware/Tokencheck.js";
import { adminTokenCheck } from "../Middleware/TokencheckAdmin.js";

const app = Express();

const Route = Express.Router();

Route.get(
  "/getnumberofleadforallservice",
  employeeTokenCheck,
  dashboardForTotolNumberofDocument
);

Route.get(
  "/getnumberofleadforallserviceadmin", 
  adminTokenCheck, 
  dashboardForTotolNumberofDocumentForAdmin
)


Route.get(
  "/getnumberofsuccessfailedpendingleadforallserviceadmin", 
  adminTokenCheck, 
  dashboardForTotolNumberofSuccessFailedandPendingDocumentForAdmin
)




Route.get(
  "/getnumberofSuccerssFailedandPendingleadforallservice",
  employeeTokenCheck,
  dashboardForTotolNumberSuccesFailedandPendingsofDocument
);

Route.get("/getemployeenumberoflead", adminTokenCheck, totalLeadForParticularEmployee);
Route.get("/getmisreportofleads", adminTokenCheck, totalEmployeeAndLead);
Route.get("/getmistabledata",  totalMISreport);



export default Route;