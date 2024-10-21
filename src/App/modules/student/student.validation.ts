import { z } from 'zod';
import validator from 'validator';

// UserName validation schema
const userNameValidationSchema = z.object({
  firstName: z.string()
    .max(2, { message: 'The max username is 2 characters' })
    .trim(),
  middleName: z.string(),
  lastName: z.string()
    .trim()
    .refine(value => validator.isAlpha(value), { message: 'Last name must contain only letters' }),
});

// Guardian validation schema
const guardianValidationSchema = z.object({
  fatherName: z.string().trim(),
  fatherOccupation: z.string().trim(),
  fatherContactNo: z.string().trim(),
  motherName: z.string().trim(),
  motherOccupation: z.string().trim(),
  motherContactNo: z.string().trim(),
});

// LocalGuardian validation schema
const localGuardianValidationSchema = z.object({
  name: z.string().trim(),
  occupation: z.string().trim(),
  contactNo: z.string().trim(),
  address: z.string().trim(),
});

// Student validation schema
const studentValidationSchema = z.object({
  id: z.string(),
  name: userNameValidationSchema,
  gender: z.enum(['male', 'female']),
  dateOfBirth: z.string().optional(),
  email: z.string().email({ message: 'Invalid email address' }),
  contactNo: z.string().trim(),
  emergencyContactNo: z.string().trim(),
  bloogGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
  presentAddress: z.string().trim(),
  permanentAddres: z.string().trim(),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).default('active'),
});

// Export the schemas for usage
export {
  studentValidationSchema
};

// TypeScript types for the validation schema

