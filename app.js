const fs = require("fs"),
  hbs = require('hbs'),
  path = require('path'),
  http = require("http"),
  https = require("https"),
  express = require("express");

const app = express();

app.use(express.static('static'))

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Certificate
const privateKey = fs.readFileSync(
  "/etc/letsencrypt/live/buduboti.xyz/privkey.pem",
  "utf8"
);
const certificate = fs.readFileSync(
  "/etc/letsencrypt/live/buduboti.xyz/cert.pem",
  "utf8"
);
const ca = fs.readFileSync(
  "/etc/letsencrypt/live/buduboti.xyz/chain.pem",
  "utf8"
);

const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca,
};

app.use((req, res) => {
  res.status(200).render("index");
});

// Starting both http & https servers
const httpServer = http.createServer((req, res) => {
  res.writeHead(301, { Location: 'https://' + req.headers.host + req.url });
  res.end();
});
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () => {
  console.log("HTTP Server running on port 80");
});

httpsServer.listen(443, () => {
  console.log("HTTPS Server running on port 443");
});
