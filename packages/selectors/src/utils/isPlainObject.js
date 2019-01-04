/**
 * Little helper function that allows us to differentiate between plain Objects and Arrays.
 * Copied from lodash
 */

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
        // eslint-disable-next-line no-param-reassign
        value[symToStringTag] = undefined;
        unmasked = true;
    } catch (e) {
        // intentionally empty
    }

    const result = toString.call(value);
    if (unmasked) {
        if (isOwn) {
            // eslint-disable-next-line no-param-reassign
            value[symToStringTag] = tag;
        } else {
            // eslint-disable-next-line
            delete value[symToStringTag];
        }
    }
    return result;
}

const funcToString = Function.prototype.toString;

const objectCtorString = funcToString.call(Object);

function isObjectLike(value) {
    return typeof value === 'object' && value !== null;
}

function hasObjectOrModuleBaseGetTag(value) {
    return baseGetTag(value) === '[object Object]' || baseGetTag(value) === '[object Module]';
}

export default function isPlainObject(value) {
    if (!isObjectLike(value) || !hasObjectOrModuleBaseGetTag(value)) {
        return false;
    }
    const proto = Object.getPrototypeOf(value);
    if (proto === null) {
        return true;
    }
    const Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor === 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) === objectCtorString;
}
