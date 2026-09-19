export interface Author {
    id: number;
    name: string;
    email: string,
    // books: string[]
}

export interface Book {
    id: number;
    authorId: number;
    title: string;
    genre: string;
    releaseDate: string; 
}