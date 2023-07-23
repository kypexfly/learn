## Serverless Node, Express and TypeScript  boilerplate on Vercel

Boilerplate with Node, Express, TypeScript, ESLint, Prettier and scripts configured to be deployed on Vercel as Serverless Express Server.

Please note the following:

* Serverless architecture may experience a delay when not used for an extended period (cold start).
* Websockets cannot be utilized in a serverless environment.
* Fast execution is crucial for serverless functions.
* Serverless connections are stateless.

## How does this work

* You might want to read [[1] this article](/#further-reading).
* Husky is being used to run a pre-commit script: `pnpm build && pnpm add-build`. 
* Warning: don't ignore `/build`. This is needed to deploy on Vercel.

## Setup

Clone to your local environment

```bash
git clone https://github.com/kypexfly/express-ts-vercel.git
```

Install node modules
```bash
pnpm install
```

### Environment variables

Follow the `.env.example` to a `.env` file for your variables.

```bash
PORT=
MONGO_URI=
# ... other env variables
```

### Deploy on Vercel

On Vercel dashboard, select your project from your GitHub account and deploy it. 

Your project is now available through the link they provide you.


## Further reading

1. https://dev.to/tirthpatel/deploy-node-ts-express-typescript-on-vercel-284h

## Others

* Need a robust boilerplate for a 24/7 Express server? You may want to use [this boilerplate](https://github.com/hagopj13/node-express-boilerplate) instead.
