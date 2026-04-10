export interface LepusApi {
  counter: {
    increment: (delta?: number) => number
  }
}
// @ts-ignore
export let lepusApi: LepusApi = window.lepusApi