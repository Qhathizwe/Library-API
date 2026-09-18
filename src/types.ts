export interface Author {
    id: number;
    name: string;
    email: string
}

export interface Book {
    id: number;
    autherId: number;
    title: string;
    genre: string;
    releaseDate: string; 
}