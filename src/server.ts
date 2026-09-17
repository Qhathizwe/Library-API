import express, {type Express} from "express"

const app: Express = express()
const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Server id running on http://localhost:${PORT}`)
})