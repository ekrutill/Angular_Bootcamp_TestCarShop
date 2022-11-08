import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  name = 'Krutilla Eszter'; //Change this with your name :)

  constructor() {}

  ngOnInit(): void {}
}
