const User = require("../models/User");
const userController = {
  getAllUsers: async (req, res) => {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //DELETE USER
  deleteUser: async (req, res) => {
    try {
      //v1/user/123
      //muốn xóa thật thì row1
      console.log("id", req.params.id);
      const user = await User.findByIdAndDelete(req.params.id);
      //fake xóa thì row2
      // const user = await User.findById(req.params.id);
      // console.log("xóa thiệt nè");
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = userController;
