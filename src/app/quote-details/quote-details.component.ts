import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isSeen= new EventEmitter<boolean>();

 quoteSeen(seen:boolean){
   this.isSeen.emit(seen);
 }

  constructor() { }

  addUpVotes(){
      this.quote.upvote += 1;
    }

    addDownVotes(){
      this.quote.downvote += 1;
    }

  ngOnInit() {
  }

}
