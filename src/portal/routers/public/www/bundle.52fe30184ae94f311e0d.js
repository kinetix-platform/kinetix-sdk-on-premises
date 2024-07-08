"use strict";
(self.webpackChunkkinetix_frontoffice =
  self.webpackChunkkinetix_frontoffice || []).push([
  [720],
  {
    53021: (e, n, t) => {
      t.r(n), t.d(n, { default: () => p });
      var a = t(85893),
        i = t(67294),
        r = t(27306),
        l = t(89250);
      const o = t.p + "43654d227106a055b518.png";
      var c = t(48397),
        u = t(19010),
        s = t(5813),
        d = function () {
          return (
            (d =
              Object.assign ||
              function (e) {
                for (var n, t = 1, a = arguments.length; t < a; t++)
                  for (var i in (n = arguments[t]))
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                return e;
              }),
            d.apply(this, arguments)
          );
        };
      const f = function (e) {
        var n = e.children;
        return (0, a.jsx)(
          "div",
          d(
            { className: "w-32 h-32 bg-surface-20 overflow-hidden rounded-xl" },
            { children: n },
          ),
        );
      };
      const h = function (e, n) {
        return (
          (t = void 0),
          (a = void 0),
          (r = function () {
            return (function (e, n) {
              var t,
                a,
                i,
                r,
                l = {
                  label: 0,
                  sent: function () {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (r = { next: o(0), throw: o(1), return: o(2) }),
                "function" == typeof Symbol &&
                  (r[Symbol.iterator] = function () {
                    return this;
                  }),
                r
              );
              function o(o) {
                return function (c) {
                  return (function (o) {
                    if (t)
                      throw new TypeError("Generator is already executing.");
                    for (; r && ((r = 0), o[0] && (l = 0)), l; )
                      try {
                        if (
                          ((t = 1),
                          a &&
                            (i =
                              2 & o[0]
                                ? a.return
                                : o[0]
                                  ? a.throw || ((i = a.return) && i.call(a), 0)
                                  : a.next) &&
                            !(i = i.call(a, o[1])).done)
                        )
                          return i;
                        switch (
                          ((a = 0), i && (o = [2 & o[0], i.value]), o[0])
                        ) {
                          case 0:
                          case 1:
                            i = o;
                            break;
                          case 4:
                            return l.label++, { value: o[1], done: !1 };
                          case 5:
                            l.label++, (a = o[1]), (o = [0]);
                            continue;
                          case 7:
                            (o = l.ops.pop()), l.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (i =
                                  (i = l.trys).length > 0 && i[i.length - 1]) ||
                                (6 !== o[0] && 2 !== o[0])
                              )
                            ) {
                              l = 0;
                              continue;
                            }
                            if (
                              3 === o[0] &&
                              (!i || (o[1] > i[0] && o[1] < i[3]))
                            ) {
                              l.label = o[1];
                              break;
                            }
                            if (6 === o[0] && l.label < i[1]) {
                              (l.label = i[1]), (i = o);
                              break;
                            }
                            if (i && l.label < i[2]) {
                              (l.label = i[2]), l.ops.push(o);
                              break;
                            }
                            i[2] && l.ops.pop(), l.trys.pop();
                            continue;
                        }
                        o = n.call(e, l);
                      } catch (e) {
                        (o = [6, e]), (a = 0);
                      } finally {
                        t = i = 0;
                      }
                    if (5 & o[0]) throw o[1];
                    return { value: o[0] ? o[1] : void 0, done: !0 };
                  })([o, c]);
                };
              }
            })(this, function (t) {
              return [
                2,
                new Promise(function (t, a) {
                  try {
                    var i = "generateBlackAndWhiteThumbnailImage",
                      r = document.createElement("img"),
                      l = e.getContext("2d");
                    (e.width = 128),
                      (e.height = 128),
                      (r.src = n),
                      (r.id = i),
                      (r.width = 128),
                      (r.height = 128),
                      (r.className = "hidden"),
                      (r.onload = function () {
                        var n;
                        (r.crossOrigin = "anonymous"),
                          l.drawImage(r, 0, 0, 128, 128);
                        for (
                          var a = [
                              -1, -1, 0, -1, 1, -1, -1, 0, 1, 0, -1, 1, 0, 1, 1,
                              1,
                            ],
                            o = 0;
                          o < a.length;
                          o += 2
                        )
                          l.drawImage(r, 5 + 2 * a[o], 5 + 2 * a[o + 1]);
                        (l.globalCompositeOperation = "source-in"),
                          (l.fillStyle = "white"),
                          l.fillRect(0, 0, e.width, e.height),
                          (l.globalCompositeOperation = "source-over"),
                          l.drawImage(r, 5, 5),
                          null === (n = document.getElementById(i)) ||
                            void 0 === n ||
                            n.remove(),
                          t("Thumbnail successfully generated.");
                      }),
                      document.body.append(r);
                  } catch (e) {
                    a("Thumbnail successfully generated");
                  }
                }),
              ];
            });
          }),
          new ((i = void 0) || (i = Promise))(function (e, n) {
            function l(e) {
              try {
                c(r.next(e));
              } catch (e) {
                n(e);
              }
            }
            function o(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                n(e);
              }
            }
            function c(n) {
              var t;
              n.done
                ? e(n.value)
                : ((t = n.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(l, o);
            }
            c((r = r.apply(t, a || [])).next());
          })
        );
        var t, a, i, r;
      };
      var v = function () {
          return (
            (v =
              Object.assign ||
              function (e) {
                for (var n, t = 1, a = arguments.length; t < a; t++)
                  for (var i in (n = arguments[t]))
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                return e;
              }),
            v.apply(this, arguments)
          );
        },
        m = function (e, n, t) {
          if (t || 2 === arguments.length)
            for (var a, i = 0, r = n.length; i < r; i++)
              (!a && i in n) ||
                (a || (a = Array.prototype.slice.call(n, 0, i)), (a[i] = n[i]));
          return e.concat(a || Array.prototype.slice.call(n));
        };
      const p = function () {
        var e = (0, i.useRef)(),
          n = (0, l.UO)(),
          t = (0, r.useApplications)(),
          d = t.getApplicationsByUuid,
          p = t.updateApplication,
          g = (0, i.useState)("SAM"),
          b = g[0],
          x = g[1],
          y = (0, i.useState)([]),
          j = y[0],
          w = y[1],
          S = (0, i.useState)(!0),
          C = S[0],
          A = S[1],
          O = (0, i.useState)(!1),
          k = O[0],
          U = O[1],
          I = (0, i.useState)(!1),
          N = I[0],
          T = I[1],
          M = (0, i.useState)(!1),
          E = M[0],
          P = M[1],
          R = (0, i.useState)(),
          B = R[0],
          L = R[1],
          Y = (null == n ? void 0 : n.uuid) || "";
        return (
          (0, i.useEffect)(function () {
            (0, c.gr)({ limit: 1e3 })
              .then(function (e) {
                var n,
                  t = e
                    .filter(function (e) {
                      var n;
                      return (
                        "Processed" ===
                        (null === (n = e.metadata) || void 0 === n
                          ? void 0
                          : n.status)
                      );
                    })
                    .reduce(function (e, n) {
                      var t;
                      return m(
                        m([], e, !0),
                        [
                          {
                            label: n.name,
                            id: n.uuid,
                            thumbnailUrl:
                              (null ===
                                (t = n.files.find(function (e) {
                                  return "thumbnail" === e.name;
                                })) || void 0 === t
                                ? void 0
                                : t.url) || "",
                          },
                        ],
                        !1,
                      );
                    }, []),
                  a = d(Y);
                if (
                  null === (n = a.configuration) || void 0 === n
                    ? void 0
                    : n.defaultAvatarUuid
                ) {
                  x("CUSTOM");
                  var i = t.find(function (e) {
                    var n;
                    return (
                      e.id ===
                      (null === (n = a.configuration) || void 0 === n
                        ? void 0
                        : n.defaultAvatarUuid)
                    );
                  });
                  i && L(i);
                }
                w(t);
              })
              .finally(function () {
                return A(!1);
              });
          }, []),
          (0, i.useEffect)(
            function () {
              B &&
                e.current &&
                (P(!0),
                h(e.current, B.thumbnailUrl).finally(function () {
                  return P(!1);
                }));
            },
            [B, e],
          ),
          (0, a.jsxs)(s.Z, {
            children: [
              (0, a.jsxs)("div", {
                children: [
                  (0, a.jsx)(r.Title, { type: "h2", text: ["Emote", "Icon"] }),
                  (0, a.jsx)("p", {
                    children:
                      "Here, you can manage how your animation icons appear.",
                  }),
                ],
              }),
              C
                ? (0, a.jsx)(
                    "div",
                    v(
                      { className: "w-full flex justify-center py-6" },
                      { children: (0, a.jsx)(r.Loader, {}) },
                    ),
                  )
                : (0, a.jsxs)(
                    "div",
                    v(
                      { className: "pt-6" },
                      {
                        children: [
                          (0, a.jsxs)(
                            "div",
                            v(
                              { className: "pb-4" },
                              {
                                children: [
                                  (0, a.jsx)(
                                    "div",
                                    v(
                                      { className: "flex items-center h-14" },
                                      {
                                        children: (0, a.jsx)(r.Radio, {
                                          id: "emoteIconSam",
                                          value: "SAM",
                                          name: "emoteIcon",
                                          label:
                                            "Kinetix's standard avatar (Sam)",
                                          checked: "SAM" === b,
                                          onChange: function () {
                                            x("SAM"), T(!0);
                                          },
                                        }),
                                      },
                                    ),
                                  ),
                                  (0, a.jsx)(f, {
                                    children: (0, a.jsx)("img", {
                                      className: "w-full",
                                      src: o,
                                      alt: "Sam placeholder",
                                    }),
                                  }),
                                ],
                              },
                            ),
                          ),
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsxs)(
                                "div",
                                v(
                                  { className: "flex items-center gap-6 h-14" },
                                  {
                                    children: [
                                      (0, a.jsx)("div", {
                                        children: (0, a.jsx)(r.Radio, {
                                          id: "emoteIconCustom",
                                          value: "Custom",
                                          name: "emoteIcon",
                                          label: "Custom Icon",
                                          checked: "CUSTOM" === b,
                                          onChange: function () {
                                            x("CUSTOM"), T(!!B);
                                          },
                                          disabled: !j.length,
                                        }),
                                      }),
                                      !!j.length &&
                                        (0, a.jsx)(r.Autocomplete, {
                                          label: "Select avatar",
                                          initialSelectedItem: B,
                                          items: j,
                                          disabled: E,
                                          onSelect: function (e) {
                                            (null == B ? void 0 : B.id) !==
                                              e.id &&
                                              (x("CUSTOM"), L(e), T(!0));
                                          },
                                        }),
                                    ],
                                  },
                                ),
                              ),
                              j.length
                                ? (0, a.jsxs)(a.Fragment, {
                                    children: [
                                      (0, a.jsxs)(f, {
                                        children: [
                                          E &&
                                            (0, a.jsx)(
                                              "div",
                                              v(
                                                {
                                                  className:
                                                    "flex justify-center items-center w-full h-full z-10",
                                                },
                                                {
                                                  children: (0, a.jsx)(
                                                    r.Loader,
                                                    {},
                                                  ),
                                                },
                                              ),
                                            ),
                                          (0, a.jsx)("canvas", {
                                            className: "w-full h-full",
                                            ref: e,
                                          }),
                                        ],
                                      }),
                                      (0, a.jsx)(
                                        "div",
                                        v(
                                          { className: "pt-10" },
                                          {
                                            children: (0, a.jsx)(r.Button, {
                                              label: "Save Changes",
                                              loading: k,
                                              disabled: !N,
                                              onClick: function () {
                                                U(!0);
                                                var e =
                                                  "CUSTOM" === b && B
                                                    ? B.id
                                                    : null;
                                                (0, u.VR)(Y, {
                                                  defaultAvatarUuid: e,
                                                })
                                                  .then(function () {
                                                    r.toast.success(
                                                      "Your emote icon has been updated.",
                                                    ),
                                                      p(Y, {
                                                        configuration: {
                                                          defaultAvatarUuid: e,
                                                        },
                                                      });
                                                  })
                                                  .finally(function () {
                                                    return U(!1);
                                                  });
                                              },
                                            }),
                                          },
                                        ),
                                      ),
                                    ],
                                  })
                                : (0, a.jsx)("div", {
                                    children:
                                      "You have no processed avatars to select",
                                  }),
                            ],
                          }),
                        ],
                      },
                    ),
                  ),
            ],
          })
        );
      };
    },
  },
]);
