import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() { }

  getCarsList(text: string): any {
    return text.length >= 3 ? [{id: 1, name: 'Субарик'}, {id: 2, name: 'Камри 30'}, {id: 3, name: 'Гелик'}] : [];
  }

  getCarDetail(id: number): any {
    return {
      model: 'Mocked model',
      brand: 'Mocked brand',
      yearOfIssue: 2009
    };
  }
}
