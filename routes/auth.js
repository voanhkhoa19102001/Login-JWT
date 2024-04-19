const authController = require("../controllers/authController");
const middlewareController = require("../controllers/midderware");
const router = require("express").Router();

//register
router.post("/register", authController.registerUser);
//login
router.post("/login", authController.loginUser);
//refresh
router.post("/refresh", authController.requestRefreshToken);
//logout
router.post("/logout", middlewareController.verifyToken, authController.logOut);
module.exports = router;
