# Tappita Jeevan Prasad — Portfolio Website

Static personal portfolio showcasing skills, projects and experience of Tappita Jeevan Prasad (ASIC / VLSI Engineer).

## Features
- Responsive single-page layout (HTML / CSS / JS)
- Home, About, Skills, Education, Projects, Experience and Contact sections
- Particle background and tilt effects (assets included)
- Contact form (frontend only) and social links
- Static resume PDF included

## Tech stack
- HTML5, CSS3, JavaScript
- Font Awesome icons
- Optional: particles.js, Vanilla-Tilt, ScrollReveal

## Project structure
- index.html — main entry
- assets/
  - css/style.css
  - js/ (script.js, app.js, particles.min.js, etc.)
  - images/ (profile and other images)
- ATMOST resume.pdf — resume file

## Run locally (Windows)
No build step required — site is static.

Options:
1. Quick (open file)
   - Double-click `index.html` or open it in your browser.

2. Using Python (recommended for correct relative paths)
   - Open PowerShell or Command Prompt in project root:
     python -m http.server 8000
   - Open http://localhost:8000

3. Using Node (npx)
   - npx http-server -p 8000
   - Open http://localhost:8000

4. Using VS Code
   - Install Live Server extension, open workspace and click "Go Live".

## Deploy to GitHub Pages
Option A — simple:
1. Create a new GitHub repo and push this folder to the repository root.
2. In GitHub repo Settings → Pages, set "Source" to the `main` branch (root) and save.
3. GitHub will serve your site from username.github.io/repo-name (or the provided URL).

Option B — gh-pages (optional)
- Install gh-pages and configure scripts if you prefer automated deploys.

## Notes & suggestions
- Remove duplicate script tags or extra closing tags in `index.html` if you see any console warnings.
- Update links (resume, images, social profiles) before publishing.
- If contact form needs server handling, add a backend or use a service (EmailJS, Formspree, etc.).

## License
MIT — feel free to modify and publish.

## Contact
- Email: jeevanprasadtappita@gmail.com
- LinkedIn: https://www.linkedin.com/in/tappita-jeevan-prasad-013758289/
- GitHub: https://github.com/jeevanprasad-2004
