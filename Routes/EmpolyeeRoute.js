import Express from "express";
import {  addemployee, employeelogin, getEmpolyeeID, getEmpolyeeIDforadmin, getEmpolyeebyNum, getallemployee, updateempolyeedata, updatepass } from "../Controllers/Empolyeectrls.js";
import { employeeTokenCheck } from "../Middleware/Tokencheck.js";
import { adminTokenCheck } from "../Middleware/TokencheckAdmin.js";


const app = Express();

const route = Express.Router();

route.get('/getallemployee', getallemployee);

route.get('/getemployeebyIdNum',adminTokenCheck, getEmpolyeebyNum);

route.get('/getEmpolyeeID',employeeTokenCheck, getEmpolyeeID);

route.get('/getEmpolyeeIDforadmin/:id', getEmpolyeeIDforadmin);
route.post('/addemployee',addemployee);

route.patch('/updatepassword/:id',updatepass);

route.patch('/updateempolyee/:id',updateempolyeedata);

route.post('/employeelogin',employeelogin);



export default route