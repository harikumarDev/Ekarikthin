const mongoose = require("mongoose");

exports.getOrganisers = async (req, res, next) => {
  res.status(200).json({
    status: "success",
  });
};
