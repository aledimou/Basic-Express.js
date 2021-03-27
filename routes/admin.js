import express from "express"
import path from "path"



const router = express.Router()
const __dirname = path.resolve()



// /admin/add-product => GET
router.get("/add-product", (req, res)=>{
    res.sendFile(path.join(__dirname , 'views', 'add-product.html'));
})
// admin/add-product => POST
router.post("/add-product", (req, res)=>{
    console.log(req.body)
    res.redirect('/')
})

export default router

