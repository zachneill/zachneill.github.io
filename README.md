# Zachneillportfolio

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
Ran npx ng build --output-path dist/cloudflare --configuration production
Created wrangler.jsonc with name, compatibility_flags, and pages_build_output_dir
Ran npx wrangler login
Ran npx wrangler pages project create zacharyneill
Ran npx wrangler pages deploy

Onboarded domain on Cloudflare
Added custom domain on Cloudflare
