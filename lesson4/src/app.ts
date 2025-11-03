import express from "express";
import courseRouter from "./course/course.router";
import daysRouter from "./weekDays/days.router";

const app = express();
app.use(express.json());

// ניתובים
app.use("/api/course", courseRouter);
app.use("/api/days", daysRouter);


export default app;
