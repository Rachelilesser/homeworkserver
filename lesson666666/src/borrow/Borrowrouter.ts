import { borrow } from './Borrowmudel';
import borrowservice from "./Borrowservice";
import express, { Router,Request, Response } from 'express';
// import Usersrvice from './Borrowservice';

export const router=Router();
router.post('/',async(req :Request, res :Response)=>{
    const bookid=req.body.bookid;
    const userid=req.body.userid;
    try{
        const borrowservices=new borrowservice();
        const result= await borrowservices.adduborrow({bookid,userid});
        res.status(201).json(result);
    }catch(err){
        res.status(500).json({message:'Internal server error',error:err});
    }
})
router.get('/borrowuser/:userId', async (req: Request, res: Response) => {
    try {
        const borrowservices=new borrowservice(); 
        const userId = req.params.userId;
        const borrows = await borrowservices.getBorrowDetailsForUser(userId)
        
        if (!borrows) {
           return res.status(404).json({ message: `No borrows found for user ID: ${userId}` });
        }
        
        res.json(borrows);
    } catch (error) {
       console.error("Error fetching borrow details:", error);
       res.status(500).json({ error: 'Internal server error while fetching borrow details.' });
    }
});


