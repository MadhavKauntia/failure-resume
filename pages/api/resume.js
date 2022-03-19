import User from "../../models/User";
import { connectDB } from "../../configs/db";
import app from "../../configs/firebase-config";
import { getAuth } from "firebase/auth";
import { verifyIdToken } from "../../configs/firebase-admin";

connectDB();

export default async function handler(req, res) {
  if (req.method === "GET" && req.headers.username) {
    User.findOne({ username: req.headers.username })
      .then((resume) => {
        if (!resume) {
          res.statusCode = 404;
          res.end();
          return;
        }
        res.statusCode = 200;
        res.json(resume);
        res.end();
      })
      .catch((err) => {
        res.statusCode = 500;
        res.json({ error: err.message });
        res.end();
      });
  } else if (
    req.method === "POST" &&
    !req.headers.username &&
    !req.headers.authorization
  ) {
    try {
      const credentials = await verifyIdToken(req.headers.authorization);
      if (!credentials) {
        res.statusCode = 401;
        res.end();
        return;
      }
    } catch (err) {
      res.statusCode = 401;
      res.end();
      return;
    }
  } else {
    res.status(400).send();
  }
}
