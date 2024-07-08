(self.webpackChunkkinetix_virtual_world_companion =
  self.webpackChunkkinetix_virtual_world_companion || []).push([
  [179],
  {
    37700: (e, t, n) => {
      "use strict";
      var r = n(85893),
        o = n(67294),
        a = n(20745),
        i = n(79655),
        c = n(27306),
        l = n(672),
        s = n.n(l);
      window.APP_VERSION = "0.1.12";
      var u = window._env_.REACT_APP_ENV || "production",
        f =
          window._env_.REACT_APP_API_BASE_URL ||
          "https://motion-portal.kinetix.tech",
        p =
          "string" == typeof window._env_.REACT_APP_STORAGE_BASE_URL
            ? window._env_.REACT_APP_STORAGE_BASE_URL
            : "https://storage.kinetix.tech",
        d =
          (window.location.hostname.split(".")[0],
          "".concat(p, "/vwc-campaigns/demo")),
        h = function (e) {
          return "".concat(d).concat(e);
        },
        m = function () {
          return (
            (m =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            m.apply(this, arguments)
          );
        },
        v = (0, o.createContext)({}),
        x = function (e) {
          var t = e.children,
            n = (0, o.useRef)(!1),
            a = (0, o.useState)(),
            i = a[0],
            c = a[1];
          return (
            (0, o.useEffect)(function () {
              var e, t, r, o;
              n.current ||
                ((n.current = !0),
                (e = void 0),
                (t = void 0),
                (o = function () {
                  var e;
                  return (function (e, t) {
                    var n,
                      r,
                      o,
                      a,
                      i = {
                        label: 0,
                        sent: function () {
                          if (1 & o[0]) throw o[1];
                          return o[1];
                        },
                        trys: [],
                        ops: [],
                      };
                    return (
                      (a = { next: c(0), throw: c(1), return: c(2) }),
                      "function" == typeof Symbol &&
                        (a[Symbol.iterator] = function () {
                          return this;
                        }),
                      a
                    );
                    function c(c) {
                      return function (l) {
                        return (function (c) {
                          if (n)
                            throw new TypeError(
                              "Generator is already executing.",
                            );
                          for (; a && ((a = 0), c[0] && (i = 0)), i; )
                            try {
                              if (
                                ((n = 1),
                                r &&
                                  (o =
                                    2 & c[0]
                                      ? r.return
                                      : c[0]
                                        ? r.throw ||
                                          ((o = r.return) && o.call(r), 0)
                                        : r.next) &&
                                  !(o = o.call(r, c[1])).done)
                              )
                                return o;
                              switch (
                                ((r = 0), o && (c = [2 & c[0], o.value]), c[0])
                              ) {
                                case 0:
                                case 1:
                                  o = c;
                                  break;
                                case 4:
                                  return i.label++, { value: c[1], done: !1 };
                                case 5:
                                  i.label++, (r = c[1]), (c = [0]);
                                  continue;
                                case 7:
                                  (c = i.ops.pop()), i.trys.pop();
                                  continue;
                                default:
                                  if (
                                    !(
                                      (o =
                                        (o = i.trys).length > 0 &&
                                        o[o.length - 1]) ||
                                      (6 !== c[0] && 2 !== c[0])
                                    )
                                  ) {
                                    i = 0;
                                    continue;
                                  }
                                  if (
                                    3 === c[0] &&
                                    (!o || (c[1] > o[0] && c[1] < o[3]))
                                  ) {
                                    i.label = c[1];
                                    break;
                                  }
                                  if (6 === c[0] && i.label < o[1]) {
                                    (i.label = o[1]), (o = c);
                                    break;
                                  }
                                  if (o && i.label < o[2]) {
                                    (i.label = o[2]), i.ops.push(c);
                                    break;
                                  }
                                  o[2] && i.ops.pop(), i.trys.pop();
                                  continue;
                              }
                              c = t.call(e, i);
                            } catch (e) {
                              (c = [6, e]), (r = 0);
                            } finally {
                              n = o = 0;
                            }
                          if (5 & c[0]) throw c[1];
                          return { value: c[0] ? c[1] : void 0, done: !0 };
                        })([c, l]);
                      };
                    }
                  })(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, fetch(h("/campaign-config.json"))];
                      case 1:
                        return [4, t.sent().json()];
                      case 2:
                        return (
                          (e = t.sent()),
                          c(
                            m(m({}, e), {
                              Trim: m(m({}, e.Trim), {
                                maxTrimDuration: e.Trim.maxTrimDuration || 10,
                              }),
                            }),
                          ),
                          [2]
                        );
                    }
                  });
                }),
                new ((r = void 0) || (r = Promise))(function (n, a) {
                  function i(e) {
                    try {
                      l(o.next(e));
                    } catch (e) {
                      a(e);
                    }
                  }
                  function c(e) {
                    try {
                      l(o.throw(e));
                    } catch (e) {
                      a(e);
                    }
                  }
                  function l(e) {
                    var t;
                    e.done
                      ? n(e.value)
                      : ((t = e.value),
                        t instanceof r
                          ? t
                          : new r(function (e) {
                              e(t);
                            })).then(i, c);
                  }
                  l((o = o.apply(e, t || [])).next());
                }));
            }),
            (0, o.useEffect)(
              function () {
                var e;
                if (i) {
                  var t = document.querySelector('meta[name="theme-color"]');
                  t &&
                    (null === (e = document.getElementById("splashScreen")) ||
                      void 0 === e ||
                      e.remove(),
                    t.setAttribute("content", s().colors["surface-10"])),
                    (function (e) {
                      void 0 === e && (e = "/touch-logo.svg");
                      var t = document.createElement("link");
                      (t.type = "image/vnd.microsoft.icon"),
                        (t.rel = "icon"),
                        (t.href = h("/favicon.ico")),
                        document.head.appendChild(t);
                      var n = document.createElement("link");
                      (n.type = "image/svg+xml"),
                        (n.rel = "apple-touch-icon"),
                        (n.href = h(e)),
                        document.head.appendChild(n);
                      var r = document.createElement("link");
                      (r.type = "application/json"),
                        (r.rel = "manifest"),
                        (r.href = h("/manifest.json")),
                        document.head.appendChild(r);
                    })(i.touchLogo),
                    i.applicationTitle && (document.title = i.applicationTitle);
                }
              },
              [i],
            ),
            i
              ? (0, r.jsx)(v.Provider, m({ value: m({}, i) }, { children: t }))
              : null
          );
        };
      const b = v,
        y = function (e) {
          var t = e.children,
            n = (0, o.useRef)(!1),
            a = (0, o.useContext)(b);
          return (
            (0, o.useEffect)(
              function () {
                a &&
                  !n.current &&
                  ((n.current = !0),
                  (function () {
                    (window._iub = window._iub || []),
                      (window._iub.csConfiguration = {
                        askConsentAtCookiePolicyUpdate: !0,
                        countryDetection: !0,
                        enableLgpd: !0,
                        enableUspr: !0,
                        invalidateConsentWithoutLog: !0,
                        lang: "en",
                        lgpdAppliesGlobally: !1,
                        perPurposeConsent: !0,
                        siteId: a.iubendaConfig.siteId,
                        whitelabel: !1,
                        cookiePolicyId: a.iubendaConfig.cookiePolicyId,
                        banner: {
                          acceptButtonCaptionColor: s().colors["neutral-100"],
                          acceptButtonColor: s().colors.primary,
                          acceptButtonDisplay: !0,
                          backgroundColor: s().colors["surface-10"],
                          brandBackgroundColor: s().colors["surface-10"],
                          closeButtonDisplay: !1,
                          customizeButtonDisplay: !0,
                          explicitWithdrawal: !0,
                          listPurposes: !0,
                          logo: h(a.logo),
                          linksColor: s().colors.primary,
                          position: "float-top-center",
                          rejectButtonColor: s().colors["primary-80"],
                          rejectButtonDisplay: !0,
                          textColor: s().colors["neutral-100"],
                        },
                      });
                    var e = document.createElement("script");
                    (e.type = "text/javascript"),
                      (e.src = "//cdn.iubenda.com/cs/gpp/stub.js"),
                      document.body.appendChild(e);
                    var t = document.createElement("script");
                    (t.type = "text/javascript"),
                      (t.async = !0),
                      (t.src = "//cdn.iubenda.com/cs/iubenda_cs.js"),
                      document.body.appendChild(t);
                  })());
              },
              [a],
            ),
            (0, r.jsx)(r.Fragment, { children: t })
          );
        };
      var O,
        w = n(89250);
      !(function (e) {
        (e.HOME = "HOME"),
          (e.SESSION_EXPIRED = "SESSION_EXPIRED"),
          (e.RECORD_VIDEO_ON_BOARDING = "RECORD_VIDEO_ON_BOARDING"),
          (e.RECORD_VIDEO = "RECORD_VIDEO"),
          (e.UPLOAD_VIDEO_ON_BOARDING = "UPLOAD_VIDEO_ON_BOARDING"),
          (e.UPLOAD_VIDEO = "UPLOAD_VIDEO"),
          (e.TRIM_VIDEO = "TRIM_VIDEO"),
          (e.BAD_VIDEO_FORMAT = "BAD_VIDEO_FORMAT"),
          (e.VIDEO_TOO_LONG = "VIDEO_TOO_LONG"),
          (e.EMOTE_INFORMATIONS = "EMOTE_INFORMATIONS"),
          (e.UPLOAD_VIDEO_FAILED = "UPLOAD_VIDEO_FAILED"),
          (e.EMOTE_CREATION_SUCCESS = "EMOTE_CREATION_SUCCESS");
      })(O || (O = {}));
      var j = function () {
        return (
          (j =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }),
          j.apply(this, arguments)
        );
      };
      const g = function () {
          var e = (0, i.useSearchParams)()[0],
            t = (0, w.s0)();
          return function (n, r, o) {
            void 0 === o && (o = {});
            var a = e.get("token"),
              i = Object.keys(o).reduce(function (e, t) {
                return o[t] ? "".concat(e, "&").concat(t, "=").concat(o[t]) : e;
              }, "?token=".concat(a));
            return t("".concat(n).concat(i), j({}, r));
          };
        },
        E = function (e) {
          var t = e.label,
            n = e.iconName,
            o = e.handleClick;
          return (0, r.jsx)(c.Button, {
            className:
              "w-full max-w-[240px] border border-neutral-100 rounded-xl h-[10vh]",
            kind: "flat",
            label: t,
            iconName: n,
            iconFontSize: 48,
            iconColorClassName: "text-primary",
            onClick: o,
          });
        };
      var N = function () {
        return (
          (N =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }),
          N.apply(this, arguments)
        );
      };
      var _ = function () {
        return (
          (_ =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }),
          _.apply(this, arguments)
        );
      };
      const C = function (e) {
        var t,
          n = e.title,
          o = e.text,
          a = (0, w.TH)(),
          i = g();
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(c.Title, {
              type: "h1",
              text: ["", "OUPS..."],
              className: "mt-[6vh] text-center !mb-0",
            }),
            (0, r.jsx)(c.Title, {
              type: "h2",
              text: [n],
              className: "mt-[7vh] text-center",
            }),
            (0, r.jsx)(
              "div",
              _(
                { className: "text-xl font-bold text-center mt-[8vh] !mb-0" },
                {
                  children: o.map(function (e, t) {
                    return (0, r.jsx)(
                      "p",
                      _({ className: "mt-[2vh] first:mt-0" }, { children: e }),
                      "ErrorPage-text-".concat(t),
                    );
                  }),
                },
              ),
            ),
            !!(null === (t = a.state) || void 0 === t ? void 0 : t.source) &&
              (0, r.jsx)(
                "div",
                _(
                  {
                    className:
                      "absolute bottom-0 left-0 right-0 py-[2vh] flex items-center justify-center",
                  },
                  {
                    children: (0, r.jsx)(c.Button, {
                      label: "Try again",
                      onClick: function () {
                        return i(
                          "UPLOAD" === a.state.source
                            ? fe.UPLOAD_VIDEO.path
                            : fe.RECORD_VIDEO.path,
                        );
                      },
                    }),
                  },
                ),
              ),
          ],
        });
      };
      var k = n(85518),
        D = n(1653),
        I = function () {
          return (
            (I =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            I.apply(this, arguments)
          );
        };
      const R = function (e) {
        var t = e.onBack;
        return (0, r.jsx)(
          "div",
          I(
            { className: "absolute top-4 left-[4vw]" },
            {
              children: (0, r.jsx)(c.Button, {
                className: "!px-0",
                kind: "flat",
                iconName: "chevron_left",
                iconFontSize: 32,
                onClick: function () {
                  return t();
                },
              }),
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
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }),
          P.apply(this, arguments)
        );
      };
      const S = function (e) {
        var t = e.children,
          n = g();
        return k.isMobile
          ? (0, r.jsx)(r.Fragment, { children: t })
          : (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(R, {
                  onBack: function () {
                    n(fe.HOME.path);
                  },
                }),
                (0, r.jsx)(c.Title, {
                  type: "h2",
                  text: ["", "Please select another method"],
                  className: "mt-[6vh] text-center max-w-[350px] mx-auto !mb-0",
                }),
                (0, r.jsxs)(
                  "div",
                  P(
                    { className: "mt-[2vh] max-w-[430px] mx-auto" },
                    {
                      children: [
                        (0, r.jsx)(
                          "p",
                          P(
                            {
                              className:
                                "text-base font-bold leading-[2.4vh] mb-[2vh]",
                            },
                            {
                              children:
                                "The Emote Creator Tool is best experienced on a mobile device.",
                            },
                          ),
                        ),
                        (0, r.jsx)(
                          "p",
                          P(
                            {
                              className: "text-base font-bold leading-[2.4vh]",
                            },
                            {
                              children:
                                "Please scan the below QR Code with you mobile to access the Emote Creator Tool or select another creation mode.",
                            },
                          ),
                        ),
                      ],
                    },
                  ),
                ),
                (0, r.jsx)(D.ZP, {
                  value: window.location.href,
                  className:
                    "m-auto mt-[5vh] h-auto w-auto border border-solid border-white",
                }),
                (0, r.jsx)(c.Button, {
                  className: "mx-auto mt-[5vh]",
                  label: "Back to Creation Modes",
                  onClick: function () {
                    return n(fe.HOME.path);
                  },
                }),
              ],
            });
      };
      var T = n(46066),
        A = function () {
          return (
            (A =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            A.apply(this, arguments)
          );
        };
      const B = function (e) {
        var t,
          n = e.backButtonRouteName,
          a = e.slider,
          i = e.nextButtonLabel,
          l = e.nextButtonCallback,
          s = g(),
          u = (0, w.TH)(),
          f = (0, o.useRef)(),
          p = (0, o.useState)(
            (null === (t = u.state) || void 0 === t ? void 0 : t.slideIndex) ||
              0,
          ),
          d = p[0],
          m = p[1];
        return (0, r.jsxs)(r.Fragment, {
          children: [
            n &&
              0 === d &&
              (0, r.jsx)(R, {
                onBack: function () {
                  return s(n);
                },
              }),
            0 !== d &&
              (0, r.jsx)(R, {
                onBack: function () {
                  if (f.current) {
                    var e = d - 1;
                    s(u.pathname, { state: { slideIndex: e } }),
                      f.current.slickGoTo(e);
                  }
                },
              }),
            !!a.length &&
              (0, r.jsxs)(
                "div",
                A(
                  { className: "mt-[9vh] w-full" },
                  {
                    children: [
                      (0, r.jsx)(
                        T.Z,
                        A(
                          { ref: f },
                          {
                            initialSlide: d,
                            dots: !1,
                            arrows: !1,
                            swipe: !0,
                            infinite: !1,
                            afterChange: function (e) {
                              return m(e);
                            },
                          },
                          {
                            children: a.map(function (e, t) {
                              return (0, r.jsxs)(
                                "div",
                                {
                                  children: [
                                    (0, r.jsx)(
                                      "div",
                                      A(
                                        { className: "h-[30vh]" },
                                        {
                                          children: (0, r.jsx)("img", {
                                            className: "mx-auto h-full",
                                            src: h(e.imageUrl),
                                            alt: e.imageUrl,
                                          }),
                                        },
                                      ),
                                    ),
                                    (0, r.jsx)(c.Title, {
                                      className: "text-center mt-[3vh] !mb-0",
                                      type: "h2",
                                      text: e.title,
                                      childrenClassName: ["", "block", ""],
                                    }),
                                    (0, r.jsx)(
                                      "ul",
                                      A(
                                        {
                                          className:
                                            "mt-[2vh] max-w-[250px] mx-auto",
                                        },
                                        {
                                          children: e.text.map(function (e, t) {
                                            return (0, r.jsx)(
                                              "li",
                                              A(
                                                {
                                                  className:
                                                    "list-disc text-base font-bold leading-[2.4vh] mb-[2vh] last:mb-0",
                                                },
                                                { children: e },
                                              ),
                                              "text-item-".concat(t),
                                            );
                                          }),
                                        },
                                      ),
                                    ),
                                  ],
                                },
                                "BrandingSliderItem-".concat(t),
                              );
                            }),
                          },
                        ),
                      ),
                      (0, r.jsxs)(
                        "div",
                        A(
                          { className: "absolute bottom-0 left-0 right-0" },
                          {
                            children: [
                              (0, r.jsx)(
                                "div",
                                A(
                                  { className: "flex justify-center" },
                                  {
                                    children: (0, r.jsx)(r.Fragment, {
                                      children: (0, r.jsx)(c.Button, {
                                        label: i,
                                        onClick: function () {
                                          return l();
                                        },
                                      }),
                                    }),
                                  },
                                ),
                              ),
                              a.length > 1 &&
                                (0, r.jsx)(
                                  "ul",
                                  A(
                                    {
                                      className:
                                        "flex justify-center items-center py-[2vh]",
                                    },
                                    {
                                      children: a.map(function (e, t) {
                                        return (0, r.jsx)(
                                          "li",
                                          {
                                            className:
                                              "w-3 h-3 bg-primary-80 rounded-full mx-1.5 ".concat(
                                                d === t ? "!bg-primary" : "",
                                              ),
                                            onClick: function () {
                                              return f.current.slickGoTo(t);
                                            },
                                          },
                                          "slider-dot-".concat(t),
                                        );
                                      }),
                                    },
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
        });
      };
      var L = n(13356),
        V = function () {
          return (
            (V =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            V.apply(this, arguments)
          );
        };
      var M = function () {
          return (
            (M =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            M.apply(this, arguments)
          );
        },
        U = function (e, t, n) {
          return t
            ? "border-green"
            : n
              ? "border-error-50"
              : e
                ? "border-primary"
                : "";
        };
      var F = function () {
          return (
            (F =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            F.apply(this, arguments)
          );
        },
        G = function (e) {
          var t = e.file,
            n = e.source,
            a = (0, w.s0)(),
            i = g(),
            l = (0, o.useContext)(b).Trim,
            s = (0, o.useState)(),
            u = s[0],
            f = s[1],
            p = (0, o.useState)(),
            d = p[0],
            h = p[1],
            m = (0, o.useState)(!1),
            v = m[0],
            x = m[1];
          return (
            (0, o.useEffect)(
              function () {
                return (
                  t &&
                    h(
                      URL.createObjectURL(new Blob([t], { type: "video/mp4" })),
                    ),
                  function () {
                    d && URL.revokeObjectURL(d);
                  }
                );
              },
              [t],
            ),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(R, {
                  onBack: function () {
                    a(-1);
                  },
                }),
                (0, r.jsx)(c.Title, {
                  type: "h2",
                  text: l.title,
                  className: "mt-[6vh] !mb-0 text-center max-w-[240px] mx-auto",
                }),
                (0, r.jsx)(c.Title, {
                  type: "h3",
                  text: l.subTitle,
                  className: "mt-[2vh] text-center max-w-[280px] mx-auto !mb-0",
                }),
                d &&
                  (0, r.jsxs)(
                    "div",
                    F(
                      { className: "pt-[5vh] w-full max-w-sm mx-auto px-4" },
                      {
                        children: [
                          (0, r.jsx)(c.TrimAndCropVideo, {
                            fileUrl: d,
                            maxTrimDuration: l.maxTrimDuration,
                            onError: function (e) {
                              return e === c.TrimAndCropVideoErrorType.TOO_LONG
                                ? i(fe.VIDEO_TOO_LONG.path, {
                                    state: { source: n },
                                  })
                                : i(fe.BAD_VIDEO_FORMAT.path, {
                                    state: { source: n },
                                  });
                            },
                            onUpdate: function (e) {
                              var t = e.selectedPeriod;
                              return f(t);
                            },
                            onTrimZoneIsReady: function () {
                              return x(!0);
                            },
                          }),
                          (0, r.jsx)(
                            "div",
                            F(
                              { className: "flex justify-center mt-[3vh]" },
                              {
                                children: (0, r.jsx)(c.Button, {
                                  disabled: !v,
                                  label: "continue",
                                  onClick: function () {
                                    return i(fe.EMOTE_INFORMATIONS.path, {
                                      state: {
                                        file: t,
                                        source: n,
                                        selectedPeriod: u,
                                      },
                                    });
                                  },
                                }),
                              },
                            ),
                          ),
                        ],
                      },
                    ),
                  ),
              ],
            })
          );
        };
      var H = n(39880),
        W = n(95639),
        X = function (e) {
          var t = (0, H.default)(new Date(2023, 8, 1, 0, 0, 0), e),
            n = e.toFixed(2).slice(-2),
            r = (0, W.default)(t, "HH:mm:ss");
          return "".concat(r, ".").concat(n, "0");
        },
        z = n(71257),
        Z = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, a) {
            function i(e) {
              try {
                l(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function c(e) {
              try {
                l(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(i, c);
            }
            l((r = r.apply(e, t || [])).next());
          });
        },
        q = function (e, t) {
          var n,
            r,
            o,
            a,
            i = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (a = { next: c(0), throw: c(1), return: c(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function c(c) {
            return function (l) {
              return (function (c) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a && ((a = 0), c[0] && (i = 0)), i; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & c[0]
                            ? r.return
                            : c[0]
                              ? r.throw || ((o = r.return) && o.call(r), 0)
                              : r.next) &&
                        !(o = o.call(r, c[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (c = [2 & c[0], o.value]), c[0])) {
                      case 0:
                      case 1:
                        o = c;
                        break;
                      case 4:
                        return i.label++, { value: c[1], done: !1 };
                      case 5:
                        i.label++, (r = c[1]), (c = [0]);
                        continue;
                      case 7:
                        (c = i.ops.pop()), i.trys.pop();
                        continue;
                      default:
                        if (
                          !(
                            (o = (o = i.trys).length > 0 && o[o.length - 1]) ||
                            (6 !== c[0] && 2 !== c[0])
                          )
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === c[0] &&
                          (!o || (c[1] > o[0] && c[1] < o[3]))
                        ) {
                          i.label = c[1];
                          break;
                        }
                        if (6 === c[0] && i.label < o[1]) {
                          (i.label = o[1]), (o = c);
                          break;
                        }
                        if (o && i.label < o[2]) {
                          (i.label = o[2]), i.ops.push(c);
                          break;
                        }
                        o[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    c = t.call(e, i);
                  } catch (e) {
                    (c = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & c[0]) throw c[1];
                return { value: c[0] ? c[1] : void 0, done: !0 };
              })([c, l]);
            };
          }
        },
        Q = { baseURL: f, withCredentials: !0 },
        Y = z.Z.create(Q),
        K = function (e, t) {
          return Z(void 0, void 0, void 0, function () {
            return q(this, function (n) {
              switch (n.label) {
                case 0:
                  return [
                    4,
                    Y.post("/v1/process", e, { headers: { "x-api-token": t } }),
                  ];
                case 1:
                  return [2, n.sent().data];
              }
            });
          });
        },
        J = function (e) {
          return Z(void 0, void 0, void 0, function () {
            return q(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, Y.get("/v1/process/token/".concat(e))];
                case 1:
                  return [2, t.sent().data];
              }
            });
          });
        },
        $ = n(87536),
        ee = n(12846),
        te = function () {
          return (
            (te =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            te.apply(this, arguments)
          );
        },
        ne = function (e) {
          if (e)
            return "maxLength" === e.type ? "Max 25 characters." : e.message;
        };
      const re = function (e) {
        var t = e.next,
          n = (0, o.useState)(!1),
          a = n[0],
          i = n[1],
          l = (0, $.cI)(),
          s = l.control,
          u = l.handleSubmit,
          f = l.formState.errors;
        return (0, r.jsxs)(
          "form",
          te(
            {
              onSubmit: u(function (e) {
                var n,
                  r,
                  o,
                  a,
                  i = e.name;
                return (
                  (n = void 0),
                  (r = void 0),
                  (a = function () {
                    return (function (e, t) {
                      var n,
                        r,
                        o,
                        a,
                        i = {
                          label: 0,
                          sent: function () {
                            if (1 & o[0]) throw o[1];
                            return o[1];
                          },
                          trys: [],
                          ops: [],
                        };
                      return (
                        (a = { next: c(0), throw: c(1), return: c(2) }),
                        "function" == typeof Symbol &&
                          (a[Symbol.iterator] = function () {
                            return this;
                          }),
                        a
                      );
                      function c(c) {
                        return function (l) {
                          return (function (c) {
                            if (n)
                              throw new TypeError(
                                "Generator is already executing.",
                              );
                            for (; a && ((a = 0), c[0] && (i = 0)), i; )
                              try {
                                if (
                                  ((n = 1),
                                  r &&
                                    (o =
                                      2 & c[0]
                                        ? r.return
                                        : c[0]
                                          ? r.throw ||
                                            ((o = r.return) && o.call(r), 0)
                                          : r.next) &&
                                    !(o = o.call(r, c[1])).done)
                                )
                                  return o;
                                switch (
                                  ((r = 0),
                                  o && (c = [2 & c[0], o.value]),
                                  c[0])
                                ) {
                                  case 0:
                                  case 1:
                                    o = c;
                                    break;
                                  case 4:
                                    return i.label++, { value: c[1], done: !1 };
                                  case 5:
                                    i.label++, (r = c[1]), (c = [0]);
                                    continue;
                                  case 7:
                                    (c = i.ops.pop()), i.trys.pop();
                                    continue;
                                  default:
                                    if (
                                      !(
                                        (o =
                                          (o = i.trys).length > 0 &&
                                          o[o.length - 1]) ||
                                        (6 !== c[0] && 2 !== c[0])
                                      )
                                    ) {
                                      i = 0;
                                      continue;
                                    }
                                    if (
                                      3 === c[0] &&
                                      (!o || (c[1] > o[0] && c[1] < o[3]))
                                    ) {
                                      i.label = c[1];
                                      break;
                                    }
                                    if (6 === c[0] && i.label < o[1]) {
                                      (i.label = o[1]), (o = c);
                                      break;
                                    }
                                    if (o && i.label < o[2]) {
                                      (i.label = o[2]), i.ops.push(c);
                                      break;
                                    }
                                    o[2] && i.ops.pop(), i.trys.pop();
                                    continue;
                                }
                                c = t.call(e, i);
                              } catch (e) {
                                (c = [6, e]), (r = 0);
                              } finally {
                                n = o = 0;
                              }
                            if (5 & c[0]) throw c[1];
                            return { value: c[0] ? c[1] : void 0, done: !0 };
                          })([c, l]);
                        };
                      }
                    })(this, function (e) {
                      return t({ name: i }), [2];
                    });
                  }),
                  new ((o = void 0) || (o = Promise))(function (e, t) {
                    function i(e) {
                      try {
                        l(a.next(e));
                      } catch (e) {
                        t(e);
                      }
                    }
                    function c(e) {
                      try {
                        l(a.throw(e));
                      } catch (e) {
                        t(e);
                      }
                    }
                    function l(t) {
                      var n;
                      t.done
                        ? e(t.value)
                        : ((n = t.value),
                          n instanceof o
                            ? n
                            : new o(function (e) {
                                e(n);
                              })).then(i, c);
                    }
                    l((a = a.apply(n, r || [])).next());
                  })
                );
              }),
              className: "w-full",
            },
            {
              children: [
                (0, r.jsx)(c.Fieldset, {
                  children: (0, r.jsx)($.Qr, {
                    name: "name",
                    control: s,
                    rules: {
                      required: "Emote Name is required.",
                      maxLength: 25,
                      validate: function (e) {
                        return !(0, ee.default)().test(e) || "No emojis";
                      },
                    },
                    defaultValue: "",
                    render: function (e) {
                      var t = e.field;
                      return (0, r.jsx)(
                        c.Input,
                        te({}, t, {
                          label: "Emote Name",
                          autoFocus: !0,
                          errorMessage: ne(f.name),
                        }),
                      );
                    },
                  }),
                }),
                (0, r.jsx)(c.Fieldset, {
                  children: (0, r.jsxs)(
                    "div",
                    te(
                      { className: "flex bg-surface-60 p-4 pl-2 gap-2" },
                      {
                        children: [
                          (0, r.jsx)("div", {
                            children: (0, r.jsx)(c.Checkbox, {
                              className: "!w-6 h-6",
                              name: "accept",
                              value: "accept",
                              id: "step1-accept",
                              checked: a,
                              onChange: function (e) {
                                return i(e);
                              },
                            }),
                          }),
                          (0, r.jsxs)(
                            "div",
                            te(
                              {
                                className: "text-xs",
                                onClick: function () {
                                  return i(!a);
                                },
                              },
                              {
                                children: [
                                  (0, r.jsx)("p", {
                                    children:
                                      "I have the right to use this name.",
                                  }),
                                  (0, r.jsx)("p", {
                                    children:
                                      "By ticking this box, I hereby confirm that my emote name does not include any trademark or copyright protected names (Brands, Personalities, etc).",
                                  }),
                                ],
                              },
                            ),
                          ),
                        ],
                      },
                    ),
                  ),
                }),
                (0, r.jsx)(
                  "div",
                  te(
                    { className: "flex justify-end w-full" },
                    {
                      children: (0, r.jsx)(c.Button, {
                        label: "Continue",
                        type: "submit",
                        disabled: !!Object.keys(f).length || !a,
                      }),
                    },
                  ),
                ),
              ],
            },
          ),
        );
      };
      var oe = function () {
        return (
          (oe =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }),
          oe.apply(this, arguments)
        );
      };
      const ae = function (e) {
        var t = e.back,
          n = e.next,
          a = (0, o.useState)(!1),
          i = a[0],
          l = a[1];
        return (0, r.jsxs)(
          "form",
          oe(
            {
              onSubmit: function (e) {
                return (
                  (t = void 0),
                  (r = void 0),
                  (a = function () {
                    return (function (e, t) {
                      var n,
                        r,
                        o,
                        a,
                        i = {
                          label: 0,
                          sent: function () {
                            if (1 & o[0]) throw o[1];
                            return o[1];
                          },
                          trys: [],
                          ops: [],
                        };
                      return (
                        (a = { next: c(0), throw: c(1), return: c(2) }),
                        "function" == typeof Symbol &&
                          (a[Symbol.iterator] = function () {
                            return this;
                          }),
                        a
                      );
                      function c(c) {
                        return function (l) {
                          return (function (c) {
                            if (n)
                              throw new TypeError(
                                "Generator is already executing.",
                              );
                            for (; a && ((a = 0), c[0] && (i = 0)), i; )
                              try {
                                if (
                                  ((n = 1),
                                  r &&
                                    (o =
                                      2 & c[0]
                                        ? r.return
                                        : c[0]
                                          ? r.throw ||
                                            ((o = r.return) && o.call(r), 0)
                                          : r.next) &&
                                    !(o = o.call(r, c[1])).done)
                                )
                                  return o;
                                switch (
                                  ((r = 0),
                                  o && (c = [2 & c[0], o.value]),
                                  c[0])
                                ) {
                                  case 0:
                                  case 1:
                                    o = c;
                                    break;
                                  case 4:
                                    return i.label++, { value: c[1], done: !1 };
                                  case 5:
                                    i.label++, (r = c[1]), (c = [0]);
                                    continue;
                                  case 7:
                                    (c = i.ops.pop()), i.trys.pop();
                                    continue;
                                  default:
                                    if (
                                      !(
                                        (o =
                                          (o = i.trys).length > 0 &&
                                          o[o.length - 1]) ||
                                        (6 !== c[0] && 2 !== c[0])
                                      )
                                    ) {
                                      i = 0;
                                      continue;
                                    }
                                    if (
                                      3 === c[0] &&
                                      (!o || (c[1] > o[0] && c[1] < o[3]))
                                    ) {
                                      i.label = c[1];
                                      break;
                                    }
                                    if (6 === c[0] && i.label < o[1]) {
                                      (i.label = o[1]), (o = c);
                                      break;
                                    }
                                    if (o && i.label < o[2]) {
                                      (i.label = o[2]), i.ops.push(c);
                                      break;
                                    }
                                    o[2] && i.ops.pop(), i.trys.pop();
                                    continue;
                                }
                                c = t.call(e, i);
                              } catch (e) {
                                (c = [6, e]), (r = 0);
                              } finally {
                                n = o = 0;
                              }
                            if (5 & c[0]) throw c[1];
                            return { value: c[0] ? c[1] : void 0, done: !0 };
                          })([c, l]);
                        };
                      }
                    })(this, function (t) {
                      return e.preventDefault(), n({ maturity: i }), [2];
                    });
                  }),
                  new ((o = void 0) || (o = Promise))(function (e, n) {
                    function i(e) {
                      try {
                        l(a.next(e));
                      } catch (e) {
                        n(e);
                      }
                    }
                    function c(e) {
                      try {
                        l(a.throw(e));
                      } catch (e) {
                        n(e);
                      }
                    }
                    function l(t) {
                      var n;
                      t.done
                        ? e(t.value)
                        : ((n = t.value),
                          n instanceof o
                            ? n
                            : new o(function (e) {
                                e(n);
                              })).then(i, c);
                    }
                    l((a = a.apply(t, r || [])).next());
                  })
                );
                var t, r, o, a;
              },
              className: "w-full",
            },
            {
              children: [
                (0, r.jsx)(c.Fieldset, {
                  children: (0, r.jsx)(c.Radio, {
                    name: "maturity",
                    value: "no",
                    id: "step2-maturity-no",
                    checked: !i,
                    label: "NO",
                    subLabel:
                      "My emote does not contain trolling/hateful behaviour and is in line with community guidelines of the game.",
                    onChange: function () {
                      return l(!1);
                    },
                  }),
                }),
                (0, r.jsx)(c.Fieldset, {
                  children: (0, r.jsx)(c.Radio, {
                    name: "maturity",
                    value: "yes",
                    id: "step2-maturity-yes",
                    checked: i,
                    label: "YES",
                    subLabel:
                      "My emote may contain gestures that are deemed offensive/socially impolite.",
                    onChange: function () {
                      return l(!0);
                    },
                  }),
                }),
                (0, r.jsxs)(
                  "div",
                  oe(
                    { className: "flex justify-between w-full" },
                    {
                      children: [
                        (0, r.jsx)(c.Button, {
                          kind: "secondary",
                          label: "Back",
                          onClick: function () {
                            return t();
                          },
                        }),
                        (0, r.jsx)(c.Button, {
                          label: "Continue",
                          type: "submit",
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
      var ie = function () {
        return (
          (ie =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }),
          ie.apply(this, arguments)
        );
      };
      const ce = function (e) {
        var t = e.back,
          n = e.next,
          a = e.isLoading,
          i = (0, o.useState)(!1),
          l = i[0],
          s = i[1];
        return (0, r.jsxs)(
          "form",
          ie(
            {
              onSubmit: function (e) {
                return (
                  (t = void 0),
                  (r = void 0),
                  (a = function () {
                    return (function (e, t) {
                      var n,
                        r,
                        o,
                        a,
                        i = {
                          label: 0,
                          sent: function () {
                            if (1 & o[0]) throw o[1];
                            return o[1];
                          },
                          trys: [],
                          ops: [],
                        };
                      return (
                        (a = { next: c(0), throw: c(1), return: c(2) }),
                        "function" == typeof Symbol &&
                          (a[Symbol.iterator] = function () {
                            return this;
                          }),
                        a
                      );
                      function c(c) {
                        return function (l) {
                          return (function (c) {
                            if (n)
                              throw new TypeError(
                                "Generator is already executing.",
                              );
                            for (; a && ((a = 0), c[0] && (i = 0)), i; )
                              try {
                                if (
                                  ((n = 1),
                                  r &&
                                    (o =
                                      2 & c[0]
                                        ? r.return
                                        : c[0]
                                          ? r.throw ||
                                            ((o = r.return) && o.call(r), 0)
                                          : r.next) &&
                                    !(o = o.call(r, c[1])).done)
                                )
                                  return o;
                                switch (
                                  ((r = 0),
                                  o && (c = [2 & c[0], o.value]),
                                  c[0])
                                ) {
                                  case 0:
                                  case 1:
                                    o = c;
                                    break;
                                  case 4:
                                    return i.label++, { value: c[1], done: !1 };
                                  case 5:
                                    i.label++, (r = c[1]), (c = [0]);
                                    continue;
                                  case 7:
                                    (c = i.ops.pop()), i.trys.pop();
                                    continue;
                                  default:
                                    if (
                                      !(
                                        (o =
                                          (o = i.trys).length > 0 &&
                                          o[o.length - 1]) ||
                                        (6 !== c[0] && 2 !== c[0])
                                      )
                                    ) {
                                      i = 0;
                                      continue;
                                    }
                                    if (
                                      3 === c[0] &&
                                      (!o || (c[1] > o[0] && c[1] < o[3]))
                                    ) {
                                      i.label = c[1];
                                      break;
                                    }
                                    if (6 === c[0] && i.label < o[1]) {
                                      (i.label = o[1]), (o = c);
                                      break;
                                    }
                                    if (o && i.label < o[2]) {
                                      (i.label = o[2]), i.ops.push(c);
                                      break;
                                    }
                                    o[2] && i.ops.pop(), i.trys.pop();
                                    continue;
                                }
                                c = t.call(e, i);
                              } catch (e) {
                                (c = [6, e]), (r = 0);
                              } finally {
                                n = o = 0;
                              }
                            if (5 & c[0]) throw c[1];
                            return { value: c[0] ? c[1] : void 0, done: !0 };
                          })([c, l]);
                        };
                      }
                    })(this, function (t) {
                      return e.preventDefault(), n(), [2];
                    });
                  }),
                  new ((o = void 0) || (o = Promise))(function (e, n) {
                    function i(e) {
                      try {
                        l(a.next(e));
                      } catch (e) {
                        n(e);
                      }
                    }
                    function c(e) {
                      try {
                        l(a.throw(e));
                      } catch (e) {
                        n(e);
                      }
                    }
                    function l(t) {
                      var n;
                      t.done
                        ? e(t.value)
                        : ((n = t.value),
                          n instanceof o
                            ? n
                            : new o(function (e) {
                                e(n);
                              })).then(i, c);
                    }
                    l((a = a.apply(t, r || [])).next());
                  })
                );
                var t, r, o, a;
              },
              className: "w-full",
            },
            {
              children: [
                (0, r.jsx)(c.Fieldset, {
                  children: (0, r.jsxs)(
                    "div",
                    ie(
                      {
                        className:
                          "flex items-center bg-surface-60 p-4 pl-2 gap-2",
                      },
                      {
                        children: [
                          (0, r.jsx)("div", {
                            children: (0, r.jsx)(c.Checkbox, {
                              className: "!w-6 h-6",
                              name: "accept",
                              value: "accept",
                              id: "step3-accept",
                              checked: l,
                              onChange: function (e) {
                                return s(e);
                              },
                            }),
                          }),
                          (0, r.jsx)(
                            "div",
                            ie(
                              {
                                className: "text-xs",
                                onClick: function () {
                                  return s(!l);
                                },
                              },
                              {
                                children: (0, r.jsxs)("p", {
                                  children: [
                                    "I agree to the",
                                    " ",
                                    (0, r.jsx)(
                                      "a",
                                      ie(
                                        {
                                          href: "https://legal.kinetix.tech/",
                                          target: "_blank",
                                          rel: "noreferrer",
                                          className: "underline",
                                        },
                                        { children: "Terms & Conditions" },
                                      ),
                                    ),
                                    ".",
                                  ],
                                }),
                              },
                            ),
                          ),
                        ],
                      },
                    ),
                  ),
                }),
                (0, r.jsxs)(
                  "div",
                  ie(
                    { className: "flex justify-between w-full" },
                    {
                      children: [
                        (0, r.jsx)(c.Button, {
                          kind: "secondary",
                          label: "Back",
                          onClick: function () {
                            return t();
                          },
                        }),
                        (0, r.jsx)(c.Button, {
                          label: "Proceed",
                          type: "submit",
                          disabled: !l,
                          loading: a,
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
      var le = function () {
          return (
            (le =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            le.apply(this, arguments)
          );
        },
        se = function (e) {
          var t = e.file,
            n = e.selectedPeriod,
            a = e.source,
            l = (0, w.s0)(),
            s = g(),
            u = (0, i.useSearchParams)()[0],
            f = (0, o.useState)(""),
            p = f[0],
            d = f[1],
            h = (0, o.useState)(!1),
            m = h[0],
            v = h[1],
            x = (0, o.useState)(!1),
            b = x[0],
            y = x[1];
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(R, {
                onBack: function () {
                  l(-1);
                },
              }),
              (0, r.jsx)(c.Title, {
                type: "h2",
                text: ["", "Emote information"],
                className: "mt-[6vh] text-center max-w-[240px] mx-auto !mb-0",
              }),
              (0, r.jsx)(
                "div",
                le(
                  { className: "mt-[2vh] max-w-[320px] mx-auto" },
                  {
                    children: (0, r.jsx)(c.VerticalStepper, {
                      Steps: [
                        {
                          label: "Name your emote",
                          Renderer: re,
                          helpModalTitle: "Emote Naming Rules & Conventions",
                          helpModalContent: [
                            {
                              text: "Maximum 25 characters (inc. spaces)",
                              type: "bold",
                            },
                            { text: "Emojis are not accepted", type: "bold" },
                            {
                              text: "No Copyright or Trademark protected names",
                              type: "bold",
                            },
                            {
                              text: "No foul, hateful or discriminatory language",
                              type: "bold",
                            },
                          ],
                          onClickNextButton: function (e) {
                            var t = e.name;
                            return d(t);
                          },
                        },
                        {
                          label: "Mature Audience Restricted?",
                          Renderer: ae,
                          helpModalContent: [
                            {
                              text: "My emotes may contain gestures that are offensive/socially impolite:",
                              type: "bold",
                            },
                            {
                              text: "By tagging your emote as mature content, please be aware that it will only be accessible for members who are eighteen of age or older. Common subjects which are considered mature content are nudity, excessive violence, excessive blood and gore, sexual themes, strong language, or ideologically sensitive themes.",
                            },
                            {
                              text: "My emote does not contain trolling/hateful behaviour and is in line with community guidelines of the game: ",
                              type: "bold",
                            },
                            {
                              text: "At Kinetix, we want to allow everyone to express themselves through Emotes to make virtual worlds inclusive and accessible. To make this experience safe, fun and welcoming for everyone, we need to take individual responsibility for how we behave towards our fellow community members. This code of conduct outlines our expectations for behavior as well as the consequences for unacceptable behavior.",
                            },
                          ],
                          onClickNextButton: function (e) {
                            var t = e.maturity;
                            return v(t);
                          },
                        },
                        {
                          label: "Emote Confirmation",
                          Renderer: ce,
                          isLoading: b,
                          onClickNextButton: function () {
                            return (
                              (e = void 0),
                              (r = void 0),
                              (i = function () {
                                var e, r, o;
                                return (function (e, t) {
                                  var n,
                                    r,
                                    o,
                                    a,
                                    i = {
                                      label: 0,
                                      sent: function () {
                                        if (1 & o[0]) throw o[1];
                                        return o[1];
                                      },
                                      trys: [],
                                      ops: [],
                                    };
                                  return (
                                    (a = {
                                      next: c(0),
                                      throw: c(1),
                                      return: c(2),
                                    }),
                                    "function" == typeof Symbol &&
                                      (a[Symbol.iterator] = function () {
                                        return this;
                                      }),
                                    a
                                  );
                                  function c(c) {
                                    return function (l) {
                                      return (function (c) {
                                        if (n)
                                          throw new TypeError(
                                            "Generator is already executing.",
                                          );
                                        for (
                                          ;
                                          a && ((a = 0), c[0] && (i = 0)), i;

                                        )
                                          try {
                                            if (
                                              ((n = 1),
                                              r &&
                                                (o =
                                                  2 & c[0]
                                                    ? r.return
                                                    : c[0]
                                                      ? r.throw ||
                                                        ((o = r.return) &&
                                                          o.call(r),
                                                        0)
                                                      : r.next) &&
                                                !(o = o.call(r, c[1])).done)
                                            )
                                              return o;
                                            switch (
                                              ((r = 0),
                                              o && (c = [2 & c[0], o.value]),
                                              c[0])
                                            ) {
                                              case 0:
                                              case 1:
                                                o = c;
                                                break;
                                              case 4:
                                                return (
                                                  i.label++,
                                                  { value: c[1], done: !1 }
                                                );
                                              case 5:
                                                i.label++,
                                                  (r = c[1]),
                                                  (c = [0]);
                                                continue;
                                              case 7:
                                                (c = i.ops.pop()), i.trys.pop();
                                                continue;
                                              default:
                                                if (
                                                  !(
                                                    (o =
                                                      (o = i.trys).length > 0 &&
                                                      o[o.length - 1]) ||
                                                    (6 !== c[0] && 2 !== c[0])
                                                  )
                                                ) {
                                                  i = 0;
                                                  continue;
                                                }
                                                if (
                                                  3 === c[0] &&
                                                  (!o ||
                                                    (c[1] > o[0] &&
                                                      c[1] < o[3]))
                                                ) {
                                                  i.label = c[1];
                                                  break;
                                                }
                                                if (
                                                  6 === c[0] &&
                                                  i.label < o[1]
                                                ) {
                                                  (i.label = o[1]), (o = c);
                                                  break;
                                                }
                                                if (o && i.label < o[2]) {
                                                  (i.label = o[2]),
                                                    i.ops.push(c);
                                                  break;
                                                }
                                                o[2] && i.ops.pop(),
                                                  i.trys.pop();
                                                continue;
                                            }
                                            c = t.call(e, i);
                                          } catch (e) {
                                            (c = [6, e]), (r = 0);
                                          } finally {
                                            n = o = 0;
                                          }
                                        if (5 & c[0]) throw c[1];
                                        return {
                                          value: c[0] ? c[1] : void 0,
                                          done: !0,
                                        };
                                      })([c, l]);
                                    };
                                  }
                                })(this, function (i) {
                                  switch (i.label) {
                                    case 0:
                                      if (
                                        (i.trys.push([0, 2, 3, 4]),
                                        y(!0),
                                        !(e = u.get("token")))
                                      )
                                        throw new Error("token missing");
                                      return (
                                        (r = (function (e, t, n, r) {
                                          var o = new FormData();
                                          return (
                                            o.append("start", X(t.start)),
                                            o.append("end", X(t.end)),
                                            o.append("video", e),
                                            o.append("name", n),
                                            o.append("mature", "".concat(r)),
                                            o
                                          );
                                        })(t, n, p, m)),
                                        [4, K(r, e)]
                                      );
                                    case 1:
                                      return (
                                        i.sent(),
                                        s(
                                          fe.EMOTE_CREATION_SUCCESS.path,
                                          {},
                                          { uuid: "fake-uuid" },
                                        ),
                                        [3, 4]
                                      );
                                    case 2:
                                      return (
                                        (o = i.sent()),
                                        s(
                                          403 === o.response.status
                                            ? fe.SESSION_EXPIRED.path
                                            : fe.UPLOAD_VIDEO_FAILED.path,
                                          { state: { source: a } },
                                        ),
                                        [3, 4]
                                      );
                                    case 3:
                                      return y(!1), [7];
                                    case 4:
                                      return [2];
                                  }
                                });
                              }),
                              new ((o = void 0) || (o = Promise))(function (
                                t,
                                n,
                              ) {
                                function a(e) {
                                  try {
                                    l(i.next(e));
                                  } catch (e) {
                                    n(e);
                                  }
                                }
                                function c(e) {
                                  try {
                                    l(i.throw(e));
                                  } catch (e) {
                                    n(e);
                                  }
                                }
                                function l(e) {
                                  var n;
                                  e.done
                                    ? t(e.value)
                                    : ((n = e.value),
                                      n instanceof o
                                        ? n
                                        : new o(function (e) {
                                            e(n);
                                          })).then(a, c);
                                }
                                l((i = i.apply(e, r || [])).next());
                              })
                            );
                            var e, r, o, i;
                          },
                        },
                      ],
                    }),
                  },
                ),
              ),
            ],
          });
        },
        ue = function () {
          return (
            (ue =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            ue.apply(this, arguments)
          );
        },
        fe = {
          HOME: {
            path: "/",
            Component: function () {
              var e = (0, o.useContext)(b).Home,
                t = g();
              return (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(c.Title, {
                    type: "h2",
                    text: e.title,
                    className:
                      "mt-[6vh] text-center max-w-[240px] mx-auto !mb-0",
                  }),
                  (0, r.jsxs)(
                    "div",
                    N(
                      {
                        className:
                          "flex flex-col items-center gap-[10vh] mt-[10vh]",
                      },
                      {
                        children: [
                          (0, r.jsx)(E, {
                            label: "Record Video",
                            iconName: "videocam",
                            handleClick: function () {
                              return t(fe.RECORD_VIDEO_ON_BOARDING.path);
                            },
                          }),
                          (0, r.jsx)(E, {
                            label: "Upload Video",
                            iconName: "upload",
                            handleClick: function () {
                              return t(fe.UPLOAD_VIDEO_ON_BOARDING.path);
                            },
                          }),
                        ],
                      },
                    ),
                  ),
                ],
              });
            },
          },
          SESSION_EXPIRED: {
            path: "/session-expired",
            Component: function () {
              return (0, r.jsx)(C, {
                title: "Session Expired",
                text: [
                  "We're sorry, but your session has expired.",
                  "Please scan a new QR code on your Emote wheel to begin creating an Emote.",
                ],
              });
            },
          },
          RECORD_VIDEO_ON_BOARDING: {
            path: "/record-video-on-boarding",
            Component: function () {
              var e = g(),
                t = (0, o.useContext)(b).RecordOnBoarding;
              return (0, r.jsx)(S, {
                children: (0, r.jsx)(B, {
                  backButtonRouteName: fe.HOME.path,
                  slider: t.slider,
                  nextButtonLabel: t.nextButtonLabel,
                  nextButtonCallback: function () {
                    return e(fe.RECORD_VIDEO.path);
                  },
                }),
              });
            },
          },
          RECORD_VIDEO: {
            path: "/record-video",
            Component: function () {
              var e = g(),
                t = (0, o.useContext)(b).Record,
                n = (0, L.useDropzone)({
                  accept: { "video/*": [] },
                  multiple: !1,
                  onDropAccepted: function (t) {
                    return (
                      (n = void 0),
                      (r = void 0),
                      (a = function () {
                        return (function (e, t) {
                          var n,
                            r,
                            o,
                            a,
                            i = {
                              label: 0,
                              sent: function () {
                                if (1 & o[0]) throw o[1];
                                return o[1];
                              },
                              trys: [],
                              ops: [],
                            };
                          return (
                            (a = { next: c(0), throw: c(1), return: c(2) }),
                            "function" == typeof Symbol &&
                              (a[Symbol.iterator] = function () {
                                return this;
                              }),
                            a
                          );
                          function c(c) {
                            return function (l) {
                              return (function (c) {
                                if (n)
                                  throw new TypeError(
                                    "Generator is already executing.",
                                  );
                                for (; a && ((a = 0), c[0] && (i = 0)), i; )
                                  try {
                                    if (
                                      ((n = 1),
                                      r &&
                                        (o =
                                          2 & c[0]
                                            ? r.return
                                            : c[0]
                                              ? r.throw ||
                                                ((o = r.return) && o.call(r), 0)
                                              : r.next) &&
                                        !(o = o.call(r, c[1])).done)
                                    )
                                      return o;
                                    switch (
                                      ((r = 0),
                                      o && (c = [2 & c[0], o.value]),
                                      c[0])
                                    ) {
                                      case 0:
                                      case 1:
                                        o = c;
                                        break;
                                      case 4:
                                        return (
                                          i.label++, { value: c[1], done: !1 }
                                        );
                                      case 5:
                                        i.label++, (r = c[1]), (c = [0]);
                                        continue;
                                      case 7:
                                        (c = i.ops.pop()), i.trys.pop();
                                        continue;
                                      default:
                                        if (
                                          !(
                                            (o =
                                              (o = i.trys).length > 0 &&
                                              o[o.length - 1]) ||
                                            (6 !== c[0] && 2 !== c[0])
                                          )
                                        ) {
                                          i = 0;
                                          continue;
                                        }
                                        if (
                                          3 === c[0] &&
                                          (!o || (c[1] > o[0] && c[1] < o[3]))
                                        ) {
                                          i.label = c[1];
                                          break;
                                        }
                                        if (6 === c[0] && i.label < o[1]) {
                                          (i.label = o[1]), (o = c);
                                          break;
                                        }
                                        if (o && i.label < o[2]) {
                                          (i.label = o[2]), i.ops.push(c);
                                          break;
                                        }
                                        o[2] && i.ops.pop(), i.trys.pop();
                                        continue;
                                    }
                                    c = t.call(e, i);
                                  } catch (e) {
                                    (c = [6, e]), (r = 0);
                                  } finally {
                                    n = o = 0;
                                  }
                                if (5 & c[0]) throw c[1];
                                return {
                                  value: c[0] ? c[1] : void 0,
                                  done: !0,
                                };
                              })([c, l]);
                            };
                          }
                        })(this, function (n) {
                          return [
                            2,
                            e(fe.TRIM_VIDEO.path, {
                              state: { file: t[0], source: "RECORD" },
                            }),
                          ];
                        });
                      }),
                      new ((o = void 0) || (o = Promise))(function (e, t) {
                        function i(e) {
                          try {
                            l(a.next(e));
                          } catch (e) {
                            t(e);
                          }
                        }
                        function c(e) {
                          try {
                            l(a.throw(e));
                          } catch (e) {
                            t(e);
                          }
                        }
                        function l(t) {
                          var n;
                          t.done
                            ? e(t.value)
                            : ((n = t.value),
                              n instanceof o
                                ? n
                                : new o(function (e) {
                                    e(n);
                                  })).then(i, c);
                        }
                        l((a = a.apply(n, r || [])).next());
                      })
                    );
                    var n, r, o, a;
                  },
                }),
                a = n.getRootProps,
                i = n.getInputProps,
                l = n.open;
              return (0, r.jsxs)(S, {
                children: [
                  (0, r.jsx)(
                    "div",
                    V({}, a(), {
                      children: (0, r.jsx)(
                        "input",
                        V({}, i({}), { capture: !0 }),
                      ),
                    }),
                  ),
                  (0, r.jsx)(R, {
                    onBack: function () {
                      e(fe.RECORD_VIDEO_ON_BOARDING.path);
                    },
                  }),
                  (0, r.jsx)(c.Title, {
                    type: "h2",
                    text: t.title,
                    className:
                      "mt-[6vh] text-center max-w-[240px] mx-auto !mb-0",
                  }),
                  (0, r.jsx)(
                    "div",
                    V(
                      { className: "mt-[2vh] max-w-[250px] mx-auto" },
                      {
                        children: t.text.map(function (e, t) {
                          return (0, r.jsx)(
                            "p",
                            V(
                              {
                                className:
                                  "text-base font-bold leading-[2.4vh] mb-[2vh] last:mb-0",
                              },
                              { children: e },
                            ),
                            "record-text-".concat(t),
                          );
                        }),
                      },
                    ),
                  ),
                  (0, r.jsx)(c.Button, {
                    className: "mx-auto mt-[5vh]",
                    label: t.buttonLabel,
                    onClick: function () {
                      return l();
                    },
                  }),
                ],
              });
            },
          },
          UPLOAD_VIDEO_ON_BOARDING: {
            path: "/upload-video-on-boarding",
            Component: function () {
              var e = g(),
                t = (0, o.useContext)(b).UploadOnBoarding;
              return (0, r.jsx)(B, {
                backButtonRouteName: fe.HOME.path,
                slider: t.slider,
                nextButtonLabel: t.nextButtonLabel,
                nextButtonCallback: function () {
                  return e(fe.UPLOAD_VIDEO.path);
                },
              });
            },
          },
          UPLOAD_VIDEO: {
            path: "/upload-video",
            Component: function () {
              var e = g(),
                t = (0, o.useContext)(b).Upload,
                n = (0, L.useDropzone)({
                  accept: { "video/*": [] },
                  multiple: !1,
                  onDropAccepted: function (t) {
                    return (
                      (n = void 0),
                      (r = void 0),
                      (a = function () {
                        return (function (e, t) {
                          var n,
                            r,
                            o,
                            a,
                            i = {
                              label: 0,
                              sent: function () {
                                if (1 & o[0]) throw o[1];
                                return o[1];
                              },
                              trys: [],
                              ops: [],
                            };
                          return (
                            (a = { next: c(0), throw: c(1), return: c(2) }),
                            "function" == typeof Symbol &&
                              (a[Symbol.iterator] = function () {
                                return this;
                              }),
                            a
                          );
                          function c(c) {
                            return function (l) {
                              return (function (c) {
                                if (n)
                                  throw new TypeError(
                                    "Generator is already executing.",
                                  );
                                for (; a && ((a = 0), c[0] && (i = 0)), i; )
                                  try {
                                    if (
                                      ((n = 1),
                                      r &&
                                        (o =
                                          2 & c[0]
                                            ? r.return
                                            : c[0]
                                              ? r.throw ||
                                                ((o = r.return) && o.call(r), 0)
                                              : r.next) &&
                                        !(o = o.call(r, c[1])).done)
                                    )
                                      return o;
                                    switch (
                                      ((r = 0),
                                      o && (c = [2 & c[0], o.value]),
                                      c[0])
                                    ) {
                                      case 0:
                                      case 1:
                                        o = c;
                                        break;
                                      case 4:
                                        return (
                                          i.label++, { value: c[1], done: !1 }
                                        );
                                      case 5:
                                        i.label++, (r = c[1]), (c = [0]);
                                        continue;
                                      case 7:
                                        (c = i.ops.pop()), i.trys.pop();
                                        continue;
                                      default:
                                        if (
                                          !(
                                            (o =
                                              (o = i.trys).length > 0 &&
                                              o[o.length - 1]) ||
                                            (6 !== c[0] && 2 !== c[0])
                                          )
                                        ) {
                                          i = 0;
                                          continue;
                                        }
                                        if (
                                          3 === c[0] &&
                                          (!o || (c[1] > o[0] && c[1] < o[3]))
                                        ) {
                                          i.label = c[1];
                                          break;
                                        }
                                        if (6 === c[0] && i.label < o[1]) {
                                          (i.label = o[1]), (o = c);
                                          break;
                                        }
                                        if (o && i.label < o[2]) {
                                          (i.label = o[2]), i.ops.push(c);
                                          break;
                                        }
                                        o[2] && i.ops.pop(), i.trys.pop();
                                        continue;
                                    }
                                    c = t.call(e, i);
                                  } catch (e) {
                                    (c = [6, e]), (r = 0);
                                  } finally {
                                    n = o = 0;
                                  }
                                if (5 & c[0]) throw c[1];
                                return {
                                  value: c[0] ? c[1] : void 0,
                                  done: !0,
                                };
                              })([c, l]);
                            };
                          }
                        })(this, function (n) {
                          return (
                            e(fe.TRIM_VIDEO.path, {
                              state: { file: t[0], source: "UPLOAD" },
                            }),
                            [2]
                          );
                        });
                      }),
                      new ((o = void 0) || (o = Promise))(function (e, t) {
                        function i(e) {
                          try {
                            l(a.next(e));
                          } catch (e) {
                            t(e);
                          }
                        }
                        function c(e) {
                          try {
                            l(a.throw(e));
                          } catch (e) {
                            t(e);
                          }
                        }
                        function l(t) {
                          var n;
                          t.done
                            ? e(t.value)
                            : ((n = t.value),
                              n instanceof o
                                ? n
                                : new o(function (e) {
                                    e(n);
                                  })).then(i, c);
                        }
                        l((a = a.apply(n, r || [])).next());
                      })
                    );
                    var n, r, o, a;
                  },
                  onDropRejected: function (e) {
                    e.length > 1
                      ? c.toast.error("Upload one video only")
                      : c.toast.error("Invalid file format. Video file only");
                  },
                }),
                a = n.isDragActive,
                i = n.isDragAccept,
                l = n.isDragReject,
                s = n.getRootProps,
                u = n.getInputProps;
              return (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(R, {
                    onBack: function () {
                      e(fe.UPLOAD_VIDEO_ON_BOARDING.path);
                    },
                  }),
                  (0, r.jsx)(c.Title, {
                    type: "h2",
                    text: t.title,
                    className:
                      "mt-[6vh] text-center max-w-[240px] mx-auto !mb-0",
                  }),
                  (0, r.jsx)(
                    "div",
                    M(
                      { className: "mt-[2vh] max-w-[290px] mx-auto" },
                      {
                        children: t.text.map(function (e, t) {
                          return (0, r.jsx)(
                            "p",
                            M(
                              {
                                className:
                                  "text-base font-bold leading-[2.4vh] mb-[2vh] last:mb-0",
                              },
                              { children: e },
                            ),
                            "record-text-".concat(t),
                          );
                        }),
                      },
                    ),
                  ),
                  (0, r.jsxs)(
                    "div",
                    M(
                      {
                        className:
                          "mx-auto mt-[5vh] max-w-[290px] border border-dashed rounded-xl w-full p-7 ".concat(
                            U(a, i, l),
                          ),
                      },
                      s(),
                      {
                        children: [
                          (0, r.jsx)("input", M({}, u({}))),
                          (0, r.jsx)(
                            "p",
                            M(
                              {
                                className:
                                  "text-center text-base font-extrabold",
                              },
                              { children: t.buttonLabel },
                            ),
                          ),
                          (0, r.jsx)(
                            "div",
                            M(
                              { className: "flex justify-center pt-[2vh]" },
                              {
                                children: (0, r.jsx)(
                                  "p",
                                  M(
                                    {
                                      className:
                                        "material-symbols-rounded text-[8vh] text-primary",
                                    },
                                    { children: "upload" },
                                  ),
                                ),
                              },
                            ),
                          ),
                        ],
                      },
                    ),
                  ),
                ],
              });
            },
          },
          TRIM_VIDEO: {
            path: "/trim-video",
            Component: function () {
              var e,
                t = (0, w.s0)(),
                n = (0, w.TH)();
              return (
                (0, o.useEffect)(
                  function () {
                    n.state.file || t(-1);
                  },
                  [n.state],
                ),
                n.state.file
                  ? (0, r.jsx)(G, {
                      file: n.state.file,
                      source:
                        (null === (e = n.state) || void 0 === e
                          ? void 0
                          : e.source) || "UPLOAD",
                    })
                  : null
              );
            },
          },
          BAD_VIDEO_FORMAT: {
            path: "/bad-video-format",
            Component: function () {
              return (0, r.jsx)(C, {
                title: "We do not support this video format",
                text: [
                  "The video format you are trying to upload is not supported.",
                  "We recommend that you use either .MP4 or .MOV formats.",
                ],
              });
            },
          },
          VIDEO_TOO_LONG: {
            path: "/video-too-long",
            Component: function () {
              return (0, r.jsx)(C, {
                title: "Your video is too long",
                text: [
                  "Your video is too long for us to process.",
                  "Please edit and trim your video down before uploading your video or choose a shorter video.",
                  "We recommend that your video should not exceed 1 minute.",
                ],
              });
            },
          },
          EMOTE_INFORMATIONS: {
            path: "/emote-informations",
            Component: function () {
              var e,
                t = g(),
                n = (0, w.TH)();
              return (
                (0, o.useEffect)(
                  function () {
                    var e;
                    (n.state.file && n.state.selectedPeriod) ||
                      t(fe.BAD_VIDEO_FORMAT.path, {
                        state: {
                          source:
                            (null === (e = n.state) || void 0 === e
                              ? void 0
                              : e.source) || "UPLOAD",
                        },
                      });
                  },
                  [n.state],
                ),
                n.state.file
                  ? (0, r.jsx)(se, {
                      file: n.state.file,
                      selectedPeriod: n.state.selectedPeriod,
                      source:
                        (null === (e = n.state) || void 0 === e
                          ? void 0
                          : e.source) || "UPLOAD",
                    })
                  : null
              );
            },
          },
          UPLOAD_VIDEO_FAILED: {
            path: "/upload-video-failed",
            Component: function () {
              return (0, r.jsx)(C, {
                title: "We could not process your video",
                text: [
                  "We are unable to process your video due to internal issues.",
                  "Please try again.",
                  "Thank you for your patience.",
                ],
              });
            },
          },
          EMOTE_CREATION_SUCCESS: {
            path: "/emote-creation-success",
            Component: function () {
              var e = (0, o.useContext)(b).EmoteCreationSuccess;
              return (0, r.jsxs)(
                "div",
                ue(
                  { className: "mt-[9vh] w-full" },
                  {
                    children: [
                      (0, r.jsx)(
                        "div",
                        ue(
                          { className: "h-[30vh]" },
                          {
                            children: (0, r.jsx)("img", {
                              className: "mx-auto h-full",
                              src: h(e.imageUrl),
                              alt: "Emote creation success",
                            }),
                          },
                        ),
                      ),
                      (0, r.jsx)(c.Title, {
                        className:
                          "max-w-[270px] mx-auto text-center mt-[3vh] !mb-0",
                        type: "h2",
                        text: e.title,
                        childrenClassName: ["", "block", ""],
                      }),
                      (0, r.jsx)(
                        "div",
                        ue(
                          { className: "mt-[2vh] mx-auto" },
                          {
                            children: e.text.map(function (e, t) {
                              return (0, r.jsx)(
                                "p",
                                ue(
                                  {
                                    className:
                                      "font-bold text-center leading-[2.4vh] mb-[2vh] last:mb-0",
                                  },
                                  { children: e },
                                ),
                                "text-item-".concat(t),
                              );
                            }),
                          },
                        ),
                      ),
                    ],
                  },
                ),
              );
            },
          },
        };
      const pe = function (e) {
        var t = e.Component,
          n = (0, w.TH)(),
          a = (0, i.useSearchParams)()[0],
          c = (0, w.s0)(),
          l = t;
        return (
          (0, o.useEffect)(
            function () {
              var e, t, r, o;
              (e = void 0),
                (t = void 0),
                (o = function () {
                  var e;
                  return (function (e, t) {
                    var n,
                      r,
                      o,
                      a,
                      i = {
                        label: 0,
                        sent: function () {
                          if (1 & o[0]) throw o[1];
                          return o[1];
                        },
                        trys: [],
                        ops: [],
                      };
                    return (
                      (a = { next: c(0), throw: c(1), return: c(2) }),
                      "function" == typeof Symbol &&
                        (a[Symbol.iterator] = function () {
                          return this;
                        }),
                      a
                    );
                    function c(c) {
                      return function (l) {
                        return (function (c) {
                          if (n)
                            throw new TypeError(
                              "Generator is already executing.",
                            );
                          for (; a && ((a = 0), c[0] && (i = 0)), i; )
                            try {
                              if (
                                ((n = 1),
                                r &&
                                  (o =
                                    2 & c[0]
                                      ? r.return
                                      : c[0]
                                        ? r.throw ||
                                          ((o = r.return) && o.call(r), 0)
                                        : r.next) &&
                                  !(o = o.call(r, c[1])).done)
                              )
                                return o;
                              switch (
                                ((r = 0), o && (c = [2 & c[0], o.value]), c[0])
                              ) {
                                case 0:
                                case 1:
                                  o = c;
                                  break;
                                case 4:
                                  return i.label++, { value: c[1], done: !1 };
                                case 5:
                                  i.label++, (r = c[1]), (c = [0]);
                                  continue;
                                case 7:
                                  (c = i.ops.pop()), i.trys.pop();
                                  continue;
                                default:
                                  if (
                                    !(
                                      (o =
                                        (o = i.trys).length > 0 &&
                                        o[o.length - 1]) ||
                                      (6 !== c[0] && 2 !== c[0])
                                    )
                                  ) {
                                    i = 0;
                                    continue;
                                  }
                                  if (
                                    3 === c[0] &&
                                    (!o || (c[1] > o[0] && c[1] < o[3]))
                                  ) {
                                    i.label = c[1];
                                    break;
                                  }
                                  if (6 === c[0] && i.label < o[1]) {
                                    (i.label = o[1]), (o = c);
                                    break;
                                  }
                                  if (o && i.label < o[2]) {
                                    (i.label = o[2]), i.ops.push(c);
                                    break;
                                  }
                                  o[2] && i.ops.pop(), i.trys.pop();
                                  continue;
                              }
                              c = t.call(e, i);
                            } catch (e) {
                              (c = [6, e]), (r = 0);
                            } finally {
                              n = o = 0;
                            }
                          if (5 & c[0]) throw c[1];
                          return { value: c[0] ? c[1] : void 0, done: !0 };
                        })([c, l]);
                      };
                    }
                  })(this, function (t) {
                    switch (t.label) {
                      case 0:
                        if (
                          ((e = a.get("token")),
                          "/session-expired" === n.pathname || !e)
                        )
                          return [2, null];
                        t.label = 1;
                      case 1:
                        return t.trys.push([1, 3, , 4]), [4, J(e)];
                      case 2:
                        return t.sent(), [3, 4];
                      case 3:
                        return (
                          t.sent(),
                          "/emote-creation-success" !== n.pathname &&
                            c(fe.SESSION_EXPIRED.path),
                          [3, 4]
                        );
                      case 4:
                        return [2];
                    }
                  });
                }),
                new ((r = void 0) || (r = Promise))(function (n, a) {
                  function i(e) {
                    try {
                      l(o.next(e));
                    } catch (e) {
                      a(e);
                    }
                  }
                  function c(e) {
                    try {
                      l(o.throw(e));
                    } catch (e) {
                      a(e);
                    }
                  }
                  function l(e) {
                    var t;
                    e.done
                      ? n(e.value)
                      : ((t = e.value),
                        t instanceof r
                          ? t
                          : new r(function (e) {
                              e(t);
                            })).then(i, c);
                  }
                  l((o = o.apply(e, t || [])).next());
                });
            },
            [a, n, c],
          ),
          [
            fe.SESSION_EXPIRED.path,
            fe.EMOTE_CREATION_SUCCESS.path,
            fe.BAD_VIDEO_FORMAT.path,
            fe.UPLOAD_VIDEO_FAILED.path,
          ].includes(n.pathname) || a.get("token")
            ? (0, r.jsx)(r.Fragment, { children: (0, r.jsx)(l, {}) })
            : (0, r.jsx)(w.Fg, { to: fe.SESSION_EXPIRED.path, replace: !0 })
        );
      };
      var de = function () {
        return (
          (de =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }),
          de.apply(this, arguments)
        );
      };
      const he = function () {
        var e = Object.keys(fe);
        return (0, r.jsxs)(w.Z5, {
          children: [
            e.map(function (e) {
              var t = fe[e];
              return (0, r.jsx)(
                w.AW,
                { path: t.path, element: (0, r.jsx)(pe, de({}, t)) },
                e,
              );
            }),
            (0, r.jsx)(w.AW, {
              path: "*",
              element: (0, r.jsx)(w.Fg, { to: "/", replace: !0 }),
            }),
          ],
        });
      };
      var me = function () {
        return (
          (me =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }),
          me.apply(this, arguments)
        );
      };
      const ve = function (e) {
        var t = e.children;
        return (0, r.jsx)(
          "div",
          me(
            { id: "ConnectedLayout" },
            {
              children: (0, r.jsx)(
                "div",
                me({ className: "px-4" }, { children: t }),
              ),
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
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }),
          xe.apply(this, arguments)
        );
      };
      var be;
      a.createRoot(document.getElementById("root")).render(
        (0, r.jsx)(o.StrictMode, {
          children: (0, r.jsx)(i.BrowserRouter, {
            children: (0, r.jsx)(function () {
              return (0, r.jsx)(
                c.AnalyticsProvider,
                xe(
                  { productName: "VWC", appEnv: u, eventNames: {} },
                  {
                    children: (0, r.jsx)(x, {
                      children: (0, r.jsxs)(y, {
                        children: [
                          (0, r.jsx)(ve, { children: (0, r.jsx)(he, {}) }),
                          (0, r.jsx)(c.ToasterRoot, {}),
                        ],
                      }),
                    }),
                  },
                ),
              );
            }, {}),
          }),
        }),
      ),
        be &&
          be instanceof Function &&
          n
            .e(131)
            .then(n.bind(n, 82131))
            .then(function (e) {
              var t = e.getCLS,
                n = e.getFID,
                r = e.getFCP,
                o = e.getLCP,
                a = e.getTTFB;
              t(be), n(be), r(be), o(be), a(be);
            });
    },
    56249: () => {},
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [930], () => (t(46108), t(37700))), e.O();
  },
]);
