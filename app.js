const fs = require("fs"),
  path = require("path"),
  http = require("http"),
  https = require("https"),
  express = require("express"),
  bodyParser = require("body-parser"),
  nodemailer = require("nodemailer"),
  validators = require("./validators"),
  projects = require("./projects.json"),
  hobbies = require("./hobbies.json");

const app = express();

app.use(express.static("static"));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

let user = "balasbotond@gmail.com";
let pass = "zYpxup-nowju7-serhof";
// let user = process.env.GMAIL_MAIL;
// let pass = process.env.GMAIL_PASS;

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user,
    pass,
  },
});

// Certificate
const privateKey = fs.readFileSync(
  "/etc/letsencrypt/live/balasbotond.xyz/privkey.pem",
  "utf8"
);
const certificate = fs.readFileSync(
  "/etc/letsencrypt/live/balasbotond.xyz/cert.pem",
  "utf8"
);
const ca = fs.readFileSync(
  "/etc/letsencrypt/live/balasbotond.xyz/chain.pem",
  "utf8"
);
const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca,
};

app.use(bodyParser.json());

app.use("/hobbies", (req, res) => {
  res.status(200).json(hobbies);
});

app.use("/projects", (req, res) => {
  res.status(200).json(projects);
});

app.post("/message", (req, res) => {
  validators
    .nameValidator(req.body.name)
    .then(() => validators.compValidator(req.body.comp))
    .then(() => validators.mailValidator(req.body.email))
    .then(() => validators.subjectValidator(req.body.subject))
    .then(() => validators.msgValidator(req.body.msg))
    .then(() => {
      let mailOptions = {
        from: req.body.email,
        to: user,
        subject: `${req.body.subject} || ${req.body.name} <${req.body.email}> @@ ${req.body.comp}`,
        text: req.body.msg,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.json({ status: "err", err: error.errno });
        } else {
          console.log("Message sent: " + info.response);
          res.json({ status: "ok" });
        }
      });
    })
    .catch((err) => res.json({ status: "err", err }));
});

app.use("/", (req, res) => {
  res.status(200).render("index", projects);
});

// Starting both http & https servers
const httpServer = http.createServer((req, res) => {
  res.writeHead(301, { Location: "https://" + req.headers.host + req.url });
  res.end();
});
const httpsServer = https.createServer(credentials, app);

// const httpServer = http.createServer(app);

httpServer.listen(8080, () => {
  console.log("HTTP Server running on port 8080");
});

httpsServer.listen(8443, () => {
  console.log("HTTPS Server running on port 8443");
});
