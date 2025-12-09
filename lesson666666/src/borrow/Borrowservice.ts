import { borrow } from "./Borrowmudel";

export default class borrowsrvice{
     async adduborrow(allditails:{bookid:string,userid:string}){
         const newBorrow=new borrow(allditails)
     return await newBorrow.save();
}
async getBorrowDetailsForUser(userId: string) {
    // מציאת כל ההשאות של המשתמש הספציפי
    const userBorrows = await borrow.find({ userid: userId }) 
      .populate('userid', 'name birthdate age') // הוספת הגיל הווירטואלי
      .populate('bookid','bookname publishername') 
      .exec();
    return userBorrows;
  }
}