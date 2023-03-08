import { selectorFamily } from 'recoil';
import userAtom from './atom';


export const userSelector = selectorFamily({
    key: 'selector-family-example-selector',
    get: (userName :string) => ({ get }) => {
        const users = get(userAtom);
        return users?.find(({name}) => name === userName)
    },
});