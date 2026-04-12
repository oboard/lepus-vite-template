import './style.css'
import viteLogo from '/vite.svg'
import moonbitLogo from '/moonbit.png'
import lepusLogo from '/lepus.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://github.com/lepus-apps/lepus" target="_blank">
      <img src="${lepusLogo}" class="logo" alt="Lepus logo" />
    </a>
    <a href="https://moonbitlang.cn/" target="_blank">
      <img src="${moonbitLogo}" class="logo vanilla" alt="MoonBit logo" />
    </a>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <h1>Lepus + MoonBit + Vite</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Lepus and MoonBit and Vite logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
