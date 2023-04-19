import { Router } from "express";
import appointmentRoutes from "./appointmentsRoutes.js";
import doctorRoutes from "./doctorRoutes.js";
import userRoutes from "./userRoutes.js";


const routes = Router();
routes.use(userRoutes)
routes.use(doctorRoutes)
routes.use(appointmentRoutes)


export default routes;