function multiply(a: number, b: number, c?: number): number {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

//The optional parameters must appear after the required parameters in the parameter list.