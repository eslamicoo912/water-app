const express = require("express");
const router = express.Router();

const leaks = require("../controllers/leaks");

router.get("/leak", leaks.getLeak);

router.get("/leak/accelerometerbranched", leaks.getAccBranched);
router.post("/leak/accelerometerbranched", leaks.postAccBranched);

router.get("/leak/accelerometerlooped", leaks.getAccLooped);
router.post("/leak/accelerometerlooped", leaks.postAccLooped);

router.get("/leak/hydrophonebranched", leaks.getHydrophoneBranched);
router.post("/leak/hydrophonebranched", leaks.postHydrophoneBranched);

router.get("/leak/hydrophonelooped", leaks.getHydrophoneLooped);
router.post("/leak/hydrophonelooped", leaks.postHydrophoneLooped);

router.get("/leak/pressurebranched", leaks.getPressureBranched);
router.post("/leak/pressurebranched", leaks.postPressureBranched);

router.get("/leak/pressurelooped", leaks.getPressureLooped);
router.post("/leak/pressurelooped", leaks.postPressureLooped);

module.exports = router;
