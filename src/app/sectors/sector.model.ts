import {Equipment} from '../equipments/equipment.model';

export interface Sector{
    id: number,
    name: string,
    description: string,
    equipments: Equipment
}