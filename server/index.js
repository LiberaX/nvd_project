require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

const sendEmail = async (option) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOption = {
    from: "Audiophile",
    to: option.email,
    subject: "Audiophile Order Info",
    text: option.status ? "Your order is accepted" : "Your order is declined",
  };

  await transporter.sendMail(mailOption);
};

app.get("/", (req, res) => res.send("<h1>Tesst</h1>"));

app.post("/send-email", async (req, res) => {
  console.log(req.body);

  try {
    await sendEmail({ email: req.body.email, status: req.body.status });
    res.status(200).send("success");
  } catch (err) {
    res.status(500).send(`Error: ${err.message}`);
  }
});

app.listen(3000);