import express from 'express';
import jwt from 'jsonwebtoken';
import {UserModel} from './db'

const app = express();
app.use(express.json());

app.post('/api/v1/signup', async (req, res) => {
    const {username, password} = req.body;
    try {
        await UserModel.create({username, password});

        res.json({success: true, message: 'User created successfully'})
    } catch (error) {
        res.status(411).json({error: "User already signed up"})
    }
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
