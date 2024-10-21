import { Request, Response } from "express";
import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

import config from "../../config";
import { studeSchema } from "./student.model";

const adminLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please provide email and password" });
    }

    const admin = await studeSchema.Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: "Invalid email or password" });
    }


    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }


    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      config.JWT_SECRET as string,
      { expiresIn: "72h" }
    );


    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {

    res.status(500).json({ message: "Server error", error });
  }
};


const createBlogPost = async (req: Request, res: Response) => {
  try {


    const blogPost = new studeSchema.BlogPost(
      req.body
    );

    await blogPost.save();

    res.status(201).json({ message: "Blog post created", blogPost });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }

};

const getBlogPost = async (req: Request, res: Response) => {
  try {
    const blogPost = await studeSchema.BlogPost.find();

    res.status(200).json({ blogPost });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};


const addSkill = async (req: Request, res: Response) => {
  const { category, items } = req.body;
  console.log(req.body);
  
  try {
    const findcategory = await studeSchema.Skill.findOne({ category });
    if (findcategory) {
      findcategory.items.push(items);
      await findcategory.save();
      res.status(201).json({ message: "Skill added", findcategory });
    }
    else {
      const skill = new studeSchema.Skill(req.body);
      await skill.save();
      res.status(201).json({ message: "Skill added", skill });
    }
  }
  catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error });
  }





};




const getSkill = async (req: Request, res: Response) => {
  try {
    const skills = await studeSchema.Skill.find();

    res.status(200).json({ skills });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
}






const userController = {
  adminLogin,
  createBlogPost,
  getBlogPost,
  addSkill,
  getSkill
};

export default userController;
