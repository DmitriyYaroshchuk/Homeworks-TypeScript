import User from "./classes/User.js";
import PasswordStrength from "./enums/PasswordStrength";
import Teacher from "./classes/Teacher.js";
import Student from "./classes/Student.js";
import Course from "./classes/Course.js";
import CourseManager from "./classes/CourseManager.js";

const user : User = new User({ name : 'user', email : 'user@example.com' });
user.changePassword('www@bn753QZ!', PasswordStrength.MEDIUM);

const teacher_1 : Teacher = new Teacher({ name : 'Vladimir', email : 'vladimir@gmail.com' });
const teacher_2 : Teacher = new Teacher({ name : 'Anton', email : 'anton@gmail.com' });
const teacher_3 : Teacher = new Teacher({ name : 'Petr', email : 'petr@gmail.com' });

teacher_1.addSubject('HTML');
teacher_1.addSubject('CSS');
teacher_2.addSubject('JavaScript');
teacher_3.addSubject('React');

const student_1 : Student = new Student({ name : 'Dmitriy', email : 'dmitriy@gmail.com' });
const student_2 : Student = new Student({ name : 'Andrew', email : 'andrew@gmail.com' });
const student_3 : Student = new Student({ name : 'Maks', email : 'maks@gmail.com' });
const student_4 : Student = new Student({ name : 'German', email : 'german@gmail.com' });
const student_5 : Student = new Student({ name : 'Dasha', email : 'dasha@gmail.com' });
const student_6 : Student = new Student({ name : 'Sonya', email : 'sonya@gmail.com' });

const course_1 : Course = new Course('HTML/CSS', teacher_1);
const course_2 : Course = new Course('JavaScript', teacher_1);
const course_3 : Course = new Course('React', teacher_1);



const courseManager : CourseManager = new CourseManager();
courseManager.addUser(teacher_1);
courseManager.addUser(teacher_2);
courseManager.addUser(teacher_3);

courseManager.addUser(student_1);
courseManager.addUser(student_2);
courseManager.addUser(student_3);
courseManager.addUser(student_4);
courseManager.addUser(student_5);
courseManager.addUser(student_6);

courseManager.addCourse(course_1);
courseManager.addCourse(course_2);
courseManager.addCourse(course_3);

courseManager.assignTeacherToCourse(course_1.id, teacher_1.id);
courseManager.assignTeacherToCourse(course_2.id, teacher_2.id);
courseManager.assignTeacherToCourse(course_3.id, teacher_3.id);

courseManager.enrollStudentToCourse(course_1.id, student_1.id);
courseManager.enrollStudentToCourse(course_1.id, student_2.id);
courseManager.enrollStudentToCourse(course_2.id, student_3.id);
courseManager.enrollStudentToCourse(course_2.id, student_4.id);
courseManager.enrollStudentToCourse(course_3.id, student_5.id);
courseManager.enrollStudentToCourse(course_3.id, student_6.id);
