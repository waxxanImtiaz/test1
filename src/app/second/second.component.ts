import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  public test = 'Imtiaz';
  public myId = 'imtiaz1';
  public newId = 'imtiaz2';
  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return 'Hello mr';
  }

  run() {
    return 'This is run method';
  }
}
