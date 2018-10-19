import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
         new Quote(1,'Money  cant buy life ','by Bob Marley',new Date(2018,3,4),0,0),
         new Quote(1,'Love has no bundry','by Prof. Akoto',new Date(2018,3,1),0,0),
          new Quote(1,'Nobody chose biological parents','by Akothee',new Date(2017,3,14),0,0),
        ]
seenQuote(isSeen,index){
        if (isSeen){
          let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)
          if(toDelete){

            this.quotes.splice(index,1);
            }
          }
        }
          toogleDetails(index){
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }
    public quote: Quote = new Quote(0, '', '',new Date(),0,0)
    addNewQuote(quote: Quote)
    addNewQuote(quote){
            let quoteLength = this.quotes.length;
            quote.id=quoteLength+1;
            quote.completeDate = new Date(quote.completeDate)
            this.quotes.push(quote)
      this.quote = new Quote(0, '', '',new Date(),0,0);
        }

  constructor() { }

  ngOnInit() {
  }

}
