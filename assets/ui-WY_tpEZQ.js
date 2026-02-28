import {a as o, R as j, b as oe, c as $e} from "./vendor-APaRTBvJ.js";
import {j as v} from "./animations-BcmLaeXN.js";
function S(e, t, {checkForDefaultPrevented: r=!0}={}) {
    return function(s) {
        if (e == null || e(s),
        r === !1 || !s.defaultPrevented)
            return t == null ? void 0 : t(s)
    }
}
function Ve(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t)
}
function Ee(...e) {
    return t => e.forEach(r => Ve(r, t))
}
function _(...e) {
    return o.useCallback(Ee(...e), e)
}
function ye(e, t=[]) {
    let r = [];
    function n(a, u) {
        const c = o.createContext(u)
          , d = r.length;
        r = [...r, u];
        function i(y) {
            const {scope: h, children: P, ...T} = y
              , m = (h == null ? void 0 : h[e][d]) || c
              , f = o.useMemo( () => T, Object.values(T));
            return v.jsx(m.Provider, {
                value: f,
                children: P
            })
        }
        function l(y, h) {
            const P = (h == null ? void 0 : h[e][d]) || c
              , T = o.useContext(P);
            if (T)
                return T;
            if (u !== void 0)
                return u;
            throw new Error(`\`${y}\` must be used within \`${a}\``)
        }
        return i.displayName = a + "Provider",
        [i, l]
    }
    const s = () => {
        const a = r.map(u => o.createContext(u));
        return function(c) {
            const d = (c == null ? void 0 : c[e]) || a;
            return o.useMemo( () => ({
                [`__scope${e}`]: {
                    ...c,
                    [e]: d
                }
            }), [c, d])
        }
    }
    ;
    return s.scopeName = e,
    [n, Ke(s, ...t)]
}
function Ke(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const r = () => {
        const n = e.map(s => ({
            useScope: s(),
            scopeName: s.scopeName
        }));
        return function(a) {
            const u = n.reduce( (c, {useScope: d, scopeName: i}) => {
                const y = d(a)[`__scope${i}`];
                return {
                    ...c,
                    ...y
                }
            }
            , {});
            return o.useMemo( () => ({
                [`__scope${t.scopeName}`]: u
            }), [u])
        }
    }
    ;
    return r.scopeName = t.scopeName,
    r
}
var z = o.forwardRef( (e, t) => {
    const {children: r, ...n} = e
      , s = o.Children.toArray(r)
      , a = s.find(ze);
    if (a) {
        const u = a.props.children
          , c = s.map(d => d === a ? o.Children.count(u) > 1 ? o.Children.only(null) : o.isValidElement(u) ? u.props.children : null : d);
        return v.jsx(Q, {
            ...n,
            ref: t,
            children: o.isValidElement(u) ? o.cloneElement(u, void 0, c) : null
        })
    }
    return v.jsx(Q, {
        ...n,
        ref: t,
        children: r
    })
}
);
z.displayName = "Slot";
var Q = o.forwardRef( (e, t) => {
    const {children: r, ...n} = e;
    if (o.isValidElement(r)) {
        const s = Ye(r);
        return o.cloneElement(r, {
            ...Xe(n, r.props),
            ref: t ? Ee(t, s) : s
        })
    }
    return o.Children.count(r) > 1 ? o.Children.only(null) : null
}
);
Q.displayName = "SlotClone";
var He = ({children: e}) => v.jsx(v.Fragment, {
    children: e
});
function ze(e) {
    return o.isValidElement(e) && e.type === He
}
function Xe(e, t) {
    const r = {
        ...t
    };
    for (const n in t) {
        const s = e[n]
          , a = t[n];
        /^on[A-Z]/.test(n) ? s && a ? r[n] = (...c) => {
            a(...c),
            s(...c)
        }
        : s && (r[n] = s) : n === "style" ? r[n] = {
            ...s,
            ...a
        } : n === "className" && (r[n] = [s, a].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...r
    }
}
function Ye(e) {
    var n, s;
    let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get
      , r = t && "isReactWarning"in t && t.isReactWarning;
    return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get,
    r = t && "isReactWarning"in t && t.isReactWarning,
    r ? e.props.ref : e.props.ref || e.ref)
}
function qe(e) {
    const t = e + "CollectionProvider"
      , [r,n] = ye(t)
      , [s,a] = r(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , u = P => {
        const {scope: T, children: m} = P
          , f = j.useRef(null)
          , b = j.useRef(new Map).current;
        return v.jsx(s, {
            scope: T,
            itemMap: b,
            collectionRef: f,
            children: m
        })
    }
    ;
    u.displayName = t;
    const c = e + "CollectionSlot"
      , d = j.forwardRef( (P, T) => {
        const {scope: m, children: f} = P
          , b = a(c, m)
          , w = _(T, b.collectionRef);
        return v.jsx(z, {
            ref: w,
            children: f
        })
    }
    );
    d.displayName = c;
    const i = e + "CollectionItemSlot"
      , l = "data-radix-collection-item"
      , y = j.forwardRef( (P, T) => {
        const {scope: m, children: f, ...b} = P
          , w = j.useRef(null)
          , x = _(T, w)
          , C = a(i, m);
        return j.useEffect( () => (C.itemMap.set(w, {
            ref: w,
            ...b
        }),
        () => void C.itemMap.delete(w))),
        v.jsx(z, {
            [l]: "",
            ref: x,
            children: f
        })
    }
    );
    y.displayName = i;
    function h(P) {
        const T = a(e + "CollectionConsumer", P);
        return j.useCallback( () => {
            const f = T.collectionRef.current;
            if (!f)
                return [];
            const b = Array.from(f.querySelectorAll(`[${l}]`));
            return Array.from(T.itemMap.values()).sort( (C, R) => b.indexOf(C.ref.current) - b.indexOf(R.ref.current))
        }
        , [T.collectionRef, T.itemMap])
    }
    return [{
        Provider: u,
        Slot: d,
        ItemSlot: y
    }, h, n]
}
var Ze = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"]
  , A = Ze.reduce( (e, t) => {
    const r = o.forwardRef( (n, s) => {
        const {asChild: a, ...u} = n
          , c = a ? z : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        v.jsx(c, {
            ...u,
            ref: s
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function ie(e, t) {
    e && oe.flushSync( () => e.dispatchEvent(t))
}
function I(e) {
    const t = o.useRef(e);
    return o.useEffect( () => {
        t.current = e
    }
    ),
    o.useMemo( () => (...r) => {
        var n;
        return (n = t.current) == null ? void 0 : n.call(t, ...r)
    }
    , [])
}
function he(e, t=globalThis == null ? void 0 : globalThis.document) {
    const r = I(e);
    o.useEffect( () => {
        const n = s => {
            s.key === "Escape" && r(s)
        }
        ;
        return t.addEventListener("keydown", n, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", n, {
            capture: !0
        })
    }
    , [r, t])
}
var Ge = "DismissableLayer", ee = "dismissableLayer.update", Je = "dismissableLayer.pointerDownOutside", Qe = "dismissableLayer.focusOutside", de, we = o.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), Te = o.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: r=!1, onEscapeKeyDown: n, onPointerDownOutside: s, onFocusOutside: a, onInteractOutside: u, onDismiss: c, ...d} = e
      , i = o.useContext(we)
      , [l,y] = o.useState(null)
      , h = (l == null ? void 0 : l.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,P] = o.useState({})
      , T = _(t, p => y(p))
      , m = Array.from(i.layers)
      , [f] = [...i.layersWithOutsidePointerEventsDisabled].slice(-1)
      , b = m.indexOf(f)
      , w = l ? m.indexOf(l) : -1
      , x = i.layersWithOutsidePointerEventsDisabled.size > 0
      , C = w >= b
      , R = tt(p => {
        const N = p.target
          , O = [...i.branches].some(L => L.contains(N));
        !C || O || (s == null || s(p),
        u == null || u(p),
        p.defaultPrevented || c == null || c())
    }
    , h)
      , g = nt(p => {
        const N = p.target;
        [...i.branches].some(L => L.contains(N)) || (a == null || a(p),
        u == null || u(p),
        p.defaultPrevented || c == null || c())
    }
    , h);
    return he(p => {
        w === i.layers.size - 1 && (n == null || n(p),
        !p.defaultPrevented && c && (p.preventDefault(),
        c()))
    }
    , h),
    o.useEffect( () => {
        if (l)
            return r && (i.layersWithOutsidePointerEventsDisabled.size === 0 && (de = h.body.style.pointerEvents,
            h.body.style.pointerEvents = "none"),
            i.layersWithOutsidePointerEventsDisabled.add(l)),
            i.layers.add(l),
            fe(),
            () => {
                r && i.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = de)
            }
    }
    , [l, h, r, i]),
    o.useEffect( () => () => {
        l && (i.layers.delete(l),
        i.layersWithOutsidePointerEventsDisabled.delete(l),
        fe())
    }
    , [l, i]),
    o.useEffect( () => {
        const p = () => P({});
        return document.addEventListener(ee, p),
        () => document.removeEventListener(ee, p)
    }
    , []),
    v.jsx(A.div, {
        ...d,
        ref: T,
        style: {
            pointerEvents: x ? C ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: S(e.onFocusCapture, g.onFocusCapture),
        onBlurCapture: S(e.onBlurCapture, g.onBlurCapture),
        onPointerDownCapture: S(e.onPointerDownCapture, R.onPointerDownCapture)
    })
}
);
Te.displayName = Ge;
var et = "DismissableLayerBranch"
  , Pe = o.forwardRef( (e, t) => {
    const r = o.useContext(we)
      , n = o.useRef(null)
      , s = _(t, n);
    return o.useEffect( () => {
        const a = n.current;
        if (a)
            return r.branches.add(a),
            () => {
                r.branches.delete(a)
            }
    }
    , [r.branches]),
    v.jsx(A.div, {
        ...e,
        ref: s
    })
}
);
Pe.displayName = et;
function tt(e, t=globalThis == null ? void 0 : globalThis.document) {
    const r = I(e)
      , n = o.useRef(!1)
      , s = o.useRef( () => {}
    );
    return o.useEffect( () => {
        const a = c => {
            if (c.target && !n.current) {
                let d = function() {
                    Ce(Je, r, i, {
                        discrete: !0
                    })
                };
                const i = {
                    originalEvent: c
                };
                c.pointerType === "touch" ? (t.removeEventListener("click", s.current),
                s.current = d,
                t.addEventListener("click", s.current, {
                    once: !0
                })) : d()
            } else
                t.removeEventListener("click", s.current);
            n.current = !1
        }
          , u = window.setTimeout( () => {
            t.addEventListener("pointerdown", a)
        }
        , 0);
        return () => {
            window.clearTimeout(u),
            t.removeEventListener("pointerdown", a),
            t.removeEventListener("click", s.current)
        }
    }
    , [t, r]),
    {
        onPointerDownCapture: () => n.current = !0
    }
}
function nt(e, t=globalThis == null ? void 0 : globalThis.document) {
    const r = I(e)
      , n = o.useRef(!1);
    return o.useEffect( () => {
        const s = a => {
            a.target && !n.current && Ce(Qe, r, {
                originalEvent: a
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", s),
        () => t.removeEventListener("focusin", s)
    }
    , [t, r]),
    {
        onFocusCapture: () => n.current = !0,
        onBlurCapture: () => n.current = !1
    }
}
function fe() {
    const e = new CustomEvent(ee);
    document.dispatchEvent(e)
}
function Ce(e, t, r, {discrete: n}) {
    const s = r.originalEvent.target
      , a = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: r
    });
    t && s.addEventListener(e, t, {
        once: !0
    }),
    n ? ie(s, a) : s.dispatchEvent(a)
}
var rt = Te
  , st = Pe
  , X = globalThis != null && globalThis.document ? o.useLayoutEffect : () => {}
  , ot = "Portal"
  , be = o.forwardRef( (e, t) => {
    var c;
    const {container: r, ...n} = e
      , [s,a] = o.useState(!1);
    X( () => a(!0), []);
    const u = r || s && ((c = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : c.body);
    return u ? $e.createPortal(v.jsx(A.div, {
        ...n,
        ref: t
    }), u) : null
}
);
be.displayName = ot;
function it(e, t) {
    return o.useReducer( (r, n) => t[r][n] ?? r, e)
}
var xe = e => {
    const {present: t, children: r} = e
      , n = at(t)
      , s = typeof r == "function" ? r({
        present: n.isPresent
    }) : o.Children.only(r)
      , a = _(n.ref, ct(s));
    return typeof r == "function" || n.isPresent ? o.cloneElement(s, {
        ref: a
    }) : null
}
;
xe.displayName = "Presence";
function at(e) {
    const [t,r] = o.useState()
      , n = o.useRef({})
      , s = o.useRef(e)
      , a = o.useRef("none")
      , u = e ? "mounted" : "unmounted"
      , [c,d] = it(u, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return o.useEffect( () => {
        const i = K(n.current);
        a.current = c === "mounted" ? i : "none"
    }
    , [c]),
    X( () => {
        const i = n.current
          , l = s.current;
        if (l !== e) {
            const h = a.current
              , P = K(i);
            e ? d("MOUNT") : P === "none" || (i == null ? void 0 : i.display) === "none" ? d("UNMOUNT") : d(l && h !== P ? "ANIMATION_OUT" : "UNMOUNT"),
            s.current = e
        }
    }
    , [e, d]),
    X( () => {
        if (t) {
            const i = y => {
                const P = K(n.current).includes(y.animationName);
                y.target === t && P && oe.flushSync( () => d("ANIMATION_END"))
            }
              , l = y => {
                y.target === t && (a.current = K(n.current))
            }
            ;
            return t.addEventListener("animationstart", l),
            t.addEventListener("animationcancel", i),
            t.addEventListener("animationend", i),
            () => {
                t.removeEventListener("animationstart", l),
                t.removeEventListener("animationcancel", i),
                t.removeEventListener("animationend", i)
            }
        } else
            d("ANIMATION_END")
    }
    , [t, d]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(c),
        ref: o.useCallback(i => {
            i && (n.current = getComputedStyle(i)),
            r(i)
        }
        , [])
    }
}
function K(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function ct(e) {
    var n, s;
    let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get
      , r = t && "isReactWarning"in t && t.isReactWarning;
    return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get,
    r = t && "isReactWarning"in t && t.isReactWarning,
    r ? e.props.ref : e.props.ref || e.ref)
}
function ut({prop: e, defaultProp: t, onChange: r= () => {}
}) {
    const [n,s] = lt({
        defaultProp: t,
        onChange: r
    })
      , a = e !== void 0
      , u = a ? e : n
      , c = I(r)
      , d = o.useCallback(i => {
        if (a) {
            const y = typeof i == "function" ? i(e) : i;
            y !== e && c(y)
        } else
            s(i)
    }
    , [a, e, s, c]);
    return [u, d]
}
function lt({defaultProp: e, onChange: t}) {
    const r = o.useState(e)
      , [n] = r
      , s = o.useRef(n)
      , a = I(t);
    return o.useEffect( () => {
        s.current !== n && (a(n),
        s.current = n)
    }
    , [n, s, a]),
    r
}
var dt = "VisuallyHidden"
  , Y = o.forwardRef( (e, t) => v.jsx(A.span, {
    ...e,
    ref: t,
    style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
    }
}));
Y.displayName = dt;
var kt = Y
  , ae = "ToastProvider"
  , [ce,ft,pt] = qe("Toast")
  , [Re,Bt] = ye("Toast", [pt])
  , [vt,q] = Re(ae)
  , ge = e => {
    const {__scopeToast: t, label: r="Notification", duration: n=5e3, swipeDirection: s="right", swipeThreshold: a=50, children: u} = e
      , [c,d] = o.useState(null)
      , [i,l] = o.useState(0)
      , y = o.useRef(!1)
      , h = o.useRef(!1);
    return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${ae}\`. Expected non-empty \`string\`.`),
    v.jsx(ce.Provider, {
        scope: t,
        children: v.jsx(vt, {
            scope: t,
            label: r,
            duration: n,
            swipeDirection: s,
            swipeThreshold: a,
            toastCount: i,
            viewport: c,
            onViewportChange: d,
            onToastAdd: o.useCallback( () => l(P => P + 1), []),
            onToastRemove: o.useCallback( () => l(P => P - 1), []),
            isFocusedToastEscapeKeyDownRef: y,
            isClosePausedRef: h,
            children: u
        })
    })
}
;
ge.displayName = ae;
var Se = "ToastViewport"
  , mt = ["F8"]
  , te = "toast.viewportPause"
  , ne = "toast.viewportResume"
  , Ne = o.forwardRef( (e, t) => {
    const {__scopeToast: r, hotkey: n=mt, label: s="Notifications ({hotkey})", ...a} = e
      , u = q(Se, r)
      , c = ft(r)
      , d = o.useRef(null)
      , i = o.useRef(null)
      , l = o.useRef(null)
      , y = o.useRef(null)
      , h = _(t, y, u.onViewportChange)
      , P = n.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , T = u.toastCount > 0;
    o.useEffect( () => {
        const f = b => {
            var x;
            n.every(C => b[C] || b.code === C) && ((x = y.current) == null || x.focus())
        }
        ;
        return document.addEventListener("keydown", f),
        () => document.removeEventListener("keydown", f)
    }
    , [n]),
    o.useEffect( () => {
        const f = d.current
          , b = y.current;
        if (T && f && b) {
            const w = () => {
                if (!u.isClosePausedRef.current) {
                    const g = new CustomEvent(te);
                    b.dispatchEvent(g),
                    u.isClosePausedRef.current = !0
                }
            }
              , x = () => {
                if (u.isClosePausedRef.current) {
                    const g = new CustomEvent(ne);
                    b.dispatchEvent(g),
                    u.isClosePausedRef.current = !1
                }
            }
              , C = g => {
                !f.contains(g.relatedTarget) && x()
            }
              , R = () => {
                f.contains(document.activeElement) || x()
            }
            ;
            return f.addEventListener("focusin", w),
            f.addEventListener("focusout", C),
            f.addEventListener("pointermove", w),
            f.addEventListener("pointerleave", R),
            window.addEventListener("blur", w),
            window.addEventListener("focus", x),
            () => {
                f.removeEventListener("focusin", w),
                f.removeEventListener("focusout", C),
                f.removeEventListener("pointermove", w),
                f.removeEventListener("pointerleave", R),
                window.removeEventListener("blur", w),
                window.removeEventListener("focus", x)
            }
        }
    }
    , [T, u.isClosePausedRef]);
    const m = o.useCallback( ({tabbingDirection: f}) => {
        const w = c().map(x => {
            const C = x.ref.current
              , R = [C, ...Nt(C)];
            return f === "forwards" ? R : R.reverse()
        }
        );
        return (f === "forwards" ? w.reverse() : w).flat()
    }
    , [c]);
    return o.useEffect( () => {
        const f = y.current;
        if (f) {
            const b = w => {
                var R, g, p;
                const x = w.altKey || w.ctrlKey || w.metaKey;
                if (w.key === "Tab" && !x) {
                    const N = document.activeElement
                      , O = w.shiftKey;
                    if (w.target === f && O) {
                        (R = i.current) == null || R.focus();
                        return
                    }
                    const F = m({
                        tabbingDirection: O ? "backwards" : "forwards"
                    })
                      , U = F.findIndex(E => E === N);
                    J(F.slice(U + 1)) ? w.preventDefault() : O ? (g = i.current) == null || g.focus() : (p = l.current) == null || p.focus()
                }
            }
            ;
            return f.addEventListener("keydown", b),
            () => f.removeEventListener("keydown", b)
        }
    }
    , [c, m]),
    v.jsxs(st, {
        ref: d,
        role: "region",
        "aria-label": s.replace("{hotkey}", P),
        tabIndex: -1,
        style: {
            pointerEvents: T ? void 0 : "none"
        },
        children: [T && v.jsx(re, {
            ref: i,
            onFocusFromOutsideViewport: () => {
                const f = m({
                    tabbingDirection: "forwards"
                });
                J(f)
            }
        }), v.jsx(ce.Slot, {
            scope: r,
            children: v.jsx(A.ol, {
                tabIndex: -1,
                ...a,
                ref: h
            })
        }), T && v.jsx(re, {
            ref: l,
            onFocusFromOutsideViewport: () => {
                const f = m({
                    tabbingDirection: "backwards"
                });
                J(f)
            }
        })]
    })
}
);
Ne.displayName = Se;
var Oe = "ToastFocusProxy"
  , re = o.forwardRef( (e, t) => {
    const {__scopeToast: r, onFocusFromOutsideViewport: n, ...s} = e
      , a = q(Oe, r);
    return v.jsx(Y, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...s,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: u => {
            var i;
            const c = u.relatedTarget;
            !((i = a.viewport) != null && i.contains(c)) && n()
        }
    })
}
);
re.displayName = Oe;
var Z = "Toast"
  , Et = "toast.swipeStart"
  , yt = "toast.swipeMove"
  , ht = "toast.swipeCancel"
  , wt = "toast.swipeEnd"
  , De = o.forwardRef( (e, t) => {
    const {forceMount: r, open: n, defaultOpen: s, onOpenChange: a, ...u} = e
      , [c=!0,d] = ut({
        prop: n,
        defaultProp: s,
        onChange: a
    });
    return v.jsx(xe, {
        present: r || c,
        children: v.jsx(Ct, {
            open: c,
            ...u,
            ref: t,
            onClose: () => d(!1),
            onPause: I(e.onPause),
            onResume: I(e.onResume),
            onSwipeStart: S(e.onSwipeStart, i => {
                i.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: S(e.onSwipeMove, i => {
                const {x: l, y} = i.detail.delta;
                i.currentTarget.setAttribute("data-swipe", "move"),
                i.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${l}px`),
                i.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${y}px`)
            }
            ),
            onSwipeCancel: S(e.onSwipeCancel, i => {
                i.currentTarget.setAttribute("data-swipe", "cancel"),
                i.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                i.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                i.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                i.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: S(e.onSwipeEnd, i => {
                const {x: l, y} = i.detail.delta;
                i.currentTarget.setAttribute("data-swipe", "end"),
                i.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                i.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                i.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${l}px`),
                i.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${y}px`),
                d(!1)
            }
            )
        })
    })
}
);
De.displayName = Z;
var [Tt,Pt] = Re(Z, {
    onClose() {}
})
  , Ct = o.forwardRef( (e, t) => {
    const {__scopeToast: r, type: n="foreground", duration: s, open: a, onClose: u, onEscapeKeyDown: c, onPause: d, onResume: i, onSwipeStart: l, onSwipeMove: y, onSwipeCancel: h, onSwipeEnd: P, ...T} = e
      , m = q(Z, r)
      , [f,b] = o.useState(null)
      , w = _(t, E => b(E))
      , x = o.useRef(null)
      , C = o.useRef(null)
      , R = s || m.duration
      , g = o.useRef(0)
      , p = o.useRef(R)
      , N = o.useRef(0)
      , {onToastAdd: O, onToastRemove: L} = m
      , W = I( () => {
        var D;
        (f == null ? void 0 : f.contains(document.activeElement)) && ((D = m.viewport) == null || D.focus()),
        u()
    }
    )
      , F = o.useCallback(E => {
        !E || E === 1 / 0 || (window.clearTimeout(N.current),
        g.current = new Date().getTime(),
        N.current = window.setTimeout(W, E))
    }
    , [W]);
    o.useEffect( () => {
        const E = m.viewport;
        if (E) {
            const D = () => {
                F(p.current),
                i == null || i()
            }
              , M = () => {
                const k = new Date().getTime() - g.current;
                p.current = p.current - k,
                window.clearTimeout(N.current),
                d == null || d()
            }
            ;
            return E.addEventListener(te, M),
            E.addEventListener(ne, D),
            () => {
                E.removeEventListener(te, M),
                E.removeEventListener(ne, D)
            }
        }
    }
    , [m.viewport, R, d, i, F]),
    o.useEffect( () => {
        a && !m.isClosePausedRef.current && F(R)
    }
    , [a, R, m.isClosePausedRef, F]),
    o.useEffect( () => (O(),
    () => L()), [O, L]);
    const U = o.useMemo( () => f ? je(f) : null, [f]);
    return m.viewport ? v.jsxs(v.Fragment, {
        children: [U && v.jsx(bt, {
            __scopeToast: r,
            role: "status",
            "aria-live": n === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: U
        }), v.jsx(Tt, {
            scope: r,
            onClose: W,
            children: oe.createPortal(v.jsx(ce.ItemSlot, {
                scope: r,
                children: v.jsx(rt, {
                    asChild: !0,
                    onEscapeKeyDown: S(c, () => {
                        m.isFocusedToastEscapeKeyDownRef.current || W(),
                        m.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: v.jsx(A.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": a ? "open" : "closed",
                        "data-swipe-direction": m.swipeDirection,
                        ...T,
                        ref: w,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: S(e.onKeyDown, E => {
                            E.key === "Escape" && (c == null || c(E.nativeEvent),
                            E.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0,
                            W()))
                        }
                        ),
                        onPointerDown: S(e.onPointerDown, E => {
                            E.button === 0 && (x.current = {
                                x: E.clientX,
                                y: E.clientY
                            })
                        }
                        ),
                        onPointerMove: S(e.onPointerMove, E => {
                            if (!x.current)
                                return;
                            const D = E.clientX - x.current.x
                              , M = E.clientY - x.current.y
                              , k = !!C.current
                              , B = ["left", "right"].includes(m.swipeDirection)
                              , $ = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max
                              , Be = B ? $(0, D) : 0
                              , Ue = B ? 0 : $(0, M)
                              , G = E.pointerType === "touch" ? 10 : 2
                              , V = {
                                x: Be,
                                y: Ue
                            }
                              , le = {
                                originalEvent: E,
                                delta: V
                            };
                            k ? (C.current = V,
                            H(yt, y, le, {
                                discrete: !1
                            })) : pe(V, m.swipeDirection, G) ? (C.current = V,
                            H(Et, l, le, {
                                discrete: !1
                            }),
                            E.target.setPointerCapture(E.pointerId)) : (Math.abs(D) > G || Math.abs(M) > G) && (x.current = null)
                        }
                        ),
                        onPointerUp: S(e.onPointerUp, E => {
                            const D = C.current
                              , M = E.target;
                            if (M.hasPointerCapture(E.pointerId) && M.releasePointerCapture(E.pointerId),
                            C.current = null,
                            x.current = null,
                            D) {
                                const k = E.currentTarget
                                  , B = {
                                    originalEvent: E,
                                    delta: D
                                };
                                pe(D, m.swipeDirection, m.swipeThreshold) ? H(wt, P, B, {
                                    discrete: !0
                                }) : H(ht, h, B, {
                                    discrete: !0
                                }),
                                k.addEventListener("click", $ => $.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), m.viewport)
        })]
    }) : null
}
)
  , bt = e => {
    const {__scopeToast: t, children: r, ...n} = e
      , s = q(Z, t)
      , [a,u] = o.useState(!1)
      , [c,d] = o.useState(!1);
    return gt( () => u(!0)),
    o.useEffect( () => {
        const i = window.setTimeout( () => d(!0), 1e3);
        return () => window.clearTimeout(i)
    }
    , []),
    c ? null : v.jsx(be, {
        asChild: !0,
        children: v.jsx(Y, {
            ...n,
            children: a && v.jsxs(v.Fragment, {
                children: [s.label, " ", r]
            })
        })
    })
}
  , xt = "ToastTitle"
  , Ae = o.forwardRef( (e, t) => {
    const {__scopeToast: r, ...n} = e;
    return v.jsx(A.div, {
        ...n,
        ref: t
    })
}
);
Ae.displayName = xt;
var Rt = "ToastDescription"
  , Le = o.forwardRef( (e, t) => {
    const {__scopeToast: r, ...n} = e;
    return v.jsx(A.div, {
        ...n,
        ref: t
    })
}
);
Le.displayName = Rt;
var Ie = "ToastAction"
  , _e = o.forwardRef( (e, t) => {
    const {altText: r, ...n} = e;
    return r.trim() ? v.jsx(Fe, {
        altText: r,
        asChild: !0,
        children: v.jsx(ue, {
            ...n,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${Ie}\`. Expected non-empty \`string\`.`),
    null)
}
);
_e.displayName = Ie;
var Me = "ToastClose"
  , ue = o.forwardRef( (e, t) => {
    const {__scopeToast: r, ...n} = e
      , s = Pt(Me, r);
    return v.jsx(Fe, {
        asChild: !0,
        children: v.jsx(A.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: S(e.onClick, s.onClose)
        })
    })
}
);
ue.displayName = Me;
var Fe = o.forwardRef( (e, t) => {
    const {__scopeToast: r, altText: n, ...s} = e;
    return v.jsx(A.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": n || void 0,
        ...s,
        ref: t
    })
}
);
function je(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(n => {
        if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent),
        St(n)) {
            const s = n.ariaHidden || n.hidden || n.style.display === "none"
              , a = n.dataset.radixToastAnnounceExclude === "";
            if (!s)
                if (a) {
                    const u = n.dataset.radixToastAnnounceAlt;
                    u && t.push(u)
                } else
                    t.push(...je(n))
        }
    }
    ),
    t
}
function H(e, t, r, {discrete: n}) {
    const s = r.originalEvent.currentTarget
      , a = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: r
    });
    t && s.addEventListener(e, t, {
        once: !0
    }),
    n ? ie(s, a) : s.dispatchEvent(a)
}
var pe = (e, t, r=0) => {
    const n = Math.abs(e.x)
      , s = Math.abs(e.y)
      , a = n > s;
    return t === "left" || t === "right" ? a && n > r : !a && s > r
}
;
function gt(e= () => {}
) {
    const t = I(e);
    X( () => {
        let r = 0
          , n = 0;
        return r = window.requestAnimationFrame( () => n = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(r),
            window.cancelAnimationFrame(n)
        }
    }
    , [t])
}
function St(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function Nt(e) {
    const t = []
      , r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: n => {
            const s = n.tagName === "INPUT" && n.type === "hidden";
            return n.disabled || n.hidden || s ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; r.nextNode(); )
        t.push(r.currentNode);
    return t
}
function J(e) {
    const t = document.activeElement;
    return e.some(r => r === t ? !0 : (r.focus(),
    document.activeElement !== t))
}
var Ut = ge, $t = Ne, Vt = De, Kt = Ae, Ht = Le, zt = _e, Xt = ue, Ot = "DismissableLayer", se = "dismissableLayer.update", Dt = "dismissableLayer.pointerDownOutside", At = "dismissableLayer.focusOutside", ve, We = o.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), Lt = o.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: r=!1, onEscapeKeyDown: n, onPointerDownOutside: s, onFocusOutside: a, onInteractOutside: u, onDismiss: c, ...d} = e
      , i = o.useContext(We)
      , [l,y] = o.useState(null)
      , h = (l == null ? void 0 : l.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,P] = o.useState({})
      , T = _(t, p => y(p))
      , m = Array.from(i.layers)
      , [f] = [...i.layersWithOutsidePointerEventsDisabled].slice(-1)
      , b = m.indexOf(f)
      , w = l ? m.indexOf(l) : -1
      , x = i.layersWithOutsidePointerEventsDisabled.size > 0
      , C = w >= b
      , R = Mt(p => {
        const N = p.target
          , O = [...i.branches].some(L => L.contains(N));
        !C || O || (s == null || s(p),
        u == null || u(p),
        p.defaultPrevented || c == null || c())
    }
    , h)
      , g = Ft(p => {
        const N = p.target;
        [...i.branches].some(L => L.contains(N)) || (a == null || a(p),
        u == null || u(p),
        p.defaultPrevented || c == null || c())
    }
    , h);
    return he(p => {
        w === i.layers.size - 1 && (n == null || n(p),
        !p.defaultPrevented && c && (p.preventDefault(),
        c()))
    }
    , h),
    o.useEffect( () => {
        if (l)
            return r && (i.layersWithOutsidePointerEventsDisabled.size === 0 && (ve = h.body.style.pointerEvents,
            h.body.style.pointerEvents = "none"),
            i.layersWithOutsidePointerEventsDisabled.add(l)),
            i.layers.add(l),
            me(),
            () => {
                r && i.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = ve)
            }
    }
    , [l, h, r, i]),
    o.useEffect( () => () => {
        l && (i.layers.delete(l),
        i.layersWithOutsidePointerEventsDisabled.delete(l),
        me())
    }
    , [l, i]),
    o.useEffect( () => {
        const p = () => P({});
        return document.addEventListener(se, p),
        () => document.removeEventListener(se, p)
    }
    , []),
    v.jsx(A.div, {
        ...d,
        ref: T,
        style: {
            pointerEvents: x ? C ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: S(e.onFocusCapture, g.onFocusCapture),
        onBlurCapture: S(e.onBlurCapture, g.onBlurCapture),
        onPointerDownCapture: S(e.onPointerDownCapture, R.onPointerDownCapture)
    })
}
);
Lt.displayName = Ot;
var It = "DismissableLayerBranch"
  , _t = o.forwardRef( (e, t) => {
    const r = o.useContext(We)
      , n = o.useRef(null)
      , s = _(t, n);
    return o.useEffect( () => {
        const a = n.current;
        if (a)
            return r.branches.add(a),
            () => {
                r.branches.delete(a)
            }
    }
    , [r.branches]),
    v.jsx(A.div, {
        ...e,
        ref: s
    })
}
);
_t.displayName = It;
function Mt(e, t=globalThis == null ? void 0 : globalThis.document) {
    const r = I(e)
      , n = o.useRef(!1)
      , s = o.useRef( () => {}
    );
    return o.useEffect( () => {
        const a = c => {
            if (c.target && !n.current) {
                let d = function() {
                    ke(Dt, r, i, {
                        discrete: !0
                    })
                };
                const i = {
                    originalEvent: c
                };
                c.pointerType === "touch" ? (t.removeEventListener("click", s.current),
                s.current = d,
                t.addEventListener("click", s.current, {
                    once: !0
                })) : d()
            } else
                t.removeEventListener("click", s.current);
            n.current = !1
        }
          , u = window.setTimeout( () => {
            t.addEventListener("pointerdown", a)
        }
        , 0);
        return () => {
            window.clearTimeout(u),
            t.removeEventListener("pointerdown", a),
            t.removeEventListener("click", s.current)
        }
    }
    , [t, r]),
    {
        onPointerDownCapture: () => n.current = !0
    }
}
function Ft(e, t=globalThis == null ? void 0 : globalThis.document) {
    const r = I(e)
      , n = o.useRef(!1);
    return o.useEffect( () => {
        const s = a => {
            a.target && !n.current && ke(At, r, {
                originalEvent: a
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", s),
        () => t.removeEventListener("focusin", s)
    }
    , [t, r]),
    {
        onFocusCapture: () => n.current = !0,
        onBlurCapture: () => n.current = !1
    }
}
function me() {
    const e = new CustomEvent(se);
    document.dispatchEvent(e)
}
function ke(e, t, r, {discrete: n}) {
    const s = r.originalEvent.target
      , a = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: r
    });
    t && s.addEventListener(e, t, {
        once: !0
    }),
    n ? ie(s, a) : s.dispatchEvent(a)
}
export {zt as A, Xt as C, Ht as D, Ut as P, Vt as R, He as S, Kt as T, $t as V, A as a, _ as b, ye as c, I as d, Lt as e, kt as f, S as g, z as h, X as u};
