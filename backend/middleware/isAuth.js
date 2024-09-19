const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

const protect = async (req, res, next) => {
    let token;
    // Check if the request contains a valid JWT token
    if (!req.headers.authorization) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized: Missing token" });
    }
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
        // Add user from payload
        req.user = await User.findById(decoded.id);
        // console.log(req.user);
        next();
      } catch (error) {
        console.error(error);
        res.status(401).json({ message: "Not authorized, token failed" });
      }
    }
  
    if (!token) {
      res.status(401).json({ message: "Not authorized, No token" });
    }
  };









// Middleware to check for admin role
const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      next();
    } else {
      res
        .status(401)
        .json({ success: false, message: "Not authorized as an admin" });
    }
  };
  

  
  module.exports = {
    protect,
    admin
  };
  
