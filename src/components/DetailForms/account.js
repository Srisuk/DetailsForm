export const SAVE_DATA = 'save_data';

export function fetchValues(values) {
    return {
        type: SAVE_DATA,
        payload: values
    }
}

