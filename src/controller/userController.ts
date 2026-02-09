import type { Request, Response } from "express";
import { AppDataSource } from "../config/datasource.ts";
import { User } from "../entity/User.ts";
import { isValidEmail } from "@sneh_jarvis/email-validator";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, isActive } = req.body;
    
    // ✅ Validate email using your package
    if (!isValidEmail(email)) {
      return res.status(400).json({ 
        error: "Invalid email format" 
      });
    }

    const repo = AppDataSource.getRepository(User);
    const user = repo.create({
      name,
      email,
      isActive: isActive ?? true
    });
    
    await repo.save(user);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ 
      error: err instanceof Error ? err.message : "unknown error"
    });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const repo = AppDataSource.getRepository(User);

    const users = await repo
      .createQueryBuilder("user")
      .getMany();

    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message:"unknown error"});
  }
};
