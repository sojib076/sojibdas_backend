import { Schema, model } from 'mongoose';

const adminSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'admin' 
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});


const Admin = model('Admin', adminSchema);




const blogPostSchema = new Schema({
    title: {
      type: String,
      required: true,
      trim: true,
    },
    excerpt: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    tags: {
      type: [String], 
      required: true,
    },
  }, {
    timestamps: true, 
  });
  
 
  const BlogPost = model('BlogPost', blogPostSchema);




 
  
  const skillSchema = new Schema({
    category: {
      type: String,
      required: [true, 'Path `category` is required.'],
      trim: true,
    },
    items: [
      {
        name: {
          type: String,
         
          trim: true,
        },
        icon: {
          type: String,
         
          trim: true,
        },
        
      },
    ]
      

       
     
    
   
  });
  
  const Skill = model('Skill', skillSchema);
  const projectSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tech: {
      type: [String],
      required: true,
    },
   
    liveLink: {
      type: String,
      required: true,
    },
    frontendRepo: {
      type: String,
      required: true,
    },
    backendRepo: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  });
  
  // Create a model from the schema
  const Project = model('Project', projectSchema);
  



  
export const studeSchema = {
    Admin,
    BlogPost,
    Skill,
    Project

}
