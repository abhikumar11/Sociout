import User from "../schema/User.js";

export const getUser=async (req,res)=>{
    try {
        const {id}=req.params;
        const user=await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
export const getUserFriends=async (req,res)=>{
    try {
        const {id}=req.params;
        const user=await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
export const addRemoveFriend=async (req,res)=>{
    try {
        const {id}=req.params;
        const user=await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}