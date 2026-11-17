# Module 5 Week 4 Day 1 Demo

Declan Wilde · WEB 403 Advanced Full Stack Web Development

## Run in VS Code

Open this folder in VS Code and use Live Preview on `index.html`. Select a demo from the menu. No npm install or npm start is needed.

Alternatively, run `python3 -m http.server 4011 --bind localhost` in this folder, then open http://localhost:4011. Keep the terminal open; Control+C stops it. Demo 3 needs internet access for React, ReactDOM and Babel from the course starter's CDNs.

## Completed exercise

- Demo 1: window.onload creates an h1 and a text node with “Big Head!”, appends the text to the heading, and appends the heading to document.body.
- Demo 2: each select calls setBodyAttr with text, bgColor or link. The function checks document.body before updating the matching DOM property. Text switches black/red, background white/lightgrey, and link blue/green. These legacy body properties are retained because the exercise explicitly teaches them. The starter's version button is outside the requested changes and remains unchanged. The sample link stays on the page instead of navigating to the starter's nonexistent domain.
- Demo 3: the OnClickElements class defines handleClick(event). All eight elements call it through an onClick arrow callback. An alert shows event.target.id. preventDefault keeps the link examples on the same page.

## Explain it

DOM APIs let JavaScript create nodes and modify an existing document. appendChild adds a node to its parent. A change event supplies the selected color to the handler. React onClick callbacks receive an event whose target identifies the clicked element.

Based on the supplied ZIP and Week 4 Day 1 Exercise PDF. The final slide says Week 3 Day 1 submission, which appears to be a copied label; no GAP submission has been made.
