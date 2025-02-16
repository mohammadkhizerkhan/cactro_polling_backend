import Question, { IQuestion } from '../models/question';

class QuestionService {
  static async createQuestion(data: IQuestion) {
    const { question, user_id, options } = data;

    const optionDocuments =  options.map(option => ({ option_name: option, votes: [] }));

    const questionDoc = new Question({
      question,
      user_id,
      options: optionDocuments
    });

    return await questionDoc.save();
  }

  static async voteOnOption(questionId: string, optionId: string, user_id: string) {
    const vote = {
      user_id,
      created_at: new Date()
    };

    return await Question.updateOne(
      { _id: questionId, "options._id": optionId },
      { $push: { "options.$.votes": vote } }
    );
  }

  static async getQuestion(questionId: string) {
    return await Question.findById(questionId).populate('user_id').populate({
        path: 'options.votes.user_id',
        model: 'User'
      }).exec();
  }

  static async getAllQuestions(){
   return await Question.find().select('_id question');
  }
}

export default QuestionService;
