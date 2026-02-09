import express from "express";
// import userRoutes from "./routes/UserRoute.ts";
import { sayHello } from "@sneh_jarvis/hellopackage";

const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    const result = sayHello("Ghost")
    res.send(result)
})

app.listen(3000, () => {
  console.log(`http://localhost:${3000}`);
});

// app.use("/users", userRoutes);

export default app;
