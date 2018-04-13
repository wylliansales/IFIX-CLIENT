import {Department} from '../departments/department.model';

export interface Attendant{
    id: number
    name: string
    email: string
    coordinator: boolean
    active: boolean
    departments: Department[]
}
