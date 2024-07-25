import express from 'express';
import session from 'express-session';
import passport from './config/passport';
import connectDB from './database';
import stateRoutes from './routes/stateRoutes';
import userRoutes from './routes/userRoutes';
import dotenv from 'dotenv';
import setupSwagger from './swagger'; // Import Swagger setup

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET!,
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', stateRoutes);
app.use('/api/users', userRoutes);

// Setup Swagger documentation
//setupSwagger(app, null);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

export default app;
