const pool = require('./database');
const bcrypt = require('bcryptjs');

const registerUser = async (username, password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
        await pool.query(sql, [username, hashedPassword]);
        return { success: true };
    } catch (error) {
        console.error('Error registering user:', error);
        throw new Error('Failed to register user. Please try again later.');
    }
};

const getUserByUsername = async (username) => {
    try {
        const sql = 'SELECT * FROM users WHERE username = ?';
        const result = await pool.query(sql, [username]);
        return result[0]; 
    } catch (error) {
        console.error('Error fetching user by username:', error);
        throw new Error('Failed to fetch user by username.');
    }
};

const loginUser = async (username, password) => {
    try {
        const user = await getUserByUsername(username);
        if (!user) {
            throw new Error('User not found');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }

        return { success: true, user }; 
    } catch (error) {
        console.error('Error logging in:', error);
        throw new Error('Failed to login');
    }
};


module.exports = {
    registerUser,
    getUserByUsername,
    loginUser,
};
