---
sidebar_position: 3
title: Docker Swarm Setup
sidebar_label: Docker Swarm Setup
---

[Docker Swarm](https://docs.docker.com/engine/swarm/) is a powerful container orchestration tool provided by Docker, designed to simplify the management and scaling of containerized applications across a cluster of Docker hosts. The great news is that Docker Swarm is included with Docker, so there's no need for additional installations.

In the context of Samarth deployment, we do have a few additional steps to set up Docker Swarm.

Be sure to to install Docker on your `master` node and all of your `worker` nodes. You can refer to this [link](https://docs.docker.com/engine/install/ubuntu/) for installation guide.

## Steps to Set Up Docker Swarm

### 1. Advertise on Private/Public IP

Begin by initializing your `master` node as the Swarm manager using its private IP address (we are using private IPs for an extra layer of security but you can use public IP). Use the following command:

```sh
docker swarm init --advertise-addr <X.X.X.X>
```

Running this command will provide you with a token and a command to join the Swarm as a worker node. The output will look something like this:

```sh
To add a worker to this Swarm, run the following command:

docker swarm join --token <sometoken> <X.X.X.X>:<X>
```

### 2. Overlay Network Creation

On the `master` node, create an overlay network to ensure that all services are interconnected within the same network. This step is crucial for service communication. In our configuration, we've assigned the external network name `application_default` to all our services in the `docker-compose` file. Now, let's create that network as an overlay network:

```sh
docker network create -d overlay application_default
```

### 3. Add Jenkins User's SSH Key

On the main server (application server) where Jenkins is installed, log in as the `jenkins` user and copy the public SSH key. Add this public key to the `authorized_keys` file on your `master` node.

Additionally, when you manually SSH into this server for the first time, it may ask for permission to store the IP address in your known hosts. Be sure to grant this permission.

### 4. Add Swarm Worker Nodes

On all your `worker` nodes, join them as worker nodes in the Swarm. To do this, use the command you received from the **1st step**:

```sh
docker swarm join --token <sometoken> <X.X.X.X>:<X>
```

Following these steps will set up Docker Swarm and enable you to effectively manage containerized applications across your cluster of Docker hosts, a crucial component of the Samarth deployment process.
