import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"

export const Signup = async (req,res)=>{
    try{
     const { fullname, email, password } =req.body;
     const user= await User.findOne({ email })
     if(user){
        return res.status(400).json({message: "User Already Exists"})
     }
 
     const hashPassword = await bcryptjs.hash(password, 10)
     const creadtedUser = new User({
        fullname: fullname,
        email: email,
        password: hashPassword
     })
     await creadtedUser.save();
     res.status(201).json({message: "User Created Successfully",
         user:{
       _id: creadtedUser.id,
       fullname: creadtedUser.fullname,
       email: creadtedUser.email
     }

     })
    }
    catch(error){
      console.log("error" + error.message)
      res.status(500).json({message: "Internal Server Error"})
    }
}

export const login = async (req,res)=>{
    try{
      const { email, password} = req.body;
      const user =  await User.findOne({email})
      const isMatch =await bcryptjs.compare(password, user.password)
      if(!user || !isMatch){
        return res.status(400).json({message: "Invalid username or password"})
      }else{
        res.status(200).json({message: "User login successfully", user:{
            _id: user.id,
            fullname: user.fullname,
            email: user.email
        }

        })
      }
    }
    catch(error){
     console.log("error" + error.message)
     res.status(500).json({message: "Internal Server Error"})
    }
}