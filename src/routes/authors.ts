import { Router, type Request, type Response } from 'express'
import { body, param, validationResult } from 'express-validator'

import { type Author } from '../types.js'

import { getAllAuthors, getAuthorById, createNewAuthor, getBooksByAutherId } from '../controllers/authors.js'

const router = Router()


router.get("/", getAllAuthors);

router.get("/:id",
    [param("id").isInt().withMessage("ID must be an Integer.")],
    (req: Request, res: Response) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        getAuthorById(req, res)
    }

    
);

router.get(
    "/:id/books", 
    [param("id").isInt().withMessage("ID must be an Integer.")],
    (req: Request, res: Response)=>{
        const errors = validationResult(req)

        if (!errors.isEmpty){
           return res.status(400).json({ errors: errors.array() })  
        }
        
        getBooksByAutherId(req, res)

    }
)

router.post("/", 
    [
        body("name").notEmpty().withMessage("authorId must be an integer"),
        body("email").isEmail().withMessage("tite must be there"),
      
    ],
    (req: Request, res: Response)=>{
        const errors = validationResult(req)

        if (!errors.isEmpty){
            console.log(errors, "request")
            return res.status(400).json({errors: errors.array() })
        }

        createNewAuthor(req, res)
    }
    
 );
export default router

