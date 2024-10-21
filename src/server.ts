import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import app from './app';
import config from './App/config/index';
import { studeSchema } from './App/modules/student/student.model';


// Import your Admin model

async function initAdmin() {
  try {
    // Check if an admin exists
    const existingAdmin = await studeSchema.Admin.findOne({ email: 'sojibdas123@gmail.com' });

    if (!existingAdmin) {
      // Hash the password '111111'
      const hashedPassword = await bcrypt.hash('111111', 10);

      // Create new admin
      const newAdmin = new studeSchema.Admin({
     
        email: 'sojibdas123@gmail.com',
        password: hashedPassword,
        role: 'admin'
      });

      await newAdmin.save();
      console.log('Admin created successfully.');
    } else {
      console.log('Admin already exists.');
    }
  } catch (error) {
    console.error('Error initializing admin:', error);
  }
}

async function main() {
  try {
   
    await mongoose.connect(config.DATABASE_URL as string);
 


    await initAdmin();


    app.listen(config.PORT, () => {
      console.log(`Example app listening on port ${config.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
