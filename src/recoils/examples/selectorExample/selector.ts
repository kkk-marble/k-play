import { selector } from 'recoil'
import secondAtom from './atom'

export const minSelector = selector({
  key: 'selector-example-selector',
  get: ({ get }) => {
    const second = get(secondAtom)
    return second / 60
  },
  set: ({ set }, value) => {
    set(secondAtom, Number(value) * 60)
  }
})
