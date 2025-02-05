(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [173],
  {
    4268: function (e, a, l) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/sales",
        function () {
          return l(321);
        },
      ]);
    },
    2151: function (e, a, l) {
      "use strict";
      var t = l(5893),
        i = l(1664),
        s = l.n(i),
        n = l(7294),
        r = l(5675),
        o = l.n(r),
        u = l(6333),
        c = l(1673),
        d = l(2658),
        m = l(3967),
        v = l.n(m);
      let h = (e) => {
        let { nr: a } = e,
          l = (0, n.useContext)(u.Z),
          { nav: i, changeNav: r } = l;
        return (
          (0, n.useEffect)(() => {
            let e = window.location.pathname || "",
              a = e.split("/").pop();
            return r(a || "home"), () => {};
          }, []),
          (0, t.jsx)("nav", {
            className: v()("navbar navbar-fixed-top navbar-bg-switch"),
            ref: a,
            children: (0, t.jsxs)("div", {
              className: v()("container"),
              children: [
                (0, t.jsx)("div", {
                  className: v()("navbar-header fadeIn-element"),
                  children: (0, t.jsxs)(s(), {
                    href: "/",
                    className: v()("navbar-brand logo"),
                    children: [
                      (0, t.jsx)(o(), {
                        src: c.Z,
                        alt: "Exabits",
                        responsive: "true",
                        className: v()("logo-light"),
                      }),
                      (0, t.jsx)(o(), {
                        src: c.Z,
                        alt: "Exabits",
                        responsive: "true",
                        className: v()("logo-dark"),
                      }),
                    ],
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: v()("main-navigation dark fadeIn-element"),
                  children: [
                    (0, t.jsx)("div", {
                      className: v()("navbar-header"),
                      children: (0, t.jsxs)("button", {
                        "aria-expanded": "false",
                        className: v()("navbar-toggle dark collapsed"),
                        onClick: d._u,
                        type: "button",
                        children: [
                          (0, t.jsx)("span", {
                            className: v()("sr-only"),
                            children: "Toggle navigation",
                          }),
                          (0, t.jsx)("span", { className: v()("icon-bar") }),
                          (0, t.jsx)("span", { className: v()("icon-bar") }),
                          (0, t.jsx)("span", { className: v()("icon-bar") }),
                        ],
                      }),
                    }),
                    (0, t.jsxs)("div", {
                      className: v()("collapse navbar-collapse"),
                      id: "navbar-collapse",
                      children: [
                        (0, t.jsxs)("ul", {
                          className: v()("nav navbar-nav navbar-left"),
                          children: [
                            (0, t.jsx)("li", {
                              className: "supercluster" === i ? "active" : "",
                              children: (0, t.jsx)(s(), {
                                onClick: () => {
                                  r("supercluster");
                                },
                                className: v()("page-scroll"),
                                title: "AI SUPERCLUSTER",
                                href: "/supercluster",
                                children: "AI SUPERCLUSTER",
                              }),
                            }),
                            (0, t.jsx)("li", {
                              children: (0, t.jsx)(s(), {
                                className: v()("page-scroll"),
                                target: "_blank",
                                title: "Blog",
                                href: "https://www.dextools.io/app/en/ether/pool-explorer/0x00000000000000000000000000000000000000",
                                children: "Dextools",
                              }),
                            }),
                            (0, t.jsx)("li", {
                              children: (0, t.jsx)(s(), {
                                className: v()("page-scroll"),
                                target: "_blank",
                                title: "Litepaper",
                                href: "https://quietstainer-document-0.gitbook.io/axion-ai",
                                children: "Litepaper",
                              }),
                            }),
                            (0, t.jsx)("li", {
                              children: (0, t.jsx)(s(), {
                                className: v()("page-scroll"),
                                target: "_blank",
                                title: "Uniswap",
                                href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x00000000000000000000000000000000000000",
                                children: "Buy AXI",
                              }),
                            }),
                          ],
                        }),
                        (0, t.jsx)("ul", {
                          className: v()("nav-tools"),
                          children: (0, t.jsx)("li", {
                            children: (0, t.jsxs)("a", {
                              className: v()("page-scroll join-nav"),
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
      a.Z = h;
    },
    321: function (e, a, l) {
      "use strict";
      l.r(a),
        l.d(a, {
          default: function () {
            return S;
          },
        });
      var t = l(5893),
        i = l(9008),
        s = l.n(i),
        n = l(7294),
        r = l(2151),
        o = l(1566),
        u = l(451),
        c = l(7894),
        d = l(2104),
        m = l(158),
        v = l(2658),
        h = l(3967),
        x = l.n(h);
      let g = (e) => {
        let [a, l] = (0, n.useState)(!1),
          i = (0, n.useRef)(null),
          s = (0, n.useRef)(null),
          h = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            if ((l(!0), a)) {
              let a = h.current,
                l = i.current,
                t = s.current,
                n = setTimeout(() => {
                  setTimeout(() => {
                    a.classList.add("hide");
                  }, 500);
                }, 500);
              return (
                (0, v.v3)(),
                ["home"].includes(e.pagename)
                  ? document.body.classList.add("bg-main")
                  : document.body.classList.remove("bg-main"),
                window.addEventListener("scroll", () => {
                  window.pageYOffset > 50
                    ? l.classList.add("main-navigation-bg")
                    : l.classList.remove("main-navigation-bg"),
                    window.pageYOffset > 400
                      ? t.classList.add("show")
                      : t.classList.remove("show");
                }),
                () => clearTimeout(n)
              );
            }
          }, [a]),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(d.Z, { nr: h }),
              ["home", "supercluster"].includes(e.pagename)
                ? (0, t.jsx)(o.Z, { nr: i })
                : (0, t.jsx)(r.Z, { nr: i }),
              (0, t.jsxs)("div", {
                className: x()("aisuper"),
                children: [e.children, (0, t.jsx)(u.Z, {})],
              }),
              (0, t.jsx)(c.Z, { nr: s }),
              (0, t.jsx)(m.Z, {}),
            ],
          })
        );
      };
      var p = l(7536),
        f = l(7066),
        j = l(8296);
      let N = [
          { title: "Afghanistan", value: "AF" },
          { title: "Albania", value: "AL" },
          { title: "Algeria", value: "DZ" },
          { title: "American Samoa", value: "AS" },
          { title: "Andorra", value: "AD" },
          { title: "Angola", value: "AO" },
          { title: "Anguilla", value: "AI" },
          { title: "Argentina", value: "AR" },
          { title: "Armenia", value: "AM" },
          { title: "Aruba", value: "AW" },
          { title: "Australia", value: "AU" },
          { title: "Azerbaijan", value: "AZ" },
          { title: "Bahamas", value: "BS" },
          { title: "Bahrain", value: "BH" },
          { title: "Bangladesh", value: "BD" },
          { title: "Barbados", value: "BB" },
          { title: "Belarus", value: "BY" },
          { title: "Belgium", value: "BE" },
          { title: "Belize", value: "BZ" },
          { title: "Benin", value: "BJ" },
          { title: "Bermuda", value: "BM" },
          { title: "Bhutan", value: "BT" },
          { title: "Bolivia", value: "BO" },
          { title: "Bosnia and Herzegovina", value: "BA" },
          { title: "Botswana", value: "BW" },
          { title: "Brazil", value: "BR" },
          { title: "British Virgin Islands", value: "VG" },
          { title: "Brunei", value: "BN" },
          { title: "Bulgaria", value: "BG" },
          { title: "Burkina Faso", value: "BF" },
          { title: "Burundi", value: "BI" },
          { title: "Cambodia", value: "KH" },
          { title: "Cameroon", value: "CM" },
          { title: "Canada", value: "CA" },
          { title: "Cape Verde", value: "CV" },
          { title: "Cayman Islands", value: "KY" },
          { title: "Central African Republic", value: "CF" },
          { title: "Chad", value: "TD" },
          { title: "Chile", value: "CL" },
          { title: "China", value: "CN" },
          { title: "Columbia", value: "CO" },
          { title: "Comoros", value: "KM" },
          { title: "Cook Islands", value: "CK" },
          { title: "Costa Rica", value: "CR" },
          { title: "Croatia", value: "HR" },
          { title: "Cuba", value: "CU" },
          { title: "Curacao", value: "CW" },
          { title: "Cyprus", value: "CY" },
          { title: "Czech Republic", value: "CZ" },
          { title: "Democratic Republic of the Congo", value: "CD" },
          { title: "Denmark", value: "DK" },
          { title: "Djibouti", value: "DJ" },
          { title: "Dominica", value: "DM" },
          { title: "Dominican Republic", value: "DO" },
          { title: "East Timor", value: "TL" },
          { title: "Ecuador", value: "EC" },
          { title: "Egypt", value: "EG" },
          { title: "El Salvador", value: "SV" },
          { title: "Eritrea", value: "ER" },
          { title: "Estonia", value: "EE" },
          { title: "Faroe Islands", value: "FO" },
          { title: "Fiji", value: "FJ" },
          { title: "Finland", value: "FI" },
          { title: "France", value: "FR" },
          { title: "French Polynesia", value: "PF" },
          { title: "Gabon", value: "GA" },
          { title: "Gambia", value: "GM" },
          { title: "Georgia", value: "GE" },
          { title: "Germany", value: "DE" },
          { title: "Ghana", value: "GH" },
          { title: "Greece", value: "GR" },
          { title: "Greenland", value: "GL" },
          { title: "Grenada", value: "GD" },
          { title: "Guam", value: "GU" },
          { title: "Guatemala", value: "GT" },
          { title: "Guernsey", value: "GG" },
          { title: "Guinea", value: "GN" },
          { title: "Guinea-Bissau", value: "GW" },
          { title: "Guyana", value: "GY" },
          { title: "Haiti", value: "HT" },
          { title: "Honduras", value: "HN" },
          { title: "Hong Kong", value: "HK" },
          { title: "Hungary", value: "HU" },
          { title: "Iceland", value: "IS" },
          { title: "India", value: "IN" },
          { title: "Indonesia", value: "ID" },
          { title: "Iran", value: "IR" },
          { title: "Iraq", value: "IQ" },
          { title: "Ireland", value: "IE" },
          { title: "Isle of Man", value: "IM" },
          { title: "Israel", value: "IL" },
          { title: "Italy", value: "IT" },
          { title: "Ivory Coast", value: "CI" },
          { title: "Jamaica", value: "JM" },
          { title: "Japan", value: "JP" },
          { title: "Jersey", value: "JE" },
          { title: "Jordan", value: "JO" },
          { title: "Kazakhstan", value: "KZ" },
          { title: "Kenya", value: "KE" },
          { title: "Kiribati", value: "KI" },
          { title: "Kosovo", value: "XK" },
          { title: "Kuwait", value: "KW" },
          { title: "Kyrgyzstan", value: "KG" },
          { title: "Laos", value: "LA" },
          { title: "Latvia", value: "LV" },
          { title: "Lebanon", value: "LB" },
          { title: "Lesotho", value: "LS" },
          { title: "Liberia", value: "LB" },
          { title: "Libya", value: "LY" },
          { title: "Liechtenstein", value: "LI" },
          { title: "Lithuania", value: "LT" },
          { title: "Luxembourg", value: "LU" },
          { title: "Macau", value: "MO" },
          { title: "Macedonia", value: "MK" },
          { title: "Madagascar", value: "MG" },
          { title: "Malawi", value: "MW" },
          { title: "Malaysia", value: "MY" },
          { title: "Maldives", value: "MV" },
          { title: "Mali", value: "ML" },
          { title: "Malta", value: "MT" },
          { title: "Marshall Islands", value: "MH" },
          { title: "Mauritania", value: "MR" },
          { title: "Mauritius", value: "MU" },
          { title: "Mayotte", value: "YT" },
          { title: "Mexico", value: "MX" },
          { title: "Micronesia", value: "FM" },
          { title: "Moldova", value: "MD" },
          { title: "Monaco", value: "MC" },
          { title: "Mongolia", value: "MN" },
          { title: "Montenegro", value: "ME" },
          { title: "Morocco", value: "MA" },
          { title: "Mozambique", value: "MZ" },
          { title: "Myanmar", value: "MM" },
          { title: "Namibia", value: "NA" },
          { title: "Nepal", value: "NP" },
          { title: "Netherlands", value: "NL" },
          { title: "Netherlands Antilles", value: "AN" },
          { title: "New Caledonia", value: "NC" },
          { title: "New Zealand", value: "NZ" },
          { title: "Nicaragua", value: "NI" },
          { title: "Niger", value: "NE" },
          { title: "Nigeria", value: "NG" },
          { title: "North Korea", value: "KP" },
          { title: "Northern Mariana Islands", value: "MP" },
          { title: "Norway", value: "NO" },
          { title: "Oman", value: "OM" },
          { title: "Pakistan", value: "PK" },
          { title: "Palestine", value: "PS" },
          { title: "Panama", value: "PA" },
          { title: "Papua New Guinea", value: "PG" },
          { title: "Paraguay", value: "PY" },
          { title: "Peru", value: "PE" },
          { title: "Philippines", value: "PH" },
          { title: "Poland", value: "PL" },
          { title: "Portugal", value: "PT" },
          { title: "Puerto Rico", value: "PR" },
          { title: "Qatar", value: "QA" },
          { title: "Republic of the Congo", value: "CG" },
          { title: "Reunion", value: "RE" },
          { title: "Romania", value: "RO" },
          { title: "Russia", value: "RU" },
          { title: "Rwanda", value: "RW" },
          { title: "Saint Kitts and Nevis", value: "KN" },
          { title: "Saint Lucia", value: "LC" },
          { title: "Saint Martin", value: "MF" },
          { title: "Saint Pierre and Miquelon", value: "PM" },
          { title: "Saint Vincent and the Grenadines", value: "VC" },
          { title: "Samoa", value: "WS" },
          { title: "San Marino", value: "SM" },
          { title: "Sao Tome and Principe", value: "ST" },
          { title: "Saudi Arabia", value: "SA" },
          { title: "Senegal", value: "SN" },
          { title: "Serbia", value: "RS" },
          { title: "Seychelles", value: "SC" },
          { title: "Sierra Leone", value: "SL" },
          { title: "Singapore", value: "SG" },
          { title: "Sint Maarten", value: "SX" },
          { title: "Slovakia", value: "SK" },
          { title: "Slovenia", value: "SI" },
          { title: "Solomon Islands", value: "SB" },
          { title: "Somalia", value: "SO" },
          { title: "South Africa", value: "ZA" },
          { title: "South Korea", value: "KR" },
          { title: "South Sudan", value: "SS" },
          { title: "Spain", value: "ES" },
          { title: "Sri Lanka", value: "LK" },
          { title: "Sudan", value: "SD" },
          { title: "Suriname", value: "SR" },
          { title: "Swaziland", value: "SZ" },
          { title: "Sweden", value: "SE" },
          { title: "Switzerland", value: "CH" },
          { title: "Syria", value: "SY" },
          { title: "Taiwan", value: "TW" },
          { title: "Tajikistan", value: "TJ" },
          { title: "Tanzania", value: "TZ" },
          { title: "Thailand", value: "TH" },
          { title: "Togo", value: "TG" },
          { title: "Tonga", value: "TO" },
          { title: "Trinidad and Tobago", value: "TT" },
          { title: "Tunisia", value: "TN" },
          { title: "Turkey", value: "TR" },
          { title: "Turkmenistan", value: "TM" },
          { title: "Turks and Caicos Islands", value: "TC" },
          { title: "Tuvalu", value: "TV" },
          { title: "U.S. Virgin Islands", value: "VI" },
          { title: "Uganda", value: "UG" },
          { title: "Ukraine", value: "UA" },
          { title: "United Arab Emirates", value: "AE" },
          { title: "United Kingdom", value: "GB" },
          { title: "United States", value: "US" },
          { title: "Uruguay", value: "UY" },
          { title: "Uzbekistan", value: "UZ" },
          { title: "Vanuatu", value: "VU" },
          { title: "Venezuela", value: "VE" },
          { title: "Vietnam", value: "VN" },
          { title: "Western Sahara", value: "EH" },
          { title: "Yemen", value: "YE" },
          { title: "Zambia", value: "ZM" },
          { title: "Zimbabwe", value: "ZW" },
        ],
        b = () => {
          var e, a, l, i, s, r, o, u;
          let {
              register: c,
              handleSubmit: d,
              formState: { errors: m },
              reset: h,
            } = (0, p.cI)(),
            [g, b] = (0, n.useState)(!1),
            [S, y] = (0, n.useState)(""),
            [C, w] = (0, n.useState)(""),
            M = (e) => {
              w(""), y("");
            };
          async function L(e) {
            w(""), b(!0), y("");
            let a = {
              method: "post",
              url: "/api/subscribe-sales",
              headers: {
                "Content-Type": "application/json",
                "Access-Token": (0, j.getAccessToken)({
                  firstname: e.firstname,
                  lastname: e.lastname,
                  company: e.company,
                  email: e.email,
                  jobtitle: e.jobtitle,
                  country: e.country,
                  expected: e.expected,
                }),
              },
              data: e,
            };
            try {
              let e = await (0, f.Z)(a);
              201 === e.status
                ? ((0, v.k3)(),
                  y("Thanks! Your submission has been received!"),
                  h())
                : console.log(e),
                b(!1);
            } catch (e) {
              w(e.response.data), b(!1);
            }
          }
          return "" !== S
            ? (0, t.jsxs)("div", {
                className: x()("form-sales-success"),
                children: [
                  (0, t.jsx)("h3", { children: "Submission Successful" }),
                  (0, t.jsx)("section", {
                    className: x()("form-success"),
                    children: (0, t.jsx)("h4", {
                      children:
                        "Thanks for your submission! A member of our team will reach out within 24 hours, please check your email inbox.",
                    }),
                  }),
                ],
              })
            : (0, t.jsx)("div", {
                className: x()("form-sales"),
                children: (0, t.jsx)("div", {
                  className: x()("row"),
                  children: (0, t.jsx)("div", {
                    className: x()("col-12"),
                    children: (0, t.jsxs)("form", {
                      id: "form",
                      onSubmit: d(L),
                      children: [
                        (0, t.jsxs)("div", {
                          className: x()("form-subtitle"),
                          children: [
                            (0, t.jsx)("h3", {
                              children: "Tell us about yourself.",
                            }),
                            (0, t.jsx)("p", {
                              children:
                                "A member of our team will reach out within 24 hours",
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: x()("row"),
                          children: [
                            (0, t.jsx)("div", {
                              className: x()("col-md-6"),
                              children: (0, t.jsxs)("div", {
                                className: x()("form-group"),
                                children: [
                                  (0, t.jsxs)("div", {
                                    className: x()("form-group-box"),
                                    children: [
                                      (0, t.jsxs)("div", {
                                        htmlFor: "firstname",
                                        className: x()("col-form-block"),
                                        children: [
                                          "First name",
                                          (0, t.jsx)("label", {
                                            className: x()(
                                              "col-form-option text-red"
                                            ),
                                            children: (0, t.jsx)("i", {
                                              className: x()("fas fa-asterisk"),
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, t.jsx)("div", {
                                        className: x()("form-item"),
                                        children: (0, t.jsx)("input", {
                                          id: "firstname",
                                          name: "firstname",
                                          ...c("firstname", {
                                            required: {
                                              value: !0,
                                              message:
                                                "Please enter a valid first name",
                                            },
                                            minLength: {
                                              value: 2,
                                              message:
                                                "Please enter a valid firstname",
                                            },
                                            maxLength: {
                                              value: 16,
                                              message:
                                                "Please enter a valid firstname",
                                            },
                                            onChange: M,
                                          }),
                                          type: "text",
                                          className: x()("form-control"),
                                          placeholder: "First name",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, t.jsx)("div", {
                                    className: x()(
                                      (null == m ? void 0 : m.firstname) &&
                                        "form-error animated fadeInDown"
                                    ),
                                    children:
                                      null == m
                                        ? void 0
                                        : null === (e = m.firstname) ||
                                          void 0 === e
                                        ? void 0
                                        : e.message,
                                  }),
                                ],
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: x()("col-md-6"),
                              children: (0, t.jsxs)("div", {
                                className: x()("form-group"),
                                children: [
                                  (0, t.jsxs)("div", {
                                    className: x()("form-group-box"),
                                    children: [
                                      (0, t.jsxs)("div", {
                                        htmlFor: "lastname",
                                        className: x()("col-form-block"),
                                        children: [
                                          "Last name",
                                          (0, t.jsx)("label", {
                                            className: x()(
                                              "col-form-option text-red"
                                            ),
                                            children: (0, t.jsx)("i", {
                                              className: x()("fas fa-asterisk"),
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, t.jsx)("div", {
                                        className: x()("form-item"),
                                        children: (0, t.jsx)("input", {
                                          id: "lastname",
                                          name: "lastname",
                                          ...c("lastname", {
                                            required: {
                                              value: !0,
                                              message:
                                                "Please enter a valid last name",
                                            },
                                            minLength: {
                                              value: 2,
                                              message:
                                                "Please enter a valid lastname",
                                            },
                                            maxLength: {
                                              value: 16,
                                              message:
                                                "Please enter a valid lastname",
                                            },
                                            onChange: M,
                                          }),
                                          type: "text",
                                          className: x()("form-control"),
                                          placeholder: "Last name",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, t.jsx)("div", {
                                    className: x()(
                                      (null == m ? void 0 : m.lastname) &&
                                        "form-error animated fadeInDown"
                                    ),
                                    children:
                                      null == m
                                        ? void 0
                                        : null === (a = m.lastname) ||
                                          void 0 === a
                                        ? void 0
                                        : a.message,
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: x()("row"),
                          children: [
                            (0, t.jsx)("div", {
                              className: x()("col-md-6"),
                              children: (0, t.jsxs)("div", {
                                className: x()("form-group"),
                                children: [
                                  (0, t.jsxs)("div", {
                                    className: x()("form-group-box"),
                                    children: [
                                      (0, t.jsxs)("div", {
                                        htmlFor: "company",
                                        className: x()("col-form-block"),
                                        children: [
                                          "Company name",
                                          (0, t.jsx)("label", {
                                            className: x()(
                                              "col-form-option text-red"
                                            ),
                                            children: (0, t.jsx)("i", {
                                              className: x()("fas fa-asterisk"),
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, t.jsx)("div", {
                                        className: x()("form-item"),
                                        children: (0, t.jsx)("input", {
                                          id: "company",
                                          name: "company",
                                          ...c("company", {
                                            required: {
                                              value: !0,
                                              message:
                                                "Please enter a company name",
                                            },
                                            minLength: {
                                              value: 4,
                                              message:
                                                "Company name length must be at least 4",
                                            },
                                            maxLength: {
                                              value: 50,
                                              message:
                                                "Please enter a valid company",
                                            },
                                            onChange: M,
                                          }),
                                          type: "text",
                                          className: x()("form-control"),
                                          placeholder: "Company name",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, t.jsx)("div", {
                                    className: x()(
                                      (null == m ? void 0 : m.company) &&
                                        "form-error animated fadeInDown"
                                    ),
                                    children:
                                      null == m
                                        ? void 0
                                        : null === (l = m.company) ||
                                          void 0 === l
                                        ? void 0
                                        : l.message,
                                  }),
                                ],
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: x()("col-md-6"),
                              children: (0, t.jsxs)("div", {
                                className: x()("form-group"),
                                children: [
                                  (0, t.jsxs)("div", {
                                    className: x()("form-group-box"),
                                    children: [
                                      (0, t.jsxs)("div", {
                                        htmlFor: "email",
                                        className: x()("col-form-block"),
                                        children: [
                                          "Email",
                                          (0, t.jsx)("label", {
                                            className: x()(
                                              "col-form-option text-red"
                                            ),
                                            children: (0, t.jsx)("i", {
                                              className: x()("fas fa-asterisk"),
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, t.jsx)("div", {
                                        className: x()("form-item"),
                                        children: (0, t.jsx)("input", {
                                          id: "email",
                                          name: "email",
                                          ...c("email", {
                                            onChange: M,
                                            required: {
                                              value: !0,
                                              message:
                                                "Please enter a valid email address",
                                            },
                                            minLength: {
                                              value: 6,
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
                                          type: "text",
                                          className: x()("form-control"),
                                          placeholder: "Email",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, t.jsx)("div", {
                                    className: x()(
                                      (null == m ? void 0 : m.email) &&
                                        "form-error animated fadeInDown"
                                    ),
                                    children:
                                      null == m
                                        ? void 0
                                        : null === (i = m.email) || void 0 === i
                                        ? void 0
                                        : i.message,
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: x()("row"),
                          children: [
                            (0, t.jsx)("div", {
                              className: x()("col-md-6"),
                              children: (0, t.jsxs)("div", {
                                className: x()("form-group"),
                                children: [
                                  (0, t.jsxs)("div", {
                                    className: x()("form-group-box"),
                                    children: [
                                      (0, t.jsxs)("div", {
                                        htmlFor: "jobtitle",
                                        className: x()("col-form-block"),
                                        children: [
                                          "Job Title",
                                          (0, t.jsx)("label", {
                                            className: x()(
                                              "col-form-option text-red"
                                            ),
                                            children: (0, t.jsx)("i", {
                                              className: x()("fas fa-asterisk"),
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, t.jsx)("div", {
                                        className: x()("form-item"),
                                        children: (0, t.jsx)("input", {
                                          id: "jobtitle",
                                          name: "jobtitle",
                                          ...c("jobtitle", {
                                            required: {
                                              value: !0,
                                              message:
                                                "Please enter a valid job title",
                                            },
                                            minLength: {
                                              value: 2,
                                              message:
                                                "Job title length must be at least 2",
                                            },
                                            maxLength: {
                                              value: 30,
                                              message:
                                                "Job title length must be at most 30",
                                            },
                                            onChange: M,
                                          }),
                                          type: "text",
                                          className: x()("form-control"),
                                          placeholder: "Job Title",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, t.jsx)("div", {
                                    className: x()(
                                      (null == m ? void 0 : m.jobtitle) &&
                                        "form-error animated fadeInDown"
                                    ),
                                    children:
                                      null == m
                                        ? void 0
                                        : null === (s = m.jobtitle) ||
                                          void 0 === s
                                        ? void 0
                                        : s.message,
                                  }),
                                ],
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: x()("col-md-6"),
                              children: (0, t.jsxs)("div", {
                                className: x()("form-group"),
                                children: [
                                  (0, t.jsxs)("div", {
                                    className: x()("form-group-box"),
                                    children: [
                                      (0, t.jsxs)("div", {
                                        htmlFor: "country",
                                        className: x()("col-form-block"),
                                        children: [
                                          "Country",
                                          (0, t.jsx)("label", {
                                            className: x()(
                                              "col-form-option text-red"
                                            ),
                                            children: (0, t.jsx)("i", {
                                              className: x()("fas fa-asterisk"),
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, t.jsx)("div", {
                                        className: x()("form-item"),
                                        children: (0, t.jsxs)("select", {
                                          className: x()("form-control"),
                                          ...c("country", {
                                            required: {
                                              value: !0,
                                              message:
                                                "Please enter a valid country",
                                            },
                                            onChange: M,
                                          }),
                                          children: [
                                            (0, t.jsx)("option", {
                                              value: "",
                                              children: "Select Country",
                                            }),
                                            N.map((e) =>
                                              (0, t.jsx)(
                                                "option",
                                                {
                                                  value: e.title,
                                                  children: e.title,
                                                },
                                                e.title
                                              )
                                            ),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, t.jsx)("div", {
                                    className: x()(
                                      (null == m ? void 0 : m.country) &&
                                        "form-error animated fadeInDown"
                                    ),
                                    children:
                                      null == m
                                        ? void 0
                                        : null === (r = m.country) ||
                                          void 0 === r
                                        ? void 0
                                        : r.message,
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, t.jsx)("div", {
                          className: x()("row"),
                          children: (0, t.jsx)("div", {
                            className: x()("col-lg-12"),
                            children: (0, t.jsxs)("div", {
                              className: x()("form-group"),
                              children: [
                                (0, t.jsxs)("div", {
                                  className: x()("form-group-box"),
                                  children: [
                                    (0, t.jsxs)("div", {
                                      htmlFor: "expected",
                                      className: x()(
                                        "col-form-block  multiple-text"
                                      ),
                                      children: [
                                        (0, t.jsx)("span", {
                                          children:
                                            "Briefly describe your use case and / or the expected number / type of GPUs needed.",
                                        }),
                                        (0, t.jsx)("label", {
                                          className: x()(
                                            "col-form-option text-red"
                                          ),
                                          children: (0, t.jsx)("i", {
                                            className: x()("fas fa-asterisk"),
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, t.jsx)("div", {
                                      className: x()("form-item"),
                                      children: (0, t.jsx)("textarea", {
                                        id: "expected",
                                        name: "expected",
                                        ...c("expected", {
                                          required: {
                                            value: !0,
                                            message:
                                              "Please enter a valid value",
                                          },
                                          minLength: {
                                            value: 10,
                                            message:
                                              "This value length must be at least 10",
                                          },
                                          maxLength: {
                                            value: 150,
                                            message:
                                              "This value length must be at most 150",
                                          },
                                          onChange: M,
                                        }),
                                        type: "text",
                                        className: x()("form-control"),
                                        placeholder:
                                          "Briefly describe your use case and / or the expected number / type of GPUs needed.",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, t.jsx)("div", {
                                  className: x()(
                                    (null == m ? void 0 : m.expected) &&
                                      "form-error animated fadeInDown"
                                  ),
                                  children:
                                    null == m
                                      ? void 0
                                      : null === (o = m.expected) ||
                                        void 0 === o
                                      ? void 0
                                      : o.message,
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className: x()("row"),
                          children: (0, t.jsx)("div", {
                            className: x()("col-lg-12"),
                            children: (0, t.jsxs)("div", {
                              className: x()("form-group"),
                              children: [
                                (0, t.jsxs)("div", {
                                  className: x()("form-group-box"),
                                  children: [
                                    (0, t.jsx)("div", {
                                      htmlFor: "message",
                                      className: x()("col-form-block"),
                                      children: "Message",
                                    }),
                                    (0, t.jsx)("div", {
                                      className: x()("form-item"),
                                      children: (0, t.jsx)("textarea", {
                                        id: "message",
                                        name: "message",
                                        ...c("message", {
                                          minLength: {
                                            value: 10,
                                            message:
                                              "Message description length must be at least 10",
                                          },
                                          maxLength: {
                                            value: 150,
                                            message:
                                              "Message description length must be at most 150",
                                          },
                                          onChange: M,
                                        }),
                                        type: "text",
                                        className: x()("form-control"),
                                        placeholder: "Message",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, t.jsx)("div", {
                                  className: x()(
                                    (null == m ? void 0 : m.message) &&
                                      "form-error animated fadeInDown"
                                  ),
                                  children:
                                    null == m
                                      ? void 0
                                      : null === (u = m.message) || void 0 === u
                                      ? void 0
                                      : u.message,
                                }),
                              ],
                            }),
                          }),
                        }),
                        C &&
                          (0, t.jsx)("div", {
                            className: x()("alert alert-danger"),
                            children: null == C ? void 0 : C.message,
                          }),
                        (0, t.jsx)("div", {
                          className: x()("submit-form"),
                          children: (0, t.jsx)("button", {
                            className: x()(
                              "btn btn-lg button-animated btn-success"
                            ),
                            type: "submit",
                            disabled: g,
                            name: "send",
                            children: g
                              ? (0, t.jsxs)("div", {
                                  className: x()("spinner-box"),
                                  children: [
                                    (0, t.jsx)("span", {
                                      className: x()(
                                        "spinner-border spinner-border-sm"
                                      ),
                                    }),
                                    (0, t.jsx)("span", {
                                      className: x()("spinner-text"),
                                      children: "loading...",
                                    }),
                                  ],
                                })
                              : (0, t.jsxs)("span", {
                                  children: [
                                    "Submit \xa0\xa0",
                                    (0, t.jsx)("i", {
                                      className: x()(
                                        "fab far fa fa-arrow-right"
                                      ),
                                    }),
                                    " ",
                                  ],
                                }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              });
        };
      function S() {
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)(s(), {
              children: [
                (0, t.jsx)("title", {
                  children:
                    "Sync with a Solution Engineer | Exabits: To make it easy to adopt AI anywhere",
                }),
                (0, t.jsx)("meta", {
                  content:
                    "height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
                  name: "viewport",
                }),
                (0, t.jsx)("meta", {
                  content:
                    "Exabits is a specialized cloud provider, delivering a massive scale of GPU-accelerated compute resources on top of the industry’s fastest and most flexible infrastructure.",
                  name: "description",
                }),
                (0, t.jsx)("meta", {
                  name: "keywords",
                  content:
                    "Contact Our Sales,Exabits,web3.0,Decentralized,network,docker,computing,blockchain,nft market,dapp",
                }),
              ],
            }),
            (0, t.jsx)(g, {
              children: (0, t.jsx)("section", {
                className: x()("extra-spacer"),
                children: (0, t.jsx)("div", {
                  className: x()("container sections"),
                  children: (0, t.jsxs)("div", {
                    className: x()("row"),
                    children: [
                      (0, t.jsx)("div", {
                        className: x()("col-lg-6 "),
                        children: (0, t.jsxs)("div", {
                          className: x()("sales-left"),
                          children: [
                            (0, t.jsx)("h2", {
                              className: x()("section-heading clients-heading"),
                              children: "Sync with a Solutions Engineer",
                            }),
                            (0, t.jsx)("p", {
                              children:
                                "Check in with a Solutions Engineer to determine the most efficient and cost effective way to access and deploy the fastest cloud compute network on earth.",
                            }),
                            (0, t.jsxs)("ul", {
                              children: [
                                (0, t.jsx)("li", {
                                  children:
                                    "Unparalleled Cost-Efficiency - up to an 80% reduction compared to traditional cloud compute platforms like AWS. Lowest cost anywhere compared to other providers. ",
                                }),
                                (0, t.jsx)("li", {
                                  children:
                                    "Access diverse GPU Options - Featuring a variety of choices including NVIDIA (including H100 / A100) and AMD GPUs, with 10 SKUs available for on-demand scaling.",
                                }),
                                (0, t.jsxs)("li", {
                                  children: [
                                    "Deploy or ",
                                    (0, t.jsx)("strong", {
                                      children: "StealthAccel",
                                    }),
                                    " option for up to ",
                                    (0, t.jsx)("strong", {
                                      children: "15x cost reduction",
                                    }),
                                    " - This is an exclusive technology that enables linking and optimizing consumer GPU’s to perform better than H100 / A100 in certain cases. ",
                                  ],
                                }),
                                (0, t.jsx)("li", {
                                  children:
                                    "World Class Customer Service - Experience a support team that feels like an extension of your own.",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: x()("col-lg-6 "),
                        children: (0, t.jsx)("div", {
                          className: x()("sales-right"),
                          children: (0, t.jsx)(b, {}),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [225, 553, 163, 774, 888, 179], function () {
      return e((e.s = 4268));
    }),
      (_N_E = e.O());
  },
]);
