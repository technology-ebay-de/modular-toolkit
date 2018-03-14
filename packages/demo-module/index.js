module.exports = (function(e) {
    var t = {};
    function n(r) {
        if (t[r]) return t[r].exports;
        var o = (t[r] = { i: r, l: !1, exports: {} });
        return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
        (n.m = e),
        (n.c = t),
        (n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r });
        }),
        (n.r = function(e) {
            Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (n.n = function(e) {
            var t =
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
        n((n.s = 75))
    );
})([
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                      return typeof e;
                  }
                : function(e) {
                      return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                  };
        (t.check = function(e, t, n) {
            if (!t(e)) throw (g('error', 'uncaught at check', n), new Error(n));
        }),
            (t.hasOwn = p),
            (t.remove = function(e, t) {
                var n = e.indexOf(t);
                n >= 0 && e.splice(n, 1);
            }),
            (t.deferred = y),
            (t.arrayOfDeffered = function(e) {
                for (var t = [], n = 0; n < e; n++) t.push(y());
                return t;
            }),
            (t.delay = function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = void 0,
                    r = new Promise(function(r) {
                        n = setTimeout(function() {
                            return r(t);
                        }, e);
                    });
                return (
                    (r[f] = function() {
                        return clearTimeout(n);
                    }),
                    r
                );
            }),
            (t.createMockTask = function() {
                var e,
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
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
                    r = arguments[3],
                    o = { name: n, next: e, throw: t, return: m };
                r && (o[c] = !0);
                'undefined' != typeof Symbol &&
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
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                },
            u =
                'function' == typeof Symbol && 'symbol' === r(Symbol.iterator)
                    ? function(e) {
                          return void 0 === e ? 'undefined' : r(e);
                      }
                    : function(e) {
                          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                              ? 'symbol'
                              : void 0 === e ? 'undefined' : r(e);
                      },
            i = (t.sym = function(e) {
                return '@@redux-saga/' + e;
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
        var d = Object.prototype.hasOwnProperty;
        function p(e, t) {
            return v.notUndef(e) && d.call(e, t);
        }
        var v = (t.is = {
            undef: function(e) {
                return null === e || void 0 === e;
            },
            notUndef: function(e) {
                return null !== e && void 0 !== e;
            },
            func: function(e) {
                return 'function' == typeof e;
            },
            number: function(e) {
                return 'number' == typeof e;
            },
            string: function(e) {
                return 'string' == typeof e;
            },
            array: Array.isArray,
            object: function(e) {
                return e && !v.array(e) && 'object' === (void 0 === e ? 'undefined' : u(e));
            },
            promise: function(e) {
                return e && v.func(e.then);
            },
            iterator: function(e) {
                return e && v.func(e.next) && v.func(e.throw);
            },
            iterable: function(e) {
                return e && v.func(Symbol) ? v.func(e[Symbol.iterator]) : v.array(e);
            },
            task: function(e) {
                return e && e[a];
            },
            observable: function(e) {
                return e && v.func(e.subscribe);
            },
            buffer: function(e) {
                return e && v.func(e.isEmpty) && v.func(e.take) && v.func(e.put);
            },
            pattern: function(e) {
                return (
                    e && (v.string(e) || 'symbol' === (void 0 === e ? 'undefined' : u(e)) || v.func(e) || v.array(e))
                );
            },
            channel: function(e) {
                return e && v.func(e.take) && v.func(e.close);
            },
            helper: function(e) {
                return e && e[c];
            },
            stringableFunc: function(e) {
                return v.func(e) && p(e, 'toString');
            }
        });
        t.object = {
            assign: function(e, t) {
                for (var n in t) p(t, n) && (e[n] = t[n]);
            }
        };
        t.array = {
            from: function(e) {
                var t = Array(e.length);
                for (var n in e) p(e, n) && (t[n] = e[n]);
                return t;
            }
        };
        function y() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = o({}, e),
                n = new Promise(function(e, n) {
                    (t.resolve = e), (t.reject = n);
                });
            return (t.promise = n), t;
        }
        function h() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
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
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '';
            'undefined' == typeof window
                ? console.log('redux-saga ' + e + ': ' + t + '\n' + ((n && n.stack) || n))
                : console[e](t, n);
        }
        (t.updateIncentive = function(e, t) {
            return e + ' has been deprecated in favor of ' + t + ', please update your code';
        }),
            (t.internalErr = function(e) {
                return new Error(
                    "\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: " +
                        e +
                        '\n'
                );
            }),
            (t.createSetContextWarning = function(e, t) {
                return (e ? e + '.' : '') + 'setContext(props): argument ' + t + ' is not a plain object';
            }),
            (t.wrapSagaDispatch = function(e) {
                return function(t) {
                    return e(Object.defineProperty(t, l, { value: !0 }));
                };
            }),
            (t.cloneableGenerator = function e(t) {
                return function() {
                    for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    var u = [],
                        i = t.apply(void 0, r);
                    return {
                        next: function(e) {
                            return u.push(e), i.next(e);
                        },
                        clone: function() {
                            var n = e(t).apply(void 0, r);
                            return (
                                u.forEach(function(e) {
                                    return n.next(e);
                                }),
                                n
                            );
                        },
                        return: function(e) {
                            return i.return(e);
                        },
                        throw: function(e) {
                            return i.throw(e);
                        }
                    };
                };
            });
    },
    function(e, t) {
        e.exports = require('react');
    },
    function(e, t) {
        e.exports = require('prop-types');
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.asEffect = t.takem = t.detach = void 0),
            (t.take = P),
            (t.put = w),
            (t.all = k),
            (t.race = function(e) {
                return j(f, e);
            }),
            (t.call = function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return j(l, E('call', e, n));
            }),
            (t.apply = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                return j(l, E('apply', { context: e, fn: t }, n));
            }),
            (t.cps = function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return j(s, E('cps', e, n));
            }),
            (t.fork = M),
            (t.spawn = function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return S(M.apply(void 0, [e].concat(n)));
            }),
            (t.join = function e() {
                for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                if (n.length > 1)
                    return k(
                        n.map(function(t) {
                            return e(t);
                        })
                    );
                var u = n[0];
                (0, r.check)(u, r.is.notUndef, 'join(task): argument task is undefined');
                (0, r.check)(u, r.is.task, 'join(task): argument ' + u + ' is not a valid Task object ' + O);
                return j(p, u);
            }),
            (t.cancel = function e() {
                for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                if (n.length > 1)
                    return k(
                        n.map(function(t) {
                            return e(t);
                        })
                    );
                var u = n[0];
                1 === n.length &&
                    ((0, r.check)(u, r.is.notUndef, 'cancel(task): argument task is undefined'),
                    (0, r.check)(u, r.is.task, 'cancel(task): argument ' + u + ' is not a valid Task object ' + O));
                return j(v, u || r.SELF_CANCELLATION);
            }),
            (t.select = function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                0 === arguments.length
                    ? (e = r.ident)
                    : ((0, r.check)(e, r.is.notUndef, 'select(selector,[...]): argument selector is undefined'),
                      (0, r.check)(e, r.is.func, 'select(selector,[...]): argument ' + e + ' is not a function'));
                return j(y, { selector: e, args: n });
            }),
            (t.actionChannel = function(e, t) {
                (0, r.check)(e, r.is.notUndef, 'actionChannel(pattern,...): argument pattern is undefined'),
                    arguments.length > 1 &&
                        ((0, r.check)(t, r.is.notUndef, 'actionChannel(pattern, buffer): argument buffer is undefined'),
                        (0, r.check)(
                            t,
                            r.is.buffer,
                            'actionChannel(pattern, buffer): argument ' + t + ' is not a valid buffer'
                        ));
                return j(h, { pattern: e, buffer: t });
            }),
            (t.cancelled = function() {
                return j(b, {});
            }),
            (t.flush = function(e) {
                return (
                    (0, r.check)(e, r.is.channel, 'flush(channel): argument ' + e + ' is not valid channel'), j(m, e)
                );
            }),
            (t.getContext = function(e) {
                return (0, r.check)(e, r.is.string, 'getContext(prop): argument ' + e + ' is not a string'), j(g, e);
            }),
            (t.setContext = function(e) {
                return (0, r.check)(e, r.is.object, (0, r.createSetContextWarning)(null, e)), j(_, e);
            }),
            (t.takeEvery = function(e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), u = 2; u < n; u++) r[u - 2] = arguments[u];
                return M.apply(void 0, [o.takeEveryHelper, e, t].concat(r));
            }),
            (t.takeLatest = function(e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), u = 2; u < n; u++) r[u - 2] = arguments[u];
                return M.apply(void 0, [o.takeLatestHelper, e, t].concat(r));
            }),
            (t.throttle = function(e, t, n) {
                for (var r = arguments.length, u = Array(r > 3 ? r - 3 : 0), i = 3; i < r; i++) u[i - 3] = arguments[i];
                return M.apply(void 0, [o.throttleHelper, e, t, n].concat(u));
            });
        var r = n(0),
            o = n(32),
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
            j = function(e, t) {
                var n;
                return ((n = {})[u] = !0), (n[e] = t), n;
            },
            S = (t.detach = function(e) {
                return (
                    (0, r.check)(C.fork(e), r.is.object, 'detach(eff): argument must be a fork effect'),
                    (e[d].detached = !0),
                    e
                );
            });
        function P() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '*';
            if (
                (arguments.length &&
                    (0, r.check)(arguments[0], r.is.notUndef, 'take(patternOrChannel): patternOrChannel is undefined'),
                r.is.pattern(e))
            )
                return j(i, { pattern: e });
            if (r.is.channel(e)) return j(i, { channel: e });
            throw new Error(
                'take(patternOrChannel): argument ' + String(e) + ' is not valid channel or a valid pattern'
            );
        }
        P.maybe = function() {
            var e = P.apply(void 0, arguments);
            return (e[i].maybe = !0), e;
        };
        t.takem = (0, r.deprecate)(P.maybe, (0, r.updateIncentive)('takem', 'take.maybe'));
        function w(e, t) {
            return (
                arguments.length > 1
                    ? ((0, r.check)(e, r.is.notUndef, 'put(channel, action): argument channel is undefined'),
                      (0, r.check)(e, r.is.channel, 'put(channel, action): argument ' + e + ' is not a valid channel'),
                      (0, r.check)(t, r.is.notUndef, 'put(channel, action): argument action is undefined'))
                    : ((0, r.check)(e, r.is.notUndef, 'put(action): argument action is undefined'),
                      (t = e),
                      (e = null)),
                j(a, { channel: e, action: t })
            );
        }
        function k(e) {
            return j(c, e);
        }
        function E(e, t, n) {
            (0, r.check)(t, r.is.notUndef, e + ': argument fn is undefined');
            var o = null;
            if (r.is.array(t)) {
                var u = t;
                (o = u[0]), (t = u[1]);
            } else if (t.fn) {
                var i = t;
                (o = i.context), (t = i.fn);
            }
            return (
                o && r.is.string(t) && r.is.func(o[t]) && (t = o[t]),
                (0, r.check)(t, r.is.func, e + ': argument ' + t + ' is not a function'),
                { context: o, fn: t, args: n }
            );
        }
        function M(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return j(d, E('fork', e, n));
        }
        (w.resolve = function() {
            var e = w.apply(void 0, arguments);
            return (e[a].resolve = !0), e;
        }),
            (w.sync = (0, r.deprecate)(w.resolve, (0, r.updateIncentive)('put.sync', 'put.resolve')));
        var x = function(e) {
                return function(t) {
                    return t && t[u] && t[e];
                };
            },
            C = (t.asEffect = {
                take: x(i),
                put: x(a),
                all: x(c),
                race: x(f),
                call: x(l),
                cps: x(s),
                fork: x(d),
                join: x(p),
                cancel: x(v),
                select: x(y),
                actionChannel: x(h),
                cancelled: x(b),
                flush: x(m),
                getContext: x(g),
                setContext: x(_)
            });
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r = n(38);
        Object.keys(r).forEach(function(e) {
            'default' !== e &&
                '__esModule' !== e &&
                Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return r[e];
                    }
                });
        }),
            (t.default = { loadTopStoriesAction: r.loadTopStoriesAction });
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.UNDEFINED_INPUT_ERROR = t.INVALID_BUFFER = t.isEnd = t.END = void 0),
            (t.emitter = function() {
                var e = [];
                return {
                    subscribe: function(t) {
                        return (
                            e.push(t),
                            function() {
                                return (0, r.remove)(e, t);
                            }
                        );
                    },
                    emit: function(t) {
                        for (var n = e.slice(), r = 0, o = n.length; r < o; r++) n[r](t);
                    }
                };
            }),
            (t.channel = s),
            (t.eventChannel = d),
            (t.stdChannel = function(e) {
                var t = d(function(t) {
                    return e(function(e) {
                        e[r.SAGA_ACTION]
                            ? t(e)
                            : (0, u.asap)(function() {
                                  return t(e);
                              });
                    });
                });
                return i({}, t, {
                    take: function(e, n) {
                        arguments.length > 1 &&
                            ((0, r.check)(n, r.is.func, "channel.take's matcher argument must be a function"),
                            (e[r.MATCH] = n)),
                            t.take(e);
                    }
                });
            });
        var r = n(0),
            o = n(10),
            u = n(30),
            i =
                Object.assign ||
                function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                },
            a = (t.END = { type: '@@redux-saga/CHANNEL_END' }),
            c = (t.isEnd = function(e) {
                return e && '@@redux-saga/CHANNEL_END' === e.type;
            });
        var f = (t.INVALID_BUFFER = 'invalid buffer passed to channel factory function'),
            l = (t.UNDEFINED_INPUT_ERROR = 'Saga was provided with an undefined action');
        function s() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.buffers.fixed(),
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
                    take: function(o) {
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
                    put: function(o) {
                        if ((u(), (0, r.check)(o, r.is.notUndef, l), !t)) {
                            if (!n.length) return e.put(o);
                            for (var i = 0; i < n.length; i++) {
                                var a = n[i];
                                if (!a[r.MATCH] || a[r.MATCH](o)) return n.splice(i, 1), a(o);
                            }
                        }
                    },
                    flush: function(n) {
                        u(),
                            (0, r.check)(n, r.is.func, "channel.flush' callback must be a function"),
                            t && e.isEmpty() ? n(a) : n(e.flush());
                    },
                    close: function() {
                        if ((u(), !t && ((t = !0), n.length))) {
                            var e = n;
                            n = [];
                            for (var r = 0, o = e.length; r < o; r++) e[r](a);
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
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.buffers.none(),
                n = arguments[2];
            arguments.length > 2 && (0, r.check)(n, r.is.func, 'Invalid match function passed to eventChannel');
            var u = s(t),
                i = function() {
                    u.__closed__ || (a && a(), u.close());
                },
                a = e(function(e) {
                    c(e) ? i() : (n && !n(e)) || u.put(e);
                });
            if ((u.__closed__ && a(), !r.is.func(a)))
                throw new Error('in eventChannel: subscribe should return a function to unsubscribe');
            return { take: u.take, flush: u.flush, close: i };
        }
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.qEnd = void 0),
            (t.safeName = function(e) {
                return r.is.channel(e)
                    ? 'channel'
                    : Array.isArray(e)
                      ? String(
                            e.map(function(e) {
                                return String(e);
                            })
                        )
                      : String(e);
            }),
            (t.default = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'iterator',
                    i = void 0,
                    a = t;
                function c(t, n) {
                    if (a === u) return o;
                    if (n) throw ((a = u), n);
                    i && i(t);
                    var r = e[a](),
                        c = r[0],
                        f = r[1],
                        l = r[2];
                    return (i = l), (a = c) === u ? o : f;
                }
                return (0, r.makeIterator)(
                    c,
                    function(e) {
                        return c(null, e);
                    },
                    n,
                    !0
                );
            });
        var r = n(0),
            o = { done: !0, value: void 0 },
            u = (t.qEnd = {});
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r = i(n(63)),
            o = i(n(58)),
            u = i(n(56));
        function i(e) {
            return e && e.__esModule ? e : { default: e };
        }
        var a = '[object Object]',
            c = Function.prototype,
            f = Object.prototype,
            l = c.toString,
            s = f.hasOwnProperty,
            d = l.call(Object);
        t.default = function(e) {
            if (!(0, u.default)(e) || (0, r.default)(e) != a) return !1;
            var t = (0, o.default)(e);
            if (null === t) return !0;
            var n = s.call(t, 'constructor') && t.constructor;
            return 'function' == typeof n && n instanceof n && l.call(n) == d;
        };
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function(e) {
                'undefined' != typeof console && 'function' == typeof console.error && console.error(e);
                try {
                    throw new Error(e);
                } catch (e) {}
            });
    },
    function(e, t) {
        e.exports = require('recompose');
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.buffers = t.BUFFER_OVERFLOW = void 0);
        var r = n(0),
            o = (t.BUFFER_OVERFLOW = "Channel's Buffer overflow!"),
            u = 1,
            i = 3,
            a = 4,
            c = { isEmpty: r.kTrue, put: r.noop, take: r.noop };
        function f() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
                t = arguments[1],
                n = new Array(e),
                r = 0,
                c = 0,
                f = 0,
                l = function(t) {
                    (n[c] = t), (c = (c + 1) % e), r++;
                },
                s = function() {
                    if (0 != r) {
                        var t = n[f];
                        return (n[f] = null), r--, (f = (f + 1) % e), t;
                    }
                },
                d = function() {
                    for (var e = []; r; ) e.push(s());
                    return e;
                };
            return {
                isEmpty: function() {
                    return 0 == r;
                },
                put: function(s) {
                    if (r < e) l(s);
                    else {
                        var p = void 0;
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
            none: function() {
                return c;
            },
            fixed: function(e) {
                return f(e, u);
            },
            dropping: function(e) {
                return f(e, 2);
            },
            sliding: function(e) {
                return f(e, i);
            },
            expanding: function(e) {
                return f(e, a);
            }
        };
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r = n(3);
        Object.defineProperty(t, 'take', {
            enumerable: !0,
            get: function() {
                return r.take;
            }
        }),
            Object.defineProperty(t, 'takem', {
                enumerable: !0,
                get: function() {
                    return r.takem;
                }
            }),
            Object.defineProperty(t, 'put', {
                enumerable: !0,
                get: function() {
                    return r.put;
                }
            }),
            Object.defineProperty(t, 'all', {
                enumerable: !0,
                get: function() {
                    return r.all;
                }
            }),
            Object.defineProperty(t, 'race', {
                enumerable: !0,
                get: function() {
                    return r.race;
                }
            }),
            Object.defineProperty(t, 'call', {
                enumerable: !0,
                get: function() {
                    return r.call;
                }
            }),
            Object.defineProperty(t, 'apply', {
                enumerable: !0,
                get: function() {
                    return r.apply;
                }
            }),
            Object.defineProperty(t, 'cps', {
                enumerable: !0,
                get: function() {
                    return r.cps;
                }
            }),
            Object.defineProperty(t, 'fork', {
                enumerable: !0,
                get: function() {
                    return r.fork;
                }
            }),
            Object.defineProperty(t, 'spawn', {
                enumerable: !0,
                get: function() {
                    return r.spawn;
                }
            }),
            Object.defineProperty(t, 'join', {
                enumerable: !0,
                get: function() {
                    return r.join;
                }
            }),
            Object.defineProperty(t, 'cancel', {
                enumerable: !0,
                get: function() {
                    return r.cancel;
                }
            }),
            Object.defineProperty(t, 'select', {
                enumerable: !0,
                get: function() {
                    return r.select;
                }
            }),
            Object.defineProperty(t, 'actionChannel', {
                enumerable: !0,
                get: function() {
                    return r.actionChannel;
                }
            }),
            Object.defineProperty(t, 'cancelled', {
                enumerable: !0,
                get: function() {
                    return r.cancelled;
                }
            }),
            Object.defineProperty(t, 'flush', {
                enumerable: !0,
                get: function() {
                    return r.flush;
                }
            }),
            Object.defineProperty(t, 'getContext', {
                enumerable: !0,
                get: function() {
                    return r.getContext;
                }
            }),
            Object.defineProperty(t, 'setContext', {
                enumerable: !0,
                get: function() {
                    return r.setContext;
                }
            }),
            Object.defineProperty(t, 'takeEvery', {
                enumerable: !0,
                get: function() {
                    return r.takeEvery;
                }
            }),
            Object.defineProperty(t, 'takeLatest', {
                enumerable: !0,
                get: function() {
                    return r.takeLatest;
                }
            }),
            Object.defineProperty(t, 'throttle', {
                enumerable: !0,
                get: function() {
                    return r.throttle;
                }
            });
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function() {
                return { topStories: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null };
            });
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.selectTopStories = void 0);
        var r = n(37);
        Object.defineProperty(t, 'selectTopStories', {
            enumerable: !0,
            get: function() {
                return u(r).default;
            }
        });
        var o = u(r);
        function u(e) {
            return e && e.__esModule ? e : { default: e };
        }
        t.default = { selectTopStories: o.default };
    },
    function(e, t, n) {
        'use strict';
        var r =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                      return typeof e;
                  }
                : function(e) {
                      return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                  };
        e.exports = (function(e) {
            var t = {};
            function n(r) {
                if (t[r]) return t[r].exports;
                var o = (t[r] = { i: r, l: !1, exports: {} });
                return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
            }
            return (
                (n.m = e),
                (n.c = t),
                (n.d = function(e, t, r) {
                    n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r });
                }),
                (n.r = function(e) {
                    Object.defineProperty(e, '__esModule', { value: !0 });
                }),
                (n.n = function(e) {
                    var t =
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
                n((n.s = 33))
            );
        })([
            function(e, t, n) {
                var o,
                    u,
                    i = {},
                    a = ((o = function() {
                        return window && document && document.all && !window.atob;
                    }),
                    function() {
                        return void 0 === u && (u = o.apply(this, arguments)), u;
                    }),
                    c = (function(e) {
                        var t = {};
                        return function(e) {
                            if ('function' == typeof e) return e();
                            if (void 0 === t[e]) {
                                var n = function(e) {
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
                    f = null,
                    l = 0,
                    s = [],
                    d = n(28);
                function p(e, t) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n],
                            o = i[r.id];
                        if (o) {
                            o.refs++;
                            for (var u = 0; u < o.parts.length; u++) o.parts[u](r.parts[u]);
                            for (; u < r.parts.length; u++) o.parts.push(g(r.parts[u], t));
                        } else {
                            var a = [];
                            for (u = 0; u < r.parts.length; u++) a.push(g(r.parts[u], t));
                            i[r.id] = { id: r.id, refs: 1, parts: a };
                        }
                    }
                }
                function v(e, t) {
                    for (var n = [], r = {}, o = 0; o < e.length; o++) {
                        var u = e[o],
                            i = t.base ? u[0] + t.base : u[0],
                            a = { css: u[1], media: u[2], sourceMap: u[3] };
                        r[i] ? r[i].parts.push(a) : n.push((r[i] = { id: i, parts: [a] }));
                    }
                    return n;
                }
                function y(e, t) {
                    var n = c(e.insertInto);
                    if (!n)
                        throw new Error(
                            "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
                        );
                    var o = s[s.length - 1];
                    if ('top' === e.insertAt)
                        o
                            ? o.nextSibling ? n.insertBefore(t, o.nextSibling) : n.appendChild(t)
                            : n.insertBefore(t, n.firstChild),
                            s.push(t);
                    else if ('bottom' === e.insertAt) n.appendChild(t);
                    else {
                        if ('object' != r(e.insertAt) || !e.insertAt.before)
                            throw new Error(
                                "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
                            );
                        var u = c(e.insertInto + ' ' + e.insertAt.before);
                        n.insertBefore(t, u);
                    }
                }
                function h(e) {
                    if (null === e.parentNode) return !1;
                    e.parentNode.removeChild(e);
                    var t = s.indexOf(e);
                    t >= 0 && s.splice(t, 1);
                }
                function b(e) {
                    var t = document.createElement('style');
                    return (e.attrs.type = 'text/css'), m(t, e.attrs), y(e, t), t;
                }
                function m(e, t) {
                    Object.keys(t).forEach(function(n) {
                        e.setAttribute(n, t[n]);
                    });
                }
                function g(e, t) {
                    var n, r, o, u;
                    if (t.transform && e.css) {
                        if (!(u = t.transform(e.css))) return function() {};
                        e.css = u;
                    }
                    if (t.singleton) {
                        var i = l++;
                        (n = f || (f = b(t))), (r = j.bind(null, n, i, !1)), (o = j.bind(null, n, i, !0));
                    } else
                        e.sourceMap &&
                        'function' == typeof URL &&
                        'function' == typeof URL.createObjectURL &&
                        'function' == typeof URL.revokeObjectURL &&
                        'function' == typeof Blob &&
                        'function' == typeof btoa
                            ? ((n = (function(e) {
                                  var t = document.createElement('link');
                                  return (
                                      (e.attrs.type = 'text/css'),
                                      (e.attrs.rel = 'stylesheet'),
                                      m(t, e.attrs),
                                      y(e, t),
                                      t
                                  );
                              })(t)),
                              (r = function(e, t, n) {
                                  var r = n.css,
                                      o = n.sourceMap,
                                      u = void 0 === t.convertToAbsoluteUrls && o;
                                  (t.convertToAbsoluteUrls || u) && (r = d(r)),
                                      o &&
                                          (r +=
                                              '\n/*# sourceMappingURL=data:application/json;base64,' +
                                              btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
                                              ' */');
                                  var i = new Blob([r], { type: 'text/css' }),
                                      a = e.href;
                                  (e.href = URL.createObjectURL(i)), a && URL.revokeObjectURL(a);
                              }.bind(null, n, t)),
                              (o = function() {
                                  h(n), n.href && URL.revokeObjectURL(n.href);
                              }))
                            : ((n = b(t)),
                              (r = function(e, t) {
                                  var n = t.css,
                                      r = t.media;
                                  if ((r && e.setAttribute('media', r), e.styleSheet)) e.styleSheet.cssText = n;
                                  else {
                                      for (; e.firstChild; ) e.removeChild(e.firstChild);
                                      e.appendChild(document.createTextNode(n));
                                  }
                              }.bind(null, n)),
                              (o = function() {
                                  h(n);
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
                        'undefined' != typeof DEBUG &&
                        DEBUG &&
                        'object' != ('undefined' == typeof document ? 'undefined' : r(document))
                    )
                        throw new Error('The style-loader cannot be used in a non-browser environment');
                    ((t = t || {}).attrs = 'object' == r(t.attrs) ? t.attrs : {}),
                        t.singleton || 'boolean' == typeof t.singleton || (t.singleton = a()),
                        t.insertInto || (t.insertInto = 'head'),
                        t.insertAt || (t.insertAt = 'bottom');
                    var n = v(e, t);
                    return (
                        p(n, t),
                        function(e) {
                            for (var r = [], o = 0; o < n.length; o++) {
                                var u = n[o];
                                (a = i[u.id]).refs--, r.push(a);
                            }
                            for (e && p(v(e, t), t), o = 0; o < r.length; o++) {
                                var a;
                                if (0 === (a = r[o]).refs) {
                                    for (var c = 0; c < a.parts.length; c++) a.parts[c]();
                                    delete i[a.id];
                                }
                            }
                        }
                    );
                };
                var _,
                    O = ((_ = []),
                    function(e, t) {
                        return (_[e] = t), _.filter(Boolean).join('\n');
                    });
                function j(e, t, n, r) {
                    var o = n ? '' : r.css;
                    if (e.styleSheet) e.styleSheet.cssText = O(t, o);
                    else {
                        var u = document.createTextNode(o),
                            i = e.childNodes;
                        i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(u, i[t]) : e.appendChild(u);
                    }
                }
            },
            function(e, t, n) {
                e.exports = function(e) {
                    var t = [];
                    return (
                        (t.toString = function() {
                            return this.map(function(t) {
                                var n = (function(e, t) {
                                    var n,
                                        r = e[1] || '',
                                        o = e[3];
                                    if (!o) return r;
                                    if (t && 'function' == typeof btoa) {
                                        var u = ((n = o),
                                            '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                                                btoa(unescape(encodeURIComponent(JSON.stringify(n)))) +
                                                ' */'),
                                            i = o.sources.map(function(e) {
                                                return '/*# sourceURL=' + o.sourceRoot + e + ' */';
                                            });
                                        return [r]
                                            .concat(i)
                                            .concat([u])
                                            .join('\n');
                                    }
                                    return [r].join('\n');
                                })(t, e);
                                return t[2] ? '@media ' + t[2] + '{' + n + '}' : n;
                            }).join('');
                        }),
                        (t.i = function(e, n) {
                            'string' == typeof e && (e = [[null, e, '']]);
                            for (var r = {}, o = 0; o < this.length; o++) {
                                var u = this[o][0];
                                'number' == typeof u && (r[u] = !0);
                            }
                            for (o = 0; o < e.length; o++) {
                                var i = e[o];
                                ('number' == typeof i[0] && r[i[0]]) ||
                                    (n && !i[2] ? (i[2] = n) : n && (i[2] = '(' + i[2] + ') and (' + n + ')'),
                                    t.push(i));
                            }
                        }),
                        t
                    );
                };
            },
            function(e, t) {
                e.exports = n(1);
            },
            function(e, t) {
                e.exports = n(2);
            },
            function(e, t, n) {
                (e.exports = n(1)(!1)).push([
                    e.i,
                    '.demo-ui-spinner {\n    width: 40px;\n    height: 40px;\n    position: relative;\n    margin: auto;\n}\n\n.demo-ui-double-bounce1,\n.demo-ui-double-bounce2 {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: #586e75;\n    opacity: .6;\n    position: absolute;\n    top: 0;\n    left: 0;\n    animation: demo-ui-bounce 2s infinite ease-in-out;\n}\n\n.demo-ui-double-bounce2 {\n    animation-delay: -1s;\n}\n\n@keyframes demo-ui-bounce {\n    0%,\n    100% {\n        transform: scale(0);\n    }\n\n    50% {\n        transform: scale(1);\n    }\n}\n',
                    ''
                ]);
            },
            function(e, t, n) {
                var r = n(4);
                'string' == typeof r && (r = [[e.i, r, '']]);
                n(0)(r, { hmr: !0, transform: void 0, insertInto: void 0 }), r.locals && (e.exports = r.locals);
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var r,
                    o = (r = n(2)) && r.__esModule ? r : { default: r };
                n(5),
                    (t.default = function() {
                        return o.default.createElement(
                            'div',
                            { className: 'demo-ui-spinner' },
                            o.default.createElement('div', { className: 'demo-ui-double-bounce1' }),
                            o.default.createElement('div', { className: 'demo-ui-double-bounce2' })
                        );
                    });
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var r,
                    o = (r = n(6)) && r.__esModule ? r : { default: r };
                t.default = o.default;
            },
            function(e, t, n) {
                (e.exports = n(1)(!1)).push([
                    e.i,
                    '.demo-ui-list-item {\n    padding: 8px 8px 8px 12px;\n    border-bottom: 1px solid #dbd5c5;\n}\n\n.demo-ui-list-item:last-child {\n    border-bottom: none;\n    padding-bottom: 16px;\n}\n',
                    ''
                ]);
            },
            function(e, t, n) {
                var r = n(8);
                'string' == typeof r && (r = [[e.i, r, '']]);
                n(0)(r, { hmr: !0, transform: void 0, insertInto: void 0 }), r.locals && (e.exports = r.locals);
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var r = u(n(2));
                n(9);
                var o = u(n(3));
                function u(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function i(e) {
                    var t = e.children;
                    return r.default.createElement('li', { className: 'demo-ui-list-item' }, t);
                }
                (i.propTypes = { children: o.default.node }), (t.default = i);
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var r,
                    o = (r = n(10)) && r.__esModule ? r : { default: r };
                t.default = o.default;
            },
            function(e, t, n) {
                (e.exports = n(1)(!1)).push([
                    e.i,
                    '.demo-ui-list {\n    overflow-y: scroll;\n    border-top: 1px solid #dbd5c5;\n    border-bottom: 1px solid #dbd5c5;\n}\n',
                    ''
                ]);
            },
            function(e, t, n) {
                var r = n(12);
                'string' == typeof r && (r = [[e.i, r, '']]);
                n(0)(r, { hmr: !0, transform: void 0, insertInto: void 0 }), r.locals && (e.exports = r.locals);
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var r = u(n(2));
                n(13);
                var o = u(n(3));
                function u(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function i(e) {
                    var t = e.children;
                    return r.default.createElement('ul', { className: 'demo-ui-list' }, t);
                }
                (i.propTypes = { children: o.default.node }), (t.default = i);
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var r,
                    o = (r = n(14)) && r.__esModule ? r : { default: r };
                t.default = o.default;
            },
            function(e, t, n) {
                (e.exports = n(1)(!1)).push([
                    e.i,
                    '.demo-ui-header {\n    color: #1a6091;\n    font-weight: 900;\n    font-size: 1.2em;\n    padding: 18px 8px 8px 12px;\n}\n\n.demo-ui-header h1 {\n    font-weight: bold;\n}\n',
                    ''
                ]);
            },
            function(e, t, n) {
                var r = n(16);
                'string' == typeof r && (r = [[e.i, r, '']]);
                n(0)(r, { hmr: !0, transform: void 0, insertInto: void 0 }), r.locals && (e.exports = r.locals);
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var r = u(n(2));
                n(17);
                var o = u(n(3));
                function u(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function i(e) {
                    var t = e.title;
                    return r.default.createElement(
                        'header',
                        { className: 'demo-ui-header' },
                        r.default.createElement('h1', null, t)
                    );
                }
                (i.propTypes = { title: o.default.string.isRequired }), (t.default = i);
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var r,
                    o = (r = n(18)) && r.__esModule ? r : { default: r };
                t.default = o.default;
            },
            function(e, t, n) {
                (e.exports = n(1)(!1)).push([
                    e.i,
                    '.demo-ui-footer {\n    padding: 8px 8px 8px 16px;\n    text-align: right;\n}\n',
                    ''
                ]);
            },
            function(e, t, n) {
                var r = n(20);
                'string' == typeof r && (r = [[e.i, r, '']]);
                n(0)(r, { hmr: !0, transform: void 0, insertInto: void 0 }), r.locals && (e.exports = r.locals);
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var r = u(n(2));
                n(21);
                var o = u(n(3));
                function u(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function i(e) {
                    var t = e.children;
                    return r.default.createElement('footer', { className: 'demo-ui-footer' }, t);
                }
                (i.propTypes = { children: o.default.node }), (t.default = i);
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var r,
                    o = (r = n(22)) && r.__esModule ? r : { default: r };
                t.default = o.default;
            },
            function(e, t, n) {
                (e.exports = n(1)(!1)).push([
                    e.i,
                    '.demo-ui-button {\n    color: #fff;\n    background-color: #1a6091;\n    border: none;\n    padding: 8px 16px;\n    border-radius: 16px;\n    box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, .3);\n}\n',
                    ''
                ]);
            },
            function(e, t, n) {
                var r = n(24);
                'string' == typeof r && (r = [[e.i, r, '']]);
                n(0)(r, { hmr: !0, transform: void 0, insertInto: void 0 }), r.locals && (e.exports = r.locals);
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var r = u(n(2));
                n(25);
                var o = u(n(3));
                function u(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function i(e) {
                    var t = e.label,
                        n = e.handleClick;
                    return r.default.createElement('button', { className: 'demo-ui-button', onClick: n }, t);
                }
                (i.propTypes = { label: o.default.string.isRequired, handleClick: o.default.func.isRequired }),
                    (t.default = i);
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var r,
                    o = (r = n(26)) && r.__esModule ? r : { default: r };
                t.default = o.default;
            },
            function(e, t, n) {
                e.exports = function(e) {
                    var t = 'undefined' != typeof window && window.location;
                    if (!t) throw new Error('fixUrls requires window.location');
                    if (!e || 'string' != typeof e) return e;
                    var n = t.protocol + '//' + t.host,
                        r = n + t.pathname.replace(/\/[^\/]*$/, '/');
                    return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
                        var o,
                            u = t
                                .trim()
                                .replace(/^"(.*)"$/, function(e, t) {
                                    return t;
                                })
                                .replace(/^'(.*)'$/, function(e, t) {
                                    return t;
                                });
                        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(u)
                            ? e
                            : ((o =
                                  0 === u.indexOf('//')
                                      ? u
                                      : 0 === u.indexOf('/') ? n + u : r + u.replace(/^\.\//, '')),
                              'url(' + JSON.stringify(o) + ')');
                    });
                };
            },
            function(e, t, n) {
                (e.exports = n(1)(!1)).push([
                    e.i,
                    '.demo-ui-box {\n    background-color: #fdf6e3;\n    border-radius: 20px;\n    box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, .3);\n    height: 400px;\n    display: flex;\n    flex-direction: column;\n}\n',
                    ''
                ]);
            },
            function(e, t, n) {
                var r = n(29);
                'string' == typeof r && (r = [[e.i, r, '']]);
                n(0)(r, { hmr: !0, transform: void 0, insertInto: void 0 }), r.locals && (e.exports = r.locals);
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var r = u(n(2)),
                    o = u(n(3));
                function u(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function i(e) {
                    var t = e.children;
                    return r.default.createElement('article', { className: 'demo-ui-box' }, t);
                }
                n(30), (i.propTypes = { children: o.default.node }), (t.default = i);
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var r,
                    o = (r = n(31)) && r.__esModule ? r : { default: r };
                t.default = o.default;
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var r = n(32);
                Object.defineProperty(t, 'Box', {
                    enumerable: !0,
                    get: function() {
                        return l(r).default;
                    }
                });
                var o = n(27);
                Object.defineProperty(t, 'Button', {
                    enumerable: !0,
                    get: function() {
                        return l(o).default;
                    }
                });
                var u = n(23);
                Object.defineProperty(t, 'Footer', {
                    enumerable: !0,
                    get: function() {
                        return l(u).default;
                    }
                });
                var i = n(19);
                Object.defineProperty(t, 'Header', {
                    enumerable: !0,
                    get: function() {
                        return l(i).default;
                    }
                });
                var a = n(15);
                Object.defineProperty(t, 'List', {
                    enumerable: !0,
                    get: function() {
                        return l(a).default;
                    }
                });
                var c = n(11);
                Object.defineProperty(t, 'ListItem', {
                    enumerable: !0,
                    get: function() {
                        return l(c).default;
                    }
                });
                var f = n(7);
                function l(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                Object.defineProperty(t, 'Spinner', {
                    enumerable: !0,
                    get: function() {
                        return l(f).default;
                    }
                });
            }
        ]);
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function(e, t, n) {
                (0, r.default)(e) ||
                    (0, o.default)(n + '() in ' + t + ' must return a plain object. Instead received ' + e + '.');
            });
        var r = u(n(7)),
            o = u(n(8));
        function u(e) {
            return e && e.__esModule ? e : { default: e };
        }
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.wrapMapToPropsConstant = function(e) {
                return function(t, n) {
                    var r = e(t, n);
                    function o() {
                        return r;
                    }
                    return (o.dependsOnOwnProps = !1), o;
                };
            }),
            (t.getDependsOnOwnProps = u),
            (t.wrapMapToPropsFunc = function(e, t) {
                return function(t, n) {
                    n.displayName;
                    var r = function(e, t) {
                        return r.dependsOnOwnProps ? r.mapToProps(e, t) : r.mapToProps(e);
                    };
                    return (
                        (r.dependsOnOwnProps = !0),
                        (r.mapToProps = function(t, n) {
                            (r.mapToProps = e), (r.dependsOnOwnProps = u(e));
                            var o = r(t, n);
                            return (
                                'function' == typeof o &&
                                    ((r.mapToProps = o), (r.dependsOnOwnProps = u(o)), (o = r(t, n))),
                                o
                            );
                        }),
                        r
                    );
                };
            });
        var r,
            o = n(15);
        (r = o) && r.__esModule;
        function u(e) {
            return null !== e.dependsOnOwnProps && void 0 !== e.dependsOnOwnProps
                ? Boolean(e.dependsOnOwnProps)
                : 1 !== e.length;
        }
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if (0 === t.length)
                    return function(e) {
                        return e;
                    };
                if (1 === t.length) return t[0];
                return t.reduce(function(e, t) {
                    return function() {
                        return e(t.apply(void 0, arguments));
                    };
                });
            });
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function(e) {
                'undefined' != typeof console && 'function' == typeof console.error && console.error(e);
                try {
                    throw new Error(e);
                } catch (e) {}
            });
    },
    function(e, t, n) {
        'use strict';
        var r,
            o =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                    ? function(e) {
                          return typeof e;
                      }
                    : function(e) {
                          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                              ? 'symbol'
                              : typeof e;
                      };
        r = (function() {
            return this;
        })();
        try {
            r = r || Function('return this')() || (0, eval)('this');
        } catch (e) {
            'object' === ('undefined' == typeof window ? 'undefined' : o(window)) && (r = window);
        }
        e.exports = r;
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r,
            o = n(62);
        var u = ((r = o) && r.__esModule ? r : { default: r }).default.Symbol;
        t.default = u;
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.ActionTypes = void 0);
        var r =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                      return typeof e;
                  }
                : function(e) {
                      return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                  };
        t.default = function e(t, n, i) {
            var c;
            'function' == typeof n && void 0 === i && ((i = n), (n = void 0));
            if (void 0 !== i) {
                if ('function' != typeof i) throw new Error('Expected the enhancer to be a function.');
                return i(e)(t, n);
            }
            if ('function' != typeof t) throw new Error('Expected the reducer to be a function.');
            var f = t;
            var l = n;
            var s = [];
            var d = s;
            var p = !1;
            function v() {
                d === s && (d = s.slice());
            }
            function y() {
                return l;
            }
            function h(e) {
                if ('function' != typeof e) throw new Error('Expected listener to be a function.');
                var t = !0;
                return (
                    v(),
                    d.push(e),
                    function() {
                        if (t) {
                            (t = !1), v();
                            var n = d.indexOf(e);
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
                for (var t = (s = d), n = 0; n < t.length; n++) {
                    var r = t[n];
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
                    replaceReducer: function(e) {
                        if ('function' != typeof e) throw new Error('Expected the nextReducer to be a function.');
                        (f = e), b({ type: a.INIT });
                    }
                }),
                (c[u.default] = function() {
                    var e,
                        t = h;
                    return (
                        ((e = {
                            subscribe: function(e) {
                                if ('object' !== (void 0 === e ? 'undefined' : r(e)))
                                    throw new TypeError('Expected the observer to be an object.');
                                function n() {
                                    e.next && e.next(y());
                                }
                                n();
                                var o = t(n);
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
            u = i(n(55));
        function i(e) {
            return e && e.__esModule ? e : { default: e };
        }
        var a = (t.ActionTypes = { INIT: '@@redux/INIT' });
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                      return typeof e;
                  }
                : function(e) {
                      return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                  };
        t.default = function(e) {
            var t,
                n,
                f = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                v = f.getDisplayName,
                y =
                    void 0 === v
                        ? function(e) {
                              return 'ConnectAdvanced(' + e + ')';
                          }
                        : v,
                h = f.methodName,
                b = void 0 === h ? 'connectAdvanced' : h,
                m = f.renderCountProp,
                g = void 0 === m ? void 0 : m,
                _ = f.shouldHandleStateChanges,
                O = void 0 === _ || _,
                j = f.storeKey,
                S = void 0 === j ? 'store' : j,
                P = f.withRef,
                w = void 0 !== P && P,
                k = (function(e, t) {
                    var n = {};
                    for (var r in e) t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
                    return n;
                })(f, [
                    'getDisplayName',
                    'methodName',
                    'renderCountProp',
                    'shouldHandleStateChanges',
                    'storeKey',
                    'withRef'
                ]),
                E = S + 'Subscription',
                M = s++,
                x = (((t = {})[S] = c.storeShape), (t[E] = c.subscriptionShape), t),
                C = (((n = {})[E] = c.subscriptionShape), n);
            return function(t) {
                (0, u.default)(
                    'function' == typeof t,
                    'You must pass a component to the function returned by connect. Instead received ' +
                        JSON.stringify(t)
                );
                var n = t.displayName || t.name || 'Component',
                    c = y(n),
                    f = l({}, k, {
                        getDisplayName: y,
                        methodName: b,
                        renderCountProp: g,
                        shouldHandleStateChanges: O,
                        storeKey: S,
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
                            var i = (function(e, t) {
                                if (!e)
                                    throw new ReferenceError(
                                        "this hasn't been initialised - super() hasn't been called"
                                    );
                                return !t ||
                                    ('object' !== (void 0 === t ? 'undefined' : r(t)) && 'function' != typeof t)
                                    ? e
                                    : t;
                            })(this, n.call(this, e, t));
                            return (
                                (i.version = M),
                                (i.state = {}),
                                (i.renderCount = 0),
                                (i.store = e[S] || t[S]),
                                (i.propsMode = Boolean(e[S])),
                                (i.setWrappedInstance = i.setWrappedInstance.bind(i)),
                                (0, u.default)(
                                    i.store,
                                    'Could not find "' +
                                        S +
                                        '" in either the context or props of "' +
                                        c +
                                        '". Either wrap the root component in a <Provider>, or explicitly pass "' +
                                        S +
                                        '" as a prop to "' +
                                        c +
                                        '".'
                                ),
                                i.initSelector(),
                                i.initSubscription(),
                                i
                            );
                        }
                        return (
                            (function(e, t) {
                                if ('function' != typeof t && null !== t)
                                    throw new TypeError(
                                        'Super expression must either be null or a function, not ' +
                                            (void 0 === t ? 'undefined' : r(t))
                                    );
                                (e.prototype = Object.create(t && t.prototype, {
                                    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
                                })),
                                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                            })(o, n),
                            (o.prototype.getChildContext = function() {
                                var e,
                                    t = this.propsMode ? null : this.subscription;
                                return ((e = {})[E] = t || this.context[E]), e;
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
                                        'To access the wrapped instance, you need to specify { withRef: true } in the options argument of the ' +
                                            b +
                                            '() call.'
                                    ),
                                    this.wrappedInstance
                                );
                            }),
                            (o.prototype.setWrappedInstance = function(e) {
                                this.wrappedInstance = e;
                            }),
                            (o.prototype.initSelector = function() {
                                var t = e(this.store.dispatch, f);
                                (this.selector = (function(e, t) {
                                    var n = {
                                        run: function(r) {
                                            try {
                                                var o = e(t.getState(), r);
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
                                    var e = (this.propsMode ? this.props : this.context)[E];
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
                                var t = l({}, e);
                                return (
                                    w && (t.ref = this.setWrappedInstance),
                                    g && (t[g] = this.renderCount++),
                                    this.propsMode && this.subscription && (t[E] = this.subscription),
                                    t
                                );
                            }),
                            (o.prototype.render = function() {
                                var e = this.selector;
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
                    (s.contextTypes = x),
                    (s.propTypes = x),
                    (0, o.default)(s, t)
                );
            };
        };
        var o = f(n(70)),
            u = f(n(69)),
            i = n(1),
            a = f(n(68)),
            c = n(23);
        function f(e) {
            return e && e.__esModule ? e : { default: e };
        }
        var l =
            Object.assign ||
            function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            };
        var s = 0,
            d = {};
        function p() {}
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.storeShape = t.subscriptionShape = void 0);
        var r,
            o = n(2),
            u = (r = o) && r.__esModule ? r : { default: r };
        (t.subscriptionShape = u.default.shape({
            trySubscribe: u.default.func.isRequired,
            tryUnsubscribe: u.default.func.isRequired,
            notifyNestedSubs: u.default.func.isRequired,
            isSubscribed: u.default.func.isRequired
        })),
            (t.storeShape = u.default.shape({
                subscribe: u.default.func.isRequired,
                dispatch: u.default.func.isRequired,
                getState: u.default.func.isRequired
            }));
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r,
            o = n(74),
            u = (r = o) && r.__esModule ? r : { default: r };
        t.default = u.default;
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r,
            o = ((r = u(
                regeneratorRuntime.mark(function e() {
                    var t,
                        n,
                        r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
                    return regeneratorRuntime.wrap(
                        function(e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return (e.next = 2), fetch(i + '/' + 'topstories' + '.json', c);
                                    case 2:
                                        return (t = e.sent), (e.next = 5), t.json();
                                    case 5:
                                        return (n = e.sent), e.abrupt('return', n.slice(0, r));
                                    case 7:
                                    case 'end':
                                        return e.stop();
                                }
                        },
                        e,
                        this
                    );
                })
            )),
            function() {
                return r.apply(this, arguments);
            });
        function u(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    return (function r(o, u) {
                        try {
                            var i = t[o](u),
                                a = i.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!i.done)
                            return Promise.resolve(a).then(
                                function(e) {
                                    r('next', e);
                                },
                                function(e) {
                                    r('throw', e);
                                }
                            );
                        e(a);
                    })('next');
                });
            };
        }
        var i = 'https://hacker-news.firebaseio.com/v0',
            a = 20,
            c = { method: 'GET', headers: { Accept: 'application/json' } };
        function f(e) {
            return (function(e) {
                return fetch(i + '/item/' + e + '.json', c);
            })(e).then(function(e) {
                return e.json();
            });
        }
        t.default = u(
            regeneratorRuntime.mark(function e() {
                var t,
                    n,
                    r,
                    u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
                return regeneratorRuntime.wrap(
                    function(e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (e.next = 2), o(u);
                                case 2:
                                    return (
                                        (t = e.sent),
                                        (n = t.map(function(e) {
                                            return f(e);
                                        })).push(
                                            new Promise(function(e) {
                                                return setTimeout(e, 1500);
                                            })
                                        ),
                                        (e.next = 7),
                                        Promise.all(n)
                                    );
                                case 7:
                                    return (
                                        (r = e.sent),
                                        e.abrupt(
                                            'return',
                                            r.slice(0, r.length - 1).map(function(e) {
                                                return { title: e.title, url: e.url };
                                            })
                                        )
                                    );
                                case 9:
                                case 'end':
                                    return e.stop();
                            }
                    },
                    e,
                    void 0
                );
            })
        );
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r = n(25);
        Object.defineProperty(t, 'fetchTopStories', {
            enumerable: !0,
            get: function() {
                return ((e = r), e && e.__esModule ? e : { default: e }).default;
                var e;
            }
        });
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = f);
        var r = n(11),
            o = n(4),
            u = n(26),
            i = regeneratorRuntime.mark(c),
            a = regeneratorRuntime.mark(f);
        function c() {
            var e;
            return regeneratorRuntime.wrap(
                function(t) {
                    for (;;)
                        switch ((t.prev = t.next)) {
                            case 0:
                                return (t.next = 2), (0, r.call)(u.fetchTopStories);
                            case 2:
                                return (e = t.sent), (t.next = 5), (0, r.put)(o.loadTopStoriesAction.success(e));
                            case 5:
                            case 'end':
                                return t.stop();
                        }
                },
                i,
                this
            );
        }
        function f() {
            return regeneratorRuntime.wrap(
                function(e) {
                    for (;;)
                        switch ((e.prev = e.next)) {
                            case 0:
                                return (e.next = 2), (0, r.takeLatest)(o.LOAD_TOP_STORIES_START, c);
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
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function(e, t, n) {
                for (var r = arguments.length, l = Array(r > 3 ? r - 3 : 0), s = 3; s < r; s++) l[s - 3] = arguments[s];
                var d = void 0,
                    p = void 0,
                    v = { done: !1, value: (0, i.actionChannel)(t, c.buffers.sliding(1)) },
                    y = { done: !1, value: (0, i.call)(f.delay, e) },
                    h = function(e) {
                        return (d = e);
                    },
                    b = function(e) {
                        return (p = e);
                    };
                return (0, u.default)(
                    {
                        q1: function() {
                            return ['q2', v, b];
                        },
                        q2: function() {
                            return ['q3', { done: !1, value: (0, i.take)(p) }, h];
                        },
                        q3: function() {
                            return d === a.END
                                ? [o.qEnd]
                                : ['q4', ((e = d), { done: !1, value: i.fork.apply(void 0, [n].concat(l, [e])) })];
                            var e;
                        },
                        q4: function() {
                            return ['q2', y];
                        }
                    },
                    'q1',
                    'throttle(' + (0, o.safeName)(t) + ', ' + n.name + ')'
                );
            });
        var r,
            o = n(6),
            u = (r = o) && r.__esModule ? r : { default: r },
            i = n(3),
            a = n(5),
            c = n(10),
            f = n(0);
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function(e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), c = 2; c < n; c++) r[c - 2] = arguments[c];
                var f = { done: !1, value: (0, i.take)(e) },
                    l = function(e) {
                        return { done: !1, value: i.fork.apply(void 0, [t].concat(r, [e])) };
                    },
                    s = void 0,
                    d = void 0,
                    p = function(e) {
                        return (s = e);
                    },
                    v = function(e) {
                        return (d = e);
                    };
                return (0, u.default)(
                    {
                        q1: function() {
                            return ['q2', f, v];
                        },
                        q2: function() {
                            return d === a.END
                                ? [o.qEnd]
                                : s
                                  ? [
                                        'q3',
                                        (function(e) {
                                            return { done: !1, value: (0, i.cancel)(e) };
                                        })(s)
                                    ]
                                  : ['q1', l(d), p];
                        },
                        q3: function() {
                            return ['q1', l(d), p];
                        }
                    },
                    'q1',
                    'takeLatest(' + (0, o.safeName)(e) + ', ' + t.name + ')'
                );
            });
        var r,
            o = n(6),
            u = (r = o) && r.__esModule ? r : { default: r },
            i = n(3),
            a = n(5);
    },
    function(e, t, n) {
        'use strict';
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
            for (var e = void 0; !o && void 0 !== (e = r.shift()); ) u(e);
        }
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function(e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), c = 2; c < n; c++) r[c - 2] = arguments[c];
                var f = { done: !1, value: (0, i.take)(e) },
                    l = void 0,
                    s = function(e) {
                        return (l = e);
                    };
                return (0, u.default)(
                    {
                        q1: function() {
                            return ['q2', f, s];
                        },
                        q2: function() {
                            return l === a.END
                                ? [o.qEnd]
                                : ['q1', ((e = l), { done: !1, value: i.fork.apply(void 0, [t].concat(r, [e])) })];
                            var e;
                        }
                    },
                    'q1',
                    'takeEvery(' + (0, o.safeName)(e) + ', ' + t.name + ')'
                );
            });
        var r,
            o = n(6),
            u = (r = o) && r.__esModule ? r : { default: r },
            i = n(3),
            a = n(5);
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.throttleHelper = t.takeLatestHelper = t.takeEveryHelper = t.throttle = t.takeLatest = t.takeEvery = void 0);
        var r = a(n(31)),
            o = a(n(29)),
            u = a(n(28)),
            i = n(0);
        function a(e) {
            return e && e.__esModule ? e : { default: e };
        }
        var c = function(e) {
                return (
                    'import { ' +
                    e +
                    " } from 'redux-saga' has been deprecated in favor of import { " +
                    e +
                    " } from 'redux-saga/effects'.\nThe latter will not work with yield*, as helper effects are wrapped automatically for you in fork effect.\nTherefore yield " +
                    e +
                    ' will return task descriptor to your saga and execute next lines of code.'
                );
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
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = c);
        var r,
            o = n(11),
            u = n(27),
            i = (r = u) && r.__esModule ? r : { default: r };
        var a = regeneratorRuntime.mark(c);
        function c() {
            return regeneratorRuntime.wrap(
                function(e) {
                    for (;;)
                        switch ((e.prev = e.next)) {
                            case 0:
                                return (e.next = 2), (0, o.all)([(0, o.fork)(i.default)]);
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
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r,
            o = n(33),
            u = (r = o) && r.__esModule ? r : { default: r };
        t.default = u.default;
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r,
            o =
                Object.assign ||
                function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                },
            u = n(4),
            i = n(12);
        var a = (0, ((r = i) && r.__esModule ? r : { default: r }).default)();
        t.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            switch (t.type) {
                case u.LOAD_TOP_STORIES_START:
                    return o({}, e, { topStories: null });
                case u.LOAD_TOP_STORIES_SUCCESS:
                    return o({}, e, { topStories: t.topStories });
                default:
                    return e;
            }
        };
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r = n(14),
            o = i(n(2)),
            u = i(n(1));
        function i(e) {
            return e && e.__esModule ? e : { default: e };
        }
        function a() {
            var e = this.props,
                t = e.topStories,
                n = e.handleLoadingTopStories;
            return u.default.createElement(
                r.Box,
                null,
                u.default.createElement(r.Header, { title: "What's new?" }),
                u.default.createElement(
                    r.List,
                    null,
                    t &&
                        t.map(function(e, t) {
                            var n = e.title,
                                o = e.url;
                            return u.default.createElement(
                                r.ListItem,
                                { key: 'topStory' + t },
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
            handleLoadingTopStories: o.default.func
        }),
            (t.default = a);
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function(e) {
                return (e && e.topStories) || null;
            });
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r = (t.LOAD_TOP_STORIES_START = 'hacker-news/LOAD_TOP_STORIES_START'),
            o = (t.LOAD_TOP_STORIES_FAILURE = 'hacker-news/LOAD_TOP_STORIES_FAILURE'),
            u = (t.LOAD_TOP_STORIES_SUCCESS = 'hacker-news/LOAD_TOP_STORIES_SUCCESS');
        t.loadTopStoriesAction = {
            start: function() {
                return { type: r };
            },
            success: function(e) {
                return { type: u, topStories: e };
            },
            failure: function() {
                return { type: o };
            }
        };
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r = n(4);
        t.default = function(e) {
            var t = e.dispatch;
            return function() {
                return t(r.loadTopStoriesAction.start());
            };
        };
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r = n(39);
        Object.defineProperty(t, 'handleLoadingTopStories', {
            enumerable: !0,
            get: function() {
                return ((e = r), e && e.__esModule ? e : { default: e }).default;
                var e;
            }
        });
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r,
            o = n(14),
            u = n(1),
            i = (r = u) && r.__esModule ? r : { default: r };
        t.default = function() {
            return i.default.createElement(o.Box, null, i.default.createElement(o.Spinner, null));
        };
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r,
            o = n(41),
            u = (r = o) && r.__esModule ? r : { default: r };
        t.default = u.default;
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r = n(24);
        Object.defineProperty(t, 'HackerNews', {
            enumerable: !0,
            get: function() {
                return u(r).default;
            }
        });
        var o = n(42);
        function u(e) {
            return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, 'HackerNewsSpinner', {
            enumerable: !0,
            get: function() {
                return u(o).default;
            }
        });
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r = n(9),
            o = n(43);
        t.default = (0, r.branch)(function(e) {
            return null === e.topStories;
        }, (0, r.renderComponent)(o.HackerNewsSpinner));
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r = n(44);
        Object.defineProperty(t, 'enhanceWithSpinner', {
            enumerable: !0,
            get: function() {
                return ((e = r), e && e.__esModule ? e : { default: e }).default;
                var e;
            }
        });
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function(e, t, n, r) {
                i(e, 'mapStateToProps', r), i(t, 'mapDispatchToProps', r), i(n, 'mergeProps', r);
            });
        var r,
            o = n(8),
            u = (r = o) && r.__esModule ? r : { default: r };
        function i(e, t, n) {
            if (!e) throw new Error('Unexpected value for ' + t + ' in ' + n + '.');
            ('mapStateToProps' !== t && 'mapDispatchToProps' !== t) ||
                e.hasOwnProperty('dependsOnOwnProps') ||
                (0, u.default)(
                    'The selector for ' + t + ' of ' + n + ' did not specify a value for dependsOnOwnProps.'
                );
        }
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.impureFinalPropsSelectorFactory = u),
            (t.pureFinalPropsSelectorFactory = i),
            (t.default = function(e, t) {
                var n = t.initMapStateToProps,
                    r = t.initMapDispatchToProps,
                    o = t.initMergeProps,
                    a = (function(e, t) {
                        var n = {};
                        for (var r in e)
                            t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
                        return n;
                    })(t, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']),
                    c = n(e, a),
                    f = r(e, a),
                    l = o(e, a);
                0;
                return (a.pure ? i : u)(c, f, l, e, a);
            });
        var r,
            o = n(46);
        (r = o) && r.__esModule;
        function u(e, t, n, r) {
            return function(o, u) {
                return n(e(o, u), t(r, u), u);
            };
        }
        function i(e, t, n, r, o) {
            var u = o.areStatesEqual,
                i = o.areOwnPropsEqual,
                a = o.areStatePropsEqual,
                c = !1,
                f = void 0,
                l = void 0,
                s = void 0,
                d = void 0,
                p = void 0;
            function v(o, c) {
                var v,
                    y,
                    h = !i(c, l),
                    b = !u(o, f);
                return (
                    (f = o),
                    (l = c),
                    h && b
                        ? ((s = e(f, l)), t.dependsOnOwnProps && (d = t(r, l)), (p = n(s, d, l)))
                        : h
                          ? (e.dependsOnOwnProps && (s = e(f, l)),
                            t.dependsOnOwnProps && (d = t(r, l)),
                            (p = n(s, d, l)))
                          : b ? ((v = e(f, l)), (y = !a(v, s)), (s = v), y && (p = n(s, d, l)), p) : p
                );
            }
            return function(o, u) {
                return c ? v(o, u) : ((s = e((f = o), (l = u))), (d = t(r, l)), (p = n(s, d, l)), (c = !0), p);
            };
        }
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.defaultMergeProps = i),
            (t.wrapMergePropsFunc = a),
            (t.whenMergePropsIsFunction = c),
            (t.whenMergePropsIsOmitted = f);
        var r,
            o = n(15);
        (r = o) && r.__esModule;
        var u =
            Object.assign ||
            function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            };
        function i(e, t, n) {
            return u({}, n, e, t);
        }
        function a(e) {
            return function(t, n) {
                n.displayName;
                var r = n.pure,
                    o = n.areMergedPropsEqual,
                    u = !1,
                    i = void 0;
                return function(t, n, a) {
                    var c = e(t, n, a);
                    return u ? (r && o(c, i)) || (i = c) : ((u = !0), (i = c)), i;
                };
            };
        }
        function c(e) {
            return 'function' == typeof e ? a(e) : void 0;
        }
        function f(e) {
            return e
                ? void 0
                : function() {
                      return i;
                  };
        }
        t.default = [c, f];
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.whenMapStateToPropsIsFunction = o),
            (t.whenMapStateToPropsIsMissing = u);
        var r = n(16);
        function o(e) {
            return 'function' == typeof e ? (0, r.wrapMapToPropsFunc)(e, 'mapStateToProps') : void 0;
        }
        function u(e) {
            return e
                ? void 0
                : (0, r.wrapMapToPropsConstant)(function() {
                      return {};
                  });
        }
        t.default = [o, u];
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return function(e) {
                    return function(n, r, o) {
                        var a = e(n, r, o),
                            c = a.dispatch,
                            f = [],
                            l = {
                                getState: a.getState,
                                dispatch: function(e) {
                                    return c(e);
                                }
                            };
                        return (
                            (f = t.map(function(e) {
                                return e(l);
                            })),
                            (c = u.default.apply(void 0, f)(a.dispatch)),
                            i({}, a, { dispatch: c })
                        );
                    };
                };
            });
        var r,
            o = n(17),
            u = (r = o) && r.__esModule ? r : { default: r };
        var i =
            Object.assign ||
            function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            };
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                      return typeof e;
                  }
                : function(e) {
                      return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                  };
        function o(e, t) {
            return function() {
                return t(e.apply(void 0, arguments));
            };
        }
        t.default = function(e, t) {
            if ('function' == typeof e) return o(e, t);
            if ('object' !== (void 0 === e ? 'undefined' : r(e)) || null === e)
                throw new Error(
                    'bindActionCreators expected an object or a function, instead received ' +
                        (null === e ? 'null' : void 0 === e ? 'undefined' : r(e)) +
                        '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
                );
            for (var n = Object.keys(e), u = {}, i = 0; i < n.length; i++) {
                var a = n[i],
                    c = e[a];
                'function' == typeof c && (u[a] = o(c, t));
            }
            return u;
        };
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function(e) {
                for (var t = Object.keys(e), n = {}, o = 0; o < t.length; o++) {
                    var i = t[o];
                    0, 'function' == typeof e[i] && (n[i] = e[i]);
                }
                var a = Object.keys(n);
                0;
                var c = void 0;
                try {
                    !(function(e) {
                        Object.keys(e).forEach(function(t) {
                            var n = e[t],
                                o = n(void 0, { type: r.ActionTypes.INIT });
                            if (void 0 === o)
                                throw new Error(
                                    'Reducer "' +
                                        t +
                                        '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don\'t want to set a value for this reducer, you can use null instead of undefined.'
                                );
                            var u =
                                '@@redux/PROBE_UNKNOWN_ACTION_' +
                                Math.random()
                                    .toString(36)
                                    .substring(7)
                                    .split('')
                                    .join('.');
                            if (void 0 === n(void 0, { type: u }))
                                throw new Error(
                                    'Reducer "' +
                                        t +
                                        '" returned undefined when probed with a random type. Don\'t try to handle ' +
                                        r.ActionTypes.INIT +
                                        ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.'
                                );
                        });
                    })(n);
                } catch (e) {
                    c = e;
                }
                return function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments[1];
                    if (c) throw c;
                    for (var r = !1, o = {}, i = 0; i < a.length; i++) {
                        var f = a[i],
                            l = n[f],
                            s = e[f],
                            d = l(s, t);
                        if (void 0 === d) {
                            var p = u(f, t);
                            throw new Error(p);
                        }
                        (o[f] = d), (r = r || d !== s);
                    }
                    return r ? o : e;
                };
            });
        var r = n(21);
        o(n(7)), o(n(18));
        function o(e) {
            return e && e.__esModule ? e : { default: e };
        }
        function u(e, t) {
            var n = t && t.type;
            return (
                'Given action ' +
                ((n && '"' + n.toString() + '"') || 'an action') +
                ', reducer "' +
                e +
                '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
            );
        }
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function(e) {
                var t,
                    n = e.Symbol;
                'function' == typeof n
                    ? n.observable ? (t = n.observable) : ((t = n('observable')), (n.observable = t))
                    : (t = '@@observable');
                return t;
            });
    },
    function(e, t, n) {
        'use strict';
        e.exports = function(e) {
            return (
                e.webpackPolyfill ||
                    ((e.deprecate = function() {}),
                    (e.paths = []),
                    e.children || (e.children = []),
                    Object.defineProperty(e, 'loaded', {
                        enumerable: !0,
                        get: function() {
                            return e.l;
                        }
                    }),
                    Object.defineProperty(e, 'id', {
                        enumerable: !0,
                        get: function() {
                            return e.i;
                        }
                    }),
                    (e.webpackPolyfill = 1)),
                e
            );
        };
    },
    function(e, t, n) {
        'use strict';
        (function(e, r) {
            Object.defineProperty(t, '__esModule', { value: !0 });
            var o,
                u,
                i = n(53),
                a = (o = i) && o.__esModule ? o : { default: o };
            u = 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : void 0 !== e ? e : r;
            var c = (0, a.default)(u);
            t.default = c;
        }.call(this, n(19), n(54)(e)));
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                      return typeof e;
                  }
                : function(e) {
                      return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                  };
        t.default = function(e) {
            return null != e && 'object' == (void 0 === e ? 'undefined' : r(e));
        };
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function(e, t) {
                return function(n) {
                    return e(t(n));
                };
            });
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r,
            o = n(57);
        var u = (0, ((r = o) && r.__esModule ? r : { default: r }).default)(Object.getPrototypeOf, Object);
        t.default = u;
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r = Object.prototype.toString;
        t.default = function(e) {
            return r.call(e);
        };
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r,
            o = n(20),
            u = (r = o) && r.__esModule ? r : { default: r };
        var i = Object.prototype,
            a = i.hasOwnProperty,
            c = i.toString,
            f = u.default ? u.default.toStringTag : void 0;
        t.default = function(e) {
            var t = a.call(e, f),
                n = e[f];
            try {
                e[f] = void 0;
                var r = !0;
            } catch (e) {}
            var o = c.call(e);
            return r && (t ? (e[f] = n) : delete e[f]), o;
        };
    },
    function(e, t, n) {
        'use strict';
        (function(e) {
            Object.defineProperty(t, '__esModule', { value: !0 });
            var n =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                        ? function(e) {
                              return typeof e;
                          }
                        : function(e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          },
                r = 'object' == (void 0 === e ? 'undefined' : n(e)) && e && e.Object === Object && e;
            t.default = r;
        }.call(this, n(19)));
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r,
            o =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                    ? function(e) {
                          return typeof e;
                      }
                    : function(e) {
                          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                              ? 'symbol'
                              : typeof e;
                      },
            u = n(61),
            i = (r = u) && r.__esModule ? r : { default: r };
        var a =
                'object' == ('undefined' == typeof self ? 'undefined' : o(self)) &&
                self &&
                self.Object === Object &&
                self,
            c = i.default || a || Function('return this')();
        t.default = c;
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r = i(n(20)),
            o = i(n(60)),
            u = i(n(59));
        function i(e) {
            return e && e.__esModule ? e : { default: e };
        }
        var a = '[object Null]',
            c = '[object Undefined]',
            f = r.default ? r.default.toStringTag : void 0;
        t.default = function(e) {
            return null == e ? (void 0 === e ? c : a) : f && f in Object(e) ? (0, o.default)(e) : (0, u.default)(e);
        };
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.compose = t.applyMiddleware = t.bindActionCreators = t.combineReducers = t.createStore = void 0);
        var r = c(n(21)),
            o = c(n(52)),
            u = c(n(51)),
            i = c(n(50)),
            a = c(n(17));
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
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                      return typeof e;
                  }
                : function(e) {
                      return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                  };
        (t.whenMapDispatchToPropsIsFunction = i),
            (t.whenMapDispatchToPropsIsMissing = a),
            (t.whenMapDispatchToPropsIsObject = c);
        var o = n(64),
            u = n(16);
        function i(e) {
            return 'function' == typeof e ? (0, u.wrapMapToPropsFunc)(e, 'mapDispatchToProps') : void 0;
        }
        function a(e) {
            return e
                ? void 0
                : (0, u.wrapMapToPropsConstant)(function(e) {
                      return { dispatch: e };
                  });
        }
        function c(e) {
            return e && 'object' === (void 0 === e ? 'undefined' : r(e))
                ? (0, u.wrapMapToPropsConstant)(function(t) {
                      return (0, o.bindActionCreators)(e, t);
                  })
                : void 0;
        }
        t.default = [i, a, c];
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                      return typeof e;
                  }
                : function(e) {
                      return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                  };
        t.default = function(e, t) {
            if (u(e, t)) return !0;
            if (
                'object' !== (void 0 === e ? 'undefined' : r(e)) ||
                null === e ||
                'object' !== (void 0 === t ? 'undefined' : r(t)) ||
                null === t
            )
                return !1;
            var n = Object.keys(e),
                i = Object.keys(t);
            if (n.length !== i.length) return !1;
            for (var a = 0; a < n.length; a++) if (!o.call(t, n[a]) || !u(e[n[a]], t[n[a]])) return !1;
            return !0;
        };
        var o = Object.prototype.hasOwnProperty;
        function u(e, t) {
            return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t;
        }
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                      return typeof e;
                  }
                : function(e) {
                      return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                  };
        t.createConnect = v;
        var o = l(n(22)),
            u = l(n(66)),
            i = l(n(65)),
            a = l(n(49)),
            c = l(n(48)),
            f = l(n(47));
        function l(e) {
            return e && e.__esModule ? e : { default: e };
        }
        var s =
            Object.assign ||
            function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            };
        function d(e, t, n) {
            for (var o = t.length - 1; o >= 0; o--) {
                var u = t[o](e);
                if (u) return u;
            }
            return function(t, o) {
                throw new Error(
                    'Invalid value of type ' +
                        (void 0 === e ? 'undefined' : r(e)) +
                        ' for ' +
                        n +
                        ' argument when connecting component ' +
                        o.wrappedComponentName +
                        '.'
                );
            };
        }
        function p(e, t) {
            return e === t;
        }
        function v() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
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
                var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    i = o.pure,
                    a = void 0 === i || i,
                    c = o.areStatesEqual,
                    f = void 0 === c ? p : c,
                    v = o.areOwnPropsEqual,
                    h = void 0 === v ? u.default : v,
                    m = o.areStatePropsEqual,
                    _ = void 0 === m ? u.default : m,
                    O = o.areMergedPropsEqual,
                    j = void 0 === O ? u.default : O,
                    S = (function(e, t) {
                        var n = {};
                        for (var r in e)
                            t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
                        return n;
                    })(o, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']),
                    P = d(e, l, 'mapStateToProps'),
                    w = d(t, y, 'mapDispatchToProps'),
                    k = d(r, b, 'mergeProps');
                return n(
                    g,
                    s(
                        {
                            methodName: 'connect',
                            getDisplayName: function(e) {
                                return 'Connect(' + e + ')';
                            },
                            shouldHandleStateChanges: Boolean(e),
                            initMapStateToProps: P,
                            initMapDispatchToProps: w,
                            initMergeProps: k,
                            pure: a,
                            areStatesEqual: f,
                            areOwnPropsEqual: h,
                            areStatePropsEqual: _,
                            areMergedPropsEqual: j
                        },
                        S
                    )
                );
            };
        }
        t.default = v();
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r = null,
            o = { notify: function() {} };
        var u = (function() {
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
                    var e, t;
                    this.unsubscribe ||
                        ((this.unsubscribe = this.parentSub
                            ? this.parentSub.addNestedSub(this.onStateChange)
                            : this.store.subscribe(this.onStateChange)),
                        (this.listeners = ((e = []),
                        (t = []),
                        {
                            clear: function() {
                                (t = r), (e = r);
                            },
                            notify: function() {
                                for (var n = (e = t), r = 0; r < n.length; r++) n[r]();
                            },
                            get: function() {
                                return t;
                            },
                            subscribe: function(n) {
                                var o = !0;
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
                        })));
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
        'use strict';
        e.exports = function(e, t, n, r, o, u, i, a) {
            if (!e) {
                var c;
                if (void 0 === t)
                    c = new Error(
                        'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
                    );
                else {
                    var f = [n, r, o, u, i, a],
                        l = 0;
                    (c = new Error(
                        t.replace(/%s/g, function() {
                            return f[l++];
                        })
                    )).name =
                        'Invariant Violation';
                }
                throw ((c.framesToPop = 1), c);
            }
        };
    },
    function(e, t, n) {
        'use strict';
        var r = {
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
            if ('string' != typeof n) {
                if (l) {
                    var d = f(n);
                    d && d !== l && e(t, d, s);
                }
                var p = i(n);
                a && (p = p.concat(a(n)));
                for (var v = 0; v < p.length; ++v) {
                    var y = p[v];
                    if (!(r[y] || o[y] || (s && s[y]))) {
                        var h = c(n, y);
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
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                      return typeof e;
                  }
                : function(e) {
                      return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                  };
        t.createProvider = c;
        var o = n(1),
            u = a(n(2)),
            i = n(23);
        a(n(8));
        function a(e) {
            return e && e.__esModule ? e : { default: e };
        }
        function c() {
            var e,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'store',
                n = arguments[1] || t + 'Subscription',
                a = (function(e) {
                    function u(n, o) {
                        !(function(e, t) {
                            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                        })(this, u);
                        var i = (function(e, t) {
                            if (!e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || ('object' !== (void 0 === t ? 'undefined' : r(t)) && 'function' != typeof t)
                                ? e
                                : t;
                        })(this, e.call(this, n, o));
                        return (i[t] = n.store), i;
                    }
                    return (
                        (function(e, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Super expression must either be null or a function, not ' +
                                        (void 0 === t ? 'undefined' : r(t))
                                );
                            (e.prototype = Object.create(t && t.prototype, {
                                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
                            })),
                                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                        })(u, e),
                        (u.prototype.getChildContext = function() {
                            var e;
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
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.connect = t.connectAdvanced = t.createProvider = t.Provider = void 0);
        var r = n(71),
            o = a(r),
            u = a(n(22)),
            i = a(n(67));
        function a(e) {
            return e && e.__esModule ? e : { default: e };
        }
        (t.Provider = o.default),
            (t.createProvider = r.createProvider),
            (t.connectAdvanced = u.default),
            (t.connect = i.default);
    },
    function(e, t, n) {
        'use strict';
        var r =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                      return typeof e;
                  }
                : function(e) {
                      return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                  };
        e.exports = (function(e) {
            var t = {};
            function n(r) {
                if (t[r]) return t[r].exports;
                var o = (t[r] = { i: r, l: !1, exports: {} });
                return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
            }
            return (
                (n.m = e),
                (n.c = t),
                (n.d = function(e, t, r) {
                    n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r });
                }),
                (n.r = function(e) {
                    Object.defineProperty(e, '__esModule', { value: !0 });
                }),
                (n.n = function(e) {
                    var t =
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
                n((n.s = 11))
            );
        })([
            function(e, t) {
                e.exports = n(9);
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var o =
                    'function' == typeof Symbol && 'symbol' == r(Symbol.iterator)
                        ? function(e) {
                              return void 0 === e ? 'undefined' : r(e);
                          }
                        : function(e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : void 0 === e ? 'undefined' : r(e);
                          };
                (t.check = function(e, t, n) {
                    if (!t(e)) throw (_('error', 'uncaught at check', n), new Error(n));
                }),
                    (t.hasOwn = v),
                    (t.remove = function(e, t) {
                        var n = e.indexOf(t);
                        n >= 0 && e.splice(n, 1);
                    }),
                    (t.deferred = h),
                    (t.arrayOfDeffered = function(e) {
                        for (var t = [], n = 0; n < e; n++) t.push(h());
                        return t;
                    }),
                    (t.delay = function(e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            n = void 0,
                            r = new Promise(function(r) {
                                n = setTimeout(function() {
                                    return r(t);
                                }, e);
                            });
                        return (
                            (r[l] = function() {
                                return clearTimeout(n);
                            }),
                            r
                        );
                    }),
                    (t.createMockTask = function() {
                        var e,
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
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
                            r = arguments[3],
                            o = { name: n, next: e, throw: t, return: g };
                        return (
                            r && (o[f] = !0),
                            'undefined' != typeof Symbol &&
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
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                        },
                    i =
                        'function' == typeof Symbol && 'symbol' === o(Symbol.iterator)
                            ? function(e) {
                                  return void 0 === e ? 'undefined' : o(e);
                              }
                            : function(e) {
                                  return e &&
                                      'function' == typeof Symbol &&
                                      e.constructor === Symbol &&
                                      e !== Symbol.prototype
                                      ? 'symbol'
                                      : void 0 === e ? 'undefined' : o(e);
                              },
                    a = (t.sym = function(e) {
                        return '@@redux-saga/' + e;
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
                var p = Object.prototype.hasOwnProperty;
                function v(e, t) {
                    return y.notUndef(e) && p.call(e, t);
                }
                var y = (t.is = {
                    undef: function(e) {
                        return null === e || void 0 === e;
                    },
                    notUndef: function(e) {
                        return null !== e && void 0 !== e;
                    },
                    func: function(e) {
                        return 'function' == typeof e;
                    },
                    number: function(e) {
                        return 'number' == typeof e;
                    },
                    string: function(e) {
                        return 'string' == typeof e;
                    },
                    array: Array.isArray,
                    object: function(e) {
                        return e && !y.array(e) && 'object' === (void 0 === e ? 'undefined' : i(e));
                    },
                    promise: function(e) {
                        return e && y.func(e.then);
                    },
                    iterator: function(e) {
                        return e && y.func(e.next) && y.func(e.throw);
                    },
                    iterable: function(e) {
                        return e && y.func(Symbol) ? y.func(e[Symbol.iterator]) : y.array(e);
                    },
                    task: function(e) {
                        return e && e[c];
                    },
                    observable: function(e) {
                        return e && y.func(e.subscribe);
                    },
                    buffer: function(e) {
                        return e && y.func(e.isEmpty) && y.func(e.take) && y.func(e.put);
                    },
                    pattern: function(e) {
                        return (
                            e &&
                            (y.string(e) || 'symbol' === (void 0 === e ? 'undefined' : i(e)) || y.func(e) || y.array(e))
                        );
                    },
                    channel: function(e) {
                        return e && y.func(e.take) && y.func(e.close);
                    },
                    helper: function(e) {
                        return e && e[f];
                    },
                    stringableFunc: function(e) {
                        return y.func(e) && v(e, 'toString');
                    }
                });
                function h() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = u({}, e),
                        n = new Promise(function(e, n) {
                            (t.resolve = e), (t.reject = n);
                        });
                    return (t.promise = n), t;
                }
                function b() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return function() {
                        return ++e;
                    };
                }
                (t.object = {
                    assign: function(e, t) {
                        for (var n in t) v(t, n) && (e[n] = t[n]);
                    }
                }),
                    (t.array = {
                        from: function(e) {
                            var t = Array(e.length);
                            for (var n in e) v(e, n) && (t[n] = e[n]);
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
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '';
                    'undefined' == typeof window
                        ? console.log('redux-saga ' + e + ': ' + t + '\n' + ((n && n.stack) || n))
                        : console[e](t, n);
                }
                (t.updateIncentive = function(e, t) {
                    return e + ' has been deprecated in favor of ' + t + ', please update your code';
                }),
                    (t.internalErr = function(e) {
                        return new Error(
                            "\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: " +
                                e +
                                '\n'
                        );
                    }),
                    (t.createSetContextWarning = function(e, t) {
                        return (e ? e + '.' : '') + 'setContext(props): argument ' + t + ' is not a plain object';
                    }),
                    (t.wrapSagaDispatch = function(e) {
                        return function(t) {
                            return e(Object.defineProperty(t, s, { value: !0 }));
                        };
                    }),
                    (t.cloneableGenerator = function e(t) {
                        return function() {
                            for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                            var u = [],
                                i = t.apply(void 0, r);
                            return {
                                next: function(e) {
                                    return u.push(e), i.next(e);
                                },
                                clone: function() {
                                    var n = e(t).apply(void 0, r);
                                    return (
                                        u.forEach(function(e) {
                                            return n.next(e);
                                        }),
                                        n
                                    );
                                },
                                return: function(e) {
                                    return i.return(e);
                                },
                                throw: function(e) {
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
                    (t.all = k),
                    (t.race = function(e) {
                        return j(f, e);
                    }),
                    (t.call = function(e) {
                        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                            n[r - 1] = arguments[r];
                        return j(l, E('call', e, n));
                    }),
                    (t.apply = function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                        return j(l, E('apply', { context: e, fn: t }, n));
                    }),
                    (t.cps = function(e) {
                        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                            n[r - 1] = arguments[r];
                        return j(s, E('cps', e, n));
                    }),
                    (t.fork = M),
                    (t.spawn = function(e) {
                        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                            n[r - 1] = arguments[r];
                        return S(M.apply(void 0, [e].concat(n)));
                    }),
                    (t.join = function e() {
                        for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                        if (n.length > 1)
                            return k(
                                n.map(function(t) {
                                    return e(t);
                                })
                            );
                        var u = n[0];
                        return (
                            (0, r.check)(u, r.is.notUndef, 'join(task): argument task is undefined'),
                            (0, r.check)(
                                u,
                                r.is.task,
                                'join(task): argument ' + u + ' is not a valid Task object ' + O
                            ),
                            j(p, u)
                        );
                    }),
                    (t.cancel = function e() {
                        for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                        if (n.length > 1)
                            return k(
                                n.map(function(t) {
                                    return e(t);
                                })
                            );
                        var u = n[0];
                        return (
                            1 === n.length &&
                                ((0, r.check)(u, r.is.notUndef, 'cancel(task): argument task is undefined'),
                                (0, r.check)(
                                    u,
                                    r.is.task,
                                    'cancel(task): argument ' + u + ' is not a valid Task object ' + O
                                )),
                            j(v, u || r.SELF_CANCELLATION)
                        );
                    }),
                    (t.select = function(e) {
                        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
                            n[o - 1] = arguments[o];
                        return (
                            0 === arguments.length
                                ? (e = r.ident)
                                : ((0, r.check)(
                                      e,
                                      r.is.notUndef,
                                      'select(selector,[...]): argument selector is undefined'
                                  ),
                                  (0, r.check)(
                                      e,
                                      r.is.func,
                                      'select(selector,[...]): argument ' + e + ' is not a function'
                                  )),
                            j(y, { selector: e, args: n })
                        );
                    }),
                    (t.actionChannel = function(e, t) {
                        return (
                            (0, r.check)(e, r.is.notUndef, 'actionChannel(pattern,...): argument pattern is undefined'),
                            arguments.length > 1 &&
                                ((0, r.check)(
                                    t,
                                    r.is.notUndef,
                                    'actionChannel(pattern, buffer): argument buffer is undefined'
                                ),
                                (0, r.check)(
                                    t,
                                    r.is.buffer,
                                    'actionChannel(pattern, buffer): argument ' + t + ' is not a valid buffer'
                                )),
                            j(h, { pattern: e, buffer: t })
                        );
                    }),
                    (t.cancelled = function() {
                        return j(b, {});
                    }),
                    (t.flush = function(e) {
                        return (
                            (0, r.check)(e, r.is.channel, 'flush(channel): argument ' + e + ' is not valid channel'),
                            j(m, e)
                        );
                    }),
                    (t.getContext = function(e) {
                        return (
                            (0, r.check)(e, r.is.string, 'getContext(prop): argument ' + e + ' is not a string'),
                            j(g, e)
                        );
                    }),
                    (t.setContext = function(e) {
                        return (0, r.check)(e, r.is.object, (0, r.createSetContextWarning)(null, e)), j(_, e);
                    }),
                    (t.takeEvery = function(e, t) {
                        for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), u = 2; u < n; u++)
                            r[u - 2] = arguments[u];
                        return M.apply(void 0, [o.takeEveryHelper, e, t].concat(r));
                    }),
                    (t.takeLatest = function(e, t) {
                        for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), u = 2; u < n; u++)
                            r[u - 2] = arguments[u];
                        return M.apply(void 0, [o.takeLatestHelper, e, t].concat(r));
                    }),
                    (t.throttle = function(e, t, n) {
                        for (var r = arguments.length, u = Array(r > 3 ? r - 3 : 0), i = 3; i < r; i++)
                            u[i - 3] = arguments[i];
                        return M.apply(void 0, [o.throttleHelper, e, t, n].concat(u));
                    });
                var r = n(1),
                    o = n(23),
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
                    j = function(e, t) {
                        var n;
                        return ((n = {})[u] = !0), (n[e] = t), n;
                    },
                    S = (t.detach = function(e) {
                        return (
                            (0, r.check)(C.fork(e), r.is.object, 'detach(eff): argument must be a fork effect'),
                            (e[d].detached = !0),
                            e
                        );
                    });
                function P() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '*';
                    if (
                        (arguments.length &&
                            (0, r.check)(
                                arguments[0],
                                r.is.notUndef,
                                'take(patternOrChannel): patternOrChannel is undefined'
                            ),
                        r.is.pattern(e))
                    )
                        return j(i, { pattern: e });
                    if (r.is.channel(e)) return j(i, { channel: e });
                    throw new Error(
                        'take(patternOrChannel): argument ' + String(e) + ' is not valid channel or a valid pattern'
                    );
                }
                function w(e, t) {
                    return (
                        arguments.length > 1
                            ? ((0, r.check)(e, r.is.notUndef, 'put(channel, action): argument channel is undefined'),
                              (0, r.check)(
                                  e,
                                  r.is.channel,
                                  'put(channel, action): argument ' + e + ' is not a valid channel'
                              ),
                              (0, r.check)(t, r.is.notUndef, 'put(channel, action): argument action is undefined'))
                            : ((0, r.check)(e, r.is.notUndef, 'put(action): argument action is undefined'),
                              (t = e),
                              (e = null)),
                        j(a, { channel: e, action: t })
                    );
                }
                function k(e) {
                    return j(c, e);
                }
                function E(e, t, n) {
                    (0, r.check)(t, r.is.notUndef, e + ': argument fn is undefined');
                    var o = null;
                    if (r.is.array(t)) {
                        var u = t;
                        (o = u[0]), (t = u[1]);
                    } else if (t.fn) {
                        var i = t;
                        (o = i.context), (t = i.fn);
                    }
                    return (
                        o && r.is.string(t) && r.is.func(o[t]) && (t = o[t]),
                        (0, r.check)(t, r.is.func, e + ': argument ' + t + ' is not a function'),
                        { context: o, fn: t, args: n }
                    );
                }
                function M(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                        n[r - 1] = arguments[r];
                    return j(d, E('fork', e, n));
                }
                (P.maybe = function() {
                    var e = P.apply(void 0, arguments);
                    return (e[i].maybe = !0), e;
                }),
                    (t.takem = (0, r.deprecate)(P.maybe, (0, r.updateIncentive)('takem', 'take.maybe'))),
                    (w.resolve = function() {
                        var e = w.apply(void 0, arguments);
                        return (e[a].resolve = !0), e;
                    }),
                    (w.sync = (0, r.deprecate)(w.resolve, (0, r.updateIncentive)('put.sync', 'put.resolve')));
                var x = function(e) {
                        return function(t) {
                            return t && t[u] && t[e];
                        };
                    },
                    C = (t.asEffect = {
                        take: x(i),
                        put: x(a),
                        all: x(c),
                        race: x(f),
                        call: x(l),
                        cps: x(s),
                        fork: x(d),
                        join: x(p),
                        cancel: x(v),
                        select: x(y),
                        actionChannel: x(h),
                        cancelled: x(b),
                        flush: x(m),
                        getContext: x(g),
                        setContext: x(_)
                    });
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.UNDEFINED_INPUT_ERROR = t.INVALID_BUFFER = t.isEnd = t.END = void 0),
                    (t.emitter = function() {
                        var e = [];
                        return {
                            subscribe: function(t) {
                                return (
                                    e.push(t),
                                    function() {
                                        return (0, r.remove)(e, t);
                                    }
                                );
                            },
                            emit: function(t) {
                                for (var n = e.slice(), r = 0, o = n.length; r < o; r++) n[r](t);
                            }
                        };
                    }),
                    (t.channel = s),
                    (t.eventChannel = d),
                    (t.stdChannel = function(e) {
                        var t = d(function(t) {
                            return e(function(e) {
                                e[r.SAGA_ACTION]
                                    ? t(e)
                                    : (0, u.asap)(function() {
                                          return t(e);
                                      });
                            });
                        });
                        return i({}, t, {
                            take: function(e, n) {
                                arguments.length > 1 &&
                                    ((0, r.check)(n, r.is.func, "channel.take's matcher argument must be a function"),
                                    (e[r.MATCH] = n)),
                                    t.take(e);
                            }
                        });
                    });
                var r = n(1),
                    o = n(8),
                    u = n(21),
                    i =
                        Object.assign ||
                        function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                        },
                    a = (t.END = { type: '@@redux-saga/CHANNEL_END' }),
                    c = (t.isEnd = function(e) {
                        return e && '@@redux-saga/CHANNEL_END' === e.type;
                    }),
                    f = (t.INVALID_BUFFER = 'invalid buffer passed to channel factory function'),
                    l = (t.UNDEFINED_INPUT_ERROR = 'Saga was provided with an undefined action');
                function s() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.buffers.fixed(),
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
                            take: function(o) {
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
                            put: function(o) {
                                if ((u(), (0, r.check)(o, r.is.notUndef, l), !t)) {
                                    if (!n.length) return e.put(o);
                                    for (var i = 0; i < n.length; i++) {
                                        var a = n[i];
                                        if (!a[r.MATCH] || a[r.MATCH](o)) return n.splice(i, 1), a(o);
                                    }
                                }
                            },
                            flush: function(n) {
                                u(),
                                    (0, r.check)(n, r.is.func, "channel.flush' callback must be a function"),
                                    t && e.isEmpty() ? n(a) : n(e.flush());
                            },
                            close: function() {
                                if ((u(), !t && ((t = !0), n.length))) {
                                    var e = n;
                                    n = [];
                                    for (var r = 0, o = e.length; r < o; r++) e[r](a);
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
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.buffers.none(),
                        n = arguments[2];
                    arguments.length > 2 && (0, r.check)(n, r.is.func, 'Invalid match function passed to eventChannel');
                    var u = s(t),
                        i = function() {
                            u.__closed__ || (a && a(), u.close());
                        },
                        a = e(function(e) {
                            c(e) ? i() : (n && !n(e)) || u.put(e);
                        });
                    if ((u.__closed__ && a(), !r.is.func(a)))
                        throw new Error('in eventChannel: subscribe should return a function to unsubscribe');
                    return { take: u.take, flush: u.flush, close: i };
                }
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.qEnd = void 0),
                    (t.safeName = function(e) {
                        return r.is.channel(e)
                            ? 'channel'
                            : Array.isArray(e)
                              ? String(
                                    e.map(function(e) {
                                        return String(e);
                                    })
                                )
                              : String(e);
                    }),
                    (t.default = function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'iterator',
                            i = void 0,
                            a = t;
                        function c(t, n) {
                            if (a === u) return o;
                            if (n) throw ((a = u), n);
                            i && i(t);
                            var r = e[a](),
                                c = r[0],
                                f = r[1],
                                l = r[2];
                            return (i = l), (a = c) === u ? o : f;
                        }
                        return (0, r.makeIterator)(
                            c,
                            function(e) {
                                return c(null, e);
                            },
                            n,
                            !0
                        );
                    });
                var r = n(1),
                    o = { done: !0, value: void 0 },
                    u = (t.qEnd = {});
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var r,
                    o = (r = n(9)) && r.__esModule ? r : { default: r },
                    u = new Map();
                t.default = function(e) {
                    if (!e)
                        throw new Error(
                            'Tried to make undefined selector work with global state – please make sure your selector module is exported correctly'
                        );
                    if (u.has(e)) return u.get(e);
                    if (e.requiresGlobalState) return e;
                    var t = function(t) {
                        if (!e.hasOwnProperty('globalStateContext'))
                            throw new Error(
                                'This selector was not registered for use with global state: \n\n' +
                                    e +
                                    ' \n\nDid you forget to call the "registerSelectorForUseWithGlobalState" with this reducer?\n'
                            );
                        var n = e.globalStateContext.path;
                        return (0, o.default)(n, e)(t);
                    };
                    return (t.requiresGlobalState = !0), u.set(e, t), t;
                };
            },
            function(e, t) {
                e.exports = n(2);
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var r,
                    o = n(0),
                    u = (r = n(18)) && r.__esModule ? r : { default: r };
                t.default = function(e) {
                    return (0, o.mapProps)(function(t) {
                        return (0, u.default)(t, e);
                    });
                };
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.buffers = t.BUFFER_OVERFLOW = void 0);
                var r = n(1),
                    o = (t.BUFFER_OVERFLOW = "Channel's Buffer overflow!"),
                    u = 1,
                    i = 3,
                    a = 4,
                    c = { isEmpty: r.kTrue, put: r.noop, take: r.noop };
                function f() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
                        t = arguments[1],
                        n = new Array(e),
                        r = 0,
                        c = 0,
                        f = 0,
                        l = function(t) {
                            (n[c] = t), (c = (c + 1) % e), r++;
                        },
                        s = function() {
                            if (0 != r) {
                                var t = n[f];
                                return (n[f] = null), r--, (f = (f + 1) % e), t;
                            }
                        },
                        d = function() {
                            for (var e = []; r; ) e.push(s());
                            return e;
                        };
                    return {
                        isEmpty: function() {
                            return 0 == r;
                        },
                        put: function(s) {
                            if (r < e) l(s);
                            else {
                                var p = void 0;
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
                    none: function() {
                        return c;
                    },
                    fixed: function(e) {
                        return f(e, u);
                    },
                    dropping: function(e) {
                        return f(e, 2);
                    },
                    sliding: function(e) {
                        return f(e, i);
                    },
                    expanding: function(e) {
                        return f(e, a);
                    }
                };
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.default = function(e, t) {
                        if (!e || !e.length) return t;
                        var n = e.split('.');
                        return function(r) {
                            var o = r;
                            return (
                                n.forEach(function(t) {
                                    if (!o.hasOwnProperty(t))
                                        throw Error(
                                            'Invalid state path provided: ' +
                                                e +
                                                ", got stuck with '" +
                                                t +
                                                "' on " +
                                                JSON.stringify(o) +
                                                ' with ' +
                                                JSON.stringify(r) +
                                                '.'
                                        );
                                    o = o[t];
                                }),
                                t(o)
                            );
                        };
                    });
            },
            function(e, t, n) {
                var o,
                    u =
                        'function' == typeof Symbol && 'symbol' == r(Symbol.iterator)
                            ? function(e) {
                                  return void 0 === e ? 'undefined' : r(e);
                              }
                            : function(e) {
                                  return e &&
                                      'function' == typeof Symbol &&
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
                    'object' === ('undefined' == typeof window ? 'undefined' : u(window)) && (o = window);
                }
                e.exports = o;
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var r = n(35);
                Object.defineProperty(t, 'bootstrap', {
                    enumerable: !0,
                    get: function() {
                        return p(r).default;
                    }
                });
                var o = n(34);
                Object.defineProperty(t, 'callHandlerOnResize', {
                    enumerable: !0,
                    get: function() {
                        return p(o).default;
                    }
                });
                var u = n(32);
                Object.defineProperty(t, 'connectSelectors', {
                    enumerable: !0,
                    get: function() {
                        return p(u).default;
                    }
                });
                var i = n(7);
                Object.defineProperty(t, 'omitProps', {
                    enumerable: !0,
                    get: function() {
                        return p(i).default;
                    }
                });
                var a = n(17);
                Object.defineProperty(t, 'onLocationChanged', {
                    enumerable: !0,
                    get: function() {
                        return p(a).default;
                    }
                });
                var c = n(16);
                Object.defineProperty(t, 'provideContext', {
                    enumerable: !0,
                    get: function() {
                        return p(c).default;
                    }
                });
                var f = n(15);
                Object.defineProperty(t, 'subscribeToContext', {
                    enumerable: !0,
                    get: function() {
                        return p(f).default;
                    }
                });
                var l = n(14);
                Object.defineProperty(t, 'withRefs', {
                    enumerable: !0,
                    get: function() {
                        return p(l).default;
                    }
                });
                var s = n(13);
                Object.defineProperty(t, 'withUpdatableState', {
                    enumerable: !0,
                    get: function() {
                        return p(s).default;
                    }
                });
                var d = n(12);
                function p(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                Object.defineProperty(t, 'withWindowSize', {
                    enumerable: !0,
                    get: function() {
                        return p(d).default;
                    }
                });
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var r = n(0),
                    o = n(11);
                t.default = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { debounce: 20 };
                    return (0, r.compose)(
                        (0, r.withState)('windowSize', 'setWindowSize', { width: 0, height: 0 }),
                        (0, o.callHandlerOnResize)('setWindowSize', e),
                        (0, o.omitProps)(['setWindowSize'])
                    );
                };
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var r =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    };
                t.default = function(e, t, n, u) {
                    return (0, o.compose)(
                        (0, o.withState)(e, t, u),
                        (0, o.withPropsOnChange)([e], function(o) {
                            var u = o[e],
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
                            })({}, n, function(e, t) {
                                return i(r({}, u, e), t);
                            });
                        })
                    );
                };
                var o = n(0);
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var r = n(0);
                t.default = function() {
                    var e = {},
                        t = function(t) {
                            return function(n) {
                                return (e[t] = n);
                            };
                        };
                    return (0, r.withPropsOnChange)([], function() {
                        return { refs: e, setRef: t };
                    });
                };
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var r =
                        Object.assign ||
                        function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                        },
                    o = a(n(6)),
                    u = n(0),
                    i = a(n(7));
                function a(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                t.default = function(e, t) {
                    return (0, u.compose)(
                        (0, u.getContext)(
                            ((n = {}),
                            (a = e),
                            (c = o.default.shape({ subscribe: o.default.func, data: o.default.shape(t) })),
                            a in n
                                ? Object.defineProperty(n, a, {
                                      value: c,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (n[a] = c),
                            n)
                        ),
                        (0, u.lifecycle)({
                            componentWillMount: function() {
                                var t = this,
                                    n = this.props[e];
                                this.unsubscribeFromSlidableContext = n.subscribe(function() {
                                    return t.forceUpdate();
                                });
                            },
                            componentWillUnmount: function() {
                                this.unsubscribeFromSlidableContext();
                            }
                        }),
                        (0, u.withPropsOnChange)([e], function(t) {
                            return r({}, t[e].data);
                        }),
                        (0, i.default)([e])
                    );
                    var n, a, c;
                };
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.default = function(e, t, n) {
                        return (0, o.compose)(
                            (0, o.withPropsOnChange)([], function() {
                                var e = new Set();
                                return {
                                    subscriptions: e,
                                    subscribe: function(t) {
                                        return (
                                            e.add(t),
                                            function() {
                                                e.delete(t);
                                            }
                                        );
                                    }
                                };
                            }),
                            (0, o.withContext)(
                                i({}, e, u.default.shape({ subscribe: u.default.func, data: u.default.shape(t) })),
                                function(t) {
                                    var r = n(t),
                                        o = t.subscribe;
                                    return i({}, e, { subscribe: o, data: r });
                                }
                            ),
                            (0, o.withPropsOnChange)(
                                function(e, t) {
                                    var r = n(e),
                                        u = n(t);
                                    return !(0, o.shallowEqual)(r, u);
                                },
                                function(e) {
                                    e.subscriptions.forEach(function(e) {
                                        return e();
                                    });
                                }
                            )
                        );
                    });
                var r,
                    o = n(0),
                    u = (r = n(6)) && r.__esModule ? r : { default: r };
                function i(e, t, n) {
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
                var r = n(0);
                t.default = function(e) {
                    return (0, r.lifecycle)({
                        componentWillReceiveProps: function(t) {
                            var n = this.props.location,
                                r = t.location;
                            (!n || '' + r.pathname + r.search != '' + n.pathname + n.search) && e(t);
                        }
                    });
                };
            },
            function(e, t, n) {
                (function(t) {
                    var n =
                            'function' == typeof Symbol && 'symbol' == r(Symbol.iterator)
                                ? function(e) {
                                      return void 0 === e ? 'undefined' : r(e);
                                  }
                                : function(e) {
                                      return e &&
                                          'function' == typeof Symbol &&
                                          e.constructor === Symbol &&
                                          e !== Symbol.prototype
                                          ? 'symbol'
                                          : void 0 === e ? 'undefined' : r(e);
                                  },
                        o = '__lodash_hash_undefined__',
                        u = 1 / 0,
                        i = 9007199254740991,
                        a = '[object Arguments]',
                        c = '[object Function]',
                        f = '[object GeneratorFunction]',
                        l = '[object Symbol]',
                        s = /^\[object .+?Constructor\]$/,
                        d = /^(?:0|[1-9]\d*)$/,
                        p = 'object' == (void 0 === t ? 'undefined' : n(t)) && t && t.Object === Object && t,
                        v =
                            'object' == ('undefined' == typeof self ? 'undefined' : n(self)) &&
                            self &&
                            self.Object === Object &&
                            self,
                        y = p || v || Function('return this')();
                    function h(e, t) {
                        return (
                            !(!e || !e.length) &&
                            (function(e, t, n) {
                                if (t != t)
                                    return (function(e, t, n, r) {
                                        for (var o = e.length, u = -1; ++u < o; ) if (t(e[u], u, e)) return u;
                                        return -1;
                                    })(e, g);
                                for (var r = -1, o = e.length; ++r < o; ) if (e[r] === t) return r;
                                return -1;
                            })(e, t) > -1
                        );
                    }
                    function b(e, t) {
                        for (var n = -1, r = e ? e.length : 0, o = Array(r); ++n < r; ) o[n] = t(e[n], n, e);
                        return o;
                    }
                    function m(e, t) {
                        for (var n = -1, r = t.length, o = e.length; ++n < r; ) e[o + n] = t[n];
                        return e;
                    }
                    function g(e) {
                        return e != e;
                    }
                    function _(e, t) {
                        return e.has(t);
                    }
                    function O(e, t) {
                        return function(n) {
                            return e(t(n));
                        };
                    }
                    var j,
                        S = Array.prototype,
                        P = Function.prototype,
                        w = Object.prototype,
                        k = y['__core-js_shared__'],
                        E = (j = /[^.]+$/.exec((k && k.keys && k.keys.IE_PROTO) || '')) ? 'Symbol(src)_1.' + j : '',
                        M = P.toString,
                        x = w.hasOwnProperty,
                        C = w.toString,
                        T = RegExp(
                            '^' +
                                M.call(x)
                                    .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                                    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
                                '$'
                        ),
                        A = y.Symbol,
                        N = O(Object.getPrototypeOf, Object),
                        R = w.propertyIsEnumerable,
                        I = S.splice,
                        L = A ? A.isConcatSpreadable : void 0,
                        U = Object.getOwnPropertySymbols,
                        q = Math.max,
                        F = K(y, 'Map'),
                        D = K(Object, 'create');
                    function H(e) {
                        var t = -1,
                            n = e ? e.length : 0;
                        for (this.clear(); ++t < n; ) {
                            var r = e[t];
                            this.set(r[0], r[1]);
                        }
                    }
                    function W(e) {
                        var t = -1,
                            n = e ? e.length : 0;
                        for (this.clear(); ++t < n; ) {
                            var r = e[t];
                            this.set(r[0], r[1]);
                        }
                    }
                    function B(e) {
                        var t = -1,
                            n = e ? e.length : 0;
                        for (this.clear(); ++t < n; ) {
                            var r = e[t];
                            this.set(r[0], r[1]);
                        }
                    }
                    function G(e) {
                        var t = -1,
                            n = e ? e.length : 0;
                        for (this.__data__ = new B(); ++t < n; ) this.add(e[t]);
                    }
                    function z(e, t) {
                        for (var n, r, o = e.length; o--; )
                            if ((n = e[o][0]) === (r = t) || (n != n && r != r)) return o;
                        return -1;
                    }
                    function $(e, t) {
                        var r,
                            o,
                            u = e.__data__;
                        return ('string' == (o = void 0 === (r = t) ? 'undefined' : n(r)) ||
                        'number' == o ||
                        'symbol' == o ||
                        'boolean' == o
                        ? '__proto__' !== r
                        : null === r)
                            ? u['string' == typeof t ? 'string' : 'hash']
                            : u.map;
                    }
                    function K(e, t) {
                        var n = (function(e, t) {
                            return null == e ? void 0 : e[t];
                        })(e, t);
                        return (function(e) {
                            return (
                                !(!re(e) || (E && E in e)) &&
                                (ne(e) ||
                                (function(e) {
                                    var t = !1;
                                    if (null != e && 'function' != typeof e.toString)
                                        try {
                                            t = !!(e + '');
                                        } catch (e) {}
                                    return t;
                                })(e)
                                    ? T
                                    : s
                                ).test(
                                    (function(e) {
                                        if (null != e) {
                                            try {
                                                return M.call(e);
                                            } catch (e) {}
                                            try {
                                                return e + '';
                                            } catch (e) {}
                                        }
                                        return '';
                                    })(e)
                                )
                            );
                        })(n)
                            ? n
                            : void 0;
                    }
                    (H.prototype.clear = function() {
                        this.__data__ = D ? D(null) : {};
                    }),
                        (H.prototype.delete = function(e) {
                            return this.has(e) && delete this.__data__[e];
                        }),
                        (H.prototype.get = function(e) {
                            var t = this.__data__;
                            if (D) {
                                var n = t[e];
                                return n === o ? void 0 : n;
                            }
                            return x.call(t, e) ? t[e] : void 0;
                        }),
                        (H.prototype.has = function(e) {
                            var t = this.__data__;
                            return D ? void 0 !== t[e] : x.call(t, e);
                        }),
                        (H.prototype.set = function(e, t) {
                            return (this.__data__[e] = D && void 0 === t ? o : t), this;
                        }),
                        (W.prototype.clear = function() {
                            this.__data__ = [];
                        }),
                        (W.prototype.delete = function(e) {
                            var t = this.__data__,
                                n = z(t, e);
                            return !(n < 0 || (n == t.length - 1 ? t.pop() : I.call(t, n, 1), 0));
                        }),
                        (W.prototype.get = function(e) {
                            var t = this.__data__,
                                n = z(t, e);
                            return n < 0 ? void 0 : t[n][1];
                        }),
                        (W.prototype.has = function(e) {
                            return z(this.__data__, e) > -1;
                        }),
                        (W.prototype.set = function(e, t) {
                            var n = this.__data__,
                                r = z(n, e);
                            return r < 0 ? n.push([e, t]) : (n[r][1] = t), this;
                        }),
                        (B.prototype.clear = function() {
                            this.__data__ = { hash: new H(), map: new (F || W)(), string: new H() };
                        }),
                        (B.prototype.delete = function(e) {
                            return $(this, e).delete(e);
                        }),
                        (B.prototype.get = function(e) {
                            return $(this, e).get(e);
                        }),
                        (B.prototype.has = function(e) {
                            return $(this, e).has(e);
                        }),
                        (B.prototype.set = function(e, t) {
                            return $(this, e).set(e, t), this;
                        }),
                        (G.prototype.add = G.prototype.push = function(e) {
                            return this.__data__.set(e, o), this;
                        }),
                        (G.prototype.has = function(e) {
                            return this.__data__.has(e);
                        });
                    var V = U ? O(U, Object) : fe,
                        J = U
                            ? function(e) {
                                  for (var t = []; e; ) m(t, V(e)), (e = N(e));
                                  return t;
                              }
                            : fe;
                    function X(e) {
                        return ee(e) || Z(e) || !!(L && e && e[L]);
                    }
                    function Y(e, t) {
                        return (
                            !!(t = null == t ? i : t) &&
                            ('number' == typeof e || d.test(e)) &&
                            e > -1 &&
                            e % 1 == 0 &&
                            e < t
                        );
                    }
                    function Q(e) {
                        if (
                            'string' == typeof e ||
                            (function(e) {
                                return 'symbol' == (void 0 === e ? 'undefined' : n(e)) || (oe(e) && C.call(e) == l);
                            })(e)
                        )
                            return e;
                        var t = e + '';
                        return '0' == t && 1 / e == -u ? '-0' : t;
                    }
                    function Z(e) {
                        return (
                            (function(e) {
                                return oe(e) && te(e);
                            })(e) &&
                            x.call(e, 'callee') &&
                            (!R.call(e, 'callee') || C.call(e) == a)
                        );
                    }
                    var ee = Array.isArray;
                    function te(e) {
                        return (
                            null != e &&
                            (function(e) {
                                return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= i;
                            })(e.length) &&
                            !ne(e)
                        );
                    }
                    function ne(e) {
                        var t = re(e) ? C.call(e) : '';
                        return t == c || t == f;
                    }
                    function re(e) {
                        var t = void 0 === e ? 'undefined' : n(e);
                        return !!e && ('object' == t || 'function' == t);
                    }
                    function oe(e) {
                        return !!e && 'object' == (void 0 === e ? 'undefined' : n(e));
                    }
                    function ue(e) {
                        return te(e)
                            ? (function(e, t) {
                                  var n =
                                          ee(e) || Z(e)
                                              ? (function(e, t) {
                                                    for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
                                                    return r;
                                                })(e.length, String)
                                              : [],
                                      r = n.length,
                                      o = !!r;
                                  for (var u in e)
                                      (!t && !x.call(e, u)) || (o && ('length' == u || Y(u, r))) || n.push(u);
                                  return n;
                              })(e, !0)
                            : (function(e) {
                                  if (!re(e))
                                      return (function(e) {
                                          var t = [];
                                          if (null != e) for (var n in Object(e)) t.push(n);
                                          return t;
                                      })(e);
                                  var t,
                                      n,
                                      r = ((n = (t = e) && t.constructor),
                                      t === (('function' == typeof n && n.prototype) || w)),
                                      o = [];
                                  for (var u in e) ('constructor' != u || (!r && x.call(e, u))) && o.push(u);
                                  return o;
                              })(e);
                    }
                    var ie,
                        ae,
                        ce = ((ie = function(e, t) {
                            return null == e
                                ? {}
                                : ((t = b(
                                      (function e(t, n, r, o, u) {
                                          var i = -1,
                                              a = t.length;
                                          for (r || (r = X), u || (u = []); ++i < a; ) {
                                              var c = t[i];
                                              n > 0 && r(c)
                                                  ? n > 1 ? e(c, n - 1, r, o, u) : m(u, c)
                                                  : o || (u[u.length] = c);
                                          }
                                          return u;
                                      })(t, 1),
                                      Q
                                  )),
                                  (function(e, t) {
                                      return (function(e, t, n) {
                                          for (var r = -1, o = t.length, u = {}; ++r < o; ) {
                                              var i = t[r],
                                                  a = e[i];
                                              n(a, i) && (u[i] = a);
                                          }
                                          return u;
                                      })((e = Object(e)), t, function(t, n) {
                                          return n in e;
                                      });
                                  })(
                                      e,
                                      (function(e, t, n, r) {
                                          var o = -1,
                                              u = h,
                                              i = !0,
                                              a = e.length,
                                              c = [],
                                              f = t.length;
                                          if (!a) return c;
                                          t.length >= 200 && ((u = _), (i = !1), (t = new G(t)));
                                          e: for (; ++o < a; ) {
                                              var l = e[o],
                                                  s = l;
                                              if (((l = 0 !== l ? l : 0), i && s == s)) {
                                                  for (var d = f; d--; ) if (t[d] === s) continue e;
                                                  c.push(l);
                                              } else u(t, s, r) || c.push(l);
                                          }
                                          return c;
                                      })(
                                          (function(e) {
                                              return (function(e, t, n) {
                                                  var r = ue(e);
                                                  return ee(e) ? r : m(r, n(e));
                                              })(e, 0, J);
                                          })(e),
                                          t
                                      )
                                  ));
                        }),
                        (ae = q(void 0 === ae ? ie.length - 1 : ae, 0)),
                        function() {
                            for (var e = arguments, t = -1, n = q(e.length - ae, 0), r = Array(n); ++t < n; )
                                r[t] = e[ae + t];
                            t = -1;
                            for (var o = Array(ae + 1); ++t < ae; ) o[t] = e[t];
                            return (
                                (o[ae] = r),
                                (function(e, t, n) {
                                    switch (n.length) {
                                        case 0:
                                            return e.call(t);
                                        case 1:
                                            return e.call(t, n[0]);
                                        case 2:
                                            return e.call(t, n[0], n[1]);
                                        case 3:
                                            return e.call(t, n[0], n[1], n[2]);
                                    }
                                    return e.apply(t, n);
                                })(ie, this, o)
                            );
                        });
                    function fe() {
                        return [];
                    }
                    e.exports = ce;
                }.call(this, n(10)));
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.default = function(e, t, n) {
                        for (var r = arguments.length, l = Array(r > 3 ? r - 3 : 0), s = 3; s < r; s++)
                            l[s - 3] = arguments[s];
                        var d = void 0,
                            p = void 0,
                            v = { done: !1, value: (0, i.actionChannel)(t, c.buffers.sliding(1)) },
                            y = { done: !1, value: (0, i.call)(f.delay, e) },
                            h = function(e) {
                                return (d = e);
                            },
                            b = function(e) {
                                return (p = e);
                            };
                        return (0, u.default)(
                            {
                                q1: function() {
                                    return ['q2', v, b];
                                },
                                q2: function() {
                                    return ['q3', { done: !1, value: (0, i.take)(p) }, h];
                                },
                                q3: function() {
                                    return d === a.END
                                        ? [o.qEnd]
                                        : [
                                              'q4',
                                              ((e = d), { done: !1, value: i.fork.apply(void 0, [n].concat(l, [e])) })
                                          ];
                                    var e;
                                },
                                q4: function() {
                                    return ['q2', y];
                                }
                            },
                            'q1',
                            'throttle(' + (0, o.safeName)(t) + ', ' + n.name + ')'
                        );
                    });
                var r,
                    o = n(4),
                    u = (r = o) && r.__esModule ? r : { default: r },
                    i = n(2),
                    a = n(3),
                    c = n(8),
                    f = n(1);
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.default = function(e, t) {
                        for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), c = 2; c < n; c++)
                            r[c - 2] = arguments[c];
                        var f = { done: !1, value: (0, i.take)(e) },
                            l = function(e) {
                                return { done: !1, value: i.fork.apply(void 0, [t].concat(r, [e])) };
                            },
                            s = void 0,
                            d = void 0,
                            p = function(e) {
                                return (s = e);
                            },
                            v = function(e) {
                                return (d = e);
                            };
                        return (0, u.default)(
                            {
                                q1: function() {
                                    return ['q2', f, v];
                                },
                                q2: function() {
                                    return d === a.END
                                        ? [o.qEnd]
                                        : s
                                          ? ['q3', ((e = s), { done: !1, value: (0, i.cancel)(e) })]
                                          : ['q1', l(d), p];
                                    var e;
                                },
                                q3: function() {
                                    return ['q1', l(d), p];
                                }
                            },
                            'q1',
                            'takeLatest(' + (0, o.safeName)(e) + ', ' + t.name + ')'
                        );
                    });
                var r,
                    o = n(4),
                    u = (r = o) && r.__esModule ? r : { default: r },
                    i = n(2),
                    a = n(3);
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
                    for (var e = void 0; !o && void 0 !== (e = r.shift()); ) u(e);
                }
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.default = function(e, t) {
                        for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), c = 2; c < n; c++)
                            r[c - 2] = arguments[c];
                        var f = { done: !1, value: (0, i.take)(e) },
                            l = void 0,
                            s = function(e) {
                                return (l = e);
                            };
                        return (0, u.default)(
                            {
                                q1: function() {
                                    return ['q2', f, s];
                                },
                                q2: function() {
                                    return l === a.END
                                        ? [o.qEnd]
                                        : [
                                              'q1',
                                              ((e = l), { done: !1, value: i.fork.apply(void 0, [t].concat(r, [e])) })
                                          ];
                                    var e;
                                }
                            },
                            'q1',
                            'takeEvery(' + (0, o.safeName)(e) + ', ' + t.name + ')'
                        );
                    });
                var r,
                    o = n(4),
                    u = (r = o) && r.__esModule ? r : { default: r },
                    i = n(2),
                    a = n(3);
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.throttleHelper = t.takeLatestHelper = t.takeEveryHelper = t.throttle = t.takeLatest = t.takeEvery = void 0);
                var r = a(n(22)),
                    o = a(n(20)),
                    u = a(n(19)),
                    i = n(1);
                function a(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var c = function(e) {
                        return (
                            'import { ' +
                            e +
                            " } from 'redux-saga' has been deprecated in favor of import { " +
                            e +
                            " } from 'redux-saga/effects'.\nThe latter will not work with yield*, as helper effects are wrapped automatically for you in fork effect.\nTherefore yield " +
                            e +
                            ' will return task descriptor to your saga and execute next lines of code.'
                        );
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
                Object.defineProperty(t, '__esModule', { value: !0 });
                var r = n(2);
                Object.defineProperty(t, 'take', {
                    enumerable: !0,
                    get: function() {
                        return r.take;
                    }
                }),
                    Object.defineProperty(t, 'takem', {
                        enumerable: !0,
                        get: function() {
                            return r.takem;
                        }
                    }),
                    Object.defineProperty(t, 'put', {
                        enumerable: !0,
                        get: function() {
                            return r.put;
                        }
                    }),
                    Object.defineProperty(t, 'all', {
                        enumerable: !0,
                        get: function() {
                            return r.all;
                        }
                    }),
                    Object.defineProperty(t, 'race', {
                        enumerable: !0,
                        get: function() {
                            return r.race;
                        }
                    }),
                    Object.defineProperty(t, 'call', {
                        enumerable: !0,
                        get: function() {
                            return r.call;
                        }
                    }),
                    Object.defineProperty(t, 'apply', {
                        enumerable: !0,
                        get: function() {
                            return r.apply;
                        }
                    }),
                    Object.defineProperty(t, 'cps', {
                        enumerable: !0,
                        get: function() {
                            return r.cps;
                        }
                    }),
                    Object.defineProperty(t, 'fork', {
                        enumerable: !0,
                        get: function() {
                            return r.fork;
                        }
                    }),
                    Object.defineProperty(t, 'spawn', {
                        enumerable: !0,
                        get: function() {
                            return r.spawn;
                        }
                    }),
                    Object.defineProperty(t, 'join', {
                        enumerable: !0,
                        get: function() {
                            return r.join;
                        }
                    }),
                    Object.defineProperty(t, 'cancel', {
                        enumerable: !0,
                        get: function() {
                            return r.cancel;
                        }
                    }),
                    Object.defineProperty(t, 'select', {
                        enumerable: !0,
                        get: function() {
                            return r.select;
                        }
                    }),
                    Object.defineProperty(t, 'actionChannel', {
                        enumerable: !0,
                        get: function() {
                            return r.actionChannel;
                        }
                    }),
                    Object.defineProperty(t, 'cancelled', {
                        enumerable: !0,
                        get: function() {
                            return r.cancelled;
                        }
                    }),
                    Object.defineProperty(t, 'flush', {
                        enumerable: !0,
                        get: function() {
                            return r.flush;
                        }
                    }),
                    Object.defineProperty(t, 'getContext', {
                        enumerable: !0,
                        get: function() {
                            return r.getContext;
                        }
                    }),
                    Object.defineProperty(t, 'setContext', {
                        enumerable: !0,
                        get: function() {
                            return r.setContext;
                        }
                    }),
                    Object.defineProperty(t, 'takeEvery', {
                        enumerable: !0,
                        get: function() {
                            return r.takeEvery;
                        }
                    }),
                    Object.defineProperty(t, 'takeLatest', {
                        enumerable: !0,
                        get: function() {
                            return r.takeLatest;
                        }
                    }),
                    Object.defineProperty(t, 'throttle', {
                        enumerable: !0,
                        get: function() {
                            return r.throttle;
                        }
                    });
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var r,
                    o = n(24),
                    u = (r = n(5)) && r.__esModule ? r : { default: r };
                t.default = function(e) {
                    return (0, o.select)((0, u.default)(e));
                };
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var o =
                    'function' == typeof Symbol && 'symbol' == r(Symbol.iterator)
                        ? function(e) {
                              return void 0 === e ? 'undefined' : r(e);
                          }
                        : function(e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : void 0 === e ? 'undefined' : r(e);
                          };
                t.default = function(e) {
                    if (
                        !(function(e) {
                            return 'object' === (void 0 === e ? 'undefined' : o(e)) && null !== e;
                        })(e) ||
                        '[object Object]' !==
                            (function(e) {
                                if (null === e) return void 0 === e ? '[object Undefined]' : '[object Null]';
                                if (!(c && c in Object(e))) return a.call(e);
                                var t = i.call(e, c),
                                    n = e[c],
                                    r = !1;
                                try {
                                    (e[c] = void 0), (r = !0);
                                } catch (e) {}
                                var o = a.call(e);
                                return r && (t ? (e[c] = n) : delete e[c]), o;
                            })(e)
                    )
                        return !1;
                    var t = Object.getPrototypeOf(e);
                    if (null === t) return !0;
                    var n = i.call(t, 'constructor') && t.constructor;
                    return 'function' == typeof n && n instanceof n && f.call(n) === l;
                };
                var u = Object.prototype,
                    i = u.hasOwnProperty,
                    a = u.toString,
                    c = 'undefined' != typeof Symbol ? Symbol.toStringTag : void 0,
                    f = Function.prototype.toString,
                    l = f.call(Object);
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var r,
                    o = (r = n(26)) && r.__esModule ? r : { default: r };
                t.default = function(e, t) {
                    (0, o.default)(t)
                        ? Object.keys(t).forEach(function(n) {
                              return (t[n].globalStateContext = { path: e, key: n });
                          })
                        : t &&
                          t.forEach(function(t) {
                              return (t.globalStateContext = { path: e });
                          });
                };
            },
            function(e, t, n) {
                var o =
                    'function' == typeof Symbol && 'symbol' == r(Symbol.iterator)
                        ? function(e) {
                              return void 0 === e ? 'undefined' : r(e);
                          }
                        : function(e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : void 0 === e ? 'undefined' : r(e);
                          };
                function u(e, t) {
                    return e === t;
                }
                function i(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u,
                        n = null,
                        r = null;
                    return function() {
                        return (
                            (function(e, t, n) {
                                if (null === t || null === n || t.length !== n.length) return !1;
                                for (var r = t.length, o = 0; o < r; o++) if (!e(t[o], n[o])) return !1;
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
                        var a = 0,
                            c = r.pop(),
                            f = (function(e) {
                                var t = Array.isArray(e[0]) ? e[0] : e;
                                if (
                                    !t.every(function(e) {
                                        return 'function' == typeof e;
                                    })
                                ) {
                                    var n = t
                                        .map(function(e) {
                                            return void 0 === e ? 'undefined' : o(e);
                                        })
                                        .join(', ');
                                    throw new Error(
                                        'Selector creators expect all input-selectors to be functions, instead received the following types: [' +
                                            n +
                                            ']'
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
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
                        if ('object' !== (void 0 === e ? 'undefined' : o(e)))
                            throw new Error(
                                'createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ' +
                                    (void 0 === e ? 'undefined' : o(e))
                            );
                        var n = Object.keys(e);
                        return t(
                            n.map(function(t) {
                                return e[t];
                            }),
                            function() {
                                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                return t.reduce(function(e, t, r) {
                                    return (e[n[r]] = t), e;
                                }, {});
                            }
                        );
                    });
                var c = (t.createSelector = a(i));
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var r,
                    o = n(28),
                    u = (r = n(5)) && r.__esModule ? r : { default: r };
                t.default = function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    for (var r = t, i = 0; i < t.length - 1; i++) {
                        if (void 0 === t[i]) throw new Error('WTF');
                        r[i] = (0, u.default)(t[i]);
                    }
                    var a = function(e) {
                        return o.createSelector.apply(null, r)(e);
                    };
                    return (a.requiresGlobalState = !0), a;
                };
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var r = n(29);
                Object.defineProperty(t, 'createModularSelector', {
                    enumerable: !0,
                    get: function() {
                        return c(r).default;
                    }
                });
                var o = n(5);
                Object.defineProperty(t, 'makeWorkWithGlobalState', {
                    enumerable: !0,
                    get: function() {
                        return c(o).default;
                    }
                });
                var u = n(9);
                Object.defineProperty(t, 'rebaseSelector', {
                    enumerable: !0,
                    get: function() {
                        return c(u).default;
                    }
                });
                var i = n(27);
                Object.defineProperty(t, 'registerSelectorsForUseWithGlobalState', {
                    enumerable: !0,
                    get: function() {
                        return c(i).default;
                    }
                });
                var a = n(25);
                function c(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                Object.defineProperty(t, 'selectModular', {
                    enumerable: !0,
                    get: function() {
                        return c(a).default;
                    }
                });
            },
            function(e, t) {
                e.exports = n(72);
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var o =
                        'function' == typeof Symbol && 'symbol' == r(Symbol.iterator)
                            ? function(e) {
                                  return void 0 === e ? 'undefined' : r(e);
                              }
                            : function(e) {
                                  return e &&
                                      'function' == typeof Symbol &&
                                      e.constructor === Symbol &&
                                      e !== Symbol.prototype
                                      ? 'symbol'
                                      : void 0 === e ? 'undefined' : r(e);
                              },
                    u =
                        Object.assign ||
                        function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                        },
                    i = n(31),
                    a = n(30);
                t.default = function(e) {
                    return (0, i.connect)(function(t) {
                        return (function e(t, n) {
                            return Object.keys(t).reduce(function(r, i) {
                                return u(
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
                                        'object' === o(t[i]) ? e(t[i], n) : (0, a.makeWorkWithGlobalState)(t[i])(n)
                                    )
                                );
                            }, {});
                        })(e, t);
                    });
                };
            },
            function(e, t, n) {
                (function(t) {
                    var n =
                            'function' == typeof Symbol && 'symbol' == r(Symbol.iterator)
                                ? function(e) {
                                      return void 0 === e ? 'undefined' : r(e);
                                  }
                                : function(e) {
                                      return e &&
                                          'function' == typeof Symbol &&
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
                        s = 'object' == (void 0 === t ? 'undefined' : n(t)) && t && t.Object === Object && t,
                        d =
                            'object' == ('undefined' == typeof self ? 'undefined' : n(self)) &&
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
                        var t = void 0 === e ? 'undefined' : n(e);
                        return !!e && ('object' == t || 'function' == t);
                    }
                    function g(e) {
                        return (
                            'symbol' == (void 0 === e ? 'undefined' : n(e)) ||
                            ((function(e) {
                                return !!e && 'object' == (void 0 === e ? 'undefined' : n(e));
                            })(e) &&
                                v.call(e) == u)
                        );
                    }
                    function _(e) {
                        if ('number' == typeof e) return e;
                        if (g(e)) return o;
                        if (m(e)) {
                            var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
                            e = m(t) ? t + '' : t;
                        }
                        if ('string' != typeof e) return 0 === e ? e : +e;
                        e = e.replace(i, '');
                        var n = c.test(e);
                        return n || f.test(e) ? l(e.slice(2), n ? 2 : 8) : a.test(e) ? o : +e;
                    }
                    e.exports = function(e, t, n) {
                        var r,
                            o,
                            u,
                            i,
                            a,
                            c,
                            f = 0,
                            l = !1,
                            s = !1,
                            d = !0;
                        if ('function' != typeof e) throw new TypeError('Expected a function');
                        function p(t) {
                            var n = r,
                                u = o;
                            return (r = o = void 0), (f = t), (i = e.apply(u, n));
                        }
                        function v(e) {
                            var n = e - c;
                            return void 0 === c || n >= t || n < 0 || (s && e - f >= u);
                        }
                        function g() {
                            var e = b();
                            if (v(e)) return O(e);
                            a = setTimeout(
                                g,
                                (function(e) {
                                    var n = t - (e - c);
                                    return s ? h(n, u - (e - f)) : n;
                                })(e)
                            );
                        }
                        function O(e) {
                            return (a = void 0), d && r ? p(e) : ((r = o = void 0), i);
                        }
                        function j() {
                            var e = b(),
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
                            (j.cancel = function() {
                                void 0 !== a && clearTimeout(a), (f = 0), (r = c = o = a = void 0);
                            }),
                            (j.flush = function() {
                                return void 0 === a ? i : O(b());
                            }),
                            j
                        );
                    };
                }.call(this, n(10)));
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var r,
                    o = n(0),
                    u = (r = n(33)) && r.__esModule ? r : { default: r };
                t.default = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { debounce: 20 };
                    return (0, o.compose)(
                        (0, o.withHandlers)({
                            onResizeHandler: function(n) {
                                return (0, u.default)(function() {
                                    (0, n[e])({ width: window.innerWidth, height: window.innerHeight });
                                }, t.debounce);
                            }
                        }),
                        (0, o.lifecycle)({
                            componentDidMount: function() {
                                var e = this.props.onResizeHandler;
                                window.addEventListener('resize', e), e();
                            },
                            componentWillUnmount: function() {
                                var e = this.props.onResizeHandler;
                                window.removeEventListener('resize', e);
                            }
                        })
                    );
                };
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var r = n(0);
                t.default = function(e) {
                    return (0, r.lifecycle)({
                        componentWillMount: function() {
                            e(this.props);
                        }
                    });
                };
            }
        ]);
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r,
            o = n(73),
            u = n(9),
            i = n(45),
            a = n(40),
            c = n(13),
            f = n(36),
            l = (r = f) && r.__esModule ? r : { default: r };
        var s = (0, u.compose)(
            (0, o.connectSelectors)({ topStories: c.selectTopStories }),
            (0, u.withHandlers)({ handleLoadingTopStories: a.handleLoadingTopStories }),
            i.enhanceWithSpinner
        );
        t.default = s(l.default);
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r = n(24);
        Object.defineProperty(t, 'HackerNews', {
            enumerable: !0,
            get: function() {
                return f(r).default;
            }
        });
        var o = n(35);
        Object.defineProperty(t, 'hackerNewsRootReducer', {
            enumerable: !0,
            get: function() {
                return f(o).default;
            }
        });
        var u = n(34);
        Object.defineProperty(t, 'hackerNewsRootSaga', {
            enumerable: !0,
            get: function() {
                return f(u).default;
            }
        });
        var i = n(13);
        Object.defineProperty(t, 'hackerNewsSelectors', {
            enumerable: !0,
            get: function() {
                return f(i).default;
            }
        });
        var a = n(4);
        Object.defineProperty(t, 'hackerNewsActions', {
            enumerable: !0,
            get: function() {
                return f(a).default;
            }
        });
        var c = n(12);
        function f(e) {
            return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, 'createInitialHackerNewsState', {
            enumerable: !0,
            get: function() {
                return f(c).default;
            }
        });
    }
]);
