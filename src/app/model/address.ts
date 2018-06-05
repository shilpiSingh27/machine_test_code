import * as _ from 'lodash';

export class Address {
    public address1: string;
    public address2: string;
    public city: string;
    public postalCode: string;
    constructor(address?: {
        address1, address2, city, zipcode
    }) {
        if (address) {
            _.assignIn(this, address);
    }
}
}
