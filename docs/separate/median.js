export function myMedian(values, apiCall) {
 
    if (!Array.isArray(values)) {
        const errorMsg = "Error: input value must be a valid array";
        console.warn(`myMedian: ${errorMsg}`);
        const output = { error: errorMsg, result: null };
        return typeof apiCall === 'function' ? apiCall(output) : (console.log(output), output);
    }

 
    if (values.length === 0) {
        const errorMsg = "Error: Input value cannot be empty try adding a dummy value array";
        console.warn(`myMedian: ${errorMsg}`);
        const output = { error: errorMsg, result: null };
        return typeof apiCall === 'function' ? apiCall(output) : (console.log(output), output);
    }

    for (let i = 0; i < values.length; i++) {
        if (values[i] !== null && typeof values[i] !== 'number') {
            const errorMsg = `Error: Invalid value or element or character '${values[i]}' at index ${i}. All components should be values numbers or nulls check if you have alphabets or somethingelse.`;
            console.warn(`myMedian: ${errorMsg}`);
            const output = { error: errorMsg, result: null };
            return typeof apiCall === 'function' ? apiCall(output) : (console.log(output), output);
        }
    }

    const sorted = [...values].sort((a, b) => (a === null ? -1 : b === null ? 1 : a - b));
    const midIndex = Math.floor(sorted.length / 2);

    let output = null;


    if (sorted.length % 2 !== 0) {
        output = sorted[midIndex] === null ? null : sorted[midIndex];
    } else {
     
        if (sorted[midIndex - 1] === null && sorted[midIndex] === null) {
            output = null;
        } else {
            output = (sorted[midIndex - 1] + sorted[midIndex]) / 2;
        }
    }

    if (typeof apiCall === 'function') {
        return apiCall(output);
    } else {
        console.log(output);
        return output;
    }
}
