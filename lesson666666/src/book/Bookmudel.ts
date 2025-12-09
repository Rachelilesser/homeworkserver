import mongoose,{Schema} from "mongoose";

export interface IBook{
    bookname:string,
    publishername:string
}
const bookschema=new Schema<IBook>({
    bookname:{type:String,required:true},
    publishername:{type:String,required:true}
},
{
    versionKey:false,
    _id:true
}
);

export const book = mongoose.model('Book', bookschema);
