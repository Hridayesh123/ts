import * as express from 'express';
import { Request, Response } from 'express';
import client from '../config/db';
import { login, verifyToken, getSubject, getSubjectsById, createSubject, updateSubject, deleteSubject} from '../function_container/Functions';
import jwt from 'jsonwebtoken';
import { NextFunction } from 'connect';
import { AuthenticatedRequest } from '../function_container/Functions';

const router = express.Router();
const key = "key";

router.post('/login', login);

router.post('/profile', verifyToken, (req: AuthenticatedRequest, res: Response) => {
    jwt.verify(req.token, key, (err, authData) => {
        if (err) {
            res.send({
                result: 'token invalid',
            });
        } else {
            res.json({
                message: ' authorized',
                authData,
            });
        }
    });
});

router.get('/', getSubject);

router.get('/:id', getSubjectsById);

router.post('/', createSubject);

router.put('/:id', updateSubject);

router.delete('/:id', deleteSubject);

export default router;
