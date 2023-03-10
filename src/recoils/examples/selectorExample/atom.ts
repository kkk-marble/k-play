import { atom } from 'recoil';

const secondAtom = atom<number>({
  key: 'selector-example',
  default: 0,
});

export default secondAtom;
