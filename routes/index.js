import express from 'express';
const router = express.Router();

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// this is the equivalente of index.html
router.get('/', (req,res) => {
    res.send('Hello from Express')
  })
  
router.get('/maria', (req,res) => {
    res.send(`This is Maria Lopera's page`);
  })
  
router.get('/daniela', (req,res) => {
    res.send(`This is Daniela's page`);
  })

router.get('/edward', (req,res) => {
    res.send(`This is Edward's page`);
  })

  router.get('/oksil', (req,res) => {
    res.send(`This is Oksil's page`);
  })



  export default router;