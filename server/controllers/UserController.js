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
        const friend=await Promise.all(user.friends.map((id)=>User.findById(id)));
        const formatted=friend.map(({_id,firstName,lastName,occupation,location,picturePath})=>{
            return {_id,firstName,lastName,occupation,location,picturePath};
        });
        res.status(200).json(formatted);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
export const addRemoveFriend=async (req,res)=>{
    try {
        const {id,friendid}=req.params;
        const user=await User.findById(id);
        const friend=await User.findById(friendid);
        if(user.friends.includes(friendid)){
            user.friends=user.friends.filter((id)=>id!==friendid);
            friend.friends=friend.friends.filter((id)=>id!==id);
        }
        else{
            user.friends.push(friendid);
            friend.friends.push(id);
        }
        await user.save();
        await friend.save();

        const formatted=friend.map(({_id,firstName,lastName,occupation,location,picturePath})=>{
            return {_id,firstName,lastName,occupation,location,picturePath};
        });
        res.status(200).json(formatted);

    } catch (error) {
        res.status(404).json({message: error.message});
    }
}