import { number, object, string, z } from "zod";

export const UserSchema = object({
  id: string(),
  email: string(),
  name: string().optional(),
  image: string().optional(),
  createdAt: number(),
});

export const GetUserByIdSchema = UserSchema.pick({
  id: true,
});

export const GetUserByEmailSchema = UserSchema.pick({
  email: true,
});

export const CreateUserSchema = UserSchema.pick({
  email: true,
  name: true,
  image: true,
});

export const UpdateUserSchema = object({
  id: string(),
  name: string().optional(),
  image: string().optional(),
});

export type UserSchema = z.infer<typeof UserSchema>;
export type UpdateUserSchema = z.infer<typeof UpdateUserSchema>;
export type GetUserByIdSchema = z.infer<typeof GetUserByIdSchema>;
export type GetUserByEmailSchema = z.infer<typeof GetUserByEmailSchema>;
export type CreateUserSchema = z.infer<typeof CreateUserSchema>;
