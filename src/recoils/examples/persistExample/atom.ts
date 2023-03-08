import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
    key: 'persist-example',
    storage: sessionStorage,
});


const persistExample = atom({
    key: 'persist-example',
    default: '',
    effects: [persistAtom],
});

export default persistExample;
