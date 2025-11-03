import daysService from "./days.serice";
import { Course } from "../course/course.model";
import  Express  from "express";

const router = Express.Router();
const daysServiceInstance = new daysService();

// הוספת יום לקורס
router.post("/:courseId/days", (req, res) => {
    const courseId = parseInt(req.params.courseId);
    const { day } = req.body;
    const updatedCourse = daysServiceInstance.addDayToCourse(courseId, day);
    if (updatedCourse) {
        res.json(updatedCourse);
    } else {
        res.status(404).send("Course not found or day already exists");
    }
});

// הסרת יום מקורס
router.delete("/:courseId/days", (req, res) => {
    const courseId = parseInt(req.params.courseId);
    const { day } = req.body;
    const updatedCourse = daysServiceInstance.removeDayFromCourse(courseId, day);
    if (updatedCourse) {
        res.json(updatedCourse);
    } else {
        res.status(404).send("Course not found");
    }
});

// קבלת קורסים לפי יום בשבוע
router.get("/by-day/:day", (req, res) => {
    const day = req.params.day;
    const courses = daysServiceInstance.getCoursesByDay(day);
    res.json(courses);
});

// קבלת כל הימים עם הקורסים שלהם
router.get("/days-with-courses", (req, res) => {
    const daysWithCourses = daysServiceInstance.getDaysWithCourses();
    res.json(daysWithCourses);
});

export default router;