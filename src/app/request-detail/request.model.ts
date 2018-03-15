import {Department} from '../departaments/department.model';
import {User} from '../users/user.model';
import {Attendant} from '../attendants/attendant.model';
import {Status} from '../status/status.model';
import {Equipment} from '../equipments/equipment.model';

export class Request{
    constructor(
        public id: number,
        public subject_mateer: string,
        public description: string,
        public equipaments: Equipment[],
        public department: Department,
        public user: User,
        public attendant: Attendant,
        public status: Status[],
        public finalized: boolean,
        public created_at: string
    ){}
}
