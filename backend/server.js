// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const authRoutes = require('./routes/auth');
// const classesRoutes = require('./routes/classes');
// const studentsRoutes = require('./routes/students');
// const authMiddleware = require('./middleware/authMiddleware');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(bodyParser.json());

// // Routes
// app.use('/auth', authRoutes);
// app.use('/classes', authMiddleware, classesRoutes);
// app.use('/students', authMiddleware, studentsRoutes);

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/sqafinals', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log("MongoDB connected");
// }).catch(err => console.log(err));

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
