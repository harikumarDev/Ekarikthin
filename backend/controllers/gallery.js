const cloudinary = require("cloudinary").v2;

exports.getImages = async (req, res) => {
  try {
    const images = await cloudinary.search
      .expression("folder:Ekarikthin")
      .max_results(110)
      .execute();

    const data = images.resources;
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
    }
    res.status(200).json({
      success: true,
      images: data,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getHomeImages = async (req, res) => {
  try {
    const images = await cloudinary.search
      .expression("folder:Home_EK")
      .max_results(110)
      .execute();

    res.status(200).json({
      success: true,
      images: images.resources,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
