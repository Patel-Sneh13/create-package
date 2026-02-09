import express from "express";
import userRoutes from "./routes/UserRoute.ts";
import { sayHello } from "@sneh_jarvis/hellopackage";
import { isValidEmail } from "@sneh_jarvis/email-validator";
import { AppDataSource } from "./config/datasource.ts";

const app = express();
app.use(express.json());

// Initialize database
AppDataSource.initialize()
  .then(() => {
    console.log("✅ Database connected");
  })
  .catch((error) => console.log("❌ Database error:", error));

app.get("/", (req, res) => {
  const result = sayHello("Ghost");
  res.send(result);
});


app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log(`🚀 Server running at http://localhost:3000`);
});

export default app;