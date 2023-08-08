import Express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import CustomerRoutes from "./Routes/EmpolyeeRoute.js";
import clientRoutes from "./Routes/ClientRoute.js";
import LeadRoutes from "./Routes/LeadRoute.js";
import ServiceRoutes from "./Routes/ServiceRoute.js";
import DashboardRoutes from "./Routes/DashboardRoute.js";
import CommentRoutes from "./Routes/CommentRoute.js";
import cors from "cors";
import config from "./config/Config.js";
import path from "path"
import { fileURLToPath } from "url";
import { dirname } from "path";
import Mailjet from "node-mailjet";


const mailJetClient = Mailjet.apiConnect(
  process.env.MAILAPIKEY,
  process.env.MAILSECREATKEY
);

//configure env
dotenv.config({ path: path.resolve("./config.env")});

// databse config
config();

//rest object
const app = Express();

// path config 
let fileName = fileURLToPath(import.meta.url);
let __dirname = dirname(fileName);


//middelwares
app.use(Express.urlencoded({ extended: true }));
app.use(cors());
app.use(Express.json());
app.use(morgan("dev"));
app.use(Express.static(path.join(__dirname, "public")));

//routes
app.use("/api/v1/crm", CustomerRoutes);
app.use("/api/v1/crm", clientRoutes);
app.use("/api/v1/crm", LeadRoutes);
app.use("/api/v1/crm", ServiceRoutes);
app.use("/api/v1/crm", DashboardRoutes);
app.use("/api/v1/crm", CommentRoutes);

app.post("/api/v1/crm/makeusersubscribe", async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(422).json({
        status: false,
        message: "Please provide all the required field properly",
      });
    }

    const subcribeUser = await mailJetClient
      .post("contact", { version: "v3" })
      .request({
        Name: name,
        Email: email,
      });


    if (subcribeUser.response.status === 201) {
      return res
        .status(201)
        .json({ status: true, message: "Your are subcribe to our newletters" });
    }
  } catch (error) {
    if (error.response.status === 400) {
      return res
        .status(422)
        .json({
          status: false,
          message: "Your are already subcribed to our newletters",
        });
    }
    return res
      .status(500)
      .json({ status: false, message: "something went wrong" });
  }
});

//PORT
const PORT = process.env.PORT || 5000;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on mode on port ${PORT}`
  );
});