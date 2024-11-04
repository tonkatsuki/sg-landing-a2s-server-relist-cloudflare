# sg-landing-a2s-server-relist-cloudflare

I use this in conjunction with [this](https://github.com/tonkatsuki/py-a2s-polling-json) script as Cloudflare Workers cannot create UDP requests, which a2s queries over. I then re-host with HTTPS so when my js from the landing page pulls down the json file to format, it's not requesting the json over http from the flask app. I'm sure there's a 500x better way to do all this, but I'm not a webdev and I'm sure I'll be educated on what's better eventually.

This code gets auto pulled from cloudflare worker via git integration. Just need to link your git repo then in the Worker Settings under Build configuration set the deploy command to soomething like this:

```
Build command:None
Deploy command:npx wrangler deploy worker.js --name sg-landing-a2s-server-relist --compatibility-date 2024-10-06
Root directory:/
```
