import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>My First TypeScript Site</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

const backendUrl = '16.16.24.168';

fetch(backendUrl)
  .then(response => response.text())
  .then(data => {
    console.log("Data received:", data);
    // Find the #app div and append the message
    const app = document.querySelector<HTMLDivElement>('#app')!;
    app.innerHTML += `<p>Message from AWS: <strong>${data}</strong></p>`;
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });