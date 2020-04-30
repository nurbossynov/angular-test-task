import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {fromEvent} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';
import {CarsService} from '../../services/cars.service';

@Component({
  selector: 'app-search',
  template: `
      <div class="search-form">
          <input #search>
          <ul>
              <li *ngFor="let car of cars" [routerLink]="['car', car.id]">{{car.name}}</li>
          </ul>
      </div>
  `,
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements AfterViewInit {
  cars: {id: number, name: string}[] = [];
  @ViewChild('search') input: ElementRef;

  constructor(private carsService: CarsService) { }

  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement, 'keyup').pipe(
      map((i: any) => i.currentTarget.value),
      debounceTime(1000)
    ).subscribe((text: string) => {
      this.cars = this.carsService.getCarsList(text);
    });
  }

}
