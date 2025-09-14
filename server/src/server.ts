import express from 'express'
import type { Request, Response } from 'express'
import dbConnection from './config/dbConnection.ts'
import cors from 'cors'
import initRouters from './routers/index.ts'
import dotenv from 'dotenv'
dotenv.config()


const app = express()
const PORT = process.env.PORT || 7777

// Cấu hình CORS
app.use(
  cors({
    origin: ['http://localhost:3000', 'https://myfrontend.com'],
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  })
)
// Connection db (postgreSQL)
dbConnection()

// Middleware parse body JSON
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Router app
initRouters(app)

// Middleware handle error
app.use((err: any, req: Request, res: Response, next: any) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message || "Internal Server Error" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}/`)
})
