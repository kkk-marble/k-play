import { atom } from 'recoil';

export type User = {
  name: string;
  age: number;
};
const userAtom = atom<User[]>({
  key: 'selector-family-example',
  default: [],
});

export default userAtom;
