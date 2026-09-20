export interface Author {
    id: number;
    name: string;
    email: string,
}

export interface Book {
    id: number;
    authorId: number;
    title: string;
    genre: string;
    year: string; 
}