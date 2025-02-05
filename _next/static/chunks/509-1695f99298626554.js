"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [509],
  {
    1673: function (e, s) {
      s.Z = {
        src: "/logo-dark.png",
        height: 74,
        width: 310,
        blurDataURL:
          "data:image/webp;base64,UklGRlYAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAVDUjLmA3RyZoT2dtaFxZVQBWUDggHgAAAHABAJ0BKggAAgACQDgllAJ0AYhAAP7679yWjpcAAA==",
        blurWidth: 8,
        blurHeight: 2,
      };
    },
    624: function (e, s) {
      s.Z = {
        src: "/caption.png",
        height: 94,
        width: 400,
        blurDataURL:
          "data:image/webp;base64,UklGRnIAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAu09FICE9PB67T0k8T0xAOwBWUDggOgAAADACAJ0BKggAAgACQDglmAJ0RwBkgALNrLqIAP7wt+dOP/6ACoqMB+PogJ8z2/C/4JjgmpgX/AAAAAA=",
        blurWidth: 8,
        blurHeight: 2,
      };
    },
    7561: function (e, s, a) {
      var t = a(5893),
        l = a(1664),
        i = a.n(l),
        r = a(7066),
        n = a(7294),
        c = a(4079),
        o = a(7536),
        d = a(624),
        m = a(8296),
        h = a(3967),
        u = a.n(h);
      let g = () => {
        var e, s;
        let {
            register: a,
            handleSubmit: l,
            formState: { errors: h },
            reset: g,
          } = (0, o.cI)(),
          [x, p] = (0, n.useState)(!1),
          [b, f] = (0, n.useState)(""),
          [j, A] = (0, n.useState)(""),
          v = (e) => {
            A(""), f("");
          };
        async function N(e) {
          A(""), p(!0), f("");
          let s = {
            method: "post",
            url: "/api/subscribe",
            headers: {
              "Content-Type": "application/json",
              "Access-Token": (0, m.getAccessToken)(e),
            },
            data: e,
          };
          try {
            let e = await (0, r.Z)(s);
            201 === e.status
              ? (f("Thank you for subscribing."), g())
              : console.log(e),
              p(!1);
          } catch (e) {
            A(e.response.data), p(!1);
          }
        }
        return (0, t.jsx)("section", {
          id: "footer",
          children: (0, t.jsx)("div", {
            className: u()("footer-container sections"),
            children: (0, t.jsxs)("div", {
              className: u()("row footer-credits"),
              children: [
                (0, t.jsxs)("div", {
                  id: "subscribe-wrapper",
                  children: [
                    (0, t.jsx)("h2", {
                      className: u()(
                        "section-heading newsletter mil-up text-uppercase"
                      ),
                      children: "Stay Updated",
                    }),
                    (0, t.jsx)("p", {
                      className: u()("newsletter-desc mil-up"),
                      children: "Get the latest news from Axion",
                    }),
                    (0, t.jsx)("div", {
                      id: "newsletter",
                      children: (0, t.jsxs)("div", {
                        className: u()("newsletter mil-up"),
                        children: [
                          (0, t.jsx)("form", {
                            onSubmit: l(N),
                            id: "subscribe",
                            className: u()("newsletter-form"),
                            name: "subscribe",
                            children: (0, t.jsxs)("div", {
                              className: u()("footer-form-group"),
                              children: [
                                (0, t.jsx)("input", {
                                  className: u()(
                                    "subscribe-requiredField subscribe-firstname"
                                  ),
                                  id: "firstname",
                                  name: "firstname",
                                  ...a("firstname", {
                                    onChange: v,
                                    required: {
                                      value: !0,
                                      message: "You most enter firstname",
                                    },
                                  }),
                                  placeholder: "First Name*",
                                  type: "text",
                                }),
                                (0, t.jsx)("input", {
                                  className: u()(
                                    "subscribe-requiredField subscribe-email"
                                  ),
                                  id: "email",
                                  name: "email",
                                  placeholder: "Your Email Address*",
                                  type: "text",
                                  ...a("email", {
                                    onChange: v,
                                    required: {
                                      value: !0,
                                      message: "You must enter email address",
                                    },
                                    minLength: {
                                      value: 8,
                                      message:
                                        "This is not long enough to be an email",
                                    },
                                    maxLength: {
                                      value: 120,
                                      message: "This is too long",
                                    },
                                    pattern: {
                                      value: /\S+@\S+\.\S+/,
                                      message: "invalid email address",
                                    },
                                  }),
                                }),
                                (0, t.jsx)("p", {
                                  children: (0, t.jsx)("button", {
                                    className: u()("c-btn"),
                                    type: "submit",
                                    disabled: x,
                                    children: x
                                      ? (0, t.jsx)("span", {
                                          children: "loading",
                                        })
                                      : (0, t.jsx)("span", {
                                          children: (0, t.jsx)("i", {
                                            className: u()(
                                              "fab far fa fa-arrow-right"
                                            ),
                                          }),
                                        }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          b &&
                            (0, t.jsxs)("div", {
                              className: u()("subscribe-success"),
                              children: ["Thank you ", "for", " subscribing."],
                            }),
                          (0, t.jsxs)("div", {
                            className: u()("subscribe-error"),
                            children: [
                              null == h
                                ? void 0
                                : null === (e = h.email) || void 0 === e
                                ? void 0
                                : e.message,
                              null == h
                                ? void 0
                                : null === (s = h.name) || void 0 === s
                                ? void 0
                                : s.message,
                              null == j ? void 0 : j.message,
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: u()("footer-credits-logo mil-up"),
                  children: [
                    (0, t.jsx)("h3", {
                      className: u()("mil-up"),
                      children: "THE AI COMPUTE BASE-LAYER",
                    }),
                    (0, t.jsx)("p", {
                      className: u()("mil-up"),
                      children:
                        "Simplified Access to the Currency of the Future",
                    }),
                    (0, t.jsx)(i(), {
                      href: "/",
                      className: u()("footer-logo"),
                      children: (0, t.jsx)(c.o, {
                        alt: "Axion logo",
                        src: d.Z,
                      }),
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: u()("row"),
                  children: (0, t.jsx)("div", {
                    className: u()("col-sm-12 mil-up"),
                    children: (0, t.jsxs)("div", {
                      className: u()("footer-link-group"),
                      children: [
                        (0, t.jsxs)("ul", {
                          className: u()(
                            "nav navbar-nav navbar-left footer-nav"
                          ),
                          children: [
                            (0, t.jsx)("li", {
                              children: (0, t.jsx)("a", {
                                className: u()("page-scroll"),
                                href: "https://etherscan.io/token/0x00000000000000000000000000000000000000",
                                children: "Etherscan",
                              }),
                            }),
                            (0, t.jsx)("li", {
                              children: (0, t.jsx)(i(), {
                                className: u()("page-scroll"),
                                target: "_blank",
                                title: "Litepaper",
                                href: "https://dexscreener.com/ethereum/0x00000000000000000000000000000000000000",
                                children: "Dexscreener",
                              }),
                            }),
                            (0, t.jsx)("li", {
                              children: (0, t.jsx)(i(), {
                                className: u()("page-scroll"),
                                target: "_blank",
                                title: "AI Grant",
                                href: "https://www.dextools.io/app/en/ether/pair-explorer/0x00000000000000000000000000000000000000",
                                children: "Dextools",
                              }),
                            }),
                          ],
                        }),
                        (0, t.jsx)("div", {
                          className: u()("social-icons-wrapper"),
                          children: (0, t.jsxs)("ul", {
                            className: u()("social-icons"),
                            children: [
                              (0, t.jsx)("li", {
                                className: u()("social-icon"),
                                children: (0, t.jsx)(i(), {
                                  className: u()("fab fa-telegram-plane"),
                                  href: "https://t.me/Axion_AI_TG",
                                  target: "_blank",
                                  title: "Axion Telegram",
                                }),
                              }),
                              (0, t.jsx)("li", {
                                className: u()("social-icon"),
                                children: (0, t.jsx)(i(), {
                                  className: u()("fab fa-twitter"),
                                  href: "https://x.com/Axion_AI_X",
                                  target: "_blank",
                                  title: "Axion Twitter",
                                }),
                              }),
                              (0, t.jsx)("li", {
                                className: u()("social-icon"),
                                children: (0, t.jsx)(i(), {
                                  className: u()("fa fa-book-reader"),
                                  href: "https://docs.axionai.pro",
                                  target: "_blank",
                                  title: "Axion Documentation",
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, t.jsx)("div", {
                  className: u()("footer-credits-copyright-wrapper"),
                  children: (0, t.jsx)("div", {
                    className: u()("footer-credits-copyright mil-up"),
                    children: (0, t.jsx)(i(), {
                      href: "/",
                      name: "subscribe",
                      children:
                        "Copyright \xa92025 Axion All Rights Reserved.",
                    }),
                  }),
                }),
              ],
            }),
          }),
        });
      };
      s.Z = g;
    },
    158: function (e, s, a) {
      var t = a(5893),
        l = a(4298),
        i = a.n(l);
      let r = () =>
        (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(i(), {
              id: "next",
              async: !0,
              src: "/gtag/js?id=G-KV1ZG42P63",
            }),
            (0, t.jsx)(i(), {
              id: "next",
              children:
                "window.dataLayer = window.dataLayer || [];\n                    function gtag(){dataLayer.push(arguments);}\n                    gtag('js', new Date());\n                    gtag('config', 'G-KV1ZG42P63');",
            }),
          ],
        });
      s.Z = r;
    },
    2151: function (e, s, a) {
      var t = a(5893),
        l = a(1664),
        i = a.n(l),
        r = a(7294),
        n = a(5675),
        c = a.n(n),
        o = a(6333),
        d = a(1673),
        m = a(2658),
        h = a(3967),
        u = a.n(h);
      let g = (e) => {
        let { nr: s } = e,
          a = (0, r.useContext)(o.Z),
          { nav: l, changeNav: n } = a;
        return (
          (0, r.useEffect)(() => {
            let e = window.location.pathname || "",
              s = e.split("/").pop();
            return n(s || "home"), () => {};
          }, []),
          (0, t.jsx)("nav", {
            className: u()("navbar navbar-fixed-top navbar-bg-switch"),
            ref: s,
            children: (0, t.jsxs)("div", {
              className: u()("container"),
              children: [
                (0, t.jsx)("div", {
                  className: u()("navbar-header fadeIn-element"),
                  children: (0, t.jsxs)(i(), {
                    href: "/",
                    className: u()("navbar-brand logo"),
                    children: [
                      (0, t.jsx)(c(), {
                        src: d.Z,
                        alt: "Axion",
                        responsive: "true",
                        className: u()("logo-light"),
                      }),
                      (0, t.jsx)(c(), {
                        src: d.Z,
                        alt: "Axion",
                        responsive: "true",
                        className: u()("logo-dark"),
                      }),
                    ],
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: u()("main-navigation dark fadeIn-element"),
                  children: [
                    (0, t.jsx)("div", {
                      className: u()("navbar-header"),
                      children: (0, t.jsxs)("button", {
                        "aria-expanded": "false",
                        className: u()("navbar-toggle dark collapsed"),
                        onClick: m._u,
                        type: "button",
                        children: [
                          (0, t.jsx)("span", {
                            className: u()("sr-only"),
                            children: "Toggle navigation",
                          }),
                          (0, t.jsx)("span", { className: u()("icon-bar") }),
                          (0, t.jsx)("span", { className: u()("icon-bar") }),
                          (0, t.jsx)("span", { className: u()("icon-bar") }),
                        ],
                      }),
                    }),
                    (0, t.jsxs)("div", {
                      className: u()("collapse navbar-collapse"),
                      id: "navbar-collapse",
                      children: [
                        (0, t.jsxs)("ul", {
                          className: u()("nav navbar-nav navbar-left"),
                          children: [
                            (0, t.jsx)("li", {
                              className: "supercluster" === l ? "active" : "",
                              children: (0, t.jsx)(i(), {
                                onClick: () => {
                                  n("supercluster");
                                },
                                className: u()("page-scroll"),
                                title: "AI SUPERCLUSTER",
                                href: "/supercluster",
                                children: "AI SUPERCLUSTER",
                              }),
                            }),
                                                        (0, t.jsx)("li", {
                              children: (0, t.jsx)(l(), {
                                className: g()("page-scroll"),
                                target: "_blank",
                                title: "Dextools",
                                href: "https://www.dextools.io/app/en/ether/pair-explorer/0x00000000000000000000000000000000000000",
                                children: "Dextools",
                              }),
                            }),
                            (0, t.jsx)("li", {
                              children: (0, t.jsx)(i(), {
                                className: u()("page-scroll"),
                                target: "_blank",
                                title: "Litepaper",
                                href: "https://docs.axionai.pro",
                                children: "Litepaper",
                              }),
                            }),
                          ],
                        }),
                        (0, t.jsx)("ul", {
                          className: u()("nav-tools"),
                          children: (0, t.jsx)("li", {
                            children: (0, t.jsxs)("a", {
                              className: u()("page-scroll join-nav"),
                              href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x00000000000000000000000000000000000000",
                              children: [
                                "Buy Now",
                                (0, t.jsx)("b", { children: "↓" }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
      s.Z = g;
    },
    4079: function (e, s, a) {
      a.d(s, {
        o: function () {
          return r;
        },
      });
      var t = a(5893),
        l = a(5675),
        i = a.n(l);
      let r = (e) => {
        let { src: s, alt: a = "placeholder", className: l } = e;
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(i(), {
            draggable: !1,
            src: s,
            alt: a,
            className: l,
            layout: "responsive",
          }),
        });
      };
    },
    2104: function (e, s, a) {
      var t = a(5893);
      a(7294);
      var l = a(3967),
        i = a.n(l);
      let r = (e) => {
        let { nr: s, className: a = "" } = e;
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsxs)("div", {
            ref: s,
            className: i()("animated preloader-animated"),
            children: [
              (0, t.jsx)("div", { className: i()("preloader-bg") }),
              (0, t.jsx)("div", {
                id: "preloader",
                className: i()(a),
                children: (0, t.jsx)("div", {
                  id: "preloader-status",
                  children: (0, t.jsx)("div", {
                    className: i()("preloader-position loader"),
                    children: (0, t.jsx)("span", {}),
                  }),
                }),
              }),
            ],
          }),
        });
      };
      s.Z = r;
    },
    7894: function (e, s, a) {
      var t = a(5893),
        l = a(2658);
      a(7294);
      var i = a(3967),
        r = a.n(i);
      let n = (e) => {
        let { nr: s } = e;
        return (0, t.jsx)("a", {
          ref: s,
          className: r()("to-top-arrow"),
          onClick: l.k3,
          children: (0, t.jsx)("span", { className: r()("fa fa-arrow-up") }),
        });
      };
      s.Z = n;
    },
    2658: function (e, s, a) {
      a.d(s, {
        _u: function () {
          return l;
        },
        iX: function () {
          return r;
        },
        k3: function () {
          return t;
        },
        u3: function () {
          return n;
        },
        v3: function () {
          return i;
        },
      });
      let t = () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        },
        l = (e) => {
          document.getElementById("navbar-collapse").classList.toggle("in");
        },
        i = (e) => {
          let s = document.getElementById("navbar-collapse");
          s.addEventListener("click", function () {
            s.classList.contains("in") && l();
          });
        },
        r = () => "https://node.exabits.ai",
        n = (e) => {
          let s = null,
            a = r();
          window.addEventListener("message", (l) => {
            if (l.origin === a) {
              s || (s = document.getElementById("microExtraContent"));
              try {
                let a = JSON.parse(l.data),
                  i = a.handlerType,
                  r = () => {
                    s.style.height = a.height + "px";
                  };
                switch (i) {
                  case "loadingChange":
                    e(!1), r(), t();
                    break;
                  case "pageChange":
                    e(!0), t(), (s.style = "");
                    break;
                  case "sizeChange":
                    e(!1), r();
                    break;
                  default:
                    r();
                }
              } catch (e) {}
            }
          });
        };
    },
    8296: function (e, s, a) {
      Object.defineProperty(s, "__esModule", { value: !0 });
      let t = a(2648).Z,
        l = t(a(2568)),
        i = a(8565),
        r = (e) => {
          let s = e.headers["x-forwarded-for"] || e.connection.remoteAddress;
          return "::ffff:" === s.substr(0, 7) && (s = s.substr(7)), s;
        },
        n = async (e) => e.then((e) => [null, e]).catch((e) => [e]),
        c = (e) => "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1)),
        o = (e) => {
          let s = [];
          return (
            Object.keys(e).forEach((a) => {
              s.push(e[a]);
            }),
            (0, l.default)("".concat(s.join("exa"), "BITSia"))
          );
        },
        d = () => i.DateTime.now().toUnixInteger(),
        m = (e) =>
          i.DateTime.now()
            .plus({ days: e })
            .toLocaleString(i.DateTime.DATE_MED)
            .toUnixInteger(),
        h = () => i.DateTime.now().startOf("day").toUnixInteger();
      e.exports = {
        getIp: r,
        promiseFn: n,
        firstUpperCase: c,
        getAccessToken: o,
        getNow: d,
        getLastTime: m,
        getTodayStart: h,
      };
    },
  },
]);
