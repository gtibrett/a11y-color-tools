export {resizeScreenSize, setDarkMode} from './mediaQueryMocks';
export {default as ReduxContainer} from './ReduxContainer';
export {testContainerForAccessibility, testForAccessibility} from './testForAccessibility';

export const wait = (seconds: number) => new Promise((r) => setTimeout(r, seconds * 1000));