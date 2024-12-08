import User from "./User.js";
import Teacher from "./Teacher.js";
import Student from "./Student.js";
import Course from "./Course.js";
import CourseManager from "./CourseManager.js";

const user = new User({ name: 'Dmitriy', email: 'dima@gmail.com' });
user.changePassword('qw12er34!Z', User.passwordStrength.STRONG);


const teacher = new Teacher({ name: 'Vladimir', email: 'vladimir@gmail.com' });
teacher.addSubject('HTML');
teacher.addSubject('CSS');
const teacher2 = new Teacher({ name: 'Anton', email: 'anton@gmail.com' });
teacher2.addSubject('Javascript');
const teacher3 = new Teacher({ name: 'Viktor', email: 'viktor@gmail.com' });
teacher3.addSubject('React');



const student = new Student({ name: 'Dmitriy', email: 'dmitri@gmail.com' });
const student2 = new Student({ name: 'Andrew', email: 'andrew@gmail.com' });
const student3 = new Student({ name: 'Maksim', email: 'maksim@gmail.com' });
const student4 = new Student({ name: 'Dasha', email: 'dasha@gmail.com' });

const course = new Course('React', teacher);
const course2 = new Course('HTML/CSS', teacher);
const course3 = new Course('JavaScript', teacher);



const courseManager = new CourseManager();
courseManager.addCourse(course);
courseManager.addCourse(course2);
courseManager.addCourse(course3);

courseManager.addUser(teacher);
courseManager.addUser(teacher2);
courseManager.addUser(teacher3);

courseManager.addUser(student);
courseManager.addUser(student2);
courseManager.addUser(student3);
courseManager.addUser(student4);

courseManager.assignTeacherToCourse(course2.id, teacher2.id);
courseManager.assignTeacherToCourse(course3.id, teacher3.id);

courseManager.enrollStudentToCourse(course.id, student.id);
courseManager.enrollStudentToCourse(course2.id, student2.id);
courseManager.enrollStudentToCourse(course3.id, student3.id);
courseManager.enrollStudentToCourse(course3.id, student4.id);
