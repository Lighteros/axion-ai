(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5557: function (A, e, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return s(9451);
        },
      ]);
    },
    1566: function (A, e, s) {
      "use strict";
      s.d(e, {
        Z: function () {
          return x;
        },
      });
      var l = s(5893),
        a = s(1664),
        t = s.n(a),
        i = s(7294),
        c = s(5675),
        r = s.n(c),
        n = s(6333),
        d = {
          src: "/caption.png",
          height: 74,
          width: 310,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAElBMVEX////////////////////+/v7VOx/iAAAABnRSTlNZK2RFSXvXTzM8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGklEQVR4nGNgYGRkZmFmYWRgYGBiZWJiYAAAARwAHcpuUeQAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 2,
        },
        o = s(1673),
        h = s(2658),
        m = s(3967),
        g = s.n(m);
      let u = (A) => {
        let { nr: e } = A,
          s = (0, i.useContext)(n.Z),
          { nav: a, changeNav: c } = s;
        return (
          (0, i.useEffect)(() => {
            let A = window.location.pathname || "",
              e = A.split("/").pop();
            return c(e || "home"), () => {};
          }, []),
          (0, l.jsx)("nav", {
            className: g()(
              "navbar navbar-fixed-top navbar-bg-switch navbar-light"
            ),
            ref: e,
            children: (0, l.jsxs)("div", {
              className: g()("container"),
              children: [
                (0, l.jsx)("div", {
                  className: g()("navbar-header fadeIn-element"),
                  children: (0, l.jsxs)(t(), {
                    href: "/",
                    className: g()("navbar-brand logo"),
                    children: [
                      (0, l.jsx)(r(), {
                        src: d,
                        alt: "Axion",
                        responsive: "true",
                        className: g()("logo-light"),
                      }),
                      (0, l.jsx)(r(), {
                        src: o.Z,
                        alt: "Axion",
                        responsive: "true",
                        className: g()("logo-dark"),
                      }),
                    ],
                  }),
                }),
                (0, l.jsxs)("div", {
                  className: g()("main-navigation light fadeIn-element"),
                  children: [
                    (0, l.jsx)("div", {
                      className: g()("navbar-header"),
                      children: (0, l.jsxs)("button", {
                        "aria-expanded": "false",
                        className: g()("navbar-toggle collapsed"),
                        onClick: h._u,
                        type: "button",
                        children: [
                          (0, l.jsx)("span", {
                            className: g()("sr-only"),
                            children: "Toggle navigation",
                          }),
                          (0, l.jsx)("span", { className: g()("icon-bar") }),
                          (0, l.jsx)("span", { className: g()("icon-bar") }),
                          (0, l.jsx)("span", { className: g()("icon-bar") }),
                        ],
                      }),
                    }),
                    (0, l.jsxs)("div", {
                      className: g()("collapse navbar-collapse"),
                      id: "navbar-collapse",
                      children: [
                        (0, l.jsxs)("ul", {
                          className: g()("nav navbar-nav navbar-left"),
                          children: [
                            (0, l.jsx)("li", {
                              className: "supercluster" === a ? "active" : "",
                              children: (0, l.jsx)(t(), {
                                onClick: () => {
                                  c("supercluster");
                                },
                                className: g()("page-scroll"),
                                title: "AI SUPERCLUSTER",
                                href: "/supercluster",
                                children: "AI SUPERCLUSTER",
                              }),
                            }),
                            (0, l.jsx)("li", {
                              children: (0, l.jsx)(t(), {
                                className: g()("page-scroll"),
                                target: "_blank",
                                title: "Blog",
                                href: "https://www.dextools.io/app/en/ether/pool-explorer/0x00000000000000000000000000000000000000",
                                children: "Dextools",
                              }),
                            }),
                            (0, l.jsx)("li", {
                              children: (0, l.jsx)(t(), {
                                className: g()("page-scroll"),
                                target: "_blank",
                                title: "Litepaper",
                                href: "https://docs.exabits.ai/",
                                children: "Litepaper",
                              }),
                            }),
                            (0, l.jsx)("li", {
                              children: (0, l.jsx)(t(), {
                                className: g()("page-scroll"),
                                target: "_blank",
                                title: "Uniswap",
                                href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x00000000000000000000000000000000000000",
                                children: "Buy AXI",
                              }),
                            }),
                          ],
                        }),
                        (0, l.jsx)("ul", {
                          className: g()("nav-tools light"),
                          children: (0, l.jsx)("li", {
                            children: (0, l.jsxs)("a", {
                              className: g()("page-scroll join-nav "),
                              href: "#subscribe",
                              children: [
                                "Follow ",
                                (0, l.jsx)("strong", { children: "▽" }),
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
      var x = u;
    },
    157: function (A, e, s) {
      "use strict";
      var l = s(5893),
        a = s(7294),
        t = s(2151),
        i = s(1566),
        c = s(7561),
        r = s(7894),
        n = s(2104),
        d = s(158),
        o = s(6951),
        h = s(2658);
      let m = (A) => {
        let [e, s] = (0, a.useState)(!1),
          m = (0, a.useRef)(null),
          g = (0, a.useRef)(null),
          u = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(() => {
            if (((0, o.M)(), s(!0), e)) {
              let e = u.current,
                s = m.current,
                l = g.current,
                a = setTimeout(() => {
                  setTimeout(() => {
                    e.classList.add("hide");
                  }, 500);
                }, 500);
              return (
                (0, h.v3)(),
                ["home"].includes(A.pagename)
                  ? document.body.classList.add("bg-main")
                  : document.body.classList.remove("bg-main"),
                window.addEventListener("scroll", () => {
                  window.pageYOffset > 50
                    ? s.classList.add("main-navigation-bg")
                    : s.classList.remove("main-navigation-bg"),
                    window.pageYOffset > 400
                      ? l.classList.add("show")
                      : l.classList.remove("show");
                }),
                () => clearTimeout(a)
              );
            }
          }, [e]),
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(n.Z, { nr: u }),
              ["home", "supercluster"].includes(A.pagename)
                ? (0, l.jsx)(i.Z, { nr: m })
                : (0, l.jsx)(t.Z, { nr: m }),
              A.children,
              (0, l.jsx)(c.Z, {}),
              (0, l.jsx)(r.Z, { nr: g }),
              (0, l.jsx)(d.Z, {}),
            ],
          })
        );
      };
      e.Z = m;
    },
    6951: function (A, e, s) {
      "use strict";
      s.d(e, {
        M: function () {
          return t;
        },
      });
      var l = s(990),
        a = s(6546);
      let t = () => {
        let A = window.innerWidth;
        A >= 768 &&
          (() => {
            l.p8.registerPlugin(a.ScrollTrigger);
            let A = document.querySelectorAll(".mil-up");
            A.forEach((A) => {
              l.p8.fromTo(
                A,
                { opacity: 0, y: 50, ease: "sine" },
                {
                  y: 0,
                  opacity: 1,
                  scrollTrigger: {
                    trigger: A,
                    toggleActions: "play none none reverse",
                  },
                }
              );
            });
          })();
      };
    },
    9451: function (A, e, s) {
      "use strict";
      s.r(e),
        s.d(e, {
          default: function () {
            return As;
          },
        });
      var l = s(5893),
        a = s(157),
        t = s(7294),
        i = s(3967),
        c = s.n(i),
        r = s(4079),
        n = {
          src: "/_next/static/media/H200.webp",
          height: 640,
          width: 972,
          blurDataURL:
            "data:image/webp;base64,UklGRoQAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAAAASL3N3aIQAAEdr///9vAQAq/v///34BAFf/////fAEAUsvHyM5aAQBWUDggNAAAALABAJ0BKggABQACQDglpAADFmD2VwAA/vTDH9/MD5Mk7U3sp+NdBJOdQicbxQE8ksPAAAA=",
          blurWidth: 8,
          blurHeight: 5,
        },
        d = {
          src: "/_next/static/media/h200Text.webp",
          height: 288,
          width: 880,
          blurDataURL:
            "data:image/webp;base64,UklGRmoAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAABgWIRceFw8UHg4jACsAFgAaJRYXHhcPAFZQOCAqAAAAkAEAnQEqCAADAAJAOCWkAALnUenQAP7z0PDqUln1+pgdJNbksPNgAAAA",
          blurWidth: 8,
          blurHeight: 3,
        };
      let o = (A) => {
        let { nr: e } = A;
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)("section", {
            className: c()("section-gh100 h100-cardbox"),
            children: (0, l.jsx)("div", {
              className: c()("container"),
              children: (0, l.jsxs)("div", {
                className: c()("h100-items "),
                children: [
                  (0, l.jsx)("div", {
                    className: c()("col-elg-6"),
                    children: (0, l.jsx)("div", {
                      className: c()("h100-card-item gpucard-bg"),
                      children: (0, l.jsxs)("div", {
                        className: c()("row "),
                        children: [
                          (0, l.jsx)("div", {
                            className: c()("col-lg-12 text-center"),
                            children: (0, l.jsx)("span", {
                              className: c()("h200-imgcard"),
                              children: (0, l.jsx)(r.o, {
                                className: c()("mil-up"),
                                alt: "NVIDIA H200",
                                src: n,
                              }),
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: c()("col-lg-12 text-center mil-up"),
                            children: (0, l.jsx)("span", {
                              className: c()("h200-text"),
                              children: (0, l.jsx)(r.o, { alt: "", src: d }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: c()("col-elg-6"),
                    children: (0, l.jsxs)("div", {
                      className: c()("h100-card-item h100-rightcard"),
                      children: [
                        (0, l.jsx)("div", {
                          className: c()("row "),
                          children: (0, l.jsx)("div", {
                            className: c()("col-lg-12 text-center"),
                            children: (0, l.jsx)("h2", {
                              className: c()(
                                "section-heading text-upper mil-up"
                              ),
                              children: "AI COMPUTE ECONOMY",
                            }),
                          }),
                        }),
                        (0, l.jsxs)("div", {
                          className: c()("row"),
                          children: [
                            (0, l.jsxs)("div", {
                              className: c()(
                                "col-lg-12 text-center compute-desc mil-up"
                              ),
                              children: [
                                (0, l.jsx)("p", {
                                  children: "By tokenizing GPU power,",
                                }),
                                (0, l.jsx)("p", {
                                  children:
                                    "Axion enables users to become stakeholders of the ",
                                }),
                                (0, l.jsx)("p", {
                                  children:
                                    " AI compute economy, earning rewards and revenue.",
                                }),
                              ],
                            }),
                            (0, l.jsx)("div", {
                              className: c()(
                                "col-lg-12 text-center compute-gold mil-up"
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      };
      var h = {
          src: "/_next/static/media/staking.webp",
          height: 108,
          width: 98,
          blurDataURL:
            "data:image/webp;base64,UklGRpgAAABXRUJQVlA4WAoAAAAQAAAABgAABwAAQUxQSDkAAAAAAA84MDgOAAAxAQABMQACQAQpBj8BNQNYSlwFMzAAUEEtADEvCk9fWQkvOQMmRS0ENwI2MTAyNQEAVlA4IDgAAAAQAgCdASoHAAgAAkA4JaQAD4lxduoqqQEAAP78I3DSX4Fle/1zV/PpEViWdyO1ZasAl5qR7iAAAA==",
          blurWidth: 7,
          blurHeight: 8,
        },
        m = {
          src: "/_next/static/media/evolution.webp",
          height: 809,
          width: 913,
          blurDataURL:
            "data:image/webp;base64,UklGRnwAAABXRUJQVlA4WAoAAAAQAAAABwAABgAAQUxQSDQAAAABYBvZVqqD5dRA5nyXyKqw/iuhiYgIsPtuAVLfp2b+37RFiAXcMcN8uOF+an3uYe49+H4GVlA4ICIAAAAwAQCdASoIAAcAAkA4JaQAA3AA/vdO7V9/wsb4xctI8xAA",
          blurWidth: 8,
          blurHeight: 7,
        },
        g = {
          src: "/_next/static/media/earnings.webp",
          height: 102,
          width: 102,
          blurDataURL:
            "data:image/webp;base64,UklGRnYAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDcAAAABYBVJspPRQEZC5uX8/nj4F4WIiAioOlfA7l13GMrxCdHuoDsBarjz3+WrKfUKj3nWVSjAb9IBAFZQOCAYAAAAMAEAnQEqCAAIAAJAOCWkAANwAP729QAA",
          blurWidth: 8,
          blurHeight: 8,
        };
      let u = (A) => {
          let { nr: e } = A;
          return (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)("section", {
              className: c()("section-subnet"),
              children: (0, l.jsxs)("div", {
                className: c()("container"),
                children: [
                  (0, l.jsx)("div", {
                    className: c()("subnet-body"),
                    children: (0, l.jsx)("div", {
                      className: c()("row "),
                      children: (0, l.jsxs)("div", {
                        className: c()("col-lg-12 text-center"),
                        children: [
                          (0, l.jsx)("h2", {
                            className: c()(
                              "section-heading clients-heading mil-up text-uppercase"
                            ),
                            children: "Axion Subnet",
                          }),
                          (0, l.jsx)("p", {
                            className: c()("mil-up"),
                            children:
                              "Axion subnets are the gateway for everyone to take part in the compute revolution.",
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: c()("subnet-footer"),
                    children: (0, l.jsxs)("div", {
                      className: c()(
                        "row flex flex-wrap items-center justify-center gap-2"
                      ),
                      children: [
                        (0, l.jsx)("div", {
                          className: c()("col-lg-4"),
                          children: (0, l.jsx)("div", {
                            className: c()("subnet-items radius-left"),
                            children: (0, l.jsxs)("dl", {
                              className: c()("subnet-dl mil-up"),
                              children: [
                                (0, l.jsx)("dt", {
                                  className: c()("mt-2"),
                                  children: (0, l.jsx)(r.o, {
                                    alt: "",
                                    src: g,
                                  }),
                                }),
                                (0, l.jsx)("dd", { children: "Compute" }),
                              ],
                            }),
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: c()("col-lg-4"),
                          children: (0, l.jsx)("div", {
                            className: c()("subnet-items"),
                            children: (0, l.jsxs)("dl", {
                              className: c()("subnet-dl mil-up"),
                              children: [
                                (0, l.jsx)("dt", {
                                  className: c()("mt-2"),
                                  children: (0, l.jsx)(r.o, {
                                    alt: "",
                                    src: h,
                                  }),
                                }),
                                (0, l.jsx)("dd", { children: "Revenue" }),
                              ],
                            }),
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: c()("col-lg-4"),
                          children: (0, l.jsx)("div", {
                            className: c()("subnet-items radius-right"),
                            children: (0, l.jsxs)("dl", {
                              className: c()("subnet-dl mil-up"),
                              children: [
                                (0, l.jsx)("dt", {
                                  className: c()("mt-2"),
                                  children: (0, l.jsx)(r.o, {
                                    alt: "",
                                    src: m,
                                  }),
                                }),
                                (0, l.jsx)("dd", { children: "Evolution" }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        x = (A) => {
          let { nr: e } = A;
          return (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)("section", {
              className: c()("section-nodeincestor"),
              children: (0, l.jsxs)("div", {
                className: c()("container"),
                children: [
                  (0, l.jsx)("div", {
                    className: c()("nodeincestor-body"),
                    children: (0, l.jsx)("div", {
                      className: c()("nodeincestor-header"),
                      children: (0, l.jsx)("h2", {
                        className: c()(
                          "section-heading clients-heading mil-up text-uppercase"
                        ),
                        children: "Tokenomics",
                      }),
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: c()("nodeincestor-footer"),
                    children: (0, l.jsxs)("div", {
                      className: c()("row "),
                      children: [
                        (0, l.jsx)("div", {
                          className: c()("col-lg-4"),
                          children: (0, l.jsx)("div", {
                            className: c()("nodeincestor-items"),
                            children: (0, l.jsx)("dl", {
                              className: c()(
                                "nodeincestor-dl text-center mil-up"
                              ),
                              children: (0, l.jsxs)("dd", {
                                children: [
                                  (0, l.jsx)("strong", { children: "1,000,000,000" }),
                                  (0, l.jsx)("br", {}),
                                  "Total Supply",
                                ],
                              }),
                            }),
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: c()("col-lg-4"),
                          children: (0, l.jsx)("div", {
                            className: c()("nodeincestor-items"),
                            children: (0, l.jsx)("dl", {
                              className: c()(
                                "nodeincestor-dl text-center mil-up"
                              ),
                              children: (0, l.jsxs)("dd", {
                                children: [
                                  (0, l.jsx)("strong", { children: "LP Burnt" }),
                                  (0, l.jsx)("br", {}),
                                  "Liquidity Pool",
                                ],
                              }),
                            }),
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: c()("col-lg-4"),
                          children: (0, l.jsx)("div", {
                            className: c()("nodeincestor-items"),
                            children: (0, l.jsx)("dl", {
                              className: c()(
                                "nodeincestor-dl text-center mil-up"
                              ),
                              children: (0, l.jsxs)("dd", {
                                children: [
                                  (0, l.jsx)("strong", { children: "0% Buy/Sell" }),
                                  (0, l.jsx)("br", {}),
                                  "Tax",
                                ],
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        };
      var b = {
          src: "/_next/static/media/stanford.e41b6ba9.webp",
          height: 240,
          width: 720,
          blurDataURL:
            "data:image/webp;base64,UklGRl4AAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAATEwkEyQWGwCYmDQ+OzIlADU1Dh4cIQIAAFZQOCAeAAAAkAEAnQEqCAADAAJAOCWkAALnWbYAAP79lL1HoAAA",
          blurWidth: 8,
          blurHeight: 3,
        },
        w = {
          src: "/_next/static/media/berkeley.49a53cd0.webp",
          height: 240,
          width: 720,
          blurDataURL:
            "data:image/webp;base64,UklGRmgAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAEy8LAwUEAACN6yZEPDwaABItBgsKDAMAAFZQOCAoAAAAsAEAnQEqCAADAAJAOCWkAAMX/IgwAAD+/Pz7zFQzYWZhlQhG1wAAAA==",
          blurWidth: 8,
          blurHeight: 3,
        },
        p = {
          src: "/_next/static/media/google.d54ee69c.webp",
          height: 240,
          width: 720,
          blurDataURL:
            "data:image/webp;base64,UklGRlgAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAABgAAAAAAAACbN0BGQDIxEgMAAAQAAAAAAFZQOCAYAAAAMAEAnQEqCAADAAJAOCWkAANwAP77IYAA",
          blurWidth: 8,
          blurHeight: 3,
        },
        Q = {
          src: "/_next/static/media/alibaba.742b25e5.webp",
          height: 240,
          width: 720,
          blurDataURL:
            "data:image/webp;base64,UklGRlgAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAAAAAAAAAAABCY2ZfTFpTHgAAAAAAAAAAAFZQOCAYAAAAMAEAnQEqCAADAAJAOCWkAANwAP77IYAA",
          blurWidth: 8,
          blurHeight: 3,
        },
        j = {
          src: "/_next/static/media/harvard.0b309cf5.webp",
          height: 240,
          width: 720,
          blurDataURL:
            "data:image/webp;base64,UklGRnQAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAdjQPEQ0RFAT8XCc8KTknDToBBg0ODAMAAFZQOCA0AAAAkAEAnQEqCAADAAJAOCWkAALnWTsQAP73cKP1uFev/29wewT/6hF76a/stjrPiHWgAAAAAA==",
          blurWidth: 8,
          blurHeight: 3,
        },
        N = {
          src: "/_next/static/media/rendernetwork.18440f7b.webp",
          height: 240,
          width: 720,
          blurDataURL:
            "data:image/webp;base64,UklGRlgAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAACQEAAAAAAABlMDEvNzAtAA0BAAAAAAAAAFZQOCAYAAAAMAEAnQEqCAADAAJAOCWkAANwAP77IYAA",
          blurWidth: 8,
          blurHeight: 3,
        },
        B = {
          src: "/_next/static/media/ionet.b6409363.webp",
          height: 240,
          width: 720,
          blurDataURL:
            "data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAL1ZWVlZWMABs0cjO2sluACxRUVFRUS0AAFZQOCAuAAAAsAEAnQEqCAADAAJAOCWkAAMX/Jh4wAD+/bNdb7Zx5wIjvxx7pU271CdwAAAAAA==",
          blurWidth: 8,
          blurHeight: 3,
        },
        U = {
          src: "/_next/static/media/akash.b4e90bf1.webp",
          height: 240,
          width: 720,
          blurDataURL:
            "data:image/webp;base64,UklGRlgAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAJAgAFAAAFQCteaaYlJiSIScfBwUHBwMBAFZQOCAYAAAAMAEAnQEqCAADAAJAOCWkAANwAP77IYAA",
          blurWidth: 8,
          blurHeight: 3,
        },
        v = {
          src: "/_next/static/media/ritual.c5a9b686.webp",
          height: 240,
          width: 720,
          blurDataURL:
            "data:image/webp;base64,UklGRlgAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAACIEAwAAAQAhi1NTXFkqAAAjAQIDBAEAAFZQOCAYAAAAMAEAnQEqCAADAAJAOCWkAANwAP77IYAA",
          blurWidth: 8,
          blurHeight: 3,
        },
        k = {
          src: "/_next/static/media/aethir.a2ee94eb.webp",
          height: 240,
          width: 720,
          blurDataURL:
            "data:image/webp;base64,UklGRlwAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAASlQGAAAGCADt+2JqY21pAElSBAsFBwcAAFZQOCAcAAAAMAEAnQEqCAADAAJAOCWkAANwAP766WPp5yjgAA==",
          blurWidth: 8,
          blurHeight: 3,
        },
        C = {
          src: "/_next/static/media/emc.1d76e382.webp",
          height: 240,
          width: 720,
          blurDataURL:
            "data:image/webp;base64,UklGRlgAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAFD4VIw8cFwBMiXVsmowVABMuGCMGHRcAAFZQOCAYAAAAMAEAnQEqCAADAAJAOCWkAANwAP77IYAA",
          blurWidth: 8,
          blurHeight: 3,
        },
        R = {
          src: "/_next/static/media/gamekillerapp.12f59fe1.webp",
          height: 240,
          width: 720,
          blurDataURL:
            "data:image/webp;base64,UklGRlgAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAAgAAAAAAAABzMTU1PSo/CgEAAAAAAAAAAFZQOCAYAAAAMAEAnQEqCAADAAJAOCWkAANwAP77IYAA",
          blurWidth: 8,
          blurHeight: 3,
        },
        E = {
          src: "/_next/static/media/protocollabs.7435a09f.webp",
          height: 240,
          width: 720,
          blurDataURL:
            "data:image/webp;base64,UklGRlgAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAI0ogIx8YEwBzu205Uy0ZAAdOCSstAwAAAFZQOCAYAAAAMAEAnQEqCAADAAJAOCWkAANwAP77IYAA",
          blurWidth: 8,
          blurHeight: 3,
        },
        W = {
          src: "/_next/static/media/oort.aadc5db9.webp",
          height: 240,
          width: 720,
          blurDataURL:
            "data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAAQEAAAAaHQWCYW9jWkEzAAAAAAAAFxoAAFZQOCAuAAAAsAEAnQEqCAADAAJAOCWkAAMWYN5WgAD++EW+R9m1Xlr84yKyiv84Jf5+wUgAAA==",
          blurWidth: 8,
          blurHeight: 3,
        },
        f = {
          src: "/_next/static/media/heurist.1b406038.webp",
          height: 240,
          width: 720,
          blurDataURL:
            "data:image/webp;base64,UklGRmoAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAI2RhYWFhJABZ6+Pk4ONZACNkYWFhYSQAAFZQOCAqAAAAsAEAnQEqCAADAAJAOCWkAALtfLHAAAD+/GItLHyan75zwas8HHwIAAAA",
          blurWidth: 8,
          blurHeight: 3,
        },
        D = {
          src: "/_next/static/media/nebua.9d8405ce.webp",
          height: 240,
          width: 720,
          blurDataURL:
            "data:image/webp;base64,UklGRmIAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAACwAAAAAAAACcKFA7QUNBCgoAAAAAAAAAAFZQOCAiAAAAkAEAnQEqCAADAAJAOCWkAALnWbYAAP78m+pt7sJddCAAAA==",
          blurWidth: 8,
          blurHeight: 3,
        },
        J = {
          src: "/_next/static/media/myshell.787935ef.webp",
          height: 240,
          width: 720,
          blurDataURL:
            "data:image/webp;base64,UklGRmoAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAGgAEBAkEBASDXUhha1dmIgACAA8GAAAAAFZQOCAqAAAAkAEAnQEqCAADAAJAOCWkAALnT91gAP771SeyvSxZCjezWp3wtFSwegAA",
          blurWidth: 8,
          blurHeight: 3,
        },
        O = {
          src: "/_next/static/media/hyperbolic.c5910c52.webp",
          height: 240,
          width: 720,
          blurDataURL:
            "data:image/webp;base64,UklGRl4AAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAABwAAAAAAAACEJ0tTT0lPCwgABgMAAAAAAFZQOCAeAAAAMAEAnQEqCAADAAJAOCWcAANwAP77D4u6A4qnAAAA",
          blurWidth: 8,
          blurHeight: 3,
        },
        S = {
          src: "/_next/static/media/lepton.80132f61.webp",
          height: 240,
          width: 720,
          blurDataURL:
            "data:image/webp;base64,UklGRlgAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAIxMDAAEABQKHR0RSUDJEFAEBAAAAAAAAAFZQOCAYAAAAMAEAnQEqCAADAAJAOCWkAANwAP77IYAA",
          blurWidth: 8,
          blurHeight: 3,
        },
        I = {
          src: "/_next/static/media/imagineapp.89dea50c.webp",
          height: 240,
          width: 720,
          blurDataURL:
            "data:image/webp;base64,UklGRmgAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAABoAAAAAAAASuGddYWAIAAAdBgAGAAAAAFZQOCAoAAAAsAEAnQEqCAADAAJAOCWkAALtfDtrwAD+/Oy6w+TkIkXQUoRd+AAAAA==",
          blurWidth: 8,
          blurHeight: 3,
        },
        L = {
          src: "/_next/static/media/nuklai.bb3eb93d.webp",
          height: 240,
          width: 720,
          blurDataURL:
            "data:image/webp;base64,UklGRmgAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAFV0DAAEBAQA//XBngH8wAARKGw8MEQQAAFZQOCAoAAAAkAEAnQEqCAADAAJAOCWkAAKdNisAAP7yk+U3gSJ/Sr3dGvSyZAAAAA==",
          blurWidth: 8,
          blurHeight: 3,
        },
        F = {
          src: "/_next/static/media/arbius.1ffa452c.webp",
          height: 240,
          width: 720,
          blurDataURL:
            "data:image/webp;base64,UklGRlgAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAAAAAAAIEAABzVWxpcXJZAAEBAQICAwIAAFZQOCAYAAAAMAEAnQEqCAADAAJAOCWkAANwAP77IYAA",
          blurWidth: 8,
          blurHeight: 3,
        },
        V = {
          src: "/_next/static/media/aleo.245591d7.webp",
          height: 240,
          width: 720,
          blurDataURL:
            "data:image/webp;base64,UklGRmQAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAAAAHBgAAAAAAA1ddSg0AAAABBQwLAAAAAFZQOCAkAAAAkAEAnQEqCAADAAJAOCWkAAKdNisAAP79xbwUk7twqozAAAAA",
          blurWidth: 8,
          blurHeight: 3,
        },
        H = {
          src: "/_next/static/media/palebluedot.ca57c311.webp",
          height: 240,
          width: 720,
          blurDataURL:
            "data:image/webp;base64,UklGRoQAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAACBoAAAAAAAAfJjAnKRgZAAkEAAAAAAAAAFZQOCBEAAAA8AEAnQEqCAADAAJAOCWIAnQ1wAFh452EAP7ubwdiXZz7QVsmH47xIS8us2wFGoTUSqgt6EVlq/vik7H41d0z7BFUAAA=",
          blurWidth: 8,
          blurHeight: 3,
        };
      let G = () =>
        (0, l.jsx)("section", {});
      var X = s(1664),
        Z = s.n(X),
        Y = {
          src: "/_next/static/media/ap.c591707c.webp",
          height: 290,
          width: 750,
          blurDataURL:
            "data:image/webp;base64,UklGRl4AAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAAAAAAAAAAAAAY10pLyglAAAAAAAAAAAAAFZQOCAeAAAAMAEAnQEqCAADAAJAOCWkAANwAP743iFOzFKNYAAA",
          blurWidth: 8,
          blurHeight: 3,
        },
        y = {
          src: "/_next/static/media/benzinga.8754d5bc.webp",
          height: 290,
          width: 750,
          blurDataURL:
            "data:image/webp;base64,UklGRlgAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAAAAAAAAAAAAAKWRhYVElAAAAAAAAAAAAAFZQOCAYAAAAMAEAnQEqCAADAAJAOCWkAANwAP77IYAA",
          blurWidth: 8,
          blurHeight: 3,
        },
        M = {
          src: "/_next/static/media/marketwatch.9bfdb369.webp",
          height: 290,
          width: 750,
          blurDataURL:
            "data:image/webp;base64,UklGRmQAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAAAAAAAAAAAAAVUtUY2BVAgAAAAAAAAAAAFZQOCAkAAAAkAEAnQEqCAADAAJAOCWkAAKc+xQAAP79ftbv/EY2r7ZYAAAA",
          blurWidth: 8,
          blurHeight: 3,
        },
        P = {
          src: "/_next/static/media/yahoo.80fd6709.webp",
          height: 290,
          width: 750,
          blurDataURL:
            "data:image/webp;base64,UklGRlgAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAAAAAEwAAFgAAaZinj4pOAAAVAAAAAAAAAFZQOCAYAAAAMAEAnQEqCAADAAJAOCWkAANwAP77IYAA",
          blurWidth: 8,
          blurHeight: 3,
        },
        _ = {
          src: "/_next/static/media/cointelegraph.034b7d2a.webp",
          height: 290,
          width: 750,
          blurDataURL:
            "data:image/webp;base64,UklGRmYAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAAAMBAAAAAAAAHSQsKCwQAAAAAAAAAAAAAFZQOCAmAAAAMAEAnQEqCAADAAJAOCWcAANwAP76cZlWh+jEtX3r+zt2hInuAAA=",
          blurWidth: 8,
          blurHeight: 3,
        };
      let q = () =>
        (0, l.jsx)("section", {});
      var T = {
          src: "/_next/static/media/b200.webp",
          height: 630,
          width: 530,
          blurDataURL:
            "data:image/webp;base64,UklGRo4AAABXRUJQVlA4WAoAAAAQAAAABgAABwAAQUxQSDkAAAAAAAAAMAAAAAACxv4hAAAAq//3e1MAADzc///wDgBl////+TAN7////VgAAHP//2sAAAADKzoAAAAAVlA4IC4AAACwAQCdASoHAAgAAkA4JaQAAp1gAe8QAP776LLR/6BSTLe8dYz8ph7BULgAAAAA",
          blurWidth: 7,
          blurHeight: 8,
        },
        z = {
          src: "/_next/static/media/gpuwell.webp",
          height: 1023,
          width: 1366,
          blurDataURL:
            "data:image/webp;base64,UklGRo4AAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSCoAAAABYNBIkqI+vmdmZv8mX0NEJD/bu36QDMd4Pw26KqeqKS1J3pZtAFhhlAJWUDggPgAAALABAJ0BKggABgACQDglpAAC93/42/wA/uu1uXvfsolLPIFy7XNclfN78I2anN6crVqWHdpMyEL9jAkLAAAA",
          blurWidth: 8,
          blurHeight: 6,
        };
      let K = (A) => {
        let { nr: e } = A;
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)("section", {
            className: c()("section-b200"),
            children: (0, l.jsx)("div", {
              className: c()("container"),
              children: (0, l.jsxs)("div", {
                className: c()("b200-cardbox"),
                children: [
                  (0, l.jsx)("div", {
                    className: c()("row"),
                    children: (0, l.jsx)("div", {
                      className: c()("col-lg-12"),
                      children: (0, l.jsx)("h2", {
                        className: c()(
                          "section-heading text-uppercase text-center mt-3 mil-up"
                        ),
                        children: (0, l.jsx)("span", {
                          children: "The Currency of The Future",
                        }),
                      }),
                    }),
                  }),
                  (0, l.jsxs)("div", {
                    className: c()("b200-banner-body"),
                    children: [
                      (0, l.jsx)("div", {
                        className: c()("b200-banner-left mil-up"),
                        children: (0, l.jsx)("span", {
                          children: (0, l.jsx)(r.o, {
                            src: z,
                            alt: "NVIDIA DGX B200",
                          }),
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: c()("b200-banner-right mil-up"),
                        children: (0, l.jsx)("span", {
                          children: (0, l.jsx)(r.o, {
                            src: T,
                            alt: "NVIDIA DGX B200",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      };
      var $ = {
        src: "/_next/static/media/canvas.a8ab5fb3.webp",
        height: 294,
        width: 590,
        blurDataURL:
          "data:image/webp;base64,UklGRkgAAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSAkAAAABBxAREYiI/gcAVlA4IBgAAAAwAQCdASoIAAQAAkA4JaQAA3AA/vucwAA=",
        blurWidth: 8,
        blurHeight: 4,
      };
      let AA = (A) => {
          let { onResize: e } = A,
            s = (0, t.useRef)(0),
            a = (0, t.useRef)(null),
            i = (0, t.useRef)(e);
          i.current = e;
          let c = (0, t.useCallback)((A) => {
              s.current && cancelAnimationFrame(s.current),
                (s.current = requestAnimationFrame(() => {
                  i.current(A);
                }));
            }, []),
            r = (0, t.useCallback)(() => {
              let A = a.current;
              A &&
                A.contentDocument &&
                A.contentDocument.defaultView &&
                A.contentDocument.defaultView.addEventListener("resize", c);
            }, []);
          return (
            (0, t.useEffect)(
              () => () => {
                let A = a.current;
                A &&
                  A.contentDocument &&
                  A.contentDocument.defaultView &&
                  A.contentDocument.defaultView.removeEventListener(
                    "resize",
                    c
                  );
              },
              []
            ),
            (0, l.jsx)("object", {
              onLoad: r,
              ref: a,
              tabIndex: -1,
              type: "text/html",
              data: "about:blank",
              title: "",
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                pointerEvents: "none",
                zIndex: -1,
                opacity: 0,
              },
            })
          );
        },
        Ae = (A) => {
          let { nr: e } = A,
            s = (0, t.useRef)(null),
            a = (0, t.useRef)(null);
          (0, t.useEffect)(() => {
            let A;
            A && clearTimeout(A),
              i(),
              window.addEventListener("resize", () => {
                A && clearTimeout(A),
                  (A = setTimeout(() => {
                    i();
                  }, 200));
              });
          }, []);
          let i = (0, t.useCallback)(() => {
            if (s.current && a.current) {
              let A = s.current.getBoundingClientRect(),
                e = (A.width / 590).toFixed(5);
              a.current.style.transform = "scale(".concat(e, ")");
            }
          }, []);
          return (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)("div", {
              className: c()("newup-page"),
              id: "home",
              children: [
                (0, l.jsxs)("div", {
                  className: c()("hero-fullscreen"),
                  children: [
                    (0, l.jsx)("div", { className: c()("top-shadow light") }),
                    (0, l.jsx)("div", {
                      className: c()("hero-fullscreen-FIX"),
                      children: (0, l.jsx)("div", {
                        className: c()("hero-bg bg-img-SINGLE-LIGHT"),
                      }),
                    }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className: c()("center-container"),
                  children: (0, l.jsx)("div", {
                    className: c()("hero-container "),
                    children: (0, l.jsx)("div", {
                      className: c()("row"),
                      children: (0, l.jsxs)("div", {
                        className: c()("col-center-8 text-center"),
                        children: [
                          (0, l.jsx)("h1", {
                            className: c()(
                              "home-page-title white animated blurIn text-uppercase animate-delay-2 "
                            ),
                            children: "THE AI COMPUTE BASE-LAYER",
                          }),
                          (0, l.jsx)("h2", {
                            className: c()(
                              "hero-subtitle white animated fadeInDownShorter animate-delay-1"
                            ),
                            children:
                              "Simplified Access to the Currency of the Future",
                          }),
                          (0, l.jsxs)("div", {
                            className: c()("home-page-subtitle-image"),
                            ref: s,
                            children: [
                              (0, l.jsx)(r.o, { alt: " ", src: $ }),
                              (0, l.jsx)(AA, { onResize: i }),
                              (0, l.jsx)("div", {
                                className: c()("hero-layers"),
                                ref: a,
                                children: (0, l.jsx)("div", {
                                  className: c()("hero-layers-in"),
                                  children: (0, l.jsx)("div", {
                                    className: c()("hero-layer-1"),
                                    children: (0, l.jsx)("div", {
                                      className: c()("hero-layer-1-in"),
                                      children: (0, l.jsx)("div", {
                                        className: c()("hero-fan-1"),
                                        children: (0, l.jsx)("div", {
                                          className: c()("fan"),
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            }),
          });
        };
      function As() {
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsxs)(a.Z, {
            pagename: "home",
            children: [
              (0, l.jsx)(Ae, {}),
              (0, l.jsx)(K, {}),
              (0, l.jsx)(o, {}),
              (0, l.jsx)(u, {}),
              (0, l.jsx)(x, {}),
              (0, l.jsx)(G, {}),
              (0, l.jsx)(q, {}),
            ],
          }),
        });
      }
    },
  },
  function (A) {
    A.O(0, [225, 802, 553, 137, 509, 774, 888, 179], function () {
      return A((A.s = 5557));
    }),
      (_N_E = A.O());
  },
]);
