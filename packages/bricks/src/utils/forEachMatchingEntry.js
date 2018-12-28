import { forEachMatch } from '.';

/**
 * Execute a function for each entry of an object, if the provided predicate function returns true
 * for the object entry.
 *
 * @param o The object to process
 * @param predicate The function to test each entry (arguments: key and value of entry)
 * @param func The function to be called with each entry that matches (arguments: key and value of entry)
 * @return Number of matching entries
 *
 * @see forEachMatch
 */
export default (o, predicate, func) =>
    forEachMatch(Object.entries(o), entry => predicate(...entry), entry => func(...entry));
