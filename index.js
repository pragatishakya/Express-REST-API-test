const express= require('express')
const path=require('path')
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

const PORT=3000
app.listen(PORT,()=>console.log(`Server is running ar ${PORT}`))

