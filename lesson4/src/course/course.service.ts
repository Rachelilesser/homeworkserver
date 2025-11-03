import { Course } from "./course.model";


export  default class courseService {
  private courses: Course[] = [
    new Course(1, "Math", 5, ["Sunday", "Tuesday"]),
    new Course(2, "Science", 4, ["Monday", "Wednesday"]),
    new Course(3, "History", 3, ["Thursday", "Friday"])
  ];

    getAllCourses(): Course[] { 
        return this.courses;
    
    }

    getCourseById(id: number): Course | undefined {
        return this.courses.find(course => course.id === id);
    }

    addCourse(name: string, weekHours: number, days: string[]): Course {
        const newId = this.courses.length > 0 ? this.courses[this.courses.length - 1].id + 1 : 1;
        const newCourse = new Course(newId, name, weekHours, days);
        this.courses.push(newCourse);
        return newCourse;
    }   

    deleteCourse(id: number): boolean {
        const index = this.courses.findIndex(course => course.id === id);
        if (index !== -1) {
            this.courses.splice(index, 1);
            return true;
        }   
        return false;
    }
      updateCourse(id: number, name: string, weekHours: number, days: string[]): Course | undefined {
        const course = this.getCourseById(id);          
        if (course) {
            course.name = name; 
            course.weekHours = weekHours;
            course.days = days;
            return course;
        }           
        return undefined;   
    }


}

    