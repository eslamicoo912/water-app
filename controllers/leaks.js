exports.getLeak = (req, res, next) => {
  res.render("leak.ejs", {
    pageTitle: "Water leak prediction",
    path: "/leak",
  });
};

exports.getAccBranched = (req, res, next) => {
  res.render("leaks/AccBranched.ejs", {
    pageTitle: "Water leak prediction - Accelerometer branched",
    path: "/leak/accelerometerbranched",
    value1: "",
    value2: "",
    value3: "",
    value4: "",
    value5: "",
    value6: "",
    value7: "",
    value8: "",
    answer: "",
  });
};
exports.postAccBranched = (req, res, next) => {
  const {
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
    answer,
  } = req.body;

  res.render("leaks/AccBranched.ejs", {
    pageTitle: "Water leak prediction - Accelerometer branched",
    path: "/leak/accelerometerbranched",
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
    answer,
  });
};

exports.getAccLooped = (req, res, next) => {
  res.render("leaks/AccLooped.ejs", {
    pageTitle: "Water leak prediction - Accelerometer looped",
    path: "/leak/accelerometerlooped",
    value1: "",
    value2: "",
    value3: "",
    value4: "",
    value5: "",
    value6: "",
    value7: "",
    value8: "",
    answer: "",
  });
};
exports.postAccLooped = (req, res, next) => {
  const {
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
    answer,
  } = req.body;

  res.render("leaks/AccLooped.ejs", {
    pageTitle: "Water leak prediction - Accelerometer looped",
    path: "/leak/accelerometerlooped",
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
    answer,
  });
};

exports.getHydrophoneBranched = (req, res, next) => {
  res.render("leaks/HydrophoneBranched.ejs", {
    pageTitle: "Water leak prediction - Hydrophone branched",
    path: "/leak/hydrophonebranched",
    value1: "",
    value2: "",
    value3: "",
    value4: "",
    value5: "",
    value6: "",
    value7: "",
    value8: "",
    value9: "",
    value10: "",
    value11: "",
    value12: "",
    answer: "",
  });
};
exports.postHydrophoneBranched = (req, res, next) => {
  const {
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
    value9,
    value10,
    value11,
    value12,
    answer,
  } = req.body;

  res.render("leaks/HydrophoneBranched.ejs", {
    pageTitle: "Water leak prediction - Hydrophone branched",
    path: "/leak/hydrophonebranched",
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
    value9,
    value10,
    value11,
    value12,
    answer,
  });
};

exports.getHydrophoneLooped = (req, res, next) => {
  res.render("leaks/HydrophoneLooped.ejs", {
    pageTitle: "Water leak prediction - Hydrophone looped",
    path: "/leak/hydrophonelooped",
    value1: "",
    value2: "",
    value3: "",
    value4: "",
    value5: "",
    value6: "",
    value7: "",
    value8: "",
    value9: "",
    value10: "",
    value11: "",
    value12: "",
    answer: "",
  });
};
exports.postHydrophoneLooped = (req, res, next) => {
  const {
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
    value9,
    value10,
    value11,
    value12,
    answer,
  } = req.body;

  res.render("leaks/HydrophoneLooped.ejs", {
    pageTitle: "Water leak prediction - Hydrophone looped",
    path: "/leak/hydrophonelooped",
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
    value9,
    value10,
    value11,
    value12,
    answer,
  });
};

exports.getPressureBranched = (req, res, next) => {
  res.render("leaks/PressureBranched.ejs", {
    pageTitle: "Water leak prediction - Pressure branched",
    path: "/leak/pressurebranched",
    value1: "",
    value2: "",
    value3: "",
    value4: "",
    value5: "",
    value6: "",
    value7: "",
    value8: "",
    answer: "",
  });
};
exports.postPressureBranched = (req, res, next) => {
  const {
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
    answer,
  } = req.body;

  res.render("leaks/PressureBranched.ejs", {
    pageTitle: "Water leak prediction - Pressure branched",
    path: "/leak/pressurebranched",
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
    answer,
  });
};

exports.getPressureLooped = (req, res, next) => {
  res.render("leaks/PressureLooped.ejs", {
    pageTitle: "Water leak prediction - Pressure looped",
    path: "/leak/pressurelooped",
    value1: "",
    value2: "",
    value3: "",
    value4: "",
    value5: "",
    value6: "",
    value7: "",
    value8: "",
    answer: "",
  });
};
exports.postPressureLooped = (req, res, next) => {
  const {
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
    answer,
  } = req.body;

  res.render("leaks/PressureLooped.ejs", {
    pageTitle: "Water leak prediction - Pressure looped",
    path: "/leak/pressurelooped",
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
    answer,
  });
};
