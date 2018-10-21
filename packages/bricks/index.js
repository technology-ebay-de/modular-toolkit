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
        n((n.s = 1))
    );
})([
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = n(3);
        Object.defineProperty(t, 'walkObject', {
            enumerable: !0,
            get() {
                return l(r).default;
            }
        });
        const o = n(4);
        Object.defineProperty(t, 'forEachPathSegment', {
            enumerable: !0,
            get() {
                return l(o).default;
            }
        });
        const u = n(5);
        Object.defineProperty(t, 'addValueByDottedPath', {
            enumerable: !0,
            get() {
                return l(u).default;
            }
        });
        const a = n(6);
        Object.defineProperty(t, 'getValueByDottedPath', {
            enumerable: !0,
            get() {
                return l(a).default;
            }
        });
        const i = n(7);
        Object.defineProperty(t, 'isObject', {
            enumerable: !0,
            get() {
                return l(i).default;
            }
        });
        const c = n(8);
        Object.defineProperty(t, 'filterObject', {
            enumerable: !0,
            get() {
                return l(c).default;
            }
        });
        const f = n(9);
        function l(e) {
            return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, 'mergeObjects', {
            enumerable: !0,
            get() {
                return l(f).default;
            }
        });
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = n(2);
        Object.defineProperty(t, 'BrickManager', {
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
        let r =
                Object.assign ||
                function(e) {
                    for (let t = 1; t < arguments.length; t++) {
                        const n = arguments[t];
                        for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                },
            o = (function() {
                return function(e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e))
                        return (function(e, t) {
                            let n = [],
                                r = !0,
                                o = !1,
                                u = void 0;
                            try {
                                for (
                                    var a, i = e[Symbol.iterator]();
                                    !(r = (a = i.next()).done) && (n.push(a.value), !t || n.length !== t);
                                    r = !0
                                );
                            } catch (e) {
                                (o = !0), (u = e);
                            } finally {
                                try {
                                    !r && i.return && i.return();
                                } finally {
                                    if (o) throw u;
                                }
                            }
                            return n;
                        })(e, t);
                    throw new TypeError('Invalid attempt to destructure non-iterable instance');
                };
            })(),
            u = (function() {
                function e(e, t) {
                    for (let n = 0; n < t.length; n++) {
                        const r = t[n];
                        (r.enumerable = r.enumerable || !1),
                            (r.configurable = !0),
                            'value' in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r);
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t;
                };
            })(),
            a = n(0),
            i = n(10);
        let c = Symbol(void 0),
            f = Symbol(void 0),
            l = Symbol(void 0),
            s = Symbol(void 0),
            d = Symbol(void 0),
            v = Symbol(void 0),
            p = (function() {
                function e(t) {
                    let n = t.store,
                        r = t.reducer,
                        o =
                            void 0 === r
                                ? function(e) {
                                      return e;
                                  }
                                : r,
                        u = t.sagaMiddleware;
                    !(function(e, t) {
                        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                    })(this, e),
                        (this.store = n),
                        (this.initialReducer = this[s](o)),
                        (this.initialStateProps = Object.keys(n.getState())),
                        this.store.replaceReducer(this.initialReducer),
                        (this.reducers = {}),
                        (this.sagaMiddleware = u);
                }
                return (
                    u(e, [
                        {
                            key: 'installBricks',
                            value(e) {
                                let t = !0,
                                    n = !1,
                                    r = void 0;
                                try {
                                    for (
                                        var u, a = Object.entries(e)[Symbol.iterator]();
                                        !(t = (u = a.next()).done);
                                        t = !0
                                    ) {
                                        let i = u.value,
                                            c = o(i, 2),
                                            f = c[0],
                                            l = c[1];
                                        this.installBrick(f, l);
                                    }
                                } catch (e) {
                                    (n = !0), (r = e);
                                } finally {
                                    try {
                                        !t && a.return && a.return();
                                    } finally {
                                        if (n) throw r;
                                    }
                                }
                            }
                        },
                        {
                            key: 'installBrick',
                            value(e, t) {
                                let n = t.reducer,
                                    r = t.saga,
                                    o = t.selectors;
                                this[c](e, n), this[f](e, o), this[l](r);
                            }
                        },
                        {
                            key: c,
                            value(e, t) {
                                const n = this;
                                this.store.dispatch({ type: 'modular-toolkit/PREP_STATE', storePath: e }),
                                    this[d](e, t),
                                    this.store.replaceReducer(function() {
                                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            t = arguments[1],
                                            o = (0, a.filterObject)(e, n.initialStateProps),
                                            u = n.initialReducer(o, t),
                                            i = o !== u;
                                        u = (0, a.mergeObjects)(e, u);
                                        let c = r({}, u);
                                        return (
                                            (0, a.walkObject)(u, (e, r) => {
                                                const o = n[v](r);
                                                if (typeof o === 'function') {
                                                    const u = o(e, t);
                                                    u !== e && ((c = (0, a.addValueByDottedPath)(c, r, u)), (i = !0));
                                                }
                                            }),
                                            i ? c : e
                                        );
                                    });
                            }
                        },
                        {
                            key: f,
                            value(e, t) {
                                (0, i.registerSelectorsForUseWithGlobalState)(e, t);
                            }
                        },
                        {
                            key: l,
                            value(e) {
                                this.sagaMiddleware.run(e);
                            }
                        },
                        {
                            key: s,
                            value(e) {
                                return function() {
                                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        n = arguments[1];
                                    switch (n.type) {
                                        case 'modular-toolkit/PREP_STATE':
                                            return r({}, (0, a.addValueByDottedPath)(t, n.storePath, {}, !1));
                                        default:
                                            return e(t, n);
                                    }
                                };
                            }
                        },
                        {
                            key: d,
                            value(e, t) {
                                this.reducers = (0, a.addValueByDottedPath)(this.reducers, e, t);
                            }
                        },
                        {
                            key: v,
                            value(e) {
                                return (0, a.getValueByDottedPath)(this.reducers, e);
                            }
                        }
                    ]),
                    e
                );
            })();
        t.default = p;
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        let r = (function() {
                return function(e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e))
                        return (function(e, t) {
                            let n = [],
                                r = !0,
                                o = !1,
                                u = void 0;
                            try {
                                for (
                                    var a, i = e[Symbol.iterator]();
                                    !(r = (a = i.next()).done) && (n.push(a.value), !t || n.length !== t);
                                    r = !0
                                );
                            } catch (e) {
                                (o = !0), (u = e);
                            } finally {
                                try {
                                    !r && i.return && i.return();
                                } finally {
                                    if (o) throw u;
                                }
                            }
                            return n;
                        })(e, t);
                    throw new TypeError('Invalid attempt to destructure non-iterable instance');
                };
            })(),
            o = n(0);
        t.default = function e(t, n) {
            let u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                a = !0,
                i = !1,
                c = void 0;
            try {
                for (var f, l = Object.entries(t)[Symbol.iterator](); !(a = (f = l.next()).done); a = !0) {
                    let s = f.value,
                        d = r(s, 2),
                        v = d[0],
                        p = d[1];
                    if ((0, o.isObject)(p)) {
                        const y = u.concat([v]);
                        n(p, y.join('.')), Object.keys(p).length > 0 && e(p, n, y);
                    }
                }
            } catch (e) {
                (i = !0), (c = e);
            } finally {
                try {
                    !a && l.return && l.return();
                } finally {
                    if (i) throw c;
                }
            }
        };
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function(e, t) {
                const n = e.split('.');
                n.forEach((e, r) => t(e, r === n.length - 1));
            });
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
            o = n(0);
        t.default = function(e, t, n) {
            let u = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                a = r({}, e),
                i = a;
            return (
                (0, o.forEachPathSegment)(t, (e, t) => {
                    t ? n && (void 0 === i[e] || u) && (i[e] = n) : (i[e] || (i[e] = {}), (i = i[e]));
                }),
                a
            );
        };
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = n(0);
        t.default = function(e, t) {
            return t.split('.').reduce((e, t) => ((0, r.isObject)(e) ? (void 0 === e[t] ? null : e[t]) : e), e);
        };
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function(e) {
                return e instanceof Object && e.constructor === Object;
            });
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
        t.default = function(e, t) {
            return t.reduce(
                (t, n) =>
                    r(
                        {},
                        t,
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
                        })({}, n, e[n])
                    ),
                {}
            );
        };
    },
    function(e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = n(0);
        t.default = function e(t, n) {
            const o = {};
            return (
                (0, r.isObject)(t) && Object.keys(t).forEach(e => (o[e] = t[e])),
                Object.keys(n).forEach(u => {
                    (0, r.isObject)(n[u]) && t[u] ? (o[u] = e(t[u], n[u])) : (o[u] = n[u]);
                }),
                o
            );
        };
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
                n((n.s = 7))
            );
        })([
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 });
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
                (t.check = function(e, t, n) {
                    if (!t(e)) throw (O('error', 'uncaught at check', n), new Error(n));
                }),
                    (t.hasOwn = p),
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
                            r = arguments[3],
                            o = { name: n, next: e, throw: t, return: m };
                        return (
                            r && (o[f] = !0),
                            typeof Symbol !== 'undefined' &&
                                (o[Symbol.iterator] = function() {
                                    return o;
                                }),
                            o
                        );
                    }),
                    (t.log = O),
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
                    a =
                        typeof Symbol === 'function' && o(Symbol.iterator) === 'symbol'
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
                              },
                    i = (t.sym = function(e) {
                        return `@@redux-saga/${e}`;
                    }),
                    c = (t.TASK = i('TASK')),
                    f = (t.HELPER = i('HELPER')),
                    l = ((t.MATCH = i('MATCH')), (t.CANCEL = i('CANCEL_PROMISE'))),
                    s = (t.SAGA_ACTION = i('SAGA_ACTION')),
                    d = ((t.SELF_CANCELLATION = i('SELF_CANCELLATION')),
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
                const v = Object.prototype.hasOwnProperty;
                function p(e, t) {
                    return y.notUndef(e) && v.call(e, t);
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
                        return e && !y.array(e) && (void 0 === e ? 'undefined' : a(e)) === 'object';
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
                            (y.string(e) || (void 0 === e ? 'undefined' : a(e)) === 'symbol' || y.func(e) || y.array(e))
                        );
                    },
                    channel(e) {
                        return e && y.func(e.take) && y.func(e.close);
                    },
                    helper(e) {
                        return e && e[f];
                    },
                    stringableFunc(e) {
                        return y.func(e) && p(e, 'toString');
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
                        for (const n in t) p(t, n) && (e[n] = t[n]);
                    }
                }),
                    (t.array = {
                        from(e) {
                            const t = Array(e.length);
                            for (const n in e) p(e, n) && (t[n] = e[n]);
                            return t;
                        }
                    }),
                    (t.uid = b());
                var g = function(e) {
                        throw e;
                    },
                    m = function(e) {
                        return { value: e, done: !0 };
                    };
                function O(e, t) {
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
                                a = t.apply(void 0, r);
                            return {
                                next(e) {
                                    return u.push(e), a.next(e);
                                },
                                clone() {
                                    const n = e(t).apply(void 0, r);
                                    return u.forEach(e => n.next(e)), n;
                                },
                                return(e) {
                                    return a.return(e);
                                },
                                throw(e) {
                                    return a.throw(e);
                                }
                            };
                        };
                    });
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.asEffect = t.takem = t.detach = void 0),
                    (t.take = S),
                    (t.put = P),
                    (t.all = E),
                    (t.race = function(e) {
                        return j(f, e);
                    }),
                    (t.call = function(e) {
                        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                            n[r - 1] = arguments[r];
                        return j(l, w('call', e, n));
                    }),
                    (t.apply = function(e, t) {
                        const n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                        return j(l, w('apply', { context: e, fn: t }, n));
                    }),
                    (t.cps = function(e) {
                        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                            n[r - 1] = arguments[r];
                        return j(s, w('cps', e, n));
                    }),
                    (t.fork = A),
                    (t.spawn = function(e) {
                        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                            n[r - 1] = arguments[r];
                        return _(A.apply(void 0, [e].concat(n)));
                    }),
                    (t.join = function e() {
                        for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                        if (n.length > 1) return E(n.map(t => e(t)));
                        const u = n[0];
                        return (
                            (0, r.check)(u, r.is.notUndef, 'join(task): argument task is undefined'),
                            (0, r.check)(u, r.is.task, `join(task): argument ${u} is not a valid Task object ${k}`),
                            j(v, u)
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
                                    `cancel(task): argument ${u} is not a valid Task object ${k}`
                                )),
                            j(p, u || r.SELF_CANCELLATION)
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
                                    `actionChannel(pattern, buffer): argument ${t} is not a valid buffer`
                                )),
                            j(h, { pattern: e, buffer: t })
                        );
                    }),
                    (t.cancelled = function() {
                        return j(b, {});
                    }),
                    (t.flush = function(e) {
                        return (
                            (0, r.check)(e, r.is.channel, `flush(channel): argument ${e} is not valid channel`), j(g, e)
                        );
                    }),
                    (t.getContext = function(e) {
                        return (0, r.check)(e, r.is.string, `getContext(prop): argument ${e} is not a string`), j(m, e);
                    }),
                    (t.setContext = function(e) {
                        return (0, r.check)(e, r.is.object, (0, r.createSetContextWarning)(null, e)), j(O, e);
                    }),
                    (t.takeEvery = function(e, t) {
                        for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), u = 2; u < n; u++)
                            r[u - 2] = arguments[u];
                        return A.apply(void 0, [o.takeEveryHelper, e, t].concat(r));
                    }),
                    (t.takeLatest = function(e, t) {
                        for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), u = 2; u < n; u++)
                            r[u - 2] = arguments[u];
                        return A.apply(void 0, [o.takeLatestHelper, e, t].concat(r));
                    }),
                    (t.throttle = function(e, t, n) {
                        for (var r = arguments.length, u = Array(r > 3 ? r - 3 : 0), a = 3; a < r; a++)
                            u[a - 3] = arguments[a];
                        return A.apply(void 0, [o.throttleHelper, e, t, n].concat(u));
                    });
                var r = n(0),
                    o = n(14),
                    u = (0, r.sym)('IO'),
                    a = 'TAKE',
                    i = 'PUT',
                    c = 'ALL',
                    f = 'RACE',
                    l = 'CALL',
                    s = 'CPS',
                    d = 'FORK',
                    v = 'JOIN',
                    p = 'CANCEL',
                    y = 'SELECT',
                    h = 'ACTION_CHANNEL',
                    b = 'CANCELLED',
                    g = 'FLUSH',
                    m = 'GET_CONTEXT',
                    O = 'SET_CONTEXT',
                    k =
                        '\n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)',
                    j = function(e, t) {
                        let n;
                        return ((n = {})[u] = !0), (n[e] = t), n;
                    },
                    _ = (t.detach = function(e) {
                        return (
                            (0, r.check)(M.fork(e), r.is.object, 'detach(eff): argument must be a fork effect'),
                            (e[d].detached = !0),
                            e
                        );
                    });
                function S() {
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
                        return j(a, { pattern: e });
                    if (r.is.channel(e)) return j(a, { channel: e });
                    throw new Error(
                        `take(patternOrChannel): argument ${String(e)} is not valid channel or a valid pattern`
                    );
                }
                function P(e, t) {
                    return (
                        arguments.length > 1
                            ? ((0, r.check)(e, r.is.notUndef, 'put(channel, action): argument channel is undefined'),
                              (0, r.check)(
                                  e,
                                  r.is.channel,
                                  `put(channel, action): argument ${e} is not a valid channel`
                              ),
                              (0, r.check)(t, r.is.notUndef, 'put(channel, action): argument action is undefined'))
                            : ((0, r.check)(e, r.is.notUndef, 'put(action): argument action is undefined'),
                              (t = e),
                              (e = null)),
                        j(i, { channel: e, action: t })
                    );
                }
                function E(e) {
                    return j(c, e);
                }
                function w(e, t, n) {
                    (0, r.check)(t, r.is.notUndef, `${e}: argument fn is undefined`);
                    let o = null;
                    if (r.is.array(t)) {
                        const u = t;
                        (o = u[0]), (t = u[1]);
                    } else if (t.fn) {
                        const a = t;
                        (o = a.context), (t = a.fn);
                    }
                    return (
                        o && r.is.string(t) && r.is.func(o[t]) && (t = o[t]),
                        (0, r.check)(t, r.is.func, `${e}: argument ${t} is not a function`),
                        { context: o, fn: t, args: n }
                    );
                }
                function A(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                        n[r - 1] = arguments[r];
                    return j(d, w('fork', e, n));
                }
                (S.maybe = function() {
                    const e = S.apply(void 0, arguments);
                    return (e[a].maybe = !0), e;
                }),
                    (t.takem = (0, r.deprecate)(S.maybe, (0, r.updateIncentive)('takem', 'take.maybe'))),
                    (P.resolve = function() {
                        const e = P.apply(void 0, arguments);
                        return (e[i].resolve = !0), e;
                    }),
                    (P.sync = (0, r.deprecate)(P.resolve, (0, r.updateIncentive)('put.sync', 'put.resolve')));
                var C = function(e) {
                        return function(t) {
                            return t && t[u] && t[e];
                        };
                    },
                    M = (t.asEffect = {
                        take: C(a),
                        put: C(i),
                        all: C(c),
                        race: C(f),
                        call: C(l),
                        cps: C(s),
                        fork: C(d),
                        join: C(v),
                        cancel: C(p),
                        select: C(y),
                        actionChannel: C(h),
                        cancelled: C(b),
                        flush: C(g),
                        getContext: C(m),
                        setContext: C(O)
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
                            a = void 0,
                            i = t;
                        function c(t, n) {
                            if (i === u) return o;
                            if (n) throw ((i = u), n);
                            a && a(t);
                            let r = e[i](),
                                c = r[0],
                                f = r[1],
                                l = r[2];
                            return (a = l), (i = c) === u ? o : f;
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
                        return a({}, t, {
                            take(e, n) {
                                arguments.length > 1 &&
                                    ((0, r.check)(n, r.is.func, "channel.take's matcher argument must be a function"),
                                    (e[r.MATCH] = n)),
                                    t.take(e);
                            }
                        });
                    });
                var r = n(0),
                    o = n(6),
                    u = n(16),
                    a =
                        Object.assign ||
                        function(e) {
                            for (let t = 1; t < arguments.length; t++) {
                                const n = arguments[t];
                                for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                        },
                    i = (t.END = { type: '@@redux-saga/CHANNEL_END' }),
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
                                        ? o(i)
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
                                    for (let a = 0; a < n.length; a++) {
                                        const i = n[a];
                                        if (!i[r.MATCH] || i[r.MATCH](o)) return n.splice(a, 1), i(o);
                                    }
                                }
                            },
                            flush(n) {
                                u(),
                                    (0, r.check)(n, r.is.func, "channel.flush' callback must be a function"),
                                    t && e.isEmpty() ? n(i) : n(e.flush());
                            },
                            close() {
                                if ((u(), !t && ((t = !0), n.length))) {
                                    const e = n;
                                    n = [];
                                    for (let r = 0, o = e.length; r < o; r++) e[r](i);
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
                        a = function() {
                            u.__closed__ || (i && i(), u.close());
                        },
                        i = e(e => {
                            c(e) ? a() : (n && !n(e)) || u.put(e);
                        });
                    if ((u.__closed__ && i(), !r.is.func(i)))
                        throw new Error('in eventChannel: subscribe should return a function to unsubscribe');
                    return { take: u.take, flush: u.flush, close: a };
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
                    a = 3,
                    i = 4,
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
                                let v = void 0;
                                switch (t) {
                                    case u:
                                        throw new Error(o);
                                    case a:
                                        (n[c] = s), (f = c = (c + 1) % e);
                                        break;
                                    case i:
                                        (v = 2 * e),
                                            (n = d()),
                                            (r = n.length),
                                            (c = n.length),
                                            (f = 0),
                                            (n.length = v),
                                            (e = v),
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
                        return f(e, a);
                    },
                    expanding(e) {
                        return f(e, i);
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
                const a = n(10);
                Object.defineProperty(t, 'registerSelectorsForUseWithGlobalState', {
                    enumerable: !0,
                    get() {
                        return c(a).default;
                    }
                });
                const i = n(12);
                function c(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                Object.defineProperty(t, 'selectModular', {
                    enumerable: !0,
                    get() {
                        return c(i).default;
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
                    for (var u = t, a = 0; a < t.length - 1; a++) {
                        if (void 0 === t[a]) throw new Error('WTF');
                        u[a] = (0, o.default)(t[a]);
                    }
                    const i = function(e) {
                        return r.createSelector.apply(null, u)(e);
                    };
                    return (i.requiresGlobalState = !0), i;
                };
            },
            function(e, t) {
                e.exports = n(11);
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
                t.default = function(e) {
                    if (
                        !(function(e) {
                            return (void 0 === e ? 'undefined' : o(e)) === 'object' && e !== null;
                        })(e) ||
                        (function(e) {
                            if (e === null) return void 0 === e ? '[object Undefined]' : '[object Null]';
                            if (!(c && c in Object(e))) return i.call(e);
                            let t = a.call(e, c),
                                n = e[c],
                                r = !1;
                            try {
                                (e[c] = void 0), (r = !0);
                            } catch (e) {}
                            const o = i.call(e);
                            return r && (t ? (e[c] = n) : delete e[c]), o;
                        })(e) !== '[object Object]'
                    )
                        return !1;
                    const t = Object.getPrototypeOf(e);
                    if (t === null) return !0;
                    const n = a.call(t, 'constructor') && t.constructor;
                    return typeof n === 'function' && n instanceof n && f.call(n) === l;
                };
                var u = Object.prototype,
                    a = u.hasOwnProperty,
                    i = u.toString,
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
                let r = i(n(15)),
                    o = i(n(17)),
                    u = i(n(18)),
                    a = n(0);
                function i(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                let c = function(e) {
                        return `import { ${e} } from 'redux-saga' has been deprecated in favor of import { ${e} } from 'redux-saga/effects'.\nThe latter will not work with yield*, as helper effects are wrapped automatically for you in fork effect.\nTherefore yield ${e} will return task descriptor to your saga and execute next lines of code.`;
                    },
                    f = (0, a.deprecate)(r.default, c('takeEvery')),
                    l = (0, a.deprecate)(o.default, c('takeLatest')),
                    s = (0, a.deprecate)(u.default, c('throttle'));
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
                        for (var n = arguments.length, i = Array(n > 2 ? n - 2 : 0), c = 2; c < n; c++)
                            i[c - 2] = arguments[c];
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
                                    return l === a.END
                                        ? [r.qEnd]
                                        : [
                                              'q1',
                                              (function(e) {
                                                  return { done: !1, value: u.fork.apply(void 0, [t].concat(i, [e])) };
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
                    a = n(4);
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.asap = function(e) {
                        r.push(e), o || (a(), c());
                    }),
                    (t.suspend = a),
                    (t.flush = c);
                var r = [],
                    o = 0;
                function u(e) {
                    try {
                        a(), e();
                    } finally {
                        i();
                    }
                }
                function a() {
                    o++;
                }
                function i() {
                    o--;
                }
                function c() {
                    i();
                    for (let e = void 0; !o && void 0 !== (e = r.shift()); ) u(e);
                }
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.default = function(e, t) {
                        for (var n = arguments.length, i = Array(n > 2 ? n - 2 : 0), c = 2; c < n; c++)
                            i[c - 2] = arguments[c];
                        let f = { done: !1, value: (0, u.take)(e) },
                            l = function(e) {
                                return { done: !1, value: u.fork.apply(void 0, [t].concat(i, [e])) };
                            },
                            s = void 0,
                            d = void 0,
                            v = function(e) {
                                return (s = e);
                            },
                            p = function(e) {
                                return (d = e);
                            };
                        return (0, o.default)(
                            {
                                q1() {
                                    return ['q2', f, p];
                                },
                                q2() {
                                    return d === a.END
                                        ? [r.qEnd]
                                        : s
                                          ? [
                                                'q3',
                                                (function(e) {
                                                    return { done: !1, value: (0, u.cancel)(e) };
                                                })(s)
                                            ]
                                          : ['q1', l(d), v];
                                },
                                q3() {
                                    return ['q1', l(d), v];
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
                    a = n(4);
            },
            function(e, t, n) {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.default = function(e, t, n) {
                        for (var f = arguments.length, l = Array(f > 3 ? f - 3 : 0), s = 3; s < f; s++)
                            l[s - 3] = arguments[s];
                        let d = void 0,
                            v = void 0,
                            p = { done: !1, value: (0, u.actionChannel)(t, i.buffers.sliding(1)) },
                            y = { done: !1, value: (0, u.call)(c.delay, e) },
                            h = function(e) {
                                return (d = e);
                            },
                            b = function(e) {
                                return (v = e);
                            };
                        return (0, o.default)(
                            {
                                q1() {
                                    return ['q2', p, b];
                                },
                                q2() {
                                    return ['q3', { done: !1, value: (0, u.take)(v) }, h];
                                },
                                q3() {
                                    return d === a.END
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
                var r = n(3),
                    o = (function(e) {
                        return e && e.__esModule ? e : { default: e };
                    })(r),
                    u = n(1),
                    a = n(4),
                    i = n(6),
                    c = n(0);
            }
        ]);
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
        function o(e, t) {
            return e === t;
        }
        function u(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
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
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
            return function() {
                for (var t = arguments.length, o = Array(t), a = 0; a < t; a++) o[a] = arguments[a];
                let i = 0,
                    c = o.pop(),
                    f = (function(e) {
                        const t = Array.isArray(e[0]) ? e[0] : e;
                        if (!t.every(e => typeof e === 'function')) {
                            const n = t.map(e => (void 0 === e ? 'undefined' : r(e))).join(', ');
                            throw new Error(
                                `Selector creators expect all input-selectors to be functions, instead received the following types: [${n}]`
                            );
                        }
                        return t;
                    })(o),
                    l = e.apply(
                        void 0,
                        [
                            function() {
                                return i++, c.apply(null, arguments);
                            }
                        ].concat(n)
                    ),
                    s = u(function() {
                        for (var e = [], t = f.length, n = 0; n < t; n++) e.push(f[n].apply(null, arguments));
                        return l.apply(null, e);
                    });
                return (
                    (s.resultFunc = c),
                    (s.recomputations = function() {
                        return i;
                    }),
                    (s.resetRecomputations = function() {
                        return (i = 0);
                    }),
                    s
                );
            };
        }
        (t.__esModule = !0),
            (t.defaultMemoize = u),
            (t.createSelectorCreator = a),
            (t.createStructuredSelector = function(e) {
                const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
                if ((void 0 === e ? 'undefined' : r(e)) !== 'object')
                    throw new Error(
                        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${
                            void 0 === e ? 'undefined' : r(e)
                        }`
                    );
                const n = Object.keys(e);
                return t(n.map(t => e[t]), function() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return t.reduce((e, t, r) => (e[n[r]] = t), e, {});
                });
            });
        var i = (t.createSelector = a(u));
    }
]);
