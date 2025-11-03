import { Course } from "../course/course.model";
import courseService from "../course/course.service";

//מוסיף יום בשבוע לקורס לפי מזהה הקורס
export default class daysService {
  private courseService: courseService;
    constructor() {
        this.courseService = new courseService();
    }

    addDayToCourse(courseId: number, day: string): Course | undefined {
        const course = this.courseService.getCourseById(courseId);
        if (course && !course.days.includes(day)) {
            course.days.push(day);
            return course;
        }
        return undefined;
    }

    
    removeDayFromCourse(courseId: number, day: string): Course | undefined {
        const course = this.courseService.getCourseById(courseId);
        if (course) {
            course.days = course.days.filter(d => d !== day);
            return course;
        }
        return undefined;
    }

   //מחזיר את כלהמערכת לפי ימים בשבוע זאת אומרת יום וכל שבוע בו
    getCoursesByDay(day: string): Course[] {
        return this.courseService.getAllCourses().filter(course => course.days.includes(day));
    }

    //מחזי ייום בשבוע וכל השעורים שבוםם
    getDaysWithCourses(): { [key: string]: Course[] } {
        const daysMap: { [key: string]: Course[] } = {};
        const allCourses = this.courseService.getAllCourses();
        allCourses.forEach(course => {
            course.days.forEach(day => {
                if (!daysMap[day]) {
                    daysMap[day] = [];
                }
                daysMap[day].push(course);
            });
        });
        return daysMap;
    }








    






}

