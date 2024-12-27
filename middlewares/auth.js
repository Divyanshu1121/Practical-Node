const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.cookies.jwt;
    if (!token) return res.status(403).send('Access denied');
    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();
    } catch {
        res.status(403).send('Invalid token');
    }
};

const authorizeRole = (role) => (req, res, next) => {
    if (req.user.role !== role) return res.status(403).send('Unauthorized');
    next();
};

module.exports = { authenticateToken, authorizeRole };
