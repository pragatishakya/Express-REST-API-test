const express= require('express')
const path=require('path')
const uuid= require('uuid')
const app= express()

//Array 
const members=[{
    id:1,
    name:"John",
    email:"john@john.com",
    status:'active'
},{
    id:2,
    name:"Steve",
    email:"steve@steve.com",
    status:'inactive'
},{
    id:3,
    name:"mark",
    email:"mark@mark.com",
    status:'active'
}]

app.use(express.json())

//To get all the users
app.get("/showAllUser",(request, response)=>{
    response.status(200).json(members)
})

//To get the user who's id is mentioned in url
app.get("/showUser/:uid",(request,response)=>{
    const id=parseInt(request.params.uid)
    const user= members.filter(member=>member.id === id)
    user.length!==0 ? response.status(200).json(user) : response.status(200).json({message:"User not found"})
})

app.post('/addUser/',(req,res)=>{
    // const name= req.body.name
    // const email= req.body.email
    const {email,name,status}={...req.body} 
    console.log(name,email,status)
    members.push({id:uuid.v4(),name,email,status})
    res.status(200).json(members)
})

const PORT=3000
app.listen(PORT,()=>console.log(`Server is running ar ${PORT}`))

