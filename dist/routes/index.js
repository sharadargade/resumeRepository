var express = require("express");
var router = express.Router();
var userRoutes = require("./userRoutes");
router.use("/users", userRoutes);
module.exports = router;

//# sourceMappingURL=index.js.map