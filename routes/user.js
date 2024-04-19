const middlewareController = require("../controllers/midderware");
const userController = require("../controllers/userController");

const router = require("express").Router();
//get all user
router.get("/", middlewareController.verifyToken, userController.getAllUsers);
//delete user
router.delete(
  "/:id",
  middlewareController.verifyTokenAndUserAuthorization,
  userController.deleteUser
);

module.exports = router;
