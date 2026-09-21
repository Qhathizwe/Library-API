import { type Response, type Request, } from "express";
import { param, validationResult } from 'express-validator'
import { type Author } from '../types.js'

import { books } from '../controllers/books.js'

export let authors: Author[] = [];

export const getAllAuthors =
    (req: Request, res: Response) => {
        res.status(200).json(authors);
    };

export const getAuthorById =
    (req: Request, res: Response) => {
        const { id } = req.params
        const author = authors.find((author) => author.id === parseInt(id as string));

        if (!author) {
            return res.status(404).send("Auther not found!.")
        }
        res.status(200).json(author);
    }

export const getBooksByAutherId =
    (req: Request, res: Response) => {
        const { id } = req.params
        const author = authors.find((author) => author.id === parseInt(id as string));

        const authorBooks = books.filter((book) => book.authorId === author?.id);
        if (!authorBooks) {
            return res.status(404).send("Auther's Books are not found!.")
        }
          res.status(200).json({
        ...author,
        books: authorBooks
    });
    }


export const createNewAuthor =
    (req: Request, res: Response) => {
        const { name, email } = req.body;
        const newAuthor = { id: authors.length + 1, name, email }

        authors.push(newAuthor)
        res.status(200).json(newAuthor)
    }
