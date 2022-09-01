import jwt from "jsonwebtoken";

export const newToken = (user) => {
  return jwt.sign({ id: user._id }, "my secret", {
    expiresIn: "7d",
  });
};

export const verifyToken = (token) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, "my secret", (err, payload) => {
      if (err) reject(err)  ;
      resolve(payload);
    });
  });
