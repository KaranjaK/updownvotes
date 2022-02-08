export class Quotes {

    showQuoteDetails: boolean;
    constructor(public quote: string, public author: string,
        public submitter: string, public upvotes: number, public downvotes: number,
        public createdOn: Date, public favoriteQuite: boolean) {
        this.showQuoteDetails = false;
    }
}