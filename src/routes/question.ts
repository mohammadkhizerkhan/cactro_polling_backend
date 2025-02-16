import { Router } from 'express';
import QuestionService from '../service/question';

const router = Router();

router.post('/', async (req, res,next) => {
  try {
    const poll = await QuestionService.createQuestion(req.body);
    res.status(201).json(poll);
  } catch (error:any) {
    next(error);
  }
});

router.post('/:questionId/options/:optionId/vote', async (req, res,next) => {
  try {
    const { questionId, optionId } = req.params;
    const { user_id } = req.body;

    await QuestionService.voteOnOption(questionId, optionId, user_id);

    res.status(200).json({ message: 'Vote added' });
  } catch (error:any) {
    next(error);
  }
});

router.get('/:questionId', async (req, res,next) => {
  try {
    const { questionId } = req.params;
    const poll = await QuestionService.getQuestion(questionId);

    res.status(200).json(poll);
  } catch (error:any) {
    next(error);
  }
});

router.get('', async (req, res,next) => {
  try {
    const polls = await QuestionService.getAllQuestions();
    res.status(200).json(polls);
  } catch (error) {
    next(error);
  }
});


export default router;
