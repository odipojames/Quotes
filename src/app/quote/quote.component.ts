import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
        new Quote(1,'Money  cant buy life '),
        new Quote(1,'Love has no bundry'),
          new Quote(1,'Nobody chose biological parents'),
        ]

  constructor() { }

  ngOnInit() {
  }

}
