import Yt, { useRef as We, useState as et, useCallback as St, useEffect as Dt, createContext as hr, useContext as yr } from "react";
import { X as br, AlertTriangle as At, Info as xr, AlertCircle as wr } from "lucide-react";
var lt = { exports: {} }, Ne = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _t;
function Er() {
  if (_t) return Ne;
  _t = 1;
  var e = Yt, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(s, i, p) {
    var l, m = {}, b = null, v = null;
    p !== void 0 && (b = "" + p), i.key !== void 0 && (b = "" + i.key), i.ref !== void 0 && (v = i.ref);
    for (l in i) a.call(i, l) && !c.hasOwnProperty(l) && (m[l] = i[l]);
    if (s && s.defaultProps) for (l in i = s.defaultProps, i) m[l] === void 0 && (m[l] = i[l]);
    return { $$typeof: t, type: s, key: b, ref: v, props: m, _owner: o.current };
  }
  return Ne.Fragment = n, Ne.jsx = f, Ne.jsxs = f, Ne;
}
var Ie = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kt;
function Or() {
  return kt || (kt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Yt, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), s = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), x = Symbol.iterator, O = "@@iterator";
    function w(r) {
      if (r === null || typeof r != "object")
        return null;
      var u = x && r[x] || r[O];
      return typeof u == "function" ? u : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(r) {
      {
        for (var u = arguments.length, d = new Array(u > 1 ? u - 1 : 0), h = 1; h < u; h++)
          d[h - 1] = arguments[h];
        S("error", r, d);
      }
    }
    function S(r, u, d) {
      {
        var h = R.ReactDebugCurrentFrame, $ = h.getStackAddendum();
        $ !== "" && (u += "%s", d = d.concat([$]));
        var F = d.map(function(P) {
          return String(P);
        });
        F.unshift("Warning: " + u), Function.prototype.apply.call(console[r], console, F);
      }
    }
    var y = !1, D = !1, j = !1, _ = !1, E = !1, T;
    T = Symbol.for("react.module.reference");
    function A(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === a || r === c || E || r === o || r === p || r === l || _ || r === v || y || D || j || typeof r == "object" && r !== null && (r.$$typeof === b || r.$$typeof === m || r.$$typeof === f || r.$$typeof === s || r.$$typeof === i || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === T || r.getModuleId !== void 0));
    }
    function I(r, u, d) {
      var h = r.displayName;
      if (h)
        return h;
      var $ = u.displayName || u.name || "";
      return $ !== "" ? d + "(" + $ + ")" : d;
    }
    function Y(r) {
      return r.displayName || "Context";
    }
    function B(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case a:
          return "Fragment";
        case n:
          return "Portal";
        case c:
          return "Profiler";
        case o:
          return "StrictMode";
        case p:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case s:
            var u = r;
            return Y(u) + ".Consumer";
          case f:
            var d = r;
            return Y(d._context) + ".Provider";
          case i:
            return I(r, r.render, "ForwardRef");
          case m:
            var h = r.displayName || null;
            return h !== null ? h : B(r.type) || "Memo";
          case b: {
            var $ = r, F = $._payload, P = $._init;
            try {
              return B(P(F));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var V = Object.assign, U = 0, H, k, fe, Q, se, de, L;
    function q() {
    }
    q.__reactDisabledLog = !0;
    function pe() {
      {
        if (U === 0) {
          H = console.log, k = console.info, fe = console.warn, Q = console.error, se = console.group, de = console.groupCollapsed, L = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: q,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        U++;
      }
    }
    function ae() {
      {
        if (U--, U === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: V({}, r, {
              value: H
            }),
            info: V({}, r, {
              value: k
            }),
            warn: V({}, r, {
              value: fe
            }),
            error: V({}, r, {
              value: Q
            }),
            group: V({}, r, {
              value: se
            }),
            groupCollapsed: V({}, r, {
              value: de
            }),
            groupEnd: V({}, r, {
              value: L
            })
          });
        }
        U < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ue = R.ReactCurrentDispatcher, ve;
    function Z(r, u, d) {
      {
        if (ve === void 0)
          try {
            throw Error();
          } catch ($) {
            var h = $.stack.trim().match(/\n( *(at )?)/);
            ve = h && h[1] || "";
          }
        return `
` + ve + r;
      }
    }
    var ye = !1, Ee;
    {
      var ke = typeof WeakMap == "function" ? WeakMap : Map;
      Ee = new ke();
    }
    function ze(r, u) {
      if (!r || ye)
        return "";
      {
        var d = Ee.get(r);
        if (d !== void 0)
          return d;
      }
      var h;
      ye = !0;
      var $ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var F;
      F = ue.current, ue.current = null, pe();
      try {
        if (u) {
          var P = function() {
            throw Error();
          };
          if (Object.defineProperty(P.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(P, []);
            } catch (z) {
              h = z;
            }
            Reflect.construct(r, [], P);
          } else {
            try {
              P.call();
            } catch (z) {
              h = z;
            }
            r.call(P.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (z) {
            h = z;
          }
          r();
        }
      } catch (z) {
        if (z && h && typeof z.stack == "string") {
          for (var C = z.stack.split(`
`), X = h.stack.split(`
`), N = C.length - 1, M = X.length - 1; N >= 1 && M >= 0 && C[N] !== X[M]; )
            M--;
          for (; N >= 1 && M >= 0; N--, M--)
            if (C[N] !== X[M]) {
              if (N !== 1 || M !== 1)
                do
                  if (N--, M--, M < 0 || C[N] !== X[M]) {
                    var ee = `
` + C[N].replace(" at new ", " at ");
                    return r.displayName && ee.includes("<anonymous>") && (ee = ee.replace("<anonymous>", r.displayName)), typeof r == "function" && Ee.set(r, ee), ee;
                  }
                while (N >= 1 && M >= 0);
              break;
            }
        }
      } finally {
        ye = !1, ue.current = F, ae(), Error.prepareStackTrace = $;
      }
      var Pe = r ? r.displayName || r.name : "", be = Pe ? Z(Pe) : "";
      return typeof r == "function" && Ee.set(r, be), be;
    }
    function Ke(r, u, d) {
      return ze(r, !1);
    }
    function at(r) {
      var u = r.prototype;
      return !!(u && u.isReactComponent);
    }
    function Oe(r, u, d) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return ze(r, at(r));
      if (typeof r == "string")
        return Z(r);
      switch (r) {
        case p:
          return Z("Suspense");
        case l:
          return Z("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case i:
            return Ke(r.render);
          case m:
            return Oe(r.type, u, d);
          case b: {
            var h = r, $ = h._payload, F = h._init;
            try {
              return Oe(F($), u, d);
            } catch {
            }
          }
        }
      return "";
    }
    var me = Object.prototype.hasOwnProperty, $e = {}, Je = R.ReactDebugCurrentFrame;
    function Re(r) {
      if (r) {
        var u = r._owner, d = Oe(r.type, r._source, u ? u.type : null);
        Je.setExtraStackFrame(d);
      } else
        Je.setExtraStackFrame(null);
    }
    function ce(r, u, d, h, $) {
      {
        var F = Function.call.bind(me);
        for (var P in r)
          if (F(r, P)) {
            var C = void 0;
            try {
              if (typeof r[P] != "function") {
                var X = Error((h || "React class") + ": " + d + " type `" + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[P] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw X.name = "Invariant Violation", X;
              }
              C = r[P](u, P, h, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (N) {
              C = N;
            }
            C && !(C instanceof Error) && (Re($), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", d, P, typeof C), Re(null)), C instanceof Error && !(C.message in $e) && ($e[C.message] = !0, Re($), g("Failed %s type: %s", d, C.message), Re(null));
          }
      }
    }
    var je = Array.isArray;
    function Ce(r) {
      return je(r);
    }
    function Ge(r) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, d = u && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return d;
      }
    }
    function Be(r) {
      try {
        return Fe(r), !1;
      } catch {
        return !0;
      }
    }
    function Fe(r) {
      return "" + r;
    }
    function Le(r) {
      if (Be(r))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(r)), Fe(r);
    }
    var ge = R.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, xt, wt, ot;
    ot = {};
    function er(r) {
      if (me.call(r, "ref")) {
        var u = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function tr(r) {
      if (me.call(r, "key")) {
        var u = Object.getOwnPropertyDescriptor(r, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function rr(r, u) {
      if (typeof r.ref == "string" && ge.current && u && ge.current.stateNode !== u) {
        var d = B(ge.current.type);
        ot[d] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', B(ge.current.type), r.ref), ot[d] = !0);
      }
    }
    function nr(r, u) {
      {
        var d = function() {
          xt || (xt = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        d.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: d,
          configurable: !0
        });
      }
    }
    function ar(r, u) {
      {
        var d = function() {
          wt || (wt = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        d.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: d,
          configurable: !0
        });
      }
    }
    var or = function(r, u, d, h, $, F, P) {
      var C = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: r,
        key: u,
        ref: d,
        props: P,
        // Record the component responsible for creating this element.
        _owner: F
      };
      return C._store = {}, Object.defineProperty(C._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(C, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.defineProperty(C, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $
      }), Object.freeze && (Object.freeze(C.props), Object.freeze(C)), C;
    };
    function ir(r, u, d, h, $) {
      {
        var F, P = {}, C = null, X = null;
        d !== void 0 && (Le(d), C = "" + d), tr(u) && (Le(u.key), C = "" + u.key), er(u) && (X = u.ref, rr(u, $));
        for (F in u)
          me.call(u, F) && !Qe.hasOwnProperty(F) && (P[F] = u[F]);
        if (r && r.defaultProps) {
          var N = r.defaultProps;
          for (F in N)
            P[F] === void 0 && (P[F] = N[F]);
        }
        if (C || X) {
          var M = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          C && nr(P, M), X && ar(P, M);
        }
        return or(r, C, X, $, h, ge.current, P);
      }
    }
    var it = R.ReactCurrentOwner, Et = R.ReactDebugCurrentFrame;
    function Te(r) {
      if (r) {
        var u = r._owner, d = Oe(r.type, r._source, u ? u.type : null);
        Et.setExtraStackFrame(d);
      } else
        Et.setExtraStackFrame(null);
    }
    var st;
    st = !1;
    function ut(r) {
      return typeof r == "object" && r !== null && r.$$typeof === t;
    }
    function Ot() {
      {
        if (it.current) {
          var r = B(it.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function sr(r) {
      return "";
    }
    var Rt = {};
    function ur(r) {
      {
        var u = Ot();
        if (!u) {
          var d = typeof r == "string" ? r : r.displayName || r.name;
          d && (u = `

Check the top-level render call using <` + d + ">.");
        }
        return u;
      }
    }
    function jt(r, u) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var d = ur(u);
        if (Rt[d])
          return;
        Rt[d] = !0;
        var h = "";
        r && r._owner && r._owner !== it.current && (h = " It was passed a child from " + B(r._owner.type) + "."), Te(r), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, h), Te(null);
      }
    }
    function Ct(r, u) {
      {
        if (typeof r != "object")
          return;
        if (Ce(r))
          for (var d = 0; d < r.length; d++) {
            var h = r[d];
            ut(h) && jt(h, u);
          }
        else if (ut(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var $ = w(r);
          if (typeof $ == "function" && $ !== r.entries)
            for (var F = $.call(r), P; !(P = F.next()).done; )
              ut(P.value) && jt(P.value, u);
        }
      }
    }
    function cr(r) {
      {
        var u = r.type;
        if (u == null || typeof u == "string")
          return;
        var d;
        if (typeof u == "function")
          d = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === i || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        u.$$typeof === m))
          d = u.propTypes;
        else
          return;
        if (d) {
          var h = B(u);
          ce(d, r.props, "prop", h, r);
        } else if (u.PropTypes !== void 0 && !st) {
          st = !0;
          var $ = B(u);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", $ || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lr(r) {
      {
        for (var u = Object.keys(r.props), d = 0; d < u.length; d++) {
          var h = u[d];
          if (h !== "children" && h !== "key") {
            Te(r), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), Te(null);
            break;
          }
        }
        r.ref !== null && (Te(r), g("Invalid attribute `ref` supplied to `React.Fragment`."), Te(null));
      }
    }
    var Tt = {};
    function Pt(r, u, d, h, $, F) {
      {
        var P = A(r);
        if (!P) {
          var C = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (C += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var X = sr();
          X ? C += X : C += Ot();
          var N;
          r === null ? N = "null" : Ce(r) ? N = "array" : r !== void 0 && r.$$typeof === t ? (N = "<" + (B(r.type) || "Unknown") + " />", C = " Did you accidentally export a JSX literal instead of a component?") : N = typeof r, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", N, C);
        }
        var M = ir(r, u, d, $, F);
        if (M == null)
          return M;
        if (P) {
          var ee = u.children;
          if (ee !== void 0)
            if (h)
              if (Ce(ee)) {
                for (var Pe = 0; Pe < ee.length; Pe++)
                  Ct(ee[Pe], r);
                Object.freeze && Object.freeze(ee);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ct(ee, r);
        }
        if (me.call(u, "key")) {
          var be = B(r), z = Object.keys(u).filter(function(gr) {
            return gr !== "key";
          }), ct = z.length > 0 ? "{key: someKey, " + z.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Tt[be + ct]) {
            var mr = z.length > 0 ? "{" + z.join(": ..., ") + ": ...}" : "{}";
            g(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ct, be, mr, be), Tt[be + ct] = !0;
          }
        }
        return r === a ? lr(M) : cr(M), M;
      }
    }
    function fr(r, u, d) {
      return Pt(r, u, d, !0);
    }
    function dr(r, u, d) {
      return Pt(r, u, d, !1);
    }
    var pr = dr, vr = fr;
    Ie.Fragment = a, Ie.jsx = pr, Ie.jsxs = vr;
  }()), Ie;
}
process.env.NODE_ENV === "production" ? lt.exports = Er() : lt.exports = Or();
var W = lt.exports, K = "top", re = "bottom", ne = "right", J = "left", pt = "auto", qe = [K, re, ne, J], Se = "start", He = "end", Rr = "clippingParents", Ht = "viewport", Me = "popper", jr = "reference", $t = /* @__PURE__ */ qe.reduce(function(e, t) {
  return e.concat([t + "-" + Se, t + "-" + He]);
}, []), Ut = /* @__PURE__ */ [].concat(qe, [pt]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Se, t + "-" + He]);
}, []), Cr = "beforeRead", Tr = "read", Pr = "afterRead", Sr = "beforeMain", Dr = "main", Ar = "afterMain", _r = "beforeWrite", kr = "write", $r = "afterWrite", Br = [Cr, Tr, Pr, Sr, Dr, Ar, _r, kr, $r];
function ie(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function G(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function we(e) {
  var t = G(e).Element;
  return e instanceof t || e instanceof Element;
}
function te(e) {
  var t = G(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function vt(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = G(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Fr(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var a = t.styles[n] || {}, o = t.attributes[n] || {}, c = t.elements[n];
    !te(c) || !ie(c) || (Object.assign(c.style, a), Object.keys(o).forEach(function(f) {
      var s = o[f];
      s === !1 ? c.removeAttribute(f) : c.setAttribute(f, s === !0 ? "" : s);
    }));
  });
}
function Lr(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(a) {
      var o = t.elements[a], c = t.attributes[a] || {}, f = Object.keys(t.styles.hasOwnProperty(a) ? t.styles[a] : n[a]), s = f.reduce(function(i, p) {
        return i[p] = "", i;
      }, {});
      !te(o) || !ie(o) || (Object.assign(o.style, s), Object.keys(c).forEach(function(i) {
        o.removeAttribute(i);
      }));
    });
  };
}
const Wr = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Fr,
  effect: Lr,
  requires: ["computeStyles"]
};
function oe(e) {
  return e.split("-")[0];
}
var xe = Math.max, rt = Math.min, De = Math.round;
function ft() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function qt() {
  return !/^((?!chrome|android).)*safari/i.test(ft());
}
function Ae(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var a = e.getBoundingClientRect(), o = 1, c = 1;
  t && te(e) && (o = e.offsetWidth > 0 && De(a.width) / e.offsetWidth || 1, c = e.offsetHeight > 0 && De(a.height) / e.offsetHeight || 1);
  var f = we(e) ? G(e) : window, s = f.visualViewport, i = !qt() && n, p = (a.left + (i && s ? s.offsetLeft : 0)) / o, l = (a.top + (i && s ? s.offsetTop : 0)) / c, m = a.width / o, b = a.height / c;
  return {
    width: m,
    height: b,
    top: l,
    right: p + m,
    bottom: l + b,
    left: p,
    x: p,
    y: l
  };
}
function mt(e) {
  var t = Ae(e), n = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - a) <= 1 && (a = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: a
  };
}
function Xt(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && vt(n)) {
    var a = t;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function le(e) {
  return G(e).getComputedStyle(e);
}
function Nr(e) {
  return ["table", "td", "th"].indexOf(ie(e)) >= 0;
}
function he(e) {
  return ((we(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function nt(e) {
  return ie(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (vt(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    he(e)
  );
}
function Bt(e) {
  return !te(e) || // https://github.com/popperjs/popper-core/issues/837
  le(e).position === "fixed" ? null : e.offsetParent;
}
function Ir(e) {
  var t = /firefox/i.test(ft()), n = /Trident/i.test(ft());
  if (n && te(e)) {
    var a = le(e);
    if (a.position === "fixed")
      return null;
  }
  var o = nt(e);
  for (vt(o) && (o = o.host); te(o) && ["html", "body"].indexOf(ie(o)) < 0; ) {
    var c = le(o);
    if (c.transform !== "none" || c.perspective !== "none" || c.contain === "paint" || ["transform", "perspective"].indexOf(c.willChange) !== -1 || t && c.willChange === "filter" || t && c.filter && c.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Xe(e) {
  for (var t = G(e), n = Bt(e); n && Nr(n) && le(n).position === "static"; )
    n = Bt(n);
  return n && (ie(n) === "html" || ie(n) === "body" && le(n).position === "static") ? t : n || Ir(e) || t;
}
function gt(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ve(e, t, n) {
  return xe(e, rt(t, n));
}
function Mr(e, t, n) {
  var a = Ve(e, t, n);
  return a > n ? n : a;
}
function zt() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Kt(e) {
  return Object.assign({}, zt(), e);
}
function Jt(e, t) {
  return t.reduce(function(n, a) {
    return n[a] = e, n;
  }, {});
}
var Vr = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Kt(typeof t != "number" ? t : Jt(t, qe));
};
function Yr(e) {
  var t, n = e.state, a = e.name, o = e.options, c = n.elements.arrow, f = n.modifiersData.popperOffsets, s = oe(n.placement), i = gt(s), p = [J, ne].indexOf(s) >= 0, l = p ? "height" : "width";
  if (!(!c || !f)) {
    var m = Vr(o.padding, n), b = mt(c), v = i === "y" ? K : J, x = i === "y" ? re : ne, O = n.rects.reference[l] + n.rects.reference[i] - f[i] - n.rects.popper[l], w = f[i] - n.rects.reference[i], R = Xe(c), g = R ? i === "y" ? R.clientHeight || 0 : R.clientWidth || 0 : 0, S = O / 2 - w / 2, y = m[v], D = g - b[l] - m[x], j = g / 2 - b[l] / 2 + S, _ = Ve(y, j, D), E = i;
    n.modifiersData[a] = (t = {}, t[E] = _, t.centerOffset = _ - j, t);
  }
}
function Hr(e) {
  var t = e.state, n = e.options, a = n.element, o = a === void 0 ? "[data-popper-arrow]" : a;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Xt(t.elements.popper, o) && (t.elements.arrow = o));
}
const Ur = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Yr,
  effect: Hr,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function _e(e) {
  return e.split("-")[1];
}
var qr = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Xr(e, t) {
  var n = e.x, a = e.y, o = t.devicePixelRatio || 1;
  return {
    x: De(n * o) / o || 0,
    y: De(a * o) / o || 0
  };
}
function Ft(e) {
  var t, n = e.popper, a = e.popperRect, o = e.placement, c = e.variation, f = e.offsets, s = e.position, i = e.gpuAcceleration, p = e.adaptive, l = e.roundOffsets, m = e.isFixed, b = f.x, v = b === void 0 ? 0 : b, x = f.y, O = x === void 0 ? 0 : x, w = typeof l == "function" ? l({
    x: v,
    y: O
  }) : {
    x: v,
    y: O
  };
  v = w.x, O = w.y;
  var R = f.hasOwnProperty("x"), g = f.hasOwnProperty("y"), S = J, y = K, D = window;
  if (p) {
    var j = Xe(n), _ = "clientHeight", E = "clientWidth";
    if (j === G(n) && (j = he(n), le(j).position !== "static" && s === "absolute" && (_ = "scrollHeight", E = "scrollWidth")), j = j, o === K || (o === J || o === ne) && c === He) {
      y = re;
      var T = m && j === D && D.visualViewport ? D.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        j[_]
      );
      O -= T - a.height, O *= i ? 1 : -1;
    }
    if (o === J || (o === K || o === re) && c === He) {
      S = ne;
      var A = m && j === D && D.visualViewport ? D.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        j[E]
      );
      v -= A - a.width, v *= i ? 1 : -1;
    }
  }
  var I = Object.assign({
    position: s
  }, p && qr), Y = l === !0 ? Xr({
    x: v,
    y: O
  }, G(n)) : {
    x: v,
    y: O
  };
  if (v = Y.x, O = Y.y, i) {
    var B;
    return Object.assign({}, I, (B = {}, B[y] = g ? "0" : "", B[S] = R ? "0" : "", B.transform = (D.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + O + "px)" : "translate3d(" + v + "px, " + O + "px, 0)", B));
  }
  return Object.assign({}, I, (t = {}, t[y] = g ? O + "px" : "", t[S] = R ? v + "px" : "", t.transform = "", t));
}
function zr(e) {
  var t = e.state, n = e.options, a = n.gpuAcceleration, o = a === void 0 ? !0 : a, c = n.adaptive, f = c === void 0 ? !0 : c, s = n.roundOffsets, i = s === void 0 ? !0 : s, p = {
    placement: oe(t.placement),
    variation: _e(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ft(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: f,
    roundOffsets: i
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ft(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: i
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Kr = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: zr,
  data: {}
};
var Ze = {
  passive: !0
};
function Jr(e) {
  var t = e.state, n = e.instance, a = e.options, o = a.scroll, c = o === void 0 ? !0 : o, f = a.resize, s = f === void 0 ? !0 : f, i = G(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return c && p.forEach(function(l) {
    l.addEventListener("scroll", n.update, Ze);
  }), s && i.addEventListener("resize", n.update, Ze), function() {
    c && p.forEach(function(l) {
      l.removeEventListener("scroll", n.update, Ze);
    }), s && i.removeEventListener("resize", n.update, Ze);
  };
}
const Gr = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Jr,
  data: {}
};
var Qr = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function tt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Qr[t];
  });
}
var Zr = {
  start: "end",
  end: "start"
};
function Lt(e) {
  return e.replace(/start|end/g, function(t) {
    return Zr[t];
  });
}
function ht(e) {
  var t = G(e), n = t.pageXOffset, a = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: a
  };
}
function yt(e) {
  return Ae(he(e)).left + ht(e).scrollLeft;
}
function en(e, t) {
  var n = G(e), a = he(e), o = n.visualViewport, c = a.clientWidth, f = a.clientHeight, s = 0, i = 0;
  if (o) {
    c = o.width, f = o.height;
    var p = qt();
    (p || !p && t === "fixed") && (s = o.offsetLeft, i = o.offsetTop);
  }
  return {
    width: c,
    height: f,
    x: s + yt(e),
    y: i
  };
}
function tn(e) {
  var t, n = he(e), a = ht(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, c = xe(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), f = xe(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -a.scrollLeft + yt(e), i = -a.scrollTop;
  return le(o || n).direction === "rtl" && (s += xe(n.clientWidth, o ? o.clientWidth : 0) - c), {
    width: c,
    height: f,
    x: s,
    y: i
  };
}
function bt(e) {
  var t = le(e), n = t.overflow, a = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + a);
}
function Gt(e) {
  return ["html", "body", "#document"].indexOf(ie(e)) >= 0 ? e.ownerDocument.body : te(e) && bt(e) ? e : Gt(nt(e));
}
function Ye(e, t) {
  var n;
  t === void 0 && (t = []);
  var a = Gt(e), o = a === ((n = e.ownerDocument) == null ? void 0 : n.body), c = G(a), f = o ? [c].concat(c.visualViewport || [], bt(a) ? a : []) : a, s = t.concat(f);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Ye(nt(f)))
  );
}
function dt(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function rn(e, t) {
  var n = Ae(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Wt(e, t, n) {
  return t === Ht ? dt(en(e, n)) : we(t) ? rn(t, n) : dt(tn(he(e)));
}
function nn(e) {
  var t = Ye(nt(e)), n = ["absolute", "fixed"].indexOf(le(e).position) >= 0, a = n && te(e) ? Xe(e) : e;
  return we(a) ? t.filter(function(o) {
    return we(o) && Xt(o, a) && ie(o) !== "body";
  }) : [];
}
function an(e, t, n, a) {
  var o = t === "clippingParents" ? nn(e) : [].concat(t), c = [].concat(o, [n]), f = c[0], s = c.reduce(function(i, p) {
    var l = Wt(e, p, a);
    return i.top = xe(l.top, i.top), i.right = rt(l.right, i.right), i.bottom = rt(l.bottom, i.bottom), i.left = xe(l.left, i.left), i;
  }, Wt(e, f, a));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Qt(e) {
  var t = e.reference, n = e.element, a = e.placement, o = a ? oe(a) : null, c = a ? _e(a) : null, f = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, i;
  switch (o) {
    case K:
      i = {
        x: f,
        y: t.y - n.height
      };
      break;
    case re:
      i = {
        x: f,
        y: t.y + t.height
      };
      break;
    case ne:
      i = {
        x: t.x + t.width,
        y: s
      };
      break;
    case J:
      i = {
        x: t.x - n.width,
        y: s
      };
      break;
    default:
      i = {
        x: t.x,
        y: t.y
      };
  }
  var p = o ? gt(o) : null;
  if (p != null) {
    var l = p === "y" ? "height" : "width";
    switch (c) {
      case Se:
        i[p] = i[p] - (t[l] / 2 - n[l] / 2);
        break;
      case He:
        i[p] = i[p] + (t[l] / 2 - n[l] / 2);
        break;
    }
  }
  return i;
}
function Ue(e, t) {
  t === void 0 && (t = {});
  var n = t, a = n.placement, o = a === void 0 ? e.placement : a, c = n.strategy, f = c === void 0 ? e.strategy : c, s = n.boundary, i = s === void 0 ? Rr : s, p = n.rootBoundary, l = p === void 0 ? Ht : p, m = n.elementContext, b = m === void 0 ? Me : m, v = n.altBoundary, x = v === void 0 ? !1 : v, O = n.padding, w = O === void 0 ? 0 : O, R = Kt(typeof w != "number" ? w : Jt(w, qe)), g = b === Me ? jr : Me, S = e.rects.popper, y = e.elements[x ? g : b], D = an(we(y) ? y : y.contextElement || he(e.elements.popper), i, l, f), j = Ae(e.elements.reference), _ = Qt({
    reference: j,
    element: S,
    strategy: "absolute",
    placement: o
  }), E = dt(Object.assign({}, S, _)), T = b === Me ? E : j, A = {
    top: D.top - T.top + R.top,
    bottom: T.bottom - D.bottom + R.bottom,
    left: D.left - T.left + R.left,
    right: T.right - D.right + R.right
  }, I = e.modifiersData.offset;
  if (b === Me && I) {
    var Y = I[o];
    Object.keys(A).forEach(function(B) {
      var V = [ne, re].indexOf(B) >= 0 ? 1 : -1, U = [K, re].indexOf(B) >= 0 ? "y" : "x";
      A[B] += Y[U] * V;
    });
  }
  return A;
}
function on(e, t) {
  t === void 0 && (t = {});
  var n = t, a = n.placement, o = n.boundary, c = n.rootBoundary, f = n.padding, s = n.flipVariations, i = n.allowedAutoPlacements, p = i === void 0 ? Ut : i, l = _e(a), m = l ? s ? $t : $t.filter(function(x) {
    return _e(x) === l;
  }) : qe, b = m.filter(function(x) {
    return p.indexOf(x) >= 0;
  });
  b.length === 0 && (b = m);
  var v = b.reduce(function(x, O) {
    return x[O] = Ue(e, {
      placement: O,
      boundary: o,
      rootBoundary: c,
      padding: f
    })[oe(O)], x;
  }, {});
  return Object.keys(v).sort(function(x, O) {
    return v[x] - v[O];
  });
}
function sn(e) {
  if (oe(e) === pt)
    return [];
  var t = tt(e);
  return [Lt(e), t, Lt(t)];
}
function un(e) {
  var t = e.state, n = e.options, a = e.name;
  if (!t.modifiersData[a]._skip) {
    for (var o = n.mainAxis, c = o === void 0 ? !0 : o, f = n.altAxis, s = f === void 0 ? !0 : f, i = n.fallbackPlacements, p = n.padding, l = n.boundary, m = n.rootBoundary, b = n.altBoundary, v = n.flipVariations, x = v === void 0 ? !0 : v, O = n.allowedAutoPlacements, w = t.options.placement, R = oe(w), g = R === w, S = i || (g || !x ? [tt(w)] : sn(w)), y = [w].concat(S).reduce(function(pe, ae) {
      return pe.concat(oe(ae) === pt ? on(t, {
        placement: ae,
        boundary: l,
        rootBoundary: m,
        padding: p,
        flipVariations: x,
        allowedAutoPlacements: O
      }) : ae);
    }, []), D = t.rects.reference, j = t.rects.popper, _ = /* @__PURE__ */ new Map(), E = !0, T = y[0], A = 0; A < y.length; A++) {
      var I = y[A], Y = oe(I), B = _e(I) === Se, V = [K, re].indexOf(Y) >= 0, U = V ? "width" : "height", H = Ue(t, {
        placement: I,
        boundary: l,
        rootBoundary: m,
        altBoundary: b,
        padding: p
      }), k = V ? B ? ne : J : B ? re : K;
      D[U] > j[U] && (k = tt(k));
      var fe = tt(k), Q = [];
      if (c && Q.push(H[Y] <= 0), s && Q.push(H[k] <= 0, H[fe] <= 0), Q.every(function(pe) {
        return pe;
      })) {
        T = I, E = !1;
        break;
      }
      _.set(I, Q);
    }
    if (E)
      for (var se = x ? 3 : 1, de = function(ae) {
        var ue = y.find(function(ve) {
          var Z = _.get(ve);
          if (Z)
            return Z.slice(0, ae).every(function(ye) {
              return ye;
            });
        });
        if (ue)
          return T = ue, "break";
      }, L = se; L > 0; L--) {
        var q = de(L);
        if (q === "break") break;
      }
    t.placement !== T && (t.modifiersData[a]._skip = !0, t.placement = T, t.reset = !0);
  }
}
const cn = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: un,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Nt(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function It(e) {
  return [K, ne, re, J].some(function(t) {
    return e[t] >= 0;
  });
}
function ln(e) {
  var t = e.state, n = e.name, a = t.rects.reference, o = t.rects.popper, c = t.modifiersData.preventOverflow, f = Ue(t, {
    elementContext: "reference"
  }), s = Ue(t, {
    altBoundary: !0
  }), i = Nt(f, a), p = Nt(s, o, c), l = It(i), m = It(p);
  t.modifiersData[n] = {
    referenceClippingOffsets: i,
    popperEscapeOffsets: p,
    isReferenceHidden: l,
    hasPopperEscaped: m
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": l,
    "data-popper-escaped": m
  });
}
const fn = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: ln
};
function dn(e, t, n) {
  var a = oe(e), o = [J, K].indexOf(a) >= 0 ? -1 : 1, c = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, f = c[0], s = c[1];
  return f = f || 0, s = (s || 0) * o, [J, ne].indexOf(a) >= 0 ? {
    x: s,
    y: f
  } : {
    x: f,
    y: s
  };
}
function pn(e) {
  var t = e.state, n = e.options, a = e.name, o = n.offset, c = o === void 0 ? [0, 0] : o, f = Ut.reduce(function(l, m) {
    return l[m] = dn(m, t.rects, c), l;
  }, {}), s = f[t.placement], i = s.x, p = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += p), t.modifiersData[a] = f;
}
const vn = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: pn
};
function mn(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Qt({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const gn = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: mn,
  data: {}
};
function hn(e) {
  return e === "x" ? "y" : "x";
}
function yn(e) {
  var t = e.state, n = e.options, a = e.name, o = n.mainAxis, c = o === void 0 ? !0 : o, f = n.altAxis, s = f === void 0 ? !1 : f, i = n.boundary, p = n.rootBoundary, l = n.altBoundary, m = n.padding, b = n.tether, v = b === void 0 ? !0 : b, x = n.tetherOffset, O = x === void 0 ? 0 : x, w = Ue(t, {
    boundary: i,
    rootBoundary: p,
    padding: m,
    altBoundary: l
  }), R = oe(t.placement), g = _e(t.placement), S = !g, y = gt(R), D = hn(y), j = t.modifiersData.popperOffsets, _ = t.rects.reference, E = t.rects.popper, T = typeof O == "function" ? O(Object.assign({}, t.rects, {
    placement: t.placement
  })) : O, A = typeof T == "number" ? {
    mainAxis: T,
    altAxis: T
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, T), I = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, Y = {
    x: 0,
    y: 0
  };
  if (j) {
    if (c) {
      var B, V = y === "y" ? K : J, U = y === "y" ? re : ne, H = y === "y" ? "height" : "width", k = j[y], fe = k + w[V], Q = k - w[U], se = v ? -E[H] / 2 : 0, de = g === Se ? _[H] : E[H], L = g === Se ? -E[H] : -_[H], q = t.elements.arrow, pe = v && q ? mt(q) : {
        width: 0,
        height: 0
      }, ae = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : zt(), ue = ae[V], ve = ae[U], Z = Ve(0, _[H], pe[H]), ye = S ? _[H] / 2 - se - Z - ue - A.mainAxis : de - Z - ue - A.mainAxis, Ee = S ? -_[H] / 2 + se + Z + ve + A.mainAxis : L + Z + ve + A.mainAxis, ke = t.elements.arrow && Xe(t.elements.arrow), ze = ke ? y === "y" ? ke.clientTop || 0 : ke.clientLeft || 0 : 0, Ke = (B = I?.[y]) != null ? B : 0, at = k + ye - Ke - ze, Oe = k + Ee - Ke, me = Ve(v ? rt(fe, at) : fe, k, v ? xe(Q, Oe) : Q);
      j[y] = me, Y[y] = me - k;
    }
    if (s) {
      var $e, Je = y === "x" ? K : J, Re = y === "x" ? re : ne, ce = j[D], je = D === "y" ? "height" : "width", Ce = ce + w[Je], Ge = ce - w[Re], Be = [K, J].indexOf(R) !== -1, Fe = ($e = I?.[D]) != null ? $e : 0, Le = Be ? Ce : ce - _[je] - E[je] - Fe + A.altAxis, ge = Be ? ce + _[je] + E[je] - Fe - A.altAxis : Ge, Qe = v && Be ? Mr(Le, ce, ge) : Ve(v ? Le : Ce, ce, v ? ge : Ge);
      j[D] = Qe, Y[D] = Qe - ce;
    }
    t.modifiersData[a] = Y;
  }
}
const bn = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: yn,
  requiresIfExists: ["offset"]
};
function xn(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function wn(e) {
  return e === G(e) || !te(e) ? ht(e) : xn(e);
}
function En(e) {
  var t = e.getBoundingClientRect(), n = De(t.width) / e.offsetWidth || 1, a = De(t.height) / e.offsetHeight || 1;
  return n !== 1 || a !== 1;
}
function On(e, t, n) {
  n === void 0 && (n = !1);
  var a = te(t), o = te(t) && En(t), c = he(t), f = Ae(e, o, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, i = {
    x: 0,
    y: 0
  };
  return (a || !a && !n) && ((ie(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  bt(c)) && (s = wn(t)), te(t) ? (i = Ae(t, !0), i.x += t.clientLeft, i.y += t.clientTop) : c && (i.x = yt(c))), {
    x: f.left + s.scrollLeft - i.x,
    y: f.top + s.scrollTop - i.y,
    width: f.width,
    height: f.height
  };
}
function Rn(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), a = [];
  e.forEach(function(c) {
    t.set(c.name, c);
  });
  function o(c) {
    n.add(c.name);
    var f = [].concat(c.requires || [], c.requiresIfExists || []);
    f.forEach(function(s) {
      if (!n.has(s)) {
        var i = t.get(s);
        i && o(i);
      }
    }), a.push(c);
  }
  return e.forEach(function(c) {
    n.has(c.name) || o(c);
  }), a;
}
function jn(e) {
  var t = Rn(e);
  return Br.reduce(function(n, a) {
    return n.concat(t.filter(function(o) {
      return o.phase === a;
    }));
  }, []);
}
function Cn(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Tn(e) {
  var t = e.reduce(function(n, a) {
    var o = n[a.name];
    return n[a.name] = o ? Object.assign({}, o, a, {
      options: Object.assign({}, o.options, a.options),
      data: Object.assign({}, o.data, a.data)
    }) : a, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Mt = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Vt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Pn(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, a = n === void 0 ? [] : n, o = t.defaultOptions, c = o === void 0 ? Mt : o;
  return function(s, i, p) {
    p === void 0 && (p = c);
    var l = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Mt, c),
      modifiersData: {},
      elements: {
        reference: s,
        popper: i
      },
      attributes: {},
      styles: {}
    }, m = [], b = !1, v = {
      state: l,
      setOptions: function(R) {
        var g = typeof R == "function" ? R(l.options) : R;
        O(), l.options = Object.assign({}, c, l.options, g), l.scrollParents = {
          reference: we(s) ? Ye(s) : s.contextElement ? Ye(s.contextElement) : [],
          popper: Ye(i)
        };
        var S = jn(Tn([].concat(a, l.options.modifiers)));
        return l.orderedModifiers = S.filter(function(y) {
          return y.enabled;
        }), x(), v.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!b) {
          var R = l.elements, g = R.reference, S = R.popper;
          if (Vt(g, S)) {
            l.rects = {
              reference: On(g, Xe(S), l.options.strategy === "fixed"),
              popper: mt(S)
            }, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach(function(A) {
              return l.modifiersData[A.name] = Object.assign({}, A.data);
            });
            for (var y = 0; y < l.orderedModifiers.length; y++) {
              if (l.reset === !0) {
                l.reset = !1, y = -1;
                continue;
              }
              var D = l.orderedModifiers[y], j = D.fn, _ = D.options, E = _ === void 0 ? {} : _, T = D.name;
              typeof j == "function" && (l = j({
                state: l,
                options: E,
                name: T,
                instance: v
              }) || l);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Cn(function() {
        return new Promise(function(w) {
          v.forceUpdate(), w(l);
        });
      }),
      destroy: function() {
        O(), b = !0;
      }
    };
    if (!Vt(s, i))
      return v;
    v.setOptions(p).then(function(w) {
      !b && p.onFirstUpdate && p.onFirstUpdate(w);
    });
    function x() {
      l.orderedModifiers.forEach(function(w) {
        var R = w.name, g = w.options, S = g === void 0 ? {} : g, y = w.effect;
        if (typeof y == "function") {
          var D = y({
            state: l,
            name: R,
            instance: v,
            options: S
          }), j = function() {
          };
          m.push(D || j);
        }
      });
    }
    function O() {
      m.forEach(function(w) {
        return w();
      }), m = [];
    }
    return v;
  };
}
var Sn = [Gr, gn, Kr, Wr, vn, cn, bn, Ur, fn], Dn = /* @__PURE__ */ Pn({
  defaultModifiers: Sn
});
const An = (e) => {
  const {
    isOpen: t,
    onClose: n,
    onConfirm: a,
    triggerRef: o,
    position: c,
    formFields: f = [],
    asyncOptions: s
  } = e, i = We(null), p = We(null), l = We(null), m = We(null), b = We(null), [v, x] = et({}), [O, w] = et(!1), [R, g] = et("idle"), S = (E, T) => {
    x((A) => ({ ...A, [E]: T }));
  }, y = () => {
    const E = {};
    return f.forEach((T) => {
      if (T.validation) {
        const A = T.validation(v[T.name]);
        A && (E[T.name] = A);
      }
      T.required && !v[T.name] && (E[T.name] = "This field is required");
    }), E;
  }, D = async () => {
    const E = y();
    if (!(Object.keys(E).length > 0) && typeof a == "function")
      try {
        w(!0), g("loading");
        const T = await Promise.resolve(a(v));
        g("success"), s?.successText && await new Promise((A) => setTimeout(A, 1e3)), n();
      } catch {
        g("error"), s?.errorText && await new Promise((A) => setTimeout(A, 2e3));
      } finally {
        w(!1);
      }
  }, j = St((E) => {
    i.current && !i.current.contains(E.target) && n();
  }, [n]), _ = St((E) => {
    E.key === "Escape" && n(), E.key === "Tab" && (E.shiftKey ? document.activeElement === m.current && (E.preventDefault(), b.current?.focus()) : document.activeElement === b.current && (E.preventDefault(), m.current?.focus()));
  }, [n]);
  return Dt(() => {
    if (!t || !o?.current || !i.current) return;
    const E = () => {
      l.current && (l.current.destroy(), l.current = null), document.removeEventListener("mousedown", j), document.removeEventListener("keydown", _);
    };
    return document.addEventListener("mousedown", j), document.addEventListener("keydown", _), l.current = Dn(o.current, i.current, {
      placement: c,
      modifiers: [
        {
          name: "offset",
          options: { offset: [0, 8] }
        },
        {
          name: "arrow",
          options: {
            element: p.current,
            padding: 5
          }
        },
        {
          name: "preventOverflow",
          options: {
            padding: 8,
            altAxis: !0
          }
        },
        {
          name: "flip",
          options: {
            fallbackPlacements: ["bottom", "right", "left"]
          }
        }
      ]
    }), m.current?.focus(), E;
  }, [t, o, j, _, c]), Dt(() => {
    l.current && l.current.update();
  }, [e.message]), {
    dialogRef: i,
    arrowRef: p,
    firstFocusableRef: m,
    lastFocusableRef: b,
    formData: v,
    isLoading: O,
    status: R,
    handleFormChange: S,
    handleConfirm: D,
    handleClickOutside: j,
    handleKeyDown: _,
    validateForm: y
  };
}, _n = {
  tailwind: {
    container: "z-50 bg-white rounded-lg shadow-xl p-4 border border-gray-200 transition-all duration-200",
    arrow: "absolute w-2 h-2",
    closeButton: "absolute right-2 top-2 text-gray-400 hover:text-gray-500",
    closeIcon: "w-4 h-4",
    header: "flex items-center gap-2 mb-3",
    icon: "w-5 h-5",
    title: "text-base font-semibold text-gray-900",
    message: "text-sm text-gray-600 mb-4",
    footer: "flex justify-end gap-2",
    cancelButton: "px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md",
    confirmButton: {
      danger: "px-3 py-1.5 text-xs font-medium text-white rounded-md bg-red-600 hover:bg-red-700",
      warning: "px-3 py-1.5 text-xs font-medium text-white rounded-md bg-yellow-600 hover:bg-yellow-700",
      info: "px-3 py-1.5 text-xs font-medium text-white rounded-md bg-blue-600 hover:bg-blue-700"
    },
    darkMode: {
      container: "bg-gray-800 border-gray-700",
      title: "text-gray-100",
      message: "text-gray-300",
      cancelButton: "text-gray-300 bg-gray-700 hover:bg-gray-600",
      confirmButton: {
        danger: "bg-red-500 hover:bg-red-600",
        warning: "bg-yellow-500 hover:bg-yellow-600",
        info: "bg-blue-500 hover:bg-blue-600"
      }
    }
  },
  bootstrap: {
    container: "popover bs-popover-auto bg-white rounded shadow-lg p-3 border transition",
    arrow: "popover-arrow position-absolute",
    closeButton: "btn-close position-absolute top-0 end-0 p-2",
    closeIcon: "d-none",
    header: "d-flex align-items-center gap-2 mb-2",
    icon: "",
    title: "h6 mb-0",
    message: "small text-body-secondary mb-3",
    footer: "d-flex justify-content-end gap-2",
    cancelButton: "btn btn-sm btn-light",
    confirmButton: {
      danger: "btn btn-sm btn-danger",
      warning: "btn btn-sm btn-warning",
      info: "btn btn-sm btn-primary"
    },
    darkMode: {
      container: "bg-dark text-light border-secondary",
      title: "text-light",
      message: "text-light-50",
      cancelButton: "btn-dark",
      confirmButton: {
        danger: "btn-outline-danger",
        warning: "btn-outline-warning",
        info: "btn-outline-primary"
      }
    }
  },
  none: {
    container: "",
    arrow: "",
    closeButton: "",
    closeIcon: "",
    header: "",
    icon: "",
    title: "",
    message: "",
    footer: "",
    cancelButton: "",
    confirmButton: {
      danger: "",
      warning: "",
      info: ""
    }
  }
}, Zt = hr({
  dialogQueue: [],
  addDialog: () => {
  },
  removeDialog: () => {
  },
  updateDialog: () => {
  }
}), Wn = ({ children: e }) => {
  const [t, n] = et([]), a = (f) => {
    n((s) => [...s, f]);
  }, o = (f) => {
    n((s) => s.filter((i) => i.id !== f));
  }, c = (f, s) => {
    n(
      (i) => i.map((p) => p.id === f ? { ...p, props: { ...p.props, ...s } } : p)
    );
  };
  return /* @__PURE__ */ W.jsxs(Zt.Provider, { value: { dialogQueue: t, addDialog: a, removeDialog: o, updateDialog: c }, children: [
    e,
    t.map((f) => /* @__PURE__ */ W.jsx(Bn, { ...f.props }, f.id))
  ] });
}, Nn = () => {
  const e = yr(Zt);
  if (!e)
    throw new Error("useDialog must be used within a DialogProvider");
  return e;
}, kn = (e, t) => t === "tailwind" ? {
  sm: "w-[280px]",
  md: "w-[320px]",
  lg: "w-[400px]"
}[e] : "", $n = (e, t, n) => {
  if (n === "tailwind") {
    const a = `transition-all duration-${e.duration} ${e.timing}`;
    switch (e.type) {
      case "fade":
        return `${a} ${t ? "opacity-100" : "opacity-0"}`;
      case "scale":
        return `${a} ${t ? "scale-100 opacity-100" : "scale-95 opacity-0"}`;
      case "slide":
        return `${a} transform ${t ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`;
      case "none":
        return "";
      default:
        return e.customKeyframes ? e.customKeyframes : "";
    }
  }
  return "";
}, Bn = ({
  isOpen: e,
  onClose: t,
  onConfirm: n,
  title: a = "Confirm Action",
  message: o = "Are you sure you want to proceed?",
  confirmText: c = "Confirm",
  cancelText: f = "Cancel",
  type: s = "warning",
  size: i = "md",
  position: p = "top",
  triggerRef: l,
  framework: m = "tailwind",
  styles: b = {},
  className: v = "",
  darkMode: x = !1,
  customIcon: O,
  animation: w = { type: "scale", duration: 200, timing: "ease-out" },
  zIndex: R = 50,
  formFields: g = [],
  asyncOptions: S,
  stackOrder: y = 0,
  nested: D = !1,
  parentId: j,
  children: _
}) => {
  const {
    dialogRef: E,
    arrowRef: T,
    firstFocusableRef: A,
    lastFocusableRef: I,
    formData: Y,
    isLoading: B,
    status: V,
    handleFormChange: U,
    handleConfirm: H
  } = An({
    isOpen: e,
    onClose: t,
    onConfirm: n,
    triggerRef: l,
    position: p,
    formFields: g,
    asyncOptions: S
  }), k = {
    ..._n[m],
    ...b
  };
  if (!e) return null;
  const Q = (() => {
    if (O) return O;
    switch (s) {
      case "danger":
        return wr;
      case "warning":
        return At;
      case "info":
        return xr;
      default:
        return At;
    }
  })(), se = () => m === "tailwind" ? s === "danger" ? "text-red-500" : s === "warning" ? "text-yellow-500" : "text-blue-500" : "", de = () => g.map((L) => /* @__PURE__ */ W.jsxs("div", { className: "mb-4", children: [
    /* @__PURE__ */ W.jsxs("label", { className: `block mb-2 ${x ? "text-gray-200" : "text-gray-700"}`, children: [
      L.label,
      L.required && /* @__PURE__ */ W.jsx("span", { className: "text-red-500", children: "*" })
    ] }),
    L.type === "text" && /* @__PURE__ */ W.jsx(
      "input",
      {
        type: "text",
        name: L.name,
        value: Y[L.name] || "",
        onChange: (q) => U(L.name, q.target.value),
        className: `w-full px-3 py-2 border rounded-md ${x ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300"}`
      }
    ),
    L.type === "textarea" && /* @__PURE__ */ W.jsx(
      "textarea",
      {
        name: L.name,
        value: Y[L.name] || "",
        onChange: (q) => U(L.name, q.target.value),
        className: `w-full px-3 py-2 border rounded-md ${x ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300"}`
      }
    ),
    L.type === "select" && L.options && /* @__PURE__ */ W.jsxs(
      "select",
      {
        name: L.name,
        value: Y[L.name] || "",
        onChange: (q) => U(L.name, q.target.value),
        className: `w-full px-3 py-2 border rounded-md ${x ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300"}`,
        children: [
          /* @__PURE__ */ W.jsx("option", { value: "", children: "Select an option" }),
          L.options.map((q) => /* @__PURE__ */ W.jsx("option", { value: q.value, children: q.label }, q.value))
        ]
      }
    )
  ] }, L.name));
  return /* @__PURE__ */ W.jsxs(
    "div",
    {
      ref: E,
      className: `
        ${k.container}
        ${x && k.darkMode?.container || ""}
        ${kn(i, m)}
        ${$n(w, e, m)}
        ${v}
      `,
      style: { zIndex: R },
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "dialog-title",
      children: [
        /* @__PURE__ */ W.jsx("div", { ref: T, className: k.arrow }),
        /* @__PURE__ */ W.jsx(
          "button",
          {
            ref: A,
            className: k.closeButton,
            onClick: t,
            "aria-label": "Close dialog",
            children: /* @__PURE__ */ W.jsx(br, { className: k.closeIcon })
          }
        ),
        /* @__PURE__ */ W.jsxs("div", { className: k.header, children: [
          /* @__PURE__ */ W.jsx(Q, { className: `${k.icon} ${se()}` }),
          /* @__PURE__ */ W.jsx(
            "h3",
            {
              id: "dialog-title",
              className: `${k.title} ${x && k.darkMode?.title || ""}`,
              children: a
            }
          )
        ] }),
        /* @__PURE__ */ W.jsx("p", { className: `${k.message} ${x && k.darkMode?.message || ""}`, children: o }),
        g.length > 0 && de(),
        V === "loading" && S?.loadingText && /* @__PURE__ */ W.jsx("p", { className: "text-sm text-gray-500 mb-2", children: S.loadingText }),
        V === "error" && S?.errorText && /* @__PURE__ */ W.jsx("p", { className: "text-sm text-red-500 mb-2", children: S.errorText }),
        V === "success" && S?.successText && /* @__PURE__ */ W.jsx("p", { className: "text-sm text-green-500 mb-2", children: S.successText }),
        /* @__PURE__ */ W.jsxs("div", { className: k.footer, children: [
          /* @__PURE__ */ W.jsx(
            "button",
            {
              className: `${k.cancelButton} ${x && k.darkMode?.cancelButton || ""}`,
              onClick: t,
              disabled: B,
              children: f
            }
          ),
          /* @__PURE__ */ W.jsx(
            "button",
            {
              ref: I,
              className: `${k.confirmButton[s]} ${x && k.darkMode?.confirmButton?.[s] || ""}`,
              onClick: H,
              disabled: B,
              children: c
            }
          )
        ] }),
        _
      ]
    }
  );
};
export {
  Wn as DialogProvider,
  Bn as default,
  Nn as useDialog
};
//# sourceMappingURL=index.es.js.map
