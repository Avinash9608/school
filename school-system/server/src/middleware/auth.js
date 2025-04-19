const jwt = require('jsonwebtoken');

// Middleware to authenticate user using JWT
const protect = async (req, res, next) => {
  let token;

  // Check if token exists in headers
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Add user from payload to request object
      req.user = decoded;

      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ success: false, message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ success: false, message: 'Not authorized, no token' });
  }
};

// Middleware to check if user has admin role
const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ success: false, message: 'Not authorized as an admin' });
  }
};

// Middleware to check if user has teacher role
const teacher = (req, res, next) => {
  if (req.user && (req.user.role === 'teacher' || req.user.role === 'admin')) {
    next();
  } else {
    res.status(403).json({ success: false, message: 'Not authorized as a teacher' });
  }
};

// Middleware to check if user has librarian role
const librarian = (req, res, next) => {
  if (req.user && (req.user.role === 'librarian' || req.user.role === 'admin')) {
    next();
  } else {
    res.status(403).json({ success: false, message: 'Not authorized as a librarian' });
  }
};

module.exports = { protect, admin, teacher, librarian };
