var Ms = Object.defineProperty;
var vn = e => {
    throw TypeError(e)
}
;
var Rs = (e, t, r) => t in e ? Ms(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r;
var Ne = (e, t, r) => Rs(e, typeof t != "symbol" ? t + "" : t, r)
  , Ar = (e, t, r) => t.has(e) || vn("Cannot " + r);
var b = (e, t, r) => (Ar(e, t, "read from private field"),
r ? r.call(e) : t.get(e))
  , F = (e, t, r) => t.has(e) ? vn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r)
  , I = (e, t, r, n) => (Ar(e, t, "write to private field"),
n ? n.call(e, r) : t.set(e, r),
r)
  , re = (e, t, r) => (Ar(e, t, "access private method"),
r);
var Yt = (e, t, r, n) => ({
    set _(o) {
        I(e, t, o, r)
    },
    get _() {
        return b(e, t, n)
    }
});
import {j as a, m as P} from "./animations-BcmLaeXN.js";
import {a as x, d as Is, R as C, c as Ls, b as Ds, g as Zr, u as Hs, B as $s, e as zs, f as bn} from "./vendor-APaRTBvJ.js";
import {V as lo, R as co, A as uo, C as ho, T as fo, D as po, P as Fs, a as pr, u as Lt, c as _s, b as Vt, d as Bs, e as Vs, S as qs, f as Us, g as at, h as Ws} from "./ui-WY_tpEZQ.js";
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        n(o);
    new MutationObserver(o => {
        for (const s of o)
            if (s.type === "childList")
                for (const i of s.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && n(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function r(o) {
        const s = {};
        return o.integrity && (s.integrity = o.integrity),
        o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function n(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const s = r(o);
        fetch(o.href, s)
    }
}
)();
const Gs = 1
  , Ks = 1e6;
let Nr = 0;
function Qs() {
    return Nr = (Nr + 1) % Number.MAX_SAFE_INTEGER,
    Nr.toString()
}
const Sr = new Map
  , xn = e => {
    if (Sr.has(e))
        return;
    const t = setTimeout( () => {
        Sr.delete(e),
        It({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , Ks);
    Sr.set(e, t)
}
  , Ys = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, Gs)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(r => r.id === t.toast.id ? {
                ...r,
                ...t.toast
            } : r)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: r} = t;
            return r ? xn(r) : e.toasts.forEach(n => {
                xn(n.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(n => n.id === r || r === void 0 ? {
                    ...n,
                    open: !1
                } : n)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(r => r.id !== t.toastId)
        }
    }
}
  , or = [];
let sr = {
    toasts: []
};
function It(e) {
    sr = Ys(sr, e),
    or.forEach(t => {
        t(sr)
    }
    )
}
function Xs({...e}) {
    const t = Qs()
      , r = o => It({
        type: "UPDATE_TOAST",
        toast: {
            ...o,
            id: t
        }
    })
      , n = () => It({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return It({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || n()
            }
        }
    }),
    {
        id: t,
        dismiss: n,
        update: r
    }
}
function Js() {
    const [e,t] = x.useState(sr);
    return x.useEffect( () => (or.push(t),
    () => {
        const r = or.indexOf(t);
        r > -1 && or.splice(r, 1)
    }
    ), [e]),
    {
        ...e,
        toast: Xs,
        dismiss: r => It({
            type: "DISMISS_TOAST",
            toastId: r
        })
    }
}
function mo(e) {
    var t, r, n = "";
    if (typeof e == "string" || typeof e == "number")
        n += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (r = mo(e[t])) && (n && (n += " "),
                n += r)
        } else
            for (r in e)
                e[r] && (n && (n += " "),
                n += r);
    return n
}
function go() {
    for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
        (e = arguments[r]) && (t = mo(e)) && (n && (n += " "),
        n += t);
    return n
}
const wn = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , jn = go
  , en = (e, t) => r => {
    var n;
    if ((t == null ? void 0 : t.variants) == null)
        return jn(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
    const {variants: o, defaultVariants: s} = t
      , i = Object.keys(o).map(d => {
        const h = r == null ? void 0 : r[d]
          , f = s == null ? void 0 : s[d];
        if (h === null)
            return null;
        const u = wn(h) || wn(f);
        return o[d][u]
    }
    )
      , l = r && Object.entries(r).reduce( (d, h) => {
        let[f,u] = h;
        return u === void 0 || (d[f] = u),
        d
    }
    , {})
      , c = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce( (d, h) => {
        let {class: f, className: u, ...p} = h;
        return Object.entries(p).every(m => {
            let[g,v] = m;
            return Array.isArray(v) ? v.includes({
                ...s,
                ...l
            }[g]) : {
                ...s,
                ...l
            }[g] === v
        }
        ) ? [...d, f, u] : d
    }
    , []);
    return jn(e, i, c, r == null ? void 0 : r.class, r == null ? void 0 : r.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zs = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , yo = (...e) => e.filter( (t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ei = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ti = x.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: r=2, absoluteStrokeWidth: n, className: o="", children: s, iconNode: i, ...l}, c) => x.createElement("svg", {
    ref: c,
    ...ei,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: n ? Number(r) * 24 / Number(t) : r,
    className: yo("lucide", o),
    ...l
}, [...i.map( ([d,h]) => x.createElement(d, h)), ...Array.isArray(s) ? s : [s]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z = (e, t) => {
    const r = x.forwardRef( ({className: n, ...o}, s) => x.createElement(ti, {
        ref: s,
        iconNode: t,
        className: yo(`lucide-${Zs(e)}`, n),
        ...o
    }));
    return r.displayName = `${e}`,
    r
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ri = Z("Award", [["path", {
    d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
    key: "1yiouv"
}], ["circle", {
    cx: "12",
    cy: "8",
    r: "6",
    key: "1vp47v"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ni = Z("BookOpen", [["path", {
    d: "M12 7v14",
    key: "1akyts"
}], ["path", {
    d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
    key: "ruj8y"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vo = Z("Bot", [["path", {
    d: "M12 8V4H8",
    key: "hb8ula"
}], ["rect", {
    width: "16",
    height: "12",
    x: "4",
    y: "8",
    rx: "2",
    key: "enze0r"
}], ["path", {
    d: "M2 14h2",
    key: "vft8re"
}], ["path", {
    d: "M20 14h2",
    key: "4cs60a"
}], ["path", {
    d: "M15 13v2",
    key: "1xurst"
}], ["path", {
    d: "M9 13v2",
    key: "rq6x2g"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oi = Z("Briefcase", [["path", {
    d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
    key: "jecpp"
}], ["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "6",
    rx: "2",
    key: "i6l2r4"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const si = Z("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ii = Z("ChevronUp", [["path", {
    d: "m18 15-6-6-6 6",
    key: "153udz"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ai = Z("Code", [["polyline", {
    points: "16 18 22 12 16 6",
    key: "z7tu5w"
}], ["polyline", {
    points: "8 6 2 12 8 18",
    key: "1eg1df"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ir = Z("Github", [["path", {
    d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
    key: "tonef"
}], ["path", {
    d: "M9 18c-4.51 2-5-2-7-2",
    key: "9comsn"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bo = Z("Globe", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
    key: "13o1zl"
}], ["path", {
    d: "M2 12h20",
    key: "9i4pu4"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const li = Z("Link", [["path", {
    d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
    key: "1cjeqo"
}], ["path", {
    d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    key: "19qd67"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xo = Z("Mail", [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cn = Z("Monitor", [["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "3",
    rx: "2",
    key: "48i651"
}], ["line", {
    x1: "8",
    x2: "16",
    y1: "21",
    y2: "21",
    key: "1svkeh"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "17",
    y2: "21",
    key: "vw1qmm"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ci = Z("Rocket", [["path", {
    d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
    key: "m3kijz"
}], ["path", {
    d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
    key: "1fmvmk"
}], ["path", {
    d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
    key: "1f8sc4"
}], ["path", {
    d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
    key: "qeys4"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kn = Z("Sparkles", [["path", {
    d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
    key: "4pj2yx"
}], ["path", {
    d: "M20 3v4",
    key: "1olli1"
}], ["path", {
    d: "M22 5h-4",
    key: "1gvqau"
}], ["path", {
    d: "M4 17v2",
    key: "vumght"
}], ["path", {
    d: "M5 18H3",
    key: "zchphs"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wo = Z("Terminal", [["polyline", {
    points: "4 17 10 11 4 5",
    key: "akl6gq"
}], ["line", {
    x1: "12",
    x2: "20",
    y1: "19",
    y2: "19",
    key: "q2wloq"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const di = Z("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jo = Z("Youtube", [["path", {
    d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
    key: "1q2vi4"
}], ["path", {
    d: "m10 15 5-3-5-3z",
    key: "1jp15x"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ui = Z("Zap", [["path", {
    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
    key: "1xq2db"
}]])
  , tn = "-"
  , hi = e => {
    const t = pi(e)
      , {conflictingClassGroups: r, conflictingClassGroupModifiers: n} = e;
    return {
        getClassGroupId: i => {
            const l = i.split(tn);
            return l[0] === "" && l.length !== 1 && l.shift(),
            Co(l, t) || fi(i)
        }
        ,
        getConflictingClassGroupIds: (i, l) => {
            const c = r[i] || [];
            return l && n[i] ? [...c, ...n[i]] : c
        }
    }
}
  , Co = (e, t) => {
    var i;
    if (e.length === 0)
        return t.classGroupId;
    const r = e[0]
      , n = t.nextPart.get(r)
      , o = n ? Co(e.slice(1), n) : void 0;
    if (o)
        return o;
    if (t.validators.length === 0)
        return;
    const s = e.join(tn);
    return (i = t.validators.find( ({validator: l}) => l(s))) == null ? void 0 : i.classGroupId
}
  , Tn = /^\[(.+)\]$/
  , fi = e => {
    if (Tn.test(e)) {
        const t = Tn.exec(e)[1]
          , r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (r)
            return "arbitrary.." + r
    }
}
  , pi = e => {
    const {theme: t, prefix: r} = e
      , n = {
        nextPart: new Map,
        validators: []
    };
    return gi(Object.entries(e.classGroups), r).forEach( ([s,i]) => {
        _r(i, n, s, t)
    }
    ),
    n
}
  , _r = (e, t, r, n) => {
    e.forEach(o => {
        if (typeof o == "string") {
            const s = o === "" ? t : An(t, o);
            s.classGroupId = r;
            return
        }
        if (typeof o == "function") {
            if (mi(o)) {
                _r(o(n), t, r, n);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: r
            });
            return
        }
        Object.entries(o).forEach( ([s,i]) => {
            _r(i, An(t, s), r, n)
        }
        )
    }
    )
}
  , An = (e, t) => {
    let r = e;
    return t.split(tn).forEach(n => {
        r.nextPart.has(n) || r.nextPart.set(n, {
            nextPart: new Map,
            validators: []
        }),
        r = r.nextPart.get(n)
    }
    ),
    r
}
  , mi = e => e.isThemeGetter
  , gi = (e, t) => t ? e.map( ([r,n]) => {
    const o = n.map(s => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map( ([i,l]) => [t + i, l])) : s);
    return [r, o]
}
) : e
  , yi = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , r = new Map
      , n = new Map;
    const o = (s, i) => {
        r.set(s, i),
        t++,
        t > e && (t = 0,
        n = r,
        r = new Map)
    }
    ;
    return {
        get(s) {
            let i = r.get(s);
            if (i !== void 0)
                return i;
            if ((i = n.get(s)) !== void 0)
                return o(s, i),
                i
        },
        set(s, i) {
            r.has(s) ? r.set(s, i) : o(s, i)
        }
    }
}
  , ko = "!"
  , vi = e => {
    const {separator: t, experimentalParseClassName: r} = e
      , n = t.length === 1
      , o = t[0]
      , s = t.length
      , i = l => {
        const c = [];
        let d = 0, h = 0, f;
        for (let v = 0; v < l.length; v++) {
            let y = l[v];
            if (d === 0) {
                if (y === o && (n || l.slice(v, v + s) === t)) {
                    c.push(l.slice(h, v)),
                    h = v + s;
                    continue
                }
                if (y === "/") {
                    f = v;
                    continue
                }
            }
            y === "[" ? d++ : y === "]" && d--
        }
        const u = c.length === 0 ? l : l.substring(h)
          , p = u.startsWith(ko)
          , m = p ? u.substring(1) : u
          , g = f && f > h ? f - h : void 0;
        return {
            modifiers: c,
            hasImportantModifier: p,
            baseClassName: m,
            maybePostfixModifierPosition: g
        }
    }
    ;
    return r ? l => r({
        className: l,
        parseClassName: i
    }) : i
}
  , bi = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let r = [];
    return e.forEach(n => {
        n[0] === "[" ? (t.push(...r.sort(), n),
        r = []) : r.push(n)
    }
    ),
    t.push(...r.sort()),
    t
}
  , xi = e => ({
    cache: yi(e.cacheSize),
    parseClassName: vi(e),
    ...hi(e)
})
  , wi = /\s+/
  , ji = (e, t) => {
    const {parseClassName: r, getClassGroupId: n, getConflictingClassGroupIds: o} = t
      , s = []
      , i = e.trim().split(wi);
    let l = "";
    for (let c = i.length - 1; c >= 0; c -= 1) {
        const d = i[c]
          , {modifiers: h, hasImportantModifier: f, baseClassName: u, maybePostfixModifierPosition: p} = r(d);
        let m = !!p
          , g = n(m ? u.substring(0, p) : u);
        if (!g) {
            if (!m) {
                l = d + (l.length > 0 ? " " + l : l);
                continue
            }
            if (g = n(u),
            !g) {
                l = d + (l.length > 0 ? " " + l : l);
                continue
            }
            m = !1
        }
        const v = bi(h).join(":")
          , y = f ? v + ko : v
          , w = y + g;
        if (s.includes(w))
            continue;
        s.push(w);
        const j = o(g, m);
        for (let k = 0; k < j.length; ++k) {
            const T = j[k];
            s.push(y + T)
        }
        l = d + (l.length > 0 ? " " + l : l)
    }
    return l
}
;
function Ci() {
    let e = 0, t, r, n = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (r = To(t)) && (n && (n += " "),
        n += r);
    return n
}
const To = e => {
    if (typeof e == "string")
        return e;
    let t, r = "";
    for (let n = 0; n < e.length; n++)
        e[n] && (t = To(e[n])) && (r && (r += " "),
        r += t);
    return r
}
;
function ki(e, ...t) {
    let r, n, o, s = i;
    function i(c) {
        const d = t.reduce( (h, f) => f(h), e());
        return r = xi(d),
        n = r.cache.get,
        o = r.cache.set,
        s = l,
        l(c)
    }
    function l(c) {
        const d = n(c);
        if (d)
            return d;
        const h = ji(c, r);
        return o(c, h),
        h
    }
    return function() {
        return s(Ci.apply(null, arguments))
    }
}
const Q = e => {
    const t = r => r[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , Ao = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , Ti = /^\d+\/\d+$/
  , Ai = new Set(["px", "full", "screen"])
  , Ni = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , Si = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , Ei = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , Pi = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , Oi = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , Se = e => ut(e) || Ai.has(e) || Ti.test(e)
  , He = e => At(e, "length", zi)
  , ut = e => !!e && !Number.isNaN(Number(e))
  , Er = e => At(e, "number", ut)
  , Pt = e => !!e && Number.isInteger(Number(e))
  , Mi = e => e.endsWith("%") && ut(e.slice(0, -1))
  , R = e => Ao.test(e)
  , $e = e => Ni.test(e)
  , Ri = new Set(["length", "size", "percentage"])
  , Ii = e => At(e, Ri, No)
  , Li = e => At(e, "position", No)
  , Di = new Set(["image", "url"])
  , Hi = e => At(e, Di, _i)
  , $i = e => At(e, "", Fi)
  , Ot = () => !0
  , At = (e, t, r) => {
    const n = Ao.exec(e);
    return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1
}
  , zi = e => Si.test(e) && !Ei.test(e)
  , No = () => !1
  , Fi = e => Pi.test(e)
  , _i = e => Oi.test(e)
  , Bi = () => {
    const e = Q("colors")
      , t = Q("spacing")
      , r = Q("blur")
      , n = Q("brightness")
      , o = Q("borderColor")
      , s = Q("borderRadius")
      , i = Q("borderSpacing")
      , l = Q("borderWidth")
      , c = Q("contrast")
      , d = Q("grayscale")
      , h = Q("hueRotate")
      , f = Q("invert")
      , u = Q("gap")
      , p = Q("gradientColorStops")
      , m = Q("gradientColorStopPositions")
      , g = Q("inset")
      , v = Q("margin")
      , y = Q("opacity")
      , w = Q("padding")
      , j = Q("saturate")
      , k = Q("scale")
      , T = Q("sepia")
      , N = Q("skew")
      , L = Q("space")
      , S = Q("translate")
      , $ = () => ["auto", "contain", "none"]
      , W = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , _ = () => ["auto", R, t]
      , E = () => [R, t]
      , B = () => ["", Se, He]
      , z = () => ["auto", ut, R]
      , Y = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , D = () => ["solid", "dashed", "dotted", "double", "none"]
      , V = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , A = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , H = () => ["", "0", R]
      , ee = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , O = () => [ut, R];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [Ot],
            spacing: [Se, He],
            blur: ["none", "", $e, R],
            brightness: O(),
            borderColor: [e],
            borderRadius: ["none", "", "full", $e, R],
            borderSpacing: E(),
            borderWidth: B(),
            contrast: O(),
            grayscale: H(),
            hueRotate: O(),
            invert: H(),
            gap: E(),
            gradientColorStops: [e],
            gradientColorStopPositions: [Mi, He],
            inset: _(),
            margin: _(),
            opacity: O(),
            padding: E(),
            saturate: O(),
            scale: O(),
            sepia: H(),
            skew: O(),
            space: E(),
            translate: E()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", R]
            }],
            container: ["container"],
            columns: [{
                columns: [$e]
            }],
            "break-after": [{
                "break-after": ee()
            }],
            "break-before": [{
                "break-before": ee()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...Y(), R]
            }],
            overflow: [{
                overflow: W()
            }],
            "overflow-x": [{
                "overflow-x": W()
            }],
            "overflow-y": [{
                "overflow-y": W()
            }],
            overscroll: [{
                overscroll: $()
            }],
            "overscroll-x": [{
                "overscroll-x": $()
            }],
            "overscroll-y": [{
                "overscroll-y": $()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [g]
            }],
            "inset-x": [{
                "inset-x": [g]
            }],
            "inset-y": [{
                "inset-y": [g]
            }],
            start: [{
                start: [g]
            }],
            end: [{
                end: [g]
            }],
            top: [{
                top: [g]
            }],
            right: [{
                right: [g]
            }],
            bottom: [{
                bottom: [g]
            }],
            left: [{
                left: [g]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", Pt, R]
            }],
            basis: [{
                basis: _()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", R]
            }],
            grow: [{
                grow: H()
            }],
            shrink: [{
                shrink: H()
            }],
            order: [{
                order: ["first", "last", "none", Pt, R]
            }],
            "grid-cols": [{
                "grid-cols": [Ot]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", Pt, R]
                }, R]
            }],
            "col-start": [{
                "col-start": z()
            }],
            "col-end": [{
                "col-end": z()
            }],
            "grid-rows": [{
                "grid-rows": [Ot]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [Pt, R]
                }, R]
            }],
            "row-start": [{
                "row-start": z()
            }],
            "row-end": [{
                "row-end": z()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", R]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", R]
            }],
            gap: [{
                gap: [u]
            }],
            "gap-x": [{
                "gap-x": [u]
            }],
            "gap-y": [{
                "gap-y": [u]
            }],
            "justify-content": [{
                justify: ["normal", ...A()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...A(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...A(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [w]
            }],
            px: [{
                px: [w]
            }],
            py: [{
                py: [w]
            }],
            ps: [{
                ps: [w]
            }],
            pe: [{
                pe: [w]
            }],
            pt: [{
                pt: [w]
            }],
            pr: [{
                pr: [w]
            }],
            pb: [{
                pb: [w]
            }],
            pl: [{
                pl: [w]
            }],
            m: [{
                m: [v]
            }],
            mx: [{
                mx: [v]
            }],
            my: [{
                my: [v]
            }],
            ms: [{
                ms: [v]
            }],
            me: [{
                me: [v]
            }],
            mt: [{
                mt: [v]
            }],
            mr: [{
                mr: [v]
            }],
            mb: [{
                mb: [v]
            }],
            ml: [{
                ml: [v]
            }],
            "space-x": [{
                "space-x": [L]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [L]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", R, t]
            }],
            "min-w": [{
                "min-w": [R, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [R, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [$e]
                }, $e]
            }],
            h: [{
                h: [R, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [R, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [R, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [R, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", $e, He]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Er]
            }],
            "font-family": [{
                font: [Ot]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", R]
            }],
            "line-clamp": [{
                "line-clamp": ["none", ut, Er]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Se, R]
            }],
            "list-image": [{
                "list-image": ["none", R]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", R]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [y]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [y]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...D(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", Se, He]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", Se, R]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: E()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", R]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", R]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [y]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...Y(), Li]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", Ii]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, Hi]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [m]
            }],
            "gradient-via-pos": [{
                via: [m]
            }],
            "gradient-to-pos": [{
                to: [m]
            }],
            "gradient-from": [{
                from: [p]
            }],
            "gradient-via": [{
                via: [p]
            }],
            "gradient-to": [{
                to: [p]
            }],
            rounded: [{
                rounded: [s]
            }],
            "rounded-s": [{
                "rounded-s": [s]
            }],
            "rounded-e": [{
                "rounded-e": [s]
            }],
            "rounded-t": [{
                "rounded-t": [s]
            }],
            "rounded-r": [{
                "rounded-r": [s]
            }],
            "rounded-b": [{
                "rounded-b": [s]
            }],
            "rounded-l": [{
                "rounded-l": [s]
            }],
            "rounded-ss": [{
                "rounded-ss": [s]
            }],
            "rounded-se": [{
                "rounded-se": [s]
            }],
            "rounded-ee": [{
                "rounded-ee": [s]
            }],
            "rounded-es": [{
                "rounded-es": [s]
            }],
            "rounded-tl": [{
                "rounded-tl": [s]
            }],
            "rounded-tr": [{
                "rounded-tr": [s]
            }],
            "rounded-br": [{
                "rounded-br": [s]
            }],
            "rounded-bl": [{
                "rounded-bl": [s]
            }],
            "border-w": [{
                border: [l]
            }],
            "border-w-x": [{
                "border-x": [l]
            }],
            "border-w-y": [{
                "border-y": [l]
            }],
            "border-w-s": [{
                "border-s": [l]
            }],
            "border-w-e": [{
                "border-e": [l]
            }],
            "border-w-t": [{
                "border-t": [l]
            }],
            "border-w-r": [{
                "border-r": [l]
            }],
            "border-w-b": [{
                "border-b": [l]
            }],
            "border-w-l": [{
                "border-l": [l]
            }],
            "border-opacity": [{
                "border-opacity": [y]
            }],
            "border-style": [{
                border: [...D(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [l]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [l]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [y]
            }],
            "divide-style": [{
                divide: D()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...D()]
            }],
            "outline-offset": [{
                "outline-offset": [Se, R]
            }],
            "outline-w": [{
                outline: [Se, He]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: B()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [y]
            }],
            "ring-offset-w": [{
                "ring-offset": [Se, He]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", $e, $i]
            }],
            "shadow-color": [{
                shadow: [Ot]
            }],
            opacity: [{
                opacity: [y]
            }],
            "mix-blend": [{
                "mix-blend": [...V(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": V()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [r]
            }],
            brightness: [{
                brightness: [n]
            }],
            contrast: [{
                contrast: [c]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", $e, R]
            }],
            grayscale: [{
                grayscale: [d]
            }],
            "hue-rotate": [{
                "hue-rotate": [h]
            }],
            invert: [{
                invert: [f]
            }],
            saturate: [{
                saturate: [j]
            }],
            sepia: [{
                sepia: [T]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [r]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [n]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [c]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [d]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [h]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [f]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [y]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [j]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [T]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [i]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [i]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [i]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", R]
            }],
            duration: [{
                duration: O()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", R]
            }],
            delay: [{
                delay: O()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", R]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [k]
            }],
            "scale-x": [{
                "scale-x": [k]
            }],
            "scale-y": [{
                "scale-y": [k]
            }],
            rotate: [{
                rotate: [Pt, R]
            }],
            "translate-x": [{
                "translate-x": [S]
            }],
            "translate-y": [{
                "translate-y": [S]
            }],
            "skew-x": [{
                "skew-x": [N]
            }],
            "skew-y": [{
                "skew-y": [N]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", R]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", R]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": E()
            }],
            "scroll-mx": [{
                "scroll-mx": E()
            }],
            "scroll-my": [{
                "scroll-my": E()
            }],
            "scroll-ms": [{
                "scroll-ms": E()
            }],
            "scroll-me": [{
                "scroll-me": E()
            }],
            "scroll-mt": [{
                "scroll-mt": E()
            }],
            "scroll-mr": [{
                "scroll-mr": E()
            }],
            "scroll-mb": [{
                "scroll-mb": E()
            }],
            "scroll-ml": [{
                "scroll-ml": E()
            }],
            "scroll-p": [{
                "scroll-p": E()
            }],
            "scroll-px": [{
                "scroll-px": E()
            }],
            "scroll-py": [{
                "scroll-py": E()
            }],
            "scroll-ps": [{
                "scroll-ps": E()
            }],
            "scroll-pe": [{
                "scroll-pe": E()
            }],
            "scroll-pt": [{
                "scroll-pt": E()
            }],
            "scroll-pr": [{
                "scroll-pr": E()
            }],
            "scroll-pb": [{
                "scroll-pb": E()
            }],
            "scroll-pl": [{
                "scroll-pl": E()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", R]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [Se, He, Er]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , Vi = ki(Bi);
function ie(...e) {
    return Vi(go(e))
}
const qi = Fs
  , So = x.forwardRef( ({className: e, ...t}, r) => a.jsx(lo, {
    ref: r,
    className: ie("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
So.displayName = lo.displayName;
const Ui = en("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , Eo = x.forwardRef( ({className: e, variant: t, ...r}, n) => a.jsx(co, {
    ref: n,
    className: ie(Ui({
        variant: t
    }), e),
    ...r
}));
Eo.displayName = co.displayName;
const Wi = x.forwardRef( ({className: e, ...t}, r) => a.jsx(uo, {
    ref: r,
    className: ie("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...t
}));
Wi.displayName = uo.displayName;
const Po = x.forwardRef( ({className: e, ...t}, r) => a.jsx(ho, {
    ref: r,
    className: ie("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: a.jsx(di, {
        className: "h-4 w-4"
    })
}));
Po.displayName = ho.displayName;
const Oo = x.forwardRef( ({className: e, ...t}, r) => a.jsx(fo, {
    ref: r,
    className: ie("text-sm font-semibold", e),
    ...t
}));
Oo.displayName = fo.displayName;
const Mo = x.forwardRef( ({className: e, ...t}, r) => a.jsx(po, {
    ref: r,
    className: ie("text-sm opacity-90", e),
    ...t
}));
Mo.displayName = po.displayName;
function Gi() {
    const {toasts: e} = Js();
    return a.jsxs(qi, {
        children: [e.map(function({id: t, title: r, description: n, action: o, ...s}) {
            return a.jsxs(Eo, {
                ...s,
                children: [a.jsxs("div", {
                    className: "grid gap-1",
                    children: [r && a.jsx(Oo, {
                        children: r
                    }), n && a.jsx(Mo, {
                        children: n
                    })]
                }), o, a.jsx(Po, {})]
            }, t)
        }), a.jsx(So, {})]
    })
}
var Xt = {}, Nn;
function Ki() {
    if (Nn)
        return Xt;
    Nn = 1;
    var e = Is();
    return Xt.createRoot = e.createRoot,
    Xt.hydrateRoot = e.hydrateRoot,
    Xt
}
var Qi = Ki()
  , Sn = ["light", "dark"]
  , Yi = "(prefers-color-scheme: dark)"
  , Xi = x.createContext(void 0)
  , Ji = {
    setTheme: e => {}
    ,
    themes: []
}
  , Zi = () => {
    var e;
    return (e = x.useContext(Xi)) != null ? e : Ji
}
;
x.memo( ({forcedTheme: e, storageKey: t, attribute: r, enableSystem: n, enableColorScheme: o, defaultTheme: s, value: i, attrs: l, nonce: c}) => {
    let d = s === "system"
      , h = r === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${l.map(m => `'${m}'`).join(",")})`};` : `var d=document.documentElement,n='${r}',s='setAttribute';`
      , f = o ? Sn.includes(s) && s ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , u = (m, g=!1, v=!0) => {
        let y = i ? i[m] : m
          , w = g ? m + "|| ''" : `'${y}'`
          , j = "";
        return o && v && !g && Sn.includes(m) && (j += `d.style.colorScheme = '${m}';`),
        r === "class" ? g || y ? j += `c.add(${w})` : j += "null" : y && (j += `d[s](n,${w})`),
        j
    }
      , p = e ? `!function(){${h}${u(e)}}()` : n ? `!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${d})){var t='${Yi}',m=window.matchMedia(t);if(m.media!==t||m.matches){${u("dark")}}else{${u("light")}}}else if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${u(i ? "x[e]" : "e", !0)}}${d ? "" : "else{" + u(s, !1, !1) + "}"}${f}}catch(e){}}()` : `!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${u(i ? "x[e]" : "e", !0)}}else{${u(s, !1, !1)};}${f}}catch(t){}}();`;
    return x.createElement("script", {
        nonce: c,
        dangerouslySetInnerHTML: {
            __html: p
        }
    })
}
);
var ea = e => {
    switch (e) {
    case "success":
        return na;
    case "info":
        return sa;
    case "warning":
        return oa;
    case "error":
        return ia;
    default:
        return null
    }
}
  , ta = Array(12).fill(0)
  , ra = ({visible: e}) => C.createElement("div", {
    className: "sonner-loading-wrapper",
    "data-visible": e
}, C.createElement("div", {
    className: "sonner-spinner"
}, ta.map( (t, r) => C.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${r}`
}))))
  , na = C.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, C.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , oa = C.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, C.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , sa = C.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, C.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , ia = C.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, C.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , aa = () => {
    let[e,t] = C.useState(document.hidden);
    return C.useEffect( () => {
        let r = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", r),
        () => window.removeEventListener("visibilitychange", r)
    }
    , []),
    e
}
  , Br = 1
  , la = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: r, ...n} = e
              , o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Br++
              , s = this.toasts.find(l => l.id === o)
              , i = e.dismissible === void 0 ? !0 : e.dismissible;
            return s ? this.toasts = this.toasts.map(l => l.id === o ? (this.publish({
                ...l,
                ...e,
                id: o,
                title: r
            }),
            {
                ...l,
                ...e,
                id: o,
                dismissible: i,
                title: r
            }) : l) : this.addToast({
                title: r,
                ...n,
                dismissible: i,
                id: o
            }),
            o
        }
        ,
        this.dismiss = e => (e || this.toasts.forEach(t => {
            this.subscribers.forEach(r => r({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let r;
            t.loading !== void 0 && (r = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let n = e instanceof Promise ? e : e()
              , o = r !== void 0;
            return n.then(async s => {
                if (da(s) && !s.ok) {
                    o = !1;
                    let i = typeof t.error == "function" ? await t.error(`HTTP error! status: ${s.status}`) : t.error
                      , l = typeof t.description == "function" ? await t.description(`HTTP error! status: ${s.status}`) : t.description;
                    this.create({
                        id: r,
                        type: "error",
                        message: i,
                        description: l
                    })
                } else if (t.success !== void 0) {
                    o = !1;
                    let i = typeof t.success == "function" ? await t.success(s) : t.success
                      , l = typeof t.description == "function" ? await t.description(s) : t.description;
                    this.create({
                        id: r,
                        type: "success",
                        message: i,
                        description: l
                    })
                }
            }
            ).catch(async s => {
                if (t.error !== void 0) {
                    o = !1;
                    let i = typeof t.error == "function" ? await t.error(s) : t.error
                      , l = typeof t.description == "function" ? await t.description(s) : t.description;
                    this.create({
                        id: r,
                        type: "error",
                        message: i,
                        description: l
                    })
                }
            }
            ).finally( () => {
                var s;
                o && (this.dismiss(r),
                r = void 0),
                (s = t.finally) == null || s.call(t)
            }
            ),
            r
        }
        ,
        this.custom = (e, t) => {
            let r = (t == null ? void 0 : t.id) || Br++;
            return this.create({
                jsx: e(r),
                id: r,
                ...t
            }),
            r
        }
        ,
        this.subscribers = [],
        this.toasts = []
    }
}
  , le = new la
  , ca = (e, t) => {
    let r = (t == null ? void 0 : t.id) || Br++;
    return le.addToast({
        title: e,
        ...t,
        id: r
    }),
    r
}
  , da = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , ua = ca
  , ha = () => le.toasts;
Object.assign(ua, {
    success: le.success,
    info: le.info,
    warning: le.warning,
    error: le.error,
    custom: le.custom,
    message: le.message,
    promise: le.promise,
    dismiss: le.dismiss,
    loading: le.loading
}, {
    getHistory: ha
});
function fa(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let r = document.head || document.getElementsByTagName("head")[0]
      , n = document.createElement("style");
    n.type = "text/css",
    t === "top" && r.firstChild ? r.insertBefore(n, r.firstChild) : r.appendChild(n),
    n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e))
}
fa(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Jt(e) {
    return e.label !== void 0
}
var pa = 3
  , ma = "32px"
  , ga = 4e3
  , ya = 356
  , va = 14
  , ba = 20
  , xa = 200;
function wa(...e) {
    return e.filter(Boolean).join(" ")
}
var ja = e => {
    var t, r, n, o, s, i, l, c, d, h;
    let {invert: f, toast: u, unstyled: p, interacting: m, setHeights: g, visibleToasts: v, heights: y, index: w, toasts: j, expanded: k, removeToast: T, defaultRichColors: N, closeButton: L, style: S, cancelButtonStyle: $, actionButtonStyle: W, className: _="", descriptionClassName: E="", duration: B, position: z, gap: Y, loadingIcon: D, expandByDefault: V, classNames: A, icons: H, closeButtonAriaLabel: ee="Close toast", pauseWhenPageIsHidden: O, cn: q} = e
      , [G,ue] = C.useState(!1)
      , [Ae,J] = C.useState(!1)
      , [rt,Me] = C.useState(!1)
      , [Re,Ie] = C.useState(!1)
      , [Wt,nt] = C.useState(0)
      , [Qe,Et] = C.useState(0)
      , Gt = C.useRef(null)
      , Le = C.useRef(null)
      , jr = w === 0
      , Cr = w + 1 <= v
      , te = u.type
      , ot = u.dismissible !== !1
      , Ts = u.className || ""
      , As = u.descriptionClassName || ""
      , Kt = C.useMemo( () => y.findIndex(M => M.toastId === u.id) || 0, [y, u.id])
      , Ns = C.useMemo( () => {
        var M;
        return (M = u.closeButton) != null ? M : L
    }
    , [u.closeButton, L])
      , fn = C.useMemo( () => u.duration || B || ga, [u.duration, B])
      , kr = C.useRef(0)
      , st = C.useRef(0)
      , pn = C.useRef(0)
      , it = C.useRef(null)
      , [mn,Ss] = z.split("-")
      , gn = C.useMemo( () => y.reduce( (M, K, U) => U >= Kt ? M : M + K.height, 0), [y, Kt])
      , yn = aa()
      , Es = u.invert || f
      , Tr = te === "loading";
    st.current = C.useMemo( () => Kt * Y + gn, [Kt, gn]),
    C.useEffect( () => {
        ue(!0)
    }
    , []),
    C.useLayoutEffect( () => {
        if (!G)
            return;
        let M = Le.current
          , K = M.style.height;
        M.style.height = "auto";
        let U = M.getBoundingClientRect().height;
        M.style.height = K,
        Et(U),
        g(be => be.find(xe => xe.toastId === u.id) ? be.map(xe => xe.toastId === u.id ? {
            ...xe,
            height: U
        } : xe) : [{
            toastId: u.id,
            height: U,
            position: u.position
        }, ...be])
    }
    , [G, u.title, u.description, g, u.id]);
    let De = C.useCallback( () => {
        J(!0),
        nt(st.current),
        g(M => M.filter(K => K.toastId !== u.id)),
        setTimeout( () => {
            T(u)
        }
        , xa)
    }
    , [u, T, g, st]);
    C.useEffect( () => {
        if (u.promise && te === "loading" || u.duration === 1 / 0 || u.type === "loading")
            return;
        let M, K = fn;
        return k || m || O && yn ? ( () => {
            if (pn.current < kr.current) {
                let U = new Date().getTime() - kr.current;
                K = K - U
            }
            pn.current = new Date().getTime()
        }
        )() : K !== 1 / 0 && (kr.current = new Date().getTime(),
        M = setTimeout( () => {
            var U;
            (U = u.onAutoClose) == null || U.call(u, u),
            De()
        }
        , K)),
        () => clearTimeout(M)
    }
    , [k, m, V, u, fn, De, u.promise, te, O, yn]),
    C.useEffect( () => {
        let M = Le.current;
        if (M) {
            let K = M.getBoundingClientRect().height;
            return Et(K),
            g(U => [{
                toastId: u.id,
                height: K,
                position: u.position
            }, ...U]),
            () => g(U => U.filter(be => be.toastId !== u.id))
        }
    }
    , [g, u.id]),
    C.useEffect( () => {
        u.delete && De()
    }
    , [De, u.delete]);
    function Ps() {
        return H != null && H.loading ? C.createElement("div", {
            className: "sonner-loader",
            "data-visible": te === "loading"
        }, H.loading) : D ? C.createElement("div", {
            className: "sonner-loader",
            "data-visible": te === "loading"
        }, D) : C.createElement(ra, {
            visible: te === "loading"
        })
    }
    return C.createElement("li", {
        "aria-live": u.important ? "assertive" : "polite",
        "aria-atomic": "true",
        role: "status",
        tabIndex: 0,
        ref: Le,
        className: q(_, Ts, A == null ? void 0 : A.toast, (t = u == null ? void 0 : u.classNames) == null ? void 0 : t.toast, A == null ? void 0 : A.default, A == null ? void 0 : A[te], (r = u == null ? void 0 : u.classNames) == null ? void 0 : r[te]),
        "data-sonner-toast": "",
        "data-rich-colors": (n = u.richColors) != null ? n : N,
        "data-styled": !(u.jsx || u.unstyled || p),
        "data-mounted": G,
        "data-promise": !!u.promise,
        "data-removed": Ae,
        "data-visible": Cr,
        "data-y-position": mn,
        "data-x-position": Ss,
        "data-index": w,
        "data-front": jr,
        "data-swiping": rt,
        "data-dismissible": ot,
        "data-type": te,
        "data-invert": Es,
        "data-swipe-out": Re,
        "data-expanded": !!(k || V && G),
        style: {
            "--index": w,
            "--toasts-before": w,
            "--z-index": j.length - w,
            "--offset": `${Ae ? Wt : st.current}px`,
            "--initial-height": V ? "auto" : `${Qe}px`,
            ...S,
            ...u.style
        },
        onPointerDown: M => {
            Tr || !ot || (Gt.current = new Date,
            nt(st.current),
            M.target.setPointerCapture(M.pointerId),
            M.target.tagName !== "BUTTON" && (Me(!0),
            it.current = {
                x: M.clientX,
                y: M.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var M, K, U, be;
            if (Re || !ot)
                return;
            it.current = null;
            let xe = Number(((M = Le.current) == null ? void 0 : M.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0)
              , Qt = new Date().getTime() - ((K = Gt.current) == null ? void 0 : K.getTime())
              , Os = Math.abs(xe) / Qt;
            if (Math.abs(xe) >= ba || Os > .11) {
                nt(st.current),
                (U = u.onDismiss) == null || U.call(u, u),
                De(),
                Ie(!0);
                return
            }
            (be = Le.current) == null || be.style.setProperty("--swipe-amount", "0px"),
            Me(!1)
        }
        ,
        onPointerMove: M => {
            var K;
            if (!it.current || !ot)
                return;
            let U = M.clientY - it.current.y
              , be = M.clientX - it.current.x
              , xe = (mn === "top" ? Math.min : Math.max)(0, U)
              , Qt = M.pointerType === "touch" ? 10 : 2;
            Math.abs(xe) > Qt ? (K = Le.current) == null || K.style.setProperty("--swipe-amount", `${U}px`) : Math.abs(be) > Qt && (it.current = null)
        }
    }, Ns && !u.jsx ? C.createElement("button", {
        "aria-label": ee,
        "data-disabled": Tr,
        "data-close-button": !0,
        onClick: Tr || !ot ? () => {}
        : () => {
            var M;
            De(),
            (M = u.onDismiss) == null || M.call(u, u)
        }
        ,
        className: q(A == null ? void 0 : A.closeButton, (o = u == null ? void 0 : u.classNames) == null ? void 0 : o.closeButton)
    }, C.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, C.createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
    }), C.createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    }))) : null, u.jsx || C.isValidElement(u.title) ? u.jsx || u.title : C.createElement(C.Fragment, null, te || u.icon || u.promise ? C.createElement("div", {
        "data-icon": "",
        className: q(A == null ? void 0 : A.icon, (s = u == null ? void 0 : u.classNames) == null ? void 0 : s.icon)
    }, u.promise || u.type === "loading" && !u.icon ? u.icon || Ps() : null, u.type !== "loading" ? u.icon || (H == null ? void 0 : H[te]) || ea(te) : null) : null, C.createElement("div", {
        "data-content": "",
        className: q(A == null ? void 0 : A.content, (i = u == null ? void 0 : u.classNames) == null ? void 0 : i.content)
    }, C.createElement("div", {
        "data-title": "",
        className: q(A == null ? void 0 : A.title, (l = u == null ? void 0 : u.classNames) == null ? void 0 : l.title)
    }, u.title), u.description ? C.createElement("div", {
        "data-description": "",
        className: q(E, As, A == null ? void 0 : A.description, (c = u == null ? void 0 : u.classNames) == null ? void 0 : c.description)
    }, u.description) : null), C.isValidElement(u.cancel) ? u.cancel : u.cancel && Jt(u.cancel) ? C.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: u.cancelButtonStyle || $,
        onClick: M => {
            var K, U;
            Jt(u.cancel) && ot && ((U = (K = u.cancel).onClick) == null || U.call(K, M),
            De())
        }
        ,
        className: q(A == null ? void 0 : A.cancelButton, (d = u == null ? void 0 : u.classNames) == null ? void 0 : d.cancelButton)
    }, u.cancel.label) : null, C.isValidElement(u.action) ? u.action : u.action && Jt(u.action) ? C.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: u.actionButtonStyle || W,
        onClick: M => {
            var K, U;
            Jt(u.action) && (M.defaultPrevented || ((U = (K = u.action).onClick) == null || U.call(K, M),
            De()))
        }
        ,
        className: q(A == null ? void 0 : A.actionButton, (h = u == null ? void 0 : u.classNames) == null ? void 0 : h.actionButton)
    }, u.action.label) : null))
}
;
function En() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
var Ca = e => {
    let {invert: t, position: r="bottom-right", hotkey: n=["altKey", "KeyT"], expand: o, closeButton: s, className: i, offset: l, theme: c="light", richColors: d, duration: h, style: f, visibleToasts: u=pa, toastOptions: p, dir: m=En(), gap: g=va, loadingIcon: v, icons: y, containerAriaLabel: w="Notifications", pauseWhenPageIsHidden: j, cn: k=wa} = e
      , [T,N] = C.useState([])
      , L = C.useMemo( () => Array.from(new Set([r].concat(T.filter(O => O.position).map(O => O.position)))), [T, r])
      , [S,$] = C.useState([])
      , [W,_] = C.useState(!1)
      , [E,B] = C.useState(!1)
      , [z,Y] = C.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , D = C.useRef(null)
      , V = n.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , A = C.useRef(null)
      , H = C.useRef(!1)
      , ee = C.useCallback(O => {
        var q;
        (q = T.find(G => G.id === O.id)) != null && q.delete || le.dismiss(O.id),
        N(G => G.filter( ({id: ue}) => ue !== O.id))
    }
    , [T]);
    return C.useEffect( () => le.subscribe(O => {
        if (O.dismiss) {
            N(q => q.map(G => G.id === O.id ? {
                ...G,
                delete: !0
            } : G));
            return
        }
        setTimeout( () => {
            Ls.flushSync( () => {
                N(q => {
                    let G = q.findIndex(ue => ue.id === O.id);
                    return G !== -1 ? [...q.slice(0, G), {
                        ...q[G],
                        ...O
                    }, ...q.slice(G + 1)] : [O, ...q]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    C.useEffect( () => {
        if (c !== "system") {
            Y(c);
            return
        }
        c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? Y("dark") : Y("light")),
        typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({matches: O}) => {
            Y(O ? "dark" : "light")
        }
        )
    }
    , [c]),
    C.useEffect( () => {
        T.length <= 1 && _(!1)
    }
    , [T]),
    C.useEffect( () => {
        let O = q => {
            var G, ue;
            n.every(Ae => q[Ae] || q.code === Ae) && (_(!0),
            (G = D.current) == null || G.focus()),
            q.code === "Escape" && (document.activeElement === D.current || (ue = D.current) != null && ue.contains(document.activeElement)) && _(!1)
        }
        ;
        return document.addEventListener("keydown", O),
        () => document.removeEventListener("keydown", O)
    }
    , [n]),
    C.useEffect( () => {
        if (D.current)
            return () => {
                A.current && (A.current.focus({
                    preventScroll: !0
                }),
                A.current = null,
                H.current = !1)
            }
    }
    , [D.current]),
    T.length ? C.createElement("section", {
        "aria-label": `${w} ${V}`,
        tabIndex: -1
    }, L.map( (O, q) => {
        var G;
        let[ue,Ae] = O.split("-");
        return C.createElement("ol", {
            key: O,
            dir: m === "auto" ? En() : m,
            tabIndex: -1,
            ref: D,
            className: i,
            "data-sonner-toaster": !0,
            "data-theme": z,
            "data-y-position": ue,
            "data-x-position": Ae,
            style: {
                "--front-toast-height": `${((G = S[0]) == null ? void 0 : G.height) || 0}px`,
                "--offset": typeof l == "number" ? `${l}px` : l || ma,
                "--width": `${ya}px`,
                "--gap": `${g}px`,
                ...f
            },
            onBlur: J => {
                H.current && !J.currentTarget.contains(J.relatedTarget) && (H.current = !1,
                A.current && (A.current.focus({
                    preventScroll: !0
                }),
                A.current = null))
            }
            ,
            onFocus: J => {
                J.target instanceof HTMLElement && J.target.dataset.dismissible === "false" || H.current || (H.current = !0,
                A.current = J.relatedTarget)
            }
            ,
            onMouseEnter: () => _(!0),
            onMouseMove: () => _(!0),
            onMouseLeave: () => {
                E || _(!1)
            }
            ,
            onPointerDown: J => {
                J.target instanceof HTMLElement && J.target.dataset.dismissible === "false" || B(!0)
            }
            ,
            onPointerUp: () => B(!1)
        }, T.filter(J => !J.position && q === 0 || J.position === O).map( (J, rt) => {
            var Me, Re;
            return C.createElement(ja, {
                key: J.id,
                icons: y,
                index: rt,
                toast: J,
                defaultRichColors: d,
                duration: (Me = p == null ? void 0 : p.duration) != null ? Me : h,
                className: p == null ? void 0 : p.className,
                descriptionClassName: p == null ? void 0 : p.descriptionClassName,
                invert: t,
                visibleToasts: u,
                closeButton: (Re = p == null ? void 0 : p.closeButton) != null ? Re : s,
                interacting: E,
                position: O,
                style: p == null ? void 0 : p.style,
                unstyled: p == null ? void 0 : p.unstyled,
                classNames: p == null ? void 0 : p.classNames,
                cancelButtonStyle: p == null ? void 0 : p.cancelButtonStyle,
                actionButtonStyle: p == null ? void 0 : p.actionButtonStyle,
                removeToast: ee,
                toasts: T.filter(Ie => Ie.position == J.position),
                heights: S.filter(Ie => Ie.position == J.position),
                setHeights: $,
                expandByDefault: o,
                gap: g,
                loadingIcon: v,
                expanded: W,
                pauseWhenPageIsHidden: j,
                cn: k
            })
        }
        ))
    }
    )) : null
}
;
const ka = ({...e}) => {
    const {theme: t="system"} = Zi();
    return a.jsx(Ca, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
;
function Ta(e, t=[]) {
    let r = [];
    function n(s, i) {
        const l = x.createContext(i)
          , c = r.length;
        r = [...r, i];
        const d = f => {
            var y;
            const {scope: u, children: p, ...m} = f
              , g = ((y = u == null ? void 0 : u[e]) == null ? void 0 : y[c]) || l
              , v = x.useMemo( () => m, Object.values(m));
            return a.jsx(g.Provider, {
                value: v,
                children: p
            })
        }
        ;
        d.displayName = s + "Provider";
        function h(f, u) {
            var g;
            const p = ((g = u == null ? void 0 : u[e]) == null ? void 0 : g[c]) || l
              , m = x.useContext(p);
            if (m)
                return m;
            if (i !== void 0)
                return i;
            throw new Error(`\`${f}\` must be used within \`${s}\``)
        }
        return [d, h]
    }
    const o = () => {
        const s = r.map(i => x.createContext(i));
        return function(l) {
            const c = (l == null ? void 0 : l[e]) || s;
            return x.useMemo( () => ({
                [`__scope${e}`]: {
                    ...l,
                    [e]: c
                }
            }), [l, c])
        }
    }
    ;
    return o.scopeName = e,
    [n, Aa(o, ...t)]
}
function Aa(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const r = () => {
        const n = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(s) {
            const i = n.reduce( (l, {useScope: c, scopeName: d}) => {
                const f = c(s)[`__scope${d}`];
                return {
                    ...l,
                    ...f
                }
            }
            , {});
            return x.useMemo( () => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    }
    ;
    return r.scopeName = t.scopeName,
    r
}
const Na = ["top", "right", "bottom", "left"]
  , Ue = Math.min
  , ce = Math.max
  , cr = Math.round
  , Zt = Math.floor
  , We = e => ({
    x: e,
    y: e
})
  , Sa = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , Ea = {
    start: "end",
    end: "start"
};
function Vr(e, t, r) {
    return ce(e, Ue(t, r))
}
function Pe(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Oe(e) {
    return e.split("-")[0]
}
function Nt(e) {
    return e.split("-")[1]
}
function rn(e) {
    return e === "x" ? "y" : "x"
}
function nn(e) {
    return e === "y" ? "height" : "width"
}
function Ge(e) {
    return ["top", "bottom"].includes(Oe(e)) ? "y" : "x"
}
function on(e) {
    return rn(Ge(e))
}
function Pa(e, t, r) {
    r === void 0 && (r = !1);
    const n = Nt(e)
      , o = on(e)
      , s = nn(o);
    let i = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
    return t.reference[s] > t.floating[s] && (i = dr(i)),
    [i, dr(i)]
}
function Oa(e) {
    const t = dr(e);
    return [qr(e), t, qr(t)]
}
function qr(e) {
    return e.replace(/start|end/g, t => Ea[t])
}
function Ma(e, t, r) {
    const n = ["left", "right"]
      , o = ["right", "left"]
      , s = ["top", "bottom"]
      , i = ["bottom", "top"];
    switch (e) {
    case "top":
    case "bottom":
        return r ? t ? o : n : t ? n : o;
    case "left":
    case "right":
        return t ? s : i;
    default:
        return []
    }
}
function Ra(e, t, r, n) {
    const o = Nt(e);
    let s = Ma(Oe(e), r === "start", n);
    return o && (s = s.map(i => i + "-" + o),
    t && (s = s.concat(s.map(qr)))),
    s
}
function dr(e) {
    return e.replace(/left|right|bottom|top/g, t => Sa[t])
}
function Ia(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function Ro(e) {
    return typeof e != "number" ? Ia(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function ur(e) {
    const {x: t, y: r, width: n, height: o} = e;
    return {
        width: n,
        height: o,
        top: r,
        left: t,
        right: t + n,
        bottom: r + o,
        x: t,
        y: r
    }
}
function Pn(e, t, r) {
    let {reference: n, floating: o} = e;
    const s = Ge(t)
      , i = on(t)
      , l = nn(i)
      , c = Oe(t)
      , d = s === "y"
      , h = n.x + n.width / 2 - o.width / 2
      , f = n.y + n.height / 2 - o.height / 2
      , u = n[l] / 2 - o[l] / 2;
    let p;
    switch (c) {
    case "top":
        p = {
            x: h,
            y: n.y - o.height
        };
        break;
    case "bottom":
        p = {
            x: h,
            y: n.y + n.height
        };
        break;
    case "right":
        p = {
            x: n.x + n.width,
            y: f
        };
        break;
    case "left":
        p = {
            x: n.x - o.width,
            y: f
        };
        break;
    default:
        p = {
            x: n.x,
            y: n.y
        }
    }
    switch (Nt(t)) {
    case "start":
        p[i] -= u * (r && d ? -1 : 1);
        break;
    case "end":
        p[i] += u * (r && d ? -1 : 1);
        break
    }
    return p
}
const La = async (e, t, r) => {
    const {placement: n="bottom", strategy: o="absolute", middleware: s=[], platform: i} = r
      , l = s.filter(Boolean)
      , c = await (i.isRTL == null ? void 0 : i.isRTL(t));
    let d = await i.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: h, y: f} = Pn(d, n, c)
      , u = n
      , p = {}
      , m = 0;
    for (let g = 0; g < l.length; g++) {
        const {name: v, fn: y} = l[g]
          , {x: w, y: j, data: k, reset: T} = await y({
            x: h,
            y: f,
            initialPlacement: n,
            placement: u,
            strategy: o,
            middlewareData: p,
            rects: d,
            platform: i,
            elements: {
                reference: e,
                floating: t
            }
        });
        h = w ?? h,
        f = j ?? f,
        p = {
            ...p,
            [v]: {
                ...p[v],
                ...k
            }
        },
        T && m <= 50 && (m++,
        typeof T == "object" && (T.placement && (u = T.placement),
        T.rects && (d = T.rects === !0 ? await i.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : T.rects),
        {x: h, y: f} = Pn(d, u, c)),
        g = -1)
    }
    return {
        x: h,
        y: f,
        placement: u,
        strategy: o,
        middlewareData: p
    }
}
;
async function Dt(e, t) {
    var r;
    t === void 0 && (t = {});
    const {x: n, y: o, platform: s, rects: i, elements: l, strategy: c} = e
      , {boundary: d="clippingAncestors", rootBoundary: h="viewport", elementContext: f="floating", altBoundary: u=!1, padding: p=0} = Pe(t, e)
      , m = Ro(p)
      , v = l[u ? f === "floating" ? "reference" : "floating" : f]
      , y = ur(await s.getClippingRect({
        element: (r = await (s.isElement == null ? void 0 : s.isElement(v))) == null || r ? v : v.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(l.floating)),
        boundary: d,
        rootBoundary: h,
        strategy: c
    }))
      , w = f === "floating" ? {
        x: n,
        y: o,
        width: i.floating.width,
        height: i.floating.height
    } : i.reference
      , j = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l.floating))
      , k = await (s.isElement == null ? void 0 : s.isElement(j)) ? await (s.getScale == null ? void 0 : s.getScale(j)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , T = ur(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: l,
        rect: w,
        offsetParent: j,
        strategy: c
    }) : w);
    return {
        top: (y.top - T.top + m.top) / k.y,
        bottom: (T.bottom - y.bottom + m.bottom) / k.y,
        left: (y.left - T.left + m.left) / k.x,
        right: (T.right - y.right + m.right) / k.x
    }
}
const Da = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: r, y: n, placement: o, rects: s, platform: i, elements: l, middlewareData: c} = t
          , {element: d, padding: h=0} = Pe(e, t) || {};
        if (d == null)
            return {};
        const f = Ro(h)
          , u = {
            x: r,
            y: n
        }
          , p = on(o)
          , m = nn(p)
          , g = await i.getDimensions(d)
          , v = p === "y"
          , y = v ? "top" : "left"
          , w = v ? "bottom" : "right"
          , j = v ? "clientHeight" : "clientWidth"
          , k = s.reference[m] + s.reference[p] - u[p] - s.floating[m]
          , T = u[p] - s.reference[p]
          , N = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(d));
        let L = N ? N[j] : 0;
        (!L || !await (i.isElement == null ? void 0 : i.isElement(N))) && (L = l.floating[j] || s.floating[m]);
        const S = k / 2 - T / 2
          , $ = L / 2 - g[m] / 2 - 1
          , W = Ue(f[y], $)
          , _ = Ue(f[w], $)
          , E = W
          , B = L - g[m] - _
          , z = L / 2 - g[m] / 2 + S
          , Y = Vr(E, z, B)
          , D = !c.arrow && Nt(o) != null && z !== Y && s.reference[m] / 2 - (z < E ? W : _) - g[m] / 2 < 0
          , V = D ? z < E ? z - E : z - B : 0;
        return {
            [p]: u[p] + V,
            data: {
                [p]: Y,
                centerOffset: z - Y - V,
                ...D && {
                    alignmentOffset: V
                }
            },
            reset: D
        }
    }
})
  , Ha = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var r, n;
            const {placement: o, middlewareData: s, rects: i, initialPlacement: l, platform: c, elements: d} = t
              , {mainAxis: h=!0, crossAxis: f=!0, fallbackPlacements: u, fallbackStrategy: p="bestFit", fallbackAxisSideDirection: m="none", flipAlignment: g=!0, ...v} = Pe(e, t);
            if ((r = s.arrow) != null && r.alignmentOffset)
                return {};
            const y = Oe(o)
              , w = Ge(l)
              , j = Oe(l) === l
              , k = await (c.isRTL == null ? void 0 : c.isRTL(d.floating))
              , T = u || (j || !g ? [dr(l)] : Oa(l))
              , N = m !== "none";
            !u && N && T.push(...Ra(l, g, m, k));
            const L = [l, ...T]
              , S = await Dt(t, v)
              , $ = [];
            let W = ((n = s.flip) == null ? void 0 : n.overflows) || [];
            if (h && $.push(S[y]),
            f) {
                const z = Pa(o, i, k);
                $.push(S[z[0]], S[z[1]])
            }
            if (W = [...W, {
                placement: o,
                overflows: $
            }],
            !$.every(z => z <= 0)) {
                var _, E;
                const z = (((_ = s.flip) == null ? void 0 : _.index) || 0) + 1
                  , Y = L[z];
                if (Y)
                    return {
                        data: {
                            index: z,
                            overflows: W
                        },
                        reset: {
                            placement: Y
                        }
                    };
                let D = (E = W.filter(V => V.overflows[0] <= 0).sort( (V, A) => V.overflows[1] - A.overflows[1])[0]) == null ? void 0 : E.placement;
                if (!D)
                    switch (p) {
                    case "bestFit":
                        {
                            var B;
                            const V = (B = W.filter(A => {
                                if (N) {
                                    const H = Ge(A.placement);
                                    return H === w || H === "y"
                                }
                                return !0
                            }
                            ).map(A => [A.placement, A.overflows.filter(H => H > 0).reduce( (H, ee) => H + ee, 0)]).sort( (A, H) => A[1] - H[1])[0]) == null ? void 0 : B[0];
                            V && (D = V);
                            break
                        }
                    case "initialPlacement":
                        D = l;
                        break
                    }
                if (o !== D)
                    return {
                        reset: {
                            placement: D
                        }
                    }
            }
            return {}
        }
    }
};
function On(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function Mn(e) {
    return Na.some(t => e[t] >= 0)
}
const $a = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: r} = t
              , {strategy: n="referenceHidden", ...o} = Pe(e, t);
            switch (n) {
            case "referenceHidden":
                {
                    const s = await Dt(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , i = On(s, r.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: i,
                            referenceHidden: Mn(i)
                        }
                    }
                }
            case "escaped":
                {
                    const s = await Dt(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , i = On(s, r.floating);
                    return {
                        data: {
                            escapedOffsets: i,
                            escaped: Mn(i)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
};
async function za(e, t) {
    const {placement: r, platform: n, elements: o} = e
      , s = await (n.isRTL == null ? void 0 : n.isRTL(o.floating))
      , i = Oe(r)
      , l = Nt(r)
      , c = Ge(r) === "y"
      , d = ["left", "top"].includes(i) ? -1 : 1
      , h = s && c ? -1 : 1
      , f = Pe(t, e);
    let {mainAxis: u, crossAxis: p, alignmentAxis: m} = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis
    };
    return l && typeof m == "number" && (p = l === "end" ? m * -1 : m),
    c ? {
        x: p * h,
        y: u * d
    } : {
        x: u * d,
        y: p * h
    }
}
const Fa = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var r, n;
            const {x: o, y: s, placement: i, middlewareData: l} = t
              , c = await za(t, e);
            return i === ((r = l.offset) == null ? void 0 : r.placement) && (n = l.arrow) != null && n.alignmentOffset ? {} : {
                x: o + c.x,
                y: s + c.y,
                data: {
                    ...c,
                    placement: i
                }
            }
        }
    }
}
  , _a = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: r, y: n, placement: o} = t
              , {mainAxis: s=!0, crossAxis: i=!1, limiter: l={
                fn: v => {
                    let {x: y, y: w} = v;
                    return {
                        x: y,
                        y: w
                    }
                }
            }, ...c} = Pe(e, t)
              , d = {
                x: r,
                y: n
            }
              , h = await Dt(t, c)
              , f = Ge(Oe(o))
              , u = rn(f);
            let p = d[u]
              , m = d[f];
            if (s) {
                const v = u === "y" ? "top" : "left"
                  , y = u === "y" ? "bottom" : "right"
                  , w = p + h[v]
                  , j = p - h[y];
                p = Vr(w, p, j)
            }
            if (i) {
                const v = f === "y" ? "top" : "left"
                  , y = f === "y" ? "bottom" : "right"
                  , w = m + h[v]
                  , j = m - h[y];
                m = Vr(w, m, j)
            }
            const g = l.fn({
                ...t,
                [u]: p,
                [f]: m
            });
            return {
                ...g,
                data: {
                    x: g.x - r,
                    y: g.y - n,
                    enabled: {
                        [u]: s,
                        [f]: i
                    }
                }
            }
        }
    }
}
  , Ba = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: r, y: n, placement: o, rects: s, middlewareData: i} = t
              , {offset: l=0, mainAxis: c=!0, crossAxis: d=!0} = Pe(e, t)
              , h = {
                x: r,
                y: n
            }
              , f = Ge(o)
              , u = rn(f);
            let p = h[u]
              , m = h[f];
            const g = Pe(l, t)
              , v = typeof g == "number" ? {
                mainAxis: g,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...g
            };
            if (c) {
                const j = u === "y" ? "height" : "width"
                  , k = s.reference[u] - s.floating[j] + v.mainAxis
                  , T = s.reference[u] + s.reference[j] - v.mainAxis;
                p < k ? p = k : p > T && (p = T)
            }
            if (d) {
                var y, w;
                const j = u === "y" ? "width" : "height"
                  , k = ["top", "left"].includes(Oe(o))
                  , T = s.reference[f] - s.floating[j] + (k && ((y = i.offset) == null ? void 0 : y[f]) || 0) + (k ? 0 : v.crossAxis)
                  , N = s.reference[f] + s.reference[j] + (k ? 0 : ((w = i.offset) == null ? void 0 : w[f]) || 0) - (k ? v.crossAxis : 0);
                m < T ? m = T : m > N && (m = N)
            }
            return {
                [u]: p,
                [f]: m
            }
        }
    }
}
  , Va = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var r, n;
            const {placement: o, rects: s, platform: i, elements: l} = t
              , {apply: c= () => {}
            , ...d} = Pe(e, t)
              , h = await Dt(t, d)
              , f = Oe(o)
              , u = Nt(o)
              , p = Ge(o) === "y"
              , {width: m, height: g} = s.floating;
            let v, y;
            f === "top" || f === "bottom" ? (v = f,
            y = u === (await (i.isRTL == null ? void 0 : i.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (y = f,
            v = u === "end" ? "top" : "bottom");
            const w = g - h.top - h.bottom
              , j = m - h.left - h.right
              , k = Ue(g - h[v], w)
              , T = Ue(m - h[y], j)
              , N = !t.middlewareData.shift;
            let L = k
              , S = T;
            if ((r = t.middlewareData.shift) != null && r.enabled.x && (S = j),
            (n = t.middlewareData.shift) != null && n.enabled.y && (L = w),
            N && !u) {
                const W = ce(h.left, 0)
                  , _ = ce(h.right, 0)
                  , E = ce(h.top, 0)
                  , B = ce(h.bottom, 0);
                p ? S = m - 2 * (W !== 0 || _ !== 0 ? W + _ : ce(h.left, h.right)) : L = g - 2 * (E !== 0 || B !== 0 ? E + B : ce(h.top, h.bottom))
            }
            await c({
                ...t,
                availableWidth: S,
                availableHeight: L
            });
            const $ = await i.getDimensions(l.floating);
            return m !== $.width || g !== $.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function mr() {
    return typeof window < "u"
}
function St(e) {
    return Io(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function de(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function Te(e) {
    var t;
    return (t = (Io(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function Io(e) {
    return mr() ? e instanceof Node || e instanceof de(e).Node : !1
}
function ye(e) {
    return mr() ? e instanceof Element || e instanceof de(e).Element : !1
}
function ke(e) {
    return mr() ? e instanceof HTMLElement || e instanceof de(e).HTMLElement : !1
}
function Rn(e) {
    return !mr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof de(e).ShadowRoot
}
function qt(e) {
    const {overflow: t, overflowX: r, overflowY: n, display: o} = ve(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(o)
}
function qa(e) {
    return ["table", "td", "th"].includes(St(e))
}
function gr(e) {
    return [":popover-open", ":modal"].some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
function sn(e) {
    const t = an()
      , r = ye(e) ? ve(e) : e;
    return r.transform !== "none" || r.perspective !== "none" || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(n => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some(n => (r.contain || "").includes(n))
}
function Ua(e) {
    let t = Ke(e);
    for (; ke(t) && !kt(t); ) {
        if (sn(t))
            return t;
        if (gr(t))
            return null;
        t = Ke(t)
    }
    return null
}
function an() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function kt(e) {
    return ["html", "body", "#document"].includes(St(e))
}
function ve(e) {
    return de(e).getComputedStyle(e)
}
function yr(e) {
    return ye(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function Ke(e) {
    if (St(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || Rn(e) && e.host || Te(e);
    return Rn(t) ? t.host : t
}
function Lo(e) {
    const t = Ke(e);
    return kt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ke(t) && qt(t) ? t : Lo(t)
}
function Ht(e, t, r) {
    var n;
    t === void 0 && (t = []),
    r === void 0 && (r = !0);
    const o = Lo(e)
      , s = o === ((n = e.ownerDocument) == null ? void 0 : n.body)
      , i = de(o);
    if (s) {
        const l = Ur(i);
        return t.concat(i, i.visualViewport || [], qt(o) ? o : [], l && r ? Ht(l) : [])
    }
    return t.concat(o, Ht(o, [], r))
}
function Ur(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function Do(e) {
    const t = ve(e);
    let r = parseFloat(t.width) || 0
      , n = parseFloat(t.height) || 0;
    const o = ke(e)
      , s = o ? e.offsetWidth : r
      , i = o ? e.offsetHeight : n
      , l = cr(r) !== s || cr(n) !== i;
    return l && (r = s,
    n = i),
    {
        width: r,
        height: n,
        $: l
    }
}
function ln(e) {
    return ye(e) ? e : e.contextElement
}
function ht(e) {
    const t = ln(e);
    if (!ke(t))
        return We(1);
    const r = t.getBoundingClientRect()
      , {width: n, height: o, $: s} = Do(t);
    let i = (s ? cr(r.width) : r.width) / n
      , l = (s ? cr(r.height) : r.height) / o;
    return (!i || !Number.isFinite(i)) && (i = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    {
        x: i,
        y: l
    }
}
const Wa = We(0);
function Ho(e) {
    const t = de(e);
    return !an() || !t.visualViewport ? Wa : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function Ga(e, t, r) {
    return t === void 0 && (t = !1),
    !r || t && r !== de(e) ? !1 : t
}
function tt(e, t, r, n) {
    t === void 0 && (t = !1),
    r === void 0 && (r = !1);
    const o = e.getBoundingClientRect()
      , s = ln(e);
    let i = We(1);
    t && (n ? ye(n) && (i = ht(n)) : i = ht(e));
    const l = Ga(s, r, n) ? Ho(s) : We(0);
    let c = (o.left + l.x) / i.x
      , d = (o.top + l.y) / i.y
      , h = o.width / i.x
      , f = o.height / i.y;
    if (s) {
        const u = de(s)
          , p = n && ye(n) ? de(n) : n;
        let m = u
          , g = Ur(m);
        for (; g && n && p !== m; ) {
            const v = ht(g)
              , y = g.getBoundingClientRect()
              , w = ve(g)
              , j = y.left + (g.clientLeft + parseFloat(w.paddingLeft)) * v.x
              , k = y.top + (g.clientTop + parseFloat(w.paddingTop)) * v.y;
            c *= v.x,
            d *= v.y,
            h *= v.x,
            f *= v.y,
            c += j,
            d += k,
            m = de(g),
            g = Ur(m)
        }
    }
    return ur({
        width: h,
        height: f,
        x: c,
        y: d
    })
}
function Ka(e) {
    let {elements: t, rect: r, offsetParent: n, strategy: o} = e;
    const s = o === "fixed"
      , i = Te(n)
      , l = t ? gr(t.floating) : !1;
    if (n === i || l && s)
        return r;
    let c = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , d = We(1);
    const h = We(0)
      , f = ke(n);
    if ((f || !f && !s) && ((St(n) !== "body" || qt(i)) && (c = yr(n)),
    ke(n))) {
        const u = tt(n);
        d = ht(n),
        h.x = u.x + n.clientLeft,
        h.y = u.y + n.clientTop
    }
    return {
        width: r.width * d.x,
        height: r.height * d.y,
        x: r.x * d.x - c.scrollLeft * d.x + h.x,
        y: r.y * d.y - c.scrollTop * d.y + h.y
    }
}
function Qa(e) {
    return Array.from(e.getClientRects())
}
function Wr(e, t) {
    const r = yr(e).scrollLeft;
    return t ? t.left + r : tt(Te(e)).left + r
}
function Ya(e) {
    const t = Te(e)
      , r = yr(e)
      , n = e.ownerDocument.body
      , o = ce(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth)
      , s = ce(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
    let i = -r.scrollLeft + Wr(e);
    const l = -r.scrollTop;
    return ve(n).direction === "rtl" && (i += ce(t.clientWidth, n.clientWidth) - o),
    {
        width: o,
        height: s,
        x: i,
        y: l
    }
}
function Xa(e, t) {
    const r = de(e)
      , n = Te(e)
      , o = r.visualViewport;
    let s = n.clientWidth
      , i = n.clientHeight
      , l = 0
      , c = 0;
    if (o) {
        s = o.width,
        i = o.height;
        const d = an();
        (!d || d && t === "fixed") && (l = o.offsetLeft,
        c = o.offsetTop)
    }
    return {
        width: s,
        height: i,
        x: l,
        y: c
    }
}
function Ja(e, t) {
    const r = tt(e, !0, t === "fixed")
      , n = r.top + e.clientTop
      , o = r.left + e.clientLeft
      , s = ke(e) ? ht(e) : We(1)
      , i = e.clientWidth * s.x
      , l = e.clientHeight * s.y
      , c = o * s.x
      , d = n * s.y;
    return {
        width: i,
        height: l,
        x: c,
        y: d
    }
}
function In(e, t, r) {
    let n;
    if (t === "viewport")
        n = Xa(e, r);
    else if (t === "document")
        n = Ya(Te(e));
    else if (ye(t))
        n = Ja(t, r);
    else {
        const o = Ho(e);
        n = {
            ...t,
            x: t.x - o.x,
            y: t.y - o.y
        }
    }
    return ur(n)
}
function $o(e, t) {
    const r = Ke(e);
    return r === t || !ye(r) || kt(r) ? !1 : ve(r).position === "fixed" || $o(r, t)
}
function Za(e, t) {
    const r = t.get(e);
    if (r)
        return r;
    let n = Ht(e, [], !1).filter(l => ye(l) && St(l) !== "body")
      , o = null;
    const s = ve(e).position === "fixed";
    let i = s ? Ke(e) : e;
    for (; ye(i) && !kt(i); ) {
        const l = ve(i)
          , c = sn(i);
        !c && l.position === "fixed" && (o = null),
        (s ? !c && !o : !c && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || qt(i) && !c && $o(e, i)) ? n = n.filter(h => h !== i) : o = l,
        i = Ke(i)
    }
    return t.set(e, n),
    n
}
function el(e) {
    let {element: t, boundary: r, rootBoundary: n, strategy: o} = e;
    const i = [...r === "clippingAncestors" ? gr(t) ? [] : Za(t, this._c) : [].concat(r), n]
      , l = i[0]
      , c = i.reduce( (d, h) => {
        const f = In(t, h, o);
        return d.top = ce(f.top, d.top),
        d.right = Ue(f.right, d.right),
        d.bottom = Ue(f.bottom, d.bottom),
        d.left = ce(f.left, d.left),
        d
    }
    , In(t, l, o));
    return {
        width: c.right - c.left,
        height: c.bottom - c.top,
        x: c.left,
        y: c.top
    }
}
function tl(e) {
    const {width: t, height: r} = Do(e);
    return {
        width: t,
        height: r
    }
}
function rl(e, t, r) {
    const n = ke(t)
      , o = Te(t)
      , s = r === "fixed"
      , i = tt(e, !0, s, t);
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const c = We(0);
    if (n || !n && !s)
        if ((St(t) !== "body" || qt(o)) && (l = yr(t)),
        n) {
            const p = tt(t, !0, s, t);
            c.x = p.x + t.clientLeft,
            c.y = p.y + t.clientTop
        } else
            o && (c.x = Wr(o));
    let d = 0
      , h = 0;
    if (o && !n && !s) {
        const p = o.getBoundingClientRect();
        h = p.top + l.scrollTop,
        d = p.left + l.scrollLeft - Wr(o, p)
    }
    const f = i.left + l.scrollLeft - c.x - d
      , u = i.top + l.scrollTop - c.y - h;
    return {
        x: f,
        y: u,
        width: i.width,
        height: i.height
    }
}
function Pr(e) {
    return ve(e).position === "static"
}
function Ln(e, t) {
    if (!ke(e) || ve(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let r = e.offsetParent;
    return Te(e) === r && (r = r.ownerDocument.body),
    r
}
function zo(e, t) {
    const r = de(e);
    if (gr(e))
        return r;
    if (!ke(e)) {
        let o = Ke(e);
        for (; o && !kt(o); ) {
            if (ye(o) && !Pr(o))
                return o;
            o = Ke(o)
        }
        return r
    }
    let n = Ln(e, t);
    for (; n && qa(n) && Pr(n); )
        n = Ln(n, t);
    return n && kt(n) && Pr(n) && !sn(n) ? r : n || Ua(e) || r
}
const nl = async function(e) {
    const t = this.getOffsetParent || zo
      , r = this.getDimensions
      , n = await r(e.floating);
    return {
        reference: rl(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: n.width,
            height: n.height
        }
    }
};
function ol(e) {
    return ve(e).direction === "rtl"
}
const sl = {
    convertOffsetParentRelativeRectToViewportRelativeRect: Ka,
    getDocumentElement: Te,
    getClippingRect: el,
    getOffsetParent: zo,
    getElementRects: nl,
    getClientRects: Qa,
    getDimensions: tl,
    getScale: ht,
    isElement: ye,
    isRTL: ol
};
function il(e, t) {
    let r = null, n;
    const o = Te(e);
    function s() {
        var l;
        clearTimeout(n),
        (l = r) == null || l.disconnect(),
        r = null
    }
    function i(l, c) {
        l === void 0 && (l = !1),
        c === void 0 && (c = 1),
        s();
        const {left: d, top: h, width: f, height: u} = e.getBoundingClientRect();
        if (l || t(),
        !f || !u)
            return;
        const p = Zt(h)
          , m = Zt(o.clientWidth - (d + f))
          , g = Zt(o.clientHeight - (h + u))
          , v = Zt(d)
          , w = {
            rootMargin: -p + "px " + -m + "px " + -g + "px " + -v + "px",
            threshold: ce(0, Ue(1, c)) || 1
        };
        let j = !0;
        function k(T) {
            const N = T[0].intersectionRatio;
            if (N !== c) {
                if (!j)
                    return i();
                N ? i(!1, N) : n = setTimeout( () => {
                    i(!1, 1e-7)
                }
                , 1e3)
            }
            j = !1
        }
        try {
            r = new IntersectionObserver(k,{
                ...w,
                root: o.ownerDocument
            })
        } catch {
            r = new IntersectionObserver(k,w)
        }
        r.observe(e)
    }
    return i(!0),
    s
}
function al(e, t, r, n) {
    n === void 0 && (n = {});
    const {ancestorScroll: o=!0, ancestorResize: s=!0, elementResize: i=typeof ResizeObserver == "function", layoutShift: l=typeof IntersectionObserver == "function", animationFrame: c=!1} = n
      , d = ln(e)
      , h = o || s ? [...d ? Ht(d) : [], ...Ht(t)] : [];
    h.forEach(y => {
        o && y.addEventListener("scroll", r, {
            passive: !0
        }),
        s && y.addEventListener("resize", r)
    }
    );
    const f = d && l ? il(d, r) : null;
    let u = -1
      , p = null;
    i && (p = new ResizeObserver(y => {
        let[w] = y;
        w && w.target === d && p && (p.unobserve(t),
        cancelAnimationFrame(u),
        u = requestAnimationFrame( () => {
            var j;
            (j = p) == null || j.observe(t)
        }
        )),
        r()
    }
    ),
    d && !c && p.observe(d),
    p.observe(t));
    let m, g = c ? tt(e) : null;
    c && v();
    function v() {
        const y = tt(e);
        g && (y.x !== g.x || y.y !== g.y || y.width !== g.width || y.height !== g.height) && r(),
        g = y,
        m = requestAnimationFrame(v)
    }
    return r(),
    () => {
        var y;
        h.forEach(w => {
            o && w.removeEventListener("scroll", r),
            s && w.removeEventListener("resize", r)
        }
        ),
        f == null || f(),
        (y = p) == null || y.disconnect(),
        p = null,
        c && cancelAnimationFrame(m)
    }
}
const ll = Fa
  , cl = _a
  , dl = Ha
  , ul = Va
  , hl = $a
  , Dn = Da
  , fl = Ba
  , pl = (e, t, r) => {
    const n = new Map
      , o = {
        platform: sl,
        ...r
    }
      , s = {
        ...o.platform,
        _c: n
    };
    return La(e, t, {
        ...o,
        platform: s
    })
}
;
var ar = typeof document < "u" ? x.useLayoutEffect : x.useEffect;
function hr(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let r, n, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (r = e.length,
            r !== t.length)
                return !1;
            for (n = r; n-- !== 0; )
                if (!hr(e[n], t[n]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        r = o.length,
        r !== Object.keys(t).length)
            return !1;
        for (n = r; n-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[n]))
                return !1;
        for (n = r; n-- !== 0; ) {
            const s = o[n];
            if (!(s === "_owner" && e.$$typeof) && !hr(e[s], t[s]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function Fo(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Hn(e, t) {
    const r = Fo(e);
    return Math.round(t * r) / r
}
function Or(e) {
    const t = x.useRef(e);
    return ar( () => {
        t.current = e
    }
    ),
    t
}
function ml(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: r="absolute", middleware: n=[], platform: o, elements: {reference: s, floating: i}={}, transform: l=!0, whileElementsMounted: c, open: d} = e
      , [h,f] = x.useState({
        x: 0,
        y: 0,
        strategy: r,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [u,p] = x.useState(n);
    hr(u, n) || p(n);
    const [m,g] = x.useState(null)
      , [v,y] = x.useState(null)
      , w = x.useCallback(A => {
        A !== N.current && (N.current = A,
        g(A))
    }
    , [])
      , j = x.useCallback(A => {
        A !== L.current && (L.current = A,
        y(A))
    }
    , [])
      , k = s || m
      , T = i || v
      , N = x.useRef(null)
      , L = x.useRef(null)
      , S = x.useRef(h)
      , $ = c != null
      , W = Or(c)
      , _ = Or(o)
      , E = Or(d)
      , B = x.useCallback( () => {
        if (!N.current || !L.current)
            return;
        const A = {
            placement: t,
            strategy: r,
            middleware: u
        };
        _.current && (A.platform = _.current),
        pl(N.current, L.current, A).then(H => {
            const ee = {
                ...H,
                isPositioned: E.current !== !1
            };
            z.current && !hr(S.current, ee) && (S.current = ee,
            Ds.flushSync( () => {
                f(ee)
            }
            ))
        }
        )
    }
    , [u, t, r, _, E]);
    ar( () => {
        d === !1 && S.current.isPositioned && (S.current.isPositioned = !1,
        f(A => ({
            ...A,
            isPositioned: !1
        })))
    }
    , [d]);
    const z = x.useRef(!1);
    ar( () => (z.current = !0,
    () => {
        z.current = !1
    }
    ), []),
    ar( () => {
        if (k && (N.current = k),
        T && (L.current = T),
        k && T) {
            if (W.current)
                return W.current(k, T, B);
            B()
        }
    }
    , [k, T, B, W, $]);
    const Y = x.useMemo( () => ({
        reference: N,
        floating: L,
        setReference: w,
        setFloating: j
    }), [w, j])
      , D = x.useMemo( () => ({
        reference: k,
        floating: T
    }), [k, T])
      , V = x.useMemo( () => {
        const A = {
            position: r,
            left: 0,
            top: 0
        };
        if (!D.floating)
            return A;
        const H = Hn(D.floating, h.x)
          , ee = Hn(D.floating, h.y);
        return l ? {
            ...A,
            transform: "translate(" + H + "px, " + ee + "px)",
            ...Fo(D.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: r,
            left: H,
            top: ee
        }
    }
    , [r, l, D.floating, h.x, h.y]);
    return x.useMemo( () => ({
        ...h,
        update: B,
        refs: Y,
        elements: D,
        floatingStyles: V
    }), [h, B, Y, D, V])
}
const gl = e => {
    function t(r) {
        return {}.hasOwnProperty.call(r, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(r) {
            const {element: n, padding: o} = typeof e == "function" ? e(r) : e;
            return n && t(n) ? n.current != null ? Dn({
                element: n.current,
                padding: o
            }).fn(r) : {} : n ? Dn({
                element: n,
                padding: o
            }).fn(r) : {}
        }
    }
}
  , yl = (e, t) => ({
    ...ll(e),
    options: [e, t]
})
  , vl = (e, t) => ({
    ...cl(e),
    options: [e, t]
})
  , bl = (e, t) => ({
    ...fl(e),
    options: [e, t]
})
  , xl = (e, t) => ({
    ...dl(e),
    options: [e, t]
})
  , wl = (e, t) => ({
    ...ul(e),
    options: [e, t]
})
  , jl = (e, t) => ({
    ...hl(e),
    options: [e, t]
})
  , Cl = (e, t) => ({
    ...gl(e),
    options: [e, t]
});
var kl = "Arrow"
  , _o = x.forwardRef( (e, t) => {
    const {children: r, width: n=10, height: o=5, ...s} = e;
    return a.jsx(pr.svg, {
        ...s,
        ref: t,
        width: n,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? r : a.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
_o.displayName = kl;
var Tl = _o;
function Al(e) {
    const [t,r] = x.useState(void 0);
    return Lt( () => {
        if (e) {
            r({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const n = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const s = o[0];
                let i, l;
                if ("borderBoxSize"in s) {
                    const c = s.borderBoxSize
                      , d = Array.isArray(c) ? c[0] : c;
                    i = d.inlineSize,
                    l = d.blockSize
                } else
                    i = e.offsetWidth,
                    l = e.offsetHeight;
                r({
                    width: i,
                    height: l
                })
            }
            );
            return n.observe(e, {
                box: "border-box"
            }),
            () => n.unobserve(e)
        } else
            r(void 0)
    }
    , [e]),
    t
}
var Bo = "Popper"
  , [Vo,qo] = _s(Bo)
  , [wd,Uo] = Vo(Bo)
  , Wo = "PopperAnchor"
  , Go = x.forwardRef( (e, t) => {
    const {__scopePopper: r, virtualRef: n, ...o} = e
      , s = Uo(Wo, r)
      , i = x.useRef(null)
      , l = Vt(t, i);
    return x.useEffect( () => {
        s.onAnchorChange((n == null ? void 0 : n.current) || i.current)
    }
    ),
    n ? null : a.jsx(pr.div, {
        ...o,
        ref: l
    })
}
);
Go.displayName = Wo;
var cn = "PopperContent"
  , [Nl,Sl] = Vo(cn)
  , Ko = x.forwardRef( (e, t) => {
    var rt, Me, Re, Ie, Wt, nt;
    const {__scopePopper: r, side: n="bottom", sideOffset: o=0, align: s="center", alignOffset: i=0, arrowPadding: l=0, avoidCollisions: c=!0, collisionBoundary: d=[], collisionPadding: h=0, sticky: f="partial", hideWhenDetached: u=!1, updatePositionStrategy: p="optimized", onPlaced: m, ...g} = e
      , v = Uo(cn, r)
      , [y,w] = x.useState(null)
      , j = Vt(t, Qe => w(Qe))
      , [k,T] = x.useState(null)
      , N = Al(k)
      , L = (N == null ? void 0 : N.width) ?? 0
      , S = (N == null ? void 0 : N.height) ?? 0
      , $ = n + (s !== "center" ? "-" + s : "")
      , W = typeof h == "number" ? h : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...h
    }
      , _ = Array.isArray(d) ? d : [d]
      , E = _.length > 0
      , B = {
        padding: W,
        boundary: _.filter(Pl),
        altBoundary: E
    }
      , {refs: z, floatingStyles: Y, placement: D, isPositioned: V, middlewareData: A} = ml({
        strategy: "fixed",
        placement: $,
        whileElementsMounted: (...Qe) => al(...Qe, {
            animationFrame: p === "always"
        }),
        elements: {
            reference: v.anchor
        },
        middleware: [yl({
            mainAxis: o + S,
            alignmentAxis: i
        }), c && vl({
            mainAxis: !0,
            crossAxis: !1,
            limiter: f === "partial" ? bl() : void 0,
            ...B
        }), c && xl({
            ...B
        }), wl({
            ...B,
            apply: ({elements: Qe, rects: Et, availableWidth: Gt, availableHeight: Le}) => {
                const {width: jr, height: Cr} = Et.reference
                  , te = Qe.floating.style;
                te.setProperty("--radix-popper-available-width", `${Gt}px`),
                te.setProperty("--radix-popper-available-height", `${Le}px`),
                te.setProperty("--radix-popper-anchor-width", `${jr}px`),
                te.setProperty("--radix-popper-anchor-height", `${Cr}px`)
            }
        }), k && Cl({
            element: k,
            padding: l
        }), Ol({
            arrowWidth: L,
            arrowHeight: S
        }), u && jl({
            strategy: "referenceHidden",
            ...B
        })]
    })
      , [H,ee] = Xo(D)
      , O = Bs(m);
    Lt( () => {
        V && (O == null || O())
    }
    , [V, O]);
    const q = (rt = A.arrow) == null ? void 0 : rt.x
      , G = (Me = A.arrow) == null ? void 0 : Me.y
      , ue = ((Re = A.arrow) == null ? void 0 : Re.centerOffset) !== 0
      , [Ae,J] = x.useState();
    return Lt( () => {
        y && J(window.getComputedStyle(y).zIndex)
    }
    , [y]),
    a.jsx("div", {
        ref: z.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...Y,
            transform: V ? Y.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: Ae,
            "--radix-popper-transform-origin": [(Ie = A.transformOrigin) == null ? void 0 : Ie.x, (Wt = A.transformOrigin) == null ? void 0 : Wt.y].join(" "),
            ...((nt = A.hide) == null ? void 0 : nt.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: a.jsx(Nl, {
            scope: r,
            placedSide: H,
            onArrowChange: T,
            arrowX: q,
            arrowY: G,
            shouldHideArrow: ue,
            children: a.jsx(pr.div, {
                "data-side": H,
                "data-align": ee,
                ...g,
                ref: j,
                style: {
                    ...g.style,
                    animation: V ? void 0 : "none"
                }
            })
        })
    })
}
);
Ko.displayName = cn;
var Qo = "PopperArrow"
  , El = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , Yo = x.forwardRef(function(t, r) {
    const {__scopePopper: n, ...o} = t
      , s = Sl(Qo, n)
      , i = El[s.placedSide];
    return a.jsx("span", {
        ref: s.onArrowChange,
        style: {
            position: "absolute",
            left: s.arrowX,
            top: s.arrowY,
            [i]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[s.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[s.placedSide],
            visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: a.jsx(Tl, {
            ...o,
            ref: r,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
Yo.displayName = Qo;
function Pl(e) {
    return e !== null
}
var Ol = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var v, y, w;
        const {placement: r, rects: n, middlewareData: o} = t
          , i = ((v = o.arrow) == null ? void 0 : v.centerOffset) !== 0
          , l = i ? 0 : e.arrowWidth
          , c = i ? 0 : e.arrowHeight
          , [d,h] = Xo(r)
          , f = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[h]
          , u = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + l / 2
          , p = (((w = o.arrow) == null ? void 0 : w.y) ?? 0) + c / 2;
        let m = ""
          , g = "";
        return d === "bottom" ? (m = i ? f : `${u}px`,
        g = `${-c}px`) : d === "top" ? (m = i ? f : `${u}px`,
        g = `${n.floating.height + c}px`) : d === "right" ? (m = `${-c}px`,
        g = i ? f : `${p}px`) : d === "left" && (m = `${n.floating.width + c}px`,
        g = i ? f : `${p}px`),
        {
            data: {
                x: m,
                y: g
            }
        }
    }
});
function Xo(e) {
    const [t,r="center"] = e.split("-");
    return [t, r]
}
var Ml = Go
  , Rl = Ko
  , Il = Yo;
function Ll(e, t) {
    return x.useReducer( (r, n) => t[r][n] ?? r, e)
}
var Jo = e => {
    const {present: t, children: r} = e
      , n = Dl(t)
      , o = typeof r == "function" ? r({
        present: n.isPresent
    }) : x.Children.only(r)
      , s = Vt(n.ref, Hl(o));
    return typeof r == "function" || n.isPresent ? x.cloneElement(o, {
        ref: s
    }) : null
}
;
Jo.displayName = "Presence";
function Dl(e) {
    const [t,r] = x.useState()
      , n = x.useRef({})
      , o = x.useRef(e)
      , s = x.useRef("none")
      , i = e ? "mounted" : "unmounted"
      , [l,c] = Ll(i, {
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
    return x.useEffect( () => {
        const d = er(n.current);
        s.current = l === "mounted" ? d : "none"
    }
    , [l]),
    Lt( () => {
        const d = n.current
          , h = o.current;
        if (h !== e) {
            const u = s.current
              , p = er(d);
            e ? c("MOUNT") : p === "none" || (d == null ? void 0 : d.display) === "none" ? c("UNMOUNT") : c(h && u !== p ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, c]),
    Lt( () => {
        if (t) {
            let d;
            const h = t.ownerDocument.defaultView ?? window
              , f = p => {
                const g = er(n.current).includes(p.animationName);
                if (p.target === t && g && (c("ANIMATION_END"),
                !o.current)) {
                    const v = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    d = h.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = v)
                    }
                    )
                }
            }
              , u = p => {
                p.target === t && (s.current = er(n.current))
            }
            ;
            return t.addEventListener("animationstart", u),
            t.addEventListener("animationcancel", f),
            t.addEventListener("animationend", f),
            () => {
                h.clearTimeout(d),
                t.removeEventListener("animationstart", u),
                t.removeEventListener("animationcancel", f),
                t.removeEventListener("animationend", f)
            }
        } else
            c("ANIMATION_END")
    }
    , [t, c]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(l),
        ref: x.useCallback(d => {
            d && (n.current = getComputedStyle(d)),
            r(d)
        }
        , [])
    }
}
function er(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function Hl(e) {
    var n, o;
    let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get
      , r = t && "isReactWarning"in t && t.isReactWarning;
    return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    r = t && "isReactWarning"in t && t.isReactWarning,
    r ? e.props.ref : e.props.ref || e.ref)
}
var [vr,jd] = Ta("Tooltip", [qo])
  , dn = qo()
  , Zo = "TooltipProvider"
  , $l = 700
  , $n = "tooltip.open"
  , [zl,es] = vr(Zo)
  , ts = e => {
    const {__scopeTooltip: t, delayDuration: r=$l, skipDelayDuration: n=300, disableHoverableContent: o=!1, children: s} = e
      , [i,l] = x.useState(!0)
      , c = x.useRef(!1)
      , d = x.useRef(0);
    return x.useEffect( () => {
        const h = d.current;
        return () => window.clearTimeout(h)
    }
    , []),
    a.jsx(zl, {
        scope: t,
        isOpenDelayed: i,
        delayDuration: r,
        onOpen: x.useCallback( () => {
            window.clearTimeout(d.current),
            l(!1)
        }
        , []),
        onClose: x.useCallback( () => {
            window.clearTimeout(d.current),
            d.current = window.setTimeout( () => l(!0), n)
        }
        , [n]),
        isPointerInTransitRef: c,
        onPointerInTransitChange: x.useCallback(h => {
            c.current = h
        }
        , []),
        disableHoverableContent: o,
        children: s
    })
}
;
ts.displayName = Zo;
var rs = "Tooltip"
  , [Cd,br] = vr(rs)
  , Gr = "TooltipTrigger"
  , Fl = x.forwardRef( (e, t) => {
    const {__scopeTooltip: r, ...n} = e
      , o = br(Gr, r)
      , s = es(Gr, r)
      , i = dn(r)
      , l = x.useRef(null)
      , c = Vt(t, l, o.onTriggerChange)
      , d = x.useRef(!1)
      , h = x.useRef(!1)
      , f = x.useCallback( () => d.current = !1, []);
    return x.useEffect( () => () => document.removeEventListener("pointerup", f), [f]),
    a.jsx(Ml, {
        asChild: !0,
        ...i,
        children: a.jsx(pr.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...n,
            ref: c,
            onPointerMove: at(e.onPointerMove, u => {
                u.pointerType !== "touch" && !h.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(),
                h.current = !0)
            }
            ),
            onPointerLeave: at(e.onPointerLeave, () => {
                o.onTriggerLeave(),
                h.current = !1
            }
            ),
            onPointerDown: at(e.onPointerDown, () => {
                d.current = !0,
                document.addEventListener("pointerup", f, {
                    once: !0
                })
            }
            ),
            onFocus: at(e.onFocus, () => {
                d.current || o.onOpen()
            }
            ),
            onBlur: at(e.onBlur, o.onClose),
            onClick: at(e.onClick, o.onClose)
        })
    })
}
);
Fl.displayName = Gr;
var _l = "TooltipPortal"
  , [kd,Bl] = vr(_l, {
    forceMount: void 0
})
  , Tt = "TooltipContent"
  , ns = x.forwardRef( (e, t) => {
    const r = Bl(Tt, e.__scopeTooltip)
      , {forceMount: n=r.forceMount, side: o="top", ...s} = e
      , i = br(Tt, e.__scopeTooltip);
    return a.jsx(Jo, {
        present: n || i.open,
        children: i.disableHoverableContent ? a.jsx(os, {
            side: o,
            ...s,
            ref: t
        }) : a.jsx(Vl, {
            side: o,
            ...s,
            ref: t
        })
    })
}
)
  , Vl = x.forwardRef( (e, t) => {
    const r = br(Tt, e.__scopeTooltip)
      , n = es(Tt, e.__scopeTooltip)
      , o = x.useRef(null)
      , s = Vt(t, o)
      , [i,l] = x.useState(null)
      , {trigger: c, onClose: d} = r
      , h = o.current
      , {onPointerInTransitChange: f} = n
      , u = x.useCallback( () => {
        l(null),
        f(!1)
    }
    , [f])
      , p = x.useCallback( (m, g) => {
        const v = m.currentTarget
          , y = {
            x: m.clientX,
            y: m.clientY
        }
          , w = Gl(y, v.getBoundingClientRect())
          , j = Kl(y, w)
          , k = Ql(g.getBoundingClientRect())
          , T = Xl([...j, ...k]);
        l(T),
        f(!0)
    }
    , [f]);
    return x.useEffect( () => () => u(), [u]),
    x.useEffect( () => {
        if (c && h) {
            const m = v => p(v, h)
              , g = v => p(v, c);
            return c.addEventListener("pointerleave", m),
            h.addEventListener("pointerleave", g),
            () => {
                c.removeEventListener("pointerleave", m),
                h.removeEventListener("pointerleave", g)
            }
        }
    }
    , [c, h, p, u]),
    x.useEffect( () => {
        if (i) {
            const m = g => {
                const v = g.target
                  , y = {
                    x: g.clientX,
                    y: g.clientY
                }
                  , w = (c == null ? void 0 : c.contains(v)) || (h == null ? void 0 : h.contains(v))
                  , j = !Yl(y, i);
                w ? u() : j && (u(),
                d())
            }
            ;
            return document.addEventListener("pointermove", m),
            () => document.removeEventListener("pointermove", m)
        }
    }
    , [c, h, i, d, u]),
    a.jsx(os, {
        ...e,
        ref: s
    })
}
)
  , [ql,Ul] = vr(rs, {
    isInside: !1
})
  , os = x.forwardRef( (e, t) => {
    const {__scopeTooltip: r, children: n, "aria-label": o, onEscapeKeyDown: s, onPointerDownOutside: i, ...l} = e
      , c = br(Tt, r)
      , d = dn(r)
      , {onClose: h} = c;
    return x.useEffect( () => (document.addEventListener($n, h),
    () => document.removeEventListener($n, h)), [h]),
    x.useEffect( () => {
        if (c.trigger) {
            const f = u => {
                const p = u.target;
                p != null && p.contains(c.trigger) && h()
            }
            ;
            return window.addEventListener("scroll", f, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", f, {
                capture: !0
            })
        }
    }
    , [c.trigger, h]),
    a.jsx(Vs, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        onFocusOutside: f => f.preventDefault(),
        onDismiss: h,
        children: a.jsxs(Rl, {
            "data-state": c.stateAttribute,
            ...d,
            ...l,
            ref: t,
            style: {
                ...l.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [a.jsx(qs, {
                children: n
            }), a.jsx(ql, {
                scope: r,
                isInside: !0,
                children: a.jsx(Us, {
                    id: c.contentId,
                    role: "tooltip",
                    children: o || n
                })
            })]
        })
    })
}
);
ns.displayName = Tt;
var ss = "TooltipArrow"
  , Wl = x.forwardRef( (e, t) => {
    const {__scopeTooltip: r, ...n} = e
      , o = dn(r);
    return Ul(ss, r).isInside ? null : a.jsx(Il, {
        ...o,
        ...n,
        ref: t
    })
}
);
Wl.displayName = ss;
function Gl(e, t) {
    const r = Math.abs(t.top - e.y)
      , n = Math.abs(t.bottom - e.y)
      , o = Math.abs(t.right - e.x)
      , s = Math.abs(t.left - e.x);
    switch (Math.min(r, n, o, s)) {
    case s:
        return "left";
    case o:
        return "right";
    case r:
        return "top";
    case n:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function Kl(e, t, r=5) {
    const n = [];
    switch (t) {
    case "top":
        n.push({
            x: e.x - r,
            y: e.y + r
        }, {
            x: e.x + r,
            y: e.y + r
        });
        break;
    case "bottom":
        n.push({
            x: e.x - r,
            y: e.y - r
        }, {
            x: e.x + r,
            y: e.y - r
        });
        break;
    case "left":
        n.push({
            x: e.x + r,
            y: e.y - r
        }, {
            x: e.x + r,
            y: e.y + r
        });
        break;
    case "right":
        n.push({
            x: e.x - r,
            y: e.y - r
        }, {
            x: e.x - r,
            y: e.y + r
        });
        break
    }
    return n
}
function Ql(e) {
    const {top: t, right: r, bottom: n, left: o} = e;
    return [{
        x: o,
        y: t
    }, {
        x: r,
        y: t
    }, {
        x: r,
        y: n
    }, {
        x: o,
        y: n
    }]
}
function Yl(e, t) {
    const {x: r, y: n} = e;
    let o = !1;
    for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
        const l = t[s].x
          , c = t[s].y
          , d = t[i].x
          , h = t[i].y;
        c > n != h > n && r < (d - l) * (n - c) / (h - c) + l && (o = !o)
    }
    return o
}
function Xl(e) {
    const t = e.slice();
    return t.sort( (r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0),
    Jl(t)
}
function Jl(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let n = 0; n < e.length; n++) {
        const o = e[n];
        for (; t.length >= 2; ) {
            const s = t[t.length - 1]
              , i = t[t.length - 2];
            if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x))
                t.pop();
            else
                break
        }
        t.push(o)
    }
    t.pop();
    const r = [];
    for (let n = e.length - 1; n >= 0; n--) {
        const o = e[n];
        for (; r.length >= 2; ) {
            const s = r[r.length - 1]
              , i = r[r.length - 2];
            if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x))
                r.pop();
            else
                break
        }
        r.push(o)
    }
    return r.pop(),
    t.length === 1 && r.length === 1 && t[0].x === r[0].x && t[0].y === r[0].y ? t : t.concat(r)
}
var Zl = ts
  , is = ns;
const ec = Zl
  , tc = x.forwardRef( ({className: e, sideOffset: t=4, ...r}, n) => a.jsx(is, {
    ref: n,
    sideOffset: t,
    className: ie("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...r
}));
tc.displayName = is.displayName;
var xr = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , wr = typeof window > "u" || "Deno"in globalThis;
function pe() {}
function rc(e, t) {
    return typeof e == "function" ? e(t) : e
}
function nc(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function oc(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function zn(e, t) {
    return typeof e == "function" ? e(t) : e
}
function sc(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Fn(e, t) {
    const {type: r="all", exact: n, fetchStatus: o, predicate: s, queryKey: i, stale: l} = e;
    if (i) {
        if (n) {
            if (t.queryHash !== un(i, t.options))
                return !1
        } else if (!zt(t.queryKey, i))
            return !1
    }
    if (r !== "all") {
        const c = t.isActive();
        if (r === "active" && !c || r === "inactive" && c)
            return !1
    }
    return !(typeof l == "boolean" && t.isStale() !== l || o && o !== t.state.fetchStatus || s && !s(t))
}
function _n(e, t) {
    const {exact: r, status: n, predicate: o, mutationKey: s} = e;
    if (s) {
        if (!t.options.mutationKey)
            return !1;
        if (r) {
            if ($t(t.options.mutationKey) !== $t(s))
                return !1
        } else if (!zt(t.options.mutationKey, s))
            return !1
    }
    return !(n && t.state.status !== n || o && !o(t))
}
function un(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || $t)(e)
}
function $t(e) {
    return JSON.stringify(e, (t, r) => Kr(r) ? Object.keys(r).sort().reduce( (n, o) => (n[o] = r[o],
    n), {}) : r)
}
function zt(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(r => !zt(e[r], t[r])) : !1
}
function as(e, t) {
    if (e === t)
        return e;
    const r = Bn(e) && Bn(t);
    if (r || Kr(e) && Kr(t)) {
        const n = r ? e : Object.keys(e)
          , o = n.length
          , s = r ? t : Object.keys(t)
          , i = s.length
          , l = r ? [] : {};
        let c = 0;
        for (let d = 0; d < i; d++) {
            const h = r ? d : s[d];
            (!r && n.includes(h) || r) && e[h] === void 0 && t[h] === void 0 ? (l[h] = void 0,
            c++) : (l[h] = as(e[h], t[h]),
            l[h] === e[h] && e[h] !== void 0 && c++)
        }
        return o === i && c === o ? e : l
    }
    return t
}
function Bn(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function Kr(e) {
    if (!Vn(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const r = t.prototype;
    return !(!Vn(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function Vn(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function ic(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function ac(e, t, r) {
    return typeof r.structuralSharing == "function" ? r.structuralSharing(e, t) : r.structuralSharing !== !1 ? as(e, t) : t
}
function lc(e, t, r=0) {
    const n = [...e, t];
    return r && n.length > r ? n.slice(1) : n
}
function cc(e, t, r=0) {
    const n = [t, ...e];
    return r && n.length > r ? n.slice(0, -1) : n
}
var ls = Symbol();
function cs(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === ls ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Ye, Fe, mt, eo, dc = (eo = class extends xr {
    constructor() {
        super();
        F(this, Ye);
        F(this, Fe);
        F(this, mt);
        I(this, mt, t => {
            if (!wr && window.addEventListener) {
                const r = () => t();
                return window.addEventListener("visibilitychange", r, !1),
                () => {
                    window.removeEventListener("visibilitychange", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        b(this, Fe) || this.setEventListener(b(this, mt))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = b(this, Fe)) == null || t.call(this),
        I(this, Fe, void 0))
    }
    setEventListener(t) {
        var r;
        I(this, mt, t),
        (r = b(this, Fe)) == null || r.call(this),
        I(this, Fe, t(n => {
            typeof n == "boolean" ? this.setFocused(n) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        b(this, Ye) !== t && (I(this, Ye, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(r => {
            r(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof b(this, Ye) == "boolean" ? b(this, Ye) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
Ye = new WeakMap,
Fe = new WeakMap,
mt = new WeakMap,
eo), ds = new dc, gt, _e, yt, to, uc = (to = class extends xr {
    constructor() {
        super();
        F(this, gt, !0);
        F(this, _e);
        F(this, yt);
        I(this, yt, t => {
            if (!wr && window.addEventListener) {
                const r = () => t(!0)
                  , n = () => t(!1);
                return window.addEventListener("online", r, !1),
                window.addEventListener("offline", n, !1),
                () => {
                    window.removeEventListener("online", r),
                    window.removeEventListener("offline", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        b(this, _e) || this.setEventListener(b(this, yt))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = b(this, _e)) == null || t.call(this),
        I(this, _e, void 0))
    }
    setEventListener(t) {
        var r;
        I(this, yt, t),
        (r = b(this, _e)) == null || r.call(this),
        I(this, _e, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        b(this, gt) !== t && (I(this, gt, t),
        this.listeners.forEach(n => {
            n(t)
        }
        ))
    }
    isOnline() {
        return b(this, gt)
    }
}
,
gt = new WeakMap,
_e = new WeakMap,
yt = new WeakMap,
to), fr = new uc;
function hc(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function us(e) {
    return (e ?? "online") === "online" ? fr.isOnline() : !0
}
var hs = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function Mr(e) {
    return e instanceof hs
}
function fs(e) {
    let t = !1, r = 0, n = !1, o, s, i;
    const l = new Promise( (y, w) => {
        s = y,
        i = w
    }
    )
      , c = y => {
        var w;
        n || (m(new hs(y)),
        (w = e.abort) == null || w.call(e))
    }
      , d = () => {
        t = !0
    }
      , h = () => {
        t = !1
    }
      , f = () => ds.isFocused() && (e.networkMode === "always" || fr.isOnline()) && e.canRun()
      , u = () => us(e.networkMode) && e.canRun()
      , p = y => {
        var w;
        n || (n = !0,
        (w = e.onSuccess) == null || w.call(e, y),
        o == null || o(),
        s(y))
    }
      , m = y => {
        var w;
        n || (n = !0,
        (w = e.onError) == null || w.call(e, y),
        o == null || o(),
        i(y))
    }
      , g = () => new Promise(y => {
        var w;
        o = j => {
            (n || f()) && y(j)
        }
        ,
        (w = e.onPause) == null || w.call(e)
    }
    ).then( () => {
        var y;
        o = void 0,
        n || (y = e.onContinue) == null || y.call(e)
    }
    )
      , v = () => {
        if (n)
            return;
        let y;
        const w = r === 0 ? e.initialPromise : void 0;
        try {
            y = w ?? e.fn()
        } catch (j) {
            y = Promise.reject(j)
        }
        Promise.resolve(y).then(p).catch(j => {
            var S;
            if (n)
                return;
            const k = e.retry ?? (wr ? 0 : 3)
              , T = e.retryDelay ?? hc
              , N = typeof T == "function" ? T(r, j) : T
              , L = k === !0 || typeof k == "number" && r < k || typeof k == "function" && k(r, j);
            if (t || !L) {
                m(j);
                return
            }
            r++,
            (S = e.onFail) == null || S.call(e, r, j),
            ic(N).then( () => f() ? void 0 : g()).then( () => {
                t ? m(j) : v()
            }
            )
        }
        )
    }
    ;
    return {
        promise: l,
        cancel: c,
        continue: () => (o == null || o(),
        l),
        cancelRetry: d,
        continueRetry: h,
        canStart: u,
        start: () => (u() ? v() : g().then(v),
        l)
    }
}
function fc() {
    let e = []
      , t = 0
      , r = l => {
        l()
    }
      , n = l => {
        l()
    }
      , o = l => setTimeout(l, 0);
    const s = l => {
        t ? e.push(l) : o( () => {
            r(l)
        }
        )
    }
      , i = () => {
        const l = e;
        e = [],
        l.length && o( () => {
            n( () => {
                l.forEach(c => {
                    r(c)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: l => {
            let c;
            t++;
            try {
                c = l()
            } finally {
                t--,
                t || i()
            }
            return c
        }
        ,
        batchCalls: l => (...c) => {
            s( () => {
                l(...c)
            }
            )
        }
        ,
        schedule: s,
        setNotifyFunction: l => {
            r = l
        }
        ,
        setBatchNotifyFunction: l => {
            n = l
        }
        ,
        setScheduler: l => {
            o = l
        }
    }
}
var se = fc(), Xe, ro, ps = (ro = class {
    constructor() {
        F(this, Xe)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        nc(this.gcTime) && I(this, Xe, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (wr ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        b(this, Xe) && (clearTimeout(b(this, Xe)),
        I(this, Xe, void 0))
    }
}
,
Xe = new WeakMap,
ro), vt, bt, fe, ne, _t, Je, me, Ee, no, pc = (no = class extends ps {
    constructor(t) {
        super();
        F(this, me);
        F(this, vt);
        F(this, bt);
        F(this, fe);
        F(this, ne);
        F(this, _t);
        F(this, Je);
        I(this, Je, !1),
        I(this, _t, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        I(this, fe, t.cache),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        I(this, vt, gc(this.options)),
        this.state = t.state ?? b(this, vt),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = b(this, ne)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...b(this, _t),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && b(this, fe).remove(this)
    }
    setData(t, r) {
        const n = ac(this.state.data, t, this.options);
        return re(this, me, Ee).call(this, {
            data: n,
            type: "success",
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual
        }),
        n
    }
    setState(t, r) {
        re(this, me, Ee).call(this, {
            type: "setState",
            state: t,
            setStateOptions: r
        })
    }
    cancel(t) {
        var n, o;
        const r = (n = b(this, ne)) == null ? void 0 : n.promise;
        return (o = b(this, ne)) == null || o.cancel(t),
        r ? r.then(pe).catch(pe) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(b(this, vt))
    }
    isActive() {
        return this.observers.some(t => sc(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 && !this.isActive()
    }
    isStale() {
        return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0
    }
    isStaleByTime(t=0) {
        return this.state.isInvalidated || this.state.data === void 0 || !oc(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var r;
        const t = this.observers.find(n => n.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (r = b(this, ne)) == null || r.continue()
    }
    onOnline() {
        var r;
        const t = this.observers.find(n => n.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (r = b(this, ne)) == null || r.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        b(this, fe).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(r => r !== t),
        this.observers.length || (b(this, ne) && (b(this, Je) ? b(this, ne).cancel({
            revert: !0
        }) : b(this, ne).cancelRetry()),
        this.scheduleGc()),
        b(this, fe).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || re(this, me, Ee).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, r) {
        var c, d, h;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (r != null && r.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (b(this, ne))
                return b(this, ne).continueRetry(),
                b(this, ne).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const f = this.observers.find(u => u.options.queryFn);
            f && this.setOptions(f.options)
        }
        const n = new AbortController
          , o = f => {
            Object.defineProperty(f, "signal", {
                enumerable: !0,
                get: () => (I(this, Je, !0),
                n.signal)
            })
        }
          , s = () => {
            const f = cs(this.options, r)
              , u = {
                queryKey: this.queryKey,
                meta: this.meta
            };
            return o(u),
            I(this, Je, !1),
            this.options.persister ? this.options.persister(f, u, this) : f(u)
        }
          , i = {
            fetchOptions: r,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: s
        };
        o(i),
        (c = this.options.behavior) == null || c.onFetch(i, this),
        I(this, bt, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((d = i.fetchOptions) == null ? void 0 : d.meta)) && re(this, me, Ee).call(this, {
            type: "fetch",
            meta: (h = i.fetchOptions) == null ? void 0 : h.meta
        });
        const l = f => {
            var u, p, m, g;
            Mr(f) && f.silent || re(this, me, Ee).call(this, {
                type: "error",
                error: f
            }),
            Mr(f) || ((p = (u = b(this, fe).config).onError) == null || p.call(u, f, this),
            (g = (m = b(this, fe).config).onSettled) == null || g.call(m, this.state.data, f, this)),
            this.isFetchingOptimistic || this.scheduleGc(),
            this.isFetchingOptimistic = !1
        }
        ;
        return I(this, ne, fs({
            initialPromise: r == null ? void 0 : r.initialPromise,
            fn: i.fetchFn,
            abort: n.abort.bind(n),
            onSuccess: f => {
                var u, p, m, g;
                if (f === void 0) {
                    l(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(f)
                } catch (v) {
                    l(v);
                    return
                }
                (p = (u = b(this, fe).config).onSuccess) == null || p.call(u, f, this),
                (g = (m = b(this, fe).config).onSettled) == null || g.call(m, f, this.state.error, this),
                this.isFetchingOptimistic || this.scheduleGc(),
                this.isFetchingOptimistic = !1
            }
            ,
            onError: l,
            onFail: (f, u) => {
                re(this, me, Ee).call(this, {
                    type: "failed",
                    failureCount: f,
                    error: u
                })
            }
            ,
            onPause: () => {
                re(this, me, Ee).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                re(this, me, Ee).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: i.options.retry,
            retryDelay: i.options.retryDelay,
            networkMode: i.options.networkMode,
            canRun: () => !0
        })),
        b(this, ne).start()
    }
}
,
vt = new WeakMap,
bt = new WeakMap,
fe = new WeakMap,
ne = new WeakMap,
_t = new WeakMap,
Je = new WeakMap,
me = new WeakSet,
Ee = function(t) {
    const r = n => {
        switch (t.type) {
        case "failed":
            return {
                ...n,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...n,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...n,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...n,
                ...mc(n.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return {
                ...n,
                data: t.data,
                dataUpdateCount: n.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const o = t.error;
            return Mr(o) && o.revert && b(this, bt) ? {
                ...b(this, bt),
                fetchStatus: "idle"
            } : {
                ...n,
                error: o,
                errorUpdateCount: n.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: n.fetchFailureCount + 1,
                fetchFailureReason: o,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...n,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...n,
                ...t.state
            }
        }
    }
    ;
    this.state = r(this.state),
    se.batch( () => {
        this.observers.forEach(n => {
            n.onQueryUpdate()
        }
        ),
        b(this, fe).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
no);
function mc(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: us(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function gc(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , r = t !== void 0
      , n = r ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: r ? n ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: r ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var we, oo, yc = (oo = class extends xr {
    constructor(t={}) {
        super();
        F(this, we);
        this.config = t,
        I(this, we, new Map)
    }
    build(t, r, n) {
        const o = r.queryKey
          , s = r.queryHash ?? un(o, r);
        let i = this.get(s);
        return i || (i = new pc({
            cache: this,
            queryKey: o,
            queryHash: s,
            options: t.defaultQueryOptions(r),
            state: n,
            defaultOptions: t.getQueryDefaults(o)
        }),
        this.add(i)),
        i
    }
    add(t) {
        b(this, we).has(t.queryHash) || (b(this, we).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const r = b(this, we).get(t.queryHash);
        r && (t.destroy(),
        r === t && b(this, we).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        se.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return b(this, we).get(t)
    }
    getAll() {
        return [...b(this, we).values()]
    }
    find(t) {
        const r = {
            exact: !0,
            ...t
        };
        return this.getAll().find(n => Fn(r, n))
    }
    findAll(t={}) {
        const r = this.getAll();
        return Object.keys(t).length > 0 ? r.filter(n => Fn(t, n)) : r
    }
    notify(t) {
        se.batch( () => {
            this.listeners.forEach(r => {
                r(t)
            }
            )
        }
        )
    }
    onFocus() {
        se.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        se.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
we = new WeakMap,
oo), je, oe, Ze, Ce, ze, so, vc = (so = class extends ps {
    constructor(t) {
        super();
        F(this, Ce);
        F(this, je);
        F(this, oe);
        F(this, Ze);
        this.mutationId = t.mutationId,
        I(this, oe, t.mutationCache),
        I(this, je, []),
        this.state = t.state || bc(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        b(this, je).includes(t) || (b(this, je).push(t),
        this.clearGcTimeout(),
        b(this, oe).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        I(this, je, b(this, je).filter(r => r !== t)),
        this.scheduleGc(),
        b(this, oe).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        b(this, je).length || (this.state.status === "pending" ? this.scheduleGc() : b(this, oe).remove(this))
    }
    continue() {
        var t;
        return ((t = b(this, Ze)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var o, s, i, l, c, d, h, f, u, p, m, g, v, y, w, j, k, T, N, L;
        I(this, Ze, fs({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (S, $) => {
                re(this, Ce, ze).call(this, {
                    type: "failed",
                    failureCount: S,
                    error: $
                })
            }
            ,
            onPause: () => {
                re(this, Ce, ze).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                re(this, Ce, ze).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => b(this, oe).canRun(this)
        }));
        const r = this.state.status === "pending"
          , n = !b(this, Ze).canStart();
        try {
            if (!r) {
                re(this, Ce, ze).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: n
                }),
                await ((s = (o = b(this, oe).config).onMutate) == null ? void 0 : s.call(o, t, this));
                const $ = await ((l = (i = this.options).onMutate) == null ? void 0 : l.call(i, t));
                $ !== this.state.context && re(this, Ce, ze).call(this, {
                    type: "pending",
                    context: $,
                    variables: t,
                    isPaused: n
                })
            }
            const S = await b(this, Ze).start();
            return await ((d = (c = b(this, oe).config).onSuccess) == null ? void 0 : d.call(c, S, t, this.state.context, this)),
            await ((f = (h = this.options).onSuccess) == null ? void 0 : f.call(h, S, t, this.state.context)),
            await ((p = (u = b(this, oe).config).onSettled) == null ? void 0 : p.call(u, S, null, this.state.variables, this.state.context, this)),
            await ((g = (m = this.options).onSettled) == null ? void 0 : g.call(m, S, null, t, this.state.context)),
            re(this, Ce, ze).call(this, {
                type: "success",
                data: S
            }),
            S
        } catch (S) {
            try {
                throw await ((y = (v = b(this, oe).config).onError) == null ? void 0 : y.call(v, S, t, this.state.context, this)),
                await ((j = (w = this.options).onError) == null ? void 0 : j.call(w, S, t, this.state.context)),
                await ((T = (k = b(this, oe).config).onSettled) == null ? void 0 : T.call(k, void 0, S, this.state.variables, this.state.context, this)),
                await ((L = (N = this.options).onSettled) == null ? void 0 : L.call(N, void 0, S, t, this.state.context)),
                S
            } finally {
                re(this, Ce, ze).call(this, {
                    type: "error",
                    error: S
                })
            }
        } finally {
            b(this, oe).runNext(this)
        }
    }
}
,
je = new WeakMap,
oe = new WeakMap,
Ze = new WeakMap,
Ce = new WeakSet,
ze = function(t) {
    const r = n => {
        switch (t.type) {
        case "failed":
            return {
                ...n,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...n,
                isPaused: !0
            };
        case "continue":
            return {
                ...n,
                isPaused: !1
            };
        case "pending":
            return {
                ...n,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...n,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...n,
                data: void 0,
                error: t.error,
                failureCount: n.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = r(this.state),
    se.batch( () => {
        b(this, je).forEach(n => {
            n.onMutationUpdate(t)
        }
        ),
        b(this, oe).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
so);
function bc() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var ae, Bt, io, xc = (io = class extends xr {
    constructor(t={}) {
        super();
        F(this, ae);
        F(this, Bt);
        this.config = t,
        I(this, ae, new Map),
        I(this, Bt, Date.now())
    }
    build(t, r, n) {
        const o = new vc({
            mutationCache: this,
            mutationId: ++Yt(this, Bt)._,
            options: t.defaultMutationOptions(r),
            state: n
        });
        return this.add(o),
        o
    }
    add(t) {
        const r = tr(t)
          , n = b(this, ae).get(r) ?? [];
        n.push(t),
        b(this, ae).set(r, n),
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        var n;
        const r = tr(t);
        if (b(this, ae).has(r)) {
            const o = (n = b(this, ae).get(r)) == null ? void 0 : n.filter(s => s !== t);
            o && (o.length === 0 ? b(this, ae).delete(r) : b(this, ae).set(r, o))
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        var n;
        const r = (n = b(this, ae).get(tr(t))) == null ? void 0 : n.find(o => o.state.status === "pending");
        return !r || r === t
    }
    runNext(t) {
        var n;
        const r = (n = b(this, ae).get(tr(t))) == null ? void 0 : n.find(o => o !== t && o.state.isPaused);
        return (r == null ? void 0 : r.continue()) ?? Promise.resolve()
    }
    clear() {
        se.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    getAll() {
        return [...b(this, ae).values()].flat()
    }
    find(t) {
        const r = {
            exact: !0,
            ...t
        };
        return this.getAll().find(n => _n(r, n))
    }
    findAll(t={}) {
        return this.getAll().filter(r => _n(t, r))
    }
    notify(t) {
        se.batch( () => {
            this.listeners.forEach(r => {
                r(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(r => r.state.isPaused);
        return se.batch( () => Promise.all(t.map(r => r.continue().catch(pe))))
    }
}
,
ae = new WeakMap,
Bt = new WeakMap,
io);
function tr(e) {
    var t;
    return ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
}
function qn(e) {
    return {
        onFetch: (t, r) => {
            var h, f, u, p, m;
            const n = t.options
              , o = (u = (f = (h = t.fetchOptions) == null ? void 0 : h.meta) == null ? void 0 : f.fetchMore) == null ? void 0 : u.direction
              , s = ((p = t.state.data) == null ? void 0 : p.pages) || []
              , i = ((m = t.state.data) == null ? void 0 : m.pageParams) || [];
            let l = {
                pages: [],
                pageParams: []
            }
              , c = 0;
            const d = async () => {
                let g = !1;
                const v = j => {
                    Object.defineProperty(j, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? g = !0 : t.signal.addEventListener("abort", () => {
                            g = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , y = cs(t.options, t.fetchOptions)
                  , w = async (j, k, T) => {
                    if (g)
                        return Promise.reject();
                    if (k == null && j.pages.length)
                        return Promise.resolve(j);
                    const N = {
                        queryKey: t.queryKey,
                        pageParam: k,
                        direction: T ? "backward" : "forward",
                        meta: t.options.meta
                    };
                    v(N);
                    const L = await y(N)
                      , {maxPages: S} = t.options
                      , $ = T ? cc : lc;
                    return {
                        pages: $(j.pages, L, S),
                        pageParams: $(j.pageParams, k, S)
                    }
                }
                ;
                if (o && s.length) {
                    const j = o === "backward"
                      , k = j ? wc : Un
                      , T = {
                        pages: s,
                        pageParams: i
                    }
                      , N = k(n, T);
                    l = await w(T, N, j)
                } else {
                    const j = e ?? s.length;
                    do {
                        const k = c === 0 ? i[0] ?? n.initialPageParam : Un(n, l);
                        if (c > 0 && k == null)
                            break;
                        l = await w(l, k),
                        c++
                    } while (c < j)
                }
                return l
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var g, v;
                return (v = (g = t.options).persister) == null ? void 0 : v.call(g, d, {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, r)
            }
            : t.fetchFn = d
        }
    }
}
function Un(e, {pages: t, pageParams: r}) {
    const n = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[n], t, r[n], r) : void 0
}
function wc(e, {pages: t, pageParams: r}) {
    var n;
    return t.length > 0 ? (n = e.getPreviousPageParam) == null ? void 0 : n.call(e, t[0], t, r[0], r) : void 0
}
var X, Be, Ve, xt, wt, qe, jt, Ct, ao, jc = (ao = class {
    constructor(e={}) {
        F(this, X);
        F(this, Be);
        F(this, Ve);
        F(this, xt);
        F(this, wt);
        F(this, qe);
        F(this, jt);
        F(this, Ct);
        I(this, X, e.queryCache || new yc),
        I(this, Be, e.mutationCache || new xc),
        I(this, Ve, e.defaultOptions || {}),
        I(this, xt, new Map),
        I(this, wt, new Map),
        I(this, qe, 0)
    }
    mount() {
        Yt(this, qe)._++,
        b(this, qe) === 1 && (I(this, jt, ds.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            b(this, X).onFocus())
        }
        )),
        I(this, Ct, fr.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            b(this, X).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        Yt(this, qe)._--,
        b(this, qe) === 0 && ((e = b(this, jt)) == null || e.call(this),
        I(this, jt, void 0),
        (t = b(this, Ct)) == null || t.call(this),
        I(this, Ct, void 0))
    }
    isFetching(e) {
        return b(this, X).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return b(this, Be).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var r;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (r = b(this, X).get(t.queryHash)) == null ? void 0 : r.state.data
    }
    ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0)
            return this.fetchQuery(e);
        {
            const r = this.defaultQueryOptions(e)
              , n = b(this, X).build(this, r);
            return e.revalidateIfStale && n.isStaleByTime(zn(r.staleTime, n)) && this.prefetchQuery(r),
            Promise.resolve(t)
        }
    }
    getQueriesData(e) {
        return b(this, X).findAll(e).map( ({queryKey: t, state: r}) => {
            const n = r.data;
            return [t, n]
        }
        )
    }
    setQueryData(e, t, r) {
        const n = this.defaultQueryOptions({
            queryKey: e
        })
          , o = b(this, X).get(n.queryHash)
          , s = o == null ? void 0 : o.state.data
          , i = rc(t, s);
        if (i !== void 0)
            return b(this, X).build(this, n).setData(i, {
                ...r,
                manual: !0
            })
    }
    setQueriesData(e, t, r) {
        return se.batch( () => b(this, X).findAll(e).map( ({queryKey: n}) => [n, this.setQueryData(n, t, r)]))
    }
    getQueryState(e) {
        var r;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (r = b(this, X).get(t.queryHash)) == null ? void 0 : r.state
    }
    removeQueries(e) {
        const t = b(this, X);
        se.batch( () => {
            t.findAll(e).forEach(r => {
                t.remove(r)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const r = b(this, X)
          , n = {
            type: "active",
            ...e
        };
        return se.batch( () => (r.findAll(e).forEach(o => {
            o.reset()
        }
        ),
        this.refetchQueries(n, t)))
    }
    cancelQueries(e={}, t={}) {
        const r = {
            revert: !0,
            ...t
        }
          , n = se.batch( () => b(this, X).findAll(e).map(o => o.cancel(r)));
        return Promise.all(n).then(pe).catch(pe)
    }
    invalidateQueries(e={}, t={}) {
        return se.batch( () => {
            if (b(this, X).findAll(e).forEach(n => {
                n.invalidate()
            }
            ),
            e.refetchType === "none")
                return Promise.resolve();
            const r = {
                ...e,
                type: e.refetchType ?? e.type ?? "active"
            };
            return this.refetchQueries(r, t)
        }
        )
    }
    refetchQueries(e={}, t) {
        const r = {
            ...t,
            cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0
        }
          , n = se.batch( () => b(this, X).findAll(e).filter(o => !o.isDisabled()).map(o => {
            let s = o.fetch(void 0, r);
            return r.throwOnError || (s = s.catch(pe)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : s
        }
        ));
        return Promise.all(n).then(pe)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const r = b(this, X).build(this, t);
        return r.isStaleByTime(zn(t.staleTime, r)) ? r.fetch(t) : Promise.resolve(r.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(pe).catch(pe)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = qn(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(pe).catch(pe)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = qn(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return fr.isOnline() ? b(this, Be).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return b(this, X)
    }
    getMutationCache() {
        return b(this, Be)
    }
    getDefaultOptions() {
        return b(this, Ve)
    }
    setDefaultOptions(e) {
        I(this, Ve, e)
    }
    setQueryDefaults(e, t) {
        b(this, xt).set($t(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...b(this, xt).values()];
        let r = {};
        return t.forEach(n => {
            zt(e, n.queryKey) && (r = {
                ...r,
                ...n.defaultOptions
            })
        }
        ),
        r
    }
    setMutationDefaults(e, t) {
        b(this, wt).set($t(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...b(this, wt).values()];
        let r = {};
        return t.forEach(n => {
            zt(e, n.mutationKey) && (r = {
                ...r,
                ...n.defaultOptions
            })
        }
        ),
        r
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...b(this, Ve).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = un(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.enabled !== !0 && t.queryFn === ls && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...b(this, Ve).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        b(this, X).clear(),
        b(this, Be).clear()
    }
}
,
X = new WeakMap,
Be = new WeakMap,
Ve = new WeakMap,
xt = new WeakMap,
wt = new WeakMap,
qe = new WeakMap,
jt = new WeakMap,
Ct = new WeakMap,
ao), Cc = x.createContext(void 0), kc = ({client: e, children: t}) => (x.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
a.jsx(Cc.Provider, {
    value: e,
    children: t
}));
const Tc = {
    en: {
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.certificates": "Certificates",
        "nav.contact": "Contact",
        "nav.available": "Available for opportunities",
        "hero.greeting": "👋 Hello, I am Ngo Quang Duan",
        "hero.title": "Young Programmer",
        "hero.subtitle": "Creating meaningful technology that connects and empowers people",
        "hero.description": "A young programmer with a different mindset and a desire to create real value from technology. I began my journey with the first lines of code — not just to write software, but to rewrite the way people connect, learn, and grow.",
        "hero.belief": "I believe that: Technology is not here to replace humans — it's here to free us from old limitations.",
        "hero.goal": "🎯 My goal is not only to build powerful tools, but also to craft an architecture that nurtures a space where knowledge, creativity, and efficiency grow in harmony.",
        "hero.journey": "🌱 Every moment is progress, every project is a journey, and every failure is a lesson. I choose to live with technology — but never let it confine the freedom of thought.",
        "hero.quote": `⏳ "The solution doesn't lie in the code — it lies in the way we think about the problem."`,
        "about.title": "About Me",
        "about.subtitle": "Passionate about creating innovative solutions and pushing the boundaries of technology",
        "about.philosophy": "Philosophy & Values",
        "about.beyond": "Beyond Code",
        "about.learning": "Continuous Learning",
        "about.learning.desc": "Embracing new technologies and methodologies to stay ahead",
        "about.thinking": "Problem-First Thinking",
        "about.thinking.desc": "Understanding the why before diving into the how",
        "about.innovation": "Innovation First",
        "about.innovation.desc": "Creating meaningful solutions",
        "about.human": "Human-Centered",
        "about.human.desc": "Technology serving people",
        "about.beyond.text1": "When I'm not coding, I enjoy exploring cybersecurity research, staying updated with the latest tech trends, and contributing to the developer community.",
        "about.beyond.text2": "I believe in the power of automation to transform workflows and make technology more accessible to everyone.",
        "about.beyond.exploring": "Always exploring new possibilities",
        "journey.title": "Current Journey",
        "journey.item1": "• Exploring the intersection of technology and human potential",
        "journey.item2": "• Building bridges between ideas and reality",
        "journey.item3": "• Creating meaningful connections through code",
        "journey.item4": "• Understanding problems before crafting solutions",
        "journey.item5": "• Fostering communities that grow together",
        "interests.title": "Interests",
        "tech.title": "Technology Arsenal",
        "tech.subtitle": "Crafting digital solutions with modern technologies and innovative approaches",
        "tech.core": "Core Expertise",
        "tech.development": "Development",
        "tech.data": "Data Management",
        "tech.web": "Web Solutions",
        "tech.performance": "Performance",
        "tech.code": "Vibe coding",
        "tech.innovation": "Innovation",
        "tech.programming": "Programming Languages",
        "tech.web.tech": "Web Technologies",
        "tech.tools": "Tools & Platforms",
        "tech.ai": "Innovation & AI",
        "tech.python.desc": "Backend development, AI/ML, automation",
        "tech.javascript.desc": "Frontend & backend development",
        "tech.cpp.desc": "System programming, algorithms",
        "tech.nodejs.desc": "Server-side JavaScript runtime",
        "tech.web.desc": "Full-stack web development",
        "tech.git.desc": "Version control and collaboration",
        "tech.server.desc": "Server administration and deployment",
        "tech.bot.desc": "Automated bot development",
        "tech.app.desc": "Mobile and desktop applications",
        "tech.ai.desc": "Artificial intelligence integration",
        "tech.blockchain.desc": "Blockchain development tools",
        "projects.title": "Featured Projects",
        "projects.subtitle": "Specialized tools showcasing expertise in automation, reverse engineering, and security research",
        "projects.featured": "⭐ Featured",
        "projects.source": "Source Code",
        "projects.view": "View Project",
        "projects.interested": "Interested in collaborating or learning more about my work?",
        "projects.explore": "Explore All Projects",
        "certificates.title": "Certificates & Achievements",
        "certificates.subtitle": "Milestones in my professional learning journey",
        "contact.title": "Let's Connect",
        "contact.subtitle": "Ready to collaborate on innovative projects or discuss automation solutions? Let's connect and build something impactful together!",
        "contact.github": "GitHub",
        "contact.youtube": "YouTube",
        "contact.email": "Email",
        "lang.switch": "Switch to Vietnamese"
    },
    vi: {
        "nav.about": "Giới thiệu",
        "nav.skills": "Kỹ năng",
        "nav.projects": "Dự án",
        "nav.certificates": "Chứng chỉ",
        "nav.contact": "Liên hệ",
        "nav.available": "Sẵn sàng cho cơ hội mới",
        "hero.greeting": "👋 Xin chào, tôi là Ngô Quang Duẩn",
        "hero.title": "Lập trình viên trẻ",
        "hero.subtitle": "Tạo ra công nghệ có ý nghĩa kết nối và trao quyền cho mọi người",
        "hero.description": "Một lập trình viên trẻ mong muốn tạo ra giá trị thực từ công nghệ. Tôi bắt đầu hành trình với những dòng code đầu tiên — không chỉ để viết phần mềm, mà để viết lại cách mọi người kết nối, học hỏi và phát triển.",
        "hero.belief": "Tôi tin rằng: Công nghệ không có ở đây để thay thế con người — nó ở đây để giải phóng chúng ta khỏi những giới hạn cũ.",
        "hero.goal": "🎯 Mục tiêu của tôi không chỉ là xây dựng những công cụ mạnh mẽ, mà còn tạo ra một kiến trúc nuôi dưỡng không gian nơi kiến thức, sáng tạo và hiệu quả phát triển hài hòa.",
        "hero.journey": "🌱 Mỗi khoảnh khắc là tiến bộ, mỗi dự án là hành trình, và mỗi thất bại là bài học. Tôi chọn sống cùng công nghệ — nhưng không bao giờ để nó giới hạn tự do tư tưởng.",
        "hero.quote": '⏳ "Giải pháp không nằm trong code — nó nằm trong cách chúng ta suy nghĩ về vấn đề."',
        "about.title": "Giới thiệu",
        "about.subtitle": "Đam mê tạo ra những giải pháp sáng tạo và đẩy lùi ranh giới của công nghệ",
        "about.philosophy": "Triết lý & Giá trị",
        "about.beyond": "Ngoài Code",
        "about.learning": "Học hỏi liên tục",
        "about.learning.desc": "Tiếp thu công nghệ và phương pháp mới để luôn dẫn đầu",
        "about.thinking": "Tư duy Vấn đề trước",
        "about.thinking.desc": "Hiểu tại sao trước khi đi vào cách thức",
        "about.innovation": "Đổi mới đầu tiên",
        "about.innovation.desc": "Tạo ra giải pháp có ý nghĩa",
        "about.human": "Lấy con người làm trung tâm",
        "about.human.desc": "Công nghệ phục vụ con người",
        "about.beyond.text1": "Khi không code, tôi thích khám phá nghiên cứu an ninh mạng, cập nhật xu hướng công nghệ mới nhất, và đóng góp cho cộng đồng developer.",
        "about.beyond.text2": "Tôi tin vào sức mạnh của tự động hóa để biến đổi quy trình làm việc và làm cho công nghệ dễ tiếp cận hơn với mọi người.",
        "about.beyond.exploring": "Luôn khám phá những khả năng mới",
        "journey.title": "Hành trình hiện tại",
        "journey.item1": "• Khám phá giao điểm giữa công nghệ và tiềm năng con người",
        "journey.item2": "• Xây dựng cầu nối giữa ý tưởng và thực tế",
        "journey.item3": "• Tạo ra những kết nối có ý nghĩa thông qua code",
        "journey.item4": "• Hiểu vấn đề trước khi tạo ra giải pháp",
        "journey.item5": "• Nuôi dưỡng những cộng đồng cùng phát triển",
        "interests.title": "Sở thích",
        "tech.title": "Kho vũ khí Công nghệ",
        "tech.subtitle": "Tạo ra giải pháp số với công nghệ hiện đại và cách tiếp cận sáng tạo",
        "tech.core": "Chuyên môn cốt lõi",
        "tech.development": "Phát triển",
        "tech.data": "Quản lý Dữ liệu",
        "tech.web": "Giải pháp Web",
        "tech.performance": "Hiệu suất",
        "tech.code": "Vibe coding",
        "tech.innovation": "Đổi mới",
        "tech.programming": "Ngôn ngữ Lập trình",
        "tech.web.tech": "Công nghệ Web",
        "tech.tools": "Công cụ & Nền tảng",
        "tech.ai": "Đổi mới & AI",
        "tech.python.desc": "Phát triển backend, AI/ML, tự động hóa",
        "tech.javascript.desc": "Phát triển frontend & backend",
        "tech.cpp.desc": "Lập trình hệ thống, thuật toán",
        "tech.nodejs.desc": "Runtime JavaScript phía server",
        "tech.web.desc": "Phát triển web full-stack",
        "tech.git.desc": "Kiểm soát phiên bản và cộng tác",
        "tech.server.desc": "Quản trị server và triển khai",
        "tech.bot.desc": "Phát triển bot tự động",
        "tech.app.desc": "Ứng dụng mobile và desktop",
        "tech.ai.desc": "Tích hợp trí tuệ nhân tạo",
        "tech.blockchain.desc": "Công cụ phát triển blockchain",
        "projects.title": "Dự án nổi bật",
        "projects.subtitle": "Công cụ chuyên biệt thể hiện chuyên môn trong tự động hóa, reverse engineering và nghiên cứu bảo mật",
        "projects.featured": "⭐ Nổi bật",
        "projects.source": "Mã nguồn",
        "projects.view": "Xem dự án",
        "projects.interested": "Quan tâm đến việc hợp tác hoặc tìm hiểu thêm về công việc của tôi?",
        "projects.explore": "Khám phá tất cả dự án",
        "contact.title": "Kết nối với tôi",
        "contact.subtitle": "Sẵn sàng hợp tác trong các dự án sáng tạo hoặc thảo luận về giải pháp tự động hóa? Hãy kết nối và cùng xây dựng điều gì đó có tác động!",
        "contact.github": "GitHub",
        "contact.youtube": "YouTube",
        "contact.email": "Email",
        "lang.switch": "Switch to English"
    }
}
  , ms = x.createContext(void 0);
function Ac({children: e}) {
    const [t,r] = x.useState("vi");
    x.useEffect( () => {
        const s = localStorage.getItem("language");
        s && ["en", "vi"].includes(s) && r(s)
    }
    , []);
    const n = s => {
        r(s),
        localStorage.setItem("language", s)
    }
      , o = s => Tc[t][s] || s;
    return a.jsx(ms.Provider, {
        value: {
            language: t,
            setLanguage: n,
            t: o
        },
        children: e
    })
}
function Ut() {
    const e = x.useContext(ms);
    if (e === void 0)
        throw new Error("useLanguage must be used within a LanguageProvider");
    return e
}
var Rr, Wn;
function Nc() {
    if (Wn)
        return Rr;
    Wn = 1;
    var e = typeof Element < "u"
      , t = typeof Map == "function"
      , r = typeof Set == "function"
      , n = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
    function o(s, i) {
        if (s === i)
            return !0;
        if (s && i && typeof s == "object" && typeof i == "object") {
            if (s.constructor !== i.constructor)
                return !1;
            var l, c, d;
            if (Array.isArray(s)) {
                if (l = s.length,
                l != i.length)
                    return !1;
                for (c = l; c-- !== 0; )
                    if (!o(s[c], i[c]))
                        return !1;
                return !0
            }
            var h;
            if (t && s instanceof Map && i instanceof Map) {
                if (s.size !== i.size)
                    return !1;
                for (h = s.entries(); !(c = h.next()).done; )
                    if (!i.has(c.value[0]))
                        return !1;
                for (h = s.entries(); !(c = h.next()).done; )
                    if (!o(c.value[1], i.get(c.value[0])))
                        return !1;
                return !0
            }
            if (r && s instanceof Set && i instanceof Set) {
                if (s.size !== i.size)
                    return !1;
                for (h = s.entries(); !(c = h.next()).done; )
                    if (!i.has(c.value[0]))
                        return !1;
                return !0
            }
            if (n && ArrayBuffer.isView(s) && ArrayBuffer.isView(i)) {
                if (l = s.length,
                l != i.length)
                    return !1;
                for (c = l; c-- !== 0; )
                    if (s[c] !== i[c])
                        return !1;
                return !0
            }
            if (s.constructor === RegExp)
                return s.source === i.source && s.flags === i.flags;
            if (s.valueOf !== Object.prototype.valueOf && typeof s.valueOf == "function" && typeof i.valueOf == "function")
                return s.valueOf() === i.valueOf();
            if (s.toString !== Object.prototype.toString && typeof s.toString == "function" && typeof i.toString == "function")
                return s.toString() === i.toString();
            if (d = Object.keys(s),
            l = d.length,
            l !== Object.keys(i).length)
                return !1;
            for (c = l; c-- !== 0; )
                if (!Object.prototype.hasOwnProperty.call(i, d[c]))
                    return !1;
            if (e && s instanceof Element)
                return !1;
            for (c = l; c-- !== 0; )
                if (!((d[c] === "_owner" || d[c] === "__v" || d[c] === "__o") && s.$$typeof) && !o(s[d[c]], i[d[c]]))
                    return !1;
            return !0
        }
        return s !== s && i !== i
    }
    return Rr = function(i, l) {
        try {
            return o(i, l)
        } catch (c) {
            if ((c.message || "").match(/stack|recursion/i))
                return console.warn("react-fast-compare cannot handle circular refs"),
                !1;
            throw c
        }
    }
    ,
    Rr
}
var Sc = Nc();
const Ec = Zr(Sc);
var Ir, Gn;
function Pc() {
    if (Gn)
        return Ir;
    Gn = 1;
    var e = function(t, r, n, o, s, i, l, c) {
        if (!t) {
            var d;
            if (r === void 0)
                d = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var h = [n, o, s, i, l, c]
                  , f = 0;
                d = new Error(r.replace(/%s/g, function() {
                    return h[f++]
                })),
                d.name = "Invariant Violation"
            }
            throw d.framesToPop = 1,
            d
        }
    };
    return Ir = e,
    Ir
}
var Oc = Pc();
const Kn = Zr(Oc);
var Lr, Qn;
function Mc() {
    return Qn || (Qn = 1,
    Lr = function(t, r, n, o) {
        var s = n ? n.call(o, t, r) : void 0;
        if (s !== void 0)
            return !!s;
        if (t === r)
            return !0;
        if (typeof t != "object" || !t || typeof r != "object" || !r)
            return !1;
        var i = Object.keys(t)
          , l = Object.keys(r);
        if (i.length !== l.length)
            return !1;
        for (var c = Object.prototype.hasOwnProperty.bind(r), d = 0; d < i.length; d++) {
            var h = i[d];
            if (!c(h))
                return !1;
            var f = t[h]
              , u = r[h];
            if (s = n ? n.call(o, f, u, h) : void 0,
            s === !1 || s === void 0 && f !== u)
                return !1
        }
        return !0
    }
    ),
    Lr
}
var Rc = Mc();
const Ic = Zr(Rc);
var gs = (e => (e.BASE = "base",
e.BODY = "body",
e.HEAD = "head",
e.HTML = "html",
e.LINK = "link",
e.META = "meta",
e.NOSCRIPT = "noscript",
e.SCRIPT = "script",
e.STYLE = "style",
e.TITLE = "title",
e.FRAGMENT = "Symbol(react.fragment)",
e))(gs || {}), Dr = {
    link: {
        rel: ["amphtml", "canonical", "alternate"]
    },
    script: {
        type: ["application/ld+json"]
    },
    meta: {
        charset: "",
        name: ["generator", "robots", "description"],
        property: ["og:type", "og:title", "og:url", "og:image", "og:image:alt", "og:description", "twitter:url", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt", "twitter:card", "twitter:site"]
    }
}, Yn = Object.values(gs), hn = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex"
}, Lc = Object.entries(hn).reduce( (e, [t,r]) => (e[r] = t,
e), {}), ge = "data-rh", ft = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate",
    PRIORITIZE_SEO_TAGS: "prioritizeSeoTags"
}, pt = (e, t) => {
    for (let r = e.length - 1; r >= 0; r -= 1) {
        const n = e[r];
        if (Object.prototype.hasOwnProperty.call(n, t))
            return n[t]
    }
    return null
}
, Dc = e => {
    let t = pt(e, "title");
    const r = pt(e, ft.TITLE_TEMPLATE);
    if (Array.isArray(t) && (t = t.join("")),
    r && t)
        return r.replace(/%s/g, () => t);
    const n = pt(e, ft.DEFAULT_TITLE);
    return t || n || void 0
}
, Hc = e => pt(e, ft.ON_CHANGE_CLIENT_STATE) || ( () => {}
), Hr = (e, t) => t.filter(r => typeof r[e] < "u").map(r => r[e]).reduce( (r, n) => ({
    ...r,
    ...n
}), {}), $c = (e, t) => t.filter(r => typeof r.base < "u").map(r => r.base).reverse().reduce( (r, n) => {
    if (!r.length) {
        const o = Object.keys(n);
        for (let s = 0; s < o.length; s += 1) {
            const l = o[s].toLowerCase();
            if (e.indexOf(l) !== -1 && n[l])
                return r.concat(n)
        }
    }
    return r
}
, []), zc = e => console && typeof console.warn == "function" && console.warn(e), Mt = (e, t, r) => {
    const n = {};
    return r.filter(o => Array.isArray(o[e]) ? !0 : (typeof o[e] < "u" && zc(`Helmet: ${e} should be of type "Array". Instead found type "${typeof o[e]}"`),
    !1)).map(o => o[e]).reverse().reduce( (o, s) => {
        const i = {};
        s.filter(c => {
            let d;
            const h = Object.keys(c);
            for (let u = 0; u < h.length; u += 1) {
                const p = h[u]
                  , m = p.toLowerCase();
                t.indexOf(m) !== -1 && !(d === "rel" && c[d].toLowerCase() === "canonical") && !(m === "rel" && c[m].toLowerCase() === "stylesheet") && (d = m),
                t.indexOf(p) !== -1 && (p === "innerHTML" || p === "cssText" || p === "itemprop") && (d = p)
            }
            if (!d || !c[d])
                return !1;
            const f = c[d].toLowerCase();
            return n[d] || (n[d] = {}),
            i[d] || (i[d] = {}),
            n[d][f] ? !1 : (i[d][f] = !0,
            !0)
        }
        ).reverse().forEach(c => o.push(c));
        const l = Object.keys(i);
        for (let c = 0; c < l.length; c += 1) {
            const d = l[c]
              , h = {
                ...n[d],
                ...i[d]
            };
            n[d] = h
        }
        return o
    }
    , []).reverse()
}
, Fc = (e, t) => {
    if (Array.isArray(e) && e.length) {
        for (let r = 0; r < e.length; r += 1)
            if (e[r][t])
                return !0
    }
    return !1
}
, _c = e => ({
    baseTag: $c(["href"], e),
    bodyAttributes: Hr("bodyAttributes", e),
    defer: pt(e, ft.DEFER),
    encode: pt(e, ft.ENCODE_SPECIAL_CHARACTERS),
    htmlAttributes: Hr("htmlAttributes", e),
    linkTags: Mt("link", ["rel", "href"], e),
    metaTags: Mt("meta", ["name", "charset", "http-equiv", "property", "itemprop"], e),
    noscriptTags: Mt("noscript", ["innerHTML"], e),
    onChangeClientState: Hc(e),
    scriptTags: Mt("script", ["src", "innerHTML"], e),
    styleTags: Mt("style", ["cssText"], e),
    title: Dc(e),
    titleAttributes: Hr("titleAttributes", e),
    prioritizeSeoTags: Fc(e, ft.PRIORITIZE_SEO_TAGS)
}), ys = e => Array.isArray(e) ? e.join("") : e, Bc = (e, t) => {
    const r = Object.keys(e);
    for (let n = 0; n < r.length; n += 1)
        if (t[r[n]] && t[r[n]].includes(e[r[n]]))
            return !0;
    return !1
}
, $r = (e, t) => Array.isArray(e) ? e.reduce( (r, n) => (Bc(n, t) ? r.priority.push(n) : r.default.push(n),
r), {
    priority: [],
    default: []
}) : {
    default: e,
    priority: []
}, Xn = (e, t) => ({
    ...e,
    [t]: void 0
}), Vc = ["noscript", "script", "style"], Qr = (e, t=!0) => t === !1 ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;"), vs = e => Object.keys(e).reduce( (t, r) => {
    const n = typeof e[r] < "u" ? `${r}="${e[r]}"` : `${r}`;
    return t ? `${t} ${n}` : n
}
, ""), qc = (e, t, r, n) => {
    const o = vs(r)
      , s = ys(t);
    return o ? `<${e} ${ge}="true" ${o}>${Qr(s, n)}</${e}>` : `<${e} ${ge}="true">${Qr(s, n)}</${e}>`
}
, Uc = (e, t, r=!0) => t.reduce( (n, o) => {
    const s = o
      , i = Object.keys(s).filter(d => !(d === "innerHTML" || d === "cssText")).reduce( (d, h) => {
        const f = typeof s[h] > "u" ? h : `${h}="${Qr(s[h], r)}"`;
        return d ? `${d} ${f}` : f
    }
    , "")
      , l = s.innerHTML || s.cssText || ""
      , c = Vc.indexOf(e) === -1;
    return `${n}<${e} ${ge}="true" ${i}${c ? "/>" : `>${l}</${e}>`}`
}
, ""), bs = (e, t={}) => Object.keys(e).reduce( (r, n) => {
    const o = hn[n];
    return r[o || n] = e[n],
    r
}
, t), Wc = (e, t, r) => {
    const n = {
        key: t,
        [ge]: !0
    }
      , o = bs(r, n);
    return [C.createElement("title", o, t)]
}
, lr = (e, t) => t.map( (r, n) => {
    const o = {
        key: n,
        [ge]: !0
    };
    return Object.keys(r).forEach(s => {
        const l = hn[s] || s;
        if (l === "innerHTML" || l === "cssText") {
            const c = r.innerHTML || r.cssText;
            o.dangerouslySetInnerHTML = {
                __html: c
            }
        } else
            o[l] = r[s]
    }
    ),
    C.createElement(e, o)
}
), he = (e, t, r=!0) => {
    switch (e) {
    case "title":
        return {
            toComponent: () => Wc(e, t.title, t.titleAttributes),
            toString: () => qc(e, t.title, t.titleAttributes, r)
        };
    case "bodyAttributes":
    case "htmlAttributes":
        return {
            toComponent: () => bs(t),
            toString: () => vs(t)
        };
    default:
        return {
            toComponent: () => lr(e, t),
            toString: () => Uc(e, t, r)
        }
    }
}
, Gc = ({metaTags: e, linkTags: t, scriptTags: r, encode: n}) => {
    const o = $r(e, Dr.meta)
      , s = $r(t, Dr.link)
      , i = $r(r, Dr.script);
    return {
        priorityMethods: {
            toComponent: () => [...lr("meta", o.priority), ...lr("link", s.priority), ...lr("script", i.priority)],
            toString: () => `${he("meta", o.priority, n)} ${he("link", s.priority, n)} ${he("script", i.priority, n)}`
        },
        metaTags: o.default,
        linkTags: s.default,
        scriptTags: i.default
    }
}
, Kc = e => {
    const {baseTag: t, bodyAttributes: r, encode: n=!0, htmlAttributes: o, noscriptTags: s, styleTags: i, title: l="", titleAttributes: c, prioritizeSeoTags: d} = e;
    let {linkTags: h, metaTags: f, scriptTags: u} = e
      , p = {
        toComponent: () => {}
        ,
        toString: () => ""
    };
    return d && ({priorityMethods: p, linkTags: h, metaTags: f, scriptTags: u} = Gc(e)),
    {
        priority: p,
        base: he("base", t, n),
        bodyAttributes: he("bodyAttributes", r, n),
        htmlAttributes: he("htmlAttributes", o, n),
        link: he("link", h, n),
        meta: he("meta", f, n),
        noscript: he("noscript", s, n),
        script: he("script", u, n),
        style: he("style", i, n),
        title: he("title", {
            title: l,
            titleAttributes: c
        }, n)
    }
}
, Yr = Kc, rr = [], xs = !!(typeof window < "u" && window.document && window.document.createElement), Xr = class {
    constructor(e, t) {
        Ne(this, "instances", []);
        Ne(this, "canUseDOM", xs);
        Ne(this, "context");
        Ne(this, "value", {
            setHelmet: e => {
                this.context.helmet = e
            }
            ,
            helmetInstances: {
                get: () => this.canUseDOM ? rr : this.instances,
                add: e => {
                    (this.canUseDOM ? rr : this.instances).push(e)
                }
                ,
                remove: e => {
                    const t = (this.canUseDOM ? rr : this.instances).indexOf(e);
                    (this.canUseDOM ? rr : this.instances).splice(t, 1)
                }
            }
        });
        this.context = e,
        this.canUseDOM = t || !1,
        t || (e.helmet = Yr({
            baseTag: [],
            bodyAttributes: {},
            htmlAttributes: {},
            linkTags: [],
            metaTags: [],
            noscriptTags: [],
            scriptTags: [],
            styleTags: [],
            title: "",
            titleAttributes: {}
        }))
    }
}
, Qc = {}, ws = C.createContext(Qc), et, js = (et = class extends x.Component {
    constructor(r) {
        super(r);
        Ne(this, "helmetData");
        this.helmetData = new Xr(this.props.context || {},et.canUseDOM)
    }
    render() {
        return C.createElement(ws.Provider, {
            value: this.helmetData.value
        }, this.props.children)
    }
}
,
Ne(et, "canUseDOM", xs),
et), lt = (e, t) => {
    const r = document.head || document.querySelector("head")
      , n = r.querySelectorAll(`${e}[${ge}]`)
      , o = [].slice.call(n)
      , s = [];
    let i;
    return t && t.length && t.forEach(l => {
        const c = document.createElement(e);
        for (const d in l)
            if (Object.prototype.hasOwnProperty.call(l, d))
                if (d === "innerHTML")
                    c.innerHTML = l.innerHTML;
                else if (d === "cssText")
                    c.styleSheet ? c.styleSheet.cssText = l.cssText : c.appendChild(document.createTextNode(l.cssText));
                else {
                    const h = d
                      , f = typeof l[h] > "u" ? "" : l[h];
                    c.setAttribute(d, f)
                }
        c.setAttribute(ge, "true"),
        o.some( (d, h) => (i = h,
        c.isEqualNode(d))) ? o.splice(i, 1) : s.push(c)
    }
    ),
    o.forEach(l => {
        var c;
        return (c = l.parentNode) == null ? void 0 : c.removeChild(l)
    }
    ),
    s.forEach(l => r.appendChild(l)),
    {
        oldTags: o,
        newTags: s
    }
}
, Jr = (e, t) => {
    const r = document.getElementsByTagName(e)[0];
    if (!r)
        return;
    const n = r.getAttribute(ge)
      , o = n ? n.split(",") : []
      , s = [...o]
      , i = Object.keys(t);
    for (const l of i) {
        const c = t[l] || "";
        r.getAttribute(l) !== c && r.setAttribute(l, c),
        o.indexOf(l) === -1 && o.push(l);
        const d = s.indexOf(l);
        d !== -1 && s.splice(d, 1)
    }
    for (let l = s.length - 1; l >= 0; l -= 1)
        r.removeAttribute(s[l]);
    o.length === s.length ? r.removeAttribute(ge) : r.getAttribute(ge) !== i.join(",") && r.setAttribute(ge, i.join(","))
}
, Yc = (e, t) => {
    typeof e < "u" && document.title !== e && (document.title = ys(e)),
    Jr("title", t)
}
, Jn = (e, t) => {
    const {baseTag: r, bodyAttributes: n, htmlAttributes: o, linkTags: s, metaTags: i, noscriptTags: l, onChangeClientState: c, scriptTags: d, styleTags: h, title: f, titleAttributes: u} = e;
    Jr("body", n),
    Jr("html", o),
    Yc(f, u);
    const p = {
        baseTag: lt("base", r),
        linkTags: lt("link", s),
        metaTags: lt("meta", i),
        noscriptTags: lt("noscript", l),
        scriptTags: lt("script", d),
        styleTags: lt("style", h)
    }
      , m = {}
      , g = {};
    Object.keys(p).forEach(v => {
        const {newTags: y, oldTags: w} = p[v];
        y.length && (m[v] = y),
        w.length && (g[v] = p[v].oldTags)
    }
    ),
    t && t(),
    c(e, m, g)
}
, Rt = null, Xc = e => {
    Rt && cancelAnimationFrame(Rt),
    e.defer ? Rt = requestAnimationFrame( () => {
        Jn(e, () => {
            Rt = null
        }
        )
    }
    ) : (Jn(e),
    Rt = null)
}
, Jc = Xc, Zn = class extends x.Component {
    constructor() {
        super(...arguments);
        Ne(this, "rendered", !1)
    }
    shouldComponentUpdate(t) {
        return !Ic(t, this.props)
    }
    componentDidUpdate() {
        this.emitChange()
    }
    componentWillUnmount() {
        const {helmetInstances: t} = this.props.context;
        t.remove(this),
        this.emitChange()
    }
    emitChange() {
        const {helmetInstances: t, setHelmet: r} = this.props.context;
        let n = null;
        const o = _c(t.get().map(s => {
            const i = {
                ...s.props
            };
            return delete i.context,
            i
        }
        ));
        js.canUseDOM ? Jc(o) : Yr && (n = Yr(o)),
        r(n)
    }
    init() {
        if (this.rendered)
            return;
        this.rendered = !0;
        const {helmetInstances: t} = this.props.context;
        t.add(this),
        this.emitChange()
    }
    render() {
        return this.init(),
        null
    }
}
, Fr, Cs = (Fr = class extends x.Component {
    shouldComponentUpdate(e) {
        return !Ec(Xn(this.props, "helmetData"), Xn(e, "helmetData"))
    }
    mapNestedChildrenToProps(e, t) {
        if (!t)
            return null;
        switch (e.type) {
        case "script":
        case "noscript":
            return {
                innerHTML: t
            };
        case "style":
            return {
                cssText: t
            };
        default:
            throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)
        }
    }
    flattenArrayTypeChildren(e, t, r, n) {
        return {
            ...t,
            [e.type]: [...t[e.type] || [], {
                ...r,
                ...this.mapNestedChildrenToProps(e, n)
            }]
        }
    }
    mapObjectTypeChildren(e, t, r, n) {
        switch (e.type) {
        case "title":
            return {
                ...t,
                [e.type]: n,
                titleAttributes: {
                    ...r
                }
            };
        case "body":
            return {
                ...t,
                bodyAttributes: {
                    ...r
                }
            };
        case "html":
            return {
                ...t,
                htmlAttributes: {
                    ...r
                }
            };
        default:
            return {
                ...t,
                [e.type]: {
                    ...r
                }
            }
        }
    }
    mapArrayTypeChildrenToProps(e, t) {
        let r = {
            ...t
        };
        return Object.keys(e).forEach(n => {
            r = {
                ...r,
                [n]: e[n]
            }
        }
        ),
        r
    }
    warnOnInvalidChildren(e, t) {
        return Kn(Yn.some(r => e.type === r), typeof e.type == "function" ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information." : `Only elements types ${Yn.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),
        Kn(!t || typeof t == "string" || Array.isArray(t) && !t.some(r => typeof r != "string"), `Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),
        !0
    }
    mapChildrenToProps(e, t) {
        let r = {};
        return C.Children.forEach(e, n => {
            if (!n || !n.props)
                return;
            const {children: o, ...s} = n.props
              , i = Object.keys(s).reduce( (c, d) => (c[Lc[d] || d] = s[d],
            c), {});
            let {type: l} = n;
            switch (typeof l == "symbol" ? l = l.toString() : this.warnOnInvalidChildren(n, o),
            l) {
            case "Symbol(react.fragment)":
                t = this.mapChildrenToProps(o, t);
                break;
            case "link":
            case "meta":
            case "noscript":
            case "script":
            case "style":
                r = this.flattenArrayTypeChildren(n, r, i, o);
                break;
            default:
                t = this.mapObjectTypeChildren(n, t, i, o);
                break
            }
        }
        ),
        this.mapArrayTypeChildrenToProps(r, t)
    }
    render() {
        const {children: e, ...t} = this.props;
        let r = {
            ...t
        }
          , {helmetData: n} = t;
        if (e && (r = this.mapChildrenToProps(e, r)),
        n && !(n instanceof Xr)) {
            const o = n;
            n = new Xr(o.context,!0),
            delete r.helmetData
        }
        return n ? C.createElement(Zn, {
            ...r,
            context: n.value
        }) : C.createElement(ws.Consumer, null, o => C.createElement(Zn, {
            ...r,
            context: o
        }))
    }
}
,
Ne(Fr, "defaultProps", {
    defer: !0,
    encodeSpecialCharacters: !0,
    prioritizeSeoTags: !1
}),
Fr);
const Zc = en("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , Ft = x.forwardRef( ({className: e, variant: t, size: r, asChild: n=!1, ...o}, s) => {
    const i = n ? Ws : "button";
    return a.jsx(i, {
        className: ie(Zc({
            variant: t,
            size: r,
            className: e
        })),
        ref: s,
        ...o
    })
}
);
Ft.displayName = "Button";
const ct = x.forwardRef( ({className: e, ...t}, r) => a.jsx("div", {
    ref: r,
    className: ie("rounded-lg border bg-card text-card-foreground shadow-sm", e),
    ...t
}));
ct.displayName = "Card";
const ed = x.forwardRef( ({className: e, ...t}, r) => a.jsx("div", {
    ref: r,
    className: ie("flex flex-col space-y-1.5 p-6", e),
    ...t
}));
ed.displayName = "CardHeader";
const td = x.forwardRef( ({className: e, ...t}, r) => a.jsx("h3", {
    ref: r,
    className: ie("text-2xl font-semibold leading-none tracking-tight", e),
    ...t
}));
td.displayName = "CardTitle";
const rd = x.forwardRef( ({className: e, ...t}, r) => a.jsx("p", {
    ref: r,
    className: ie("text-sm text-muted-foreground", e),
    ...t
}));
rd.displayName = "CardDescription";
const dt = x.forwardRef( ({className: e, ...t}, r) => a.jsx("div", {
    ref: r,
    className: ie("p-6 pt-0", e),
    ...t
}));
dt.displayName = "CardContent";
const nd = x.forwardRef( ({className: e, ...t}, r) => a.jsx("div", {
    ref: r,
    className: ie("flex items-center p-6 pt-0", e),
    ...t
}));
nd.displayName = "CardFooter";
const od = en("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function zr({className: e, variant: t, ...r}) {
    return a.jsx("div", {
        className: ie(od({
            variant: t
        }), e),
        ...r
    })
}
function nr({children: e, className: t="", delay: r=0, as: n="p"}) {
    return a.jsx(P.div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: .6,
            delay: r
        },
        className: t,
        children: a.jsx(n, {
            children: e
        })
    })
}
function sd() {
    const {language: e, setLanguage: t, t: r} = Ut()
      , n = () => {
        t(e === "en" ? "vi" : "en")
    }
    ;
    return a.jsxs(P.button, {
        onClick: n,
        className: "flex items-center space-x-2 px-3 py-2 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 bg-card/30 backdrop-blur-sm group smooth-hover",
        whileHover: {
            scale: 1.05
        },
        whileTap: {
            scale: .95
        },
        title: r("lang.switch"),
        children: [a.jsx(P.div, {
            animate: {
                rotate: e === "vi" ? 0 : 180
            },
            transition: {
                duration: .3
            },
            children: a.jsx(bo, {
                size: 16,
                className: "text-primary group-hover:text-accent transition-colors"
            })
        }), a.jsxs("div", {
            className: "flex items-center space-x-1",
            children: [a.jsx(P.span, {
                className: `text-xs font-medium transition-colors ${e === "en" ? "text-primary" : "text-muted-foreground"}`,
                animate: {
                    opacity: e === "en" ? 1 : .5
                },
                children: "EN"
            }), a.jsx("span", {
                className: "text-xs text-muted-foreground",
                children: "|"
            }), a.jsx(P.span, {
                className: `text-xs font-medium transition-colors ${e === "vi" ? "text-primary" : "text-muted-foreground"}`,
                animate: {
                    opacity: e === "vi" ? 1 : .5
                },
                children: "VI"
            })]
        })]
    })
}
function ks({title: e="Ngo Quang Duan | Lập trình viên trẻ chuyên về tự động hóa & nghiên cứu bảo mật", description: t="Ngo Quang Duan - Lập trình viên trẻ đam mê về tự động hóa, học máy và nghiên cứu bảo mật. Khám phá các dự án sáng tạo và giải pháp công nghệ.", keywords: r="Ngo Quang Duan, Ngo Quang Duan, lập trình viên, tự động hóa, reverse engineering, nghiên cứu bảo mật, Python, JavaScript, blockchain, AI, học máy", ogImage: n="/avata.png", ogUrl: o="https://ngoquangduan.io.vn", ogType: s="website", twitterCard: i="summary_large_image", noIndex: l=!1, canonicalUrl: c, lang: d="vi"}) {
    const f = n.startsWith("http") ? n : `https://ngoquangduan.io.vn${n}`
      , u = c || o;
    return a.jsxs(Cs, {
        htmlAttributes: {
            lang: d
        },
        children: [a.jsx("title", {
            children: e
        }), a.jsx("meta", {
            name: "description",
            content: t
        }), a.jsx("meta", {
            name: "keywords",
            content: r
        }), a.jsx("meta", {
            property: "og:type",
            content: s
        }), a.jsx("meta", {
            property: "og:url",
            content: o
        }), a.jsx("meta", {
            property: "og:title",
            content: e
        }), a.jsx("meta", {
            property: "og:description",
            content: t
        }), a.jsx("meta", {
            property: "og:image",
            content: f
        }), a.jsx("meta", {
            name: "twitter:card",
            content: i
        }), a.jsx("meta", {
            name: "twitter:url",
            content: o
        }), a.jsx("meta", {
            name: "twitter:title",
            content: e
        }), a.jsx("meta", {
            name: "twitter:description",
            content: t
        }), a.jsx("meta", {
            name: "twitter:image",
            content: f
        }), a.jsx("link", {
            rel: "canonical",
            href: u
        }), l && a.jsx("meta", {
            name: "robots",
            content: "noindex, nofollow"
        }), a.jsx("link", {
            rel: "icon",
            href: "/avata.png"
        })]
    })
}
function id({name: e, description: t, image: r="/avata.png", url: n="https://ngoquangduan.io.vn", sameAs: o=["https://github.com/hiep-py", "https://www.youtube.com/@LacDev-db2vx"], jobTitle: s="Developer", email: i, phone: l, address: c, type: d="Person"}) {
    const f = r.startsWith("http") ? r : `https://ngoquangduan.io.vn${r}`
      , u = {
        "@context": "https://schema.org",
        "@type": d,
        name: e,
        description: t,
        image: f,
        url: n,
        sameAs: o,
        jobTitle: s,
        email: i,
        phone: l,
        address: c
    };
    return a.jsx(Cs, {
        children: a.jsx("script", {
            type: "application/ld+json",
            children: JSON.stringify(u)
        })
    })
}
const ad = [{
    icon: ir,
    href: "https://github.com/hiep-py",
    labelKey: "contact.github"
}, {
    icon: jo,
    href: "https://www.youtube.com/@LacDev-db2vx",
    labelKey: "contact.youtube"
}, {
    icon: xo,
    href: "mailto:ngoquangduanvn1708@gmail.com",
    labelKey: "contact.email"
}];
function ld() {
    const {t: e, language: t} = Ut();
    return a.jsxs("section", {
        className: "relative min-h-screen flex items-center justify-center overflow-hidden pt-20",
        children: [a.jsxs("div", {
            className: "absolute inset-0 w-full h-full overflow-hidden",
            children: [a.jsx("div", {
                className: "absolute inset-0 bg-grid opacity-20"
            }), a.jsx("div", {
                className: "absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
            }), a.jsx("div", {
                className: "absolute top-0 -right-4 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
            }), a.jsx("div", {
                className: "absolute -bottom-8 left-20 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
            })]
        }), a.jsx("div", {
            className: "container mx-auto px-6 relative z-10",
            children: a.jsxs("div", {
                className: "flex flex-col lg:flex-row items-center gap-16",
                children: [a.jsxs("div", {
                    className: "flex-1 text-center lg:text-left",
                    children: [a.jsxs(P.div, {
                        initial: {
                            opacity: 0,
                            y: -20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .6
                        },
                        className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-8 mx-auto lg:mx-0",
                        children: [a.jsxs("span", {
                            className: "relative flex h-2 w-2",
                            children: [a.jsx("span", {
                                className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"
                            }), a.jsx("span", {
                                className: "relative inline-flex rounded-full h-2 w-2 bg-primary"
                            })]
                        }), e("nav.available")]
                    }), a.jsxs(P.h1, {
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .8
                        },
                        className: "text-5xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6",
                        children: [t === "en" ? "Hello, I'm " : "Xin chào, tôi là ", a.jsx("span", {
                            className: "text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary",
                            children: "Ngo Quang Duan"
                        })]
                    }), a.jsx(P.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: .3,
                            duration: .8
                        },
                        className: "h-16 lg:h-20 overflow-hidden mb-6",
                        children: a.jsx("p", {
                            className: "text-xl lg:text-3xl text-muted-foreground font-light font-mono",
                            children: e("hero.title")
                        })
                    }), a.jsxs(P.div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: .5,
                            duration: .8
                        },
                        className: "relative group mx-auto lg:mx-0 max-w-xl",
                        children: [a.jsx("div", {
                            className: "absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"
                        }), a.jsxs("div", {
                            className: "relative bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 shadow-xl",
                            children: [a.jsxs("div", {
                                className: "flex items-center gap-2 mb-3 border-b border-border pb-3",
                                children: [a.jsxs("div", {
                                    className: "flex gap-1.5",
                                    children: [a.jsx("div", {
                                        className: "w-2.5 h-2.5 rounded-full bg-red-500/50"
                                    }), a.jsx("div", {
                                        className: "w-2.5 h-2.5 rounded-full bg-yellow-500/50"
                                    }), a.jsx("div", {
                                        className: "w-2.5 h-2.5 rounded-full bg-green-500/50"
                                    })]
                                }), a.jsx("span", {
                                    className: "text-xs text-muted-foreground font-mono ml-auto",
                                    children: "intro.tsx"
                                })]
                            }), a.jsx("p", {
                                className: "text-foreground text-lg leading-relaxed font-light",
                                children: e("hero.description")
                            })]
                        })]
                    }), a.jsxs(P.div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: .7,
                            duration: .6
                        },
                        className: "flex flex-col sm:flex-row items-center gap-4 mt-10 justify-center lg:justify-start",
                        children: [a.jsx(P.div, {
                            whileHover: {
                                scale: 1.05,
                                y: -5
                            },
                            whileTap: {
                                scale: .95
                            },
                            children: a.jsx(Ft, {
                                size: "lg",
                                className: "relative overflow-hidden group",
                                asChild: !0,
                                children: a.jsxs("a", {
                                    href: "#projects",
                                    children: [a.jsx("div", {
                                        className: "absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    }), a.jsxs("span", {
                                        className: "relative flex items-center gap-2",
                                        children: [a.jsx(ci, {
                                            size: 20
                                        }), t === "en" ? "Explore My Work" : "Xem công việc"]
                                    })]
                                })
                            })
                        }), a.jsx("div", {
                            className: "flex items-center gap-4 px-6",
                            children: ad.map( ({icon: r, href: n, labelKey: o}) => a.jsx(P.a, {
                                href: n,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                whileHover: {
                                    scale: 1.2,
                                    color: "hsl(var(--primary))"
                                },
                                className: "text-muted-foreground hover:text-primary transition-colors",
                                children: a.jsx(r, {
                                    size: 24
                                })
                            }, o))
                        })]
                    })]
                }), a.jsx(P.div, {
                    initial: {
                        opacity: 0,
                        scale: .8
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        delay: .4,
                        duration: .8
                    },
                    className: "flex-1 flex justify-center lg:justify-end relative",
                    children: a.jsxs("div", {
                        className: "relative w-[300px] h-[300px] lg:w-[450px] lg:h-[450px]",
                        children: [a.jsx("div", {
                            className: "absolute inset-0 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]"
                        }), a.jsx("div", {
                            className: "absolute inset-4 border border-accent/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"
                        }), a.jsx("div", {
                            className: "absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl"
                        }), a.jsxs("div", {
                            className: "absolute inset-8 bg-card rounded-full border-2 border-border overflow-hidden shadow-2xl z-10 group",
                            children: [a.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
                            }), a.jsxs("a", {
                                href: "/avatar.png",
                                children: [a.jsx("img", {
                                    src: "/avatar.png",
                                    alt: "Ngo Quang Duan",
                                    className: "w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                                })]
                            })]
                        }), a.jsx(P.div, {
                            animate: {
                                y: [0, -10, 0]
                            },
                            transition: {
                                duration: 3,
                                repeat: 1 / 0,
                                ease: "easeInOut"
                            },
                            className: "absolute top-10 -right-4 bg-card/90 backdrop-blur-md border border-accent/30 p-3 rounded-lg shadow-xl z-20",
                            children: a.jsx(wo, {
                                className: "w-6 h-6 text-accent"
                            })
                        })]
                    })
                })]
            })
        }), a.jsx("div", {
            className: "sr-only",
            children: t === "en" ? "As a dedicated developer specializing in automation, machine learning, and security research, I combine technical expertise with innovative problem-solving to deliver impactful solutions across various domains." : "Là một lập trình viên chuyên về tự động hóa, học máy và nghiên cứu bảo mật, tôi kết hợp chuyên môn kỹ thuật với khả năng giải quyết vấn đề sáng tạo để tạo ra các giải pháp hiệu quả."
        })]
    })
}
const cd = e => {
    const t = e.toLowerCase().replace(".", "").replace(/\s/g, "")
      , r = {
        "c++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        linuxserver: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        rust: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg",
        typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        botautomation: vo,
        software: Cn,
        aiintegration: kn,
        blockchain: li,
        phầnmềm: Cn,
        "tíchh��pai": kn
    };
    return r[t] ? r[t] : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${t}/${t}-original.svg`
}
;
function dd({name: e, size: t=40, className: r=""}) {
    const n = cd(e);
    if (typeof n == "string")
        return a.jsx("img", {
            src: n,
            alt: e,
            width: t,
            height: t,
            className: `object-contain ${r}`,
            onError: i => {
                const l = i.target;
                l.style.display = "none"
            }
        });
    const s = n;
    return a.jsx(s, {
        size: t,
        className: `text-muted-foreground ${r}`
    })
}
function ud() {
    const {t: e, language: t} = Ut()
      , r = [{
        key: "languages",
        position: "top-left",
        icon: ai,
        color: "text-blue-400",
        border: "border-blue-500/50",
        glow: "shadow-blue-500/50",
        bg: "bg-blue-900/20",
        lineColor: "#60a5fa",
        wireOrigin: "bottom-right"
    }, {
        key: "web",
        position: "top-right",
        icon: bo,
        color: "text-emerald-400",
        border: "border-emerald-500/50",
        glow: "shadow-emerald-500/50",
        bg: "bg-emerald-900/20",
        lineColor: "#34d399",
        wireOrigin: "bottom-left"
    }, {
        key: "tools",
        position: "bottom-left",
        icon: wo,
        color: "text-orange-400",
        border: "border-orange-500/50",
        glow: "shadow-orange-500/50",
        bg: "bg-orange-900/20",
        lineColor: "#fb923c",
        wireOrigin: "top-right"
    }, {
        key: "innovation",
        position: "bottom-right",
        icon: vo,
        color: "text-violet-400",
        border: "border-violet-500/50",
        glow: "shadow-violet-500/50",
        bg: "bg-violet-900/20",
        lineColor: "#a78bfa",
        wireOrigin: "top-left"
    }]
      , n = {
        languages: {
            title: e("tech.programming"),
            desc: t === "en" ? "The foundation of my engineering." : "Nền tảng kỹ thuật của tôi.",
            items: ["Python", "JavaScript", "C++", "Rust"]
        },
        web: {
            title: e("tech.web.tech"),
            desc: t === "en" ? "Building interactive experiences." : "Xây dựng trải nghiệm tương tác.",
            items: ["Node.js", "React", "TypeScript", "Tailwind"]
        },
        tools: {
            title: e("tech.tools"),
            desc: t === "en" ? "Ensuring reliability and deployment." : "Đảm bảo độ tin cậy và triển khai.",
            items: ["Git", "Linux Server", "Docker"]
        },
        innovation: {
            title: e("tech.ai"),
            desc: t === "en" ? "Pushing boundaries." : "Vượt qua giới hạn.",
            items: ["Bot Automation", t === "en" ? "Software" : "Phần mềm", "AI Integration", "Blockchain"]
        }
    }
      , o = {
        "top-left": "lg:absolute lg:top-0 lg:left-4 lg:w-[45%] lg:text-right",
        "top-right": "lg:absolute lg:top-0 lg:right-4 lg:w-[45%] lg:text-left",
        "bottom-left": "lg:absolute lg:bottom-0 lg:left-4 lg:w-[45%] lg:text-right",
        "bottom-right": "lg:absolute lg:bottom-0 lg:right-4 lg:w-[45%] lg:text-left"
    }
      , s = {
        "top-left": "lg:flex-row-reverse",
        "top-right": "lg:flex-row",
        "bottom-left": "lg:flex-row-reverse",
        "bottom-right": "lg:flex-row"
    }
      , i = {
        "top-left": "justify-center lg:justify-end",
        "top-right": "justify-center lg:justify-start",
        "bottom-left": "justify-center lg:justify-end",
        "bottom-right": "justify-center lg:justify-start"
    }
      , l = {
        "bottom-right": 'lg:after:content-[""] lg:after:absolute lg:after:top-full lg:after:left-full lg:after:w-20 lg:after:h-20 lg:after:border-t lg:after:border-l lg:after:border-blue-500/20 lg:after:rounded-tl-3xl lg:after:-translate-x-4 lg:after:-translate-y-4',
        "bottom-left": 'lg:after:content-[""] lg:after:absolute lg:after:top-full lg:after:right-full lg:after:w-20 lg:after:h-20 lg:after:border-t lg:after:border-r lg:after:border-emerald-500/20 lg:after:rounded-tr-3xl lg:after:translate-x-4 lg:after:-translate-y-4',
        "top-right": 'lg:after:content-[""] lg:after:absolute lg:after:bottom-full lg:after:left-full lg:after:w-20 lg:after:h-20 lg:after:border-b lg:after:border-l lg:after:border-orange-500/20 lg:after:rounded-bl-3xl lg:after:-translate-x-4 lg:after:translate-y-4',
        "top-left": 'lg:after:content-[""] lg:after:absolute lg:after:bottom-full lg:after:right-full lg:after:w-20 lg:after:h-20 lg:after:border-b lg:after:border-r lg:after:border-violet-500/20 lg:after:rounded-br-3xl lg:after:translate-x-4 lg:after:translate-y-4'
    };
    return a.jsxs("section", {
        id: "skills",
        className: "py-24 relative overflow-hidden",
        children: [a.jsx("div", {
            className: "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"
        }), a.jsx("div", {
            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"
        }), a.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
            children: [a.jsxs("div", {
                className: "text-center mb-16 md:mb-24",
                children: [a.jsxs(P.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-muted-foreground mb-4 uppercase tracking-widest",
                    children: [a.jsx(ui, {
                        className: "w-3 h-3 text-yellow-400 fill-yellow-400"
                    }), "Neural Skill Network"]
                }), a.jsx(P.h2, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "text-3xl md:text-5xl font-bold mb-4",
                    children: e("tech.title")
                }), a.jsx(P.p, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        delay: .2
                    },
                    className: "text-muted-foreground max-w-2xl mx-auto",
                    children: e("tech.subtitle")
                })]
            }), a.jsxs("div", {
                className: "relative min-h-[900px] lg:min-h-[500px] flex flex-col lg:block items-center justify-center",
                children: [a.jsxs("svg", {
                    className: "hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible",
                    children: [a.jsxs("defs", {
                        children: [a.jsxs("linearGradient", {
                            id: "gradBlue",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [a.jsx("stop", {
                                offset: "0%",
                                style: {
                                    stopColor: "#60a5fa",
                                    stopOpacity: .1
                                }
                            }), a.jsx("stop", {
                                offset: "100%",
                                style: {
                                    stopColor: "#60a5fa",
                                    stopOpacity: .8
                                }
                            })]
                        }), a.jsxs("linearGradient", {
                            id: "gradEmerald",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [a.jsx("stop", {
                                offset: "0%",
                                style: {
                                    stopColor: "#34d399",
                                    stopOpacity: .8
                                }
                            }), a.jsx("stop", {
                                offset: "100%",
                                style: {
                                    stopColor: "#34d399",
                                    stopOpacity: .1
                                }
                            })]
                        }), a.jsxs("linearGradient", {
                            id: "gradOrange",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [a.jsx("stop", {
                                offset: "0%",
                                style: {
                                    stopColor: "#fb923c",
                                    stopOpacity: .1
                                }
                            }), a.jsx("stop", {
                                offset: "100%",
                                style: {
                                    stopColor: "#fb923c",
                                    stopOpacity: .8
                                }
                            })]
                        }), a.jsxs("linearGradient", {
                            id: "gradViolet",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [a.jsx("stop", {
                                offset: "0%",
                                style: {
                                    stopColor: "#a78bfa",
                                    stopOpacity: .8
                                }
                            }), a.jsx("stop", {
                                offset: "100%",
                                style: {
                                    stopColor: "#a78bfa",
                                    stopOpacity: .1
                                }
                            })]
                        }), a.jsxs("filter", {
                            id: "glow",
                            children: [a.jsx("feGaussianBlur", {
                                stdDeviation: "2.5",
                                result: "coloredBlur"
                            }), a.jsxs("feMerge", {
                                children: [a.jsx("feMergeNode", {
                                    in: "coloredBlur"
                                }), a.jsx("feMergeNode", {
                                    in: "SourceGraphic"
                                })]
                            })]
                        })]
                    }), a.jsx("path", {
                        d: "M 50% 50% C 40% 50%, 40% 20%, 25% 15%",
                        stroke: "#60a5fa",
                        strokeWidth: "2",
                        strokeOpacity: "0.4",
                        fill: "none",
                        filter: "url(#glow)"
                    }), a.jsx("path", {
                        d: "M 50% 50% C 40% 50%, 40% 20%, 25% 15%",
                        stroke: "#60a5fa",
                        strokeWidth: "4",
                        strokeOpacity: "0.1",
                        strokeDasharray: "10 5",
                        className: "animate-dash",
                        fill: "none"
                    }), a.jsx("path", {
                        d: "M 50% 50% C 60% 50%, 60% 20%, 75% 15%",
                        stroke: "#34d399",
                        strokeWidth: "2",
                        strokeOpacity: "0.4",
                        fill: "none",
                        filter: "url(#glow)"
                    }), a.jsx("path", {
                        d: "M 50% 50% C 60% 50%, 60% 20%, 75% 15%",
                        stroke: "#34d399",
                        strokeWidth: "4",
                        strokeOpacity: "0.1",
                        strokeDasharray: "10 5",
                        className: "animate-dash-reverse",
                        fill: "none"
                    }), a.jsx("path", {
                        d: "M 50% 50% C 40% 50%, 40% 80%, 25% 85%",
                        stroke: "#fb923c",
                        strokeWidth: "2",
                        strokeOpacity: "0.4",
                        fill: "none",
                        filter: "url(#glow)"
                    }), a.jsx("path", {
                        d: "M 50% 50% C 40% 50%, 40% 80%, 25% 85%",
                        stroke: "#fb923c",
                        strokeWidth: "4",
                        strokeOpacity: "0.1",
                        strokeDasharray: "10 5",
                        className: "animate-dash",
                        fill: "none"
                    }), a.jsx("path", {
                        d: "M 50% 50% C 60% 50%, 60% 80%, 75% 85%",
                        stroke: "#a78bfa",
                        strokeWidth: "2",
                        strokeOpacity: "0.4",
                        fill: "none",
                        filter: "url(#glow)"
                    }), a.jsx("path", {
                        d: "M 50% 50% C 60% 50%, 60% 80%, 75% 85%",
                        stroke: "#a78bfa",
                        strokeWidth: "4",
                        strokeOpacity: "0.1",
                        strokeDasharray: "10 5",
                        className: "animate-dash-reverse",
                        fill: "none"
                    })]
                }), r.map( (c, d) => {
                    const h = n[c.key]
                      , f = c.icon;
                    return a.jsxs(P.div, {
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            delay: d * .2,
                            duration: .6
                        },
                        className: `
                  relative z-10 w-full max-w-xl mx-auto mb-16 lg:mb-0
                  ${o[c.position]}
                  group
                `,
                        children: [a.jsx("div", {
                            className: `lg:hidden absolute left-1/2 top-[-3rem] bottom-[-3rem] w-px bg-gradient-to-b from-transparent via-${c.color} to-transparent opacity-20 -z-10`
                        }), a.jsxs("div", {
                            className: `flex items-center gap-4 mb-8 justify-center ${s[c.position]}`,
                            children: [a.jsxs("div", {
                                className: `
                    relative w-16 h-16 rounded-2xl bg-card border ${c.border} flex items-center justify-center
                    shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-300
                    group-hover:${c.glow} z-20
                  `,
                                children: [a.jsx("div", {
                                    className: `absolute inset-0 ${c.bg} opacity-50 rounded-2xl`
                                }), a.jsx(f, {
                                    className: `w-8 h-8 ${c.color} relative z-10`
                                }), a.jsx("div", {
                                    className: `
                      absolute w-3 h-3 rounded-full bg-background border-2 ${c.border} z-20
                      ${c.position.includes("left") ? "lg:-right-1.5" : "lg:-left-1.5"}
                      top-1/2 -translate-y-1/2 hidden lg:block
                    `,
                                    style: {
                                        boxShadow: `0 0 10px ${c.lineColor}`
                                    }
                                })]
                            }), a.jsxs("div", {
                                children: [a.jsx("h3", {
                                    className: `text-2xl font-bold ${c.color}`,
                                    children: h.title
                                }), a.jsx("p", {
                                    className: "text-xs text-muted-foreground font-mono uppercase tracking-widest",
                                    children: h.desc
                                })]
                            })]
                        }), a.jsx("div", {
                            className: `flex flex-wrap gap-4 ${i[c.position]}`,
                            children: h.items.map( (u, p) => a.jsx(P.div, {
                                initial: {
                                    opacity: 0,
                                    scale: .8
                                },
                                whileInView: {
                                    opacity: 1,
                                    scale: 1
                                },
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    delay: d * .2 + p * .1,
                                    duration: .4
                                },
                                whileHover: {
                                    scale: 1.05,
                                    y: -5
                                },
                                className: "relative group/node",
                                children: a.jsxs("div", {
                                    className: `
                        w-28 h-28 p-3 rounded-2xl bg-card/80 border border-border
                        hover:border-white/40 hover:bg-card transition-all duration-300
                        hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-default
                        flex flex-col items-center justify-center gap-3 relative overflow-visible
                        ${l[c.wireOrigin]}
                      `,
                                    children: [a.jsx("div", {
                                        className: `
                          hidden lg:block absolute w-1.5 h-1.5 rounded-full bg-muted-foreground
                          ${c.position === "top-left" ? "bottom-2 right-[-3px]" : ""}
                          ${c.position === "top-right" ? "bottom-2 left-[-3px]" : ""}
                          ${c.position === "bottom-left" ? "top-2 right-[-3px]" : ""}
                          ${c.position === "bottom-right" ? "top-2 left-[-3px]" : ""}
                        `
                                    }), a.jsx("div", {
                                        className: `absolute inset-0 ${c.bg} opacity-0 group-hover/node:opacity-30 transition-opacity rounded-2xl`
                                    }), a.jsx("div", {
                                        className: "relative z-10 h-10 w-10 flex items-center justify-center",
                                        children: a.jsx(dd, {
                                            name: u,
                                            size: 40,
                                            className: "group-hover/node:scale-110 transition-transform duration-300"
                                        })
                                    }), a.jsx("span", {
                                        className: "text-xs font-bold text-muted-foreground group-hover/node:text-foreground text-center relative z-10 uppercase tracking-tight",
                                        children: u
                                    })]
                                })
                            }, p))
                        })]
                    }, c.key)
                }
                )]
            }), a.jsx(P.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    delay: .8
                },
                className: "mt-12 flex justify-center",
                children: a.jsx("div", {
                    className: "inline-flex flex-wrap justify-center gap-1 p-2 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md shadow-2xl",
                    children: [e("tech.development"), e("tech.data"), e("tech.web"), e("tech.performance"), e("tech.code"), e("tech.innovation")].map( (c, d) => a.jsx(P.span, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            delay: .9 + d * .05
                        },
                        whileHover: {
                            scale: 1.05,
                            color: "hsl(var(--foreground))"
                        },
                        className: "px-4 py-2 text-xs font-mono text-muted-foreground border-r border-white/5 last:border-0 hover:text-foreground transition-colors cursor-default",
                        children: c
                    }, d))
                })
            })]
        })]
    })
}
function hd() {
    const {language: e} = Ut()
      , [t,r] = x.useState(!1)
      , n = [{
        title: "Artificial Intelligence Fundamentals",
        image: "/certificates/Artificial Intelligence Fundamentals.jpg",
        description: e === "en" ? "Comprehensive training in AI fundamentals and applications" : "Đào tạo toàn diện về nền tảng và ứng dụng AI",
        orientation: "landscape"
    }, {
        title: "Cybersecurity for Small Business Owners",
        image: "/certificates/Cybersecurity for Small Business Owners.jpg",
        description: e === "en" ? "Security practices for business protection" : "Thực hành bảo mật cho doanh nghiệp",
        orientation: "landscape"
    }, {
        title: "Developing Machine Learning Solutions",
        image: "/certificates/Developing Machine Learning Solutions.jpg",
        description: e === "en" ? "Building and deploying ML models in production" : "Xây dựng và triển khai mô hình ML trong sản xuất",
        orientation: "landscape"
    }, {
        title: "Fundamentals of Machine Learning and AI",
        image: "/certificates/Fundamentals of Machine Learning and Artificial Intelligence.jpg",
        description: e === "en" ? "Core concepts of ML and AI technologies" : "Khái niệm cốt lõi về công nghệ ML và AI",
        orientation: "landscape"
    }, {
        title: "Information Security",
        image: "/certificates/Information security.png",
        description: e === "en" ? "Protecting information assets and systems" : "Bảo vệ tài sản thông tin và hệ thống",
        orientation: "portrait"
    }, {
        title: "Introduction to Quantum Computing",
        image: "/certificates/Introduction to quantum computing.png",
        description: e === "en" ? "Exploring quantum computing principles and applications" : "Khám phá nguyên lý và ứng dụng điện toán lượng tử",
        orientation: "portrait"
    }, {
        title: "Network Security",
        image: "/certificates/network-security.jpg",
        description: e === "en" ? "Securing network infrastructure and communications" : "Bảo mật cơ sở hạ tầng mạng và truyền thông",
        orientation: "landscape"
    }]
      , o = t ? n : n.slice(0, 3);
    return a.jsx("section", {
        id: "certificates",
        className: "py-20 px-6 bg-card/20",
        children: a.jsxs("div", {
            className: "container mx-auto",
            children: [a.jsxs(P.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .8
                },
                viewport: {
                    once: !0
                },
                className: "text-center mb-16",
                children: [a.jsxs("div", {
                    className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-4 uppercase tracking-widest",
                    children: [a.jsx(ri, {
                        className: "w-3 h-3"
                    }), e === "en" ? "Achievements" : "Thành tích"]
                }), a.jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold mb-4",
                    children: e === "en" ? "Certificates & Achievements" : "Chứng chỉ & Thành tích"
                }), a.jsx("p", {
                    className: "text-xl text-muted-foreground max-w-2xl mx-auto",
                    children: e === "en" ? "Milestones in my professional learning journey" : "Những cột mốc quan trọng trong hành trình học tập chuyên nghiệp"
                })]
            }), a.jsx("div", {
                className: "columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6",
                children: o.map( (s, i) => a.jsx(P.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6,
                        delay: i * .1
                    },
                    viewport: {
                        once: !0
                    },
                    className: "break-inside-avoid",
                    children: a.jsx(ct, {
                        className: "neon-border overflow-hidden bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-all duration-300 group",
                        children: a.jsxs(dt, {
                            className: "p-0",
                            children: [a.jsxs("div", {
                                className: "relative overflow-hidden",
                                children: [a.jsx(P.img, {
                                    src: s.image,
                                    alt: s.title,
                                    className: "w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105",
                                    whileHover: {
                                        scale: 1.05
                                    }
                                }), a.jsx("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                })]
                            }), a.jsxs("div", {
                                className: "p-6",
                                children: [a.jsx("h3", {
                                    className: "text-lg font-bold text-foreground mb-3",
                                    children: s.title
                                }), a.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: s.description
                                })]
                            })]
                        })
                    })
                }, s.title))
            }), n.length > 3 && a.jsx(P.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    delay: .5
                },
                className: "text-center mt-12",
                children: a.jsx(P.div, {
                    whileHover: {
                        scale: 1.05
                    },
                    whileTap: {
                        scale: .95
                    },
                    children: a.jsx(Ft, {
                        size: "lg",
                        onClick: () => r(!t),
                        className: "bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-white font-bold px-8 py-6 text-base shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_50px_rgba(59,130,246,0.8)] transition-all duration-300",
                        children: a.jsx("span", {
                            className: "flex items-center gap-2",
                            children: t ? a.jsxs(a.Fragment, {
                                children: [a.jsx(ii, {
                                    size: 20
                                }), e === "en" ? "Show Less" : "Thu gọn"]
                            }) : a.jsxs(a.Fragment, {
                                children: [a.jsx(si, {
                                    size: 20
                                }), e === "en" ? `View All Certificates (${n.length})` : `Xem tất cả chứng chỉ (${n.length})`]
                            })
                        })
                    })
                })
            })]
        })
    })
}
function fd() {
    const {t: e, language: t} = Ut()
    , r = t === "en" ? "Ngo Quang Duan | Developer" : "Ngo Quang Duan | Lập trình viên"
    , n = t === "en" ? "Ngo Quang Duan - Young developer specializing in automation, reverse engineering and security research. Explore creative projects and technology solutions." : "Ngo Quang Duan - Lập trình viên trẻ chuyên về tự động hóa, reverse engineering và nghiên cứu bảo mật. Khám phá các dự án sáng tạo và giải pháp công nghệ."
    , o = t === "en" ? "Ngo Quang Duan" : "Ngo Quang Duan"
      , s = t === "en" ? "Developer" : "Lập trình viên"
      , i = [{
        title: "EXE2PY Analysis Toolkit",
        description: "A powerful analysis toolkit specifically designed for researching and recovering source code from executable files (.exe) packaged with PyInstaller",
        tech: ["Python", "PyInstaller", "Reverse Engineering", "Decompilation"],
        github: "https://github.com/hiep-py/tooldecexe",
        demo: "https://github.com/hiep-py/tooldecexe",
        featured: !0
    }, {
        title: "TikTok Auto Registration",
        description: "Automated TikTok account registration tool using Selenium with proxy support and multi-threading capabilities for efficient bulk account creation",
        tech: ["Python", "Selenium", "Automation", "Multi-threading"],
        github: "https://github.com/hiep-py/reg-acc-tik-tok",
        demo: "https://github.com/hiep-py/reg-acc-tik-tok",
        featured: !0
    }]
      , l = [{
        icon: ir,
        href: "https://github.com/hiep-py",
        labelKey: "contact.github"
    }, {
        icon: jo,
        href: "https://www.youtube.com/@LacDev-db2vx",
        labelKey: "contact.youtube"
    }, {
        icon: xo,
        href: "mailto:ngoquangduanvn1708@gmail.com",
        labelKey: "contact.email"
    }];
    return a.jsxs("div", {
        className: "min-h-screen bg-background text-foreground overflow-x-hidden",
        children: [a.jsx(ks, {
            title: r,
            description: n,
            keywords: "Ngo Quang Duan, Ngo Quang Duan, developer, automation, reverse engineering, security research, TikTok automation, EXE2PY, tooldecexe"
        }), a.jsx(id, {
            type: "Person",
            name: o,
            jobTitle: s,
            url: "https://ngoquangduan.vercel.app",
            image: "/avatar.png",
            description: n,
            email: "ngoquangduanvn1708@gmail.com",
            phone: "+84 90 300 0000",
            address: {
                "@type": "PostalAddress",
                streetAddress: "123 Main Street",
                addressLocality: "Hanoi",
                postalCode: "10000",
                addressCountry: "Vietnam"
            },
            sameAs: l.map(c => c.href)
        }), a.jsx(P.nav, {
            initial: {
                opacity: 0,
                y: -20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            className: "fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border",
            children: a.jsxs("div", {
                className: "container mx-auto px-6 py-4 flex justify-between items-center",
                children: [a.jsx("div", {
                    className: "text-xl font-bold",
                    children: "<Ngo Quang Duan />"
                }), a.jsx("div", {
                    className: "hidden md:flex space-x-8",
                    children: [{
                        key: "about",
                        href: "#about"
                    }, {
                        key: "skills",
                        href: "#skills"
                    }, {
                        key: "projects",
                        href: "#projects"
                    }, {
                        key: "certificates",
                        href: "#certificates"
                    }, {
                        key: "contact",
                        href: "#contact"
                    }].map(c => a.jsxs(P.a, {
                        href: c.href,
                        whileHover: {
                            scale: 1.1,
                            color: "hsl(var(--primary))",
                            textShadow: "0 0 10px hsl(var(--primary) / 0.5)"
                        },
                        whileTap: {
                            scale: .95
                        },
                        className: "hover:text-primary smooth-transition relative",
                        children: [e(`nav.${c.key}`), a.jsx(P.div, {
                            className: "absolute -bottom-1 left-0 w-full h-0.5 bg-primary origin-left",
                            initial: {
                                scaleX: 0
                            },
                            whileHover: {
                                scaleX: 1
                            },
                            transition: {
                                duration: .3
                            }
                        })]
                    }, c.key))
                }), a.jsx(sd, {})]
            })
        }), a.jsx(ld, {}), a.jsx("section", {
            id: "about",
            className: "py-20 px-6",
            children: a.jsxs("div", {
                className: "container mx-auto",
                children: [a.jsxs(P.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8
                    },
                    viewport: {
                        once: !0
                    },
                    className: "text-center mb-16",
                    children: [a.jsx(nr, {
                        as: "h2",
                        className: "text-4xl md:text-5xl font-bold mb-4",
                        children: e("about.title")
                    }), a.jsx("p", {
                        className: "text-xl text-muted-foreground max-w-2xl mx-auto",
                        children: e("about.subtitle")
                    })]
                }), a.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-12 items-center",
                    children: [a.jsx(P.div, {
                        initial: {
                            opacity: 0,
                            x: -50
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: .6
                        },
                        viewport: {
                            once: !0
                        },
                        className: "space-y-6",
                        children: a.jsx(ct, {
                            className: "neon-border-enhanced bg-gradient-to-br from-card/60 via-card/40 to-primary/5 backdrop-blur-sm border-primary/20 interactive-element smooth-transition",
                            children: a.jsx(dt, {
                                className: "p-8",
                                children: a.jsxs("div", {
                                    className: "space-y-4",
                                    children: [a.jsx("h3", {
                                        className: "text-2xl font-bold text-primary",
                                        children: e("hero.greeting")
                                    }), a.jsx("p", {
                                        className: "text-muted-foreground leading-relaxed",
                                        children: e("hero.description")
                                    }), a.jsx("div", {
                                        className: "bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg",
                                        children: a.jsx("p", {
                                            className: "text-muted-foreground italic",
                                            children: e("hero.belief")
                                        })
                                    }), a.jsxs("div", {
                                        className: "space-y-3 text-sm text-muted-foreground",
                                        children: [a.jsx("p", {
                                            children: e("hero.goal")
                                        }), a.jsx("p", {
                                            children: e("hero.journey")
                                        }), a.jsx("div", {
                                            className: "bg-accent/10 border border-accent/20 p-3 rounded-lg",
                                            children: a.jsx("p", {
                                                className: "text-accent font-medium text-center",
                                                children: e("hero.quote")
                                            })
                                        })]
                                    })]
                                })
                            })
                        })
                    }), a.jsxs(P.div, {
                        initial: {
                            opacity: 0,
                            x: 50
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: .6
                        },
                        viewport: {
                            once: !0
                        },
                        className: "space-y-6",
                        children: [a.jsx(ct, {
                            className: "neon-border bg-card/50 backdrop-blur-sm",
                            children: a.jsxs(dt, {
                                className: "p-6",
                                children: [a.jsxs("h4", {
                                    className: "text-xl font-semibold mb-4 flex items-center",
                                    children: [a.jsx(ni, {
                                        className: "mr-3 text-primary",
                                        size: 20
                                    }), t === "en" ? "Current Journey" : "Hành trình hiện tại"]
                                }), a.jsxs("ul", {
                                    className: "space-y-2 text-muted-foreground",
                                    children: [a.jsxs("li", {
                                        children: ["• ", t === "en" ? "Exploring the intersection of technology and human potential" : "Khám phá giao điểm giữa công nghệ và tiềm năng con người"]
                                    }), a.jsxs("li", {
                                        children: ["• ", t === "en" ? "Building bridges between ideas and reality" : "Xây dựng cầu nối giữa ý tưởng và thực tế"]
                                    }), a.jsxs("li", {
                                        children: ["• ", t === "en" ? "Creating meaningful connections through code" : "Tạo ra những kết nối có ý nghĩa thông qua code"]
                                    }), a.jsxs("li", {
                                        children: ["• ", t === "en" ? "Understanding problems before crafting solutions" : "Hiểu vấn đề trước khi tạo ra giải pháp"]
                                    }), a.jsxs("li", {
                                        children: ["• ", t === "en" ? "Fostering communities that grow together" : "Nuôi dưỡng những cộng đồng cùng phát triển"]
                                    })]
                                })]
                            })
                        }), a.jsx(ct, {
                            className: "neon-border bg-card/50 backdrop-blur-sm",
                            children: a.jsxs(dt, {
                                className: "p-6",
                                children: [a.jsxs("h4", {
                                    className: "text-xl font-semibold mb-4 flex items-center",
                                    children: [a.jsx(oi, {
                                        className: "mr-3 text-primary",
                                        size: 20
                                    }), t === "en" ? "Interests" : "Sở thích"]
                                }), a.jsx("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: ["Software Architecture", "AI Integration", "Process Automation", "Vibe coding", "Performance Optimization", "Innovative Solutions", "System Design", "Modern Frameworks", "DevOps & CI/CD", "Problem Solving"].map( (c, d) => a.jsx(P.div, {
                                        initial: {
                                            opacity: 0,
                                            scale: .8
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        transition: {
                                            duration: .3,
                                            delay: d * .05
                                        },
                                        viewport: {
                                            once: !0
                                        },
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        children: a.jsx(zr, {
                                            variant: "secondary",
                                            className: "bg-primary/10 hover:bg-primary/20 transition-colors cursor-default",
                                            children: c
                                        })
                                    }, c))
                                })]
                            })
                        })]
                    })]
                })]
            })
        }), a.jsx(ud, {}), a.jsx("section", {
            id: "projects",
            className: "py-20 px-6",
            children: a.jsxs("div", {
                className: "container mx-auto",
                children: [a.jsxs(P.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8
                    },
                    viewport: {
                        once: !0
                    },
                    className: "text-center mb-16",
                    children: [a.jsx(nr, {
                        as: "h2",
                        className: "text-4xl md:text-5xl font-bold mb-4",
                        children: e("projects.title")
                    }), a.jsx("p", {
                        className: "text-xl text-muted-foreground max-w-2xl mx-auto",
                        children: e("projects.subtitle")
                    })]
                }), a.jsx("div", {
                    className: "grid md:grid-cols-2 gap-8 mb-16",
                    children: i.map( (c, d) => a.jsx(P.div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .6,
                            delay: d * .2
                        },
                        viewport: {
                            once: !0
                        },
                        className: "h-full",
                        children: a.jsx(ct, {
                            className: "neon-border overflow-hidden bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-all duration-300 h-full flex flex-col",
                            children: a.jsxs(dt, {
                                className: "p-6 flex-1 flex flex-col",
                                children: [a.jsxs("div", {
                                    className: "flex items-center justify-between mb-4",
                                    children: [a.jsx("h3", {
                                        className: "text-xl font-bold text-foreground",
                                        children: c.title
                                    }), c.featured && a.jsx(zr, {
                                        variant: "outline",
                                        className: "border-primary text-primary",
                                        children: e("projects.featured")
                                    })]
                                }), a.jsx("p", {
                                    className: "text-muted-foreground mb-6 flex-1",
                                    children: c.description
                                }), a.jsx("div", {
                                    className: "flex flex-wrap gap-2 mb-6",
                                    children: c.tech.map( (h, f) => a.jsx(P.div, {
                                        initial: {
                                            opacity: 0,
                                            scale: .8
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        transition: {
                                            duration: .3,
                                            delay: .7 + f * .1
                                        },
                                        viewport: {
                                            once: !0
                                        },
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        children: a.jsx(zr, {
                                            variant: "secondary",
                                            className: "bg-primary/15 hover:bg-primary/25 text-primary border border-primary/20 px-3 py-1 text-sm font-medium transition-all duration-200",
                                            children: h
                                        })
                                    }, h))
                                }), a.jsx(P.div, {
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: .95
                                    },
                                    className: "w-full",
                                    children: a.jsx(Ft, {
                                        variant: "outline",
                                        size: "lg",
                                        className: "w-full neon-border btn-enhanced hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 smooth-hover",
                                        asChild: !0,
                                        children: a.jsxs("a", {
                                            href: c.github,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [a.jsx(ir, {
                                                size: 18,
                                                className: "mr-2"
                                            }), e("projects.source")]
                                        })
                                    })
                                })]
                            })
                        })
                    }, c.title))
                }), a.jsxs(P.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8,
                        delay: .5
                    },
                    viewport: {
                        once: !0
                    },
                    className: "text-center mt-16",
                    children: [a.jsx("p", {
                        className: "text-muted-foreground mb-6",
                        children: e("projects.interested")
                    }), a.jsx(P.div, {
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: .95
                        },
                        children: a.jsx(Ft, {
                            size: "lg",
                            className: "bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 px-8",
                            asChild: !0,
                            children: a.jsxs("a", {
                                href: "https://github.com/hiep-py",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: [a.jsx(ir, {
                                    size: 20,
                                    className: "mr-2"
                                }), e("projects.explore")]
                            })
                        })
                    })]
                })]
            })
        }), a.jsx(hd, {}), a.jsx("section", {
            id: "contact",
            className: "py-20 px-6",
            children: a.jsxs("div", {
                className: "container mx-auto text-center",
                children: [a.jsx(nr, {
                    as: "h2",
                    className: "text-4xl font-bold mb-8",
                    children: e("contact.title")
                }), a.jsx(nr, {
                    as: "p",
                    className: "text-xl text-muted-foreground mb-12",
                    delay: .2,
                    children: e("contact.subtitle")
                }), a.jsx(P.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6,
                        delay: .4
                    },
                    viewport: {
                        once: !0
                    },
                    className: "flex flex-wrap justify-center gap-6",
                    children: l.map( ({icon: c, href: d, labelKey: h}) => a.jsxs(P.a, {
                        href: d,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        whileHover: {
                            scale: 1.1,
                            rotate: 5
                        },
                        whileTap: {
                            scale: .95
                        },
                        className: "flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-primary transition-colors neon-border bg-card/50 backdrop-blur-sm",
                        children: [a.jsx(c, {
                            size: 24,
                            className: "text-primary"
                        }), a.jsx("span", {
                            className: "font-medium",
                            children: e(h)
                        })]
                    }, h))
                })]
            })
        }), a.jsx("footer", {
            className: "mt-24 py-12 border-t border-border",
            children: a.jsxs("div", {
                className: "container mx-auto px-6",
                children: [a.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-10",
                    children: [a.jsxs("div", {
                        children: [a.jsx("h3", {
                            className: "text-lg font-semibold mb-4",
                            children: e("nav.about")
                        }), a.jsx("p", {
                            className: "text-sm text-muted-foreground mb-4",
                            children: t === "en" ? "Young developer specializing in automation, machine learning and security research." : "Lập trình viên trẻ chuyên về tự động hóa, học máy và nghiên cứu bảo mật."
                        }), a.jsx("div", {
                            className: "flex space-x-4",
                            children: l.map( (c, d) => a.jsx(P.a, {
                                href: c.href,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                "aria-label": e(c.labelKey),
                                whileHover: {
                                    scale: 1.2,
                                    color: "hsl(var(--primary))"
                                },
                                className: "text-muted-foreground hover:text-primary transition-colors",
                                children: a.jsx(c.icon, {
                                    size: 20
                                })
                            }, d))
                        })]
                    }), a.jsxs("div", {
                        children: [a.jsx("h3", {
                            className: "text-lg font-semibold mb-4",
                            children: t === "en" ? "Sitemap" : "Sơ đồ trang"
                        }), a.jsxs("nav", {
                            className: "flex flex-col space-y-2",
                            children: [a.jsx("a", {
                                href: "#about",
                                className: "text-sm text-muted-foreground hover:text-primary transition-colors",
                                children: e("nav.about")
                            }), a.jsx("a", {
                                href: "#skills",
                                className: "text-sm text-muted-foreground hover:text-primary transition-colors",
                                children: e("nav.skills")
                            }), a.jsx("a", {
                                href: "#projects",
                                className: "text-sm text-muted-foreground hover:text-primary transition-colors",
                                children: e("nav.projects")
                            }), a.jsx("a", {
                                href: "#contact",
                                className: "text-sm text-muted-foreground hover:text-primary transition-colors",
                                children: e("nav.contact")
                            })]
                        })]
                    }), a.jsxs("div", {
                        children: [a.jsx("h3", {
                            className: "text-lg font-semibold mb-4",
                            children: e("nav.contact")
                        }), a.jsxs("div", {
                            className: "space-y-2",
                            children: [a.jsx("a", {
                                href: "mailto:nqduan13062007@gmail.com",
                                className: "text-sm text-muted-foreground hover:text-primary transition-colors block",
                                children: "nqduan13062007@gmail.com"
                            }), a.jsx("a", {
                                href: "https://github.com/nqd136",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-sm text-muted-foreground hover:text-primary transition-colors block",
                                children: "github.com/nqd136"
                            }), a.jsx("a", {
                                href: "https://www.youtube.com/@Nqduan",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-sm text-muted-foreground hover:text-primary transition-colors block",
                                children: "youtube.com/@Nqduan"
                            })]
                        })]
                    })]
                }), a.jsx("div", {
                    className: "mt-10 pt-6 border-t border-border text-center",
                    children: a.jsxs("p", {
                        className: "text-sm text-muted-foreground",
                        children: ["© ", new Date().getFullYear(), " Ngo Quang Duan. ", t === "en" ? "All rights reserved." : "Mọi quyền được bảo lưu."]
                    })
                })]
            })
        })]
    })
}
const pd = () => {
    const e = Hs();
    return x.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    a.jsxs("div", {
        className: "min-h-screen flex items-center justify-center bg-gray-100",
        children: [a.jsx(ks, {
            title: "404 - Không tìm thấy trang | Ngo Quang Duan",
            description: "Trang bạn đang tìm kiếm không tồn tại hoặc đã được chuyển đến địa chỉ khác.",
            noIndex: !0
        }), a.jsxs("div", {
            className: "text-center",
            children: [a.jsx("h1", {
                className: "text-4xl font-bold mb-4",
                children: "404"
            }), a.jsx("p", {
                className: "text-xl text-gray-600 mb-4",
                children: "Oops! Page not found"
            }), a.jsx("a", {
                href: "/",
                className: "text-blue-500 hover:text-blue-700 underline",
                children: "Return to Home"
            })]
        })]
    })
}
  , md = new jc
  , gd = () => a.jsx(kc, {
    client: md,
    children: a.jsx(Ac, {
        children: a.jsx(js, {
            children: a.jsxs(ec, {
                children: [a.jsx(Gi, {}), a.jsx(ka, {}), a.jsx($s, {
                    children: a.jsxs(zs, {
                        children: [a.jsx(bn, {
                            path: "/",
                            element: a.jsx(fd, {})
                        }), a.jsx(bn, {
                            path: "*",
                            element: a.jsx(pd, {})
                        })]
                    })
                })]
            })
        })
    })
});
Qi.createRoot(document.getElementById("root")).render(a.jsx(gd, {}));
