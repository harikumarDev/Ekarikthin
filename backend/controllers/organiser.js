const mongoose = require("mongoose");

exports.getOrganisers = async (req, res) => {
  res.status(200).json({
    status: "success",
  });
};
