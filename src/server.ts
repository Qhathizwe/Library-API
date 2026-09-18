import bodyParser from "body-parser";
import express, {type Express} from "express"
import router from "./routes/authors.js";
import { loggerMiddleware } from "./middleware/logger.js";

const app: Express = express()
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(bodyParser.json());

app.use(loggerMiddleware);
app.use("/v1/authors", router)


app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})