import express from 'express'
import bodyParser from "body-parser"
import Admin from "./routes/admin.js"
import Shop from "./routes/shop.js"
import path from 'path'

const app = express();
const __dirname = path.resolve();

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

//routes
app.use('/admin',Admin)
app.use(Shop)


//404 serve
app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname ,'views','404.html'))
})

//server init
app.listen(5000, ()=>{
    console.log("Server running on 5000")
})