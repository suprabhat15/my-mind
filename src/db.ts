import mongoose, {model, Schema} from "mongoose";

mongoose.connect("mongodb://localhost:27017/my-mind")
.then((data)=>{
    console.log(`MongoDB connected with server: ${data.connection.host}`);
  })
  .catch(error => {
    console.log(`DB connection failed`);
    console.log(error);
    process.exit(1);
  })

const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String
})

export const UserModel = model("User", UserSchema);
