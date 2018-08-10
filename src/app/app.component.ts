import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  quotes: string[];

  constructor(){

    this.quotes = ["Money cant buy life","Love has no boundry","Nobody chose their biological parents"];
  }
}
