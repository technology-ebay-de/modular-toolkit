module.exports = (function(e) {
    const t = {};
    function n(r) {
        if (t[r]) return t[r].exports;
        const o = (t[r] = { i: r, l: !1, exports: {} });
        return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
        (n.m = e),
        (n.c = t),
        (n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
        }),
        (n.r = function(e) {
            typeof Symbol !== 'undefined' &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (n.t = function(e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && typeof e === 'object' && e && e.__esModule) return e;
            const r = Object.create(null);
            if (
                (n.r(r),
                Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
                2 & t && typeof e !== 'string')
            )
                for (const o in e) n.d(r, o, (t => e[t]).bind(null, o));
            return r;
        }),
        (n.n = function(e) {
            const t =
                e && e.__esModule
                    ? function() {
                          return e.default;
                      }
                    : function() {
                          return e;
                      };
            return n.d(t, 'a', t), t;
        }),
        (n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = ''),
        n((n.s = 26))
    );
})([
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r =
            typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
                ? function(e) {
                      return typeof e;
                  }
                : function(e) {
                      return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                  };
        (t.check = function(e, t, n) {
            if (!t(e)) throw (g('error', 'uncaught at check', n), new Error(n));
        }),
            (t.hasOwn = p),
            (t.remove = function(e, t) {
                const n = e.indexOf(t);
                n >= 0 && e.splice(n, 1);
            }),
            (t.deferred = y),
            (t.arrayOfDeffered = function(e) {
                for (var t = [], n = 0; n < e; n++) t.push(y());
                return t;
            }),
            (t.delay = function(e) {
                let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = void 0,
                    r = new Promise(r => {
                        n = setTimeout(() => r(t), e);
                    });
                return (
                    (r[f] = function() {
                        return clearTimeout(n);
                    }),
                    r
                );
            }),
            (t.createMockTask = function() {
                let e,
                    t = !0,
                    n = void 0,
                    r = void 0;
                return (
                    ((e = {})[a] = !0),
                    (e.isRunning = function() {
                        return t;
                    }),
                    (e.result = function() {
                        return n;
                    }),
                    (e.error = function() {
                        return r;
                    }),
                    (e.setRunning = function(e) {
                        return (t = e);
                    }),
                    (e.setResult = function(e) {
                        return (n = e);
                    }),
                    (e.setError = function(e) {
                        return (r = e);
                    }),
                    e
                );
            }),
            (t.autoInc = h),
            (t.makeIterator = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
                    r = arguments[3],
                    o = { name: n, next: e, throw: t, return: m };
                r && (o[c] = !0);
                typeof Symbol !== 'undefined' &&
                    (o[Symbol.iterator] = function() {
                        return o;
                    });
                return o;
            }),
            (t.log = g),
            (t.deprecate = function(e, t) {
                return function() {
                    return e.apply(void 0, arguments);
                };
            });
        var o =
                Object.assign ||
                function(e) {
                    for (let t = 1; t < arguments.length; t++) {
                        const n = arguments[t];
                        for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                },
            u =
                typeof Symbol === 'function' && r(Symbol.iterator) === 'symbol'
                    ? function(e) {
                          return void 0 === e ? 'undefined' : r(e);
                      }
                    : function(e) {
                          return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype
                              ? 'symbol'
                              : void 0 === e ? 'undefined' : r(e);
                      },
            i = (t.sym = function(e) {
                return `@@redux-saga/${e}`;
            }),
            a = (t.TASK = i('TASK')),
            c = (t.HELPER = i('HELPER')),
            f = ((t.MATCH = i('MATCH')), (t.CANCEL = i('CANCEL_PROMISE'))),
            l = (t.SAGA_ACTION = i('SAGA_ACTION')),
            s = ((t.SELF_CANCELLATION = i('SELF_CANCELLATION')),
            (t.konst = function(e) {
                return function() {
                    return e;
                };
            }));
        (t.kTrue = s(!0)),
            (t.kFalse = s(!1)),
            (t.noop = function() {}),
            (t.ident = function(e) {
                return e;
            });
        const d = Object.prototype.hasOwnProperty;
        function p(e, t) {
            return v.notUndef(e) && d.call(e, t);
        }
        var v = (t.is = {
            undef(e) {
                return e === null || void 0 === e;
            },
            notUndef(e) {
                return e !== null && void 0 !== e;
            },
            func(e) {
                return typeof e === 'function';
            },
            number(e) {
                return typeof e === 'number';
            },
            string(e) {
                return typeof e === 'string';
            },
            array: Array.isArray,
            object(e) {
                return e && !v.array(e) && (void 0 === e ? 'undefined' : u(e)) === 'object';
            },
            promise(e) {
                return e && v.func(e.then);
            },
            iterator(e) {
                return e && v.func(e.next) && v.func(e.throw);
            },
            iterable(e) {
                return e && v.func(Symbol) ? v.func(e[Symbol.iterator]) : v.array(e);
            },
            task(e) {
                return e && e[a];
            },
            observable(e) {
                return e && v.func(e.subscribe);
            },
            buffer(e) {
                return e && v.func(e.isEmpty) && v.func(e.take) && v.func(e.put);
            },
            pattern(e) {
                return (
                    e && (v.string(e) || (void 0 === e ? 'undefined' : u(e)) === 'symbol' || v.func(e) || v.array(e))
                );
            },
            channel(e) {
                return e && v.func(e.take) && v.func(e.close);
            },
            helper(e) {
                return e && e[c];
            },
            stringableFunc(e) {
                return v.func(e) && p(e, 'toString');
            }
        });
        t.object = {
            assign(e, t) {
                for (const n in t) p(t, n) && (e[n] = t[n]);
            }
        };
        t.array = {
            from(e) {
                const t = Array(e.length);
                for (const n in e) p(e, n) && (t[n] = e[n]);
                return t;
            }
        };
        function y() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = o({}, e),
                n = new Promise((e, n) => {
                    (t.resolve = e), (t.reject = n);
                });
            return (t.promise = n), t;
        }
        function h() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return function() {
                return ++e;
            };
        }
        t.uid = h();
        var b = function(e) {
                throw e;
            },
            m = function(e) {
                return { value: e, done: !0 };
            };
        function g(e, t) {
            const n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '';
            typeof window === 'undefined'
                ? console.log(`redux-saga ${e}: ${t}\n${(n && n.stack) || n}`)
                : console[e](t, n);
        }
        (t.updateIncentive = function(e, t) {
            return `${e} has been deprecated in favor of ${t}, please update your code`;
        }),
            (t.internalErr = function(e) {
                return new Error(
                    `\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: ${e}\n`
                );
            }),
            (t.createSetContextWarning = function(e, t) {
                return `${e ? `${e}.` : ''}setContext(props): argument ${t} is not a plain object`;
            }),
            (t.wrapSagaDispatch = function(e) {
                return function(t) {
                    return e(Object.defineProperty(t, l, { value: !0 }));
                };
            }),
            (t.cloneableGenerator = function e(t) {
                return function() {
                    for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    let u = [],
                        i = t.apply(void 0, r);
                    return {
                        next(e) {
                            return u.push(e), i.next(e);
                        },
                        clone() {
                            const n = e(t).apply(void 0, r);
                            return u.forEach(e => n.next(e)), n;
                        },
                        return(e) {
                            return i.return(e);
                        },
                        throw(e) {
                            return i.throw(e);
                        }
                    };
                };
            });
    },
    function(e, t) {
        e.exports = require('prop-types');
    },
    function(e, t) {
        e.exports = require('react');
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = n(62);
        Object.keys(r).forEach(e => {
            e !== 'default' &&
                e !== '__esModule' &&
                Object.defineProperty(t, e, {
                    enumerable: !0,
                    get() {
                        return r[e];
                    }
                });
        });
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.asEffect = t.takem = t.detach = void 0),
            (t.take = P),
            (t.put = w),
            (t.all = E),
            (t.race = function(e) {
                return S(f, e);
            }),
            (t.call = function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return S(l, k('call', e, n));
            }),
            (t.apply = function(e, t) {
                const n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                return S(l, k('apply', { context: e, fn: t }, n));
            }),
            (t.cps = function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return S(s, k('cps', e, n));
            }),
            (t.fork = x),
            (t.spawn = function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return j(x.apply(void 0, [e].concat(n)));
            }),
            (t.join = function e() {
                for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                if (n.length > 1) return E(n.map(t => e(t)));
                const u = n[0];
                (0, r.check)(u, r.is.notUndef, 'join(task): argument task is undefined');
                (0, r.check)(u, r.is.task, `join(task): argument ${u} is not a valid Task object ${O}`);
                return S(p, u);
            }),
            (t.cancel = function e() {
                for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                if (n.length > 1) return E(n.map(t => e(t)));
                const u = n[0];
                n.length === 1 &&
                    ((0, r.check)(u, r.is.notUndef, 'cancel(task): argument task is undefined'),
                    (0, r.check)(u, r.is.task, `cancel(task): argument ${u} is not a valid Task object ${O}`));
                return S(v, u || r.SELF_CANCELLATION);
            }),
            (t.select = function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                arguments.length === 0
                    ? (e = r.ident)
                    : ((0, r.check)(e, r.is.notUndef, 'select(selector,[...]): argument selector is undefined'),
                      (0, r.check)(e, r.is.func, `select(selector,[...]): argument ${e} is not a function`));
                return S(y, { selector: e, args: n });
            }),
            (t.actionChannel = function(e, t) {
                (0, r.check)(e, r.is.notUndef, 'actionChannel(pattern,...): argument pattern is undefined'),
                    arguments.length > 1 &&
                        ((0, r.check)(t, r.is.notUndef, 'actionChannel(pattern, buffer): argument buffer is undefined'),
                        (0, r.check)(
                            t,
                            r.is.buffer,
                            `actionChannel(pattern, buffer): argument ${t} is not a valid buffer`
                        ));
                return S(h, { pattern: e, buffer: t });
            }),
            (t.cancelled = function() {
                return S(b, {});
            }),
            (t.flush = function(e) {
                return (0, r.check)(e, r.is.channel, `flush(channel): argument ${e} is not valid channel`), S(m, e);
            }),
            (t.getContext = function(e) {
                return (0, r.check)(e, r.is.string, `getContext(prop): argument ${e} is not a string`), S(g, e);
            }),
            (t.setContext = function(e) {
                return (0, r.check)(e, r.is.object, (0, r.createSetContextWarning)(null, e)), S(_, e);
            }),
            (t.takeEvery = function(e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), u = 2; u < n; u++) r[u - 2] = arguments[u];
                return x.apply(void 0, [o.takeEveryHelper, e, t].concat(r));
            }),
            (t.takeLatest = function(e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), u = 2; u < n; u++) r[u - 2] = arguments[u];
                return x.apply(void 0, [o.takeLatestHelper, e, t].concat(r));
            }),
            (t.throttle = function(e, t, n) {
                for (var r = arguments.length, u = Array(r > 3 ? r - 3 : 0), i = 3; i < r; i++) u[i - 3] = arguments[i];
                return x.apply(void 0, [o.throttleHelper, e, t, n].concat(u));
            });
        var r = n(0),
            o = n(70),
            u = (0, r.sym)('IO'),
            i = 'TAKE',
            a = 'PUT',
            c = 'ALL',
            f = 'RACE',
            l = 'CALL',
            s = 'CPS',
            d = 'FORK',
            p = 'JOIN',
            v = 'CANCEL',
            y = 'SELECT',
            h = 'ACTION_CHANNEL',
            b = 'CANCELLED',
            m = 'FLUSH',
            g = 'GET_CONTEXT',
            _ = 'SET_CONTEXT',
            O =
                '\n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)',
            S = function(e, t) {
                let n;
                return ((n = {})[u] = !0), (n[e] = t), n;
            },
            j = (t.detach = function(e) {
                return (
                    (0, r.check)(C.fork(e), r.is.object, 'detach(eff): argument must be a fork effect'),
                    (e[d].detached = !0),
                    e
                );
            });
        function P() {
            const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '*';
            if (
                (arguments.length &&
                    (0, r.check)(arguments[0], r.is.notUndef, 'take(patternOrChannel): patternOrChannel is undefined'),
                r.is.pattern(e))
            )
                return S(i, { pattern: e });
            if (r.is.channel(e)) return S(i, { channel: e });
            throw new Error(`take(patternOrChannel): argument ${String(e)} is not valid channel or a valid pattern`);
        }
        P.maybe = function() {
            const e = P.apply(void 0, arguments);
            return (e[i].maybe = !0), e;
        };
        t.takem = (0, r.deprecate)(P.maybe, (0, r.updateIncentive)('takem', 'take.maybe'));
        function w(e, t) {
            return (
                arguments.length > 1
                    ? ((0, r.check)(e, r.is.notUndef, 'put(channel, action): argument channel is undefined'),
                      (0, r.check)(e, r.is.channel, `put(channel, action): argument ${e} is not a valid channel`),
                      (0, r.check)(t, r.is.notUndef, 'put(channel, action): argument action is undefined'))
                    : ((0, r.check)(e, r.is.notUndef, 'put(action): argument action is undefined'),
                      (t = e),
                      (e = null)),
                S(a, { channel: e, action: t })
            );
        }
        function E(e) {
            return S(c, e);
        }
        function k(e, t, n) {
            (0, r.check)(t, r.is.notUndef, `${e}: argument fn is undefined`);
            let o = null;
            if (r.is.array(t)) {
                const u = t;
                (o = u[0]), (t = u[1]);
            } else if (t.fn) {
                const i = t;
                (o = i.context), (t = i.fn);
            }
            return (
                o && r.is.string(t) && r.is.func(o[t]) && (t = o[t]),
                (0, r.check)(t, r.is.func, `${e}: argument ${t} is not a function`),
                { context: o, fn: t, args: n }
            );
        }
        function x(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return S(d, k('fork', e, n));
        }
        (w.resolve = function() {
            const e = w.apply(void 0, arguments);
            return (e[a].resolve = !0), e;
        }),
            (w.sync = (0, r.deprecate)(w.resolve, (0, r.updateIncentive)('put.sync', 'put.resolve')));
        var M = function(e) {
                return function(t) {
                    return t && t[u] && t[e];
                };
            },
            C = (t.asEffect = {
                take: M(i),
                put: M(a),
                all: M(c),
                race: M(f),
                call: M(l),
                cps: M(s),
                fork: M(d),
                join: M(p),
                cancel: M(v),
                select: M(y),
                actionChannel: M(h),
                cancelled: M(b),
                flush: M(m),
                getContext: M(g),
                setContext: M(_)
            });
    },
    function(e, t) {
        e.exports = require('recompose');
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function(e) {
                typeof console !== 'undefined' && typeof console.error === 'function' && console.error(e);
                try {
                    throw new Error(e);
                } catch (e) {}
            });
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        let r = i(n(38)),
            o = i(n(43)),
            u = i(n(45));
        function i(e) {
            return e && e.__esModule ? e : { default: e };
        }
        let a = '[object Object]',
            c = Function.prototype,
            f = Object.prototype,
            l = c.toString,
            s = f.hasOwnProperty,
            d = l.call(Object);
        t.default = function(e) {
            if (!(0, u.default)(e) || (0, r.default)(e) != a) return !1;
            const t = (0, o.default)(e);
            if (t === null) return !0;
            const n = s.call(t, 'constructor') && t.constructor;
            return typeof n === 'function' && n instanceof n && l.call(n) == d;
        };
    },
    function(e, t, n) {
        e.exports = n(68);
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.qEnd = void 0),
            (t.safeName = function(e) {
                return r.is.channel(e) ? 'channel' : Array.isArray(e) ? String(e.map(e => String(e))) : String(e);
            }),
            (t.default = function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'iterator',
                    i = void 0,
                    a = t;
                function c(t, n) {
                    if (a === u) return o;
                    if (n) throw ((a = u), n);
                    i && i(t);
                    let r = e[a](),
                        c = r[0],
                        f = r[1],
                        l = r[2];
                    return (i = l), (a = c) === u ? o : f;
                }
                return (0, r.makeIterator)(c, e => c(null, e), n, !0);
            });
        var r = n(0),
            o = { done: !0, value: void 0 },
            u = (t.qEnd = {});
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.UNDEFINED_INPUT_ERROR = t.INVALID_BUFFER = t.isEnd = t.END = void 0),
            (t.emitter = function() {
                const e = [];
                return {
                    subscribe(t) {
                        return (
                            e.push(t),
                            function() {
                                return (0, r.remove)(e, t);
                            }
                        );
                    },
                    emit(t) {
                        for (let n = e.slice(), r = 0, o = n.length; r < o; r++) n[r](t);
                    }
                };
            }),
            (t.channel = s),
            (t.eventChannel = d),
            (t.stdChannel = function(e) {
                const t = d(t =>
                    e(e => {
                        e[r.SAGA_ACTION] ? t(e) : (0, u.asap)(() => t(e));
                    })
                );
                return i({}, t, {
                    take(e, n) {
                        arguments.length > 1 &&
                            ((0, r.check)(n, r.is.func, "channel.take's matcher argument must be a function"),
                            (e[r.MATCH] = n)),
                            t.take(e);
                    }
                });
            });
        var r = n(0),
            o = n(25),
            u = n(72),
            i =
                Object.assign ||
                function(e) {
                    for (let t = 1; t < arguments.length; t++) {
                        const n = arguments[t];
                        for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                },
            a = (t.END = { type: '@@redux-saga/CHANNEL_END' }),
            c = (t.isEnd = function(e) {
                return e && e.type === '@@redux-saga/CHANNEL_END';
            });
        let f = (t.INVALID_BUFFER = 'invalid buffer passed to channel factory function'),
            l = (t.UNDEFINED_INPUT_ERROR = 'Saga was provided with an undefined action');
        function s() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.buffers.fixed(),
                t = !1,
                n = [];
            function u() {
                if (t && n.length) throw (0, r.internalErr)('Cannot have a closed channel with pending takers');
                if (n.length && !e.isEmpty())
                    throw (0, r.internalErr)('Cannot have pending takers with non empty buffer');
            }
            return (
                (0, r.check)(e, r.is.buffer, f),
                {
                    take(o) {
                        u(),
                            (0, r.check)(o, r.is.func, "channel.take's callback must be a function"),
                            t && e.isEmpty()
                                ? o(a)
                                : e.isEmpty()
                                  ? (n.push(o),
                                    (o.cancel = function() {
                                        return (0, r.remove)(n, o);
                                    }))
                                  : o(e.take());
                    },
                    put(o) {
                        if ((u(), (0, r.check)(o, r.is.notUndef, l), !t)) {
                            if (!n.length) return e.put(o);
                            for (let i = 0; i < n.length; i++) {
                                const a = n[i];
                                if (!a[r.MATCH] || a[r.MATCH](o)) return n.splice(i, 1), a(o);
                            }
                        }
                    },
                    flush(n) {
                        u(),
                            (0, r.check)(n, r.is.func, "channel.flush' callback must be a function"),
                            t && e.isEmpty() ? n(a) : n(e.flush());
                    },
                    close() {
                        if ((u(), !t && ((t = !0), n.length))) {
                            const e = n;
                            n = [];
                            for (let r = 0, o = e.length; r < o; r++) e[r](a);
                        }
                    },
                    get __takers__() {
                        return n;
                    },
                    get __closed__() {
                        return t;
                    }
                }
            );
        }
        function d(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.buffers.none(),
                n = arguments[2];
            arguments.length > 2 && (0, r.check)(n, r.is.func, 'Invalid match function passed to eventChannel');
            var u = s(t),
                i = function() {
                    u.__closed__ || (a && a(), u.close());
                },
                a = e(e => {
                    c(e) ? i() : (n && !n(e)) || u.put(e);
                });
            if ((u.__closed__ && a(), !r.is.func(a)))
                throw new Error('in eventChannel: subscribe should return a function to unsubscribe');
            return { take: u.take, flush: u.flush, close: i };
        }
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = (function(e) {
            return e && e.__esModule ? e : { default: e };
        })(n(27));
        t.default = r.default;
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.storeShape = t.subscriptionShape = void 0);
        const r = (function(e) {
            return e && e.__esModule ? e : { default: e };
        })(n(1));
        (t.subscriptionShape = r.default.shape({
            trySubscribe: r.default.func.isRequired,
            tryUnsubscribe: r.default.func.isRequired,
            notifyNestedSubs: r.default.func.isRequired,
            isSubscribed: r.default.func.isRequired
        })),
            (t.storeShape = r.default.shape({
                subscribe: r.default.func.isRequired,
                dispatch: r.default.func.isRequired,
                getState: r.default.func.isRequired
            }));
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r =
            typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
                ? function(e) {
                      return typeof e;
                  }
                : function(e) {
                      return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                  };
        t.default = function(e) {
            let t,
                n,
                f = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                v = f.getDisplayName,
                y =
                    void 0 === v
                        ? function(e) {
                              return `ConnectAdvanced(${e})`;
                          }
                        : v,
                h = f.methodName,
                b = void 0 === h ? 'connectAdvanced' : h,
                m = f.renderCountProp,
                g = void 0 === m ? void 0 : m,
                _ = f.shouldHandleStateChanges,
                O = void 0 === _ || _,
                S = f.storeKey,
                j = void 0 === S ? 'store' : S,
                P = f.withRef,
                w = void 0 !== P && P,
                E = (function(e, t) {
                    const n = {};
                    for (const r in e)
                        t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
                    return n;
                })(f, [
                    'getDisplayName',
                    'methodName',
                    'renderCountProp',
                    'shouldHandleStateChanges',
                    'storeKey',
                    'withRef'
                ]),
                k = `${j}Subscription`,
                x = s++,
                M = (((t = {})[j] = c.storeShape), (t[k] = c.subscriptionShape), t),
                C = (((n = {})[k] = c.subscriptionShape), n);
            return function(t) {
                (0, u.default)(
                    typeof t === 'function',
                    `You must pass a component to the function returned by connect. Instead received ${JSON.stringify(
                        t
                    )}`
                );
                let n = t.displayName || t.name || 'Component',
                    c = y(n),
                    f = l({}, E, {
                        getDisplayName: y,
                        methodName: b,
                        renderCountProp: g,
                        shouldHandleStateChanges: O,
                        storeKey: j,
                        withRef: w,
                        displayName: c,
                        wrappedComponentName: n,
                        WrappedComponent: t
                    }),
                    s = (function(n) {
                        function o(e, t) {
                            !(function(e, t) {
                                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                            })(this, o);
                            const i = (function(e, t) {
                                if (!e)
                                    throw new ReferenceError(
                                        "this hasn't been initialised - super() hasn't been called"
                                    );
                                return !t ||
                                    ((void 0 === t ? 'undefined' : r(t)) !== 'object' && typeof t !== 'function')
                                    ? e
                                    : t;
                            })(this, n.call(this, e, t));
                            return (
                                (i.version = x),
                                (i.state = {}),
                                (i.renderCount = 0),
                                (i.store = e[j] || t[j]),
                                (i.propsMode = Boolean(e[j])),
                                (i.setWrappedInstance = i.setWrappedInstance.bind(i)),
                                (0, u.default)(
                                    i.store,
                                    `Could not find "${j}" in either the context or props of "${c}". Either wrap the root component in a <Provider>, or explicitly pass "${j}" as a prop to "${c}".`
                                ),
                                i.initSelector(),
                                i.initSubscription(),
                                i
                            );
                        }
                        return (
                            (function(e, t) {
                                if (typeof t !== 'function' && t !== null)
                                    throw new TypeError(
                                        `Super expression must either be null or a function, not ${
                                            void 0 === t ? 'undefined' : r(t)
                                        }`
                                    );
                                (e.prototype = Object.create(t && t.prototype, {
                                    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
                                })),
                                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                            })(o, n),
                            (o.prototype.getChildContext = function() {
                                let e,
                                    t = this.propsMode ? null : this.subscription;
                                return ((e = {})[k] = t || this.context[k]), e;
                            }),
                            (o.prototype.componentDidMount = function() {
                                O &&
                                    (this.subscription.trySubscribe(),
                                    this.selector.run(this.props),
                                    this.selector.shouldComponentUpdate && this.forceUpdate());
                            }),
                            (o.prototype.componentWillReceiveProps = function(e) {
                                this.selector.run(e);
                            }),
                            (o.prototype.shouldComponentUpdate = function() {
                                return this.selector.shouldComponentUpdate;
                            }),
                            (o.prototype.componentWillUnmount = function() {
                                this.subscription && this.subscription.tryUnsubscribe(),
                                    (this.subscription = null),
                                    (this.notifyNestedSubs = p),
                                    (this.store = null),
                                    (this.selector.run = p),
                                    (this.selector.shouldComponentUpdate = !1);
                            }),
                            (o.prototype.getWrappedInstance = function() {
                                return (
                                    (0, u.default)(
                                        w,
                                        `To access the wrapped instance, you need to specify { withRef: true } in the options argument of the ${b}() call.`
                                    ),
                                    this.wrappedInstance
                                );
                            }),
                            (o.prototype.setWrappedInstance = function(e) {
                                this.wrappedInstance = e;
                            }),
                            (o.prototype.initSelector = function() {
                                const t = e(this.store.dispatch, f);
                                (this.selector = (function(e, t) {
                                    var n = {
                                        run(r) {
                                            try {
                                                const o = e(t.getState(), r);
                                                (o !== n.props || n.error) &&
                                                    ((n.shouldComponentUpdate = !0), (n.props = o), (n.error = null));
                                            } catch (e) {
                                                (n.shouldComponentUpdate = !0), (n.error = e);
                                            }
                                        }
                                    };
                                    return n;
                                })(t, this.store)),
                                    this.selector.run(this.props);
                            }),
                            (o.prototype.initSubscription = function() {
                                if (O) {
                                    const e = (this.propsMode ? this.props : this.context)[k];
                                    (this.subscription = new a.default(this.store, e, this.onStateChange.bind(this))),
                                        (this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(
                                            this.subscription
                                        ));
                                }
                            }),
                            (o.prototype.onStateChange = function() {
                                this.selector.run(this.props),
                                    this.selector.shouldComponentUpdate
                                        ? ((this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate),
                                          this.setState(d))
                                        : this.notifyNestedSubs();
                            }),
                            (o.prototype.notifyNestedSubsOnComponentDidUpdate = function() {
                                (this.componentDidUpdate = void 0), this.notifyNestedSubs();
                            }),
                            (o.prototype.isSubscribed = function() {
                                return Boolean(this.subscription) && this.subscription.isSubscribed();
                            }),
                            (o.prototype.addExtraProps = function(e) {
                                if (!(w || g || (this.propsMode && this.subscription))) return e;
                                const t = l({}, e);
                                return (
                                    w && (t.ref = this.setWrappedInstance),
                                    g && (t[g] = this.renderCount++),
                                    this.propsMode && this.subscription && (t[k] = this.subscription),
                                    t
                                );
                            }),
                            (o.prototype.render = function() {
                                const e = this.selector;
                                if (((e.shouldComponentUpdate = !1), e.error)) throw e.error;
                                return (0, i.createElement)(t, this.addExtraProps(e.props));
                            }),
                            o
                        );
                    })(i.Component);
                return (
                    (s.WrappedComponent = t),
                    (s.displayName = c),
                    (s.childContextTypes = C),
                    (s.contextTypes = M),
                    (s.propTypes = M),
                    (0, o.default)(s, t)
                );
            };
        };
        var o = f(n(31)),
            u = f(n(32)),
            i = n(2),
            a = f(n(33)),
            c = n(12);
        function f(e) {
            return e && e.__esModule ? e : { default: e };
        }
        var l =
            Object.assign ||
            function(e) {
                for (let t = 1; t < arguments.length; t++) {
                    const n = arguments[t];
                    for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            };
        var s = 0,
            d = {};
        function p() {}
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.ActionTypes = void 0);
        const r =
            typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
                ? function(e) {
                      return typeof e;
                  }
                : function(e) {
                      return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                  };
        t.default = function e(t, n, i) {
            let c;
            typeof n === 'function' && void 0 === i && ((i = n), (n = void 0));
            if (void 0 !== i) {
                if (typeof i !== 'function') throw new Error('Expected the enhancer to be a function.');
                return i(e)(t, n);
            }
            if (typeof t !== 'function') throw new Error('Expected the reducer to be a function.');
            let f = t;
            let l = n;
            let s = [];
            let d = s;
            let p = !1;
            function v() {
                d === s && (d = s.slice());
            }
            function y() {
                return l;
            }
            function h(e) {
                if (typeof e !== 'function') throw new Error('Expected listener to be a function.');
                let t = !0;
                return (
                    v(),
                    d.push(e),
                    function() {
                        if (t) {
                            (t = !1), v();
                            const n = d.indexOf(e);
                            d.splice(n, 1);
                        }
                    }
                );
            }
            function b(e) {
                if (!(0, o.default)(e))
                    throw new Error('Actions must be plain objects. Use custom middleware for async actions.');
                if (void 0 === e.type)
                    throw new Error(
                        'Actions may not have an undefined "type" property. Have you misspelled a constant?'
                    );
                if (p) throw new Error('Reducers may not dispatch actions.');
                try {
                    (p = !0), (l = f(l, e));
                } finally {
                    p = !1;
                }
                for (let t = (s = d), n = 0; n < t.length; n++) {
                    const r = t[n];
                    r();
                }
                return e;
            }
            b({ type: a.INIT });
            return (
                (c = {
                    dispatch: b,
                    subscribe: h,
                    getState: y,
                    replaceReducer(e) {
                        if (typeof e !== 'function') throw new Error('Expected the nextReducer to be a function.');
                        (f = e), b({ type: a.INIT });
                    }
                }),
                (c[u.default] = function() {
                    let e,
                        t = h;
                    return (
                        ((e = {
                            subscribe(e) {
                                if ((void 0 === e ? 'undefined' : r(e)) !== 'object')
                                    throw new TypeError('Expected the observer to be an object.');
                                function n() {
                                    e.next && e.next(y());
                                }
                                n();
                                const o = t(n);
                                return { unsubscribe: o };
                            }
                        })[u.default] = function() {
                            return this;
                        }),
                        e
                    );
                }),
                c
            );
        };
        var o = i(n(7)),
            u = i(n(46));
        function i(e) {
            return e && e.__esModule ? e : { default: e };
        }
        var a = (t.ActionTypes = { INIT: '@@redux/INIT' });
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = (function(e) {
            return e && e.__esModule ? e : { default: e };
        })(n(39)).default.Symbol;
        t.default = r;
    },
    function(e, t, n) {
        let r,
            o =
                typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
                    ? function(e) {
                          return typeof e;
                      }
                    : function(e) {
                          return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype
                              ? 'symbol'
                              : typeof e;
                      };
        r = (function() {
            return this;
        })();
        try {
            r = r || Function('return this')() || (0, eval)('this');
        } catch (e) {
            (typeof window === 'undefined' ? 'undefined' : o(window)) === 'object' && (r = window);
        }
        e.exports = r;
    },
    function(e, t, n) {
        e.exports = function(e) {
            return (
                e.webpackPolyfill ||
                    ((e.deprecate = function() {}),
                    (e.paths = []),
                    e.children || (e.children = []),
                    Object.defineProperty(e, 'loaded', {
                        enumerable: !0,
                        get() {
                            return e.l;
                        }
                    }),
                    Object.defineProperty(e, 'id', {
                        enumerable: !0,
                        get() {
                            return e.i;
                        }
                    }),
                    (e.webpackPolyfill = 1)),
                e
            );
        };
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function(e) {
                typeof console !== 'undefined' && typeof console.error === 'function' && console.error(e);
                try {
                    throw new Error(e);
                } catch (e) {}
            });
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if (t.length === 0)
                    return function(e) {
                        return e;
                    };
                if (t.length === 1) return t[0];
                return t.reduce(
                    (e, t) =>
                        function() {
                            return e(t.apply(void 0, arguments));
                        }
                );
            });
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.wrapMapToPropsConstant = function(e) {
                return function(t, n) {
                    const r = e(t, n);
                    function o() {
                        return r;
                    }
                    return (o.dependsOnOwnProps = !1), o;
                };
            }),
            (t.getDependsOnOwnProps = r),
            (t.wrapMapToPropsFunc = function(e, t) {
                return function(t, n) {
                    n.displayName;
                    var o = function(e, t) {
                        return o.dependsOnOwnProps ? o.mapToProps(e, t) : o.mapToProps(e);
                    };
                    return (
                        (o.dependsOnOwnProps = !0),
                        (o.mapToProps = function(t, n) {
                            (o.mapToProps = e), (o.dependsOnOwnProps = r(e));
                            let u = o(t, n);
                            return (
                                typeof u === 'function' &&
                                    ((o.mapToProps = u), (o.dependsOnOwnProps = r(u)), (u = o(t, n))),
                                u
                            );
                        }),
                        o
                    );
                };
            });
        !(function(e) {
            e && e.__esModule;
        })(n(21));
        function r(e) {
            return e.dependsOnOwnProps !== null && void 0 !== e.dependsOnOwnProps
                ? Boolean(e.dependsOnOwnProps)
                : e.length !== 1;
        }
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function(e, t, n) {
                (0, r.default)(e) ||
                    (0, o.default)(`${n}() in ${t} must return a plain object. Instead received ${e}.`);
            });
        var r = u(n(7)),
            o = u(n(6));
        function u(e) {
            return e && e.__esModule ? e : { default: e };
        }
    },
    function(e, t, n) {
        const r =
            typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
                ? function(e) {
                      return typeof e;
                  }
                : function(e) {
                      return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                  };
        e.exports = (function(e) {
            const t = {};
            function n(r) {
                if (t[r]) return t[r].exports;
                const o = (t[r] = { i: r, l: !1, exports: {} });
                return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
            }
            return (
                (n.m = e),
                (n.c = t),
                (n.d = function(e, t, r) {
                    n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
                }),
                (n.r = function(e) {
                    typeof Symbol !== 'undefined' &&
                        Symbol.toStringTag &&
                        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                }),
                (n.t = function(e, t) {
                    if ((1 & t && (e = n(e)), 8 & t)) return e;
                    if (4 & t && (void 0 === e ? 'undefined' : r(e)) == 'object' && e && e.__esModule) return e;
                    const o = Object.create(null);
                    if (
                        (n.r(o),
                        Object.defineProperty(o, 'default', { enumerable: !0, value: e }),
                        2 & t && typeof e !== 'string')
                    )
                        for (const u in e) n.d(o, u, (t => e[t]).bind(null, u));
                    return o;
                }),
                (n.n = function(e) {
                    const t =
                        e && e.__esModule
                            ? function() {
                                  return e.default;
                              }
                            : function() {
                                  return e;
                              };
                    return n.d(t, 'a', t), t;
                }),
                (n.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t);
                }),
                (n.p = ''),
                n((n.s = 4))
            );
        })([
            function(e, t) {
                e.exports = n(2);
            },
            function(e, t, n) {
                e.exports = function(e) {
                    const t = [];
                    return (
                        (t.toString = function() {
                            return this.map(t => {
                                const n = (function(e, t) {
                                    let n = e[1] || '',
                                        r = e[3];
                                    if (!r) return n;
                                    if (t && typeof btoa === 'function') {
                                        let o = (function(e) {
                                                return `/*# sourceMappingURL=data:application/json;charset=utf-8;base64,${btoa(
                                                    unescape(encodeURIComponent(JSON.stringify(e)))
                                                )} */`;
                                            })(r),
                                            u = r.sources.map(e => `/*# sourceURL=${r.sourceRoot}${e} */`);
                                        return [n]
                                            .concat(u)
                                            .concat([o])
                                            .join('\n');
                                    }
                                    return [n].join('\n');
                                })(t, e);
                                return t[2] ? `@media ${t[2]}{${n}}` : n;
                            }).join('');
                        }),
                        (t.i = function(e, n) {
                            typeof e === 'string' && (e = [[null, e, '']]);
                            for (var r = {}, o = 0; o < this.length; o++) {
                                const u = this[o][0];
                                typeof u === 'number' && (r[u] = !0);
                            }
                            for (o = 0; o < e.length; o++) {
                                const i = e[o];
                                (typeof i[0] === 'number' && r[i[0]]) ||
                                    (n && !i[2] ? (i[2] = n) : n && (i[2] = `(${i[2]}) and (${n})`), t.push(i));
                            }
                        }),
                        t
                    );
                };
            },
            function(e, t, n) {
                let o = {},
                    u = (function(e) {
                        let t;
                        return function() {
                            return (
                                void 0 === t &&
                                    (t = function() {
                                        return window && document && document.all && !window.atob;
                                    }.apply(this, arguments)),
                                t
                            );
                        };
                    })(),
                    i = (function(e) {
                        const t = {};
                        return function(e) {
                            if (typeof e === 'function') return e();
                            if (void 0 === t[e]) {
                                let n = function(e) {
                                    return document.querySelector(e);
                                }.call(this, e);
                                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                                    try {
                                        n = n.contentDocument.head;
                                    } catch (e) {
                                        n = null;
                                    }
                                t[e] = n;
                            }
                            return t[e];
                        };
                    })(),
                    a = null,
                    c = 0,
                    f = [],
                    l = n(9);
                function s(e, t) {
                    for (let n = 0; n < e.length; n++) {
                        let r = e[n],
                            u = o[r.id];
                        if (u) {
                            u.refs++;
                            for (var i = 0; i < u.parts.length; i++) u.parts[i](r.parts[i]);
                            for (; i < r.parts.length; i++) u.parts.push(b(r.parts[i], t));
                        } else {
                            const a = [];
                            for (i = 0; i < r.parts.length; i++) a.push(b(r.parts[i], t));
                            o[r.id] = { id: r.id, refs: 1, parts: a };
                        }
                    }
                }
                function d(e, t) {
                    for (var n = [], r = {}, o = 0; o < e.length; o++) {
                        let u = e[o],
                            i = t.base ? u[0] + t.base : u[0],
                            a = { css: u[1], media: u[2], sourceMap: u[3] };
                        r[i] ? r[i].parts.push(a) : n.push((r[i] = { id: i, parts: [a] }));
                    }
                    return n;
                }
                function p(e, t) {
                    const n = i(e.insertInto);
                    if (!n)
                        throw new Error(
                            "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
                        );
                    const o = f[f.length - 1];
                    if (e.insertAt === 'top')
                        o
                            ? o.nextSibling ? n.insertBefore(t, o.nextSibling) : n.appendChild(t)
                            : n.insertBefore(t, n.firstChild),
                            f.push(t);
                    else if (e.insertAt === 'bottom') n.appendChild(t);
                    else {
                        if (r(e.insertAt) != 'object' || !e.insertAt.before)
                            throw new Error(
                                "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
                            );
                        const u = i(`${e.insertInto} ${e.insertAt.before}`);
                        n.insertBefore(t, u);
                    }
                }
                function v(e) {
                    if (e.parentNode === null) return !1;
                    e.parentNode.removeChild(e);
                    const t = f.indexOf(e);
                    t >= 0 && f.splice(t, 1);
                }
                function y(e) {
                    const t = document.createElement('style');
                    return (e.attrs.type = 'text/css'), h(t, e.attrs), p(e, t), t;
                }
                function h(e, t) {
                    Object.keys(t).forEach(n => {
                        e.setAttribute(n, t[n]);
                    });
                }
                function b(e, t) {
                    let n, r, o, u;
                    if (t.transform && e.css) {
                        if (!(u = t.transform(e.css))) return function() {};
                        e.css = u;
                    }
                    if (t.singleton) {
                        const i = c++;
                        (n = a || (a = y(t))), (r = g.bind(null, n, i, !1)), (o = g.bind(null, n, i, !0));
                    } else
                        e.sourceMap &&
                        typeof URL === 'function' &&
                        typeof URL.createObjectURL === 'function' &&
                        typeof URL.revokeObjectURL === 'function' &&
                        typeof Blob === 'function' &&
                        typeof btoa === 'function'
                            ? ((n = (function(e) {
                                  const t = document.createElement('link');
                                  return (
                                      (e.attrs.type = 'text/css'),
                                      (e.attrs.rel = 'stylesheet'),
                                      h(t, e.attrs),
                                      p(e, t),
                                      t
                                  );
                              })(t)),
                              (r = function(e, t, n) {
                                  let r = n.css,
                                      o = n.sourceMap,
                                      u = void 0 === t.convertToAbsoluteUrls && o;
                                  (t.convertToAbsoluteUrls || u) && (r = l(r)),
                                      o &&
                                          (r += `\n/*# sourceMappingURL=data:application/json;base64,${btoa(
                                              unescape(encodeURIComponent(JSON.stringify(o)))
                                          )} */`);
                                  let i = new Blob([r], { type: 'text/css' }),
                                      a = e.href;
                                  (e.href = URL.createObjectURL(i)), a && URL.revokeObjectURL(a);
                              }.bind(null, n, t)),
                              (o = function() {
                                  v(n), n.href && URL.revokeObjectURL(n.href);
                              }))
                            : ((n = y(t)),
                              (r = function(e, t) {
                                  let n = t.css,
                                      r = t.media;
                                  if ((r && e.setAttribute('media', r), e.styleSheet)) e.styleSheet.cssText = n;
                                  else {
                                      for (; e.firstChild; ) e.removeChild(e.firstChild);
                                      e.appendChild(document.createTextNode(n));
                                  }
                              }.bind(null, n)),
                              (o = function() {
                                  v(n);
                              }));
                    return (
                        r(e),
                        function(t) {
                            if (t) {
                                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                                r((e = t));
                            } else o();
                        }
                    );
                }
                e.exports = function(e, t) {
                    if (
                        typeof DEBUG !== 'undefined' &&
                        DEBUG &&
                        (typeof document === 'undefined' ? 'undefined' : r(document)) != 'object'
                    )
                        throw new Error('The style-loader cannot be used in a non-browser environment');
                    ((t = t || {}).attrs = r(t.attrs) == 'object' ? t.attrs : {}),
                        t.singleton || typeof t.singleton === 'boolean' || (t.singleton = u()),
                        t.insertInto || (t.insertInto = 'head'),
                        t.insertAt || (t.insertAt = 'bottom');
                    const n = d(e, t);
                    return (
                        s(n, t),
                        function(e) {
                            for (var r = [], u = 0; u < n.length; u++) {
                                const i = n[u];
                                (a = o[i.id]).refs--, r.push(a);
                            }
                            for (e && s(d(e, t), t), u = 0; u < r.length; u++) {
                                var a;
                                if ((a = r[u]).refs === 0) {
                                    for (let c = 0; c < a.parts.length; c++) a.parts[c]();
                                    delete o[a.id];
                                }
                            }
                        }
                    );
                };
                const m = (function() {
                    const e = [];
                    return function(t, n) {
                        return (e[t] = n), e.filter(Boolean).join('\n');
                    };
                })();
                function g(e, t, n, r) {
                    const o = n ? '' : r.css;
                    if (e.styleSheet) e.styleSheet.cssText = m(t, o);
                    else {
                        let u = document.createTextNode(o),
                            i = e.childNodes;
                        i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(u, i[t]) : e.appendChild(u);
                    }
                }
            },
            function(e, t) {
                e.exports = n(1);
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                const r = n(5);
                Object.defineProperty(t, 'Box', {
                    enumerable: !0,
                    get() {
                        return l(r).default;
                    }
                });
                const o = n(10);
                Object.defineProperty(t, 'Button', {
                    enumerable: !0,
                    get() {
                        return l(o).default;
                    }
                });
                const u = n(14);
                Object.defineProperty(t, 'Footer', {
                    enumerable: !0,
                    get() {
                        return l(u).default;
                    }
                });
                const i = n(18);
                Object.defineProperty(t, 'Header', {
                    enumerable: !0,
                    get() {
                        return l(i).default;
                    }
                });
                const a = n(22);
                Object.defineProperty(t, 'List', {
                    enumerable: !0,
                    get() {
                        return l(a).default;
                    }
                });
                const c = n(26);
                Object.defineProperty(t, 'ListItem', {
                    enumerable: !0,
                    get() {
                        return l(c).default;
                    }
                });
                const f = n(30);
                function l(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                Object.defineProperty(t, 'Spinner', {
                    enumerable: !0,
                    get() {
                        return l(f).default;
                    }
                });
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                const r = (function(e) {
                    return e && e.__esModule ? e : { default: e };
                })(n(6));
                t.default = r.default;
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                let r = u(n(0)),
                    o = u(n(3));
                function u(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function i(e) {
                    const t = e.children;
                    return r.default.createElement('article', { className: 'demo-ui-box' }, t);
                }
                n(7), (i.propTypes = { children: o.default.node }), (t.default = i);
            },
            function(e, t, n) {
                let r = n(8);
                typeof r === 'string' && (r = [[e.i, r, '']]);
                n(2)(r, { hmr: !0, transform: void 0, insertInto: void 0 }), r.locals && (e.exports = r.locals);
            },
            function(e, t, n) {
                (e.exports = n(1)(!1)).push([
                    e.i,
                    '.demo-ui-box {\n    background-color: #fdf6e3;\n    border-radius: 20px;\n    box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, .3);\n    height: 400px;\n    display: flex;\n    flex-direction: column;\n}\n',
                    ''
                ]);
            },
            function(e, t, n) {
                e.exports = function(e) {
                    const t = typeof window !== 'undefined' && window.location;
                    if (!t) throw new Error('fixUrls requires window.location');
                    if (!e || typeof e !== 'string') return e;
                    let n = `${t.protocol}//${t.host}`,
                        r = n + t.pathname.replace(/\/[^\/]*$/, '/');
                    return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (e, t) => {
                        let o,
                            u = t
                                .trim()
                                .replace(/^"(.*)"$/, (e, t) => t)
                                .replace(/^'(.*)'$/, (e, t) => t);
                        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(u)
                            ? e
                            : ((o =
                                  u.indexOf('//') === 0
                                      ? u
                                      : u.indexOf('/') === 0 ? n + u : r + u.replace(/^\.\//, '')),
                              `url(${JSON.stringify(o)})`);
                    });
                };
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                const r = (function(e) {
                    return e && e.__esModule ? e : { default: e };
                })(n(11));
                t.default = r.default;
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                const r = u(n(0));
                n(12);
                const o = u(n(3));
                function u(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function i(e) {
                    let t = e.label,
                        n = e.handleClick;
                    return r.default.createElement('button', { className: 'demo-ui-button', onClick: n }, t);
                }
                (i.propTypes = { label: o.default.string.isRequired, handleClick: o.default.func.isRequired }),
                    (t.default = i);
            },
            function(e, t, n) {
                let r = n(13);
                typeof r === 'string' && (r = [[e.i, r, '']]);
                n(2)(r, { hmr: !0, transform: void 0, insertInto: void 0 }), r.locals && (e.exports = r.locals);
            },
            function(e, t, n) {
                (e.exports = n(1)(!1)).push([
                    e.i,
                    '.demo-ui-button {\n    color: #fff;\n    background-color: #1a6091;\n    border: none;\n    padding: 8px 16px;\n    border-radius: 16px;\n    box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, .3);\n}\n',
                    ''
                ]);
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                const r = (function(e) {
                    return e && e.__esModule ? e : { default: e };
                })(n(15));
                t.default = r.default;
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                const r = u(n(0));
                n(16);
                const o = u(n(3));
                function u(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function i(e) {
                    const t = e.children;
                    return r.default.createElement('footer', { className: 'demo-ui-footer' }, t);
                }
                (i.propTypes = { children: o.default.node }), (t.default = i);
            },
            function(e, t, n) {
                let r = n(17);
                typeof r === 'string' && (r = [[e.i, r, '']]);
                n(2)(r, { hmr: !0, transform: void 0, insertInto: void 0 }), r.locals && (e.exports = r.locals);
            },
            function(e, t, n) {
                (e.exports = n(1)(!1)).push([
                    e.i,
                    '.demo-ui-footer {\n    padding: 8px 8px 8px 16px;\n    text-align: right;\n}\n',
                    ''
                ]);
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                const r = (function(e) {
                    return e && e.__esModule ? e : { default: e };
                })(n(19));
                t.default = r.default;
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                const r = u(n(0));
                n(20);
                const o = u(n(3));
                function u(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function i(e) {
                    const t = e.title;
                    return r.default.createElement(
                        'header',
                        { className: 'demo-ui-header' },
                        r.default.createElement('h1', null, t)
                    );
                }
                (i.propTypes = { title: o.default.string.isRequired }), (t.default = i);
            },
            function(e, t, n) {
                let r = n(21);
                typeof r === 'string' && (r = [[e.i, r, '']]);
                n(2)(r, { hmr: !0, transform: void 0, insertInto: void 0 }), r.locals && (e.exports = r.locals);
            },
            function(e, t, n) {
                (e.exports = n(1)(!1)).push([
                    e.i,
                    '.demo-ui-header {\n    color: #1a6091;\n    font-weight: 900;\n    font-size: 1.2em;\n    padding: 18px 8px 8px 12px;\n}\n\n.demo-ui-header h1 {\n    font-weight: bold;\n    margin: 0;\n}\n',
                    ''
                ]);
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                const r = (function(e) {
                    return e && e.__esModule ? e : { default: e };
                })(n(23));
                t.default = r.default;
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                const r = u(n(0));
                n(24);
                const o = u(n(3));
                function u(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function i(e) {
                    const t = e.children;
                    return r.default.createElement('ul', { className: 'demo-ui-list' }, t);
                }
                (i.propTypes = { children: o.default.node }), (t.default = i);
            },
            function(e, t, n) {
                let r = n(25);
                typeof r === 'string' && (r = [[e.i, r, '']]);
                n(2)(r, { hmr: !0, transform: void 0, insertInto: void 0 }), r.locals && (e.exports = r.locals);
            },
            function(e, t, n) {
                (e.exports = n(1)(!1)).push([
                    e.i,
                    '.demo-ui-list {\n    overflow-y: scroll;\n    border-top: 1px solid #dbd5c5;\n    border-bottom: 1px solid #dbd5c5;\n}\n',
                    ''
                ]);
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                const r = (function(e) {
                    return e && e.__esModule ? e : { default: e };
                })(n(27));
                t.default = r.default;
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                const r = u(n(0));
                n(28);
                const o = u(n(3));
                function u(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function i(e) {
                    const t = e.children;
                    return r.default.createElement('li', { className: 'demo-ui-list-item' }, t);
                }
                (i.propTypes = { children: o.default.node }), (t.default = i);
            },
            function(e, t, n) {
                let r = n(29);
                typeof r === 'string' && (r = [[e.i, r, '']]);
                n(2)(r, { hmr: !0, transform: void 0, insertInto: void 0 }), r.locals && (e.exports = r.locals);
            },
            function(e, t, n) {
                (e.exports = n(1)(!1)).push([
                    e.i,
                    '.demo-ui-list-item {\n    padding: 8px 8px 8px 12px;\n    border-bottom: 1px solid #dbd5c5;\n}\n\n.demo-ui-list-item:last-child {\n    border-bottom: none;\n    padding-bottom: 16px;\n}\n',
                    ''
                ]);
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                const r = (function(e) {
                    return e && e.__esModule ? e : { default: e };
                })(n(31));
                t.default = r.default;
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                const r = (function(e) {
                    return e && e.__esModule ? e : { default: e };
                })(n(0));
                n(32),
                    (t.default = function() {
                        return r.default.createElement(
                            'div',
                            { className: 'demo-ui-spinner' },
                            r.default.createElement('div', { className: 'demo-ui-double-bounce1' }),
                            r.default.createElement('div', { className: 'demo-ui-double-bounce2' })
                        );
                    });
            },
            function(e, t, n) {
                let r = n(33);
                typeof r === 'string' && (r = [[e.i, r, '']]);
                n(2)(r, { hmr: !0, transform: void 0, insertInto: void 0 }), r.locals && (e.exports = r.locals);
            },
            function(e, t, n) {
                (e.exports = n(1)(!1)).push([
                    e.i,
                    '.demo-ui-spinner {\n    width: 40px;\n    height: 40px;\n    position: relative;\n    margin: auto;\n}\n\n.demo-ui-double-bounce1,\n.demo-ui-double-bounce2 {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: #586e75;\n    opacity: .6;\n    position: absolute;\n    top: 0;\n    left: 0;\n    animation: demo-ui-bounce 2s infinite ease-in-out;\n}\n\n.demo-ui-double-bounce2 {\n    animation-delay: -1s;\n}\n\n@keyframes demo-ui-bounce {\n    0%,\n    100% {\n        transform: scale(0);\n    }\n\n    50% {\n        transform: scale(1);\n    }\n}\n',
                    ''
                ]);
            }
        ]);
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.selectTopStories = void 0);
        const r = n(63);
        Object.defineProperty(t, 'selectTopStories', {
            enumerable: !0,
            get() {
                return u(r).default;
            }
        });
        const o = u(r);
        function u(e) {
            return e && e.__esModule ? e : { default: e };
        }
        t.default = { selectTopStories: o.default };
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = n(4);
        Object.defineProperty(t, 'take', {
            enumerable: !0,
            get() {
                return r.take;
            }
        }),
            Object.defineProperty(t, 'takem', {
                enumerable: !0,
                get() {
                    return r.takem;
                }
            }),
            Object.defineProperty(t, 'put', {
                enumerable: !0,
                get() {
                    return r.put;
                }
            }),
            Object.defineProperty(t, 'all', {
                enumerable: !0,
                get() {
                    return r.all;
                }
            }),
            Object.defineProperty(t, 'race', {
                enumerable: !0,
                get() {
                    return r.race;
                }
            }),
            Object.defineProperty(t, 'call', {
                enumerable: !0,
                get() {
                    return r.call;
                }
            }),
            Object.defineProperty(t, 'apply', {
                enumerable: !0,
                get() {
                    return r.apply;
                }
            }),
            Object.defineProperty(t, 'cps', {
                enumerable: !0,
                get() {
                    return r.cps;
                }
            }),
            Object.defineProperty(t, 'fork', {
                enumerable: !0,
                get() {
                    return r.fork;
                }
            }),
            Object.defineProperty(t, 'spawn', {
                enumerable: !0,
                get() {
                    return r.spawn;
                }
            }),
            Object.defineProperty(t, 'join', {
                enumerable: !0,
                get() {
                    return r.join;
                }
            }),
            Object.defineProperty(t, 'cancel', {
                enumerable: !0,
                get() {
                    return r.cancel;
                }
            }),
            Object.defineProperty(t, 'select', {
                enumerable: !0,
                get() {
                    return r.select;
                }
            }),
            Object.defineProperty(t, 'actionChannel', {
                enumerable: !0,
                get() {
                    return r.actionChannel;
                }
            }),
            Object.defineProperty(t, 'cancelled', {
                enumerable: !0,
                get() {
                    return r.cancelled;
                }
            }),
            Object.defineProperty(t, 'flush', {
                enumerable: !0,
                get() {
                    return r.flush;
                }
            }),
            Object.defineProperty(t, 'getContext', {
                enumerable: !0,
                get() {
                    return r.getContext;
                }
            }),
            Object.defineProperty(t, 'setContext', {
                enumerable: !0,
                get() {
                    return r.setContext;
                }
            }),
            Object.defineProperty(t, 'takeEvery', {
                enumerable: !0,
                get() {
                    return r.takeEvery;
                }
            }),
            Object.defineProperty(t, 'takeLatest', {
                enumerable: !0,
                get() {
                    return r.takeLatest;
                }
            }),
            Object.defineProperty(t, 'throttle', {
                enumerable: !0,
                get() {
                    return r.throttle;
                }
            });
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.buffers = t.BUFFER_OVERFLOW = void 0);
        let r = n(0),
            o = (t.BUFFER_OVERFLOW = "Channel's Buffer overflow!"),
            u = 1,
            i = 3,
            a = 4,
            c = { isEmpty: r.kTrue, put: r.noop, take: r.noop };
        function f() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
                t = arguments[1],
                n = new Array(e),
                r = 0,
                c = 0,
                f = 0,
                l = function(t) {
                    (n[c] = t), (c = (c + 1) % e), r++;
                },
                s = function() {
                    if (r != 0) {
                        const t = n[f];
                        return (n[f] = null), r--, (f = (f + 1) % e), t;
                    }
                },
                d = function() {
                    for (var e = []; r; ) e.push(s());
                    return e;
                };
            return {
                isEmpty() {
                    return r == 0;
                },
                put(s) {
                    if (r < e) l(s);
                    else {
                        let p = void 0;
                        switch (t) {
                            case u:
                                throw new Error(o);
                            case i:
                                (n[c] = s), (f = c = (c + 1) % e);
                                break;
                            case a:
                                (p = 2 * e),
                                    (n = d()),
                                    (r = n.length),
                                    (c = n.length),
                                    (f = 0),
                                    (n.length = p),
                                    (e = p),
                                    l(s);
                        }
                    }
                },
                take: s,
                flush: d
            };
        }
        t.buffers = {
            none() {
                return c;
            },
            fixed(e) {
                return f(e, u);
            },
            dropping(e) {
                return f(e, 2);
            },
            sliding(e) {
                return f(e, i);
            },
            expanding(e) {
                return f(e, a);
            }
        };
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.selectors = t.saga = t.reducer = t.Gists = void 0);
        const r = n(11);
        Object.defineProperty(t, 'Gists', {
            enumerable: !0,
            get() {
                return s(r).default;
            }
        });
        const o = n(65);
        Object.defineProperty(t, 'reducer', {
            enumerable: !0,
            get() {
                return s(o).default;
            }
        });
        const u = n(66);
        Object.defineProperty(t, 'saga', {
            enumerable: !0,
            get() {
                return s(u).default;
            }
        });
        const i = n(23);
        Object.defineProperty(t, 'selectors', {
            enumerable: !0,
            get() {
                return s(i).default;
            }
        });
        const a = n(3);
        Object.keys(a).forEach(e => {
            e !== 'default' &&
                e !== '__esModule' &&
                Object.defineProperty(t, e, {
                    enumerable: !0,
                    get() {
                        return a[e];
                    }
                });
        });
        let c = s(o),
            f = s(i),
            l = s(u);
        function s(e) {
            return e && e.__esModule ? e : { default: e };
        }
        t.default = { reducer: c.default, selectors: f.default, saga: l.default };
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        let r = n(28),
            o = n(5),
            u = n(55),
            i = n(60),
            a = n(23),
            c = n(3),
            f = (function(e) {
                return e && e.__esModule ? e : { default: e };
            })(n(64));
        const l = (0, o.compose)(
            (0, o.setDisplayName)('GistsContainer'),
            (0, r.connectSelectors)({ topStories: a.selectTopStories }),
            (0, r.bootstrap)(e => {
                const t = e.dispatch;
                return !e.topStories && t(c.loadTopStoriesAction.start());
            }),
            (0, o.withHandlers)({ handleLoadingGists: i.handleLoadingGists }),
            u.enhanceWithSpinner
        );
        t.default = l(f.default);
    },
    function(e, t, n) {
        const r =
            typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
                ? function(e) {
                      return typeof e;
                  }
                : function(e) {
                      return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                  };
        e.exports = (function(e) {
            const t = {};
            function n(r) {
                if (t[r]) return t[r].exports;
                const o = (t[r] = { i: r, l: !1, exports: {} });
                return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
            }
            return (
                (n.m = e),
                (n.c = t),
                (n.d = function(e, t, r) {
                    n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
                }),
                (n.r = function(e) {
                    typeof Symbol !== 'undefined' &&
                        Symbol.toStringTag &&
                        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                }),
                (n.t = function(e, t) {
                    if ((1 & t && (e = n(e)), 8 & t)) return e;
                    if (4 & t && (void 0 === e ? 'undefined' : r(e)) == 'object' && e && e.__esModule) return e;
                    const o = Object.create(null);
                    if (
                        (n.r(o),
                        Object.defineProperty(o, 'default', { enumerable: !0, value: e }),
                        2 & t && typeof e !== 'string')
                    )
                        for (const u in e) n.d(o, u, (t => e[t]).bind(null, u));
                    return o;
                }),
                (n.n = function(e) {
                    const t =
                        e && e.__esModule
                            ? function() {
                                  return e.default;
                              }
                            : function() {
                                  return e;
                              };
                    return n.d(t, 'a', t), t;
                }),
                (n.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t);
                }),
                (n.p = ''),
                n((n.s = 1))
            );
        })([
            function(e, t) {
                e.exports = n(5);
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                const r = n(3);
                Object.defineProperty(t, 'bootstrap', {
                    enumerable: !0,
                    get() {
                        return d(r).default;
                    }
                });
                const o = n(4);
                Object.defineProperty(t, 'callHandlerOnResize', {
                    enumerable: !0,
                    get() {
                        return d(o).default;
                    }
                });
                const u = n(7);
                Object.defineProperty(t, 'connectSelectors', {
                    enumerable: !0,
                    get() {
                        return d(u).default;
                    }
                });
                const i = n(11);
                Object.defineProperty(t, 'onLocationChanged', {
                    enumerable: !0,
                    get() {
                        return d(i).default;
                    }
                });
                const a = n(12);
                Object.defineProperty(t, 'provideContext', {
                    enumerable: !0,
                    get() {
                        return d(a).default;
                    }
                });
                const c = n(13);
                Object.defineProperty(t, 'subscribeToContext', {
                    enumerable: !0,
                    get() {
                        return d(c).default;
                    }
                });
                const f = n(14);
                Object.defineProperty(t, 'withRefs', {
                    enumerable: !0,
                    get() {
                        return d(f).default;
                    }
                });
                const l = n(15);
                Object.defineProperty(t, 'withUpdatableState', {
                    enumerable: !0,
                    get() {
                        return d(l).default;
                    }
                });
                const s = n(16);
                function d(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                Object.defineProperty(t, 'withWindowSize', {
                    enumerable: !0,
                    get() {
                        return d(s).default;
                    }
                });
            },
            function(e, t) {
                e.exports = n(1);
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                const r = n(0);
                t.default = function(e) {
                    return (0, r.lifecycle)({
                        componentDidMount() {
                            e(this.props);
                        }
                    });
                };
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                let r = n(0),
                    o = (function(e) {
                        return e && e.__esModule ? e : { default: e };
                    })(n(5));
                t.default = function(e) {
                    const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { debounce: 20 };
                    return (0, r.compose)(
                        (0, r.withHandlers)({
                            onResizeHandler(n) {
                                return (0, o.default)(() => {
                                    (0, n[e])({ width: window.innerWidth, height: window.innerHeight });
                                }, t.debounce);
                            }
                        }),
                        (0, r.lifecycle)({
                            componentDidMount() {
                                const e = this.props.onResizeHandler;
                                window.addEventListener('resize', e), e();
                            },
                            componentWillUnmount() {
                                const e = this.props.onResizeHandler;
                                window.removeEventListener('resize', e);
                            }
                        })
                    );
                };
            },
            function(e, t, n) {
                (function(t) {
                    let n =
                            typeof Symbol === 'function' && r(Symbol.iterator) == 'symbol'
                                ? function(e) {
                                      return void 0 === e ? 'undefined' : r(e);
                                  }
                                : function(e) {
                                      return e &&
                                          typeof Symbol === 'function' &&
                                          e.constructor === Symbol &&
                                          e !== Symbol.prototype
                                          ? 'symbol'
                                          : void 0 === e ? 'undefined' : r(e);
                                  },
                        o = NaN,
                        u = '[object Symbol]',
                        i = /^\s+|\s+$/g,
                        a = /^[-+]0x[0-9a-f]+$/i,
                        c = /^0b[01]+$/i,
                        f = /^0o[0-7]+$/i,
                        l = parseInt,
                        s = (void 0 === t ? 'undefined' : n(t)) == 'object' && t && t.Object === Object && t,
                        d =
                            (typeof self === 'undefined' ? 'undefined' : n(self)) == 'object' &&
                            self &&
                            self.Object === Object &&
                            self,
                        p = s || d || Function('return this')(),
                        v = Object.prototype.toString,
                        y = Math.max,
                        h = Math.min,
                        b = function() {
                            return p.Date.now();
                        };
                    function m(e) {
                        const t = void 0 === e ? 'undefined' : n(e);
                        return !!e && (t == 'object' || t == 'function');
                    }
                    function g(e) {
                        return (
                            (void 0 === e ? 'undefined' : n(e)) == 'symbol' ||
                            ((function(e) {
                                return !!e && (void 0 === e ? 'undefined' : n(e)) == 'object';
                            })(e) &&
                                v.call(e) == u)
                        );
                    }
                    function _(e) {
                        if (typeof e === 'number') return e;
                        if (g(e)) return o;
                        if (m(e)) {
                            const t = typeof e.valueOf === 'function' ? e.valueOf() : e;
                            e = m(t) ? `${t}` : t;
                        }
                        if (typeof e !== 'string') return e === 0 ? e : +e;
                        e = e.replace(i, '');
                        const n = c.test(e);
                        return n || f.test(e) ? l(e.slice(2), n ? 2 : 8) : a.test(e) ? o : +e;
                    }
                    e.exports = function(e, t, n) {
                        let r,
                            o,
                            u,
                            i,
                            a,
                            c,
                            f = 0,
                            l = !1,
                            s = !1,
                            d = !0;
                        if (typeof e !== 'function') throw new TypeError('Expected a function');
                        function p(t) {
                            let n = r,
                                u = o;
                            return (r = o = void 0), (f = t), (i = e.apply(u, n));
                        }
                        function v(e) {
                            const n = e - c;
                            return void 0 === c || n >= t || n < 0 || (s && e - f >= u);
                        }
                        function g() {
                            const e = b();
                            if (v(e)) return O(e);
                            a = setTimeout(
                                g,
                                (function(e) {
                                    const n = t - (e - c);
                                    return s ? h(n, u - (e - f)) : n;
                                })(e)
                            );
                        }
                        function O(e) {
                            return (a = void 0), d && r ? p(e) : ((r = o = void 0), i);
                        }
                        function S() {
                            let e = b(),
                                n = v(e);
                            if (((r = arguments), (o = this), (c = e), n)) {
                                if (void 0 === a)
                                    return (function(e) {
                                        return (f = e), (a = setTimeout(g, t)), l ? p(e) : i;
                                    })(c);
                                if (s) return (a = setTimeout(g, t)), p(c);
                            }
                            return void 0 === a && (a = setTimeout(g, t)), i;
                        }
                        return (
                            (t = _(t) || 0),
                            m(n) &&
                                ((l = !!n.leading),
                                (u = (s = 'maxWait' in n) ? y(_(n.maxWait) || 0, t) : u),
                                (d = 'trailing' in n ? !!n.trailing : d)),
                            (S.cancel = function() {
                                void 0 !== a && clearTimeout(a), (f = 0), (r = c = o = a = void 0);
                            }),
                            (S.flush = function() {
                                return void 0 === a ? i : O(b());
                            }),
                            S
                        );
                    };
                }.call(this, n(6)));
            },
            function(e, t, n) {
                let o,
                    u =
                        typeof Symbol === 'function' && r(Symbol.iterator) == 'symbol'
                            ? function(e) {
                                  return void 0 === e ? 'undefined' : r(e);
                              }
                            : function(e) {
                                  return e &&
                                      typeof Symbol === 'function' &&
                                      e.constructor === Symbol &&
                                      e !== Symbol.prototype
                                      ? 'symbol'
                                      : void 0 === e ? 'undefined' : r(e);
                              };
                o = (function() {
                    return this;
                })();
                try {
                    o = o || Function('return this')() || (0, eval)('this');
                } catch (e) {
                    (typeof window === 'undefined' ? 'undefined' : u(window)) === 'object' && (o = window);
                }
                e.exports = o;
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                let o =
                        typeof Symbol === 'function' && r(Symbol.iterator) == 'symbol'
                            ? function(e) {
                                  return void 0 === e ? 'undefined' : r(e);
                              }
                            : function(e) {
                                  return e &&
                                      typeof Symbol === 'function' &&
                                      e.constructor === Symbol &&
                                      e !== Symbol.prototype
                                      ? 'symbol'
                                      : void 0 === e ? 'undefined' : r(e);
                              },
                    u =
                        Object.assign ||
                        function(e) {
                            for (let t = 1; t < arguments.length; t++) {
                                const n = arguments[t];
                                for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                        },
                    i = n(8),
                    a = n(9);
                t.default = function(e) {
                    return (0, i.connect)(t =>
                        (function e(t, n) {
                            return Object.keys(t).reduce(
                                (r, i) =>
                                    u(
                                        {},
                                        r,
                                        (function(e, t, n) {
                                            return (
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: n,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = n),
                                                e
                                            );
                                        })(
                                            {},
                                            i,
                                            o(t[i]) === 'object' ? e(t[i], n) : (0, a.makeWorkWithGlobalState)(t[i])(n)
                                        )
                                    ),
                                {}
                            );
                        })(e, t)
                    );
                };
            },
            function(e, t) {
                e.exports = n(29);
            },
            function(e, t, n) {
                const o =
                    typeof Symbol === 'function' && r(Symbol.iterator) == 'symbol'
                        ? function(e) {
                              return void 0 === e ? 'undefined' : r(e);
                          }
                        : function(e) {
                              return e &&
                                  typeof Symbol === 'function' &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : void 0 === e ? 'undefined' : r(e);
                          };
                e.exports = (function(e) {
                    const t = {};
                    function n(r) {
                        if (t[r]) return t[r].exports;
                        const o = (t[r] = { i: r, l: !1, exports: {} });
                        return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
                    }
                    return (
                        (n.m = e),
                        (n.c = t),
                        (n.d = function(e, t, r) {
                            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
                        }),
                        (n.r = function(e) {
                            typeof Symbol !== 'undefined' &&
                                Symbol.toStringTag &&
                                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                                Object.defineProperty(e, '__esModule', { value: !0 });
                        }),
                        (n.t = function(e, t) {
                            if ((1 & t && (e = n(e)), 8 & t)) return e;
                            if (4 & t && (void 0 === e ? 'undefined' : o(e)) == 'object' && e && e.__esModule) return e;
                            const r = Object.create(null);
                            if (
                                (n.r(r),
                                Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
                                2 & t && typeof e !== 'string')
                            )
                                for (const u in e) n.d(r, u, (t => e[t]).bind(null, u));
                            return r;
                        }),
                        (n.n = function(e) {
                            const t =
                                e && e.__esModule
                                    ? function() {
                                          return e.default;
                                      }
                                    : function() {
                                          return e;
                                      };
                            return n.d(t, 'a', t), t;
                        }),
                        (n.o = function(e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t);
                        }),
                        (n.p = ''),
                        n((n.s = 7))
                    );
                })([
                    function(e, t, n) {
                        Object.defineProperty(t, '__esModule', { value: !0 });
                        const r =
                            typeof Symbol === 'function' && o(Symbol.iterator) == 'symbol'
                                ? function(e) {
                                      return void 0 === e ? 'undefined' : o(e);
                                  }
                                : function(e) {
                                      return e &&
                                          typeof Symbol === 'function' &&
                                          e.constructor === Symbol &&
                                          e !== Symbol.prototype
                                          ? 'symbol'
                                          : void 0 === e ? 'undefined' : o(e);
                                  };
                        (t.check = function(e, t, n) {
                            if (!t(e)) throw (_('error', 'uncaught at check', n), new Error(n));
                        }),
                            (t.hasOwn = v),
                            (t.remove = function(e, t) {
                                const n = e.indexOf(t);
                                n >= 0 && e.splice(n, 1);
                            }),
                            (t.deferred = h),
                            (t.arrayOfDeffered = function(e) {
                                for (var t = [], n = 0; n < e; n++) t.push(h());
                                return t;
                            }),
                            (t.delay = function(e) {
                                let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                    n = void 0,
                                    r = new Promise(r => {
                                        n = setTimeout(() => r(t), e);
                                    });
                                return (
                                    (r[l] = function() {
                                        return clearTimeout(n);
                                    }),
                                    r
                                );
                            }),
                            (t.createMockTask = function() {
                                let e,
                                    t = !0,
                                    n = void 0,
                                    r = void 0;
                                return (
                                    ((e = {})[c] = !0),
                                    (e.isRunning = function() {
                                        return t;
                                    }),
                                    (e.result = function() {
                                        return n;
                                    }),
                                    (e.error = function() {
                                        return r;
                                    }),
                                    (e.setRunning = function(e) {
                                        return (t = e);
                                    }),
                                    (e.setResult = function(e) {
                                        return (n = e);
                                    }),
                                    (e.setError = function(e) {
                                        return (r = e);
                                    }),
                                    e
                                );
                            }),
                            (t.autoInc = b),
                            (t.makeIterator = function(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m,
                                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
                                    r = arguments[3],
                                    o = { name: n, next: e, throw: t, return: g };
                                return (
                                    r && (o[f] = !0),
                                    typeof Symbol !== 'undefined' &&
                                        (o[Symbol.iterator] = function() {
                                            return o;
                                        }),
                                    o
                                );
                            }),
                            (t.log = _),
                            (t.deprecate = function(e, t) {
                                return function() {
                                    return e.apply(void 0, arguments);
                                };
                            });
                        var u =
                                Object.assign ||
                                function(e) {
                                    for (let t = 1; t < arguments.length; t++) {
                                        const n = arguments[t];
                                        for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                    }
                                    return e;
                                },
                            i =
                                typeof Symbol === 'function' && r(Symbol.iterator) === 'symbol'
                                    ? function(e) {
                                          return void 0 === e ? 'undefined' : r(e);
                                      }
                                    : function(e) {
                                          return e &&
                                              typeof Symbol === 'function' &&
                                              e.constructor === Symbol &&
                                              e !== Symbol.prototype
                                              ? 'symbol'
                                              : void 0 === e ? 'undefined' : r(e);
                                      },
                            a = (t.sym = function(e) {
                                return `@@redux-saga/${e}`;
                            }),
                            c = (t.TASK = a('TASK')),
                            f = (t.HELPER = a('HELPER')),
                            l = ((t.MATCH = a('MATCH')), (t.CANCEL = a('CANCEL_PROMISE'))),
                            s = (t.SAGA_ACTION = a('SAGA_ACTION')),
                            d = ((t.SELF_CANCELLATION = a('SELF_CANCELLATION')),
                            (t.konst = function(e) {
                                return function() {
                                    return e;
                                };
                            }));
                        (t.kTrue = d(!0)),
                            (t.kFalse = d(!1)),
                            (t.noop = function() {}),
                            (t.ident = function(e) {
                                return e;
                            });
                        const p = Object.prototype.hasOwnProperty;
                        function v(e, t) {
                            return y.notUndef(e) && p.call(e, t);
                        }
                        var y = (t.is = {
                            undef(e) {
                                return e === null || void 0 === e;
                            },
                            notUndef(e) {
                                return e !== null && void 0 !== e;
                            },
                            func(e) {
                                return typeof e === 'function';
                            },
                            number(e) {
                                return typeof e === 'number';
                            },
                            string(e) {
                                return typeof e === 'string';
                            },
                            array: Array.isArray,
                            object(e) {
                                return e && !y.array(e) && (void 0 === e ? 'undefined' : i(e)) === 'object';
                            },
                            promise(e) {
                                return e && y.func(e.then);
                            },
                            iterator(e) {
                                return e && y.func(e.next) && y.func(e.throw);
                            },
                            iterable(e) {
                                return e && y.func(Symbol) ? y.func(e[Symbol.iterator]) : y.array(e);
                            },
                            task(e) {
                                return e && e[c];
                            },
                            observable(e) {
                                return e && y.func(e.subscribe);
                            },
                            buffer(e) {
                                return e && y.func(e.isEmpty) && y.func(e.take) && y.func(e.put);
                            },
                            pattern(e) {
                                return (
                                    e &&
                                    (y.string(e) ||
                                        (void 0 === e ? 'undefined' : i(e)) === 'symbol' ||
                                        y.func(e) ||
                                        y.array(e))
                                );
                            },
                            channel(e) {
                                return e && y.func(e.take) && y.func(e.close);
                            },
                            helper(e) {
                                return e && e[f];
                            },
                            stringableFunc(e) {
                                return y.func(e) && v(e, 'toString');
                            }
                        });
                        function h() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = u({}, e),
                                n = new Promise((e, n) => {
                                    (t.resolve = e), (t.reject = n);
                                });
                            return (t.promise = n), t;
                        }
                        function b() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                            return function() {
                                return ++e;
                            };
                        }
                        (t.object = {
                            assign(e, t) {
                                for (const n in t) v(t, n) && (e[n] = t[n]);
                            }
                        }),
                            (t.array = {
                                from(e) {
                                    const t = Array(e.length);
                                    for (const n in e) v(e, n) && (t[n] = e[n]);
                                    return t;
                                }
                            }),
                            (t.uid = b());
                        var m = function(e) {
                                throw e;
                            },
                            g = function(e) {
                                return { value: e, done: !0 };
                            };
                        function _(e, t) {
                            const n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '';
                            typeof window === 'undefined'
                                ? console.log(`redux-saga ${e}: ${t}\n${(n && n.stack) || n}`)
                                : console[e](t, n);
                        }
                        (t.updateIncentive = function(e, t) {
                            return `${e} has been deprecated in favor of ${t}, please update your code`;
                        }),
                            (t.internalErr = function(e) {
                                return new Error(
                                    `\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: ${e}\n`
                                );
                            }),
                            (t.createSetContextWarning = function(e, t) {
                                return `${e ? `${e}.` : ''}setContext(props): argument ${t} is not a plain object`;
                            }),
                            (t.wrapSagaDispatch = function(e) {
                                return function(t) {
                                    return e(Object.defineProperty(t, s, { value: !0 }));
                                };
                            }),
                            (t.cloneableGenerator = function e(t) {
                                return function() {
                                    for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                                    let u = [],
                                        i = t.apply(void 0, r);
                                    return {
                                        next(e) {
                                            return u.push(e), i.next(e);
                                        },
                                        clone() {
                                            const n = e(t).apply(void 0, r);
                                            return u.forEach(e => n.next(e)), n;
                                        },
                                        return(e) {
                                            return i.return(e);
                                        },
                                        throw(e) {
                                            return i.throw(e);
                                        }
                                    };
                                };
                            });
                    },
                    function(e, t, n) {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.asEffect = t.takem = t.detach = void 0),
                            (t.take = P),
                            (t.put = w),
                            (t.all = E),
                            (t.race = function(e) {
                                return S(f, e);
                            }),
                            (t.call = function(e) {
                                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                                    n[r - 1] = arguments[r];
                                return S(l, k('call', e, n));
                            }),
                            (t.apply = function(e, t) {
                                const n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                                return S(l, k('apply', { context: e, fn: t }, n));
                            }),
                            (t.cps = function(e) {
                                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                                    n[r - 1] = arguments[r];
                                return S(s, k('cps', e, n));
                            }),
                            (t.fork = x),
                            (t.spawn = function(e) {
                                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                                    n[r - 1] = arguments[r];
                                return j(x.apply(void 0, [e].concat(n)));
                            }),
                            (t.join = function e() {
                                for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                                if (n.length > 1) return E(n.map(t => e(t)));
                                const u = n[0];
                                return (
                                    (0, r.check)(u, r.is.notUndef, 'join(task): argument task is undefined'),
                                    (0, r.check)(
                                        u,
                                        r.is.task,
                                        `join(task): argument ${u} is not a valid Task object ${O}`
                                    ),
                                    S(p, u)
                                );
                            }),
                            (t.cancel = function e() {
                                for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                                if (n.length > 1) return E(n.map(t => e(t)));
                                const u = n[0];
                                return (
                                    n.length === 1 &&
                                        ((0, r.check)(u, r.is.notUndef, 'cancel(task): argument task is undefined'),
                                        (0, r.check)(
                                            u,
                                            r.is.task,
                                            `cancel(task): argument ${u} is not a valid Task object ${O}`
                                        )),
                                    S(v, u || r.SELF_CANCELLATION)
                                );
                            }),
                            (t.select = function(e) {
                                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
                                    n[o - 1] = arguments[o];
                                return (
                                    arguments.length === 0
                                        ? (e = r.ident)
                                        : ((0, r.check)(
                                              e,
                                              r.is.notUndef,
                                              'select(selector,[...]): argument selector is undefined'
                                          ),
                                          (0, r.check)(
                                              e,
                                              r.is.func,
                                              `select(selector,[...]): argument ${e} is not a function`
                                          )),
                                    S(y, { selector: e, args: n })
                                );
                            }),
                            (t.actionChannel = function(e, t) {
                                return (
                                    (0, r.check)(
                                        e,
                                        r.is.notUndef,
                                        'actionChannel(pattern,...): argument pattern is undefined'
                                    ),
                                    arguments.length > 1 &&
                                        ((0, r.check)(
                                            t,
                                            r.is.notUndef,
                                            'actionChannel(pattern, buffer): argument buffer is undefined'
                                        ),
                                        (0, r.check)(
                                            t,
                                            r.is.buffer,
                                            `actionChannel(pattern, buffer): argument ${t} is not a valid buffer`
                                        )),
                                    S(h, { pattern: e, buffer: t })
                                );
                            }),
                            (t.cancelled = function() {
                                return S(b, {});
                            }),
                            (t.flush = function(e) {
                                return (
                                    (0, r.check)(e, r.is.channel, `flush(channel): argument ${e} is not valid channel`),
                                    S(m, e)
                                );
                            }),
                            (t.getContext = function(e) {
                                return (
                                    (0, r.check)(e, r.is.string, `getContext(prop): argument ${e} is not a string`),
                                    S(g, e)
                                );
                            }),
                            (t.setContext = function(e) {
                                return (0, r.check)(e, r.is.object, (0, r.createSetContextWarning)(null, e)), S(_, e);
                            }),
                            (t.takeEvery = function(e, t) {
                                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), u = 2; u < n; u++)
                                    r[u - 2] = arguments[u];
                                return x.apply(void 0, [o.takeEveryHelper, e, t].concat(r));
                            }),
                            (t.takeLatest = function(e, t) {
                                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), u = 2; u < n; u++)
                                    r[u - 2] = arguments[u];
                                return x.apply(void 0, [o.takeLatestHelper, e, t].concat(r));
                            }),
                            (t.throttle = function(e, t, n) {
                                for (var r = arguments.length, u = Array(r > 3 ? r - 3 : 0), i = 3; i < r; i++)
                                    u[i - 3] = arguments[i];
                                return x.apply(void 0, [o.throttleHelper, e, t, n].concat(u));
                            });
                        var r = n(0),
                            o = n(14),
                            u = (0, r.sym)('IO'),
                            i = 'TAKE',
                            a = 'PUT',
                            c = 'ALL',
                            f = 'RACE',
                            l = 'CALL',
                            s = 'CPS',
                            d = 'FORK',
                            p = 'JOIN',
                            v = 'CANCEL',
                            y = 'SELECT',
                            h = 'ACTION_CHANNEL',
                            b = 'CANCELLED',
                            m = 'FLUSH',
                            g = 'GET_CONTEXT',
                            _ = 'SET_CONTEXT',
                            O =
                                '\n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)',
                            S = function(e, t) {
                                let n;
                                return ((n = {})[u] = !0), (n[e] = t), n;
                            },
                            j = (t.detach = function(e) {
                                return (
                                    (0, r.check)(C.fork(e), r.is.object, 'detach(eff): argument must be a fork effect'),
                                    (e[d].detached = !0),
                                    e
                                );
                            });
                        function P() {
                            const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '*';
                            if (
                                (arguments.length &&
                                    (0, r.check)(
                                        arguments[0],
                                        r.is.notUndef,
                                        'take(patternOrChannel): patternOrChannel is undefined'
                                    ),
                                r.is.pattern(e))
                            )
                                return S(i, { pattern: e });
                            if (r.is.channel(e)) return S(i, { channel: e });
                            throw new Error(
                                `take(patternOrChannel): argument ${String(e)} is not valid channel or a valid pattern`
                            );
                        }
                        function w(e, t) {
                            return (
                                arguments.length > 1
                                    ? ((0, r.check)(
                                          e,
                                          r.is.notUndef,
                                          'put(channel, action): argument channel is undefined'
                                      ),
                                      (0, r.check)(
                                          e,
                                          r.is.channel,
                                          `put(channel, action): argument ${e} is not a valid channel`
                                      ),
                                      (0, r.check)(
                                          t,
                                          r.is.notUndef,
                                          'put(channel, action): argument action is undefined'
                                      ))
                                    : ((0, r.check)(e, r.is.notUndef, 'put(action): argument action is undefined'),
                                      (t = e),
                                      (e = null)),
                                S(a, { channel: e, action: t })
                            );
                        }
                        function E(e) {
                            return S(c, e);
                        }
                        function k(e, t, n) {
                            (0, r.check)(t, r.is.notUndef, `${e}: argument fn is undefined`);
                            let o = null;
                            if (r.is.array(t)) {
                                const u = t;
                                (o = u[0]), (t = u[1]);
                            } else if (t.fn) {
                                const i = t;
                                (o = i.context), (t = i.fn);
                            }
                            return (
                                o && r.is.string(t) && r.is.func(o[t]) && (t = o[t]),
                                (0, r.check)(t, r.is.func, `${e}: argument ${t} is not a function`),
                                { context: o, fn: t, args: n }
                            );
                        }
                        function x(e) {
                            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                                n[r - 1] = arguments[r];
                            return S(d, k('fork', e, n));
                        }
                        (P.maybe = function() {
                            const e = P.apply(void 0, arguments);
                            return (e[i].maybe = !0), e;
                        }),
                            (t.takem = (0, r.deprecate)(P.maybe, (0, r.updateIncentive)('takem', 'take.maybe'))),
                            (w.resolve = function() {
                                const e = w.apply(void 0, arguments);
                                return (e[a].resolve = !0), e;
                            }),
                            (w.sync = (0, r.deprecate)(w.resolve, (0, r.updateIncentive)('put.sync', 'put.resolve')));
                        var M = function(e) {
                                return function(t) {
                                    return t && t[u] && t[e];
                                };
                            },
                            C = (t.asEffect = {
                                take: M(i),
                                put: M(a),
                                all: M(c),
                                race: M(f),
                                call: M(l),
                                cps: M(s),
                                fork: M(d),
                                join: M(p),
                                cancel: M(v),
                                select: M(y),
                                actionChannel: M(h),
                                cancelled: M(b),
                                flush: M(m),
                                getContext: M(g),
                                setContext: M(_)
                            });
                    },
                    function(e, t, n) {
                        Object.defineProperty(t, '__esModule', { value: !0 });
                        let r = (function(e) {
                                return e && e.__esModule ? e : { default: e };
                            })(n(5)),
                            o = new Map();
                        t.default = function(e) {
                            if (!e)
                                throw new Error(
                                    'Tried to make undefined selector work with global state – please make sure your selector module is exported correctly'
                                );
                            if (o.has(e)) return o.get(e);
                            if (e.requiresGlobalState) return e;
                            const t = function(t) {
                                if (!e.hasOwnProperty('globalStateContext'))
                                    throw new Error(
                                        `This selector was not registered for use with global state: \n\n${e} \n\nDid you forget to call the "registerSelectorForUseWithGlobalState" with this reducer?\n`
                                    );
                                const n = e.globalStateContext.path;
                                return (0, r.default)(n, e)(t);
                            };
                            return (t.requiresGlobalState = !0), o.set(e, t), t;
                        };
                    },
                    function(e, t, n) {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.qEnd = void 0),
                            (t.safeName = function(e) {
                                return r.is.channel(e)
                                    ? 'channel'
                                    : Array.isArray(e) ? String(e.map(e => String(e))) : String(e);
                            }),
                            (t.default = function(e, t) {
                                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'iterator',
                                    i = void 0,
                                    a = t;
                                function c(t, n) {
                                    if (a === u) return o;
                                    if (n) throw ((a = u), n);
                                    i && i(t);
                                    let r = e[a](),
                                        c = r[0],
                                        f = r[1],
                                        l = r[2];
                                    return (i = l), (a = c) === u ? o : f;
                                }
                                return (0, r.makeIterator)(c, e => c(null, e), n, !0);
                            });
                        var r = n(0),
                            o = { done: !0, value: void 0 },
                            u = (t.qEnd = {});
                    },
                    function(e, t, n) {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.UNDEFINED_INPUT_ERROR = t.INVALID_BUFFER = t.isEnd = t.END = void 0),
                            (t.emitter = function() {
                                const e = [];
                                return {
                                    subscribe(t) {
                                        return (
                                            e.push(t),
                                            function() {
                                                return (0, r.remove)(e, t);
                                            }
                                        );
                                    },
                                    emit(t) {
                                        for (let n = e.slice(), r = 0, o = n.length; r < o; r++) n[r](t);
                                    }
                                };
                            }),
                            (t.channel = s),
                            (t.eventChannel = d),
                            (t.stdChannel = function(e) {
                                const t = d(t =>
                                    e(e => {
                                        e[r.SAGA_ACTION] ? t(e) : (0, u.asap)(() => t(e));
                                    })
                                );
                                return i({}, t, {
                                    take(e, n) {
                                        arguments.length > 1 &&
                                            ((0, r.check)(
                                                n,
                                                r.is.func,
                                                "channel.take's matcher argument must be a function"
                                            ),
                                            (e[r.MATCH] = n)),
                                            t.take(e);
                                    }
                                });
                            });
                        var r = n(0),
                            o = n(6),
                            u = n(16),
                            i =
                                Object.assign ||
                                function(e) {
                                    for (let t = 1; t < arguments.length; t++) {
                                        const n = arguments[t];
                                        for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                    }
                                    return e;
                                },
                            a = (t.END = { type: '@@redux-saga/CHANNEL_END' }),
                            c = (t.isEnd = function(e) {
                                return e && e.type === '@@redux-saga/CHANNEL_END';
                            }),
                            f = (t.INVALID_BUFFER = 'invalid buffer passed to channel factory function'),
                            l = (t.UNDEFINED_INPUT_ERROR = 'Saga was provided with an undefined action');
                        function s() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.buffers.fixed(),
                                t = !1,
                                n = [];
                            function u() {
                                if (t && n.length)
                                    throw (0, r.internalErr)('Cannot have a closed channel with pending takers');
                                if (n.length && !e.isEmpty())
                                    throw (0, r.internalErr)('Cannot have pending takers with non empty buffer');
                            }
                            return (
                                (0, r.check)(e, r.is.buffer, f),
                                {
                                    take(o) {
                                        u(),
                                            (0, r.check)(o, r.is.func, "channel.take's callback must be a function"),
                                            t && e.isEmpty()
                                                ? o(a)
                                                : e.isEmpty()
                                                  ? (n.push(o),
                                                    (o.cancel = function() {
                                                        return (0, r.remove)(n, o);
                                                    }))
                                                  : o(e.take());
                                    },
                                    put(o) {
                                        if ((u(), (0, r.check)(o, r.is.notUndef, l), !t)) {
                                            if (!n.length) return e.put(o);
                                            for (let i = 0; i < n.length; i++) {
                                                const a = n[i];
                                                if (!a[r.MATCH] || a[r.MATCH](o)) return n.splice(i, 1), a(o);
                                            }
                                        }
                                    },
                                    flush(n) {
                                        u(),
                                            (0, r.check)(n, r.is.func, "channel.flush' callback must be a function"),
                                            t && e.isEmpty() ? n(a) : n(e.flush());
                                    },
                                    close() {
                                        if ((u(), !t && ((t = !0), n.length))) {
                                            const e = n;
                                            n = [];
                                            for (let r = 0, o = e.length; r < o; r++) e[r](a);
                                        }
                                    },
                                    get __takers__() {
                                        return n;
                                    },
                                    get __closed__() {
                                        return t;
                                    }
                                }
                            );
                        }
                        function d(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.buffers.none(),
                                n = arguments[2];
                            arguments.length > 2 &&
                                (0, r.check)(n, r.is.func, 'Invalid match function passed to eventChannel');
                            var u = s(t),
                                i = function() {
                                    u.__closed__ || (a && a(), u.close());
                                },
                                a = e(e => {
                                    c(e) ? i() : (n && !n(e)) || u.put(e);
                                });
                            if ((u.__closed__ && a(), !r.is.func(a)))
                                throw new Error('in eventChannel: subscribe should return a function to unsubscribe');
                            return { take: u.take, flush: u.flush, close: i };
                        }
                    },
                    function(e, t, n) {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.default = function(e, t) {
                                if (!e || !e.length) return t;
                                const n = e.split('.');
                                return function(r) {
                                    let o = r;
                                    return (
                                        n.forEach(t => {
                                            if (!o.hasOwnProperty(t))
                                                throw Error(
                                                    `Invalid state path provided: ${e}, got stuck with '${t}' on ${JSON.stringify(
                                                        o
                                                    )} with ${JSON.stringify(r)}.`
                                                );
                                            o = o[t];
                                        }),
                                        t(o)
                                    );
                                };
                            });
                    },
                    function(e, t, n) {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.buffers = t.BUFFER_OVERFLOW = void 0);
                        let r = n(0),
                            o = (t.BUFFER_OVERFLOW = "Channel's Buffer overflow!"),
                            u = 1,
                            i = 3,
                            a = 4,
                            c = { isEmpty: r.kTrue, put: r.noop, take: r.noop };
                        function f() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
                                t = arguments[1],
                                n = new Array(e),
                                r = 0,
                                c = 0,
                                f = 0,
                                l = function(t) {
                                    (n[c] = t), (c = (c + 1) % e), r++;
                                },
                                s = function() {
                                    if (r != 0) {
                                        const t = n[f];
                                        return (n[f] = null), r--, (f = (f + 1) % e), t;
                                    }
                                },
                                d = function() {
                                    for (var e = []; r; ) e.push(s());
                                    return e;
                                };
                            return {
                                isEmpty() {
                                    return r == 0;
                                },
                                put(s) {
                                    if (r < e) l(s);
                                    else {
                                        let p = void 0;
                                        switch (t) {
                                            case u:
                                                throw new Error(o);
                                            case i:
                                                (n[c] = s), (f = c = (c + 1) % e);
                                                break;
                                            case a:
                                                (p = 2 * e),
                                                    (n = d()),
                                                    (r = n.length),
                                                    (c = n.length),
                                                    (f = 0),
                                                    (n.length = p),
                                                    (e = p),
                                                    l(s);
                                        }
                                    }
                                },
                                take: s,
                                flush: d
                            };
                        }
                        t.buffers = {
                            none() {
                                return c;
                            },
                            fixed(e) {
                                return f(e, u);
                            },
                            dropping(e) {
                                return f(e, 2);
                            },
                            sliding(e) {
                                return f(e, i);
                            },
                            expanding(e) {
                                return f(e, a);
                            }
                        };
                    },
                    function(e, t, n) {
                        Object.defineProperty(t, '__esModule', { value: !0 });
                        const r = n(8);
                        Object.defineProperty(t, 'createModularSelector', {
                            enumerable: !0,
                            get() {
                                return c(r).default;
                            }
                        });
                        const o = n(2);
                        Object.defineProperty(t, 'makeWorkWithGlobalState', {
                            enumerable: !0,
                            get() {
                                return c(o).default;
                            }
                        });
                        const u = n(5);
                        Object.defineProperty(t, 'rebaseSelector', {
                            enumerable: !0,
                            get() {
                                return c(u).default;
                            }
                        });
                        const i = n(10);
                        Object.defineProperty(t, 'registerSelectorsForUseWithGlobalState', {
                            enumerable: !0,
                            get() {
                                return c(i).default;
                            }
                        });
                        const a = n(12);
                        function c(e) {
                            return e && e.__esModule ? e : { default: e };
                        }
                        Object.defineProperty(t, 'selectModular', {
                            enumerable: !0,
                            get() {
                                return c(a).default;
                            }
                        });
                    },
                    function(e, t, n) {
                        Object.defineProperty(t, '__esModule', { value: !0 });
                        let r = n(9),
                            o = (function(e) {
                                return e && e.__esModule ? e : { default: e };
                            })(n(2));
                        t.default = function() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            for (var u = t, i = 0; i < t.length - 1; i++) {
                                if (void 0 === t[i]) throw new Error('WTF');
                                u[i] = (0, o.default)(t[i]);
                            }
                            const a = function(e) {
                                return r.createSelector.apply(null, u)(e);
                            };
                            return (a.requiresGlobalState = !0), a;
                        };
                    },
                    function(e, t) {
                        e.exports = n(10);
                    },
                    function(e, t, n) {
                        Object.defineProperty(t, '__esModule', { value: !0 });
                        const r = (function(e) {
                            return e && e.__esModule ? e : { default: e };
                        })(n(11));
                        t.default = function(e, t) {
                            (0, r.default)(t)
                                ? Object.keys(t).forEach(n => (t[n].globalStateContext = { path: e, key: n }))
                                : t && t.forEach(t => (t.globalStateContext = { path: e }));
                        };
                    },
                    function(e, t, n) {
                        Object.defineProperty(t, '__esModule', { value: !0 });
                        const r =
                            typeof Symbol === 'function' && o(Symbol.iterator) == 'symbol'
                                ? function(e) {
                                      return void 0 === e ? 'undefined' : o(e);
                                  }
                                : function(e) {
                                      return e &&
                                          typeof Symbol === 'function' &&
                                          e.constructor === Symbol &&
                                          e !== Symbol.prototype
                                          ? 'symbol'
                                          : void 0 === e ? 'undefined' : o(e);
                                  };
                        t.default = function(e) {
                            if (
                                !(function(e) {
                                    return (void 0 === e ? 'undefined' : r(e)) === 'object' && e !== null;
                                })(e) ||
                                (function(e) {
                                    if (e === null) return void 0 === e ? '[object Undefined]' : '[object Null]';
                                    if (!(c && c in Object(e))) return a.call(e);
                                    let t = i.call(e, c),
                                        n = e[c],
                                        r = !1;
                                    try {
                                        (e[c] = void 0), (r = !0);
                                    } catch (e) {}
                                    const o = a.call(e);
                                    return r && (t ? (e[c] = n) : delete e[c]), o;
                                })(e) !== '[object Object]'
                            )
                                return !1;
                            const t = Object.getPrototypeOf(e);
                            if (t === null) return !0;
                            const n = i.call(t, 'constructor') && t.constructor;
                            return typeof n === 'function' && n instanceof n && f.call(n) === l;
                        };
                        var u = Object.prototype,
                            i = u.hasOwnProperty,
                            a = u.toString,
                            c = typeof Symbol !== 'undefined' ? Symbol.toStringTag : void 0,
                            f = Function.prototype.toString,
                            l = f.call(Object);
                    },
                    function(e, t, n) {
                        Object.defineProperty(t, '__esModule', { value: !0 });
                        let r = n(13),
                            o = (function(e) {
                                return e && e.__esModule ? e : { default: e };
                            })(n(2));
                        t.default = function(e) {
                            return (0, r.select)((0, o.default)(e));
                        };
                    },
                    function(e, t, n) {
                        Object.defineProperty(t, '__esModule', { value: !0 });
                        const r = n(1);
                        Object.defineProperty(t, 'take', {
                            enumerable: !0,
                            get() {
                                return r.take;
                            }
                        }),
                            Object.defineProperty(t, 'takem', {
                                enumerable: !0,
                                get() {
                                    return r.takem;
                                }
                            }),
                            Object.defineProperty(t, 'put', {
                                enumerable: !0,
                                get() {
                                    return r.put;
                                }
                            }),
                            Object.defineProperty(t, 'all', {
                                enumerable: !0,
                                get() {
                                    return r.all;
                                }
                            }),
                            Object.defineProperty(t, 'race', {
                                enumerable: !0,
                                get() {
                                    return r.race;
                                }
                            }),
                            Object.defineProperty(t, 'call', {
                                enumerable: !0,
                                get() {
                                    return r.call;
                                }
                            }),
                            Object.defineProperty(t, 'apply', {
                                enumerable: !0,
                                get() {
                                    return r.apply;
                                }
                            }),
                            Object.defineProperty(t, 'cps', {
                                enumerable: !0,
                                get() {
                                    return r.cps;
                                }
                            }),
                            Object.defineProperty(t, 'fork', {
                                enumerable: !0,
                                get() {
                                    return r.fork;
                                }
                            }),
                            Object.defineProperty(t, 'spawn', {
                                enumerable: !0,
                                get() {
                                    return r.spawn;
                                }
                            }),
                            Object.defineProperty(t, 'join', {
                                enumerable: !0,
                                get() {
                                    return r.join;
                                }
                            }),
                            Object.defineProperty(t, 'cancel', {
                                enumerable: !0,
                                get() {
                                    return r.cancel;
                                }
                            }),
                            Object.defineProperty(t, 'select', {
                                enumerable: !0,
                                get() {
                                    return r.select;
                                }
                            }),
                            Object.defineProperty(t, 'actionChannel', {
                                enumerable: !0,
                                get() {
                                    return r.actionChannel;
                                }
                            }),
                            Object.defineProperty(t, 'cancelled', {
                                enumerable: !0,
                                get() {
                                    return r.cancelled;
                                }
                            }),
                            Object.defineProperty(t, 'flush', {
                                enumerable: !0,
                                get() {
                                    return r.flush;
                                }
                            }),
                            Object.defineProperty(t, 'getContext', {
                                enumerable: !0,
                                get() {
                                    return r.getContext;
                                }
                            }),
                            Object.defineProperty(t, 'setContext', {
                                enumerable: !0,
                                get() {
                                    return r.setContext;
                                }
                            }),
                            Object.defineProperty(t, 'takeEvery', {
                                enumerable: !0,
                                get() {
                                    return r.takeEvery;
                                }
                            }),
                            Object.defineProperty(t, 'takeLatest', {
                                enumerable: !0,
                                get() {
                                    return r.takeLatest;
                                }
                            }),
                            Object.defineProperty(t, 'throttle', {
                                enumerable: !0,
                                get() {
                                    return r.throttle;
                                }
                            });
                    },
                    function(e, t, n) {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.throttleHelper = t.takeLatestHelper = t.takeEveryHelper = t.throttle = t.takeLatest = t.takeEvery = void 0);
                        let r = a(n(15)),
                            o = a(n(17)),
                            u = a(n(18)),
                            i = n(0);
                        function a(e) {
                            return e && e.__esModule ? e : { default: e };
                        }
                        let c = function(e) {
                                return `import { ${e} } from 'redux-saga' has been deprecated in favor of import { ${e} } from 'redux-saga/effects'.\nThe latter will not work with yield*, as helper effects are wrapped automatically for you in fork effect.\nTherefore yield ${e} will return task descriptor to your saga and execute next lines of code.`;
                            },
                            f = (0, i.deprecate)(r.default, c('takeEvery')),
                            l = (0, i.deprecate)(o.default, c('takeLatest')),
                            s = (0, i.deprecate)(u.default, c('throttle'));
                        (t.takeEvery = f),
                            (t.takeLatest = l),
                            (t.throttle = s),
                            (t.takeEveryHelper = r.default),
                            (t.takeLatestHelper = o.default),
                            (t.throttleHelper = u.default);
                    },
                    function(e, t, n) {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.default = function(e, t) {
                                for (var n = arguments.length, a = Array(n > 2 ? n - 2 : 0), c = 2; c < n; c++)
                                    a[c - 2] = arguments[c];
                                let f = { done: !1, value: (0, u.take)(e) },
                                    l = void 0,
                                    s = function(e) {
                                        return (l = e);
                                    };
                                return (0, o.default)(
                                    {
                                        q1() {
                                            return ['q2', f, s];
                                        },
                                        q2() {
                                            return l === i.END
                                                ? [r.qEnd]
                                                : [
                                                      'q1',
                                                      (function(e) {
                                                          return {
                                                              done: !1,
                                                              value: u.fork.apply(void 0, [t].concat(a, [e]))
                                                          };
                                                      })(l)
                                                  ];
                                        }
                                    },
                                    'q1',
                                    `takeEvery(${(0, r.safeName)(e)}, ${t.name})`
                                );
                            });
                        var r = n(3),
                            o = (function(e) {
                                return e && e.__esModule ? e : { default: e };
                            })(r),
                            u = n(1),
                            i = n(4);
                    },
                    function(e, t, n) {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.asap = function(e) {
                                r.push(e), o || (i(), c());
                            }),
                            (t.suspend = i),
                            (t.flush = c);
                        var r = [],
                            o = 0;
                        function u(e) {
                            try {
                                i(), e();
                            } finally {
                                a();
                            }
                        }
                        function i() {
                            o++;
                        }
                        function a() {
                            o--;
                        }
                        function c() {
                            a();
                            for (let e = void 0; !o && void 0 !== (e = r.shift()); ) u(e);
                        }
                    },
                    function(e, t, n) {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.default = function(e, t) {
                                for (var n = arguments.length, a = Array(n > 2 ? n - 2 : 0), c = 2; c < n; c++)
                                    a[c - 2] = arguments[c];
                                let f = { done: !1, value: (0, u.take)(e) },
                                    l = function(e) {
                                        return { done: !1, value: u.fork.apply(void 0, [t].concat(a, [e])) };
                                    },
                                    s = void 0,
                                    d = void 0,
                                    p = function(e) {
                                        return (s = e);
                                    },
                                    v = function(e) {
                                        return (d = e);
                                    };
                                return (0, o.default)(
                                    {
                                        q1() {
                                            return ['q2', f, v];
                                        },
                                        q2() {
                                            return d === i.END
                                                ? [r.qEnd]
                                                : s
                                                  ? [
                                                        'q3',
                                                        (function(e) {
                                                            return { done: !1, value: (0, u.cancel)(e) };
                                                        })(s)
                                                    ]
                                                  : ['q1', l(d), p];
                                        },
                                        q3() {
                                            return ['q1', l(d), p];
                                        }
                                    },
                                    'q1',
                                    `takeLatest(${(0, r.safeName)(e)}, ${t.name})`
                                );
                            });
                        var r = n(3),
                            o = (function(e) {
                                return e && e.__esModule ? e : { default: e };
                            })(r),
                            u = n(1),
                            i = n(4);
                    },
                    function(e, t, n) {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.default = function(e, t, n) {
                                for (var f = arguments.length, l = Array(f > 3 ? f - 3 : 0), s = 3; s < f; s++)
                                    l[s - 3] = arguments[s];
                                let d = void 0,
                                    p = void 0,
                                    v = { done: !1, value: (0, u.actionChannel)(t, a.buffers.sliding(1)) },
                                    y = { done: !1, value: (0, u.call)(c.delay, e) },
                                    h = function(e) {
                                        return (d = e);
                                    },
                                    b = function(e) {
                                        return (p = e);
                                    };
                                return (0, o.default)(
                                    {
                                        q1() {
                                            return ['q2', v, b];
                                        },
                                        q2() {
                                            return ['q3', { done: !1, value: (0, u.take)(p) }, h];
                                        },
                                        q3() {
                                            return d === i.END
                                                ? [r.qEnd]
                                                : [
                                                      'q4',
                                                      (function(e) {
                                                          return {
                                                              done: !1,
                                                              value: u.fork.apply(void 0, [n].concat(l, [e]))
                                                          };
                                                      })(d)
                                                  ];
                                        },
                                        q4() {
                                            return ['q2', y];
                                        }
                                    },
                                    'q1',
                                    `throttle(${(0, r.safeName)(t)}, ${n.name})`
                                );
                            });
                        var r = n(3),
                            o = (function(e) {
                                return e && e.__esModule ? e : { default: e };
                            })(r),
                            u = n(1),
                            i = n(4),
                            a = n(6),
                            c = n(0);
                    }
                ]);
            },
            function(e, t, n) {
                const o =
                    typeof Symbol === 'function' && r(Symbol.iterator) == 'symbol'
                        ? function(e) {
                              return void 0 === e ? 'undefined' : r(e);
                          }
                        : function(e) {
                              return e &&
                                  typeof Symbol === 'function' &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : void 0 === e ? 'undefined' : r(e);
                          };
                function u(e, t) {
                    return e === t;
                }
                function i(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u,
                        n = null,
                        r = null;
                    return function() {
                        return (
                            (function(e, t, n) {
                                if (t === null || n === null || t.length !== n.length) return !1;
                                for (let r = t.length, o = 0; o < r; o++) if (!e(t[o], n[o])) return !1;
                                return !0;
                            })(t, n, arguments) || (r = e.apply(null, arguments)),
                            (n = arguments),
                            r
                        );
                    };
                }
                function a(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                        n[r - 1] = arguments[r];
                    return function() {
                        for (var t = arguments.length, r = Array(t), u = 0; u < t; u++) r[u] = arguments[u];
                        let a = 0,
                            c = r.pop(),
                            f = (function(e) {
                                const t = Array.isArray(e[0]) ? e[0] : e;
                                if (!t.every(e => typeof e === 'function')) {
                                    const n = t.map(e => (void 0 === e ? 'undefined' : o(e))).join(', ');
                                    throw new Error(
                                        `Selector creators expect all input-selectors to be functions, instead received the following types: [${n}]`
                                    );
                                }
                                return t;
                            })(r),
                            l = e.apply(
                                void 0,
                                [
                                    function() {
                                        return a++, c.apply(null, arguments);
                                    }
                                ].concat(n)
                            ),
                            s = i(function() {
                                for (var e = [], t = f.length, n = 0; n < t; n++) e.push(f[n].apply(null, arguments));
                                return l.apply(null, e);
                            });
                        return (
                            (s.resultFunc = c),
                            (s.recomputations = function() {
                                return a;
                            }),
                            (s.resetRecomputations = function() {
                                return (a = 0);
                            }),
                            s
                        );
                    };
                }
                (t.__esModule = !0),
                    (t.defaultMemoize = i),
                    (t.createSelectorCreator = a),
                    (t.createStructuredSelector = function(e) {
                        const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
                        if ((void 0 === e ? 'undefined' : o(e)) !== 'object')
                            throw new Error(
                                `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${
                                    void 0 === e ? 'undefined' : o(e)
                                }`
                            );
                        const n = Object.keys(e);
                        return t(n.map(t => e[t]), function() {
                            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                            return t.reduce((e, t, r) => (e[n[r]] = t), e, {});
                        });
                    });
                var c = (t.createSelector = a(i));
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                const r = n(0);
                t.default = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !0;
                    return (0, r.lifecycle)({
                        componentDidMount() {
                            t && n && (e(this.props), (n = !1));
                        },
                        componentDidUpdate(t) {
                            (function(e, t) {
                                let n = e.location,
                                    r = n.pathname,
                                    o = n.search,
                                    u = t.location;
                                return `${r}${o}` != `${u.pathname}${u.search}`;
                            })(t, this.props) && e(this.props);
                        }
                    });
                };
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.default = function(e, t, n) {
                        return (0, r.compose)(
                            (0, r.withPropsOnChange)([], () => {
                                const e = new Set();
                                return {
                                    subscriptions: e,
                                    subscribe(t) {
                                        return (
                                            e.add(t),
                                            function() {
                                                e.delete(t);
                                            }
                                        );
                                    }
                                };
                            }),
                            (0, r.withContext)(
                                u({}, e, o.default.shape({ subscribe: o.default.func, data: o.default.shape(t) })),
                                t => {
                                    let r = n(t),
                                        o = t.subscribe;
                                    return u({}, e, { subscribe: o, data: r });
                                }
                            ),
                            (0, r.withPropsOnChange)(
                                (e, t) => {
                                    let o = n(e),
                                        u = n(t);
                                    return !(0, r.shallowEqual)(o, u);
                                },
                                e => {
                                    e.subscriptions.forEach(e => e());
                                }
                            )
                        );
                    });
                var r = n(0),
                    o = (function(e) {
                        return e && e.__esModule ? e : { default: e };
                    })(n(2));
                function u(e, t, n) {
                    return (
                        t in e
                            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
                            : (e[t] = n),
                        e
                    );
                }
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                let r =
                        Object.assign ||
                        function(e) {
                            for (let t = 1; t < arguments.length; t++) {
                                const n = arguments[t];
                                for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                        },
                    o = (function(e) {
                        return e && e.__esModule ? e : { default: e };
                    })(n(2)),
                    u = n(0);
                t.default = function(e, t) {
                    return (0, u.compose)(
                        (0, u.getContext)(
                            (function(e, t, n) {
                                return (
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = n),
                                    e
                                );
                            })({}, e, o.default.shape({ subscribe: o.default.func, data: o.default.shape(t) }))
                        ),
                        (0, u.lifecycle)({
                            componentWillMount() {
                                let t = this,
                                    n = this.props[e];
                                this.unsubscribeFromSlidableContext = n.subscribe(() => t.forceUpdate());
                            },
                            componentWillUnmount() {
                                this.unsubscribeFromSlidableContext();
                            }
                        }),
                        (0, u.withPropsOnChange)([e], t => r({}, t[e].data))
                    );
                };
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                const r = n(0);
                t.default = function() {
                    let e = {},
                        t = function(t) {
                            return function(n) {
                                return (e[t] = n);
                            };
                        };
                    return (0, r.withPropsOnChange)([], () => ({ refs: e, setRef: t }));
                };
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                const r =
                    Object.assign ||
                    function(e) {
                        for (let t = 1; t < arguments.length; t++) {
                            const n = arguments[t];
                            for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    };
                t.default = function(e, t, n, u) {
                    return (0, o.compose)(
                        (0, o.withState)(e, t, u),
                        (0, o.withPropsOnChange)([e], o => {
                            let u = o[e],
                                i = o[t];
                            return (function(e, t, n) {
                                return (
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = n),
                                    e
                                );
                            })({}, n, (e, t) => i(r({}, u, e), t));
                        })
                    );
                };
                var o = n(0);
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                let r = n(0),
                    o = n(1);
                t.default = function() {
                    const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { debounce: 20 };
                    return (0, r.compose)(
                        (0, r.withState)('windowSize', 'setWindowSize', { width: 0, height: 0 }),
                        (0, o.callHandlerOnResize)('setWindowSize', e)
                    );
                };
            }
        ]);
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.connect = t.connectAdvanced = t.createProvider = t.Provider = void 0);
        let r = n(30),
            o = a(r),
            u = a(n(13)),
            i = a(n(34));
        function a(e) {
            return e && e.__esModule ? e : { default: e };
        }
        (t.Provider = o.default),
            (t.createProvider = r.createProvider),
            (t.connectAdvanced = u.default),
            (t.connect = i.default);
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r =
            typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
                ? function(e) {
                      return typeof e;
                  }
                : function(e) {
                      return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                  };
        t.createProvider = c;
        let o = n(2),
            u = a(n(1)),
            i = n(12);
        a(n(6));
        function a(e) {
            return e && e.__esModule ? e : { default: e };
        }
        function c() {
            let e,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'store',
                n = arguments[1] || `${t}Subscription`,
                a = (function(e) {
                    function u(n, o) {
                        !(function(e, t) {
                            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                        })(this, u);
                        const i = (function(e, t) {
                            if (!e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || ((void 0 === t ? 'undefined' : r(t)) !== 'object' && typeof t !== 'function')
                                ? e
                                : t;
                        })(this, e.call(this, n, o));
                        return (i[t] = n.store), i;
                    }
                    return (
                        (function(e, t) {
                            if (typeof t !== 'function' && t !== null)
                                throw new TypeError(
                                    `Super expression must either be null or a function, not ${
                                        void 0 === t ? 'undefined' : r(t)
                                    }`
                                );
                            (e.prototype = Object.create(t && t.prototype, {
                                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
                            })),
                                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                        })(u, e),
                        (u.prototype.getChildContext = function() {
                            let e;
                            return ((e = {})[t] = this[t]), (e[n] = null), e;
                        }),
                        (u.prototype.render = function() {
                            return o.Children.only(this.props.children);
                        }),
                        u
                    );
                })(o.Component);
            return (
                (a.propTypes = { store: i.storeShape.isRequired, children: u.default.element.isRequired }),
                (a.childContextTypes = (((e = {})[t] = i.storeShape.isRequired), (e[n] = i.subscriptionShape), e)),
                a
            );
        }
        t.default = c();
    },
    function(e, t, n) {
        let r = {
                childContextTypes: !0,
                contextTypes: !0,
                defaultProps: !0,
                displayName: !0,
                getDefaultProps: !0,
                mixins: !0,
                propTypes: !0,
                type: !0
            },
            o = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
            u = Object.defineProperty,
            i = Object.getOwnPropertyNames,
            a = Object.getOwnPropertySymbols,
            c = Object.getOwnPropertyDescriptor,
            f = Object.getPrototypeOf,
            l = f && f(Object);
        e.exports = function e(t, n, s) {
            if (typeof n !== 'string') {
                if (l) {
                    const d = f(n);
                    d && d !== l && e(t, d, s);
                }
                let p = i(n);
                a && (p = p.concat(a(n)));
                for (let v = 0; v < p.length; ++v) {
                    const y = p[v];
                    if (!(r[y] || o[y] || (s && s[y]))) {
                        const h = c(n, y);
                        try {
                            u(t, y, h);
                        } catch (e) {}
                    }
                }
                return t;
            }
            return t;
        };
    },
    function(e, t, n) {
        e.exports = function(e, t, n, r, o, u, i, a) {
            if (!e) {
                let c;
                if (void 0 === t)
                    c = new Error(
                        'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
                    );
                else {
                    let f = [n, r, o, u, i, a],
                        l = 0;
                    (c = new Error(t.replace(/%s/g, () => f[l++]))).name = 'Invariant Violation';
                }
                throw ((c.framesToPop = 1), c);
            }
        };
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        let r = null,
            o = { notify() {} };
        const u = (function() {
            function e(t, n, r) {
                !(function(e, t) {
                    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                })(this, e),
                    (this.store = t),
                    (this.parentSub = n),
                    (this.onStateChange = r),
                    (this.unsubscribe = null),
                    (this.listeners = o);
            }
            return (
                (e.prototype.addNestedSub = function(e) {
                    return this.trySubscribe(), this.listeners.subscribe(e);
                }),
                (e.prototype.notifyNestedSubs = function() {
                    this.listeners.notify();
                }),
                (e.prototype.isSubscribed = function() {
                    return Boolean(this.unsubscribe);
                }),
                (e.prototype.trySubscribe = function() {
                    this.unsubscribe ||
                        ((this.unsubscribe = this.parentSub
                            ? this.parentSub.addNestedSub(this.onStateChange)
                            : this.store.subscribe(this.onStateChange)),
                        (this.listeners = (function() {
                            let e = [],
                                t = [];
                            return {
                                clear() {
                                    (t = r), (e = r);
                                },
                                notify() {
                                    for (let n = (e = t), r = 0; r < n.length; r++) n[r]();
                                },
                                get() {
                                    return t;
                                },
                                subscribe(n) {
                                    let o = !0;
                                    return (
                                        t === e && (t = e.slice()),
                                        t.push(n),
                                        function() {
                                            o &&
                                                e !== r &&
                                                ((o = !1), t === e && (t = e.slice()), t.splice(t.indexOf(n), 1));
                                        }
                                    );
                                }
                            };
                        })()));
                }),
                (e.prototype.tryUnsubscribe = function() {
                    this.unsubscribe &&
                        (this.unsubscribe(), (this.unsubscribe = null), this.listeners.clear(), (this.listeners = o));
                }),
                e
            );
        })();
        t.default = u;
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r =
            typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
                ? function(e) {
                      return typeof e;
                  }
                : function(e) {
                      return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                  };
        t.createConnect = v;
        let o = l(n(13)),
            u = l(n(35)),
            i = l(n(36)),
            a = l(n(51)),
            c = l(n(52)),
            f = l(n(53));
        function l(e) {
            return e && e.__esModule ? e : { default: e };
        }
        const s =
            Object.assign ||
            function(e) {
                for (let t = 1; t < arguments.length; t++) {
                    const n = arguments[t];
                    for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            };
        function d(e, t, n) {
            for (let o = t.length - 1; o >= 0; o--) {
                const u = t[o](e);
                if (u) return u;
            }
            return function(t, o) {
                throw new Error(
                    `Invalid value of type ${
                        void 0 === e ? 'undefined' : r(e)
                    } for ${n} argument when connecting component ${o.wrappedComponentName}.`
                );
            };
        }
        function p(e, t) {
            return e === t;
        }
        function v() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.connectHOC,
                n = void 0 === t ? o.default : t,
                r = e.mapStateToPropsFactories,
                l = void 0 === r ? a.default : r,
                v = e.mapDispatchToPropsFactories,
                y = void 0 === v ? i.default : v,
                h = e.mergePropsFactories,
                b = void 0 === h ? c.default : h,
                m = e.selectorFactory,
                g = void 0 === m ? f.default : m;
            return function(e, t, r) {
                let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    i = o.pure,
                    a = void 0 === i || i,
                    c = o.areStatesEqual,
                    f = void 0 === c ? p : c,
                    v = o.areOwnPropsEqual,
                    h = void 0 === v ? u.default : v,
                    m = o.areStatePropsEqual,
                    _ = void 0 === m ? u.default : m,
                    O = o.areMergedPropsEqual,
                    S = void 0 === O ? u.default : O,
                    j = (function(e, t) {
                        const n = {};
                        for (const r in e)
                            t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
                        return n;
                    })(o, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']),
                    P = d(e, l, 'mapStateToProps'),
                    w = d(t, y, 'mapDispatchToProps'),
                    E = d(r, b, 'mergeProps');
                return n(
                    g,
                    s(
                        {
                            methodName: 'connect',
                            getDisplayName(e) {
                                return `Connect(${e})`;
                            },
                            shouldHandleStateChanges: Boolean(e),
                            initMapStateToProps: P,
                            initMapDispatchToProps: w,
                            initMergeProps: E,
                            pure: a,
                            areStatesEqual: f,
                            areOwnPropsEqual: h,
                            areStatePropsEqual: _,
                            areMergedPropsEqual: S
                        },
                        j
                    )
                );
            };
        }
        t.default = v();
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r =
            typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
                ? function(e) {
                      return typeof e;
                  }
                : function(e) {
                      return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                  };
        t.default = function(e, t) {
            if (u(e, t)) return !0;
            if (
                (void 0 === e ? 'undefined' : r(e)) !== 'object' ||
                e === null ||
                (void 0 === t ? 'undefined' : r(t)) !== 'object' ||
                t === null
            )
                return !1;
            let n = Object.keys(e),
                i = Object.keys(t);
            if (n.length !== i.length) return !1;
            for (let a = 0; a < n.length; a++) if (!o.call(t, n[a]) || !u(e[n[a]], t[n[a]])) return !1;
            return !0;
        };
        var o = Object.prototype.hasOwnProperty;
        function u(e, t) {
            return e === t ? e !== 0 || t !== 0 || 1 / e == 1 / t : e != e && t != t;
        }
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r =
            typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
                ? function(e) {
                      return typeof e;
                  }
                : function(e) {
                      return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                  };
        (t.whenMapDispatchToPropsIsFunction = i),
            (t.whenMapDispatchToPropsIsMissing = a),
            (t.whenMapDispatchToPropsIsObject = c);
        let o = n(37),
            u = n(20);
        function i(e) {
            return typeof e === 'function' ? (0, u.wrapMapToPropsFunc)(e, 'mapDispatchToProps') : void 0;
        }
        function a(e) {
            return e ? void 0 : (0, u.wrapMapToPropsConstant)(e => ({ dispatch: e }));
        }
        function c(e) {
            return e && (void 0 === e ? 'undefined' : r(e)) === 'object'
                ? (0, u.wrapMapToPropsConstant)(t => (0, o.bindActionCreators)(e, t))
                : void 0;
        }
        t.default = [i, a, c];
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.compose = t.applyMiddleware = t.bindActionCreators = t.combineReducers = t.createStore = void 0);
        let r = c(n(14)),
            o = c(n(48)),
            u = c(n(49)),
            i = c(n(50)),
            a = c(n(19));
        c(n(18));
        function c(e) {
            return e && e.__esModule ? e : { default: e };
        }
        (t.createStore = r.default),
            (t.combineReducers = o.default),
            (t.bindActionCreators = u.default),
            (t.applyMiddleware = i.default),
            (t.compose = a.default);
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        let r = i(n(15)),
            o = i(n(41)),
            u = i(n(42));
        function i(e) {
            return e && e.__esModule ? e : { default: e };
        }
        let a = '[object Null]',
            c = '[object Undefined]',
            f = r.default ? r.default.toStringTag : void 0;
        t.default = function(e) {
            return e == null ? (void 0 === e ? c : a) : f && f in Object(e) ? (0, o.default)(e) : (0, u.default)(e);
        };
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        let r =
                typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
                    ? function(e) {
                          return typeof e;
                      }
                    : function(e) {
                          return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype
                              ? 'symbol'
                              : typeof e;
                      },
            o = (function(e) {
                return e && e.__esModule ? e : { default: e };
            })(n(40));
        let u =
                (typeof self === 'undefined' ? 'undefined' : r(self)) == 'object' &&
                self &&
                self.Object === Object &&
                self,
            i = o.default || u || Function('return this')();
        t.default = i;
    },
    function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, '__esModule', { value: !0 });
            let n =
                    typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
                        ? function(e) {
                              return typeof e;
                          }
                        : function(e) {
                              return e &&
                                  typeof Symbol === 'function' &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          },
                r = (void 0 === e ? 'undefined' : n(e)) == 'object' && e && e.Object === Object && e;
            t.default = r;
        }.call(this, n(16)));
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = (function(e) {
            return e && e.__esModule ? e : { default: e };
        })(n(15));
        let o = Object.prototype,
            u = o.hasOwnProperty,
            i = o.toString,
            a = r.default ? r.default.toStringTag : void 0;
        t.default = function(e) {
            let t = u.call(e, a),
                n = e[a];
            try {
                e[a] = void 0;
                var r = !0;
            } catch (e) {}
            const o = i.call(e);
            return r && (t ? (e[a] = n) : delete e[a]), o;
        };
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = Object.prototype.toString;
        t.default = function(e) {
            return r.call(e);
        };
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = (0,
        (function(e) {
            return e && e.__esModule ? e : { default: e };
        })(n(44)).default)(Object.getPrototypeOf, Object);
        t.default = r;
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function(e, t) {
                return function(n) {
                    return e(t(n));
                };
            });
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r =
            typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
                ? function(e) {
                      return typeof e;
                  }
                : function(e) {
                      return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                  };
        t.default = function(e) {
            return e != null && (void 0 === e ? 'undefined' : r(e)) == 'object';
        };
    },
    function(e, t, n) {
        (function(e, r) {
            Object.defineProperty(t, '__esModule', { value: !0 });
            let o,
                u = (function(e) {
                    return e && e.__esModule ? e : { default: e };
                })(n(47));
            o = typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : void 0 !== e ? e : r;
            const i = (0, u.default)(o);
            t.default = i;
        }.call(this, n(16), n(17)(e)));
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function(e) {
                let t,
                    n = e.Symbol;
                typeof n === 'function'
                    ? n.observable ? (t = n.observable) : ((t = n('observable')), (n.observable = t))
                    : (t = '@@observable');
                return t;
            });
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function(e) {
                for (var t = Object.keys(e), n = {}, o = 0; o < t.length; o++) {
                    const i = t[o];
                    0, typeof e[i] === 'function' && (n[i] = e[i]);
                }
                const a = Object.keys(n);
                0;
                let c = void 0;
                try {
                    !(function(e) {
                        Object.keys(e).forEach(t => {
                            let n = e[t],
                                o = n(void 0, { type: r.ActionTypes.INIT });
                            if (void 0 === o)
                                throw new Error(
                                    `Reducer "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`
                                );
                            const u = `@@redux/PROBE_UNKNOWN_ACTION_${Math.random()
                                .toString(36)
                                .substring(7)
                                .split('')
                                .join('.')}`;
                            if (void 0 === n(void 0, { type: u }))
                                throw new Error(
                                    `Reducer "${t}" returned undefined when probed with a random type. Don't try to handle ${
                                        r.ActionTypes.INIT
                                    } or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`
                                );
                        });
                    })(n);
                } catch (e) {
                    c = e;
                }
                return function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments[1];
                    if (c) throw c;
                    for (var r = !1, o = {}, i = 0; i < a.length; i++) {
                        let f = a[i],
                            l = n[f],
                            s = e[f],
                            d = l(s, t);
                        if (void 0 === d) {
                            const p = u(f, t);
                            throw new Error(p);
                        }
                        (o[f] = d), (r = r || d !== s);
                    }
                    return r ? o : e;
                };
            });
        var r = n(14);
        o(n(7)), o(n(18));
        function o(e) {
            return e && e.__esModule ? e : { default: e };
        }
        function u(e, t) {
            const n = t && t.type;
            return `Given action ${(n && `"${n.toString()}"`) ||
                'an action'}, reducer "${e}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`;
        }
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r =
            typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
                ? function(e) {
                      return typeof e;
                  }
                : function(e) {
                      return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                  };
        function o(e, t) {
            return function() {
                return t(e.apply(void 0, arguments));
            };
        }
        t.default = function(e, t) {
            if (typeof e === 'function') return o(e, t);
            if ((void 0 === e ? 'undefined' : r(e)) !== 'object' || e === null)
                throw new Error(
                    `bindActionCreators expected an object or a function, instead received ${
                        e === null ? 'null' : void 0 === e ? 'undefined' : r(e)
                    }. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`
                );
            for (var n = Object.keys(e), u = {}, i = 0; i < n.length; i++) {
                let a = n[i],
                    c = e[a];
                typeof c === 'function' && (u[a] = o(c, t));
            }
            return u;
        };
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return function(e) {
                    return function(n, u, i) {
                        let a = e(n, u, i),
                            c = a.dispatch,
                            f = [],
                            l = {
                                getState: a.getState,
                                dispatch(e) {
                                    return c(e);
                                }
                            };
                        return (
                            (f = t.map(e => e(l))),
                            (c = r.default.apply(void 0, f)(a.dispatch)),
                            o({}, a, { dispatch: c })
                        );
                    };
                };
            });
        var r = (function(e) {
            return e && e.__esModule ? e : { default: e };
        })(n(19));
        var o =
            Object.assign ||
            function(e) {
                for (let t = 1; t < arguments.length; t++) {
                    const n = arguments[t];
                    for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            };
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.whenMapStateToPropsIsFunction = o),
            (t.whenMapStateToPropsIsMissing = u);
        const r = n(20);
        function o(e) {
            return typeof e === 'function' ? (0, r.wrapMapToPropsFunc)(e, 'mapStateToProps') : void 0;
        }
        function u(e) {
            return e ? void 0 : (0, r.wrapMapToPropsConstant)(() => ({}));
        }
        t.default = [o, u];
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.defaultMergeProps = o),
            (t.wrapMergePropsFunc = u),
            (t.whenMergePropsIsFunction = i),
            (t.whenMergePropsIsOmitted = a);
        !(function(e) {
            e && e.__esModule;
        })(n(21));
        const r =
            Object.assign ||
            function(e) {
                for (let t = 1; t < arguments.length; t++) {
                    const n = arguments[t];
                    for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            };
        function o(e, t, n) {
            return r({}, n, e, t);
        }
        function u(e) {
            return function(t, n) {
                n.displayName;
                let r = n.pure,
                    o = n.areMergedPropsEqual,
                    u = !1,
                    i = void 0;
                return function(t, n, a) {
                    const c = e(t, n, a);
                    return u ? (r && o(c, i)) || (i = c) : ((u = !0), (i = c)), i;
                };
            };
        }
        function i(e) {
            return typeof e === 'function' ? u(e) : void 0;
        }
        function a(e) {
            return e
                ? void 0
                : function() {
                      return o;
                  };
        }
        t.default = [i, a];
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.impureFinalPropsSelectorFactory = r),
            (t.pureFinalPropsSelectorFactory = o),
            (t.default = function(e, t) {
                let n = t.initMapStateToProps,
                    u = t.initMapDispatchToProps,
                    i = t.initMergeProps,
                    a = (function(e, t) {
                        const n = {};
                        for (const r in e)
                            t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
                        return n;
                    })(t, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']),
                    c = n(e, a),
                    f = u(e, a),
                    l = i(e, a);
                0;
                return (a.pure ? o : r)(c, f, l, e, a);
            });
        !(function(e) {
            e && e.__esModule;
        })(n(54));
        function r(e, t, n, r) {
            return function(o, u) {
                return n(e(o, u), t(r, u), u);
            };
        }
        function o(e, t, n, r, o) {
            let u = o.areStatesEqual,
                i = o.areOwnPropsEqual,
                a = o.areStatePropsEqual,
                c = !1,
                f = void 0,
                l = void 0,
                s = void 0,
                d = void 0,
                p = void 0;
            function v(o, c) {
                let v = !i(c, l),
                    y = !u(o, f);
                return (
                    (f = o),
                    (l = c),
                    v && y
                        ? ((s = e(f, l)), t.dependsOnOwnProps && (d = t(r, l)), (p = n(s, d, l)))
                        : v
                          ? (e.dependsOnOwnProps && (s = e(f, l)),
                            t.dependsOnOwnProps && (d = t(r, l)),
                            (p = n(s, d, l)))
                          : y
                            ? (function() {
                                  let t = e(f, l),
                                      r = !a(t, s);
                                  return (s = t), r && (p = n(s, d, l)), p;
                              })()
                            : p
                );
            }
            return function(o, u) {
                return c
                    ? v(o, u)
                    : (function(o, u) {
                          return (s = e((f = o), (l = u))), (d = t(r, l)), (p = n(s, d, l)), (c = !0), p;
                      })(o, u);
            };
        }
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function(e, t, n, r) {
                o(e, 'mapStateToProps', r), o(t, 'mapDispatchToProps', r), o(n, 'mergeProps', r);
            });
        const r = (function(e) {
            return e && e.__esModule ? e : { default: e };
        })(n(6));
        function o(e, t, n) {
            if (!e) throw new Error(`Unexpected value for ${t} in ${n}.`);
            (t !== 'mapStateToProps' && t !== 'mapDispatchToProps') ||
                e.hasOwnProperty('dependsOnOwnProps') ||
                (0, r.default)(`The selector for ${t} of ${n} did not specify a value for dependsOnOwnProps.`);
        }
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = n(56);
        Object.defineProperty(t, 'enhanceWithSpinner', {
            enumerable: !0,
            get() {
                return (function(e) {
                    return e && e.__esModule ? e : { default: e };
                })(r).default;
            }
        });
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        let r = n(5),
            o = n(57);
        t.default = (0, r.branch)(e => e.topStories === null, (0, r.renderComponent)(o.GistsSpinner));
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = n(11);
        Object.defineProperty(t, 'Gists', {
            enumerable: !0,
            get() {
                return u(r).default;
            }
        });
        const o = n(58);
        function u(e) {
            return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, 'GistsSpinner', {
            enumerable: !0,
            get() {
                return u(o).default;
            }
        });
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = (function(e) {
            return e && e.__esModule ? e : { default: e };
        })(n(59));
        t.default = r.default;
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        let r = n(22),
            o = (function(e) {
                return e && e.__esModule ? e : { default: e };
            })(n(2));
        t.default = function() {
            return o.default.createElement(r.Box, null, o.default.createElement(r.Spinner, null));
        };
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = n(61);
        Object.defineProperty(t, 'handleLoadingGists', {
            enumerable: !0,
            get() {
                return (function(e) {
                    return e && e.__esModule ? e : { default: e };
                })(r).default;
            }
        });
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = n(3);
        t.default = function(e) {
            const t = e.dispatch;
            return function() {
                return t(r.loadTopStoriesAction.start());
            };
        };
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        let r = (t.LOAD_TOP_STORIES_START = 'gists/LOAD_TOP_STORIES_START'),
            o = (t.LOAD_TOP_STORIES_FAILURE = 'gists/LOAD_TOP_STORIES_FAILURE'),
            u = (t.LOAD_TOP_STORIES_SUCCESS = 'gists/LOAD_TOP_STORIES_SUCCESS');
        t.loadTopStoriesAction = {
            start() {
                return { type: r };
            },
            success(e) {
                return { type: u, topStories: e };
            },
            failure() {
                return { type: o };
            }
        };
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function(e) {
                return (e && e.topStories) || null;
            });
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        let r = n(22),
            o = i(n(1)),
            u = i(n(2));
        function i(e) {
            return e && e.__esModule ? e : { default: e };
        }
        function a(e) {
            let t = e.topStories,
                n = e.handleLoadingGists;
            return u.default.createElement(
                r.Box,
                null,
                u.default.createElement(r.Header, { title: 'The Latest Gists' }),
                u.default.createElement(
                    r.List,
                    null,
                    t &&
                        t.map((e, t) => {
                            let n = e.title,
                                o = e.url;
                            return u.default.createElement(
                                r.ListItem,
                                { key: `topStory${t}` },
                                u.default.createElement('a', { target: 'blank', href: o }, n)
                            );
                        })
                ),
                u.default.createElement(
                    r.Footer,
                    null,
                    u.default.createElement(r.Button, { handleClick: n, label: 'Update' })
                )
            );
        }
        (a.propTypes = {
            topStories: o.default.arrayOf(o.default.shape({ title: o.default.string, url: o.default.url })),
            handleLoadingGists: o.default.func
        }),
            (t.default = a);
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        let r =
                Object.assign ||
                function(e) {
                    for (let t = 1; t < arguments.length; t++) {
                        const n = arguments[t];
                        for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                },
            o = n(3);
        t.default = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            switch (t.type) {
                case o.LOAD_TOP_STORIES_START:
                    return r({}, e, { topStories: null });
                case o.LOAD_TOP_STORIES_SUCCESS:
                    return r({}, e, { topStories: t.topStories });
                default:
                    return e;
            }
        };
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = (function(e) {
            return e && e.__esModule ? e : { default: e };
        })(n(67));
        t.default = r.default;
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = i(n(8));
        t.default = c;
        let o = n(24),
            u = i(n(75));
        function i(e) {
            return e && e.__esModule ? e : { default: e };
        }
        const a = r.default.mark(c);
        function c() {
            return r.default.wrap(
                e => {
                    for (;;)
                        switch ((e.prev = e.next)) {
                            case 0:
                                return (e.next = 2), (0, o.all)([(0, o.fork)(u.default)]);
                            case 2:
                            case 'end':
                                return e.stop();
                        }
                },
                a,
                this
            );
        }
    },
    function(e, t, n) {
        let r =
                (function() {
                    return this;
                })() || Function('return this')(),
            o = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf('regeneratorRuntime') >= 0,
            u = o && r.regeneratorRuntime;
        if (((r.regeneratorRuntime = void 0), (e.exports = n(69)), o)) r.regeneratorRuntime = u;
        else
            try {
                delete r.regeneratorRuntime;
            } catch (e) {
                r.regeneratorRuntime = void 0;
            }
    },
    function(e, t, n) {
        (function(e) {
            const t =
                typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
                    ? function(e) {
                          return typeof e;
                      }
                    : function(e) {
                          return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype
                              ? 'symbol'
                              : typeof e;
                      };
            !(function(n) {
                let r,
                    o = Object.prototype,
                    u = o.hasOwnProperty,
                    i = typeof Symbol === 'function' ? Symbol : {},
                    a = i.iterator || '@@iterator',
                    c = i.asyncIterator || '@@asyncIterator',
                    f = i.toStringTag || '@@toStringTag',
                    l = t(e) === 'object',
                    s = n.regeneratorRuntime;
                if (s) l && (e.exports = s);
                else {
                    (s = n.regeneratorRuntime = l ? e.exports : {}).wrap = O;
                    var d = 'suspendedStart',
                        p = 'suspendedYield',
                        v = 'executing',
                        y = 'completed',
                        h = {},
                        b = {};
                    b[a] = function() {
                        return this;
                    };
                    let m = Object.getPrototypeOf,
                        g = m && m(m(A([])));
                    g && g !== o && u.call(g, a) && (b = g);
                    const _ = (w.prototype = j.prototype = Object.create(b));
                    (P.prototype = _.constructor = w),
                        (w.constructor = P),
                        (w[f] = P.displayName = 'GeneratorFunction'),
                        (s.isGeneratorFunction = function(e) {
                            const t = typeof e === 'function' && e.constructor;
                            return !!t && (t === P || (t.displayName || t.name) === 'GeneratorFunction');
                        }),
                        (s.mark = function(e) {
                            return (
                                Object.setPrototypeOf
                                    ? Object.setPrototypeOf(e, w)
                                    : ((e.__proto__ = w), f in e || (e[f] = 'GeneratorFunction')),
                                (e.prototype = Object.create(_)),
                                e
                            );
                        }),
                        (s.awrap = function(e) {
                            return { __await: e };
                        }),
                        E(k.prototype),
                        (k.prototype[c] = function() {
                            return this;
                        }),
                        (s.AsyncIterator = k),
                        (s.async = function(e, t, n, r) {
                            const o = new k(O(e, t, n, r));
                            return s.isGeneratorFunction(t) ? o : o.next().then(e => (e.done ? e.value : o.next()));
                        }),
                        E(_),
                        (_[f] = 'Generator'),
                        (_[a] = function() {
                            return this;
                        }),
                        (_.toString = function() {
                            return '[object Generator]';
                        }),
                        (s.keys = function(e) {
                            const t = [];
                            for (const n in e) t.push(n);
                            return (
                                t.reverse(),
                                function n() {
                                    for (; t.length; ) {
                                        const r = t.pop();
                                        if (r in e) return (n.value = r), (n.done = !1), n;
                                    }
                                    return (n.done = !0), n;
                                }
                            );
                        }),
                        (s.values = A),
                        (T.prototype = {
                            constructor: T,
                            reset(e) {
                                if (
                                    ((this.prev = 0),
                                    (this.next = 0),
                                    (this.sent = this._sent = r),
                                    (this.done = !1),
                                    (this.delegate = null),
                                    (this.method = 'next'),
                                    (this.arg = r),
                                    this.tryEntries.forEach(C),
                                    !e)
                                )
                                    for (const t in this)
                                        t.charAt(0) === 't' && u.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = r);
                            },
                            stop() {
                                this.done = !0;
                                const e = this.tryEntries[0].completion;
                                if (e.type === 'throw') throw e.arg;
                                return this.rval;
                            },
                            dispatchException(e) {
                                if (this.done) throw e;
                                const t = this;
                                function n(n, o) {
                                    return (
                                        (a.type = 'throw'),
                                        (a.arg = e),
                                        (t.next = n),
                                        o && ((t.method = 'next'), (t.arg = r)),
                                        !!o
                                    );
                                }
                                for (let o = this.tryEntries.length - 1; o >= 0; --o) {
                                    var i = this.tryEntries[o],
                                        a = i.completion;
                                    if (i.tryLoc === 'root') return n('end');
                                    if (i.tryLoc <= this.prev) {
                                        let c = u.call(i, 'catchLoc'),
                                            f = u.call(i, 'finallyLoc');
                                        if (c && f) {
                                            if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                            if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                                        } else if (c) {
                                            if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                        } else {
                                            if (!f) throw new Error('try statement without catch or finally');
                                            if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                                        }
                                    }
                                }
                            },
                            abrupt(e, t) {
                                for (let n = this.tryEntries.length - 1; n >= 0; --n) {
                                    const r = this.tryEntries[n];
                                    if (r.tryLoc <= this.prev && u.call(r, 'finallyLoc') && this.prev < r.finallyLoc) {
                                        var o = r;
                                        break;
                                    }
                                }
                                o &&
                                    (e === 'break' || e === 'continue') &&
                                    o.tryLoc <= t &&
                                    t <= o.finallyLoc &&
                                    (o = null);
                                const i = o ? o.completion : {};
                                return (
                                    (i.type = e),
                                    (i.arg = t),
                                    o ? ((this.method = 'next'), (this.next = o.finallyLoc), h) : this.complete(i)
                                );
                            },
                            complete(e, t) {
                                if (e.type === 'throw') throw e.arg;
                                return (
                                    e.type === 'break' || e.type === 'continue'
                                        ? (this.next = e.arg)
                                        : e.type === 'return'
                                          ? ((this.rval = this.arg = e.arg),
                                            (this.method = 'return'),
                                            (this.next = 'end'))
                                          : e.type === 'normal' && t && (this.next = t),
                                    h
                                );
                            },
                            finish(e) {
                                for (let t = this.tryEntries.length - 1; t >= 0; --t) {
                                    const n = this.tryEntries[t];
                                    if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), C(n), h;
                                }
                            },
                            catch(e) {
                                for (let t = this.tryEntries.length - 1; t >= 0; --t) {
                                    const n = this.tryEntries[t];
                                    if (n.tryLoc === e) {
                                        const r = n.completion;
                                        if (r.type === 'throw') {
                                            var o = r.arg;
                                            C(n);
                                        }
                                        return o;
                                    }
                                }
                                throw new Error('illegal catch attempt');
                            },
                            delegateYield(e, t, n) {
                                return (
                                    (this.delegate = { iterator: A(e), resultName: t, nextLoc: n }),
                                    this.method === 'next' && (this.arg = r),
                                    h
                                );
                            }
                        });
                }
                function O(e, t, n, r) {
                    let o = t && t.prototype instanceof j ? t : j,
                        u = Object.create(o.prototype),
                        i = new T(r || []);
                    return (
                        (u._invoke = (function(e, t, n) {
                            let r = d;
                            return function(o, u) {
                                if (r === v) throw new Error('Generator is already running');
                                if (r === y) {
                                    if (o === 'throw') throw u;
                                    return N();
                                }
                                for (n.method = o, n.arg = u; ; ) {
                                    const i = n.delegate;
                                    if (i) {
                                        const a = x(i, n);
                                        if (a) {
                                            if (a === h) continue;
                                            return a;
                                        }
                                    }
                                    if (n.method === 'next') n.sent = n._sent = n.arg;
                                    else if (n.method === 'throw') {
                                        if (r === d) throw ((r = y), n.arg);
                                        n.dispatchException(n.arg);
                                    } else n.method === 'return' && n.abrupt('return', n.arg);
                                    r = v;
                                    const c = S(e, t, n);
                                    if (c.type === 'normal') {
                                        if (((r = n.done ? y : p), c.arg === h)) continue;
                                        return { value: c.arg, done: n.done };
                                    }
                                    c.type === 'throw' && ((r = y), (n.method = 'throw'), (n.arg = c.arg));
                                }
                            };
                        })(e, n, i)),
                        u
                    );
                }
                function S(e, t, n) {
                    try {
                        return { type: 'normal', arg: e.call(t, n) };
                    } catch (e) {
                        return { type: 'throw', arg: e };
                    }
                }
                function j() {}
                function P() {}
                function w() {}
                function E(e) {
                    ['next', 'throw', 'return'].forEach(t => {
                        e[t] = function(e) {
                            return this._invoke(t, e);
                        };
                    });
                }
                function k(e) {
                    let n;
                    this._invoke = function(r, o) {
                        function i() {
                            return new Promise((n, i) => {
                                !(function n(r, o, i, a) {
                                    const c = S(e[r], e, o);
                                    if (c.type !== 'throw') {
                                        let f = c.arg,
                                            l = f.value;
                                        return l &&
                                            (void 0 === l ? 'undefined' : t(l)) === 'object' &&
                                            u.call(l, '__await')
                                            ? Promise.resolve(l.__await).then(
                                                  e => {
                                                      n('next', e, i, a);
                                                  },
                                                  e => {
                                                      n('throw', e, i, a);
                                                  }
                                              )
                                            : Promise.resolve(l).then(e => {
                                                  (f.value = e), i(f);
                                              }, a);
                                    }
                                    a(c.arg);
                                })(r, o, n, i);
                            });
                        }
                        return (n = n ? n.then(i, i) : i());
                    };
                }
                function x(e, t) {
                    const n = e.iterator[t.method];
                    if (n === r) {
                        if (((t.delegate = null), t.method === 'throw')) {
                            if (
                                e.iterator.return &&
                                ((t.method = 'return'), (t.arg = r), x(e, t), t.method === 'throw')
                            )
                                return h;
                            (t.method = 'throw'),
                                (t.arg = new TypeError("The iterator does not provide a 'throw' method"));
                        }
                        return h;
                    }
                    const o = S(n, e.iterator, t.arg);
                    if (o.type === 'throw') return (t.method = 'throw'), (t.arg = o.arg), (t.delegate = null), h;
                    const u = o.arg;
                    return u
                        ? u.done
                          ? ((t[e.resultName] = u.value),
                            (t.next = e.nextLoc),
                            t.method !== 'return' && ((t.method = 'next'), (t.arg = r)),
                            (t.delegate = null),
                            h)
                          : u
                        : ((t.method = 'throw'),
                          (t.arg = new TypeError('iterator result is not an object')),
                          (t.delegate = null),
                          h);
                }
                function M(e) {
                    const t = { tryLoc: e[0] };
                    1 in e && (t.catchLoc = e[1]),
                        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                        this.tryEntries.push(t);
                }
                function C(e) {
                    const t = e.completion || {};
                    (t.type = 'normal'), delete t.arg, (e.completion = t);
                }
                function T(e) {
                    (this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(M, this), this.reset(!0);
                }
                function A(e) {
                    if (e) {
                        const t = e[a];
                        if (t) return t.call(e);
                        if (typeof e.next === 'function') return e;
                        if (!isNaN(e.length)) {
                            let n = -1,
                                o = function t() {
                                    for (; ++n < e.length; )
                                        if (u.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                                    return (t.value = r), (t.done = !0), t;
                                };
                            return (o.next = o);
                        }
                    }
                    return { next: N };
                }
                function N() {
                    return { value: r, done: !0 };
                }
            })(
                (function() {
                    return this;
                })() || Function('return this')()
            );
        }.call(this, n(17)(e)));
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.throttleHelper = t.takeLatestHelper = t.takeEveryHelper = t.throttle = t.takeLatest = t.takeEvery = void 0);
        let r = a(n(71)),
            o = a(n(73)),
            u = a(n(74)),
            i = n(0);
        function a(e) {
            return e && e.__esModule ? e : { default: e };
        }
        let c = function(e) {
                return `import { ${e} } from 'redux-saga' has been deprecated in favor of import { ${e} } from 'redux-saga/effects'.\nThe latter will not work with yield*, as helper effects are wrapped automatically for you in fork effect.\nTherefore yield ${e} will return task descriptor to your saga and execute next lines of code.`;
            },
            f = (0, i.deprecate)(r.default, c('takeEvery')),
            l = (0, i.deprecate)(o.default, c('takeLatest')),
            s = (0, i.deprecate)(u.default, c('throttle'));
        (t.takeEvery = f),
            (t.takeLatest = l),
            (t.throttle = s),
            (t.takeEveryHelper = r.default),
            (t.takeLatestHelper = o.default),
            (t.throttleHelper = u.default);
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function(e, t) {
                for (var n = arguments.length, a = Array(n > 2 ? n - 2 : 0), c = 2; c < n; c++) a[c - 2] = arguments[c];
                let f = { done: !1, value: (0, u.take)(e) },
                    l = void 0,
                    s = function(e) {
                        return (l = e);
                    };
                return (0, o.default)(
                    {
                        q1() {
                            return ['q2', f, s];
                        },
                        q2() {
                            return l === i.END
                                ? [r.qEnd]
                                : [
                                      'q1',
                                      (function(e) {
                                          return { done: !1, value: u.fork.apply(void 0, [t].concat(a, [e])) };
                                      })(l)
                                  ];
                        }
                    },
                    'q1',
                    `takeEvery(${(0, r.safeName)(e)}, ${t.name})`
                );
            });
        var r = n(9),
            o = (function(e) {
                return e && e.__esModule ? e : { default: e };
            })(r),
            u = n(4),
            i = n(10);
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.asap = function(e) {
                r.push(e), o || (i(), c());
            }),
            (t.suspend = i),
            (t.flush = c);
        var r = [],
            o = 0;
        function u(e) {
            try {
                i(), e();
            } finally {
                a();
            }
        }
        function i() {
            o++;
        }
        function a() {
            o--;
        }
        function c() {
            a();
            for (let e = void 0; !o && void 0 !== (e = r.shift()); ) u(e);
        }
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function(e, t) {
                for (var n = arguments.length, a = Array(n > 2 ? n - 2 : 0), c = 2; c < n; c++) a[c - 2] = arguments[c];
                let f = { done: !1, value: (0, u.take)(e) },
                    l = function(e) {
                        return { done: !1, value: u.fork.apply(void 0, [t].concat(a, [e])) };
                    },
                    s = void 0,
                    d = void 0,
                    p = function(e) {
                        return (s = e);
                    },
                    v = function(e) {
                        return (d = e);
                    };
                return (0, o.default)(
                    {
                        q1() {
                            return ['q2', f, v];
                        },
                        q2() {
                            return d === i.END
                                ? [r.qEnd]
                                : s
                                  ? [
                                        'q3',
                                        (function(e) {
                                            return { done: !1, value: (0, u.cancel)(e) };
                                        })(s)
                                    ]
                                  : ['q1', l(d), p];
                        },
                        q3() {
                            return ['q1', l(d), p];
                        }
                    },
                    'q1',
                    `takeLatest(${(0, r.safeName)(e)}, ${t.name})`
                );
            });
        var r = n(9),
            o = (function(e) {
                return e && e.__esModule ? e : { default: e };
            })(r),
            u = n(4),
            i = n(10);
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function(e, t, n) {
                for (var f = arguments.length, l = Array(f > 3 ? f - 3 : 0), s = 3; s < f; s++) l[s - 3] = arguments[s];
                let d = void 0,
                    p = void 0,
                    v = { done: !1, value: (0, u.actionChannel)(t, a.buffers.sliding(1)) },
                    y = { done: !1, value: (0, u.call)(c.delay, e) },
                    h = function(e) {
                        return (d = e);
                    },
                    b = function(e) {
                        return (p = e);
                    };
                return (0, o.default)(
                    {
                        q1() {
                            return ['q2', v, b];
                        },
                        q2() {
                            return ['q3', { done: !1, value: (0, u.take)(p) }, h];
                        },
                        q3() {
                            return d === i.END
                                ? [r.qEnd]
                                : [
                                      'q4',
                                      (function(e) {
                                          return { done: !1, value: u.fork.apply(void 0, [n].concat(l, [e])) };
                                      })(d)
                                  ];
                        },
                        q4() {
                            return ['q2', y];
                        }
                    },
                    'q1',
                    `throttle(${(0, r.safeName)(t)}, ${n.name})`
                );
            });
        var r = n(9),
            o = (function(e) {
                return e && e.__esModule ? e : { default: e };
            })(r),
            u = n(4),
            i = n(10),
            a = n(25),
            c = n(0);
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = (function(e) {
            return e && e.__esModule ? e : { default: e };
        })(n(8));
        t.default = l;
        let o = n(24),
            u = n(3),
            i = n(76);
        let a = r.default.mark(f),
            c = r.default.mark(l);
        function f() {
            let e;
            return r.default.wrap(
                t => {
                    for (;;)
                        switch ((t.prev = t.next)) {
                            case 0:
                                return (t.next = 2), (0, o.call)(i.fetchTopStories);
                            case 2:
                                return (e = t.sent), (t.next = 5), (0, o.put)(u.loadTopStoriesAction.success(e));
                            case 5:
                            case 'end':
                                return t.stop();
                        }
                },
                a,
                this
            );
        }
        function l() {
            return r.default.wrap(
                e => {
                    for (;;)
                        switch ((e.prev = e.next)) {
                            case 0:
                                return (e.next = 2), (0, o.takeLatest)(u.LOAD_TOP_STORIES_START, f);
                            case 2:
                            case 'end':
                                return e.stop();
                        }
                },
                c,
                this
            );
        }
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = n(77);
        Object.defineProperty(t, 'fetchTopStories', {
            enumerable: !0,
            get() {
                return (function(e) {
                    return e && e.__esModule ? e : { default: e };
                })(r).default;
            }
        });
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = (function(e) {
            return e && e.__esModule ? e : { default: e };
        })(n(8));
        t.default = (function(e) {
            return function() {
                const t = e.apply(this, arguments);
                return new Promise((e, n) =>
                    (function r(o, u) {
                        try {
                            var i = t[o](u),
                                a = i.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!i.done)
                            return Promise.resolve(a).then(
                                e => {
                                    r('next', e);
                                },
                                e => {
                                    r('throw', e);
                                }
                            );
                        e(a);
                    })('next')
                );
            };
        })(
            r.default.mark(function e() {
                let t;
                return r.default.wrap(
                    e => {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (e.next = 2), new Promise(e => setTimeout(e, 1200));
                                case 2:
                                    return (
                                        (t = {}),
                                        (e.prev = 3),
                                        (e.next = 6),
                                        fetch('https://api.github.com/gists').then(e => e.json())
                                    );
                                case 6:
                                    (t = e.sent), (e.next = 12);
                                    break;
                                case 9:
                                    (e.prev = 9), (e.t0 = e.catch(3)), console.error(e.t0);
                                case 12:
                                    return e.abrupt(
                                        'return',
                                        t.map(e => {
                                            let t = e.description,
                                                n = e.url;
                                            return { title: t || n, url: n };
                                        })
                                    );
                                case 13:
                                case 'end':
                                    return e.stop();
                            }
                    },
                    e,
                    void 0,
                    [[3, 9]]
                );
            })
        );
    }
]);
