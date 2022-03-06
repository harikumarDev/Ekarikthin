const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => {
      console.log(`DB Connected. HOST: ${conn.connection.host}`);
    });
};

module.exports = connectDb;
