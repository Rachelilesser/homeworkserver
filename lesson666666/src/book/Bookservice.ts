import { book } from "./Bookmudel";


export default class booksrvice{
     async addubook(allditails:{bookname:string,publishername:string}){
         const newbook=new book(allditails)
     return await newbook.save();
}

    async printbookditails(){
         return await book.find().exec();//מחזיר את כל המשתמשים כולל  כל הפרטים כולל משתנים וירטואלים 
}
}