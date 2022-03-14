import app from "../../configs/firebase-config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { connectDB } from "../../configs/db";
import User from "../../models/User";

connectDB();

export default async function handler(req, res) {
  if (
    req.method === "POST" &&
    req.headers.email &&
    req.headers.password &&
    req.headers.fullname &&
    req.headers.username
  ) {
    try {
      await User.create({
        fullName: req.headers.fullname,
        email: req.headers.email,
        username: req.headers.username,
      });
    } catch (err) {
      res.statusCode = 406;
      res.end();
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(
      auth,
      req.headers.email,
      req.headers.password
    )
      .then(async (userCredential) => {
        await sendEmailVerification(auth.currentUser);
        res.statusCode = 200;
        res.json(userCredential.user);
        res.end();
      })
      .catch(async (error) => {
        res.statusCode = 500;
        res.json({
          code: error.code,
          message: error.message,
        });
        await User.deleteOne({
          fullName: req.headers.fullname,
          email: req.headers.email,
          username: req.headers.username,
        });
        res.end();
      });
  } else {
    res.status(400).send();
  }
}
``;
