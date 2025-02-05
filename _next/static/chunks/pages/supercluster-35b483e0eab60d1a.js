(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [896],
  {
    4953: function (e, s, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/supercluster",
        function () {
          return a(9414);
        },
      ]);
    },
    6951: function (e, s, a) {
      "use strict";
      a.d(s, {
        M: function () {
          return c;
        },
      });
      var i = a(990),
        A = a(6546);
      let c = () => {
        let e = window.innerWidth;
        e >= 768 &&
          (() => {
            i.p8.registerPlugin(A.ScrollTrigger);
            let e = document.querySelectorAll(".mil-up");
            e.forEach((e) => {
              i.p8.fromTo(
                e,
                { opacity: 0, y: 50, ease: "sine" },
                {
                  y: 0,
                  opacity: 1,
                  scrollTrigger: {
                    trigger: e,
                    toggleActions: "play none none reverse",
                  },
                }
              );
            });
          })();
      };
    },
    9414: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return z;
          },
        });
      var i = a(5893),
        A = a(9008),
        c = a.n(A),
        r = a(7294),
        l = a(1566),
        d = a(451),
        t = a(7894),
        n = a(2104),
        h = a(6951),
        o = a(2658),
        m = a(158),
        x = a(3967),
        u = a.n(x);
      let g = (e) => {
        let [s, a] = (0, r.useState)(!1),
          A = (0, r.useRef)(null),
          c = (0, r.useRef)(null),
          x = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            if (((0, h.M)(), a(!0), s)) {
              let e = x.current,
                s = A.current,
                a = c.current,
                i = setTimeout(() => {
                  setTimeout(() => {
                    e.classList.add("hide");
                  }, 500);
                }, 500);
              return (
                (0, o.v3)(),
                document.body.classList.remove("bg-main"),
                window.addEventListener("scroll", () => {
                  window.pageYOffset > 50
                    ? s.classList.add("main-navigation-bg")
                    : s.classList.remove("main-navigation-bg"),
                    window.pageYOffset > 400
                      ? a.classList.add("show")
                      : a.classList.remove("show");
                }),
                () => clearTimeout(i)
              );
            }
          }, [s]),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(n.Z, { nr: x }),
              (0, i.jsx)(l.Z, { nr: A }),
              (0, i.jsxs)("div", {
                className: u()("aisuper"),
                children: [
                  e.children,
                  (0, i.jsx)(d.Z, {}),
                  (0, i.jsx)(t.Z, { nr: c }),
                ],
              }),
              (0, i.jsx)(m.Z, {}),
            ],
          })
        );
      };
      var j = a(4079),
        b = {
          src: "/_next/static/media/NH100.webp",
          height: 964,
          width: 1600,
          blurDataURL:
            "data:image/webp;base64,UklGRoQAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAANUuFhK5lsHWMv562c/Tum1HHorZz9P+XP1Se1Hm9hH00RoO4t2SvRgBWUDggNAAAALABAJ0BKggABQACQDglpAADE8NNbKAA/vsKh2+/Hu9Ch39o/tttj906lRdZlwcHgrAAAAA=",
          blurWidth: 8,
          blurHeight: 5,
        };
      let p = (e) => {
          let { nr: s } = e,
            a = () => {
              document.getElementById("gpus-block").className = "section-sales";
            };
          return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)("section", {
              className: u()("section-sales bg-light"),
              children: (0, i.jsx)("div", {
                className: u()("container sections gpus-sections"),
                children: (0, i.jsxs)("div", {
                  className: u()("row"),
                  children: [
                    (0, i.jsx)("div", {
                      className: u()("col-md-7 col-ex-7 col-sales mil-up"),
                      children: (0, i.jsx)("span", {
                        children: (0, i.jsx)(j.o, {
                          alt: "NVIDIA H100 SXM GPU",
                          src: b,
                        }),
                      }),
                    }),
                    (0, i.jsxs)("div", {
                      className: u()("col-md-5 col-ex-5 col-sales"),
                      children: [
                        (0, i.jsxs)("h2", {
                          className: u()(
                            "section-heading  sales-heading text-center"
                          ),
                          children: [
                            (0, i.jsxs)("span", {
                              className: u()("mil-up"),
                              children: ["DEPLOY NVIDIA", " "],
                            }),
                            (0, i.jsx)("br", {}),
                            (0, i.jsx)("span", {
                              className: u()("mil-up"),
                              children: "H100 GPUs NOW!",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("h4", {
                          className: u()(
                            "section-desc mil-up text-center contact-desc h100-desc"
                          ),
                          children: [
                            "Access the Most Powerful GPUs on Earth",
                            (0, i.jsx)("br", {}),
                            "No Use-Case Approval Necessary",
                            (0, i.jsx)("br", {}),
                            "No Waiting List",
                            (0, i.jsx)("br", {}),
                            "Most Cost Effective Solution Anywhere",
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className: u()("row"),
                          children: (0, i.jsxs)("div", {
                            className: u()(
                              "col-lg-12 text-center gpus-actions mil-up"
                            ),
                            children: [
                              (0, i.jsx)("a", {
                                href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xfe4ff17d7ff7ceE681592942e9e7888743c9ffd3",
                                title: "Buy Now",
                                className: u()(
                                  "btn btn-lg button-animated btn-contact-sales"
                                ),
                                children: "Buy Now",
                              }),
                              (0, i.jsx)("a", {
                                href: "https://docs.axionai.pro",
                                title: "More GPUs",
                                className: u()("btn btn-more-gpus"),
                                onClick: a,
                                children: "Read Docs",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        v = (e) => {
          let { nr: s } = e;
          return (0, i.jsx)("div", {
            className: u()("card-action mt-3 text-center"),
            children: (0, i.jsx)("a", {
              ref: s,
              href: "/sales",
              className: u()("btn button-animated btn-tryit"),
              children: "Try now",
            }),
          });
        };
      var N = {
          src: "/_next/static/media/a100g80.5fc1f239.webp",
          height: 130,
          width: 280,
          blurDataURL:
            "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoIAAQAAkA4JZwCdAEO9sTIAP74Q8DsQuz8vyIt6jNnv+jTYw4eJNSV0sAAAA==",
          blurWidth: 8,
          blurHeight: 4,
        },
        w = {
          src: "/_next/static/media/a100.fdecfb6e.webp",
          height: 130,
          width: 280,
          blurDataURL:
            "data:image/webp;base64,UklGRmwAAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAAaoGBgYGBgQXL////////CcPz8efz8/MJCQAAAAAAAAAAVlA4ICQAAAAwAQCdASoIAAQAAkA4JaQAA3AA/vp9NHFl2j85ecVpESMAAAA=",
          blurWidth: 8,
          blurHeight: 4,
        },
        U = {
          src: "/_next/static/media/rtx3090.b79f8083.webp",
          height: 130,
          width: 280,
          blurDataURL:
            "data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAAZoF+gX6BfgbW////////F9P//Ojz8+8RIjsnAAAAAAAAVlA4ICYAAACQAQCdASoIAAQAAkA4JaQAApz7FAAA/v1ZBiufSIDnJC3uAAAAAA==",
          blurWidth: 8,
          blurHeight: 4,
        },
        I = {
          src: "/_next/static/media/rtx3080.ae0d239c.webp",
          height: 130,
          width: 280,
          blurDataURL:
            "data:image/webp;base64,UklGRmwAAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAAZoF9gYB8fgbW////////F87//+nz8+8RDDg0CAAAAAAAVlA4ICQAAACwAQCdASoIAAQAAkA4JaQAAxZgovFAAP79qzOkpb6zD/pAAAA=",
          blurWidth: 8,
          blurHeight: 4,
        },
        f = {
          src: "/_next/static/media/amd.d2f70a45.webp",
          height: 130,
          width: 280,
          blurDataURL:
            "data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAAV1JSfIGBgQXL////////CcX+//nz8/MJEDBBIAAAAAAAVlA4ICYAAACwAQCdASoIAAQAAkA4JaQAAudg2cwAAP79pkBV1vtjUB6BcQIAAA==",
          blurWidth: 8,
          blurHeight: 4,
        },
        R = {
          src: "/_next/static/media/amdmi250.82181313.webp",
          height: 130,
          width: 280,
          blurDataURL:
            "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACwAQCdASoIAAQAAkA4JaQAAudleaZAAP64L8//w/AWFlEHJ2u17FSQHAEBpEAEAAA=",
          blurWidth: 8,
          blurHeight: 4,
        },
        D = {
          src: "/_next/static/media/a6000.9d4ef0a2.webp",
          height: 130,
          width: 280,
          blurDataURL:
            "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoIAAQAAkA4JaQAAxZhUxWYAPKkf/ddL3/5ZnAN2DD/dQKLIryovpChgvWdFwAA",
          blurWidth: 8,
          blurHeight: 4,
        },
        C = {
          src: "/_next/static/media/rtx4090.040794ec.webp",
          height: 130,
          width: 280,
          blurDataURL:
            "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoIAAQAAkA4JaQAAuYbv0AA/n6Sf7WJ0JEn2byQH91OjTxLnCMCybFMAAA=",
          blurWidth: 8,
          blurHeight: 4,
        },
        E = {
          src: "/_next/static/media/amd.ad511ed1.png",
          height: 80,
          width: 160,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAIVBMVEUAYD8AAQAAk18AAAAAAwAAoGsAAAAABAIAUTcAo2wALx89wVbuAAAAC3RSTlMBYiwQUXdrd2FcQUi1LqQAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAeSURBVHicY2CAAWZGFnZGLlYmBmY2FkZGDk4muAwABL8ARKikPDUAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 4,
        },
        Q = {
          src: "/_next/static/media/nvidia.c6383bc8.png",
          height: 80,
          width: 160,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAIVBMVEUPDxFMaXESEhIRERGl1Fun0GoPDw8TFhFmkR5bhhAAAA23bf2dAAAAC3RSTlNFAC9XxExUWm1qOgRWUVEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAgSURBVHicY2CEAgZWFk4GBjYGJgZWFg4udmZmJgaYFAAF8wBVm2jsewAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 4,
        };
      let S = (e) => {
        let { nr: s } = e;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("section", {
            className: u()("section-sales hide"),
            id: "gpus-block",
            children: (0, i.jsxs)("div", {
              className: u()("container sections"),
              children: [
                (0, i.jsx)("div", {
                  className: u()("row"),
                  children: (0, i.jsx)("div", {
                    className: u()("col-lg-12 "),
                    children: (0, i.jsxs)("h2", {
                      className: u()(
                        "section-heading clients-heading text-center mil-up"
                      ),
                      children: [
                        "Explore more GPUs",
                        (0, i.jsx)("br", {}),
                        " on Axion",
                      ],
                    }),
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: u()("row"),
                  children: [
                    (0, i.jsx)("div", {
                      className: u()("col-md-3 gpu-card mil-up"),
                      children: (0, i.jsxs)("div", {
                        className: u()("card"),
                        children: [
                          (0, i.jsx)("div", {
                            className: u()("card-header "),
                            children: (0, i.jsx)("span", {
                              className: u()("card-meta"),
                              children: (0, i.jsx)(j.o, {
                                alt: "NVIDIA",
                                src: Q,
                              }),
                            }),
                          }),
                          (0, i.jsxs)("div", {
                            className: u()("card-body text-center"),
                            children: [
                              (0, i.jsx)("div", {
                                className: u()("card-thumb"),
                                children: (0, i.jsx)(j.o, {
                                  alt: "NVIDIA A100 80G SXM4",
                                  src: N,
                                }),
                              }),
                              (0, i.jsx)("h3", {
                                children: "NVIDIA A100 80G SXM4",
                              }),
                            ],
                          }),
                          (0, i.jsx)(v, {}),
                        ],
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: u()("col-md-3 gpu-card mil-up"),
                      children: (0, i.jsxs)("div", {
                        className: u()("card"),
                        children: [
                          (0, i.jsx)("div", {
                            className: u()("card-header "),
                            children: (0, i.jsx)("span", {
                              className: u()("card-meta"),
                              children: (0, i.jsx)(j.o, {
                                alt: "NVIDIA",
                                src: Q,
                              }),
                            }),
                          }),
                          (0, i.jsxs)("div", {
                            className: u()("card-body text-center"),
                            children: [
                              (0, i.jsx)("div", {
                                className: u()("card-thumb"),
                                children: (0, i.jsx)(j.o, {
                                  alt: "NVIDIA A100 80G PCIe",
                                  src: w,
                                }),
                              }),
                              (0, i.jsx)("h3", {
                                children: "NVIDIA A100 80G PCIe",
                              }),
                            ],
                          }),
                          (0, i.jsx)(v, {}),
                        ],
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: u()("col-md-3 gpu-card mil-up"),
                      children: (0, i.jsxs)("div", {
                        className: u()("card"),
                        children: [
                          (0, i.jsx)("div", {
                            className: u()("card-header "),
                            children: (0, i.jsx)("span", {
                              className: u()("card-meta"),
                              children: (0, i.jsx)(j.o, { alt: "amd", src: E }),
                            }),
                          }),
                          (0, i.jsxs)("div", {
                            className: u()("card-body text-center"),
                            children: [
                              (0, i.jsx)("div", {
                                className: u()("card-thumb"),
                                children: (0, i.jsx)(j.o, {
                                  alt: "AMD Instinct MI250",
                                  src: R,
                                }),
                              }),
                              (0, i.jsx)("h3", {
                                children: "AMD Instinct MI250",
                              }),
                            ],
                          }),
                          (0, i.jsx)(v, {}),
                        ],
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: u()("col-md-3 gpu-card mil-up"),
                      children: (0, i.jsxs)("div", {
                        className: u()("card"),
                        children: [
                          (0, i.jsx)("div", {
                            className: u()("card-header "),
                            children: (0, i.jsx)("span", {
                              className: u()("card-meta"),
                              children: (0, i.jsx)(j.o, {
                                alt: "NVIDIA",
                                src: Q,
                              }),
                            }),
                          }),
                          (0, i.jsxs)("div", {
                            className: u()("card-body text-center"),
                            children: [
                              (0, i.jsx)("div", {
                                className: u()("card-thumb"),
                                children: (0, i.jsx)(j.o, {
                                  alt: "NVIDIA A6000 48G PCIe",
                                  src: D,
                                }),
                              }),
                              (0, i.jsx)("h3", {
                                children: "NVIDIA A6000 48G PCIe",
                              }),
                            ],
                          }),
                          (0, i.jsx)(v, {}),
                        ],
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: u()("col-md-3 gpu-card mil-up"),
                      children: (0, i.jsxs)("div", {
                        className: u()("card"),
                        children: [
                          (0, i.jsx)("div", {
                            className: u()("card-header "),
                            children: (0, i.jsx)("span", {
                              className: u()("card-meta"),
                              children: (0, i.jsx)(j.o, {
                                alt: "NVIDIA",
                                src: Q,
                              }),
                            }),
                          }),
                          (0, i.jsxs)("div", {
                            className: u()("card-body text-center"),
                            children: [
                              (0, i.jsx)("div", {
                                className: u()("card-thumb"),
                                children: (0, i.jsx)(j.o, {
                                  alt: "NVIDIA RTX 4090",
                                  src: C,
                                }),
                              }),
                              (0, i.jsx)("h3", { children: "NVIDIA RTX 4090" }),
                            ],
                          }),
                          (0, i.jsx)(v, {}),
                        ],
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: u()("col-md-3 gpu-card mil-up"),
                      children: (0, i.jsxs)("div", {
                        className: u()("card"),
                        children: [
                          (0, i.jsx)("div", {
                            className: u()("card-header "),
                            children: (0, i.jsx)("span", {
                              className: u()("card-meta"),
                              children: (0, i.jsx)(j.o, {
                                alt: "NVIDIA",
                                src: Q,
                              }),
                            }),
                          }),
                          (0, i.jsxs)("div", {
                            className: u()("card-body text-center"),
                            children: [
                              (0, i.jsx)("div", {
                                className: u()("card-thumb"),
                                children: (0, i.jsx)(j.o, {
                                  alt: "NVIDIA RTX 3090",
                                  src: U,
                                }),
                              }),
                              (0, i.jsx)("h3", { children: "NVIDIA RTX 3090" }),
                            ],
                          }),
                          (0, i.jsx)(v, {}),
                        ],
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: u()("col-md-3 gpu-card mil-up"),
                      children: (0, i.jsxs)("div", {
                        className: u()("card "),
                        children: [
                          (0, i.jsx)("div", {
                            className: u()("card-header "),
                            children: (0, i.jsx)("span", {
                              className: u()("card-meta"),
                              children: (0, i.jsx)(j.o, {
                                alt: "NVIDIA",
                                src: Q,
                              }),
                            }),
                          }),
                          (0, i.jsxs)("div", {
                            className: u()("card-body text-center"),
                            children: [
                              (0, i.jsx)("div", {
                                className: u()("card-thumb"),
                                children: (0, i.jsx)(j.o, {
                                  alt: "NVIDIA RTX 3080Ti",
                                  src: I,
                                }),
                              }),
                              (0, i.jsx)("h3", {
                                children: "NVIDIA RTX 3080Ti",
                              }),
                            ],
                          }),
                          (0, i.jsx)(v, {}),
                        ],
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: u()("col-md-3 gpu-card mil-up"),
                      children: (0, i.jsxs)("div", {
                        className: u()("card"),
                        children: [
                          (0, i.jsx)("div", {
                            className: u()("card-header "),
                            children: (0, i.jsx)("span", {
                              className: u()("card-meta"),
                              children: (0, i.jsx)(j.o, { alt: "amd", src: E }),
                            }),
                          }),
                          (0, i.jsxs)("div", {
                            className: u()("card-body text-center"),
                            children: [
                              (0, i.jsx)("div", {
                                className: u()("card-thumb"),
                                children: (0, i.jsx)(j.o, {
                                  alt: "AMD Instinct MI50",
                                  src: f,
                                }),
                              }),
                              (0, i.jsx)("h3", {
                                children: "AMD Instinct MI50",
                              }),
                            ],
                          }),
                          (0, i.jsx)(v, {}),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
      var k = {
        src: "/_next/static/media/solution.webp",
        height: 1160,
        width: 1500,
        blurDataURL:
          "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAAAQAgCdASoIAAYAAkA4JZACdEfqgY+PgbGAAP5Kt9uUCTueOK3EVHk9hk1ln6fvhS2viz/HrzE8+dcGYyxOAC882AeiX/XzOngkOS/p4HwCfHrUrzMyw8FD2ZAAAA==",
        blurWidth: 8,
        blurHeight: 6,
      };
      let B = (e) => {
        let { nr: s } = e;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("section", {
            className: u()("section-sales  bg-light2"),
            children: (0, i.jsx)("div", {
              className: u()("container sections "),
              children: (0, i.jsxs)("div", {
                className: u()("row"),
                children: [
                  (0, i.jsx)("div", {
                    className: u()("col-md-6 col-ex-6 mil-up"),
                    children: (0, i.jsx)("span", {
                      className: u()("provider-radius"),
                      children: (0, i.jsx)(j.o, {
                        alt: "Your GPU Service Solution Provider",
                        src: k,
                      }),
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className: u()("col-md-6 col-ex-6"),
                    children: [
                      (0, i.jsx)("h4", {
                        className: u()(
                          "section-heading text-dark section-top-heading mil-up"
                        ),
                        children: "WELCOME TO AXION",
                      }),
                      (0, i.jsxs)("h2", {
                        className: u()("section-heading sales-heading mb-1"),
                        children: [
                          (0, i.jsxs)("span", {
                            className: u()("mil-up"),
                            children: ["Your GPU Service", " "],
                          }),
                          (0, i.jsx)("br", {}),
                          (0, i.jsx)("span", {
                            className: u()("mil-up"),
                            children: "Solution Provider",
                          }),
                        ],
                      }),
                      (0, i.jsxs)("p", {
                        className: u()("section-desc mil-up provider-desc"),
                        children: [
                          "Axion provides the global GPU service providers with various branches in over 60 countries, catering to customers worldwide.",
                          (0, i.jsx)("br", {}),
                          "With our combined nearly 20 years in the industry and technical experience, Axion is able to provide our customers simple and hassle-free GPU solutions.",
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className: u()("row"),
                        children: (0, i.jsx)("div", {
                          className: u()("col-lg-12 mt-3 mil-up"),
                          children: (0, i.jsx)("a", {
                            href: "https://app.axionai.pro",
                            title: "Launch App",
                            className: u()(
                              "btn btn-lg button-animated btn-contact-sales mt-3"
                            ),
                            children: "Launch App",
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
      var y = {
          src: "/_next/static/media/dc-engineering.webp",
          height: 533,
          width: 800,
          blurDataURL:
            "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAADQAQCdASoIAAUAAkA4JZACdAD0jgAdAAD++xm8iNjWiudyzGy5YVyXl6/DFc5MlX2mKL1vL5E4KwHoc4VO+dbEBbn21zfWaG7nfAAA",
          blurWidth: 8,
          blurHeight: 5,
        },
        V = {
          src: "/_next/static/media/dc-smarthand.webp",
          height: 533,
          width: 800,
          blurDataURL:
            "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAAAQAgCdASoIAAUAAkA4JagCdLoAAwj3+eQAAP7Rd0gPakhbvaXZEKZo5TRPLpccxc9V/sU5z47ySwkkFpP2vZ+2HyWWypJ0ee1fAAAA",
          blurWidth: 8,
          blurHeight: 5,
        },
        M = {
          src: "/_next/static/media/professional-service.webp",
          height: 533,
          width: 800,
          blurDataURL:
            "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACQAQCdASoIAAUAAkA4JZwAApplHeAA/ub6rrXmh/JFTyFv+tEVoju1xvSSSIKQYsgaHYNyDoAAAA==",
          blurWidth: 8,
          blurHeight: 5,
        },
        J = {
          src: "/_next/static/media/it-logistic.webp",
          height: 533,
          width: 800,
          blurDataURL:
            "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADQAQCdASoIAAUAAkA4JQBOgB6TFo4SAAD5et27mx5Xb1K/z+7e3RDT0rgO67fDn/2SaRS8El5zDDlw2s/AhfCAAAA=",
          blurWidth: 8,
          blurHeight: 5,
        },
        W = {
          src: "/_next/static/media/manage.webp",
          height: 533,
          width: 800,
          blurDataURL:
            "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoIAAUAAkA4JZwCdADze7UQAP4JkQAWF1A9yjS4o2wv4jiN9YLvzmgf6qtwzuK9glMFIgAA",
          blurWidth: 8,
          blurHeight: 5,
        },
        L = {
          src: "/_next/static/media/dc-onsite.webp",
          height: 533,
          width: 800,
          blurDataURL:
            "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoIAAUAAkA4JZACdAD0h67XAAD+CxH+04I9QgT0fm7bo3CmXAOxk/ykDELC97ROb9n7sIIfJBuu/3xnUXr1nmj/8OYAAA==",
          blurWidth: 8,
          blurHeight: 5,
        };
      let G = (e) => {
        let { nr: s } = e;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("section", {
            className: u()("section-sales bg-light "),
            children: (0, i.jsxs)("div", {
              className: u()("container sections "),
              children: [
                (0, i.jsx)("div", {
                  className: u()("row"),
                  children: (0, i.jsxs)("div", {
                    className: u()("col-lg-12 text-center"),
                    children: [
                      (0, i.jsx)("h4", {
                        className: u()(
                          "section-heading text-dark section-top-heading mt-0 mil-up"
                        ),
                        children: "What we do",
                      }),
                      (0, i.jsx)("h2", {
                        className: u()("section-heading text-dark mil-up"),
                        children: "Our Service",
                      }),
                      (0, i.jsx)("h3", {
                        className: u()(
                          "section-subheading ourservice-subheading mil-up"
                        ),
                        children:
                          "Axion offers a suite of solutions and services that maximize the performance, scalability and efficiency  of today’s sophisticated environment.",
                      }),
                    ],
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: u()("row"),
                  children: [
                    (0, i.jsx)("div", {
                      className: u()("col-md-4 service-card mil-up"),
                      children: (0, i.jsxs)("div", {
                        className: u()("card-item"),
                        children: [
                          (0, i.jsx)(j.o, { alt: "dc engineering", src: y }),
                          (0, i.jsx)("div", {
                            className: u()("card-info-title"),
                            children: "dc engineering",
                          }),
                          (0, i.jsxs)("div", {
                            className: u()("card-overinfo"),
                            children: [
                              (0, i.jsx)("h5", { children: "dc engineering" }),
                              (0, i.jsx)("p", {
                                children:
                                  "Our group of experts are specialized in rack and stack, patching/cabling, fit out service, system integration, decommission services in lDC environment.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: u()("col-md-4 service-card mil-up"),
                      children: (0, i.jsxs)("div", {
                        className: u()("card-item"),
                        children: [
                          (0, i.jsx)(j.o, { alt: "dc smarthand", src: V }),
                          (0, i.jsx)("div", {
                            className: u()("card-info-title"),
                            children: "dc smart hand",
                          }),
                          (0, i.jsxs)("div", {
                            className: u()("card-overinfo"),
                            children: [
                              (0, i.jsx)("h5", { children: "dc smart hand" }),
                              (0, i.jsx)("p", {
                                children:
                                  "We help ensure customers on the devices in lDC environment with professional DC engineering, DC onsite operation and lT equipment maintenance services.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: u()("col-md-4 service-card mil-up"),
                      children: (0, i.jsxs)("div", {
                        className: u()("card-item"),
                        children: [
                          (0, i.jsx)(j.o, {
                            alt: "professional service",
                            src: M,
                          }),
                          (0, i.jsx)("div", {
                            className: u()("card-info-title"),
                            children: "professional service",
                          }),
                          (0, i.jsxs)("div", {
                            className: u()("card-overinfo"),
                            children: [
                              (0, i.jsx)("h5", {
                                children: "professional service",
                              }),
                              (0, i.jsx)("p", {
                                children:
                                  "We have certified engineer to perform first level diagnosis, doing RMA for certain product and provides ad hoc smart hand services. These service is 24X7 basis.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: u()("col-md-4 service-card mil-up"),
                      children: (0, i.jsxs)("div", {
                        className: u()("card-item"),
                        children: [
                          (0, i.jsx)(j.o, {
                            alt: "it logistic & warehousing service",
                            src: J,
                          }),
                          (0, i.jsx)("div", {
                            className: u()("card-info-title"),
                            children: "it logistic & warehousing service",
                          }),
                          (0, i.jsxs)("div", {
                            className: u()("card-overinfo p-small"),
                            children: [
                              (0, i.jsx)("h5", {
                                children: "it logistic & warehousing service",
                              }),
                              (0, i.jsx)("p", {
                                children:
                                  "Our Warehousing solution helps Telecom carriers, cloud providers, distributors and product manufacturers create a dynamic and efficient environment for maintaining a high service level. With high expectations set, we aim to satisfy clients quickly and efficiently.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: u()("col-md-4 service-card mil-up"),
                      children: (0, i.jsxs)("div", {
                        className: u()("card-item"),
                        children: [
                          (0, i.jsx)(j.o, { alt: "managed service", src: W }),
                          (0, i.jsx)("div", {
                            className: u()("card-info-title"),
                            children: "managed service",
                          }),
                          (0, i.jsxs)("div", {
                            className: u()("card-overinfo"),
                            children: [
                              (0, i.jsx)("h5", { children: "managed service" }),
                              (0, i.jsx)("p", {
                                children:
                                  "Our certified engineers perform first level diagnosis, doing RMA for certain products and providing ad hoc smart hand services. These services are on a 24 hour basis.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: u()("col-md-4 service-card mil-up"),
                      children: (0, i.jsxs)("div", {
                        className: u()("card-item"),
                        children: [
                          (0, i.jsx)(j.o, {
                            alt: "dc onsite operation",
                            src: L,
                          }),
                          (0, i.jsx)("div", {
                            className: u()("card-info-title"),
                            children: "dc onsite operation",
                          }),
                          (0, i.jsxs)("div", {
                            className: u()("card-overinfo"),
                            children: [
                              (0, i.jsx)("h5", {
                                children: "dc onsite operation",
                              }),
                              (0, i.jsx)("p", {
                                children:
                                  "We have a team of well trained engineers stationed onsite to assist customers on daily operations. This includes monitoring, change management and reporting.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
      var H = {
          src: "/_next/static/media/warehousing-service.webp",
          height: 1130,
          width: 1e3,
          blurDataURL:
            "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADQAQCdASoHAAgAAkA4JZwC7AEfawyHvAD+9LifZnnaBWL6JkBeIpRxgyuvMfHmb+qfA3lCjtMtWDFOG5YiIGy3MQ5ym4iYAAA=",
          blurWidth: 7,
          blurHeight: 8,
        },
        X = {
          src: "/_next/static/media/icon-02.webp",
          height: 196,
          width: 196,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEUAAAAAAAAAAABMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAConCphAAAADHRSTlOShGwAYi9UOR3F0xEWMbWkAAAACXBIWXMAAAsSAAALEgHS3X78AAAAN0lEQVR4nBXLtxEAMAwDsRep4LD/vj53aICHCMYMq3sxcDMzL2B1p+NjbzkIyZaCOsuuU7h+Lz8i1gDw9UcT3wAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        F = {
          src: "/_next/static/media/icon-03.webp",
          height: 196,
          width: 196,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEUAAAAAAABMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO5y8AAAAADXRSTlM5jwB4lxeDs4kxXVMEYb0WSQAAAAlwSFlzAAALEgAACxIB0t1+/AAAADZJREFUeJwFwYkBwCAMA7Gz8wLdf95KGHULg07EEahyJkvsN9vjRt57100WEZQg671KMIoQ/gEkdAD/NkYRSgAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        T = {
          src: "/_next/static/media/icon-04.webp",
          height: 196,
          width: 196,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEUAAAAAAABMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAABKFBThAAAACnRSTlMgOQCFjpp8Q4Hi5OTkngAAAAlwSFlzAAALEgAACxIB0t1+/AAAADVJREFUeJwVy7kNADAMw0BKfrP/woEbFgcQqzJSRsVFJHa8CdJmmybYPSTntU2iGkwJK/r2Dxt4AMfqWwEHAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        };
      let P = (e) => {
        let { nr: s } = e;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("section", {
            className: u()("section-sales  "),
            children: (0, i.jsx)("div", {
              className: u()("container sections "),
              children: (0, i.jsxs)("div", {
                className: u()("row"),
                children: [
                  (0, i.jsxs)("div", {
                    className: u()("col-md-6 col-ex-6"),
                    children: [
                      (0, i.jsx)("h4", {
                        className: u()(
                          "section-heading text-dark section-top-heading mil-up"
                        ),
                        children: "FEATURED CASE STUDY",
                      }),
                      (0, i.jsxs)("h2", {
                        className: u()("warehousing-heading"),
                        children: [
                          (0, i.jsxs)("span", {
                            className: u()("mil-up"),
                            children: ["Managed IT", " "],
                          }),
                          (0, i.jsx)("br", {}),
                          (0, i.jsx)("span", {
                            className: u()("mil-up"),
                            children: "Warehousing Service",
                          }),
                        ],
                      }),
                      (0, i.jsx)("p", {
                        className: u()("warehousing-desc mil-up"),
                        children:
                          "Axion managed the IT Warehousing for a publicly listed cloud provider, focusing on meticulous inventory management and domestic delivery service.",
                      }),
                      (0, i.jsxs)("dl", {
                        className: u()("warehousing-dl mil-up"),
                        children: [
                          (0, i.jsx)("dt", {
                            children: (0, i.jsx)(j.o, { alt: "", src: X }),
                          }),
                          (0, i.jsxs)("dd", {
                            children: [
                              (0, i.jsx)("strong", { children: "CUSTOMER:" }),
                              " ",
                              (0, i.jsx)("br", {}),
                              "Public listed cloud provider",
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsxs)("dl", {
                        className: u()("warehousing-dl mil-up"),
                        children: [
                          (0, i.jsx)("dt", {
                            className: u()("mt-2"),
                            children: (0, i.jsx)(j.o, { alt: "", src: F }),
                          }),
                          (0, i.jsxs)("dd", {
                            children: [
                              (0, i.jsx)("strong", { children: "SCOPE:" }),
                              " ",
                              (0, i.jsx)("br", {}),
                              "Managed warehousing service, Inventory management, domestic delivery service",
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsxs)("dl", {
                        className: u()("warehousing-dl mil-up"),
                        children: [
                          (0, i.jsx)("dt", {
                            className: u()("mt-2"),
                            children: (0, i.jsx)(j.o, { alt: "", src: T }),
                          }),
                          (0, i.jsxs)("dd", {
                            children: [
                              (0, i.jsx)("strong", { children: "SIZE:" }),
                              " ",
                              (0, i.jsx)("br", {}),
                              "11000 sqft warehouse 7000 + assets maintained (including Server, Network Equipment, Modules and Accessories)",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: u()("col-md-6 col-ex-6 mil-up"),
                    children: (0, i.jsx)("span", {
                      className: u()("warehousing-radius"),
                      children: (0, i.jsx)(j.o, { alt: "", src: H }),
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      };
      var O = a(1664),
        Y = a.n(O);
      let Z = (e) => {
        let { nr: s } = e;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("section", {
            className: u()("section-business"),
            children: (0, i.jsx)("div", {
              className: u()("container sections "),
              children: (0, i.jsx)("div", {
                className: u()("row"),
                children: (0, i.jsx)("div", {
                  className: u()("col-md-12"),
                  children: (0, i.jsxs)("div", {
                    className: u()("business-container"),
                    children: [
                      (0, i.jsx)("h2", {
                        className: u()("heading"),
                        children: (0, i.jsx)("span", {
                          className: u()(" text-white mil-up"),
                          children: "Maximize your Business with Us Today!",
                        }),
                      }),
                      (0, i.jsx)("h4", {
                        className: u()(
                          "section-heading text-white mt-3 mil-up"
                        ),
                        children:
                          "Axion offers a suite of solutions and services that maximize the performance, scalability and efficiency of today's sophisticated environment",
                      }),
                      (0, i.jsx)("div", {
                        className: u()("business-actions mil-up"),
                        children: (0, i.jsx)(Y(), {
                          className: u()("hero-button button-deploy"),
                          title: "Read More",
                          href: "https://docs.axionai.pro",
                          children: "Read More",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          }),
        });
      };
      function z() {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(c(), {
              children: [
                (0, i.jsx)("title", {
                  children:
                    "Axion AI SUPERCLUSTER : Next-Gen AI SuperCluster",
                }),
                (0, i.jsx)("meta", {
                  content:
                    "Axion AI SUPERCLOUD handles the immense processing speeds and quantum of data required by the exponential growth of AI",
                  name: "description",
                }),
                (0, i.jsx)("meta", {
                  name: "keywords",
                  content:
                    "Axion,SuperCluster,NVIDIA H100 GPUs,AI SUPERCLOUD,supercluster,NVIDIA RTX 3090,network,docker,computing",
                }),
              ],
            }),
            (0, i.jsxs)(g, {
              pagename: "supercloud",
              children: [
                (0, i.jsxs)("div", {
                  className: u()("upper-page"),
                  id: "home",
                  children: [
                    (0, i.jsxs)("div", {
                      className: u()("hero-fullscreen"),
                      children: [
                        (0, i.jsx)("div", {
                          className: u()("top-shadow light"),
                        }),
                        (0, i.jsx)("div", {
                          className: u()("hero-fullscreen-FIX"),
                          children: (0, i.jsx)("div", {
                            className: u()("hero-bg bg-img-SINGLE-AISUPPER"),
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: u()("center-container"),
                      children: (0, i.jsx)("div", {
                        className: u()("hero-container "),
                        children: (0, i.jsx)("div", {
                          className: u()("row justify-content-center"),
                          children: (0, i.jsxs)("div", {
                            className: u()("col-center-8"),
                            children: [
                              (0, i.jsxs)("h1", {
                                className: u()("home-page-title white"),
                                children: [
                                  "Next-Gen AI ",
                                  (0, i.jsx)("br", {}),
                                  "SuperCluster",
                                ],
                              }),
                              (0, i.jsx)("div", {
                                className: u()("home-page-subtitle-carousel"),
                                children: (0, i.jsx)("h2", {
                                  className: u()("home-page-title"),
                                  children:
                                    "Axion handles the immense processing speeds and quantum of data required by the exponential growth of AI",
                                }),
                              }),
                              (0, i.jsx)("div", {
                                className: u()("hero-actions"),
                                children: (0, i.jsx)(Y(), {
                                  className: u()(
                                    "hero-button-ai button-deploy"
                                  ),
                                  title: "Launch App",
                                  href: "https://app.axionai.pro",
                                  children: "Launch App",
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)(p, {}),
                (0, i.jsx)("a", { name: "gpus" }),
                (0, i.jsx)(S, {}),
                (0, i.jsx)(B, {}),
                (0, i.jsx)(G, {}),
                (0, i.jsx)(P, {}),
                (0, i.jsx)(Z, {}),
              ],
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [225, 802, 553, 137, 163, 774, 888, 179], function () {
      return e((e.s = 4953));
    }),
      (_N_E = e.O());
  },
]);
