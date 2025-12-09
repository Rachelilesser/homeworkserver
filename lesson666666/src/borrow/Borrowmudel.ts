import mongoose,{Schema} from "mongoose";

export interface Iborrow{
    bookid:mongoose.Types.ObjectId
    userid:string,
    creatat?:Date
}

const borrowschema=new Schema<Iborrow>({
    bookid:{type:Schema.Types.ObjectId,required:true,ref:'Book'},
    userid:{type:String,required:true,ref:'User'}
},
{ 
  _id:true,
  timestamps: { createdAt: 'creatat', updatedAt: 'updatedAt' }
});
export const borrow = mongoose.model('Borrow', borrowschema);

