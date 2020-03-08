function functionNameIsExtraLongToExceedLineLengthRule(arg: number[]): number[] {
    // I expect an inspection here for strict-boolean-expressions
    if (arg) {
        console.warn(arg);
    }

    return [1, 2, 3]
}
