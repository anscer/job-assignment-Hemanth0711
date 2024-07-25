import express from 'express';
import { createState, getStates, updateState, deleteState } from '../controllers/stateController';
import { isAuthenticated } from '../middleware/auth';

const router = express.Router();

/**
 * @openapi
 * /states:
 *   post:
 *     summary: Create a new state
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/State'
 *     responses:
 *       201:
 *         description: State created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/State'
 */
router.post('/states', isAuthenticated, createState);

/**
 * /states:
 *   get:
 *     summary: Retrieve all states
 *     responses:
 *       200:
 *         description: A list of states
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/State'
 */
router.get('/states', getStates);
router.put('/states/:id', isAuthenticated, updateState);
router.delete('/states/:id', isAuthenticated, deleteState);

export default router;
