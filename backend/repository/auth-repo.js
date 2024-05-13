const pool = require('./database');

const registerUser = async (username, email, password) => {
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    try {
        const result = await pool.query(sql, [username, email, password]);
        return result;
    } catch (err) {
        console.error('Error registering user:', err);
        throw new Error('Failed to register user. Please try again later.');
    }
};

const getUser = async (userId) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    try {
        const result = await pool.query(sql, [userId]);
        return result;
    } catch (err) {
        console.error('Error fetching user:', err);
        throw new Error('Failed to fetch user information.');
    }
};

const deleteUser = async (userId) => {
    const checkIfExistsSQL = 'SELECT * FROM users WHERE id = ?';
    try {
        const results = await pool.query(checkIfExistsSQL, [userId]);
        if (results.length === 0) {
            throw new Error('User not found');
        }
        
        const deleteSQL = 'DELETE FROM users WHERE id = ?';
        const result = await pool.query(deleteSQL, [userId]);
        return result;
    } catch (err) {
        console.error('Error deleting user:', err);
        throw new Error('Failed to delete user.');
    }
};

const updateUser = async (userId, username, email, password) => {
    const checkIfExistsSQL = 'SELECT * FROM users WHERE id = ?';
    try {
        const results = await pool.query(checkIfExistsSQL, [userId]);
        if (results.length === 0) {
            throw new Error('User not found');
        }

        const sql = 'UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?';
        const result = await pool.query(sql, [username, email, password, userId]);
        return result;
    } catch (err) {
        console.error('Error updating user:', err);
        throw new Error('Failed to update user information.');
    }
};

module.exports = {
    registerUser,
    getUser,
    deleteUser,
    updateUser
};
