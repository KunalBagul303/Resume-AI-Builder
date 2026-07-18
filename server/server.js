// import express from "express"; 
// import cors from "cors";
// import "dotenv/config";
// import connectDB from "./configs/db.js";
// import userRouter from "./routes/userRoutes.js";
// import resumeRouter from "./routes/resumeRoutes.js";
// import aiRouter from "./routes/aiRoutes.js";

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Database connection
// await connectDB()

// app.use(express.json())
// app.use(cors())

// app.get('/' , (req,res) => res.send("Server is live..."))
// app.use('/api/users' , userRouter)
// app.use('/api/resumes', resumeRouter)
// app.use('/api/ai' , aiRouter)

// app.listen(PORT,()=>{
//     console.log(`Server is running on port ${PORT}`);
// });

import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import resumeRouter from "./routes/resumeRoutes.js";
import aiRouter from "./routes/aiRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// CORS
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://resume-ai-builder-amber.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));

app.use(express.json());

// Database connection
await connectDB();

app.get("/", (req, res) => {
    res.send("Server is live...");
});

app.use("/api/users", userRouter);
app.use("/api/resumes", resumeRouter);
app.use("/api/ai", aiRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});