import express from 'express';
import { authMiddleware } from '../middleware/authMiddleware.js';
import Model from '../models/DailyTask.js';
import { createItem, listItems, getItem, updateItem, deleteItem } from '../controllers/crudController.js';

const router = express.Router();

router.use(authMiddleware);

router.post('/', createItem(Model));
router.get('/', listItems(Model));
router.get('/:id', getItem(Model));
router.put('/:id', updateItem(Model));
router.delete('/:id', deleteItem(Model));

export default router;
