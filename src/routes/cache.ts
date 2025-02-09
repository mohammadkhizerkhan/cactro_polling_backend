import { Router } from 'express';
import { postCache, getCache, deleteCache } from '../service/cache';

const router = Router();

//@ts-ignore
router.post('/', postCache);
//@ts-ignore
router.get('/:key', getCache);
// @ts-ignore
router.delete('/:key', deleteCache);

export default router;
