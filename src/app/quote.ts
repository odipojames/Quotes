export class Quote {
    public showDescription:boolean;
    constructor(public id:number, public name:string,public description:string,public seenDate:Date,public upvote:number,public downvote:number){
        this.showDescription=false;
        this.downvote=0;
         this.upvote=0;

    }
}
