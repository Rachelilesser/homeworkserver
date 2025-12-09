import { User } from "./Usermudel";

export default class Usersrvice{
     async adduser(allditails:{id:string,name:string,birthDate:Date}){
         const user=new User(allditails)
     return await user.save();
}

    async printuserditails(){
         return await User.find().exec();//מחזיר את כל המשתמשים כולל  כל הפרטים כולל משתנים וירטואלים 
}
}
// async getuserById(ID: string){
//     return await User.findById(ID).exec();
//   }
// }
