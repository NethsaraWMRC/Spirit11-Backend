import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token" });

    req.user = decoded;
    next();
  });
};

export const adminAuth = (req, res, next) => {
  if (!req.user) return res.status(401).json({ message: "Unauthorized" });

  if (req.user.role !== "admin")
    return res
      .status(403)
      .json({ message: "Forbidden: Admin access required" });

  req.userId = req.user.id;
  next();
};

export const commonAuth = (req, res, next) => {
  if (req.user.role !== "user")
    return res.status(403).json({ message: "Forbidden: user access required" });

  req.userId = req.user.id;
  next();
};
