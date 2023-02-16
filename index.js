const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const { errorHandler } = require('./backend/middleware/errorMiddleware')
const ConnectDB = require('./backend/config/db');
const { execPath } = require('process');
const app = express();

ConnectDB();
// app.get("/", (req, res) => {
//     res.status(200).json({ message: "get data" });
// })
app.use(errorHandler);
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use('/api/users', require('./backend/routes/userRoutes'))
app.use('/api/products', require('./backend/routes/productRoutes'))
app.listen(port, () => {
    console.log(`app server started on port ${port}`)
})
