import { CityDto } from './../models/CityDto';
import { Component } from '@angular/core';
import { CityDetailComponent } from '../city-detail/city-detail.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [CityDetailComponent, NgFor],
  templateUrl: './city.component.html',
  styleUrl: './city.component.scss',
})
export class CityComponent {
  cities = [
    {
      id: 1,
      name: 'TP. Ha Noi',
      address: 'Ha Noi',
      urlPicture: 'hanoi.png',
    },
    {
      id: 2,
      name: 'TP. HCM',
      address: 'TP. HCM',
      urlPicture: 'hanoi.png',
    },
    {
      id: 3,
      name: 'TP. Hai Phong',
      address: 'TP. Hai Phong',
      urlPicture: 'hanoi.png',
    },
  ];

  handleAddCity(city: any) {
    this.cities.push(city);
  }
}
