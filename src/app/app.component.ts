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


          new Quote(1,'Money  cant buy life ','by Bob Marley',new Date(2018,9,4)),
          new Quote(1,'Love has no bundry','by Prof. Akoto',new Date(2018,3,1)),
            new Quote(1,'Nobody chose biological parents','by Akothee',new Date(2018,3,14)),

        ]
  constructor(){


  }
}
