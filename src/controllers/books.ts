import { Router, type Request, type Response } from 'express'
import { body, param, validationResult } from 'express-validator'

import { type Book } from '../types.js'


export let books: Book[] = [];

export const getAllBooks =
    (req: Request, res: Response) => {
        res.status(200).json(books);
    };

export const getBookById =
    (req: Request, res: Response) => {
        const { id } = req.params
        const book = books.find((book) => book.id === parseInt(id as string));

        if (!book) {
            return res.status(400).send("Book not found!")
        }
        res.status(200).json(book);
    }

export const createNewBook =
    (req: Request, res: Response) => {
        const { authorId, title, genre, year } = req.body;
        const newBook = { id: books.length + 1, authorId, title, genre, year }

        books.push(newBook);
        res.status(201).json(newBook)
    }

export const deleteBookById =
    (req: Request, res: Response) => {
        const { id } = req.params
        const index = books.findIndex((b) => b.id === parseInt(id as string))

        if (index === -1){
            return res.status(400).json({message: `book ${id} not found`})
        }
        books.splice(index, 1)

        res.status(200).json({message: "Books deleted successfully"})
    }

export const editBookById =
    (req: Request, res: Response) => {
        const { id } = req.params;
        const {authorId, title, genre, year} = req.body;

        const book = books.find((b)=> b.id === parseInt(id as string))

        if (!book){
            return res.status(404).json ({message: "the book is not found"})
        }

        book.authorId = name?? book.authorId;
        book.title = name?? book.title;
        book.genre = genre?? book.genre;
        book.year = genre?? book.year

        res.status(200).json({message: "book updated successfullly", book})

    }