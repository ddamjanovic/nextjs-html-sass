/**
 * Convert number like 0.45675866 to 45.68
 * @param {*} number
 */

export function numberFormater(number) {
    return Math.round((number) * 10000) / 100
}
