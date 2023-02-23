import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import User from "../schema/User.js";
export const register = async (req, res) => {
     try {
          const {
               firstName,
               lastName,
               email,
               password,
               picturePath,
               friends,
               loaction,
               occupation,
          } = req.body;
          const salt=await bcrypt.genSalt();
          const pass=await bcrypt.hash(password, salt);
          const newUser = new User({
            firstName,
            lastName,
            email,
            password:pass,
            picturePath,
            friends,
            loaction,
            occupation,
            viewedProfile:Math.floor(Math.random()*1000),
            impresions:Math.floor(Math.random()*1000),
          });
          const savedUser =await newUser.save();
          res.status(201).json(savedUser);
     } catch (error) {
        res.status(500).json({error:error.message});
     }
};
