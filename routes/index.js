var express = require("express");
var router = express.Router();
const nodemailer = require("nodemailer");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.post("/contact", async (req, res, next) => {
  try {
    const { name, email, phone, message } = req.body;
    // console.log(name,email,phone,message)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "arifsiddiqui2905@gmail.com",
        pass: "icwa gtya gwra nvwa",
      },
    });
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`, // sender address
      to: "arifsiddiqui2905@gmail.com", // list of receivers
      subject: `${message}`, // Subject line
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n Phone:${phone}`, // plain text body
    });
    console.log("Message sent: %s", info.messageId);

    res.json('success');
  } catch (e) {}
});
module.exports = router;
