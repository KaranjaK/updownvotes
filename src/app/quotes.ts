export class Quotes {

    public upvotes: number;
    public downvotes: number;
    public createdOn: Date;
    
    constructor(public quote: string, public author: string,
        public submitter: string) {
            this.upvotes = 0
            this.downvotes = 0
            this.createdOn = new Date()
    }
}