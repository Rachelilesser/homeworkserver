import  Express  from "express";
import { Course } from "./course.model";
import CourseService from "./course.service";



const router = Express.Router();
const courseService = new CourseService();

// Get all courses

router.get("/", (req, res) => {
    const courses = courseService.getAllCourses();
    res.json(courses);
});

router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const course = courseService.getCourseById(id);
    if (course) {
        res.json(course);
    } else {
        res.status(404).send("Course not found");
    }
});
// Create a new course
router.post("/", (req, res) => {
    const { name, weekHours, days } = req.body;
    const newCourse = courseService.addCourse(name, weekHours, days);
    res.status(201).json(newCourse);
});

router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const success = courseService.deleteCourse(id);
    if (success) {
        res.status(204).send();
    } else {
        res.status(404).send("Course not found");
    }
});

router.put("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name, weekHours, days } = req.body;
    const updatedCourse = courseService.updateCourse(id, name, weekHours, days);
    if (updatedCourse) {
        res.json(updatedCourse);
    } else {
        res.status(404).send("Course not found");
    }
});



export default router;