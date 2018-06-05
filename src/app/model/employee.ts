import * as _ from 'lodash';
import { Address } from './address';

export class Employee {
    'id': number;
    'name': string;
    'phone': string;
    'address': Address;

    constructor(employee?: {
        id, name, phone, address
    }) {
        if (employee) {
            _.assignIn(this, employee);
        }
    }
}
