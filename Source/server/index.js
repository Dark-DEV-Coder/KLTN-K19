// lib & middle
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import YAML from 'yamljs'
// import { Server } from 'socket.io'
import session from "express-session"
import swaggerUi from 'swagger-ui-express'
import { verifyAdmin, verifyToken } from "./middleware/verify.js"
// import { clearTokenList } from "./service/jwt.js"
// import { NOTIFY_EVENT, SESSION_AGE } from "./constant.js"
// import { addSocketSession, handleDisconnect, sendNotify } from "./socket/handle.js"
import helmet from "helmet"
import morgan from "morgan"
import compression from "compression"
import { checkOverload } from "./helper/checkConnectdb.js"
import { SESSION_AGE } from "./constant.js"
import adminRoute from "./router/admin/index.js"

const swaggerDocument = YAML.load('./swagger.yaml')

// dotevn config
dotenv.config()

/**
 * Connect MongoDB
 */
mongoose.connect(process.env.MONGO_URI, { maxPoolSize: 100 })
const db = mongoose.connection
db.on('error', () => console.log('MongoDB connection error.'))
db.once('open', () => {
    console.log('Connected to MongoDB successfully.')
})
checkOverload()

const PORT = process.env.PORT || 8000
const DEV = process.env.DEV == 1
export const TOKEN_LIST = {}
export const TOKEN_BLACKLIST = {}
export const SOCKET_SESSIONS = []
const app = express()

const store = new session.MemoryStore()

app.use(session({
    secret: "hotrodaotao",
    cookie: { maxAge: SESSION_AGE },
    saveUninitialized: false,
    store,
    resave: false
}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors(
    {
        origin: process.env.DEV == 1 ? 'https://hotrodaotaok19sgu.vercel.app' : process.env.HOST,
        credentials: true
    }
))
app.use(morgan("dev"))
app.use(compression())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
    .use('/api/admin', adminRoute) // tạm tắt verify Token

app.use('/*', async (req, res) => {
    res.status(501).send("Don't implement.")
})

app.listen(PORT, () => {
    console.log(`Server start at port: ${PORT}`)
})
setInterval(() => {
    clearTokenList(TOKEN_BLACKLIST)
}, 3600000)
