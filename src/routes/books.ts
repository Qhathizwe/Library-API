import {Router, type Request, type Response} from 'express'
import {body, param, validationResult} from 'express-validator'

import { type Book } from '../types.js'

import { getAllBooks, getBookById, createNewBook } from '../controllers/books.js';
import { resolve } from 'url';

let books: Book[] = [];
const router = Router()

router.get("/", getAllBooks)

router.get(
    "/:id",
    [param("id").isInt().withMessage("ID must be an integer.")],
    (req: Request, res: Response) => {
        const errors = validationResult(req);
        console.log(errors, "errorsfrom express-validation middleware")

        if (!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }

        getBookById(req, res)
        
    });

    router.post(
        "/",[
            body("authorId").isInt().withMessage("Write authors ID"),
            body("title").notEmpty().withMessage("title is required."),
            body("genre").notEmpty().withMessage("Must specify the genre of the book"),
            body("year").notEmpty().withMessage("Specify the release year of book")
        ],
        (req: Request, res: Response) =>{

            const errors = validationResult(req);

            if (!errors.isEmpty()){
                return res.status(400).json({errors: errors.array() })
            }
           
            createNewBook(req, res)
        }
        )

        export default router 
        

       