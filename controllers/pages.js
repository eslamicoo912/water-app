exports.getPortability = (req, res, next) => {
  res.render("portability.ejs", {
    pageTitle: "Water portability prediction",
    path: "/portability",
    ph: "",
    hardness: "",
    solids: "",
    chloramines: "",
    sulfate: "",
    conductivity: "",
    organic_carbon: "",
    trihalomethanes: "",
    turbidity: "",
    answer: "",
  });
};

exports.postPortability = (req, res, next) => {
  const {
    ph,
    hardness,
    solids,
    chloramines,
    sulfate,
    conductivity,
    organic_carbon,
    trihalomethanes,
    turbidity,
    answer,
  } = req.body;

  res.render("portability.ejs", {
    pageTitle: "Water portability prediction",
    path: "/portability",
    ph,
    hardness,
    solids,
    chloramines,
    sulfate,
    conductivity,
    organic_carbon,
    trihalomethanes,
    turbidity,
    answer,
  });
};

exports.getLevel = (req, res, next) => {
  res.render("level.ejs", {
    pageTitle: "Water level prediction",
    path: "/level",
    Hour: "",
    answer: "",
  });
};

exports.postLevel = (req, res, next) => {
  const { Hour, answer } = req.body;

  res.render("level.ejs", {
    pageTitle: "Water level prediction",
    path: "/level",
    Hour,
    answer,
  });
};

exports.getTreatment = (req, res, next) => {
  res.render("treatment.ejs", {
    pageTitle: "Water treatment prediction",
    path: "/treatment",
    VAR: "",
    Country: "",
    Year: "",
    answer: "",
  });
};

exports.postTreatment = (req, res, next) => {
  const { VAR, Country, Year, answer } = req.body;

  res.render("treatment.ejs", {
    pageTitle: "Water treatment prediction",
    path: "/treatment",
    VAR,
    Country,
    Year,
    answer,
  });
};

exports.getConsumptionTank1 = (req, res, next) => {
  res.render("consumption_tank1.ejs", {
    pageTitle: "Water consumption prediction - Tank 1",
    path: "/consumptionTank1",
    entry_id: "",
    year: "",
    month: "",
    day: "",
    hour: "",
    minute: "",
    answer: "",
  });
};

exports.postConsumptionTank1 = (req, res, next) => {
  const { entry_id, year, month, day, hour, minute, answer } = req.body;

  res.render("consumption_tank1.ejs", {
    pageTitle: "Water consumption prediction - Tank 1",
    path: "/consumptionTank1",
    entry_id,
    year,
    month,
    day,
    hour,
    minute,
    answer,
  });
};

exports.getConsumptionTank2 = (req, res, next) => {
  res.render("consumption_tank2.ejs", {
    pageTitle: "Water consumption prediction - Tank 2",
    path: "/consumptionTank2",
    entry_id: "",
    year: "",
    month: "",
    day: "",
    hour: "",
    minute: "",
    answer: "",
  });
};

exports.postConsumptionTank2 = (req, res, next) => {
  const { entry_id, year, month, day, hour, minute, answer } = req.body;

  res.render("consumption_tank2.ejs", {
    pageTitle: "Water consumption prediction - Tank 2",
    path: "/consumptionTank2",
    entry_id,
    year,
    month,
    day,
    hour,
    minute,
    answer,
  });
};
