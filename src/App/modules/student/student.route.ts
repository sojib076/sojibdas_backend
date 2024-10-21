
import express from 'express';
import userController from './student.controller';
const router = express.Router();

router.post('/admin-login', 
    userController.adminLogin
 );

 router.post('/create-blog',userController.createBlogPost );
 router.get('/get-blog',userController.getBlogPost );
 router.get('/singlepost/:id',userController.getBlogPostById );
 router.post('/add-skill',userController.addSkill );
 router.get('/get-skill',userController.getSkill );
router.post('/add-project',userController.addProject );
router.get('/get-project',userController.getProject );
router.get('/singleproject/:id',userController.getProjectById );


export const studentRouter = router;
