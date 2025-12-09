// import { book } from "./Bookmudel";
import bookservice from "./Bookservice";
import express, { Router,Request, Response } from 'express';

export const router=Router();
router.post('/',async(req :Request, res :Response)=>{
    const bookname=req.body.name;
    const publishername=req.body.publishername
    try{
        const service=new bookservice();
        const result= await service.addubook({bookname,publishername});
        res.status(201).json(result);
    }catch(err){
        res.status(500).json({message:'Internal server error',error:err});
    }
})

router.get('/',async(req :Request, res :Response)=>{
    const service=new bookservice();
    await service.printbookditails(); 
})
