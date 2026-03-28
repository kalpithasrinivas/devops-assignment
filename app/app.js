const express = require("express");
const client = require("prom-client"); // ✅ ADD THIS

const app = express();
const PORT = 3000;

// ✅ Collect default metrics
client.collectDefaultMetrics();

// Home Page (UI)
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>DevOps Dashboard</title>
        <style>
          body {
            font-family: Arial;
            background: #0f172a;
            color: #e2e8f0;
            text-align: center;
            padding-top: 50px;
          }
          h1 {
            color: #38bdf8;
          }
          .card {
            background: #1e293b;
            padding: 20px;
            margin: 20px auto;
            width: 320px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.5);
          }
          a {
            color: #22c55e;
            text-decoration: none;
            font-weight: bold;
          }
          a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <h1> DevOps Dashboard</h1>
        <p style="color:#94a3b8;">Built by Kalpitha Srinivas</p>

        <div class="card">
          <p><b>Status:</b> Running</p>
          <p><b>Environment:</b> Production</p>
        </div>

        <div class="card">
          <p><a href="/health">Check Health</a></p>
          <p><a href="/info">App Info</a></p>
          <p><a href="/metrics">Metrics</a></p> <!-- ✅ ADD THIS -->
        </div>

        <div style="margin-top:20px; font-size:14px; color:#64748b;">
          <p>Version 1.0 | CI/CD Enabled | Dockerized 🚀</p>
        </div>
      </body>
    </html>
  `);
});

// Health Check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP", uptime: process.uptime() });
});

// App Info
app.get("/info", (req, res) => {
  res.json({
    app: "DevOps Assignment",
    version: "1.0.0",
    developer: "Kalpitha Srinivas"
  });
});

// ✅ METRICS ENDPOINT (IMPORTANT)
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
