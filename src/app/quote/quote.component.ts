import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
        new Quote(1,'Money  cant buy life ','by Bob Marley'),
        new Quote(1,'Love has no bundry','by Prof. Akoto'),
          new Quote(1,'Nobody chose biological parents','by Akothee'),
        ]
seenQuote(isSeen,index){
        if (isSeen){
            this.quotes.splice(index,1);
            }
          }
          toogleDetails(index){
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }
  constructor() { }

  ngOnInit() {
  }

}
