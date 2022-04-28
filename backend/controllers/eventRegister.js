const randToken = require("rand-token");
const Razorapy = require("razorpay");
const crypto = require("crypto");
const eventReg = require("../models/eventRegister");
const Otp = require("../models/otp");
const { transporter, mailOptionsFunc } = require("../config/mail");

const genToken = () => {
  return "EK" + randToken.generate(6);
};

const verifyOtp = async (otp, email) => {
  const user = await Otp.findOne({ email });
  if (user) {
    if (user.otp === Number(otp)) {
      return user.expireTime >= Number(new Date().getTime());
    }
    return false;
  }
  return false;
};

exports.eventRegister = async (req, res) => {
  const {
    name,
    category,
    event,
    eventCode,
    email,
    phone,
    paid,
    paymentMode,
    otp,
    college,
  } = req.body;

  const isReg = await eventReg.findOne({
    eventCode,
    email,
  });

  if (isReg) {
    return res.status(400).json({
      success: false,
      code: "REG_EXISTS",
      message: "You are already registered for this event",
    });
  }

  const isValid = await verifyOtp(otp, email);
  if (!isValid) {
    return res.status(400).json({
      success: false,
      code: "OTP_INVALID",
      message: "OTP is invalid",
    });
  }

  const newEventReg = new eventReg({
    name,
    category,
    event,
    email,
    phone,
    college,
    eventCode,
    tokenId: genToken(),
    paid,
    paymentMode,
  });

  try {
    await newEventReg.save();

    const mailOptions = mailOptionsFunc(
      name,
      category,
      event,
      eventCode,
      newEventReg.tokenId,
      paymentMode,
      email
    );

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log("====================================");
        console.log("MSG SENDING ERR:: ", err);
        console.log("====================================");
        return res.status(500).json({
          success: false,
          code: "MAIL_ERROR",
          message: "Error in sending mail",
        });
      } else if (info.rejected.length > 0) {
        console.log("====================================");
        console.log("MSG SENDING REJECTED:: ", info.rejected);
        console.log("====================================");
        return res.status(500).json({
          success: false,
          code: "MAIL_ERROR",
          message: "Error in sending mail",
        });
      }
    });

    res.status(201).json({
      success: true,
      data: {
        newEventReg,
      },
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err,
    });
  }
};

exports.getRegistrations = async (req, res) => {
  try {
    const eventRegistrations = await eventReg.find({});
    res.status(200).json({
      success: true,
      data: {
        eventRegistrations,
      },
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err,
    });
  }
};

exports.sendOtp = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      code: "INVALID_DATA",
      message: "Please provide Email",
    });
  }
  const otp = Math.floor(100000 + Math.random() * 900000);
  const dataExist = await Otp.findOne({ email });
  if (dataExist) {
    const id = dataExist._id;
    await Otp.findByIdAndUpdate(
      { _id: id },
      {
        email,
        otp: Number(otp),
        expireTime: new Date().getTime() + 600 * 1000,
      }
    );
  } else {
    await Otp.create({
      email,
      otp,
      expireTime: new Date().getTime() + 600 * 1000,
    });
  }

  const options = {
    from: `Ekarikthin - NITN <${process.env.GMAIL_USERNAME}>`,
    to: email,
    subject: "Ekarikthin'22 Registration OTP",
    html: `<h1>Thank you for your interest in Ekarikthin'22</h1>
    <p>OTP for registration is <b>${otp}</b>. Expires in 10 minutes.</p>`,
    auth: {
      type: "Bearer",
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  };

  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log("====================================");
      console.log("MSG SENDING ERR:: ", err);
      console.log("====================================");
      return res.status(500).json({
        success: false,
        code: "MAIL_ERROR",
        message: "Error in sending mail",
      });
    } else if (info.rejected.length > 0) {
      console.log("====================================");
      console.log("MSG SENDING REJECTED:: ", info.rejected);
      console.log("====================================");
      return res.status(500).json({
        success: false,
        code: "MAIL_ERROR",
        message: "Error in sending mail",
      });
    }
  });

  res.status(200).json({
    success: true,
  });
};

exports.getDetails = async (req, res) => {
  const { email, eventCode } = req.body;

  try {
    const registration = await eventReg.findOne({ email, eventCode });
    res.status(200).json({
      success: true,
      registration,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: err,
    });
  }
};

exports.getRegistrationById = async (req, res) => {
  const { id } = req.params;

  try {
    const registration = await eventReg.findById(id);

    if (!registration) {
      return res.status(404).json({
        success: false,
        code: "REG_NOT_FOUND",
        message: "Registration not found",
      });
    }

    res.status(200).json({
      success: true,
      registration,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err,
    });
  }
};

exports.sendOrder = async (req, res) => {
  const { amount, eventCode, email } = req.body;

  const isReg = await eventReg.findOne({
    eventCode,
    email,
  });

  if (isReg) {
    return res.status(400).json({
      success: false,
      code: "REG_EXISTS",
      message: "You are already registered for this event",
    });
  }

  const options = {
    amount,
    currency: "INR",
    receipt: randToken.generate(8),
    payment_capture: 1,
  };

  try {
    const instance = new Razorapy({
      key_id: process.env.RAZOR_KEY_ID,
      key_secret: process.env.RAZOR_SECRET_KEY,
    });

    const response = await instance.orders.create(options);

    res.status(200).json({
      success: true,
      order: {
        ...response,
        key_id: process.env.RAZOR_KEY_ID,
      },
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err,
    });
  }
};

exports.confirmRegistration = async (req, res) => {
  const SECRET = process.env.RAZOR_VERIFY_SECRET;

  const shashum = crypto.createHmac("sha256", SECRET);
  shashum.update(JSON.stringify(req.body));
  const hash = shashum.digest("hex");

  if (hash === req.headers["x-razorpay-signature"]) {
    try {
      const {
        payload: {
          payment: { entity },
        },
      } = req.body;

      const arr = entity.description.split(",");
      const name = entity.card.name;
      const email = entity.email;
      const phone = entity.contact.substr(3);
      const paymentMode = "Online";

      const newEventReg = new eventReg({
        name,
        email,
        phone,
        eventCode: arr[0],
        category: arr[1],
        event: arr[2],
        tokenId: genToken(),
        paid: true,
        paymentMode,
      });

      await newEventReg.save();

      const mailOptions = mailOptionsFunc(
        name,
        arr[1],
        arr[2],
        arr[0],
        newEventReg.tokenId,
        paymentMode,
        email
      );

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.log("====================================");
          console.log("MSG SENDING ERR:: ", err);
          console.log("====================================");
          return res.status(500).json({
            success: false,
            code: "MAIL_ERROR",
            message: "Error in sending mail",
          });
        } else if (info.rejected.length > 0) {
          console.log("====================================");
          console.log("MSG SENDING REJECTED:: ", info.rejected);
          console.log("====================================");
          return res.status(500).json({
            success: false,
            code: "MAIL_ERROR",
            message: "Error in sending mail",
          });
        }
      });

      res.status(200).json({
        success: true,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        success: false,
        message: err,
      });
    }
  } else {
    res.status(400).json({
      success: false,
    });
  }
};
