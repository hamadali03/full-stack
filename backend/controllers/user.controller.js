import UserDB from "../models/User.model.js"

 
 
const sign = async (req, res) => {
   const { name, email, password } = req.body;
 
   try {
     if (!name || !email || !password) {
       throw new Error("All field are Required");
     }
 
     const userAllreadyExit = await UserDB.findOne({ email });
     if (userAllreadyExit) {
       return res.status(400).json({ success: false, message: "User already Exit" });
     }
 
     const users = new UserDB({
       name,
       email, 
       password,
     });
 
     await users.save();
 
     const { ...userDetail } = users._doc;
     res.status(201).json({ success: true, message: "User create Successfully", user: userDetail });
   } catch (error) {
   //   console.error("Error in sign route:", error);
     return res.status(500).json({ success: false, message: error.message });
   }
 };
 

 const getUsers = async (req, res) => {
   try {
     const users = await UserDB.find();
 
     if (users.length === 0) {
       return res.status(404).json({ success: false, message: "No users found" });
     }
 
     return res.status(200).json({ success: true, users });
   } catch (error) {
     return res.status(500).json({ success: false, message: error.message });
   }
 };
 
 export { sign,getUsers };