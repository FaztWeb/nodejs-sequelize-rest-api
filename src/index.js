import express from 'express';
import consign from 'consign';

const app = express();

// Routes
consign({cwd: __dirname})
  .include('models')
  .then('libs/middlewares.js')
  .then('routes')
  .then('libs/boot.js')
  .into(app);