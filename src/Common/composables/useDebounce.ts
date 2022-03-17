import { debounce } from "ts-debounce";

const useDebounce = (originalFunction: (...args: []) => void, waitMilliseconds: number) => ({
    debouncedFunction: debounce(originalFunction, waitMilliseconds)
})

export default useDebounce
