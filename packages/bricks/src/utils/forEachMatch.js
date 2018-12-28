/**
 * Execute a function for each element in an array, if the provided predicate function returns true
 * for the array element.
 *
 * @param arr The array to process
 * @param predicate The function to test each element
 * @param func The function to be called with each element that matches
 * @return Number of matching elements
 */
export default (arr, predicate, func) =>
    arr.filter(predicate).reduce((acc, curr) => {
        func(curr);
        return acc + 1;
    }, 0);
