# Express on Porter

A minimal Express app, ready to deploy on Porter with zero edits.

## What's inside

| Component | Version | Notes |
| --- | --- | --- |
| Node.js | 24 LTS | `node:24-slim` base image |
| Express | 5.3 | ES modules, request logging with morgan |

| Endpoint | Method | Response |
| --- | --- | --- |
| `/` | GET | JSON greeting confirming the app is running |
| `/healthz` | GET | `{"status":"ok"}`, used by the Porter health check |

## Run locally

```sh
npm install
npm start
npm test
```

The app listens on `$PORT`, or `3000` when it is not set.

With Docker:

```sh
docker build -t nodejs-getting-started . && docker run -p 3000:3000 nodejs-getting-started
```

## Deploy on Porter

### From the dashboard

1. Fork this repo.
2. In https://dashboard.porter.run, create a new app from your GitHub repo.
3. Porter reads `porter.yaml`, builds the Dockerfile, and opens a PR adding a GitHub Actions workflow.
4. Merge it. Every push to `main` redeploys.

See https://docs.porter.run/applications/deploy/deploy-from-github-repo for a full walkthrough.

### From the CLI

Install the CLI (https://docs.porter.run/cli/installation), then:

```sh
porter auth login
porter apply -f porter.yaml
```

## Configuration

`porter.yaml` builds the image from the `Dockerfile` and defines one `web` service:

| Field | Value | Purpose |
| --- | --- | --- |
| `run` | `node server.js` | Start command, same as the Dockerfile `CMD` |
| `port` | `3000` | Port the service receives traffic on |
| `cpuCores` | `0.25` | CPU allocated to each instance |
| `ramMegabytes` | `256` | Memory allocated to each instance |
| `healthCheck.httpPath` | `/healthz` | Path Porter polls to decide the app is healthy |

| Name | Required | Description |
| --- | --- | --- |
| `PORT` | No | Port to listen on. Defaults to `3000`, which matches `porter.yaml`. |
| `NODE_ENV` | No | Set to `production` in the Docker image. |

Full reference: https://docs.porter.run/applications/configuration-as-code/reference

## Learn more

- https://docs.porter.run/getting-started/quickstart
- https://docs.porter.run/applications/configuration-as-code/overview
- https://docs.porter.run/applications/configure/environment-groups
- https://docs.porter.run/addons/datastores
- https://docs.porter.run/preview-environments/overview
- https://github.com/porter-dev/starters
