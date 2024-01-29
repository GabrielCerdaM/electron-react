const { User } = require('../../Model/User');

class UserRepository {
    async getAll() { 
        return await User.findAll();
    }
}

module.exports = new UserRepository();