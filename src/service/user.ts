import User, { IUser } from '../models/user';

class UserService {
  static async createUser(data: Partial<IUser>) {
    const user = new User(data);
    return await user.save();
  }
}

export default UserService;
