import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
// import db from "./config/Database.js "
import UserRoutes from "./routes/UserRoute.js";
import KategoriRoutes from './routes/KategoriRoute.js';
import ProductRoutes from "./routes/ProductRoute.js";
import AuthRoutes from './routes/AuthRoute.js';
import PenjualanRoutes from './routes/PenjualanRoute.js';
import LaporanRoutes from './routes/LaporanRoute.js';
import SaldologinRoutes from './routes/SaldologinRoute.js';
import SaldologoutRoutes from './routes/SaldologoutRoute.js';


dotenv.config();

const app = express();

// (async()=>{
//    await db.sync();
// })();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use(UserRoutes);
app.use(ProductRoutes);
app.use(KategoriRoutes);
app.use(AuthRoutes);
app.use(PenjualanRoutes);
app.use(LaporanRoutes);
app.use(SaldologinRoutes);
app.use(SaldologoutRoutes);


app.listen(process.env.APP_PORT, ()=> {
    console.log('Server up and running...');
});

