export class Quotes {
    toBeTruthy(): any {
      throw new Error('Method not implemented.');
    }

    public upvotes: number;
    public downvotes: number;
    
    constructor(public quote: string, public author: string,
        public submitter: string, public createdOn: Date) {
            this.upvotes = 0
            this.downvotes = 0
    }
}