const express = require("express");
const router = express.Router();

const pages = require("../controllers/pages");

router.get("/portability", pages.getPortability);

router.post("/portability", pages.postPortability);

router.get("/level", pages.getLevel);

router.post("/level", pages.postLevel);

router.get("/treatment", pages.getTreatment);

router.post("/treatment", pages.postTreatment);

router.get("/consumptionTank1", pages.getConsumptionTank1);

router.post("/consumptionTank1", pages.postConsumptionTank1);

router.get("/consumptionTank2", pages.getConsumptionTank2);

router.post("/consumptionTank2", pages.postConsumptionTank2);

module.exports = router;
