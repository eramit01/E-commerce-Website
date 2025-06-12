// import express from 'express';
// const router=express.Router();
// export const signup=router.post('/signup',(req,res)=>{
    // res.status(200).json({message:" User Sign Up Karega Yaha par"});
// });
// export default router;
import express from 'express';
import { login, logout, signup } from '../controllers/auth.controller.js';
const router = express.Router();

router.get('/signup',signup );
router.get('/login',login );


router.get('/logout', logout);
export default router;