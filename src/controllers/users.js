const Users = require('../models/users.js')

module.exports = {
  async postUser(req, res) {
    try {
      const USER_MODEL = {
        name: req.body.name,
        email: req.body.email
      };
      try {
        const user = await Users.create(USER_MODEL);
        return res.status(201).json(user);
      } catch (error) {
        return res.status(500).json(error);
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  async getUser(req, res) {
    try {
      let email = req.query.email;
      try {
        Users.findAll({ 
          where: {email: email}
        }).then(function(user) {
          return res.status(200).json(user);
        });
      } catch (error) {
        return res.status(500).json(error);
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },


  async getUserId(email) {
    try {
      let user = await Users.findAll({  where: {email: email}, attributes: ['id']})
      let userString = JSON.stringify(user);
      let userId = JSON.parse(userString);
      return userId[0].id;
    } catch (error) {
      return error;
    }
  }
}
