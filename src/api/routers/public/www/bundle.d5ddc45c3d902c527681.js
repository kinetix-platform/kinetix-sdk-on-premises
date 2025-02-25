(() => {
  "use strict";
  var e,
    r,
    t,
    o,
    n,
    i = {},
    a = {};
  function l(e) {
    var r = a[e];
    if (void 0 !== r) return r.exports;
    var t = (a[e] = { id: e, loaded: !1, exports: {} });
    return i[e].call(t.exports, t, t.exports, l), (t.loaded = !0), t.exports;
  }
  (l.m = i),
    (l.amdO = {}),
    (e = []),
    (l.O = (r, t, o, n) => {
      if (!t) {
        var i = 1 / 0;
        for (c = 0; c < e.length; c++) {
          (t = e[c][0]), (o = e[c][1]), (n = e[c][2]);
          for (var a = !0, u = 0; u < t.length; u++)
            (!1 & n || i >= n) && Object.keys(l.O).every((e) => l.O[e](t[u]))
              ? t.splice(u--, 1)
              : ((a = !1), n < i && (i = n));
          if (a) {
            e.splice(c--, 1);
            var d = o();
            void 0 !== d && (r = d);
          }
        }
        return r;
      }
      n = n || 0;
      for (var c = e.length; c > 0 && e[c - 1][2] > n; c--) e[c] = e[c - 1];
      e[c] = [t, o, n];
    }),
    (l.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return l.d(r, { a: r }), r;
    }),
    (t = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (l.t = function (e, o) {
      if ((1 & o && (e = this(e)), 8 & o)) return e;
      if ("object" == typeof e && e) {
        if (4 & o && e.__esModule) return e;
        if (16 & o && "function" == typeof e.then) return e;
      }
      var n = Object.create(null);
      l.r(n);
      var i = {};
      r = r || [null, t({}), t([]), t(t)];
      for (var a = 2 & o && e; "object" == typeof a && !~r.indexOf(a); a = t(a))
        Object.getOwnPropertyNames(a).forEach((r) => (i[r] = () => e[r]));
      return (i.default = () => e), l.d(n, i), n;
    }),
    (l.d = (e, r) => {
      for (var t in r)
        l.o(r, t) &&
          !l.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
    (l.f = {}),
    (l.e = (e) =>
      Promise.all(Object.keys(l.f).reduce((r, t) => (l.f[t](e, r), r), []))),
    (l.u = (e) => "bundle.b3bb1325b5b51ce0d31c.js"),
    (l.miniCssF = (e) => {}),
    (l.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (l.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (o = {}),
    (n = "kinetix-virtual-world-companion:"),
    (l.l = (e, r, t, i) => {
      if (o[e]) o[e].push(r);
      else {
        var a, u;
        if (void 0 !== t)
          for (
            var d = document.getElementsByTagName("script"), c = 0;
            c < d.length;
            c++
          ) {
            var f = d[c];
            if (
              f.getAttribute("src") == e ||
              f.getAttribute("data-webpack") == n + t
            ) {
              a = f;
              break;
            }
          }
        a ||
          ((u = !0),
          ((a = document.createElement("script")).charset = "utf-8"),
          (a.timeout = 120),
          l.nc && a.setAttribute("nonce", l.nc),
          a.setAttribute("data-webpack", n + t),
          (a.src = e)),
          (o[e] = [r]);
        var s = (r, t) => {
            (a.onerror = a.onload = null), clearTimeout(p);
            var n = o[e];
            if (
              (delete o[e],
              a.parentNode && a.parentNode.removeChild(a),
              n && n.forEach((e) => e(t)),
              r)
            )
              return r(t);
          },
          p = setTimeout(
            s.bind(null, void 0, { type: "timeout", target: a }),
            12e4,
          );
        (a.onerror = s.bind(null, a.onerror)),
          (a.onload = s.bind(null, a.onload)),
          u && document.head.appendChild(a);
      }
    }),
    (l.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (l.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (l.p = "/"),
    (() => {
      var e = { 303: 0 };
      (l.f.j = (r, t) => {
        var o = l.o(e, r) ? e[r] : void 0;
        if (0 !== o)
          if (o) t.push(o[2]);
          else if (303 != r) {
            var n = new Promise((t, n) => (o = e[r] = [t, n]));
            t.push((o[2] = n));
            var i = l.p + l.u(r),
              a = new Error();
            l.l(
              i,
              (t) => {
                if (l.o(e, r) && (0 !== (o = e[r]) && (e[r] = void 0), o)) {
                  var n = t && ("load" === t.type ? "missing" : t.type),
                    i = t && t.target && t.target.src;
                  (a.message =
                    "Loading chunk " + r + " failed.\n(" + n + ": " + i + ")"),
                    (a.name = "ChunkLoadError"),
                    (a.type = n),
                    (a.request = i),
                    o[1](a);
                }
              },
              "chunk-" + r,
              r,
            );
          } else e[r] = 0;
      }),
        (l.O.j = (r) => 0 === e[r]);
      var r = (r, t) => {
          var o,
            n,
            i = t[0],
            a = t[1],
            u = t[2],
            d = 0;
          if (i.some((r) => 0 !== e[r])) {
            for (o in a) l.o(a, o) && (l.m[o] = a[o]);
            if (u) var c = u(l);
          }
          for (r && r(t); d < i.length; d++)
            (n = i[d]), l.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return l.O(c);
        },
        t = (self.webpackChunkkinetix_virtual_world_companion =
          self.webpackChunkkinetix_virtual_world_companion || []);
      t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
    })();
})();
