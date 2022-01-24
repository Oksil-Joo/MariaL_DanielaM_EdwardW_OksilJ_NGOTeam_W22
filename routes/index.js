import express from 'express';
const router = express.Router();

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// this is the equivalente of index.html
router.get('/', (req,res) => {
    // res.send('Hello from Express')
    res.sendFile(path.join(__dirname, '../views/index.html'));
  })
  
router.get('/maria', (req,res) => {
    res.send(`This is Maria Lopera's page`);
    // res.sendFile(path.join(__dirname, '../views/maria.html'));
  })
  
router.get('/daniela', (req,res) => {
    res.send(`This is Daniela's page`);
    // res.sendFile(path.join(__dirname, '../views/daniela.html'));
  })

router.get('/edward', (req,res) => {
    res.send(`This is Edward's page`);
    // res.sendFile(path.join(__dirname, '../views/edward.html'));
  })

  router.get('/oksil', (req,res) => {
    res.send(`This is Oksil's page`);
    // res.sendFile(path.join(__dirname, '../views/oksil.html'));
  })

  // this catches broken routes -requests for resources that don't exist
  router.use((req, res) => {
    // console.log('page does not exist');
    res.sendFile(path.join(__dirname, '../views/404.html'));
  })



  export default router;