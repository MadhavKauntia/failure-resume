import app from "../../configs/firebase-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import User from "../../models/User";
import { connectDB } from "../../configs/db";

connectDB();

// TODO: add check for emailVerified

export default async function handler(req, res) {
  if (req.method === "GET" && req.headers.email && req.headers.password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, req.headers.email, req.headers.password)
      .then(async (userCredential) => {
        const user = await User.find({ email: req.headers.email });
        if (user.length === 0) {
          res.status(401).send();
          return;
        }
        res.statusCode = 200;
        res.json({
          fullName: user[0].fullName,
          username: user[0].username,
          auth: userCredential.user,
        });
        res.end();
      })
      .catch((error) => {
        res.statusCode = 500;
        res.json({
          code: error.code,
          message: error.message,
        });
        res.end();
      });
  } else {
    res.status(400).send();
  }
}
