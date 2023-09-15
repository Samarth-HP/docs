---
sidebar_position: 4
title: Jenkins Setup
sidebar_label: Jenkins Setup
---

# Steps to setup E2E deployment using Jenkins, Ansible, Docker Swarm

- Clone the repo in the `/home` (make sure to clone it there, as we will be creating symlink assuming this) folder of the server and run `jenkins-setup.sh`

```
cd scripts
chmod +x jenkins-setup.sh
./jenkins-setup.sh
```

- Go to localhost:8080 and follow the mentioned steps to create admin user and then install suggested plugins.

- Go to **Manage Jenkins -> Plugin Manager** and install **Copy Artifact**

- Run `jenkins-jobs-setup.sh`

```
cd scripts
chmod +x jenkins-job-setup.sh
./jenkins-job-setup.sh
```

- If the project is hosted on GitHub we would need ssh to connect to GitHub, in that case switch to jenkins user `su jenkins`
- Generate key-pair `ssh-keygen`
- Add private key to Jenkins and public key to GitHub
- Configure jobs to use the new credentials

- On the jenkins server setup a local registry

```
docker run -d -p 5000:5000 --restart=always --name registry registry:2
```

Also, you'll need to add this registry address to insecure-registries on all nodes accessing it. Open/create file `/etc/docker/daemon.json` and add:

```
{
    "insecure-registries" : [ "x.x.x.x:5000" ]
}
```

where `x.x.x.x` is the IP of the node where registry is hosted.

- Run the following and add `jenkins ALL=(ALL) NOPASSWD: ALL` at the end

```
sudo visudo

```

- Install Hashicorp vault plugin. Login into jenkins user: `su jenkins` & then install using command: `pip install hvac`.

- Add Vault token variables in Jenkins ....

- Generate an ssh key-pair for jenkins user & add the public key to the developer's Github account which has access to all the private repos in use currently. Some pipelines do operations like `git clone` and they need access to git. Post adding the key, please also verify git is able to verify the public key using command `ssh -T git@github.com`
