import { ref, customRef, type Ref } from 'vue';

const debounce = <F extends (...args: any[]) => void>(fn: F, delay = 0) => {
    let timeout: ReturnType<typeof setTimeout> | undefined;
    return (...args: Parameters<F>) => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
    };
};

const useDebouncedRef = <T>(initialValue: T, delay = 0): Ref<T> => {
    const state = ref(initialValue) as Ref<T>;

    const debouncedRef = customRef<T>((track, trigger) => ({
        get() {
            track();
            return state.value;
        },
        set: debounce((value: T) => {
            state.value = value;
            trigger();
        }, delay),
    }));

    return debouncedRef;
};

export default useDebouncedRef;
