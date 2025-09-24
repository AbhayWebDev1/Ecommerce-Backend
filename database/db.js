import mongoose from "mongoose";
 
  export const Connection = async (username, password) => { 
    // const URL = `mongodb+srv://${username}:${password}@ecommerce.umb6tqy.mongodb.net/?retryWrites=true&w=majority`;
    const URL = `mongodb+srv://${username}:${password}@ecommerce.9wahprf.mongodb.net/`
    try { 
        await mongoose.connect(URL , { useUnifiedTopology:true , useNewUrlParser:true });

        console.log('Database Connected successfully');
    } catch(error){
       console.log('Error while connecting with the database',error.message);
     }
}

export default Connection;





