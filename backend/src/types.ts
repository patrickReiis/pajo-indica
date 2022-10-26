export type MatchStatus = {
    percentage: number; // 0% - 100%
    book: Book; 
};


type Genre = 'romance'|'conto'|'crônica'|'poesia'|'suspense'|'fantasia'|'biografia e autobiografia'|'guerras'|'ficção científica'|'auto ajuda'|'negócios e administração'|'religião e espiritualidade'|'terror'|'outros';

export type Book = {
    title: string;
    genre: Genre;
    author: string;
    keywords: string[];
    imageBase64: string;
}

export type ErrorDb = {
    /**
     * Each item is a paragraph
     * @typeParam errorMsg - Each item is a paragraph
     */
    errorMsg: string[];
    code: 'target-not-found'|'object-is-not-book';
}
