import express from 'express';
import cors from 'cors';
import vm from 'v-response';
import dotenv from 'dotenv';
import router from './routes/calendar.js';

dotenv.config();

const app = express();

app.use(cors());

// logger middleware
app.use((req, res, next) => {
  vm.log(`🔥🍕[${new Date().toTimeString()}]: ${req.method} ${req.url}🔥🍕`);
  next();
});

// Add middlewares for parsing JSON and urlencoded data and populating `req.body`
app.use(express.urlencoded({ extended: false }));

// parse requests of content-type - application/json
app.use(express.json());

//Routes
app.use('/api',router)

// invalid route
// app.get('*', (req, res) => {
//   res.json({ message: 'Page Not Found' });
// });

app.use((req, res) => {
  res.status(404).json({ message: 'Invalid Request' });
});

// set port, listen for requests
app.listen(process.env.PORT).on('listening', () => {
  vm.log(`💘 app is listening on ${process.env.PORT} 🚀`);
});
