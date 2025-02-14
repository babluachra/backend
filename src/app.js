import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentialsl: true
}));

//  three configuration
//  form data 
app.use(express.json({limit:"16kb"}))
//  configuration for url data
app.use(express.urlencoded({extended:true, limit:'16kb'}));
app.use(express.static("public"));
app.use(cookieParser());

// routes
import userRouter from './routes/user.routes.js'



// routes deceleration

app.use('/api/v1/users',userRouter)

//  https://localhost:8000/api/v1/users/register
export {app}
