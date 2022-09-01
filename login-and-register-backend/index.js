import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import { newToken, verifyToken } from "./jwt.js"
import { config } from "dotenv";
config();
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
})
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number,
    gender: String,
    dob: String,
    mobile: Number,
    profileCompleted: Boolean

})
const User = new mongoose.model("User", userSchema)
//Routes

const userModel = (req, res, next) => {
    req.model = User;
    next();
};

const protect = async (req, res, next) => {
    const Model = req.model;
    if (!req.headers.authorization) {
        return res.status(401).end();
    }
    let token = req.headers.authorization.split("Bearer ")[1];
    if (!token) {
        return res.status(401).end();
    }
    try {
        const payload = await verifyToken(token);
        const user = await Model.findById(payload.id)
            .select("-password")
            .exec();
        req.user = user;
        next();
    } catch (e) {
        console.log(e.message);
        return res.status(401).end();
    }
};


app.get("/", (req, res) => {
    res.send("my api")
})
app.post("/login", (req, res) => {
    const { email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                const token = newToken(user);
                user.password = ""
                res.send({ message: "Login Successfull", user: user, token })
            } else {
                res.send({ message: "Password didn't match" })
            }
        } else {
            res.send({ message: "User not registered" })
        }
    })
})

app.post("/register", (req, res) => {
    const { name, email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "User already registerd" })
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Successfully Registered, Please login now." })
                }
            })
        }
    })

})

app.get("/getProfile", userModel, protect, (req, res) => {

    if (!req.user) {
        return res.status(400).json({ message: "User not Found" });
    }
    res.json({ status: "ok", user: req.user });
})

app.patch("/updateProfile", userModel, protect, async (req, res) => {

    if (!req.user) {
        return res.status(400).json({ message: "User not Found" });
    }
    const user = await User.findByIdAndUpdate(req.user._id, { ...req.body, profileCompleted: true }, { new: true })
    res.json({ status: "ok", user, message: "User Profile Completed" });
})

app.listen(9002, () => {
    console.log("BE started at port 9002")
})
