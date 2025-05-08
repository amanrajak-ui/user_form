import {User} from '../Models/User.js'
export const userRegister =async (req,res)=>{
    //  console.log("getting the data from body",req.body);
    
    // hm yaha code krenge database me data dalne ke liye
  
    try {
      let user = await User.create(req.body)
      res.json({message:"user create successfully", Newuser:user,success:true});
  
      
    } catch (error) {
  
      res.json({message:error.message})
      
    }
  
  
  
  
  
  
  
  
  
     
  
  }