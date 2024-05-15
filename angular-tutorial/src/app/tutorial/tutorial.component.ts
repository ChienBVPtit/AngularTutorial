import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

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
  ],
  templateUrl: './tutorial.component.html',
  styleUrl: './tutorial.component.scss',
})
export class TutorialComponent {
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
