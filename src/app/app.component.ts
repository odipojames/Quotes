import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  quotes = [
        new Quote(1,'Money  cant buy life '),
        new Quote(1,'Love has no bundry'),
          new Quote(1,'Nobody chose biological parents'),
        ]
  constructor(){


  }
}
