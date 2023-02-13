const express= require('express')
const path=require('path')
const app= express()


const middleware= (req,res,next)=>{
    console.log("hi this is middleware")
    next()
}
app.use(middleware)

app.use(express.static(path.join(__dirname,'public')))

//CRUD 
app.get("/",middleware,(req,res)=>{                                  //READ
    res.send("<h1>Hi this is GET Request</h1>")
})

app.post("/",(req,res)=>{                                 //CREATE
    res.send("<h1>Hi this is POST Request</h1>")
})

app.put("/",(req,res)=>{                                   //UPDATE
    res.send("<h1>Hi this is PUT Request</h1>")
})

app.delete("/",(req,res)=>{                                 //DELETE
    res.send("<h1>Hi this is DELETE Request</h1>")
})


const PORT=3000
app.listen(PORT,()=>console.log(`Server is running ar ${PORT}`))

