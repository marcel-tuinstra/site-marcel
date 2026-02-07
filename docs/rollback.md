# Rollback Procedure

This document describes how to roll back a failed deployment for `site-marcel`.

## How Deployments Work

Deployments use the reusable CD workflow from `marcel-tuinstra/devops`. The flow is:

1. Nuxt generates static output (`npm run generate`).
2. Static files are packaged into an nginx Docker image.
3. The image is pushed to GHCR with a tag matching the commit SHA.
4. The image digest (immutable reference) is deployed to the target host via SSH.
5. A health check verifies the deployment is serving traffic.

## Automatic Rollback

The reusable CD workflow includes a health check step. If the health check fails
within the configured timeout (default: 180 seconds), the deployment is considered
failed and the GitHub Actions run will report a failure.

The `deploy-service.sh` script (in the devops repo) supports automatic rollback
to the last-known-good image when used directly on the host.

## Manual Rollback via SSH

If you need to manually roll back on the server:

```bash
# SSH into the deploy target
ssh mtuinstra@<host>

# Navigate to the compose directory
cd /mnt/nvme/docker-compose/site-marcel

# Find the previous working image digest from GHCR
# Visit: https://github.com/marcel-tuinstra/site-marcel/pkgs/container/site-marcel
# Or use: docker images ghcr.io/marcel-tuinstra/site-marcel

# Create a temporary override with the known-good image
cat > .deploy-override.yml <<EOF
services:
  site-marcel:
    image: ghcr.io/marcel-tuinstra/site-marcel@sha256:<KNOWN_GOOD_DIGEST>
EOF

# Deploy the override
docker compose -f docker-compose.yml -f .deploy-override.yml pull site-marcel
docker compose -f docker-compose.yml -f .deploy-override.yml up -d --no-deps site-marcel

# Verify health
curl -fsS https://marcel.tuinstra.dev/health

# Clean up override
rm -f .deploy-override.yml
```

## Manual Rollback via GitHub Actions

Re-run a previous successful deploy workflow:

1. Go to **Actions** > **Deploy Staging** or **Deploy Production**.
2. Find the last successful run.
3. Click **Re-run all jobs**.

This will rebuild and redeploy the image from that commit.

## Finding Previous Image Digests

Image digests are logged in the GitHub Actions run output during the
"Prepare immutable image reference" step. You can also browse the
[GHCR package page](https://github.com/marcel-tuinstra/site-marcel/pkgs/container/site-marcel)
to see all available image versions.

## Environment Protection

- **Staging**: deploys automatically on push to `main`.
- **Production**: requires manual approval via GitHub Environment protection rules.

This separation ensures production rollbacks can be handled independently from
staging deployments.
