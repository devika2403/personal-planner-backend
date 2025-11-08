import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import dailyRoutes from './routes/dailyRoutes.js';
import weeklyRoutes from './routes/weeklyRoutes.js';
import goalsRoutes from './routes/goalsRoutes.js';
import journalRoutes from './routes/journalRoutes.js';
import habitsRoutes from './routes/habitsRoutes.js';
import tripsRoutes from './routes/tripsRoutes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/daily', dailyRoutes);
app.use('/api/weekly', weeklyRoutes);
app.use('/api/goals', goalsRoutes);
app.use('/api/journal', journalRoutes);
app.use('/api/habits', habitsRoutes);
app.use('/api/trips', tripsRoutes);

const PORT = process.env.PORT || 5000;
const MONGO = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/personal-planner';

mongoose.connect(MONGO)
  .then(()=> {
    console.log('MongoDB connected');
    app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('Mongo connection error', err);
  });
