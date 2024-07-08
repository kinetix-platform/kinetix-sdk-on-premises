/*! For license information please see bundle.b0f25b0da42e7a43d81a.js.LICENSE.txt */
(self.webpackChunkkinetix_frontoffice =
  self.webpackChunkkinetix_frontoffice || []).push([
  [337],
  {
    29887: function (t, e, n) {
      var r;
      !(function (o) {
        "use strict";
        var i,
          a = 1e9,
          c = {
            precision: 20,
            rounding: 4,
            toExpNeg: -7,
            toExpPos: 21,
            LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
          },
          u = !0,
          l = "[DecimalError] ",
          s = l + "Invalid argument: ",
          f = l + "Exponent out of range: ",
          p = Math.floor,
          h = Math.pow,
          d = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
          y = 1e7,
          v = 7,
          m = 9007199254740991,
          g = p(m / v),
          b = {};
        function x(t, e) {
          var n,
            r,
            o,
            i,
            a,
            c,
            l,
            s,
            f = t.constructor,
            p = f.precision;
          if (!t.s || !e.s) return e.s || (e = new f(t)), u ? T(e, p) : e;
          if (
            ((l = t.d),
            (s = e.d),
            (a = t.e),
            (o = e.e),
            (l = l.slice()),
            (i = a - o))
          ) {
            for (
              i < 0
                ? ((r = l), (i = -i), (c = s.length))
                : ((r = s), (o = a), (c = l.length)),
                i > (c = (a = Math.ceil(p / v)) > c ? a + 1 : c + 1) &&
                  ((i = c), (r.length = 1)),
                r.reverse();
              i--;

            )
              r.push(0);
            r.reverse();
          }
          for (
            (c = l.length) - (i = s.length) < 0 &&
              ((i = c), (r = s), (s = l), (l = r)),
              n = 0;
            i;

          )
            (n = ((l[--i] = l[i] + s[i] + n) / y) | 0), (l[i] %= y);
          for (n && (l.unshift(n), ++o), c = l.length; 0 == l[--c]; ) l.pop();
          return (e.d = l), (e.e = o), u ? T(e, p) : e;
        }
        function w(t, e, n) {
          if (t !== ~~t || t < e || t > n) throw Error(s + t);
        }
        function O(t) {
          var e,
            n,
            r,
            o = t.length - 1,
            i = "",
            a = t[0];
          if (o > 0) {
            for (i += a, e = 1; e < o; e++)
              (r = t[e] + ""), (n = v - r.length) && (i += P(n)), (i += r);
            (a = t[e]), (n = v - (r = a + "").length) && (i += P(n));
          } else if (0 === a) return "0";
          for (; a % 10 == 0; ) a /= 10;
          return i + a;
        }
        (b.absoluteValue = b.abs =
          function () {
            var t = new this.constructor(this);
            return t.s && (t.s = 1), t;
          }),
          (b.comparedTo = b.cmp =
            function (t) {
              var e,
                n,
                r,
                o,
                i = this;
              if (((t = new i.constructor(t)), i.s !== t.s)) return i.s || -t.s;
              if (i.e !== t.e) return (i.e > t.e) ^ (i.s < 0) ? 1 : -1;
              for (
                e = 0, n = (r = i.d.length) < (o = t.d.length) ? r : o;
                e < n;
                ++e
              )
                if (i.d[e] !== t.d[e])
                  return (i.d[e] > t.d[e]) ^ (i.s < 0) ? 1 : -1;
              return r === o ? 0 : (r > o) ^ (i.s < 0) ? 1 : -1;
            }),
          (b.decimalPlaces = b.dp =
            function () {
              var t = this,
                e = t.d.length - 1,
                n = (e - t.e) * v;
              if ((e = t.d[e])) for (; e % 10 == 0; e /= 10) n--;
              return n < 0 ? 0 : n;
            }),
          (b.dividedBy = b.div =
            function (t) {
              return j(this, new this.constructor(t));
            }),
          (b.dividedToIntegerBy = b.idiv =
            function (t) {
              var e = this.constructor;
              return T(j(this, new e(t), 0, 1), e.precision);
            }),
          (b.equals = b.eq =
            function (t) {
              return !this.cmp(t);
            }),
          (b.exponent = function () {
            return E(this);
          }),
          (b.greaterThan = b.gt =
            function (t) {
              return this.cmp(t) > 0;
            }),
          (b.greaterThanOrEqualTo = b.gte =
            function (t) {
              return this.cmp(t) >= 0;
            }),
          (b.isInteger = b.isint =
            function () {
              return this.e > this.d.length - 2;
            }),
          (b.isNegative = b.isneg =
            function () {
              return this.s < 0;
            }),
          (b.isPositive = b.ispos =
            function () {
              return this.s > 0;
            }),
          (b.isZero = function () {
            return 0 === this.s;
          }),
          (b.lessThan = b.lt =
            function (t) {
              return this.cmp(t) < 0;
            }),
          (b.lessThanOrEqualTo = b.lte =
            function (t) {
              return this.cmp(t) < 1;
            }),
          (b.logarithm = b.log =
            function (t) {
              var e,
                n = this,
                r = n.constructor,
                o = r.precision,
                a = o + 5;
              if (void 0 === t) t = new r(10);
              else if ((t = new r(t)).s < 1 || t.eq(i)) throw Error(l + "NaN");
              if (n.s < 1) throw Error(l + (n.s ? "NaN" : "-Infinity"));
              return n.eq(i)
                ? new r(0)
                : ((u = !1), (e = j(k(n, a), k(t, a), a)), (u = !0), T(e, o));
            }),
          (b.minus = b.sub =
            function (t) {
              var e = this;
              return (
                (t = new e.constructor(t)),
                e.s == t.s ? _(e, t) : x(e, ((t.s = -t.s), t))
              );
            }),
          (b.modulo = b.mod =
            function (t) {
              var e,
                n = this,
                r = n.constructor,
                o = r.precision;
              if (!(t = new r(t)).s) throw Error(l + "NaN");
              return n.s
                ? ((u = !1), (e = j(n, t, 0, 1).times(t)), (u = !0), n.minus(e))
                : T(new r(n), o);
            }),
          (b.naturalExponential = b.exp =
            function () {
              return S(this);
            }),
          (b.naturalLogarithm = b.ln =
            function () {
              return k(this);
            }),
          (b.negated = b.neg =
            function () {
              var t = new this.constructor(this);
              return (t.s = -t.s || 0), t;
            }),
          (b.plus = b.add =
            function (t) {
              var e = this;
              return (
                (t = new e.constructor(t)),
                e.s == t.s ? x(e, t) : _(e, ((t.s = -t.s), t))
              );
            }),
          (b.precision = b.sd =
            function (t) {
              var e,
                n,
                r,
                o = this;
              if (void 0 !== t && t !== !!t && 1 !== t && 0 !== t)
                throw Error(s + t);
              if (
                ((e = E(o) + 1),
                (n = (r = o.d.length - 1) * v + 1),
                (r = o.d[r]))
              ) {
                for (; r % 10 == 0; r /= 10) n--;
                for (r = o.d[0]; r >= 10; r /= 10) n++;
              }
              return t && e > n ? e : n;
            }),
          (b.squareRoot = b.sqrt =
            function () {
              var t,
                e,
                n,
                r,
                o,
                i,
                a,
                c = this,
                s = c.constructor;
              if (c.s < 1) {
                if (!c.s) return new s(0);
                throw Error(l + "NaN");
              }
              for (
                t = E(c),
                  u = !1,
                  0 == (o = Math.sqrt(+c)) || o == 1 / 0
                    ? (((e = O(c.d)).length + t) % 2 == 0 && (e += "0"),
                      (o = Math.sqrt(e)),
                      (t = p((t + 1) / 2) - (t < 0 || t % 2)),
                      (r = new s(
                        (e =
                          o == 1 / 0
                            ? "5e" + t
                            : (e = o.toExponential()).slice(
                                0,
                                e.indexOf("e") + 1,
                              ) + t),
                      )))
                    : (r = new s(o.toString())),
                  o = a = (n = s.precision) + 3;
                ;

              )
                if (
                  ((r = (i = r).plus(j(c, i, a + 2)).times(0.5)),
                  O(i.d).slice(0, a) === (e = O(r.d)).slice(0, a))
                ) {
                  if (((e = e.slice(a - 3, a + 1)), o == a && "4999" == e)) {
                    if ((T(i, n + 1, 0), i.times(i).eq(c))) {
                      r = i;
                      break;
                    }
                  } else if ("9999" != e) break;
                  a += 4;
                }
              return (u = !0), T(r, n);
            }),
          (b.times = b.mul =
            function (t) {
              var e,
                n,
                r,
                o,
                i,
                a,
                c,
                l,
                s,
                f = this,
                p = f.constructor,
                h = f.d,
                d = (t = new p(t)).d;
              if (!f.s || !t.s) return new p(0);
              for (
                t.s *= f.s,
                  n = f.e + t.e,
                  (l = h.length) < (s = d.length) &&
                    ((i = h), (h = d), (d = i), (a = l), (l = s), (s = a)),
                  i = [],
                  r = a = l + s;
                r--;

              )
                i.push(0);
              for (r = s; --r >= 0; ) {
                for (e = 0, o = l + r; o > r; )
                  (c = i[o] + d[r] * h[o - r - 1] + e),
                    (i[o--] = c % y | 0),
                    (e = (c / y) | 0);
                i[o] = (i[o] + e) % y | 0;
              }
              for (; !i[--a]; ) i.pop();
              return (
                e ? ++n : i.shift(),
                (t.d = i),
                (t.e = n),
                u ? T(t, p.precision) : t
              );
            }),
          (b.toDecimalPlaces = b.todp =
            function (t, e) {
              var n = this,
                r = n.constructor;
              return (
                (n = new r(n)),
                void 0 === t
                  ? n
                  : (w(t, 0, a),
                    void 0 === e ? (e = r.rounding) : w(e, 0, 8),
                    T(n, t + E(n) + 1, e))
              );
            }),
          (b.toExponential = function (t, e) {
            var n,
              r = this,
              o = r.constructor;
            return (
              void 0 === t
                ? (n = C(r, !0))
                : (w(t, 0, a),
                  void 0 === e ? (e = o.rounding) : w(e, 0, 8),
                  (n = C((r = T(new o(r), t + 1, e)), !0, t + 1))),
              n
            );
          }),
          (b.toFixed = function (t, e) {
            var n,
              r,
              o = this,
              i = o.constructor;
            return void 0 === t
              ? C(o)
              : (w(t, 0, a),
                void 0 === e ? (e = i.rounding) : w(e, 0, 8),
                (n = C(
                  (r = T(new i(o), t + E(o) + 1, e)).abs(),
                  !1,
                  t + E(r) + 1,
                )),
                o.isneg() && !o.isZero() ? "-" + n : n);
          }),
          (b.toInteger = b.toint =
            function () {
              var t = this,
                e = t.constructor;
              return T(new e(t), E(t) + 1, e.rounding);
            }),
          (b.toNumber = function () {
            return +this;
          }),
          (b.toPower = b.pow =
            function (t) {
              var e,
                n,
                r,
                o,
                a,
                c,
                s = this,
                f = s.constructor,
                h = +(t = new f(t));
              if (!t.s) return new f(i);
              if (!(s = new f(s)).s) {
                if (t.s < 1) throw Error(l + "Infinity");
                return s;
              }
              if (s.eq(i)) return s;
              if (((r = f.precision), t.eq(i))) return T(s, r);
              if (((c = (e = t.e) >= (n = t.d.length - 1)), (a = s.s), c)) {
                if ((n = h < 0 ? -h : h) <= m) {
                  for (
                    o = new f(i), e = Math.ceil(r / v + 4), u = !1;
                    n % 2 && N((o = o.times(s)).d, e), 0 !== (n = p(n / 2));

                  )
                    N((s = s.times(s)).d, e);
                  return (u = !0), t.s < 0 ? new f(i).div(o) : T(o, r);
                }
              } else if (a < 0) throw Error(l + "NaN");
              return (
                (a = a < 0 && 1 & t.d[Math.max(e, n)] ? -1 : 1),
                (s.s = 1),
                (u = !1),
                (o = t.times(k(s, r + 12))),
                (u = !0),
                ((o = S(o)).s = a),
                o
              );
            }),
          (b.toPrecision = function (t, e) {
            var n,
              r,
              o = this,
              i = o.constructor;
            return (
              void 0 === t
                ? (r = C(o, (n = E(o)) <= i.toExpNeg || n >= i.toExpPos))
                : (w(t, 1, a),
                  void 0 === e ? (e = i.rounding) : w(e, 0, 8),
                  (r = C(
                    (o = T(new i(o), t, e)),
                    t <= (n = E(o)) || n <= i.toExpNeg,
                    t,
                  ))),
              r
            );
          }),
          (b.toSignificantDigits = b.tosd =
            function (t, e) {
              var n = this.constructor;
              return (
                void 0 === t
                  ? ((t = n.precision), (e = n.rounding))
                  : (w(t, 1, a), void 0 === e ? (e = n.rounding) : w(e, 0, 8)),
                T(new n(this), t, e)
              );
            }),
          (b.toString =
            b.valueOf =
            b.val =
            b.toJSON =
              function () {
                var t = this,
                  e = E(t),
                  n = t.constructor;
                return C(t, e <= n.toExpNeg || e >= n.toExpPos);
              });
        var j = (function () {
          function t(t, e) {
            var n,
              r = 0,
              o = t.length;
            for (t = t.slice(); o--; )
              (n = t[o] * e + r), (t[o] = n % y | 0), (r = (n / y) | 0);
            return r && t.unshift(r), t;
          }
          function e(t, e, n, r) {
            var o, i;
            if (n != r) i = n > r ? 1 : -1;
            else
              for (o = i = 0; o < n; o++)
                if (t[o] != e[o]) {
                  i = t[o] > e[o] ? 1 : -1;
                  break;
                }
            return i;
          }
          function n(t, e, n) {
            for (var r = 0; n--; )
              (t[n] -= r),
                (r = t[n] < e[n] ? 1 : 0),
                (t[n] = r * y + t[n] - e[n]);
            for (; !t[0] && t.length > 1; ) t.shift();
          }
          return function (r, o, i, a) {
            var c,
              u,
              s,
              f,
              p,
              h,
              d,
              m,
              g,
              b,
              x,
              w,
              O,
              j,
              S,
              A,
              P,
              k,
              M = r.constructor,
              _ = r.s == o.s ? 1 : -1,
              C = r.d,
              N = o.d;
            if (!r.s) return new M(r);
            if (!o.s) throw Error(l + "Division by zero");
            for (
              u = r.e - o.e,
                P = N.length,
                S = C.length,
                m = (d = new M(_)).d = [],
                s = 0;
              N[s] == (C[s] || 0);

            )
              ++s;
            if (
              (N[s] > (C[s] || 0) && --u,
              (w =
                null == i ? (i = M.precision) : a ? i + (E(r) - E(o)) + 1 : i) <
                0)
            )
              return new M(0);
            if (((w = (w / v + 2) | 0), (s = 0), 1 == P))
              for (f = 0, N = N[0], w++; (s < S || f) && w--; s++)
                (O = f * y + (C[s] || 0)),
                  (m[s] = (O / N) | 0),
                  (f = O % N | 0);
            else {
              for (
                (f = (y / (N[0] + 1)) | 0) > 1 &&
                  ((N = t(N, f)),
                  (C = t(C, f)),
                  (P = N.length),
                  (S = C.length)),
                  j = P,
                  b = (g = C.slice(0, P)).length;
                b < P;

              )
                g[b++] = 0;
              (k = N.slice()).unshift(0), (A = N[0]), N[1] >= y / 2 && ++A;
              do {
                (f = 0),
                  (c = e(N, g, P, b)) < 0
                    ? ((x = g[0]),
                      P != b && (x = x * y + (g[1] || 0)),
                      (f = (x / A) | 0) > 1
                        ? (f >= y && (f = y - 1),
                          1 ==
                            (c = e(
                              (p = t(N, f)),
                              g,
                              (h = p.length),
                              (b = g.length),
                            )) && (f--, n(p, P < h ? k : N, h)))
                        : (0 == f && (c = f = 1), (p = N.slice())),
                      (h = p.length) < b && p.unshift(0),
                      n(g, p, b),
                      -1 == c &&
                        (c = e(N, g, P, (b = g.length))) < 1 &&
                        (f++, n(g, P < b ? k : N, b)),
                      (b = g.length))
                    : 0 === c && (f++, (g = [0])),
                  (m[s++] = f),
                  c && g[0] ? (g[b++] = C[j] || 0) : ((g = [C[j]]), (b = 1));
              } while ((j++ < S || void 0 !== g[0]) && w--);
            }
            return m[0] || m.shift(), (d.e = u), T(d, a ? i + E(d) + 1 : i);
          };
        })();
        function S(t, e) {
          var n,
            r,
            o,
            a,
            c,
            l = 0,
            s = 0,
            p = t.constructor,
            d = p.precision;
          if (E(t) > 16) throw Error(f + E(t));
          if (!t.s) return new p(i);
          for (
            null == e ? ((u = !1), (c = d)) : (c = e), a = new p(0.03125);
            t.abs().gte(0.1);

          )
            (t = t.times(a)), (s += 5);
          for (
            c += ((Math.log(h(2, s)) / Math.LN10) * 2 + 5) | 0,
              n = r = o = new p(i),
              p.precision = c;
            ;

          ) {
            if (
              ((r = T(r.times(t), c)),
              (n = n.times(++l)),
              O((a = o.plus(j(r, n, c))).d).slice(0, c) === O(o.d).slice(0, c))
            ) {
              for (; s--; ) o = T(o.times(o), c);
              return (p.precision = d), null == e ? ((u = !0), T(o, d)) : o;
            }
            o = a;
          }
        }
        function E(t) {
          for (var e = t.e * v, n = t.d[0]; n >= 10; n /= 10) e++;
          return e;
        }
        function A(t, e, n) {
          if (e > t.LN10.sd())
            throw (
              ((u = !0),
              n && (t.precision = n),
              Error(l + "LN10 precision limit exceeded"))
            );
          return T(new t(t.LN10), e);
        }
        function P(t) {
          for (var e = ""; t--; ) e += "0";
          return e;
        }
        function k(t, e) {
          var n,
            r,
            o,
            a,
            c,
            s,
            f,
            p,
            h,
            d = 1,
            y = t,
            v = y.d,
            m = y.constructor,
            g = m.precision;
          if (y.s < 1) throw Error(l + (y.s ? "NaN" : "-Infinity"));
          if (y.eq(i)) return new m(0);
          if ((null == e ? ((u = !1), (p = g)) : (p = e), y.eq(10)))
            return null == e && (u = !0), A(m, p);
          if (
            ((p += 10),
            (m.precision = p),
            (r = (n = O(v)).charAt(0)),
            (a = E(y)),
            !(Math.abs(a) < 15e14))
          )
            return (
              (f = A(m, p + 2, g).times(a + "")),
              (y = k(new m(r + "." + n.slice(1)), p - 10).plus(f)),
              (m.precision = g),
              null == e ? ((u = !0), T(y, g)) : y
            );
          for (; (r < 7 && 1 != r) || (1 == r && n.charAt(1) > 3); )
            (r = (n = O((y = y.times(t)).d)).charAt(0)), d++;
          for (
            a = E(y),
              r > 1
                ? ((y = new m("0." + n)), a++)
                : (y = new m(r + "." + n.slice(1))),
              s = c = y = j(y.minus(i), y.plus(i), p),
              h = T(y.times(y), p),
              o = 3;
            ;

          ) {
            if (
              ((c = T(c.times(h), p)),
              O((f = s.plus(j(c, new m(o), p))).d).slice(0, p) ===
                O(s.d).slice(0, p))
            )
              return (
                (s = s.times(2)),
                0 !== a && (s = s.plus(A(m, p + 2, g).times(a + ""))),
                (s = j(s, new m(d), p)),
                (m.precision = g),
                null == e ? ((u = !0), T(s, g)) : s
              );
            (s = f), (o += 2);
          }
        }
        function M(t, e) {
          var n, r, o;
          for (
            (n = e.indexOf(".")) > -1 && (e = e.replace(".", "")),
              (r = e.search(/e/i)) > 0
                ? (n < 0 && (n = r),
                  (n += +e.slice(r + 1)),
                  (e = e.substring(0, r)))
                : n < 0 && (n = e.length),
              r = 0;
            48 === e.charCodeAt(r);

          )
            ++r;
          for (o = e.length; 48 === e.charCodeAt(o - 1); ) --o;
          if ((e = e.slice(r, o))) {
            if (
              ((o -= r),
              (n = n - r - 1),
              (t.e = p(n / v)),
              (t.d = []),
              (r = (n + 1) % v),
              n < 0 && (r += v),
              r < o)
            ) {
              for (r && t.d.push(+e.slice(0, r)), o -= v; r < o; )
                t.d.push(+e.slice(r, (r += v)));
              (e = e.slice(r)), (r = v - e.length);
            } else r -= o;
            for (; r--; ) e += "0";
            if ((t.d.push(+e), u && (t.e > g || t.e < -g))) throw Error(f + n);
          } else (t.s = 0), (t.e = 0), (t.d = [0]);
          return t;
        }
        function T(t, e, n) {
          var r,
            o,
            i,
            a,
            c,
            l,
            s,
            d,
            m = t.d;
          for (a = 1, i = m[0]; i >= 10; i /= 10) a++;
          if ((r = e - a) < 0) (r += v), (o = e), (s = m[(d = 0)]);
          else {
            if ((d = Math.ceil((r + 1) / v)) >= (i = m.length)) return t;
            for (s = i = m[d], a = 1; i >= 10; i /= 10) a++;
            o = (r %= v) - v + a;
          }
          if (
            (void 0 !== n &&
              ((c = (s / (i = h(10, a - o - 1))) % 10 | 0),
              (l = e < 0 || void 0 !== m[d + 1] || s % i),
              (l =
                n < 4
                  ? (c || l) && (0 == n || n == (t.s < 0 ? 3 : 2))
                  : c > 5 ||
                    (5 == c &&
                      (4 == n ||
                        l ||
                        (6 == n &&
                          (r > 0 ? (o > 0 ? s / h(10, a - o) : 0) : m[d - 1]) %
                            10 &
                            1) ||
                        n == (t.s < 0 ? 8 : 7))))),
            e < 1 || !m[0])
          )
            return (
              l
                ? ((i = E(t)),
                  (m.length = 1),
                  (e = e - i - 1),
                  (m[0] = h(10, (v - (e % v)) % v)),
                  (t.e = p(-e / v) || 0))
                : ((m.length = 1), (m[0] = t.e = t.s = 0)),
              t
            );
          if (
            (0 == r
              ? ((m.length = d), (i = 1), d--)
              : ((m.length = d + 1),
                (i = h(10, v - r)),
                (m[d] = o > 0 ? ((s / h(10, a - o)) % h(10, o) | 0) * i : 0)),
            l)
          )
            for (;;) {
              if (0 == d) {
                (m[0] += i) == y && ((m[0] = 1), ++t.e);
                break;
              }
              if (((m[d] += i), m[d] != y)) break;
              (m[d--] = 0), (i = 1);
            }
          for (r = m.length; 0 === m[--r]; ) m.pop();
          if (u && (t.e > g || t.e < -g)) throw Error(f + E(t));
          return t;
        }
        function _(t, e) {
          var n,
            r,
            o,
            i,
            a,
            c,
            l,
            s,
            f,
            p,
            h = t.constructor,
            d = h.precision;
          if (!t.s || !e.s)
            return e.s ? (e.s = -e.s) : (e = new h(t)), u ? T(e, d) : e;
          if (
            ((l = t.d),
            (p = e.d),
            (r = e.e),
            (s = t.e),
            (l = l.slice()),
            (a = s - r))
          ) {
            for (
              (f = a < 0)
                ? ((n = l), (a = -a), (c = p.length))
                : ((n = p), (r = s), (c = l.length)),
                a > (o = Math.max(Math.ceil(d / v), c) + 2) &&
                  ((a = o), (n.length = 1)),
                n.reverse(),
                o = a;
              o--;

            )
              n.push(0);
            n.reverse();
          } else {
            for (
              (f = (o = l.length) < (c = p.length)) && (c = o), o = 0;
              o < c;
              o++
            )
              if (l[o] != p[o]) {
                f = l[o] < p[o];
                break;
              }
            a = 0;
          }
          for (
            f && ((n = l), (l = p), (p = n), (e.s = -e.s)),
              c = l.length,
              o = p.length - c;
            o > 0;
            --o
          )
            l[c++] = 0;
          for (o = p.length; o > a; ) {
            if (l[--o] < p[o]) {
              for (i = o; i && 0 === l[--i]; ) l[i] = y - 1;
              --l[i], (l[o] += y);
            }
            l[o] -= p[o];
          }
          for (; 0 === l[--c]; ) l.pop();
          for (; 0 === l[0]; l.shift()) --r;
          return l[0] ? ((e.d = l), (e.e = r), u ? T(e, d) : e) : new h(0);
        }
        function C(t, e, n) {
          var r,
            o = E(t),
            i = O(t.d),
            a = i.length;
          return (
            e
              ? (n && (r = n - a) > 0
                  ? (i = i.charAt(0) + "." + i.slice(1) + P(r))
                  : a > 1 && (i = i.charAt(0) + "." + i.slice(1)),
                (i = i + (o < 0 ? "e" : "e+") + o))
              : o < 0
                ? ((i = "0." + P(-o - 1) + i),
                  n && (r = n - a) > 0 && (i += P(r)))
                : o >= a
                  ? ((i += P(o + 1 - a)),
                    n && (r = n - o - 1) > 0 && (i = i + "." + P(r)))
                  : ((r = o + 1) < a && (i = i.slice(0, r) + "." + i.slice(r)),
                    n &&
                      (r = n - a) > 0 &&
                      (o + 1 === a && (i += "."), (i += P(r)))),
            t.s < 0 ? "-" + i : i
          );
        }
        function N(t, e) {
          if (t.length > e) return (t.length = e), !0;
        }
        function D(t) {
          if (!t || "object" != typeof t) throw Error(l + "Object expected");
          var e,
            n,
            r,
            o = [
              "precision",
              1,
              a,
              "rounding",
              0,
              8,
              "toExpNeg",
              -1 / 0,
              0,
              "toExpPos",
              0,
              1 / 0,
            ];
          for (e = 0; e < o.length; e += 3)
            if (void 0 !== (r = t[(n = o[e])])) {
              if (!(p(r) === r && r >= o[e + 1] && r <= o[e + 2]))
                throw Error(s + n + ": " + r);
              this[n] = r;
            }
          if (void 0 !== (r = t[(n = "LN10")])) {
            if (r != Math.LN10) throw Error(s + n + ": " + r);
            this[n] = new this(r);
          }
          return this;
        }
        ((c = (function t(e) {
          var n, r, o;
          function i(t) {
            var e = this;
            if (!(e instanceof i)) return new i(t);
            if (((e.constructor = i), t instanceof i))
              return (
                (e.s = t.s), (e.e = t.e), void (e.d = (t = t.d) ? t.slice() : t)
              );
            if ("number" == typeof t) {
              if (0 * t != 0) throw Error(s + t);
              if (t > 0) e.s = 1;
              else {
                if (!(t < 0)) return (e.s = 0), (e.e = 0), void (e.d = [0]);
                (t = -t), (e.s = -1);
              }
              return t === ~~t && t < 1e7
                ? ((e.e = 0), void (e.d = [t]))
                : M(e, t.toString());
            }
            if ("string" != typeof t) throw Error(s + t);
            if (
              (45 === t.charCodeAt(0)
                ? ((t = t.slice(1)), (e.s = -1))
                : (e.s = 1),
              !d.test(t))
            )
              throw Error(s + t);
            M(e, t);
          }
          if (
            ((i.prototype = b),
            (i.ROUND_UP = 0),
            (i.ROUND_DOWN = 1),
            (i.ROUND_CEIL = 2),
            (i.ROUND_FLOOR = 3),
            (i.ROUND_HALF_UP = 4),
            (i.ROUND_HALF_DOWN = 5),
            (i.ROUND_HALF_EVEN = 6),
            (i.ROUND_HALF_CEIL = 7),
            (i.ROUND_HALF_FLOOR = 8),
            (i.clone = t),
            (i.config = i.set = D),
            void 0 === e && (e = {}),
            e)
          )
            for (
              o = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"],
                n = 0;
              n < o.length;

            )
              e.hasOwnProperty((r = o[n++])) || (e[r] = this[r]);
          return i.config(e), i;
        })(c)).default = c.Decimal =
          c),
          (i = new c(1)),
          void 0 ===
            (r = function () {
              return c;
            }.call(e, n, e, t)) || (t.exports = r);
      })();
    },
    98141: (t, e, n) => {
      "use strict";
      var r = n(64836);
      (e.__esModule = !0),
        (e.default = function (t, e) {
          t.classList
            ? t.classList.add(e)
            : (0, o.default)(t, e) ||
              ("string" == typeof t.className
                ? (t.className = t.className + " " + e)
                : t.setAttribute(
                    "class",
                    ((t.className && t.className.baseVal) || "") + " " + e,
                  ));
        });
      var o = r(n(90404));
      t.exports = e.default;
    },
    90404: (t, e) => {
      "use strict";
      (e.__esModule = !0),
        (e.default = function (t, e) {
          return t.classList
            ? !!e && t.classList.contains(e)
            : -1 !==
                (" " + (t.className.baseVal || t.className) + " ").indexOf(
                  " " + e + " ",
                );
        }),
        (t.exports = e.default);
    },
    10602: (t) => {
      "use strict";
      function e(t, e) {
        return t
          .replace(new RegExp("(^|\\s)" + e + "(?:\\s|$)", "g"), "$1")
          .replace(/\s+/g, " ")
          .replace(/^\s*|\s*$/g, "");
      }
      t.exports = function (t, n) {
        t.classList
          ? t.classList.remove(n)
          : "string" == typeof t.className
            ? (t.className = e(t.className, n))
            : t.setAttribute(
                "class",
                e((t.className && t.className.baseVal) || "", n),
              );
      };
    },
    26729: (t) => {
      "use strict";
      var e = Object.prototype.hasOwnProperty,
        n = "~";
      function r() {}
      function o(t, e, n) {
        (this.fn = t), (this.context = e), (this.once = n || !1);
      }
      function i(t, e, r, i, a) {
        if ("function" != typeof r)
          throw new TypeError("The listener must be a function");
        var c = new o(r, i || t, a),
          u = n ? n + e : e;
        return (
          t._events[u]
            ? t._events[u].fn
              ? (t._events[u] = [t._events[u], c])
              : t._events[u].push(c)
            : ((t._events[u] = c), t._eventsCount++),
          t
        );
      }
      function a(t, e) {
        0 == --t._eventsCount ? (t._events = new r()) : delete t._events[e];
      }
      function c() {
        (this._events = new r()), (this._eventsCount = 0);
      }
      Object.create &&
        ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1)),
        (c.prototype.eventNames = function () {
          var t,
            r,
            o = [];
          if (0 === this._eventsCount) return o;
          for (r in (t = this._events))
            e.call(t, r) && o.push(n ? r.slice(1) : r);
          return Object.getOwnPropertySymbols
            ? o.concat(Object.getOwnPropertySymbols(t))
            : o;
        }),
        (c.prototype.listeners = function (t) {
          var e = n ? n + t : t,
            r = this._events[e];
          if (!r) return [];
          if (r.fn) return [r.fn];
          for (var o = 0, i = r.length, a = new Array(i); o < i; o++)
            a[o] = r[o].fn;
          return a;
        }),
        (c.prototype.listenerCount = function (t) {
          var e = n ? n + t : t,
            r = this._events[e];
          return r ? (r.fn ? 1 : r.length) : 0;
        }),
        (c.prototype.emit = function (t, e, r, o, i, a) {
          var c = n ? n + t : t;
          if (!this._events[c]) return !1;
          var u,
            l,
            s = this._events[c],
            f = arguments.length;
          if (s.fn) {
            switch ((s.once && this.removeListener(t, s.fn, void 0, !0), f)) {
              case 1:
                return s.fn.call(s.context), !0;
              case 2:
                return s.fn.call(s.context, e), !0;
              case 3:
                return s.fn.call(s.context, e, r), !0;
              case 4:
                return s.fn.call(s.context, e, r, o), !0;
              case 5:
                return s.fn.call(s.context, e, r, o, i), !0;
              case 6:
                return s.fn.call(s.context, e, r, o, i, a), !0;
            }
            for (l = 1, u = new Array(f - 1); l < f; l++)
              u[l - 1] = arguments[l];
            s.fn.apply(s.context, u);
          } else {
            var p,
              h = s.length;
            for (l = 0; l < h; l++)
              switch (
                (s[l].once && this.removeListener(t, s[l].fn, void 0, !0), f)
              ) {
                case 1:
                  s[l].fn.call(s[l].context);
                  break;
                case 2:
                  s[l].fn.call(s[l].context, e);
                  break;
                case 3:
                  s[l].fn.call(s[l].context, e, r);
                  break;
                case 4:
                  s[l].fn.call(s[l].context, e, r, o);
                  break;
                default:
                  if (!u)
                    for (p = 1, u = new Array(f - 1); p < f; p++)
                      u[p - 1] = arguments[p];
                  s[l].fn.apply(s[l].context, u);
              }
          }
          return !0;
        }),
        (c.prototype.on = function (t, e, n) {
          return i(this, t, e, n, !1);
        }),
        (c.prototype.once = function (t, e, n) {
          return i(this, t, e, n, !0);
        }),
        (c.prototype.removeListener = function (t, e, r, o) {
          var i = n ? n + t : t;
          if (!this._events[i]) return this;
          if (!e) return a(this, i), this;
          var c = this._events[i];
          if (c.fn)
            c.fn !== e ||
              (o && !c.once) ||
              (r && c.context !== r) ||
              a(this, i);
          else {
            for (var u = 0, l = [], s = c.length; u < s; u++)
              (c[u].fn !== e ||
                (o && !c[u].once) ||
                (r && c[u].context !== r)) &&
                l.push(c[u]);
            l.length
              ? (this._events[i] = 1 === l.length ? l[0] : l)
              : a(this, i);
          }
          return this;
        }),
        (c.prototype.removeAllListeners = function (t) {
          var e;
          return (
            t
              ? ((e = n ? n + t : t), this._events[e] && a(this, e))
              : ((this._events = new r()), (this._eventsCount = 0)),
            this
          );
        }),
        (c.prototype.off = c.prototype.removeListener),
        (c.prototype.addListener = c.prototype.on),
        (c.prefixed = n),
        (c.EventEmitter = c),
        (t.exports = c);
    },
    96874: (t) => {
      t.exports = function (t, e, n) {
        switch (n.length) {
          case 0:
            return t.call(e);
          case 1:
            return t.call(e, n[0]);
          case 2:
            return t.call(e, n[0], n[1]);
          case 3:
            return t.call(e, n[0], n[1], n[2]);
        }
        return t.apply(e, n);
      };
    },
    66193: (t) => {
      t.exports = function (t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
          if (!e(t[n], n, t)) return !1;
        return !0;
      };
    },
    47443: (t, e, n) => {
      var r = n(42118);
      t.exports = function (t, e) {
        return !(null == t || !t.length) && r(t, e, 0) > -1;
      };
    },
    1196: (t) => {
      t.exports = function (t, e, n) {
        for (var r = -1, o = null == t ? 0 : t.length; ++r < o; )
          if (n(e, t[r])) return !0;
        return !1;
      };
    },
    44286: (t) => {
      t.exports = function (t) {
        return t.split("");
      };
    },
    89465: (t, e, n) => {
      var r = n(38777);
      t.exports = function (t, e, n) {
        "__proto__" == e && r
          ? r(t, e, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (t[e] = n);
      };
    },
    89881: (t, e, n) => {
      var r = n(47816),
        o = n(99291)(r);
      t.exports = o;
    },
    93239: (t, e, n) => {
      var r = n(89881);
      t.exports = function (t, e) {
        var n = !0;
        return (
          r(t, function (t, r, o) {
            return (n = !!e(t, r, o));
          }),
          n
        );
      };
    },
    56029: (t, e, n) => {
      var r = n(33448);
      t.exports = function (t, e, n) {
        for (var o = -1, i = t.length; ++o < i; ) {
          var a = t[o],
            c = e(a);
          if (null != c && (void 0 === u ? c == c && !r(c) : n(c, u)))
            var u = c,
              l = a;
        }
        return l;
      };
    },
    41848: (t) => {
      t.exports = function (t, e, n, r) {
        for (var o = t.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o; )
          if (e(t[i], i, t)) return i;
        return -1;
      };
    },
    28483: (t, e, n) => {
      var r = n(25063)();
      t.exports = r;
    },
    47816: (t, e, n) => {
      var r = n(28483),
        o = n(3674);
      t.exports = function (t, e) {
        return t && r(t, e, o);
      };
    },
    53325: (t) => {
      t.exports = function (t, e) {
        return t > e;
      };
    },
    13: (t) => {
      t.exports = function (t, e) {
        return null != t && e in Object(t);
      };
    },
    42118: (t, e, n) => {
      var r = n(41848),
        o = n(62722),
        i = n(39375);
      t.exports = function (t, e, n) {
        return e == e ? i(t, e, n) : r(t, o, n);
      };
    },
    2958: (t, e, n) => {
      var r = n(46384),
        o = n(90939);
      t.exports = function (t, e, n, i) {
        var a = n.length,
          c = a,
          u = !i;
        if (null == t) return !c;
        for (t = Object(t); a--; ) {
          var l = n[a];
          if (u && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1;
        }
        for (; ++a < c; ) {
          var s = (l = n[a])[0],
            f = t[s],
            p = l[1];
          if (u && l[2]) {
            if (void 0 === f && !(s in t)) return !1;
          } else {
            var h = new r();
            if (i) var d = i(f, p, s, t, e, h);
            if (!(void 0 === d ? o(p, f, 3, i, h) : d)) return !1;
          }
        }
        return !0;
      };
    },
    62722: (t) => {
      t.exports = function (t) {
        return t != t;
      };
    },
    67206: (t, e, n) => {
      var r = n(91573),
        o = n(16432),
        i = n(70522),
        a = n(1469),
        c = n(39601);
      t.exports = function (t) {
        return "function" == typeof t
          ? t
          : null == t
            ? i
            : "object" == typeof t
              ? a(t)
                ? o(t[0], t[1])
                : r(t)
              : c(t);
      };
    },
    70433: (t) => {
      t.exports = function (t, e) {
        return t < e;
      };
    },
    69199: (t, e, n) => {
      var r = n(89881),
        o = n(98612);
      t.exports = function (t, e) {
        var n = -1,
          i = o(t) ? Array(t.length) : [];
        return (
          r(t, function (t, r, o) {
            i[++n] = e(t, r, o);
          }),
          i
        );
      };
    },
    91573: (t, e, n) => {
      var r = n(2958),
        o = n(1499),
        i = n(42634);
      t.exports = function (t) {
        var e = o(t);
        return 1 == e.length && e[0][2]
          ? i(e[0][0], e[0][1])
          : function (n) {
              return n === t || r(n, t, e);
            };
      };
    },
    16432: (t, e, n) => {
      var r = n(90939),
        o = n(27361),
        i = n(79095),
        a = n(15403),
        c = n(89162),
        u = n(42634),
        l = n(40327);
      t.exports = function (t, e) {
        return a(t) && c(e)
          ? u(l(t), e)
          : function (n) {
              var a = o(n, t);
              return void 0 === a && a === e ? i(n, t) : r(e, a, 3);
            };
      };
    },
    82689: (t, e, n) => {
      var r = n(29932),
        o = n(97786),
        i = n(67206),
        a = n(69199),
        c = n(71131),
        u = n(51717),
        l = n(85022),
        s = n(70522),
        f = n(1469);
      t.exports = function (t, e, n) {
        e = e.length
          ? r(e, function (t) {
              return f(t)
                ? function (e) {
                    return o(e, 1 === t.length ? t[0] : t);
                  }
                : t;
            })
          : [s];
        var p = -1;
        e = r(e, u(i));
        var h = a(t, function (t, n, o) {
          return {
            criteria: r(e, function (e) {
              return e(t);
            }),
            index: ++p,
            value: t,
          };
        });
        return c(h, function (t, e) {
          return l(t, e, n);
        });
      };
    },
    40371: (t) => {
      t.exports = function (t) {
        return function (e) {
          return null == e ? void 0 : e[t];
        };
      };
    },
    79152: (t, e, n) => {
      var r = n(97786);
      t.exports = function (t) {
        return function (e) {
          return r(e, t);
        };
      };
    },
    40098: (t) => {
      var e = Math.ceil,
        n = Math.max;
      t.exports = function (t, r, o, i) {
        for (var a = -1, c = n(e((r - t) / (o || 1)), 0), u = Array(c); c--; )
          (u[i ? c : ++a] = t), (t += o);
        return u;
      };
    },
    5976: (t, e, n) => {
      var r = n(70522),
        o = n(45357),
        i = n(30061);
      t.exports = function (t, e) {
        return i(o(t, e, r), t + "");
      };
    },
    56560: (t, e, n) => {
      var r = n(75703),
        o = n(38777),
        i = n(70522),
        a = o
          ? function (t, e) {
              return o(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: r(e),
                writable: !0,
              });
            }
          : i;
      t.exports = a;
    },
    14259: (t) => {
      t.exports = function (t, e, n) {
        var r = -1,
          o = t.length;
        e < 0 && (e = -e > o ? 0 : o + e),
          (n = n > o ? o : n) < 0 && (n += o),
          (o = e > n ? 0 : (n - e) >>> 0),
          (e >>>= 0);
        for (var i = Array(o); ++r < o; ) i[r] = t[r + e];
        return i;
      };
    },
    5076: (t, e, n) => {
      var r = n(89881);
      t.exports = function (t, e) {
        var n;
        return (
          r(t, function (t, r, o) {
            return !(n = e(t, r, o));
          }),
          !!n
        );
      };
    },
    71131: (t) => {
      t.exports = function (t, e) {
        var n = t.length;
        for (t.sort(e); n--; ) t[n] = t[n].value;
        return t;
      };
    },
    27561: (t, e, n) => {
      var r = n(67990),
        o = /^\s+/;
      t.exports = function (t) {
        return t ? t.slice(0, r(t) + 1).replace(o, "") : t;
      };
    },
    45652: (t, e, n) => {
      var r = n(88668),
        o = n(47443),
        i = n(1196),
        a = n(74757),
        c = n(23593),
        u = n(21814);
      t.exports = function (t, e, n) {
        var l = -1,
          s = o,
          f = t.length,
          p = !0,
          h = [],
          d = h;
        if (n) (p = !1), (s = i);
        else if (f >= 200) {
          var y = e ? null : c(t);
          if (y) return u(y);
          (p = !1), (s = a), (d = new r());
        } else d = e ? [] : h;
        t: for (; ++l < f; ) {
          var v = t[l],
            m = e ? e(v) : v;
          if (((v = n || 0 !== v ? v : 0), p && m == m)) {
            for (var g = d.length; g--; ) if (d[g] === m) continue t;
            e && d.push(m), h.push(v);
          } else s(d, m, n) || (d !== h && d.push(m), h.push(v));
        }
        return h;
      };
    },
    40180: (t, e, n) => {
      var r = n(14259);
      t.exports = function (t, e, n) {
        var o = t.length;
        return (n = void 0 === n ? o : n), !e && n >= o ? t : r(t, e, n);
      };
    },
    26393: (t, e, n) => {
      var r = n(33448);
      t.exports = function (t, e) {
        if (t !== e) {
          var n = void 0 !== t,
            o = null === t,
            i = t == t,
            a = r(t),
            c = void 0 !== e,
            u = null === e,
            l = e == e,
            s = r(e);
          if (
            (!u && !s && !a && t > e) ||
            (a && c && l && !u && !s) ||
            (o && c && l) ||
            (!n && l) ||
            !i
          )
            return 1;
          if (
            (!o && !a && !s && t < e) ||
            (s && n && i && !o && !a) ||
            (u && n && i) ||
            (!c && i) ||
            !l
          )
            return -1;
        }
        return 0;
      };
    },
    85022: (t, e, n) => {
      var r = n(26393);
      t.exports = function (t, e, n) {
        for (
          var o = -1,
            i = t.criteria,
            a = e.criteria,
            c = i.length,
            u = n.length;
          ++o < c;

        ) {
          var l = r(i[o], a[o]);
          if (l) return o >= u ? l : l * ("desc" == n[o] ? -1 : 1);
        }
        return t.index - e.index;
      };
    },
    99291: (t, e, n) => {
      var r = n(98612);
      t.exports = function (t, e) {
        return function (n, o) {
          if (null == n) return n;
          if (!r(n)) return t(n, o);
          for (
            var i = n.length, a = e ? i : -1, c = Object(n);
            (e ? a-- : ++a < i) && !1 !== o(c[a], a, c);

          );
          return n;
        };
      };
    },
    25063: (t) => {
      t.exports = function (t) {
        return function (e, n, r) {
          for (var o = -1, i = Object(e), a = r(e), c = a.length; c--; ) {
            var u = a[t ? c : ++o];
            if (!1 === n(i[u], u, i)) break;
          }
          return e;
        };
      };
    },
    98805: (t, e, n) => {
      var r = n(40180),
        o = n(62689),
        i = n(83140),
        a = n(79833);
      t.exports = function (t) {
        return function (e) {
          e = a(e);
          var n = o(e) ? i(e) : void 0,
            c = n ? n[0] : e.charAt(0),
            u = n ? r(n, 1).join("") : e.slice(1);
          return c[t]() + u;
        };
      };
    },
    67740: (t, e, n) => {
      var r = n(67206),
        o = n(98612),
        i = n(3674);
      t.exports = function (t) {
        return function (e, n, a) {
          var c = Object(e);
          if (!o(e)) {
            var u = r(n, 3);
            (e = i(e)),
              (n = function (t) {
                return u(c[t], t, c);
              });
          }
          var l = t(e, n, a);
          return l > -1 ? c[u ? e[l] : l] : void 0;
        };
      };
    },
    47445: (t, e, n) => {
      var r = n(40098),
        o = n(16612),
        i = n(18601);
      t.exports = function (t) {
        return function (e, n, a) {
          return (
            a && "number" != typeof a && o(e, n, a) && (n = a = void 0),
            (e = i(e)),
            void 0 === n ? ((n = e), (e = 0)) : (n = i(n)),
            (a = void 0 === a ? (e < n ? 1 : -1) : i(a)),
            r(e, n, a, t)
          );
        };
      };
    },
    23593: (t, e, n) => {
      var r = n(58525),
        o = n(28117),
        i = n(21814),
        a =
          r && 1 / i(new r([, -0]))[1] == 1 / 0
            ? function (t) {
                return new r(t);
              }
            : o;
      t.exports = a;
    },
    38777: (t, e, n) => {
      var r = n(10852),
        o = (function () {
          try {
            var t = r(Object, "defineProperty");
            return t({}, "", {}), t;
          } catch (t) {}
        })();
      t.exports = o;
    },
    1499: (t, e, n) => {
      var r = n(89162),
        o = n(3674);
      t.exports = function (t) {
        for (var e = o(t), n = e.length; n--; ) {
          var i = e[n],
            a = t[i];
          e[n] = [i, a, r(a)];
        }
        return e;
      };
    },
    85924: (t, e, n) => {
      var r = n(5569)(Object.getPrototypeOf, Object);
      t.exports = r;
    },
    222: (t, e, n) => {
      var r = n(71811),
        o = n(35694),
        i = n(1469),
        a = n(65776),
        c = n(41780),
        u = n(40327);
      t.exports = function (t, e, n) {
        for (var l = -1, s = (e = r(e, t)).length, f = !1; ++l < s; ) {
          var p = u(e[l]);
          if (!(f = null != t && n(t, p))) break;
          t = t[p];
        }
        return f || ++l != s
          ? f
          : !!(s = null == t ? 0 : t.length) &&
              c(s) &&
              a(p, s) &&
              (i(t) || o(t));
      };
    },
    62689: (t) => {
      var e = RegExp(
        "[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]",
      );
      t.exports = function (t) {
        return e.test(t);
      };
    },
    16612: (t, e, n) => {
      var r = n(77813),
        o = n(98612),
        i = n(65776),
        a = n(13218);
      t.exports = function (t, e, n) {
        if (!a(n)) return !1;
        var c = typeof e;
        return (
          !!("number" == c
            ? o(n) && i(e, n.length)
            : "string" == c && e in n) && r(n[e], t)
        );
      };
    },
    89162: (t, e, n) => {
      var r = n(13218);
      t.exports = function (t) {
        return t == t && !r(t);
      };
    },
    42634: (t) => {
      t.exports = function (t, e) {
        return function (n) {
          return null != n && n[t] === e && (void 0 !== e || t in Object(n));
        };
      };
    },
    45357: (t, e, n) => {
      var r = n(96874),
        o = Math.max;
      t.exports = function (t, e, n) {
        return (
          (e = o(void 0 === e ? t.length - 1 : e, 0)),
          function () {
            for (
              var i = arguments, a = -1, c = o(i.length - e, 0), u = Array(c);
              ++a < c;

            )
              u[a] = i[e + a];
            a = -1;
            for (var l = Array(e + 1); ++a < e; ) l[a] = i[a];
            return (l[e] = n(u)), r(t, this, l);
          }
        );
      };
    },
    30061: (t, e, n) => {
      var r = n(56560),
        o = n(21275)(r);
      t.exports = o;
    },
    21275: (t) => {
      var e = Date.now;
      t.exports = function (t) {
        var n = 0,
          r = 0;
        return function () {
          var o = e(),
            i = 16 - (o - r);
          if (((r = o), i > 0)) {
            if (++n >= 800) return arguments[0];
          } else n = 0;
          return t.apply(void 0, arguments);
        };
      };
    },
    39375: (t) => {
      t.exports = function (t, e, n) {
        for (var r = n - 1, o = t.length; ++r < o; ) if (t[r] === e) return r;
        return -1;
      };
    },
    83140: (t, e, n) => {
      var r = n(44286),
        o = n(62689),
        i = n(676);
      t.exports = function (t) {
        return o(t) ? i(t) : r(t);
      };
    },
    67990: (t) => {
      var e = /\s/;
      t.exports = function (t) {
        for (var n = t.length; n-- && e.test(t.charAt(n)); );
        return n;
      };
    },
    676: (t) => {
      var e = "\\ud800-\\udfff",
        n = "[" + e + "]",
        r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
        o = "\\ud83c[\\udffb-\\udfff]",
        i = "[^" + e + "]",
        a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        c = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        u = "(?:" + r + "|" + o + ")?",
        l = "[\\ufe0e\\ufe0f]?",
        s = l + u + "(?:\\u200d(?:" + [i, a, c].join("|") + ")" + l + u + ")*",
        f = "(?:" + [i + r + "?", r, a, c, n].join("|") + ")",
        p = RegExp(o + "(?=" + o + ")|" + f + s, "g");
      t.exports = function (t) {
        return t.match(p) || [];
      };
    },
    75703: (t) => {
      t.exports = function (t) {
        return function () {
          return t;
        };
      };
    },
    23279: (t, e, n) => {
      var r = n(13218),
        o = n(7771),
        i = n(14841),
        a = Math.max,
        c = Math.min;
      t.exports = function (t, e, n) {
        var u,
          l,
          s,
          f,
          p,
          h,
          d = 0,
          y = !1,
          v = !1,
          m = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");
        function g(e) {
          var n = u,
            r = l;
          return (u = l = void 0), (d = e), (f = t.apply(r, n));
        }
        function b(t) {
          var n = t - h;
          return void 0 === h || n >= e || n < 0 || (v && t - d >= s);
        }
        function x() {
          var t = o();
          if (b(t)) return w(t);
          p = setTimeout(
            x,
            (function (t) {
              var n = e - (t - h);
              return v ? c(n, s - (t - d)) : n;
            })(t),
          );
        }
        function w(t) {
          return (p = void 0), m && u ? g(t) : ((u = l = void 0), f);
        }
        function O() {
          var t = o(),
            n = b(t);
          if (((u = arguments), (l = this), (h = t), n)) {
            if (void 0 === p)
              return (function (t) {
                return (d = t), (p = setTimeout(x, e)), y ? g(t) : f;
              })(h);
            if (v) return clearTimeout(p), (p = setTimeout(x, e)), g(h);
          }
          return void 0 === p && (p = setTimeout(x, e)), f;
        }
        return (
          (e = i(e) || 0),
          r(n) &&
            ((y = !!n.leading),
            (s = (v = "maxWait" in n) ? a(i(n.maxWait) || 0, e) : s),
            (m = "trailing" in n ? !!n.trailing : m)),
          (O.cancel = function () {
            void 0 !== p && clearTimeout(p), (d = 0), (u = h = l = p = void 0);
          }),
          (O.flush = function () {
            return void 0 === p ? f : w(o());
          }),
          O
        );
      };
    },
    711: (t, e, n) => {
      var r = n(66193),
        o = n(93239),
        i = n(67206),
        a = n(1469),
        c = n(16612);
      t.exports = function (t, e, n) {
        var u = a(t) ? r : o;
        return n && c(t, e, n) && (e = void 0), u(t, i(e, 3));
      };
    },
    13311: (t, e, n) => {
      var r = n(67740)(n(30998));
      t.exports = r;
    },
    30998: (t, e, n) => {
      var r = n(41848),
        o = n(67206),
        i = n(40554),
        a = Math.max;
      t.exports = function (t, e, n) {
        var c = null == t ? 0 : t.length;
        if (!c) return -1;
        var u = null == n ? 0 : i(n);
        return u < 0 && (u = a(c + u, 0)), r(t, o(e, 3), u);
      };
    },
    94654: (t, e, n) => {
      var r = n(21078),
        o = n(35161);
      t.exports = function (t, e) {
        return r(o(t, e), 1);
      };
    },
    79095: (t, e, n) => {
      var r = n(13),
        o = n(222);
      t.exports = function (t, e) {
        return null != t && o(t, e, r);
      };
    },
    70522: (t) => {
      t.exports = function (t) {
        return t;
      };
    },
    51584: (t, e, n) => {
      var r = n(44239),
        o = n(37005);
      t.exports = function (t) {
        return !0 === t || !1 === t || (o(t) && "[object Boolean]" == r(t));
      };
    },
    7654: (t, e, n) => {
      var r = n(81763);
      t.exports = function (t) {
        return r(t) && t != +t;
      };
    },
    14293: (t) => {
      t.exports = function (t) {
        return null == t;
      };
    },
    81763: (t, e, n) => {
      var r = n(44239),
        o = n(37005);
      t.exports = function (t) {
        return "number" == typeof t || (o(t) && "[object Number]" == r(t));
      };
    },
    68630: (t, e, n) => {
      var r = n(44239),
        o = n(85924),
        i = n(37005),
        a = Function.prototype,
        c = Object.prototype,
        u = a.toString,
        l = c.hasOwnProperty,
        s = u.call(Object);
      t.exports = function (t) {
        if (!i(t) || "[object Object]" != r(t)) return !1;
        var e = o(t);
        if (null === e) return !0;
        var n = l.call(e, "constructor") && e.constructor;
        return "function" == typeof n && n instanceof n && u.call(n) == s;
      };
    },
    47037: (t, e, n) => {
      var r = n(44239),
        o = n(1469),
        i = n(37005);
      t.exports = function (t) {
        return (
          "string" == typeof t || (!o(t) && i(t) && "[object String]" == r(t))
        );
      };
    },
    73061: (t) => {
      t.exports = function (t) {
        var e = null == t ? 0 : t.length;
        return e ? t[e - 1] : void 0;
      };
    },
    35161: (t, e, n) => {
      var r = n(29932),
        o = n(67206),
        i = n(69199),
        a = n(1469);
      t.exports = function (t, e) {
        return (a(t) ? r : i)(t, o(e, 3));
      };
    },
    66604: (t, e, n) => {
      var r = n(89465),
        o = n(47816),
        i = n(67206);
      t.exports = function (t, e) {
        var n = {};
        return (
          (e = i(e, 3)),
          o(t, function (t, o, i) {
            r(n, o, e(t, o, i));
          }),
          n
        );
      };
    },
    6162: (t, e, n) => {
      var r = n(56029),
        o = n(53325),
        i = n(70522);
      t.exports = function (t) {
        return t && t.length ? r(t, i, o) : void 0;
      };
    },
    84753: (t, e, n) => {
      var r = n(56029),
        o = n(53325),
        i = n(67206);
      t.exports = function (t, e) {
        return t && t.length ? r(t, i(e, 2), o) : void 0;
      };
    },
    53632: (t, e, n) => {
      var r = n(56029),
        o = n(70433),
        i = n(70522);
      t.exports = function (t) {
        return t && t.length ? r(t, i, o) : void 0;
      };
    },
    22762: (t, e, n) => {
      var r = n(56029),
        o = n(67206),
        i = n(70433);
      t.exports = function (t, e) {
        return t && t.length ? r(t, o(e, 2), i) : void 0;
      };
    },
    7771: (t, e, n) => {
      var r = n(55639);
      t.exports = function () {
        return r.Date.now();
      };
    },
    39601: (t, e, n) => {
      var r = n(40371),
        o = n(79152),
        i = n(15403),
        a = n(40327);
      t.exports = function (t) {
        return i(t) ? r(a(t)) : o(t);
      };
    },
    96026: (t, e, n) => {
      var r = n(47445)();
      t.exports = r;
    },
    59704: (t, e, n) => {
      var r = n(82908),
        o = n(67206),
        i = n(5076),
        a = n(1469),
        c = n(16612);
      t.exports = function (t, e, n) {
        var u = a(t) ? r : i;
        return n && c(t, e, n) && (e = void 0), u(t, o(e, 3));
      };
    },
    89734: (t, e, n) => {
      var r = n(21078),
        o = n(82689),
        i = n(5976),
        a = n(16612),
        c = i(function (t, e) {
          if (null == t) return [];
          var n = e.length;
          return (
            n > 1 && a(t, e[0], e[1])
              ? (e = [])
              : n > 2 && a(e[0], e[1], e[2]) && (e = [e[0]]),
            o(t, r(e, 1), [])
          );
        });
      t.exports = c;
    },
    23493: (t, e, n) => {
      var r = n(23279),
        o = n(13218);
      t.exports = function (t, e, n) {
        var i = !0,
          a = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");
        return (
          o(n) &&
            ((i = "leading" in n ? !!n.leading : i),
            (a = "trailing" in n ? !!n.trailing : a)),
          r(t, e, { leading: i, maxWait: e, trailing: a })
        );
      };
    },
    18601: (t, e, n) => {
      var r = n(14841);
      t.exports = function (t) {
        return t
          ? Infinity === (t = r(t)) || t === -1 / 0
            ? 17976931348623157e292 * (t < 0 ? -1 : 1)
            : t == t
              ? t
              : 0
          : 0 === t
            ? t
            : 0;
      };
    },
    40554: (t, e, n) => {
      var r = n(18601);
      t.exports = function (t) {
        var e = r(t),
          n = e % 1;
        return e == e ? (n ? e - n : e) : 0;
      };
    },
    14841: (t, e, n) => {
      var r = n(27561),
        o = n(13218),
        i = n(33448),
        a = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        l = parseInt;
      t.exports = function (t) {
        if ("number" == typeof t) return t;
        if (i(t)) return NaN;
        if (o(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = o(e) ? e + "" : e;
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = r(t);
        var n = c.test(t);
        return n || u.test(t) ? l(t.slice(2), n ? 2 : 8) : a.test(t) ? NaN : +t;
      };
    },
    45578: (t, e, n) => {
      var r = n(67206),
        o = n(45652);
      t.exports = function (t, e) {
        return t && t.length ? o(t, r(e, 2)) : [];
      };
    },
    11700: (t, e, n) => {
      var r = n(98805)("toUpperCase");
      t.exports = r;
    },
    69921: (t, e) => {
      "use strict";
      var n = "function" == typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        o = n ? Symbol.for("react.portal") : 60106,
        i = n ? Symbol.for("react.fragment") : 60107,
        a = n ? Symbol.for("react.strict_mode") : 60108,
        c = n ? Symbol.for("react.profiler") : 60114,
        u = n ? Symbol.for("react.provider") : 60109,
        l = n ? Symbol.for("react.context") : 60110,
        s = n ? Symbol.for("react.async_mode") : 60111,
        f = n ? Symbol.for("react.concurrent_mode") : 60111,
        p = n ? Symbol.for("react.forward_ref") : 60112,
        h = n ? Symbol.for("react.suspense") : 60113,
        d =
          (n && Symbol.for("react.suspense_list"),
          n ? Symbol.for("react.memo") : 60115),
        y = n ? Symbol.for("react.lazy") : 60116;
      n && Symbol.for("react.block"),
        n && Symbol.for("react.fundamental"),
        n && Symbol.for("react.responder"),
        n && Symbol.for("react.scope");
      function v(t) {
        if ("object" == typeof t && null !== t) {
          var e = t.$$typeof;
          switch (e) {
            case r:
              switch ((t = t.type)) {
                case s:
                case f:
                case i:
                case c:
                case a:
                case h:
                  return t;
                default:
                  switch ((t = t && t.$$typeof)) {
                    case l:
                    case p:
                    case y:
                    case d:
                    case u:
                      return t;
                    default:
                      return e;
                  }
              }
            case o:
              return e;
          }
        }
      }
      (e.isElement = function (t) {
        return "object" == typeof t && null !== t && t.$$typeof === r;
      }),
        (e.isFragment = function (t) {
          return v(t) === i;
        });
    },
    59864: (t, e, n) => {
      "use strict";
      t.exports = n(69921);
    },
    46871: (t, e, n) => {
      "use strict";
      function r() {
        var t = this.constructor.getDerivedStateFromProps(
          this.props,
          this.state,
        );
        null != t && this.setState(t);
      }
      function o(t) {
        this.setState(
          function (e) {
            var n = this.constructor.getDerivedStateFromProps(t, e);
            return null != n ? n : null;
          }.bind(this),
        );
      }
      function i(t, e) {
        try {
          var n = this.props,
            r = this.state;
          (this.props = t),
            (this.state = e),
            (this.__reactInternalSnapshotFlag = !0),
            (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r));
        } finally {
          (this.props = n), (this.state = r);
        }
      }
      function a(t) {
        var e = t.prototype;
        if (!e || !e.isReactComponent)
          throw new Error("Can only polyfill class components");
        if (
          "function" != typeof t.getDerivedStateFromProps &&
          "function" != typeof e.getSnapshotBeforeUpdate
        )
          return t;
        var n = null,
          a = null,
          c = null;
        if (
          ("function" == typeof e.componentWillMount
            ? (n = "componentWillMount")
            : "function" == typeof e.UNSAFE_componentWillMount &&
              (n = "UNSAFE_componentWillMount"),
          "function" == typeof e.componentWillReceiveProps
            ? (a = "componentWillReceiveProps")
            : "function" == typeof e.UNSAFE_componentWillReceiveProps &&
              (a = "UNSAFE_componentWillReceiveProps"),
          "function" == typeof e.componentWillUpdate
            ? (c = "componentWillUpdate")
            : "function" == typeof e.UNSAFE_componentWillUpdate &&
              (c = "UNSAFE_componentWillUpdate"),
          null !== n || null !== a || null !== c)
        ) {
          var u = t.displayName || t.name,
            l =
              "function" == typeof t.getDerivedStateFromProps
                ? "getDerivedStateFromProps()"
                : "getSnapshotBeforeUpdate()";
          throw Error(
            "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" +
              u +
              " uses " +
              l +
              " but also contains the following legacy lifecycles:" +
              (null !== n ? "\n  " + n : "") +
              (null !== a ? "\n  " + a : "") +
              (null !== c ? "\n  " + c : "") +
              "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks",
          );
        }
        if (
          ("function" == typeof t.getDerivedStateFromProps &&
            ((e.componentWillMount = r), (e.componentWillReceiveProps = o)),
          "function" == typeof e.getSnapshotBeforeUpdate)
        ) {
          if ("function" != typeof e.componentDidUpdate)
            throw new Error(
              "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype",
            );
          e.componentWillUpdate = i;
          var s = e.componentDidUpdate;
          e.componentDidUpdate = function (t, e, n) {
            var r = this.__reactInternalSnapshotFlag
              ? this.__reactInternalSnapshot
              : n;
            s.call(this, t, e, r);
          };
        }
        return t;
      }
      n.r(e),
        n.d(e, { polyfill: () => a }),
        (r.__suppressDeprecationWarning = !0),
        (o.__suppressDeprecationWarning = !0),
        (i.__suppressDeprecationWarning = !0);
    },
    94884: (t, e, n) => {
      "use strict";
      n.d(e, { ZP: () => Ft, bO: () => q });
      var r = n(67294),
        o = n(45697),
        i = n.n(o),
        a = Object.getOwnPropertyNames,
        c = Object.getOwnPropertySymbols,
        u = Object.prototype.hasOwnProperty;
      function l(t, e) {
        return function (n, r, o) {
          return t(n, r, o) && e(n, r, o);
        };
      }
      function s(t) {
        return function (e, n, r) {
          if (!e || !n || "object" != typeof e || "object" != typeof n)
            return t(e, n, r);
          var o = r.cache,
            i = o.get(e),
            a = o.get(n);
          if (i && a) return i === n && a === e;
          o.set(e, n), o.set(n, e);
          var c = t(e, n, r);
          return o.delete(e), o.delete(n), c;
        };
      }
      function f(t) {
        return a(t).concat(c(t));
      }
      var p =
        Object.hasOwn ||
        function (t, e) {
          return u.call(t, e);
        };
      function h(t, e) {
        return t || e ? t === e : t === e || (t != t && e != e);
      }
      var d = "_owner",
        y = Object.getOwnPropertyDescriptor,
        v = Object.keys;
      function m(t, e, n) {
        var r = t.length;
        if (e.length !== r) return !1;
        for (; r-- > 0; ) if (!n.equals(t[r], e[r], r, r, t, e, n)) return !1;
        return !0;
      }
      function g(t, e) {
        return h(t.getTime(), e.getTime());
      }
      function b(t, e, n) {
        if (t.size !== e.size) return !1;
        for (
          var r, o, i = {}, a = t.entries(), c = 0;
          (r = a.next()) && !r.done;

        ) {
          for (
            var u = e.entries(), l = !1, s = 0;
            (o = u.next()) && !o.done;

          ) {
            var f = r.value,
              p = f[0],
              h = f[1],
              d = o.value,
              y = d[0],
              v = d[1];
            l ||
              i[s] ||
              !(l =
                n.equals(p, y, c, s, t, e, n) &&
                n.equals(h, v, p, y, t, e, n)) ||
              (i[s] = !0),
              s++;
          }
          if (!l) return !1;
          c++;
        }
        return !0;
      }
      function x(t, e, n) {
        var r,
          o = v(t),
          i = o.length;
        if (v(e).length !== i) return !1;
        for (; i-- > 0; ) {
          if (
            (r = o[i]) === d &&
            (t.$$typeof || e.$$typeof) &&
            t.$$typeof !== e.$$typeof
          )
            return !1;
          if (!p(e, r) || !n.equals(t[r], e[r], r, r, t, e, n)) return !1;
        }
        return !0;
      }
      function w(t, e, n) {
        var r,
          o,
          i,
          a = f(t),
          c = a.length;
        if (f(e).length !== c) return !1;
        for (; c-- > 0; ) {
          if (
            (r = a[c]) === d &&
            (t.$$typeof || e.$$typeof) &&
            t.$$typeof !== e.$$typeof
          )
            return !1;
          if (!p(e, r)) return !1;
          if (!n.equals(t[r], e[r], r, r, t, e, n)) return !1;
          if (
            ((o = y(t, r)),
            (i = y(e, r)),
            (o || i) &&
              (!o ||
                !i ||
                o.configurable !== i.configurable ||
                o.enumerable !== i.enumerable ||
                o.writable !== i.writable))
          )
            return !1;
        }
        return !0;
      }
      function O(t, e) {
        return h(t.valueOf(), e.valueOf());
      }
      function j(t, e) {
        return t.source === e.source && t.flags === e.flags;
      }
      function S(t, e, n) {
        if (t.size !== e.size) return !1;
        for (var r, o, i = {}, a = t.values(); (r = a.next()) && !r.done; ) {
          for (var c = e.values(), u = !1, l = 0; (o = c.next()) && !o.done; )
            u ||
              i[l] ||
              !(u = n.equals(r.value, o.value, r.value, o.value, t, e, n)) ||
              (i[l] = !0),
              l++;
          if (!u) return !1;
        }
        return !0;
      }
      function E(t, e) {
        var n = t.length;
        if (e.length !== n) return !1;
        for (; n-- > 0; ) if (t[n] !== e[n]) return !1;
        return !0;
      }
      var A = Array.isArray,
        P =
          "function" == typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView
            : null,
        k = Object.assign,
        M = Object.prototype.toString.call.bind(Object.prototype.toString),
        T = _();
      function _(t) {
        void 0 === t && (t = {});
        var e,
          n = t.circular,
          r = void 0 !== n && n,
          o = t.createInternalComparator,
          i = t.createState,
          a = t.strict,
          c = void 0 !== a && a,
          u = (function (t) {
            var e = t.circular,
              n = t.createCustomConfig,
              r = t.strict,
              o = {
                areArraysEqual: r ? w : m,
                areDatesEqual: g,
                areMapsEqual: r ? l(b, w) : b,
                areObjectsEqual: r ? w : x,
                arePrimitiveWrappersEqual: O,
                areRegExpsEqual: j,
                areSetsEqual: r ? l(S, w) : S,
                areTypedArraysEqual: r ? w : E,
              };
            if ((n && (o = k({}, o, n(o))), e)) {
              var i = s(o.areArraysEqual),
                a = s(o.areMapsEqual),
                c = s(o.areObjectsEqual),
                u = s(o.areSetsEqual);
              o = k({}, o, {
                areArraysEqual: i,
                areMapsEqual: a,
                areObjectsEqual: c,
                areSetsEqual: u,
              });
            }
            return o;
          })(t),
          f = (function (t) {
            var e = t.areArraysEqual,
              n = t.areDatesEqual,
              r = t.areMapsEqual,
              o = t.areObjectsEqual,
              i = t.arePrimitiveWrappersEqual,
              a = t.areRegExpsEqual,
              c = t.areSetsEqual,
              u = t.areTypedArraysEqual;
            return function (t, l, s) {
              if (t === l) return !0;
              if (
                null == t ||
                null == l ||
                "object" != typeof t ||
                "object" != typeof l
              )
                return t != t && l != l;
              var f = t.constructor;
              if (f !== l.constructor) return !1;
              if (f === Object) return o(t, l, s);
              if (A(t)) return e(t, l, s);
              if (null != P && P(t)) return u(t, l, s);
              if (f === Date) return n(t, l, s);
              if (f === RegExp) return a(t, l, s);
              if (f === Map) return r(t, l, s);
              if (f === Set) return c(t, l, s);
              var p = M(t);
              return "[object Date]" === p
                ? n(t, l, s)
                : "[object RegExp]" === p
                  ? a(t, l, s)
                  : "[object Map]" === p
                    ? r(t, l, s)
                    : "[object Set]" === p
                      ? c(t, l, s)
                      : "[object Object]" === p
                        ? "function" != typeof t.then &&
                          "function" != typeof l.then &&
                          o(t, l, s)
                        : "[object Arguments]" === p
                          ? o(t, l, s)
                          : ("[object Boolean]" === p ||
                              "[object Number]" === p ||
                              "[object String]" === p) &&
                            i(t, l, s);
            };
          })(u);
        return (function (t) {
          var e = t.circular,
            n = t.comparator,
            r = t.createState,
            o = t.equals,
            i = t.strict;
          if (r)
            return function (t, a) {
              var c = r(),
                u = c.cache,
                l = void 0 === u ? (e ? new WeakMap() : void 0) : u,
                s = c.meta;
              return n(t, a, { cache: l, equals: o, meta: s, strict: i });
            };
          if (e)
            return function (t, e) {
              return n(t, e, {
                cache: new WeakMap(),
                equals: o,
                meta: void 0,
                strict: i,
              });
            };
          var a = { cache: void 0, equals: o, meta: void 0, strict: i };
          return function (t, e) {
            return n(t, e, a);
          };
        })({
          circular: r,
          comparator: f,
          createState: i,
          equals: o
            ? o(f)
            : ((e = f),
              function (t, n, r, o, i, a, c) {
                return e(t, n, c);
              }),
          strict: c,
        });
      }
      function C(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = -1;
        requestAnimationFrame(function r(o) {
          n < 0 && (n = o),
            o - n > e
              ? (t(o), (n = -1))
              : (function (t) {
                  "undefined" != typeof requestAnimationFrame &&
                    requestAnimationFrame(t);
                })(r);
        });
      }
      function N(t) {
        return (
          (N =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          N(t)
        );
      }
      function D(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function I() {
        var t = function () {
            return null;
          },
          e = !1,
          n = function n(r) {
            if (!e) {
              if (Array.isArray(r)) {
                if (!r.length) return;
                var o =
                    (function (t) {
                      if (Array.isArray(t)) return t;
                    })((c = r)) ||
                    (function (t) {
                      if (
                        ("undefined" != typeof Symbol &&
                          null != t[Symbol.iterator]) ||
                        null != t["@@iterator"]
                      )
                        return Array.from(t);
                    })(c) ||
                    (function (t, e) {
                      if (t) {
                        if ("string" == typeof t) return D(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return (
                          "Object" === n &&
                            t.constructor &&
                            (n = t.constructor.name),
                          "Map" === n || "Set" === n
                            ? Array.from(t)
                            : "Arguments" === n ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                  n,
                                )
                              ? D(t, e)
                              : void 0
                        );
                      }
                    })(c) ||
                    (function () {
                      throw new TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                      );
                    })(),
                  i = o[0],
                  a = o.slice(1);
                return "number" == typeof i
                  ? void C(n.bind(null, a), i)
                  : (n(i), void C(n.bind(null, a)));
              }
              "object" === N(r) && t(r), "function" == typeof r && r();
            }
            var c;
          };
        return {
          stop: function () {
            e = !0;
          },
          start: function (t) {
            (e = !1), n(t);
          },
          subscribe: function (e) {
            return (
              (t = e),
              function () {
                t = function () {
                  return null;
                };
              }
            );
          },
        };
      }
      function L(t) {
        return (
          (L =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          L(t)
        );
      }
      function R(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function B(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? R(Object(n), !0).forEach(function (e) {
                U(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : R(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function U(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== L(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, "string");
                if ("object" !== L(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(t);
            })(t);
            return "symbol" === L(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      _({ strict: !0 }),
        _({ circular: !0 }),
        _({ circular: !0, strict: !0 }),
        _({
          createInternalComparator: function () {
            return h;
          },
        }),
        _({
          strict: !0,
          createInternalComparator: function () {
            return h;
          },
        }),
        _({
          circular: !0,
          createInternalComparator: function () {
            return h;
          },
        }),
        _({
          circular: !0,
          createInternalComparator: function () {
            return h;
          },
          strict: !0,
        }),
        n(25108);
      var $ = ["Webkit", "Moz", "O", "ms"],
        F = ["-webkit-", "-moz-", "-o-", "-ms-"],
        z = ["transform", "transformOrigin", "transition"],
        W = function (t) {
          return t;
        },
        Z = function (t, e) {
          return Object.keys(e).reduce(function (n, r) {
            return B(B({}, n), {}, U({}, r, t(r, e[r])));
          }, {});
        },
        q = function (t) {
          return Object.keys(t).reduce(function (t, e) {
            return B(
              B({}, t),
              (function (t, e) {
                if (-1 === z.indexOf(t))
                  return U({}, t, Number.isNaN(e) ? 0 : e);
                var n = "transition" === t,
                  r = t.replace(/(\w)/, function (t) {
                    return t.toUpperCase();
                  }),
                  o = e;
                return $.reduce(function (t, i, a) {
                  return (
                    n &&
                      (o = e.replace(
                        /(transform|transform-origin)/gim,
                        "".concat(F[a], "$1"),
                      )),
                    B(B({}, t), {}, U({}, i + r, o))
                  );
                }, {});
              })(e, t[e]),
            );
          }, t);
        },
        G = function (t, e, n) {
          return t
            .map(function (t) {
              return ""
                .concat(
                  ((r = t),
                  r.replace(/([A-Z])/g, function (t) {
                    return "-".concat(t.toLowerCase());
                  })),
                  " ",
                )
                .concat(e, "ms ")
                .concat(n);
              var r;
            })
            .join(",");
        };
      function X(t, e) {
        if (t) {
          if ("string" == typeof t) return Y(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? Y(t, e)
                : void 0
          );
        }
      }
      function Y(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var H = 1e-4,
        V = function (t, e) {
          return [0, 3 * t, 3 * e - 6 * t, 3 * t - 3 * e + 1];
        },
        K = function (t, e) {
          return t
            .map(function (t, n) {
              return t * Math.pow(e, n);
            })
            .reduce(function (t, e) {
              return t + e;
            });
        },
        J = function (t, e) {
          return function (n) {
            var r = V(t, e);
            return K(r, n);
          };
        },
        Q = function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          var r,
            o,
            i = e[0],
            a = e[1],
            c = e[2],
            u = e[3];
          if (1 === e.length)
            switch (e[0]) {
              case "linear":
                (i = 0), (a = 0), (c = 1), (u = 1);
                break;
              case "ease":
                (i = 0.25), (a = 0.1), (c = 0.25), (u = 1);
                break;
              case "ease-in":
                (i = 0.42), (a = 0), (c = 1), (u = 1);
                break;
              case "ease-out":
                (i = 0.42), (a = 0), (c = 0.58), (u = 1);
                break;
              case "ease-in-out":
                (i = 0), (a = 0), (c = 0.58), (u = 1);
                break;
              default:
                var l = e[0].split("(");
                if (
                  "cubic-bezier" === l[0] &&
                  4 === l[1].split(")")[0].split(",").length
                ) {
                  var s =
                    ((r = l[1]
                      .split(")")[0]
                      .split(",")
                      .map(function (t) {
                        return parseFloat(t);
                      })),
                    (o = 4),
                    (function (t) {
                      if (Array.isArray(t)) return t;
                    })(r) ||
                      (function (t, e) {
                        var n =
                          null == t
                            ? null
                            : ("undefined" != typeof Symbol &&
                                t[Symbol.iterator]) ||
                              t["@@iterator"];
                        if (null != n) {
                          var r,
                            o,
                            i,
                            a,
                            c = [],
                            u = !0,
                            l = !1;
                          try {
                            if (((i = (n = n.call(t)).next), 0 === e)) {
                              if (Object(n) !== n) return;
                              u = !1;
                            } else
                              for (
                                ;
                                !(u = (r = i.call(n)).done) &&
                                (c.push(r.value), c.length !== e);
                                u = !0
                              );
                          } catch (t) {
                            (l = !0), (o = t);
                          } finally {
                            try {
                              if (
                                !u &&
                                null != n.return &&
                                ((a = n.return()), Object(a) !== a)
                              )
                                return;
                            } finally {
                              if (l) throw o;
                            }
                          }
                          return c;
                        }
                      })(r, o) ||
                      X(r, o) ||
                      (function () {
                        throw new TypeError(
                          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                        );
                      })());
                  (i = s[0]), (a = s[1]), (c = s[2]), (u = s[3]);
                }
            }
          [i, c, a, u].every(function (t) {
            return "number" == typeof t && t >= 0 && t <= 1;
          });
          var f,
            p,
            h = J(i, c),
            d = J(a, u),
            y =
              ((f = i),
              (p = c),
              function (t) {
                var e = V(f, p),
                  n = [].concat(
                    (function (t) {
                      return (
                        (function (t) {
                          if (Array.isArray(t)) return Y(t);
                        })(t) ||
                        (function (t) {
                          if (
                            ("undefined" != typeof Symbol &&
                              null != t[Symbol.iterator]) ||
                            null != t["@@iterator"]
                          )
                            return Array.from(t);
                        })(t) ||
                        X(t) ||
                        (function () {
                          throw new TypeError(
                            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                          );
                        })()
                      );
                    })(
                      e
                        .map(function (t, e) {
                          return t * e;
                        })
                        .slice(1),
                    ),
                    [0],
                  );
                return K(n, t);
              }),
            v = function (t) {
              for (var e, n = t > 1 ? 1 : t, r = n, o = 0; o < 8; ++o) {
                var i = h(r) - n,
                  a = y(r);
                if (Math.abs(i - n) < H || a < H) return d(r);
                r = (e = r - i / a) > 1 ? 1 : e < 0 ? 0 : e;
              }
              return d(r);
            };
          return (v.isStepper = !1), v;
        };
      function tt(t) {
        return (
          (tt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          tt(t)
        );
      }
      function et(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return at(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          it(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function nt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function rt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? nt(Object(n), !0).forEach(function (e) {
                ot(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : nt(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function ot(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== tt(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, "string");
                if ("object" !== tt(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(t);
            })(t);
            return "symbol" === tt(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function it(t, e) {
        if (t) {
          if ("string" == typeof t) return at(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? at(t, e)
                : void 0
          );
        }
      }
      function at(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var ct = function (t, e, n) {
          return t + (e - t) * n;
        },
        ut = function (t) {
          return t.from !== t.to;
        },
        lt = function t(e, n, r) {
          var o = Z(function (t, n) {
            if (ut(n)) {
              var r =
                  ((a = e(n.from, n.to, n.velocity)),
                  (c = 2),
                  (function (t) {
                    if (Array.isArray(t)) return t;
                  })(a) ||
                    (function (t, e) {
                      var n =
                        null == t
                          ? null
                          : ("undefined" != typeof Symbol &&
                              t[Symbol.iterator]) ||
                            t["@@iterator"];
                      if (null != n) {
                        var r,
                          o,
                          i,
                          a,
                          c = [],
                          u = !0,
                          l = !1;
                        try {
                          if (((i = (n = n.call(t)).next), 0 === e)) {
                            if (Object(n) !== n) return;
                            u = !1;
                          } else
                            for (
                              ;
                              !(u = (r = i.call(n)).done) &&
                              (c.push(r.value), c.length !== e);
                              u = !0
                            );
                        } catch (t) {
                          (l = !0), (o = t);
                        } finally {
                          try {
                            if (
                              !u &&
                              null != n.return &&
                              ((a = n.return()), Object(a) !== a)
                            )
                              return;
                          } finally {
                            if (l) throw o;
                          }
                        }
                        return c;
                      }
                    })(a, c) ||
                    it(a, c) ||
                    (function () {
                      throw new TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                      );
                    })()),
                o = r[0],
                i = r[1];
              return rt(rt({}, n), {}, { from: o, velocity: i });
            }
            var a, c;
            return n;
          }, n);
          return r < 1
            ? Z(function (t, e) {
                return ut(e)
                  ? rt(
                      rt({}, e),
                      {},
                      {
                        velocity: ct(e.velocity, o[t].velocity, r),
                        from: ct(e.from, o[t].from, r),
                      },
                    )
                  : e;
              }, n)
            : t(e, o, r - 1);
        };
      function st(t) {
        return (
          (st =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          st(t)
        );
      }
      var ft = [
        "children",
        "begin",
        "duration",
        "attributeName",
        "easing",
        "isActive",
        "steps",
        "from",
        "to",
        "canBegin",
        "onAnimationEnd",
        "shouldReAnimate",
        "onAnimationReStart",
      ];
      function pt(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return ht(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return ht(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? ht(t, e)
                    : void 0
              );
            }
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function ht(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function dt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function yt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? dt(Object(n), !0).forEach(function (e) {
                vt(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : dt(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function vt(t, e, n) {
        return (
          (e = gt(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function mt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, gt(r.key), r);
        }
      }
      function gt(t) {
        var e = (function (t, e) {
          if ("object" !== st(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" !== st(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" === st(e) ? e : String(e);
      }
      function bt(t, e) {
        return (
          (bt = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          bt(t, e)
        );
      }
      function xt(t, e) {
        if (e && ("object" === st(e) || "function" == typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError(
            "Derived constructors may only return object or undefined",
          );
        return wt(t);
      }
      function wt(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function Ot(t) {
        return (
          (Ot = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Ot(t)
        );
      }
      var jt = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && bt(t, e);
        })(c, t);
        var e,
          n,
          o,
          i,
          a =
            ((o = c),
            (i = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {}),
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = Ot(o);
              if (i) {
                var n = Ot(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return xt(this, t);
            });
        function c(t, e) {
          var n;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, c);
          var r = (n = a.call(this, t, e)).props,
            o = r.isActive,
            i = r.attributeName,
            u = r.from,
            l = r.to,
            s = r.steps,
            f = r.children,
            p = r.duration;
          if (
            ((n.handleStyleChange = n.handleStyleChange.bind(wt(n))),
            (n.changeStyle = n.changeStyle.bind(wt(n))),
            !o || p <= 0)
          )
            return (
              (n.state = { style: {} }),
              "function" == typeof f && (n.state = { style: l }),
              xt(n)
            );
          if (s && s.length) n.state = { style: s[0].style };
          else if (u) {
            if ("function" == typeof f) return (n.state = { style: u }), xt(n);
            n.state = { style: i ? vt({}, i, u) : u };
          } else n.state = { style: {} };
          return n;
        }
        return (
          (e = c),
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                var t = this.props,
                  e = t.isActive,
                  n = t.canBegin;
                (this.mounted = !0), e && n && this.runAnimation(this.props);
              },
            },
            {
              key: "componentDidUpdate",
              value: function (t) {
                var e = this.props,
                  n = e.isActive,
                  r = e.canBegin,
                  o = e.attributeName,
                  i = e.shouldReAnimate,
                  a = e.to,
                  c = e.from,
                  u = this.state.style;
                if (r)
                  if (n) {
                    if (!(T(t.to, a) && t.canBegin && t.isActive)) {
                      var l = !t.canBegin || !t.isActive;
                      this.manager && this.manager.stop(),
                        this.stopJSAnimation && this.stopJSAnimation();
                      var s = l || i ? c : t.to;
                      if (this.state && u) {
                        var f = { style: o ? vt({}, o, s) : s };
                        ((o && [o] !== s) || (!o && u !== s)) &&
                          this.setState(f);
                      }
                      this.runAnimation(
                        yt(yt({}, this.props), {}, { from: s, begin: 0 }),
                      );
                    }
                  } else {
                    var p = { style: o ? vt({}, o, a) : a };
                    this.state &&
                      u &&
                      ((o && u[o] !== a) || (!o && u !== a)) &&
                      this.setState(p);
                  }
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.mounted = !1;
                var t = this.props.onAnimationEnd;
                this.unSubscribe && this.unSubscribe(),
                  this.manager && (this.manager.stop(), (this.manager = null)),
                  this.stopJSAnimation && this.stopJSAnimation(),
                  t && t();
              },
            },
            {
              key: "handleStyleChange",
              value: function (t) {
                this.changeStyle(t);
              },
            },
            {
              key: "changeStyle",
              value: function (t) {
                this.mounted && this.setState({ style: t });
              },
            },
            {
              key: "runJSAnimation",
              value: function (t) {
                var e = this,
                  n = t.from,
                  r = t.to,
                  o = t.duration,
                  i = t.easing,
                  a = t.begin,
                  c = t.onAnimationEnd,
                  u = t.onAnimationStart,
                  l = (function (t, e, n, r, o) {
                    var i,
                      a,
                      c,
                      u,
                      l =
                        ((i = t),
                        (a = e),
                        [Object.keys(i), Object.keys(a)].reduce(
                          function (t, e) {
                            return t.filter(function (t) {
                              return e.includes(t);
                            });
                          },
                        )),
                      s = l.reduce(function (n, r) {
                        return rt(rt({}, n), {}, ot({}, r, [t[r], e[r]]));
                      }, {}),
                      f = l.reduce(function (n, r) {
                        return rt(
                          rt({}, n),
                          {},
                          ot({}, r, { from: t[r], velocity: 0, to: e[r] }),
                        );
                      }, {}),
                      p = -1,
                      h = function () {
                        return null;
                      };
                    return (
                      (h = n.isStepper
                        ? function (r) {
                            c || (c = r);
                            var i = (r - c) / n.dt;
                            (f = lt(n, f, i)),
                              o(
                                rt(
                                  rt(rt({}, t), e),
                                  Z(function (t, e) {
                                    return e.from;
                                  }, f),
                                ),
                              ),
                              (c = r),
                              Object.values(f).filter(ut).length &&
                                (p = requestAnimationFrame(h));
                          }
                        : function (i) {
                            u || (u = i);
                            var a = (i - u) / r,
                              c = Z(function (t, e) {
                                return ct.apply(void 0, et(e).concat([n(a)]));
                              }, s);
                            if ((o(rt(rt(rt({}, t), e), c)), a < 1))
                              p = requestAnimationFrame(h);
                            else {
                              var l = Z(function (t, e) {
                                return ct.apply(void 0, et(e).concat([n(1)]));
                              }, s);
                              o(rt(rt(rt({}, t), e), l));
                            }
                          }),
                      function () {
                        return (
                          requestAnimationFrame(h),
                          function () {
                            cancelAnimationFrame(p);
                          }
                        );
                      }
                    );
                  })(
                    n,
                    r,
                    (function () {
                      for (
                        var t = arguments.length, e = new Array(t), n = 0;
                        n < t;
                        n++
                      )
                        e[n] = arguments[n];
                      var r = e[0];
                      if ("string" == typeof r)
                        switch (r) {
                          case "ease":
                          case "ease-in-out":
                          case "ease-out":
                          case "ease-in":
                          case "linear":
                            return Q(r);
                          case "spring":
                            return (function () {
                              var t =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : {},
                                e = t.stiff,
                                n = void 0 === e ? 100 : e,
                                r = t.damping,
                                o = void 0 === r ? 8 : r,
                                i = t.dt,
                                a = void 0 === i ? 17 : i,
                                c = function (t, e, r) {
                                  var i =
                                      r + ((-(t - e) * n - r * o) * a) / 1e3,
                                    c = (r * a) / 1e3 + t;
                                  return Math.abs(c - e) < H && Math.abs(i) < H
                                    ? [e, 0]
                                    : [c, i];
                                };
                              return (c.isStepper = !0), (c.dt = a), c;
                            })();
                          default:
                            if ("cubic-bezier" === r.split("(")[0]) return Q(r);
                        }
                      return "function" == typeof r ? r : null;
                    })(i),
                    o,
                    this.changeStyle,
                  );
                this.manager.start([
                  u,
                  a,
                  function () {
                    e.stopJSAnimation = l();
                  },
                  o,
                  c,
                ]);
              },
            },
            {
              key: "runStepAnimation",
              value: function (t) {
                var e = this,
                  n = t.steps,
                  r = t.begin,
                  o = t.onAnimationStart,
                  i = n[0],
                  a = i.style,
                  c = i.duration,
                  u = void 0 === c ? 0 : c;
                return this.manager.start(
                  [o].concat(
                    pt(
                      n.reduce(
                        function (t, r, o) {
                          if (0 === o) return t;
                          var i = r.duration,
                            a = r.easing,
                            c = void 0 === a ? "ease" : a,
                            u = r.style,
                            l = r.properties,
                            s = r.onAnimationEnd,
                            f = o > 0 ? n[o - 1] : r,
                            p = l || Object.keys(u);
                          if ("function" == typeof c || "spring" === c)
                            return [].concat(pt(t), [
                              e.runJSAnimation.bind(e, {
                                from: f.style,
                                to: u,
                                duration: i,
                                easing: c,
                              }),
                              i,
                            ]);
                          var h = G(p, i, c),
                            d = yt(
                              yt(yt({}, f.style), u),
                              {},
                              { transition: h },
                            );
                          return [].concat(pt(t), [d, i, s]).filter(W);
                        },
                        [a, Math.max(u, r)],
                      ),
                    ),
                    [t.onAnimationEnd],
                  ),
                );
              },
            },
            {
              key: "runAnimation",
              value: function (t) {
                this.manager || (this.manager = I());
                var e = t.begin,
                  n = t.duration,
                  r = t.attributeName,
                  o = t.to,
                  i = t.easing,
                  a = t.onAnimationStart,
                  c = t.onAnimationEnd,
                  u = t.steps,
                  l = t.children,
                  s = this.manager;
                if (
                  ((this.unSubscribe = s.subscribe(this.handleStyleChange)),
                  "function" != typeof i &&
                    "function" != typeof l &&
                    "spring" !== i)
                )
                  if (u.length > 1) this.runStepAnimation(t);
                  else {
                    var f = r ? vt({}, r, o) : o,
                      p = G(Object.keys(f), n, i);
                    s.start([a, e, yt(yt({}, f), {}, { transition: p }), n, c]);
                  }
                else this.runJSAnimation(t);
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.children,
                  n = (t.begin, t.duration),
                  o = (t.attributeName, t.easing, t.isActive),
                  i =
                    (t.steps,
                    t.from,
                    t.to,
                    t.canBegin,
                    t.onAnimationEnd,
                    t.shouldReAnimate,
                    t.onAnimationReStart,
                    (function (t, e) {
                      if (null == t) return {};
                      var n,
                        r,
                        o = (function (t, e) {
                          if (null == t) return {};
                          var n,
                            r,
                            o = {},
                            i = Object.keys(t);
                          for (r = 0; r < i.length; r++)
                            (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                          return o;
                        })(t, e);
                      if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(t);
                        for (r = 0; r < i.length; r++)
                          (n = i[r]),
                            e.indexOf(n) >= 0 ||
                              (Object.prototype.propertyIsEnumerable.call(
                                t,
                                n,
                              ) &&
                                (o[n] = t[n]));
                      }
                      return o;
                    })(t, ft)),
                  a = r.Children.count(e),
                  c = q(this.state.style);
                if ("function" == typeof e) return e(c);
                if (!o || 0 === a || n <= 0) return e;
                var u = function (t) {
                  var e = t.props,
                    n = e.style,
                    o = void 0 === n ? {} : n,
                    a = e.className;
                  return (0, r.cloneElement)(
                    t,
                    yt(
                      yt({}, i),
                      {},
                      { style: yt(yt({}, o), c), className: a },
                    ),
                  );
                };
                return 1 === a
                  ? u(r.Children.only(e))
                  : r.createElement(
                      "div",
                      null,
                      r.Children.map(e, function (t) {
                        return u(t);
                      }),
                    );
              },
            },
          ]) && mt(e.prototype, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          c
        );
      })(r.PureComponent);
      (jt.displayName = "Animate"),
        (jt.defaultProps = {
          begin: 0,
          duration: 1e3,
          from: "",
          to: "",
          attributeName: "",
          easing: "ease",
          isActive: !0,
          canBegin: !0,
          steps: [],
          onAnimationEnd: function () {},
          onAnimationStart: function () {},
        }),
        (jt.propTypes = {
          from: i().oneOfType([i().object, i().string]),
          to: i().oneOfType([i().object, i().string]),
          attributeName: i().string,
          duration: i().number,
          begin: i().number,
          easing: i().oneOfType([i().string, i().func]),
          steps: i().arrayOf(
            i().shape({
              duration: i().number.isRequired,
              style: i().object.isRequired,
              easing: i().oneOfType([
                i().oneOf([
                  "ease",
                  "ease-in",
                  "ease-out",
                  "ease-in-out",
                  "linear",
                ]),
                i().func,
              ]),
              properties: i().arrayOf("string"),
              onAnimationEnd: i().func,
            }),
          ),
          children: i().oneOfType([i().node, i().func]),
          isActive: i().bool,
          canBegin: i().bool,
          onAnimationEnd: i().func,
          shouldReAnimate: i().bool,
          onAnimationStart: i().func,
          onAnimationReStart: i().func,
        });
      const St = jt;
      var Et = n(64317),
        At = ["children", "appearOptions", "enterOptions", "leaveOptions"];
      function Pt(t) {
        return (
          (Pt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Pt(t)
        );
      }
      function kt() {
        return (
          (kt = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          kt.apply(this, arguments)
        );
      }
      function Mt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Tt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Mt(Object(n), !0).forEach(function (e) {
                It(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : Mt(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function _t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Lt(r.key), r);
        }
      }
      function Ct(t, e) {
        return (
          (Ct = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          Ct(t, e)
        );
      }
      function Nt(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function Dt(t) {
        return (
          (Dt = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Dt(t)
        );
      }
      function It(t, e, n) {
        return (
          (e = Lt(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function Lt(t) {
        var e = (function (t, e) {
          if ("object" !== Pt(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" !== Pt(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" === Pt(e) ? e : String(e);
      }
      void 0 === Number.isFinite &&
        (Number.isFinite = function (t) {
          return "number" == typeof t && isFinite(t);
        });
      var Rt = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = t.steps,
            n = t.duration;
          return e && e.length
            ? e.reduce(function (t, e) {
                return (
                  t +
                  (Number.isFinite(e.duration) && e.duration > 0
                    ? e.duration
                    : 0)
                );
              }, 0)
            : Number.isFinite(n)
              ? n
              : 0;
        },
        Bt = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Ct(t, e);
          })(c, t);
          var e,
            n,
            o,
            i,
            a =
              ((o = c),
              (i = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {}),
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()),
              function () {
                var t,
                  e = Dt(o);
                if (i) {
                  var n = Dt(this).constructor;
                  t = Reflect.construct(e, arguments, n);
                } else t = e.apply(this, arguments);
                return (function (t, e) {
                  if (e && ("object" === Pt(e) || "function" == typeof e))
                    return e;
                  if (void 0 !== e)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined",
                    );
                  return Nt(t);
                })(this, t);
              });
          function c() {
            var t;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, c),
              It(Nt((t = a.call(this))), "handleEnter", function (e, n) {
                var r = t.props,
                  o = r.appearOptions,
                  i = r.enterOptions;
                t.handleStyleActive(n ? o : i);
              }),
              It(Nt(t), "handleExit", function () {
                var e = t.props.leaveOptions;
                t.handleStyleActive(e);
              }),
              (t.state = { isActive: !1 }),
              t
            );
          }
          return (
            (e = c),
            (n = [
              {
                key: "handleStyleActive",
                value: function (t) {
                  if (t) {
                    var e = t.onAnimationEnd
                      ? function () {
                          t.onAnimationEnd();
                        }
                      : null;
                    this.setState(
                      Tt(Tt({}, t), {}, { onAnimationEnd: e, isActive: !0 }),
                    );
                  }
                },
              },
              {
                key: "parseTimeout",
                value: function () {
                  var t = this.props,
                    e = t.appearOptions,
                    n = t.enterOptions,
                    r = t.leaveOptions;
                  return Rt(e) + Rt(n) + Rt(r);
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this,
                    e = this.props,
                    n = e.children,
                    o =
                      (e.appearOptions,
                      e.enterOptions,
                      e.leaveOptions,
                      (function (t, e) {
                        if (null == t) return {};
                        var n,
                          r,
                          o = (function (t, e) {
                            if (null == t) return {};
                            var n,
                              r,
                              o = {},
                              i = Object.keys(t);
                            for (r = 0; r < i.length; r++)
                              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                            return o;
                          })(t, e);
                        if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(t);
                          for (r = 0; r < i.length; r++)
                            (n = i[r]),
                              e.indexOf(n) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                  t,
                                  n,
                                ) &&
                                  (o[n] = t[n]));
                        }
                        return o;
                      })(e, At));
                  return r.createElement(
                    Et.Transition,
                    kt({}, o, {
                      onEnter: this.handleEnter,
                      onExit: this.handleExit,
                      timeout: this.parseTimeout(),
                    }),
                    function () {
                      return r.createElement(St, t.state, r.Children.only(n));
                    },
                  );
                },
              },
            ]) && _t(e.prototype, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            c
          );
        })(r.Component);
      Bt.propTypes = {
        appearOptions: i().object,
        enterOptions: i().object,
        leaveOptions: i().object,
        children: i().element,
      };
      const Ut = Bt;
      function $t(t) {
        var e = t.component,
          n = t.children,
          o = t.appear,
          i = t.enter,
          a = t.leave;
        return r.createElement(
          Et.TransitionGroup,
          { component: e },
          r.Children.map(n, function (t, e) {
            return r.createElement(
              Ut,
              {
                appearOptions: o,
                enterOptions: i,
                leaveOptions: a,
                key: "child-".concat(e),
              },
              t,
            );
          }),
        );
      }
      ($t.propTypes = {
        appear: i().object,
        enter: i().object,
        leave: i().object,
        children: i().oneOfType([i().array, i().element]),
        component: i().any,
      }),
        ($t.defaultProps = { component: "span" });
      const Ft = St;
    },
    80129: (t, e, n) => {
      "use strict";
      (e.__esModule = !0),
        (e.default = void 0),
        (function (t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                var r =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(t, n)
                    : {};
                r.get || r.set ? Object.defineProperty(e, n, r) : (e[n] = t[n]);
              }
          e.default = t;
        })(n(45697));
      var r = c(n(98141)),
        o = c(n(10602)),
        i = c(n(67294)),
        a = c(n(80112));
      function c(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function u() {
        return (
          (u =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          u.apply(this, arguments)
        );
      }
      n(54726);
      var l = function (t, e) {
          return (
            t &&
            e &&
            e.split(" ").forEach(function (e) {
              return (0, r.default)(t, e);
            })
          );
        },
        s = function (t, e) {
          return (
            t &&
            e &&
            e.split(" ").forEach(function (e) {
              return (0, o.default)(t, e);
            })
          );
        },
        f = (function (t) {
          var e, n;
          function r() {
            for (
              var e, n = arguments.length, r = new Array(n), o = 0;
              o < n;
              o++
            )
              r[o] = arguments[o];
            return (
              ((e = t.call.apply(t, [this].concat(r)) || this).onEnter =
                function (t, n) {
                  var r = e.getClassNames(n ? "appear" : "enter").className;
                  e.removeClasses(t, "exit"),
                    l(t, r),
                    e.props.onEnter && e.props.onEnter(t, n);
                }),
              (e.onEntering = function (t, n) {
                var r = e.getClassNames(n ? "appear" : "enter").activeClassName;
                e.reflowAndAddClass(t, r),
                  e.props.onEntering && e.props.onEntering(t, n);
              }),
              (e.onEntered = function (t, n) {
                var r = e.getClassNames("appear").doneClassName,
                  o = e.getClassNames("enter").doneClassName,
                  i = n ? r + " " + o : o;
                e.removeClasses(t, n ? "appear" : "enter"),
                  l(t, i),
                  e.props.onEntered && e.props.onEntered(t, n);
              }),
              (e.onExit = function (t) {
                var n = e.getClassNames("exit").className;
                e.removeClasses(t, "appear"),
                  e.removeClasses(t, "enter"),
                  l(t, n),
                  e.props.onExit && e.props.onExit(t);
              }),
              (e.onExiting = function (t) {
                var n = e.getClassNames("exit").activeClassName;
                e.reflowAndAddClass(t, n),
                  e.props.onExiting && e.props.onExiting(t);
              }),
              (e.onExited = function (t) {
                var n = e.getClassNames("exit").doneClassName;
                e.removeClasses(t, "exit"),
                  l(t, n),
                  e.props.onExited && e.props.onExited(t);
              }),
              (e.getClassNames = function (t) {
                var n = e.props.classNames,
                  r = "string" == typeof n,
                  o = r ? (r && n ? n + "-" : "") + t : n[t];
                return {
                  className: o,
                  activeClassName: r ? o + "-active" : n[t + "Active"],
                  doneClassName: r ? o + "-done" : n[t + "Done"],
                };
              }),
              e
            );
          }
          (n = t),
            ((e = r).prototype = Object.create(n.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = n);
          var o = r.prototype;
          return (
            (o.removeClasses = function (t, e) {
              var n = this.getClassNames(e),
                r = n.className,
                o = n.activeClassName,
                i = n.doneClassName;
              r && s(t, r), o && s(t, o), i && s(t, i);
            }),
            (o.reflowAndAddClass = function (t, e) {
              e && (t && t.scrollTop, l(t, e));
            }),
            (o.render = function () {
              var t = u({}, this.props);
              return (
                delete t.classNames,
                i.default.createElement(
                  a.default,
                  u({}, t, {
                    onEnter: this.onEnter,
                    onEntered: this.onEntered,
                    onEntering: this.onEntering,
                    onExit: this.onExit,
                    onExiting: this.onExiting,
                    onExited: this.onExited,
                  }),
                )
              );
            }),
            r
          );
        })(i.default.Component);
      (f.defaultProps = { classNames: "" }), (f.propTypes = {});
      var p = f;
      (e.default = p), (t.exports = e.default);
    },
    26093: (t, e, n) => {
      "use strict";
      (e.__esModule = !0), (e.default = void 0), a(n(45697));
      var r = a(n(67294)),
        o = n(73935),
        i = a(n(92381));
      function a(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var c = (function (t) {
        var e, n;
        function a() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            ((e = t.call.apply(t, [this].concat(r)) || this).handleEnter =
              function () {
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                return e.handleLifecycle("onEnter", 0, n);
              }),
            (e.handleEntering = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              return e.handleLifecycle("onEntering", 0, n);
            }),
            (e.handleEntered = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              return e.handleLifecycle("onEntered", 0, n);
            }),
            (e.handleExit = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              return e.handleLifecycle("onExit", 1, n);
            }),
            (e.handleExiting = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              return e.handleLifecycle("onExiting", 1, n);
            }),
            (e.handleExited = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              return e.handleLifecycle("onExited", 1, n);
            }),
            e
          );
        }
        (n = t),
          ((e = a).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = n);
        var c = a.prototype;
        return (
          (c.handleLifecycle = function (t, e, n) {
            var i,
              a = this.props.children,
              c = r.default.Children.toArray(a)[e];
            c.props[t] && (i = c.props)[t].apply(i, n),
              this.props[t] && this.props[t]((0, o.findDOMNode)(this));
          }),
          (c.render = function () {
            var t = this.props,
              e = t.children,
              n = t.in,
              o = (function (t, e) {
                if (null == t) return {};
                var n,
                  r,
                  o = {},
                  i = Object.keys(t);
                for (r = 0; r < i.length; r++)
                  (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                return o;
              })(t, ["children", "in"]),
              a = r.default.Children.toArray(e),
              c = a[0],
              u = a[1];
            return (
              delete o.onEnter,
              delete o.onEntering,
              delete o.onEntered,
              delete o.onExit,
              delete o.onExiting,
              delete o.onExited,
              r.default.createElement(
                i.default,
                o,
                n
                  ? r.default.cloneElement(c, {
                      key: "first",
                      onEnter: this.handleEnter,
                      onEntering: this.handleEntering,
                      onEntered: this.handleEntered,
                    })
                  : r.default.cloneElement(u, {
                      key: "second",
                      onEnter: this.handleExit,
                      onEntering: this.handleExiting,
                      onEntered: this.handleExited,
                    }),
              )
            );
          }),
          a
        );
      })(r.default.Component);
      c.propTypes = {};
      var u = c;
      (e.default = u), (t.exports = e.default);
    },
    80112: (t, e, n) => {
      "use strict";
      (e.__esModule = !0),
        (e.default =
          e.EXITING =
          e.ENTERED =
          e.ENTERING =
          e.EXITED =
          e.UNMOUNTED =
            void 0);
      var r = (function (t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                var r =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(t, n)
                    : {};
                r.get || r.set ? Object.defineProperty(e, n, r) : (e[n] = t[n]);
              }
          return (e.default = t), e;
        })(n(45697)),
        o = c(n(67294)),
        i = c(n(73935)),
        a = n(46871);
      function c(t) {
        return t && t.__esModule ? t : { default: t };
      }
      n(54726);
      var u = "unmounted";
      e.UNMOUNTED = u;
      var l = "exited";
      e.EXITED = l;
      var s = "entering";
      e.ENTERING = s;
      var f = "entered";
      e.ENTERED = f;
      var p = "exiting";
      e.EXITING = p;
      var h = (function (t) {
        var e, n;
        function r(e, n) {
          var r;
          r = t.call(this, e, n) || this;
          var o,
            i = n.transitionGroup,
            a = i && !i.isMounting ? e.enter : e.appear;
          return (
            (r.appearStatus = null),
            e.in
              ? a
                ? ((o = l), (r.appearStatus = s))
                : (o = f)
              : (o = e.unmountOnExit || e.mountOnEnter ? u : l),
            (r.state = { status: o }),
            (r.nextCallback = null),
            r
          );
        }
        (n = t),
          ((e = r).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = n);
        var a = r.prototype;
        return (
          (a.getChildContext = function () {
            return { transitionGroup: null };
          }),
          (r.getDerivedStateFromProps = function (t, e) {
            return t.in && e.status === u ? { status: l } : null;
          }),
          (a.componentDidMount = function () {
            this.updateStatus(!0, this.appearStatus);
          }),
          (a.componentDidUpdate = function (t) {
            var e = null;
            if (t !== this.props) {
              var n = this.state.status;
              this.props.in
                ? n !== s && n !== f && (e = s)
                : (n !== s && n !== f) || (e = p);
            }
            this.updateStatus(!1, e);
          }),
          (a.componentWillUnmount = function () {
            this.cancelNextCallback();
          }),
          (a.getTimeouts = function () {
            var t,
              e,
              n,
              r = this.props.timeout;
            return (
              (t = e = n = r),
              null != r &&
                "number" != typeof r &&
                ((t = r.exit),
                (e = r.enter),
                (n = void 0 !== r.appear ? r.appear : e)),
              { exit: t, enter: e, appear: n }
            );
          }),
          (a.updateStatus = function (t, e) {
            if ((void 0 === t && (t = !1), null !== e)) {
              this.cancelNextCallback();
              var n = i.default.findDOMNode(this);
              e === s ? this.performEnter(n, t) : this.performExit(n);
            } else
              this.props.unmountOnExit &&
                this.state.status === l &&
                this.setState({ status: u });
          }),
          (a.performEnter = function (t, e) {
            var n = this,
              r = this.props.enter,
              o = this.context.transitionGroup
                ? this.context.transitionGroup.isMounting
                : e,
              i = this.getTimeouts(),
              a = o ? i.appear : i.enter;
            e || r
              ? (this.props.onEnter(t, o),
                this.safeSetState({ status: s }, function () {
                  n.props.onEntering(t, o),
                    n.onTransitionEnd(t, a, function () {
                      n.safeSetState({ status: f }, function () {
                        n.props.onEntered(t, o);
                      });
                    });
                }))
              : this.safeSetState({ status: f }, function () {
                  n.props.onEntered(t);
                });
          }),
          (a.performExit = function (t) {
            var e = this,
              n = this.props.exit,
              r = this.getTimeouts();
            n
              ? (this.props.onExit(t),
                this.safeSetState({ status: p }, function () {
                  e.props.onExiting(t),
                    e.onTransitionEnd(t, r.exit, function () {
                      e.safeSetState({ status: l }, function () {
                        e.props.onExited(t);
                      });
                    });
                }))
              : this.safeSetState({ status: l }, function () {
                  e.props.onExited(t);
                });
          }),
          (a.cancelNextCallback = function () {
            null !== this.nextCallback &&
              (this.nextCallback.cancel(), (this.nextCallback = null));
          }),
          (a.safeSetState = function (t, e) {
            (e = this.setNextCallback(e)), this.setState(t, e);
          }),
          (a.setNextCallback = function (t) {
            var e = this,
              n = !0;
            return (
              (this.nextCallback = function (r) {
                n && ((n = !1), (e.nextCallback = null), t(r));
              }),
              (this.nextCallback.cancel = function () {
                n = !1;
              }),
              this.nextCallback
            );
          }),
          (a.onTransitionEnd = function (t, e, n) {
            this.setNextCallback(n);
            var r = null == e && !this.props.addEndListener;
            t && !r
              ? (this.props.addEndListener &&
                  this.props.addEndListener(t, this.nextCallback),
                null != e && setTimeout(this.nextCallback, e))
              : setTimeout(this.nextCallback, 0);
          }),
          (a.render = function () {
            var t = this.state.status;
            if (t === u) return null;
            var e = this.props,
              n = e.children,
              r = (function (t, e) {
                if (null == t) return {};
                var n,
                  r,
                  o = {},
                  i = Object.keys(t);
                for (r = 0; r < i.length; r++)
                  (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                return o;
              })(e, ["children"]);
            if (
              (delete r.in,
              delete r.mountOnEnter,
              delete r.unmountOnExit,
              delete r.appear,
              delete r.enter,
              delete r.exit,
              delete r.timeout,
              delete r.addEndListener,
              delete r.onEnter,
              delete r.onEntering,
              delete r.onEntered,
              delete r.onExit,
              delete r.onExiting,
              delete r.onExited,
              "function" == typeof n)
            )
              return n(t, r);
            var i = o.default.Children.only(n);
            return o.default.cloneElement(i, r);
          }),
          r
        );
      })(o.default.Component);
      function d() {}
      (h.contextTypes = { transitionGroup: r.object }),
        (h.childContextTypes = { transitionGroup: function () {} }),
        (h.propTypes = {}),
        (h.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: d,
          onEntering: d,
          onEntered: d,
          onExit: d,
          onExiting: d,
          onExited: d,
        }),
        (h.UNMOUNTED = 0),
        (h.EXITED = 1),
        (h.ENTERING = 2),
        (h.ENTERED = 3),
        (h.EXITING = 4);
      var y = (0, a.polyfill)(h);
      e.default = y;
    },
    92381: (t, e, n) => {
      "use strict";
      (e.__esModule = !0), (e.default = void 0);
      var r = c(n(45697)),
        o = c(n(67294)),
        i = n(46871),
        a = n(40537);
      function c(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function u() {
        return (
          (u =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          u.apply(this, arguments)
        );
      }
      function l(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      var s =
          Object.values ||
          function (t) {
            return Object.keys(t).map(function (e) {
              return t[e];
            });
          },
        f = (function (t) {
          var e, n;
          function r(e, n) {
            var r,
              o = (r = t.call(this, e, n) || this).handleExited.bind(l(l(r)));
            return (r.state = { handleExited: o, firstRender: !0 }), r;
          }
          (n = t),
            ((e = r).prototype = Object.create(n.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = n);
          var i = r.prototype;
          return (
            (i.getChildContext = function () {
              return { transitionGroup: { isMounting: !this.appeared } };
            }),
            (i.componentDidMount = function () {
              (this.appeared = !0), (this.mounted = !0);
            }),
            (i.componentWillUnmount = function () {
              this.mounted = !1;
            }),
            (r.getDerivedStateFromProps = function (t, e) {
              var n = e.children,
                r = e.handleExited;
              return {
                children: e.firstRender
                  ? (0, a.getInitialChildMapping)(t, r)
                  : (0, a.getNextChildMapping)(t, n, r),
                firstRender: !1,
              };
            }),
            (i.handleExited = function (t, e) {
              var n = (0, a.getChildMapping)(this.props.children);
              t.key in n ||
                (t.props.onExited && t.props.onExited(e),
                this.mounted &&
                  this.setState(function (e) {
                    var n = u({}, e.children);
                    return delete n[t.key], { children: n };
                  }));
            }),
            (i.render = function () {
              var t = this.props,
                e = t.component,
                n = t.childFactory,
                r = (function (t, e) {
                  if (null == t) return {};
                  var n,
                    r,
                    o = {},
                    i = Object.keys(t);
                  for (r = 0; r < i.length; r++)
                    (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                  return o;
                })(t, ["component", "childFactory"]),
                i = s(this.state.children).map(n);
              return (
                delete r.appear,
                delete r.enter,
                delete r.exit,
                null === e ? i : o.default.createElement(e, r, i)
              );
            }),
            r
          );
        })(o.default.Component);
      (f.childContextTypes = { transitionGroup: r.default.object.isRequired }),
        (f.propTypes = {}),
        (f.defaultProps = {
          component: "div",
          childFactory: function (t) {
            return t;
          },
        });
      var p = (0, i.polyfill)(f);
      (e.default = p), (t.exports = e.default);
    },
    64317: (t, e, n) => {
      "use strict";
      var r = c(n(80129)),
        o = c(n(26093)),
        i = c(n(92381)),
        a = c(n(80112));
      function c(t) {
        return t && t.__esModule ? t : { default: t };
      }
      t.exports = {
        Transition: a.default,
        TransitionGroup: i.default,
        ReplaceTransition: o.default,
        CSSTransition: r.default,
      };
    },
    40537: (t, e, n) => {
      "use strict";
      (e.__esModule = !0),
        (e.getChildMapping = o),
        (e.mergeChildMappings = i),
        (e.getInitialChildMapping = function (t, e) {
          return o(t.children, function (n) {
            return (0, r.cloneElement)(n, {
              onExited: e.bind(null, n),
              in: !0,
              appear: a(n, "appear", t),
              enter: a(n, "enter", t),
              exit: a(n, "exit", t),
            });
          });
        }),
        (e.getNextChildMapping = function (t, e, n) {
          var c = o(t.children),
            u = i(e, c);
          return (
            Object.keys(u).forEach(function (o) {
              var i = u[o];
              if ((0, r.isValidElement)(i)) {
                var l = o in e,
                  s = o in c,
                  f = e[o],
                  p = (0, r.isValidElement)(f) && !f.props.in;
                !s || (l && !p)
                  ? s || !l || p
                    ? s &&
                      l &&
                      (0, r.isValidElement)(f) &&
                      (u[o] = (0, r.cloneElement)(i, {
                        onExited: n.bind(null, i),
                        in: f.props.in,
                        exit: a(i, "exit", t),
                        enter: a(i, "enter", t),
                      }))
                    : (u[o] = (0, r.cloneElement)(i, { in: !1 }))
                  : (u[o] = (0, r.cloneElement)(i, {
                      onExited: n.bind(null, i),
                      in: !0,
                      exit: a(i, "exit", t),
                      enter: a(i, "enter", t),
                    }));
              }
            }),
            u
          );
        });
      var r = n(67294);
      function o(t, e) {
        var n = Object.create(null);
        return (
          t &&
            r.Children.map(t, function (t) {
              return t;
            }).forEach(function (t) {
              n[t.key] = (function (t) {
                return e && (0, r.isValidElement)(t) ? e(t) : t;
              })(t);
            }),
          n
        );
      }
      function i(t, e) {
        function n(n) {
          return n in e ? e[n] : t[n];
        }
        (t = t || {}), (e = e || {});
        var r,
          o = Object.create(null),
          i = [];
        for (var a in t)
          a in e ? i.length && ((o[a] = i), (i = [])) : i.push(a);
        var c = {};
        for (var u in e) {
          if (o[u])
            for (r = 0; r < o[u].length; r++) {
              var l = o[u][r];
              c[o[u][r]] = n(l);
            }
          c[u] = n(u);
        }
        for (r = 0; r < i.length; r++) c[i[r]] = n(i[r]);
        return c;
      }
      function a(t, e, n) {
        return null != n[e] ? n[e] : t.props[e];
      }
    },
    54726: (t, e, n) => {
      "use strict";
      var r;
      (e.__esModule = !0),
        (e.classNamesShape = e.timeoutsShape = void 0),
        (r = n(45697)) && r.__esModule,
        (e.timeoutsShape = null),
        (e.classNamesShape = null);
    },
    35329: (t, e, n) => {
      "use strict";
      n.d(e, { u: () => Sr });
      var r = n(67294),
        o = n(14293),
        i = n.n(o),
        a = n(23560),
        c = n.n(a),
        u = n(96026),
        l = n.n(u),
        s = n(27361),
        f = n.n(s),
        p = n(89734),
        h = n.n(p),
        d = n(23493),
        y = n.n(d),
        v = n(13311),
        m = n.n(v),
        g = n(711),
        b = n.n(g),
        x = n(90512),
        w = n(40048);
      function O(t) {
        var e = t.cx,
          n = t.cy,
          r = t.radius,
          o = t.startAngle,
          i = t.endAngle;
        return {
          points: [(0, w.op)(e, n, r, o), (0, w.op)(e, n, r, i)],
          cx: e,
          cy: n,
          radius: r,
          startAngle: o,
          endAngle: i,
        };
      }
      var j = n(69055),
        S = n(41209),
        E = n(47523),
        A = n(66604),
        P = n.n(A);
      function k(t) {
        return (
          (k =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          k(t)
        );
      }
      function M(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, N(r.key), r);
        }
      }
      function T(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function _(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? T(Object(n), !0).forEach(function (e) {
                C(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : T(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function C(t, e, n) {
        return (
          (e = N(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function N(t) {
        var e = (function (t, e) {
          if ("object" !== k(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" !== k(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" === k(e) ? e : String(e);
      }
      var D = function (t, e) {
          var n = t.x,
            r = t.y,
            o = e.x,
            i = e.y;
          return {
            x: Math.min(n, o),
            y: Math.min(r, i),
            width: Math.abs(o - n),
            height: Math.abs(i - r),
          };
        },
        I = (function () {
          function t(e) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.scale = e);
          }
          var e, n, r;
          return (
            (e = t),
            (n = [
              {
                key: "domain",
                get: function () {
                  return this.scale.domain;
                },
              },
              {
                key: "range",
                get: function () {
                  return this.scale.range;
                },
              },
              {
                key: "rangeMin",
                get: function () {
                  return this.range()[0];
                },
              },
              {
                key: "rangeMax",
                get: function () {
                  return this.range()[1];
                },
              },
              {
                key: "bandwidth",
                get: function () {
                  return this.scale.bandwidth;
                },
              },
              {
                key: "apply",
                value: function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n = e.bandAware,
                    r = e.position;
                  if (void 0 !== t) {
                    if (r)
                      switch (r) {
                        case "start":
                        default:
                          return this.scale(t);
                        case "middle":
                          var o = this.bandwidth ? this.bandwidth() / 2 : 0;
                          return this.scale(t) + o;
                        case "end":
                          var i = this.bandwidth ? this.bandwidth() : 0;
                          return this.scale(t) + i;
                      }
                    if (n) {
                      var a = this.bandwidth ? this.bandwidth() / 2 : 0;
                      return this.scale(t) + a;
                    }
                    return this.scale(t);
                  }
                },
              },
              {
                key: "isInRange",
                value: function (t) {
                  var e = this.range(),
                    n = e[0],
                    r = e[e.length - 1];
                  return n <= r ? t >= n && t <= r : t >= r && t <= n;
                },
              },
            ]),
            (r = [
              {
                key: "create",
                value: function (e) {
                  return new t(e);
                },
              },
            ]),
            n && M(e.prototype, n),
            r && M(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t
          );
        })();
      C(I, "EPS", 1e-4);
      var L = function (t) {
        var e = Object.keys(t).reduce(function (e, n) {
          return _(_({}, e), {}, C({}, n, I.create(t[n])));
        }, {});
        return _(
          _({}, e),
          {},
          {
            apply: function (t) {
              var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                r = n.bandAware,
                o = n.position;
              return P()(t, function (t, n) {
                return e[n].apply(t, { bandAware: r, position: o });
              });
            },
            isInRange: function (t) {
              return b()(t, function (t, n) {
                return e[n].isInRange(t);
              });
            },
          },
        );
      };
      function R(t, e, n) {
        if (e < 1) return [];
        if (1 === e && void 0 === n) return t;
        for (var r = [], o = 0; o < t.length; o += e) {
          if (void 0 !== n && !0 !== n(t[o])) return;
          r.push(t[o]);
        }
        return r;
      }
      function B(t, e, n, r, o) {
        if (t * e < t * r || t * e > t * o) return !1;
        var i = n();
        return t * (e - (t * i) / 2 - r) >= 0 && t * (e + (t * i) / 2 - o) <= 0;
      }
      function U(t) {
        return (
          (U =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          U(t)
        );
      }
      function $(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function F(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? $(Object(n), !0).forEach(function (e) {
                var r, o, i;
                (r = t),
                  (o = e),
                  (i = n[e]),
                  (o = (function (t) {
                    var e = (function (t, e) {
                      if ("object" !== U(t) || null === t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, "string");
                        if ("object" !== U(r)) return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return String(t);
                    })(t);
                    return "symbol" === U(e) ? e : String(e);
                  })(o)) in r
                    ? Object.defineProperty(r, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[o] = i);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : $(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function z(t, e, n) {
        var r = t.tick,
          o = t.ticks,
          i = t.viewBox,
          a = t.minTickGap,
          u = t.orientation,
          l = t.interval,
          s = t.tickFormatter,
          f = t.unit,
          p = t.angle;
        if (!o || !o.length || !r) return [];
        if ((0, j.hj)(l) || E.x.isSsr)
          return (function (t, e) {
            return R(t, e + 1);
          })(o, "number" == typeof l && (0, j.hj)(l) ? l : 0);
        var h = [],
          d = "top" === u || "bottom" === u ? "width" : "height",
          y =
            f && "width" === d
              ? (0, S.xE)(f, { fontSize: e, letterSpacing: n })
              : { width: 0, height: 0 },
          v = function (t, r) {
            var o = c()(s) ? s(t.value, r) : t.value;
            return "width" === d
              ? (function (t, e, n) {
                  return (function (t) {
                    var e = t.width,
                      n = t.height,
                      r =
                        (((((arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0) %
                          180) +
                          180) %
                          180) *
                          Math.PI) /
                        180,
                      o = Math.atan(n / e),
                      i =
                        r > o && r < Math.PI - o
                          ? n / Math.sin(r)
                          : e / Math.cos(r);
                    return Math.abs(i);
                  })(
                    { width: t.width + e.width, height: t.height + e.height },
                    n,
                  );
                })((0, S.xE)(o, { fontSize: e, letterSpacing: n }), y, p)
              : (0, S.xE)(o, { fontSize: e, letterSpacing: n })[d];
          },
          m = o.length >= 2 ? (0, j.uY)(o[1].coordinate - o[0].coordinate) : 1,
          g = (function (t, e, n) {
            var r = "width" === n,
              o = t.x,
              i = t.y,
              a = t.width,
              c = t.height;
            return 1 === e
              ? { start: r ? o : i, end: r ? o + a : i + c }
              : { start: r ? o + a : i + c, end: r ? o : i };
          })(i, m, d);
        return "equidistantPreserveStart" === l
          ? (function (t, e, n, r, o) {
              for (
                var i,
                  a = (r || []).slice(),
                  c = e.start,
                  u = e.end,
                  l = 0,
                  s = 1,
                  f = c,
                  p = function () {
                    var e = null == r ? void 0 : r[l];
                    if (void 0 === e) return { v: R(r, s) };
                    var i,
                      a = l,
                      p = function () {
                        return void 0 === i && (i = n(e, a)), i;
                      },
                      h = e.coordinate,
                      d = 0 === l || B(t, h, p, f, u);
                    d || ((l = 0), (f = c), (s += 1)),
                      d && ((f = h + t * (p() / 2 + o)), (l += s));
                  };
                s <= a.length;

              )
                if ((i = p())) return i.v;
              return [];
            })(m, g, v, o, a)
          : ((h =
              "preserveStart" === l || "preserveStartEnd" === l
                ? (function (t, e, n, r, o, i) {
                    var a = (r || []).slice(),
                      c = a.length,
                      u = e.start,
                      l = e.end;
                    if (i) {
                      var s = r[c - 1],
                        f = n(s, c - 1),
                        p = t * (s.coordinate + (t * f) / 2 - l);
                      (a[c - 1] = s =
                        F(
                          F({}, s),
                          {},
                          {
                            tickCoord:
                              p > 0 ? s.coordinate - p * t : s.coordinate,
                          },
                        )),
                        B(
                          t,
                          s.tickCoord,
                          function () {
                            return f;
                          },
                          u,
                          l,
                        ) &&
                          ((l = s.tickCoord - t * (f / 2 + o)),
                          (a[c - 1] = F(F({}, s), {}, { isShow: !0 })));
                    }
                    for (
                      var h = i ? c - 1 : c,
                        d = function (e) {
                          var r,
                            i = a[e],
                            c = function () {
                              return void 0 === r && (r = n(i, e)), r;
                            };
                          if (0 === e) {
                            var s = t * (i.coordinate - (t * c()) / 2 - u);
                            a[e] = i = F(
                              F({}, i),
                              {},
                              {
                                tickCoord:
                                  s < 0 ? i.coordinate - s * t : i.coordinate,
                              },
                            );
                          } else
                            a[e] = i = F(
                              F({}, i),
                              {},
                              { tickCoord: i.coordinate },
                            );
                          B(t, i.tickCoord, c, u, l) &&
                            ((u = i.tickCoord + t * (c() / 2 + o)),
                            (a[e] = F(F({}, i), {}, { isShow: !0 })));
                        },
                        y = 0;
                      y < h;
                      y++
                    )
                      d(y);
                    return a;
                  })(m, g, v, o, a, "preserveStartEnd" === l)
                : (function (t, e, n, r, o) {
                    for (
                      var i = (r || []).slice(),
                        a = i.length,
                        c = e.start,
                        u = e.end,
                        l = function (e) {
                          var r,
                            l = i[e],
                            s = function () {
                              return void 0 === r && (r = n(l, e)), r;
                            };
                          if (e === a - 1) {
                            var f = t * (l.coordinate + (t * s()) / 2 - u);
                            i[e] = l = F(
                              F({}, l),
                              {},
                              {
                                tickCoord:
                                  f > 0 ? l.coordinate - f * t : l.coordinate,
                              },
                            );
                          } else
                            i[e] = l = F(
                              F({}, l),
                              {},
                              { tickCoord: l.coordinate },
                            );
                          B(t, l.tickCoord, s, c, u) &&
                            ((u = l.tickCoord - t * (s() / 2 + o)),
                            (i[e] = F(F({}, l), {}, { isShow: !0 })));
                        },
                        s = a - 1;
                      s >= 0;
                      s--
                    )
                      l(s);
                    return i;
                  })(m, g, v, o, a)),
            h.filter(function (t) {
              return t.isShow;
            }));
      }
      var W = n(20514),
        Z = n(48710);
      function q(t) {
        return (
          (q =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          q(t)
        );
      }
      function G(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function X(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Y(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? X(Object(n), !0).forEach(function (e) {
                var r, o, i;
                (r = t),
                  (o = e),
                  (i = n[e]),
                  (o = (function (t) {
                    var e = (function (t, e) {
                      if ("object" !== q(t) || null === t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, "string");
                        if ("object" !== q(r)) return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return String(t);
                    })(t);
                    return "symbol" === q(e) ? e : String(e);
                  })(o)) in r
                    ? Object.defineProperty(r, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[o] = i);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : X(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function H(t) {
        return Array.isArray(t) && (0, j.P2)(t[0]) && (0, j.P2)(t[1])
          ? t.join(" ~ ")
          : t;
      }
      var V = function (t) {
          var e = t.separator,
            n = void 0 === e ? " : " : e,
            o = t.contentStyle,
            a = void 0 === o ? {} : o,
            c = t.itemStyle,
            u = void 0 === c ? {} : c,
            l = t.labelStyle,
            s = void 0 === l ? {} : l,
            f = t.payload,
            p = t.formatter,
            d = t.itemSorter,
            y = t.wrapperClassName,
            v = t.labelClassName,
            m = t.label,
            g = t.labelFormatter,
            b = Y(
              {
                margin: 0,
                padding: 10,
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                whiteSpace: "nowrap",
              },
              a,
            ),
            w = Y({ margin: 0 }, s),
            O = !i()(m),
            S = O ? m : "",
            E = (0, x.Z)("recharts-default-tooltip", y),
            A = (0, x.Z)("recharts-tooltip-label", v);
          return (
            O && g && null != f && (S = g(m, f)),
            r.createElement(
              "div",
              { className: E, style: b },
              r.createElement(
                "p",
                { className: A, style: w },
                r.isValidElement(S) ? S : "".concat(S),
              ),
              (function () {
                if (f && f.length) {
                  var t = (d ? h()(f, d) : f).map(function (t, e) {
                    if ("none" === t.type) return null;
                    var o = Y(
                        {
                          display: "block",
                          paddingTop: 4,
                          paddingBottom: 4,
                          color: t.color || "#000",
                        },
                        u,
                      ),
                      i = t.formatter || p || H,
                      a = t.value,
                      c = t.name,
                      l = a,
                      s = c;
                    if (i && null != l && null != s) {
                      var h = i(a, c, t, e, f);
                      if (Array.isArray(h)) {
                        var d = (function (t, e) {
                          return (
                            (function (t) {
                              if (Array.isArray(t)) return t;
                            })(t) ||
                            (function (t, e) {
                              var n =
                                null == t
                                  ? null
                                  : ("undefined" != typeof Symbol &&
                                      t[Symbol.iterator]) ||
                                    t["@@iterator"];
                              if (null != n) {
                                var r,
                                  o,
                                  i,
                                  a,
                                  c = [],
                                  u = !0,
                                  l = !1;
                                try {
                                  if (((i = (n = n.call(t)).next), 0 === e)) {
                                    if (Object(n) !== n) return;
                                    u = !1;
                                  } else
                                    for (
                                      ;
                                      !(u = (r = i.call(n)).done) &&
                                      (c.push(r.value), c.length !== e);
                                      u = !0
                                    );
                                } catch (t) {
                                  (l = !0), (o = t);
                                } finally {
                                  try {
                                    if (
                                      !u &&
                                      null != n.return &&
                                      ((a = n.return()), Object(a) !== a)
                                    )
                                      return;
                                  } finally {
                                    if (l) throw o;
                                  }
                                }
                                return c;
                              }
                            })(t, e) ||
                            (function (t, e) {
                              if (t) {
                                if ("string" == typeof t) return G(t, e);
                                var n = Object.prototype.toString
                                  .call(t)
                                  .slice(8, -1);
                                return (
                                  "Object" === n &&
                                    t.constructor &&
                                    (n = t.constructor.name),
                                  "Map" === n || "Set" === n
                                    ? Array.from(t)
                                    : "Arguments" === n ||
                                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                          n,
                                        )
                                      ? G(t, e)
                                      : void 0
                                );
                              }
                            })(t, e) ||
                            (function () {
                              throw new TypeError(
                                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                              );
                            })()
                          );
                        })(h, 2);
                        (l = d[0]), (s = d[1]);
                      } else l = h;
                    }
                    return r.createElement(
                      "li",
                      {
                        className: "recharts-tooltip-item",
                        key: "tooltip-item-".concat(e),
                        style: o,
                      },
                      (0, j.P2)(s)
                        ? r.createElement(
                            "span",
                            { className: "recharts-tooltip-item-name" },
                            s,
                          )
                        : null,
                      (0, j.P2)(s)
                        ? r.createElement(
                            "span",
                            { className: "recharts-tooltip-item-separator" },
                            n,
                          )
                        : null,
                      r.createElement(
                        "span",
                        { className: "recharts-tooltip-item-value" },
                        l,
                      ),
                      r.createElement(
                        "span",
                        { className: "recharts-tooltip-item-unit" },
                        t.unit || "",
                      ),
                    );
                  });
                  return r.createElement(
                    "ul",
                    {
                      className: "recharts-tooltip-item-list",
                      style: { padding: 0, margin: 0 },
                    },
                    t,
                  );
                }
                return null;
              })(),
            )
          );
        },
        K = n(94884);
      function J(t) {
        return (
          (J =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          J(t)
        );
      }
      function Q(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== J(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, "string");
                if ("object" !== J(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(t);
            })(t);
            return "symbol" === J(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var tt = "recharts-tooltip-wrapper",
        et = { visibility: "hidden" };
      function nt(t) {
        var e,
          n = t.coordinate,
          r = t.translateX,
          o = t.translateY;
        return (0, x.Z)(
          tt,
          (Q(
            (e = {}),
            "".concat(tt, "-right"),
            (0, j.hj)(r) && n && (0, j.hj)(n.x) && r >= n.x,
          ),
          Q(
            e,
            "".concat(tt, "-left"),
            (0, j.hj)(r) && n && (0, j.hj)(n.x) && r < n.x,
          ),
          Q(
            e,
            "".concat(tt, "-bottom"),
            (0, j.hj)(o) && n && (0, j.hj)(n.y) && o >= n.y,
          ),
          Q(
            e,
            "".concat(tt, "-top"),
            (0, j.hj)(o) && n && (0, j.hj)(n.y) && o < n.y,
          ),
          e),
        );
      }
      function rt(t) {
        var e = t.allowEscapeViewBox,
          n = t.coordinate,
          r = t.key,
          o = t.offsetTopLeft,
          i = t.position,
          a = t.reverseDirection,
          c = t.tooltipDimension,
          u = t.viewBox,
          l = t.viewBoxDimension;
        if (i && (0, j.hj)(i[r])) return i[r];
        var s = n[r] - c - o,
          f = n[r] + o;
        return e[r]
          ? a[r]
            ? s
            : f
          : a[r]
            ? s < u[r]
              ? Math.max(f, u[r])
              : Math.max(s, u[r])
            : f + c > u[r] + l
              ? Math.max(s, u[r])
              : Math.max(f, u[r]);
      }
      function ot(t) {
        return (
          (ot =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          ot(t)
        );
      }
      function it(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function at(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? it(Object(n), !0).forEach(function (e) {
                ft(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : it(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function ct(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, pt(r.key), r);
        }
      }
      function ut(t, e) {
        return (
          (ut = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          ut(t, e)
        );
      }
      function lt(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function st(t) {
        return (
          (st = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          st(t)
        );
      }
      function ft(t, e, n) {
        return (
          (e = pt(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function pt(t) {
        var e = (function (t, e) {
          if ("object" !== ot(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" !== ot(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" === ot(e) ? e : String(e);
      }
      var ht = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && ut(t, e);
          })(c, t);
          var e,
            n,
            o,
            i,
            a =
              ((o = c),
              (i = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {}),
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()),
              function () {
                var t,
                  e = st(o);
                if (i) {
                  var n = st(this).constructor;
                  t = Reflect.construct(e, arguments, n);
                } else t = e.apply(this, arguments);
                return (function (t, e) {
                  if (e && ("object" === ot(e) || "function" == typeof e))
                    return e;
                  if (void 0 !== e)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined",
                    );
                  return lt(t);
                })(this, t);
              });
          function c() {
            var t;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, c);
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return (
              ft(lt((t = a.call.apply(a, [this].concat(n)))), "state", {
                dismissed: !1,
                dismissedAtCoordinate: { x: 0, y: 0 },
              }),
              ft(lt(t), "lastBoundingBox", { width: -1, height: -1 }),
              ft(lt(t), "handleKeyDown", function (e) {
                var n, r, o, i;
                "Escape" === e.key &&
                  t.setState({
                    dismissed: !0,
                    dismissedAtCoordinate: {
                      x:
                        null !==
                          (n =
                            null === (r = t.props.coordinate) || void 0 === r
                              ? void 0
                              : r.x) && void 0 !== n
                          ? n
                          : 0,
                      y:
                        null !==
                          (o =
                            null === (i = t.props.coordinate) || void 0 === i
                              ? void 0
                              : i.y) && void 0 !== o
                          ? o
                          : 0,
                    },
                  });
              }),
              t
            );
          }
          return (
            (e = c),
            (n = [
              {
                key: "updateBBox",
                value: function () {
                  if (
                    this.wrapperNode &&
                    this.wrapperNode.getBoundingClientRect
                  ) {
                    var t = this.wrapperNode.getBoundingClientRect();
                    (Math.abs(t.width - this.lastBoundingBox.width) > 1 ||
                      Math.abs(t.height - this.lastBoundingBox.height) > 1) &&
                      ((this.lastBoundingBox.width = t.width),
                      (this.lastBoundingBox.height = t.height));
                  } else
                    (-1 === this.lastBoundingBox.width &&
                      -1 === this.lastBoundingBox.height) ||
                      ((this.lastBoundingBox.width = -1),
                      (this.lastBoundingBox.height = -1));
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  document.addEventListener("keydown", this.handleKeyDown),
                    this.updateBBox();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  document.removeEventListener("keydown", this.handleKeyDown);
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  var t, e;
                  this.props.active && this.updateBBox(),
                    this.state.dismissed &&
                      (((null === (t = this.props.coordinate) || void 0 === t
                        ? void 0
                        : t.x) === this.state.dismissedAtCoordinate.x &&
                        (null === (e = this.props.coordinate) || void 0 === e
                          ? void 0
                          : e.y) === this.state.dismissedAtCoordinate.y) ||
                        (this.state.dismissed = !1));
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this,
                    e = this.props,
                    n = e.active,
                    o = e.allowEscapeViewBox,
                    i = e.animationDuration,
                    a = e.animationEasing,
                    c = e.children,
                    u = e.coordinate,
                    l = e.hasPayload,
                    s = e.isAnimationActive,
                    f = e.offset,
                    p = e.position,
                    h = e.reverseDirection,
                    d = e.useTranslate3d,
                    y = e.viewBox,
                    v = e.wrapperStyle,
                    m = (function (t) {
                      var e,
                        n,
                        r,
                        o = t.allowEscapeViewBox,
                        i = t.coordinate,
                        a = t.offsetTopLeft,
                        c = t.position,
                        u = t.reverseDirection,
                        l = t.tooltipBox,
                        s = t.useTranslate3d,
                        f = t.viewBox;
                      return (
                        (e =
                          l.height > 0 && l.width > 0 && i
                            ? (function (t) {
                                var e = t.translateX,
                                  n = t.translateY,
                                  r = t.useTranslate3d;
                                return (0, K.bO)({
                                  transform: r
                                    ? "translate3d("
                                        .concat(e, "px, ")
                                        .concat(n, "px, 0)")
                                    : "translate("
                                        .concat(e, "px, ")
                                        .concat(n, "px)"),
                                });
                              })({
                                translateX: (n = rt({
                                  allowEscapeViewBox: o,
                                  coordinate: i,
                                  key: "x",
                                  offsetTopLeft: a,
                                  position: c,
                                  reverseDirection: u,
                                  tooltipDimension: l.width,
                                  viewBox: f,
                                  viewBoxDimension: f.width,
                                })),
                                translateY: (r = rt({
                                  allowEscapeViewBox: o,
                                  coordinate: i,
                                  key: "y",
                                  offsetTopLeft: a,
                                  position: c,
                                  reverseDirection: u,
                                  tooltipDimension: l.height,
                                  viewBox: f,
                                  viewBoxDimension: f.height,
                                })),
                                useTranslate3d: s,
                              })
                            : et),
                        {
                          cssProperties: e,
                          cssClasses: nt({
                            translateX: n,
                            translateY: r,
                            coordinate: i,
                          }),
                        }
                      );
                    })({
                      allowEscapeViewBox: o,
                      coordinate: u,
                      offsetTopLeft: f,
                      position: p,
                      reverseDirection: h,
                      tooltipBox: {
                        height: this.lastBoundingBox.height,
                        width: this.lastBoundingBox.width,
                      },
                      useTranslate3d: d,
                      viewBox: y,
                    }),
                    g = m.cssClasses,
                    b = m.cssProperties,
                    x = at(
                      at(
                        at(
                          {},
                          s &&
                            n &&
                            (0, K.bO)({
                              transition: "transform "
                                .concat(i, "ms ")
                                .concat(a),
                            }),
                        ),
                        b,
                      ),
                      {},
                      {
                        pointerEvents: "none",
                        visibility:
                          !this.state.dismissed && n && l
                            ? "visible"
                            : "hidden",
                        position: "absolute",
                        top: 0,
                        left: 0,
                      },
                      v,
                    );
                  return r.createElement(
                    "div",
                    {
                      tabIndex: -1,
                      role: "dialog",
                      className: g,
                      style: x,
                      ref: function (e) {
                        t.wrapperNode = e;
                      },
                    },
                    c,
                  );
                },
              },
            ]) && ct(e.prototype, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            c
          );
        })(r.PureComponent),
        dt = n(78817);
      function yt(t) {
        return (
          (yt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          yt(t)
        );
      }
      function vt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function mt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? vt(Object(n), !0).forEach(function (e) {
                wt(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : vt(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function gt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Ot(r.key), r);
        }
      }
      function bt(t, e) {
        return (
          (bt = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          bt(t, e)
        );
      }
      function xt(t) {
        return (
          (xt = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          xt(t)
        );
      }
      function wt(t, e, n) {
        return (
          (e = Ot(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function Ot(t) {
        var e = (function (t, e) {
          if ("object" !== yt(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" !== yt(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" === yt(e) ? e : String(e);
      }
      function jt(t) {
        return t.dataKey;
      }
      var St = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && bt(t, e);
        })(c, t);
        var e,
          n,
          o,
          i,
          a =
            ((o = c),
            (i = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {}),
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = xt(o);
              if (i) {
                var n = xt(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                if (e && ("object" === yt(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined",
                  );
                return (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return t;
                })(t);
              })(this, t);
            });
        function c() {
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, c),
            a.apply(this, arguments)
          );
        }
        return (
          (e = c),
          (n = [
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.active,
                  n = t.allowEscapeViewBox,
                  o = t.animationDuration,
                  i = t.animationEasing,
                  a = t.content,
                  c = t.coordinate,
                  u = t.filterNull,
                  l = t.isAnimationActive,
                  s = t.offset,
                  f = t.payload,
                  p = t.payloadUniqBy,
                  h = t.position,
                  d = t.reverseDirection,
                  y = t.useTranslate3d,
                  v = t.viewBox,
                  m = t.wrapperStyle,
                  g = null != f ? f : [];
                u &&
                  g.length &&
                  (g = (0, dt.z)(
                    f.filter(function (t) {
                      return null != t.value;
                    }),
                    p,
                    jt,
                  ));
                var b = g.length > 0;
                return r.createElement(
                  ht,
                  {
                    allowEscapeViewBox: n,
                    animationDuration: o,
                    animationEasing: i,
                    isAnimationActive: l,
                    active: e,
                    coordinate: c,
                    hasPayload: b,
                    offset: s,
                    position: h,
                    reverseDirection: d,
                    useTranslate3d: y,
                    viewBox: v,
                    wrapperStyle: m,
                  },
                  (function (t, e) {
                    return r.isValidElement(t)
                      ? r.cloneElement(t, e)
                      : "function" == typeof t
                        ? r.createElement(t, e)
                        : r.createElement(V, e);
                  })(a, mt(mt({}, this.props), {}, { payload: g })),
                );
              },
            },
          ]) && gt(e.prototype, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          c
        );
      })(r.PureComponent);
      wt(St, "displayName", "Tooltip"),
        wt(St, "defaultProps", {
          allowEscapeViewBox: { x: !1, y: !1 },
          animationDuration: 400,
          animationEasing: "ease",
          contentStyle: {},
          coordinate: { x: 0, y: 0 },
          cursor: !0,
          cursorStyle: {},
          filterNull: !0,
          isAnimationActive: !E.x.isSsr,
          itemStyle: {},
          labelStyle: {},
          offset: 10,
          reverseDirection: { x: !1, y: !1 },
          separator: " : ",
          trigger: "hover",
          useTranslate3d: !1,
          viewBox: { x: 0, y: 0, height: 0, width: 0 },
          wrapperStyle: {},
        });
      var Et = n(23872),
        At = n(60202),
        Pt = n(52017);
      function kt(t) {
        return (
          (kt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          kt(t)
        );
      }
      var Mt = ["x", "y", "top", "left", "width", "height", "className"];
      function Tt() {
        return (
          (Tt = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          Tt.apply(this, arguments)
        );
      }
      function _t(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var Ct = function (t, e, n, r, o, i) {
          return "M"
            .concat(t, ",")
            .concat(o, "v")
            .concat(r, "M")
            .concat(i, ",")
            .concat(e, "h")
            .concat(n);
        },
        Nt = function (t) {
          var e = t.x,
            n = void 0 === e ? 0 : e,
            o = t.y,
            i = void 0 === o ? 0 : o,
            a = t.top,
            c = void 0 === a ? 0 : a,
            u = t.left,
            l = void 0 === u ? 0 : u,
            s = t.width,
            f = void 0 === s ? 0 : s,
            p = t.height,
            h = void 0 === p ? 0 : p,
            d = t.className,
            y = (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? _t(Object(n), !0).forEach(function (e) {
                      var r, o, i;
                      (r = t),
                        (o = e),
                        (i = n[e]),
                        (o = (function (t) {
                          var e = (function (t, e) {
                            if ("object" !== kt(t) || null === t) return t;
                            var n = t[Symbol.toPrimitive];
                            if (void 0 !== n) {
                              var r = n.call(t, "string");
                              if ("object" !== kt(r)) return r;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(t);
                          })(t);
                          return "symbol" === kt(e) ? e : String(e);
                        })(o)) in r
                          ? Object.defineProperty(r, o, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            })
                          : (r[o] = i);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        t,
                        Object.getOwnPropertyDescriptors(n),
                      )
                    : _t(Object(n)).forEach(function (e) {
                        Object.defineProperty(
                          t,
                          e,
                          Object.getOwnPropertyDescriptor(n, e),
                        );
                      });
              }
              return t;
            })(
              { x: n, y: i, top: c, left: l, width: f, height: h },
              (function (t, e) {
                if (null == t) return {};
                var n,
                  r,
                  o = (function (t, e) {
                    if (null == t) return {};
                    var n,
                      r,
                      o = {},
                      i = Object.keys(t);
                    for (r = 0; r < i.length; r++)
                      (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                    return o;
                  })(t, e);
                if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(t);
                  for (r = 0; r < i.length; r++)
                    (n = i[r]),
                      e.indexOf(n) >= 0 ||
                        (Object.prototype.propertyIsEnumerable.call(t, n) &&
                          (o[n] = t[n]));
                }
                return o;
              })(t, Mt),
            );
          return (0, j.hj)(n) &&
            (0, j.hj)(i) &&
            (0, j.hj)(f) &&
            (0, j.hj)(h) &&
            (0, j.hj)(c) &&
            (0, j.hj)(l)
            ? r.createElement(
                "path",
                Tt({}, (0, Pt.L6)(y, !0), {
                  className: (0, x.Z)("recharts-cross", d),
                  d: Ct(n, i, f, h, c, l),
                }),
              )
            : null;
        },
        Dt = n(45108),
        It = n(79896);
      function Lt() {
        return (
          (Lt = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          Lt.apply(this, arguments)
        );
      }
      var Rt = function (t) {
          var e = t.cx,
            n = t.cy,
            o = t.r,
            i = t.className,
            a = (0, x.Z)("recharts-dot", i);
          return e === +e && n === +n && o === +o
            ? r.createElement(
                "circle",
                Lt({}, (0, Pt.L6)(t), (0, It.Ym)(t), {
                  className: a,
                  cx: e,
                  cy: n,
                  r: o,
                }),
              )
            : null;
        },
        Bt = n(13481),
        Ut = n(30791),
        $t = n(37517),
        Ft = n(25048),
        zt = ["viewBox"],
        Wt = ["viewBox"],
        Zt = ["ticks"];
      function qt(t) {
        return (
          (qt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          qt(t)
        );
      }
      function Gt() {
        return (
          (Gt = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          Gt.apply(this, arguments)
        );
      }
      function Xt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Yt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Xt(Object(n), !0).forEach(function (e) {
                Qt(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : Xt(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function Ht(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
      }
      function Vt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, te(r.key), r);
        }
      }
      function Kt(t, e) {
        return (
          (Kt = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          Kt(t, e)
        );
      }
      function Jt(t) {
        return (
          (Jt = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Jt(t)
        );
      }
      function Qt(t, e, n) {
        return (
          (e = te(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function te(t) {
        var e = (function (t, e) {
          if ("object" !== qt(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" !== qt(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" === qt(e) ? e : String(e);
      }
      var ee = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && Kt(t, e);
        })(l, t);
        var e,
          n,
          o,
          i,
          a,
          u =
            ((i = l),
            (a = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {}),
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = Jt(i);
              if (a) {
                var n = Jt(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                if (e && ("object" === qt(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined",
                  );
                return (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return t;
                })(t);
              })(this, t);
            });
        function l(t) {
          var e;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, l),
            ((e = u.call(this, t)).state = { fontSize: "", letterSpacing: "" }),
            e
          );
        }
        return (
          (e = l),
          (o = [
            {
              key: "renderTickItem",
              value: function (t, e, n) {
                return r.isValidElement(t)
                  ? r.cloneElement(t, e)
                  : c()(t)
                    ? t(e)
                    : r.createElement(
                        $t.x,
                        Gt({}, e, {
                          className: "recharts-cartesian-axis-tick-value",
                        }),
                        n,
                      );
              },
            },
          ]),
          (n = [
            {
              key: "shouldComponentUpdate",
              value: function (t, e) {
                var n = t.viewBox,
                  r = Ht(t, zt),
                  o = this.props,
                  i = o.viewBox,
                  a = Ht(o, Wt);
                return (
                  !(0, Ut.w)(n, i) ||
                  !(0, Ut.w)(r, a) ||
                  !(0, Ut.w)(e, this.state)
                );
              },
            },
            {
              key: "componentDidMount",
              value: function () {
                var t = this.layerReference;
                if (t) {
                  var e = t.getElementsByClassName(
                    "recharts-cartesian-axis-tick-value",
                  )[0];
                  e &&
                    this.setState({
                      fontSize: window.getComputedStyle(e).fontSize,
                      letterSpacing: window.getComputedStyle(e).letterSpacing,
                    });
                }
              },
            },
            {
              key: "getTickLineCoord",
              value: function (t) {
                var e,
                  n,
                  r,
                  o,
                  i,
                  a,
                  c = this.props,
                  u = c.x,
                  l = c.y,
                  s = c.width,
                  f = c.height,
                  p = c.orientation,
                  h = c.tickSize,
                  d = c.mirror,
                  y = c.tickMargin,
                  v = d ? -1 : 1,
                  m = t.tickSize || h,
                  g = (0, j.hj)(t.tickCoord) ? t.tickCoord : t.coordinate;
                switch (p) {
                  case "top":
                    (e = n = t.coordinate),
                      (a = (r = (o = l + +!d * f) - v * m) - v * y),
                      (i = g);
                    break;
                  case "left":
                    (r = o = t.coordinate),
                      (i = (e = (n = u + +!d * s) - v * m) - v * y),
                      (a = g);
                    break;
                  case "right":
                    (r = o = t.coordinate),
                      (i = (e = (n = u + +d * s) + v * m) + v * y),
                      (a = g);
                    break;
                  default:
                    (e = n = t.coordinate),
                      (a = (r = (o = l + +d * f) + v * m) + v * y),
                      (i = g);
                }
                return {
                  line: { x1: e, y1: r, x2: n, y2: o },
                  tick: { x: i, y: a },
                };
              },
            },
            {
              key: "getTickTextAnchor",
              value: function () {
                var t,
                  e = this.props,
                  n = e.orientation,
                  r = e.mirror;
                switch (n) {
                  case "left":
                    t = r ? "start" : "end";
                    break;
                  case "right":
                    t = r ? "end" : "start";
                    break;
                  default:
                    t = "middle";
                }
                return t;
              },
            },
            {
              key: "getTickVerticalAnchor",
              value: function () {
                var t = this.props,
                  e = t.orientation,
                  n = t.mirror,
                  r = "end";
                switch (e) {
                  case "left":
                  case "right":
                    r = "middle";
                    break;
                  case "top":
                    r = n ? "start" : "end";
                    break;
                  default:
                    r = n ? "end" : "start";
                }
                return r;
              },
            },
            {
              key: "renderAxisLine",
              value: function () {
                var t = this.props,
                  e = t.x,
                  n = t.y,
                  o = t.width,
                  i = t.height,
                  a = t.orientation,
                  c = t.mirror,
                  u = t.axisLine,
                  l = Yt(
                    Yt(Yt({}, (0, Pt.L6)(this.props)), (0, Pt.L6)(u)),
                    {},
                    { fill: "none" },
                  );
                if ("top" === a || "bottom" === a) {
                  var s = +(("top" === a && !c) || ("bottom" === a && c));
                  l = Yt(
                    Yt({}, l),
                    {},
                    { x1: e, y1: n + s * i, x2: e + o, y2: n + s * i },
                  );
                } else {
                  var p = +(("left" === a && !c) || ("right" === a && c));
                  l = Yt(
                    Yt({}, l),
                    {},
                    { x1: e + p * o, y1: n, x2: e + p * o, y2: n + i },
                  );
                }
                return r.createElement(
                  "line",
                  Gt({}, l, {
                    className: (0, x.Z)(
                      "recharts-cartesian-axis-line",
                      f()(u, "className"),
                    ),
                  }),
                );
              },
            },
            {
              key: "renderTicks",
              value: function (t, e, n) {
                var o = this,
                  i = this.props,
                  a = i.tickLine,
                  u = i.stroke,
                  s = i.tick,
                  p = i.tickFormatter,
                  h = i.unit,
                  d = z(Yt(Yt({}, this.props), {}, { ticks: t }), e, n),
                  y = this.getTickTextAnchor(),
                  v = this.getTickVerticalAnchor(),
                  m = (0, Pt.L6)(this.props),
                  g = (0, Pt.L6)(s),
                  b = Yt(Yt({}, m), {}, { fill: "none" }, (0, Pt.L6)(a)),
                  w = d.map(function (t, e) {
                    var n = o.getTickLineCoord(t),
                      i = n.line,
                      w = n.tick,
                      O = Yt(
                        Yt(
                          Yt(
                            Yt({ textAnchor: y, verticalAnchor: v }, m),
                            {},
                            { stroke: "none", fill: u },
                            g,
                          ),
                          w,
                        ),
                        {},
                        {
                          index: e,
                          payload: t,
                          visibleTicksCount: d.length,
                          tickFormatter: p,
                        },
                      );
                    return r.createElement(
                      Z.m,
                      Gt(
                        {
                          className: "recharts-cartesian-axis-tick",
                          key: "tick-".concat(e),
                        },
                        (0, It.bw)(o.props, t, e),
                      ),
                      a &&
                        r.createElement(
                          "line",
                          Gt({}, b, i, {
                            className: (0, x.Z)(
                              "recharts-cartesian-axis-tick-line",
                              f()(a, "className"),
                            ),
                          }),
                        ),
                      s &&
                        l.renderTickItem(
                          s,
                          O,
                          ""
                            .concat(c()(p) ? p(t.value, e) : t.value)
                            .concat(h || ""),
                        ),
                    );
                  });
                return r.createElement(
                  "g",
                  { className: "recharts-cartesian-axis-ticks" },
                  w,
                );
              },
            },
            {
              key: "render",
              value: function () {
                var t = this,
                  e = this.props,
                  n = e.axisLine,
                  o = e.width,
                  i = e.height,
                  a = e.ticksGenerator,
                  u = e.className;
                if (e.hide) return null;
                var l = this.props,
                  s = l.ticks,
                  f = Ht(l, Zt),
                  p = s;
                return (
                  c()(a) && (p = s && s.length > 0 ? a(this.props) : a(f)),
                  o <= 0 || i <= 0 || !p || !p.length
                    ? null
                    : r.createElement(
                        Z.m,
                        {
                          className: (0, x.Z)("recharts-cartesian-axis", u),
                          ref: function (e) {
                            t.layerReference = e;
                          },
                        },
                        n && this.renderAxisLine(),
                        this.renderTicks(
                          p,
                          this.state.fontSize,
                          this.state.letterSpacing,
                        ),
                        Ft._.renderCallByParent(this.props),
                      )
                );
              },
            },
          ]) && Vt(e.prototype, n),
          o && Vt(e, o),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          l
        );
      })(r.Component);
      Qt(ee, "displayName", "CartesianAxis"),
        Qt(ee, "defaultProps", {
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          viewBox: { x: 0, y: 0, width: 0, height: 0 },
          orientation: "bottom",
          ticks: [],
          stroke: "#666",
          tickLine: !0,
          axisLine: !0,
          tick: !0,
          mirror: !1,
          minTickGap: 5,
          tickSize: 6,
          tickMargin: 2,
          interval: "preserveEnd",
        });
      var ne = n(30996),
        re = n(81990);
      function oe(t) {
        return (
          (oe =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          oe(t)
        );
      }
      function ie(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ae(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ie(Object(n), !0).forEach(function (e) {
                ce(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : ie(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function ce(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== oe(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, "string");
                if ("object" !== oe(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(t);
            })(t);
            return "symbol" === oe(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var ue = ["Webkit", "Moz", "O", "ms"];
      function le(t) {
        return (
          (le =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          le(t)
        );
      }
      function se() {
        return (
          (se = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          se.apply(this, arguments)
        );
      }
      function fe(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function pe(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? fe(Object(n), !0).forEach(function (e) {
                me(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : fe(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function he(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, ge(r.key), r);
        }
      }
      function de(t, e) {
        return (
          (de = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          de(t, e)
        );
      }
      function ye(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function ve(t) {
        return (
          (ve = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          ve(t)
        );
      }
      function me(t, e, n) {
        return (
          (e = ge(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function ge(t) {
        var e = (function (t, e) {
          if ("object" !== le(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" !== le(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" === le(e) ? e : String(e);
      }
      var be = function (t) {
          return t.changedTouches && !!t.changedTouches.length;
        },
        xe = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && de(t, e);
          })(s, t);
          var e,
            n,
            o,
            i,
            a,
            u =
              ((i = s),
              (a = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {}),
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()),
              function () {
                var t,
                  e = ve(i);
                if (a) {
                  var n = ve(this).constructor;
                  t = Reflect.construct(e, arguments, n);
                } else t = e.apply(this, arguments);
                return (function (t, e) {
                  if (e && ("object" === le(e) || "function" == typeof e))
                    return e;
                  if (void 0 !== e)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined",
                    );
                  return ye(t);
                })(this, t);
              });
          function s(t) {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, s),
              me(ye((e = u.call(this, t))), "handleDrag", function (t) {
                e.leaveTimer &&
                  (clearTimeout(e.leaveTimer), (e.leaveTimer = null)),
                  e.state.isTravellerMoving
                    ? e.handleTravellerMove(t)
                    : e.state.isSlideMoving && e.handleSlideDrag(t);
              }),
              me(ye(e), "handleTouchMove", function (t) {
                null != t.changedTouches &&
                  t.changedTouches.length > 0 &&
                  e.handleDrag(t.changedTouches[0]);
              }),
              me(ye(e), "handleDragEnd", function () {
                e.setState(
                  { isTravellerMoving: !1, isSlideMoving: !1 },
                  function () {
                    var t = e.props,
                      n = t.endIndex,
                      r = t.onDragEnd,
                      o = t.startIndex;
                    null == r || r({ endIndex: n, startIndex: o });
                  },
                ),
                  e.detachDragEndListener();
              }),
              me(ye(e), "handleLeaveWrapper", function () {
                (e.state.isTravellerMoving || e.state.isSlideMoving) &&
                  (e.leaveTimer = window.setTimeout(
                    e.handleDragEnd,
                    e.props.leaveTimeOut,
                  ));
              }),
              me(ye(e), "handleEnterSlideOrTraveller", function () {
                e.setState({ isTextActive: !0 });
              }),
              me(ye(e), "handleLeaveSlideOrTraveller", function () {
                e.setState({ isTextActive: !1 });
              }),
              me(ye(e), "handleSlideDragStart", function (t) {
                var n = be(t) ? t.changedTouches[0] : t;
                e.setState({
                  isTravellerMoving: !1,
                  isSlideMoving: !0,
                  slideMoveStartX: n.pageX,
                }),
                  e.attachDragEndListener();
              }),
              (e.travellerDragStartHandlers = {
                startX: e.handleTravellerDragStart.bind(ye(e), "startX"),
                endX: e.handleTravellerDragStart.bind(ye(e), "endX"),
              }),
              (e.state = {}),
              e
            );
          }
          return (
            (e = s),
            (o = [
              {
                key: "renderDefaultTraveller",
                value: function (t) {
                  var e = t.x,
                    n = t.y,
                    o = t.width,
                    i = t.height,
                    a = t.stroke,
                    c = Math.floor(n + i / 2) - 1;
                  return r.createElement(
                    r.Fragment,
                    null,
                    r.createElement("rect", {
                      x: e,
                      y: n,
                      width: o,
                      height: i,
                      fill: a,
                      stroke: "none",
                    }),
                    r.createElement("line", {
                      x1: e + 1,
                      y1: c,
                      x2: e + o - 1,
                      y2: c,
                      fill: "none",
                      stroke: "#fff",
                    }),
                    r.createElement("line", {
                      x1: e + 1,
                      y1: c + 2,
                      x2: e + o - 1,
                      y2: c + 2,
                      fill: "none",
                      stroke: "#fff",
                    }),
                  );
                },
              },
              {
                key: "renderTraveller",
                value: function (t, e) {
                  return r.isValidElement(t)
                    ? r.cloneElement(t, e)
                    : c()(t)
                      ? t(e)
                      : s.renderDefaultTraveller(e);
                },
              },
              {
                key: "getDerivedStateFromProps",
                value: function (t, e) {
                  var n = t.data,
                    r = t.width,
                    o = t.x,
                    i = t.travellerWidth,
                    a = t.updateId,
                    c = t.startIndex,
                    u = t.endIndex;
                  if (n !== e.prevData || a !== e.prevUpdateId)
                    return pe(
                      {
                        prevData: n,
                        prevTravellerWidth: i,
                        prevUpdateId: a,
                        prevX: o,
                        prevWidth: r,
                      },
                      n && n.length
                        ? (function (t) {
                            var e = t.data,
                              n = t.startIndex,
                              r = t.endIndex,
                              o = t.x,
                              i = t.width,
                              a = t.travellerWidth;
                            if (!e || !e.length) return {};
                            var c = e.length,
                              u = (0, ne.x)()
                                .domain(l()(0, c))
                                .range([o, o + i - a]),
                              s = u.domain().map(function (t) {
                                return u(t);
                              });
                            return {
                              isTextActive: !1,
                              isSlideMoving: !1,
                              isTravellerMoving: !1,
                              isTravellerFocused: !1,
                              startX: u(n),
                              endX: u(r),
                              scale: u,
                              scaleValues: s,
                            };
                          })({
                            data: n,
                            width: r,
                            x: o,
                            travellerWidth: i,
                            startIndex: c,
                            endIndex: u,
                          })
                        : { scale: null, scaleValues: null },
                    );
                  if (
                    e.scale &&
                    (r !== e.prevWidth ||
                      o !== e.prevX ||
                      i !== e.prevTravellerWidth)
                  ) {
                    e.scale.range([o, o + r - i]);
                    var s = e.scale.domain().map(function (t) {
                      return e.scale(t);
                    });
                    return {
                      prevData: n,
                      prevTravellerWidth: i,
                      prevUpdateId: a,
                      prevX: o,
                      prevWidth: r,
                      startX: e.scale(t.startIndex),
                      endX: e.scale(t.endIndex),
                      scaleValues: s,
                    };
                  }
                  return null;
                },
              },
              {
                key: "getIndexInRange",
                value: function (t, e) {
                  for (var n = 0, r = t.length - 1; r - n > 1; ) {
                    var o = Math.floor((n + r) / 2);
                    t[o] > e ? (r = o) : (n = o);
                  }
                  return e >= t[r] ? r : n;
                },
              },
            ]),
            (n = [
              {
                key: "componentWillUnmount",
                value: function () {
                  this.leaveTimer &&
                    (clearTimeout(this.leaveTimer), (this.leaveTimer = null)),
                    this.detachDragEndListener();
                },
              },
              {
                key: "getIndex",
                value: function (t) {
                  var e = t.startX,
                    n = t.endX,
                    r = this.state.scaleValues,
                    o = this.props,
                    i = o.gap,
                    a = o.data.length - 1,
                    c = Math.min(e, n),
                    u = Math.max(e, n),
                    l = s.getIndexInRange(r, c),
                    f = s.getIndexInRange(r, u);
                  return {
                    startIndex: l - (l % i),
                    endIndex: f === a ? a : f - (f % i),
                  };
                },
              },
              {
                key: "getTextOfTick",
                value: function (t) {
                  var e = this.props,
                    n = e.data,
                    r = e.tickFormatter,
                    o = e.dataKey,
                    i = (0, re.F$)(n[t], o, t);
                  return c()(r) ? r(i, t) : i;
                },
              },
              {
                key: "attachDragEndListener",
                value: function () {
                  window.addEventListener("mouseup", this.handleDragEnd, !0),
                    window.addEventListener("touchend", this.handleDragEnd, !0),
                    window.addEventListener("mousemove", this.handleDrag, !0);
                },
              },
              {
                key: "detachDragEndListener",
                value: function () {
                  window.removeEventListener("mouseup", this.handleDragEnd, !0),
                    window.removeEventListener(
                      "touchend",
                      this.handleDragEnd,
                      !0,
                    ),
                    window.removeEventListener(
                      "mousemove",
                      this.handleDrag,
                      !0,
                    );
                },
              },
              {
                key: "handleSlideDrag",
                value: function (t) {
                  var e = this.state,
                    n = e.slideMoveStartX,
                    r = e.startX,
                    o = e.endX,
                    i = this.props,
                    a = i.x,
                    c = i.width,
                    u = i.travellerWidth,
                    l = i.startIndex,
                    s = i.endIndex,
                    f = i.onChange,
                    p = t.pageX - n;
                  p > 0
                    ? (p = Math.min(p, a + c - u - o, a + c - u - r))
                    : p < 0 && (p = Math.max(p, a - r, a - o));
                  var h = this.getIndex({ startX: r + p, endX: o + p });
                  (h.startIndex === l && h.endIndex === s) || !f || f(h),
                    this.setState({
                      startX: r + p,
                      endX: o + p,
                      slideMoveStartX: t.pageX,
                    });
                },
              },
              {
                key: "handleTravellerDragStart",
                value: function (t, e) {
                  var n = be(e) ? e.changedTouches[0] : e;
                  this.setState({
                    isSlideMoving: !1,
                    isTravellerMoving: !0,
                    movingTravellerId: t,
                    brushMoveStartX: n.pageX,
                  }),
                    this.attachDragEndListener();
                },
              },
              {
                key: "handleTravellerMove",
                value: function (t) {
                  var e,
                    n = this.state,
                    r = n.brushMoveStartX,
                    o = n.movingTravellerId,
                    i = n.endX,
                    a = n.startX,
                    c = this.state[o],
                    u = this.props,
                    l = u.x,
                    s = u.width,
                    f = u.travellerWidth,
                    p = u.onChange,
                    h = u.gap,
                    d = u.data,
                    y = { startX: this.state.startX, endX: this.state.endX },
                    v = t.pageX - r;
                  v > 0
                    ? (v = Math.min(v, l + s - f - c))
                    : v < 0 && (v = Math.max(v, l - c)),
                    (y[o] = c + v);
                  var m = this.getIndex(y),
                    g = m.startIndex,
                    b = m.endIndex;
                  this.setState(
                    (me((e = {}), o, c + v),
                    me(e, "brushMoveStartX", t.pageX),
                    e),
                    function () {
                      var t;
                      p &&
                        ((t = d.length - 1),
                        (("startX" === o &&
                          (i > a ? g % h == 0 : b % h == 0)) ||
                          (i < a && b === t) ||
                          ("endX" === o && (i > a ? b % h == 0 : g % h == 0)) ||
                          (i > a && b === t)) &&
                          p(m));
                    },
                  );
                },
              },
              {
                key: "handleTravellerMoveKeyboard",
                value: function (t, e) {
                  var n = this,
                    r = this.state,
                    o = r.scaleValues,
                    i = r.startX,
                    a = r.endX,
                    c = this.state[e],
                    u = o.indexOf(c);
                  if (-1 !== u) {
                    var l = u + t;
                    if (!(-1 === l || l >= o.length)) {
                      var s = o[l];
                      ("startX" === e && s >= a) ||
                        ("endX" === e && s <= i) ||
                        this.setState(me({}, e, s), function () {
                          n.props.onChange(
                            n.getIndex({
                              startX: n.state.startX,
                              endX: n.state.endX,
                            }),
                          );
                        });
                    }
                  }
                },
              },
              {
                key: "renderBackground",
                value: function () {
                  var t = this.props,
                    e = t.x,
                    n = t.y,
                    o = t.width,
                    i = t.height,
                    a = t.fill,
                    c = t.stroke;
                  return r.createElement("rect", {
                    stroke: c,
                    fill: a,
                    x: e,
                    y: n,
                    width: o,
                    height: i,
                  });
                },
              },
              {
                key: "renderPanorama",
                value: function () {
                  var t = this.props,
                    e = t.x,
                    n = t.y,
                    o = t.width,
                    i = t.height,
                    a = t.data,
                    c = t.children,
                    u = t.padding,
                    l = r.Children.only(c);
                  return l
                    ? r.cloneElement(l, {
                        x: e,
                        y: n,
                        width: o,
                        height: i,
                        margin: u,
                        compact: !0,
                        data: a,
                      })
                    : null;
                },
              },
              {
                key: "renderTravellerLayer",
                value: function (t, e) {
                  var n = this,
                    o = this.props,
                    i = o.y,
                    a = o.travellerWidth,
                    c = o.height,
                    u = o.traveller,
                    l = Math.max(t, this.props.x),
                    f = pe(
                      pe({}, (0, Pt.L6)(this.props)),
                      {},
                      { x: l, y: i, width: a, height: c },
                    );
                  return r.createElement(
                    Z.m,
                    {
                      tabIndex: 0,
                      role: "slider",
                      className: "recharts-brush-traveller",
                      onMouseEnter: this.handleEnterSlideOrTraveller,
                      onMouseLeave: this.handleLeaveSlideOrTraveller,
                      onMouseDown: this.travellerDragStartHandlers[e],
                      onTouchStart: this.travellerDragStartHandlers[e],
                      onKeyDown: function (t) {
                        ["ArrowLeft", "ArrowRight"].includes(t.key) &&
                          (t.preventDefault(),
                          t.stopPropagation(),
                          n.handleTravellerMoveKeyboard(
                            "ArrowRight" === t.key ? 1 : -1,
                            e,
                          ));
                      },
                      onFocus: function () {
                        n.setState({ isTravellerFocused: !0 });
                      },
                      onBlur: function () {
                        n.setState({ isTravellerFocused: !1 });
                      },
                      style: { cursor: "col-resize" },
                    },
                    s.renderTraveller(u, f),
                  );
                },
              },
              {
                key: "renderSlide",
                value: function (t, e) {
                  var n = this.props,
                    o = n.y,
                    i = n.height,
                    a = n.stroke,
                    c = n.travellerWidth,
                    u = Math.min(t, e) + c,
                    l = Math.max(Math.abs(e - t) - c, 0);
                  return r.createElement("rect", {
                    className: "recharts-brush-slide",
                    onMouseEnter: this.handleEnterSlideOrTraveller,
                    onMouseLeave: this.handleLeaveSlideOrTraveller,
                    onMouseDown: this.handleSlideDragStart,
                    onTouchStart: this.handleSlideDragStart,
                    style: { cursor: "move" },
                    stroke: "none",
                    fill: a,
                    fillOpacity: 0.2,
                    x: u,
                    y: o,
                    width: l,
                    height: i,
                  });
                },
              },
              {
                key: "renderText",
                value: function () {
                  var t = this.props,
                    e = t.startIndex,
                    n = t.endIndex,
                    o = t.y,
                    i = t.height,
                    a = t.travellerWidth,
                    c = t.stroke,
                    u = this.state,
                    l = u.startX,
                    s = u.endX,
                    f = { pointerEvents: "none", fill: c };
                  return r.createElement(
                    Z.m,
                    { className: "recharts-brush-texts" },
                    r.createElement(
                      $t.x,
                      se(
                        {
                          textAnchor: "end",
                          verticalAnchor: "middle",
                          x: Math.min(l, s) - 5,
                          y: o + i / 2,
                        },
                        f,
                      ),
                      this.getTextOfTick(e),
                    ),
                    r.createElement(
                      $t.x,
                      se(
                        {
                          textAnchor: "start",
                          verticalAnchor: "middle",
                          x: Math.max(l, s) + a + 5,
                          y: o + i / 2,
                        },
                        f,
                      ),
                      this.getTextOfTick(n),
                    ),
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    e = t.data,
                    n = t.className,
                    o = t.children,
                    i = t.x,
                    a = t.y,
                    c = t.width,
                    u = t.height,
                    l = t.alwaysShowText,
                    s = this.state,
                    f = s.startX,
                    p = s.endX,
                    h = s.isTextActive,
                    d = s.isSlideMoving,
                    y = s.isTravellerMoving,
                    v = s.isTravellerFocused;
                  if (
                    !e ||
                    !e.length ||
                    !(0, j.hj)(i) ||
                    !(0, j.hj)(a) ||
                    !(0, j.hj)(c) ||
                    !(0, j.hj)(u) ||
                    c <= 0 ||
                    u <= 0
                  )
                    return null;
                  var m,
                    g,
                    b,
                    w,
                    O = (0, x.Z)("recharts-brush", n),
                    S = 1 === r.Children.count(o),
                    E =
                      ((g = "none"),
                      (b = (m = "userSelect").replace(/(\w)/, function (t) {
                        return t.toUpperCase();
                      })),
                      ((w = ue.reduce(function (t, e) {
                        return ae(ae({}, t), {}, ce({}, e + b, g));
                      }, {}))[m] = g),
                      w);
                  return r.createElement(
                    Z.m,
                    {
                      className: O,
                      onMouseLeave: this.handleLeaveWrapper,
                      onTouchMove: this.handleTouchMove,
                      style: E,
                    },
                    this.renderBackground(),
                    S && this.renderPanorama(),
                    this.renderSlide(f, p),
                    this.renderTravellerLayer(f, "startX"),
                    this.renderTravellerLayer(p, "endX"),
                    (h || d || y || v || l) && this.renderText(),
                  );
                },
              },
            ]) && he(e.prototype, n),
            o && he(e, o),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            s
          );
        })(r.PureComponent);
      me(xe, "displayName", "Brush"),
        me(xe, "defaultProps", {
          height: 40,
          travellerWidth: 5,
          gap: 1,
          fill: "#fff",
          stroke: "#666",
          padding: { top: 1, right: 1, bottom: 1, left: 1 },
          leaveTimeOut: 1e3,
          alwaysShowText: !1,
        });
      var we = n(20430),
        Oe = function (t, e) {
          var n = t.alwaysShow,
            r = t.ifOverflow;
          return n && (r = "extendDomain"), r === e;
        },
        je = n(6213);
      function Se(t) {
        return (
          (Se =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Se(t)
        );
      }
      function Ee() {
        return (
          (Ee = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          Ee.apply(this, arguments)
        );
      }
      function Ae(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Pe(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Ae(Object(n), !0).forEach(function (e) {
                var r, o, i;
                (r = t),
                  (o = e),
                  (i = n[e]),
                  (o = (function (t) {
                    var e = (function (t, e) {
                      if ("object" !== Se(t) || null === t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, "string");
                        if ("object" !== Se(r)) return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return String(t);
                    })(t);
                    return "symbol" === Se(e) ? e : String(e);
                  })(o)) in r
                    ? Object.defineProperty(r, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[o] = i);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : Ae(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function ke(t) {
        var e = t.x,
          n = t.y,
          o = t.r,
          i = t.alwaysShow,
          a = t.clipPathId,
          c = (0, j.P2)(e),
          u = (0, j.P2)(n);
        if (
          ((0, je.Z)(
            void 0 === i,
            'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
          ),
          !c || !u)
        )
          return null;
        var l = (function (t) {
          var e = t.x,
            n = t.y,
            r = t.xAxis,
            o = t.yAxis,
            i = L({ x: r.scale, y: o.scale }),
            a = i.apply({ x: e, y: n }, { bandAware: !0 });
          return Oe(t, "discard") && !i.isInRange(a) ? null : a;
        })(t);
        if (!l) return null;
        var s = l.x,
          f = l.y,
          p = t.shape,
          h = t.className,
          d = Pe(
            Pe(
              { clipPath: Oe(t, "hidden") ? "url(#".concat(a, ")") : void 0 },
              (0, Pt.L6)(t, !0),
            ),
            {},
            { cx: s, cy: f },
          );
        return r.createElement(
          Z.m,
          { className: (0, x.Z)("recharts-reference-dot", h) },
          ke.renderDot(p, d),
          Ft._.renderCallByParent(t, {
            x: s - o,
            y: f - o,
            width: 2 * o,
            height: 2 * o,
          }),
        );
      }
      (ke.displayName = "ReferenceDot"),
        (ke.defaultProps = {
          isFront: !1,
          ifOverflow: "discard",
          xAxisId: 0,
          yAxisId: 0,
          r: 10,
          fill: "#fff",
          stroke: "#ccc",
          fillOpacity: 1,
          strokeWidth: 1,
        }),
        (ke.renderDot = function (t, e) {
          return r.isValidElement(t)
            ? r.cloneElement(t, e)
            : c()(t)
              ? t(e)
              : r.createElement(
                  Rt,
                  Ee({}, e, {
                    cx: e.cx,
                    cy: e.cy,
                    className: "recharts-reference-dot-dot",
                  }),
                );
        });
      var Me = n(59704),
        Te = n.n(Me);
      function _e(t) {
        return (
          (_e =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          _e(t)
        );
      }
      function Ce(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Ne(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Ce(Object(n), !0).forEach(function (e) {
                var r, o, i;
                (r = t),
                  (o = e),
                  (i = n[e]),
                  (o = (function (t) {
                    var e = (function (t, e) {
                      if ("object" !== _e(t) || null === t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, "string");
                        if ("object" !== _e(r)) return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return String(t);
                    })(t);
                    return "symbol" === _e(e) ? e : String(e);
                  })(o)) in r
                    ? Object.defineProperty(r, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[o] = i);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : Ce(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function De(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function Ie() {
        return (
          (Ie = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          Ie.apply(this, arguments)
        );
      }
      function Le(t) {
        var e = t.x,
          n = t.y,
          o = t.segment,
          i = t.xAxis,
          a = t.yAxis,
          u = t.shape,
          l = t.className,
          s = t.alwaysShow,
          f = t.clipPathId;
        (0, je.Z)(
          void 0 === s,
          'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
        );
        var p = (function (t, e, n, r, o) {
          var i = o.viewBox,
            a = i.x,
            c = i.y,
            u = i.width,
            l = i.height,
            s = o.position;
          if (n) {
            var f = o.y,
              p = o.yAxis.orientation,
              h = t.y.apply(f, { position: s });
            if (Oe(o, "discard") && !t.y.isInRange(h)) return null;
            var d = [
              { x: a + u, y: h },
              { x: a, y: h },
            ];
            return "left" === p ? d.reverse() : d;
          }
          if (e) {
            var y = o.x,
              v = o.xAxis.orientation,
              m = t.x.apply(y, { position: s });
            if (Oe(o, "discard") && !t.x.isInRange(m)) return null;
            var g = [
              { x: m, y: c + l },
              { x: m, y: c },
            ];
            return "top" === v ? g.reverse() : g;
          }
          if (r) {
            var b = o.segment.map(function (e) {
              return t.apply(e, { position: s });
            });
            return Oe(o, "discard") &&
              Te()(b, function (e) {
                return !t.isInRange(e);
              })
              ? null
              : b;
          }
          return null;
        })(
          L({ x: i.scale, y: a.scale }),
          (0, j.P2)(e),
          (0, j.P2)(n),
          o && 2 === o.length,
          t,
        );
        if (!p) return null;
        var h,
          d,
          y,
          v =
            ((d = 2),
            (function (t) {
              if (Array.isArray(t)) return t;
            })((h = p)) ||
              (function (t, e) {
                var n =
                  null == t
                    ? null
                    : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                      t["@@iterator"];
                if (null != n) {
                  var r,
                    o,
                    i,
                    a,
                    c = [],
                    u = !0,
                    l = !1;
                  try {
                    if (((i = (n = n.call(t)).next), 0 === e)) {
                      if (Object(n) !== n) return;
                      u = !1;
                    } else
                      for (
                        ;
                        !(u = (r = i.call(n)).done) &&
                        (c.push(r.value), c.length !== e);
                        u = !0
                      );
                  } catch (t) {
                    (l = !0), (o = t);
                  } finally {
                    try {
                      if (
                        !u &&
                        null != n.return &&
                        ((a = n.return()), Object(a) !== a)
                      )
                        return;
                    } finally {
                      if (l) throw o;
                    }
                  }
                  return c;
                }
              })(h, d) ||
              (function (t, e) {
                if (t) {
                  if ("string" == typeof t) return De(t, e);
                  var n = Object.prototype.toString.call(t).slice(8, -1);
                  return (
                    "Object" === n && t.constructor && (n = t.constructor.name),
                    "Map" === n || "Set" === n
                      ? Array.from(t)
                      : "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? De(t, e)
                        : void 0
                  );
                }
              })(h, d) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
              })()),
          m = v[0],
          g = m.x,
          b = m.y,
          w = v[1],
          O = w.x,
          S = w.y,
          E = Ne(
            Ne(
              { clipPath: Oe(t, "hidden") ? "url(#".concat(f, ")") : void 0 },
              (0, Pt.L6)(t, !0),
            ),
            {},
            { x1: g, y1: b, x2: O, y2: S },
          );
        return r.createElement(
          Z.m,
          { className: (0, x.Z)("recharts-reference-line", l) },
          (function (t, e) {
            return r.isValidElement(t)
              ? r.cloneElement(t, e)
              : c()(t)
                ? t(e)
                : r.createElement(
                    "line",
                    Ie({}, e, { className: "recharts-reference-line-line" }),
                  );
          })(u, E),
          Ft._.renderCallByParent(
            t,
            D(
              { x: (y = { x1: g, y1: b, x2: O, y2: S }).x1, y: y.y1 },
              { x: y.x2, y: y.y2 },
            ),
          ),
        );
      }
      function Re(t) {
        return (
          (Re =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Re(t)
        );
      }
      function Be() {
        return (
          (Be = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          Be.apply(this, arguments)
        );
      }
      function Ue(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function $e(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Ue(Object(n), !0).forEach(function (e) {
                var r, o, i;
                (r = t),
                  (o = e),
                  (i = n[e]),
                  (o = (function (t) {
                    var e = (function (t, e) {
                      if ("object" !== Re(t) || null === t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, "string");
                        if ("object" !== Re(r)) return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return String(t);
                    })(t);
                    return "symbol" === Re(e) ? e : String(e);
                  })(o)) in r
                    ? Object.defineProperty(r, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[o] = i);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : Ue(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function Fe(t) {
        var e = t.x1,
          n = t.x2,
          o = t.y1,
          i = t.y2,
          a = t.className,
          c = t.alwaysShow,
          u = t.clipPathId;
        (0, je.Z)(
          void 0 === c,
          'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
        );
        var l = (0, j.P2)(e),
          s = (0, j.P2)(n),
          f = (0, j.P2)(o),
          p = (0, j.P2)(i),
          h = t.shape;
        if (!(l || s || f || p || h)) return null;
        var d = (function (t, e, n, r, o) {
          var i = o.x1,
            a = o.x2,
            c = o.y1,
            u = o.y2,
            l = o.xAxis,
            s = o.yAxis;
          if (!l || !s) return null;
          var f = L({ x: l.scale, y: s.scale }),
            p = {
              x: t ? f.x.apply(i, { position: "start" }) : f.x.rangeMin,
              y: n ? f.y.apply(c, { position: "start" }) : f.y.rangeMin,
            },
            h = {
              x: e ? f.x.apply(a, { position: "end" }) : f.x.rangeMax,
              y: r ? f.y.apply(u, { position: "end" }) : f.y.rangeMax,
            };
          return !Oe(o, "discard") || (f.isInRange(p) && f.isInRange(h))
            ? D(p, h)
            : null;
        })(l, s, f, p, t);
        if (!d && !h) return null;
        var y = Oe(t, "hidden") ? "url(#".concat(u, ")") : void 0;
        return r.createElement(
          Z.m,
          { className: (0, x.Z)("recharts-reference-area", a) },
          Fe.renderRect(h, $e($e({ clipPath: y }, (0, Pt.L6)(t, !0)), d)),
          Ft._.renderCallByParent(t, d),
        );
      }
      function ze(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return We(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return We(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? We(t, e)
                    : void 0
              );
            }
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function We(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      (Le.displayName = "ReferenceLine"),
        (Le.defaultProps = {
          isFront: !1,
          ifOverflow: "discard",
          xAxisId: 0,
          yAxisId: 0,
          fill: "none",
          stroke: "#ccc",
          fillOpacity: 1,
          strokeWidth: 1,
          position: "middle",
        }),
        (Fe.displayName = "ReferenceArea"),
        (Fe.defaultProps = {
          isFront: !1,
          ifOverflow: "discard",
          xAxisId: 0,
          yAxisId: 0,
          r: 10,
          fill: "#ccc",
          fillOpacity: 0.5,
          stroke: "none",
          strokeWidth: 1,
        }),
        (Fe.renderRect = function (t, e) {
          return r.isValidElement(t)
            ? r.cloneElement(t, e)
            : c()(t)
              ? t(e)
              : r.createElement(
                  Bt.A,
                  Be({}, e, { className: "recharts-reference-area-rect" }),
                );
        });
      var Ze = function (t, e, n, r, o) {
          var i = (0, Pt.NN)(t, Le),
            a = (0, Pt.NN)(t, ke),
            c = [].concat(ze(i), ze(a)),
            u = (0, Pt.NN)(t, Fe),
            l = "".concat(r, "Id"),
            s = r[0],
            f = e;
          if (
            (c.length &&
              (f = c.reduce(function (t, e) {
                if (
                  e.props[l] === n &&
                  Oe(e.props, "extendDomain") &&
                  (0, j.hj)(e.props[s])
                ) {
                  var r = e.props[s];
                  return [Math.min(t[0], r), Math.max(t[1], r)];
                }
                return t;
              }, f)),
            u.length)
          ) {
            var p = "".concat(s, "1"),
              h = "".concat(s, "2");
            f = u.reduce(function (t, e) {
              if (
                e.props[l] === n &&
                Oe(e.props, "extendDomain") &&
                (0, j.hj)(e.props[p]) &&
                (0, j.hj)(e.props[h])
              ) {
                var r = e.props[p],
                  o = e.props[h];
                return [Math.min(t[0], r, o), Math.max(t[1], r, o)];
              }
              return t;
            }, f);
          }
          return (
            o &&
              o.length &&
              (f = o.reduce(function (t, e) {
                return (0, j.hj)(e)
                  ? [Math.min(t[0], e), Math.max(t[1], e)]
                  : t;
              }, f)),
            f
          );
        },
        qe = n(26729),
        Ge = new (n.n(qe)())(),
        Xe = "recharts.syncMouseEvents";
      function Ye(t) {
        return (
          (Ye =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Ye(t)
        );
      }
      function He(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Ke(r.key), r);
        }
      }
      function Ve(t, e, n) {
        return (
          (e = Ke(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function Ke(t) {
        var e = (function (t, e) {
          if ("object" !== Ye(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" !== Ye(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" === Ye(e) ? e : String(e);
      }
      var Je = (function () {
          function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              Ve(this, "activeIndex", 0),
              Ve(this, "coordinateList", []),
              Ve(this, "layout", "horizontal");
          }
          var e, n;
          return (
            (e = t),
            (n = [
              {
                key: "setDetails",
                value: function (t) {
                  var e = t.coordinateList,
                    n = void 0 === e ? [] : e,
                    r = t.container,
                    o = void 0 === r ? null : r,
                    i = t.layout,
                    a = void 0 === i ? null : i,
                    c = t.offset,
                    u = void 0 === c ? null : c,
                    l = t.mouseHandlerCallback,
                    s = void 0 === l ? null : l;
                  (this.coordinateList = null != n ? n : this.coordinateList),
                    (this.container = null != o ? o : this.container),
                    (this.layout = null != a ? a : this.layout),
                    (this.offset = null != u ? u : this.offset),
                    (this.mouseHandlerCallback =
                      null != s ? s : this.mouseHandlerCallback),
                    (this.activeIndex = Math.min(
                      Math.max(this.activeIndex, 0),
                      this.coordinateList.length - 1,
                    ));
                },
              },
              {
                key: "focus",
                value: function () {
                  this.spoofMouse();
                },
              },
              {
                key: "keyboardEvent",
                value: function (t) {
                  if (0 !== this.coordinateList.length)
                    switch (t.key) {
                      case "ArrowRight":
                        if ("horizontal" !== this.layout) return;
                        (this.activeIndex = Math.min(
                          this.activeIndex + 1,
                          this.coordinateList.length - 1,
                        )),
                          this.spoofMouse();
                        break;
                      case "ArrowLeft":
                        if ("horizontal" !== this.layout) return;
                        (this.activeIndex = Math.max(this.activeIndex - 1, 0)),
                          this.spoofMouse();
                    }
                },
              },
              {
                key: "spoofMouse",
                value: function () {
                  var t, e;
                  if (
                    "horizontal" === this.layout &&
                    0 !== this.coordinateList.length
                  ) {
                    var n = this.container.getBoundingClientRect(),
                      r = n.x,
                      o = n.y,
                      i = n.height,
                      a = this.coordinateList[this.activeIndex].coordinate,
                      c =
                        (null === (t = window) || void 0 === t
                          ? void 0
                          : t.scrollX) || 0,
                      u =
                        (null === (e = window) || void 0 === e
                          ? void 0
                          : e.scrollY) || 0,
                      l = r + a + c,
                      s = o + this.offset.top + i / 2 + u;
                    this.mouseHandlerCallback({ pageX: l, pageY: s });
                  }
                },
              },
            ]) && He(e.prototype, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t
          );
        })(),
        Qe = n(85653);
      function tn(t, e, n) {
        var r, o, i, a;
        if ("horizontal" === t)
          (i = r = e.x), (o = n.top), (a = n.top + n.height);
        else if ("vertical" === t)
          (a = o = e.y), (r = n.left), (i = n.left + n.width);
        else if (null != e.cx && null != e.cy) {
          if ("centric" !== t) return O(e);
          var c = e.cx,
            u = e.cy,
            l = e.innerRadius,
            s = e.outerRadius,
            f = e.angle,
            p = (0, w.op)(c, u, l, f),
            h = (0, w.op)(c, u, s, f);
          (r = p.x), (o = p.y), (i = h.x), (a = h.y);
        }
        return [
          { x: r, y: o },
          { x: i, y: a },
        ];
      }
      var en = ["item"],
        nn = [
          "children",
          "className",
          "width",
          "height",
          "style",
          "compact",
          "title",
          "desc",
        ];
      function rn(t) {
        return (
          (rn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          rn(t)
        );
      }
      function on(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                o,
                i,
                a,
                c = [],
                u = !0,
                l = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = i.call(n)).done) &&
                    (c.push(r.value), c.length !== e);
                    u = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
                }
              }
              return c;
            }
          })(t, e) ||
          hn(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function an() {
        return (
          (an = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          an.apply(this, arguments)
        );
      }
      function cn(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
      }
      function un(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, gn(r.key), r);
        }
      }
      function ln(t, e) {
        return (
          (ln = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          ln(t, e)
        );
      }
      function sn(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function fn(t) {
        return (
          (fn = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          fn(t)
        );
      }
      function pn(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return dn(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          hn(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function hn(t, e) {
        if (t) {
          if ("string" == typeof t) return dn(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? dn(t, e)
                : void 0
          );
        }
      }
      function dn(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function yn(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function vn(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? yn(Object(n), !0).forEach(function (e) {
                mn(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : yn(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function mn(t, e, n) {
        return (
          (e = gn(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function gn(t) {
        var e = (function (t, e) {
          if ("object" !== rn(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" !== rn(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" === rn(e) ? e : String(e);
      }
      var bn = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
        xn = { width: "100%", height: "100%" },
        wn = { x: 0, y: 0 },
        On = function (t, e) {
          var n = e.graphicalItems,
            r = e.dataStartIndex,
            o = e.dataEndIndex,
            i = (null != n ? n : []).reduce(function (t, e) {
              var n = e.props.data;
              return n && n.length ? [].concat(pn(t), pn(n)) : t;
            }, []);
          return i.length > 0
            ? i
            : t && t.length && (0, j.hj)(r) && (0, j.hj)(o)
              ? t.slice(r, o + 1)
              : [];
        };
      function jn(t) {
        return "number" === t ? [0, "auto"] : void 0;
      }
      var Sn = function (t, e, n, r) {
          var o = t.graphicalItems,
            i = t.tooltipAxis,
            a = On(e, t);
          return n < 0 || !o || !o.length || n >= a.length
            ? null
            : o.reduce(function (o, c) {
                var u;
                if (c.props.hide) return o;
                var l,
                  s = null !== (u = c.props.data) && void 0 !== u ? u : e;
                if (
                  (s &&
                    t.dataStartIndex + t.dataEndIndex !== 0 &&
                    (s = s.slice(t.dataStartIndex, t.dataEndIndex + 1)),
                  i.dataKey && !i.allowDuplicatedCategory)
                ) {
                  var f = void 0 === s ? a : s;
                  l = (0, j.Ap)(f, i.dataKey, r);
                } else l = (s && s[n]) || a[n];
                return l ? [].concat(pn(o), [(0, re.Qo)(c, l)]) : o;
              }, []);
        },
        En = function (t, e, n, r) {
          var o = r || { x: t.chartX, y: t.chartY },
            i = (function (t, e) {
              return "horizontal" === e
                ? t.x
                : "vertical" === e
                  ? t.y
                  : "centric" === e
                    ? t.angle
                    : t.radius;
            })(o, n),
            a = t.orderedTooltipTicks,
            c = t.tooltipAxis,
            u = t.tooltipTicks,
            l = (0, re.VO)(i, a, u, c);
          if (l >= 0 && u) {
            var s = u[l] && u[l].value,
              f = Sn(t, e, l, s),
              p = (function (t, e, n, r) {
                var o = e.find(function (t) {
                  return t && t.index === n;
                });
                if (o) {
                  if ("horizontal" === t) return { x: o.coordinate, y: r.y };
                  if ("vertical" === t) return { x: r.x, y: o.coordinate };
                  if ("centric" === t) {
                    var i = o.coordinate,
                      a = r.radius;
                    return vn(
                      vn(vn({}, r), (0, w.op)(r.cx, r.cy, a, i)),
                      {},
                      { angle: i, radius: a },
                    );
                  }
                  var c = o.coordinate,
                    u = r.angle;
                  return vn(
                    vn(vn({}, r), (0, w.op)(r.cx, r.cy, c, u)),
                    {},
                    { angle: u, radius: c },
                  );
                }
                return wn;
              })(n, a, l, o);
            return {
              activeTooltipIndex: l,
              activeLabel: s,
              activePayload: f,
              activeCoordinate: p,
            };
          }
          return null;
        },
        An = function (t, e) {
          var n = e.axisType,
            r = void 0 === n ? "xAxis" : n,
            o = e.AxisComp,
            a = e.graphicalItems,
            c = e.stackGroups,
            u = e.dataStartIndex,
            s = e.dataEndIndex,
            p = t.children,
            h = "".concat(r, "Id"),
            d = (0, Pt.NN)(p, o),
            y = {};
          return (
            d && d.length
              ? (y = (function (t, e) {
                  var n = e.axes,
                    r = e.graphicalItems,
                    o = e.axisType,
                    a = e.axisIdKey,
                    c = e.stackGroups,
                    u = e.dataStartIndex,
                    s = e.dataEndIndex,
                    f = t.layout,
                    p = t.children,
                    h = t.stackOffset,
                    d = (0, re.NA)(f, o);
                  return n.reduce(function (e, n) {
                    var y,
                      v = n.props,
                      m = v.type,
                      g = v.dataKey,
                      b = v.allowDataOverflow,
                      x = v.allowDuplicatedCategory,
                      w = v.scale,
                      O = v.ticks,
                      S = v.includeHidden,
                      E = n.props[a];
                    if (e[E]) return e;
                    var A,
                      P,
                      k,
                      M = On(t.data, {
                        graphicalItems: r.filter(function (t) {
                          return t.props[a] === E;
                        }),
                        dataStartIndex: u,
                        dataEndIndex: s,
                      }),
                      T = M.length;
                    (function (t, e, n) {
                      if ("number" === n && !0 === e && Array.isArray(t)) {
                        var r = null == t ? void 0 : t[0],
                          o = null == t ? void 0 : t[1];
                        if (r && o && (0, j.hj)(r) && (0, j.hj)(o)) return !0;
                      }
                      return !1;
                    })(n.props.domain, b, m) &&
                      ((A = (0, re.LG)(n.props.domain, null, b)),
                      !d ||
                        ("number" !== m && "auto" === w) ||
                        (k = (0, re.gF)(M, g, "category")));
                    var _ = jn(m);
                    if (!A || 0 === A.length) {
                      var C,
                        N =
                          null !== (C = n.props.domain) && void 0 !== C ? C : _;
                      if (g) {
                        if (
                          ((A = (0, re.gF)(M, g, m)), "category" === m && d)
                        ) {
                          var D = (0, j.bv)(A);
                          x && D
                            ? ((P = A), (A = l()(0, T)))
                            : x ||
                              (A = (0, re.ko)(N, A, n).reduce(function (t, e) {
                                return t.indexOf(e) >= 0
                                  ? t
                                  : [].concat(pn(t), [e]);
                              }, []));
                        } else if ("category" === m)
                          A = x
                            ? A.filter(function (t) {
                                return "" !== t && !i()(t);
                              })
                            : (0, re.ko)(N, A, n).reduce(function (t, e) {
                                return t.indexOf(e) >= 0 || "" === e || i()(e)
                                  ? t
                                  : [].concat(pn(t), [e]);
                              }, []);
                        else if ("number" === m) {
                          var I = (0, re.ZI)(
                            M,
                            r.filter(function (t) {
                              return t.props[a] === E && (S || !t.props.hide);
                            }),
                            g,
                            o,
                            f,
                          );
                          I && (A = I);
                        }
                        !d ||
                          ("number" !== m && "auto" === w) ||
                          (k = (0, re.gF)(M, g, "category"));
                      } else
                        A = d
                          ? l()(0, T)
                          : c && c[E] && c[E].hasStack && "number" === m
                            ? "expand" === h
                              ? [0, 1]
                              : (0, re.EB)(c[E].stackGroups, u, s)
                            : (0, re.s6)(
                                M,
                                r.filter(function (t) {
                                  return (
                                    t.props[a] === E && (S || !t.props.hide)
                                  );
                                }),
                                m,
                                f,
                                !0,
                              );
                      if ("number" === m)
                        (A = Ze(p, A, E, o, O)), N && (A = (0, re.LG)(N, A, b));
                      else if ("category" === m && N) {
                        var L = N;
                        A.every(function (t) {
                          return L.indexOf(t) >= 0;
                        }) && (A = L);
                      }
                    }
                    return vn(
                      vn({}, e),
                      {},
                      mn(
                        {},
                        E,
                        vn(
                          vn({}, n.props),
                          {},
                          {
                            axisType: o,
                            domain: A,
                            categoricalDomain: k,
                            duplicateDomain: P,
                            originalDomain:
                              null !== (y = n.props.domain) && void 0 !== y
                                ? y
                                : _,
                            isCategorical: d,
                            layout: f,
                          },
                        ),
                      ),
                    );
                  }, {});
                })(t, {
                  axes: d,
                  graphicalItems: a,
                  axisType: r,
                  axisIdKey: h,
                  stackGroups: c,
                  dataStartIndex: u,
                  dataEndIndex: s,
                }))
              : a &&
                a.length &&
                (y = (function (t, e) {
                  var n = e.graphicalItems,
                    r = e.Axis,
                    o = e.axisType,
                    i = e.axisIdKey,
                    a = e.stackGroups,
                    c = e.dataStartIndex,
                    u = e.dataEndIndex,
                    s = t.layout,
                    p = t.children,
                    h = On(t.data, {
                      graphicalItems: n,
                      dataStartIndex: c,
                      dataEndIndex: u,
                    }),
                    d = h.length,
                    y = (0, re.NA)(s, o),
                    v = -1;
                  return n.reduce(function (t, e) {
                    var m,
                      g = e.props[i],
                      b = jn("number");
                    return t[g]
                      ? t
                      : (v++,
                        y
                          ? (m = l()(0, d))
                          : a && a[g] && a[g].hasStack
                            ? ((m = (0, re.EB)(a[g].stackGroups, c, u)),
                              (m = Ze(p, m, g, o)))
                            : ((m = (0, re.LG)(
                                b,
                                (0, re.s6)(
                                  h,
                                  n.filter(function (t) {
                                    return t.props[i] === g && !t.props.hide;
                                  }),
                                  "number",
                                  s,
                                ),
                                r.defaultProps.allowDataOverflow,
                              )),
                              (m = Ze(p, m, g, o))),
                        vn(
                          vn({}, t),
                          {},
                          mn(
                            {},
                            g,
                            vn(
                              vn({ axisType: o }, r.defaultProps),
                              {},
                              {
                                hide: !0,
                                orientation: f()(
                                  bn,
                                  "".concat(o, ".").concat(v % 2),
                                  null,
                                ),
                                domain: m,
                                originalDomain: b,
                                isCategorical: y,
                                layout: s,
                              },
                            ),
                          ),
                        ));
                  }, {});
                })(t, {
                  Axis: o,
                  graphicalItems: a,
                  axisType: r,
                  axisIdKey: h,
                  stackGroups: c,
                  dataStartIndex: u,
                  dataEndIndex: s,
                })),
            y
          );
        },
        Pn = function (t) {
          var e,
            n,
            r = t.children,
            o = t.defaultShowTooltip,
            i = (0, Pt.sP)(r, xe);
          return {
            chartX: 0,
            chartY: 0,
            dataStartIndex: (i && i.props && i.props.startIndex) || 0,
            dataEndIndex:
              void 0 !==
              (null == i || null === (e = i.props) || void 0 === e
                ? void 0
                : e.endIndex)
                ? null == i || null === (n = i.props) || void 0 === n
                  ? void 0
                  : n.endIndex
                : (t.data && t.data.length - 1) || 0,
            activeTooltipIndex: -1,
            isTooltipActive: Boolean(o),
          };
        },
        kn = function (t) {
          return "horizontal" === t
            ? { numericAxisName: "yAxis", cateAxisName: "xAxis" }
            : "vertical" === t
              ? { numericAxisName: "xAxis", cateAxisName: "yAxis" }
              : "centric" === t
                ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" }
                : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
        },
        Mn = ["points", "className", "baseLinePoints", "connectNulls"];
      function Tn() {
        return (
          (Tn = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          Tn.apply(this, arguments)
        );
      }
      function _n(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Cn(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return Cn(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Cn(t, e)
                    : void 0
              );
            }
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Cn(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var Nn = function (t) {
          return t && t.x === +t.x && t.y === +t.y;
        },
        Dn = function (t, e) {
          var n = (function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              e = [[]];
            return (
              t.forEach(function (t) {
                Nn(t)
                  ? e[e.length - 1].push(t)
                  : e[e.length - 1].length > 0 && e.push([]);
              }),
              Nn(t[0]) && e[e.length - 1].push(t[0]),
              e[e.length - 1].length <= 0 && (e = e.slice(0, -1)),
              e
            );
          })(t);
          e &&
            (n = [
              n.reduce(function (t, e) {
                return [].concat(_n(t), _n(e));
              }, []),
            ]);
          var r = n
            .map(function (t) {
              return t.reduce(function (t, e, n) {
                return ""
                  .concat(t)
                  .concat(0 === n ? "M" : "L")
                  .concat(e.x, ",")
                  .concat(e.y);
              }, "");
            })
            .join("");
          return 1 === n.length ? "".concat(r, "Z") : r;
        },
        In = function (t) {
          var e = t.points,
            n = t.className,
            o = t.baseLinePoints,
            i = t.connectNulls,
            a = (function (t, e) {
              if (null == t) return {};
              var n,
                r,
                o = (function (t, e) {
                  if (null == t) return {};
                  var n,
                    r,
                    o = {},
                    i = Object.keys(t);
                  for (r = 0; r < i.length; r++)
                    (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                  return o;
                })(t, e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (r = 0; r < i.length; r++)
                  (n = i[r]),
                    e.indexOf(n) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(t, n) &&
                        (o[n] = t[n]));
              }
              return o;
            })(t, Mn);
          if (!e || !e.length) return null;
          var c = (0, x.Z)("recharts-polygon", n);
          if (o && o.length) {
            var u = a.stroke && "none" !== a.stroke,
              l = (function (t, e, n) {
                var r = Dn(t, n);
                return ""
                  .concat("Z" === r.slice(-1) ? r.slice(0, -1) : r, "L")
                  .concat(Dn(e.reverse(), n).slice(1));
              })(e, o, i);
            return r.createElement(
              "g",
              { className: c },
              r.createElement(
                "path",
                Tn({}, (0, Pt.L6)(a, !0), {
                  fill: "Z" === l.slice(-1) ? a.fill : "none",
                  stroke: "none",
                  d: l,
                }),
              ),
              u
                ? r.createElement(
                    "path",
                    Tn({}, (0, Pt.L6)(a, !0), { fill: "none", d: Dn(e, i) }),
                  )
                : null,
              u
                ? r.createElement(
                    "path",
                    Tn({}, (0, Pt.L6)(a, !0), { fill: "none", d: Dn(o, i) }),
                  )
                : null,
            );
          }
          var s = Dn(e, i);
          return r.createElement(
            "path",
            Tn({}, (0, Pt.L6)(a, !0), {
              fill: "Z" === s.slice(-1) ? a.fill : "none",
              className: c,
              d: s,
            }),
          );
        };
      function Ln(t) {
        return (
          (Ln =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Ln(t)
        );
      }
      function Rn() {
        return (
          (Rn = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          Rn.apply(this, arguments)
        );
      }
      function Bn(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Un(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Bn(Object(n), !0).forEach(function (e) {
                Wn(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : Bn(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function $n(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Zn(r.key), r);
        }
      }
      function Fn(t, e) {
        return (
          (Fn = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          Fn(t, e)
        );
      }
      function zn(t) {
        return (
          (zn = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          zn(t)
        );
      }
      function Wn(t, e, n) {
        return (
          (e = Zn(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function Zn(t) {
        var e = (function (t, e) {
          if ("object" !== Ln(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" !== Ln(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" === Ln(e) ? e : String(e);
      }
      var qn = Math.PI / 180,
        Gn = 1e-5,
        Xn = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Fn(t, e);
          })(l, t);
          var e,
            n,
            o,
            i,
            a,
            u =
              ((i = l),
              (a = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {}),
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()),
              function () {
                var t,
                  e = zn(i);
                if (a) {
                  var n = zn(this).constructor;
                  t = Reflect.construct(e, arguments, n);
                } else t = e.apply(this, arguments);
                return (function (t, e) {
                  if (e && ("object" === Ln(e) || "function" == typeof e))
                    return e;
                  if (void 0 !== e)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined",
                    );
                  return (function (t) {
                    if (void 0 === t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return t;
                  })(t);
                })(this, t);
              });
          function l() {
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, l),
              u.apply(this, arguments)
            );
          }
          return (
            (e = l),
            (o = [
              {
                key: "renderTickItem",
                value: function (t, e, n) {
                  return r.isValidElement(t)
                    ? r.cloneElement(t, e)
                    : c()(t)
                      ? t(e)
                      : r.createElement(
                          $t.x,
                          Rn({}, e, {
                            className: "recharts-polar-angle-axis-tick-value",
                          }),
                          n,
                        );
                },
              },
            ]),
            (n = [
              {
                key: "getTickLineCoord",
                value: function (t) {
                  var e = this.props,
                    n = e.cx,
                    r = e.cy,
                    o = e.radius,
                    i = e.orientation,
                    a = e.tickSize || 8,
                    c = (0, w.op)(n, r, o, t.coordinate),
                    u = (0, w.op)(
                      n,
                      r,
                      o + ("inner" === i ? -1 : 1) * a,
                      t.coordinate,
                    );
                  return { x1: c.x, y1: c.y, x2: u.x, y2: u.y };
                },
              },
              {
                key: "getTickTextAnchor",
                value: function (t) {
                  var e = this.props.orientation,
                    n = Math.cos(-t.coordinate * qn);
                  return n > Gn
                    ? "outer" === e
                      ? "start"
                      : "end"
                    : n < -Gn
                      ? "outer" === e
                        ? "end"
                        : "start"
                      : "middle";
                },
              },
              {
                key: "renderAxisLine",
                value: function () {
                  var t = this.props,
                    e = t.cx,
                    n = t.cy,
                    o = t.radius,
                    i = t.axisLine,
                    a = t.axisLineType,
                    c = Un(
                      Un({}, (0, Pt.L6)(this.props)),
                      {},
                      { fill: "none" },
                      (0, Pt.L6)(i),
                    );
                  if ("circle" === a)
                    return r.createElement(
                      Rt,
                      Rn({ className: "recharts-polar-angle-axis-line" }, c, {
                        cx: e,
                        cy: n,
                        r: o,
                      }),
                    );
                  var u = this.props.ticks.map(function (t) {
                    return (0, w.op)(e, n, o, t.coordinate);
                  });
                  return r.createElement(
                    In,
                    Rn({ className: "recharts-polar-angle-axis-line" }, c, {
                      points: u,
                    }),
                  );
                },
              },
              {
                key: "renderTicks",
                value: function () {
                  var t = this,
                    e = this.props,
                    n = e.ticks,
                    o = e.tick,
                    i = e.tickLine,
                    a = e.tickFormatter,
                    c = e.stroke,
                    u = (0, Pt.L6)(this.props),
                    s = (0, Pt.L6)(o),
                    f = Un(Un({}, u), {}, { fill: "none" }, (0, Pt.L6)(i)),
                    p = n.map(function (e, n) {
                      var p = t.getTickLineCoord(e),
                        h = Un(
                          Un(
                            Un({ textAnchor: t.getTickTextAnchor(e) }, u),
                            {},
                            { stroke: "none", fill: c },
                            s,
                          ),
                          {},
                          { index: n, payload: e, x: p.x2, y: p.y2 },
                        );
                      return r.createElement(
                        Z.m,
                        Rn(
                          {
                            className: "recharts-polar-angle-axis-tick",
                            key: "tick-".concat(n),
                          },
                          (0, It.bw)(t.props, e, n),
                        ),
                        i &&
                          r.createElement(
                            "line",
                            Rn(
                              {
                                className:
                                  "recharts-polar-angle-axis-tick-line",
                              },
                              f,
                              p,
                            ),
                          ),
                        o &&
                          l.renderTickItem(o, h, a ? a(e.value, n) : e.value),
                      );
                    });
                  return r.createElement(
                    Z.m,
                    { className: "recharts-polar-angle-axis-ticks" },
                    p,
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    e = t.ticks,
                    n = t.radius,
                    o = t.axisLine;
                  return n <= 0 || !e || !e.length
                    ? null
                    : r.createElement(
                        Z.m,
                        { className: "recharts-polar-angle-axis" },
                        o && this.renderAxisLine(),
                        this.renderTicks(),
                      );
                },
              },
            ]) && $n(e.prototype, n),
            o && $n(e, o),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            l
          );
        })(r.PureComponent);
      Wn(Xn, "displayName", "PolarAngleAxis"),
        Wn(Xn, "axisType", "angleAxis"),
        Wn(Xn, "defaultProps", {
          type: "category",
          angleAxisId: 0,
          scale: "auto",
          cx: 0,
          cy: 0,
          orientation: "outer",
          axisLine: !0,
          tickLine: !0,
          tickSize: 8,
          tick: !0,
          hide: !1,
          allowDuplicatedCategory: !0,
        });
      var Yn = n(84753),
        Hn = n.n(Yn),
        Vn = n(22762),
        Kn = n.n(Vn),
        Jn = ["cx", "cy", "angle", "ticks", "axisLine"],
        Qn = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
      function tr(t) {
        return (
          (tr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          tr(t)
        );
      }
      function er() {
        return (
          (er = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          er.apply(this, arguments)
        );
      }
      function nr(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function rr(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? nr(Object(n), !0).forEach(function (e) {
                ur(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : nr(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function or(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
      }
      function ir(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, lr(r.key), r);
        }
      }
      function ar(t, e) {
        return (
          (ar = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          ar(t, e)
        );
      }
      function cr(t) {
        return (
          (cr = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          cr(t)
        );
      }
      function ur(t, e, n) {
        return (
          (e = lr(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function lr(t) {
        var e = (function (t, e) {
          if ("object" !== tr(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" !== tr(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" === tr(e) ? e : String(e);
      }
      var sr = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && ar(t, e);
        })(l, t);
        var e,
          n,
          o,
          i,
          a,
          u =
            ((i = l),
            (a = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {}),
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = cr(i);
              if (a) {
                var n = cr(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                if (e && ("object" === tr(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined",
                  );
                return (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return t;
                })(t);
              })(this, t);
            });
        function l() {
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, l),
            u.apply(this, arguments)
          );
        }
        return (
          (e = l),
          (o = [
            {
              key: "renderTickItem",
              value: function (t, e, n) {
                return r.isValidElement(t)
                  ? r.cloneElement(t, e)
                  : c()(t)
                    ? t(e)
                    : r.createElement(
                        $t.x,
                        er({}, e, {
                          className: "recharts-polar-radius-axis-tick-value",
                        }),
                        n,
                      );
              },
            },
          ]),
          (n = [
            {
              key: "getTickValueCoord",
              value: function (t) {
                var e = t.coordinate,
                  n = this.props,
                  r = n.angle,
                  o = n.cx,
                  i = n.cy;
                return (0, w.op)(o, i, e, r);
              },
            },
            {
              key: "getTickTextAnchor",
              value: function () {
                var t;
                switch (this.props.orientation) {
                  case "left":
                    t = "end";
                    break;
                  case "right":
                    t = "start";
                    break;
                  default:
                    t = "middle";
                }
                return t;
              },
            },
            {
              key: "getViewBox",
              value: function () {
                var t = this.props,
                  e = t.cx,
                  n = t.cy,
                  r = t.angle,
                  o = t.ticks,
                  i = Hn()(o, function (t) {
                    return t.coordinate || 0;
                  });
                return {
                  cx: e,
                  cy: n,
                  startAngle: r,
                  endAngle: r,
                  innerRadius:
                    Kn()(o, function (t) {
                      return t.coordinate || 0;
                    }).coordinate || 0,
                  outerRadius: i.coordinate || 0,
                };
              },
            },
            {
              key: "renderAxisLine",
              value: function () {
                var t = this.props,
                  e = t.cx,
                  n = t.cy,
                  o = t.angle,
                  i = t.ticks,
                  a = t.axisLine,
                  c = or(t, Jn),
                  u = i.reduce(
                    function (t, e) {
                      return [
                        Math.min(t[0], e.coordinate),
                        Math.max(t[1], e.coordinate),
                      ];
                    },
                    [1 / 0, -1 / 0],
                  ),
                  l = (0, w.op)(e, n, u[0], o),
                  s = (0, w.op)(e, n, u[1], o),
                  f = rr(
                    rr(
                      rr({}, (0, Pt.L6)(c)),
                      {},
                      { fill: "none" },
                      (0, Pt.L6)(a),
                    ),
                    {},
                    { x1: l.x, y1: l.y, x2: s.x, y2: s.y },
                  );
                return r.createElement(
                  "line",
                  er({ className: "recharts-polar-radius-axis-line" }, f),
                );
              },
            },
            {
              key: "renderTicks",
              value: function () {
                var t = this,
                  e = this.props,
                  n = e.ticks,
                  o = e.tick,
                  i = e.angle,
                  a = e.tickFormatter,
                  c = e.stroke,
                  u = or(e, Qn),
                  s = this.getTickTextAnchor(),
                  f = (0, Pt.L6)(u),
                  p = (0, Pt.L6)(o),
                  h = n.map(function (e, n) {
                    var u = t.getTickValueCoord(e),
                      h = rr(
                        rr(
                          rr(
                            rr(
                              {
                                textAnchor: s,
                                transform: "rotate("
                                  .concat(90 - i, ", ")
                                  .concat(u.x, ", ")
                                  .concat(u.y, ")"),
                              },
                              f,
                            ),
                            {},
                            { stroke: "none", fill: c },
                            p,
                          ),
                          {},
                          { index: n },
                          u,
                        ),
                        {},
                        { payload: e },
                      );
                    return r.createElement(
                      Z.m,
                      er(
                        {
                          className: "recharts-polar-radius-axis-tick",
                          key: "tick-".concat(n),
                        },
                        (0, It.bw)(t.props, e, n),
                      ),
                      l.renderTickItem(o, h, a ? a(e.value, n) : e.value),
                    );
                  });
                return r.createElement(
                  Z.m,
                  { className: "recharts-polar-radius-axis-ticks" },
                  h,
                );
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.ticks,
                  n = t.axisLine,
                  o = t.tick;
                return e && e.length
                  ? r.createElement(
                      Z.m,
                      { className: "recharts-polar-radius-axis" },
                      n && this.renderAxisLine(),
                      o && this.renderTicks(),
                      Ft._.renderCallByParent(this.props, this.getViewBox()),
                    )
                  : null;
              },
            },
          ]) && ir(e.prototype, n),
          o && ir(e, o),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          l
        );
      })(r.PureComponent);
      ur(sr, "displayName", "PolarRadiusAxis"),
        ur(sr, "axisType", "radiusAxis"),
        ur(sr, "defaultProps", {
          type: "number",
          radiusAxisId: 0,
          cx: 0,
          cy: 0,
          angle: 0,
          orientation: "right",
          stroke: "#ccc",
          axisLine: !0,
          tick: !0,
          tickCount: 5,
          allowDataOverflow: !1,
          scale: "auto",
          allowDuplicatedCategory: !0,
        });
      var fr,
        pr,
        hr,
        dr,
        yr,
        vr,
        mr,
        gr,
        br,
        xr,
        wr,
        Or,
        jr,
        Sr =
          ((fr = {
            chartName: "PieChart",
            GraphicalChild: n(72577).b,
            validateTooltipEventTypes: ["item"],
            defaultTooltipEventType: "item",
            legendContent: "children",
            axisComponents: [
              { axisType: "angleAxis", AxisComp: Xn },
              { axisType: "radiusAxis", AxisComp: sr },
            ],
            formatAxisMap: w.t9,
            defaultProps: {
              layout: "centric",
              startAngle: 0,
              endAngle: 360,
              cx: "50%",
              cy: "50%",
              innerRadius: 0,
              outerRadius: "80%",
            },
          }),
          (hr = fr.chartName),
          (dr = fr.GraphicalChild),
          (vr = void 0 === (yr = fr.defaultTooltipEventType) ? "axis" : yr),
          (gr = void 0 === (mr = fr.validateTooltipEventTypes) ? ["axis"] : mr),
          (br = fr.axisComponents),
          (xr = fr.legendContent),
          (wr = fr.formatAxisMap),
          (Or = fr.defaultProps),
          (jr = function (t, e) {
            var n = t.props,
              r = t.dataStartIndex,
              o = t.dataEndIndex,
              a = t.updateId;
            if (!(0, Pt.TT)({ props: n })) return null;
            var c = n.children,
              u = n.layout,
              l = n.stackOffset,
              s = n.data,
              p = n.reverseStackOrder,
              d = kn(u),
              y = d.numericAxisName,
              v = d.cateAxisName,
              m = (0, Pt.NN)(c, dr),
              g = (0, re.wh)(
                s,
                m,
                "".concat(y, "Id"),
                "".concat(v, "Id"),
                l,
                p,
              ),
              b = br.reduce(function (t, e) {
                var i = "".concat(e.axisType, "Map");
                return vn(
                  vn({}, t),
                  {},
                  mn(
                    {},
                    i,
                    An(
                      n,
                      vn(
                        vn({}, e),
                        {},
                        {
                          graphicalItems: m,
                          stackGroups: e.axisType === y && g,
                          dataStartIndex: r,
                          dataEndIndex: o,
                        },
                      ),
                    ),
                  ),
                );
              }, {}),
              x = (function (t, e) {
                var n = t.props,
                  r = t.graphicalItems,
                  o = t.xAxisMap,
                  i = void 0 === o ? {} : o,
                  a = t.yAxisMap,
                  c = void 0 === a ? {} : a,
                  u = n.width,
                  l = n.height,
                  s = n.children,
                  p = n.margin || {},
                  h = (0, Pt.sP)(s, xe),
                  d = (0, Pt.sP)(s, Et.D),
                  y = Object.keys(c).reduce(
                    function (t, e) {
                      var n = c[e],
                        r = n.orientation;
                      return n.mirror || n.hide
                        ? t
                        : vn(vn({}, t), {}, mn({}, r, t[r] + n.width));
                    },
                    { left: p.left || 0, right: p.right || 0 },
                  ),
                  v = Object.keys(i).reduce(
                    function (t, e) {
                      var n = i[e],
                        r = n.orientation;
                      return n.mirror || n.hide
                        ? t
                        : vn(
                            vn({}, t),
                            {},
                            mn({}, r, f()(t, "".concat(r)) + n.height),
                          );
                    },
                    { top: p.top || 0, bottom: p.bottom || 0 },
                  ),
                  m = vn(vn({}, v), y),
                  g = m.bottom;
                h && (m.bottom += h.props.height || xe.defaultProps.height),
                  d && e && (m = (0, re.By)(m, r, n, e));
                var b = u - m.left - m.right,
                  x = l - m.top - m.bottom;
                return vn(
                  vn({ brushBottom: g }, m),
                  {},
                  { width: Math.max(b, 0), height: Math.max(x, 0) },
                );
              })(
                vn(vn({}, b), {}, { props: n, graphicalItems: m }),
                null == e ? void 0 : e.legendBBox,
              );
            Object.keys(b).forEach(function (t) {
              b[t] = wr(n, b[t], x, t.replace("Map", ""), hr);
            });
            var w,
              O,
              S,
              E =
                ((w = b["".concat(v, "Map")]),
                (O = (0, j.Kt)(w)),
                {
                  tooltipTicks: (S = (0, re.uY)(O, !1, !0)),
                  orderedTooltipTicks: h()(S, function (t) {
                    return t.coordinate;
                  }),
                  tooltipAxis: O,
                  tooltipAxisBandSize: (0, re.zT)(O, S),
                }),
              A = (function (t, e) {
                var n = e.graphicalItems,
                  r = e.stackGroups,
                  o = e.offset,
                  a = e.updateId,
                  c = e.dataStartIndex,
                  u = e.dataEndIndex,
                  l = t.barSize,
                  s = t.layout,
                  f = t.barGap,
                  p = t.barCategoryGap,
                  h = t.maxBarSize,
                  d = kn(s),
                  y = d.numericAxisName,
                  v = d.cateAxisName,
                  m = (function (t) {
                    return (
                      !(!t || !t.length) &&
                      t.some(function (t) {
                        var e = (0, Pt.Gf)(t && t.type);
                        return e && e.indexOf("Bar") >= 0;
                      })
                    );
                  })(n),
                  g = m && (0, re.pt)({ barSize: l, stackGroups: r }),
                  b = [];
                return (
                  n.forEach(function (n, l) {
                    var d = On(t.data, {
                        graphicalItems: [n],
                        dataStartIndex: c,
                        dataEndIndex: u,
                      }),
                      m = n.props,
                      x = m.dataKey,
                      w = m.maxBarSize,
                      O = n.props["".concat(y, "Id")],
                      j = n.props["".concat(v, "Id")],
                      S = br.reduce(function (t, r) {
                        var o,
                          i = e["".concat(r.axisType, "Map")],
                          a = n.props["".concat(r.axisType, "Id")];
                        (i && i[a]) ||
                          "zAxis" === r.axisType ||
                          (function (t, e) {
                            throw new Error("Invariant failed");
                          })();
                        var c = i[a];
                        return vn(
                          vn({}, t),
                          {},
                          (mn((o = {}), r.axisType, c),
                          mn(o, "".concat(r.axisType, "Ticks"), (0, re.uY)(c)),
                          o),
                        );
                      }, {}),
                      E = S[v],
                      A = S["".concat(v, "Ticks")],
                      P =
                        r &&
                        r[O] &&
                        r[O].hasStack &&
                        (0, re.O3)(n, r[O].stackGroups),
                      k = (0, Pt.Gf)(n.type).indexOf("Bar") >= 0,
                      M = (0, re.zT)(E, A),
                      T = [];
                    if (k) {
                      var _,
                        C,
                        N = i()(w) ? h : w,
                        D =
                          null !==
                            (_ =
                              null !== (C = (0, re.zT)(E, A, !0)) &&
                              void 0 !== C
                                ? C
                                : N) && void 0 !== _
                            ? _
                            : 0;
                      (T = (0, re.qz)({
                        barGap: f,
                        barCategoryGap: p,
                        bandSize: D !== M ? D : M,
                        sizeList: g[j],
                        maxBarSize: N,
                      })),
                        D !== M &&
                          (T = T.map(function (t) {
                            return vn(
                              vn({}, t),
                              {},
                              {
                                position: vn(
                                  vn({}, t.position),
                                  {},
                                  { offset: t.position.offset - D / 2 },
                                ),
                              },
                            );
                          }));
                    }
                    var I,
                      L = n && n.type && n.type.getComposedData;
                    L &&
                      b.push({
                        props: vn(
                          vn(
                            {},
                            L(
                              vn(
                                vn({}, S),
                                {},
                                {
                                  displayedData: d,
                                  props: t,
                                  dataKey: x,
                                  item: n,
                                  bandSize: M,
                                  barPosition: T,
                                  offset: o,
                                  stackedData: P,
                                  layout: s,
                                  dataStartIndex: c,
                                  dataEndIndex: u,
                                },
                              ),
                            ),
                          ),
                          {},
                          ((I = { key: n.key || "item-".concat(l) }),
                          mn(I, y, S[y]),
                          mn(I, v, S[v]),
                          mn(I, "animationId", a),
                          I),
                        ),
                        childIndex: (0, Pt.$R)(n, t.children),
                        item: n,
                      });
                  }),
                  b
                );
              })(
                n,
                vn(
                  vn({}, b),
                  {},
                  {
                    dataStartIndex: r,
                    dataEndIndex: o,
                    updateId: a,
                    graphicalItems: m,
                    stackGroups: g,
                    offset: x,
                  },
                ),
              );
            return vn(
              vn(
                {
                  formattedGraphicalItems: A,
                  graphicalItems: m,
                  offset: x,
                  stackGroups: g,
                },
                E,
              ),
              b,
            );
          }),
          (pr = (function (t) {
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && ln(t, e);
            })(l, t);
            var e,
              n,
              o,
              a,
              u =
                ((o = l),
                (a = (function () {
                  if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                  if (Reflect.construct.sham) return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                    return (
                      Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () {}),
                      ),
                      !0
                    );
                  } catch (t) {
                    return !1;
                  }
                })()),
                function () {
                  var t,
                    e = fn(o);
                  if (a) {
                    var n = fn(this).constructor;
                    t = Reflect.construct(e, arguments, n);
                  } else t = e.apply(this, arguments);
                  return (function (t, e) {
                    if (e && ("object" === rn(e) || "function" == typeof e))
                      return e;
                    if (void 0 !== e)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    return sn(t);
                  })(this, t);
                });
            function l(t) {
              var e, n, o;
              return (
                (function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, l),
                mn(
                  sn((o = u.call(this, t))),
                  "eventEmitterSymbol",
                  Symbol("rechartsEventEmitter"),
                ),
                mn(sn(o), "accessibilityManager", new Je()),
                mn(sn(o), "handleLegendBBoxUpdate", function (t) {
                  if (t) {
                    var e = o.state,
                      n = e.dataStartIndex,
                      r = e.dataEndIndex,
                      i = e.updateId;
                    o.setState(
                      vn(
                        { legendBBox: t },
                        jr(
                          {
                            props: o.props,
                            dataStartIndex: n,
                            dataEndIndex: r,
                            updateId: i,
                          },
                          vn(vn({}, o.state), {}, { legendBBox: t }),
                        ),
                      ),
                    );
                  }
                }),
                mn(sn(o), "handleReceiveSyncEvent", function (t, e, n) {
                  if (o.props.syncId === t) {
                    if (
                      n === o.eventEmitterSymbol &&
                      "function" != typeof o.props.syncMethod
                    )
                      return;
                    o.applySyncEvent(e);
                  }
                }),
                mn(sn(o), "handleBrushChange", function (t) {
                  var e = t.startIndex,
                    n = t.endIndex;
                  if (
                    e !== o.state.dataStartIndex ||
                    n !== o.state.dataEndIndex
                  ) {
                    var r = o.state.updateId;
                    o.setState(function () {
                      return vn(
                        { dataStartIndex: e, dataEndIndex: n },
                        jr(
                          {
                            props: o.props,
                            dataStartIndex: e,
                            dataEndIndex: n,
                            updateId: r,
                          },
                          o.state,
                        ),
                      );
                    }),
                      o.triggerSyncEvent({
                        dataStartIndex: e,
                        dataEndIndex: n,
                      });
                  }
                }),
                mn(sn(o), "handleMouseEnter", function (t) {
                  var e = o.getMouseInfo(t);
                  if (e) {
                    var n = vn(vn({}, e), {}, { isTooltipActive: !0 });
                    o.setState(n), o.triggerSyncEvent(n);
                    var r = o.props.onMouseEnter;
                    c()(r) && r(n, t);
                  }
                }),
                mn(sn(o), "triggeredAfterMouseMove", function (t) {
                  var e = o.getMouseInfo(t),
                    n = e
                      ? vn(vn({}, e), {}, { isTooltipActive: !0 })
                      : { isTooltipActive: !1 };
                  o.setState(n), o.triggerSyncEvent(n);
                  var r = o.props.onMouseMove;
                  c()(r) && r(n, t);
                }),
                mn(sn(o), "handleItemMouseEnter", function (t) {
                  o.setState(function () {
                    return {
                      isTooltipActive: !0,
                      activeItem: t,
                      activePayload: t.tooltipPayload,
                      activeCoordinate: t.tooltipPosition || {
                        x: t.cx,
                        y: t.cy,
                      },
                    };
                  });
                }),
                mn(sn(o), "handleItemMouseLeave", function () {
                  o.setState(function () {
                    return { isTooltipActive: !1 };
                  });
                }),
                mn(sn(o), "handleMouseMove", function (t) {
                  t.persist(), o.throttleTriggeredAfterMouseMove(t);
                }),
                mn(sn(o), "handleMouseLeave", function (t) {
                  var e = { isTooltipActive: !1 };
                  o.setState(e), o.triggerSyncEvent(e);
                  var n = o.props.onMouseLeave;
                  c()(n) && n(e, t);
                }),
                mn(sn(o), "handleOuterEvent", function (t) {
                  var e,
                    n = (0, Pt.Bh)(t),
                    r = f()(o.props, "".concat(n));
                  n &&
                    c()(r) &&
                    r(
                      null !==
                        (e = /.*touch.*/i.test(n)
                          ? o.getMouseInfo(t.changedTouches[0])
                          : o.getMouseInfo(t)) && void 0 !== e
                        ? e
                        : {},
                      t,
                    );
                }),
                mn(sn(o), "handleClick", function (t) {
                  var e = o.getMouseInfo(t);
                  if (e) {
                    var n = vn(vn({}, e), {}, { isTooltipActive: !0 });
                    o.setState(n), o.triggerSyncEvent(n);
                    var r = o.props.onClick;
                    c()(r) && r(n, t);
                  }
                }),
                mn(sn(o), "handleMouseDown", function (t) {
                  var e = o.props.onMouseDown;
                  c()(e) && e(o.getMouseInfo(t), t);
                }),
                mn(sn(o), "handleMouseUp", function (t) {
                  var e = o.props.onMouseUp;
                  c()(e) && e(o.getMouseInfo(t), t);
                }),
                mn(sn(o), "handleTouchMove", function (t) {
                  null != t.changedTouches &&
                    t.changedTouches.length > 0 &&
                    o.throttleTriggeredAfterMouseMove(t.changedTouches[0]);
                }),
                mn(sn(o), "handleTouchStart", function (t) {
                  null != t.changedTouches &&
                    t.changedTouches.length > 0 &&
                    o.handleMouseDown(t.changedTouches[0]);
                }),
                mn(sn(o), "handleTouchEnd", function (t) {
                  null != t.changedTouches &&
                    t.changedTouches.length > 0 &&
                    o.handleMouseUp(t.changedTouches[0]);
                }),
                mn(sn(o), "triggerSyncEvent", function (t) {
                  void 0 !== o.props.syncId &&
                    Ge.emit(Xe, o.props.syncId, t, o.eventEmitterSymbol);
                }),
                mn(sn(o), "applySyncEvent", function (t) {
                  var e = o.props,
                    n = e.layout,
                    r = e.syncMethod,
                    i = o.state.updateId,
                    a = t.dataStartIndex,
                    c = t.dataEndIndex;
                  if (void 0 !== t.dataStartIndex || void 0 !== t.dataEndIndex)
                    o.setState(
                      vn(
                        { dataStartIndex: a, dataEndIndex: c },
                        jr(
                          {
                            props: o.props,
                            dataStartIndex: a,
                            dataEndIndex: c,
                            updateId: i,
                          },
                          o.state,
                        ),
                      ),
                    );
                  else if (void 0 !== t.activeTooltipIndex) {
                    var u = t.chartX,
                      l = t.chartY,
                      s = t.activeTooltipIndex,
                      f = o.state,
                      p = f.offset,
                      h = f.tooltipTicks;
                    if (!p) return;
                    if ("function" == typeof r) s = r(h, t);
                    else if ("value" === r) {
                      s = -1;
                      for (var d = 0; d < h.length; d++)
                        if (h[d].value === t.activeLabel) {
                          s = d;
                          break;
                        }
                    }
                    var y = vn(vn({}, p), {}, { x: p.left, y: p.top }),
                      v = Math.min(u, y.x + y.width),
                      m = Math.min(l, y.y + y.height),
                      g = h[s] && h[s].value,
                      b = Sn(o.state, o.props.data, s),
                      x = h[s]
                        ? {
                            x: "horizontal" === n ? h[s].coordinate : v,
                            y: "horizontal" === n ? m : h[s].coordinate,
                          }
                        : wn;
                    o.setState(
                      vn(
                        vn({}, t),
                        {},
                        {
                          activeLabel: g,
                          activeCoordinate: x,
                          activePayload: b,
                          activeTooltipIndex: s,
                        },
                      ),
                    );
                  } else o.setState(t);
                }),
                mn(sn(o), "verticalCoordinatesGenerator", function (t, e) {
                  var n = t.xAxis,
                    r = t.width,
                    o = t.height,
                    i = t.offset;
                  return (0, re.Rf)(
                    z(
                      vn(
                        vn(vn({}, ee.defaultProps), n),
                        {},
                        {
                          ticks: (0, re.uY)(n, !0),
                          viewBox: { x: 0, y: 0, width: r, height: o },
                        },
                      ),
                    ),
                    i.left,
                    i.left + i.width,
                    e,
                  );
                }),
                mn(sn(o), "horizontalCoordinatesGenerator", function (t, e) {
                  var n = t.yAxis,
                    r = t.width,
                    o = t.height,
                    i = t.offset;
                  return (0, re.Rf)(
                    z(
                      vn(
                        vn(vn({}, ee.defaultProps), n),
                        {},
                        {
                          ticks: (0, re.uY)(n, !0),
                          viewBox: { x: 0, y: 0, width: r, height: o },
                        },
                      ),
                    ),
                    i.top,
                    i.top + i.height,
                    e,
                  );
                }),
                mn(sn(o), "axesTicksGenerator", function (t) {
                  return (0, re.uY)(t, !0);
                }),
                mn(sn(o), "renderCursor", function (t) {
                  var e,
                    n = o.state,
                    i = n.isTooltipActive,
                    a = n.activeCoordinate,
                    c = n.activePayload,
                    u = n.offset,
                    l = n.activeTooltipIndex,
                    s = n.tooltipAxisBandSize,
                    f = o.getTooltipEventType(),
                    p = null !== (e = t.props.active) && void 0 !== e ? e : i;
                  if (
                    !t ||
                    !t.props.cursor ||
                    !p ||
                    !a ||
                    ("ScatterChart" !== hr && "axis" !== f)
                  )
                    return null;
                  var h,
                    d = o.props.layout,
                    y = At.H;
                  if ("ScatterChart" === hr) (h = a), (y = Nt);
                  else if ("BarChart" === hr)
                    (h = (function (t, e, n, r) {
                      var o = r / 2;
                      return {
                        stroke: "none",
                        fill: "#ccc",
                        x: "horizontal" === t ? e.x - o : n.left + 0.5,
                        y: "horizontal" === t ? n.top + 0.5 : e.y - o,
                        width: "horizontal" === t ? r : n.width - 1,
                        height: "horizontal" === t ? n.height - 1 : r,
                      };
                    })(d, a, u, s)),
                      (y = Bt.A);
                  else if ("radial" === d) {
                    var v = O(a),
                      m = v.cx,
                      g = v.cy,
                      b = v.radius;
                    (h = {
                      cx: m,
                      cy: g,
                      startAngle: v.startAngle,
                      endAngle: v.endAngle,
                      innerRadius: b,
                      outerRadius: b,
                    }),
                      (y = Dt.L);
                  } else (h = { points: tn(d, a, u) }), (y = At.H);
                  var x = t.key || "_recharts-cursor",
                    w = vn(
                      vn(
                        vn(vn({ stroke: "#ccc", pointerEvents: "none" }, u), h),
                        (0, Pt.L6)(t.props.cursor),
                      ),
                      {},
                      {
                        payload: c,
                        payloadIndex: l,
                        key: x,
                        className: "recharts-tooltip-cursor",
                      },
                    );
                  return (0, r.isValidElement)(t.props.cursor)
                    ? (0, r.cloneElement)(t.props.cursor, w)
                    : (0, r.createElement)(y, w);
                }),
                mn(sn(o), "renderPolarAxis", function (t, e, n) {
                  var i = f()(t, "type.axisType"),
                    a = f()(o.state, "".concat(i, "Map")),
                    c = a && a[t.props["".concat(i, "Id")]];
                  return (0, r.cloneElement)(
                    t,
                    vn(
                      vn({}, c),
                      {},
                      {
                        className: i,
                        key: t.key || "".concat(e, "-").concat(n),
                        ticks: (0, re.uY)(c, !0),
                      },
                    ),
                  );
                }),
                mn(sn(o), "renderXAxis", function (t, e, n) {
                  var r = o.state.xAxisMap[t.props.xAxisId];
                  return o.renderAxis(r, t, e, n);
                }),
                mn(sn(o), "renderYAxis", function (t, e, n) {
                  var r = o.state.yAxisMap[t.props.yAxisId];
                  return o.renderAxis(r, t, e, n);
                }),
                mn(sn(o), "renderGrid", function (t) {
                  var e = o.state,
                    n = e.xAxisMap,
                    i = e.yAxisMap,
                    a = e.offset,
                    c = o.props,
                    u = c.width,
                    l = c.height,
                    s = (0, j.Kt)(n),
                    f =
                      m()(i, function (t) {
                        return b()(t.domain, Number.isFinite);
                      }) || (0, j.Kt)(i),
                    p = t.props || {};
                  return (0, r.cloneElement)(t, {
                    key: t.key || "grid",
                    x: (0, j.hj)(p.x) ? p.x : a.left,
                    y: (0, j.hj)(p.y) ? p.y : a.top,
                    width: (0, j.hj)(p.width) ? p.width : a.width,
                    height: (0, j.hj)(p.height) ? p.height : a.height,
                    xAxis: s,
                    yAxis: f,
                    offset: a,
                    chartWidth: u,
                    chartHeight: l,
                    verticalCoordinatesGenerator:
                      p.verticalCoordinatesGenerator ||
                      o.verticalCoordinatesGenerator,
                    horizontalCoordinatesGenerator:
                      p.horizontalCoordinatesGenerator ||
                      o.horizontalCoordinatesGenerator,
                  });
                }),
                mn(sn(o), "renderPolarGrid", function (t) {
                  var e = t.props,
                    n = e.radialLines,
                    i = e.polarAngles,
                    a = e.polarRadius,
                    c = o.state,
                    u = c.radiusAxisMap,
                    l = c.angleAxisMap,
                    s = (0, j.Kt)(u),
                    f = (0, j.Kt)(l),
                    p = f.cx,
                    h = f.cy,
                    d = f.innerRadius,
                    y = f.outerRadius;
                  return (0, r.cloneElement)(t, {
                    polarAngles: Array.isArray(i)
                      ? i
                      : (0, re.uY)(f, !0).map(function (t) {
                          return t.coordinate;
                        }),
                    polarRadius: Array.isArray(a)
                      ? a
                      : (0, re.uY)(s, !0).map(function (t) {
                          return t.coordinate;
                        }),
                    cx: p,
                    cy: h,
                    innerRadius: d,
                    outerRadius: y,
                    key: t.key || "polar-grid",
                    radialLines: n,
                  });
                }),
                mn(sn(o), "renderLegend", function () {
                  var t = o.state.formattedGraphicalItems,
                    e = o.props,
                    n = e.children,
                    i = e.width,
                    a = e.height,
                    c = o.props.margin || {},
                    u = i - (c.left || 0) - (c.right || 0),
                    l = (0, we.z)({
                      children: n,
                      formattedGraphicalItems: t,
                      legendWidth: u,
                      legendContent: xr,
                    });
                  if (!l) return null;
                  var s = l.item,
                    f = cn(l, en);
                  return (0, r.cloneElement)(
                    s,
                    vn(
                      vn({}, f),
                      {},
                      {
                        chartWidth: i,
                        chartHeight: a,
                        margin: c,
                        onBBoxUpdate: o.handleLegendBBoxUpdate,
                      },
                    ),
                  );
                }),
                mn(sn(o), "renderTooltip", function () {
                  var t,
                    e = o.props.children,
                    n = (0, Pt.sP)(e, St);
                  if (!n) return null;
                  var i = o.state,
                    a = i.isTooltipActive,
                    c = i.activeCoordinate,
                    u = i.activePayload,
                    l = i.activeLabel,
                    s = i.offset,
                    f = null !== (t = n.props.active) && void 0 !== t ? t : a;
                  return (0, r.cloneElement)(n, {
                    viewBox: vn(vn({}, s), {}, { x: s.left, y: s.top }),
                    active: f,
                    label: l,
                    payload: f ? u : [],
                    coordinate: c,
                  });
                }),
                mn(sn(o), "renderBrush", function (t) {
                  var e = o.props,
                    n = e.margin,
                    i = e.data,
                    a = o.state,
                    c = a.offset,
                    u = a.dataStartIndex,
                    l = a.dataEndIndex,
                    s = a.updateId;
                  return (0, r.cloneElement)(t, {
                    key: t.key || "_recharts-brush",
                    onChange: (0, re.DO)(o.handleBrushChange, t.props.onChange),
                    data: i,
                    x: (0, j.hj)(t.props.x) ? t.props.x : c.left,
                    y: (0, j.hj)(t.props.y)
                      ? t.props.y
                      : c.top + c.height + c.brushBottom - (n.bottom || 0),
                    width: (0, j.hj)(t.props.width) ? t.props.width : c.width,
                    startIndex: u,
                    endIndex: l,
                    updateId: "brush-".concat(s),
                  });
                }),
                mn(sn(o), "renderReferenceElement", function (t, e, n) {
                  if (!t) return null;
                  var i = sn(o).clipPathId,
                    a = o.state,
                    c = a.xAxisMap,
                    u = a.yAxisMap,
                    l = a.offset,
                    s = t.props,
                    f = s.xAxisId,
                    p = s.yAxisId;
                  return (0, r.cloneElement)(t, {
                    key: t.key || "".concat(e, "-").concat(n),
                    xAxis: c[f],
                    yAxis: u[p],
                    viewBox: {
                      x: l.left,
                      y: l.top,
                      width: l.width,
                      height: l.height,
                    },
                    clipPathId: i,
                  });
                }),
                mn(sn(o), "renderActivePoints", function (t) {
                  var e = t.item,
                    n = t.activePoint,
                    r = t.basePoint,
                    o = t.childIndex,
                    i = t.isRange,
                    a = [],
                    c = e.props.key,
                    u = e.item.props,
                    s = u.activeDot,
                    f = vn(
                      vn(
                        {
                          index: o,
                          dataKey: u.dataKey,
                          cx: n.x,
                          cy: n.y,
                          r: 4,
                          fill: (0, re.fk)(e.item),
                          strokeWidth: 2,
                          stroke: "#fff",
                          payload: n.payload,
                          value: n.value,
                          key: "".concat(c, "-activePoint-").concat(o),
                        },
                        (0, Pt.L6)(s),
                      ),
                      (0, It.Ym)(s),
                    );
                  return (
                    a.push(l.renderActiveDot(s, f)),
                    r
                      ? a.push(
                          l.renderActiveDot(
                            s,
                            vn(
                              vn({}, f),
                              {},
                              {
                                cx: r.x,
                                cy: r.y,
                                key: "".concat(c, "-basePoint-").concat(o),
                              },
                            ),
                          ),
                        )
                      : i && a.push(null),
                    a
                  );
                }),
                mn(sn(o), "renderGraphicChild", function (t, e, n) {
                  var a = o.filterFormatItem(t, e, n);
                  if (!a) return null;
                  var c = o.getTooltipEventType(),
                    u = o.state,
                    l = u.isTooltipActive,
                    s = u.tooltipAxis,
                    f = u.activeTooltipIndex,
                    p = u.activeLabel,
                    h = o.props.children,
                    d = (0, Pt.sP)(h, St),
                    y = a.props,
                    v = y.points,
                    m = y.isRange,
                    g = y.baseLine,
                    b = a.item.props,
                    x = b.activeDot,
                    w = b.hide,
                    O = b.activeBar,
                    S = b.activeShape,
                    E = Boolean(!w && l && d && (x || O || S)),
                    A = {};
                  "axis" !== c && d && "click" === d.props.trigger
                    ? (A = {
                        onClick: (0, re.DO)(
                          o.handleItemMouseEnter,
                          t.props.onClick,
                        ),
                      })
                    : "axis" !== c &&
                      (A = {
                        onMouseLeave: (0, re.DO)(
                          o.handleItemMouseLeave,
                          t.props.onMouseLeave,
                        ),
                        onMouseEnter: (0, re.DO)(
                          o.handleItemMouseEnter,
                          t.props.onMouseEnter,
                        ),
                      });
                  var P = (0, r.cloneElement)(t, vn(vn({}, a.props), A));
                  if (E) {
                    if (!(f >= 0)) {
                      var k,
                        M = (
                          null !==
                            (k = o.getItemByXY(o.state.activeCoordinate)) &&
                          void 0 !== k
                            ? k
                            : { graphicalItem: P }
                        ).graphicalItem,
                        T = M.item,
                        _ = void 0 === T ? t : T,
                        C = M.childIndex,
                        N = vn(vn(vn({}, a.props), A), {}, { activeIndex: C });
                      return [(0, r.cloneElement)(_, N), null, null];
                    }
                    var D, I;
                    if (s.dataKey && !s.allowDuplicatedCategory) {
                      var L =
                        "function" == typeof s.dataKey
                          ? function (t) {
                              return "function" == typeof s.dataKey
                                ? s.dataKey(t.payload)
                                : null;
                            }
                          : "payload.".concat(s.dataKey.toString());
                      (D = (0, j.Ap)(v, L, p)),
                        (I = m && g && (0, j.Ap)(g, L, p));
                    } else
                      (D = null == v ? void 0 : v[f]), (I = m && g && g[f]);
                    if (S || O) {
                      var R =
                        void 0 !== t.props.activeIndex
                          ? t.props.activeIndex
                          : f;
                      return [
                        (0, r.cloneElement)(
                          t,
                          vn(vn(vn({}, a.props), A), {}, { activeIndex: R }),
                        ),
                        null,
                        null,
                      ];
                    }
                    if (!i()(D))
                      return [P].concat(
                        pn(
                          o.renderActivePoints({
                            item: a,
                            activePoint: D,
                            basePoint: I,
                            childIndex: f,
                            isRange: m,
                          }),
                        ),
                      );
                  }
                  return m ? [P, null, null] : [P, null];
                }),
                mn(sn(o), "renderCustomized", function (t, e, n) {
                  return (0, r.cloneElement)(
                    t,
                    vn(
                      vn({ key: "recharts-customized-".concat(n) }, o.props),
                      o.state,
                    ),
                  );
                }),
                mn(sn(o), "renderMap", {
                  CartesianGrid: { handler: o.renderGrid, once: !0 },
                  ReferenceArea: { handler: o.renderReferenceElement },
                  ReferenceLine: { handler: o.renderReferenceElement },
                  ReferenceDot: { handler: o.renderReferenceElement },
                  XAxis: { handler: o.renderXAxis },
                  YAxis: { handler: o.renderYAxis },
                  Brush: { handler: o.renderBrush, once: !0 },
                  Bar: { handler: o.renderGraphicChild },
                  Line: { handler: o.renderGraphicChild },
                  Area: { handler: o.renderGraphicChild },
                  Radar: { handler: o.renderGraphicChild },
                  RadialBar: { handler: o.renderGraphicChild },
                  Scatter: { handler: o.renderGraphicChild },
                  Pie: { handler: o.renderGraphicChild },
                  Funnel: { handler: o.renderGraphicChild },
                  Tooltip: { handler: o.renderCursor, once: !0 },
                  PolarGrid: { handler: o.renderPolarGrid, once: !0 },
                  PolarAngleAxis: { handler: o.renderPolarAxis },
                  PolarRadiusAxis: { handler: o.renderPolarAxis },
                  Customized: { handler: o.renderCustomized },
                }),
                (o.clipPathId = "".concat(
                  null !== (e = t.id) && void 0 !== e
                    ? e
                    : (0, j.EL)("recharts"),
                  "-clip",
                )),
                (o.throttleTriggeredAfterMouseMove = y()(
                  o.triggeredAfterMouseMove,
                  null !== (n = t.throttleDelay) && void 0 !== n ? n : 1e3 / 60,
                )),
                (o.state = {}),
                o
              );
            }
            return (
              (e = l),
              (n = [
                {
                  key: "componentDidMount",
                  value: function () {
                    var t, e;
                    this.addListener(),
                      this.accessibilityManager.setDetails({
                        container: this.container,
                        offset: {
                          left:
                            null !== (t = this.props.margin.left) &&
                            void 0 !== t
                              ? t
                              : 0,
                          top:
                            null !== (e = this.props.margin.top) && void 0 !== e
                              ? e
                              : 0,
                        },
                        coordinateList: this.state.tooltipTicks,
                        mouseHandlerCallback: this.triggeredAfterMouseMove,
                        layout: this.props.layout,
                      });
                  },
                },
                {
                  key: "getSnapshotBeforeUpdate",
                  value: function (t, e) {
                    return this.props.accessibilityLayer
                      ? (this.state.tooltipTicks !== e.tooltipTicks &&
                          this.accessibilityManager.setDetails({
                            coordinateList: this.state.tooltipTicks,
                          }),
                        this.props.layout !== t.layout &&
                          this.accessibilityManager.setDetails({
                            layout: this.props.layout,
                          }),
                        this.props.margin !== t.margin &&
                          this.accessibilityManager.setDetails({
                            offset: {
                              left:
                                null !== (n = this.props.margin.left) &&
                                void 0 !== n
                                  ? n
                                  : 0,
                              top:
                                null !== (r = this.props.margin.top) &&
                                void 0 !== r
                                  ? r
                                  : 0,
                            },
                          }),
                        null)
                      : null;
                    var n, r;
                  },
                },
                { key: "componentDidUpdate", value: function () {} },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.removeListener(),
                      this.throttleTriggeredAfterMouseMove.cancel();
                  },
                },
                {
                  key: "getTooltipEventType",
                  value: function () {
                    var t = (0, Pt.sP)(this.props.children, St);
                    if (t && Boolean(t.props.shared)) {
                      var e = t.props.shared ? "axis" : "item";
                      return gr.indexOf(e) >= 0 ? e : vr;
                    }
                    return vr;
                  },
                },
                {
                  key: "getMouseInfo",
                  value: function (t) {
                    if (!this.container) return null;
                    var e = this.container,
                      n = e.getBoundingClientRect(),
                      r = (0, S.os)(n),
                      o = {
                        chartX: Math.round(t.pageX - r.left),
                        chartY: Math.round(t.pageY - r.top),
                      },
                      i = n.width / e.offsetWidth || 1,
                      a = this.inRange(o.chartX, o.chartY, i);
                    if (!a) return null;
                    var c = this.state,
                      u = c.xAxisMap,
                      l = c.yAxisMap;
                    if ("axis" !== this.getTooltipEventType() && u && l) {
                      var s = (0, j.Kt)(u).scale,
                        f = (0, j.Kt)(l).scale,
                        p = s && s.invert ? s.invert(o.chartX) : null,
                        h = f && f.invert ? f.invert(o.chartY) : null;
                      return vn(vn({}, o), {}, { xValue: p, yValue: h });
                    }
                    var d = En(
                      this.state,
                      this.props.data,
                      this.props.layout,
                      a,
                    );
                    return d ? vn(vn({}, o), d) : null;
                  },
                },
                {
                  key: "inRange",
                  value: function (t, e) {
                    var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 1,
                      r = this.props.layout,
                      o = t / n,
                      i = e / n;
                    if ("horizontal" === r || "vertical" === r) {
                      var a = this.state.offset;
                      return o >= a.left &&
                        o <= a.left + a.width &&
                        i >= a.top &&
                        i <= a.top + a.height
                        ? { x: o, y: i }
                        : null;
                    }
                    var c = this.state,
                      u = c.angleAxisMap,
                      l = c.radiusAxisMap;
                    if (u && l) {
                      var s = (0, j.Kt)(u);
                      return (0, w.z3)({ x: o, y: i }, s);
                    }
                    return null;
                  },
                },
                {
                  key: "parseEventsOfWrapper",
                  value: function () {
                    var t = this.props.children,
                      e = this.getTooltipEventType(),
                      n = (0, Pt.sP)(t, St),
                      r = {};
                    return (
                      n &&
                        "axis" === e &&
                        (r =
                          "click" === n.props.trigger
                            ? { onClick: this.handleClick }
                            : {
                                onMouseEnter: this.handleMouseEnter,
                                onMouseMove: this.handleMouseMove,
                                onMouseLeave: this.handleMouseLeave,
                                onTouchMove: this.handleTouchMove,
                                onTouchStart: this.handleTouchStart,
                                onTouchEnd: this.handleTouchEnd,
                              }),
                      vn(
                        vn({}, (0, It.Ym)(this.props, this.handleOuterEvent)),
                        r,
                      )
                    );
                  },
                },
                {
                  key: "addListener",
                  value: function () {
                    Ge.on(Xe, this.handleReceiveSyncEvent);
                  },
                },
                {
                  key: "removeListener",
                  value: function () {
                    Ge.removeListener(Xe, this.handleReceiveSyncEvent);
                  },
                },
                {
                  key: "filterFormatItem",
                  value: function (t, e, n) {
                    for (
                      var r = this.state.formattedGraphicalItems,
                        o = 0,
                        i = r.length;
                      o < i;
                      o++
                    ) {
                      var a = r[o];
                      if (
                        a.item === t ||
                        a.props.key === t.key ||
                        (e === (0, Pt.Gf)(a.item.type) && n === a.childIndex)
                      )
                        return a;
                    }
                    return null;
                  },
                },
                {
                  key: "renderAxis",
                  value: function (t, e, n, o) {
                    var i = this.props,
                      a = i.width,
                      c = i.height;
                    return r.createElement(
                      ee,
                      an({}, t, {
                        className: (0, x.Z)(
                          "recharts-"
                            .concat(t.axisType, " ")
                            .concat(t.axisType),
                          t.className,
                        ),
                        key: e.key || "".concat(n, "-").concat(o),
                        viewBox: { x: 0, y: 0, width: a, height: c },
                        ticksGenerator: this.axesTicksGenerator,
                      }),
                    );
                  },
                },
                {
                  key: "renderClipPath",
                  value: function () {
                    var t = this.clipPathId,
                      e = this.state.offset,
                      n = e.left,
                      o = e.top,
                      i = e.height,
                      a = e.width;
                    return r.createElement(
                      "defs",
                      null,
                      r.createElement(
                        "clipPath",
                        { id: t },
                        r.createElement("rect", {
                          x: n,
                          y: o,
                          height: i,
                          width: a,
                        }),
                      ),
                    );
                  },
                },
                {
                  key: "getXScales",
                  value: function () {
                    var t = this.state.xAxisMap;
                    return t
                      ? Object.entries(t).reduce(function (t, e) {
                          var n = on(e, 2),
                            r = n[0],
                            o = n[1];
                          return vn(vn({}, t), {}, mn({}, r, o.scale));
                        }, {})
                      : null;
                  },
                },
                {
                  key: "getYScales",
                  value: function () {
                    var t = this.state.yAxisMap;
                    return t
                      ? Object.entries(t).reduce(function (t, e) {
                          var n = on(e, 2),
                            r = n[0],
                            o = n[1];
                          return vn(vn({}, t), {}, mn({}, r, o.scale));
                        }, {})
                      : null;
                  },
                },
                {
                  key: "getXScaleByAxisId",
                  value: function (t) {
                    var e;
                    return null === (e = this.state.xAxisMap) ||
                      void 0 === e ||
                      null === (e = e[t]) ||
                      void 0 === e
                      ? void 0
                      : e.scale;
                  },
                },
                {
                  key: "getYScaleByAxisId",
                  value: function (t) {
                    var e;
                    return null === (e = this.state.yAxisMap) ||
                      void 0 === e ||
                      null === (e = e[t]) ||
                      void 0 === e
                      ? void 0
                      : e.scale;
                  },
                },
                {
                  key: "getItemByXY",
                  value: function (t) {
                    var e = this.state,
                      n = e.formattedGraphicalItems,
                      r = e.activeItem;
                    if (n && n.length)
                      for (var o = 0, i = n.length; o < i; o++) {
                        var a = n[o],
                          c = a.props,
                          u = a.item,
                          l = (0, Pt.Gf)(u.type);
                        if ("Bar" === l) {
                          var s = (c.data || []).find(function (e) {
                            return (0, Bt.X)(t, e);
                          });
                          if (s) return { graphicalItem: a, payload: s };
                        } else if ("RadialBar" === l) {
                          var f = (c.data || []).find(function (e) {
                            return (0, w.z3)(t, e);
                          });
                          if (f) return { graphicalItem: a, payload: f };
                        } else if (
                          (0, Qe.lT)(a, r) ||
                          (0, Qe.V$)(a, r) ||
                          (0, Qe.w7)(a, r)
                        ) {
                          var p = (0, Qe.a3)({
                              graphicalItem: a,
                              activeTooltipItem: r,
                              itemData: u.props.data,
                            }),
                            h =
                              void 0 === u.props.activeIndex
                                ? p
                                : u.props.activeIndex;
                          return {
                            graphicalItem: vn(vn({}, a), {}, { childIndex: h }),
                            payload: (0, Qe.w7)(a, r)
                              ? u.props.data[p]
                              : a.props.data[p],
                          };
                        }
                      }
                    return null;
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var t = this;
                    if (!(0, Pt.TT)(this)) return null;
                    var e,
                      n,
                      o = this.props,
                      i = o.children,
                      a = o.className,
                      c = o.width,
                      u = o.height,
                      l = o.style,
                      s = o.compact,
                      f = o.title,
                      p = o.desc,
                      h = cn(o, nn),
                      d = (0, Pt.L6)(h);
                    if (s)
                      return r.createElement(
                        W.T,
                        an({}, d, { width: c, height: u, title: f, desc: p }),
                        this.renderClipPath(),
                        (0, Pt.eu)(i, this.renderMap),
                      );
                    this.props.accessibilityLayer &&
                      ((d.tabIndex =
                        null !== (e = this.props.tabIndex) && void 0 !== e
                          ? e
                          : 0),
                      (d.role =
                        null !== (n = this.props.role) && void 0 !== n
                          ? n
                          : "img"),
                      (d.onKeyDown = function (e) {
                        t.accessibilityManager.keyboardEvent(e);
                      }),
                      (d.onFocus = function () {
                        t.accessibilityManager.focus();
                      }));
                    var y = this.parseEventsOfWrapper();
                    return r.createElement(
                      "div",
                      an(
                        {
                          className: (0, x.Z)("recharts-wrapper", a),
                          style: vn(
                            {
                              position: "relative",
                              cursor: "default",
                              width: c,
                              height: u,
                            },
                            l,
                          ),
                        },
                        y,
                        {
                          ref: function (e) {
                            t.container = e;
                          },
                          role: "region",
                        },
                      ),
                      r.createElement(
                        W.T,
                        an({}, d, {
                          width: c,
                          height: u,
                          title: f,
                          desc: p,
                          style: xn,
                        }),
                        this.renderClipPath(),
                        (0, Pt.eu)(i, this.renderMap),
                      ),
                      this.renderLegend(),
                      this.renderTooltip(),
                    );
                  },
                },
              ]),
              n && un(e.prototype, n),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              l
            );
          })(r.Component)),
          mn(pr, "displayName", hr),
          mn(
            pr,
            "defaultProps",
            vn(
              {
                layout: "horizontal",
                stackOffset: "none",
                barCategoryGap: "10%",
                barGap: 4,
                margin: { top: 5, right: 5, bottom: 5, left: 5 },
                reverseStackOrder: !1,
                syncMethod: "index",
              },
              Or,
            ),
          ),
          mn(pr, "getDerivedStateFromProps", function (t, e) {
            var n = t.dataKey,
              r = t.data,
              o = t.children,
              a = t.width,
              c = t.height,
              u = t.layout,
              l = t.stackOffset,
              s = t.margin;
            if (void 0 === e.updateId) {
              var f = Pn(t);
              return vn(
                vn(
                  vn({}, f),
                  {},
                  { updateId: 0 },
                  jr(vn(vn({ props: t }, f), {}, { updateId: 0 }), e),
                ),
                {},
                {
                  prevDataKey: n,
                  prevData: r,
                  prevWidth: a,
                  prevHeight: c,
                  prevLayout: u,
                  prevStackOffset: l,
                  prevMargin: s,
                  prevChildren: o,
                },
              );
            }
            if (
              n !== e.prevDataKey ||
              r !== e.prevData ||
              a !== e.prevWidth ||
              c !== e.prevHeight ||
              u !== e.prevLayout ||
              l !== e.prevStackOffset ||
              !(0, Ut.w)(s, e.prevMargin)
            ) {
              var p = Pn(t),
                h = {
                  chartX: e.chartX,
                  chartY: e.chartY,
                  isTooltipActive: e.isTooltipActive,
                },
                d = vn(vn({}, En(e, r, u)), {}, { updateId: e.updateId + 1 }),
                y = vn(vn(vn({}, p), h), d);
              return vn(
                vn(vn({}, y), jr(vn({ props: t }, y), e)),
                {},
                {
                  prevDataKey: n,
                  prevData: r,
                  prevWidth: a,
                  prevHeight: c,
                  prevLayout: u,
                  prevStackOffset: l,
                  prevMargin: s,
                  prevChildren: o,
                },
              );
            }
            if (!(0, Pt.rL)(o, e.prevChildren)) {
              var v = i()(r) ? e.updateId + 1 : e.updateId;
              return vn(
                vn(
                  { updateId: v },
                  jr(vn(vn({ props: t }, e), {}, { updateId: v }), e),
                ),
                {},
                { prevChildren: o },
              );
            }
            return null;
          }),
          mn(pr, "renderActiveDot", function (t, e) {
            var n;
            return (
              (n = (0, r.isValidElement)(t)
                ? (0, r.cloneElement)(t, e)
                : c()(t)
                  ? t(e)
                  : r.createElement(Rt, e)),
              r.createElement(
                Z.m,
                { className: "recharts-active-dot", key: e.key },
                n,
              )
            );
          }),
          pr);
    },
    25048: (t, e, n) => {
      "use strict";
      n.d(e, { _: () => A });
      var r = n(67294),
        o = n(14293),
        i = n.n(o),
        a = n(23560),
        c = n.n(a),
        u = n(13218),
        l = n.n(u),
        s = n(90512),
        f = n(37517),
        p = n(52017),
        h = n(69055),
        d = n(40048);
      function y(t) {
        return (
          (y =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          y(t)
        );
      }
      var v = ["offset"];
      function m(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function g(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function b(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? g(Object(n), !0).forEach(function (e) {
                var r, o, i;
                (r = t),
                  (o = e),
                  (i = n[e]),
                  (o = (function (t) {
                    var e = (function (t, e) {
                      if ("object" !== y(t) || null === t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, "string");
                        if ("object" !== y(r)) return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return String(t);
                    })(t);
                    return "symbol" === y(e) ? e : String(e);
                  })(o)) in r
                    ? Object.defineProperty(r, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[o] = i);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : g(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function x() {
        return (
          (x = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          x.apply(this, arguments)
        );
      }
      var w = function (t) {
          var e = t.value,
            n = t.formatter,
            r = i()(t.children) ? e : t.children;
          return c()(n) ? n(r) : r;
        },
        O = function (t, e, n) {
          var o,
            a,
            c = t.position,
            u = t.viewBox,
            l = t.offset,
            f = t.className,
            p = u,
            y = p.cx,
            v = p.cy,
            m = p.innerRadius,
            g = p.outerRadius,
            b = p.startAngle,
            w = p.endAngle,
            O = p.clockWise,
            j = (m + g) / 2,
            S = (function (t, e) {
              return (0, h.uY)(e - t) * Math.min(Math.abs(e - t), 360);
            })(b, w),
            E = S >= 0 ? 1 : -1;
          "insideStart" === c
            ? ((o = b + E * l), (a = O))
            : "insideEnd" === c
              ? ((o = w - E * l), (a = !O))
              : "end" === c && ((o = w + E * l), (a = O)),
            (a = S <= 0 ? a : !a);
          var A = (0, d.op)(y, v, j, o),
            P = (0, d.op)(y, v, j, o + 359 * (a ? 1 : -1)),
            k = "M"
              .concat(A.x, ",")
              .concat(A.y, "\n    A")
              .concat(j, ",")
              .concat(j, ",0,1,")
              .concat(a ? 0 : 1, ",\n    ")
              .concat(P.x, ",")
              .concat(P.y),
            M = i()(t.id) ? (0, h.EL)("recharts-radial-line-") : t.id;
          return r.createElement(
            "text",
            x({}, n, {
              dominantBaseline: "central",
              className: (0, s.Z)("recharts-radial-bar-label", f),
            }),
            r.createElement(
              "defs",
              null,
              r.createElement("path", { id: M, d: k }),
            ),
            r.createElement("textPath", { xlinkHref: "#".concat(M) }, e),
          );
        },
        j = function (t) {
          var e = t.viewBox,
            n = t.offset,
            r = t.position,
            o = e,
            i = o.cx,
            a = o.cy,
            c = o.innerRadius,
            u = o.outerRadius,
            l = (o.startAngle + o.endAngle) / 2;
          if ("outside" === r) {
            var s = (0, d.op)(i, a, u + n, l),
              f = s.x;
            return {
              x: f,
              y: s.y,
              textAnchor: f >= i ? "start" : "end",
              verticalAnchor: "middle",
            };
          }
          if ("center" === r)
            return {
              x: i,
              y: a,
              textAnchor: "middle",
              verticalAnchor: "middle",
            };
          if ("centerTop" === r)
            return {
              x: i,
              y: a,
              textAnchor: "middle",
              verticalAnchor: "start",
            };
          if ("centerBottom" === r)
            return { x: i, y: a, textAnchor: "middle", verticalAnchor: "end" };
          var p = (c + u) / 2,
            h = (0, d.op)(i, a, p, l);
          return {
            x: h.x,
            y: h.y,
            textAnchor: "middle",
            verticalAnchor: "middle",
          };
        },
        S = function (t) {
          var e = t.viewBox,
            n = t.parentViewBox,
            r = t.offset,
            o = t.position,
            i = e,
            a = i.x,
            c = i.y,
            u = i.width,
            s = i.height,
            f = s >= 0 ? 1 : -1,
            p = f * r,
            d = f > 0 ? "end" : "start",
            y = f > 0 ? "start" : "end",
            v = u >= 0 ? 1 : -1,
            m = v * r,
            g = v > 0 ? "end" : "start",
            x = v > 0 ? "start" : "end";
          if ("top" === o)
            return b(
              b(
                {},
                {
                  x: a + u / 2,
                  y: c - f * r,
                  textAnchor: "middle",
                  verticalAnchor: d,
                },
              ),
              n ? { height: Math.max(c - n.y, 0), width: u } : {},
            );
          if ("bottom" === o)
            return b(
              b(
                {},
                {
                  x: a + u / 2,
                  y: c + s + p,
                  textAnchor: "middle",
                  verticalAnchor: y,
                },
              ),
              n
                ? { height: Math.max(n.y + n.height - (c + s), 0), width: u }
                : {},
            );
          if ("left" === o) {
            var w = {
              x: a - m,
              y: c + s / 2,
              textAnchor: g,
              verticalAnchor: "middle",
            };
            return b(
              b({}, w),
              n ? { width: Math.max(w.x - n.x, 0), height: s } : {},
            );
          }
          if ("right" === o) {
            var O = {
              x: a + u + m,
              y: c + s / 2,
              textAnchor: x,
              verticalAnchor: "middle",
            };
            return b(
              b({}, O),
              n ? { width: Math.max(n.x + n.width - O.x, 0), height: s } : {},
            );
          }
          var j = n ? { width: u, height: s } : {};
          return "insideLeft" === o
            ? b(
                {
                  x: a + m,
                  y: c + s / 2,
                  textAnchor: x,
                  verticalAnchor: "middle",
                },
                j,
              )
            : "insideRight" === o
              ? b(
                  {
                    x: a + u - m,
                    y: c + s / 2,
                    textAnchor: g,
                    verticalAnchor: "middle",
                  },
                  j,
                )
              : "insideTop" === o
                ? b(
                    {
                      x: a + u / 2,
                      y: c + p,
                      textAnchor: "middle",
                      verticalAnchor: y,
                    },
                    j,
                  )
                : "insideBottom" === o
                  ? b(
                      {
                        x: a + u / 2,
                        y: c + s - p,
                        textAnchor: "middle",
                        verticalAnchor: d,
                      },
                      j,
                    )
                  : "insideTopLeft" === o
                    ? b(
                        {
                          x: a + m,
                          y: c + p,
                          textAnchor: x,
                          verticalAnchor: y,
                        },
                        j,
                      )
                    : "insideTopRight" === o
                      ? b(
                          {
                            x: a + u - m,
                            y: c + p,
                            textAnchor: g,
                            verticalAnchor: y,
                          },
                          j,
                        )
                      : "insideBottomLeft" === o
                        ? b(
                            {
                              x: a + m,
                              y: c + s - p,
                              textAnchor: x,
                              verticalAnchor: d,
                            },
                            j,
                          )
                        : "insideBottomRight" === o
                          ? b(
                              {
                                x: a + u - m,
                                y: c + s - p,
                                textAnchor: g,
                                verticalAnchor: d,
                              },
                              j,
                            )
                          : l()(o) &&
                              ((0, h.hj)(o.x) || (0, h.hU)(o.x)) &&
                              ((0, h.hj)(o.y) || (0, h.hU)(o.y))
                            ? b(
                                {
                                  x: a + (0, h.h1)(o.x, u),
                                  y: c + (0, h.h1)(o.y, s),
                                  textAnchor: "end",
                                  verticalAnchor: "end",
                                },
                                j,
                              )
                            : b(
                                {
                                  x: a + u / 2,
                                  y: c + s / 2,
                                  textAnchor: "middle",
                                  verticalAnchor: "middle",
                                },
                                j,
                              );
        },
        E = function (t) {
          return "cx" in t && (0, h.hj)(t.cx);
        };
      function A(t) {
        var e,
          n = t.offset,
          o = b(
            { offset: void 0 === n ? 5 : n },
            (function (t, e) {
              if (null == t) return {};
              var n,
                r,
                o = (function (t, e) {
                  if (null == t) return {};
                  var n,
                    r,
                    o = {},
                    i = Object.keys(t);
                  for (r = 0; r < i.length; r++)
                    (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                  return o;
                })(t, e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (r = 0; r < i.length; r++)
                  (n = i[r]),
                    e.indexOf(n) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(t, n) &&
                        (o[n] = t[n]));
              }
              return o;
            })(t, v),
          ),
          a = o.viewBox,
          u = o.position,
          l = o.value,
          h = o.children,
          d = o.content,
          y = o.className,
          m = void 0 === y ? "" : y,
          g = o.textBreakAll;
        if (!a || (i()(l) && i()(h) && !(0, r.isValidElement)(d) && !c()(d)))
          return null;
        if ((0, r.isValidElement)(d)) return (0, r.cloneElement)(d, o);
        if (c()(d)) {
          if (((e = (0, r.createElement)(d, o)), (0, r.isValidElement)(e)))
            return e;
        } else e = w(o);
        var A = E(a),
          P = (0, p.L6)(o, !0);
        if (A && ("insideStart" === u || "insideEnd" === u || "end" === u))
          return O(o, e, P);
        var k = A ? j(o) : S(o);
        return r.createElement(
          f.x,
          x({ className: (0, s.Z)("recharts-label", m) }, P, k, {
            breakAll: g,
          }),
          e,
        );
      }
      A.displayName = "Label";
      var P = function (t) {
        var e = t.cx,
          n = t.cy,
          r = t.angle,
          o = t.startAngle,
          i = t.endAngle,
          a = t.r,
          c = t.radius,
          u = t.innerRadius,
          l = t.outerRadius,
          s = t.x,
          f = t.y,
          p = t.top,
          d = t.left,
          y = t.width,
          v = t.height,
          m = t.clockWise,
          g = t.labelViewBox;
        if (g) return g;
        if ((0, h.hj)(y) && (0, h.hj)(v)) {
          if ((0, h.hj)(s) && (0, h.hj)(f))
            return { x: s, y: f, width: y, height: v };
          if ((0, h.hj)(p) && (0, h.hj)(d))
            return { x: p, y: d, width: y, height: v };
        }
        return (0, h.hj)(s) && (0, h.hj)(f)
          ? { x: s, y: f, width: 0, height: 0 }
          : (0, h.hj)(e) && (0, h.hj)(n)
            ? {
                cx: e,
                cy: n,
                startAngle: o || r || 0,
                endAngle: i || r || 0,
                innerRadius: u || 0,
                outerRadius: l || c || a || 0,
                clockWise: m,
              }
            : t.viewBox
              ? t.viewBox
              : {};
      };
      (A.parseViewBox = P),
        (A.renderCallByParent = function (t, e) {
          var n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          if (!t || (!t.children && n && !t.label)) return null;
          var o = t.children,
            i = P(t),
            a = (0, p.NN)(o, A).map(function (t, n) {
              return (0, r.cloneElement)(t, {
                viewBox: e || i,
                key: "label-".concat(n),
              });
            });
          if (!n) return a;
          var u,
            s = (function (t, e) {
              return t
                ? !0 === t
                  ? r.createElement(A, { key: "label-implicit", viewBox: e })
                  : (0, h.P2)(t)
                    ? r.createElement(A, {
                        key: "label-implicit",
                        viewBox: e,
                        value: t,
                      })
                    : (0, r.isValidElement)(t)
                      ? t.type === A
                        ? (0, r.cloneElement)(t, {
                            key: "label-implicit",
                            viewBox: e,
                          })
                        : r.createElement(A, {
                            key: "label-implicit",
                            content: t,
                            viewBox: e,
                          })
                      : c()(t)
                        ? r.createElement(A, {
                            key: "label-implicit",
                            content: t,
                            viewBox: e,
                          })
                        : l()(t)
                          ? r.createElement(
                              A,
                              x({ viewBox: e }, t, { key: "label-implicit" }),
                            )
                          : null
                : null;
            })(t.label, e || i);
          return [s].concat(
            (function (t) {
              if (Array.isArray(t)) return m(t);
            })((u = a)) ||
              (function (t) {
                if (
                  ("undefined" != typeof Symbol &&
                    null != t[Symbol.iterator]) ||
                  null != t["@@iterator"]
                )
                  return Array.from(t);
              })(u) ||
              (function (t, e) {
                if (t) {
                  if ("string" == typeof t) return m(t, e);
                  var n = Object.prototype.toString.call(t).slice(8, -1);
                  return (
                    "Object" === n && t.constructor && (n = t.constructor.name),
                    "Map" === n || "Set" === n
                      ? Array.from(t)
                      : "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? m(t, e)
                        : void 0
                  );
                }
              })(u) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
              })(),
          );
        });
    },
    23872: (t, e, n) => {
      "use strict";
      n.d(e, { D: () => D });
      var r = n(67294),
        o = n(23560),
        i = n.n(o),
        a = n(90512),
        c = n(6213),
        u = n(20514),
        l = n(70653),
        s = n(79896);
      function f(t) {
        return (
          (f =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          f(t)
        );
      }
      function p() {
        return (
          (p = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          p.apply(this, arguments)
        );
      }
      function h(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function d(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, g(r.key), r);
        }
      }
      function y(t, e) {
        return (
          (y = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          y(t, e)
        );
      }
      function v(t) {
        return (
          (v = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          v(t)
        );
      }
      function m(t, e, n) {
        return (
          (e = g(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function g(t) {
        var e = (function (t, e) {
          if ("object" !== f(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" !== f(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" === f(e) ? e : String(e);
      }
      var b = 32,
        x = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && y(t, e);
          })(w, t);
          var e,
            n,
            o,
            g,
            x =
              ((o = w),
              (g = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {}),
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()),
              function () {
                var t,
                  e = v(o);
                if (g) {
                  var n = v(this).constructor;
                  t = Reflect.construct(e, arguments, n);
                } else t = e.apply(this, arguments);
                return (function (t, e) {
                  if (e && ("object" === f(e) || "function" == typeof e))
                    return e;
                  if (void 0 !== e)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined",
                    );
                  return (function (t) {
                    if (void 0 === t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return t;
                  })(t);
                })(this, t);
              });
          function w() {
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, w),
              x.apply(this, arguments)
            );
          }
          return (
            (e = w),
            (n = [
              {
                key: "renderIcon",
                value: function (t) {
                  var e = this.props.inactiveColor,
                    n = 16,
                    o = b / 6,
                    i = b / 3,
                    a = t.inactive ? e : t.color;
                  if ("plainline" === t.type)
                    return r.createElement("line", {
                      strokeWidth: 4,
                      fill: "none",
                      stroke: a,
                      strokeDasharray: t.payload.strokeDasharray,
                      x1: 0,
                      y1: n,
                      x2: b,
                      y2: n,
                      className: "recharts-legend-icon",
                    });
                  if ("line" === t.type)
                    return r.createElement("path", {
                      strokeWidth: 4,
                      fill: "none",
                      stroke: a,
                      d: "M0,"
                        .concat(n, "h")
                        .concat(i, "\n            A")
                        .concat(o, ",")
                        .concat(o, ",0,1,1,")
                        .concat(2 * i, ",")
                        .concat(n, "\n            H")
                        .concat(b, "M")
                        .concat(2 * i, ",")
                        .concat(n, "\n            A")
                        .concat(o, ",")
                        .concat(o, ",0,1,1,")
                        .concat(i, ",")
                        .concat(n),
                      className: "recharts-legend-icon",
                    });
                  if ("rect" === t.type)
                    return r.createElement("path", {
                      stroke: "none",
                      fill: a,
                      d: "M0,"
                        .concat(4, "h")
                        .concat(b, "v")
                        .concat(24, "h")
                        .concat(-32, "z"),
                      className: "recharts-legend-icon",
                    });
                  if (r.isValidElement(t.legendIcon)) {
                    var c = (function (t) {
                      for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2
                          ? h(Object(n), !0).forEach(function (e) {
                              m(t, e, n[e]);
                            })
                          : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                t,
                                Object.getOwnPropertyDescriptors(n),
                              )
                            : h(Object(n)).forEach(function (e) {
                                Object.defineProperty(
                                  t,
                                  e,
                                  Object.getOwnPropertyDescriptor(n, e),
                                );
                              });
                      }
                      return t;
                    })({}, t);
                    return delete c.legendIcon, r.cloneElement(t.legendIcon, c);
                  }
                  return r.createElement(l.v, {
                    fill: a,
                    cx: n,
                    cy: n,
                    size: b,
                    sizeType: "diameter",
                    type: t.type,
                  });
                },
              },
              {
                key: "renderItems",
                value: function () {
                  var t = this,
                    e = this.props,
                    n = e.payload,
                    o = e.iconSize,
                    l = e.layout,
                    f = e.formatter,
                    h = e.inactiveColor,
                    d = { x: 0, y: 0, width: b, height: b },
                    y = {
                      display: "horizontal" === l ? "inline-block" : "block",
                      marginRight: 10,
                    },
                    v = {
                      display: "inline-block",
                      verticalAlign: "middle",
                      marginRight: 4,
                    };
                  return n.map(function (e, n) {
                    var l,
                      g = e.formatter || f,
                      b = (0, a.Z)(
                        (m(
                          (l = { "recharts-legend-item": !0 }),
                          "legend-item-".concat(n),
                          !0,
                        ),
                        m(l, "inactive", e.inactive),
                        l),
                      );
                    if ("none" === e.type) return null;
                    var x = i()(e.value) ? null : e.value;
                    (0, c.Z)(
                      !i()(e.value),
                      'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>',
                    );
                    var w = e.inactive ? h : e.color;
                    return r.createElement(
                      "li",
                      p(
                        {
                          className: b,
                          style: y,
                          key: "legend-item-".concat(n),
                        },
                        (0, s.bw)(t.props, e, n),
                      ),
                      r.createElement(
                        u.T,
                        { width: o, height: o, viewBox: d, style: v },
                        t.renderIcon(e),
                      ),
                      r.createElement(
                        "span",
                        {
                          className: "recharts-legend-item-text",
                          style: { color: w },
                        },
                        g ? g(x, e, n) : x,
                      ),
                    );
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    e = t.payload,
                    n = t.layout,
                    o = t.align;
                  if (!e || !e.length) return null;
                  var i = {
                    padding: 0,
                    margin: 0,
                    textAlign: "horizontal" === n ? o : "left",
                  };
                  return r.createElement(
                    "ul",
                    { className: "recharts-default-legend", style: i },
                    this.renderItems(),
                  );
                },
              },
            ]),
            n && d(e.prototype, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            w
          );
        })(r.PureComponent);
      m(x, "displayName", "Legend"),
        m(x, "defaultProps", {
          iconSize: 14,
          layout: "horizontal",
          align: "center",
          verticalAlign: "middle",
          inactiveColor: "#ccc",
        });
      var w = n(69055),
        O = n(78817);
      function j(t) {
        return (
          (j =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          j(t)
        );
      }
      var S = ["ref"];
      function E(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function A(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? E(Object(n), !0).forEach(function (e) {
                _(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : E(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function P(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, C(r.key), r);
        }
      }
      function k(t, e) {
        return (
          (k = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          k(t, e)
        );
      }
      function M(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function T(t) {
        return (
          (T = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          T(t)
        );
      }
      function _(t, e, n) {
        return (
          (e = C(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function C(t) {
        var e = (function (t, e) {
          if ("object" !== j(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" !== j(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" === j(e) ? e : String(e);
      }
      function N(t) {
        return t.value;
      }
      var D = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && k(t, e);
        })(u, t);
        var e,
          n,
          o,
          i,
          a,
          c =
            ((i = u),
            (a = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {}),
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = T(i);
              if (a) {
                var n = T(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                if (e && ("object" === j(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined",
                  );
                return M(t);
              })(this, t);
            });
        function u() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, u);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            _(M((t = c.call.apply(c, [this].concat(n)))), "lastBoundingBox", {
              width: -1,
              height: -1,
            }),
            t
          );
        }
        return (
          (e = u),
          (o = [
            {
              key: "getWithHeight",
              value: function (t, e) {
                var n = t.props.layout;
                return "vertical" === n && (0, w.hj)(t.props.height)
                  ? { height: t.props.height }
                  : "horizontal" === n
                    ? { width: t.props.width || e }
                    : null;
              },
            },
          ]),
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                this.updateBBox();
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                this.updateBBox();
              },
            },
            {
              key: "getBBox",
              value: function () {
                return this.wrapperNode &&
                  this.wrapperNode.getBoundingClientRect
                  ? this.wrapperNode.getBoundingClientRect()
                  : null;
              },
            },
            {
              key: "updateBBox",
              value: function () {
                var t = this.props.onBBoxUpdate;
                if (
                  this.wrapperNode &&
                  this.wrapperNode.getBoundingClientRect
                ) {
                  var e = this.wrapperNode.getBoundingClientRect();
                  (Math.abs(e.width - this.lastBoundingBox.width) > 1 ||
                    Math.abs(e.height - this.lastBoundingBox.height) > 1) &&
                    ((this.lastBoundingBox.width = e.width),
                    (this.lastBoundingBox.height = e.height),
                    t && t(e));
                } else
                  (-1 === this.lastBoundingBox.width &&
                    -1 === this.lastBoundingBox.height) ||
                    ((this.lastBoundingBox.width = -1),
                    (this.lastBoundingBox.height = -1),
                    t && t(null));
              },
            },
            {
              key: "getBBoxSnapshot",
              value: function () {
                return this.lastBoundingBox.width >= 0 &&
                  this.lastBoundingBox.height >= 0
                  ? A({}, this.lastBoundingBox)
                  : { width: 0, height: 0 };
              },
            },
            {
              key: "getDefaultPosition",
              value: function (t) {
                var e,
                  n,
                  r = this.props,
                  o = r.layout,
                  i = r.align,
                  a = r.verticalAlign,
                  c = r.margin,
                  u = r.chartWidth,
                  l = r.chartHeight;
                return (
                  (t &&
                    ((void 0 !== t.left && null !== t.left) ||
                      (void 0 !== t.right && null !== t.right))) ||
                    (e =
                      "center" === i && "vertical" === o
                        ? {
                            left: ((u || 0) - this.getBBoxSnapshot().width) / 2,
                          }
                        : "right" === i
                          ? { right: (c && c.right) || 0 }
                          : { left: (c && c.left) || 0 }),
                  (t &&
                    ((void 0 !== t.top && null !== t.top) ||
                      (void 0 !== t.bottom && null !== t.bottom))) ||
                    (n =
                      "middle" === a
                        ? {
                            top: ((l || 0) - this.getBBoxSnapshot().height) / 2,
                          }
                        : "bottom" === a
                          ? { bottom: (c && c.bottom) || 0 }
                          : { top: (c && c.top) || 0 }),
                  A(A({}, e), n)
                );
              },
            },
            {
              key: "render",
              value: function () {
                var t = this,
                  e = this.props,
                  n = e.content,
                  o = e.width,
                  i = e.height,
                  a = e.wrapperStyle,
                  c = e.payloadUniqBy,
                  u = e.payload,
                  l = A(
                    A(
                      {
                        position: "absolute",
                        width: o || "auto",
                        height: i || "auto",
                      },
                      this.getDefaultPosition(a),
                    ),
                    a,
                  );
                return r.createElement(
                  "div",
                  {
                    className: "recharts-legend-wrapper",
                    style: l,
                    ref: function (e) {
                      t.wrapperNode = e;
                    },
                  },
                  (function (t, e) {
                    if (r.isValidElement(t)) return r.cloneElement(t, e);
                    if ("function" == typeof t) return r.createElement(t, e);
                    e.ref;
                    var n = (function (t, e) {
                      if (null == t) return {};
                      var n,
                        r,
                        o = (function (t, e) {
                          if (null == t) return {};
                          var n,
                            r,
                            o = {},
                            i = Object.keys(t);
                          for (r = 0; r < i.length; r++)
                            (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                          return o;
                        })(t, e);
                      if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(t);
                        for (r = 0; r < i.length; r++)
                          (n = i[r]),
                            e.indexOf(n) >= 0 ||
                              (Object.prototype.propertyIsEnumerable.call(
                                t,
                                n,
                              ) &&
                                (o[n] = t[n]));
                      }
                      return o;
                    })(e, S);
                    return r.createElement(x, n);
                  })(
                    n,
                    A(A({}, this.props), {}, { payload: (0, O.z)(u, c, N) }),
                  ),
                );
              },
            },
          ]) && P(e.prototype, n),
          o && P(e, o),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          u
        );
      })(r.PureComponent);
      _(D, "displayName", "Legend"),
        _(D, "defaultProps", {
          iconSize: 14,
          layout: "horizontal",
          align: "center",
          verticalAlign: "bottom",
        });
    },
    29009: (t, e, n) => {
      "use strict";
      n.d(e, { h: () => y });
      var r = n(90512),
        o = n(67294),
        i = n(23493),
        a = n.n(i),
        c = n(59864),
        u = n(69055),
        l = n(6213),
        s = n(52017);
      function f(t) {
        return (
          (f =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          f(t)
        );
      }
      function p(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function h(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? p(Object(n), !0).forEach(function (e) {
                var r, o, i;
                (r = t),
                  (o = e),
                  (i = n[e]),
                  (o = (function (t) {
                    var e = (function (t, e) {
                      if ("object" !== f(t) || null === t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, "string");
                        if ("object" !== f(r)) return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return String(t);
                    })(t);
                    return "symbol" === f(e) ? e : String(e);
                  })(o)) in r
                    ? Object.defineProperty(r, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[o] = i);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : p(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function d(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var y = (0, o.forwardRef)(function (t, e) {
        var n = t.aspect,
          i = t.initialDimension,
          f = void 0 === i ? { width: -1, height: -1 } : i,
          p = t.width,
          y = void 0 === p ? "100%" : p,
          v = t.height,
          m = void 0 === v ? "100%" : v,
          g = t.minWidth,
          b = void 0 === g ? 0 : g,
          x = t.minHeight,
          w = t.maxHeight,
          O = t.children,
          j = t.debounce,
          S = void 0 === j ? 0 : j,
          E = t.id,
          A = t.className,
          P = t.onResize,
          k = t.style,
          M = void 0 === k ? {} : k,
          T = (0, o.useRef)(null),
          _ = (0, o.useRef)();
        (_.current = P),
          (0, o.useImperativeHandle)(e, function () {
            return T;
          });
        var C,
          N,
          D =
            ((C = (0, o.useState)({
              containerWidth: f.width,
              containerHeight: f.height,
            })),
            (N = 2),
            (function (t) {
              if (Array.isArray(t)) return t;
            })(C) ||
              (function (t, e) {
                var n =
                  null == t
                    ? null
                    : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                      t["@@iterator"];
                if (null != n) {
                  var r,
                    o,
                    i,
                    a,
                    c = [],
                    u = !0,
                    l = !1;
                  try {
                    if (((i = (n = n.call(t)).next), 0 === e)) {
                      if (Object(n) !== n) return;
                      u = !1;
                    } else
                      for (
                        ;
                        !(u = (r = i.call(n)).done) &&
                        (c.push(r.value), c.length !== e);
                        u = !0
                      );
                  } catch (t) {
                    (l = !0), (o = t);
                  } finally {
                    try {
                      if (
                        !u &&
                        null != n.return &&
                        ((a = n.return()), Object(a) !== a)
                      )
                        return;
                    } finally {
                      if (l) throw o;
                    }
                  }
                  return c;
                }
              })(C, N) ||
              (function (t, e) {
                if (t) {
                  if ("string" == typeof t) return d(t, e);
                  var n = Object.prototype.toString.call(t).slice(8, -1);
                  return (
                    "Object" === n && t.constructor && (n = t.constructor.name),
                    "Map" === n || "Set" === n
                      ? Array.from(t)
                      : "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? d(t, e)
                        : void 0
                  );
                }
              })(C, N) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
              })()),
          I = D[0],
          L = D[1],
          R = (0, o.useCallback)(function (t, e) {
            L(function (n) {
              var r = Math.round(t),
                o = Math.round(e);
              return n.containerWidth === r && n.containerHeight === o
                ? n
                : { containerWidth: r, containerHeight: o };
            });
          }, []);
        (0, o.useEffect)(
          function () {
            var t = function (t) {
              var e,
                n = t[0].contentRect,
                r = n.width,
                o = n.height;
              R(r, o),
                null === (e = _.current) || void 0 === e || e.call(_, r, o);
            };
            S > 0 && (t = a()(t, S, { trailing: !0, leading: !1 }));
            var e = new ResizeObserver(t),
              n = T.current.getBoundingClientRect(),
              r = n.width,
              o = n.height;
            return (
              R(r, o),
              e.observe(T.current),
              function () {
                e.disconnect();
              }
            );
          },
          [R, S],
        );
        var B = (0, o.useMemo)(
          function () {
            var t = I.containerWidth,
              e = I.containerHeight;
            if (t < 0 || e < 0) return null;
            (0, l.Z)(
              (0, u.hU)(y) || (0, u.hU)(m),
              "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.",
              y,
              m,
            ),
              (0, l.Z)(
                !n || n > 0,
                "The aspect(%s) must be greater than zero.",
                n,
              );
            var r = (0, u.hU)(y) ? t : y,
              i = (0, u.hU)(m) ? e : m;
            n &&
              n > 0 &&
              (r ? (i = r / n) : i && (r = i * n), w && i > w && (i = w)),
              (0, l.Z)(
                r > 0 || i > 0,
                "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.",
                r,
                i,
                y,
                m,
                b,
                x,
                n,
              );
            var a =
              !Array.isArray(O) &&
              (0, c.isElement)(O) &&
              (0, s.Gf)(O.type).endsWith("Chart");
            return o.Children.map(O, function (t) {
              return (0, c.isElement)(t)
                ? (0, o.cloneElement)(
                    t,
                    h(
                      { width: r, height: i },
                      a
                        ? {
                            style: h(
                              {
                                height: "100%",
                                width: "100%",
                                maxHeight: i,
                                maxWidth: r,
                              },
                              t.props.style,
                            ),
                          }
                        : {},
                    ),
                  )
                : t;
            });
          },
          [n, O, m, w, x, b, I, y],
        );
        return o.createElement(
          "div",
          {
            id: E ? "".concat(E) : void 0,
            className: (0, r.Z)("recharts-responsive-container", A),
            style: h(
              h({}, M),
              {},
              { width: y, height: m, minWidth: b, minHeight: x, maxHeight: w },
            ),
            ref: T,
          },
          B,
        );
      });
    },
    37517: (t, e, n) => {
      "use strict";
      n.d(e, { x: () => L });
      var r = n(67294),
        o = n(14293),
        i = n.n(o),
        a = n(90512),
        c = n(69055),
        u = n(47523),
        l = n(52017),
        s = n(41209);
      function f(t) {
        return (
          (f =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          f(t)
        );
      }
      function p(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                o,
                i,
                a,
                c = [],
                u = !0,
                l = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = i.call(n)).done) &&
                    (c.push(r.value), c.length !== e);
                    u = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
                }
              }
              return c;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return h(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? h(t, e)
                    : void 0
              );
            }
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function h(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function d(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(
              t,
              (void 0,
              (o = (function (t, e) {
                if ("object" !== f(t) || null === t) return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(t, "string");
                  if ("object" !== f(r)) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return String(t);
              })(r.key)),
              "symbol" === f(o) ? o : String(o)),
              r,
            );
        }
        var o;
      }
      var y = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
        v = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
        m = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
        g = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
        b = {
          cm: 96 / 2.54,
          mm: 96 / 25.4,
          pt: 96 / 72,
          pc: 16,
          in: 96,
          Q: 96 / 101.6,
          px: 1,
        },
        x = Object.keys(b),
        w = "NaN",
        O = (function () {
          function t(e, n) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.num = e),
              (this.unit = n),
              (this.num = e),
              (this.unit = n),
              Number.isNaN(e) && (this.unit = ""),
              "" === n || m.test(n) || ((this.num = NaN), (this.unit = "")),
              x.includes(n) &&
                ((this.num = (function (t, e) {
                  return t * b[e];
                })(e, n)),
                (this.unit = "px"));
          }
          var e, n, r;
          return (
            (e = t),
            (r = [
              {
                key: "parse",
                value: function (e) {
                  var n,
                    r = p(null !== (n = g.exec(e)) && void 0 !== n ? n : [], 3),
                    o = r[1],
                    i = r[2];
                  return new t(parseFloat(o), null != i ? i : "");
                },
              },
            ]),
            (n = [
              {
                key: "add",
                value: function (e) {
                  return this.unit !== e.unit
                    ? new t(NaN, "")
                    : new t(this.num + e.num, this.unit);
                },
              },
              {
                key: "subtract",
                value: function (e) {
                  return this.unit !== e.unit
                    ? new t(NaN, "")
                    : new t(this.num - e.num, this.unit);
                },
              },
              {
                key: "multiply",
                value: function (e) {
                  return "" !== this.unit &&
                    "" !== e.unit &&
                    this.unit !== e.unit
                    ? new t(NaN, "")
                    : new t(this.num * e.num, this.unit || e.unit);
                },
              },
              {
                key: "divide",
                value: function (e) {
                  return "" !== this.unit &&
                    "" !== e.unit &&
                    this.unit !== e.unit
                    ? new t(NaN, "")
                    : new t(this.num / e.num, this.unit || e.unit);
                },
              },
              {
                key: "toString",
                value: function () {
                  return "".concat(this.num).concat(this.unit);
                },
              },
              {
                key: "isNaN",
                value: function () {
                  return Number.isNaN(this.num);
                },
              },
            ]) && d(e.prototype, n),
            r && d(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t
          );
        })();
      function j(t) {
        if (t.includes(w)) return w;
        for (var e = t; e.includes("*") || e.includes("/"); ) {
          var n,
            r = p(null !== (n = y.exec(e)) && void 0 !== n ? n : [], 4),
            o = r[1],
            i = r[2],
            a = r[3],
            c = O.parse(null != o ? o : ""),
            u = O.parse(null != a ? a : ""),
            l = "*" === i ? c.multiply(u) : c.divide(u);
          if (l.isNaN()) return w;
          e = e.replace(y, l.toString());
        }
        for (; e.includes("+") || /.-\d+(?:\.\d+)?/.test(e); ) {
          var s,
            f = p(null !== (s = v.exec(e)) && void 0 !== s ? s : [], 4),
            h = f[1],
            d = f[2],
            m = f[3],
            g = O.parse(null != h ? h : ""),
            b = O.parse(null != m ? m : ""),
            x = "+" === d ? g.add(b) : g.subtract(b);
          if (x.isNaN()) return w;
          e = e.replace(v, x.toString());
        }
        return e;
      }
      var S = /\(([^()]*)\)/;
      function E(t) {
        var e = (function (t) {
          try {
            return (function (t) {
              var e = t.replace(/\s+/g, "");
              return (
                (e = (function (t) {
                  for (var e = t; e.includes("("); ) {
                    var n = p(S.exec(e), 2)[1];
                    e = e.replace(S, j(n));
                  }
                  return e;
                })(e)),
                j(e)
              );
            })(t);
          } catch (t) {
            return w;
          }
        })(t.slice(5, -1));
        return e === w ? "" : e;
      }
      var A = [
          "x",
          "y",
          "lineHeight",
          "capHeight",
          "scaleToFit",
          "textAnchor",
          "verticalAnchor",
          "fill",
        ],
        P = ["dx", "dy", "angle", "className", "breakAll"];
      function k() {
        return (
          (k = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          k.apply(this, arguments)
        );
      }
      function M(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
      }
      function T(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                o,
                i,
                a,
                c = [],
                u = !0,
                l = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = i.call(n)).done) &&
                    (c.push(r.value), c.length !== e);
                    u = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
                }
              }
              return c;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return _(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? _(t, e)
                    : void 0
              );
            }
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function _(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var C = /[ \f\n\r\t\v\u2028\u2029]+/,
        N = function (t) {
          var e = t.children,
            n = t.breakAll,
            r = t.style;
          try {
            var o = [];
            return (
              i()(e) ||
                (o = n ? e.toString().split("") : e.toString().split(C)),
              {
                wordsWithComputedWidth: o.map(function (t) {
                  return { word: t, width: (0, s.xE)(t, r).width };
                }),
                spaceWidth: n ? 0 : (0, s.xE)(" ", r).width,
              }
            );
          } catch (t) {
            return null;
          }
        },
        D = function (t) {
          return [{ words: i()(t) ? [] : t.toString().split(C) }];
        },
        I = "#808080",
        L = function (t) {
          var e = t.x,
            n = void 0 === e ? 0 : e,
            o = t.y,
            i = void 0 === o ? 0 : o,
            s = t.lineHeight,
            f = void 0 === s ? "1em" : s,
            p = t.capHeight,
            h = void 0 === p ? "0.71em" : p,
            d = t.scaleToFit,
            y = void 0 !== d && d,
            v = t.textAnchor,
            m = void 0 === v ? "start" : v,
            g = t.verticalAnchor,
            b = void 0 === g ? "end" : g,
            x = t.fill,
            w = void 0 === x ? I : x,
            O = M(t, A),
            j = (0, r.useMemo)(
              function () {
                return (function (t) {
                  var e = t.width,
                    n = t.scaleToFit,
                    r = t.children,
                    o = t.style,
                    i = t.breakAll,
                    a = t.maxLines;
                  if ((e || n) && !u.x.isSsr) {
                    var l = N({ breakAll: i, children: r, style: o });
                    return l
                      ? (function (t, e, n, r, o) {
                          var i = t.maxLines,
                            a = t.children,
                            u = t.style,
                            l = t.breakAll,
                            s = (0, c.hj)(i),
                            f = a,
                            p = function () {
                              return (
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : []
                              ).reduce(function (t, e) {
                                var i = e.word,
                                  a = e.width,
                                  c = t[t.length - 1];
                                if (
                                  c &&
                                  (null == r ||
                                    o ||
                                    c.width + a + n < Number(r))
                                )
                                  c.words.push(i), (c.width += a + n);
                                else {
                                  var u = { words: [i], width: a };
                                  t.push(u);
                                }
                                return t;
                              }, []);
                            },
                            h = p(e);
                          if (!s) return h;
                          for (
                            var d,
                              y = function (t) {
                                var e = f.slice(0, t),
                                  n = N({
                                    breakAll: l,
                                    style: u,
                                    children: e + "…",
                                  }).wordsWithComputedWidth,
                                  o = p(n),
                                  a =
                                    o.length > i ||
                                    (function (t) {
                                      return t.reduce(function (t, e) {
                                        return t.width > e.width ? t : e;
                                      });
                                    })(o).width > Number(r);
                                return [a, o];
                              },
                              v = 0,
                              m = f.length - 1,
                              g = 0;
                            v <= m && g <= f.length - 1;

                          ) {
                            var b = Math.floor((v + m) / 2),
                              x = T(y(b - 1), 2),
                              w = x[0],
                              O = x[1],
                              j = T(y(b), 1)[0];
                            if (
                              (w || j || (v = b + 1),
                              w && j && (m = b - 1),
                              !w && j)
                            ) {
                              d = O;
                              break;
                            }
                            g++;
                          }
                          return d || h;
                        })(
                          { breakAll: i, children: r, maxLines: a, style: o },
                          l.wordsWithComputedWidth,
                          l.spaceWidth,
                          e,
                          n,
                        )
                      : D(r);
                  }
                  return D(r);
                })({
                  breakAll: O.breakAll,
                  children: O.children,
                  maxLines: O.maxLines,
                  scaleToFit: y,
                  style: O.style,
                  width: O.width,
                });
              },
              [O.breakAll, O.children, O.maxLines, y, O.style, O.width],
            ),
            S = O.dx,
            _ = O.dy,
            C = O.angle,
            L = O.className,
            R = O.breakAll,
            B = M(O, P);
          if (!(0, c.P2)(n) || !(0, c.P2)(i)) return null;
          var U,
            $ = n + ((0, c.hj)(S) ? S : 0),
            F = i + ((0, c.hj)(_) ? _ : 0);
          switch (b) {
            case "start":
              U = E("calc(".concat(h, ")"));
              break;
            case "middle":
              U = E(
                "calc("
                  .concat((j.length - 1) / 2, " * -")
                  .concat(f, " + (")
                  .concat(h, " / 2))"),
              );
              break;
            default:
              U = E("calc(".concat(j.length - 1, " * -").concat(f, ")"));
          }
          var z = [];
          if (y) {
            var W = j[0].width,
              Z = O.width;
            z.push("scale(".concat(((0, c.hj)(Z) ? Z / W : 1) / W, ")"));
          }
          return (
            C &&
              z.push("rotate(".concat(C, ", ").concat($, ", ").concat(F, ")")),
            z.length && (B.transform = z.join(" ")),
            r.createElement(
              "text",
              k({}, (0, l.L6)(B, !0), {
                x: $,
                y: F,
                className: (0, a.Z)("recharts-text", L),
                textAnchor: m,
                fill: w.includes("url") ? I : w,
              }),
              j.map(function (t, e) {
                return r.createElement(
                  "tspan",
                  { x: $, dy: 0 === e ? U : f, key: e },
                  t.words.join(R ? "" : " "),
                );
              }),
            )
          );
        };
    },
    48710: (t, e, n) => {
      "use strict";
      n.d(e, { m: () => u });
      var r = n(67294),
        o = n(90512),
        i = n(52017),
        a = ["children", "className"];
      function c() {
        return (
          (c = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          c.apply(this, arguments)
        );
      }
      var u = r.forwardRef(function (t, e) {
        var n = t.children,
          u = t.className,
          l = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = (function (t, e) {
                if (null == t) return {};
                var n,
                  r,
                  o = {},
                  i = Object.keys(t);
                for (r = 0; r < i.length; r++)
                  (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                return o;
              })(t, e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(t);
              for (r = 0; r < i.length; r++)
                (n = i[r]),
                  e.indexOf(n) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(t, n) &&
                      (o[n] = t[n]));
            }
            return o;
          })(t, a),
          s = (0, o.Z)("recharts-layer", u);
        return r.createElement(
          "g",
          c({ className: s }, (0, i.L6)(l, !0), { ref: e }),
          n,
        );
      });
    },
    20514: (t, e, n) => {
      "use strict";
      n.d(e, { T: () => u });
      var r = n(67294),
        o = n(90512),
        i = n(52017),
        a = [
          "children",
          "width",
          "height",
          "viewBox",
          "className",
          "style",
          "title",
          "desc",
        ];
      function c() {
        return (
          (c = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          c.apply(this, arguments)
        );
      }
      function u(t) {
        var e = t.children,
          n = t.width,
          u = t.height,
          l = t.viewBox,
          s = t.className,
          f = t.style,
          p = t.title,
          h = t.desc,
          d = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = (function (t, e) {
                if (null == t) return {};
                var n,
                  r,
                  o = {},
                  i = Object.keys(t);
                for (r = 0; r < i.length; r++)
                  (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                return o;
              })(t, e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(t);
              for (r = 0; r < i.length; r++)
                (n = i[r]),
                  e.indexOf(n) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(t, n) &&
                      (o[n] = t[n]));
            }
            return o;
          })(t, a),
          y = l || { width: n, height: u, x: 0, y: 0 },
          v = (0, o.Z)("recharts-surface", s);
        return r.createElement(
          "svg",
          c({}, (0, i.L6)(d, !0, "svg"), {
            className: v,
            width: n,
            height: u,
            style: f,
            viewBox: ""
              .concat(y.x, " ")
              .concat(y.y, " ")
              .concat(y.width, " ")
              .concat(y.height),
          }),
          r.createElement("title", null, p),
          r.createElement("desc", null, h),
          e,
        );
      }
    },
    72577: (t, e, n) => {
      "use strict";
      n.d(e, { b: () => J });
      var r = n(67294),
        o = n(94884),
        i = n(27361),
        a = n.n(i),
        c = n(18446),
        u = n.n(c),
        l = n(14293),
        s = n.n(l),
        f = n(23560),
        p = n.n(f),
        h = n(90512),
        d = n(48710),
        y = n(60202),
        v = n(37517),
        m = n(25048),
        g = n(13218),
        b = n.n(g),
        x = n(73061),
        w = n.n(x),
        O = n(52017),
        j = n(81990);
      function S(t) {
        return (
          (S =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          S(t)
        );
      }
      var E = ["valueAccessor"],
        A = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
      function P(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function k() {
        return (
          (k = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          k.apply(this, arguments)
        );
      }
      function M(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function T(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? M(Object(n), !0).forEach(function (e) {
                var r, o, i;
                (r = t),
                  (o = e),
                  (i = n[e]),
                  (o = (function (t) {
                    var e = (function (t, e) {
                      if ("object" !== S(t) || null === t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, "string");
                        if ("object" !== S(r)) return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return String(t);
                    })(t);
                    return "symbol" === S(e) ? e : String(e);
                  })(o)) in r
                    ? Object.defineProperty(r, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[o] = i);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : M(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function _(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
      }
      var C = function (t) {
        return Array.isArray(t.value) ? w()(t.value) : t.value;
      };
      function N(t) {
        var e = t.valueAccessor,
          n = void 0 === e ? C : e,
          o = _(t, E),
          i = o.data,
          a = o.dataKey,
          c = o.clockWise,
          u = o.id,
          l = o.textBreakAll,
          f = _(o, A);
        return i && i.length
          ? r.createElement(
              d.m,
              { className: "recharts-label-list" },
              i.map(function (t, e) {
                var o = s()(a) ? n(t, e) : (0, j.F$)(t && t.payload, a),
                  i = s()(u) ? {} : { id: "".concat(u, "-").concat(e) };
                return r.createElement(
                  m._,
                  k({}, (0, O.L6)(t, !0), f, i, {
                    parentViewBox: t.parentViewBox,
                    value: o,
                    textBreakAll: l,
                    viewBox: m._.parseViewBox(
                      s()(c) ? t : T(T({}, t), {}, { clockWise: c }),
                    ),
                    key: "label-".concat(e),
                    index: e,
                  }),
                );
              }),
            )
          : null;
      }
      (N.displayName = "LabelList"),
        (N.renderCallByParent = function (t, e) {
          var n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          if (!t || (!t.children && n && !t.label)) return null;
          var o,
            i = t.children,
            a = (0, O.NN)(i, N).map(function (t, n) {
              return (0, r.cloneElement)(t, {
                data: e,
                key: "labelList-".concat(n),
              });
            });
          return n
            ? [
                (function (t, e) {
                  return t
                    ? !0 === t
                      ? r.createElement(N, {
                          key: "labelList-implicit",
                          data: e,
                        })
                      : r.isValidElement(t) || p()(t)
                        ? r.createElement(N, {
                            key: "labelList-implicit",
                            data: e,
                            content: t,
                          })
                        : b()(t)
                          ? r.createElement(
                              N,
                              k({ data: e }, t, { key: "labelList-implicit" }),
                            )
                          : null
                    : null;
                })(t.label, e),
              ].concat(
                (function (t) {
                  if (Array.isArray(t)) return P(t);
                })((o = a)) ||
                  (function (t) {
                    if (
                      ("undefined" != typeof Symbol &&
                        null != t[Symbol.iterator]) ||
                      null != t["@@iterator"]
                    )
                      return Array.from(t);
                  })(o) ||
                  (function (t, e) {
                    if (t) {
                      if ("string" == typeof t) return P(t, e);
                      var n = Object.prototype.toString.call(t).slice(8, -1);
                      return (
                        "Object" === n &&
                          t.constructor &&
                          (n = t.constructor.name),
                        "Map" === n || "Set" === n
                          ? Array.from(t)
                          : "Arguments" === n ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            ? P(t, e)
                            : void 0
                      );
                    }
                  })(o) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                  })(),
              )
            : a;
        });
      var D = function (t) {
        return null;
      };
      D.displayName = "Cell";
      var I,
        L = n(47523),
        R = n(40048),
        B = n(69055),
        U = n(6213),
        $ = n(79896),
        F = n(85653);
      function z(t) {
        return (
          (z =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          z(t)
        );
      }
      function W() {
        return (
          (W = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          W.apply(this, arguments)
        );
      }
      function Z(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function q(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Z(Object(n), !0).forEach(function (e) {
                V(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : Z(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function G(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, K(r.key), r);
        }
      }
      function X(t, e) {
        return (
          (X = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          X(t, e)
        );
      }
      function Y(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function H(t) {
        return (
          (H = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          H(t)
        );
      }
      function V(t, e, n) {
        return (
          (e = K(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function K(t) {
        var e = (function (t, e) {
          if ("object" !== z(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" !== z(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" === z(e) ? e : String(e);
      }
      var J = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && X(t, e);
        })(g, t);
        var e,
          n,
          i,
          c,
          l,
          f =
            ((c = g),
            (l = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {}),
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = H(c);
              if (l) {
                var n = H(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                if (e && ("object" === z(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined",
                  );
                return Y(t);
              })(this, t);
            });
        function g(t) {
          var e;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, g),
            V(Y((e = f.call(this, t))), "pieRef", null),
            V(Y(e), "sectorRefs", []),
            V(Y(e), "id", (0, B.EL)("recharts-pie-")),
            V(Y(e), "handleAnimationEnd", function () {
              var t = e.props.onAnimationEnd;
              e.setState({ isAnimationFinished: !0 }), p()(t) && t();
            }),
            V(Y(e), "handleAnimationStart", function () {
              var t = e.props.onAnimationStart;
              e.setState({ isAnimationFinished: !1 }), p()(t) && t();
            }),
            (e.state = {
              isAnimationFinished: !t.isAnimationActive,
              prevIsAnimationActive: t.isAnimationActive,
              prevAnimationId: t.animationId,
              sectorToFocus: 0,
            }),
            e
          );
        }
        return (
          (e = g),
          (i = [
            {
              key: "getDerivedStateFromProps",
              value: function (t, e) {
                return e.prevIsAnimationActive !== t.isAnimationActive
                  ? {
                      prevIsAnimationActive: t.isAnimationActive,
                      prevAnimationId: t.animationId,
                      curSectors: t.sectors,
                      prevSectors: [],
                      isAnimationFinished: !0,
                    }
                  : t.isAnimationActive && t.animationId !== e.prevAnimationId
                    ? {
                        prevAnimationId: t.animationId,
                        curSectors: t.sectors,
                        prevSectors: e.curSectors,
                        isAnimationFinished: !0,
                      }
                    : t.sectors !== e.curSectors
                      ? { curSectors: t.sectors, isAnimationFinished: !0 }
                      : null;
              },
            },
            {
              key: "getTextAnchor",
              value: function (t, e) {
                return t > e ? "start" : t < e ? "end" : "middle";
              },
            },
            {
              key: "renderLabelLineItem",
              value: function (t, e) {
                return r.isValidElement(t)
                  ? r.cloneElement(t, e)
                  : p()(t)
                    ? t(e)
                    : r.createElement(
                        y.H,
                        W({}, e, {
                          type: "linear",
                          className: "recharts-pie-label-line",
                        }),
                      );
              },
            },
            {
              key: "renderLabelItem",
              value: function (t, e, n) {
                if (r.isValidElement(t)) return r.cloneElement(t, e);
                var o = n;
                return p()(t) && ((o = t(e)), r.isValidElement(o))
                  ? o
                  : r.createElement(
                      v.x,
                      W({}, e, {
                        alignmentBaseline: "middle",
                        className: "recharts-pie-label-text",
                      }),
                      o,
                    );
              },
            },
          ]),
          (n = [
            {
              key: "isActiveIndex",
              value: function (t) {
                var e = this.props.activeIndex;
                return Array.isArray(e) ? -1 !== e.indexOf(t) : t === e;
              },
            },
            {
              key: "hasActiveIndex",
              value: function () {
                var t = this.props.activeIndex;
                return Array.isArray(t) ? 0 !== t.length : t || 0 === t;
              },
            },
            {
              key: "renderLabels",
              value: function (t) {
                if (
                  this.props.isAnimationActive &&
                  !this.state.isAnimationFinished
                )
                  return null;
                var e = this.props,
                  n = e.label,
                  o = e.labelLine,
                  i = e.dataKey,
                  a = e.valueKey,
                  c = (0, O.L6)(this.props),
                  u = (0, O.L6)(n),
                  l = (0, O.L6)(o),
                  f = (n && n.offsetRadius) || 20,
                  p = t.map(function (t, e) {
                    var p = (t.startAngle + t.endAngle) / 2,
                      h = (0, R.op)(t.cx, t.cy, t.outerRadius + f, p),
                      y = q(
                        q(q(q({}, c), t), {}, { stroke: "none" }, u),
                        {},
                        { index: e, textAnchor: g.getTextAnchor(h.x, t.cx) },
                        h,
                      ),
                      v = q(
                        q(
                          q(q({}, c), t),
                          {},
                          { fill: "none", stroke: t.fill },
                          l,
                        ),
                        {},
                        {
                          index: e,
                          points: [(0, R.op)(t.cx, t.cy, t.outerRadius, p), h],
                          key: "line",
                        },
                      ),
                      m = i;
                    return (
                      s()(i) && s()(a) ? (m = "value") : s()(i) && (m = a),
                      r.createElement(
                        d.m,
                        { key: "label-".concat(e) },
                        o && g.renderLabelLineItem(o, v),
                        g.renderLabelItem(n, y, (0, j.F$)(t, m)),
                      )
                    );
                  });
                return r.createElement(
                  d.m,
                  { className: "recharts-pie-labels" },
                  p,
                );
              },
            },
            {
              key: "renderSectorsStatically",
              value: function (t) {
                var e = this,
                  n = this.props,
                  o = n.activeShape,
                  i = n.blendStroke,
                  a = n.inactiveShape;
                return t.map(function (t, n) {
                  var c = e.isActiveIndex(n),
                    u = a && e.hasActiveIndex() ? a : null,
                    l = c ? o : u,
                    s = q(
                      q({}, t),
                      {},
                      { stroke: i ? t.fill : t.stroke, tabIndex: -1 },
                    );
                  return r.createElement(
                    d.m,
                    W(
                      {
                        ref: function (t) {
                          t &&
                            !e.sectorRefs.includes(t) &&
                            e.sectorRefs.push(t);
                        },
                        tabIndex: -1,
                        className: "recharts-pie-sector",
                      },
                      (0, $.bw)(e.props, t, n),
                      { key: "sector-".concat(n) },
                    ),
                    r.createElement(
                      F.bn,
                      W({ option: l, isActive: c, shapeType: "sector" }, s),
                    ),
                  );
                });
              },
            },
            {
              key: "renderSectorsWithAnimation",
              value: function () {
                var t = this,
                  e = this.props,
                  n = e.sectors,
                  i = e.isAnimationActive,
                  c = e.animationBegin,
                  u = e.animationDuration,
                  l = e.animationEasing,
                  s = e.animationId,
                  f = this.state,
                  p = f.prevSectors,
                  h = f.prevIsAnimationActive;
                return r.createElement(
                  o.ZP,
                  {
                    begin: c,
                    duration: u,
                    isActive: i,
                    easing: l,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "pie-".concat(s, "-").concat(h),
                    onAnimationStart: this.handleAnimationStart,
                    onAnimationEnd: this.handleAnimationEnd,
                  },
                  function (e) {
                    var o = e.t,
                      i = [],
                      c = (n && n[0]).startAngle;
                    return (
                      n.forEach(function (t, e) {
                        var n = p && p[e],
                          r = e > 0 ? a()(t, "paddingAngle", 0) : 0;
                        if (n) {
                          var u = (0, B.k4)(
                              n.endAngle - n.startAngle,
                              t.endAngle - t.startAngle,
                            ),
                            l = q(
                              q({}, t),
                              {},
                              { startAngle: c + r, endAngle: c + u(o) + r },
                            );
                          i.push(l), (c = l.endAngle);
                        } else {
                          var s = t.endAngle,
                            f = t.startAngle,
                            h = (0, B.k4)(0, s - f)(o),
                            d = q(
                              q({}, t),
                              {},
                              { startAngle: c + r, endAngle: c + h + r },
                            );
                          i.push(d), (c = d.endAngle);
                        }
                      }),
                      r.createElement(d.m, null, t.renderSectorsStatically(i))
                    );
                  },
                );
              },
            },
            {
              key: "attachKeyboardHandlers",
              value: function (t) {
                var e = this;
                t.onkeydown = function (t) {
                  if (!t.altKey)
                    switch (t.key) {
                      case "ArrowLeft":
                        var n = ++e.state.sectorToFocus % e.sectorRefs.length;
                        e.sectorRefs[n].focus(),
                          e.setState({ sectorToFocus: n });
                        break;
                      case "ArrowRight":
                        var r =
                          --e.state.sectorToFocus < 0
                            ? e.sectorRefs.length - 1
                            : e.state.sectorToFocus % e.sectorRefs.length;
                        e.sectorRefs[r].focus(),
                          e.setState({ sectorToFocus: r });
                        break;
                      case "Escape":
                        e.sectorRefs[e.state.sectorToFocus].blur(),
                          e.setState({ sectorToFocus: 0 });
                    }
                };
              },
            },
            {
              key: "renderSectors",
              value: function () {
                var t = this.props,
                  e = t.sectors,
                  n = t.isAnimationActive,
                  r = this.state.prevSectors;
                return !(n && e && e.length) || (r && u()(r, e))
                  ? this.renderSectorsStatically(e)
                  : this.renderSectorsWithAnimation();
              },
            },
            {
              key: "componentDidMount",
              value: function () {
                this.pieRef && this.attachKeyboardHandlers(this.pieRef);
              },
            },
            {
              key: "render",
              value: function () {
                var t = this,
                  e = this.props,
                  n = e.hide,
                  o = e.sectors,
                  i = e.className,
                  a = e.label,
                  c = e.cx,
                  u = e.cy,
                  l = e.innerRadius,
                  s = e.outerRadius,
                  f = e.isAnimationActive,
                  p = this.state.isAnimationFinished;
                if (
                  n ||
                  !o ||
                  !o.length ||
                  !(0, B.hj)(c) ||
                  !(0, B.hj)(u) ||
                  !(0, B.hj)(l) ||
                  !(0, B.hj)(s)
                )
                  return null;
                var y = (0, h.Z)("recharts-pie", i);
                return r.createElement(
                  d.m,
                  {
                    tabIndex: this.props.rootTabIndex,
                    className: y,
                    ref: function (e) {
                      t.pieRef = e;
                    },
                  },
                  this.renderSectors(),
                  a && this.renderLabels(o),
                  m._.renderCallByParent(this.props, null, !1),
                  (!f || p) && N.renderCallByParent(this.props, o, !1),
                );
              },
            },
          ]) && G(e.prototype, n),
          i && G(e, i),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          g
        );
      })(r.PureComponent);
      (I = J),
        V(J, "displayName", "Pie"),
        V(J, "defaultProps", {
          stroke: "#fff",
          fill: "#808080",
          legendType: "rect",
          cx: "50%",
          cy: "50%",
          startAngle: 0,
          endAngle: 360,
          innerRadius: 0,
          outerRadius: "80%",
          paddingAngle: 0,
          labelLine: !0,
          hide: !1,
          minAngle: 0,
          isAnimationActive: !L.x.isSsr,
          animationBegin: 400,
          animationDuration: 1500,
          animationEasing: "ease",
          nameKey: "name",
          blendStroke: !1,
          rootTabIndex: 0,
        }),
        V(J, "parseDeltaAngle", function (t, e) {
          return (0, B.uY)(e - t) * Math.min(Math.abs(e - t), 360);
        }),
        V(J, "getRealPieData", function (t) {
          var e = t.props,
            n = e.data,
            r = e.children,
            o = (0, O.L6)(t.props),
            i = (0, O.NN)(r, D);
          return n && n.length
            ? n.map(function (t, e) {
                return q(q(q({ payload: t }, o), t), i && i[e] && i[e].props);
              })
            : i && i.length
              ? i.map(function (t) {
                  return q(q({}, o), t.props);
                })
              : [];
        }),
        V(J, "parseCoordinateOfPie", function (t, e) {
          var n = e.top,
            r = e.left,
            o = e.width,
            i = e.height,
            a = (0, R.$4)(o, i);
          return {
            cx: r + (0, B.h1)(t.props.cx, o, o / 2),
            cy: n + (0, B.h1)(t.props.cy, i, i / 2),
            innerRadius: (0, B.h1)(t.props.innerRadius, a, 0),
            outerRadius: (0, B.h1)(t.props.outerRadius, a, 0.8 * a),
            maxRadius: t.props.maxRadius || Math.sqrt(o * o + i * i) / 2,
          };
        }),
        V(J, "getComposedData", function (t) {
          var e = t.item,
            n = t.offset,
            r = I.getRealPieData(e);
          if (!r || !r.length) return null;
          var o = e.props,
            i = o.cornerRadius,
            a = o.startAngle,
            c = o.endAngle,
            u = o.paddingAngle,
            l = o.dataKey,
            f = o.nameKey,
            p = o.valueKey,
            h = o.tooltipType,
            d = Math.abs(e.props.minAngle),
            y = I.parseCoordinateOfPie(e, n),
            v = I.parseDeltaAngle(a, c),
            m = Math.abs(v),
            g = l;
          s()(l) && s()(p)
            ? ((0, U.Z)(
                !1,
                'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0',
              ),
              (g = "value"))
            : s()(l) &&
              ((0, U.Z)(
                !1,
                'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0',
              ),
              (g = p));
          var b,
            x,
            w = r.filter(function (t) {
              return 0 !== (0, j.F$)(t, g, 0);
            }).length,
            O = m - w * d - (m >= 360 ? w : w - 1) * u,
            S = r.reduce(function (t, e) {
              var n = (0, j.F$)(e, g, 0);
              return t + ((0, B.hj)(n) ? n : 0);
            }, 0);
          return (
            S > 0 &&
              (b = r.map(function (t, e) {
                var n,
                  r = (0, j.F$)(t, g, 0),
                  o = (0, j.F$)(t, f, e),
                  c = ((0, B.hj)(r) ? r : 0) / S,
                  l =
                    (n = e
                      ? x.endAngle + (0, B.uY)(v) * u * (0 !== r ? 1 : 0)
                      : a) +
                    (0, B.uY)(v) * ((0 !== r ? d : 0) + c * O),
                  s = (n + l) / 2,
                  p = (y.innerRadius + y.outerRadius) / 2,
                  m = [{ name: o, value: r, payload: t, dataKey: g, type: h }],
                  b = (0, R.op)(y.cx, y.cy, p, s);
                return (x = q(
                  q(
                    q(
                      {
                        percent: c,
                        cornerRadius: i,
                        name: o,
                        tooltipPayload: m,
                        midAngle: s,
                        middleRadius: p,
                        tooltipPosition: b,
                      },
                      t,
                    ),
                    y,
                  ),
                  {},
                  {
                    value: (0, j.F$)(t, g),
                    startAngle: n,
                    endAngle: l,
                    payload: t,
                    paddingAngle: (0, B.uY)(v) * u,
                  },
                ));
              })),
            q(q({}, y), {}, { sectors: b, data: r })
          );
        });
    },
    60202: (t, e, n) => {
      "use strict";
      n.d(e, { H: () => G });
      var r = n(67294);
      function o() {}
      function i(t, e, n) {
        t._context.bezierCurveTo(
          (2 * t._x0 + t._x1) / 3,
          (2 * t._y0 + t._y1) / 3,
          (t._x0 + 2 * t._x1) / 3,
          (t._y0 + 2 * t._y1) / 3,
          (t._x0 + 4 * t._x1 + e) / 6,
          (t._y0 + 4 * t._y1 + n) / 6,
        );
      }
      function a(t) {
        this._context = t;
      }
      function c(t) {
        this._context = t;
      }
      function u(t) {
        this._context = t;
      }
      (a.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 3:
              i(this, this._x1, this._y1);
            case 2:
              this._context.lineTo(this._x1, this._y1);
          }
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, e) {
          switch (((t = +t), (e = +e), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, e)
                  : this._context.moveTo(t, e);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3),
                this._context.lineTo(
                  (5 * this._x0 + this._x1) / 6,
                  (5 * this._y0 + this._y1) / 6,
                );
            default:
              i(this, t, e);
          }
          (this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = e);
        },
      }),
        (c.prototype = {
          areaStart: o,
          areaEnd: o,
          lineStart: function () {
            (this._x0 =
              this._x1 =
              this._x2 =
              this._x3 =
              this._x4 =
              this._y0 =
              this._y1 =
              this._y2 =
              this._y3 =
              this._y4 =
                NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 1:
                this._context.moveTo(this._x2, this._y2),
                  this._context.closePath();
                break;
              case 2:
                this._context.moveTo(
                  (this._x2 + 2 * this._x3) / 3,
                  (this._y2 + 2 * this._y3) / 3,
                ),
                  this._context.lineTo(
                    (this._x3 + 2 * this._x2) / 3,
                    (this._y3 + 2 * this._y2) / 3,
                  ),
                  this._context.closePath();
                break;
              case 3:
                this.point(this._x2, this._y2),
                  this.point(this._x3, this._y3),
                  this.point(this._x4, this._y4);
            }
          },
          point: function (t, e) {
            switch (((t = +t), (e = +e), this._point)) {
              case 0:
                (this._point = 1), (this._x2 = t), (this._y2 = e);
                break;
              case 1:
                (this._point = 2), (this._x3 = t), (this._y3 = e);
                break;
              case 2:
                (this._point = 3),
                  (this._x4 = t),
                  (this._y4 = e),
                  this._context.moveTo(
                    (this._x0 + 4 * this._x1 + t) / 6,
                    (this._y0 + 4 * this._y1 + e) / 6,
                  );
                break;
              default:
                i(this, t, e);
            }
            (this._x0 = this._x1),
              (this._x1 = t),
              (this._y0 = this._y1),
              (this._y1 = e);
          },
        }),
        (u.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._y0 = this._y1 = NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            (this._line || (0 !== this._line && 3 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, e) {
            switch (((t = +t), (e = +e), this._point)) {
              case 0:
                this._point = 1;
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                this._point = 3;
                var n = (this._x0 + 4 * this._x1 + t) / 6,
                  r = (this._y0 + 4 * this._y1 + e) / 6;
                this._line
                  ? this._context.lineTo(n, r)
                  : this._context.moveTo(n, r);
                break;
              case 3:
                this._point = 4;
              default:
                i(this, t, e);
            }
            (this._x0 = this._x1),
              (this._x1 = t),
              (this._y0 = this._y1),
              (this._y1 = e);
          },
        });
      class l {
        constructor(t, e) {
          (this._context = t), (this._x = e);
        }
        areaStart() {
          this._line = 0;
        }
        areaEnd() {
          this._line = NaN;
        }
        lineStart() {
          this._point = 0;
        }
        lineEnd() {
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        }
        point(t, e) {
          switch (((t = +t), (e = +e), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, e)
                  : this._context.moveTo(t, e);
              break;
            case 1:
              this._point = 2;
            default:
              this._x
                ? this._context.bezierCurveTo(
                    (this._x0 = (this._x0 + t) / 2),
                    this._y0,
                    this._x0,
                    e,
                    t,
                    e,
                  )
                : this._context.bezierCurveTo(
                    this._x0,
                    (this._y0 = (this._y0 + e) / 2),
                    t,
                    this._y0,
                    t,
                    e,
                  );
          }
          (this._x0 = t), (this._y0 = e);
        }
      }
      function s(t) {
        this._context = t;
      }
      function f(t) {
        this._context = t;
      }
      function p(t) {
        return new f(t);
      }
      function h(t) {
        return t < 0 ? -1 : 1;
      }
      function d(t, e, n) {
        var r = t._x1 - t._x0,
          o = e - t._x1,
          i = (t._y1 - t._y0) / (r || (o < 0 && -0)),
          a = (n - t._y1) / (o || (r < 0 && -0)),
          c = (i * o + a * r) / (r + o);
        return (
          (h(i) + h(a)) *
            Math.min(Math.abs(i), Math.abs(a), 0.5 * Math.abs(c)) || 0
        );
      }
      function y(t, e) {
        var n = t._x1 - t._x0;
        return n ? ((3 * (t._y1 - t._y0)) / n - e) / 2 : e;
      }
      function v(t, e, n) {
        var r = t._x0,
          o = t._y0,
          i = t._x1,
          a = t._y1,
          c = (i - r) / 3;
        t._context.bezierCurveTo(r + c, o + c * e, i - c, a - c * n, i, a);
      }
      function m(t) {
        this._context = t;
      }
      function g(t) {
        this._context = new b(t);
      }
      function b(t) {
        this._context = t;
      }
      function x(t) {
        this._context = t;
      }
      function w(t) {
        var e,
          n,
          r = t.length - 1,
          o = new Array(r),
          i = new Array(r),
          a = new Array(r);
        for (o[0] = 0, i[0] = 2, a[0] = t[0] + 2 * t[1], e = 1; e < r - 1; ++e)
          (o[e] = 1), (i[e] = 4), (a[e] = 4 * t[e] + 2 * t[e + 1]);
        for (
          o[r - 1] = 2, i[r - 1] = 7, a[r - 1] = 8 * t[r - 1] + t[r], e = 1;
          e < r;
          ++e
        )
          (n = o[e] / i[e - 1]), (i[e] -= n), (a[e] -= n * a[e - 1]);
        for (o[r - 1] = a[r - 1] / i[r - 1], e = r - 2; e >= 0; --e)
          o[e] = (a[e] - o[e + 1]) / i[e];
        for (i[r - 1] = (t[r] + o[r - 1]) / 2, e = 0; e < r - 1; ++e)
          i[e] = 2 * t[e + 1] - o[e + 1];
        return [o, i];
      }
      function O(t, e) {
        (this._context = t), (this._t = e);
      }
      (s.prototype = {
        areaStart: o,
        areaEnd: o,
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          this._point && this._context.closePath();
        },
        point: function (t, e) {
          (t = +t),
            (e = +e),
            this._point
              ? this._context.lineTo(t, e)
              : ((this._point = 1), this._context.moveTo(t, e));
        },
      }),
        (f.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            this._point = 0;
          },
          lineEnd: function () {
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, e) {
            switch (((t = +t), (e = +e), this._point)) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(t, e)
                    : this._context.moveTo(t, e);
                break;
              case 1:
                this._point = 2;
              default:
                this._context.lineTo(t, e);
            }
          },
        }),
        (m.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
              case 3:
                v(this, this._t0, y(this, this._t0));
            }
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, e) {
            var n = NaN;
            if (((e = +e), (t = +t) !== this._x1 || e !== this._y1)) {
              switch (this._point) {
                case 0:
                  (this._point = 1),
                    this._line
                      ? this._context.lineTo(t, e)
                      : this._context.moveTo(t, e);
                  break;
                case 1:
                  this._point = 2;
                  break;
                case 2:
                  (this._point = 3), v(this, y(this, (n = d(this, t, e))), n);
                  break;
                default:
                  v(this, this._t0, (n = d(this, t, e)));
              }
              (this._x0 = this._x1),
                (this._x1 = t),
                (this._y0 = this._y1),
                (this._y1 = e),
                (this._t0 = n);
            }
          },
        }),
        ((g.prototype = Object.create(m.prototype)).point = function (t, e) {
          m.prototype.point.call(this, e, t);
        }),
        (b.prototype = {
          moveTo: function (t, e) {
            this._context.moveTo(e, t);
          },
          closePath: function () {
            this._context.closePath();
          },
          lineTo: function (t, e) {
            this._context.lineTo(e, t);
          },
          bezierCurveTo: function (t, e, n, r, o, i) {
            this._context.bezierCurveTo(e, t, r, n, i, o);
          },
        }),
        (x.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x = []), (this._y = []);
          },
          lineEnd: function () {
            var t = this._x,
              e = this._y,
              n = t.length;
            if (n)
              if (
                (this._line
                  ? this._context.lineTo(t[0], e[0])
                  : this._context.moveTo(t[0], e[0]),
                2 === n)
              )
                this._context.lineTo(t[1], e[1]);
              else
                for (var r = w(t), o = w(e), i = 0, a = 1; a < n; ++i, ++a)
                  this._context.bezierCurveTo(
                    r[0][i],
                    o[0][i],
                    r[1][i],
                    o[1][i],
                    t[a],
                    e[a],
                  );
            (this._line || (0 !== this._line && 1 === n)) &&
              this._context.closePath(),
              (this._line = 1 - this._line),
              (this._x = this._y = null);
          },
          point: function (t, e) {
            this._x.push(+t), this._y.push(+e);
          },
        }),
        (O.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x = this._y = NaN), (this._point = 0);
          },
          lineEnd: function () {
            0 < this._t &&
              this._t < 1 &&
              2 === this._point &&
              this._context.lineTo(this._x, this._y),
              (this._line || (0 !== this._line && 1 === this._point)) &&
                this._context.closePath(),
              this._line >= 0 &&
                ((this._t = 1 - this._t), (this._line = 1 - this._line));
          },
          point: function (t, e) {
            switch (((t = +t), (e = +e), this._point)) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(t, e)
                    : this._context.moveTo(t, e);
                break;
              case 1:
                this._point = 2;
              default:
                if (this._t <= 0)
                  this._context.lineTo(this._x, e), this._context.lineTo(t, e);
                else {
                  var n = this._x * (1 - this._t) + t * this._t;
                  this._context.lineTo(n, this._y), this._context.lineTo(n, e);
                }
            }
            (this._x = t), (this._y = e);
          },
        });
      var j = n(92889),
        S = n(20309),
        E = n(90633);
      function A(t) {
        return t[0];
      }
      function P(t) {
        return t[1];
      }
      function k(t, e) {
        var n = (0, S.Z)(!0),
          r = null,
          o = p,
          i = null,
          a = (0, E.d)(c);
        function c(c) {
          var u,
            l,
            s,
            f = (c = (0, j.Z)(c)).length,
            p = !1;
          for (null == r && (i = o((s = a()))), u = 0; u <= f; ++u)
            !(u < f && n((l = c[u]), u, c)) === p &&
              ((p = !p) ? i.lineStart() : i.lineEnd()),
              p && i.point(+t(l, u, c), +e(l, u, c));
          if (s) return (i = null), s + "" || null;
        }
        return (
          (t = "function" == typeof t ? t : void 0 === t ? A : (0, S.Z)(t)),
          (e = "function" == typeof e ? e : void 0 === e ? P : (0, S.Z)(e)),
          (c.x = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, S.Z)(+e)), c)
              : t;
          }),
          (c.y = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, S.Z)(+t)), c)
              : e;
          }),
          (c.defined = function (t) {
            return arguments.length
              ? ((n = "function" == typeof t ? t : (0, S.Z)(!!t)), c)
              : n;
          }),
          (c.curve = function (t) {
            return arguments.length ? ((o = t), null != r && (i = o(r)), c) : o;
          }),
          (c.context = function (t) {
            return arguments.length
              ? (null == t ? (r = i = null) : (i = o((r = t))), c)
              : r;
          }),
          c
        );
      }
      function M(t, e, n) {
        var r = null,
          o = (0, S.Z)(!0),
          i = null,
          a = p,
          c = null,
          u = (0, E.d)(l);
        function l(l) {
          var s,
            f,
            p,
            h,
            d,
            y = (l = (0, j.Z)(l)).length,
            v = !1,
            m = new Array(y),
            g = new Array(y);
          for (null == i && (c = a((d = u()))), s = 0; s <= y; ++s) {
            if (!(s < y && o((h = l[s]), s, l)) === v)
              if ((v = !v)) (f = s), c.areaStart(), c.lineStart();
              else {
                for (c.lineEnd(), c.lineStart(), p = s - 1; p >= f; --p)
                  c.point(m[p], g[p]);
                c.lineEnd(), c.areaEnd();
              }
            v &&
              ((m[s] = +t(h, s, l)),
              (g[s] = +e(h, s, l)),
              c.point(r ? +r(h, s, l) : m[s], n ? +n(h, s, l) : g[s]));
          }
          if (d) return (c = null), d + "" || null;
        }
        function s() {
          return k().defined(o).curve(a).context(i);
        }
        return (
          (t = "function" == typeof t ? t : void 0 === t ? A : (0, S.Z)(+t)),
          (e =
            "function" == typeof e
              ? e
              : void 0 === e
                ? (0, S.Z)(0)
                : (0, S.Z)(+e)),
          (n = "function" == typeof n ? n : void 0 === n ? P : (0, S.Z)(+n)),
          (l.x = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, S.Z)(+e)), (r = null), l)
              : t;
          }),
          (l.x0 = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, S.Z)(+e)), l)
              : t;
          }),
          (l.x1 = function (t) {
            return arguments.length
              ? ((r =
                  null == t ? null : "function" == typeof t ? t : (0, S.Z)(+t)),
                l)
              : r;
          }),
          (l.y = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, S.Z)(+t)), (n = null), l)
              : e;
          }),
          (l.y0 = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, S.Z)(+t)), l)
              : e;
          }),
          (l.y1 = function (t) {
            return arguments.length
              ? ((n =
                  null == t ? null : "function" == typeof t ? t : (0, S.Z)(+t)),
                l)
              : n;
          }),
          (l.lineX0 = l.lineY0 =
            function () {
              return s().x(t).y(e);
            }),
          (l.lineY1 = function () {
            return s().x(t).y(n);
          }),
          (l.lineX1 = function () {
            return s().x(r).y(e);
          }),
          (l.defined = function (t) {
            return arguments.length
              ? ((o = "function" == typeof t ? t : (0, S.Z)(!!t)), l)
              : o;
          }),
          (l.curve = function (t) {
            return arguments.length ? ((a = t), null != i && (c = a(i)), l) : a;
          }),
          (l.context = function (t) {
            return arguments.length
              ? (null == t ? (i = c = null) : (c = a((i = t))), l)
              : i;
          }),
          l
        );
      }
      var T = n(11700),
        _ = n.n(T),
        C = n(23560),
        N = n.n(C),
        D = n(90512),
        I = n(79896),
        L = n(52017),
        R = n(69055);
      function B(t) {
        return (
          (B =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          B(t)
        );
      }
      function U() {
        return (
          (U = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          U.apply(this, arguments)
        );
      }
      function $(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function F(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? $(Object(n), !0).forEach(function (e) {
                var r, o, i;
                (r = t),
                  (o = e),
                  (i = n[e]),
                  (o = (function (t) {
                    var e = (function (t, e) {
                      if ("object" !== B(t) || null === t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, "string");
                        if ("object" !== B(r)) return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return String(t);
                    })(t);
                    return "symbol" === B(e) ? e : String(e);
                  })(o)) in r
                    ? Object.defineProperty(r, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[o] = i);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : $(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      var z = {
          curveBasisClosed: function (t) {
            return new c(t);
          },
          curveBasisOpen: function (t) {
            return new u(t);
          },
          curveBasis: function (t) {
            return new a(t);
          },
          curveBumpX: function (t) {
            return new l(t, !0);
          },
          curveBumpY: function (t) {
            return new l(t, !1);
          },
          curveLinearClosed: function (t) {
            return new s(t);
          },
          curveLinear: p,
          curveMonotoneX: function (t) {
            return new m(t);
          },
          curveMonotoneY: function (t) {
            return new g(t);
          },
          curveNatural: function (t) {
            return new x(t);
          },
          curveStep: function (t) {
            return new O(t, 0.5);
          },
          curveStepAfter: function (t) {
            return new O(t, 1);
          },
          curveStepBefore: function (t) {
            return new O(t, 0);
          },
        },
        W = function (t) {
          return t.x === +t.x && t.y === +t.y;
        },
        Z = function (t) {
          return t.x;
        },
        q = function (t) {
          return t.y;
        },
        G = function (t) {
          var e = t.className,
            n = t.points,
            o = t.path,
            i = t.pathRef;
          if (!((n && n.length) || o)) return null;
          var a =
            n && n.length
              ? (function (t) {
                  var e,
                    n = t.type,
                    r = void 0 === n ? "linear" : n,
                    o = t.points,
                    i = void 0 === o ? [] : o,
                    a = t.baseLine,
                    c = t.layout,
                    u = t.connectNulls,
                    l = void 0 !== u && u,
                    s = (function (t, e) {
                      if (N()(t)) return t;
                      var n = "curve".concat(_()(t));
                      return ("curveMonotone" !== n && "curveBump" !== n) || !e
                        ? z[n] || p
                        : z["".concat(n).concat("vertical" === e ? "Y" : "X")];
                    })(r, c),
                    f = l
                      ? i.filter(function (t) {
                          return W(t);
                        })
                      : i;
                  if (Array.isArray(a)) {
                    var h = l
                        ? a.filter(function (t) {
                            return W(t);
                          })
                        : a,
                      d = f.map(function (t, e) {
                        return F(F({}, t), {}, { base: h[e] });
                      });
                    return (
                      (e =
                        "vertical" === c
                          ? M()
                              .y(q)
                              .x1(Z)
                              .x0(function (t) {
                                return t.base.x;
                              })
                          : M()
                              .x(Z)
                              .y1(q)
                              .y0(function (t) {
                                return t.base.y;
                              }))
                        .defined(W)
                        .curve(s),
                      e(d)
                    );
                  }
                  return (
                    (e =
                      "vertical" === c && (0, R.hj)(a)
                        ? M().y(q).x1(Z).x0(a)
                        : (0, R.hj)(a)
                          ? M().x(Z).y1(q).y0(a)
                          : k().x(Z).y(q))
                      .defined(W)
                      .curve(s),
                    e(f)
                  );
                })(t)
              : o;
          return r.createElement(
            "path",
            U({}, (0, L.L6)(t), (0, I.Ym)(t), {
              className: (0, D.Z)("recharts-curve", e),
              d: a,
              ref: i,
            }),
          );
        };
    },
    13481: (t, e, n) => {
      "use strict";
      n.d(e, { A: () => y, X: () => h });
      var r = n(67294),
        o = n(90512),
        i = n(94884),
        a = n(52017);
      function c(t) {
        return (
          (c =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          c(t)
        );
      }
      function u() {
        return (
          (u = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          u.apply(this, arguments)
        );
      }
      function l(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function s(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function f(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? s(Object(n), !0).forEach(function (e) {
                var r, o, i;
                (r = t),
                  (o = e),
                  (i = n[e]),
                  (o = (function (t) {
                    var e = (function (t, e) {
                      if ("object" !== c(t) || null === t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, "string");
                        if ("object" !== c(r)) return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return String(t);
                    })(t);
                    return "symbol" === c(e) ? e : String(e);
                  })(o)) in r
                    ? Object.defineProperty(r, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[o] = i);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : s(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      var p = function (t, e, n, r, o) {
          var i,
            a = Math.min(Math.abs(n) / 2, Math.abs(r) / 2),
            c = r >= 0 ? 1 : -1,
            u = n >= 0 ? 1 : -1,
            l = (r >= 0 && n >= 0) || (r < 0 && n < 0) ? 1 : 0;
          if (a > 0 && o instanceof Array) {
            for (var s = [0, 0, 0, 0], f = 0; f < 4; f++)
              s[f] = o[f] > a ? a : o[f];
            (i = "M".concat(t, ",").concat(e + c * s[0])),
              s[0] > 0 &&
                (i += "A "
                  .concat(s[0], ",")
                  .concat(s[0], ",0,0,")
                  .concat(l, ",")
                  .concat(t + u * s[0], ",")
                  .concat(e)),
              (i += "L ".concat(t + n - u * s[1], ",").concat(e)),
              s[1] > 0 &&
                (i += "A "
                  .concat(s[1], ",")
                  .concat(s[1], ",0,0,")
                  .concat(l, ",\n        ")
                  .concat(t + n, ",")
                  .concat(e + c * s[1])),
              (i += "L ".concat(t + n, ",").concat(e + r - c * s[2])),
              s[2] > 0 &&
                (i += "A "
                  .concat(s[2], ",")
                  .concat(s[2], ",0,0,")
                  .concat(l, ",\n        ")
                  .concat(t + n - u * s[2], ",")
                  .concat(e + r)),
              (i += "L ".concat(t + u * s[3], ",").concat(e + r)),
              s[3] > 0 &&
                (i += "A "
                  .concat(s[3], ",")
                  .concat(s[3], ",0,0,")
                  .concat(l, ",\n        ")
                  .concat(t, ",")
                  .concat(e + r - c * s[3])),
              (i += "Z");
          } else if (a > 0 && o === +o && o > 0) {
            var p = Math.min(a, o);
            i = "M "
              .concat(t, ",")
              .concat(e + c * p, "\n            A ")
              .concat(p, ",")
              .concat(p, ",0,0,")
              .concat(l, ",")
              .concat(t + u * p, ",")
              .concat(e, "\n            L ")
              .concat(t + n - u * p, ",")
              .concat(e, "\n            A ")
              .concat(p, ",")
              .concat(p, ",0,0,")
              .concat(l, ",")
              .concat(t + n, ",")
              .concat(e + c * p, "\n            L ")
              .concat(t + n, ",")
              .concat(e + r - c * p, "\n            A ")
              .concat(p, ",")
              .concat(p, ",0,0,")
              .concat(l, ",")
              .concat(t + n - u * p, ",")
              .concat(e + r, "\n            L ")
              .concat(t + u * p, ",")
              .concat(e + r, "\n            A ")
              .concat(p, ",")
              .concat(p, ",0,0,")
              .concat(l, ",")
              .concat(t, ",")
              .concat(e + r - c * p, " Z");
          } else
            i = "M "
              .concat(t, ",")
              .concat(e, " h ")
              .concat(n, " v ")
              .concat(r, " h ")
              .concat(-n, " Z");
          return i;
        },
        h = function (t, e) {
          if (!t || !e) return !1;
          var n = t.x,
            r = t.y,
            o = e.x,
            i = e.y,
            a = e.width,
            c = e.height;
          if (Math.abs(a) > 0 && Math.abs(c) > 0) {
            var u = Math.min(o, o + a),
              l = Math.max(o, o + a),
              s = Math.min(i, i + c),
              f = Math.max(i, i + c);
            return n >= u && n <= l && r >= s && r <= f;
          }
          return !1;
        },
        d = {
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          radius: 0,
          isAnimationActive: !1,
          isUpdateAnimationActive: !1,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "ease",
        },
        y = function (t) {
          var e,
            n,
            c = f(f({}, d), t),
            s = (0, r.useRef)(),
            h =
              ((e = (0, r.useState)(-1)),
              (n = 2),
              (function (t) {
                if (Array.isArray(t)) return t;
              })(e) ||
                (function (t, e) {
                  var n =
                    null == t
                      ? null
                      : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                        t["@@iterator"];
                  if (null != n) {
                    var r,
                      o,
                      i,
                      a,
                      c = [],
                      u = !0,
                      l = !1;
                    try {
                      if (((i = (n = n.call(t)).next), 0 === e)) {
                        if (Object(n) !== n) return;
                        u = !1;
                      } else
                        for (
                          ;
                          !(u = (r = i.call(n)).done) &&
                          (c.push(r.value), c.length !== e);
                          u = !0
                        );
                    } catch (t) {
                      (l = !0), (o = t);
                    } finally {
                      try {
                        if (
                          !u &&
                          null != n.return &&
                          ((a = n.return()), Object(a) !== a)
                        )
                          return;
                      } finally {
                        if (l) throw o;
                      }
                    }
                    return c;
                  }
                })(e, n) ||
                (function (t, e) {
                  if (t) {
                    if ("string" == typeof t) return l(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return (
                      "Object" === n &&
                        t.constructor &&
                        (n = t.constructor.name),
                      "Map" === n || "Set" === n
                        ? Array.from(t)
                        : "Arguments" === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? l(t, e)
                          : void 0
                    );
                  }
                })(e, n) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                  );
                })()),
            y = h[0],
            v = h[1];
          (0, r.useEffect)(function () {
            if (s.current && s.current.getTotalLength)
              try {
                var t = s.current.getTotalLength();
                t && v(t);
              } catch (t) {}
          }, []);
          var m = c.x,
            g = c.y,
            b = c.width,
            x = c.height,
            w = c.radius,
            O = c.className,
            j = c.animationEasing,
            S = c.animationDuration,
            E = c.animationBegin,
            A = c.isAnimationActive,
            P = c.isUpdateAnimationActive;
          if (
            m !== +m ||
            g !== +g ||
            b !== +b ||
            x !== +x ||
            0 === b ||
            0 === x
          )
            return null;
          var k = (0, o.Z)("recharts-rectangle", O);
          return P
            ? r.createElement(
                i.ZP,
                {
                  canBegin: y > 0,
                  from: { width: b, height: x, x: m, y: g },
                  to: { width: b, height: x, x: m, y: g },
                  duration: S,
                  animationEasing: j,
                  isActive: P,
                },
                function (t) {
                  var e = t.width,
                    n = t.height,
                    o = t.x,
                    l = t.y;
                  return r.createElement(
                    i.ZP,
                    {
                      canBegin: y > 0,
                      from: "0px ".concat(-1 === y ? 1 : y, "px"),
                      to: "".concat(y, "px 0px"),
                      attributeName: "strokeDasharray",
                      begin: E,
                      duration: S,
                      isActive: A,
                      easing: j,
                    },
                    r.createElement(
                      "path",
                      u({}, (0, a.L6)(c, !0), {
                        className: k,
                        d: p(o, l, e, n, w),
                        ref: s,
                      }),
                    ),
                  );
                },
              )
            : r.createElement(
                "path",
                u({}, (0, a.L6)(c, !0), { className: k, d: p(m, g, b, x, w) }),
              );
        };
    },
    45108: (t, e, n) => {
      "use strict";
      n.d(e, { L: () => y });
      var r = n(67294),
        o = n(90512),
        i = n(52017),
        a = n(40048),
        c = n(69055);
      function u(t) {
        return (
          (u =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          u(t)
        );
      }
      function l() {
        return (
          (l = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          l.apply(this, arguments)
        );
      }
      function s(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function f(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? s(Object(n), !0).forEach(function (e) {
                var r, o, i;
                (r = t),
                  (o = e),
                  (i = n[e]),
                  (o = (function (t) {
                    var e = (function (t, e) {
                      if ("object" !== u(t) || null === t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, "string");
                        if ("object" !== u(r)) return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return String(t);
                    })(t);
                    return "symbol" === u(e) ? e : String(e);
                  })(o)) in r
                    ? Object.defineProperty(r, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[o] = i);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : s(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      var p = function (t) {
          var e = t.cx,
            n = t.cy,
            r = t.radius,
            o = t.angle,
            i = t.sign,
            c = t.isExternal,
            u = t.cornerRadius,
            l = t.cornerIsExternal,
            s = u * (c ? 1 : -1) + r,
            f = Math.asin(u / s) / a.Wk,
            p = l ? o : o + i * f,
            h = l ? o - i * f : o;
          return {
            center: (0, a.op)(e, n, s, p),
            circleTangency: (0, a.op)(e, n, r, p),
            lineTangency: (0, a.op)(e, n, s * Math.cos(f * a.Wk), h),
            theta: f,
          };
        },
        h = function (t) {
          var e = t.cx,
            n = t.cy,
            r = t.innerRadius,
            o = t.outerRadius,
            i = t.startAngle,
            u = (function (t, e) {
              return (0, c.uY)(e - t) * Math.min(Math.abs(e - t), 359.999);
            })(i, t.endAngle),
            l = i + u,
            s = (0, a.op)(e, n, o, i),
            f = (0, a.op)(e, n, o, l),
            p = "M "
              .concat(s.x, ",")
              .concat(s.y, "\n    A ")
              .concat(o, ",")
              .concat(o, ",0,\n    ")
              .concat(+(Math.abs(u) > 180), ",")
              .concat(+(i > l), ",\n    ")
              .concat(f.x, ",")
              .concat(f.y, "\n  ");
          if (r > 0) {
            var h = (0, a.op)(e, n, r, i),
              d = (0, a.op)(e, n, r, l);
            p += "L "
              .concat(d.x, ",")
              .concat(d.y, "\n            A ")
              .concat(r, ",")
              .concat(r, ",0,\n            ")
              .concat(+(Math.abs(u) > 180), ",")
              .concat(+(i <= l), ",\n            ")
              .concat(h.x, ",")
              .concat(h.y, " Z");
          } else p += "L ".concat(e, ",").concat(n, " Z");
          return p;
        },
        d = {
          cx: 0,
          cy: 0,
          innerRadius: 0,
          outerRadius: 0,
          startAngle: 0,
          endAngle: 0,
          cornerRadius: 0,
          forceCornerRadius: !1,
          cornerIsExternal: !1,
        },
        y = function (t) {
          var e = f(f({}, d), t),
            n = e.cx,
            a = e.cy,
            u = e.innerRadius,
            s = e.outerRadius,
            y = e.cornerRadius,
            v = e.forceCornerRadius,
            m = e.cornerIsExternal,
            g = e.startAngle,
            b = e.endAngle,
            x = e.className;
          if (s < u || g === b) return null;
          var w,
            O = (0, o.Z)("recharts-sector", x),
            j = s - u,
            S = (0, c.h1)(y, j, 0, !0);
          return (
            (w =
              S > 0 && Math.abs(g - b) < 360
                ? (function (t) {
                    var e = t.cx,
                      n = t.cy,
                      r = t.innerRadius,
                      o = t.outerRadius,
                      i = t.cornerRadius,
                      a = t.forceCornerRadius,
                      u = t.cornerIsExternal,
                      l = t.startAngle,
                      s = t.endAngle,
                      f = (0, c.uY)(s - l),
                      d = p({
                        cx: e,
                        cy: n,
                        radius: o,
                        angle: l,
                        sign: f,
                        cornerRadius: i,
                        cornerIsExternal: u,
                      }),
                      y = d.circleTangency,
                      v = d.lineTangency,
                      m = d.theta,
                      g = p({
                        cx: e,
                        cy: n,
                        radius: o,
                        angle: s,
                        sign: -f,
                        cornerRadius: i,
                        cornerIsExternal: u,
                      }),
                      b = g.circleTangency,
                      x = g.lineTangency,
                      w = g.theta,
                      O = u ? Math.abs(l - s) : Math.abs(l - s) - m - w;
                    if (O < 0)
                      return a
                        ? "M "
                            .concat(v.x, ",")
                            .concat(v.y, "\n        a")
                            .concat(i, ",")
                            .concat(i, ",0,0,1,")
                            .concat(2 * i, ",0\n        a")
                            .concat(i, ",")
                            .concat(i, ",0,0,1,")
                            .concat(2 * -i, ",0\n      ")
                        : h({
                            cx: e,
                            cy: n,
                            innerRadius: r,
                            outerRadius: o,
                            startAngle: l,
                            endAngle: s,
                          });
                    var j = "M "
                      .concat(v.x, ",")
                      .concat(v.y, "\n    A")
                      .concat(i, ",")
                      .concat(i, ",0,0,")
                      .concat(+(f < 0), ",")
                      .concat(y.x, ",")
                      .concat(y.y, "\n    A")
                      .concat(o, ",")
                      .concat(o, ",0,")
                      .concat(+(O > 180), ",")
                      .concat(+(f < 0), ",")
                      .concat(b.x, ",")
                      .concat(b.y, "\n    A")
                      .concat(i, ",")
                      .concat(i, ",0,0,")
                      .concat(+(f < 0), ",")
                      .concat(x.x, ",")
                      .concat(x.y, "\n  ");
                    if (r > 0) {
                      var S = p({
                          cx: e,
                          cy: n,
                          radius: r,
                          angle: l,
                          sign: f,
                          isExternal: !0,
                          cornerRadius: i,
                          cornerIsExternal: u,
                        }),
                        E = S.circleTangency,
                        A = S.lineTangency,
                        P = S.theta,
                        k = p({
                          cx: e,
                          cy: n,
                          radius: r,
                          angle: s,
                          sign: -f,
                          isExternal: !0,
                          cornerRadius: i,
                          cornerIsExternal: u,
                        }),
                        M = k.circleTangency,
                        T = k.lineTangency,
                        _ = k.theta,
                        C = u ? Math.abs(l - s) : Math.abs(l - s) - P - _;
                      if (C < 0 && 0 === i)
                        return "".concat(j, "L").concat(e, ",").concat(n, "Z");
                      j += "L"
                        .concat(T.x, ",")
                        .concat(T.y, "\n      A")
                        .concat(i, ",")
                        .concat(i, ",0,0,")
                        .concat(+(f < 0), ",")
                        .concat(M.x, ",")
                        .concat(M.y, "\n      A")
                        .concat(r, ",")
                        .concat(r, ",0,")
                        .concat(+(C > 180), ",")
                        .concat(+(f > 0), ",")
                        .concat(E.x, ",")
                        .concat(E.y, "\n      A")
                        .concat(i, ",")
                        .concat(i, ",0,0,")
                        .concat(+(f < 0), ",")
                        .concat(A.x, ",")
                        .concat(A.y, "Z");
                    } else j += "L".concat(e, ",").concat(n, "Z");
                    return j;
                  })({
                    cx: n,
                    cy: a,
                    innerRadius: u,
                    outerRadius: s,
                    cornerRadius: Math.min(S, j / 2),
                    forceCornerRadius: v,
                    cornerIsExternal: m,
                    startAngle: g,
                    endAngle: b,
                  })
                : h({
                    cx: n,
                    cy: a,
                    innerRadius: u,
                    outerRadius: s,
                    startAngle: g,
                    endAngle: b,
                  })),
            r.createElement(
              "path",
              l({}, (0, i.L6)(e, !0), { className: O, d: w, role: "img" }),
            )
          );
        };
    },
    70653: (t, e, n) => {
      "use strict";
      n.d(e, { v: () => U });
      var r = n(67294),
        o = n(11700),
        i = n.n(o);
      Math.abs, Math.atan2;
      const a = Math.cos,
        c = (Math.max, Math.min, Math.sin),
        u = Math.sqrt,
        l = Math.PI,
        s = 2 * l,
        f = {
          draw(t, e) {
            const n = u(e / l);
            t.moveTo(n, 0), t.arc(0, 0, n, 0, s);
          },
        },
        p = {
          draw(t, e) {
            const n = u(e / 5) / 2;
            t.moveTo(-3 * n, -n),
              t.lineTo(-n, -n),
              t.lineTo(-n, -3 * n),
              t.lineTo(n, -3 * n),
              t.lineTo(n, -n),
              t.lineTo(3 * n, -n),
              t.lineTo(3 * n, n),
              t.lineTo(n, n),
              t.lineTo(n, 3 * n),
              t.lineTo(-n, 3 * n),
              t.lineTo(-n, n),
              t.lineTo(-3 * n, n),
              t.closePath();
          },
        },
        h = u(1 / 3),
        d = 2 * h,
        y = {
          draw(t, e) {
            const n = u(e / d),
              r = n * h;
            t.moveTo(0, -n),
              t.lineTo(r, 0),
              t.lineTo(0, n),
              t.lineTo(-r, 0),
              t.closePath();
          },
        },
        v = {
          draw(t, e) {
            const n = u(e),
              r = -n / 2;
            t.rect(r, r, n, n);
          },
        },
        m = c(l / 10) / c((7 * l) / 10),
        g = c(s / 10) * m,
        b = -a(s / 10) * m,
        x = {
          draw(t, e) {
            const n = u(0.8908130915292852 * e),
              r = g * n,
              o = b * n;
            t.moveTo(0, -n), t.lineTo(r, o);
            for (let e = 1; e < 5; ++e) {
              const i = (s * e) / 5,
                u = a(i),
                l = c(i);
              t.lineTo(l * n, -u * n), t.lineTo(u * r - l * o, l * r + u * o);
            }
            t.closePath();
          },
        },
        w = u(3),
        O = {
          draw(t, e) {
            const n = -u(e / (3 * w));
            t.moveTo(0, 2 * n),
              t.lineTo(-w * n, -n),
              t.lineTo(w * n, -n),
              t.closePath();
          },
        },
        j = -0.5,
        S = u(3) / 2,
        E = 1 / u(12),
        A = 3 * (E / 2 + 1),
        P = {
          draw(t, e) {
            const n = u(e / A),
              r = n / 2,
              o = n * E,
              i = r,
              a = n * E + n,
              c = -i,
              l = a;
            t.moveTo(r, o),
              t.lineTo(i, a),
              t.lineTo(c, l),
              t.lineTo(j * r - S * o, S * r + j * o),
              t.lineTo(j * i - S * a, S * i + j * a),
              t.lineTo(j * c - S * l, S * c + j * l),
              t.lineTo(j * r + S * o, j * o - S * r),
              t.lineTo(j * i + S * a, j * a - S * i),
              t.lineTo(j * c + S * l, j * l - S * c),
              t.closePath();
          },
        };
      var k = n(20309),
        M = n(90633);
      u(3), u(3);
      var T = n(90512),
        _ = n(52017);
      function C(t) {
        return (
          (C =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          C(t)
        );
      }
      var N = ["type", "size", "sizeType"];
      function D() {
        return (
          (D = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          D.apply(this, arguments)
        );
      }
      function I(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function L(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? I(Object(n), !0).forEach(function (e) {
                var r, o, i;
                (r = t),
                  (o = e),
                  (i = n[e]),
                  (o = (function (t) {
                    var e = (function (t, e) {
                      if ("object" !== C(t) || null === t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, "string");
                        if ("object" !== C(r)) return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return String(t);
                    })(t);
                    return "symbol" === C(e) ? e : String(e);
                  })(o)) in r
                    ? Object.defineProperty(r, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[o] = i);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : I(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      var R = {
          symbolCircle: f,
          symbolCross: p,
          symbolDiamond: y,
          symbolSquare: v,
          symbolStar: x,
          symbolTriangle: O,
          symbolWye: P,
        },
        B = Math.PI / 180,
        U = function (t) {
          var e,
            n,
            o = t.type,
            a = void 0 === o ? "circle" : o,
            c = t.size,
            u = void 0 === c ? 64 : c,
            l = t.sizeType,
            s = void 0 === l ? "area" : l,
            p = L(
              L(
                {},
                (function (t, e) {
                  if (null == t) return {};
                  var n,
                    r,
                    o = (function (t, e) {
                      if (null == t) return {};
                      var n,
                        r,
                        o = {},
                        i = Object.keys(t);
                      for (r = 0; r < i.length; r++)
                        (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                      return o;
                    })(t, e);
                  if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++)
                      (n = i[r]),
                        e.indexOf(n) >= 0 ||
                          (Object.prototype.propertyIsEnumerable.call(t, n) &&
                            (o[n] = t[n]));
                  }
                  return o;
                })(t, N),
              ),
              {},
              { type: a, size: u, sizeType: s },
            ),
            h = p.className,
            d = p.cx,
            y = p.cy,
            v = (0, _.L6)(p, !0);
          return d === +d && y === +y && u === +u
            ? r.createElement(
                "path",
                D({}, v, {
                  className: (0, T.Z)("recharts-symbols", h),
                  transform: "translate(".concat(d, ", ").concat(y, ")"),
                  d:
                    ((e = (function (t) {
                      var e = "symbol".concat(i()(t));
                      return R[e] || f;
                    })(a)),
                    (n = (function (t, e) {
                      let n = null,
                        r = (0, M.d)(o);
                      function o() {
                        let o;
                        if (
                          (n || (n = o = r()),
                          t
                            .apply(this, arguments)
                            .draw(n, +e.apply(this, arguments)),
                          o)
                        )
                          return (n = null), o + "" || null;
                      }
                      return (
                        (t = "function" == typeof t ? t : (0, k.Z)(t || f)),
                        (e =
                          "function" == typeof e
                            ? e
                            : (0, k.Z)(void 0 === e ? 64 : +e)),
                        (o.type = function (e) {
                          return arguments.length
                            ? ((t = "function" == typeof e ? e : (0, k.Z)(e)),
                              o)
                            : t;
                        }),
                        (o.size = function (t) {
                          return arguments.length
                            ? ((e = "function" == typeof t ? t : (0, k.Z)(+t)),
                              o)
                            : e;
                        }),
                        (o.context = function (t) {
                          return arguments.length
                            ? ((n = null == t ? null : t), o)
                            : n;
                        }),
                        o
                      );
                    })()
                      .type(e)
                      .size(
                        (function (t, e, n) {
                          if ("area" === e) return t;
                          switch (n) {
                            case "cross":
                              return (5 * t * t) / 9;
                            case "diamond":
                              return (0.5 * t * t) / Math.sqrt(3);
                            case "square":
                              return t * t;
                            case "star":
                              var r = 18 * B;
                              return (
                                1.25 *
                                t *
                                t *
                                (Math.tan(r) -
                                  Math.tan(2 * r) * Math.pow(Math.tan(r), 2))
                              );
                            case "triangle":
                              return (Math.sqrt(3) * t * t) / 4;
                            case "wye":
                              return ((21 - 10 * Math.sqrt(3)) * t * t) / 8;
                            default:
                              return (Math.PI * t * t) / 4;
                          }
                        })(u, s, a),
                      )),
                    n()),
                }),
              )
            : null;
        };
      U.registerSymbol = function (t, e) {
        R["symbol".concat(i()(t))] = e;
      };
    },
    85653: (t, e, n) => {
      "use strict";
      n.d(e, {
        bn: () => N,
        a3: () => $,
        lT: () => D,
        V$: () => I,
        w7: () => L,
      });
      var r = n(67294),
        o = n(23560),
        i = n.n(o),
        a = n(68630),
        c = n.n(a),
        u = n(51584),
        l = n.n(u),
        s = n(18446),
        f = n.n(s),
        p = n(13481),
        h = n(90512),
        d = n(94884),
        y = n(52017);
      function v(t) {
        return (
          (v =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          v(t)
        );
      }
      function m() {
        return (
          (m = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          m.apply(this, arguments)
        );
      }
      function g(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function b(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function x(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? b(Object(n), !0).forEach(function (e) {
                var r, o, i;
                (r = t),
                  (o = e),
                  (i = n[e]),
                  (o = (function (t) {
                    var e = (function (t, e) {
                      if ("object" !== v(t) || null === t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, "string");
                        if ("object" !== v(r)) return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return String(t);
                    })(t);
                    return "symbol" === v(e) ? e : String(e);
                  })(o)) in r
                    ? Object.defineProperty(r, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[o] = i);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : b(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      var w = function (t, e, n, r, o) {
          var i,
            a = n - r;
          return (
            (i = "M ".concat(t, ",").concat(e)),
            (i += "L ".concat(t + n, ",").concat(e)),
            (i += "L ".concat(t + n - a / 2, ",").concat(e + o)),
            (i += "L ".concat(t + n - a / 2 - r, ",").concat(e + o)) +
              "L ".concat(t, ",").concat(e, " Z")
          );
        },
        O = {
          x: 0,
          y: 0,
          upperWidth: 0,
          lowerWidth: 0,
          height: 0,
          isUpdateAnimationActive: !1,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "ease",
        },
        j = function (t) {
          var e,
            n,
            o = x(x({}, O), t),
            i = (0, r.useRef)(),
            a =
              ((e = (0, r.useState)(-1)),
              (n = 2),
              (function (t) {
                if (Array.isArray(t)) return t;
              })(e) ||
                (function (t, e) {
                  var n =
                    null == t
                      ? null
                      : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                        t["@@iterator"];
                  if (null != n) {
                    var r,
                      o,
                      i,
                      a,
                      c = [],
                      u = !0,
                      l = !1;
                    try {
                      if (((i = (n = n.call(t)).next), 0 === e)) {
                        if (Object(n) !== n) return;
                        u = !1;
                      } else
                        for (
                          ;
                          !(u = (r = i.call(n)).done) &&
                          (c.push(r.value), c.length !== e);
                          u = !0
                        );
                    } catch (t) {
                      (l = !0), (o = t);
                    } finally {
                      try {
                        if (
                          !u &&
                          null != n.return &&
                          ((a = n.return()), Object(a) !== a)
                        )
                          return;
                      } finally {
                        if (l) throw o;
                      }
                    }
                    return c;
                  }
                })(e, n) ||
                (function (t, e) {
                  if (t) {
                    if ("string" == typeof t) return g(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return (
                      "Object" === n &&
                        t.constructor &&
                        (n = t.constructor.name),
                      "Map" === n || "Set" === n
                        ? Array.from(t)
                        : "Arguments" === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? g(t, e)
                          : void 0
                    );
                  }
                })(e, n) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                  );
                })()),
            c = a[0],
            u = a[1];
          (0, r.useEffect)(function () {
            if (i.current && i.current.getTotalLength)
              try {
                var t = i.current.getTotalLength();
                t && u(t);
              } catch (t) {}
          }, []);
          var l = o.x,
            s = o.y,
            f = o.upperWidth,
            p = o.lowerWidth,
            v = o.height,
            b = o.className,
            j = o.animationEasing,
            S = o.animationDuration,
            E = o.animationBegin,
            A = o.isUpdateAnimationActive;
          if (
            l !== +l ||
            s !== +s ||
            f !== +f ||
            p !== +p ||
            v !== +v ||
            (0 === f && 0 === p) ||
            0 === v
          )
            return null;
          var P = (0, h.Z)("recharts-trapezoid", b);
          return A
            ? r.createElement(
                d.ZP,
                {
                  canBegin: c > 0,
                  from: { upperWidth: 0, lowerWidth: 0, height: v, x: l, y: s },
                  to: { upperWidth: f, lowerWidth: p, height: v, x: l, y: s },
                  duration: S,
                  animationEasing: j,
                  isActive: A,
                },
                function (t) {
                  var e = t.upperWidth,
                    n = t.lowerWidth,
                    a = t.height,
                    u = t.x,
                    l = t.y;
                  return r.createElement(
                    d.ZP,
                    {
                      canBegin: c > 0,
                      from: "0px ".concat(-1 === c ? 1 : c, "px"),
                      to: "".concat(c, "px 0px"),
                      attributeName: "strokeDasharray",
                      begin: E,
                      duration: S,
                      easing: j,
                    },
                    r.createElement(
                      "path",
                      m({}, (0, y.L6)(o, !0), {
                        className: P,
                        d: w(u, l, e, n, a),
                        ref: i,
                      }),
                    ),
                  );
                },
              )
            : r.createElement(
                "g",
                null,
                r.createElement(
                  "path",
                  m({}, (0, y.L6)(o, !0), {
                    className: P,
                    d: w(l, s, f, p, v),
                  }),
                ),
              );
        },
        S = n(45108),
        E = n(48710),
        A = n(70653),
        P = [
          "option",
          "shapeType",
          "propTransformer",
          "activeClassName",
          "isActive",
        ];
      function k(t) {
        return (
          (k =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          k(t)
        );
      }
      function M(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function T(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? M(Object(n), !0).forEach(function (e) {
                var r, o, i;
                (r = t),
                  (o = e),
                  (i = n[e]),
                  (o = (function (t) {
                    var e = (function (t, e) {
                      if ("object" !== k(t) || null === t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, "string");
                        if ("object" !== k(r)) return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return String(t);
                    })(t);
                    return "symbol" === k(e) ? e : String(e);
                  })(o)) in r
                    ? Object.defineProperty(r, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[o] = i);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : M(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function _(t, e) {
        return T(T({}, e), t);
      }
      function C(t) {
        var e = t.shapeType,
          n = t.elementProps;
        switch (e) {
          case "rectangle":
            return r.createElement(p.A, n);
          case "trapezoid":
            return r.createElement(j, n);
          case "sector":
            return r.createElement(S.L, n);
          case "symbols":
            if (
              (function (t, e) {
                return "symbols" === t;
              })(e)
            )
              return r.createElement(A.v, n);
            break;
          default:
            return null;
        }
      }
      function N(t) {
        var e,
          n = t.option,
          o = t.shapeType,
          a = t.propTransformer,
          u = void 0 === a ? _ : a,
          s = t.activeClassName,
          f = void 0 === s ? "recharts-active-shape" : s,
          p = t.isActive,
          h = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = (function (t, e) {
                if (null == t) return {};
                var n,
                  r,
                  o = {},
                  i = Object.keys(t);
                for (r = 0; r < i.length; r++)
                  (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                return o;
              })(t, e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(t);
              for (r = 0; r < i.length; r++)
                (n = i[r]),
                  e.indexOf(n) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(t, n) &&
                      (o[n] = t[n]));
            }
            return o;
          })(t, P);
        if ((0, r.isValidElement)(n))
          e = (0, r.cloneElement)(
            n,
            T(
              T({}, h),
              (function (t) {
                return (0, r.isValidElement)(t) ? t.props : t;
              })(n),
            ),
          );
        else if (i()(n)) e = n(h);
        else if (c()(n) && !l()(n)) {
          var d = u(n, h);
          e = r.createElement(C, { shapeType: o, elementProps: d });
        } else {
          var y = h;
          e = r.createElement(C, { shapeType: o, elementProps: y });
        }
        return p ? r.createElement(E.m, { className: f }, e) : e;
      }
      function D(t, e) {
        return "trapezoids" in t.props;
      }
      function I(t, e) {
        return "sectors" in t.props;
      }
      function L(t, e) {
        return "points" in t.props;
      }
      function R(t, e) {
        var n,
          r,
          o =
            t.x ===
              (null == e || null === (n = e.labelViewBox) || void 0 === n
                ? void 0
                : n.x) || t.x === e.x,
          i =
            t.y ===
              (null == e || null === (r = e.labelViewBox) || void 0 === r
                ? void 0
                : r.y) || t.y === e.y;
        return o && i;
      }
      function B(t, e) {
        var n = t.endAngle === e.endAngle,
          r = t.startAngle === e.startAngle;
        return n && r;
      }
      function U(t, e) {
        var n = t.x === e.x,
          r = t.y === e.y,
          o = t.z === e.z;
        return n && r && o;
      }
      function $(t) {
        var e = t.activeTooltipItem,
          n = t.graphicalItem,
          r = t.itemData,
          o = (function (t, e) {
            var n;
            return (
              D(t)
                ? (n = "trapezoids")
                : I(t)
                  ? (n = "sectors")
                  : L(t) && (n = "points"),
              n
            );
          })(n),
          i = (function (t, e) {
            var n, r;
            return D(t)
              ? null === (n = e.tooltipPayload) ||
                void 0 === n ||
                null === (n = n[0]) ||
                void 0 === n ||
                null === (n = n.payload) ||
                void 0 === n
                ? void 0
                : n.payload
              : I(t)
                ? null === (r = e.tooltipPayload) ||
                  void 0 === r ||
                  null === (r = r[0]) ||
                  void 0 === r ||
                  null === (r = r.payload) ||
                  void 0 === r
                  ? void 0
                  : r.payload
                : L(t)
                  ? e.payload
                  : {};
          })(n, e),
          a = r.filter(function (t, r) {
            var a = f()(i, t),
              c = n.props[o].filter(function (t) {
                var r = (function (t, e) {
                  var n;
                  return D(t) ? (n = R) : I(t) ? (n = B) : L(t) && (n = U), n;
                })(n);
                return r(t, e);
              }),
              u = n.props[o].indexOf(c[c.length - 1]);
            return a && r === u;
          });
        return r.indexOf(a[a.length - 1]);
      }
    },
    81990: (t, e, n) => {
      "use strict";
      n.d(e, {
        By: () => bi,
        VO: () => yi,
        zF: () => Ti,
        DO: () => Pi,
        zT: () => $i,
        qz: () => gi,
        pt: () => mi,
        Rf: () => Si,
        gF: () => di,
        s6: () => Oi,
        EB: () => Li,
        fk: () => vi,
        wh: () => Ni,
        O3: () => Ii,
        uY: () => Ei,
        g$: () => Di,
        Qo: () => zi,
        F$: () => hi,
        NA: () => ji,
        ko: () => Fi,
        ZI: () => wi,
        Hq: () => ki,
        LG: () => Ui,
      });
      var r = {};
      n.r(r),
        n.d(r, {
          scaleBand: () => o.Z,
          scaleDiverging: () => Xr,
          scaleDivergingLog: () => Yr,
          scaleDivergingPow: () => Vr,
          scaleDivergingSqrt: () => Kr,
          scaleDivergingSymlog: () => Hr,
          scaleIdentity: () => zt,
          scaleImplicit: () => ne.O,
          scaleLinear: () => Ft,
          scaleLog: () => Kt,
          scaleOrdinal: () => ne.Z,
          scalePoint: () => o.x,
          scalePow: () => ce,
          scaleQuantile: () => me,
          scaleQuantize: () => ge,
          scaleRadial: () => se,
          scaleSequential: () => $r,
          scaleSequentialLog: () => Fr,
          scaleSequentialPow: () => Wr,
          scaleSequentialQuantile: () => qr,
          scaleSequentialSqrt: () => Zr,
          scaleSequentialSymlog: () => zr,
          scaleSqrt: () => ue,
          scaleSymlog: () => ee,
          scaleThreshold: () => be,
          scaleTime: () => Lr,
          scaleUtc: () => Rr,
          tickFormat: () => Ut,
        });
      var o = n(30996);
      const i = Math.sqrt(50),
        a = Math.sqrt(10),
        c = Math.sqrt(2);
      function u(t, e, n) {
        const r = (e - t) / Math.max(0, n),
          o = Math.floor(Math.log10(r)),
          l = r / Math.pow(10, o),
          s = l >= i ? 10 : l >= a ? 5 : l >= c ? 2 : 1;
        let f, p, h;
        return (
          o < 0
            ? ((h = Math.pow(10, -o) / s),
              (f = Math.round(t * h)),
              (p = Math.round(e * h)),
              f / h < t && ++f,
              p / h > e && --p,
              (h = -h))
            : ((h = Math.pow(10, o) * s),
              (f = Math.round(t / h)),
              (p = Math.round(e / h)),
              f * h < t && ++f,
              p * h > e && --p),
          p < f && 0.5 <= n && n < 2 ? u(t, e, 2 * n) : [f, p, h]
        );
      }
      function l(t, e, n) {
        if (!((n = +n) > 0)) return [];
        if ((t = +t) == (e = +e)) return [t];
        const r = e < t,
          [o, i, a] = r ? u(e, t, n) : u(t, e, n);
        if (!(i >= o)) return [];
        const c = i - o + 1,
          l = new Array(c);
        if (r)
          if (a < 0) for (let t = 0; t < c; ++t) l[t] = (i - t) / -a;
          else for (let t = 0; t < c; ++t) l[t] = (i - t) * a;
        else if (a < 0) for (let t = 0; t < c; ++t) l[t] = (o + t) / -a;
        else for (let t = 0; t < c; ++t) l[t] = (o + t) * a;
        return l;
      }
      function s(t, e, n) {
        return u((t = +t), (e = +e), (n = +n))[2];
      }
      function f(t, e, n) {
        n = +n;
        const r = (e = +e) < (t = +t),
          o = r ? s(e, t, n) : s(t, e, n);
        return (r ? -1 : 1) * (o < 0 ? 1 / -o : o);
      }
      function p(t, e) {
        return null == t || null == e
          ? NaN
          : t < e
            ? -1
            : t > e
              ? 1
              : t >= e
                ? 0
                : NaN;
      }
      function h(t, e) {
        return null == t || null == e
          ? NaN
          : e < t
            ? -1
            : e > t
              ? 1
              : e >= t
                ? 0
                : NaN;
      }
      function d(t) {
        let e, n, r;
        function o(t, r, o = 0, i = t.length) {
          if (o < i) {
            if (0 !== e(r, r)) return i;
            do {
              const e = (o + i) >>> 1;
              n(t[e], r) < 0 ? (o = e + 1) : (i = e);
            } while (o < i);
          }
          return o;
        }
        return (
          2 !== t.length
            ? ((e = p), (n = (e, n) => p(t(e), n)), (r = (e, n) => t(e) - n))
            : ((e = t === p || t === h ? t : y), (n = t), (r = t)),
          {
            left: o,
            center: function (t, e, n = 0, i = t.length) {
              const a = o(t, e, n, i - 1);
              return a > n && r(t[a - 1], e) > -r(t[a], e) ? a - 1 : a;
            },
            right: function (t, r, o = 0, i = t.length) {
              if (o < i) {
                if (0 !== e(r, r)) return i;
                do {
                  const e = (o + i) >>> 1;
                  n(t[e], r) <= 0 ? (o = e + 1) : (i = e);
                } while (o < i);
              }
              return o;
            },
          }
        );
      }
      function y() {
        return 0;
      }
      function v(t) {
        return null === t ? NaN : +t;
      }
      const m = d(p),
        g = m.right,
        b = (m.left, d(v).center, g);
      function x(t, e, n) {
        (t.prototype = e.prototype = n), (n.constructor = t);
      }
      function w(t, e) {
        var n = Object.create(t.prototype);
        for (var r in e) n[r] = e[r];
        return n;
      }
      function O() {}
      var j = 0.7,
        S = 1 / j,
        E = "\\s*([+-]?\\d+)\\s*",
        A = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        P = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        k = /^#([0-9a-f]{3,8})$/,
        M = new RegExp(`^rgb\\(${E},${E},${E}\\)$`),
        T = new RegExp(`^rgb\\(${P},${P},${P}\\)$`),
        _ = new RegExp(`^rgba\\(${E},${E},${E},${A}\\)$`),
        C = new RegExp(`^rgba\\(${P},${P},${P},${A}\\)$`),
        N = new RegExp(`^hsl\\(${A},${P},${P}\\)$`),
        D = new RegExp(`^hsla\\(${A},${P},${P},${A}\\)$`),
        I = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074,
        };
      function L() {
        return this.rgb().formatHex();
      }
      function R() {
        return this.rgb().formatRgb();
      }
      function B(t) {
        var e, n;
        return (
          (t = (t + "").trim().toLowerCase()),
          (e = k.exec(t))
            ? ((n = e[1].length),
              (e = parseInt(e[1], 16)),
              6 === n
                ? U(e)
                : 3 === n
                  ? new z(
                      ((e >> 8) & 15) | ((e >> 4) & 240),
                      ((e >> 4) & 15) | (240 & e),
                      ((15 & e) << 4) | (15 & e),
                      1,
                    )
                  : 8 === n
                    ? $(
                        (e >> 24) & 255,
                        (e >> 16) & 255,
                        (e >> 8) & 255,
                        (255 & e) / 255,
                      )
                    : 4 === n
                      ? $(
                          ((e >> 12) & 15) | ((e >> 8) & 240),
                          ((e >> 8) & 15) | ((e >> 4) & 240),
                          ((e >> 4) & 15) | (240 & e),
                          (((15 & e) << 4) | (15 & e)) / 255,
                        )
                      : null)
            : (e = M.exec(t))
              ? new z(e[1], e[2], e[3], 1)
              : (e = T.exec(t))
                ? new z(
                    (255 * e[1]) / 100,
                    (255 * e[2]) / 100,
                    (255 * e[3]) / 100,
                    1,
                  )
                : (e = _.exec(t))
                  ? $(e[1], e[2], e[3], e[4])
                  : (e = C.exec(t))
                    ? $(
                        (255 * e[1]) / 100,
                        (255 * e[2]) / 100,
                        (255 * e[3]) / 100,
                        e[4],
                      )
                    : (e = N.exec(t))
                      ? Y(e[1], e[2] / 100, e[3] / 100, 1)
                      : (e = D.exec(t))
                        ? Y(e[1], e[2] / 100, e[3] / 100, e[4])
                        : I.hasOwnProperty(t)
                          ? U(I[t])
                          : "transparent" === t
                            ? new z(NaN, NaN, NaN, 0)
                            : null
        );
      }
      function U(t) {
        return new z((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
      }
      function $(t, e, n, r) {
        return r <= 0 && (t = e = n = NaN), new z(t, e, n, r);
      }
      function F(t, e, n, r) {
        return 1 === arguments.length
          ? ((o = t) instanceof O || (o = B(o)),
            o ? new z((o = o.rgb()).r, o.g, o.b, o.opacity) : new z())
          : new z(t, e, n, null == r ? 1 : r);
        var o;
      }
      function z(t, e, n, r) {
        (this.r = +t), (this.g = +e), (this.b = +n), (this.opacity = +r);
      }
      function W() {
        return `#${X(this.r)}${X(this.g)}${X(this.b)}`;
      }
      function Z() {
        const t = q(this.opacity);
        return `${1 === t ? "rgb(" : "rgba("}${G(this.r)}, ${G(this.g)}, ${G(this.b)}${1 === t ? ")" : `, ${t})`}`;
      }
      function q(t) {
        return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
      }
      function G(t) {
        return Math.max(0, Math.min(255, Math.round(t) || 0));
      }
      function X(t) {
        return ((t = G(t)) < 16 ? "0" : "") + t.toString(16);
      }
      function Y(t, e, n, r) {
        return (
          r <= 0
            ? (t = e = n = NaN)
            : n <= 0 || n >= 1
              ? (t = e = NaN)
              : e <= 0 && (t = NaN),
          new V(t, e, n, r)
        );
      }
      function H(t) {
        if (t instanceof V) return new V(t.h, t.s, t.l, t.opacity);
        if ((t instanceof O || (t = B(t)), !t)) return new V();
        if (t instanceof V) return t;
        var e = (t = t.rgb()).r / 255,
          n = t.g / 255,
          r = t.b / 255,
          o = Math.min(e, n, r),
          i = Math.max(e, n, r),
          a = NaN,
          c = i - o,
          u = (i + o) / 2;
        return (
          c
            ? ((a =
                e === i
                  ? (n - r) / c + 6 * (n < r)
                  : n === i
                    ? (r - e) / c + 2
                    : (e - n) / c + 4),
              (c /= u < 0.5 ? i + o : 2 - i - o),
              (a *= 60))
            : (c = u > 0 && u < 1 ? 0 : a),
          new V(a, c, u, t.opacity)
        );
      }
      function V(t, e, n, r) {
        (this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +r);
      }
      function K(t) {
        return (t = (t || 0) % 360) < 0 ? t + 360 : t;
      }
      function J(t) {
        return Math.max(0, Math.min(1, t || 0));
      }
      function Q(t, e, n) {
        return (
          255 *
          (t < 60
            ? e + ((n - e) * t) / 60
            : t < 180
              ? n
              : t < 240
                ? e + ((n - e) * (240 - t)) / 60
                : e)
        );
      }
      function tt(t, e, n, r, o) {
        var i = t * t,
          a = i * t;
        return (
          ((1 - 3 * t + 3 * i - a) * e +
            (4 - 6 * i + 3 * a) * n +
            (1 + 3 * t + 3 * i - 3 * a) * r +
            a * o) /
          6
        );
      }
      x(O, B, {
        copy(t) {
          return Object.assign(new this.constructor(), this, t);
        },
        displayable() {
          return this.rgb().displayable();
        },
        hex: L,
        formatHex: L,
        formatHex8: function () {
          return this.rgb().formatHex8();
        },
        formatHsl: function () {
          return H(this).formatHsl();
        },
        formatRgb: R,
        toString: R,
      }),
        x(
          z,
          F,
          w(O, {
            brighter(t) {
              return (
                (t = null == t ? S : Math.pow(S, t)),
                new z(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = null == t ? j : Math.pow(j, t)),
                new z(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            rgb() {
              return this;
            },
            clamp() {
              return new z(G(this.r), G(this.g), G(this.b), q(this.opacity));
            },
            displayable() {
              return (
                -0.5 <= this.r &&
                this.r < 255.5 &&
                -0.5 <= this.g &&
                this.g < 255.5 &&
                -0.5 <= this.b &&
                this.b < 255.5 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            hex: W,
            formatHex: W,
            formatHex8: function () {
              return `#${X(this.r)}${X(this.g)}${X(this.b)}${X(255 * (isNaN(this.opacity) ? 1 : this.opacity))}`;
            },
            formatRgb: Z,
            toString: Z,
          }),
        ),
        x(
          V,
          function (t, e, n, r) {
            return 1 === arguments.length
              ? H(t)
              : new V(t, e, n, null == r ? 1 : r);
          },
          w(O, {
            brighter(t) {
              return (
                (t = null == t ? S : Math.pow(S, t)),
                new V(this.h, this.s, this.l * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = null == t ? j : Math.pow(j, t)),
                new V(this.h, this.s, this.l * t, this.opacity)
              );
            },
            rgb() {
              var t = (this.h % 360) + 360 * (this.h < 0),
                e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                n = this.l,
                r = n + (n < 0.5 ? n : 1 - n) * e,
                o = 2 * n - r;
              return new z(
                Q(t >= 240 ? t - 240 : t + 120, o, r),
                Q(t, o, r),
                Q(t < 120 ? t + 240 : t - 120, o, r),
                this.opacity,
              );
            },
            clamp() {
              return new V(K(this.h), J(this.s), J(this.l), q(this.opacity));
            },
            displayable() {
              return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            formatHsl() {
              const t = q(this.opacity);
              return `${1 === t ? "hsl(" : "hsla("}${K(this.h)}, ${100 * J(this.s)}%, ${100 * J(this.l)}%${1 === t ? ")" : `, ${t})`}`;
            },
          }),
        );
      const et = (t) => () => t;
      function nt(t, e) {
        var n = e - t;
        return n
          ? (function (t, e) {
              return function (n) {
                return t + n * e;
              };
            })(t, n)
          : et(isNaN(t) ? e : t);
      }
      const rt = (function t(e) {
        var n = (function (t) {
          return 1 == (t = +t)
            ? nt
            : function (e, n) {
                return n - e
                  ? (function (t, e, n) {
                      return (
                        (t = Math.pow(t, n)),
                        (e = Math.pow(e, n) - t),
                        (n = 1 / n),
                        function (r) {
                          return Math.pow(t + r * e, n);
                        }
                      );
                    })(e, n, t)
                  : et(isNaN(e) ? n : e);
              };
        })(e);
        function r(t, e) {
          var r = n((t = F(t)).r, (e = F(e)).r),
            o = n(t.g, e.g),
            i = n(t.b, e.b),
            a = nt(t.opacity, e.opacity);
          return function (e) {
            return (
              (t.r = r(e)),
              (t.g = o(e)),
              (t.b = i(e)),
              (t.opacity = a(e)),
              t + ""
            );
          };
        }
        return (r.gamma = t), r;
      })(1);
      function ot(t) {
        return function (e) {
          var n,
            r,
            o = e.length,
            i = new Array(o),
            a = new Array(o),
            c = new Array(o);
          for (n = 0; n < o; ++n)
            (r = F(e[n])),
              (i[n] = r.r || 0),
              (a[n] = r.g || 0),
              (c[n] = r.b || 0);
          return (
            (i = t(i)),
            (a = t(a)),
            (c = t(c)),
            (r.opacity = 1),
            function (t) {
              return (r.r = i(t)), (r.g = a(t)), (r.b = c(t)), r + "";
            }
          );
        };
      }
      function it(t, e) {
        var n,
          r = e ? e.length : 0,
          o = t ? Math.min(r, t.length) : 0,
          i = new Array(o),
          a = new Array(r);
        for (n = 0; n < o; ++n) i[n] = ht(t[n], e[n]);
        for (; n < r; ++n) a[n] = e[n];
        return function (t) {
          for (n = 0; n < o; ++n) a[n] = i[n](t);
          return a;
        };
      }
      function at(t, e) {
        var n = new Date();
        return (
          (t = +t),
          (e = +e),
          function (r) {
            return n.setTime(t * (1 - r) + e * r), n;
          }
        );
      }
      function ct(t, e) {
        return (
          (t = +t),
          (e = +e),
          function (n) {
            return t * (1 - n) + e * n;
          }
        );
      }
      function ut(t, e) {
        var n,
          r = {},
          o = {};
        for (n in ((null !== t && "object" == typeof t) || (t = {}),
        (null !== e && "object" == typeof e) || (e = {}),
        e))
          n in t ? (r[n] = ht(t[n], e[n])) : (o[n] = e[n]);
        return function (t) {
          for (n in r) o[n] = r[n](t);
          return o;
        };
      }
      ot(function (t) {
        var e = t.length - 1;
        return function (n) {
          var r =
              n <= 0 ? (n = 0) : n >= 1 ? ((n = 1), e - 1) : Math.floor(n * e),
            o = t[r],
            i = t[r + 1],
            a = r > 0 ? t[r - 1] : 2 * o - i,
            c = r < e - 1 ? t[r + 2] : 2 * i - o;
          return tt((n - r / e) * e, a, o, i, c);
        };
      }),
        ot(function (t) {
          var e = t.length;
          return function (n) {
            var r = Math.floor(((n %= 1) < 0 ? ++n : n) * e),
              o = t[(r + e - 1) % e],
              i = t[r % e],
              a = t[(r + 1) % e],
              c = t[(r + 2) % e];
            return tt((n - r / e) * e, o, i, a, c);
          };
        });
      var lt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        st = new RegExp(lt.source, "g");
      function ft(t, e) {
        var n,
          r,
          o,
          i = (lt.lastIndex = st.lastIndex = 0),
          a = -1,
          c = [],
          u = [];
        for (t += "", e += ""; (n = lt.exec(t)) && (r = st.exec(e)); )
          (o = r.index) > i &&
            ((o = e.slice(i, o)), c[a] ? (c[a] += o) : (c[++a] = o)),
            (n = n[0]) === (r = r[0])
              ? c[a]
                ? (c[a] += r)
                : (c[++a] = r)
              : ((c[++a] = null), u.push({ i: a, x: ct(n, r) })),
            (i = st.lastIndex);
        return (
          i < e.length && ((o = e.slice(i)), c[a] ? (c[a] += o) : (c[++a] = o)),
          c.length < 2
            ? u[0]
              ? (function (t) {
                  return function (e) {
                    return t(e) + "";
                  };
                })(u[0].x)
              : (function (t) {
                  return function () {
                    return t;
                  };
                })(e)
            : ((e = u.length),
              function (t) {
                for (var n, r = 0; r < e; ++r) c[(n = u[r]).i] = n.x(t);
                return c.join("");
              })
        );
      }
      function pt(t, e) {
        e || (e = []);
        var n,
          r = t ? Math.min(e.length, t.length) : 0,
          o = e.slice();
        return function (i) {
          for (n = 0; n < r; ++n) o[n] = t[n] * (1 - i) + e[n] * i;
          return o;
        };
      }
      function ht(t, e) {
        var n,
          r,
          o = typeof e;
        return null == e || "boolean" === o
          ? et(e)
          : ("number" === o
              ? ct
              : "string" === o
                ? (n = B(e))
                  ? ((e = n), rt)
                  : ft
                : e instanceof B
                  ? rt
                  : e instanceof Date
                    ? at
                    : ((r = e),
                      !ArrayBuffer.isView(r) || r instanceof DataView
                        ? Array.isArray(e)
                          ? it
                          : ("function" != typeof e.valueOf &&
                                "function" != typeof e.toString) ||
                              isNaN(e)
                            ? ut
                            : ct
                        : pt))(t, e);
      }
      function dt(t, e) {
        return (
          (t = +t),
          (e = +e),
          function (n) {
            return Math.round(t * (1 - n) + e * n);
          }
        );
      }
      function yt(t) {
        return +t;
      }
      var vt = [0, 1];
      function mt(t) {
        return t;
      }
      function gt(t, e) {
        return (e -= t = +t)
          ? function (n) {
              return (n - t) / e;
            }
          : ((n = isNaN(e) ? NaN : 0.5),
            function () {
              return n;
            });
        var n;
      }
      function bt(t, e, n) {
        var r = t[0],
          o = t[1],
          i = e[0],
          a = e[1];
        return (
          o < r
            ? ((r = gt(o, r)), (i = n(a, i)))
            : ((r = gt(r, o)), (i = n(i, a))),
          function (t) {
            return i(r(t));
          }
        );
      }
      function xt(t, e, n) {
        var r = Math.min(t.length, e.length) - 1,
          o = new Array(r),
          i = new Array(r),
          a = -1;
        for (
          t[r] < t[0] && ((t = t.slice().reverse()), (e = e.slice().reverse()));
          ++a < r;

        )
          (o[a] = gt(t[a], t[a + 1])), (i[a] = n(e[a], e[a + 1]));
        return function (e) {
          var n = b(t, e, 1, r) - 1;
          return i[n](o[n](e));
        };
      }
      function wt(t, e) {
        return e
          .domain(t.domain())
          .range(t.range())
          .interpolate(t.interpolate())
          .clamp(t.clamp())
          .unknown(t.unknown());
      }
      function Ot() {
        var t,
          e,
          n,
          r,
          o,
          i,
          a = vt,
          c = vt,
          u = ht,
          l = mt;
        function s() {
          var t,
            e,
            n,
            u = Math.min(a.length, c.length);
          return (
            l !== mt &&
              ((t = a[0]),
              (e = a[u - 1]),
              t > e && ((n = t), (t = e), (e = n)),
              (l = function (n) {
                return Math.max(t, Math.min(e, n));
              })),
            (r = u > 2 ? xt : bt),
            (o = i = null),
            f
          );
        }
        function f(e) {
          return null == e || isNaN((e = +e))
            ? n
            : (o || (o = r(a.map(t), c, u)))(t(l(e)));
        }
        return (
          (f.invert = function (n) {
            return l(e((i || (i = r(c, a.map(t), ct)))(n)));
          }),
          (f.domain = function (t) {
            return arguments.length
              ? ((a = Array.from(t, yt)), s())
              : a.slice();
          }),
          (f.range = function (t) {
            return arguments.length ? ((c = Array.from(t)), s()) : c.slice();
          }),
          (f.rangeRound = function (t) {
            return (c = Array.from(t)), (u = dt), s();
          }),
          (f.clamp = function (t) {
            return arguments.length ? ((l = !!t || mt), s()) : l !== mt;
          }),
          (f.interpolate = function (t) {
            return arguments.length ? ((u = t), s()) : u;
          }),
          (f.unknown = function (t) {
            return arguments.length ? ((n = t), f) : n;
          }),
          function (n, r) {
            return (t = n), (e = r), s();
          }
        );
      }
      function jt() {
        return Ot()(mt, mt);
      }
      var St,
        Et = n(94182),
        At =
          /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      function Pt(t) {
        if (!(e = At.exec(t))) throw new Error("invalid format: " + t);
        var e;
        return new kt({
          fill: e[1],
          align: e[2],
          sign: e[3],
          symbol: e[4],
          zero: e[5],
          width: e[6],
          comma: e[7],
          precision: e[8] && e[8].slice(1),
          trim: e[9],
          type: e[10],
        });
      }
      function kt(t) {
        (this.fill = void 0 === t.fill ? " " : t.fill + ""),
          (this.align = void 0 === t.align ? ">" : t.align + ""),
          (this.sign = void 0 === t.sign ? "-" : t.sign + ""),
          (this.symbol = void 0 === t.symbol ? "" : t.symbol + ""),
          (this.zero = !!t.zero),
          (this.width = void 0 === t.width ? void 0 : +t.width),
          (this.comma = !!t.comma),
          (this.precision = void 0 === t.precision ? void 0 : +t.precision),
          (this.trim = !!t.trim),
          (this.type = void 0 === t.type ? "" : t.type + "");
      }
      function Mt(t, e) {
        if (
          (n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf(
            "e",
          )) < 0
        )
          return null;
        var n,
          r = t.slice(0, n);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(n + 1)];
      }
      function Tt(t) {
        return (t = Mt(Math.abs(t))) ? t[1] : NaN;
      }
      function _t(t, e) {
        var n = Mt(t, e);
        if (!n) return t + "";
        var r = n[0],
          o = n[1];
        return o < 0
          ? "0." + new Array(-o).join("0") + r
          : r.length > o + 1
            ? r.slice(0, o + 1) + "." + r.slice(o + 1)
            : r + new Array(o - r.length + 2).join("0");
      }
      (Pt.prototype = kt.prototype),
        (kt.prototype.toString = function () {
          return (
            this.fill +
            this.align +
            this.sign +
            this.symbol +
            (this.zero ? "0" : "") +
            (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
            (this.comma ? "," : "") +
            (void 0 === this.precision
              ? ""
              : "." + Math.max(0, 0 | this.precision)) +
            (this.trim ? "~" : "") +
            this.type
          );
        });
      const Ct = {
        "%": (t, e) => (100 * t).toFixed(e),
        b: (t) => Math.round(t).toString(2),
        c: (t) => t + "",
        d: function (t) {
          return Math.abs((t = Math.round(t))) >= 1e21
            ? t.toLocaleString("en").replace(/,/g, "")
            : t.toString(10);
        },
        e: (t, e) => t.toExponential(e),
        f: (t, e) => t.toFixed(e),
        g: (t, e) => t.toPrecision(e),
        o: (t) => Math.round(t).toString(8),
        p: (t, e) => _t(100 * t, e),
        r: _t,
        s: function (t, e) {
          var n = Mt(t, e);
          if (!n) return t + "";
          var r = n[0],
            o = n[1],
            i = o - (St = 3 * Math.max(-8, Math.min(8, Math.floor(o / 3)))) + 1,
            a = r.length;
          return i === a
            ? r
            : i > a
              ? r + new Array(i - a + 1).join("0")
              : i > 0
                ? r.slice(0, i) + "." + r.slice(i)
                : "0." +
                  new Array(1 - i).join("0") +
                  Mt(t, Math.max(0, e + i - 1))[0];
        },
        X: (t) => Math.round(t).toString(16).toUpperCase(),
        x: (t) => Math.round(t).toString(16),
      };
      function Nt(t) {
        return t;
      }
      var Dt,
        It,
        Lt,
        Rt = Array.prototype.map,
        Bt = [
          "y",
          "z",
          "a",
          "f",
          "p",
          "n",
          "µ",
          "m",
          "",
          "k",
          "M",
          "G",
          "T",
          "P",
          "E",
          "Z",
          "Y",
        ];
      function Ut(t, e, n, r) {
        var o,
          i = f(t, e, n);
        switch ((r = Pt(null == r ? ",f" : r)).type) {
          case "s":
            var a = Math.max(Math.abs(t), Math.abs(e));
            return (
              null != r.precision ||
                isNaN(
                  (o = (function (t, e) {
                    return Math.max(
                      0,
                      3 * Math.max(-8, Math.min(8, Math.floor(Tt(e) / 3))) -
                        Tt(Math.abs(t)),
                    );
                  })(i, a)),
                ) ||
                (r.precision = o),
              Lt(r, a)
            );
          case "":
          case "e":
          case "g":
          case "p":
          case "r":
            null != r.precision ||
              isNaN(
                (o = (function (t, e) {
                  return (
                    (t = Math.abs(t)),
                    (e = Math.abs(e) - t),
                    Math.max(0, Tt(e) - Tt(t)) + 1
                  );
                })(i, Math.max(Math.abs(t), Math.abs(e)))),
              ) ||
              (r.precision = o - ("e" === r.type));
            break;
          case "f":
          case "%":
            null != r.precision ||
              isNaN(
                (o = (function (t) {
                  return Math.max(0, -Tt(Math.abs(t)));
                })(i)),
              ) ||
              (r.precision = o - 2 * ("%" === r.type));
        }
        return It(r);
      }
      function $t(t) {
        var e = t.domain;
        return (
          (t.ticks = function (t) {
            var n = e();
            return l(n[0], n[n.length - 1], null == t ? 10 : t);
          }),
          (t.tickFormat = function (t, n) {
            var r = e();
            return Ut(r[0], r[r.length - 1], null == t ? 10 : t, n);
          }),
          (t.nice = function (n) {
            null == n && (n = 10);
            var r,
              o,
              i = e(),
              a = 0,
              c = i.length - 1,
              u = i[a],
              l = i[c],
              f = 10;
            for (
              l < u && ((o = u), (u = l), (l = o), (o = a), (a = c), (c = o));
              f-- > 0;

            ) {
              if ((o = s(u, l, n)) === r) return (i[a] = u), (i[c] = l), e(i);
              if (o > 0)
                (u = Math.floor(u / o) * o), (l = Math.ceil(l / o) * o);
              else {
                if (!(o < 0)) break;
                (u = Math.ceil(u * o) / o), (l = Math.floor(l * o) / o);
              }
              r = o;
            }
            return t;
          }),
          t
        );
      }
      function Ft() {
        var t = jt();
        return (
          (t.copy = function () {
            return wt(t, Ft());
          }),
          Et.o.apply(t, arguments),
          $t(t)
        );
      }
      function zt(t) {
        var e;
        function n(t) {
          return null == t || isNaN((t = +t)) ? e : t;
        }
        return (
          (n.invert = n),
          (n.domain = n.range =
            function (e) {
              return arguments.length
                ? ((t = Array.from(e, yt)), n)
                : t.slice();
            }),
          (n.unknown = function (t) {
            return arguments.length ? ((e = t), n) : e;
          }),
          (n.copy = function () {
            return zt(t).unknown(e);
          }),
          (t = arguments.length ? Array.from(t, yt) : [0, 1]),
          $t(n)
        );
      }
      function Wt(t, e) {
        var n,
          r = 0,
          o = (t = t.slice()).length - 1,
          i = t[r],
          a = t[o];
        return (
          a < i && ((n = r), (r = o), (o = n), (n = i), (i = a), (a = n)),
          (t[r] = e.floor(i)),
          (t[o] = e.ceil(a)),
          t
        );
      }
      function Zt(t) {
        return Math.log(t);
      }
      function qt(t) {
        return Math.exp(t);
      }
      function Gt(t) {
        return -Math.log(-t);
      }
      function Xt(t) {
        return -Math.exp(-t);
      }
      function Yt(t) {
        return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
      }
      function Ht(t) {
        return (e, n) => -t(-e, n);
      }
      function Vt(t) {
        const e = t(Zt, qt),
          n = e.domain;
        let r,
          o,
          i = 10;
        function a() {
          return (
            (r = (function (t) {
              return t === Math.E
                ? Math.log
                : (10 === t && Math.log10) ||
                    (2 === t && Math.log2) ||
                    ((t = Math.log(t)), (e) => Math.log(e) / t);
            })(i)),
            (o = (function (t) {
              return 10 === t
                ? Yt
                : t === Math.E
                  ? Math.exp
                  : (e) => Math.pow(t, e);
            })(i)),
            n()[0] < 0 ? ((r = Ht(r)), (o = Ht(o)), t(Gt, Xt)) : t(Zt, qt),
            e
          );
        }
        return (
          (e.base = function (t) {
            return arguments.length ? ((i = +t), a()) : i;
          }),
          (e.domain = function (t) {
            return arguments.length ? (n(t), a()) : n();
          }),
          (e.ticks = (t) => {
            const e = n();
            let a = e[0],
              c = e[e.length - 1];
            const u = c < a;
            u && ([a, c] = [c, a]);
            let s,
              f,
              p = r(a),
              h = r(c);
            const d = null == t ? 10 : +t;
            let y = [];
            if (!(i % 1) && h - p < d) {
              if (((p = Math.floor(p)), (h = Math.ceil(h)), a > 0)) {
                for (; p <= h; ++p)
                  for (s = 1; s < i; ++s)
                    if (((f = p < 0 ? s / o(-p) : s * o(p)), !(f < a))) {
                      if (f > c) break;
                      y.push(f);
                    }
              } else
                for (; p <= h; ++p)
                  for (s = i - 1; s >= 1; --s)
                    if (((f = p > 0 ? s / o(-p) : s * o(p)), !(f < a))) {
                      if (f > c) break;
                      y.push(f);
                    }
              2 * y.length < d && (y = l(a, c, d));
            } else y = l(p, h, Math.min(h - p, d)).map(o);
            return u ? y.reverse() : y;
          }),
          (e.tickFormat = (t, n) => {
            if (
              (null == t && (t = 10),
              null == n && (n = 10 === i ? "s" : ","),
              "function" != typeof n &&
                (i % 1 || null != (n = Pt(n)).precision || (n.trim = !0),
                (n = It(n))),
              t === 1 / 0)
            )
              return n;
            const a = Math.max(1, (i * t) / e.ticks().length);
            return (t) => {
              let e = t / o(Math.round(r(t)));
              return e * i < i - 0.5 && (e *= i), e <= a ? n(t) : "";
            };
          }),
          (e.nice = () =>
            n(
              Wt(n(), {
                floor: (t) => o(Math.floor(r(t))),
                ceil: (t) => o(Math.ceil(r(t))),
              }),
            )),
          e
        );
      }
      function Kt() {
        const t = Vt(Ot()).domain([1, 10]);
        return (
          (t.copy = () => wt(t, Kt()).base(t.base())),
          Et.o.apply(t, arguments),
          t
        );
      }
      function Jt(t) {
        return function (e) {
          return Math.sign(e) * Math.log1p(Math.abs(e / t));
        };
      }
      function Qt(t) {
        return function (e) {
          return Math.sign(e) * Math.expm1(Math.abs(e)) * t;
        };
      }
      function te(t) {
        var e = 1,
          n = t(Jt(e), Qt(e));
        return (
          (n.constant = function (n) {
            return arguments.length ? t(Jt((e = +n)), Qt(e)) : e;
          }),
          $t(n)
        );
      }
      function ee() {
        var t = te(Ot());
        return (
          (t.copy = function () {
            return wt(t, ee()).constant(t.constant());
          }),
          Et.o.apply(t, arguments)
        );
      }
      (Dt = (function (t) {
        var e,
          n,
          r =
            void 0 === t.grouping || void 0 === t.thousands
              ? Nt
              : ((e = Rt.call(t.grouping, Number)),
                (n = t.thousands + ""),
                function (t, r) {
                  for (
                    var o = t.length, i = [], a = 0, c = e[0], u = 0;
                    o > 0 &&
                    c > 0 &&
                    (u + c + 1 > r && (c = Math.max(1, r - u)),
                    i.push(t.substring((o -= c), o + c)),
                    !((u += c + 1) > r));

                  )
                    c = e[(a = (a + 1) % e.length)];
                  return i.reverse().join(n);
                }),
          o = void 0 === t.currency ? "" : t.currency[0] + "",
          i = void 0 === t.currency ? "" : t.currency[1] + "",
          a = void 0 === t.decimal ? "." : t.decimal + "",
          c =
            void 0 === t.numerals
              ? Nt
              : (function (t) {
                  return function (e) {
                    return e.replace(/[0-9]/g, function (e) {
                      return t[+e];
                    });
                  };
                })(Rt.call(t.numerals, String)),
          u = void 0 === t.percent ? "%" : t.percent + "",
          l = void 0 === t.minus ? "−" : t.minus + "",
          s = void 0 === t.nan ? "NaN" : t.nan + "";
        function f(t) {
          var e = (t = Pt(t)).fill,
            n = t.align,
            f = t.sign,
            p = t.symbol,
            h = t.zero,
            d = t.width,
            y = t.comma,
            v = t.precision,
            m = t.trim,
            g = t.type;
          "n" === g
            ? ((y = !0), (g = "g"))
            : Ct[g] || (void 0 === v && (v = 12), (m = !0), (g = "g")),
            (h || ("0" === e && "=" === n)) && ((h = !0), (e = "0"), (n = "="));
          var b =
              "$" === p
                ? o
                : "#" === p && /[boxX]/.test(g)
                  ? "0" + g.toLowerCase()
                  : "",
            x = "$" === p ? i : /[%p]/.test(g) ? u : "",
            w = Ct[g],
            O = /[defgprs%]/.test(g);
          function j(t) {
            var o,
              i,
              u,
              p = b,
              j = x;
            if ("c" === g) (j = w(t) + j), (t = "");
            else {
              var S = (t = +t) < 0 || 1 / t < 0;
              if (
                ((t = isNaN(t) ? s : w(Math.abs(t), v)),
                m &&
                  (t = (function (t) {
                    t: for (var e, n = t.length, r = 1, o = -1; r < n; ++r)
                      switch (t[r]) {
                        case ".":
                          o = e = r;
                          break;
                        case "0":
                          0 === o && (o = r), (e = r);
                          break;
                        default:
                          if (!+t[r]) break t;
                          o > 0 && (o = 0);
                      }
                    return o > 0 ? t.slice(0, o) + t.slice(e + 1) : t;
                  })(t)),
                S && 0 == +t && "+" !== f && (S = !1),
                (p =
                  (S ? ("(" === f ? f : l) : "-" === f || "(" === f ? "" : f) +
                  p),
                (j =
                  ("s" === g ? Bt[8 + St / 3] : "") +
                  j +
                  (S && "(" === f ? ")" : "")),
                O)
              )
                for (o = -1, i = t.length; ++o < i; )
                  if (48 > (u = t.charCodeAt(o)) || u > 57) {
                    (j = (46 === u ? a + t.slice(o + 1) : t.slice(o)) + j),
                      (t = t.slice(0, o));
                    break;
                  }
            }
            y && !h && (t = r(t, 1 / 0));
            var E = p.length + t.length + j.length,
              A = E < d ? new Array(d - E + 1).join(e) : "";
            switch (
              (y &&
                h &&
                ((t = r(A + t, A.length ? d - j.length : 1 / 0)), (A = "")),
              n)
            ) {
              case "<":
                t = p + t + j + A;
                break;
              case "=":
                t = p + A + t + j;
                break;
              case "^":
                t = A.slice(0, (E = A.length >> 1)) + p + t + j + A.slice(E);
                break;
              default:
                t = A + p + t + j;
            }
            return c(t);
          }
          return (
            (v =
              void 0 === v
                ? 6
                : /[gprs]/.test(g)
                  ? Math.max(1, Math.min(21, v))
                  : Math.max(0, Math.min(20, v))),
            (j.toString = function () {
              return t + "";
            }),
            j
          );
        }
        return {
          format: f,
          formatPrefix: function (t, e) {
            var n = f((((t = Pt(t)).type = "f"), t)),
              r = 3 * Math.max(-8, Math.min(8, Math.floor(Tt(e) / 3))),
              o = Math.pow(10, -r),
              i = Bt[8 + r / 3];
            return function (t) {
              return n(o * t) + i;
            };
          },
        };
      })({ thousands: ",", grouping: [3], currency: ["$", ""] })),
        (It = Dt.format),
        (Lt = Dt.formatPrefix);
      var ne = n(30780);
      function re(t) {
        return function (e) {
          return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
        };
      }
      function oe(t) {
        return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
      }
      function ie(t) {
        return t < 0 ? -t * t : t * t;
      }
      function ae(t) {
        var e = t(mt, mt),
          n = 1;
        return (
          (e.exponent = function (e) {
            return arguments.length
              ? 1 == (n = +e)
                ? t(mt, mt)
                : 0.5 === n
                  ? t(oe, ie)
                  : t(re(n), re(1 / n))
              : n;
          }),
          $t(e)
        );
      }
      function ce() {
        var t = ae(Ot());
        return (
          (t.copy = function () {
            return wt(t, ce()).exponent(t.exponent());
          }),
          Et.o.apply(t, arguments),
          t
        );
      }
      function ue() {
        return ce.apply(null, arguments).exponent(0.5);
      }
      function le(t) {
        return Math.sign(t) * t * t;
      }
      function se() {
        var t,
          e = jt(),
          n = [0, 1],
          r = !1;
        function o(n) {
          var o = (function (t) {
            return Math.sign(t) * Math.sqrt(Math.abs(t));
          })(e(n));
          return isNaN(o) ? t : r ? Math.round(o) : o;
        }
        return (
          (o.invert = function (t) {
            return e.invert(le(t));
          }),
          (o.domain = function (t) {
            return arguments.length ? (e.domain(t), o) : e.domain();
          }),
          (o.range = function (t) {
            return arguments.length
              ? (e.range((n = Array.from(t, yt)).map(le)), o)
              : n.slice();
          }),
          (o.rangeRound = function (t) {
            return o.range(t).round(!0);
          }),
          (o.round = function (t) {
            return arguments.length ? ((r = !!t), o) : r;
          }),
          (o.clamp = function (t) {
            return arguments.length ? (e.clamp(t), o) : e.clamp();
          }),
          (o.unknown = function (e) {
            return arguments.length ? ((t = e), o) : t;
          }),
          (o.copy = function () {
            return se(e.domain(), n).round(r).clamp(e.clamp()).unknown(t);
          }),
          Et.o.apply(o, arguments),
          $t(o)
        );
      }
      function fe(t, e) {
        let n;
        if (void 0 === e)
          for (const e of t)
            null != e && (n < e || (void 0 === n && e >= e)) && (n = e);
        else {
          let r = -1;
          for (let o of t)
            null != (o = e(o, ++r, t)) &&
              (n < o || (void 0 === n && o >= o)) &&
              (n = o);
        }
        return n;
      }
      function pe(t, e) {
        let n;
        if (void 0 === e)
          for (const e of t)
            null != e && (n > e || (void 0 === n && e >= e)) && (n = e);
        else {
          let r = -1;
          for (let o of t)
            null != (o = e(o, ++r, t)) &&
              (n > o || (void 0 === n && o >= o)) &&
              (n = o);
        }
        return n;
      }
      function he(t, e) {
        return (
          (null == t || !(t >= t)) - (null == e || !(e >= e)) ||
          (t < e ? -1 : t > e ? 1 : 0)
        );
      }
      function de(t, e, n = 0, r = 1 / 0, o) {
        if (
          ((e = Math.floor(e)),
          (n = Math.floor(Math.max(0, n))),
          (r = Math.floor(Math.min(t.length - 1, r))),
          !(n <= e && e <= r))
        )
          return t;
        for (
          o =
            void 0 === o
              ? he
              : (function (t = p) {
                  if (t === p) return he;
                  if ("function" != typeof t)
                    throw new TypeError("compare is not a function");
                  return (e, n) => {
                    const r = t(e, n);
                    return r || 0 === r ? r : (0 === t(n, n)) - (0 === t(e, e));
                  };
                })(o);
          r > n;

        ) {
          if (r - n > 600) {
            const i = r - n + 1,
              a = e - n + 1,
              c = Math.log(i),
              u = 0.5 * Math.exp((2 * c) / 3),
              l =
                0.5 *
                Math.sqrt((c * u * (i - u)) / i) *
                (a - i / 2 < 0 ? -1 : 1);
            de(
              t,
              e,
              Math.max(n, Math.floor(e - (a * u) / i + l)),
              Math.min(r, Math.floor(e + ((i - a) * u) / i + l)),
              o,
            );
          }
          const i = t[e];
          let a = n,
            c = r;
          for (ye(t, n, e), o(t[r], i) > 0 && ye(t, n, r); a < c; ) {
            for (ye(t, a, c), ++a, --c; o(t[a], i) < 0; ) ++a;
            for (; o(t[c], i) > 0; ) --c;
          }
          0 === o(t[n], i) ? ye(t, n, c) : (++c, ye(t, c, r)),
            c <= e && (n = c + 1),
            e <= c && (r = c - 1);
        }
        return t;
      }
      function ye(t, e, n) {
        const r = t[e];
        (t[e] = t[n]), (t[n] = r);
      }
      function ve(t, e, n = v) {
        if ((r = t.length) && !isNaN((e = +e))) {
          if (e <= 0 || r < 2) return +n(t[0], 0, t);
          if (e >= 1) return +n(t[r - 1], r - 1, t);
          var r,
            o = (r - 1) * e,
            i = Math.floor(o),
            a = +n(t[i], i, t);
          return a + (+n(t[i + 1], i + 1, t) - a) * (o - i);
        }
      }
      function me() {
        var t,
          e = [],
          n = [],
          r = [];
        function o() {
          var t = 0,
            o = Math.max(1, n.length);
          for (r = new Array(o - 1); ++t < o; ) r[t - 1] = ve(e, t / o);
          return i;
        }
        function i(e) {
          return null == e || isNaN((e = +e)) ? t : n[b(r, e)];
        }
        return (
          (i.invertExtent = function (t) {
            var o = n.indexOf(t);
            return o < 0
              ? [NaN, NaN]
              : [
                  o > 0 ? r[o - 1] : e[0],
                  o < r.length ? r[o] : e[e.length - 1],
                ];
          }),
          (i.domain = function (t) {
            if (!arguments.length) return e.slice();
            e = [];
            for (let n of t) null == n || isNaN((n = +n)) || e.push(n);
            return e.sort(p), o();
          }),
          (i.range = function (t) {
            return arguments.length ? ((n = Array.from(t)), o()) : n.slice();
          }),
          (i.unknown = function (e) {
            return arguments.length ? ((t = e), i) : t;
          }),
          (i.quantiles = function () {
            return r.slice();
          }),
          (i.copy = function () {
            return me().domain(e).range(n).unknown(t);
          }),
          Et.o.apply(i, arguments)
        );
      }
      function ge() {
        var t,
          e = 0,
          n = 1,
          r = 1,
          o = [0.5],
          i = [0, 1];
        function a(e) {
          return null != e && e <= e ? i[b(o, e, 0, r)] : t;
        }
        function c() {
          var t = -1;
          for (o = new Array(r); ++t < r; )
            o[t] = ((t + 1) * n - (t - r) * e) / (r + 1);
          return a;
        }
        return (
          (a.domain = function (t) {
            return arguments.length
              ? (([e, n] = t), (e = +e), (n = +n), c())
              : [e, n];
          }),
          (a.range = function (t) {
            return arguments.length
              ? ((r = (i = Array.from(t)).length - 1), c())
              : i.slice();
          }),
          (a.invertExtent = function (t) {
            var a = i.indexOf(t);
            return a < 0
              ? [NaN, NaN]
              : a < 1
                ? [e, o[0]]
                : a >= r
                  ? [o[r - 1], n]
                  : [o[a - 1], o[a]];
          }),
          (a.unknown = function (e) {
            return arguments.length ? ((t = e), a) : a;
          }),
          (a.thresholds = function () {
            return o.slice();
          }),
          (a.copy = function () {
            return ge().domain([e, n]).range(i).unknown(t);
          }),
          Et.o.apply($t(a), arguments)
        );
      }
      function be() {
        var t,
          e = [0.5],
          n = [0, 1],
          r = 1;
        function o(o) {
          return null != o && o <= o ? n[b(e, o, 0, r)] : t;
        }
        return (
          (o.domain = function (t) {
            return arguments.length
              ? ((e = Array.from(t)), (r = Math.min(e.length, n.length - 1)), o)
              : e.slice();
          }),
          (o.range = function (t) {
            return arguments.length
              ? ((n = Array.from(t)), (r = Math.min(e.length, n.length - 1)), o)
              : n.slice();
          }),
          (o.invertExtent = function (t) {
            var r = n.indexOf(t);
            return [e[r - 1], e[r]];
          }),
          (o.unknown = function (e) {
            return arguments.length ? ((t = e), o) : t;
          }),
          (o.copy = function () {
            return be().domain(e).range(n).unknown(t);
          }),
          Et.o.apply(o, arguments)
        );
      }
      const xe = 1e3,
        we = 6e4,
        Oe = 36e5,
        je = 864e5,
        Se = 6048e5,
        Ee = 31536e6,
        Ae = new Date(),
        Pe = new Date();
      function ke(t, e, n, r) {
        function o(e) {
          return t((e = 0 === arguments.length ? new Date() : new Date(+e))), e;
        }
        return (
          (o.floor = (e) => (t((e = new Date(+e))), e)),
          (o.ceil = (n) => (t((n = new Date(n - 1))), e(n, 1), t(n), n)),
          (o.round = (t) => {
            const e = o(t),
              n = o.ceil(t);
            return t - e < n - t ? e : n;
          }),
          (o.offset = (t, n) => (
            e((t = new Date(+t)), null == n ? 1 : Math.floor(n)), t
          )),
          (o.range = (n, r, i) => {
            const a = [];
            if (
              ((n = o.ceil(n)),
              (i = null == i ? 1 : Math.floor(i)),
              !(n < r && i > 0))
            )
              return a;
            let c;
            do {
              a.push((c = new Date(+n))), e(n, i), t(n);
            } while (c < n && n < r);
            return a;
          }),
          (o.filter = (n) =>
            ke(
              (e) => {
                if (e >= e) for (; t(e), !n(e); ) e.setTime(e - 1);
              },
              (t, r) => {
                if (t >= t)
                  if (r < 0) for (; ++r <= 0; ) for (; e(t, -1), !n(t); );
                  else for (; --r >= 0; ) for (; e(t, 1), !n(t); );
              },
            )),
          n &&
            ((o.count = (e, r) => (
              Ae.setTime(+e),
              Pe.setTime(+r),
              t(Ae),
              t(Pe),
              Math.floor(n(Ae, Pe))
            )),
            (o.every = (t) => (
              (t = Math.floor(t)),
              isFinite(t) && t > 0
                ? t > 1
                  ? o.filter(
                      r ? (e) => r(e) % t == 0 : (e) => o.count(0, e) % t == 0,
                    )
                  : o
                : null
            ))),
          o
        );
      }
      const Me = ke(
        () => {},
        (t, e) => {
          t.setTime(+t + e);
        },
        (t, e) => e - t,
      );
      (Me.every = (t) => (
        (t = Math.floor(t)),
        isFinite(t) && t > 0
          ? t > 1
            ? ke(
                (e) => {
                  e.setTime(Math.floor(e / t) * t);
                },
                (e, n) => {
                  e.setTime(+e + n * t);
                },
                (e, n) => (n - e) / t,
              )
            : Me
          : null
      )),
        Me.range;
      const Te = ke(
          (t) => {
            t.setTime(t - t.getMilliseconds());
          },
          (t, e) => {
            t.setTime(+t + e * xe);
          },
          (t, e) => (e - t) / xe,
          (t) => t.getUTCSeconds(),
        ),
        _e =
          (Te.range,
          ke(
            (t) => {
              t.setTime(t - t.getMilliseconds() - t.getSeconds() * xe);
            },
            (t, e) => {
              t.setTime(+t + e * we);
            },
            (t, e) => (e - t) / we,
            (t) => t.getMinutes(),
          )),
        Ce =
          (_e.range,
          ke(
            (t) => {
              t.setUTCSeconds(0, 0);
            },
            (t, e) => {
              t.setTime(+t + e * we);
            },
            (t, e) => (e - t) / we,
            (t) => t.getUTCMinutes(),
          )),
        Ne =
          (Ce.range,
          ke(
            (t) => {
              t.setTime(
                t -
                  t.getMilliseconds() -
                  t.getSeconds() * xe -
                  t.getMinutes() * we,
              );
            },
            (t, e) => {
              t.setTime(+t + e * Oe);
            },
            (t, e) => (e - t) / Oe,
            (t) => t.getHours(),
          )),
        De =
          (Ne.range,
          ke(
            (t) => {
              t.setUTCMinutes(0, 0, 0);
            },
            (t, e) => {
              t.setTime(+t + e * Oe);
            },
            (t, e) => (e - t) / Oe,
            (t) => t.getUTCHours(),
          )),
        Ie =
          (De.range,
          ke(
            (t) => t.setHours(0, 0, 0, 0),
            (t, e) => t.setDate(t.getDate() + e),
            (t, e) =>
              (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * we) /
              je,
            (t) => t.getDate() - 1,
          )),
        Le =
          (Ie.range,
          ke(
            (t) => {
              t.setUTCHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setUTCDate(t.getUTCDate() + e);
            },
            (t, e) => (e - t) / je,
            (t) => t.getUTCDate() - 1,
          )),
        Re =
          (Le.range,
          ke(
            (t) => {
              t.setUTCHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setUTCDate(t.getUTCDate() + e);
            },
            (t, e) => (e - t) / je,
            (t) => Math.floor(t / je),
          ));
      function Be(t) {
        return ke(
          (e) => {
            e.setDate(e.getDate() - ((e.getDay() + 7 - t) % 7)),
              e.setHours(0, 0, 0, 0);
          },
          (t, e) => {
            t.setDate(t.getDate() + 7 * e);
          },
          (t, e) =>
            (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * we) / Se,
        );
      }
      Re.range;
      const Ue = Be(0),
        $e = Be(1),
        Fe = Be(2),
        ze = Be(3),
        We = Be(4),
        Ze = Be(5),
        qe = Be(6);
      function Ge(t) {
        return ke(
          (e) => {
            e.setUTCDate(e.getUTCDate() - ((e.getUTCDay() + 7 - t) % 7)),
              e.setUTCHours(0, 0, 0, 0);
          },
          (t, e) => {
            t.setUTCDate(t.getUTCDate() + 7 * e);
          },
          (t, e) => (e - t) / Se,
        );
      }
      Ue.range, $e.range, Fe.range, ze.range, We.range, Ze.range, qe.range;
      const Xe = Ge(0),
        Ye = Ge(1),
        He = Ge(2),
        Ve = Ge(3),
        Ke = Ge(4),
        Je = Ge(5),
        Qe = Ge(6),
        tn =
          (Xe.range,
          Ye.range,
          He.range,
          Ve.range,
          Ke.range,
          Je.range,
          Qe.range,
          ke(
            (t) => {
              t.setDate(1), t.setHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setMonth(t.getMonth() + e);
            },
            (t, e) =>
              e.getMonth() -
              t.getMonth() +
              12 * (e.getFullYear() - t.getFullYear()),
            (t) => t.getMonth(),
          )),
        en =
          (tn.range,
          ke(
            (t) => {
              t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setUTCMonth(t.getUTCMonth() + e);
            },
            (t, e) =>
              e.getUTCMonth() -
              t.getUTCMonth() +
              12 * (e.getUTCFullYear() - t.getUTCFullYear()),
            (t) => t.getUTCMonth(),
          )),
        nn =
          (en.range,
          ke(
            (t) => {
              t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setFullYear(t.getFullYear() + e);
            },
            (t, e) => e.getFullYear() - t.getFullYear(),
            (t) => t.getFullYear(),
          ));
      (nn.every = (t) =>
        isFinite((t = Math.floor(t))) && t > 0
          ? ke(
              (e) => {
                e.setFullYear(Math.floor(e.getFullYear() / t) * t),
                  e.setMonth(0, 1),
                  e.setHours(0, 0, 0, 0);
              },
              (e, n) => {
                e.setFullYear(e.getFullYear() + n * t);
              },
            )
          : null),
        nn.range;
      const rn = ke(
        (t) => {
          t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setUTCFullYear(t.getUTCFullYear() + e);
        },
        (t, e) => e.getUTCFullYear() - t.getUTCFullYear(),
        (t) => t.getUTCFullYear(),
      );
      function on(t, e, n, r, o, i) {
        const a = [
          [Te, 1, xe],
          [Te, 5, 5e3],
          [Te, 15, 15e3],
          [Te, 30, 3e4],
          [i, 1, we],
          [i, 5, 3e5],
          [i, 15, 9e5],
          [i, 30, 18e5],
          [o, 1, Oe],
          [o, 3, 108e5],
          [o, 6, 216e5],
          [o, 12, 432e5],
          [r, 1, je],
          [r, 2, 1728e5],
          [n, 1, Se],
          [e, 1, 2592e6],
          [e, 3, 7776e6],
          [t, 1, Ee],
        ];
        function c(e, n, r) {
          const o = Math.abs(n - e) / r,
            i = d(([, , t]) => t).right(a, o);
          if (i === a.length) return t.every(f(e / Ee, n / Ee, r));
          if (0 === i) return Me.every(Math.max(f(e, n, r), 1));
          const [c, u] = a[o / a[i - 1][2] < a[i][2] / o ? i - 1 : i];
          return c.every(u);
        }
        return [
          function (t, e, n) {
            const r = e < t;
            r && ([t, e] = [e, t]);
            const o = n && "function" == typeof n.range ? n : c(t, e, n),
              i = o ? o.range(t, +e + 1) : [];
            return r ? i.reverse() : i;
          },
          c,
        ];
      }
      (rn.every = (t) =>
        isFinite((t = Math.floor(t))) && t > 0
          ? ke(
              (e) => {
                e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t),
                  e.setUTCMonth(0, 1),
                  e.setUTCHours(0, 0, 0, 0);
              },
              (e, n) => {
                e.setUTCFullYear(e.getUTCFullYear() + n * t);
              },
            )
          : null),
        rn.range;
      const [an, cn] = on(rn, en, Xe, Re, De, Ce),
        [un, ln] = on(nn, tn, Ue, Ie, Ne, _e);
      function sn(t) {
        if (0 <= t.y && t.y < 100) {
          var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
          return e.setFullYear(t.y), e;
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
      }
      function fn(t) {
        if (0 <= t.y && t.y < 100) {
          var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
          return e.setUTCFullYear(t.y), e;
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
      }
      function pn(t, e, n) {
        return { y: t, m: e, d: n, H: 0, M: 0, S: 0, L: 0 };
      }
      var hn,
        dn,
        yn,
        vn = { "-": "", _: " ", 0: "0" },
        mn = /^\s*\d+/,
        gn = /^%/,
        bn = /[\\^$*+?|[\]().{}]/g;
      function xn(t, e, n) {
        var r = t < 0 ? "-" : "",
          o = (r ? -t : t) + "",
          i = o.length;
        return r + (i < n ? new Array(n - i + 1).join(e) + o : o);
      }
      function wn(t) {
        return t.replace(bn, "\\$&");
      }
      function On(t) {
        return new RegExp("^(?:" + t.map(wn).join("|") + ")", "i");
      }
      function jn(t) {
        return new Map(t.map((t, e) => [t.toLowerCase(), e]));
      }
      function Sn(t, e, n) {
        var r = mn.exec(e.slice(n, n + 1));
        return r ? ((t.w = +r[0]), n + r[0].length) : -1;
      }
      function En(t, e, n) {
        var r = mn.exec(e.slice(n, n + 1));
        return r ? ((t.u = +r[0]), n + r[0].length) : -1;
      }
      function An(t, e, n) {
        var r = mn.exec(e.slice(n, n + 2));
        return r ? ((t.U = +r[0]), n + r[0].length) : -1;
      }
      function Pn(t, e, n) {
        var r = mn.exec(e.slice(n, n + 2));
        return r ? ((t.V = +r[0]), n + r[0].length) : -1;
      }
      function kn(t, e, n) {
        var r = mn.exec(e.slice(n, n + 2));
        return r ? ((t.W = +r[0]), n + r[0].length) : -1;
      }
      function Mn(t, e, n) {
        var r = mn.exec(e.slice(n, n + 4));
        return r ? ((t.y = +r[0]), n + r[0].length) : -1;
      }
      function Tn(t, e, n) {
        var r = mn.exec(e.slice(n, n + 2));
        return r
          ? ((t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), n + r[0].length)
          : -1;
      }
      function _n(t, e, n) {
        var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
        return r
          ? ((t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00"))), n + r[0].length)
          : -1;
      }
      function Cn(t, e, n) {
        var r = mn.exec(e.slice(n, n + 1));
        return r ? ((t.q = 3 * r[0] - 3), n + r[0].length) : -1;
      }
      function Nn(t, e, n) {
        var r = mn.exec(e.slice(n, n + 2));
        return r ? ((t.m = r[0] - 1), n + r[0].length) : -1;
      }
      function Dn(t, e, n) {
        var r = mn.exec(e.slice(n, n + 2));
        return r ? ((t.d = +r[0]), n + r[0].length) : -1;
      }
      function In(t, e, n) {
        var r = mn.exec(e.slice(n, n + 3));
        return r ? ((t.m = 0), (t.d = +r[0]), n + r[0].length) : -1;
      }
      function Ln(t, e, n) {
        var r = mn.exec(e.slice(n, n + 2));
        return r ? ((t.H = +r[0]), n + r[0].length) : -1;
      }
      function Rn(t, e, n) {
        var r = mn.exec(e.slice(n, n + 2));
        return r ? ((t.M = +r[0]), n + r[0].length) : -1;
      }
      function Bn(t, e, n) {
        var r = mn.exec(e.slice(n, n + 2));
        return r ? ((t.S = +r[0]), n + r[0].length) : -1;
      }
      function Un(t, e, n) {
        var r = mn.exec(e.slice(n, n + 3));
        return r ? ((t.L = +r[0]), n + r[0].length) : -1;
      }
      function $n(t, e, n) {
        var r = mn.exec(e.slice(n, n + 6));
        return r ? ((t.L = Math.floor(r[0] / 1e3)), n + r[0].length) : -1;
      }
      function Fn(t, e, n) {
        var r = gn.exec(e.slice(n, n + 1));
        return r ? n + r[0].length : -1;
      }
      function zn(t, e, n) {
        var r = mn.exec(e.slice(n));
        return r ? ((t.Q = +r[0]), n + r[0].length) : -1;
      }
      function Wn(t, e, n) {
        var r = mn.exec(e.slice(n));
        return r ? ((t.s = +r[0]), n + r[0].length) : -1;
      }
      function Zn(t, e) {
        return xn(t.getDate(), e, 2);
      }
      function qn(t, e) {
        return xn(t.getHours(), e, 2);
      }
      function Gn(t, e) {
        return xn(t.getHours() % 12 || 12, e, 2);
      }
      function Xn(t, e) {
        return xn(1 + Ie.count(nn(t), t), e, 3);
      }
      function Yn(t, e) {
        return xn(t.getMilliseconds(), e, 3);
      }
      function Hn(t, e) {
        return Yn(t, e) + "000";
      }
      function Vn(t, e) {
        return xn(t.getMonth() + 1, e, 2);
      }
      function Kn(t, e) {
        return xn(t.getMinutes(), e, 2);
      }
      function Jn(t, e) {
        return xn(t.getSeconds(), e, 2);
      }
      function Qn(t) {
        var e = t.getDay();
        return 0 === e ? 7 : e;
      }
      function tr(t, e) {
        return xn(Ue.count(nn(t) - 1, t), e, 2);
      }
      function er(t) {
        var e = t.getDay();
        return e >= 4 || 0 === e ? We(t) : We.ceil(t);
      }
      function nr(t, e) {
        return (
          (t = er(t)), xn(We.count(nn(t), t) + (4 === nn(t).getDay()), e, 2)
        );
      }
      function rr(t) {
        return t.getDay();
      }
      function or(t, e) {
        return xn($e.count(nn(t) - 1, t), e, 2);
      }
      function ir(t, e) {
        return xn(t.getFullYear() % 100, e, 2);
      }
      function ar(t, e) {
        return xn((t = er(t)).getFullYear() % 100, e, 2);
      }
      function cr(t, e) {
        return xn(t.getFullYear() % 1e4, e, 4);
      }
      function ur(t, e) {
        var n = t.getDay();
        return xn(
          (t = n >= 4 || 0 === n ? We(t) : We.ceil(t)).getFullYear() % 1e4,
          e,
          4,
        );
      }
      function lr(t) {
        var e = t.getTimezoneOffset();
        return (
          (e > 0 ? "-" : ((e *= -1), "+")) +
          xn((e / 60) | 0, "0", 2) +
          xn(e % 60, "0", 2)
        );
      }
      function sr(t, e) {
        return xn(t.getUTCDate(), e, 2);
      }
      function fr(t, e) {
        return xn(t.getUTCHours(), e, 2);
      }
      function pr(t, e) {
        return xn(t.getUTCHours() % 12 || 12, e, 2);
      }
      function hr(t, e) {
        return xn(1 + Le.count(rn(t), t), e, 3);
      }
      function dr(t, e) {
        return xn(t.getUTCMilliseconds(), e, 3);
      }
      function yr(t, e) {
        return dr(t, e) + "000";
      }
      function vr(t, e) {
        return xn(t.getUTCMonth() + 1, e, 2);
      }
      function mr(t, e) {
        return xn(t.getUTCMinutes(), e, 2);
      }
      function gr(t, e) {
        return xn(t.getUTCSeconds(), e, 2);
      }
      function br(t) {
        var e = t.getUTCDay();
        return 0 === e ? 7 : e;
      }
      function xr(t, e) {
        return xn(Xe.count(rn(t) - 1, t), e, 2);
      }
      function wr(t) {
        var e = t.getUTCDay();
        return e >= 4 || 0 === e ? Ke(t) : Ke.ceil(t);
      }
      function Or(t, e) {
        return (
          (t = wr(t)), xn(Ke.count(rn(t), t) + (4 === rn(t).getUTCDay()), e, 2)
        );
      }
      function jr(t) {
        return t.getUTCDay();
      }
      function Sr(t, e) {
        return xn(Ye.count(rn(t) - 1, t), e, 2);
      }
      function Er(t, e) {
        return xn(t.getUTCFullYear() % 100, e, 2);
      }
      function Ar(t, e) {
        return xn((t = wr(t)).getUTCFullYear() % 100, e, 2);
      }
      function Pr(t, e) {
        return xn(t.getUTCFullYear() % 1e4, e, 4);
      }
      function kr(t, e) {
        var n = t.getUTCDay();
        return xn(
          (t = n >= 4 || 0 === n ? Ke(t) : Ke.ceil(t)).getUTCFullYear() % 1e4,
          e,
          4,
        );
      }
      function Mr() {
        return "+0000";
      }
      function Tr() {
        return "%";
      }
      function _r(t) {
        return +t;
      }
      function Cr(t) {
        return Math.floor(+t / 1e3);
      }
      function Nr(t) {
        return new Date(t);
      }
      function Dr(t) {
        return t instanceof Date ? +t : +new Date(+t);
      }
      function Ir(t, e, n, r, o, i, a, c, u, l) {
        var s = jt(),
          f = s.invert,
          p = s.domain,
          h = l(".%L"),
          d = l(":%S"),
          y = l("%I:%M"),
          v = l("%I %p"),
          m = l("%a %d"),
          g = l("%b %d"),
          b = l("%B"),
          x = l("%Y");
        function w(t) {
          return (
            u(t) < t
              ? h
              : c(t) < t
                ? d
                : a(t) < t
                  ? y
                  : i(t) < t
                    ? v
                    : r(t) < t
                      ? o(t) < t
                        ? m
                        : g
                      : n(t) < t
                        ? b
                        : x
          )(t);
        }
        return (
          (s.invert = function (t) {
            return new Date(f(t));
          }),
          (s.domain = function (t) {
            return arguments.length ? p(Array.from(t, Dr)) : p().map(Nr);
          }),
          (s.ticks = function (e) {
            var n = p();
            return t(n[0], n[n.length - 1], null == e ? 10 : e);
          }),
          (s.tickFormat = function (t, e) {
            return null == e ? w : l(e);
          }),
          (s.nice = function (t) {
            var n = p();
            return (
              (t && "function" == typeof t.range) ||
                (t = e(n[0], n[n.length - 1], null == t ? 10 : t)),
              t ? p(Wt(n, t)) : s
            );
          }),
          (s.copy = function () {
            return wt(s, Ir(t, e, n, r, o, i, a, c, u, l));
          }),
          s
        );
      }
      function Lr() {
        return Et.o.apply(
          Ir(un, ln, nn, tn, Ue, Ie, Ne, _e, Te, dn).domain([
            new Date(2e3, 0, 1),
            new Date(2e3, 0, 2),
          ]),
          arguments,
        );
      }
      function Rr() {
        return Et.o.apply(
          Ir(an, cn, rn, en, Xe, Le, De, Ce, Te, yn).domain([
            Date.UTC(2e3, 0, 1),
            Date.UTC(2e3, 0, 2),
          ]),
          arguments,
        );
      }
      function Br() {
        var t,
          e,
          n,
          r,
          o,
          i = 0,
          a = 1,
          c = mt,
          u = !1;
        function l(e) {
          return null == e || isNaN((e = +e))
            ? o
            : c(
                0 === n
                  ? 0.5
                  : ((e = (r(e) - t) * n), u ? Math.max(0, Math.min(1, e)) : e),
              );
        }
        function s(t) {
          return function (e) {
            var n, r;
            return arguments.length
              ? (([n, r] = e), (c = t(n, r)), l)
              : [c(0), c(1)];
          };
        }
        return (
          (l.domain = function (o) {
            return arguments.length
              ? (([i, a] = o),
                (t = r((i = +i))),
                (e = r((a = +a))),
                (n = t === e ? 0 : 1 / (e - t)),
                l)
              : [i, a];
          }),
          (l.clamp = function (t) {
            return arguments.length ? ((u = !!t), l) : u;
          }),
          (l.interpolator = function (t) {
            return arguments.length ? ((c = t), l) : c;
          }),
          (l.range = s(ht)),
          (l.rangeRound = s(dt)),
          (l.unknown = function (t) {
            return arguments.length ? ((o = t), l) : o;
          }),
          function (o) {
            return (
              (r = o),
              (t = o(i)),
              (e = o(a)),
              (n = t === e ? 0 : 1 / (e - t)),
              l
            );
          }
        );
      }
      function Ur(t, e) {
        return e
          .domain(t.domain())
          .interpolator(t.interpolator())
          .clamp(t.clamp())
          .unknown(t.unknown());
      }
      function $r() {
        var t = $t(Br()(mt));
        return (
          (t.copy = function () {
            return Ur(t, $r());
          }),
          Et.O.apply(t, arguments)
        );
      }
      function Fr() {
        var t = Vt(Br()).domain([1, 10]);
        return (
          (t.copy = function () {
            return Ur(t, Fr()).base(t.base());
          }),
          Et.O.apply(t, arguments)
        );
      }
      function zr() {
        var t = te(Br());
        return (
          (t.copy = function () {
            return Ur(t, zr()).constant(t.constant());
          }),
          Et.O.apply(t, arguments)
        );
      }
      function Wr() {
        var t = ae(Br());
        return (
          (t.copy = function () {
            return Ur(t, Wr()).exponent(t.exponent());
          }),
          Et.O.apply(t, arguments)
        );
      }
      function Zr() {
        return Wr.apply(null, arguments).exponent(0.5);
      }
      function qr() {
        var t = [],
          e = mt;
        function n(n) {
          if (null != n && !isNaN((n = +n)))
            return e((b(t, n, 1) - 1) / (t.length - 1));
        }
        return (
          (n.domain = function (e) {
            if (!arguments.length) return t.slice();
            t = [];
            for (let n of e) null == n || isNaN((n = +n)) || t.push(n);
            return t.sort(p), n;
          }),
          (n.interpolator = function (t) {
            return arguments.length ? ((e = t), n) : e;
          }),
          (n.range = function () {
            return t.map((n, r) => e(r / (t.length - 1)));
          }),
          (n.quantiles = function (e) {
            return Array.from({ length: e + 1 }, (n, r) =>
              (function (t, e, n) {
                if (
                  ((t = Float64Array.from(
                    (function* (t, e) {
                      if (void 0 === e)
                        for (let e of t)
                          null != e && (e = +e) >= e && (yield e);
                      else {
                        let n = -1;
                        for (let r of t)
                          null != (r = e(r, ++n, t)) &&
                            (r = +r) >= r &&
                            (yield r);
                      }
                    })(t, n),
                  )),
                  (r = t.length) && !isNaN((e = +e)))
                ) {
                  if (e <= 0 || r < 2) return pe(t);
                  if (e >= 1) return fe(t);
                  var r,
                    o = (r - 1) * e,
                    i = Math.floor(o),
                    a = fe(de(t, i).subarray(0, i + 1));
                  return a + (pe(t.subarray(i + 1)) - a) * (o - i);
                }
              })(t, r / e),
            );
          }),
          (n.copy = function () {
            return qr(e).domain(t);
          }),
          Et.O.apply(n, arguments)
        );
      }
      function Gr() {
        var t,
          e,
          n,
          r,
          o,
          i,
          a,
          c = 0,
          u = 0.5,
          l = 1,
          s = 1,
          f = mt,
          p = !1;
        function h(t) {
          return isNaN((t = +t))
            ? a
            : ((t = 0.5 + ((t = +i(t)) - e) * (s * t < s * e ? r : o)),
              f(p ? Math.max(0, Math.min(1, t)) : t));
        }
        function d(t) {
          return function (e) {
            var n, r, o;
            return arguments.length
              ? (([n, r, o] = e),
                (f = (function (t, e) {
                  void 0 === e && ((e = t), (t = ht));
                  for (
                    var n = 0,
                      r = e.length - 1,
                      o = e[0],
                      i = new Array(r < 0 ? 0 : r);
                    n < r;

                  )
                    i[n] = t(o, (o = e[++n]));
                  return function (t) {
                    var e = Math.max(0, Math.min(r - 1, Math.floor((t *= r))));
                    return i[e](t - e);
                  };
                })(t, [n, r, o])),
                h)
              : [f(0), f(0.5), f(1)];
          };
        }
        return (
          (h.domain = function (a) {
            return arguments.length
              ? (([c, u, l] = a),
                (t = i((c = +c))),
                (e = i((u = +u))),
                (n = i((l = +l))),
                (r = t === e ? 0 : 0.5 / (e - t)),
                (o = e === n ? 0 : 0.5 / (n - e)),
                (s = e < t ? -1 : 1),
                h)
              : [c, u, l];
          }),
          (h.clamp = function (t) {
            return arguments.length ? ((p = !!t), h) : p;
          }),
          (h.interpolator = function (t) {
            return arguments.length ? ((f = t), h) : f;
          }),
          (h.range = d(ht)),
          (h.rangeRound = d(dt)),
          (h.unknown = function (t) {
            return arguments.length ? ((a = t), h) : a;
          }),
          function (a) {
            return (
              (i = a),
              (t = a(c)),
              (e = a(u)),
              (n = a(l)),
              (r = t === e ? 0 : 0.5 / (e - t)),
              (o = e === n ? 0 : 0.5 / (n - e)),
              (s = e < t ? -1 : 1),
              h
            );
          }
        );
      }
      function Xr() {
        var t = $t(Gr()(mt));
        return (
          (t.copy = function () {
            return Ur(t, Xr());
          }),
          Et.O.apply(t, arguments)
        );
      }
      function Yr() {
        var t = Vt(Gr()).domain([0.1, 1, 10]);
        return (
          (t.copy = function () {
            return Ur(t, Yr()).base(t.base());
          }),
          Et.O.apply(t, arguments)
        );
      }
      function Hr() {
        var t = te(Gr());
        return (
          (t.copy = function () {
            return Ur(t, Hr()).constant(t.constant());
          }),
          Et.O.apply(t, arguments)
        );
      }
      function Vr() {
        var t = ae(Gr());
        return (
          (t.copy = function () {
            return Ur(t, Vr()).exponent(t.exponent());
          }),
          Et.O.apply(t, arguments)
        );
      }
      function Kr() {
        return Vr.apply(null, arguments).exponent(0.5);
      }
      function Jr(t, e) {
        if ((o = t.length) > 1)
          for (var n, r, o, i = 1, a = t[e[0]], c = a.length; i < o; ++i)
            for (r = a, a = t[e[i]], n = 0; n < c; ++n)
              a[n][1] += a[n][0] = isNaN(r[n][1]) ? r[n][0] : r[n][1];
      }
      (hn = (function (t) {
        var e = t.dateTime,
          n = t.date,
          r = t.time,
          o = t.periods,
          i = t.days,
          a = t.shortDays,
          c = t.months,
          u = t.shortMonths,
          l = On(o),
          s = jn(o),
          f = On(i),
          p = jn(i),
          h = On(a),
          d = jn(a),
          y = On(c),
          v = jn(c),
          m = On(u),
          g = jn(u),
          b = {
            a: function (t) {
              return a[t.getDay()];
            },
            A: function (t) {
              return i[t.getDay()];
            },
            b: function (t) {
              return u[t.getMonth()];
            },
            B: function (t) {
              return c[t.getMonth()];
            },
            c: null,
            d: Zn,
            e: Zn,
            f: Hn,
            g: ar,
            G: ur,
            H: qn,
            I: Gn,
            j: Xn,
            L: Yn,
            m: Vn,
            M: Kn,
            p: function (t) {
              return o[+(t.getHours() >= 12)];
            },
            q: function (t) {
              return 1 + ~~(t.getMonth() / 3);
            },
            Q: _r,
            s: Cr,
            S: Jn,
            u: Qn,
            U: tr,
            V: nr,
            w: rr,
            W: or,
            x: null,
            X: null,
            y: ir,
            Y: cr,
            Z: lr,
            "%": Tr,
          },
          x = {
            a: function (t) {
              return a[t.getUTCDay()];
            },
            A: function (t) {
              return i[t.getUTCDay()];
            },
            b: function (t) {
              return u[t.getUTCMonth()];
            },
            B: function (t) {
              return c[t.getUTCMonth()];
            },
            c: null,
            d: sr,
            e: sr,
            f: yr,
            g: Ar,
            G: kr,
            H: fr,
            I: pr,
            j: hr,
            L: dr,
            m: vr,
            M: mr,
            p: function (t) {
              return o[+(t.getUTCHours() >= 12)];
            },
            q: function (t) {
              return 1 + ~~(t.getUTCMonth() / 3);
            },
            Q: _r,
            s: Cr,
            S: gr,
            u: br,
            U: xr,
            V: Or,
            w: jr,
            W: Sr,
            x: null,
            X: null,
            y: Er,
            Y: Pr,
            Z: Mr,
            "%": Tr,
          },
          w = {
            a: function (t, e, n) {
              var r = h.exec(e.slice(n));
              return r
                ? ((t.w = d.get(r[0].toLowerCase())), n + r[0].length)
                : -1;
            },
            A: function (t, e, n) {
              var r = f.exec(e.slice(n));
              return r
                ? ((t.w = p.get(r[0].toLowerCase())), n + r[0].length)
                : -1;
            },
            b: function (t, e, n) {
              var r = m.exec(e.slice(n));
              return r
                ? ((t.m = g.get(r[0].toLowerCase())), n + r[0].length)
                : -1;
            },
            B: function (t, e, n) {
              var r = y.exec(e.slice(n));
              return r
                ? ((t.m = v.get(r[0].toLowerCase())), n + r[0].length)
                : -1;
            },
            c: function (t, n, r) {
              return S(t, e, n, r);
            },
            d: Dn,
            e: Dn,
            f: $n,
            g: Tn,
            G: Mn,
            H: Ln,
            I: Ln,
            j: In,
            L: Un,
            m: Nn,
            M: Rn,
            p: function (t, e, n) {
              var r = l.exec(e.slice(n));
              return r
                ? ((t.p = s.get(r[0].toLowerCase())), n + r[0].length)
                : -1;
            },
            q: Cn,
            Q: zn,
            s: Wn,
            S: Bn,
            u: En,
            U: An,
            V: Pn,
            w: Sn,
            W: kn,
            x: function (t, e, r) {
              return S(t, n, e, r);
            },
            X: function (t, e, n) {
              return S(t, r, e, n);
            },
            y: Tn,
            Y: Mn,
            Z: _n,
            "%": Fn,
          };
        function O(t, e) {
          return function (n) {
            var r,
              o,
              i,
              a = [],
              c = -1,
              u = 0,
              l = t.length;
            for (n instanceof Date || (n = new Date(+n)); ++c < l; )
              37 === t.charCodeAt(c) &&
                (a.push(t.slice(u, c)),
                null != (o = vn[(r = t.charAt(++c))])
                  ? (r = t.charAt(++c))
                  : (o = "e" === r ? " " : "0"),
                (i = e[r]) && (r = i(n, o)),
                a.push(r),
                (u = c + 1));
            return a.push(t.slice(u, c)), a.join("");
          };
        }
        function j(t, e) {
          return function (n) {
            var r,
              o,
              i = pn(1900, void 0, 1);
            if (S(i, t, (n += ""), 0) != n.length) return null;
            if ("Q" in i) return new Date(i.Q);
            if ("s" in i) return new Date(1e3 * i.s + ("L" in i ? i.L : 0));
            if (
              (e && !("Z" in i) && (i.Z = 0),
              "p" in i && (i.H = (i.H % 12) + 12 * i.p),
              void 0 === i.m && (i.m = "q" in i ? i.q : 0),
              "V" in i)
            ) {
              if (i.V < 1 || i.V > 53) return null;
              "w" in i || (i.w = 1),
                "Z" in i
                  ? ((o = (r = fn(pn(i.y, 0, 1))).getUTCDay()),
                    (r = o > 4 || 0 === o ? Ye.ceil(r) : Ye(r)),
                    (r = Le.offset(r, 7 * (i.V - 1))),
                    (i.y = r.getUTCFullYear()),
                    (i.m = r.getUTCMonth()),
                    (i.d = r.getUTCDate() + ((i.w + 6) % 7)))
                  : ((o = (r = sn(pn(i.y, 0, 1))).getDay()),
                    (r = o > 4 || 0 === o ? $e.ceil(r) : $e(r)),
                    (r = Ie.offset(r, 7 * (i.V - 1))),
                    (i.y = r.getFullYear()),
                    (i.m = r.getMonth()),
                    (i.d = r.getDate() + ((i.w + 6) % 7)));
            } else
              ("W" in i || "U" in i) &&
                ("w" in i || (i.w = "u" in i ? i.u % 7 : "W" in i ? 1 : 0),
                (o =
                  "Z" in i
                    ? fn(pn(i.y, 0, 1)).getUTCDay()
                    : sn(pn(i.y, 0, 1)).getDay()),
                (i.m = 0),
                (i.d =
                  "W" in i
                    ? ((i.w + 6) % 7) + 7 * i.W - ((o + 5) % 7)
                    : i.w + 7 * i.U - ((o + 6) % 7)));
            return "Z" in i
              ? ((i.H += (i.Z / 100) | 0), (i.M += i.Z % 100), fn(i))
              : sn(i);
          };
        }
        function S(t, e, n, r) {
          for (var o, i, a = 0, c = e.length, u = n.length; a < c; ) {
            if (r >= u) return -1;
            if (37 === (o = e.charCodeAt(a++))) {
              if (
                ((o = e.charAt(a++)),
                !(i = w[o in vn ? e.charAt(a++) : o]) || (r = i(t, n, r)) < 0)
              )
                return -1;
            } else if (o != n.charCodeAt(r++)) return -1;
          }
          return r;
        }
        return (
          (b.x = O(n, b)),
          (b.X = O(r, b)),
          (b.c = O(e, b)),
          (x.x = O(n, x)),
          (x.X = O(r, x)),
          (x.c = O(e, x)),
          {
            format: function (t) {
              var e = O((t += ""), b);
              return (
                (e.toString = function () {
                  return t;
                }),
                e
              );
            },
            parse: function (t) {
              var e = j((t += ""), !1);
              return (
                (e.toString = function () {
                  return t;
                }),
                e
              );
            },
            utcFormat: function (t) {
              var e = O((t += ""), x);
              return (
                (e.toString = function () {
                  return t;
                }),
                e
              );
            },
            utcParse: function (t) {
              var e = j((t += ""), !0);
              return (
                (e.toString = function () {
                  return t;
                }),
                e
              );
            },
          }
        );
      })({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        shortMonths: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      })),
        (dn = hn.format),
        hn.parse,
        (yn = hn.utcFormat),
        hn.utcParse;
      var Qr = n(92889),
        to = n(20309);
      function eo(t) {
        for (var e = t.length, n = new Array(e); --e >= 0; ) n[e] = e;
        return n;
      }
      function no(t, e) {
        return t[e];
      }
      function ro(t) {
        const e = [];
        return (e.key = t), e;
      }
      var oo = n(6162),
        io = n.n(oo),
        ao = n(53632),
        co = n.n(ao),
        uo = n(14293),
        lo = n.n(uo),
        so = n(23560),
        fo = n.n(so),
        po = n(47037),
        ho = n.n(po),
        yo = n(27361),
        vo = n.n(yo),
        mo = n(94654),
        go = n.n(mo),
        bo = n(7654),
        xo = n.n(bo),
        wo = n(11700),
        Oo = n.n(wo),
        jo = n(18446),
        So = n.n(jo),
        Eo = n(89734),
        Ao = n.n(Eo),
        Po = n(29887),
        ko = n.n(Po);
      function Mo(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var To = function (t) {
          return t;
        },
        _o = { "@@functional/placeholder": !0 },
        Co = function (t) {
          return t === _o;
        },
        No = function (t) {
          return function e() {
            return 0 === arguments.length ||
              (1 === arguments.length &&
                Co(arguments.length <= 0 ? void 0 : arguments[0]))
              ? e
              : t.apply(void 0, arguments);
          };
        },
        Do = function t(e, n) {
          return 1 === e
            ? n
            : No(function () {
                for (
                  var r = arguments.length, o = new Array(r), i = 0;
                  i < r;
                  i++
                )
                  o[i] = arguments[i];
                var a = o.filter(function (t) {
                  return t !== _o;
                }).length;
                return a >= e
                  ? n.apply(void 0, o)
                  : t(
                      e - a,
                      No(function () {
                        for (
                          var t = arguments.length, e = new Array(t), r = 0;
                          r < t;
                          r++
                        )
                          e[r] = arguments[r];
                        var i,
                          a = o.map(function (t) {
                            return Co(t) ? e.shift() : t;
                          });
                        return n.apply(
                          void 0,
                          ((i = a),
                          (function (t) {
                            if (Array.isArray(t)) return Mo(t);
                          })(i) ||
                            (function (t) {
                              if (
                                "undefined" != typeof Symbol &&
                                Symbol.iterator in Object(t)
                              )
                                return Array.from(t);
                            })(i) ||
                            (function (t, e) {
                              if (t) {
                                if ("string" == typeof t) return Mo(t, e);
                                var n = Object.prototype.toString
                                  .call(t)
                                  .slice(8, -1);
                                return (
                                  "Object" === n &&
                                    t.constructor &&
                                    (n = t.constructor.name),
                                  "Map" === n || "Set" === n
                                    ? Array.from(t)
                                    : "Arguments" === n ||
                                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                          n,
                                        )
                                      ? Mo(t, e)
                                      : void 0
                                );
                              }
                            })(i) ||
                            (function () {
                              throw new TypeError(
                                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                              );
                            })()).concat(e),
                        );
                      }),
                    );
              });
        },
        Io = function (t) {
          return Do(t.length, t);
        },
        Lo = function (t, e) {
          for (var n = [], r = t; r < e; ++r) n[r - t] = r;
          return n;
        },
        Ro = Io(function (t, e) {
          return Array.isArray(e)
            ? e.map(t)
            : Object.keys(e)
                .map(function (t) {
                  return e[t];
                })
                .map(t);
        }),
        Bo = function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          if (!e.length) return To;
          var r = e.reverse(),
            o = r[0],
            i = r.slice(1);
          return function () {
            return i.reduce(
              function (t, e) {
                return e(t);
              },
              o.apply(void 0, arguments),
            );
          };
        },
        Uo = function (t) {
          return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
        },
        $o = function (t) {
          var e = null,
            n = null;
          return function () {
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
              o[i] = arguments[i];
            return e &&
              o.every(function (t, n) {
                return t === e[n];
              })
              ? n
              : ((e = o), (n = t.apply(void 0, o)));
          };
        };
      const Fo = {
        rangeStep: function (t, e, n) {
          for (var r = new (ko())(t), o = 0, i = []; r.lt(e) && o < 1e5; )
            i.push(r.toNumber()), (r = r.add(n)), o++;
          return i;
        },
        getDigitCount: function (t) {
          return 0 === t
            ? 1
            : Math.floor(new (ko())(t).abs().log(10).toNumber()) + 1;
        },
        interpolateNumber: Io(function (t, e, n) {
          var r = +t;
          return r + n * (+e - r);
        }),
        uninterpolateNumber: Io(function (t, e, n) {
          var r = e - +t;
          return (n - t) / (r || 1 / 0);
        }),
        uninterpolateTruncation: Io(function (t, e, n) {
          var r = e - +t;
          return (r = r || 1 / 0), Math.max(0, Math.min(1, (n - t) / r));
        }),
      };
      function zo(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return qo(t);
          })(t) ||
          (function (t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
              return Array.from(t);
          })(t) ||
          Zo(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Wo(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
              var n = [],
                r = !0,
                o = !1,
                i = void 0;
              try {
                for (
                  var a, c = t[Symbol.iterator]();
                  !(r = (a = c.next()).done) &&
                  (n.push(a.value), !e || n.length !== e);
                  r = !0
                );
              } catch (t) {
                (o = !0), (i = t);
              } finally {
                try {
                  r || null == c.return || c.return();
                } finally {
                  if (o) throw i;
                }
              }
              return n;
            }
          })(t, e) ||
          Zo(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Zo(t, e) {
        if (t) {
          if ("string" == typeof t) return qo(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? qo(t, e)
                : void 0
          );
        }
      }
      function qo(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function Go(t) {
        var e = Wo(t, 2),
          n = e[0],
          r = e[1],
          o = n,
          i = r;
        return n > r && ((o = r), (i = n)), [o, i];
      }
      function Xo(t, e, n) {
        if (t.lte(0)) return new (ko())(0);
        var r = Fo.getDigitCount(t.toNumber()),
          o = new (ko())(10).pow(r),
          i = t.div(o),
          a = 1 !== r ? 0.05 : 0.1,
          c = new (ko())(Math.ceil(i.div(a).toNumber())).add(n).mul(a).mul(o);
        return e ? c : new (ko())(Math.ceil(c));
      }
      function Yo(t, e, n) {
        var r = 1,
          o = new (ko())(t);
        if (!o.isint() && n) {
          var i = Math.abs(t);
          i < 1
            ? ((r = new (ko())(10).pow(Fo.getDigitCount(t) - 1)),
              (o = new (ko())(Math.floor(o.div(r).toNumber())).mul(r)))
            : i > 1 && (o = new (ko())(Math.floor(t)));
        } else
          0 === t
            ? (o = new (ko())(Math.floor((e - 1) / 2)))
            : n || (o = new (ko())(Math.floor(t)));
        var a = Math.floor((e - 1) / 2);
        return Bo(
          Ro(function (t) {
            return o.add(new (ko())(t - a).mul(r)).toNumber();
          }),
          Lo,
        )(0, e);
      }
      function Ho(t, e, n, r) {
        var o =
          arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        if (!Number.isFinite((e - t) / (n - 1)))
          return {
            step: new (ko())(0),
            tickMin: new (ko())(0),
            tickMax: new (ko())(0),
          };
        var i,
          a = Xo(new (ko())(e).sub(t).div(n - 1), r, o);
        i =
          t <= 0 && e >= 0
            ? new (ko())(0)
            : (i = new (ko())(t).add(e).div(2)).sub(new (ko())(i).mod(a));
        var c = Math.ceil(i.sub(t).div(a).toNumber()),
          u = Math.ceil(new (ko())(e).sub(i).div(a).toNumber()),
          l = c + u + 1;
        return l > n
          ? Ho(t, e, n, r, o + 1)
          : (l < n &&
              ((u = e > 0 ? u + (n - l) : u), (c = e > 0 ? c : c + (n - l))),
            {
              step: a,
              tickMin: i.sub(new (ko())(c).mul(a)),
              tickMax: i.add(new (ko())(u).mul(a)),
            });
      }
      var Vo = $o(function (t) {
          var e = Wo(t, 2),
            n = e[0],
            r = e[1],
            o =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 6,
            i =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2],
            a = Math.max(o, 2),
            c = Wo(Go([n, r]), 2),
            u = c[0],
            l = c[1];
          if (u === -1 / 0 || l === 1 / 0) {
            var s =
              l === 1 / 0
                ? [u].concat(
                    zo(
                      Lo(0, o - 1).map(function () {
                        return 1 / 0;
                      }),
                    ),
                  )
                : [].concat(
                    zo(
                      Lo(0, o - 1).map(function () {
                        return -1 / 0;
                      }),
                    ),
                    [l],
                  );
            return n > r ? Uo(s) : s;
          }
          if (u === l) return Yo(u, o, i);
          var f = Ho(u, l, a, i),
            p = f.step,
            h = f.tickMin,
            d = f.tickMax,
            y = Fo.rangeStep(h, d.add(new (ko())(0.1).mul(p)), p);
          return n > r ? Uo(y) : y;
        }),
        Ko =
          ($o(function (t) {
            var e = Wo(t, 2),
              n = e[0],
              r = e[1],
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 6,
              i =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2],
              a = Math.max(o, 2),
              c = Wo(Go([n, r]), 2),
              u = c[0],
              l = c[1];
            if (u === -1 / 0 || l === 1 / 0) return [n, r];
            if (u === l) return Yo(u, o, i);
            var s = Xo(new (ko())(l).sub(u).div(a - 1), i, 0),
              f = Bo(
                Ro(function (t) {
                  return new (ko())(u).add(new (ko())(t).mul(s)).toNumber();
                }),
                Lo,
              )(0, a).filter(function (t) {
                return t >= u && t <= l;
              });
            return n > r ? Uo(f) : f;
          }),
          $o(function (t, e) {
            var n = Wo(t, 2),
              r = n[0],
              o = n[1],
              i =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2],
              a = Wo(Go([r, o]), 2),
              c = a[0],
              u = a[1];
            if (c === -1 / 0 || u === 1 / 0) return [r, o];
            if (c === u) return [c];
            var l = Math.max(e, 2),
              s = Xo(new (ko())(u).sub(c).div(l - 1), i, 0),
              f = [].concat(
                zo(
                  Fo.rangeStep(
                    new (ko())(c),
                    new (ko())(u).sub(new (ko())(0.99).mul(s)),
                    s,
                  ),
                ),
                [u],
              );
            return r > o ? Uo(f) : f;
          })),
        Jo = n(67294),
        Qo = n(48710),
        ti = n(52017),
        ei = [
          "offset",
          "layout",
          "width",
          "dataKey",
          "data",
          "dataPointFormatter",
          "xAxis",
          "yAxis",
        ];
      function ni() {
        return (
          (ni = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          ni.apply(this, arguments)
        );
      }
      function ri(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function oi(t) {
        var e = t.offset,
          n = t.layout,
          r = t.width,
          o = t.dataKey,
          i = t.data,
          a = t.dataPointFormatter,
          c = t.xAxis,
          u = t.yAxis,
          l = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = (function (t, e) {
                if (null == t) return {};
                var n,
                  r,
                  o = {},
                  i = Object.keys(t);
                for (r = 0; r < i.length; r++)
                  (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                return o;
              })(t, e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(t);
              for (r = 0; r < i.length; r++)
                (n = i[r]),
                  e.indexOf(n) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(t, n) &&
                      (o[n] = t[n]));
            }
            return o;
          })(t, ei),
          s = (0, ti.L6)(l),
          f = i.map(function (t, i) {
            var l = a(t, o),
              f = l.x,
              p = l.y,
              h = l.value,
              d = l.errorVal;
            if (!d) return null;
            var y,
              v,
              m = [];
            if (Array.isArray(d)) {
              var g = (function (t, e) {
                return (
                  (function (t) {
                    if (Array.isArray(t)) return t;
                  })(t) ||
                  (function (t, e) {
                    var n =
                      null == t
                        ? null
                        : ("undefined" != typeof Symbol &&
                            t[Symbol.iterator]) ||
                          t["@@iterator"];
                    if (null != n) {
                      var r,
                        o,
                        i,
                        a,
                        c = [],
                        u = !0,
                        l = !1;
                      try {
                        if (((i = (n = n.call(t)).next), 0 === e)) {
                          if (Object(n) !== n) return;
                          u = !1;
                        } else
                          for (
                            ;
                            !(u = (r = i.call(n)).done) &&
                            (c.push(r.value), c.length !== e);
                            u = !0
                          );
                      } catch (t) {
                        (l = !0), (o = t);
                      } finally {
                        try {
                          if (
                            !u &&
                            null != n.return &&
                            ((a = n.return()), Object(a) !== a)
                          )
                            return;
                        } finally {
                          if (l) throw o;
                        }
                      }
                      return c;
                    }
                  })(t, e) ||
                  (function (t, e) {
                    if (t) {
                      if ("string" == typeof t) return ri(t, e);
                      var n = Object.prototype.toString.call(t).slice(8, -1);
                      return (
                        "Object" === n &&
                          t.constructor &&
                          (n = t.constructor.name),
                        "Map" === n || "Set" === n
                          ? Array.from(t)
                          : "Arguments" === n ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            ? ri(t, e)
                            : void 0
                      );
                    }
                  })(t, e) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                  })()
                );
              })(d, 2);
              (y = g[0]), (v = g[1]);
            } else y = v = d;
            if ("vertical" === n) {
              var b = c.scale,
                x = p + e,
                w = x + r,
                O = x - r,
                j = b(h - y),
                S = b(h + v);
              m.push({ x1: S, y1: w, x2: S, y2: O }),
                m.push({ x1: j, y1: x, x2: S, y2: x }),
                m.push({ x1: j, y1: w, x2: j, y2: O });
            } else if ("horizontal" === n) {
              var E = u.scale,
                A = f + e,
                P = A - r,
                k = A + r,
                M = E(h - y),
                T = E(h + v);
              m.push({ x1: P, y1: T, x2: k, y2: T }),
                m.push({ x1: A, y1: M, x2: A, y2: T }),
                m.push({ x1: P, y1: M, x2: k, y2: M });
            }
            return Jo.createElement(
              Qo.m,
              ni({ className: "recharts-errorBar", key: "bar-".concat(i) }, s),
              m.map(function (t, e) {
                return Jo.createElement(
                  "line",
                  ni({}, t, { key: "line-".concat(e) }),
                );
              }),
            );
          });
        return Jo.createElement(Qo.m, { className: "recharts-errorBars" }, f);
      }
      (oi.defaultProps = {
        stroke: "black",
        strokeWidth: 1.5,
        width: 5,
        offset: 0,
        layout: "horizontal",
      }),
        (oi.displayName = "ErrorBar");
      var ii = n(69055),
        ai = n(20430);
      function ci(t) {
        return (
          (ci =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          ci(t)
        );
      }
      function ui(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function li(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ui(Object(n), !0).forEach(function (e) {
                si(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : ui(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function si(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== ci(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, "string");
                if ("object" !== ci(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(t);
            })(t);
            return "symbol" === ci(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function fi(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return pi(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return pi(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? pi(t, e)
                    : void 0
              );
            }
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function pi(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function hi(t, e, n) {
        return lo()(t) || lo()(e)
          ? n
          : (0, ii.P2)(e)
            ? vo()(t, e, n)
            : fo()(e)
              ? e(t)
              : n;
      }
      function di(t, e, n, r) {
        var o = go()(t, function (t) {
          return hi(t, e);
        });
        if ("number" === n) {
          var i = o.filter(function (t) {
            return (0, ii.hj)(t) || parseFloat(t);
          });
          return i.length ? [co()(i), io()(i)] : [1 / 0, -1 / 0];
        }
        return (
          r
            ? o.filter(function (t) {
                return !lo()(t);
              })
            : o
        ).map(function (t) {
          return (0, ii.P2)(t) || t instanceof Date ? t : "";
        });
      }
      var yi = function (t) {
          var e,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            r = arguments.length > 2 ? arguments[2] : void 0,
            o = arguments.length > 3 ? arguments[3] : void 0,
            i = -1,
            a =
              null !== (e = null == n ? void 0 : n.length) && void 0 !== e
                ? e
                : 0;
          if (a <= 1) return 0;
          if (
            o &&
            "angleAxis" === o.axisType &&
            Math.abs(Math.abs(o.range[1] - o.range[0]) - 360) <= 1e-6
          )
            for (var c = o.range, u = 0; u < a; u++) {
              var l = u > 0 ? r[u - 1].coordinate : r[a - 1].coordinate,
                s = r[u].coordinate,
                f = u >= a - 1 ? r[0].coordinate : r[u + 1].coordinate,
                p = void 0;
              if ((0, ii.uY)(s - l) !== (0, ii.uY)(f - s)) {
                var h = [];
                if ((0, ii.uY)(f - s) === (0, ii.uY)(c[1] - c[0])) {
                  p = f;
                  var d = s + c[1] - c[0];
                  (h[0] = Math.min(d, (d + l) / 2)),
                    (h[1] = Math.max(d, (d + l) / 2));
                } else {
                  p = l;
                  var y = f + c[1] - c[0];
                  (h[0] = Math.min(s, (y + s) / 2)),
                    (h[1] = Math.max(s, (y + s) / 2));
                }
                var v = [Math.min(s, (p + s) / 2), Math.max(s, (p + s) / 2)];
                if ((t > v[0] && t <= v[1]) || (t >= h[0] && t <= h[1])) {
                  i = r[u].index;
                  break;
                }
              } else {
                var m = Math.min(l, f),
                  g = Math.max(l, f);
                if (t > (m + s) / 2 && t <= (g + s) / 2) {
                  i = r[u].index;
                  break;
                }
              }
            }
          else
            for (var b = 0; b < a; b++)
              if (
                (0 === b && t <= (n[b].coordinate + n[b + 1].coordinate) / 2) ||
                (b > 0 &&
                  b < a - 1 &&
                  t > (n[b].coordinate + n[b - 1].coordinate) / 2 &&
                  t <= (n[b].coordinate + n[b + 1].coordinate) / 2) ||
                (b === a - 1 && t > (n[b].coordinate + n[b - 1].coordinate) / 2)
              ) {
                i = n[b].index;
                break;
              }
          return i;
        },
        vi = function (t) {
          var e,
            n = t.type.displayName,
            r = t.props,
            o = r.stroke,
            i = r.fill;
          switch (n) {
            case "Line":
              e = o;
              break;
            case "Area":
            case "Radar":
              e = o && "none" !== o ? o : i;
              break;
            default:
              e = i;
          }
          return e;
        },
        mi = function (t) {
          var e = t.barSize,
            n = t.stackGroups,
            r = void 0 === n ? {} : n;
          if (!r) return {};
          for (var o = {}, i = Object.keys(r), a = 0, c = i.length; a < c; a++)
            for (
              var u = r[i[a]].stackGroups,
                l = Object.keys(u),
                s = 0,
                f = l.length;
              s < f;
              s++
            ) {
              var p = u[l[s]],
                h = p.items,
                d = p.cateAxisId,
                y = h.filter(function (t) {
                  return (0, ti.Gf)(t.type).indexOf("Bar") >= 0;
                });
              if (y && y.length) {
                var v = y[0].props.barSize,
                  m = y[0].props[d];
                o[m] || (o[m] = []),
                  o[m].push({
                    item: y[0],
                    stackList: y.slice(1),
                    barSize: lo()(v) ? e : v,
                  });
              }
            }
          return o;
        },
        gi = function (t) {
          var e = t.barGap,
            n = t.barCategoryGap,
            r = t.bandSize,
            o = t.sizeList,
            i = void 0 === o ? [] : o,
            a = t.maxBarSize,
            c = i.length;
          if (c < 1) return null;
          var u,
            l = (0, ii.h1)(e, r, 0, !0),
            s = [];
          if (i[0].barSize === +i[0].barSize) {
            var f = !1,
              p = r / c,
              h = i.reduce(function (t, e) {
                return t + e.barSize || 0;
              }, 0);
            (h += (c - 1) * l) >= r && ((h -= (c - 1) * l), (l = 0)),
              h >= r && p > 0 && ((f = !0), (h = c * (p *= 0.9)));
            var d = { offset: (((r - h) / 2) >> 0) - l, size: 0 };
            u = i.reduce(function (t, e) {
              var n = {
                  item: e.item,
                  position: {
                    offset: d.offset + d.size + l,
                    size: f ? p : e.barSize,
                  },
                },
                r = [].concat(fi(t), [n]);
              return (
                (d = r[r.length - 1].position),
                e.stackList &&
                  e.stackList.length &&
                  e.stackList.forEach(function (t) {
                    r.push({ item: t, position: d });
                  }),
                r
              );
            }, s);
          } else {
            var y = (0, ii.h1)(n, r, 0, !0);
            r - 2 * y - (c - 1) * l <= 0 && (l = 0);
            var v = (r - 2 * y - (c - 1) * l) / c;
            v > 1 && (v >>= 0);
            var m = a === +a ? Math.min(v, a) : v;
            u = i.reduce(function (t, e, n) {
              var r = [].concat(fi(t), [
                {
                  item: e.item,
                  position: { offset: y + (v + l) * n + (v - m) / 2, size: m },
                },
              ]);
              return (
                e.stackList &&
                  e.stackList.length &&
                  e.stackList.forEach(function (t) {
                    r.push({ item: t, position: r[r.length - 1].position });
                  }),
                r
              );
            }, s);
          }
          return u;
        },
        bi = function (t, e, n, r) {
          var o = n.children,
            i = n.width,
            a = n.margin,
            c = i - (a.left || 0) - (a.right || 0),
            u = (0, ai.z)({ children: o, legendWidth: c });
          if (u) {
            var l = r || {},
              s = l.width,
              f = l.height,
              p = u.align,
              h = u.verticalAlign,
              d = u.layout;
            if (
              ("vertical" === d || ("horizontal" === d && "middle" === h)) &&
              "center" !== p &&
              (0, ii.hj)(t[p])
            )
              return li(li({}, t), {}, si({}, p, t[p] + (s || 0)));
            if (
              ("horizontal" === d || ("vertical" === d && "center" === p)) &&
              "middle" !== h &&
              (0, ii.hj)(t[h])
            )
              return li(li({}, t), {}, si({}, h, t[h] + (f || 0)));
          }
          return t;
        },
        xi = function (t, e, n, r, o) {
          var i = e.props.children,
            a = (0, ti.NN)(i, oi).filter(function (t) {
              return (function (t, e, n) {
                return (
                  !!lo()(e) ||
                  ("horizontal" === t
                    ? "yAxis" === e
                    : "vertical" === t || "x" === n
                      ? "xAxis" === e
                      : "y" !== n || "yAxis" === e)
                );
              })(r, o, t.props.direction);
            });
          if (a && a.length) {
            var c = a.map(function (t) {
              return t.props.dataKey;
            });
            return t.reduce(
              function (t, e) {
                var r = hi(e, n, 0),
                  o = Array.isArray(r) ? [co()(r), io()(r)] : [r, r],
                  i = c.reduce(
                    function (t, n) {
                      var r = hi(e, n, 0),
                        i = o[0] - Math.abs(Array.isArray(r) ? r[0] : r),
                        a = o[1] + Math.abs(Array.isArray(r) ? r[1] : r);
                      return [Math.min(i, t[0]), Math.max(a, t[1])];
                    },
                    [1 / 0, -1 / 0],
                  );
                return [Math.min(i[0], t[0]), Math.max(i[1], t[1])];
              },
              [1 / 0, -1 / 0],
            );
          }
          return null;
        },
        wi = function (t, e, n, r, o) {
          var i = e
            .map(function (e) {
              return xi(t, e, n, o, r);
            })
            .filter(function (t) {
              return !lo()(t);
            });
          return i && i.length
            ? i.reduce(
                function (t, e) {
                  return [Math.min(t[0], e[0]), Math.max(t[1], e[1])];
                },
                [1 / 0, -1 / 0],
              )
            : null;
        },
        Oi = function (t, e, n, r, o) {
          var i = e.map(function (e) {
            var i = e.props.dataKey;
            return ("number" === n && i && xi(t, e, i, r)) || di(t, i, n, o);
          });
          if ("number" === n)
            return i.reduce(
              function (t, e) {
                return [Math.min(t[0], e[0]), Math.max(t[1], e[1])];
              },
              [1 / 0, -1 / 0],
            );
          var a = {};
          return i.reduce(function (t, e) {
            for (var n = 0, r = e.length; n < r; n++)
              a[e[n]] || ((a[e[n]] = !0), t.push(e[n]));
            return t;
          }, []);
        },
        ji = function (t, e) {
          return (
            ("horizontal" === t && "xAxis" === e) ||
            ("vertical" === t && "yAxis" === e) ||
            ("centric" === t && "angleAxis" === e) ||
            ("radial" === t && "radiusAxis" === e)
          );
        },
        Si = function (t, e, n, r) {
          if (r)
            return t.map(function (t) {
              return t.coordinate;
            });
          var o,
            i,
            a = t.map(function (t) {
              return (
                t.coordinate === e && (o = !0),
                t.coordinate === n && (i = !0),
                t.coordinate
              );
            });
          return o || a.push(e), i || a.push(n), a;
        },
        Ei = function (t, e, n) {
          if (!t) return null;
          var r = t.scale,
            o = t.duplicateDomain,
            i = t.type,
            a = t.range,
            c = "scaleBand" === t.realScaleType ? r.bandwidth() / 2 : 2,
            u =
              (e || n) && "category" === i && r.bandwidth
                ? r.bandwidth() / c
                : 0;
          return (
            (u =
              "angleAxis" === t.axisType && (null == a ? void 0 : a.length) >= 2
                ? 2 * (0, ii.uY)(a[0] - a[1]) * u
                : u),
            e && (t.ticks || t.niceTicks)
              ? (t.ticks || t.niceTicks)
                  .map(function (t) {
                    var e = o ? o.indexOf(t) : t;
                    return { coordinate: r(e) + u, value: t, offset: u };
                  })
                  .filter(function (t) {
                    return !xo()(t.coordinate);
                  })
              : t.isCategorical && t.categoricalDomain
                ? t.categoricalDomain.map(function (t, e) {
                    return {
                      coordinate: r(t) + u,
                      value: t,
                      index: e,
                      offset: u,
                    };
                  })
                : r.ticks && !n
                  ? r.ticks(t.tickCount).map(function (t) {
                      return { coordinate: r(t) + u, value: t, offset: u };
                    })
                  : r.domain().map(function (t, e) {
                      return {
                        coordinate: r(t) + u,
                        value: o ? o[t] : t,
                        index: e,
                        offset: u,
                      };
                    })
          );
        },
        Ai = new WeakMap(),
        Pi = function (t, e) {
          if ("function" != typeof e) return t;
          Ai.has(t) || Ai.set(t, new WeakMap());
          var n = Ai.get(t);
          if (n.has(e)) return n.get(e);
          var r = function () {
            t.apply(void 0, arguments), e.apply(void 0, arguments);
          };
          return n.set(e, r), r;
        },
        ki = function (t, e, n) {
          var i = t.scale,
            a = t.type,
            c = t.layout,
            u = t.axisType;
          if ("auto" === i)
            return "radial" === c && "radiusAxis" === u
              ? { scale: o.Z(), realScaleType: "band" }
              : "radial" === c && "angleAxis" === u
                ? { scale: Ft(), realScaleType: "linear" }
                : "category" === a &&
                    e &&
                    (e.indexOf("LineChart") >= 0 ||
                      e.indexOf("AreaChart") >= 0 ||
                      (e.indexOf("ComposedChart") >= 0 && !n))
                  ? { scale: o.x(), realScaleType: "point" }
                  : "category" === a
                    ? { scale: o.Z(), realScaleType: "band" }
                    : { scale: Ft(), realScaleType: "linear" };
          if (ho()(i)) {
            var l = "scale".concat(Oo()(i));
            return {
              scale: (r[l] || o.x)(),
              realScaleType: r[l] ? l : "point",
            };
          }
          return fo()(i)
            ? { scale: i }
            : { scale: o.x(), realScaleType: "point" };
        },
        Mi = 1e-4,
        Ti = function (t) {
          var e = t.domain();
          if (e && !(e.length <= 2)) {
            var n = e.length,
              r = t.range(),
              o = Math.min(r[0], r[1]) - Mi,
              i = Math.max(r[0], r[1]) + Mi,
              a = t(e[0]),
              c = t(e[n - 1]);
            (a < o || a > i || c < o || c > i) && t.domain([e[0], e[n - 1]]);
          }
        },
        _i = {
          sign: function (t) {
            var e = t.length;
            if (!(e <= 0))
              for (var n = 0, r = t[0].length; n < r; ++n)
                for (var o = 0, i = 0, a = 0; a < e; ++a) {
                  var c = xo()(t[a][n][1]) ? t[a][n][0] : t[a][n][1];
                  c >= 0
                    ? ((t[a][n][0] = o), (t[a][n][1] = o + c), (o = t[a][n][1]))
                    : ((t[a][n][0] = i),
                      (t[a][n][1] = i + c),
                      (i = t[a][n][1]));
                }
          },
          expand: function (t, e) {
            if ((r = t.length) > 0) {
              for (var n, r, o, i = 0, a = t[0].length; i < a; ++i) {
                for (o = n = 0; n < r; ++n) o += t[n][i][1] || 0;
                if (o) for (n = 0; n < r; ++n) t[n][i][1] /= o;
              }
              Jr(t, e);
            }
          },
          none: Jr,
          silhouette: function (t, e) {
            if ((n = t.length) > 0) {
              for (var n, r = 0, o = t[e[0]], i = o.length; r < i; ++r) {
                for (var a = 0, c = 0; a < n; ++a) c += t[a][r][1] || 0;
                o[r][1] += o[r][0] = -c / 2;
              }
              Jr(t, e);
            }
          },
          wiggle: function (t, e) {
            if ((o = t.length) > 0 && (r = (n = t[e[0]]).length) > 0) {
              for (var n, r, o, i = 0, a = 1; a < r; ++a) {
                for (var c = 0, u = 0, l = 0; c < o; ++c) {
                  for (
                    var s = t[e[c]],
                      f = s[a][1] || 0,
                      p = (f - (s[a - 1][1] || 0)) / 2,
                      h = 0;
                    h < c;
                    ++h
                  ) {
                    var d = t[e[h]];
                    p += (d[a][1] || 0) - (d[a - 1][1] || 0);
                  }
                  (u += f), (l += p * f);
                }
                (n[a - 1][1] += n[a - 1][0] = i), u && (i -= l / u);
              }
              (n[a - 1][1] += n[a - 1][0] = i), Jr(t, e);
            }
          },
          positive: function (t) {
            var e = t.length;
            if (!(e <= 0))
              for (var n = 0, r = t[0].length; n < r; ++n)
                for (var o = 0, i = 0; i < e; ++i) {
                  var a = xo()(t[i][n][1]) ? t[i][n][0] : t[i][n][1];
                  a >= 0
                    ? ((t[i][n][0] = o), (t[i][n][1] = o + a), (o = t[i][n][1]))
                    : ((t[i][n][0] = 0), (t[i][n][1] = 0));
                }
          },
        },
        Ci = function (t, e, n) {
          var r = e.map(function (t) {
              return t.props.dataKey;
            }),
            o = _i[n],
            i = (function () {
              var t = (0, to.Z)([]),
                e = eo,
                n = Jr,
                r = no;
              function o(o) {
                var i,
                  a,
                  c = Array.from(t.apply(this, arguments), ro),
                  u = c.length,
                  l = -1;
                for (const t of o)
                  for (i = 0, ++l; i < u; ++i)
                    (c[i][l] = [0, +r(t, c[i].key, l, o)]).data = t;
                for (i = 0, a = (0, Qr.Z)(e(c)); i < u; ++i) c[a[i]].index = i;
                return n(c, a), c;
              }
              return (
                (o.keys = function (e) {
                  return arguments.length
                    ? ((t =
                        "function" == typeof e ? e : (0, to.Z)(Array.from(e))),
                      o)
                    : t;
                }),
                (o.value = function (t) {
                  return arguments.length
                    ? ((r = "function" == typeof t ? t : (0, to.Z)(+t)), o)
                    : r;
                }),
                (o.order = function (t) {
                  return arguments.length
                    ? ((e =
                        null == t
                          ? eo
                          : "function" == typeof t
                            ? t
                            : (0, to.Z)(Array.from(t))),
                      o)
                    : e;
                }),
                (o.offset = function (t) {
                  return arguments.length ? ((n = null == t ? Jr : t), o) : n;
                }),
                o
              );
            })()
              .keys(r)
              .value(function (t, e) {
                return +hi(t, e, 0);
              })
              .order(eo)
              .offset(o);
          return i(t);
        },
        Ni = function (t, e, n, r, o, i) {
          if (!t) return null;
          var a = (i ? e.reverse() : e).reduce(function (t, e) {
            var o = e.props,
              i = o.stackId;
            if (o.hide) return t;
            var a = e.props[n],
              c = t[a] || { hasStack: !1, stackGroups: {} };
            if ((0, ii.P2)(i)) {
              var u = c.stackGroups[i] || {
                numericAxisId: n,
                cateAxisId: r,
                items: [],
              };
              u.items.push(e), (c.hasStack = !0), (c.stackGroups[i] = u);
            } else
              c.stackGroups[(0, ii.EL)("_stackId_")] = {
                numericAxisId: n,
                cateAxisId: r,
                items: [e],
              };
            return li(li({}, t), {}, si({}, a, c));
          }, {});
          return Object.keys(a).reduce(function (e, i) {
            var c = a[i];
            return (
              c.hasStack &&
                (c.stackGroups = Object.keys(c.stackGroups).reduce(function (
                  e,
                  i,
                ) {
                  var a = c.stackGroups[i];
                  return li(
                    li({}, e),
                    {},
                    si({}, i, {
                      numericAxisId: n,
                      cateAxisId: r,
                      items: a.items,
                      stackedData: Ci(t, a.items, o),
                    }),
                  );
                }, {})),
              li(li({}, e), {}, si({}, i, c))
            );
          }, {});
        },
        Di = function (t, e) {
          var n = e.realScaleType,
            r = e.type,
            o = e.tickCount,
            i = e.originalDomain,
            a = e.allowDecimals,
            c = n || e.scale;
          if ("auto" !== c && "linear" !== c) return null;
          if (
            o &&
            "number" === r &&
            i &&
            ("auto" === i[0] || "auto" === i[1])
          ) {
            var u = t.domain();
            if (!u.length) return null;
            var l = Vo(u, o, a);
            return t.domain([co()(l), io()(l)]), { niceTicks: l };
          }
          if (o && "number" === r) {
            var s = t.domain();
            return { niceTicks: Ko(s, o, a) };
          }
          return null;
        },
        Ii = function (t, e) {
          var n = t.props.stackId;
          if ((0, ii.P2)(n)) {
            var r = e[n];
            if (r) {
              var o = r.items.indexOf(t);
              return o >= 0 ? r.stackedData[o] : null;
            }
          }
          return null;
        },
        Li = function (t, e, n) {
          return Object.keys(t)
            .reduce(
              function (r, o) {
                var i = t[o].stackedData.reduce(
                  function (t, r) {
                    var o = r.slice(e, n + 1).reduce(
                      function (t, e) {
                        return [
                          co()(e.concat([t[0]]).filter(ii.hj)),
                          io()(e.concat([t[1]]).filter(ii.hj)),
                        ];
                      },
                      [1 / 0, -1 / 0],
                    );
                    return [Math.min(t[0], o[0]), Math.max(t[1], o[1])];
                  },
                  [1 / 0, -1 / 0],
                );
                return [Math.min(i[0], r[0]), Math.max(i[1], r[1])];
              },
              [1 / 0, -1 / 0],
            )
            .map(function (t) {
              return t === 1 / 0 || t === -1 / 0 ? 0 : t;
            });
        },
        Ri = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        Bi = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        Ui = function (t, e, n) {
          if (fo()(t)) return t(e, n);
          if (!Array.isArray(t)) return e;
          var r = [];
          if ((0, ii.hj)(t[0])) r[0] = n ? t[0] : Math.min(t[0], e[0]);
          else if (Ri.test(t[0])) {
            var o = +Ri.exec(t[0])[1];
            r[0] = e[0] - o;
          } else fo()(t[0]) ? (r[0] = t[0](e[0])) : (r[0] = e[0]);
          if ((0, ii.hj)(t[1])) r[1] = n ? t[1] : Math.max(t[1], e[1]);
          else if (Bi.test(t[1])) {
            var i = +Bi.exec(t[1])[1];
            r[1] = e[1] + i;
          } else fo()(t[1]) ? (r[1] = t[1](e[1])) : (r[1] = e[1]);
          return r;
        },
        $i = function (t, e, n) {
          if (t && t.scale && t.scale.bandwidth) {
            var r = t.scale.bandwidth();
            if (!n || r > 0) return r;
          }
          if (t && e && e.length >= 2) {
            for (
              var o = Ao()(e, function (t) {
                  return t.coordinate;
                }),
                i = 1 / 0,
                a = 1,
                c = o.length;
              a < c;
              a++
            ) {
              var u = o[a],
                l = o[a - 1];
              i = Math.min((u.coordinate || 0) - (l.coordinate || 0), i);
            }
            return i === 1 / 0 ? 0 : i;
          }
          return n ? void 0 : 0;
        },
        Fi = function (t, e, n) {
          return t && t.length
            ? So()(t, vo()(n, "type.defaultProps.domain"))
              ? e
              : t
            : e;
        },
        zi = function (t, e) {
          var n = t.props,
            r = n.dataKey,
            o = n.name,
            i = n.unit,
            a = n.formatter,
            c = n.tooltipType,
            u = n.chartType;
          return li(
            li({}, (0, ti.L6)(t)),
            {},
            {
              dataKey: r,
              unit: i,
              formatter: a,
              name: o || r,
              color: vi(t),
              value: hi(e, r),
              type: c,
              payload: e,
              chartType: u,
            },
          );
        };
    },
    41209: (t, e, n) => {
      "use strict";
      n.d(e, { os: () => f, xE: () => s });
      var r = n(47523);
      function o(t) {
        return (
          (o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          o(t)
        );
      }
      function i(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? i(Object(n), !0).forEach(function (e) {
                var r, i, a;
                (r = t),
                  (i = e),
                  (a = n[e]),
                  (i = (function (t) {
                    var e = (function (t, e) {
                      if ("object" !== o(t) || null === t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, "string");
                        if ("object" !== o(r)) return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return String(t);
                    })(t);
                    return "symbol" === o(e) ? e : String(e);
                  })(i)) in r
                    ? Object.defineProperty(r, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[i] = a);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : i(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      var c = { widthCache: {}, cacheCount: 0 },
        u = {
          position: "absolute",
          top: "-20000px",
          left: 0,
          padding: 0,
          margin: 0,
          border: "none",
          whiteSpace: "pre",
        },
        l = "recharts_measurement_span",
        s = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null == t || r.x.isSsr) return { width: 0, height: 0 };
          var n,
            o =
              ((n = a({}, e)),
              Object.keys(n).forEach(function (t) {
                n[t] || delete n[t];
              }),
              n),
            i = JSON.stringify({ text: t, copyStyle: o });
          if (c.widthCache[i]) return c.widthCache[i];
          try {
            var s = document.getElementById(l);
            s ||
              ((s = document.createElement("span")).setAttribute("id", l),
              s.setAttribute("aria-hidden", "true"),
              document.body.appendChild(s));
            var f = a(a({}, u), o);
            Object.assign(s.style, f), (s.textContent = "".concat(t));
            var p = s.getBoundingClientRect(),
              h = { width: p.width, height: p.height };
            return (
              (c.widthCache[i] = h),
              ++c.cacheCount > 2e3 && ((c.cacheCount = 0), (c.widthCache = {})),
              h
            );
          } catch (t) {
            return { width: 0, height: 0 };
          }
        },
        f = function (t) {
          return {
            top: t.top + window.scrollY - document.documentElement.clientTop,
            left: t.left + window.scrollX - document.documentElement.clientLeft,
          };
        };
    },
    69055: (t, e, n) => {
      "use strict";
      n.d(e, {
        Ap: () => w,
        EL: () => v,
        Kt: () => g,
        P2: () => d,
        bv: () => b,
        h1: () => m,
        hU: () => p,
        hj: () => h,
        k4: () => x,
        uY: () => f,
      });
      var r = n(47037),
        o = n.n(r),
        i = n(7654),
        a = n.n(i),
        c = n(27361),
        u = n.n(c),
        l = n(81763),
        s = n.n(l),
        f = function (t) {
          return 0 === t ? 0 : t > 0 ? 1 : -1;
        },
        p = function (t) {
          return o()(t) && t.indexOf("%") === t.length - 1;
        },
        h = function (t) {
          return s()(t) && !a()(t);
        },
        d = function (t) {
          return h(t) || o()(t);
        },
        y = 0,
        v = function (t) {
          var e = ++y;
          return "".concat(t || "").concat(e);
        },
        m = function (t, e) {
          var n,
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          if (!h(t) && !o()(t)) return r;
          if (p(t)) {
            var c = t.indexOf("%");
            n = (e * parseFloat(t.slice(0, c))) / 100;
          } else n = +t;
          return a()(n) && (n = r), i && n > e && (n = e), n;
        },
        g = function (t) {
          if (!t) return null;
          var e = Object.keys(t);
          return e && e.length ? t[e[0]] : null;
        },
        b = function (t) {
          if (!Array.isArray(t)) return !1;
          for (var e = t.length, n = {}, r = 0; r < e; r++) {
            if (n[t[r]]) return !0;
            n[t[r]] = !0;
          }
          return !1;
        },
        x = function (t, e) {
          return h(t) && h(e)
            ? function (n) {
                return t + n * (e - t);
              }
            : function () {
                return e;
              };
        };
      function w(t, e, n) {
        return t && t.length
          ? t.find(function (t) {
              return t && ("function" == typeof e ? e(t) : u()(t, e)) === n;
            })
          : null;
      }
    },
    47523: (t, e, n) => {
      "use strict";
      n.d(e, { x: () => r });
      var r = {
        isSsr: !(
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement &&
          window.setTimeout
        ),
        get: function (t) {
          return r[t];
        },
        set: function (t, e) {
          if ("string" == typeof t) r[t] = e;
          else {
            var n = Object.keys(t);
            n &&
              n.length &&
              n.forEach(function (e) {
                r[e] = t[e];
              });
          }
        },
      };
    },
    6213: (t, e, n) => {
      "use strict";
      n.d(e, { Z: () => r }), n(25108);
      var r = function (t, e) {
        for (
          var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
          o < n;
          o++
        )
          r[o - 2] = arguments[o];
      };
    },
    40048: (t, e, n) => {
      "use strict";
      n.d(e, {
        $4: () => y,
        Wk: () => p,
        op: () => d,
        t9: () => v,
        z3: () => g,
      });
      var r = n(14293),
        o = n.n(r),
        i = n(69055),
        a = n(81990);
      function c(t) {
        return (
          (c =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          c(t)
        );
      }
      function u(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? u(Object(n), !0).forEach(function (e) {
                s(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : u(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function s(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== c(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, "string");
                if ("object" !== c(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(t);
            })(t);
            return "symbol" === c(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function f(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var p = Math.PI / 180,
        h = function (t) {
          return (180 * t) / Math.PI;
        },
        d = function (t, e, n, r) {
          return { x: t + Math.cos(-p * r) * n, y: e + Math.sin(-p * r) * n };
        },
        y = function (t, e) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : { top: 0, right: 0, bottom: 0, left: 0 };
          return (
            Math.min(
              Math.abs(t - (n.left || 0) - (n.right || 0)),
              Math.abs(e - (n.top || 0) - (n.bottom || 0)),
            ) / 2
          );
        },
        v = function (t, e, n, r, c) {
          var u = t.width,
            p = t.height,
            h = t.startAngle,
            d = t.endAngle,
            v = (0, i.h1)(t.cx, u, u / 2),
            m = (0, i.h1)(t.cy, p, p / 2),
            g = y(u, p, n),
            b = (0, i.h1)(t.innerRadius, g, 0),
            x = (0, i.h1)(t.outerRadius, g, 0.8 * g);
          return Object.keys(e).reduce(function (t, n) {
            var i,
              u,
              p,
              y = e[n],
              g = y.domain,
              w = y.reversed;
            if (o()(y.range))
              "angleAxis" === r
                ? (i = [h, d])
                : "radiusAxis" === r && (i = [b, x]),
                w && (i = [i[1], i[0]]);
            else {
              var O =
                ((u = i = y.range),
                (p = 2),
                (function (t) {
                  if (Array.isArray(t)) return t;
                })(u) ||
                  (function (t, e) {
                    var n =
                      null == t
                        ? null
                        : ("undefined" != typeof Symbol &&
                            t[Symbol.iterator]) ||
                          t["@@iterator"];
                    if (null != n) {
                      var r,
                        o,
                        i,
                        a,
                        c = [],
                        u = !0,
                        l = !1;
                      try {
                        if (((i = (n = n.call(t)).next), 0 === e)) {
                          if (Object(n) !== n) return;
                          u = !1;
                        } else
                          for (
                            ;
                            !(u = (r = i.call(n)).done) &&
                            (c.push(r.value), c.length !== e);
                            u = !0
                          );
                      } catch (t) {
                        (l = !0), (o = t);
                      } finally {
                        try {
                          if (
                            !u &&
                            null != n.return &&
                            ((a = n.return()), Object(a) !== a)
                          )
                            return;
                        } finally {
                          if (l) throw o;
                        }
                      }
                      return c;
                    }
                  })(u, p) ||
                  (function (t, e) {
                    if (t) {
                      if ("string" == typeof t) return f(t, e);
                      var n = Object.prototype.toString.call(t).slice(8, -1);
                      return (
                        "Object" === n &&
                          t.constructor &&
                          (n = t.constructor.name),
                        "Map" === n || "Set" === n
                          ? Array.from(t)
                          : "Arguments" === n ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            ? f(t, e)
                            : void 0
                      );
                    }
                  })(u, p) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                  })());
              (h = O[0]), (d = O[1]);
            }
            var j = (0, a.Hq)(y, c),
              S = j.realScaleType,
              E = j.scale;
            E.domain(g).range(i), (0, a.zF)(E);
            var A = (0, a.g$)(E, l(l({}, y), {}, { realScaleType: S })),
              P = l(
                l(l({}, y), A),
                {},
                {
                  range: i,
                  radius: x,
                  realScaleType: S,
                  scale: E,
                  cx: v,
                  cy: m,
                  innerRadius: b,
                  outerRadius: x,
                  startAngle: h,
                  endAngle: d,
                },
              );
            return l(l({}, t), {}, s({}, n, P));
          }, {});
        },
        m = function (t, e) {
          var n = e.startAngle,
            r = e.endAngle,
            o = Math.floor(n / 360),
            i = Math.floor(r / 360);
          return t + 360 * Math.min(o, i);
        },
        g = function (t, e) {
          var n = (function (t, e) {
              var n,
                r,
                o,
                i,
                a,
                c,
                u = t.x,
                l = t.y,
                s = e.cx,
                f = e.cy,
                p =
                  ((o = (n = { x: u, y: l }).x),
                  (i = n.y),
                  (a = (r = { x: s, y: f }).x),
                  (c = r.y),
                  Math.sqrt(Math.pow(o - a, 2) + Math.pow(i - c, 2)));
              if (p <= 0) return { radius: p };
              var d = (u - s) / p,
                y = Math.acos(d);
              return (
                l > f && (y = 2 * Math.PI - y),
                { radius: p, angle: h(y), angleInRadian: y }
              );
            })({ x: t.x, y: t.y }, e),
            r = n.radius,
            o = n.angle,
            i = e.innerRadius,
            a = e.outerRadius;
          if (r < i || r > a) return !1;
          if (0 === r) return !0;
          var c,
            u = (function (t) {
              var e = t.startAngle,
                n = t.endAngle,
                r = Math.floor(e / 360),
                o = Math.floor(n / 360),
                i = Math.min(r, o);
              return { startAngle: e - 360 * i, endAngle: n - 360 * i };
            })(e),
            s = u.startAngle,
            f = u.endAngle,
            p = o;
          if (s <= f) {
            for (; p > f; ) p -= 360;
            for (; p < s; ) p += 360;
            c = p >= s && p <= f;
          } else {
            for (; p > s; ) p -= 360;
            for (; p < f; ) p += 360;
            c = p >= f && p <= s;
          }
          return c ? l(l({}, e), {}, { radius: r, angle: m(p, e) }) : null;
        };
    },
    52017: (t, e, n) => {
      "use strict";
      n.d(e, {
        $R: () => I,
        Bh: () => D,
        Gf: () => O,
        L6: () => T,
        NN: () => A,
        TT: () => k,
        eu: () => N,
        rL: () => _,
        sP: () => P,
      });
      var r = n(27361),
        o = n.n(r),
        i = n(14293),
        a = n.n(i),
        c = n(47037),
        u = n.n(c),
        l = n(23560),
        s = n.n(l),
        f = n(13218),
        p = n.n(f),
        h = n(67294),
        d = n(59864),
        y = n(69055),
        v = n(30791),
        m = n(79896),
        g = ["children"],
        b = ["children"];
      function x(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
      }
      var w = {
          click: "onClick",
          mousedown: "onMouseDown",
          mouseup: "onMouseUp",
          mouseover: "onMouseOver",
          mousemove: "onMouseMove",
          mouseout: "onMouseOut",
          mouseenter: "onMouseEnter",
          mouseleave: "onMouseLeave",
          touchcancel: "onTouchCancel",
          touchend: "onTouchEnd",
          touchmove: "onTouchMove",
          touchstart: "onTouchStart",
        },
        O = function (t) {
          return "string" == typeof t
            ? t
            : t
              ? t.displayName || t.name || "Component"
              : "";
        },
        j = null,
        S = null,
        E = function t(e) {
          if (e === j && Array.isArray(S)) return S;
          var n = [];
          return (
            h.Children.forEach(e, function (e) {
              a()(e) ||
                ((0, d.isFragment)(e)
                  ? (n = n.concat(t(e.props.children)))
                  : n.push(e));
            }),
            (S = n),
            (j = e),
            n
          );
        };
      function A(t, e) {
        var n = [],
          r = [];
        return (
          (r = Array.isArray(e)
            ? e.map(function (t) {
                return O(t);
              })
            : [O(e)]),
          E(t).forEach(function (t) {
            var e = o()(t, "type.displayName") || o()(t, "type.name");
            -1 !== r.indexOf(e) && n.push(t);
          }),
          n
        );
      }
      function P(t, e) {
        var n = A(t, e);
        return n && n[0];
      }
      var k = function (t) {
          if (!t || !t.props) return !1;
          var e = t.props,
            n = e.width,
            r = e.height;
          return !(!(0, y.hj)(n) || n <= 0 || !(0, y.hj)(r) || r <= 0);
        },
        M = [
          "a",
          "altGlyph",
          "altGlyphDef",
          "altGlyphItem",
          "animate",
          "animateColor",
          "animateMotion",
          "animateTransform",
          "circle",
          "clipPath",
          "color-profile",
          "cursor",
          "defs",
          "desc",
          "ellipse",
          "feBlend",
          "feColormatrix",
          "feComponentTransfer",
          "feComposite",
          "feConvolveMatrix",
          "feDiffuseLighting",
          "feDisplacementMap",
          "feDistantLight",
          "feFlood",
          "feFuncA",
          "feFuncB",
          "feFuncG",
          "feFuncR",
          "feGaussianBlur",
          "feImage",
          "feMerge",
          "feMergeNode",
          "feMorphology",
          "feOffset",
          "fePointLight",
          "feSpecularLighting",
          "feSpotLight",
          "feTile",
          "feTurbulence",
          "filter",
          "font",
          "font-face",
          "font-face-format",
          "font-face-name",
          "font-face-url",
          "foreignObject",
          "g",
          "glyph",
          "glyphRef",
          "hkern",
          "image",
          "line",
          "lineGradient",
          "marker",
          "mask",
          "metadata",
          "missing-glyph",
          "mpath",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialGradient",
          "rect",
          "script",
          "set",
          "stop",
          "style",
          "svg",
          "switch",
          "symbol",
          "text",
          "textPath",
          "title",
          "tref",
          "tspan",
          "use",
          "view",
          "vkern",
        ],
        T = function (t, e, n) {
          if (!t || "function" == typeof t || "boolean" == typeof t)
            return null;
          var r = t;
          if (((0, h.isValidElement)(t) && (r = t.props), !p()(r))) return null;
          var o = {};
          return (
            Object.keys(r).forEach(function (t) {
              var i;
              (function (t, e, n, r) {
                var o,
                  i =
                    null !==
                      (o =
                        null === m.ry || void 0 === m.ry ? void 0 : m.ry[r]) &&
                    void 0 !== o
                      ? o
                      : [];
                return (
                  (!s()(t) && ((r && i.includes(e)) || m.Yh.includes(e))) ||
                  (n && m.nv.includes(e))
                );
              })(null === (i = r) || void 0 === i ? void 0 : i[t], t, e, n) &&
                (o[t] = r[t]);
            }),
            o
          );
        },
        _ = function t(e, n) {
          if (e === n) return !0;
          var r = h.Children.count(e);
          if (r !== h.Children.count(n)) return !1;
          if (0 === r) return !0;
          if (1 === r)
            return C(Array.isArray(e) ? e[0] : e, Array.isArray(n) ? n[0] : n);
          for (var o = 0; o < r; o++) {
            var i = e[o],
              a = n[o];
            if (Array.isArray(i) || Array.isArray(a)) {
              if (!t(i, a)) return !1;
            } else if (!C(i, a)) return !1;
          }
          return !0;
        },
        C = function (t, e) {
          if (a()(t) && a()(e)) return !0;
          if (!a()(t) && !a()(e)) {
            var n = t.props || {},
              r = n.children,
              o = x(n, g),
              i = e.props || {},
              c = i.children,
              u = x(i, b);
            return r && c
              ? (0, v.w)(o, u) && _(r, c)
              : !r && !c && (0, v.w)(o, u);
          }
          return !1;
        },
        N = function (t, e) {
          var n = [],
            r = {};
          return (
            E(t).forEach(function (t, o) {
              if (
                (function (t) {
                  return t && t.type && u()(t.type) && M.indexOf(t.type) >= 0;
                })(t)
              )
                n.push(t);
              else if (t) {
                var i = O(t.type),
                  a = e[i] || {},
                  c = a.handler,
                  l = a.once;
                if (c && (!l || !r[i])) {
                  var s = c(t, i, o);
                  n.push(s), (r[i] = !0);
                }
              }
            }),
            n
          );
        },
        D = function (t) {
          var e = t && t.type;
          return e && w[e] ? w[e] : null;
        },
        I = function (t, e) {
          return E(e).indexOf(t);
        };
    },
    30791: (t, e, n) => {
      "use strict";
      function r(t, e) {
        for (var n in t)
          if (
            {}.hasOwnProperty.call(t, n) &&
            (!{}.hasOwnProperty.call(e, n) || t[n] !== e[n])
          )
            return !1;
        for (var r in e)
          if ({}.hasOwnProperty.call(e, r) && !{}.hasOwnProperty.call(t, r))
            return !1;
        return !0;
      }
      n.d(e, { w: () => r });
    },
    20430: (t, e, n) => {
      "use strict";
      n.d(e, { z: () => l });
      var r = n(23872),
        o = n(81990),
        i = n(52017);
      function a(t) {
        return (
          (a =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          a(t)
        );
      }
      function c(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function u(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? c(Object(n), !0).forEach(function (e) {
                var r, o, i;
                (r = t),
                  (o = e),
                  (i = n[e]),
                  (o = (function (t) {
                    var e = (function (t, e) {
                      if ("object" !== a(t) || null === t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, "string");
                        if ("object" !== a(r)) return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return String(t);
                    })(t);
                    return "symbol" === a(e) ? e : String(e);
                  })(o)) in r
                    ? Object.defineProperty(r, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[o] = i);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : c(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      var l = function (t) {
        var e,
          n = t.children,
          a = t.formattedGraphicalItems,
          c = t.legendWidth,
          l = t.legendContent,
          s = (0, i.sP)(n, r.D);
        return s
          ? ((e =
              s.props && s.props.payload
                ? s.props && s.props.payload
                : "children" === l
                  ? (a || []).reduce(function (t, e) {
                      var n = e.item,
                        r = e.props,
                        o = r.sectors || r.data || [];
                      return t.concat(
                        o.map(function (t) {
                          return {
                            type: s.props.iconType || n.props.legendType,
                            value: t.name,
                            color: t.fill,
                            payload: t,
                          };
                        }),
                      );
                    }, [])
                  : (a || []).map(function (t) {
                      var e = t.item,
                        n = e.props,
                        r = n.dataKey,
                        i = n.name,
                        a = n.legendType;
                      return {
                        inactive: n.hide,
                        dataKey: r,
                        type: s.props.iconType || a || "square",
                        color: (0, o.fk)(e),
                        value: i || r,
                        payload: e.props,
                      };
                    })),
            u(
              u(u({}, s.props), r.D.getWithHeight(s, c)),
              {},
              { payload: e, item: s },
            ))
          : null;
      };
    },
    78817: (t, e, n) => {
      "use strict";
      n.d(e, { z: () => c });
      var r = n(45578),
        o = n.n(r),
        i = n(23560),
        a = n.n(i);
      function c(t, e, n) {
        return !0 === e ? o()(t, n) : a()(e) ? o()(t, e) : t;
      }
    },
    79896: (t, e, n) => {
      "use strict";
      n.d(e, {
        Yh: () => c,
        Ym: () => f,
        bw: () => p,
        nv: () => s,
        ry: () => l,
      });
      var r = n(67294),
        o = n(13218),
        i = n.n(o);
      function a(t) {
        return (
          (a =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          a(t)
        );
      }
      var c = [
          "aria-activedescendant",
          "aria-atomic",
          "aria-autocomplete",
          "aria-busy",
          "aria-checked",
          "aria-colcount",
          "aria-colindex",
          "aria-colspan",
          "aria-controls",
          "aria-current",
          "aria-describedby",
          "aria-details",
          "aria-disabled",
          "aria-errormessage",
          "aria-expanded",
          "aria-flowto",
          "aria-haspopup",
          "aria-hidden",
          "aria-invalid",
          "aria-keyshortcuts",
          "aria-label",
          "aria-labelledby",
          "aria-level",
          "aria-live",
          "aria-modal",
          "aria-multiline",
          "aria-multiselectable",
          "aria-orientation",
          "aria-owns",
          "aria-placeholder",
          "aria-posinset",
          "aria-pressed",
          "aria-readonly",
          "aria-relevant",
          "aria-required",
          "aria-roledescription",
          "aria-rowcount",
          "aria-rowindex",
          "aria-rowspan",
          "aria-selected",
          "aria-setsize",
          "aria-sort",
          "aria-valuemax",
          "aria-valuemin",
          "aria-valuenow",
          "aria-valuetext",
          "className",
          "color",
          "height",
          "id",
          "lang",
          "max",
          "media",
          "method",
          "min",
          "name",
          "style",
          "target",
          "width",
          "role",
          "tabIndex",
          "accentHeight",
          "accumulate",
          "additive",
          "alignmentBaseline",
          "allowReorder",
          "alphabetic",
          "amplitude",
          "arabicForm",
          "ascent",
          "attributeName",
          "attributeType",
          "autoReverse",
          "azimuth",
          "baseFrequency",
          "baselineShift",
          "baseProfile",
          "bbox",
          "begin",
          "bias",
          "by",
          "calcMode",
          "capHeight",
          "clip",
          "clipPath",
          "clipPathUnits",
          "clipRule",
          "colorInterpolation",
          "colorInterpolationFilters",
          "colorProfile",
          "colorRendering",
          "contentScriptType",
          "contentStyleType",
          "cursor",
          "cx",
          "cy",
          "d",
          "decelerate",
          "descent",
          "diffuseConstant",
          "direction",
          "display",
          "divisor",
          "dominantBaseline",
          "dur",
          "dx",
          "dy",
          "edgeMode",
          "elevation",
          "enableBackground",
          "end",
          "exponent",
          "externalResourcesRequired",
          "fill",
          "fillOpacity",
          "fillRule",
          "filter",
          "filterRes",
          "filterUnits",
          "floodColor",
          "floodOpacity",
          "focusable",
          "fontFamily",
          "fontSize",
          "fontSizeAdjust",
          "fontStretch",
          "fontStyle",
          "fontVariant",
          "fontWeight",
          "format",
          "from",
          "fx",
          "fy",
          "g1",
          "g2",
          "glyphName",
          "glyphOrientationHorizontal",
          "glyphOrientationVertical",
          "glyphRef",
          "gradientTransform",
          "gradientUnits",
          "hanging",
          "horizAdvX",
          "horizOriginX",
          "href",
          "ideographic",
          "imageRendering",
          "in2",
          "in",
          "intercept",
          "k1",
          "k2",
          "k3",
          "k4",
          "k",
          "kernelMatrix",
          "kernelUnitLength",
          "kerning",
          "keyPoints",
          "keySplines",
          "keyTimes",
          "lengthAdjust",
          "letterSpacing",
          "lightingColor",
          "limitingConeAngle",
          "local",
          "markerEnd",
          "markerHeight",
          "markerMid",
          "markerStart",
          "markerUnits",
          "markerWidth",
          "mask",
          "maskContentUnits",
          "maskUnits",
          "mathematical",
          "mode",
          "numOctaves",
          "offset",
          "opacity",
          "operator",
          "order",
          "orient",
          "orientation",
          "origin",
          "overflow",
          "overlinePosition",
          "overlineThickness",
          "paintOrder",
          "panose1",
          "pathLength",
          "patternContentUnits",
          "patternTransform",
          "patternUnits",
          "pointerEvents",
          "pointsAtX",
          "pointsAtY",
          "pointsAtZ",
          "preserveAlpha",
          "preserveAspectRatio",
          "primitiveUnits",
          "r",
          "radius",
          "refX",
          "refY",
          "renderingIntent",
          "repeatCount",
          "repeatDur",
          "requiredExtensions",
          "requiredFeatures",
          "restart",
          "result",
          "rotate",
          "rx",
          "ry",
          "seed",
          "shapeRendering",
          "slope",
          "spacing",
          "specularConstant",
          "specularExponent",
          "speed",
          "spreadMethod",
          "startOffset",
          "stdDeviation",
          "stemh",
          "stemv",
          "stitchTiles",
          "stopColor",
          "stopOpacity",
          "strikethroughPosition",
          "strikethroughThickness",
          "string",
          "stroke",
          "strokeDasharray",
          "strokeDashoffset",
          "strokeLinecap",
          "strokeLinejoin",
          "strokeMiterlimit",
          "strokeOpacity",
          "strokeWidth",
          "surfaceScale",
          "systemLanguage",
          "tableValues",
          "targetX",
          "targetY",
          "textAnchor",
          "textDecoration",
          "textLength",
          "textRendering",
          "to",
          "transform",
          "u1",
          "u2",
          "underlinePosition",
          "underlineThickness",
          "unicode",
          "unicodeBidi",
          "unicodeRange",
          "unitsPerEm",
          "vAlphabetic",
          "values",
          "vectorEffect",
          "version",
          "vertAdvY",
          "vertOriginX",
          "vertOriginY",
          "vHanging",
          "vIdeographic",
          "viewTarget",
          "visibility",
          "vMathematical",
          "widths",
          "wordSpacing",
          "writingMode",
          "x1",
          "x2",
          "x",
          "xChannelSelector",
          "xHeight",
          "xlinkActuate",
          "xlinkArcrole",
          "xlinkHref",
          "xlinkRole",
          "xlinkShow",
          "xlinkTitle",
          "xlinkType",
          "xmlBase",
          "xmlLang",
          "xmlns",
          "xmlnsXlink",
          "xmlSpace",
          "y1",
          "y2",
          "y",
          "yChannelSelector",
          "z",
          "zoomAndPan",
          "ref",
          "key",
          "angle",
        ],
        u = ["points", "pathLength"],
        l = { svg: ["viewBox", "children"], polygon: u, polyline: u },
        s = [
          "dangerouslySetInnerHTML",
          "onCopy",
          "onCopyCapture",
          "onCut",
          "onCutCapture",
          "onPaste",
          "onPasteCapture",
          "onCompositionEnd",
          "onCompositionEndCapture",
          "onCompositionStart",
          "onCompositionStartCapture",
          "onCompositionUpdate",
          "onCompositionUpdateCapture",
          "onFocus",
          "onFocusCapture",
          "onBlur",
          "onBlurCapture",
          "onChange",
          "onChangeCapture",
          "onBeforeInput",
          "onBeforeInputCapture",
          "onInput",
          "onInputCapture",
          "onReset",
          "onResetCapture",
          "onSubmit",
          "onSubmitCapture",
          "onInvalid",
          "onInvalidCapture",
          "onLoad",
          "onLoadCapture",
          "onError",
          "onErrorCapture",
          "onKeyDown",
          "onKeyDownCapture",
          "onKeyPress",
          "onKeyPressCapture",
          "onKeyUp",
          "onKeyUpCapture",
          "onAbort",
          "onAbortCapture",
          "onCanPlay",
          "onCanPlayCapture",
          "onCanPlayThrough",
          "onCanPlayThroughCapture",
          "onDurationChange",
          "onDurationChangeCapture",
          "onEmptied",
          "onEmptiedCapture",
          "onEncrypted",
          "onEncryptedCapture",
          "onEnded",
          "onEndedCapture",
          "onLoadedData",
          "onLoadedDataCapture",
          "onLoadedMetadata",
          "onLoadedMetadataCapture",
          "onLoadStart",
          "onLoadStartCapture",
          "onPause",
          "onPauseCapture",
          "onPlay",
          "onPlayCapture",
          "onPlaying",
          "onPlayingCapture",
          "onProgress",
          "onProgressCapture",
          "onRateChange",
          "onRateChangeCapture",
          "onSeeked",
          "onSeekedCapture",
          "onSeeking",
          "onSeekingCapture",
          "onStalled",
          "onStalledCapture",
          "onSuspend",
          "onSuspendCapture",
          "onTimeUpdate",
          "onTimeUpdateCapture",
          "onVolumeChange",
          "onVolumeChangeCapture",
          "onWaiting",
          "onWaitingCapture",
          "onAuxClick",
          "onAuxClickCapture",
          "onClick",
          "onClickCapture",
          "onContextMenu",
          "onContextMenuCapture",
          "onDoubleClick",
          "onDoubleClickCapture",
          "onDrag",
          "onDragCapture",
          "onDragEnd",
          "onDragEndCapture",
          "onDragEnter",
          "onDragEnterCapture",
          "onDragExit",
          "onDragExitCapture",
          "onDragLeave",
          "onDragLeaveCapture",
          "onDragOver",
          "onDragOverCapture",
          "onDragStart",
          "onDragStartCapture",
          "onDrop",
          "onDropCapture",
          "onMouseDown",
          "onMouseDownCapture",
          "onMouseEnter",
          "onMouseLeave",
          "onMouseMove",
          "onMouseMoveCapture",
          "onMouseOut",
          "onMouseOutCapture",
          "onMouseOver",
          "onMouseOverCapture",
          "onMouseUp",
          "onMouseUpCapture",
          "onSelect",
          "onSelectCapture",
          "onTouchCancel",
          "onTouchCancelCapture",
          "onTouchEnd",
          "onTouchEndCapture",
          "onTouchMove",
          "onTouchMoveCapture",
          "onTouchStart",
          "onTouchStartCapture",
          "onPointerDown",
          "onPointerDownCapture",
          "onPointerMove",
          "onPointerMoveCapture",
          "onPointerUp",
          "onPointerUpCapture",
          "onPointerCancel",
          "onPointerCancelCapture",
          "onPointerEnter",
          "onPointerEnterCapture",
          "onPointerLeave",
          "onPointerLeaveCapture",
          "onPointerOver",
          "onPointerOverCapture",
          "onPointerOut",
          "onPointerOutCapture",
          "onGotPointerCapture",
          "onGotPointerCaptureCapture",
          "onLostPointerCapture",
          "onLostPointerCaptureCapture",
          "onScroll",
          "onScrollCapture",
          "onWheel",
          "onWheelCapture",
          "onAnimationStart",
          "onAnimationStartCapture",
          "onAnimationEnd",
          "onAnimationEndCapture",
          "onAnimationIteration",
          "onAnimationIterationCapture",
          "onTransitionEnd",
          "onTransitionEndCapture",
        ],
        f = function (t, e) {
          if (!t || "function" == typeof t || "boolean" == typeof t)
            return null;
          var n = t;
          if (((0, r.isValidElement)(t) && (n = t.props), !i()(n))) return null;
          var o = {};
          return (
            Object.keys(n).forEach(function (t) {
              s.includes(t) &&
                (o[t] =
                  e ||
                  function (e) {
                    return n[t](n, e);
                  });
            }),
            o
          );
        },
        p = function (t, e, n) {
          if (!i()(t) || "object" !== a(t)) return null;
          var r = null;
          return (
            Object.keys(t).forEach(function (o) {
              var i = t[o];
              s.includes(o) &&
                "function" == typeof i &&
                (r || (r = {}),
                (r[o] = (function (t, e, n) {
                  return function (r) {
                    return t(e, n, r), null;
                  };
                })(i, e, n)));
            }),
            r
          );
        };
    },
    64836: (t) => {
      (t.exports = function (t) {
        return t && t.__esModule ? t : { default: t };
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    90512: (t, e, n) => {
      "use strict";
      function r(t) {
        var e,
          n,
          o = "";
        if ("string" == typeof t || "number" == typeof t) o += t;
        else if ("object" == typeof t)
          if (Array.isArray(t))
            for (e = 0; e < t.length; e++)
              t[e] && (n = r(t[e])) && (o && (o += " "), (o += n));
          else for (e in t) t[e] && (o && (o += " "), (o += e));
        return o;
      }
      n.d(e, { Z: () => o });
      const o = function () {
        for (var t, e, n = 0, o = ""; n < arguments.length; )
          (t = arguments[n++]) && (e = r(t)) && (o && (o += " "), (o += e));
        return o;
      };
    },
    30996: (t, e, n) => {
      "use strict";
      n.d(e, { Z: () => i, x: () => c });
      var r = n(94182),
        o = n(30780);
      function i() {
        var t,
          e,
          n = (0, o.Z)().unknown(void 0),
          a = n.domain,
          c = n.range,
          u = 0,
          l = 1,
          s = !1,
          f = 0,
          p = 0,
          h = 0.5;
        function d() {
          var n = a().length,
            r = l < u,
            o = r ? l : u,
            i = r ? u : l;
          (t = (i - o) / Math.max(1, n - f + 2 * p)),
            s && (t = Math.floor(t)),
            (o += (i - o - t * (n - f)) * h),
            (e = t * (1 - f)),
            s && ((o = Math.round(o)), (e = Math.round(e)));
          var d = (function (t, e, n) {
            (t = +t),
              (e = +e),
              (n =
                (o = arguments.length) < 2
                  ? ((e = t), (t = 0), 1)
                  : o < 3
                    ? 1
                    : +n);
            for (
              var r = -1,
                o = 0 | Math.max(0, Math.ceil((e - t) / n)),
                i = new Array(o);
              ++r < o;

            )
              i[r] = t + r * n;
            return i;
          })(n).map(function (e) {
            return o + t * e;
          });
          return c(r ? d.reverse() : d);
        }
        return (
          delete n.unknown,
          (n.domain = function (t) {
            return arguments.length ? (a(t), d()) : a();
          }),
          (n.range = function (t) {
            return arguments.length
              ? (([u, l] = t), (u = +u), (l = +l), d())
              : [u, l];
          }),
          (n.rangeRound = function (t) {
            return ([u, l] = t), (u = +u), (l = +l), (s = !0), d();
          }),
          (n.bandwidth = function () {
            return e;
          }),
          (n.step = function () {
            return t;
          }),
          (n.round = function (t) {
            return arguments.length ? ((s = !!t), d()) : s;
          }),
          (n.padding = function (t) {
            return arguments.length ? ((f = Math.min(1, (p = +t))), d()) : f;
          }),
          (n.paddingInner = function (t) {
            return arguments.length ? ((f = Math.min(1, t)), d()) : f;
          }),
          (n.paddingOuter = function (t) {
            return arguments.length ? ((p = +t), d()) : p;
          }),
          (n.align = function (t) {
            return arguments.length
              ? ((h = Math.max(0, Math.min(1, t))), d())
              : h;
          }),
          (n.copy = function () {
            return i(a(), [u, l])
              .round(s)
              .paddingInner(f)
              .paddingOuter(p)
              .align(h);
          }),
          r.o.apply(d(), arguments)
        );
      }
      function a(t) {
        var e = t.copy;
        return (
          (t.padding = t.paddingOuter),
          delete t.paddingInner,
          delete t.paddingOuter,
          (t.copy = function () {
            return a(e());
          }),
          t
        );
      }
      function c() {
        return a(i.apply(null, arguments).paddingInner(1));
      }
    },
    94182: (t, e, n) => {
      "use strict";
      function r(t, e) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            this.range(t);
            break;
          default:
            this.range(e).domain(t);
        }
        return this;
      }
      function o(t, e) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            "function" == typeof t ? this.interpolator(t) : this.range(t);
            break;
          default:
            this.domain(t),
              "function" == typeof e ? this.interpolator(e) : this.range(e);
        }
        return this;
      }
      n.d(e, { O: () => o, o: () => r });
    },
    30780: (t, e, n) => {
      "use strict";
      n.d(e, { Z: () => u, O: () => c });
      class r extends Map {
        constructor(t, e = i) {
          if (
            (super(),
            Object.defineProperties(this, {
              _intern: { value: new Map() },
              _key: { value: e },
            }),
            null != t)
          )
            for (const [e, n] of t) this.set(e, n);
        }
        get(t) {
          return super.get(o(this, t));
        }
        has(t) {
          return super.has(o(this, t));
        }
        set(t, e) {
          return super.set(
            (function ({ _intern: t, _key: e }, n) {
              const r = e(n);
              return t.has(r) ? t.get(r) : (t.set(r, n), n);
            })(this, t),
            e,
          );
        }
        delete(t) {
          return super.delete(
            (function ({ _intern: t, _key: e }, n) {
              const r = e(n);
              return t.has(r) && ((n = t.get(r)), t.delete(r)), n;
            })(this, t),
          );
        }
      }
      function o({ _intern: t, _key: e }, n) {
        const r = e(n);
        return t.has(r) ? t.get(r) : n;
      }
      function i(t) {
        return null !== t && "object" == typeof t ? t.valueOf() : t;
      }
      var a = n(94182);
      const c = Symbol("implicit");
      function u() {
        var t = new r(),
          e = [],
          n = [],
          o = c;
        function i(r) {
          let i = t.get(r);
          if (void 0 === i) {
            if (o !== c) return o;
            t.set(r, (i = e.push(r) - 1));
          }
          return n[i % n.length];
        }
        return (
          (i.domain = function (n) {
            if (!arguments.length) return e.slice();
            (e = []), (t = new r());
            for (const r of n) t.has(r) || t.set(r, e.push(r) - 1);
            return i;
          }),
          (i.range = function (t) {
            return arguments.length ? ((n = Array.from(t)), i) : n.slice();
          }),
          (i.unknown = function (t) {
            return arguments.length ? ((o = t), i) : o;
          }),
          (i.copy = function () {
            return u(e, n).unknown(o);
          }),
          a.o.apply(i, arguments),
          i
        );
      }
    },
    92889: (t, e, n) => {
      "use strict";
      function r(t) {
        return "object" == typeof t && "length" in t ? t : Array.from(t);
      }
      n.d(e, { Z: () => r }), Array.prototype.slice;
    },
    20309: (t, e, n) => {
      "use strict";
      function r(t) {
        return function () {
          return t;
        };
      }
      n.d(e, { Z: () => r });
    },
    90633: (t, e, n) => {
      "use strict";
      n.d(e, { d: () => l });
      const r = Math.PI,
        o = 2 * r,
        i = 1e-6,
        a = o - i;
      function c(t) {
        this._ += t[0];
        for (let e = 1, n = t.length; e < n; ++e) this._ += arguments[e] + t[e];
      }
      class u {
        constructor(t) {
          (this._x0 = this._y0 = this._x1 = this._y1 = null),
            (this._ = ""),
            (this._append =
              null == t
                ? c
                : (function (t) {
                    let e = Math.floor(t);
                    if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
                    if (e > 15) return c;
                    const n = 10 ** e;
                    return function (t) {
                      this._ += t[0];
                      for (let e = 1, r = t.length; e < r; ++e)
                        this._ += Math.round(arguments[e] * n) / n + t[e];
                    };
                  })(t));
        }
        moveTo(t, e) {
          this
            ._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +e)}`;
        }
        closePath() {
          null !== this._x1 &&
            ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
        }
        lineTo(t, e) {
          this._append`L${(this._x1 = +t)},${(this._y1 = +e)}`;
        }
        quadraticCurveTo(t, e, n, r) {
          this._append`Q${+t},${+e},${(this._x1 = +n)},${(this._y1 = +r)}`;
        }
        bezierCurveTo(t, e, n, r, o, i) {
          this
            ._append`C${+t},${+e},${+n},${+r},${(this._x1 = +o)},${(this._y1 = +i)}`;
        }
        arcTo(t, e, n, o, a) {
          if (((t = +t), (e = +e), (n = +n), (o = +o), (a = +a) < 0))
            throw new Error(`negative radius: ${a}`);
          let c = this._x1,
            u = this._y1,
            l = n - t,
            s = o - e,
            f = c - t,
            p = u - e,
            h = f * f + p * p;
          if (null === this._x1)
            this._append`M${(this._x1 = t)},${(this._y1 = e)}`;
          else if (h > i)
            if (Math.abs(p * l - s * f) > i && a) {
              let d = n - c,
                y = o - u,
                v = l * l + s * s,
                m = d * d + y * y,
                g = Math.sqrt(v),
                b = Math.sqrt(h),
                x =
                  a * Math.tan((r - Math.acos((v + h - m) / (2 * g * b))) / 2),
                w = x / b,
                O = x / g;
              Math.abs(w - 1) > i && this._append`L${t + w * f},${e + w * p}`,
                this
                  ._append`A${a},${a},0,0,${+(p * d > f * y)},${(this._x1 = t + O * l)},${(this._y1 = e + O * s)}`;
            } else this._append`L${(this._x1 = t)},${(this._y1 = e)}`;
        }
        arc(t, e, n, c, u, l) {
          if (((t = +t), (e = +e), (l = !!l), (n = +n) < 0))
            throw new Error(`negative radius: ${n}`);
          let s = n * Math.cos(c),
            f = n * Math.sin(c),
            p = t + s,
            h = e + f,
            d = 1 ^ l,
            y = l ? c - u : u - c;
          null === this._x1
            ? this._append`M${p},${h}`
            : (Math.abs(this._x1 - p) > i || Math.abs(this._y1 - h) > i) &&
              this._append`L${p},${h}`,
            n &&
              (y < 0 && (y = (y % o) + o),
              y > a
                ? this
                    ._append`A${n},${n},0,1,${d},${t - s},${e - f}A${n},${n},0,1,${d},${(this._x1 = p)},${(this._y1 = h)}`
                : y > i &&
                  this
                    ._append`A${n},${n},0,${+(y >= r)},${d},${(this._x1 = t + n * Math.cos(u))},${(this._y1 = e + n * Math.sin(u))}`);
        }
        rect(t, e, n, r) {
          this
            ._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +e)}h${(n = +n)}v${+r}h${-n}Z`;
        }
        toString() {
          return this._;
        }
      }
      function l(t) {
        let e = 3;
        return (
          (t.digits = function (n) {
            if (!arguments.length) return e;
            if (null == n) e = null;
            else {
              const t = Math.floor(n);
              if (!(t >= 0)) throw new RangeError(`invalid digits: ${n}`);
              e = t;
            }
            return t;
          }),
          () => new u(e)
        );
      }
      u.prototype;
    },
  },
]);
