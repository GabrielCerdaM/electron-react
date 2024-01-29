const { User } = require('../Model/User');
const UserRepository = require('./../Repository/UserRepository')

class UserService {
    async getAllUsers() {
        return await User.findAll();
        // return UserRepository.getAll();
    }
}

module.exports = new UserService();