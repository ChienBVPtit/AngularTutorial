import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CityDto } from '../models/CityDto';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-city-detail',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './city-detail.component.html',
  styleUrl: './city-detail.component.scss',
})
export class CityDetailComponent {
  @Input() city: CityDto;
  @Output() addCity = new EventEmitter<CityDto>();
  constructor() {
    this.city = {};
  }
  ngOnInit() {}
  handleAddCity() {
    this.addCity.emit({
      id: 999,
      name: 'TP. Can Tho',
      address: 'TP. Can Tho',
      urlPicture: 'cantho.png',
    });
  }
}
