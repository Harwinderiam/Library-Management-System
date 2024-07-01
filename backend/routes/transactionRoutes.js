import express from 'express';
const router = express.Router();
import { issueBook, returnBook } from '../controllers/transactionController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').post(protect, admin, issueBook);
router.route('/return').post(protect, admin, returnBook);

export default router;
