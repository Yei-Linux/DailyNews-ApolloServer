const express = require('express');
const app = express();
const connectDB = require('./config/db');
const cors = require('cors');
const serverApollo = require('./server');
const { facebookPassportConfig, googlePassportConfig } = require('./utils/passport');

connectDB();
facebookPassportConfig();
googlePassportConfig();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 4000;

app.use('/daily-news/auth',require('./routes/socialProviders'))

serverApollo.applyMiddleware({ app });

app.listen(port, '0.0.0.0' ,()=>{
    console.log('From express server');
});