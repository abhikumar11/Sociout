
import Post from "../schema/Post.js";
import User from "../schema/User.js";
export const createPost =async(req,res)=>{
    try {
        const {userId,description,picturePath} = req.body;
        const user=await User.findById({userId});
        const newpost =new Post({
            userId,
            firstName:user.firstName,
            lastName:user.lastName,
            location:user.loaction,
            description,
            userPicturePath:user.picturePath,
            picturePath,
            likes:{},
            comments:[],
        })
        await newpost.save();
        const post =await Post.find();
        res.status(201).json(post);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
