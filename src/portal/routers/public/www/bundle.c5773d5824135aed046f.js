"use strict";
(self.webpackChunkkinetix_frontoffice =
  self.webpackChunkkinetix_frontoffice || []).push([
  [536],
  {
    87536: (e, t, r) => {
      r.d(t, { Qr: () => L, cI: () => Ae });
      var s = r(67294),
        a = (e) => "checkbox" === e.type,
        i = (e) => e instanceof Date,
        n = (e) => null == e;
      const o = (e) => "object" == typeof e;
      var u = (e) => !n(e) && !Array.isArray(e) && o(e) && !i(e),
        l = (e) =>
          u(e) && e.target
            ? a(e.target)
              ? e.target.checked
              : e.target.value
            : e,
        d = (e, t) =>
          e.has(((e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e)(t)),
        c = (e) => {
          const t = e.constructor && e.constructor.prototype;
          return u(t) && t.hasOwnProperty("isPrototypeOf");
        },
        f =
          "undefined" != typeof window &&
          void 0 !== window.HTMLElement &&
          "undefined" != typeof document;
      function m(e) {
        let t;
        const r = Array.isArray(e);
        if (e instanceof Date) t = new Date(e);
        else if (e instanceof Set) t = new Set(e);
        else {
          if (
            (f && (e instanceof Blob || e instanceof FileList)) ||
            (!r && !u(e))
          )
            return e;
          if (((t = r ? [] : {}), r || c(e)))
            for (const r in e) e.hasOwnProperty(r) && (t[r] = m(e[r]));
          else t = e;
        }
        return t;
      }
      var y = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
        h = (e) => void 0 === e,
        v = (e, t, r) => {
          if (!t || !u(e)) return r;
          const s = y(t.split(/[,[\].]+?/)).reduce(
            (e, t) => (n(e) ? e : e[t]),
            e,
          );
          return h(s) || s === e ? (h(e[t]) ? r : e[t]) : s;
        },
        g = (e) => "boolean" == typeof e;
      const b = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
        p = {
          onBlur: "onBlur",
          onChange: "onChange",
          onSubmit: "onSubmit",
          onTouched: "onTouched",
          all: "all",
        },
        _ = "pattern",
        V = "required",
        A = s.createContext(null),
        S = () => s.useContext(A);
      var F = (e, t, r, s = !0) => {
          const a = { defaultValues: t._defaultValues };
          for (const i in e)
            Object.defineProperty(a, i, {
              get: () => {
                const a = i;
                return (
                  t._proxyFormState[a] !== p.all &&
                    (t._proxyFormState[a] = !s || p.all),
                  r && (r[a] = !0),
                  e[a]
                );
              },
            });
          return a;
        },
        x = (e) => u(e) && !Object.keys(e).length,
        w = (e, t, r, s) => {
          r(e);
          const { name: a, ...i } = e;
          return (
            x(i) ||
            Object.keys(i).length >= Object.keys(t).length ||
            Object.keys(i).find((e) => t[e] === (!s || p.all))
          );
        },
        D = (e) => (Array.isArray(e) ? e : [e]),
        k = (e, t, r) =>
          !e ||
          !t ||
          e === t ||
          D(e).some(
            (e) => e && (r ? e === t : e.startsWith(t) || t.startsWith(e)),
          );
      function C(e) {
        const t = s.useRef(e);
        (t.current = e),
          s.useEffect(() => {
            const r =
              !e.disabled &&
              t.current.subject &&
              t.current.subject.subscribe({ next: t.current.next });
            return () => {
              r && r.unsubscribe();
            };
          }, [e.disabled]);
      }
      var O = (e) => "string" == typeof e,
        E = (e, t, r, s, a) =>
          O(e)
            ? (s && t.watch.add(e), v(r, e, a))
            : Array.isArray(e)
              ? e.map((e) => (s && t.watch.add(e), v(r, e)))
              : (s && (t.watchAll = !0), r),
        T = (e) => /^\w*$/.test(e),
        U = (e) => y(e.replace(/["|']|\]/g, "").split(/\.|\[/));
      function j(e, t, r) {
        let s = -1;
        const a = T(t) ? [t] : U(t),
          i = a.length,
          n = i - 1;
        for (; ++s < i; ) {
          const t = a[s];
          let i = r;
          if (s !== n) {
            const r = e[t];
            i = u(r) || Array.isArray(r) ? r : isNaN(+a[s + 1]) ? {} : [];
          }
          (e[t] = i), (e = e[t]);
        }
        return e;
      }
      const L = (e) =>
        e.render(
          (function (e) {
            const t = S(),
              {
                name: r,
                disabled: a,
                control: i = t.control,
                shouldUnregister: n,
              } = e,
              o = d(i._names.array, r),
              u = (function (e) {
                const t = S(),
                  {
                    control: r = t.control,
                    name: a,
                    defaultValue: i,
                    disabled: n,
                    exact: o,
                  } = e || {},
                  u = s.useRef(a);
                (u.current = a),
                  C({
                    disabled: n,
                    subject: r._subjects.values,
                    next: (e) => {
                      k(u.current, e.name, o) &&
                        d(
                          m(
                            E(
                              u.current,
                              r._names,
                              e.values || r._formValues,
                              !1,
                              i,
                            ),
                          ),
                        );
                    },
                  });
                const [l, d] = s.useState(r._getWatch(a, i));
                return s.useEffect(() => r._removeUnmounted()), l;
              })({
                control: i,
                name: r,
                defaultValue: v(
                  i._formValues,
                  r,
                  v(i._defaultValues, r, e.defaultValue),
                ),
                exact: !0,
              }),
              c = (function (e) {
                const t = S(),
                  {
                    control: r = t.control,
                    disabled: a,
                    name: i,
                    exact: n,
                  } = e || {},
                  [o, u] = s.useState(r._formState),
                  l = s.useRef(!0),
                  d = s.useRef({
                    isDirty: !1,
                    isLoading: !1,
                    dirtyFields: !1,
                    touchedFields: !1,
                    isValidating: !1,
                    isValid: !1,
                    errors: !1,
                  }),
                  c = s.useRef(i);
                return (
                  (c.current = i),
                  C({
                    disabled: a,
                    next: (e) =>
                      l.current &&
                      k(c.current, e.name, n) &&
                      w(e, d.current, r._updateFormState) &&
                      u({ ...r._formState, ...e }),
                    subject: r._subjects.state,
                  }),
                  s.useEffect(
                    () => (
                      (l.current = !0),
                      d.current.isValid && r._updateValid(!0),
                      () => {
                        l.current = !1;
                      }
                    ),
                    [r],
                  ),
                  F(o, r, d.current, !1)
                );
              })({ control: i, name: r }),
              f = s.useRef(i.register(r, { ...e.rules, value: u }));
            return (
              (f.current = i.register(r, e.rules)),
              s.useEffect(() => {
                const e = i._options.shouldUnregister || n,
                  t = (e, t) => {
                    const r = v(i._fields, e);
                    r && (r._f.mount = t);
                  };
                if ((t(r, !0), e)) {
                  const e = m(v(i._options.defaultValues, r));
                  j(i._defaultValues, r, e),
                    h(v(i._formValues, r)) && j(i._formValues, r, e);
                }
                return () => {
                  (o ? e && !i._state.action : e) ? i.unregister(r) : t(r, !1);
                };
              }, [r, i, o, n]),
              s.useEffect(() => {
                v(i._fields, r) &&
                  i._updateDisabledField({
                    disabled: a,
                    fields: i._fields,
                    name: r,
                    value: v(i._fields, r)._f.value,
                  });
              }, [a, r, i]),
              {
                field: {
                  name: r,
                  value: u,
                  ...(g(a) || g(c.disabled)
                    ? { disabled: c.disabled || a }
                    : {}),
                  onChange: s.useCallback(
                    (e) =>
                      f.current.onChange({
                        target: { value: l(e), name: r },
                        type: b.CHANGE,
                      }),
                    [r],
                  ),
                  onBlur: s.useCallback(
                    () =>
                      f.current.onBlur({
                        target: { value: v(i._formValues, r), name: r },
                        type: b.BLUR,
                      }),
                    [r, i],
                  ),
                  ref: (e) => {
                    const t = v(i._fields, r);
                    t &&
                      e &&
                      (t._f.ref = {
                        focus: () => e.focus(),
                        select: () => e.select(),
                        setCustomValidity: (t) => e.setCustomValidity(t),
                        reportValidity: () => e.reportValidity(),
                      });
                  },
                },
                formState: c,
                fieldState: Object.defineProperties(
                  {},
                  {
                    invalid: { enumerable: !0, get: () => !!v(c.errors, r) },
                    isDirty: {
                      enumerable: !0,
                      get: () => !!v(c.dirtyFields, r),
                    },
                    isTouched: {
                      enumerable: !0,
                      get: () => !!v(c.touchedFields, r),
                    },
                    error: { enumerable: !0, get: () => v(c.errors, r) },
                  },
                ),
              }
            );
          })(e),
        );
      var B = (e, t, r, s, a) =>
          t
            ? {
                ...r[e],
                types: {
                  ...(r[e] && r[e].types ? r[e].types : {}),
                  [s]: a || !0,
                },
              }
            : {},
        N = (e) => ({
          isOnSubmit: !e || e === p.onSubmit,
          isOnBlur: e === p.onBlur,
          isOnChange: e === p.onChange,
          isOnAll: e === p.all,
          isOnTouch: e === p.onTouched,
        }),
        M = (e, t, r) =>
          !r &&
          (t.watchAll ||
            t.watch.has(e) ||
            [...t.watch].some(
              (t) => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length)),
            ));
      const R = (e, t, r, s) => {
        for (const a of r || Object.keys(e)) {
          const r = v(e, a);
          if (r) {
            const { _f: e, ...i } = r;
            if (e) {
              if (e.refs && e.refs[0] && t(e.refs[0], a) && !s) break;
              if (e.ref && t(e.ref, e.name) && !s) break;
            } else u(i) && R(i, t);
          }
        }
      };
      var q = (e, t, r) => {
          const s = y(v(e, r));
          return j(s, "root", t[r]), j(e, r, s), e;
        },
        P = (e) => "file" === e.type,
        H = (e) => "function" == typeof e,
        I = (e) => {
          if (!f) return !1;
          const t = e ? e.ownerDocument : 0;
          return (
            e instanceof
            (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
          );
        },
        W = (e) => O(e),
        $ = (e) => "radio" === e.type,
        G = (e) => e instanceof RegExp;
      const Q = { value: !1, isValid: !1 },
        z = { value: !0, isValid: !0 };
      var J = (e) => {
        if (Array.isArray(e)) {
          if (e.length > 1) {
            const t = e
              .filter((e) => e && e.checked && !e.disabled)
              .map((e) => e.value);
            return { value: t, isValid: !!t.length };
          }
          return e[0].checked && !e[0].disabled
            ? e[0].attributes && !h(e[0].attributes.value)
              ? h(e[0].value) || "" === e[0].value
                ? z
                : { value: e[0].value, isValid: !0 }
              : z
            : Q;
        }
        return Q;
      };
      const K = { isValid: !1, value: null };
      var X = (e) =>
        Array.isArray(e)
          ? e.reduce(
              (e, t) =>
                t && t.checked && !t.disabled
                  ? { isValid: !0, value: t.value }
                  : e,
              K,
            )
          : K;
      function Y(e, t, r = "validate") {
        if (W(e) || (Array.isArray(e) && e.every(W)) || (g(e) && !e))
          return { type: r, message: W(e) ? e : "", ref: t };
      }
      var Z = (e) => (u(e) && !G(e) ? e : { value: e, message: "" }),
        ee = async (e, t, r, s, i) => {
          const {
              ref: o,
              refs: l,
              required: d,
              maxLength: c,
              minLength: f,
              min: m,
              max: y,
              pattern: b,
              validate: p,
              name: A,
              valueAsNumber: S,
              mount: F,
              disabled: w,
            } = e._f,
            D = v(t, A);
          if (!F || w) return {};
          const k = l ? l[0] : o,
            C = (e) => {
              s &&
                k.reportValidity &&
                (k.setCustomValidity(g(e) ? "" : e || ""), k.reportValidity());
            },
            E = {},
            T = $(o),
            U = a(o),
            j = T || U,
            L =
              ((S || P(o)) && h(o.value) && h(D)) ||
              (I(o) && "" === o.value) ||
              "" === D ||
              (Array.isArray(D) && !D.length),
            N = B.bind(null, A, r, E),
            M = (e, t, r, s = "maxLength", a = "minLength") => {
              const i = e ? t : r;
              E[A] = {
                type: e ? s : a,
                message: i,
                ref: o,
                ...N(e ? s : a, i),
              };
            };
          if (
            i
              ? !Array.isArray(D) || !D.length
              : d &&
                ((!j && (L || n(D))) ||
                  (g(D) && !D) ||
                  (U && !J(l).isValid) ||
                  (T && !X(l).isValid))
          ) {
            const { value: e, message: t } = W(d)
              ? { value: !!d, message: d }
              : Z(d);
            if (e && ((E[A] = { type: V, message: t, ref: k, ...N(V, t) }), !r))
              return C(t), E;
          }
          if (!(L || (n(m) && n(y)))) {
            let e, t;
            const s = Z(y),
              a = Z(m);
            if (n(D) || isNaN(D)) {
              const r = o.valueAsDate || new Date(D),
                i = (e) => new Date(new Date().toDateString() + " " + e),
                n = "time" == o.type,
                u = "week" == o.type;
              O(s.value) &&
                D &&
                (e = n
                  ? i(D) > i(s.value)
                  : u
                    ? D > s.value
                    : r > new Date(s.value)),
                O(a.value) &&
                  D &&
                  (t = n
                    ? i(D) < i(a.value)
                    : u
                      ? D < a.value
                      : r < new Date(a.value));
            } else {
              const r = o.valueAsNumber || (D ? +D : D);
              n(s.value) || (e = r > s.value), n(a.value) || (t = r < a.value);
            }
            if ((e || t) && (M(!!e, s.message, a.message, "max", "min"), !r))
              return C(E[A].message), E;
          }
          if ((c || f) && !L && (O(D) || (i && Array.isArray(D)))) {
            const e = Z(c),
              t = Z(f),
              s = !n(e.value) && D.length > +e.value,
              a = !n(t.value) && D.length < +t.value;
            if ((s || a) && (M(s, e.message, t.message), !r))
              return C(E[A].message), E;
          }
          if (b && !L && O(D)) {
            const { value: e, message: t } = Z(b);
            if (
              G(e) &&
              !D.match(e) &&
              ((E[A] = { type: _, message: t, ref: o, ...N(_, t) }), !r)
            )
              return C(t), E;
          }
          if (p)
            if (H(p)) {
              const e = Y(await p(D, t), k);
              if (e && ((E[A] = { ...e, ...N("validate", e.message) }), !r))
                return C(e.message), E;
            } else if (u(p)) {
              let e = {};
              for (const s in p) {
                if (!x(e) && !r) break;
                const a = Y(await p[s](D, t), k, s);
                a &&
                  ((e = { ...a, ...N(s, a.message) }),
                  C(a.message),
                  r && (E[A] = e));
              }
              if (!x(e) && ((E[A] = { ref: k, ...e }), !r)) return E;
            }
          return C(!0), E;
        };
      function te(e, t) {
        const r = Array.isArray(t) ? t : T(t) ? [t] : U(t),
          s =
            1 === r.length
              ? e
              : (function (e, t) {
                  const r = t.slice(0, -1).length;
                  let s = 0;
                  for (; s < r; ) e = h(e) ? s++ : e[t[s++]];
                  return e;
                })(e, r),
          a = r.length - 1,
          i = r[a];
        return (
          s && delete s[i],
          0 !== a &&
            ((u(s) && x(s)) ||
              (Array.isArray(s) &&
                (function (e) {
                  for (const t in e)
                    if (e.hasOwnProperty(t) && !h(e[t])) return !1;
                  return !0;
                })(s))) &&
            te(e, r.slice(0, -1)),
          e
        );
      }
      function re() {
        let e = [];
        return {
          get observers() {
            return e;
          },
          next: (t) => {
            for (const r of e) r.next && r.next(t);
          },
          subscribe: (t) => (
            e.push(t),
            {
              unsubscribe: () => {
                e = e.filter((e) => e !== t);
              },
            }
          ),
          unsubscribe: () => {
            e = [];
          },
        };
      }
      var se = (e) => n(e) || !o(e);
      function ae(e, t) {
        if (se(e) || se(t)) return e === t;
        if (i(e) && i(t)) return e.getTime() === t.getTime();
        const r = Object.keys(e),
          s = Object.keys(t);
        if (r.length !== s.length) return !1;
        for (const a of r) {
          const r = e[a];
          if (!s.includes(a)) return !1;
          if ("ref" !== a) {
            const e = t[a];
            if (
              (i(r) && i(e)) ||
              (u(r) && u(e)) ||
              (Array.isArray(r) && Array.isArray(e))
                ? !ae(r, e)
                : r !== e
            )
              return !1;
          }
        }
        return !0;
      }
      var ie = (e) => "select-multiple" === e.type,
        ne = (e) => $(e) || a(e),
        oe = (e) => I(e) && e.isConnected,
        ue = (e) => {
          for (const t in e) if (H(e[t])) return !0;
          return !1;
        };
      function le(e, t = {}) {
        const r = Array.isArray(e);
        if (u(e) || r)
          for (const r in e)
            Array.isArray(e[r]) || (u(e[r]) && !ue(e[r]))
              ? ((t[r] = Array.isArray(e[r]) ? [] : {}), le(e[r], t[r]))
              : n(e[r]) || (t[r] = !0);
        return t;
      }
      function de(e, t, r) {
        const s = Array.isArray(e);
        if (u(e) || s)
          for (const s in e)
            Array.isArray(e[s]) || (u(e[s]) && !ue(e[s]))
              ? h(t) || se(r[s])
                ? (r[s] = Array.isArray(e[s]) ? le(e[s], []) : { ...le(e[s]) })
                : de(e[s], n(t) ? {} : t[s], r[s])
              : (r[s] = !ae(e[s], t[s]));
        return r;
      }
      var ce = (e, t) => de(e, t, le(t)),
        fe = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: s }) =>
          h(e)
            ? e
            : t
              ? "" === e
                ? NaN
                : e
                  ? +e
                  : e
              : r && O(e)
                ? new Date(e)
                : s
                  ? s(e)
                  : e;
      function me(e) {
        const t = e.ref;
        if (!(e.refs ? e.refs.every((e) => e.disabled) : t.disabled))
          return P(t)
            ? t.files
            : $(t)
              ? X(e.refs).value
              : ie(t)
                ? [...t.selectedOptions].map(({ value: e }) => e)
                : a(t)
                  ? J(e.refs).value
                  : fe(h(t.value) ? e.ref.value : t.value, e);
      }
      var ye = (e, t, r, s) => {
          const a = {};
          for (const r of e) {
            const e = v(t, r);
            e && j(a, r, e._f);
          }
          return {
            criteriaMode: r,
            names: [...e],
            fields: a,
            shouldUseNativeValidation: s,
          };
        },
        he = (e) =>
          h(e)
            ? e
            : G(e)
              ? e.source
              : u(e)
                ? G(e.value)
                  ? e.value.source
                  : e.value
                : e,
        ve = (e) =>
          e.mount &&
          (e.required ||
            e.min ||
            e.max ||
            e.maxLength ||
            e.minLength ||
            e.pattern ||
            e.validate);
      function ge(e, t, r) {
        const s = v(e, r);
        if (s || T(r)) return { error: s, name: r };
        const a = r.split(".");
        for (; a.length; ) {
          const s = a.join("."),
            i = v(t, s),
            n = v(e, s);
          if (i && !Array.isArray(i) && r !== s) return { name: r };
          if (n && n.type) return { name: s, error: n };
          a.pop();
        }
        return { name: r };
      }
      var be = (e, t, r, s, a) =>
          !a.isOnAll &&
          (!r && a.isOnTouch
            ? !(t || e)
            : (r ? s.isOnBlur : a.isOnBlur)
              ? !e
              : !(r ? s.isOnChange : a.isOnChange) || e),
        pe = (e, t) => !y(v(e, t)).length && te(e, t);
      const _e = {
        mode: p.onSubmit,
        reValidateMode: p.onChange,
        shouldFocusError: !0,
      };
      function Ve(e = {}, t) {
        let r,
          s = { ..._e, ...e },
          o = {
            submitCount: 0,
            isDirty: !1,
            isLoading: H(s.defaultValues),
            isValidating: !1,
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            touchedFields: {},
            dirtyFields: {},
            errors: {},
            disabled: !1,
          },
          c = {},
          _ =
            ((u(s.defaultValues) || u(s.values)) &&
              m(s.defaultValues || s.values)) ||
            {},
          V = s.shouldUnregister ? {} : m(_),
          A = { action: !1, mount: !1, watch: !1 },
          S = {
            mount: new Set(),
            unMount: new Set(),
            array: new Set(),
            watch: new Set(),
          },
          F = 0;
        const w = {
            isDirty: !1,
            dirtyFields: !1,
            touchedFields: !1,
            isValidating: !1,
            isValid: !1,
            errors: !1,
          },
          k = { values: re(), array: re(), state: re() },
          C = e.resetOptions && e.resetOptions.keepDirtyValues,
          T = N(s.mode),
          U = N(s.reValidateMode),
          L = s.criteriaMode === p.all,
          B = async (e) => {
            if (w.isValid || e) {
              const e = s.resolver ? x((await Q()).errors) : await z(c, !0);
              e !== o.isValid && k.state.next({ isValid: e });
            }
          },
          W = (e) => w.isValidating && k.state.next({ isValidating: e }),
          $ = (e, t, r, s) => {
            const a = v(c, e);
            if (a) {
              const i = v(V, e, h(r) ? v(_, e) : r);
              h(i) || (s && s.defaultChecked) || t
                ? j(V, e, t ? i : me(a._f))
                : X(e, i),
                A.mount && B();
            }
          },
          G = (e, t, r, s, a) => {
            let i = !1,
              n = !1;
            const u = { name: e };
            if (!r || s) {
              w.isDirty &&
                ((n = o.isDirty),
                (o.isDirty = u.isDirty = J()),
                (i = n !== u.isDirty));
              const r = ae(v(_, e), t);
              (n = v(o.dirtyFields, e)),
                r ? te(o.dirtyFields, e) : j(o.dirtyFields, e, !0),
                (u.dirtyFields = o.dirtyFields),
                (i = i || (w.dirtyFields && n !== !r));
            }
            if (r) {
              const t = v(o.touchedFields, e);
              t ||
                (j(o.touchedFields, e, r),
                (u.touchedFields = o.touchedFields),
                (i = i || (w.touchedFields && t !== r)));
            }
            return i && a && k.state.next(u), i ? u : {};
          },
          Q = async (e) =>
            s.resolver(
              V,
              s.context,
              ye(e || S.mount, c, s.criteriaMode, s.shouldUseNativeValidation),
            ),
          z = async (e, t, r = { valid: !0 }) => {
            for (const a in e) {
              const i = e[a];
              if (i) {
                const { _f: e, ...a } = i;
                if (e) {
                  const a = S.array.has(e.name),
                    n = await ee(i, V, L, s.shouldUseNativeValidation && !t, a);
                  if (n[e.name] && ((r.valid = !1), t)) break;
                  !t &&
                    (v(n, e.name)
                      ? a
                        ? q(o.errors, n, e.name)
                        : j(o.errors, e.name, n[e.name])
                      : te(o.errors, e.name));
                }
                a && (await z(a, t, r));
              }
            }
            return r.valid;
          },
          J = (e, t) => (e && t && j(V, e, t), !ae(Ve(), _)),
          K = (e, t, r) =>
            E(
              e,
              S,
              { ...(A.mount ? V : h(t) ? _ : O(e) ? { [e]: t } : t) },
              r,
              t,
            ),
          X = (e, t, r = {}) => {
            const s = v(c, e);
            let i = t;
            if (s) {
              const r = s._f;
              r &&
                (!r.disabled && j(V, e, fe(t, r)),
                (i = I(r.ref) && n(t) ? "" : t),
                ie(r.ref)
                  ? [...r.ref.options].forEach(
                      (e) => (e.selected = i.includes(e.value)),
                    )
                  : r.refs
                    ? a(r.ref)
                      ? r.refs.length > 1
                        ? r.refs.forEach(
                            (e) =>
                              (!e.defaultChecked || !e.disabled) &&
                              (e.checked = Array.isArray(i)
                                ? !!i.find((t) => t === e.value)
                                : i === e.value),
                          )
                        : r.refs[0] && (r.refs[0].checked = !!i)
                      : r.refs.forEach((e) => (e.checked = e.value === i))
                    : P(r.ref)
                      ? (r.ref.value = "")
                      : ((r.ref.value = i),
                        r.ref.type ||
                          k.values.next({ name: e, values: { ...V } })));
            }
            (r.shouldDirty || r.shouldTouch) &&
              G(e, i, r.shouldTouch, r.shouldDirty, !0),
              r.shouldValidate && de(e);
          },
          Y = (e, t, r) => {
            for (const s in t) {
              const a = t[s],
                n = `${e}.${s}`,
                o = v(c, n);
              (!S.array.has(e) && se(a) && (!o || o._f)) || i(a)
                ? X(n, a, r)
                : Y(n, a, r);
            }
          },
          Z = (e, r, s = {}) => {
            const a = v(c, e),
              i = S.array.has(e),
              u = m(r);
            j(V, e, u),
              i
                ? (k.array.next({ name: e, values: { ...V } }),
                  (w.isDirty || w.dirtyFields) &&
                    s.shouldDirty &&
                    k.state.next({
                      name: e,
                      dirtyFields: ce(_, V),
                      isDirty: J(e, u),
                    }))
                : !a || a._f || n(u)
                  ? X(e, u, s)
                  : Y(e, u, s),
              M(e, S) && k.state.next({ ...o }),
              k.values.next({ name: e, values: { ...V } }),
              !A.mount && t();
          },
          ue = async (t) => {
            const a = t.target;
            let i = a.name,
              n = !0;
            const u = v(c, i),
              d = (e) => {
                n = Number.isNaN(e) || e === v(V, i, e);
              };
            if (u) {
              let f, m;
              const y = a.type ? me(u._f) : l(t),
                h = t.type === b.BLUR || t.type === b.FOCUS_OUT,
                p =
                  (!ve(u._f) && !s.resolver && !v(o.errors, i) && !u._f.deps) ||
                  be(h, v(o.touchedFields, i), o.isSubmitted, U, T),
                _ = M(i, S, h);
              j(V, i, y),
                h
                  ? (u._f.onBlur && u._f.onBlur(t), r && r(0))
                  : u._f.onChange && u._f.onChange(t);
              const A = G(i, y, h, !1),
                D = !x(A) || _;
              if (
                (!h &&
                  k.values.next({ name: i, type: t.type, values: { ...V } }),
                p)
              )
                return (
                  w.isValid && B(),
                  D && k.state.next({ name: i, ...(_ ? {} : A) })
                );
              if ((!h && _ && k.state.next({ ...o }), W(!0), s.resolver)) {
                const { errors: e } = await Q([i]);
                if ((d(y), n)) {
                  const t = ge(o.errors, c, i),
                    r = ge(e, c, t.name || i);
                  (f = r.error), (i = r.name), (m = x(e));
                }
              } else
                (f = (await ee(u, V, L, s.shouldUseNativeValidation))[i]),
                  d(y),
                  n && (f ? (m = !1) : w.isValid && (m = await z(c, !0)));
              n &&
                (u._f.deps && de(u._f.deps),
                ((t, s, a, i) => {
                  const n = v(o.errors, t),
                    u = w.isValid && g(s) && o.isValid !== s;
                  var l;
                  if (
                    (e.delayError && a
                      ? ((l = () =>
                          ((e, t) => {
                            j(o.errors, e, t),
                              k.state.next({ errors: o.errors });
                          })(t, a)),
                        (r = (e) => {
                          clearTimeout(F), (F = setTimeout(l, e));
                        }),
                        r(e.delayError))
                      : (clearTimeout(F),
                        (r = null),
                        a ? j(o.errors, t, a) : te(o.errors, t)),
                    (a ? !ae(n, a) : n) || !x(i) || u)
                  ) {
                    const e = {
                      ...i,
                      ...(u && g(s) ? { isValid: s } : {}),
                      errors: o.errors,
                      name: t,
                    };
                    (o = { ...o, ...e }), k.state.next(e);
                  }
                  W(!1);
                })(i, m, f, A));
            }
          },
          le = (e, t) => {
            if (v(o.errors, t) && e.focus) return e.focus(), 1;
          },
          de = async (e, t = {}) => {
            let r, a;
            const i = D(e);
            if ((W(!0), s.resolver)) {
              const t = await (async (e) => {
                const { errors: t } = await Q(e);
                if (e)
                  for (const r of e) {
                    const e = v(t, r);
                    e ? j(o.errors, r, e) : te(o.errors, r);
                  }
                else o.errors = t;
                return t;
              })(h(e) ? e : i);
              (r = x(t)), (a = e ? !i.some((e) => v(t, e)) : r);
            } else
              e
                ? ((a = (
                    await Promise.all(
                      i.map(async (e) => {
                        const t = v(c, e);
                        return await z(t && t._f ? { [e]: t } : t);
                      }),
                    )
                  ).every(Boolean)),
                  (a || o.isValid) && B())
                : (a = r = await z(c));
            return (
              k.state.next({
                ...(!O(e) || (w.isValid && r !== o.isValid) ? {} : { name: e }),
                ...(s.resolver || !e ? { isValid: r } : {}),
                errors: o.errors,
                isValidating: !1,
              }),
              t.shouldFocus && !a && R(c, le, e ? i : S.mount),
              a
            );
          },
          Ve = (e) => {
            const t = { ..._, ...(A.mount ? V : {}) };
            return h(e) ? t : O(e) ? v(t, e) : e.map((e) => v(t, e));
          },
          Ae = (e, t) => ({
            invalid: !!v((t || o).errors, e),
            isDirty: !!v((t || o).dirtyFields, e),
            isTouched: !!v((t || o).touchedFields, e),
            error: v((t || o).errors, e),
          }),
          Se = (e, t, r) => {
            const s = (v(c, e, { _f: {} })._f || {}).ref;
            j(o.errors, e, { ...t, ref: s }),
              k.state.next({ name: e, errors: o.errors, isValid: !1 }),
              r && r.shouldFocus && s && s.focus && s.focus();
          },
          Fe = (e, t = {}) => {
            for (const r of e ? D(e) : S.mount)
              S.mount.delete(r),
                S.array.delete(r),
                t.keepValue || (te(c, r), te(V, r)),
                !t.keepError && te(o.errors, r),
                !t.keepDirty && te(o.dirtyFields, r),
                !t.keepTouched && te(o.touchedFields, r),
                !s.shouldUnregister && !t.keepDefaultValue && te(_, r);
            k.values.next({ values: { ...V } }),
              k.state.next({ ...o, ...(t.keepDirty ? { isDirty: J() } : {}) }),
              !t.keepIsValid && B();
          },
          xe = ({ disabled: e, name: t, field: r, fields: s, value: a }) => {
            if (g(e)) {
              const i = e ? void 0 : h(a) ? me(r ? r._f : v(s, t)._f) : a;
              j(V, t, i), G(t, i, !1, !1, !0);
            }
          },
          we = (e, t = {}) => {
            let r = v(c, e);
            const a = g(t.disabled);
            return (
              j(c, e, {
                ...(r || {}),
                _f: {
                  ...(r && r._f ? r._f : { ref: { name: e } }),
                  name: e,
                  mount: !0,
                  ...t,
                },
              }),
              S.mount.add(e),
              r
                ? xe({ field: r, disabled: t.disabled, name: e })
                : $(e, !0, t.value),
              {
                ...(a ? { disabled: t.disabled } : {}),
                ...(s.progressive
                  ? {
                      required: !!t.required,
                      min: he(t.min),
                      max: he(t.max),
                      minLength: he(t.minLength),
                      maxLength: he(t.maxLength),
                      pattern: he(t.pattern),
                    }
                  : {}),
                name: e,
                onChange: ue,
                onBlur: ue,
                ref: (a) => {
                  if (a) {
                    we(e, t), (r = v(c, e));
                    const s =
                        (h(a.value) &&
                          a.querySelectorAll &&
                          a.querySelectorAll("input,select,textarea")[0]) ||
                        a,
                      i = ne(s),
                      n = r._f.refs || [];
                    if (i ? n.find((e) => e === s) : s === r._f.ref) return;
                    j(c, e, {
                      _f: {
                        ...r._f,
                        ...(i
                          ? {
                              refs: [
                                ...n.filter(oe),
                                s,
                                ...(Array.isArray(v(_, e)) ? [{}] : []),
                              ],
                              ref: { type: s.type, name: e },
                            }
                          : { ref: s }),
                      },
                    }),
                      $(e, !1, void 0, s);
                  } else
                    (r = v(c, e, {})),
                      r._f && (r._f.mount = !1),
                      (s.shouldUnregister || t.shouldUnregister) &&
                        (!d(S.array, e) || !A.action) &&
                        S.unMount.add(e);
                },
              }
            );
          },
          De = () => s.shouldFocusError && R(c, le, S.mount),
          ke = (e, t) => async (r) => {
            r &&
              (r.preventDefault && r.preventDefault(),
              r.persist && r.persist());
            let a = m(V);
            if ((k.state.next({ isSubmitting: !0 }), s.resolver)) {
              const { errors: e, values: t } = await Q();
              (o.errors = e), (a = t);
            } else await z(c);
            te(o.errors, "root"),
              x(o.errors)
                ? (k.state.next({ errors: {} }), await e(a, r))
                : (t && (await t({ ...o.errors }, r)), De(), setTimeout(De)),
              k.state.next({
                isSubmitted: !0,
                isSubmitting: !1,
                isSubmitSuccessful: x(o.errors),
                submitCount: o.submitCount + 1,
                errors: o.errors,
              });
          },
          Ce = (r, s = {}) => {
            const a = r ? m(r) : _,
              i = m(a),
              n = r && !x(r) ? i : _;
            if ((s.keepDefaultValues || (_ = a), !s.keepValues)) {
              if (s.keepDirtyValues || C)
                for (const e of S.mount)
                  v(o.dirtyFields, e) ? j(n, e, v(V, e)) : Z(e, v(n, e));
              else {
                if (f && h(r))
                  for (const e of S.mount) {
                    const t = v(c, e);
                    if (t && t._f) {
                      const e = Array.isArray(t._f.refs)
                        ? t._f.refs[0]
                        : t._f.ref;
                      if (I(e)) {
                        const t = e.closest("form");
                        if (t) {
                          t.reset();
                          break;
                        }
                      }
                    }
                  }
                c = {};
              }
              (V = e.shouldUnregister
                ? s.keepDefaultValues
                  ? m(_)
                  : {}
                : m(n)),
                k.array.next({ values: { ...n } }),
                k.values.next({ values: { ...n } });
            }
            (S = {
              mount: new Set(),
              unMount: new Set(),
              array: new Set(),
              watch: new Set(),
              watchAll: !1,
              focus: "",
            }),
              !A.mount && t(),
              (A.mount = !w.isValid || !!s.keepIsValid),
              (A.watch = !!e.shouldUnregister),
              k.state.next({
                submitCount: s.keepSubmitCount ? o.submitCount : 0,
                isDirty: s.keepDirty
                  ? o.isDirty
                  : !(!s.keepDefaultValues || ae(r, _)),
                isSubmitted: !!s.keepIsSubmitted && o.isSubmitted,
                dirtyFields: s.keepDirtyValues
                  ? o.dirtyFields
                  : s.keepDefaultValues && r
                    ? ce(_, r)
                    : {},
                touchedFields: s.keepTouched ? o.touchedFields : {},
                errors: s.keepErrors ? o.errors : {},
                isSubmitSuccessful:
                  !!s.keepIsSubmitSuccessful && o.isSubmitSuccessful,
                isSubmitting: !1,
              });
          },
          Oe = (e, t) => Ce(H(e) ? e(V) : e, t);
        return {
          control: {
            register: we,
            unregister: Fe,
            getFieldState: Ae,
            handleSubmit: ke,
            setError: Se,
            _executeSchema: Q,
            _getWatch: K,
            _getDirty: J,
            _updateValid: B,
            _removeUnmounted: () => {
              for (const e of S.unMount) {
                const t = v(c, e);
                t &&
                  (t._f.refs
                    ? t._f.refs.every((e) => !oe(e))
                    : !oe(t._f.ref)) &&
                  Fe(e);
              }
              S.unMount = new Set();
            },
            _updateFieldArray: (e, t = [], r, s, a = !0, i = !0) => {
              if (s && r) {
                if (((A.action = !0), i && Array.isArray(v(c, e)))) {
                  const t = r(v(c, e), s.argA, s.argB);
                  a && j(c, e, t);
                }
                if (i && Array.isArray(v(o.errors, e))) {
                  const t = r(v(o.errors, e), s.argA, s.argB);
                  a && j(o.errors, e, t), pe(o.errors, e);
                }
                if (
                  w.touchedFields &&
                  i &&
                  Array.isArray(v(o.touchedFields, e))
                ) {
                  const t = r(v(o.touchedFields, e), s.argA, s.argB);
                  a && j(o.touchedFields, e, t);
                }
                w.dirtyFields && (o.dirtyFields = ce(_, V)),
                  k.state.next({
                    name: e,
                    isDirty: J(e, t),
                    dirtyFields: o.dirtyFields,
                    errors: o.errors,
                    isValid: o.isValid,
                  });
              } else j(V, e, t);
            },
            _updateDisabledField: xe,
            _getFieldArray: (t) =>
              y(v(A.mount ? V : _, t, e.shouldUnregister ? v(_, t, []) : [])),
            _reset: Ce,
            _resetDefaultValues: () =>
              H(s.defaultValues) &&
              s.defaultValues().then((e) => {
                Oe(e, s.resetOptions), k.state.next({ isLoading: !1 });
              }),
            _updateFormState: (e) => {
              o = { ...o, ...e };
            },
            _disableForm: (e) => {
              g(e) &&
                (k.state.next({ disabled: e }),
                R(
                  c,
                  (t) => {
                    t.disabled = e;
                  },
                  0,
                  !1,
                ));
            },
            _subjects: k,
            _proxyFormState: w,
            get _fields() {
              return c;
            },
            get _formValues() {
              return V;
            },
            get _state() {
              return A;
            },
            set _state(e) {
              A = e;
            },
            get _defaultValues() {
              return _;
            },
            get _names() {
              return S;
            },
            set _names(e) {
              S = e;
            },
            get _formState() {
              return o;
            },
            set _formState(e) {
              o = e;
            },
            get _options() {
              return s;
            },
            set _options(e) {
              s = { ...s, ...e };
            },
          },
          trigger: de,
          register: we,
          handleSubmit: ke,
          watch: (e, t) =>
            H(e)
              ? k.values.subscribe({ next: (r) => e(K(void 0, t), r) })
              : K(e, t, !0),
          setValue: Z,
          getValues: Ve,
          reset: Oe,
          resetField: (e, t = {}) => {
            v(c, e) &&
              (h(t.defaultValue)
                ? Z(e, v(_, e))
                : (Z(e, t.defaultValue), j(_, e, t.defaultValue)),
              t.keepTouched || te(o.touchedFields, e),
              t.keepDirty ||
                (te(o.dirtyFields, e),
                (o.isDirty = t.defaultValue ? J(e, v(_, e)) : J())),
              t.keepError || (te(o.errors, e), w.isValid && B()),
              k.state.next({ ...o }));
          },
          clearErrors: (e) => {
            e && D(e).forEach((e) => te(o.errors, e)),
              k.state.next({ errors: e ? o.errors : {} });
          },
          unregister: Fe,
          setError: Se,
          setFocus: (e, t = {}) => {
            const r = v(c, e),
              s = r && r._f;
            if (s) {
              const e = s.refs ? s.refs[0] : s.ref;
              e.focus && (e.focus(), t.shouldSelect && e.select());
            }
          },
          getFieldState: Ae,
        };
      }
      function Ae(e = {}) {
        const t = s.useRef(),
          r = s.useRef(),
          [a, i] = s.useState({
            isDirty: !1,
            isValidating: !1,
            isLoading: H(e.defaultValues),
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            submitCount: 0,
            dirtyFields: {},
            touchedFields: {},
            errors: {},
            disabled: !1,
            defaultValues: H(e.defaultValues) ? void 0 : e.defaultValues,
          });
        t.current ||
          (t.current = { ...Ve(e, () => i((e) => ({ ...e }))), formState: a });
        const n = t.current.control;
        return (
          (n._options = e),
          C({
            subject: n._subjects.state,
            next: (e) => {
              w(e, n._proxyFormState, n._updateFormState, !0) &&
                i({ ...n._formState });
            },
          }),
          s.useEffect(() => n._disableForm(e.disabled), [n, e.disabled]),
          s.useEffect(() => {
            if (n._proxyFormState.isDirty) {
              const e = n._getDirty();
              e !== a.isDirty && n._subjects.state.next({ isDirty: e });
            }
          }, [n, a.isDirty]),
          s.useEffect(() => {
            e.values && !ae(e.values, r.current)
              ? (n._reset(e.values, n._options.resetOptions),
                (r.current = e.values))
              : n._resetDefaultValues();
          }, [e.values, n]),
          s.useEffect(() => {
            n._state.mount || (n._updateValid(), (n._state.mount = !0)),
              n._state.watch &&
                ((n._state.watch = !1),
                n._subjects.state.next({ ...n._formState })),
              n._removeUnmounted();
          }),
          (t.current.formState = F(a, n)),
          t.current
        );
      }
    },
  },
]);
