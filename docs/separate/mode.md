export function myMode(values, apiCall) {

    if (!Array.isArray(values)) {
        const errorMsg = "Error: Input must be a valid value on which mathematical operations can be performed";
        console.warn(`myMode: ${errorMsg}`);
        const output = { error: errorMsg, result: null };
        return typeof apiCall === 'function' ? apiCall(output) : (console.log(output), output);
    }


    if (values.length === 0) {
        const errorMsg = "Error: Input value cannot be empty";
        console.warn(`myMode: ${errorMsg}`);
        const output = { error: errorMsg, result: null };
        return typeof apiCall === 'function' ? apiCall(output) : (console.log(output), output);
    }

 
    for (let i = 0; i < values.length; i++) {
        if (values[i] !== null && typeof values[i] !== 'number') {
            const errorMsg = `Error: Invalid value '${values[i]}' at index ${i}. All values must be numbers or characters on which mathematical operations can be performed`;
            console.warn(`myMode: ${errorMsg}`);
            const output = { error: errorMsg, result: null };
            return typeof apiCall === 'function' ? apiCall(output) : (console.log(output), output);
        }
    }


    const frequencyMap = new Map();
    let maxFreq = 0;

    for (const val of values) {
        const count = (frequencyMap.get(val) || 0) + 1;
        frequencyMap.set(val, count);
        if (count > maxFreq) {
            maxFreq = count;
        }
    }

 
    let modes = [];
    for (const [val, freq] of frequencyMap.entries()) {
        if (freq === maxFreq) {
            modes.push(val);
        }
    }

    
    let output = null;
    if (maxFreq > 1 || values.length === 1) {
        output = modes.length === 1 ? modes[0] : modes;
    }

    if (typeof apiCall === 'function') {
        return apiCall(output);
    } else {
        console.log(output);
        return output;
    }
}
