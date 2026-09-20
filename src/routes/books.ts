import {Router, type Request, type Response} from 'express'
import {body, param, validationResult} from 'express-validator'

import { type Book } from '../types.js'

let books: Book[] = [];
const router = Router()

router.get("/", (req: Request, res: Response)=>{
    res.status(200).json(books);
})

router.get(
    "/:id",
    [param("id").isInt().withMessage("ID must be an integer.")],
    (req: Request, res: Response) => {
        const errors = validationResult(req);
        console.log(errors, "errorsfrom express-validation middleware")

        if (!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }

        const {id} = req.params
        const book = books.find((book) => book.id === parseInt(id as string));

        if(!book){
            return res.status(400).send("User not found!")
        }
        res.status(200).json(book);
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

            const {authorId, title, genre, year} = req.body;
            const newBook = {id: books.length + 1, authorId, title, genre, year }

            books.push(newBook);
            res.status(200).json(newBook)
        }
        )

        export default router 
        

       