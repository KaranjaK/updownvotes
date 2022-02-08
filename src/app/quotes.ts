export class Quotes {
    
    constructor(public id: number, public quote: string, public author: string,
        public submitter: string, public upvotes: number, public downvotes: number,
        public createdOn: Date, public favoriteQuote: boolean) {
    }
}