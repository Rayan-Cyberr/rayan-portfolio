Rayan Cybersecurity Portfolio
=============================

A static personal portfolio website built with HTML, CSS, and vanilla JavaScript.
It is designed to be simple to deploy and does not require a database, API, or
server-side application.

Project structure
-----------------
- index.html       Main portfolio page
- styles.css       Site styling and responsive layout
- script.js        Modal, navigation, gallery, language switching, and scroll interactions
- assets/          CV, certificates, project images, and portfolio artwork

Included assets
---------------
- assets/Rayan-Cyber-CV.pdf
- assets/rayan-cyber-hero.png
- assets/certificates/
  - soc-l1-tryhackme.pdf
  - comptia-security-plus.pdf
  - cyber-security-101-tryhackme.pdf
  - cyber-intelligence-and-threats-tuwaiq.pdf
  - cybersecurity-training-soc-ssa-sdaia.pdf
  - splunk-developer.pdf
- assets/gallery/
  - Malware analysis project images
  - Cyber Threat Intelligence project images

Projects
--------
The project cards use local gallery images and open interactive case-study modals.
The portfolio includes interactive case-study modals, a bilingual English/Arabic interface, and a small terminal-style hero panel.
The current package does not include separate PDF reports for the project cards. Add a report file to the assets folder before linking it from script.js if needed.

Security and code-quality notes
-------------------------------
- No passwords, API keys, or backend credentials are stored in the project.
- Inline JavaScript event handlers were removed and interactions are handled in script.js.
- Dynamic modal content is created with DOM APIs/textContent instead of injecting untrusted HTML.
- A Content Security Policy is included in index.html to restrict scripts, objects, frames,
  connections, and image sources.
- External Google Fonts and Font Awesome stylesheets remain enabled because the design uses them.
- Certificate links opened in a new tab use noopener and noreferrer.
- Keyboard focus styles and button semantics were added for better accessibility.
- The language switcher changes the page between English and Arabic, sets the document direction (LTR/RTL), and remembers the selected language locally.

Run locally
-----------
Option 1: Open index.html directly in a browser.

Option 2: Run a local static server from the project folder:

  python3 -m http.server 8000

Then open:

  http://localhost:8000

Deployment
----------
Upload the full project folder, keeping index.html, styles.css, script.js, and the
assets folder together in the same project root.

For a static host such as GitHub Pages, Netlify, Vercel, or Replit, no database is
required. If the hosting platform supports HTTP response headers, configure a CSP
header there as well for stronger enforcement than a meta tag.
