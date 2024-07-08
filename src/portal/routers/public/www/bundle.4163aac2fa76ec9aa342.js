"use strict";
(self.webpackChunkkinetix_frontoffice =
  self.webpackChunkkinetix_frontoffice || []).push([
  [752],
  {
    5813: (e, t, n) => {
      n.d(t, { Z: () => h });
      var r = n(85893),
        i = n(67294),
        a = n(89250),
        o = n(12599),
        l = n(27306),
        s = n(96233),
        u = n(42155),
        c = n(19010),
        d = function () {
          return (
            (d =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            d.apply(this, arguments)
          );
        },
        f = function (e, t, n) {
          if (n || 2 === arguments.length)
            for (var r, i = 0, a = t.length; i < a; i++)
              (!r && i in t) ||
                (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
          return e.concat(r || Array.prototype.slice.call(t));
        },
        p = function (e) {
          var t = e.sort(function (e, t) {
            return e.createdAt < t.createdAt
              ? -1
              : e.createdAt > t.createdAt
                ? 1
                : 0;
          });
          return (
            (t.length && t[t.length - 1].configuration.mainUsage) ||
            l.APPLICATION_MAIN_USAGE.SDK
          );
        };
      const h = function (e) {
        var t = e.children,
          n = e.hideFooter,
          h = void 0 !== n && n,
          m = (0, a.s0)(),
          x = (0, a.TH)(),
          v = (0, a.UO)(),
          y = (0, l.useApplications)(),
          b = y.applications,
          g = y.limit,
          j = (0, i.useState)(!1),
          w = j[0],
          N = j[1],
          E = (0, i.useState)(0),
          A = E[0],
          k = E[1],
          O = (0, i.useState)(),
          S = O[0],
          T = O[1],
          C = (null == v ? void 0 : v.uuid) || "";
        return (
          (0, i.useEffect)(
            function () {
              var e = b.find(function (e) {
                return e.uuid === C;
              });
              e &&
                (T({ label: e.name, uuid: e.uuid }),
                u.P$ &&
                  (0, c.IB)({ virtualWorldUuid: e.uuid, limit: 1 }).then(
                    function (e) {
                      return k(e.total);
                    },
                  ));
            },
            [C],
          ),
          S
            ? (0, r.jsx)(
                "div",
                d(
                  { id: "ConnectedLayout", className: "lg:flex" },
                  {
                    children: (0, r.jsx)(
                      l.HeaderVertical,
                      d(
                        {
                          contextItems: b.map(function (e) {
                            return { label: e.name, uuid: e.uuid };
                          }),
                          selectedContextItem: S,
                          onCreateContextItem:
                            b.length < g
                              ? function () {
                                  return N(!0);
                                }
                              : void 0,
                          onSelectContextItem: function (e) {
                            var t;
                            (t = x.pathname.includes("/user-moderation")
                              ? s.n.USER_MODERATION.path
                              : s.n.VIRTUAL_WORLD.path),
                              m((0, o.Gn)(t, { uuid: e.uuid }));
                          },
                          topNavigationItems: f(
                            [],
                            b.length && S
                              ? f(
                                  f(
                                    f(
                                      f(
                                        [
                                          {
                                            label: "Dashboard",
                                            iconName: "dashboard",
                                            to: (0, o.Gn)(
                                              s.n.VIRTUAL_WORLD.path,
                                              { uuid: S.uuid },
                                            ),
                                          },
                                        ],
                                        u.p6
                                          ? [
                                              {
                                                label: "Settings",
                                                iconName: "settings",
                                                to: (0, o.Gn)(
                                                  s.n.SETTINGS.path,
                                                  { uuid: S.uuid },
                                                ),
                                              },
                                            ]
                                          : [],
                                        !0,
                                      ),
                                      [
                                        {
                                          label: "User-Generated Emote",
                                          isSeparator: !0,
                                        },
                                        {
                                          label: "Avatar Upload",
                                          iconName: "directions_run",
                                          to: (0, o.Gn)(
                                            s.n.AVATAR_MANAGEMENT.path,
                                            { uuid: S.uuid },
                                          ),
                                        },
                                        {
                                          label: "UGC Viewer",
                                          iconName: "neurology",
                                          to: (0, o.Gn)(
                                            s.n.USER_GENERATED_EMOTES.path,
                                            { uuid: S.uuid },
                                          ),
                                        },
                                      ],
                                      !1,
                                    ),
                                    u.P$
                                      ? [
                                          {
                                            label: "UGC Moderation",
                                            iconName: "security",
                                            items: [
                                              {
                                                label: "Moderation Overview",
                                                to: (0, o.Gn)(
                                                  s.n.MODERATION_OVERVIEW.path,
                                                  { uuid: S.uuid },
                                                ),
                                                counter: A,
                                              },
                                              {
                                                label: "User Moderation",
                                                to: (0, o.Gn)(
                                                  s.n.USER_MODERATION.path,
                                                  { uuid: S.uuid },
                                                ),
                                              },
                                            ],
                                          },
                                        ]
                                      : [
                                          {
                                            label: "UGC Moderation",
                                            iconName: "security",
                                            to: (0, o.Gn)(
                                              s.n.USER_MODERATION.path,
                                              { uuid: S.uuid },
                                            ),
                                          },
                                        ],
                                    !0,
                                  ),
                                  [
                                    {
                                      label: "Emote Icon Manager",
                                      iconName: "mood",
                                      to: (0, o.Gn)(s.n.EMOTES_ICON.path, {
                                        uuid: S.uuid,
                                      }),
                                    },
                                  ],
                                  !1,
                                )
                              : [
                                  {
                                    label: "Game API Key",
                                    iconName: "public",
                                    to: s.n.CREATE_VIRTUAL_WORLD.path,
                                  },
                                ],
                            !0,
                          ),
                          documentationNavigationItems: {
                            label: "Documentation",
                            iconName: "find_in_page",
                            items: [
                              { label: "General Information", href: u.sW },
                              { label: "Integrate SDK", href: u.yy },
                              {
                                label: "Integrate Without SDK (API)",
                                href: u.HI,
                              },
                            ],
                          },
                        },
                        {
                          children: (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)(
                                "div",
                                d(
                                  {
                                    className:
                                      "min-h-[calc(100vh-162px)] lg:min-h-[calc(100vh-98px)] pt-6",
                                  },
                                  { children: t },
                                ),
                                (null == S ? void 0 : S.uuid) || "create",
                              ),
                              !h &&
                                (0, r.jsx)(l.FooterLight, {
                                  className: "w-fit mx-auto lg:w-full",
                                }),
                              (0, r.jsx)(l.CreateApplicationModal, {
                                isOpened: w,
                                onClose: function () {
                                  return N(!1);
                                },
                                application: "DEV_PORTAL",
                                mainUsage: p(b),
                              }),
                            ],
                          }),
                        },
                      ),
                    ),
                  },
                ),
              )
            : (0, r.jsx)(l.Loader, {})
        );
      };
    },
    82372: (e, t, n) => {
      n.r(t), n.d(t, { default: () => be });
      var r = n(85893),
        i = n(67294),
        a = n(89250),
        o = n(27306),
        l = n(19010),
        s = n(5813),
        u = function () {
          return (
            (u =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            u.apply(this, arguments)
          );
        };
      const c = function (e) {
        var t = e.virtualWorldUuid,
          n = e.removeVirtualWorld,
          a = (0, i.useState)(!1),
          l = a[0],
          s = a[1];
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsxs)(
              "div",
              u(
                {
                  className: "flex items-start justify-between",
                  "data-cy": "virtualWorldHeader",
                },
                {
                  children: [
                    (0, r.jsx)(o.Title, {
                      type: "h2",
                      text: ["WELCOME TO YOUR DEVELOPER PORTAL!"],
                    }),
                    (0, r.jsx)(
                      "div",
                      u(
                        { className: "mt-2" },
                        {
                          children: (0, r.jsx)(o.Menu, {
                            items: [
                              {
                                label: "Remove Game",
                                handleClick: function () {
                                  return (
                                    (e = void 0),
                                    (r = void 0),
                                    (a = function () {
                                      return (function (e, t) {
                                        var n,
                                          r,
                                          i,
                                          a,
                                          o = {
                                            label: 0,
                                            sent: function () {
                                              if (1 & i[0]) throw i[1];
                                              return i[1];
                                            },
                                            trys: [],
                                            ops: [],
                                          };
                                        return (
                                          (a = {
                                            next: l(0),
                                            throw: l(1),
                                            return: l(2),
                                          }),
                                          "function" == typeof Symbol &&
                                            (a[Symbol.iterator] = function () {
                                              return this;
                                            }),
                                          a
                                        );
                                        function l(l) {
                                          return function (s) {
                                            return (function (l) {
                                              if (n)
                                                throw new TypeError(
                                                  "Generator is already executing.",
                                                );
                                              for (
                                                ;
                                                a && ((a = 0), l[0] && (o = 0)),
                                                  o;

                                              )
                                                try {
                                                  if (
                                                    ((n = 1),
                                                    r &&
                                                      (i =
                                                        2 & l[0]
                                                          ? r.return
                                                          : l[0]
                                                            ? r.throw ||
                                                              ((i = r.return) &&
                                                                i.call(r),
                                                              0)
                                                            : r.next) &&
                                                      !(i = i.call(r, l[1]))
                                                        .done)
                                                  )
                                                    return i;
                                                  switch (
                                                    ((r = 0),
                                                    i &&
                                                      (l = [2 & l[0], i.value]),
                                                    l[0])
                                                  ) {
                                                    case 0:
                                                    case 1:
                                                      i = l;
                                                      break;
                                                    case 4:
                                                      return (
                                                        o.label++,
                                                        {
                                                          value: l[1],
                                                          done: !1,
                                                        }
                                                      );
                                                    case 5:
                                                      o.label++,
                                                        (r = l[1]),
                                                        (l = [0]);
                                                      continue;
                                                    case 7:
                                                      (l = o.ops.pop()),
                                                        o.trys.pop();
                                                      continue;
                                                    default:
                                                      if (
                                                        !(
                                                          (i =
                                                            (i = o.trys)
                                                              .length > 0 &&
                                                            i[i.length - 1]) ||
                                                          (6 !== l[0] &&
                                                            2 !== l[0])
                                                        )
                                                      ) {
                                                        o = 0;
                                                        continue;
                                                      }
                                                      if (
                                                        3 === l[0] &&
                                                        (!i ||
                                                          (l[1] > i[0] &&
                                                            l[1] < i[3]))
                                                      ) {
                                                        o.label = l[1];
                                                        break;
                                                      }
                                                      if (
                                                        6 === l[0] &&
                                                        o.label < i[1]
                                                      ) {
                                                        (o.label = i[1]),
                                                          (i = l);
                                                        break;
                                                      }
                                                      if (i && o.label < i[2]) {
                                                        (o.label = i[2]),
                                                          o.ops.push(l);
                                                        break;
                                                      }
                                                      i[2] && o.ops.pop(),
                                                        o.trys.pop();
                                                      continue;
                                                  }
                                                  l = t.call(e, o);
                                                } catch (e) {
                                                  (l = [6, e]), (r = 0);
                                                } finally {
                                                  n = i = 0;
                                                }
                                              if (5 & l[0]) throw l[1];
                                              return {
                                                value: l[0] ? l[1] : void 0,
                                                done: !0,
                                              };
                                            })([l, s]);
                                          };
                                        }
                                      })(this, function (e) {
                                        switch (e.label) {
                                          case 0:
                                            if (l) return [2];
                                            e.label = 1;
                                          case 1:
                                            return (
                                              e.trys.push([1, , 3, 4]),
                                              s(!0),
                                              [4, n(t)]
                                            );
                                          case 2:
                                            return e.sent(), [3, 4];
                                          case 3:
                                            return s(!1), [7];
                                          case 4:
                                            return [2];
                                        }
                                      });
                                    }),
                                    new ((i = void 0) || (i = Promise))(
                                      function (t, n) {
                                        function o(e) {
                                          try {
                                            s(a.next(e));
                                          } catch (e) {
                                            n(e);
                                          }
                                        }
                                        function l(e) {
                                          try {
                                            s(a.throw(e));
                                          } catch (e) {
                                            n(e);
                                          }
                                        }
                                        function s(e) {
                                          var n;
                                          e.done
                                            ? t(e.value)
                                            : ((n = e.value),
                                              n instanceof i
                                                ? n
                                                : new i(function (e) {
                                                    e(n);
                                                  })).then(o, l);
                                        }
                                        s((a = a.apply(e, r || [])).next());
                                      },
                                    )
                                  );
                                  var e, r, i, a;
                                },
                              },
                            ],
                          }),
                        },
                      ),
                    ),
                  ],
                },
              ),
            ),
            (0, r.jsx)(
              "p",
              u(
                { className: "mb-4" },
                {
                  children:
                    "The Developer Portal is a centralized platform designed for you to manage the User-Generated Emote feature during your game's run phase.",
                },
              ),
            ),
          ],
        });
      };
      var d = n(67803),
        f = n(23855),
        p = n(313),
        h = function () {
          return (
            (h =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            h.apply(this, arguments)
          );
        };
      const m = function (e) {
        var t = e.virtualWorldUuid,
          n = e.apiKey,
          i = e.onRemove,
          a = n.expire
            ? (0, d.Z)((0, f.default)(n.expire), (0, f.default)(n.createdAt))
            : 0,
          s = (0, d.Z)(new Date(), (0, f.default)(n.createdAt)),
          u =
            n.expire && (0, p.default)((0, f.default)(n.expire), new Date())
              ? "DISABLED"
              : "ENABLED";
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsxs)(
              "div",
              h(
                {
                  className: "flex justify-between",
                  "data-cy": "virtualWorldApiKeyHeader",
                },
                {
                  children: [
                    (0, r.jsx)(o.Title, {
                      type: "h3",
                      text: ["Kinetix", "Game/App API key"],
                    }),
                    (0, r.jsx)(
                      "div",
                      h(
                        { className: "mt-1" },
                        {
                          children: (0, r.jsx)(o.Menu, {
                            items: [
                              {
                                label: "Revoke key",
                                handleClick: function () {
                                  return (
                                    (e = void 0),
                                    (r = void 0),
                                    (s = function () {
                                      return (function (e, t) {
                                        var n,
                                          r,
                                          i,
                                          a,
                                          o = {
                                            label: 0,
                                            sent: function () {
                                              if (1 & i[0]) throw i[1];
                                              return i[1];
                                            },
                                            trys: [],
                                            ops: [],
                                          };
                                        return (
                                          (a = {
                                            next: l(0),
                                            throw: l(1),
                                            return: l(2),
                                          }),
                                          "function" == typeof Symbol &&
                                            (a[Symbol.iterator] = function () {
                                              return this;
                                            }),
                                          a
                                        );
                                        function l(l) {
                                          return function (s) {
                                            return (function (l) {
                                              if (n)
                                                throw new TypeError(
                                                  "Generator is already executing.",
                                                );
                                              for (
                                                ;
                                                a && ((a = 0), l[0] && (o = 0)),
                                                  o;

                                              )
                                                try {
                                                  if (
                                                    ((n = 1),
                                                    r &&
                                                      (i =
                                                        2 & l[0]
                                                          ? r.return
                                                          : l[0]
                                                            ? r.throw ||
                                                              ((i = r.return) &&
                                                                i.call(r),
                                                              0)
                                                            : r.next) &&
                                                      !(i = i.call(r, l[1]))
                                                        .done)
                                                  )
                                                    return i;
                                                  switch (
                                                    ((r = 0),
                                                    i &&
                                                      (l = [2 & l[0], i.value]),
                                                    l[0])
                                                  ) {
                                                    case 0:
                                                    case 1:
                                                      i = l;
                                                      break;
                                                    case 4:
                                                      return (
                                                        o.label++,
                                                        {
                                                          value: l[1],
                                                          done: !1,
                                                        }
                                                      );
                                                    case 5:
                                                      o.label++,
                                                        (r = l[1]),
                                                        (l = [0]);
                                                      continue;
                                                    case 7:
                                                      (l = o.ops.pop()),
                                                        o.trys.pop();
                                                      continue;
                                                    default:
                                                      if (
                                                        !(
                                                          (i =
                                                            (i = o.trys)
                                                              .length > 0 &&
                                                            i[i.length - 1]) ||
                                                          (6 !== l[0] &&
                                                            2 !== l[0])
                                                        )
                                                      ) {
                                                        o = 0;
                                                        continue;
                                                      }
                                                      if (
                                                        3 === l[0] &&
                                                        (!i ||
                                                          (l[1] > i[0] &&
                                                            l[1] < i[3]))
                                                      ) {
                                                        o.label = l[1];
                                                        break;
                                                      }
                                                      if (
                                                        6 === l[0] &&
                                                        o.label < i[1]
                                                      ) {
                                                        (o.label = i[1]),
                                                          (i = l);
                                                        break;
                                                      }
                                                      if (i && o.label < i[2]) {
                                                        (o.label = i[2]),
                                                          o.ops.push(l);
                                                        break;
                                                      }
                                                      i[2] && o.ops.pop(),
                                                        o.trys.pop();
                                                      continue;
                                                  }
                                                  l = t.call(e, o);
                                                } catch (e) {
                                                  (l = [6, e]), (r = 0);
                                                } finally {
                                                  n = i = 0;
                                                }
                                              if (5 & l[0]) throw l[1];
                                              return {
                                                value: l[0] ? l[1] : void 0,
                                                done: !0,
                                              };
                                            })([l, s]);
                                          };
                                        }
                                      })(this, function (e) {
                                        switch (e.label) {
                                          case 0:
                                            return [4, (0, l.o0)(t, n.uuid)];
                                          case 1:
                                            return (
                                              e.sent(),
                                              i(),
                                              o.toast.success(
                                                "Your Game API key has been revoked.",
                                              ),
                                              [2]
                                            );
                                        }
                                      });
                                    }),
                                    new ((a = void 0) || (a = Promise))(
                                      function (t, n) {
                                        function i(e) {
                                          try {
                                            l(s.next(e));
                                          } catch (e) {
                                            n(e);
                                          }
                                        }
                                        function o(e) {
                                          try {
                                            l(s.throw(e));
                                          } catch (e) {
                                            n(e);
                                          }
                                        }
                                        function l(e) {
                                          var n;
                                          e.done
                                            ? t(e.value)
                                            : ((n = e.value),
                                              n instanceof a
                                                ? n
                                                : new a(function (e) {
                                                    e(n);
                                                  })).then(i, o);
                                        }
                                        l((s = s.apply(e, r || [])).next());
                                      },
                                    )
                                  );
                                  var e, r, a, s;
                                },
                              },
                            ],
                          }),
                        },
                      ),
                    ),
                  ],
                },
              ),
            ),
            (0, r.jsx)("p", { children: n.value }),
            (0, r.jsxs)(
              "div",
              h(
                { className: "flex justify-between items-center mt-6" },
                {
                  children: [
                    (0, r.jsxs)("div", {
                      children: [
                        (0, r.jsx)(
                          "p",
                          h(
                            { className: "font-bold mb-2" },
                            { children: "Status:" },
                          ),
                        ),
                        (0, r.jsxs)(
                          "p",
                          h(
                            {
                              className: "flex items-center gap-2 ".concat(
                                "ENABLED" === u ? "text-green" : "text-yellow",
                              ),
                            },
                            {
                              children: [
                                (0, r.jsx)("span", {
                                  className: "w-3 h-3 rounded-full ".concat(
                                    "ENABLED" === u ? "bg-green" : "bg-yellow",
                                  ),
                                }),
                                (0, r.jsx)("span", {
                                  children:
                                    "ENABLED" === u ? "Active" : "Expired",
                                }),
                              ],
                            },
                          ),
                        ),
                      ],
                    }),
                    n.expire &&
                      (0, r.jsxs)("div", {
                        children: [
                          (0, r.jsx)(
                            "p",
                            h(
                              { className: "font-bold mb-2" },
                              { children: "Remaining trial period:" },
                            ),
                          ),
                          (0, r.jsxs)(
                            "p",
                            h(
                              {
                                className: "".concat(
                                  "ENABLED" === u
                                    ? "text-green"
                                    : "text-yellow",
                                ),
                              },
                              {
                                children: [
                                  a - s < 0 ? 0 : a - s,
                                  " ",
                                  "out of ",
                                  a,
                                  " days",
                                ],
                              },
                            ),
                          ),
                        ],
                      }),
                    (0, r.jsx)("div", {}),
                  ],
                },
              ),
            ),
          ],
        });
      };
      var x = function () {
        return (
          (x =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          x.apply(this, arguments)
        );
      };
      const v = function (e) {
        var t = e.isOpened,
          n = e.onClose,
          i = e.apiKey;
        return (0, r.jsxs)(
          o.Modal,
          x(
            {
              open: t,
              onClose: n,
              title: ["Get your", "API Key"],
              size: "auto",
              isClosable: !1,
            },
            {
              children: [
                (0, r.jsx)(
                  "p",
                  x(
                    { className: "mb-4 text-green font-bold" },
                    {
                      children:
                        "Your Game/App API Key has been created successfully.",
                    },
                  ),
                ),
                (0, r.jsx)(
                  "p",
                  x(
                    { className: "mb-4 font-bold" },
                    {
                      children:
                        "This is the only time we will display your API Key.",
                    },
                  ),
                ),
                (0, r.jsx)("p", {
                  children: "Make sure you copy it and save it in a safe place",
                }),
                (0, r.jsxs)(
                  "div",
                  x(
                    {
                      className:
                        "my-6 p-4 bg-surface-20 rounded flex items-center w-fit",
                      "data-cy": "newApiKeyDisplay",
                    },
                    {
                      children: [
                        (0, r.jsx)("p", { children: i }),
                        (0, r.jsx)(o.Button, {
                          className: "!pl-2 !pr-0",
                          iconFontSize: 32,
                          iconName: "content_copy",
                          kind: "flat",
                          onClick: function () {
                            return i && (0, o.copyToClipboard)(i);
                          },
                        }),
                      ],
                    },
                  ),
                ),
                (0, r.jsx)(
                  "div",
                  x(
                    { className: "flex justify-end" },
                    {
                      children: (0, r.jsx)(o.Button, {
                        label: "Done",
                        onClick: function () {
                          return n();
                        },
                      }),
                    },
                  ),
                ),
              ],
            },
          ),
        );
      };
      var y,
        b = function () {
          return (
            (b =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            b.apply(this, arguments)
          );
        },
        g = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, a) {
            function o(e) {
              try {
                s(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function s(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(o, l);
            }
            s((r = r.apply(e, t || [])).next());
          });
        },
        j = function (e, t) {
          var n,
            r,
            i,
            a,
            o = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (a = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function l(l) {
            return function (s) {
              return (function (l) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a && ((a = 0), l[0] && (o = 0)), o; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & l[0]
                            ? r.return
                            : l[0]
                              ? r.throw || ((i = r.return) && i.call(r), 0)
                              : r.next) &&
                        !(i = i.call(r, l[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (l = [2 & l[0], i.value]), l[0])) {
                      case 0:
                      case 1:
                        i = l;
                        break;
                      case 4:
                        return o.label++, { value: l[1], done: !1 };
                      case 5:
                        o.label++, (r = l[1]), (l = [0]);
                        continue;
                      case 7:
                        (l = o.ops.pop()), o.trys.pop();
                        continue;
                      default:
                        if (
                          !(
                            (i = (i = o.trys).length > 0 && i[i.length - 1]) ||
                            (6 !== l[0] && 2 !== l[0])
                          )
                        ) {
                          o = 0;
                          continue;
                        }
                        if (
                          3 === l[0] &&
                          (!i || (l[1] > i[0] && l[1] < i[3]))
                        ) {
                          o.label = l[1];
                          break;
                        }
                        if (6 === l[0] && o.label < i[1]) {
                          (o.label = i[1]), (i = l);
                          break;
                        }
                        if (i && o.label < i[2]) {
                          (o.label = i[2]), o.ops.push(l);
                          break;
                        }
                        i[2] && o.ops.pop(), o.trys.pop();
                        continue;
                    }
                    l = t.call(e, o);
                  } catch (e) {
                    (l = [6, e]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & l[0]) throw l[1];
                return { value: l[0] ? l[1] : void 0, done: !0 };
              })([l, s]);
            };
          }
        };
      const w = function (e) {
        var t = e.apiKey,
          n = e.virtualWorld,
          o = e.MissingRenderer,
          s = e.addNewApiKey,
          u = e.remove,
          c = (0, a.TH)(),
          d = (0, i.useState)(null),
          f = d[0],
          p = d[1],
          h = (0, i.useCallback)(function () {
            return g(void 0, void 0, void 0, function () {
              var e;
              return j(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, (0, l.Qd)({ virtualWorldUuid: n.uuid })];
                  case 1:
                    return (e = t.sent()), p(e), [2];
                }
              });
            });
          }, []);
        return (
          (0, i.useEffect)(function () {
            return (
              (y = setTimeout(function () {
                var e;
                y && clearTimeout(y),
                  !t &&
                    (null === (e = c.state) || void 0 === e
                      ? void 0
                      : e.createApiKey) &&
                    h();
              }, 10)),
              function () {
                y && clearTimeout(y);
              }
            );
          }, []),
          (0, r.jsxs)(
            "div",
            b(
              { className: "p-6 bg-surface-30 rounded-xl mt-6 max-w-4xl" },
              {
                children: [
                  t
                    ? (0, r.jsx)(m, {
                        virtualWorldUuid: n.uuid,
                        apiKey: t,
                        onRemove: function () {
                          return u(t.uuid);
                        },
                      })
                    : (0, r.jsx)(o, {
                        createApiKey: function () {
                          return g(void 0, void 0, void 0, function () {
                            return j(this, function (e) {
                              switch (e.label) {
                                case 0:
                                  return [4, h()];
                                case 1:
                                  return [2, e.sent()];
                              }
                            });
                          });
                        },
                      }),
                  (0, r.jsx)(v, {
                    isOpened: !!f,
                    onClose: function () {
                      f &&
                        s(
                          b(b({}, f), {
                            value: ""
                              .concat(f.value.substring(0, 4), "...")
                              .concat(
                                f.value.substring(
                                  f.value.length - 4,
                                  f.value.length,
                                ),
                              ),
                          }),
                        ),
                        p(null);
                    },
                    apiKey: null == f ? void 0 : f.value,
                  }),
                ],
              },
            ),
          )
        );
      };
      var N = function () {
        return (
          (N =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          N.apply(this, arguments)
        );
      };
      const E = function (e) {
        var t = e.createApiKey,
          n = (0, i.useState)(!1),
          a = n[0],
          l = n[1];
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsx)(o.Title, {
              type: "h3",
              text: ["Activate your", "Game/App API Key below"],
            }),
            (0, r.jsx)(
              "p",
              N(
                { className: "mb-2" },
                {
                  children:
                    "Your Game API key will be only displayed once. Make sure to copy it and save it in a safe place.",
                },
              ),
            ),
            (0, r.jsxs)(
              "p",
              N(
                { className: "mb-6" },
                {
                  children: [
                    "Feel free to",
                    " ",
                    (0, r.jsx)(
                      "a",
                      N(
                        {
                          className:
                            "underline transition-all hover:text-primary",
                          href: "mailto:ben@kinetix.tech",
                          title: "Contact us",
                        },
                        { children: "contact" },
                      ),
                    ),
                    " ",
                    "us if you have any issues with your Game API Key.",
                  ],
                },
              ),
            ),
            (0, r.jsx)(o.Button, {
              iconName: "add",
              label: "Get API key",
              loading: a,
              onClick: function () {
                return (
                  (e = void 0),
                  (n = void 0),
                  (i = function () {
                    return (function (e, t) {
                      var n,
                        r,
                        i,
                        a,
                        o = {
                          label: 0,
                          sent: function () {
                            if (1 & i[0]) throw i[1];
                            return i[1];
                          },
                          trys: [],
                          ops: [],
                        };
                      return (
                        (a = { next: l(0), throw: l(1), return: l(2) }),
                        "function" == typeof Symbol &&
                          (a[Symbol.iterator] = function () {
                            return this;
                          }),
                        a
                      );
                      function l(l) {
                        return function (s) {
                          return (function (l) {
                            if (n)
                              throw new TypeError(
                                "Generator is already executing.",
                              );
                            for (; a && ((a = 0), l[0] && (o = 0)), o; )
                              try {
                                if (
                                  ((n = 1),
                                  r &&
                                    (i =
                                      2 & l[0]
                                        ? r.return
                                        : l[0]
                                          ? r.throw ||
                                            ((i = r.return) && i.call(r), 0)
                                          : r.next) &&
                                    !(i = i.call(r, l[1])).done)
                                )
                                  return i;
                                switch (
                                  ((r = 0),
                                  i && (l = [2 & l[0], i.value]),
                                  l[0])
                                ) {
                                  case 0:
                                  case 1:
                                    i = l;
                                    break;
                                  case 4:
                                    return o.label++, { value: l[1], done: !1 };
                                  case 5:
                                    o.label++, (r = l[1]), (l = [0]);
                                    continue;
                                  case 7:
                                    (l = o.ops.pop()), o.trys.pop();
                                    continue;
                                  default:
                                    if (
                                      !(
                                        (i =
                                          (i = o.trys).length > 0 &&
                                          i[i.length - 1]) ||
                                        (6 !== l[0] && 2 !== l[0])
                                      )
                                    ) {
                                      o = 0;
                                      continue;
                                    }
                                    if (
                                      3 === l[0] &&
                                      (!i || (l[1] > i[0] && l[1] < i[3]))
                                    ) {
                                      o.label = l[1];
                                      break;
                                    }
                                    if (6 === l[0] && o.label < i[1]) {
                                      (o.label = i[1]), (i = l);
                                      break;
                                    }
                                    if (i && o.label < i[2]) {
                                      (o.label = i[2]), o.ops.push(l);
                                      break;
                                    }
                                    i[2] && o.ops.pop(), o.trys.pop();
                                    continue;
                                }
                                l = t.call(e, o);
                              } catch (e) {
                                (l = [6, e]), (r = 0);
                              } finally {
                                n = i = 0;
                              }
                            if (5 & l[0]) throw l[1];
                            return { value: l[0] ? l[1] : void 0, done: !0 };
                          })([l, s]);
                        };
                      }
                    })(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return e.trys.push([0, , 2, 3]), l(!0), [4, t()];
                        case 1:
                          return e.sent(), [3, 3];
                        case 2:
                          return l(!1), [7];
                        case 3:
                          return [2];
                      }
                    });
                  }),
                  new ((r = void 0) || (r = Promise))(function (t, a) {
                    function o(e) {
                      try {
                        s(i.next(e));
                      } catch (e) {
                        a(e);
                      }
                    }
                    function l(e) {
                      try {
                        s(i.throw(e));
                      } catch (e) {
                        a(e);
                      }
                    }
                    function s(e) {
                      var n;
                      e.done
                        ? t(e.value)
                        : ((n = e.value),
                          n instanceof r
                            ? n
                            : new r(function (e) {
                                e(n);
                              })).then(o, l);
                    }
                    s((i = i.apply(e, n || [])).next());
                  })
                );
                var e, n, r, i;
              },
            }),
          ],
        });
      };
      var A = n(29009),
        k = n(35329),
        O = n(72577),
        S = function () {
          return (
            (S =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            S.apply(this, arguments)
          );
        };
      const T = function (e) {
        var t = e.title,
          n = e.titleInfo,
          i = e.currentValue || 0,
          a = e.maxValue || 0,
          l = (i / a) * 100;
        return (0, r.jsxs)(
          "div",
          S(
            { className: "rounded-xl w-full overflow-hidden mt-6" },
            {
              children: [
                (0, r.jsxs)(
                  "div",
                  S(
                    {
                      className:
                        "h-10 flex justify-center items-center gap-2 bg-surface-50",
                    },
                    {
                      children: [
                        (0, r.jsx)(
                          "p",
                          S(
                            { className: "text-sm font-bold text-center" },
                            { children: t },
                          ),
                        ),
                        (0, r.jsx)(
                          o.Tooltip,
                          S(
                            { title: n },
                            {
                              children: function (e) {
                                return (0, r.jsx)(
                                  "span",
                                  S(
                                    {},
                                    e,
                                    {
                                      className:
                                        "material-symbols-rounded leading-[0px]",
                                    },
                                    { children: "info" },
                                  ),
                                );
                              },
                            },
                          ),
                        ),
                      ],
                    },
                  ),
                ),
                (0, r.jsx)(
                  "div",
                  S(
                    { className: "bg-surface-10 w-full p-10 h-72" },
                    {
                      children: (0, r.jsxs)(
                        "div",
                        S(
                          {
                            className:
                              "relative h-full flex justify-center items-center",
                          },
                          {
                            children: [
                              (0, r.jsx)(
                                A.h,
                                S(
                                  { width: "100%", height: "100%" },
                                  {
                                    children: (0, r.jsx)(
                                      k.u,
                                      S(
                                        { width: 288, height: 288 },
                                        {
                                          children: (0, r.jsx)(O.b, {
                                            data: [
                                              {
                                                label: "test",
                                                value: l,
                                                fill: "rgba(239, 115, 117, 1)",
                                                stroke:
                                                  "rgba(239, 115, 117, 1)",
                                                strokeWidth: 4,
                                              },
                                              {
                                                label: "test",
                                                value: 100 - l,
                                                fill: "rgba(176, 173, 188, 1)",
                                                stroke: "none",
                                                strokeWidth: 0,
                                              },
                                            ],
                                            cx: "50%",
                                            cy: "50%",
                                            isAnimationActive: !1,
                                            innerRadius: 76,
                                            outerRadius: 80,
                                            dataKey: "value",
                                            paddingAngle: 1.5,
                                          }),
                                        },
                                      ),
                                    ),
                                  },
                                ),
                              ),
                              (0, r.jsxs)(
                                "p",
                                S(
                                  {
                                    className:
                                      "absolute top-[calc(50%-12px)]] font-soehneextrafett text-xl leading-6",
                                  },
                                  {
                                    children: [
                                      (0, r.jsxs)(
                                        "span",
                                        S(
                                          {
                                            className: "".concat(
                                              i === a ? "text-primary" : "",
                                            ),
                                          },
                                          { children: [i, " /"] },
                                        ),
                                      ),
                                      (0, r.jsxs)(
                                        "span",
                                        S(
                                          { className: "text-primary" },
                                          { children: [" ", a] },
                                        ),
                                      ),
                                    ],
                                  },
                                ),
                              ),
                            ],
                          },
                        ),
                      ),
                    },
                  ),
                ),
              ],
            },
          ),
        );
      };
      var C = function () {
        return (
          (C =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          C.apply(this, arguments)
        );
      };
      const U = function (e) {
        var t = e.virtualWorld,
          n = e.usage;
        return (0, r.jsxs)(
          "div",
          C(
            {
              className:
                "flex items-center justify-between gap-6 flex-col md:flex-row",
            },
            {
              children: [
                (0, r.jsx)(T, {
                  title: "Feature users",
                  titleInfo: "Overral Number of user associated to this Key",
                  currentValue: n.totalUsers,
                  maxValue: t.plan.totalUsersLimit,
                }),
                (0, r.jsx)(T, {
                  title: "User-Generated Emote API calls",
                  titleInfo:
                    "Overral Number of get calls associated to this Key",
                  currentValue: n.calls,
                  maxValue: t.plan.callsLimit,
                }),
                (0, r.jsx)(T, {
                  title: "Number of emotes generated",
                  titleInfo:
                    "Overral Number of SUCCESSFUL User Generated emotes associated to this Key",
                  currentValue: n.muge,
                  maxValue: t.plan.mugeLimit,
                }),
              ],
            },
          ),
        );
      };
      var I = function () {
        return (
          (I =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          I.apply(this, arguments)
        );
      };
      const R = function (e) {
        var t = e.title,
          n = e.titleInfo,
          i = e.value;
        return (0, r.jsxs)(
          "div",
          I(
            { className: "rounded-xl w-full overflow-hidden mt-6" },
            {
              children: [
                (0, r.jsxs)(
                  "div",
                  I(
                    {
                      className:
                        "h-10 flex justify-center items-center gap-2 bg-surface-50",
                    },
                    {
                      children: [
                        (0, r.jsx)(
                          "p",
                          I(
                            { className: "text-sm font-bold" },
                            { children: t },
                          ),
                        ),
                        (0, r.jsx)(
                          o.Tooltip,
                          I(
                            { title: n },
                            {
                              children: function (e) {
                                return (0, r.jsx)(
                                  "span",
                                  I(
                                    {},
                                    e,
                                    {
                                      className:
                                        "material-symbols-rounded leading-[0px]",
                                    },
                                    { children: "info" },
                                  ),
                                );
                              },
                            },
                          ),
                        ),
                      ],
                    },
                  ),
                ),
                (0, r.jsx)(
                  "div",
                  I(
                    {
                      className:
                        "bg-surface-10 w-full p-10 flex justify-center items-center",
                    },
                    {
                      children: (0, r.jsx)(
                        "p",
                        I(
                          { className: "text-xl font-soehneextrafett" },
                          { children: i },
                        ),
                      ),
                    },
                  ),
                ),
              ],
            },
          ),
        );
      };
      var P = function () {
        return (
          (P =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          P.apply(this, arguments)
        );
      };
      const _ = function (e) {
        var t = e.usage;
        return (0, r.jsx)(
          "div",
          P(
            {
              className:
                "flex items-center justify-between gap-6 flex-col md:flex-row",
            },
            {
              children: (0, r.jsx)(
                "div",
                P(
                  { className: "w-full max-w-[260px]" },
                  {
                    children: (0, r.jsx)(R, {
                      title: "MUGe",
                      titleInfo:
                        "Successful User Generated Emotes during the current month",
                      value: t.muge,
                    }),
                  },
                ),
              ),
            },
          ),
        );
      };
      var M = n(42155),
        D = n(87536),
        G = n(60809),
        L = n.n(G),
        V = function () {
          return (
            (V =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            V.apply(this, arguments)
          );
        },
        B = function (e, t) {
          if ((void 0 === t && (t = 25), e))
            return "maxLength" === e.type
              ? "Max ".concat(t, " characters (inc. spaces).")
              : e.message;
        };
      const K = function (e) {
        var t = e.next,
          n = e.back,
          i = (0, D.cI)(),
          a = i.control,
          l = i.handleSubmit,
          s = i.formState.errors;
        return (0, r.jsxs)(
          "form",
          V(
            {
              onSubmit: l(function (e) {
                return (
                  (n = void 0),
                  (r = void 0),
                  (a = function () {
                    return (function (e, t) {
                      var n,
                        r,
                        i,
                        a,
                        o = {
                          label: 0,
                          sent: function () {
                            if (1 & i[0]) throw i[1];
                            return i[1];
                          },
                          trys: [],
                          ops: [],
                        };
                      return (
                        (a = { next: l(0), throw: l(1), return: l(2) }),
                        "function" == typeof Symbol &&
                          (a[Symbol.iterator] = function () {
                            return this;
                          }),
                        a
                      );
                      function l(l) {
                        return function (s) {
                          return (function (l) {
                            if (n)
                              throw new TypeError(
                                "Generator is already executing.",
                              );
                            for (; a && ((a = 0), l[0] && (o = 0)), o; )
                              try {
                                if (
                                  ((n = 1),
                                  r &&
                                    (i =
                                      2 & l[0]
                                        ? r.return
                                        : l[0]
                                          ? r.throw ||
                                            ((i = r.return) && i.call(r), 0)
                                          : r.next) &&
                                    !(i = i.call(r, l[1])).done)
                                )
                                  return i;
                                switch (
                                  ((r = 0),
                                  i && (l = [2 & l[0], i.value]),
                                  l[0])
                                ) {
                                  case 0:
                                  case 1:
                                    i = l;
                                    break;
                                  case 4:
                                    return o.label++, { value: l[1], done: !1 };
                                  case 5:
                                    o.label++, (r = l[1]), (l = [0]);
                                    continue;
                                  case 7:
                                    (l = o.ops.pop()), o.trys.pop();
                                    continue;
                                  default:
                                    if (
                                      !(
                                        (i =
                                          (i = o.trys).length > 0 &&
                                          i[i.length - 1]) ||
                                        (6 !== l[0] && 2 !== l[0])
                                      )
                                    ) {
                                      o = 0;
                                      continue;
                                    }
                                    if (
                                      3 === l[0] &&
                                      (!i || (l[1] > i[0] && l[1] < i[3]))
                                    ) {
                                      o.label = l[1];
                                      break;
                                    }
                                    if (6 === l[0] && o.label < i[1]) {
                                      (o.label = i[1]), (i = l);
                                      break;
                                    }
                                    if (i && o.label < i[2]) {
                                      (o.label = i[2]), o.ops.push(l);
                                      break;
                                    }
                                    i[2] && o.ops.pop(), o.trys.pop();
                                    continue;
                                }
                                l = t.call(e, o);
                              } catch (e) {
                                (l = [6, e]), (r = 0);
                              } finally {
                                n = i = 0;
                              }
                            if (5 & l[0]) throw l[1];
                            return { value: l[0] ? l[1] : void 0, done: !0 };
                          })([l, s]);
                        };
                      }
                    })(this, function (n) {
                      return t(e), [2];
                    });
                  }),
                  new ((i = void 0) || (i = Promise))(function (e, t) {
                    function o(e) {
                      try {
                        s(a.next(e));
                      } catch (e) {
                        t(e);
                      }
                    }
                    function l(e) {
                      try {
                        s(a.throw(e));
                      } catch (e) {
                        t(e);
                      }
                    }
                    function s(t) {
                      var n;
                      t.done
                        ? e(t.value)
                        : ((n = t.value),
                          n instanceof i
                            ? n
                            : new i(function (e) {
                                e(n);
                              })).then(o, l);
                    }
                    s((a = a.apply(n, r || [])).next());
                  })
                );
                var n, r, i, a;
              }),
            },
            {
              children: [
                (0, r.jsx)(o.Fieldset, {
                  children: (0, r.jsx)(D.Qr, {
                    name: "companyName",
                    control: a,
                    rules: {
                      required: "Company Legal Name is required.",
                      maxLength: 25,
                      validate: function (e) {
                        return !L()().test(e) || "No emojis";
                      },
                    },
                    defaultValue: "",
                    render: function (e) {
                      var t = e.field;
                      return (0, r.jsx)(
                        o.Input,
                        V({}, t, {
                          autoFocus: !0,
                          label: "Company Legal Name",
                          errorMessage: B(s.companyName),
                        }),
                      );
                    },
                  }),
                }),
                (0, r.jsx)(o.Fieldset, {
                  children: (0, r.jsx)(D.Qr, {
                    name: "companyRegistrationNumber",
                    control: a,
                    rules: {
                      required: "Company Registration Number is required.",
                      maxLength: 25,
                      validate: function (e) {
                        return !L()().test(e) || "No emojis";
                      },
                    },
                    defaultValue: "",
                    render: function (e) {
                      var t = e.field;
                      return (0, r.jsx)(
                        o.Input,
                        V({}, t, {
                          label: "Company Registration Number",
                          errorMessage: B(s.companyRegistrationNumber),
                        }),
                      );
                    },
                  }),
                }),
                (0, r.jsx)(o.Fieldset, {
                  children: (0, r.jsx)(D.Qr, {
                    name: "firstName",
                    control: a,
                    rules: {
                      required: "First Name is required.",
                      maxLength: 25,
                      validate: function (e) {
                        return !L()().test(e) || "No emojis";
                      },
                    },
                    defaultValue: "",
                    render: function (e) {
                      var t = e.field;
                      return (0, r.jsx)(
                        o.Input,
                        V({}, t, {
                          label: "First Name",
                          errorMessage: B(s.firstName),
                        }),
                      );
                    },
                  }),
                }),
                (0, r.jsx)(o.Fieldset, {
                  children: (0, r.jsx)(D.Qr, {
                    name: "lastName",
                    control: a,
                    rules: {
                      required: "Last Name is required.",
                      maxLength: 25,
                      validate: function (e) {
                        return !L()().test(e) || "No emojis";
                      },
                    },
                    defaultValue: "",
                    render: function (e) {
                      var t = e.field;
                      return (0, r.jsx)(
                        o.Input,
                        V({}, t, {
                          label: "Last Name",
                          errorMessage: B(s.lastName),
                        }),
                      );
                    },
                  }),
                }),
                (0, r.jsx)(o.Fieldset, {
                  children: (0, r.jsx)(D.Qr, {
                    name: "email",
                    control: a,
                    rules: {
                      required: "E-mail Address is required.",
                      pattern: o.regexp.email,
                    },
                    defaultValue: "",
                    render: function (e) {
                      var t = e.field;
                      return (0, r.jsx)(
                        o.Input,
                        V({}, t, {
                          label: "E-mail Address",
                          errorMessage: (0, o.getEmailErrorMessage)(s.email),
                        }),
                      );
                    },
                  }),
                }),
                (0, r.jsx)(o.Fieldset, {
                  children: (0, r.jsx)(D.Qr, {
                    name: "phoneNumber",
                    control: a,
                    rules: {
                      required: "Phone Number is required.",
                      pattern: o.regexp.phoneNumber,
                    },
                    defaultValue: "",
                    render: function (e) {
                      var t = e.field;
                      return (0, r.jsx)(
                        o.Input,
                        V({}, t, {
                          label: "Phone Number",
                          errorMessage: (0, o.getPhoneNumberErrorMessage)(
                            s.phoneNumber,
                          ),
                        }),
                      );
                    },
                  }),
                }),
                (0, r.jsx)(o.Fieldset, {
                  children: (0, r.jsx)(D.Qr, {
                    name: "accountingEmail",
                    control: a,
                    rules: { pattern: o.regexp.email },
                    defaultValue: "",
                    render: function (e) {
                      var t = e.field;
                      return (0, r.jsx)(
                        o.Input,
                        V({}, t, {
                          label:
                            "Accounting E-mail Address (if different from main)",
                          errorMessage: (0, o.getEmailErrorMessage)(
                            s.accountingEmail,
                          ),
                        }),
                      );
                    },
                  }),
                }),
                (0, r.jsxs)(
                  "div",
                  V(
                    { className: "flex justify-between mt-6" },
                    {
                      children: [
                        (0, r.jsx)(o.Button, {
                          label: "Back",
                          kind: "secondary",
                          onClick: function () {
                            return n();
                          },
                        }),
                        (0, r.jsx)(o.Button, {
                          type: "submit",
                          label: "Next",
                          disabled: !!Object.keys(s).length,
                        }),
                      ],
                    },
                  ),
                ),
              ],
            },
          ),
        );
      };
      var F = function () {
          return (
            (F =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            F.apply(this, arguments)
          );
        },
        W = function (e, t) {
          if ((void 0 === t && (t = 50), e))
            return "maxLength" === e.type
              ? "Max ".concat(t, " characters (inc. spaces).")
              : e.message;
        };
      const q = function (e) {
        var t = e.next,
          n = e.back,
          i = e.withSameCheckbox,
          a = void 0 === i || i,
          l = (0, D.cI)(),
          s = l.control,
          u = l.handleSubmit,
          c = l.formState.errors,
          d = l.setValue;
        return (0, r.jsxs)(
          "form",
          F(
            {
              onSubmit: u(function (e) {
                return (
                  (n = void 0),
                  (r = void 0),
                  (a = function () {
                    return (function (e, t) {
                      var n,
                        r,
                        i,
                        a,
                        o = {
                          label: 0,
                          sent: function () {
                            if (1 & i[0]) throw i[1];
                            return i[1];
                          },
                          trys: [],
                          ops: [],
                        };
                      return (
                        (a = { next: l(0), throw: l(1), return: l(2) }),
                        "function" == typeof Symbol &&
                          (a[Symbol.iterator] = function () {
                            return this;
                          }),
                        a
                      );
                      function l(l) {
                        return function (s) {
                          return (function (l) {
                            if (n)
                              throw new TypeError(
                                "Generator is already executing.",
                              );
                            for (; a && ((a = 0), l[0] && (o = 0)), o; )
                              try {
                                if (
                                  ((n = 1),
                                  r &&
                                    (i =
                                      2 & l[0]
                                        ? r.return
                                        : l[0]
                                          ? r.throw ||
                                            ((i = r.return) && i.call(r), 0)
                                          : r.next) &&
                                    !(i = i.call(r, l[1])).done)
                                )
                                  return i;
                                switch (
                                  ((r = 0),
                                  i && (l = [2 & l[0], i.value]),
                                  l[0])
                                ) {
                                  case 0:
                                  case 1:
                                    i = l;
                                    break;
                                  case 4:
                                    return o.label++, { value: l[1], done: !1 };
                                  case 5:
                                    o.label++, (r = l[1]), (l = [0]);
                                    continue;
                                  case 7:
                                    (l = o.ops.pop()), o.trys.pop();
                                    continue;
                                  default:
                                    if (
                                      !(
                                        (i =
                                          (i = o.trys).length > 0 &&
                                          i[i.length - 1]) ||
                                        (6 !== l[0] && 2 !== l[0])
                                      )
                                    ) {
                                      o = 0;
                                      continue;
                                    }
                                    if (
                                      3 === l[0] &&
                                      (!i || (l[1] > i[0] && l[1] < i[3]))
                                    ) {
                                      o.label = l[1];
                                      break;
                                    }
                                    if (6 === l[0] && o.label < i[1]) {
                                      (o.label = i[1]), (i = l);
                                      break;
                                    }
                                    if (i && o.label < i[2]) {
                                      (o.label = i[2]), o.ops.push(l);
                                      break;
                                    }
                                    i[2] && o.ops.pop(), o.trys.pop();
                                    continue;
                                }
                                l = t.call(e, o);
                              } catch (e) {
                                (l = [6, e]), (r = 0);
                              } finally {
                                n = i = 0;
                              }
                            if (5 & l[0]) throw l[1];
                            return { value: l[0] ? l[1] : void 0, done: !0 };
                          })([l, s]);
                        };
                      }
                    })(this, function (n) {
                      return t(e), [2];
                    });
                  }),
                  new ((i = void 0) || (i = Promise))(function (e, t) {
                    function o(e) {
                      try {
                        s(a.next(e));
                      } catch (e) {
                        t(e);
                      }
                    }
                    function l(e) {
                      try {
                        s(a.throw(e));
                      } catch (e) {
                        t(e);
                      }
                    }
                    function s(t) {
                      var n;
                      t.done
                        ? e(t.value)
                        : ((n = t.value),
                          n instanceof i
                            ? n
                            : new i(function (e) {
                                e(n);
                              })).then(o, l);
                    }
                    s((a = a.apply(n, r || [])).next());
                  })
                );
                var n, r, i, a;
              }),
            },
            {
              children: [
                (0, r.jsx)(o.Fieldset, {
                  children: (0, r.jsx)(D.Qr, {
                    name: "streetAddress",
                    control: s,
                    rules: {
                      required: "Street Address is required.",
                      maxLength: 50,
                      validate: function (e) {
                        return !L()().test(e) || "No emojis";
                      },
                    },
                    defaultValue: "",
                    render: function (e) {
                      var t = e.field;
                      return (0, r.jsx)(
                        o.Input,
                        F({}, t, {
                          autoFocus: !0,
                          label: "Street Address",
                          errorMessage: W(c.streetAddress),
                        }),
                      );
                    },
                  }),
                }),
                (0, r.jsx)(o.Fieldset, {
                  children: (0, r.jsx)(D.Qr, {
                    name: "additionalAddressLine",
                    control: s,
                    rules: {
                      maxLength: 50,
                      validate: function (e) {
                        return !L()().test(e) || "No emojis";
                      },
                    },
                    defaultValue: "",
                    render: function (e) {
                      var t = e.field;
                      return (0, r.jsx)(
                        o.Input,
                        F({}, t, {
                          label: "Additional Address Line",
                          errorMessage: W(c.additionalAddressLine),
                        }),
                      );
                    },
                  }),
                }),
                (0, r.jsx)(o.Fieldset, {
                  children: (0, r.jsx)(D.Qr, {
                    name: "city",
                    control: s,
                    rules: {
                      required: "City is required.",
                      maxLength: 50,
                      validate: function (e) {
                        return !L()().test(e) || "No emojis";
                      },
                    },
                    defaultValue: "",
                    render: function (e) {
                      var t = e.field;
                      return (0, r.jsx)(
                        o.Input,
                        F({}, t, { label: "City", errorMessage: W(c.city) }),
                      );
                    },
                  }),
                }),
                (0, r.jsx)(o.Fieldset, {
                  children: (0, r.jsx)(D.Qr, {
                    name: "region",
                    control: s,
                    rules: {
                      required: "State/Province/Region is required.",
                      maxLength: 50,
                      validate: function (e) {
                        return !L()().test(e) || "No emojis";
                      },
                    },
                    defaultValue: "",
                    render: function (e) {
                      var t = e.field;
                      return (0, r.jsx)(
                        o.Input,
                        F({}, t, {
                          label: "State/Province/Region",
                          errorMessage: W(c.region),
                        }),
                      );
                    },
                  }),
                }),
                (0, r.jsx)(o.Fieldset, {
                  children: (0, r.jsx)(D.Qr, {
                    name: "zipCode",
                    control: s,
                    rules: {
                      required: "Postal/ZIP Code is required.",
                      maxLength: 50,
                      validate: function (e) {
                        return !L()().test(e) || "No emojis";
                      },
                    },
                    defaultValue: "",
                    render: function (e) {
                      var t = e.field;
                      return (0, r.jsx)(
                        o.Input,
                        F({}, t, {
                          label: "Postal/ZIP Code",
                          errorMessage: W(c.zipCode),
                        }),
                      );
                    },
                  }),
                }),
                (0, r.jsx)(o.Fieldset, {
                  children: (0, r.jsx)(D.Qr, {
                    name: "country",
                    control: s,
                    rules: {
                      required: "Country is required.",
                      maxLength: 50,
                      validate: function (e) {
                        return !L()().test(e) || "No emojis";
                      },
                    },
                    defaultValue: "",
                    render: function (e) {
                      var t = e.field;
                      return (0, r.jsx)(
                        o.Input,
                        F({}, t, {
                          label: "Country",
                          errorMessage: W(c.country),
                        }),
                      );
                    },
                  }),
                }),
                a &&
                  (0, r.jsx)(o.Fieldset, {
                    children: (0, r.jsx)(D.Qr, {
                      name: "sameInvoicingAddress",
                      control: s,
                      defaultValue: !1,
                      render: function (e) {
                        var t = e.field,
                          n = t.value,
                          i = (function (e, t) {
                            var n = {};
                            for (var r in e)
                              Object.prototype.hasOwnProperty.call(e, r) &&
                                t.indexOf(r) < 0 &&
                                (n[r] = e[r]);
                            if (
                              null != e &&
                              "function" == typeof Object.getOwnPropertySymbols
                            ) {
                              var i = 0;
                              for (
                                r = Object.getOwnPropertySymbols(e);
                                i < r.length;
                                i++
                              )
                                t.indexOf(r[i]) < 0 &&
                                  Object.prototype.propertyIsEnumerable.call(
                                    e,
                                    r[i],
                                  ) &&
                                  (n[r[i]] = e[r[i]]);
                            }
                            return n;
                          })(t, ["value"]);
                        return (0, r.jsx)(
                          o.Checkbox,
                          F({}, i, {
                            id: "sameInvoicingAddress",
                            checked: n,
                            label:
                              "Click here if your Invoicing address is different from your corporate address",
                            onChange: function (e) {
                              return d("sameInvoicingAddress", e);
                            },
                          }),
                        );
                      },
                    }),
                  }),
                (0, r.jsxs)(
                  "div",
                  F(
                    { className: "flex justify-between mt-6" },
                    {
                      children: [
                        (0, r.jsx)(o.Button, {
                          label: "Back",
                          kind: "secondary",
                          onClick: function () {
                            return n();
                          },
                        }),
                        (0, r.jsx)(o.Button, {
                          type: "submit",
                          label: "Next",
                          disabled: !!Object.keys(c).length,
                        }),
                      ],
                    },
                  ),
                ),
              ],
            },
          ),
        );
      };
      var Q = function () {
          return (
            (Q =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            Q.apply(this, arguments)
          );
        },
        Y = function (e, t) {
          if ((void 0 === t && (t = 250), e))
            return "maxLength" === e.type
              ? "Max ".concat(t, " characters (inc. spaces).")
              : e.message;
        };
      const z = function (e) {
        var t = e.next,
          n = e.back,
          a = (0, i.useState)(!1),
          l = a[0],
          s = a[1],
          u = (0, D.cI)(),
          c = u.control,
          d = u.handleSubmit,
          f = u.formState.errors;
        return (0, r.jsxs)(
          "form",
          Q(
            {
              onSubmit: d(function (e) {
                return (
                  (n = void 0),
                  (r = void 0),
                  (a = function () {
                    return (function (e, t) {
                      var n,
                        r,
                        i,
                        a,
                        o = {
                          label: 0,
                          sent: function () {
                            if (1 & i[0]) throw i[1];
                            return i[1];
                          },
                          trys: [],
                          ops: [],
                        };
                      return (
                        (a = { next: l(0), throw: l(1), return: l(2) }),
                        "function" == typeof Symbol &&
                          (a[Symbol.iterator] = function () {
                            return this;
                          }),
                        a
                      );
                      function l(l) {
                        return function (s) {
                          return (function (l) {
                            if (n)
                              throw new TypeError(
                                "Generator is already executing.",
                              );
                            for (; a && ((a = 0), l[0] && (o = 0)), o; )
                              try {
                                if (
                                  ((n = 1),
                                  r &&
                                    (i =
                                      2 & l[0]
                                        ? r.return
                                        : l[0]
                                          ? r.throw ||
                                            ((i = r.return) && i.call(r), 0)
                                          : r.next) &&
                                    !(i = i.call(r, l[1])).done)
                                )
                                  return i;
                                switch (
                                  ((r = 0),
                                  i && (l = [2 & l[0], i.value]),
                                  l[0])
                                ) {
                                  case 0:
                                  case 1:
                                    i = l;
                                    break;
                                  case 4:
                                    return o.label++, { value: l[1], done: !1 };
                                  case 5:
                                    o.label++, (r = l[1]), (l = [0]);
                                    continue;
                                  case 7:
                                    (l = o.ops.pop()), o.trys.pop();
                                    continue;
                                  default:
                                    if (
                                      !(
                                        (i =
                                          (i = o.trys).length > 0 &&
                                          i[i.length - 1]) ||
                                        (6 !== l[0] && 2 !== l[0])
                                      )
                                    ) {
                                      o = 0;
                                      continue;
                                    }
                                    if (
                                      3 === l[0] &&
                                      (!i || (l[1] > i[0] && l[1] < i[3]))
                                    ) {
                                      o.label = l[1];
                                      break;
                                    }
                                    if (6 === l[0] && o.label < i[1]) {
                                      (o.label = i[1]), (i = l);
                                      break;
                                    }
                                    if (i && o.label < i[2]) {
                                      (o.label = i[2]), o.ops.push(l);
                                      break;
                                    }
                                    i[2] && o.ops.pop(), o.trys.pop();
                                    continue;
                                }
                                l = t.call(e, o);
                              } catch (e) {
                                (l = [6, e]), (r = 0);
                              } finally {
                                n = i = 0;
                              }
                            if (5 & l[0]) throw l[1];
                            return { value: l[0] ? l[1] : void 0, done: !0 };
                          })([l, s]);
                        };
                      }
                    })(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return (
                            n.trys.push([0, , 2, 3]),
                            s(!0),
                            [4, t({ close: !1, others: e.others })]
                          );
                        case 1:
                          return n.sent(), [3, 3];
                        case 2:
                          return s(!1), [7];
                        case 3:
                          return [2];
                      }
                    });
                  }),
                  new ((i = void 0) || (i = Promise))(function (e, t) {
                    function o(e) {
                      try {
                        s(a.next(e));
                      } catch (e) {
                        t(e);
                      }
                    }
                    function l(e) {
                      try {
                        s(a.throw(e));
                      } catch (e) {
                        t(e);
                      }
                    }
                    function s(t) {
                      var n;
                      t.done
                        ? e(t.value)
                        : ((n = t.value),
                          n instanceof i
                            ? n
                            : new i(function (e) {
                                e(n);
                              })).then(o, l);
                    }
                    s((a = a.apply(n, r || [])).next());
                  })
                );
                var n, r, i, a;
              }),
            },
            {
              children: [
                (0, r.jsx)(o.Fieldset, {
                  children: (0, r.jsx)(D.Qr, {
                    name: "others",
                    control: c,
                    rules: {
                      maxLength: 250,
                      validate: function (e) {
                        return !L()().test(e) || "No emojis";
                      },
                    },
                    defaultValue: "",
                    render: function (e) {
                      var t = e.field;
                      return (0, r.jsx)(
                        o.Input,
                        Q({}, t, {
                          autoFocus: !0,
                          label: "Billing Notes",
                          errorMessage: Y(f.others),
                        }),
                      );
                    },
                  }),
                }),
                (0, r.jsx)(o.Fieldset, {
                  children: (0, r.jsx)(D.Qr, {
                    name: "isTerms",
                    control: c,
                    rules: { required: "Terms is required." },
                    defaultValue: !1,
                    render: function (e) {
                      var t = e.field;
                      return (0, r.jsx)(
                        o.Toggle,
                        Q({}, t, {
                          label: (0, r.jsxs)(r.Fragment, {
                            children: [
                              "I agree to the",
                              " ",
                              (0, r.jsx)(
                                "a",
                                Q(
                                  {
                                    href: "https://legal.kinetix.tech/",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "underline hover:text-primary",
                                  },
                                  { children: "Terms & Conditions" },
                                ),
                              ),
                            ],
                          }),
                        }),
                      );
                    },
                  }),
                }),
                (0, r.jsxs)(
                  "div",
                  Q(
                    { className: "flex justify-between mt-6" },
                    {
                      children: [
                        (0, r.jsx)(o.Button, {
                          label: "Back",
                          kind: "secondary",
                          onClick: function () {
                            return n();
                          },
                        }),
                        (0, r.jsx)(o.Button, {
                          type: "submit",
                          label: "Done",
                          loading: l,
                          disabled: !!Object.keys(f).length,
                        }),
                      ],
                    },
                  ),
                ),
              ],
            },
          ),
        );
      };
      var H = function () {
          return (
            (H =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            H.apply(this, arguments)
          );
        },
        Z = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
              t.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (n[r[i]] = e[r[i]]);
          }
          return n;
        },
        J = function (e, t, n) {
          if (n || 2 === arguments.length)
            for (var r, i = 0, a = t.length; i < a; i++)
              (!r && i in t) ||
                (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
          return e.concat(r || Array.prototype.slice.call(t));
        };
      const $ = function (e) {
        var t = e.open,
          n = e.onClose,
          a = e.onSuccess,
          s = (0, i.useState)(),
          u = s[0],
          c = s[1],
          d = (0, i.useState)(),
          f = d[0],
          p = d[1],
          h = (0, i.useState)(),
          m = h[0],
          x = h[1];
        return (0, r.jsxs)(
          o.Modal,
          H(
            {
              open: t,
              onClose: n,
              title: [
                "Enter your billing information",
                "to upgrade your plan to Unlimited",
              ],
              size: "lg",
            },
            {
              children: [
                (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsxs)(
                      "p",
                      H(
                        { className: "mb-2" },
                        {
                          children: [
                            "You can access our billing plan",
                            " ",
                            (0, r.jsx)(
                              "a",
                              H(
                                {
                                  className:
                                    "underline transition-all hover:text-primary",
                                  href: M.WR,
                                  title: "Access our billing plan",
                                  target: "_blank",
                                  rel: "noreferrer",
                                },
                                { children: "here" },
                              ),
                            ),
                            ".",
                          ],
                        },
                      ),
                    ),
                    (0, r.jsx)("p", {
                      children:
                        "You will be invoiced at the end of every month. You have 45 days to pay your invoice. Please ensure that the payment is made by the provided due date to avoid any disruption in your subscription service.",
                    }),
                  ],
                }),
                (0, r.jsx)(
                  "div",
                  H(
                    { className: "mt-6" },
                    {
                      children: (0, r.jsx)(o.VerticalStepper, {
                        Steps: J(
                          J(
                            [
                              {
                                label: "Main Contact Details",
                                Renderer: K,
                                onClickNextButton: function (e) {
                                  return c(e);
                                },
                              },
                              {
                                label: "Corporate Address",
                                Renderer: q,
                                onClickNextButton: function (e) {
                                  p(e), e.sameInvoicingAddress && x(e);
                                },
                              },
                            ],
                            !f || f.sameInvoicingAddress
                              ? [
                                  {
                                    label:
                                      "Invoicing Address (if different from Corporate Address)",
                                    Renderer: q,
                                    onClickNextButton: function (e) {
                                      return x(e);
                                    },
                                    withSameCheckbox: !1,
                                  },
                                ]
                              : [],
                            !0,
                          ),
                          [
                            {
                              label: "Anything else we need to know?",
                              Renderer: z,
                              onClickNextButton: function (e) {
                                var t,
                                  r,
                                  i,
                                  o,
                                  s = e.others;
                                return (
                                  (t = void 0),
                                  (r = void 0),
                                  (o = function () {
                                    var e, t, r;
                                    return (function (e, t) {
                                      var n,
                                        r,
                                        i,
                                        a,
                                        o = {
                                          label: 0,
                                          sent: function () {
                                            if (1 & i[0]) throw i[1];
                                            return i[1];
                                          },
                                          trys: [],
                                          ops: [],
                                        };
                                      return (
                                        (a = {
                                          next: l(0),
                                          throw: l(1),
                                          return: l(2),
                                        }),
                                        "function" == typeof Symbol &&
                                          (a[Symbol.iterator] = function () {
                                            return this;
                                          }),
                                        a
                                      );
                                      function l(l) {
                                        return function (s) {
                                          return (function (l) {
                                            if (n)
                                              throw new TypeError(
                                                "Generator is already executing.",
                                              );
                                            for (
                                              ;
                                              a && ((a = 0), l[0] && (o = 0)),
                                                o;

                                            )
                                              try {
                                                if (
                                                  ((n = 1),
                                                  r &&
                                                    (i =
                                                      2 & l[0]
                                                        ? r.return
                                                        : l[0]
                                                          ? r.throw ||
                                                            ((i = r.return) &&
                                                              i.call(r),
                                                            0)
                                                          : r.next) &&
                                                    !(i = i.call(r, l[1])).done)
                                                )
                                                  return i;
                                                switch (
                                                  ((r = 0),
                                                  i &&
                                                    (l = [2 & l[0], i.value]),
                                                  l[0])
                                                ) {
                                                  case 0:
                                                  case 1:
                                                    i = l;
                                                    break;
                                                  case 4:
                                                    return (
                                                      o.label++,
                                                      { value: l[1], done: !1 }
                                                    );
                                                  case 5:
                                                    o.label++,
                                                      (r = l[1]),
                                                      (l = [0]);
                                                    continue;
                                                  case 7:
                                                    (l = o.ops.pop()),
                                                      o.trys.pop();
                                                    continue;
                                                  default:
                                                    if (
                                                      !(
                                                        (i =
                                                          (i = o.trys).length >
                                                            0 &&
                                                          i[i.length - 1]) ||
                                                        (6 !== l[0] &&
                                                          2 !== l[0])
                                                      )
                                                    ) {
                                                      o = 0;
                                                      continue;
                                                    }
                                                    if (
                                                      3 === l[0] &&
                                                      (!i ||
                                                        (l[1] > i[0] &&
                                                          l[1] < i[3]))
                                                    ) {
                                                      o.label = l[1];
                                                      break;
                                                    }
                                                    if (
                                                      6 === l[0] &&
                                                      o.label < i[1]
                                                    ) {
                                                      (o.label = i[1]), (i = l);
                                                      break;
                                                    }
                                                    if (i && o.label < i[2]) {
                                                      (o.label = i[2]),
                                                        o.ops.push(l);
                                                      break;
                                                    }
                                                    i[2] && o.ops.pop(),
                                                      o.trys.pop();
                                                    continue;
                                                }
                                                l = t.call(e, o);
                                              } catch (e) {
                                                (l = [6, e]), (r = 0);
                                              } finally {
                                                n = i = 0;
                                              }
                                            if (5 & l[0]) throw l[1];
                                            return {
                                              value: l[0] ? l[1] : void 0,
                                              done: !0,
                                            };
                                          })([l, s]);
                                        };
                                      }
                                    })(this, function (i) {
                                      switch (i.label) {
                                        case 0:
                                          return u && f
                                            ? (f.sameInvoicingAddress,
                                              (e = Z(f, [
                                                "sameInvoicingAddress",
                                              ])),
                                              (t = H(H({}, u), {
                                                address: e,
                                                others: s,
                                              })),
                                              m
                                                ? (m.sameInvoicingAddress,
                                                  (r = Z(m, [
                                                    "sameInvoicingAddress",
                                                  ])),
                                                  (t = H(H({}, t), {
                                                    invoiceAddress: r,
                                                  })))
                                                : (t = H(H({}, t), {
                                                    invoiceAddress: e,
                                                  })),
                                              [4, (0, l.gC)(t)])
                                            : [2];
                                        case 1:
                                          return i.sent(), n(), a(), [2];
                                      }
                                    });
                                  }),
                                  new ((i = void 0) || (i = Promise))(function (
                                    e,
                                    n,
                                  ) {
                                    function a(e) {
                                      try {
                                        s(o.next(e));
                                      } catch (e) {
                                        n(e);
                                      }
                                    }
                                    function l(e) {
                                      try {
                                        s(o.throw(e));
                                      } catch (e) {
                                        n(e);
                                      }
                                    }
                                    function s(t) {
                                      var n;
                                      t.done
                                        ? e(t.value)
                                        : ((n = t.value),
                                          n instanceof i
                                            ? n
                                            : new i(function (e) {
                                                e(n);
                                              })).then(a, l);
                                    }
                                    s((o = o.apply(t, r || [])).next());
                                  })
                                );
                              },
                            },
                          ],
                          !1,
                        ),
                      }),
                    },
                  ),
                ),
              ],
            },
          ),
        );
      };
      var X = function () {
          return (
            (X =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            X.apply(this, arguments)
          );
        },
        ee = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, a) {
            function o(e) {
              try {
                s(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function s(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(o, l);
            }
            s((r = r.apply(e, t || [])).next());
          });
        },
        te = function (e, t) {
          var n,
            r,
            i,
            a,
            o = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (a = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function l(l) {
            return function (s) {
              return (function (l) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a && ((a = 0), l[0] && (o = 0)), o; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & l[0]
                            ? r.return
                            : l[0]
                              ? r.throw || ((i = r.return) && i.call(r), 0)
                              : r.next) &&
                        !(i = i.call(r, l[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (l = [2 & l[0], i.value]), l[0])) {
                      case 0:
                      case 1:
                        i = l;
                        break;
                      case 4:
                        return o.label++, { value: l[1], done: !1 };
                      case 5:
                        o.label++, (r = l[1]), (l = [0]);
                        continue;
                      case 7:
                        (l = o.ops.pop()), o.trys.pop();
                        continue;
                      default:
                        if (
                          !(
                            (i = (i = o.trys).length > 0 && i[i.length - 1]) ||
                            (6 !== l[0] && 2 !== l[0])
                          )
                        ) {
                          o = 0;
                          continue;
                        }
                        if (
                          3 === l[0] &&
                          (!i || (l[1] > i[0] && l[1] < i[3]))
                        ) {
                          o.label = l[1];
                          break;
                        }
                        if (6 === l[0] && o.label < i[1]) {
                          (o.label = i[1]), (i = l);
                          break;
                        }
                        if (i && o.label < i[2]) {
                          (o.label = i[2]), o.ops.push(l);
                          break;
                        }
                        i[2] && o.ops.pop(), o.trys.pop();
                        continue;
                    }
                    l = t.call(e, o);
                  } catch (e) {
                    (l = [6, e]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & l[0]) throw l[1];
                return { value: l[0] ? l[1] : void 0, done: !0 };
              })([l, s]);
            };
          }
        };
      const ne = function (e) {
        var t = e.virtualWorld,
          n = e.isLimited,
          a = (0, i.useRef)(!1),
          s = (0, o.useApplications)().upgradePlan,
          u = (0, i.useState)(),
          c = u[0],
          d = u[1],
          f = (0, i.useState)(!1),
          p = f[0],
          h = f[1],
          m = (0, i.useState)(!1),
          x = m[0],
          v = m[1],
          y = function () {
            return ee(void 0, void 0, void 0, function () {
              return te(this, function (e) {
                switch (e.label) {
                  case 0:
                    return e.trys.push([0, 2, 3, 4]), v(!0), [4, s(t.uuid)];
                  case 1:
                    return e.sent(), [3, 4];
                  case 2:
                    return (
                      e.sent(),
                      o.toast.error("An error has occured, try again."),
                      [3, 4]
                    );
                  case 3:
                    return v(!1), [7];
                  case 4:
                    return [2];
                }
              });
            });
          };
        return (
          (0, i.useEffect)(function () {
            a.current ||
              ((a.current = !0),
              (0, l.Vq)(t).then(function (e) {
                return d(e);
              }));
          }, []),
          (0, r.jsxs)(
            "div",
            X(
              { className: "p-6 bg-surface-30 rounded-xl mt-6 max-w-4xl" },
              {
                children: [
                  (0, r.jsx)(o.Title, {
                    type: "h3",
                    text: ["User-Generated Emote", "Monitoring"],
                  }),
                  (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsx)(
                        "p",
                        X({ className: "font-bold" }, { children: "Mode:" }),
                      ),
                      (0, r.jsxs)(
                        "div",
                        X(
                          { className: "flex items-center gap-4 h-10" },
                          {
                            children: [
                              (0, r.jsx)(
                                "p",
                                X(
                                  {
                                    className:
                                      "flex items-center gap-2 ".concat(
                                        n ? "text-yellow" : "text-green",
                                      ),
                                  },
                                  { children: t.plan.name },
                                ),
                              ),
                              n &&
                                (0, r.jsx)(o.Button, {
                                  label: "Upgrade to Unlimited",
                                  loading: x,
                                  onClick: function () {
                                    return ee(
                                      void 0,
                                      void 0,
                                      void 0,
                                      function () {
                                        return te(this, function (e) {
                                          switch (e.label) {
                                            case 0:
                                              return (
                                                e.trys.push([0, 2, , 3]),
                                                v(!0),
                                                [4, (0, l.I4)()]
                                              );
                                            case 1:
                                              return e.sent(), y(), [3, 3];
                                            case 2:
                                              return e.sent(), h(!0), [3, 3];
                                            case 3:
                                              return [2];
                                          }
                                        });
                                      },
                                    );
                                  },
                                }),
                            ],
                          },
                        ),
                      ),
                    ],
                  }),
                  c &&
                    (0, r.jsx)("div", {
                      children: n
                        ? (0, r.jsx)(U, { virtualWorld: t, usage: c })
                        : (0, r.jsx)(_, { usage: c }),
                    }),
                  (0, r.jsx)($, {
                    open: p,
                    onClose: function () {
                      v(!1), h(!1);
                    },
                    onSuccess: function () {
                      return y();
                    },
                  }),
                ],
              },
            ),
          )
        );
      };
      var re = function () {
        return (
          (re =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          re.apply(this, arguments)
        );
      };
      const ie = function (e) {
        var t = e.title,
          n = e.subTitle,
          a = e.localStorageName,
          l = e.children,
          s = (0, i.useState)(
            (function (e) {
              return "false" !== window.localStorage.getItem(e);
            })(a),
          ),
          u = s[0],
          c = s[1];
        return (0, r.jsxs)(
          "div",
          re(
            { className: "p-6 bg-surface-30 rounded-xl mt-6 max-w-4xl" },
            {
              children: [
                (0, r.jsxs)(
                  "div",
                  re(
                    {
                      className: "flex justify-between",
                      "data-cy": "virtualWorldApiKeyHeader",
                    },
                    {
                      children: [
                        (0, r.jsxs)(
                          "div",
                          re(
                            { className: "flex gap-4 items-center" },
                            {
                              children: [
                                (0, r.jsx)(o.Title, {
                                  className: "!mb-0",
                                  type: "h3",
                                  text: t,
                                }),
                                n &&
                                  (0, r.jsx)(
                                    "p",
                                    re(
                                      { className: "text-primary text-sm" },
                                      { children: n },
                                    ),
                                  ),
                              ],
                            },
                          ),
                        ),
                        (0, r.jsx)(
                          "div",
                          re(
                            {
                              className:
                                "mt-1 underline hover:text-primary cursor-pointer",
                              onClick: function () {
                                var e = !u;
                                c(e), window.localStorage.setItem(a, e);
                              },
                            },
                            { children: u ? "Hide" : "Show" },
                          ),
                        ),
                      ],
                    },
                  ),
                ),
                (0, r.jsx)(
                  "div",
                  re(
                    {
                      className: "relative transition-all duration-300 ".concat(
                        u
                          ? "max-h-max delay-300"
                          : "max-h-0 delay-0 -z-10 overflow-hidden",
                      ),
                    },
                    {
                      children: (0, r.jsx)(
                        "div",
                        re(
                          {
                            className:
                              "relative transition-opacity duration-300 pt-4 ".concat(
                                u
                                  ? "opacity-100 delay-300"
                                  : "opacity-0 delay-0 -z-10",
                              ),
                          },
                          { children: l },
                        ),
                      ),
                    },
                  ),
                ),
              ],
            },
          ),
        );
      };
      var ae = function () {
        return (
          (ae =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          ae.apply(this, arguments)
        );
      };
      const oe = function () {
        return (0, r.jsx)(
          ie,
          ae(
            {
              title: ["Integrate Kinetix", "SDK"],
              localStorageName: "devPortal-Dashboard-SetUpYourSdk-isExpanded",
            },
            {
              children: (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsxs)(
                    "p",
                    ae(
                      { className: "mb-4" },
                      {
                        children: [
                          "Activate your ",
                          (0, r.jsx)(
                            "span",
                            ae(
                              { className: "text-primary" },
                              { children: "Game API Key" },
                            ),
                          ),
                          " using the prompt on these pages:",
                          (0, r.jsx)(
                            "a",
                            ae(
                              {
                                className:
                                  "underline transition-all hover:text-primary",
                                href: "https://docs.kinetix.tech/integration/integrate-kinetix-sdk/sdk-integration-in-unity/set-up-unity-and-import-the-sdk/get-your-game-authentification-api-key",
                                title: "Unity",
                                target: "_blank",
                                rel: "noreferrer",
                              },
                              { children: "Unity" },
                            ),
                          ),
                          ",",
                          " ",
                          (0, r.jsx)(
                            "a",
                            ae(
                              {
                                className:
                                  "underline transition-all hover:text-primary",
                                href: "https://docs.kinetix.tech/integration/integrate-kinetix-sdk/sdk-integration-in-unreal-engine/set-up-unreal-engine-and-download-the-sdk/get-your-game-authentification-api-key",
                                title: "Unreal Engine",
                                target: "_blank",
                                rel: "noreferrer",
                              },
                              { children: "Unreal Engine" },
                            ),
                          ),
                          ". Then follow through the steps below to get started!",
                        ],
                      },
                    ),
                  ),
                  (0, r.jsx)(
                    "ul",
                    ae(
                      {
                        className:
                          "flex flex-col gap-2 w-full items-center md:flex-row",
                      },
                      {
                        children: [
                          {
                            label: "Set up your game engine",
                            unityUri:
                              "https://docs.kinetix.tech/integration/integrate-kinetix-sdk/sdk-integration-in-unity/set-up-unity-and-import-the-sdk/setup-your-unity-environment",
                            unrealUri:
                              "https://docs.kinetix.tech/integration/integrate-kinetix-sdk/sdk-integration-in-unreal-engine/set-up-unreal-engine-and-download-the-sdk/set-up-your-unreal-engine-environment",
                          },
                          {
                            label: "Download Kinetix SDK's Core Package",
                            unityUri:
                              "https://docs.kinetix.tech/integration/integrate-kinetix-sdk/sdk-integration-in-unity/set-up-unity-and-import-the-sdk/install-the-kinetix-sdk-in-unity",
                            unrealUri:
                              "https://docs.kinetix.tech/integration/integrate-kinetix-sdk/sdk-integration-in-unreal-engine/set-up-unreal-engine-and-download-the-sdk/import-kinetixcore-in-unreal-engine",
                          },
                          {
                            label: "Initialize the Core Package",
                            unityUri:
                              "https://docs.kinetix.tech/integration/integrate-kinetix-sdk/sdk-integration-in-unity/initialize-the-unity-sdks-core-package",
                            unrealUri:
                              "https://docs.kinetix.tech/integration/integrate-kinetix-sdk/sdk-integration-in-unreal-engine/initialize-the-unreal-sdks-core-package",
                          },
                          {
                            label: "Configure Optional Modules",
                            unityUri:
                              "https://docs.kinetix.tech/integration/integrate-kinetix-sdk/sdk-integration-in-unity/unity-sdk-configure-optional-modules",
                            unrealUri:
                              "https://docs.kinetix.tech/integration/integrate-kinetix-sdk/sdk-integration-in-unreal-engine/unreal-sdk-configure-optional-modules",
                          },
                        ].map(function (e, t) {
                          return (0, r.jsxs)(
                            i.Fragment,
                            {
                              children: [
                                !!t &&
                                  (0, r.jsxs)(
                                    "li",
                                    ae(
                                      { className: "h-12" },
                                      {
                                        children: [
                                          (0, r.jsx)(
                                            "span",
                                            ae(
                                              {
                                                className:
                                                  "material-symbols-rounded text-5xl hidden md:block",
                                              },
                                              { children: "east" },
                                            ),
                                          ),
                                          (0, r.jsx)(
                                            "span",
                                            ae(
                                              {
                                                className:
                                                  "material-symbols-rounded text-5xl block md:hidden",
                                              },
                                              { children: "south" },
                                            ),
                                          ),
                                        ],
                                      },
                                    ),
                                  ),
                                (0, r.jsxs)(
                                  "li",
                                  ae(
                                    {
                                      className:
                                        "bg-surface-60 rounded-xl py-4 px-4 w-full md:w-56",
                                    },
                                    {
                                      children: [
                                        (0, r.jsx)(
                                          "p",
                                          ae(
                                            {
                                              className:
                                                "text-sm font-bold text-center w-full mb-2",
                                            },
                                            { children: e.label },
                                          ),
                                        ),
                                        (0, r.jsxs)(
                                          "p",
                                          ae(
                                            {
                                              className:
                                                "flex justify-center gap-4 text-sm",
                                            },
                                            {
                                              children: [
                                                (0, r.jsx)(
                                                  "a",
                                                  ae(
                                                    {
                                                      href: e.unityUri,
                                                      title:
                                                        'Open Unity documentation for "'.concat(
                                                          e.label,
                                                          '"',
                                                        ),
                                                      className:
                                                        "underline hover:text-primary",
                                                      target: "_blank",
                                                    },
                                                    { children: "Unity" },
                                                  ),
                                                ),
                                                (0, r.jsx)(
                                                  "a",
                                                  ae(
                                                    {
                                                      href: e.unrealUri,
                                                      title:
                                                        'Open Unreal documentation for "'.concat(
                                                          e.label,
                                                          '"',
                                                        ),
                                                      className:
                                                        "underline hover:text-primary",
                                                      target: "_blank",
                                                    },
                                                    { children: "Unreal" },
                                                  ),
                                                ),
                                              ],
                                            },
                                          ),
                                        ),
                                      ],
                                    },
                                  ),
                                ),
                              ],
                            },
                            "functionalities-".concat(t),
                          );
                        }),
                      },
                    ),
                  ),
                ],
              }),
            },
          ),
        );
      };
      var le = n(12599);
      const se = n.p + "f3b940b591d440fc5bac.png",
        ue = n.p + "61bb93ae3f621fbcfd4d.png";
      var ce = n(85604),
        de = n(96233),
        fe = function () {
          return (
            (fe =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            fe.apply(this, arguments)
          );
        };
      const pe = function (e) {
        var t = e.title,
          n = e.index,
          i = e.isActive,
          a = e.isSelected,
          o = e.isDisabled,
          l = void 0 !== o && o,
          s = e.onSelect;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(
              "div",
              fe(
                {
                  className:
                    "flex items-center gap-6 my-2 pr-6 relative ".concat(
                      i || l ? "" : "cursor-pointer",
                    ),
                  onClick: function () {
                    return !l && s();
                  },
                },
                {
                  children: [
                    (0, r.jsx)(
                      "div",
                      fe(
                        {
                          className:
                            "flex items-center justify-center w-8 h-8 text-neutral-100 rounded-full font-medium ".concat(
                              a ? "bg-neutral-60" : "bg-primary",
                            ),
                        },
                        {
                          children: a
                            ? (0, r.jsx)(
                                "span",
                                fe(
                                  { className: "material-symbols-rounded" },
                                  { children: "done" },
                                ),
                              )
                            : (0, r.jsx)("p", { children: n + 1 }),
                        },
                      ),
                    ),
                    (0, r.jsx)(
                      "div",
                      fe(
                        { className: "flex items-center gap-3" },
                        {
                          children: (0, r.jsx)(
                            "p",
                            fe(
                              {
                                className: ""
                                  .concat(i ? "text-primary" : "", " ")
                                  .concat(a ? "text-neutral-60" : ""),
                              },
                              { children: t },
                            ),
                          ),
                        },
                      ),
                    ),
                    i &&
                      (0, r.jsx)("div", {
                        className:
                          "absolute -right-2  w-0 h-0 border-t-8 border-t-transparent  border-b-8 border-b-transparent  border-l-8 border-l-neutral-60",
                      }),
                  ],
                },
              ),
            ),
            (0, r.jsx)("div", {
              className:
                "relative w-full min-h-[24px] pl-14 before:absolute before:h-full before:w-[1px] before:bg-neutral-100 before-top-0 before:left-4 last:hidden",
            }),
          ],
        });
      };
      var he = function () {
        return (
          (he =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          he.apply(this, arguments)
        );
      };
      const me = function (e) {
        var t = e.step,
          n = e.texts,
          i = e.imageUri,
          a = e.buttonLabel,
          l = e.onClickPrimaryButton,
          s = e.onClickNextButton;
        return (0, r.jsxs)(
          "div",
          he(
            { className: "flex items-center gap-4" },
            {
              children: [
                (0, r.jsxs)(
                  "div",
                  he(
                    { className: "w-1/2 flex-1" },
                    {
                      children: [
                        n.map(function (e, n) {
                          return (0, r.jsx)(
                            "p",
                            he(
                              { className: "mb-2 text-center" },
                              { children: e },
                            ),
                            "StepContent-text-".concat(t, "-").concat(n),
                          );
                        }),
                        (0, r.jsxs)(
                          "div",
                          he(
                            { className: "flex flex-col gap-2 mt-4" },
                            {
                              children: [
                                (0, r.jsx)(o.Button, {
                                  label: a,
                                  onClick: function () {
                                    return l();
                                  },
                                }),
                                s &&
                                  (0, r.jsx)(o.Button, {
                                    className: "underline",
                                    kind: "flat",
                                    label: "Next",
                                    onClick: function () {
                                      return s();
                                    },
                                  }),
                              ],
                            },
                          ),
                        ),
                      ],
                    },
                  ),
                ),
                (0, r.jsx)(
                  "div",
                  he(
                    { className: "w-1/2" },
                    {
                      children: (0, r.jsx)("img", {
                        src: i,
                        alt: "Step preview",
                      }),
                    },
                  ),
                ),
              ],
            },
          ),
        );
      };
      var xe = function () {
        return (
          (xe =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          xe.apply(this, arguments)
        );
      };
      const ve = function () {
        var e = (0, a.UO)(),
          t = (null == e ? void 0 : e.uuid) || "",
          n = (0, a.s0)(),
          l = (0, o.useAuth)(),
          s = l.getCustomAttribute,
          u = l.updateCustomAttribute,
          c = (0, i.useState)([]),
          d = c[0],
          f = c[1],
          p = (0, i.useState)(ce._.UPLOAD_AVATAR),
          h = p[0],
          m = p[1],
          x = (0, i.useState)([
            ce._.CREATE_ACCOUNT,
            ce._.UPLOAD_AVATAR,
            ce._.USER_GENERATED_EMOTES,
            ce._.MODERATE_USER_GENERATED_EMOTES,
          ])[0],
          v = [
            {
              step: ce._.CREATE_ACCOUNT,
              title: "Create your account",
              isDisabled: !0,
            },
            {
              step: ce._.UPLOAD_AVATAR,
              title: "Upload your Avatar!",
              texts: [
                "Effortlessly upload and manage your avatar's 3D files.",
                "You can then view all emotes directly on your avatar.",
              ],
              imageUri: se,
              buttonLabel: "Upload now!",
              onClickPrimaryButton: function () {
                return n((0, le.Gn)(de.n.AVATAR_MANAGEMENT.path, { uuid: t }));
              },
            },
            {
              step: ce._.USER_GENERATED_EMOTES,
              title: "Try User-Generated Emotes",
              texts: [
                "Try the AI User-Generated Emotes feature.",
                "Have a look to the AI User-Generation feature that allows your players to create custom emotes from a simple video.",
              ],
              imageUri: ue,
              buttonLabel: "Go!",
              onClickPrimaryButton: function () {
                return n(
                  (0, le.Gn)(de.n.USER_GENERATED_EMOTES.path, { uuid: t }),
                );
              },
            },
            {
              step: ce._.MODERATE_USER_GENERATED_EMOTES,
              title: "Moderate user-generated emotes",
              texts: [
                "Potential undesirable UGC is automatically detected.",
                "Monitor the content available in your game.",
              ],
              imageUri: ue,
              buttonLabel: "Go!",
              onClickPrimaryButton: function () {
                return n((0, le.Gn)(de.n.USER_MODERATION.path, { uuid: t }));
              },
              hideNextButton: !0,
            },
          ],
          y = v.find(function (e) {
            return e.step === h;
          }),
          b = function (e, t) {
            for (
              var n = [
                  ce._.UPLOAD_AVATAR,
                  ce._.USER_GENERATED_EMOTES,
                  ce._.MODERATE_USER_GENERATED_EMOTES,
                ],
                r = n.indexOf(e) + 1,
                i = n.length;
              r < i;
              r++
            )
              if (!t.includes(n[r])) return n[r];
          },
          g = function (e, t) {
            var n = b(e, t);
            n && m(n);
          };
        return (
          (0, i.useEffect)(function () {
            s("custom:devportal_onboarding").then(function (e) {
              if (e) {
                var t = JSON.parse(e);
                return (
                  g(ce._.CREATE_ACCOUNT, t),
                  f(
                    t.filter(function (e) {
                      return x.includes(e);
                    }),
                  )
                );
              }
              var n = [ce._.CREATE_ACCOUNT];
              f(n), u("custom:devportal_onboarding", JSON.stringify(n));
            });
          }, []),
          d.length !== v.length && d.length
            ? (0, r.jsx)(
                ie,
                xe(
                  {
                    title: ["", "Explore", "your Developer Portal!"],
                    subTitle: ""
                      .concat(d.length, "/")
                      .concat(v.length, " done"),
                    localStorageName:
                      "devPortal-Dashboard-ExploreYourDeveloperPortal-isExpanded",
                  },
                  {
                    children: (0, r.jsxs)(
                      "div",
                      xe(
                        { className: "flex" },
                        {
                          children: [
                            (0, r.jsx)(
                              "div",
                              xe(
                                {
                                  className:
                                    "flex flex-col justify-around border-r border-r-neutral-60",
                                },
                                {
                                  children: v.map(function (e, t) {
                                    return (0, r.jsx)(
                                      pe,
                                      {
                                        title: e.title,
                                        index: t,
                                        isSelected: d.includes(e.step),
                                        isActive: h === e.step,
                                        onSelect: function () {
                                          return m(e.step);
                                        },
                                        isDisabled: e.isDisabled,
                                      },
                                      "ExploreYourDeveloperPortal-step-".concat(
                                        t,
                                      ),
                                    );
                                  }),
                                },
                              ),
                            ),
                            (0, r.jsx)(
                              "div",
                              xe(
                                {
                                  className:
                                    "flex-1 px-6 flex flex-col items-center justify-center",
                                },
                                {
                                  children:
                                    y &&
                                    y.texts &&
                                    (0, r.jsx)(me, {
                                      step: y.step,
                                      texts: y.texts,
                                      imageUri: y.imageUri,
                                      buttonLabel: y.buttonLabel,
                                      onClickPrimaryButton:
                                        y.onClickPrimaryButton,
                                      onClickNextButton: b(y.step, d)
                                        ? function () {
                                            return g(y.step, d);
                                          }
                                        : void 0,
                                    }),
                                },
                              ),
                            ),
                          ],
                        },
                      ),
                    ),
                  },
                ),
              )
            : null
        );
      };
      var ye = function (e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, i = 0, a = t.length; i < a; i++)
            (!r && i in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
        return e.concat(r || Array.prototype.slice.call(t));
      };
      const be = function () {
        var e = (0, a.UO)(),
          t = (0, o.useApplications)(),
          n = t.getApplicationsByUuid,
          u = t.removeApplication,
          d = (0, i.useState)(),
          f = d[0],
          p = d[1],
          h = (0, i.useState)(),
          m = h[0],
          x = h[1],
          v = (0, i.useState)(!1),
          y = v[0],
          b = v[1];
        return (
          (0, i.useEffect)(
            function () {
              var t = n((null == e ? void 0 : e.uuid) || "");
              p(t);
            },
            [e],
          ),
          (0, i.useEffect)(
            function () {
              var e;
              f &&
                (b(
                  !!(null === (e = null == f ? void 0 : f.plan) || void 0 === e
                    ? void 0
                    : e.callsLimit),
                ),
                (0, l.Bd)(f.uuid).then(function (e) {
                  x(e);
                }));
            },
            [f],
          ),
          f && m
            ? (0, r.jsx)(s.Z, {
                children: (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(c, {
                      virtualWorldUuid: f.uuid,
                      removeVirtualWorld: u,
                    }),
                    (0, r.jsxs)("div", {
                      children: [
                        (0, r.jsx)(w, {
                          apiKey: m[0],
                          virtualWorld: f,
                          MissingRenderer: E,
                          addNewApiKey: function (e) {
                            return x(ye(ye([], m, !0), [e], !1));
                          },
                          remove: function (e) {
                            return x(
                              m.filter(function (t) {
                                return t.uuid !== e;
                              }),
                            );
                          },
                        }),
                        (0, r.jsx)(ve, {}),
                        "SDK" === f.configuration.mainUsage &&
                          (0, r.jsx)(oe, {}),
                        f.plan &&
                          (0, r.jsx)(ne, { virtualWorld: f, isLimited: y }),
                      ],
                    }),
                  ],
                }),
              })
            : (0, r.jsx)(o.Loader, {})
        );
      };
    },
    85604: (e, t, n) => {
      var r;
      n.d(t, { _: () => r }),
        (function (e) {
          (e.CREATE_ACCOUNT = "CREATE_ACCOUNT"),
            (e.UPLOAD_AVATAR = "UPLOAD_AVATAR"),
            (e.EMOTE_LIBRARY = "EMOTE_LIBRARY"),
            (e.USER_GENERATED_EMOTES = "USER_GENERATED_EMOTES"),
            (e.ALIAS = "ALIAS"),
            (e.MODERATE_USER_GENERATED_EMOTES =
              "MODERATE_USER_GENERATED_EMOTES");
        })(r || (r = {}));
    },
  },
]);
