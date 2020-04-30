import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CarsService} from '../../services/cars.service';

@Component({
  selector: 'app-detail',
  template: `
    <p>
      model: {{carDetail.model}}<br>
      brand: {{carDetail.brand}}<br>
      year: {{carDetail.yearOfIssue}}
    </p>
  `,
})
export class DetailComponent implements OnInit {
  carDetail: {model: string, brand: string, yearOfIssue: number};

  constructor(private route: ActivatedRoute,
              private carsService: CarsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.carDetail = this.carsService.getCarDetail(params.id);
    });
  }

}
