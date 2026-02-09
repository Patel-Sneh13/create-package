// import { Router, type Request, type Response } from 'express'
// import { AppDataSource } from '../config/datasource.ts'
// import { User } from '../entity/User.ts'

// const router = Router()

// interface PhotoData {
//     name: string,
//     description: string,
//     views: number,
//     filename: string,
//     isPublished: boolean
// }
// interface UserData {
//     name: string,
//     email: string,
//     age : number
// }

// const userRepository = AppDataSource.getRepository(User)

// router.post('/', async (req: Request, res: Response) => {
//     try {
//         const { name, email, age } = req.body as UserData
//         const user = await userRepository
//         .createQueryBuilder()
//         .insert()
//         .into(User)
//         .values({
//             name
//         })
//         .execute()
//         res.status(201).json({ message: "User created successfully", id: user.identifiers[0]?.id })
//     } catch (err) {
//         res.status(500).json({ message: "User is not created" })
//         console.log('error', err)
//     }
// })

// router.get("/:id",async(req: Request, res: Response)=>{
//     const {id} = req.params
//     try{
//         const users = await userRepository
//         .createQueryBuilder()
//         .where("id = :id",{id : Number(id)})
//         .getOne()        

//         res.json(users)
//     }catch(err){
//         console.log('error',err)
//     }
// })

// router.delete('/:id', async (req : Request,res : Response)=>{
//     const {id} = req.params
//     try{
//         const userD = await userRepository
//         .createQueryBuilder()
//         .delete()
//         .from(User)
//         .where("id = :id",{id : Number(id)})
//         .execute()
        
//         if (userD.affected===0){
//             res.status(401).json({message : "User not found"})
//         }
//         res.status(200).json({message: "deleted" })
//     }catch(err){
//         console.log('error',err)
//     }
// })

// router.get("/", async (req: Request, res: Response) => {
//     try {
//         const users = await userRepository.find()
//         res.json(users)
//         res.status(200).json({ message: "All users are fetched" })
//     } catch (err) {
//         res.status(500).json({ message: "Error fetching in users" })
//         console.log('error', err)
//     }
// })


// export default router

import { Router } from "express";
import { createUser } from "../controller/userController.ts";

const router = Router();

router.post("/", createUser);

export default router;
