const randToken = require("rand-token");
const Razorapy = require("razorpay");
const crypto = require("crypto");
const eventReg = require("../models/eventRegister");
const transporter = require("../config/mail");

const genToken = () => {
  return "EK" + randToken.generate(6);
};

exports.eventRegister = async (req, res) => {
  const { name, category, event, eventCode, email, phone, paid, paymentMode } =
    req.body;

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

  const newEventReg = new eventReg({
    name,
    category,
    event,
    email,
    phone,
    eventCode,
    tokenId: genToken(),
    paid,
    paymentMode,
  });

  try {
    await newEventReg.save();

    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: email,
      subject: "Ekarikthin'22 Registration",
      html: `<h1>Thank you for registering for Ekarikthin'22</h1>
      <div style="text-align: center;">
        <p>Your registration is confirmed. Please find the details below:</p>
        <p>Name: ${name}</p>
        <p>Category: ${category}</p>
        <p>Event: ${event}</p>
        <p>Event Code: ${eventCode}</p>
        <p>Token ID: <b style="color: blue;">${newEventReg.tokenId}</b></p>
        <p>Payment Mode: ${paymentMode}</p>
        <p>Please keep this token ID for future reference.</p>
        <p>Thank you for registering for Ekarikthin'22</p>
      </div>`,
      auth: {
        type: "Bearer",
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD,
      },
    };

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

      const mailOptions = {
        from: process.env.FROM_EMAIL,
        to: email,
        subject: "Ekarikthin'22 Registration",
        html: `<h1>Thank you for registering for Ekarikthin'22</h1>
        <p>Your registration is confirmed. Please find the details below:</p>
        <p>Name: ${name}</p>
        <p>Category: ${arr[1]}</p>
        <p>Event: ${arr[2]}</p>
        <p>Event Code: ${arr[0]}</p>
        <p>Token ID: <b>${newEventReg.tokenId}</b></p>
        <p>Payment Mode: ${paymentMode}</p>
        <p>Please keep this token ID for future reference.</p>`,
        auth: {
          type: "Bearer",
          user: process.env.GMAIL_USERNAME,
          pass: process.env.GMAIL_PASSWORD,
        },
      };

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
