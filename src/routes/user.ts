import { Router } from 'express';
import UserService from '../service/user';

const router = Router();

router.post('/', async (req, res,next) => {
  try {
    const user = await UserService.createUser(req.body);
    res.status(201).json({data:user,message:"User created successfully"});
  } catch (error:any) {
    next(error);
  }
});

export default router;
