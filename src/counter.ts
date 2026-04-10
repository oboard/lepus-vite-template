import { lepusApi } from "./lepusApi"

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', async () => {
    setCounter(await lepusApi.counter.increment(1))
  })
  setCounter(0)
}