/**
 * Little helper function that allows us to differentiate between plain Objects and Arrays.
 * Copied from lodash
 */

/* eslint-disable no-param-reassign */
/* eslint-disable no-empty */

const objectProto = Object.prototype;
const hasOwnProperty = objectProto.hasOwnProperty;
const toString = objectProto.toString;
const symToStringTag = typeof Symbol !== 'undefined' ? Symbol.toStringTag : undefined;

function baseGetTag(value) {
    if (value === null) {
        return value === undefined ? '[object Undefined]' : '[object Null]';
    }
    if (!(symToStringTag && symToStringTag in Object(value))) {
        return toString.call(value);
    }
    const isOwn = hasOwnProperty.call(value, symToStringTag);
    const tag = value[symToStringTag];
    let unmasked = false;
    try {
        value[symToStringTag] = undefined;
        unmasked = true;
    } catch (e) {}

    const result = toString.call(value);
    if (unmasked) {
        if (isOwn) {
            value[symToStringTag] = tag;
        } else {
            delete value[symToStringTag];
        }
    }
    return result;
}

/** Used to resolve the decompiled source of functions. */
const funcToString = Function.prototype.toString;

/** Used to infer the `Object` constructor. */
const objectCtorString = funcToString.call(Object);

function isObjectLike(value) {
    return typeof value === 'object' && value !== null;
}

export default function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) !== '[object Object]') {
        return false;
    }
    const proto = Object.getPrototypeOf(value);
    if (proto === null) {
        return true;
    }
    const Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor === 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) === objectCtorString;
}
