# How to deploy a node express server to Amazon EC2 using docker and Github Actions

In this guide, we will explore the realms of containerization and automated deployment. I will take a simple node.js application and guide you through the process of dockerizing it and deploying it to an Amazon EC2 instance using the power of GitHub Actions. Whether you are new to Docker or looking to streamline your deployment workflow, this guide has you covered.

## What is Docker?

On a high level, Docker is a tool that allows you to package an application and its dependencies into a single image. This image can run on any machine with Docker installed, regardless of the underlying operating system. Docker is a containerization platform, where containers are isolated environments containing everything an application needs to run. Think of Docker as a shipping container for your software application, holding all necessary components like code, libraries, and settings.

### Benefits of Docker:

- **Portability:** Docker images are portable and can run on any machine with Docker installed, simplifying deployment across different environments.
  
- **Reproducibility:** Docker ensures you can create the same environment for your application regardless of the machine it runs on, aiding in debugging and testing.

- **Scalability:** Docker allows horizontal scaling of applications by adding more machines to your cluster.

- **Security:** Docker can be used to create isolated environments, enhancing application security.

## Prerequisites
1. Docker hub account
2. Github account
3. AWS account

## Steps to take
1. Set up project
2. Create dockerfile
3. Add docker hub username and password to github secrets
4. Create an EC2 instance - Use ubuntu image - install docker
5. Create a self hosted runner
6. Write cicd pipeline

## Step 1: Set Up Project
Skip this step if you already have a project to deploy.

If you don't have a project, go to this []() url and download this simple node express application and push to your github

## Step 2: Create Dockerfile

Create a dockerfile in your project if you don't have already.
Here is a simple dockerfile

Dockerfile
```bash
FROM node

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm","run","start"]
```

## Step 3: Add Docker Hub Username and Password to Github Secrets

On your github account: Go to your project repository and click on `settings`









## Workflow Overview:

In this guide, we will leverage GitHub Actions and Docker to write a CI/CD workflow. We'll deploy a Node.js application, containerize it, and publish it to EC2. The workflow consists of two jobs: "Build" and "Deploy."

### Build Job:

1. **Checkout Source:** Fetch the source code.
2. **Login to Docker Hub:** Authenticate Docker login using GitHub Secrets for Docker username and password.
3. **Build Docker Image:** Build the Docker image for the Node.js application.
4. **Publish Image to Docker Hub:** Push the Docker image to Docker Hub for later use in deployment.

### Deploy Job:

1. **Pull Image from Docker Hub:** Pull the Docker image from Docker Hub on the EC2 instance.
2. **Delete Old Container:** Remove any existing Docker container to avoid conflicts.
3. **Run Docker Container:** Start the Docker container on the EC2 instance.

### Setting up Self-Hosted Runner on EC2:

Configure a self-hosted runner on AWS EC2 to enable GitHub Actions to run on your instance. The runner will facilitate tasks like pulling the Docker image and running the container.

### Accessing the Application:

After deployment, access the Node.js application on the EC2 instance by updating security group inbound rules to allow traffic on port 5000.

## Conclusion:

Deploying a Node.js application on AWS EC2 using Docker and GitHub Actions streamlines the deployment process, making it more efficient and scalable. Docker's containerization benefits and GitHub Actions automation enhance the overall workflow.

## To create a self hosted runner 
Go to Github repo settings
- On `Code and automation` tab expand `Actions` and click on `Runners`
- Click on `new self hosted runner` button
- On `Runner image` select `Linux`
- On `Architecture` select `x64`
- Copy the `Download` and `Configure` code step by step and run on the EC2 instance