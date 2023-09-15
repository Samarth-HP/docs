---
sidebar_position: 5
title: Vault Setup
sidebar_label: Vault Setup
---

This guide will lead you through the process of setting up HashiCorp Vault, a tool designed to manage secrets and safeguard sensitive data.

## Prerequisites

Before you commence, make sure you have the following:

- [Docker](https://www.docker.com/)
- [Docker Compose V2](https://docs.docker.com/compose/)

## Steps

1. Start the Vault Service

   ```sh
   docker-compose -f /home/samarth-devops/docker-compose/vault-compose.yml up -d
   ```

2. Access the Vault UI at `<ip>:9055/ui`. To ensure extra security of Vault, we recommend that you don't expose this on public IP/DNS.

3. Upon accessing the UI, a screen will prompt you to specify the number of key shares for dividing your root key. Depending on your desired security level, input a number like 2 or 3.

4. Additionally, provide a key threshold value, indicating the number of key shares required to reconstruct the root key. Numbers such as 2 or 3 can be used.

5. Click the `Initialize` button.

6. On the ensuing screen, Vault will have initialized your keys. You'll encounter an option to download these keys via the `Download keys` button.

7. Proceed by clicking the `Continue to unseal` button.

8. On the following screen, you'll need to enter each key individually to unseal the Vault.

9. Once the Vault is successfully unsealed, you can log in using your root token.

For more comprehensive information, consult the official [HashiCorp Vault documentation](https://learn.hashicorp.com/vault).
