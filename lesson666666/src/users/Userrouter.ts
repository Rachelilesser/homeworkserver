import Usersrvice from "./Userservice";
import { User } from "./Usermudel";
import express, { Router,Request, Response } from 'express';
import { request } from "http";
export const router=Router();
// const userservice=new Usersrvice();
router.post('/',async(req :Request, res :Response)=>{
    const id=req.body.id;
    const name=req.body.name;
    const birthdate=new Date(req.body.birthdate)
    try{
        const userservice=new Usersrvice();
        const result= await userservice.adduser({id,name,birthDate:birthdate});
        res.status(201).json(result);
    }catch(err){
        res.status(500).json({message:`error`});
    }
})

router.get('/',async(req :Request, res :Response)=>{
    const userservice=new Usersrvice();
    await userservice.printuserditails(); 
})