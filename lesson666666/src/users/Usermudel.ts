import mongoose, {Schema} from "mongoose";

const userschema = new Schema({
    _id :{type: String, required: true, unique: true,alias :'userId'},
    name: {type: String, required: true},
    birthdate: {type: Date, required: true}
    // age:{type: Number, required: true}
},
{timestamps: true,
    _id: false, 
    toJSON:{ 
      virtuals: true,
      versionKey: false}
});
userschema.virtual('age').get(function() {
    const today:Date = new Date();
    const birthdate:Date = this.birthdate;
    let age:number = today.getFullYear() - birthdate.getFullYear();
    return age;
});
export const User = mongoose.model('User', userschema);