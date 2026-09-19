import {Router, type Request, type Response} from 'express'
import {body, param, validationResult} from 'express-validator'

import {type Author } from '../types.js'

const router = Router()

let authors: Author[] =[];

router.get("/", (req: Request, res: Response) =>{
    res.status(200).json(authors);
});

router.get(
    "/:id",
    [param("id").isInt().withMessage("ID must be an Integer.")],
    (req: Request, res:Response) => {
        const errors = validationResult(req);
        console.log(errors, "errors from express-validator middleware");

        if (!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }

        const {id} = req.params
        const author = authors.find((author) => author.id === parseInt(id as string));

        if (!author){
            return res.status(404).send("User not found!.")
        }
        res.status(200).json(author);
    });

    router.post("/", [
        body("name").notEmpty().withMessage("Name is required"),
        body("email").isEmail().withMessage("Must be a valid email address")
    ],
    (req: Request, res: Response)=>{
        const errors = validationResult(req)
        if (!errors.isEmpty()){
            return res.status(400).json({errors: errors.array() });
        }
        
        const {name, email} = req.body;
        const newAuthor = {id: authors.length + 1, name, email };

        authors.push(newAuthor);
        res.status(200).json(newAuthor)
    }
    )
export default router
