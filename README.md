# Zachneillportfolio

Set up computer for WSL 2
Installed Docker for WSL 2

Installed Node v24.13.0
Installed angular cli v21.1.3
ng new, name zachneillportfolio, used Tailwind CSS, used SSR, added windsurf, agents.md, GitHub Copilot, JetBrains AI (junie)
Ran npm install daisyui@latest tailwindcss@latest @tailwindcss/postcss@latest postcss@latest --force
Added @plugin "daisyui"; in src/styles.css

Went to ionos.com
Bought a domain name (zachneill.com) for $1 for 1 year 
Activated SSL cert
Specified to use custom nameservers
Changed name servers to cloudflare's (poppy.ns.cloudflare.com and watson.ns.cloudflare.com)

Created Cloudflare account
npm i 
Ran npx ng build --output-path dist/cloudflare --configuration production
Created wrangler.jsonc with name, compatibility_flags, and pages_build_output_dir
Ran npx wrangler login
Ran npx wrangler pages project create zachneill
Ran npx wrangler pages deploy

Onboarded domain on Cloudflare
Added custom domain on Cloudflare

Created Supabase database
Updated API application.yaml (Used that instead of application.properties)
Note that for Docker you use envs SPRING_DATASOURCE_USERNAME, SPRING_DATASOURCE_URL, and SPRING_DATASOURCE_PASSWORD
Started api (may fail, just want to setup Supabase DB)
Ran data.sql file on Supabase

Set up Render 

CNAME pointed to bcvm.onrender.com

Created Uptime Robot account
Set healthcheck to keep it running 





Todo
Secrets manager 
Jenkins auto start/install
Jenkins persistent storage
Portfolio website itself 
