
import express from 'express';
import userController from './student.controller';
const router = express.Router();

router.post('/admin-login', 
    userController.adminLogin
 );

 router.post('/create-blog',userController.createBlogPost );
 router.get('/get-blog',userController.getBlogPost );
 router.post('/add-skill',userController.addSkill );
 router.get('/get-skill',userController.getSkill );


export const studentRouter = router;
