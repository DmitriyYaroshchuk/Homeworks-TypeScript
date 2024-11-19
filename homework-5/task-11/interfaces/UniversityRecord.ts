import {Student} from "./Student";
import {Grades} from "../types/Grades";

export interface UniversityRecord {
    students: Record<string, Student>,
    grades: Record<string, Grades>,
}