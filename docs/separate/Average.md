export function myAverage(values, apiCall) {

    if (!Array.isArray(values)) {
        const errorMsg = "Error: input must be a value or a number on which mathematical operations can be performed";
        console.warn(`myAverage: ${errorMsg}`);
        const output = { error: errorMsg, result: null };
        return typeof apiCall === 'function' ? apiCall(output) : (console.log(output), output);
    }


    if (values.length === 0) {
        const errorMsg = "Error: input value cannot be empty";
        console.warn(`myAverage: ${errorMsg}`);
        const output = { error: errorMsg, result: null };
        return typeof apiCall === 'function' ? apiCall(output) : (console.log(output), output);
    }

  
    for (let i = 0; i < values.length; i++) {
        if (values[i] !== null && typeof values[i] !== 'number') {
            const errorMsg = `Error: Invalid value or a component'${values[i]}' at index ${i}. All elements or values must be valid on which mathematical operations can be performed`;
            console.warn(`myAverage: ${errorMsg}`);
            const output = { error: errorMsg, result: null };
            return typeof apiCall === 'function' ? apiCall(output) : (console.log(output), output);
        }
    }

    const allNull = values.every(v => v === null);
    if (allNull) {
        const output = null;
        return typeof apiCall === 'function' ? apiCall(output) : (console.log(output), output);
    }


    const validNumbers = values.filter(v => v !== null);
    const sum = validNumbers.reduce((acc, curr) => acc + curr, 0);
    const output = sum / validNumbers.length;

    if (typeof apiCall === 'function') {
        return apiCall(output);
    } else {
        console.log(output);
        return output;
    }
}
