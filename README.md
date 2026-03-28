# 🚀 DevOps Pipeline Implementation for Web Application

## 📌 Scenario

The organization had no DevOps practices in place.
Applications were deployed manually with no automation, containerization, or monitoring.

This project demonstrates how a **minimal DevOps pipeline** was designed and implemented to improve:

* Automation
* Consistency
* Observability
* Deployment efficiency

---

# 🎯 Objective

To set up a complete DevOps workflow including:

* CI/CD pipeline
* Containerization using Docker
* Infrastructure provisioning using Terraform
* Monitoring using Prometheus & Grafana

---

# 🏗️ Architecture Diagram

```
Developer (GitHub Push)
        │
        ▼
GitHub Actions (CI/CD Pipeline)
        │
        ├── Lint & Test
        ├── Build Docker Image
        └── Deploy to EC2
                │
                ▼
        Docker Container (Node.js App)
                │
                ▼
        Prometheus (Metrics Scraping)
                │
                ▼
        Grafana (Visualization Dashboard)
```

---

# 🛠️ Tech Stack

* **Backend:** Node.js (Express)
* **Testing:** Jest, Supertest
* **CI/CD:** GitHub Actions
* **Containerization:** Docker
* **Infrastructure:** Terraform (AWS EC2)
* **Monitoring:** Prometheus, Grafana
* **Version Control:** GitHub

---

# 📂 Project Structure

```
devops-assignment/
├── app/
│   ├── app.js
│   ├── app.test.js
│   ├── package.json
├── terraform/
├── .github/workflows/
├── Dockerfile
├── docker-compose.yml (optional)
├── prometheus.yml
├── .gitignore
├── .dockerignore
```

---

# 🧩 Step 1: Application Setup

## 🚀 Features

* `/` → Dashboard UI
* `/health` → Health check
* `/info` → App metadata
* `/metrics` → Prometheus metrics

---

## 🧪 Testing

```bash
npm test
```

* Implemented using Jest & Supertest
* Ensures application reliability

---

## ▶️ Run Locally

```bash
cd app
npm install
npm start
```

---

# 🐳 Step 2: Docker Setup

## 📌 Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY app/package*.json ./
RUN npm install

COPY app/ .

EXPOSE 3000

CMD ["npm", "start"]
```

---

## 🚀 Build & Run

```bash
docker build -t devops-app .
docker run -d -p 3000:3000 devops-app
```

---

## 🌐 Access

http://localhost:3000

---

# 🔁 Step 3: CI/CD Setup (GitHub Actions)

## 📌 Pipeline Includes:

* Code checkout
* Dependency installation
* Linting
* Testing
* Docker build
* Deployment

---

## 📄 Example Workflow

```yaml
name: CI/CD Pipeline

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install Dependencies
        run: |
          cd app
          npm install

      - name: Run Tests
        run: |
          cd app
          npm test

      - name: Build Docker Image
        run: docker build -t devops-app .
```

---

# ☁️ Step 4: Infrastructure as Code (Terraform)

## 📌 Objective

Provision AWS infrastructure using Terraform.

---

## 🔹 Resources Created

* EC2 Instance
* Security Groups
* Networking configuration

---

## 📄 Sample Terraform Code

```hcl
provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "devops_ec2" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"

  tags = {
    Name = "DevOps-EC2"
  }
}
```

---

## ▶️ Run Terraform

```bash
terraform init
terraform apply
```

---

# 📊 Step 5: Monitoring Setup

## 🔹 Prometheus

* Scrapes metrics from `/metrics`
* Configured via `prometheus.yml`

```yaml
scrape_configs:
  - job_name: 'node-app'
    static_configs:
      - targets: ['localhost:3000']
```

---

## 🔹 Grafana

* Connected to Prometheus
* Visualizes:

  * CPU usage
  * Memory usage
  * Uptime
  * Application health

---

# 📸 Screenshots (Proof)

## 🖥️ Application Dashboard

![Dashboard]<img width="1919" height="945" alt="image" src="https://github.com/user-attachments/assets/93471757-65aa-4b5a-9cb8-3174c3716d5f" />


## 📊 Grafana Dashboard

![Grafana]<img width="1911" height="955" alt="image" src="https://github.com/user-attachments/assets/5a0add71-645f-4b6a-8f77-611deac568c6" />


## 📡 Prometheus Targets

![Prometheus]<img width="1907" height="910" alt="image" src="https://github.com/user-attachments/assets/db5e5523-323f-41f5-b7a1-9057f14a8a08" />


## ⚙️ CI/CD Pipeline

![CI/CD]<img width="1860" height="965" alt="image" src="https://github.com/user-attachments/assets/05f9b7d2-9800-44f2-aea3-4b95e6ffbdd5" />


---

# 🔐 Security & Best Practices

* Used SSH authentication for GitHub
* Ignored sensitive files using `.gitignore`
* Optimized Docker builds using `.dockerignore`

---

# 🎯 Outcome

Successfully implemented a **complete DevOps pipeline**:

* Automated CI/CD pipeline ✅
* Dockerized application ✅
* Infrastructure provisioning using Terraform ✅
* Monitoring with Prometheus & Grafana ✅
* Cloud deployment on AWS EC2 ✅

---

# 🌟 Key Highlights

* End-to-end DevOps lifecycle implementation
* Real-time monitoring & observability
* Automated build and deployment
* Scalable and production-ready setup

---

# 👩‍💻 Author

**Kalpitha Srinivas**
