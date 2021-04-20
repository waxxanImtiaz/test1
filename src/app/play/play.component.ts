import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  public totalColors = ['blue', 'green', 'red'];
  textColor = 'red';
  hasDanger = false;
  display = false;
  public name = 1;
  public user = 'Imtiaz';
  public headingId = 'headingId';
  public theClass = false;
  // public applyClasses = {
  //   danger: !this.theClass,
  //   anmol: this.theClass,
  //   sepcial: this.theClass
  // };
  constructor() { }

  ngOnInit() {
    console.log("init is called");
  }
  logMessage(value){
    console.log(value);
  }
  changeText(value) {
    this.name = value*2;
  }
}
