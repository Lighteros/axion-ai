(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    1118: function (n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return t(2644);
        },
      ]);
    },
    6333: function (n, e, t) {
      "use strict";
      var r = t(7294);
      let u = (0, r.createContext)();
      e.Z = u;
    },
    2644: function (n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          default: function () {
            return f;
          },
        });
      var r = t(5893);
      t(4104);
      var u = t(7294),
        a = t(6333);
      let c = { NAV: "NAV" },
        i = (n, e) => (e.type === c.NAV ? { ...n, nav: e.payload } : n),
        o = (n) => {
          let [e, t] = (0, u.useReducer)(i, { nav: "home" }),
            o = (n) => {
              t({ type: c.NAV, payload: n });
            };
          return (0, r.jsx)(a.Z.Provider, {
            value: { changeNav: o, nav: e.nav },
            children: n.children,
          });
        };
      function f(n) {
        let { Component: e, pageProps: t } = n;
        return (0, r.jsx)(o, { children: (0, r.jsx)(e, { ...t }) });
      }
    },
    4104: function () {},
  },
  function (n) {
    var e = function (e) {
      return n((n.s = e));
    };
    n.O(0, [774, 179], function () {
      return e(1118), e(387);
    }),
      (_N_E = n.O());
  },
]);
