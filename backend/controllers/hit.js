const Hit = require("../models/hit");

exports.hitCount = async (req, res) => {
  const { ip } = req.query;
  try {
    const oldRes = await Hit.findOne({ ip });

    if (!oldRes) {
      await Hit.create({ ip });
    } else {
      await Hit.findOneAndUpdate({ ip }, { $inc: { count: 1 } });
    }

    res.status(200).json({
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err,
    });
  }
};
