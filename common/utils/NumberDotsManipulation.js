/**
 * Convert number 1000000 into 1.000.000
 */
export function numberWithDots(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}