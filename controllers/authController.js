const jwt = require('jsonwebtoken');
const { hashPassword, verifyPassword } = require('../utils/crypto');

const users = [];

function generateTokens(username) {
    const accessToken = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ username }, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });
    return { accessToken, refreshToken };
}

exports.register = async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await hashPassword(password);
    users.push({ username, password: hashedPassword });
    res.status(201).json({ message: 'Utilisateur enregistré.' });
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (!user || !(await verifyPassword(password, user.password))) {
        return res.status(401).json({ error: 'Identifiants invalides.' });
    }
    const tokens = generateTokens(username);
    res.json(tokens);
};

exports.refreshToken = (req, res) => {
    const token = req.body.refreshToken;
    if (!token) return res.status(401).json({ error: 'Token requis.' });
    try {
        const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
        const tokens = generateTokens(decoded.username);
        res.json(tokens);
    } catch {
        res.status(403).json({ error: 'Token invalide.' });
    }
};

exports.profile = (req, res) => {
    res.json({ message: `Bienvenue, ${req.user.username}` });
};