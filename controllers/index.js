const router = require("express").Router();

const homeRoutes = require("./homeRoutes");
// const dashboardRoutes = require("./dashboardRoutes");
// const homeRoutes = require("./homeRoutes");

router.use("/", homeRoutes);

module.exports = router;
