import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
//import './topics/01-basic-types.ts'
//import './topics/02-object-interface.ts'
//import './topics/03-functions.ts'
//import './topics/04-homeworks-types.ts'
//import './topics/05-basic-destructuring.ts'
//import './topics/06-function-destructuring.ts'
import './topics/07-import-export.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Hello + World</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Hello World
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
