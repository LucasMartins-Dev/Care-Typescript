import appointmentServices from "../services/appointmentServices.js";
import {Request,Response,NextFunction} from "express"
import { number, string } from "joi";


async function newAppointment(req: Request, res: Response, next: NextFunction) {
  const { doctorId, userId, date, time } : {
    doctorId: number;
    userId: number;
    date: string;
    time: number;
  } = req.body;
  try {
    await appointmentServices.duplicateAppointment({userId, doctorId, date, time });
    await appointmentServices.createAppointment({ doctorId, userId, date, time });
    return res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

async function searchAppointmentbyDoctorName(req: Request, res: Response, next: NextFunction) {
  const name = req.params;
  try {
    await appointmentServices.searchDoctorName(name);
    return res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

async function searchAppointmentbySpecialty(req: Request, res: Response, next: NextFunction) {
  const { specialty } = req.params;
  try {
    await appointmentServices.searchSpecialty({ specialty });
    return res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

async function searchAppointmentbyCity(req: Request, res: Response, next: NextFunction) {
  const city = req.params;
  
  try {
    await appointmentServices.searchCity({ city });
    return res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

export default {
  searchAppointmentbyCity,
  searchAppointmentbyDoctorName,
  searchAppointmentbySpecialty,
  newAppointment,
};
