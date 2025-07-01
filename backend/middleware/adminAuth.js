import jwt from 'jsonwebtoken'

const adminAuth = async (req,res,next) => {
    try {
        const {token} = req.headers;
        if(!token){
            return res.status(400).json({success:false,message:"Not authorized login again"})
        }
        const tokenDecode = jwt.verify(token,process.env.JWT_SECRET);
        if(tokenDecode !== process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
            return res.status(400).json({success:false,message:"Not authorized login again"})
        }
        next()
    } catch (error) {
        console.log("Error in adminAuth.js");
        res.status(500).json({success:false,message:error.message})
    }
}

export default adminAuth;