const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require('path');
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");


const userRouter = require("./routers/userRoutes");
const staticRouter = require("./routers/staticRouter");

const db = "mongodb+srv://harish:AlwWJHCtzk1baU94@cluster0.vswjumt.mongodb.net/user_page?retryWrites=true&w=majority";

const connectionParams = {
    useNewUrlParser:true,
    useUnifiedTopology:true
}

mongoose
    .connect(db, connectionParams)
    .then(()=>console.log("Mongodb connected"))
    .catch((err)=>console.log("Mongodb have some error",err));


app.set("view engine","ejs");
app.set('views', path.resolve('./views'))


app.use(express.static(path.resolve("./public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

app.use('/user', userRouter);
app.use('/', staticRouter);



app.listen(3000,()=>{
    console.log("server is running at 8000");
});