(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [935], {
        1338: function(e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/webmap", function() {
                return a(6576)
            }])
        },
        6576: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                __toc: function() {
                    return c
                },
                default: function() {
                    return p
                }
            });
            var n = a(5250),
                r = a(7147),
                o = a(7298),
                l = a(79),
                i = e => {
                    let {
                        src: t
                    } = e, [a, r] = (0, l.useState)(t);
                    return (0, l.useEffect)(() => {
                        let {
                            protocol: e,
                            hostname: t,
                            port: a
                        } = window.location, n = "".concat(e, "//").concat(t, ":").concat(a, "/map/index.html");
                        r(n)
                    }, []), (0, n.jsx)("iframe", {
                        src: a,
                        style: {
                            position: "absolute",
                            top: "4rem",
                            left: 0,
                            width: "100%",
                            height: "calc(100% - 4rem)",
                            border: 0
                        }
                    })
                };
            let c = [];

            function u(e) {
                return (0, n.jsx)(i, {})
            }
            var p = (0, r.j)({
                MDXContent: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        {
                            wrapper: t
                        } = Object.assign({}, (0, o.a)(), e.components);
                    return t ? (0, n.jsx)(t, { ...e,
                        children: (0, n.jsx)(u, { ...e
                        })
                    }) : u(e)
                },
                pageOpts: {
                    filePath: "pages/webmap.mdx",
                    route: "/webmap",
                    frontMatter: {
                        title: "RP WebMap"
                    },
                    title: "RP WebMap",
                    headings: c
                },
                pageNextRoute: "/webmap"
            })
        },
        7147: function(e, t, a) {
            "use strict";
            a.d(t, {
                j: function() {
                    return m
                }
            });
            var n, r = a(4619),
                o = a.n(r),
                l = a(4594),
                i = a(79);
            a(7298);
            var c = a(5250),
                u = (0, i.createContext)(!1),
                p = a(1403);

            function s({
                __nextra_pageMap: e,
                __nextra_dynamic_opts: t,
                ...a
            }) {
                let {
                    context: n,
                    Layout: r
                } = function() {
                    let e = globalThis[l.eZ],
                        {
                            route: t
                        } = (0, p.useRouter)();
                    (0, i.useState)({})[1];
                    let a = e.context[t];
                    if (!a) throw Error("No content found for the current route. This is a Nextra bug.");
                    return {
                        context: a,
                        Layout: e.Layout
                    }
                }(), {
                    Content: o,
                    ...s
                } = n;
                if (e && (s.pageOpts = { ...s.pageOpts,
                        pageMap: e
                    }), t) {
                    let {
                        headings: e,
                        title: a,
                        frontMatter: n
                    } = JSON.parse(t);
                    s.pageOpts = { ...s.pageOpts,
                        headings: e,
                        title: a,
                        frontMatter: n
                    }
                }
                return (0, c.jsx)(r, { ...s,
                    pageProps: a,
                    children: (0, c.jsx)(u.Provider, {
                        value: a,
                        children: (0, c.jsx)(o, { ...a
                        })
                    })
                })
            }
            var f = a(8658),
                d = a(9199),
                g = a(439);

            function h(e) {
                return g(e.replaceAll(/[-_]/g, " "))
            }

            function b(e) {
                return !!e && "object" == typeof e && "folder" === e.type
            }

            function x(e) {
                return Object.fromEntries(Object.entries(e).map(([e, t]) => {
                    if (b(t)) {
                        let a = e.replace("/", "");
                        return [a, t.title || h(a)]
                    }
                    return [e, t || h(e)]
                }))
            }

            function m({
                pageNextRoute: e,
                pageOpts: t,
                nextraLayout: a,
                themeConfig: r,
                MDXContent: i,
                hot: c,
                pageOptsChecksum: u,
                dynamicMetaModules: p = []
            }) {
                var g;
                "undefined" == typeof window && (globalThis.__nextra_resolvePageMap = async () => {
                    if (n) return n;
                    let e = JSON.parse(JSON.stringify(h.pageMap));
                    return await Promise.all(p.map(async ([t, {
                        metaObjectKeyPath: a,
                        metaParentKeyPath: n
                    }]) => {
                        let r = await t,
                            l = await r.default(),
                            i = o()(e, a);
                        i.data = l;
                        let c = o()(e, n);
                        ! function e(t, a, n = !0) {
                            if (n) {
                                e(t, {
                                    kind: "Meta",
                                    data: a.data,
                                    locale: a.locale
                                }, !1), a.data = x(a.data);
                                return
                            }
                            for (let [n, o] of Object.entries(a.data)) {
                                if (!b(o)) {
                                    var r;
                                    if ("*" === n) continue;
                                    t.children.push({
                                        kind: "MdxPage",
                                        ...a.locale && {
                                            locale: a.locale
                                        },
                                        name: n,
                                        route: (r = t.route, d(f.join(r, n.replace(/^index$/, ""))))
                                    });
                                    continue
                                }
                                let l = n.replace("/", ""),
                                    i = {
                                        kind: "Folder",
                                        name: l,
                                        route: `${t.route}/${l}`,
                                        children: [{
                                            kind: "Meta",
                                            ...a.locale && {
                                                locale: a.locale
                                            },
                                            data: x(o.items)
                                        }]
                                    };
                                t.children.push(i), e(i, {
                                    kind: "Meta",
                                    data: o.items,
                                    locale: a.locale
                                }, !1)
                            }
                        }(c, i)
                    })), n = e
                });
                let h = globalThis[g = l.eZ] || (globalThis[g] = Object.create(null));
                return t.pageMap ? (h.pageMap = t.pageMap, h.Layout = a) : (t = { ...t,
                    pageMap: h.pageMap,
                    flexsearch: h.flexsearch
                }, r = h.themeConfig), t = {
                    frontMatter: {},
                    ...t
                }, h.route = t.route, h.context || (h.context = Object.create(null)), h.context[e] = {
                    Content: i,
                    pageOpts: t,
                    themeConfig: r
                }, s
            }
        }
    },
    function(e) {
        e.O(0, [220, 774, 888, 179], function() {
            return e(e.s = 1338)
        }), _N_E = e.O()
    }
]);