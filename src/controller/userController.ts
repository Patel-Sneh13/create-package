import type { Request, Response } from "express";
import { AppDataSource } from "../config/datasource.ts";
import { User } from "../entity/User.ts";

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
