---
sidebar_position: 6
title: Service Onboarding
sidebar_label: Service Onboarding
---

# Steps to on-board a new service

### Pre-requisites

- First setup jenkins using `jenkins-setup.md`
- Each service should have a build folder which contains `Dockerfile`, `Jenkinsfile` and a `build.sh` if needed. Jenkins file is very generic and one can use the given `Jenkinsfile` in the root folder of this repo. Following should be the repo structure at GitHub or any other SCM.

```
service_repo_name
    - build
        - Jenkinsfile
        - Dockerfile
        - build.sh (optional)
    - src
    - other folders
```

### Steps for build

- Now go to build folder and create a new item. Copy an existing build job for this new item.
- Configure the newly created job and modify the paths of `Dockerfile`, `Jenkins`, `Git Repo` according to your repository structure.
- Test a build by clicking `Scan Multibranch pipeline now`
- **The first build will fail on any branch always**, rebuild again by clicking `Rebuild with Parameters`

### Steps for deploy

- Now go to deploy folder and create a new item. Copy an existing deploy job for this new item.
- Go to `ansible_workspace_dir` and add a new tag and respective roles for the new service. You can use the structure of existing roles to add a new service.
- Update the Nginx conf file to expose your services on the local host from the docker swarm.

### Gotchas for localsetup

- Uncomment the lines in inventory/hosts

- Docker swarm will have all the services on a default network. Run `docker network create -d overlay application_default` to create a default network for your services.

- ansible playbooks have global variables declared in `group_vars/dev.yml` and `vars/main.yml` in the `ansible_workspace_dir`. Local variables are there in each roles' `vars/main.yml`

- We use hashicorp vaults to store passwords so modify the `secret path` and `VAULT_TOKEN` and `VAULT_ADDR` manually.

# Possible upcoming updates

- standard routes for each services might be used in nginx default conf. Like to access esamwad-backend a route `/samarth/esamwad-backend` would be defined.

- Hashicorp intergration to manage secrets
