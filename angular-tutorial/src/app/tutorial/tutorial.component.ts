import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CityComponent } from '../city/city.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatButton,
    CityComponent,
  ],
  templateUrl: './tutorial.component.html',
  styleUrl: './tutorial.component.scss',
})
export class TutorialComponent implements OnInit {
  @Input() backgroundColor: string;
  @Input() progressColor: string;
  @Input() progress: number;
  constructor() {
    this.backgroundColor = 'red';
    this.progressColor = 'blue';
    this.progress = 4;
  }
  ngOnChanges(changes: SimpleChanges) {
    if ('progress' in changes) {
      console.log('Thay doi progress');
      if (typeof changes['progress'].currentValue !== 'number') {
        const progress = Number(changes['progress'].currentValue);
        if (Number.isNaN(progress)) {
          this.progress = 0;
        } else {
          this.progress = progress;
        }
      }
    }
  }
  ngOnInit() {}
  handleChangeProgres(value: any) {
    console.log(value.target.value);
    this.progress = value.target.value;
  }
  authors = [
    {
      id: 1,
      age: 5,
      firstName: 'Flora',
      lastName: 'Twell',
      email: 'ftwell0@phoca.cz',
      gender: 'Female',
      ipAddress: '99.180.237.33',
    },
    {
      id: 2,
      age: 7,
      firstName: 'Priscella',
      lastName: 'Signe',
      email: 'psigne1@berkeley.edu',
      gender: 'Female',
      ipAddress: '183.243.228.65',
    },
    {
      id: 3,
      age: 15,
      firstName: 'Priscella',
      lastName: 'Signe',
      email: 'psigne1@berkeley.edu',
      gender: 'Male',
      ipAddress: '183.243.228.65',
    },
  ];
}
