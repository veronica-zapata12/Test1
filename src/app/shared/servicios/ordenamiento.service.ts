import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class OrdenamientoService {

    constructor() {
    }

    ascendentemente(atributo: string): (a: any, b: any) => number {
        return (a: any, b: any) => {
            if (a[atributo] < b[atributo]) {
                return -1;
            }
            if (a[atributo] > b[atributo]) {
                return 1;
            }
            return 0;
        };
    }
}
