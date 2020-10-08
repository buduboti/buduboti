const fs = require("fs"),
  path = require("path"),
  http = require("http"),
  https = require("https"),
  express = require("express"),
  projects = require("./projects.json");

const app = express();

app.use(express.static("static"));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

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

app.use("/projects", (req, res) => {
  res.status(200).json(projects);
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
