import { number, object, string, z } from "zod";

export const EmployeeSchema = object({
  id: string(),
  userId: string(),
  name: string(),
  job: string(),
  email: string(),
  image: string().optional(),
  createdAt: number(),
});

export const GetEmployeeByIdSchema = EmployeeSchema.pick({
  id: true,
});

export const CreateEmployeeSchema = object({
  name: string().min(1, "Name is required"),
  job: string().min(1, "Job is required"),
  email: string().email("Invalid email"),
  image: string().optional(),
});

export const DeleteEmployeeSchema = object({
  ids: string().array(),
});

export const UpdateEmployeeSchema = object({
  id: string(),
  name: string().optional(),
  job: string().optional(),
  email: string().optional(),
  image: string().optional(),
});

export type EmployeeSchema = z.infer<typeof EmployeeSchema>;
export type GetEmployeeByIdSchema = z.infer<typeof GetEmployeeByIdSchema>;
export type UpdateEmployeeSchema = z.infer<typeof UpdateEmployeeSchema>;
export type CreateEmployeeSchema = z.infer<typeof CreateEmployeeSchema>;
export type DeleteEmployeeSchema = z.infer<typeof DeleteEmployeeSchema>;
