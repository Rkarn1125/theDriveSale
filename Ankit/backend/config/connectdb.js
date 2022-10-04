import mongoose from "mongoose";
//
//const connectDB = async (DATABASE_URL) => {
//  try {
//    const DB_OPTIONS = {
//      dbName: "Ankit"
//    }
//    await mongoose.connect(DATABASE_URL, DB_OPTIONS)
//   console.log('Connected Successfully...')
//  } catch (error) {
//    console.log(error)
//  }
//}

//export default connectDB


const DB = `mongodb+srv://rkarn:GavNVBV15lF2ntrW@cluster0.hxdtlyb.mongodb.net/mernstack?retryWrites=true&w=majority`;




mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));
//GavNVBV15lF2ntrW
//mongodb+srv://rkarn:<password>@cluster0.nqzhec6.mongodb.net/?retryWrites=true&w=majority