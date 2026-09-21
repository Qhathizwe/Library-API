import { Router, type Request, type Response } from 'express'
import { body, param, validationResult } from 'express-validator'

import { type Author } from '../types.js'
import { authors } from '../controllers/authors.js'
import { deleteAutherById } from '../controllers/authors.js'

import { getAllAuthors, getAuthorById, createNewAuthor, getBooksByAutherId, updateAutherById } from '../controllers/authors.js'

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
    (req: Request, res: Response) => {
        const errors = validationResult(req)

        if (!errors.isEmpty) {
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
    (req: Request, res: Response) => {
        const errors = validationResult(req)

        if (!errors.isEmpty) {
            console.log(errors, "request")
            return res.status(400).json({ errors: errors.array() })
        }

        createNewAuthor(req, res)
    }

);

router.put("/:id",
    [
        body("name").optional().notEmpty().withMessage("authorId must be an integer"),
        body("email").optional().isEmail().withMessage("tite must be there"),
    ],
    (req: Request, res: Response) => {
        const errors = validationResult(req)
          if (!errors.isEmpty) {
            
            return res.status(400).json({ errors: errors.array() })
        }
        updateAutherById(req, res)
    })

router.delete("/:id",
    [param("id").isInt().withMessage("ID must be an integer"),],
    (req: Request, res: Response ) =>{
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }
        deleteAutherById(req, res)
    }
)

export default router

