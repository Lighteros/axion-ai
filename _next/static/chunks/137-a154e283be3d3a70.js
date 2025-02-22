(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [137],
  {
    6546: function (e, t) {
      !(function (e) {
        "use strict";
        function t(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        /*!
         * Observer 3.12.5
         * https://gsap.com
         *
         * @license Copyright 2008-2024, GreenSock. All rights reserved.
         * Subject to the terms at https://gsap.com/standard-license or for
         * Club GSAP members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */ var r,
          n,
          i,
          o,
          s,
          a,
          l,
          c,
          u,
          f,
          p,
          d,
          h,
          g = function () {
            return (
              r ||
              ("undefined" != typeof window &&
                (r = window.gsap) &&
                r.registerPlugin &&
                r)
            );
          },
          v = 1,
          m = [],
          y = [],
          x = [],
          b = Date.now,
          w = function (e, t) {
            return t;
          },
          _ = function () {
            var e = u.core,
              t = e.bridge || {},
              r = e._scrollers,
              n = e._proxies;
            r.push.apply(r, y),
              n.push.apply(n, x),
              (y = r),
              (x = n),
              (w = function (e, r) {
                return t[e](r);
              });
          },
          O = function (e, t) {
            return ~x.indexOf(e) && x[x.indexOf(e) + 1][t];
          },
          P = function (e) {
            return !!~f.indexOf(e);
          },
          M = function (e, t, r, n, i) {
            return e.addEventListener(t, r, {
              passive: !1 !== n,
              capture: !!i,
            });
          },
          C = function (e, t, r, n) {
            return e.removeEventListener(t, r, !!n);
          },
          S = "scrollLeft",
          T = "scrollTop",
          k = function () {
            return (p && p.isPressed) || y.cache++;
          },
          E = function (e, t) {
            var r = function r(n) {
              if (n || 0 === n) {
                v && (i.history.scrollRestoration = "manual");
                var o = p && p.isPressed;
                (n = r.v = Math.round(n) || (p && p.iOS ? 1 : 0)),
                  e(n),
                  (r.cacheID = y.cache),
                  o && w("ss", n);
              } else
                (t || y.cache !== r.cacheID || w("ref")) &&
                  ((r.cacheID = y.cache), (r.v = e()));
              return r.v + r.offset;
            };
            return (r.offset = 0), e && r;
          },
          A = {
            s: S,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: E(function (e) {
              return arguments.length
                ? i.scrollTo(e, F.sc())
                : i.pageXOffset || o[S] || s[S] || a[S] || 0;
            }),
          },
          F = {
            s: T,
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: A,
            sc: E(function (e) {
              return arguments.length
                ? i.scrollTo(A.sc(), e)
                : i.pageYOffset || o[T] || s[T] || a[T] || 0;
            }),
          },
          Y = function (e, t) {
            return (
              ((t && t._ctx && t._ctx.selector) || r.utils.toArray)(e)[0] ||
              ("string" == typeof e && !1 !== r.config().nullTargetWarn
                ? console.warn("Element not found:", e)
                : null)
            );
          },
          B = function (e, t) {
            var n = t.s,
              i = t.sc;
            P(e) && (e = o.scrollingElement || s);
            var a = y.indexOf(e),
              l = i === F.sc ? 1 : 2;
            ~a || (a = y.push(e) - 1), y[a + l] || M(e, "scroll", k);
            var c = y[a + l],
              u =
                c ||
                (y[a + l] =
                  E(O(e, n), !0) ||
                  (P(e)
                    ? i
                    : E(function (t) {
                        return arguments.length ? (e[n] = t) : e[n];
                      })));
            return (
              (u.target = e),
              c || (u.smooth = "smooth" === r.getProperty(e, "scrollBehavior")),
              u
            );
          },
          D = function (e, t, r) {
            var n = e,
              i = e,
              o = b(),
              s = o,
              a = t || 50,
              l = Math.max(500, 3 * a),
              c = function (e, t) {
                var l = b();
                t || l - o > a
                  ? ((i = n), (n = e), (s = o), (o = l))
                  : r
                  ? (n += e)
                  : (n = i + ((e - i) / (l - s)) * (o - s));
              };
            return {
              update: c,
              reset: function () {
                (i = n = r ? 0 : n), (s = o = 0);
              },
              getVelocity: function (e) {
                var t = s,
                  a = i,
                  u = b();
                return (
                  (e || 0 === e) && e !== n && c(e),
                  o === s || u - s > l
                    ? 0
                    : ((n + (r ? a : -a)) / ((r ? u : o) - t)) * 1e3
                );
              },
            };
          },
          z = function (e, t) {
            return (
              t && !e._gsapAllow && e.preventDefault(),
              e.changedTouches ? e.changedTouches[0] : e
            );
          },
          X = function (e) {
            var t = Math.max.apply(Math, e),
              r = Math.min.apply(Math, e);
            return Math.abs(t) >= Math.abs(r) ? t : r;
          },
          R = function () {
            (u = r.core.globals().ScrollTrigger) && u.core && _();
          },
          I = function (e) {
            return (
              (r = e || g()),
              !n &&
                r &&
                "undefined" != typeof document &&
                document.body &&
                ((i = window),
                (s = (o = document).documentElement),
                (a = o.body),
                (f = [i, o, s, a]),
                r.utils.clamp,
                (h = r.core.context || function () {}),
                (c = "onpointerenter" in a ? "pointer" : "mouse"),
                (l = N.isTouch =
                  i.matchMedia &&
                  i.matchMedia("(hover: none), (pointer: coarse)").matches
                    ? 1
                    : "ontouchstart" in i ||
                      navigator.maxTouchPoints > 0 ||
                      navigator.msMaxTouchPoints > 0
                    ? 2
                    : 0),
                (d = N.eventTypes =
                  (
                    "ontouchstart" in s
                      ? "touchstart,touchmove,touchcancel,touchend"
                      : "onpointerdown" in s
                      ? "pointerdown,pointermove,pointercancel,pointerup"
                      : "mousedown,mousemove,mouseup,mouseup"
                  ).split(",")),
                setTimeout(function () {
                  return (v = 0);
                }, 500),
                R(),
                (n = 1)),
              n
            );
          };
        (A.op = F), (y.cache = 0);
        var N = (function () {
          var e;
          function f(e) {
            this.init(e);
          }
          return (
            (f.prototype.init = function (e) {
              n || I(r) || console.warn("Please gsap.registerPlugin(Observer)"),
                u || R();
              var t = e.tolerance,
                f = e.dragMinimum,
                g = e.type,
                v = e.target,
                y = e.lineHeight,
                x = e.debounce,
                w = e.preventDefault,
                _ = e.onStop,
                O = e.onStopDelay,
                S = e.ignore,
                T = e.wheelSpeed,
                E = e.event,
                N = e.onDragStart,
                W = e.onDragEnd,
                L = e.onDrag,
                H = e.onPress,
                V = e.onRelease,
                q = e.onRight,
                U = e.onLeft,
                G = e.onUp,
                j = e.onDown,
                Z = e.onChangeX,
                $ = e.onChangeY,
                K = e.onChange,
                J = e.onToggleX,
                Q = e.onToggleY,
                ee = e.onHover,
                et = e.onHoverEnd,
                er = e.onMove,
                en = e.ignoreCheck,
                ei = e.isNormalizer,
                eo = e.onGestureStart,
                es = e.onGestureEnd,
                ea = e.onWheel,
                el = e.onEnable,
                ec = e.onDisable,
                eu = e.onClick,
                ef = e.scrollSpeed,
                ep = e.capture,
                ed = e.allowClicks,
                eh = e.lockAxis,
                eg = e.onLockAxis;
              (this.target = v = Y(v) || s),
                (this.vars = e),
                S && (S = r.utils.toArray(S)),
                (t = t || 1e-9),
                (f = f || 0),
                (T = T || 1),
                (ef = ef || 1),
                (g = g || "wheel,touch,pointer"),
                (x = !1 !== x),
                y || (y = parseFloat(i.getComputedStyle(a).lineHeight) || 22);
              var ev,
                em,
                ey,
                ex,
                eb,
                ew,
                e_,
                eO = this,
                eP = 0,
                eM = 0,
                eC = e.passive || !w,
                eS = B(v, A),
                eT = B(v, F),
                ek = eS(),
                eE = eT(),
                eA =
                  ~g.indexOf("touch") &&
                  !~g.indexOf("pointer") &&
                  "pointerdown" === d[0],
                eF = P(v),
                eY = v.ownerDocument || o,
                eB = [0, 0, 0],
                eD = [0, 0, 0],
                ez = 0,
                eX = function () {
                  return (ez = b());
                },
                eR = function (e, t) {
                  return (
                    ((eO.event = e) && S && ~S.indexOf(e.target)) ||
                    (t && eA && "touch" !== e.pointerType) ||
                    (en && en(e, t))
                  );
                },
                eI = function () {
                  var e = (eO.deltaX = X(eB)),
                    r = (eO.deltaY = X(eD)),
                    n = Math.abs(e) >= t,
                    i = Math.abs(r) >= t;
                  K && (n || i) && K(eO, e, r, eB, eD),
                    n &&
                      (q && eO.deltaX > 0 && q(eO),
                      U && eO.deltaX < 0 && U(eO),
                      Z && Z(eO),
                      J && eO.deltaX < 0 != eP < 0 && J(eO),
                      (eP = eO.deltaX),
                      (eB[0] = eB[1] = eB[2] = 0)),
                    i &&
                      (j && eO.deltaY > 0 && j(eO),
                      G && eO.deltaY < 0 && G(eO),
                      $ && $(eO),
                      Q && eO.deltaY < 0 != eM < 0 && Q(eO),
                      (eM = eO.deltaY),
                      (eD[0] = eD[1] = eD[2] = 0)),
                    (ex || ey) &&
                      (er && er(eO), ey && (L(eO), (ey = !1)), (ex = !1)),
                    ew && ((ew = !1), 1) && eg && eg(eO),
                    eb && (ea(eO), (eb = !1)),
                    (ev = 0);
                },
                eN = function (e, t, r) {
                  (eB[r] += e),
                    (eD[r] += t),
                    eO._vx.update(e),
                    eO._vy.update(t),
                    x ? ev || (ev = requestAnimationFrame(eI)) : eI();
                },
                eW = function (e, t) {
                  eh &&
                    !e_ &&
                    ((eO.axis = e_ = Math.abs(e) > Math.abs(t) ? "x" : "y"),
                    (ew = !0)),
                    "y" !== e_ && ((eB[2] += e), eO._vx.update(e, !0)),
                    "x" !== e_ && ((eD[2] += t), eO._vy.update(t, !0)),
                    x ? ev || (ev = requestAnimationFrame(eI)) : eI();
                },
                eL = function (e) {
                  if (!eR(e, 1)) {
                    var t = (e = z(e, w)).clientX,
                      r = e.clientY,
                      n = t - eO.x,
                      i = r - eO.y,
                      o = eO.isDragging;
                    (eO.x = t),
                      (eO.y = r),
                      (o ||
                        Math.abs(eO.startX - t) >= f ||
                        Math.abs(eO.startY - r) >= f) &&
                        (L && (ey = !0),
                        o || (eO.isDragging = !0),
                        eW(n, i),
                        o || (N && N(eO)));
                  }
                },
                eH = (eO.onPress = function (e) {
                  eR(e, 1) ||
                    (e && e.button) ||
                    ((eO.axis = e_ = null),
                    em.pause(),
                    (eO.isPressed = !0),
                    (e = z(e)),
                    (eP = eM = 0),
                    (eO.startX = eO.x = e.clientX),
                    (eO.startY = eO.y = e.clientY),
                    eO._vx.reset(),
                    eO._vy.reset(),
                    M(ei ? v : eY, d[1], eL, eC, !0),
                    (eO.deltaX = eO.deltaY = 0),
                    H && H(eO));
                }),
                eV = (eO.onRelease = function (e) {
                  if (!eR(e, 1)) {
                    C(ei ? v : eY, d[1], eL, !0);
                    var t = !isNaN(eO.y - eO.startY),
                      n = eO.isDragging,
                      o =
                        n &&
                        (Math.abs(eO.x - eO.startX) > 3 ||
                          Math.abs(eO.y - eO.startY) > 3),
                      s = z(e);
                    !o &&
                      t &&
                      (eO._vx.reset(),
                      eO._vy.reset(),
                      w &&
                        ed &&
                        r.delayedCall(0.08, function () {
                          if (b() - ez > 300 && !e.defaultPrevented) {
                            if (e.target.click) e.target.click();
                            else if (eY.createEvent) {
                              var t = eY.createEvent("MouseEvents");
                              t.initMouseEvent(
                                "click",
                                !0,
                                !0,
                                i,
                                1,
                                s.screenX,
                                s.screenY,
                                s.clientX,
                                s.clientY,
                                !1,
                                !1,
                                !1,
                                !1,
                                0,
                                null
                              ),
                                e.target.dispatchEvent(t);
                            }
                          }
                        })),
                      (eO.isDragging = eO.isGesturing = eO.isPressed = !1),
                      _ && n && !ei && em.restart(!0),
                      W && n && W(eO),
                      V && V(eO, o);
                  }
                }),
                eq = function (e) {
                  return (
                    e.touches &&
                    e.touches.length > 1 &&
                    (eO.isGesturing = !0) &&
                    eo(e, eO.isDragging)
                  );
                },
                eU = function () {
                  return (eO.isGesturing = !1), es(eO);
                },
                eG = function (e) {
                  if (!eR(e)) {
                    var t = eS(),
                      r = eT();
                    eN((t - ek) * ef, (r - eE) * ef, 1),
                      (ek = t),
                      (eE = r),
                      _ && em.restart(!0);
                  }
                },
                ej = function (e) {
                  if (!eR(e)) {
                    (e = z(e, w)), ea && (eb = !0);
                    var t =
                      (1 === e.deltaMode
                        ? y
                        : 2 === e.deltaMode
                        ? i.innerHeight
                        : 1) * T;
                    eN(e.deltaX * t, e.deltaY * t, 0),
                      _ && !ei && em.restart(!0);
                  }
                },
                eZ = function (e) {
                  if (!eR(e)) {
                    var t = e.clientX,
                      r = e.clientY,
                      n = t - eO.x,
                      i = r - eO.y;
                    (eO.x = t),
                      (eO.y = r),
                      (ex = !0),
                      _ && em.restart(!0),
                      (n || i) && eW(n, i);
                  }
                },
                e$ = function (e) {
                  (eO.event = e), ee(eO);
                },
                eK = function (e) {
                  (eO.event = e), et(eO);
                },
                eJ = function (e) {
                  return eR(e) || (z(e, w) && eu(eO));
                };
              (em = eO._dc =
                r
                  .delayedCall(O || 0.25, function () {
                    eO._vx.reset(), eO._vy.reset(), em.pause(), _ && _(eO);
                  })
                  .pause()),
                (eO.deltaX = eO.deltaY = 0),
                (eO._vx = D(0, 50, !0)),
                (eO._vy = D(0, 50, !0)),
                (eO.scrollX = eS),
                (eO.scrollY = eT),
                (eO.isDragging = eO.isGesturing = eO.isPressed = !1),
                h(this),
                (eO.enable = function (e) {
                  return (
                    !eO.isEnabled &&
                      (M(eF ? eY : v, "scroll", k),
                      g.indexOf("scroll") >= 0 &&
                        M(eF ? eY : v, "scroll", eG, eC, ep),
                      g.indexOf("wheel") >= 0 && M(v, "wheel", ej, eC, ep),
                      ((g.indexOf("touch") >= 0 && l) ||
                        g.indexOf("pointer") >= 0) &&
                        (M(v, d[0], eH, eC, ep),
                        M(eY, d[2], eV),
                        M(eY, d[3], eV),
                        ed && M(v, "click", eX, !0, !0),
                        eu && M(v, "click", eJ),
                        eo && M(eY, "gesturestart", eq),
                        es && M(eY, "gestureend", eU),
                        ee && M(v, c + "enter", e$),
                        et && M(v, c + "leave", eK),
                        er && M(v, c + "move", eZ)),
                      (eO.isEnabled = !0),
                      e && e.type && eH(e),
                      el && el(eO)),
                    eO
                  );
                }),
                (eO.disable = function () {
                  eO.isEnabled &&
                    (m.filter(function (e) {
                      return e !== eO && P(e.target);
                    }).length || C(eF ? eY : v, "scroll", k),
                    eO.isPressed &&
                      (eO._vx.reset(),
                      eO._vy.reset(),
                      C(ei ? v : eY, d[1], eL, !0)),
                    C(eF ? eY : v, "scroll", eG, ep),
                    C(v, "wheel", ej, ep),
                    C(v, d[0], eH, ep),
                    C(eY, d[2], eV),
                    C(eY, d[3], eV),
                    C(v, "click", eX, !0),
                    C(v, "click", eJ),
                    C(eY, "gesturestart", eq),
                    C(eY, "gestureend", eU),
                    C(v, c + "enter", e$),
                    C(v, c + "leave", eK),
                    C(v, c + "move", eZ),
                    (eO.isEnabled = eO.isPressed = eO.isDragging = !1),
                    ec && ec(eO));
                }),
                (eO.kill = eO.revert =
                  function () {
                    eO.disable();
                    var e = m.indexOf(eO);
                    e >= 0 && m.splice(e, 1), p === eO && (p = 0);
                  }),
                m.push(eO),
                ei && P(v) && (p = eO),
                eO.enable(E);
            }),
            t(f.prototype, [
              {
                key: "velocityX",
                get: function () {
                  return this._vx.getVelocity();
                },
              },
              {
                key: "velocityY",
                get: function () {
                  return this._vy.getVelocity();
                },
              },
            ]),
            e && t(f, e),
            f
          );
        })();
        (N.version = "3.12.5"),
          (N.create = function (e) {
            return new N(e);
          }),
          (N.register = I),
          (N.getAll = function () {
            return m.slice();
          }),
          (N.getById = function (e) {
            return m.filter(function (t) {
              return t.vars.id === e;
            })[0];
          }),
          g() && r.registerPlugin(N);
        /*!
         * ScrollTrigger 3.12.5
         * https://gsap.com
         *
         * @license Copyright 2008-2024, GreenSock. All rights reserved.
         * Subject to the terms at https://gsap.com/standard-license or for
         * Club GSAP members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */ var W,
          L,
          H,
          V,
          q,
          U,
          G,
          j,
          Z,
          $,
          K,
          J,
          Q,
          ee,
          et,
          er,
          en,
          ei,
          eo,
          es,
          ea,
          el,
          ec,
          eu,
          ef,
          ep,
          ed,
          eh,
          eg,
          ev,
          em,
          ey,
          ex,
          eb,
          ew,
          e_,
          eO,
          eP,
          eM = 1,
          eC = Date.now,
          eS = eC(),
          eT = 0,
          ek = 0,
          eE = function (e, t, r) {
            var n =
              eV(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
            return (
              (r["_" + t + "Clamp"] = n), n ? e.substr(6, e.length - 7) : e
            );
          },
          eA = function (e, t) {
            return t && (!eV(e) || "clamp(" !== e.substr(0, 6))
              ? "clamp(" + e + ")"
              : e;
          },
          eF = function () {
            return (ee = 1);
          },
          eY = function () {
            return (ee = 0);
          },
          eB = function (e) {
            return e;
          },
          eD = function (e) {
            return Math.round(1e5 * e) / 1e5 || 0;
          },
          ez = function () {
            return "undefined" != typeof window;
          },
          eX = function () {
            return W || (ez() && (W = window.gsap) && W.registerPlugin && W);
          },
          eR = function (e) {
            return !!~G.indexOf(e);
          },
          eI = function (e) {
            return (
              ("Height" === e ? em : H["inner" + e]) ||
              q["client" + e] ||
              U["client" + e]
            );
          },
          eN = function (e) {
            return (
              O(e, "getBoundingClientRect") ||
              (eR(e)
                ? function () {
                    return (tU.width = H.innerWidth), (tU.height = em), tU;
                  }
                : function () {
                    return tr(e);
                  })
            );
          },
          eW = function (e, t, r) {
            var n = r.d,
              i = r.d2,
              o = r.a;
            return (o = O(e, "getBoundingClientRect"))
              ? function () {
                  return o()[n];
                }
              : function () {
                  return (t ? eI(i) : e["client" + i]) || 0;
                };
          },
          eL = function (e, t) {
            var r = t.s,
              n = t.d2,
              i = t.d,
              o = t.a;
            return Math.max(
              0,
              (o = O(e, (r = "scroll" + n)))
                ? o() - eN(e)()[i]
                : eR(e)
                ? (q[r] || U[r]) - eI(n)
                : e[r] - e["offset" + n]
            );
          },
          eH = function (e, t) {
            for (var r = 0; r < eo.length; r += 3)
              (!t || ~t.indexOf(eo[r + 1])) && e(eo[r], eo[r + 1], eo[r + 2]);
          },
          eV = function (e) {
            return "string" == typeof e;
          },
          eq = function (e) {
            return "function" == typeof e;
          },
          eU = function (e) {
            return "number" == typeof e;
          },
          eG = function (e) {
            return "object" == typeof e;
          },
          ej = function (e, t, r) {
            return e && e.progress(t ? 0 : 1) && r && e.pause();
          },
          eZ = function (e, t) {
            if (e.enabled) {
              var r = e._ctx
                ? e._ctx.add(function () {
                    return t(e);
                  })
                : t(e);
              r && r.totalTime && (e.callbackAnimation = r);
            }
          },
          e$ = Math.abs,
          eK = "left",
          eJ = "right",
          eQ = "bottom",
          e0 = "width",
          e1 = "height",
          e2 = "Right",
          e3 = "Left",
          e5 = "Bottom",
          e8 = "padding",
          e4 = "margin",
          e6 = "Width",
          e9 = "Height",
          e7 = function (e) {
            return H.getComputedStyle(e);
          },
          te = function (e) {
            var t = e7(e).position;
            e.style.position =
              "absolute" === t || "fixed" === t ? t : "relative";
          },
          tt = function (e, t) {
            for (var r in t) r in e || (e[r] = t[r]);
            return e;
          },
          tr = function (e, t) {
            var r =
                t &&
                "matrix(1, 0, 0, 1, 0, 0)" !== e7(e)[et] &&
                W.to(e, {
                  x: 0,
                  y: 0,
                  xPercent: 0,
                  yPercent: 0,
                  rotation: 0,
                  rotationX: 0,
                  rotationY: 0,
                  scale: 1,
                  skewX: 0,
                  skewY: 0,
                }).progress(1),
              n = e.getBoundingClientRect();
            return r && r.progress(0).kill(), n;
          },
          tn = function (e, t) {
            var r = t.d2;
            return e["offset" + r] || e["client" + r] || 0;
          },
          ti = function (e) {
            var t,
              r = [],
              n = e.labels,
              i = e.duration();
            for (t in n) r.push(n[t] / i);
            return r;
          },
          to = function (e) {
            var t = W.utils.snap(e),
              r =
                Array.isArray(e) &&
                e.slice(0).sort(function (e, t) {
                  return e - t;
                });
            return r
              ? function (e, n, i) {
                  var o;
                  if ((void 0 === i && (i = 0.001), !n)) return t(e);
                  if (n > 0) {
                    for (e -= i, o = 0; o < r.length; o++)
                      if (r[o] >= e) return r[o];
                    return r[o - 1];
                  }
                  for (o = r.length, e += i; o--; ) if (r[o] <= e) return r[o];
                  return r[0];
                }
              : function (r, n, i) {
                  void 0 === i && (i = 0.001);
                  var o = t(r);
                  return !n || Math.abs(o - r) < i || o - r < 0 == n < 0
                    ? o
                    : t(n < 0 ? r - e : r + e);
                };
          },
          ts = function (e, t, r, n) {
            return r.split(",").forEach(function (r) {
              return e(t, r, n);
            });
          },
          ta = function (e, t, r, n, i) {
            return e.addEventListener(t, r, { passive: !n, capture: !!i });
          },
          tl = function (e, t, r, n) {
            return e.removeEventListener(t, r, !!n);
          },
          tc = function (e, t, r) {
            (r = r && r.wheelHandler) &&
              (e(t, "wheel", r), e(t, "touchmove", r));
          },
          tu = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal",
          },
          tf = { toggleActions: "play", anticipatePin: 0 },
          tp = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
          td = function (e, t) {
            if (eV(e)) {
              var r = e.indexOf("="),
                n = ~r
                  ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1))
                  : 0;
              ~r &&
                (e.indexOf("%") > r && (n *= t / 100),
                (e = e.substr(0, r - 1))),
                (e =
                  n +
                  (e in tp
                    ? tp[e] * t
                    : ~e.indexOf("%")
                    ? (parseFloat(e) * t) / 100
                    : parseFloat(e) || 0));
            }
            return e;
          },
          th = function (e, t, r, n, i, o, s, a) {
            var l = i.startColor,
              c = i.endColor,
              u = i.fontSize,
              f = i.indent,
              p = i.fontWeight,
              d = V.createElement("div"),
              h = eR(r) || "fixed" === O(r, "pinType"),
              g = -1 !== e.indexOf("scroller"),
              v = h ? U : r,
              m = -1 !== e.indexOf("start"),
              y = m ? l : c,
              x =
                "border-color:" +
                y +
                ";font-size:" +
                u +
                ";color:" +
                y +
                ";font-weight:" +
                p +
                ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            return (
              (x += "position:" + ((g || a) && h ? "fixed;" : "absolute;")),
              (g || a || !h) &&
                (x += (n === F ? eJ : eQ) + ":" + (o + parseFloat(f)) + "px;"),
              s &&
                (x +=
                  "box-sizing:border-box;text-align:left;width:" +
                  s.offsetWidth +
                  "px;"),
              (d._isStart = m),
              d.setAttribute(
                "class",
                "gsap-marker-" + e + (t ? " marker-" + t : "")
              ),
              (d.style.cssText = x),
              (d.innerText = t || 0 === t ? e + "-" + t : e),
              v.children[0]
                ? v.insertBefore(d, v.children[0])
                : v.appendChild(d),
              (d._offset = d["offset" + n.op.d2]),
              tg(d, 0, n, m),
              d
            );
          },
          tg = function (e, t, r, n) {
            var i = { display: "block" },
              o = r[n ? "os2" : "p2"],
              s = r[n ? "p2" : "os2"];
            (e._isFlipped = n),
              (i[r.a + "Percent"] = n ? -100 : 0),
              (i[r.a] = n ? "1px" : 0),
              (i["border" + o + e6] = 1),
              (i["border" + s + e6] = 0),
              (i[r.p] = t + "px"),
              W.set(e, i);
          },
          tv = [],
          tm = {},
          ty = function () {
            return eC() - eT > 34 && (ew || (ew = requestAnimationFrame(tX)));
          },
          tx = function () {
            (ec && ec.isPressed && !(ec.startX > U.clientWidth)) ||
              (y.cache++,
              ec ? ew || (ew = requestAnimationFrame(tX)) : tX(),
              eT || tM("scrollStart"),
              (eT = eC()));
          },
          tb = function () {
            (ep = H.innerWidth), (ef = H.innerHeight);
          },
          tw = function () {
            y.cache++,
              !(
                !Q &&
                !el &&
                !V.fullscreenElement &&
                !V.webkitFullscreenElement &&
                (!eu ||
                  ep !== H.innerWidth ||
                  Math.abs(H.innerHeight - ef) > 0.25 * H.innerHeight)
              ) || j.restart(!0);
          },
          t_ = {},
          tO = [],
          tP = function e() {
            return tl(tQ, "scrollEnd", e) || tB(!0);
          },
          tM = function (e) {
            return (
              (t_[e] &&
                t_[e].map(function (e) {
                  return e();
                })) ||
              tO
            );
          },
          tC = [],
          tS = function (e) {
            for (var t = 0; t < tC.length; t += 5)
              (!e || (tC[t + 4] && tC[t + 4].query === e)) &&
                ((tC[t].style.cssText = tC[t + 1]),
                tC[t].getBBox &&
                  tC[t].setAttribute("transform", tC[t + 2] || ""),
                (tC[t + 3].uncache = 1));
          },
          tT = function (e, t) {
            var r;
            for (er = 0; er < tv.length; er++)
              (r = tv[er]) &&
                (!t || r._ctx === t) &&
                (e ? r.kill(1) : r.revert(!0, !0));
            (ey = !0), t && tS(t), t || tM("revert");
          },
          tk = function (e, t) {
            y.cache++,
              (t || !e_) &&
                y.forEach(function (e) {
                  return eq(e) && e.cacheID++ && (e.rec = 0);
                }),
              eV(e) && (H.history.scrollRestoration = eg = e);
          },
          tE = 0,
          tA = function () {
            if (eO !== tE) {
              var e = (eO = tE);
              requestAnimationFrame(function () {
                return e === tE && tB(!0);
              });
            }
          },
          tF = function () {
            U.appendChild(ev),
              (em = (!ec && ev.offsetHeight) || H.innerHeight),
              U.removeChild(ev);
          },
          tY = function (e) {
            return Z(
              ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
            ).forEach(function (t) {
              return (t.style.display = e ? "none" : "block");
            });
          },
          tB = function (e, t) {
            if (eT && !e && !ey) {
              ta(tQ, "scrollEnd", tP);
              return;
            }
            tF(),
              (e_ = tQ.isRefreshing = !0),
              y.forEach(function (e) {
                return eq(e) && ++e.cacheID && (e.rec = e());
              });
            var r = tM("refreshInit");
            es && tQ.sort(),
              t || tT(),
              y.forEach(function (e) {
                eq(e) &&
                  (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
              }),
              tv.slice(0).forEach(function (e) {
                return e.refresh();
              }),
              (ey = !1),
              tv.forEach(function (e) {
                if (e._subPinOffset && e.pin) {
                  var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                    r = e.pin[t];
                  e.revert(!0, 1),
                    e.adjustPinSpacing(e.pin[t] - r),
                    e.refresh();
                }
              }),
              (ex = 1),
              tY(!0),
              tv.forEach(function (e) {
                var t = eL(e.scroller, e._dir),
                  r = "max" === e.vars.end || (e._endClamp && e.end > t),
                  n = e._startClamp && e.start >= t;
                (r || n) &&
                  e.setPositions(
                    n ? t - 1 : e.start,
                    r ? Math.max(n ? t : e.start + 1, t) : e.end,
                    !0
                  );
              }),
              tY(!1),
              (ex = 0),
              r.forEach(function (e) {
                return e && e.render && e.render(-1);
              }),
              y.forEach(function (e) {
                eq(e) &&
                  (e.smooth &&
                    requestAnimationFrame(function () {
                      return (e.target.style.scrollBehavior = "smooth");
                    }),
                  e.rec && e(e.rec));
              }),
              tk(eg, 1),
              j.pause(),
              tE++,
              (e_ = 2),
              tX(2),
              tv.forEach(function (e) {
                return eq(e.vars.onRefresh) && e.vars.onRefresh(e);
              }),
              (e_ = tQ.isRefreshing = !1),
              tM("refresh");
          },
          tD = 0,
          tz = 1,
          tX = function (e) {
            if (2 === e || (!e_ && !ey)) {
              (tQ.isUpdating = !0), eP && eP.update(0);
              var t = tv.length,
                r = eC(),
                n = r - eS >= 50,
                i = t && tv[0].scroll();
              if (
                ((tz = tD > i ? -1 : 1),
                e_ || (tD = i),
                n &&
                  (eT && !ee && r - eT > 200 && ((eT = 0), tM("scrollEnd")),
                  (K = eS),
                  (eS = r)),
                tz < 0)
              ) {
                for (er = t; er-- > 0; ) tv[er] && tv[er].update(0, n);
                tz = 1;
              } else for (er = 0; er < t; er++) tv[er] && tv[er].update(0, n);
              tQ.isUpdating = !1;
            }
            ew = 0;
          },
          tR = [
            eK,
            "top",
            eQ,
            eJ,
            e4 + e5,
            e4 + e2,
            e4 + "Top",
            e4 + e3,
            "display",
            "flexShrink",
            "float",
            "zIndex",
            "gridColumnStart",
            "gridColumnEnd",
            "gridRowStart",
            "gridRowEnd",
            "gridArea",
            "justifySelf",
            "alignSelf",
            "placeSelf",
            "order",
          ],
          tI = tR.concat([
            e0,
            e1,
            "boxSizing",
            "max" + e6,
            "max" + e9,
            "position",
            e4,
            e8,
            e8 + "Top",
            e8 + e2,
            e8 + e5,
            e8 + e3,
          ]),
          tN = function (e, t, r) {
            tH(r);
            var n = e._gsap;
            if (n.spacerIsNative) tH(n.spacerState);
            else if (e._gsap.swappedIn) {
              var i = t.parentNode;
              i && (i.insertBefore(e, t), i.removeChild(t));
            }
            e._gsap.swappedIn = !1;
          },
          tW = function (e, t, r, n) {
            if (!e._gsap.swappedIn) {
              for (var i, o = tR.length, s = t.style, a = e.style; o--; )
                s[(i = tR[o])] = r[i];
              (s.position =
                "absolute" === r.position ? "absolute" : "relative"),
                "inline" === r.display && (s.display = "inline-block"),
                (a[eQ] = a[eJ] = "auto"),
                (s.flexBasis = r.flexBasis || "auto"),
                (s.overflow = "visible"),
                (s.boxSizing = "border-box"),
                (s[e0] = tn(e, A) + "px"),
                (s[e1] = tn(e, F) + "px"),
                (s[e8] = a[e4] = a.top = a[eK] = "0"),
                tH(n),
                (a[e0] = a["max" + e6] = r[e0]),
                (a[e1] = a["max" + e9] = r[e1]),
                (a[e8] = r[e8]),
                e.parentNode !== t &&
                  (e.parentNode.insertBefore(t, e), t.appendChild(e)),
                (e._gsap.swappedIn = !0);
            }
          },
          tL = /([A-Z])/g,
          tH = function (e) {
            if (e) {
              var t,
                r,
                n = e.t.style,
                i = e.length,
                o = 0;
              for (
                (e.t._gsap || W.core.getCache(e.t)).uncache = 1;
                o < i;
                o += 2
              )
                (r = e[o + 1]),
                  (t = e[o]),
                  r
                    ? (n[t] = r)
                    : n[t] &&
                      n.removeProperty(t.replace(tL, "-$1").toLowerCase());
            }
          },
          tV = function (e) {
            for (var t = tI.length, r = e.style, n = [], i = 0; i < t; i++)
              n.push(tI[i], r[tI[i]]);
            return (n.t = e), n;
          },
          tq = function (e, t, r) {
            for (var n, i = [], o = e.length, s = r ? 8 : 0; s < o; s += 2)
              (n = e[s]), i.push(n, n in t ? t[n] : e[s + 1]);
            return (i.t = e.t), i;
          },
          tU = { left: 0, top: 0 },
          tG = function (e, t, r, n, i, o, s, a, l, c, u, f, p, d) {
            eq(e) && (e = e(a)),
              eV(e) &&
                "max" === e.substr(0, 3) &&
                (e = f + ("=" === e.charAt(4) ? td("0" + e.substr(3), r) : 0));
            var h,
              g,
              v,
              m = p ? p.time() : 0;
            if ((p && p.seek(0), isNaN(e) || (e = +e), eU(e)))
              p &&
                (e = W.utils.mapRange(
                  p.scrollTrigger.start,
                  p.scrollTrigger.end,
                  0,
                  f,
                  e
                )),
                s && tg(s, r, n, !0);
            else {
              eq(t) && (t = t(a));
              var y,
                x,
                b,
                w,
                _ = (e || "0").split(" ");
              (y = tr((v = Y(t, a) || U)) || {}).left ||
                y.top ||
                "none" !== e7(v).display ||
                ((w = v.style.display),
                (v.style.display = "block"),
                (y = tr(v)),
                w ? (v.style.display = w) : v.style.removeProperty("display")),
                (x = td(_[0], y[n.d])),
                (b = td(_[1] || "0", r)),
                (e = y[n.p] - l[n.p] - c + x + i - b),
                s && tg(s, b, n, r - b < 20 || (s._isStart && b > 20)),
                (r -= r - b);
            }
            if ((d && ((a[d] = e || -0.001), e < 0 && (e = 0)), o)) {
              var O = e + r,
                P = o._isStart;
              (h = "scroll" + n.d2),
                tg(
                  o,
                  O,
                  n,
                  (P && O > 20) ||
                    (!P &&
                      (u ? Math.max(U[h], q[h]) : o.parentNode[h]) <= O + 1)
                ),
                u &&
                  ((l = tr(s)),
                  u &&
                    (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + "px"));
            }
            return (
              p &&
                v &&
                ((h = tr(v)),
                p.seek(f),
                (g = tr(v)),
                (p._caScrollDist = h[n.p] - g[n.p]),
                (e = (e / p._caScrollDist) * f)),
              p && p.seek(m),
              p ? e : Math.round(e)
            );
          },
          tj = /(webkit|moz|length|cssText|inset)/i,
          tZ = function (e, t, r, n) {
            if (e.parentNode !== t) {
              var i,
                o,
                s = e.style;
              if (t === U) {
                for (i in ((e._stOrig = s.cssText), (o = e7(e))))
                  +i ||
                    tj.test(i) ||
                    !o[i] ||
                    "string" != typeof s[i] ||
                    "0" === i ||
                    (s[i] = o[i]);
                (s.top = r), (s.left = n);
              } else s.cssText = e._stOrig;
              (W.core.getCache(e).uncache = 1), t.appendChild(e);
            }
          },
          t$ = function (e, t, r) {
            var n = t,
              i = n;
            return function (t) {
              var o = Math.round(e());
              return (
                o !== n &&
                  o !== i &&
                  Math.abs(o - n) > 3 &&
                  Math.abs(o - i) > 3 &&
                  ((t = o), r && r()),
                (i = n),
                (n = t),
                t
              );
            };
          },
          tK = function (e, t, r) {
            var n = {};
            (n[t.p] = "+=" + r), W.set(e, n);
          },
          tJ = function (e, t) {
            var r = B(e, t),
              n = "_scroll" + t.p2,
              i = function t(i, o, s, a, l) {
                var c = t.tween,
                  u = o.onComplete,
                  f = {};
                s = s || r();
                var p = t$(r, s, function () {
                  c.kill(), (t.tween = 0);
                });
                return (
                  (l = (a && l) || 0),
                  (a = a || i - s),
                  c && c.kill(),
                  (o[n] = i),
                  (o.inherit = !1),
                  (o.modifiers = f),
                  (f[n] = function () {
                    return p(s + a * c.ratio + l * c.ratio * c.ratio);
                  }),
                  (o.onUpdate = function () {
                    y.cache++, t.tween && tX();
                  }),
                  (o.onComplete = function () {
                    (t.tween = 0), u && u.call(c);
                  }),
                  (c = t.tween = W.to(e, o))
                );
              };
            return (
              (e[n] = r),
              (r.wheelHandler = function () {
                return i.tween && i.tween.kill() && (i.tween = 0);
              }),
              ta(e, "wheel", r.wheelHandler),
              tQ.isTouch && ta(e, "touchmove", r.wheelHandler),
              i
            );
          },
          tQ = (function () {
            function e(t, r) {
              L ||
                e.register(W) ||
                console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
                eh(this),
                this.init(t, r);
            }
            return (
              (e.prototype.init = function (t, r) {
                if (
                  ((this.progress = this.start = 0),
                  this.vars && this.kill(!0, !0),
                  !ek)
                ) {
                  this.update = this.refresh = this.kill = eB;
                  return;
                }
                var n,
                  i,
                  o,
                  s,
                  a,
                  l,
                  c,
                  u,
                  f,
                  p,
                  d,
                  h,
                  g,
                  v,
                  m,
                  b,
                  w,
                  _,
                  P,
                  M,
                  C,
                  S,
                  T,
                  k,
                  E,
                  D,
                  z,
                  X,
                  R,
                  I,
                  N,
                  L,
                  G,
                  j,
                  J,
                  et,
                  en,
                  ei,
                  eo,
                  el,
                  ec,
                  eu = (t = tt(
                    eV(t) || eU(t) || t.nodeType ? { trigger: t } : t,
                    tf
                  )),
                  ef = eu.onUpdate,
                  ep = eu.toggleClass,
                  ed = eu.id,
                  eh = eu.onToggle,
                  eg = eu.onRefresh,
                  ev = eu.scrub,
                  em = eu.trigger,
                  ey = eu.pin,
                  ew = eu.pinSpacing,
                  eO = eu.invalidateOnRefresh,
                  eS = eu.anticipatePin,
                  eF = eu.onScrubComplete,
                  eY = eu.onSnapComplete,
                  ez = eu.once,
                  eX = eu.snap,
                  eI = eu.pinReparent,
                  eH = eu.pinSpacer,
                  eK = eu.containerAnimation,
                  eJ = eu.fastScrollEnd,
                  eQ = eu.preventOverlaps,
                  ts =
                    t.horizontal ||
                    (t.containerAnimation && !1 !== t.horizontal)
                      ? A
                      : F,
                  tc = !ev && 0 !== ev,
                  tp = Y(t.scroller || H),
                  tg = W.core.getCache(tp),
                  ty = eR(tp),
                  tb =
                    ("pinType" in t
                      ? t.pinType
                      : O(tp, "pinType") || (ty && "fixed")) === "fixed",
                  t_ = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                  tO = tc && t.toggleActions.split(" "),
                  tM = "markers" in t ? t.markers : tf.markers,
                  tC = ty ? 0 : parseFloat(e7(tp)["border" + ts.p2 + e6]) || 0,
                  tS = this,
                  tT =
                    t.onRefreshInit &&
                    function () {
                      return t.onRefreshInit(tS);
                    },
                  tk = eW(tp, ty, ts),
                  tE =
                    !ty || ~x.indexOf(tp)
                      ? eN(tp)
                      : function () {
                          return tU;
                        },
                  tF = 0,
                  tY = 0,
                  tB = 0,
                  tD = B(tp, ts);
                if (
                  ((tS._startClamp = tS._endClamp = !1),
                  (tS._dir = ts),
                  (eS *= 45),
                  (tS.scroller = tp),
                  (tS.scroll = eK ? eK.time.bind(eK) : tD),
                  (l = tD()),
                  (tS.vars = t),
                  (r = r || t.animation),
                  "refreshPriority" in t &&
                    ((es = 1), -9999 === t.refreshPriority && (eP = tS)),
                  (tg.tweenScroll = tg.tweenScroll || {
                    top: tJ(tp, F),
                    left: tJ(tp, A),
                  }),
                  (tS.tweenTo = o = tg.tweenScroll[ts.p]),
                  (tS.scrubDuration = function (e) {
                    (J = eU(e) && e)
                      ? j
                        ? j.duration(e)
                        : (j = W.to(r, {
                            ease: "expo",
                            totalProgress: "+=0",
                            inherit: !1,
                            duration: J,
                            paused: !0,
                            onComplete: function () {
                              return eF && eF(tS);
                            },
                          }))
                      : (j && j.progress(1).kill(), (j = 0));
                  }),
                  r &&
                    ((r.vars.lazy = !1),
                    (r._initted && !tS.isReverted) ||
                      (!1 !== r.vars.immediateRender &&
                        !1 !== t.immediateRender &&
                        r.duration() &&
                        r.render(0, !0, !0)),
                    (tS.animation = r.pause()),
                    (r.scrollTrigger = tS),
                    tS.scrubDuration(ev),
                    (L = 0),
                    ed || (ed = r.vars.id)),
                  eX &&
                    ((!eG(eX) || eX.push) && (eX = { snapTo: eX }),
                    "scrollBehavior" in U.style &&
                      W.set(ty ? [U, q] : tp, { scrollBehavior: "auto" }),
                    y.forEach(function (e) {
                      return (
                        eq(e) &&
                        e.target === (ty ? V.scrollingElement || q : tp) &&
                        (e.smooth = !1)
                      );
                    }),
                    (a = eq(eX.snapTo)
                      ? eX.snapTo
                      : "labels" === eX.snapTo
                      ? ((n = r),
                        function (e) {
                          return W.utils.snap(ti(n), e);
                        })
                      : "labelsDirectional" === eX.snapTo
                      ? ((i = r),
                        function (e, t) {
                          return to(ti(i))(e, t.direction);
                        })
                      : !1 !== eX.directional
                      ? function (e, t) {
                          return to(eX.snapTo)(
                            e,
                            eC() - tY < 500 ? 0 : t.direction
                          );
                        }
                      : W.utils.snap(eX.snapTo)),
                    (et = eG((et = eX.duration || { min: 0.1, max: 2 }))
                      ? $(et.min, et.max)
                      : $(et, et)),
                    (en = W.delayedCall(eX.delay || J / 2 || 0.1, function () {
                      var e = tD(),
                        t = eC() - tY < 500,
                        n = o.tween;
                      if (
                        (t || 10 > Math.abs(tS.getVelocity())) &&
                        !n &&
                        !ee &&
                        tF !== e
                      ) {
                        var i,
                          s,
                          l = (e - u) / b,
                          c = r && !tc ? r.totalProgress() : l,
                          p = t ? 0 : ((c - G) / (eC() - K)) * 1e3 || 0,
                          d = W.utils.clamp(-l, 1 - l, (e$(p / 2) * p) / 0.185),
                          h = l + (!1 === eX.inertia ? 0 : d),
                          g = eX,
                          v = g.onStart,
                          m = g.onInterrupt,
                          y = g.onComplete;
                        if (
                          ((i = a(h, tS)),
                          eU(i) || (i = h),
                          (s = Math.round(u + i * b)),
                          e <= f && e >= u && s !== e)
                        ) {
                          if (n && !n._initted && n.data <= e$(s - e)) return;
                          !1 === eX.inertia && (d = i - l),
                            o(
                              s,
                              {
                                duration: et(
                                  e$(
                                    (0.185 * Math.max(e$(h - c), e$(i - c))) /
                                      p /
                                      0.05 || 0
                                  )
                                ),
                                ease: eX.ease || "power3",
                                data: e$(s - e),
                                onInterrupt: function () {
                                  return en.restart(!0) && m && m(tS);
                                },
                                onComplete: function () {
                                  tS.update(),
                                    (tF = tD()),
                                    r &&
                                      (j
                                        ? j.resetTo(
                                            "totalProgress",
                                            i,
                                            r._tTime / r._tDur
                                          )
                                        : r.progress(i)),
                                    (L = G =
                                      r && !tc
                                        ? r.totalProgress()
                                        : tS.progress),
                                    eY && eY(tS),
                                    y && y(tS);
                                },
                              },
                              e,
                              d * b,
                              s - e - d * b
                            ),
                            v && v(tS, o.tween);
                        }
                      } else tS.isActive && tF !== e && en.restart(!0);
                    }).pause())),
                  ed && (tm[ed] = tS),
                  (ec =
                    (em = tS.trigger = Y(em || (!0 !== ey && ey))) &&
                    em._gsap &&
                    em._gsap.stRevert) && (ec = ec(tS)),
                  (ey = !0 === ey ? em : Y(ey)),
                  eV(ep) && (ep = { targets: em, className: ep }),
                  ey &&
                    (!1 === ew ||
                      ew === e4 ||
                      (ew =
                        (!!ew ||
                          !ey.parentNode ||
                          !ey.parentNode.style ||
                          "flex" !== e7(ey.parentNode).display) &&
                        e8),
                    (tS.pin = ey),
                    (s = W.core.getCache(ey)).spacer
                      ? (w = s.pinState)
                      : (eH &&
                          ((eH = Y(eH)) &&
                            !eH.nodeType &&
                            (eH = eH.current || eH.nativeElement),
                          (s.spacerIsNative = !!eH),
                          eH && (s.spacerState = tV(eH))),
                        (s.spacer = M = eH || V.createElement("div")),
                        M.classList.add("pin-spacer"),
                        ed && M.classList.add("pin-spacer-" + ed),
                        (s.pinState = w = tV(ey))),
                    !1 !== t.force3D && W.set(ey, { force3D: !0 }),
                    (tS.spacer = M = s.spacer),
                    (D = (N = e7(ey))[ew + ts.os2]),
                    (S = W.getProperty(ey)),
                    (T = W.quickSetter(ey, ts.a, "px")),
                    tW(ey, M, N),
                    (P = tV(ey))),
                  tM)
                ) {
                  (h = th(
                    "scroller-start",
                    ed,
                    tp,
                    ts,
                    (v = eG(tM) ? tt(tM, tu) : tu),
                    0
                  )),
                    (g = th("scroller-end", ed, tp, ts, v, 0, h)),
                    (C = h["offset" + ts.op.d2]);
                  var tX = Y(O(tp, "content") || tp);
                  (p = this.markerStart = th("start", ed, tX, ts, v, C, 0, eK)),
                    (d = this.markerEnd = th("end", ed, tX, ts, v, C, 0, eK)),
                    eK && (el = W.quickSetter([p, d], ts.a, "px")),
                    tb ||
                      (x.length && !0 === O(tp, "fixedMarkers")) ||
                      (te(ty ? U : tp),
                      W.set([h, g], { force3D: !0 }),
                      (X = W.quickSetter(h, ts.a, "px")),
                      (I = W.quickSetter(g, ts.a, "px")));
                }
                if (eK) {
                  var tR = eK.vars.onUpdate,
                    tI = eK.vars.onUpdateParams;
                  eK.eventCallback("onUpdate", function () {
                    tS.update(0, 0, 1), tR && tR.apply(eK, tI || []);
                  });
                }
                if (
                  ((tS.previous = function () {
                    return tv[tv.indexOf(tS) - 1];
                  }),
                  (tS.next = function () {
                    return tv[tv.indexOf(tS) + 1];
                  }),
                  (tS.revert = function (e, t) {
                    if (!t) return tS.kill(!0);
                    var n = !1 !== e || !tS.enabled,
                      i = Q;
                    n !== tS.isReverted &&
                      (n &&
                        ((ei = Math.max(tD(), tS.scroll.rec || 0)),
                        (tB = tS.progress),
                        (eo = r && r.progress())),
                      p &&
                        [p, d, h, g].forEach(function (e) {
                          return (e.style.display = n ? "none" : "block");
                        }),
                      n && ((Q = tS), tS.update(n)),
                      !ey ||
                        (eI && tS.isActive) ||
                        (n ? tN(ey, M, w) : tW(ey, M, e7(ey), z)),
                      n || tS.update(n),
                      (Q = i),
                      (tS.isReverted = n));
                  }),
                  (tS.refresh = function (n, i, s, a) {
                    if ((!Q && tS.enabled) || i) {
                      if (ey && n && eT) {
                        ta(e, "scrollEnd", tP);
                        return;
                      }
                      !e_ && tT && tT(tS),
                        (Q = tS),
                        o.tween && !s && (o.tween.kill(), (o.tween = 0)),
                        j && j.pause(),
                        eO && r && r.revert({ kill: !1 }).invalidate(),
                        tS.isReverted || tS.revert(!0, !0),
                        (tS._subPinOffset = !1);
                      var v,
                        y,
                        x,
                        O,
                        C,
                        T,
                        D,
                        X,
                        I,
                        N,
                        L,
                        H,
                        G,
                        Z = tk(),
                        $ = tE(),
                        K = eK ? eK.duration() : eL(tp, ts),
                        J = b <= 0.01,
                        ee = 0,
                        et = a || 0,
                        er = eG(s) ? s.end : t.end,
                        es = t.endTrigger || em,
                        el = eG(s)
                          ? s.start
                          : t.start ||
                            (0 !== t.start && em ? (ey ? "0 0" : "0 100%") : 0),
                        ec = (tS.pinnedContainer =
                          t.pinnedContainer && Y(t.pinnedContainer, tS)),
                        eu = (em && Math.max(0, tv.indexOf(tS))) || 0,
                        ef = eu;
                      for (
                        tM &&
                        eG(s) &&
                        ((H = W.getProperty(h, ts.p)),
                        (G = W.getProperty(g, ts.p)));
                        ef--;

                      )
                        (T = tv[ef]).end || T.refresh(0, 1) || (Q = tS),
                          (D = T.pin) &&
                            (D === em || D === ey || D === ec) &&
                            !T.isReverted &&
                            (N || (N = []), N.unshift(T), T.revert(!0, !0)),
                          T !== tv[ef] && (eu--, ef--);
                      for (
                        eq(el) && (el = el(tS)),
                          el = eE(el, "start", tS),
                          u =
                            tG(
                              el,
                              em,
                              Z,
                              ts,
                              tD(),
                              p,
                              h,
                              tS,
                              $,
                              tC,
                              tb,
                              K,
                              eK,
                              tS._startClamp && "_startClamp"
                            ) || (ey ? -0.001 : 0),
                          eq(er) && (er = er(tS)),
                          eV(er) &&
                            !er.indexOf("+=") &&
                            (~er.indexOf(" ")
                              ? (er = (eV(el) ? el.split(" ")[0] : "") + er)
                              : ((ee = td(er.substr(2), Z)),
                                (er = eV(el)
                                  ? el
                                  : (eK
                                      ? W.utils.mapRange(
                                          0,
                                          eK.duration(),
                                          eK.scrollTrigger.start,
                                          eK.scrollTrigger.end,
                                          u
                                        )
                                      : u) + ee),
                                (es = em))),
                          er = eE(er, "end", tS),
                          f =
                            Math.max(
                              u,
                              tG(
                                er || (es ? "100% 0" : K),
                                es,
                                Z,
                                ts,
                                tD() + ee,
                                d,
                                g,
                                tS,
                                $,
                                tC,
                                tb,
                                K,
                                eK,
                                tS._endClamp && "_endClamp"
                              )
                            ) || -0.001,
                          ee = 0,
                          ef = eu;
                        ef--;

                      )
                        (D = (T = tv[ef]).pin) &&
                          T.start - T._pinPush <= u &&
                          !eK &&
                          T.end > 0 &&
                          ((v =
                            T.end -
                            (tS._startClamp ? Math.max(0, T.start) : T.start)),
                          ((D === em && T.start - T._pinPush < u) ||
                            D === ec) &&
                            isNaN(el) &&
                            (ee += v * (1 - T.progress)),
                          D === ey && (et += v));
                      if (
                        ((u += ee),
                        (f += ee),
                        tS._startClamp && (tS._startClamp += ee),
                        tS._endClamp &&
                          !e_ &&
                          ((tS._endClamp = f || -0.001),
                          (f = Math.min(f, eL(tp, ts)))),
                        (b = f - u || ((u -= 0.01) && 0.001)),
                        J &&
                          (tB = W.utils.clamp(
                            0,
                            1,
                            W.utils.normalize(u, f, ei)
                          )),
                        (tS._pinPush = et),
                        p &&
                          ee &&
                          (((v = {})[ts.a] = "+=" + ee),
                          ec && (v[ts.p] = "-=" + tD()),
                          W.set([p, d], v)),
                        ey && !(ex && tS.end >= eL(tp, ts)))
                      )
                        (v = e7(ey)),
                          (O = ts === F),
                          (x = tD()),
                          (k = parseFloat(S(ts.a)) + et),
                          !K &&
                            f > 1 &&
                            ((L = {
                              style: (L = (ty ? V.scrollingElement || q : tp)
                                .style),
                              value: L["overflow" + ts.a.toUpperCase()],
                            }),
                            ty &&
                              "scroll" !==
                                e7(U)["overflow" + ts.a.toUpperCase()] &&
                              (L.style["overflow" + ts.a.toUpperCase()] =
                                "scroll")),
                          tW(ey, M, v),
                          (P = tV(ey)),
                          (y = tr(ey, !0)),
                          (X = tb && B(tp, O ? A : F)()),
                          ew
                            ? (((z = [ew + ts.os2, b + et + "px"]).t = M),
                              (ef = ew === e8 ? tn(ey, ts) + b + et : 0) &&
                                (z.push(ts.d, ef + "px"),
                                "auto" !== M.style.flexBasis &&
                                  (M.style.flexBasis = ef + "px")),
                              tH(z),
                              ec &&
                                tv.forEach(function (e) {
                                  e.pin === ec &&
                                    !1 !== e.vars.pinSpacing &&
                                    (e._subPinOffset = !0);
                                }),
                              tb && tD(ei))
                            : (ef = tn(ey, ts)) &&
                              "auto" !== M.style.flexBasis &&
                              (M.style.flexBasis = ef + "px"),
                          tb &&
                            (((C = {
                              top: y.top + (O ? x - u : X) + "px",
                              left: y.left + (O ? X : x - u) + "px",
                              boxSizing: "border-box",
                              position: "fixed",
                            })[e0] = C["max" + e6] =
                              Math.ceil(y.width) + "px"),
                            (C[e1] = C["max" + e9] =
                              Math.ceil(y.height) + "px"),
                            (C[e4] =
                              C[e4 + "Top"] =
                              C[e4 + e2] =
                              C[e4 + e5] =
                              C[e4 + e3] =
                                "0"),
                            (C[e8] = v[e8]),
                            (C[e8 + "Top"] = v[e8 + "Top"]),
                            (C[e8 + e2] = v[e8 + e2]),
                            (C[e8 + e5] = v[e8 + e5]),
                            (C[e8 + e3] = v[e8 + e3]),
                            (_ = tq(w, C, eI)),
                            e_ && tD(0)),
                          r
                            ? ((I = r._initted),
                              ea(1),
                              r.render(r.duration(), !0, !0),
                              (E = S(ts.a) - k + b + et),
                              (R = Math.abs(b - E) > 1),
                              tb && R && _.splice(_.length - 2, 2),
                              r.render(0, !0, !0),
                              I || r.invalidate(!0),
                              r.parent || r.totalTime(r.totalTime()),
                              ea(0))
                            : (E = b),
                          L &&
                            (L.value
                              ? (L.style["overflow" + ts.a.toUpperCase()] =
                                  L.value)
                              : L.style.removeProperty("overflow-" + ts.a));
                      else if (em && tD() && !eK)
                        for (y = em.parentNode; y && y !== U; )
                          y._pinOffset &&
                            ((u -= y._pinOffset), (f -= y._pinOffset)),
                            (y = y.parentNode);
                      N &&
                        N.forEach(function (e) {
                          return e.revert(!1, !0);
                        }),
                        (tS.start = u),
                        (tS.end = f),
                        (l = c = e_ ? ei : tD()),
                        eK || e_ || (l < ei && tD(ei), (tS.scroll.rec = 0)),
                        tS.revert(!1, !0),
                        (tY = eC()),
                        en && ((tF = -1), en.restart(!0)),
                        (Q = 0),
                        r &&
                          tc &&
                          (r._initted || eo) &&
                          r.progress() !== eo &&
                          r.progress(eo || 0, !0).render(r.time(), !0, !0),
                        (J || tB !== tS.progress || eK || eO) &&
                          (r &&
                            !tc &&
                            r.totalProgress(
                              eK && u < -0.001 && !tB
                                ? W.utils.normalize(u, f, 0)
                                : tB,
                              !0
                            ),
                          (tS.progress = J || (l - u) / b === tB ? 0 : tB)),
                        ey &&
                          ew &&
                          (M._pinOffset = Math.round(tS.progress * E)),
                        j && j.invalidate(),
                        isNaN(H) ||
                          ((H -= W.getProperty(h, ts.p)),
                          (G -= W.getProperty(g, ts.p)),
                          tK(h, ts, H),
                          tK(p, ts, H - (a || 0)),
                          tK(g, ts, G),
                          tK(d, ts, G - (a || 0))),
                        J && !e_ && tS.update(),
                        !eg || e_ || m || ((m = !0), eg(tS), (m = !1));
                    }
                  }),
                  (tS.getVelocity = function () {
                    return ((tD() - c) / (eC() - K)) * 1e3 || 0;
                  }),
                  (tS.endAnimation = function () {
                    ej(tS.callbackAnimation),
                      r &&
                        (j
                          ? j.progress(1)
                          : r.paused()
                          ? tc || ej(r, tS.direction < 0, 1)
                          : ej(r, r.reversed()));
                  }),
                  (tS.labelToScroll = function (e) {
                    return (
                      (r &&
                        r.labels &&
                        (u || tS.refresh() || u) +
                          (r.labels[e] / r.duration()) * b) ||
                      0
                    );
                  }),
                  (tS.getTrailing = function (e) {
                    var t = tv.indexOf(tS),
                      r =
                        tS.direction > 0
                          ? tv.slice(0, t).reverse()
                          : tv.slice(t + 1);
                    return (
                      eV(e)
                        ? r.filter(function (t) {
                            return t.vars.preventOverlaps === e;
                          })
                        : r
                    ).filter(function (e) {
                      return tS.direction > 0 ? e.end <= u : e.start >= f;
                    });
                  }),
                  (tS.update = function (e, t, n) {
                    if (!eK || n || e) {
                      var i,
                        s,
                        a,
                        p,
                        d,
                        g,
                        v,
                        m = !0 === e_ ? ei : tS.scroll(),
                        y = e ? 0 : (m - u) / b,
                        x = y < 0 ? 0 : y > 1 ? 1 : y || 0,
                        w = tS.progress;
                      if (
                        (t &&
                          ((c = l),
                          (l = eK ? tD() : m),
                          eX &&
                            ((G = L), (L = r && !tc ? r.totalProgress() : x))),
                        eS &&
                          ey &&
                          !Q &&
                          !eM &&
                          eT &&
                          (!x && u < m + ((m - c) / (eC() - K)) * eS
                            ? (x = 1e-4)
                            : 1 === x &&
                              f > m + ((m - c) / (eC() - K)) * eS &&
                              (x = 0.9999)),
                        x !== w && tS.enabled)
                      ) {
                        if (
                          ((p =
                            (d =
                              (i = tS.isActive = !!x && x < 1) !=
                              (!!w && w < 1)) || !!x != !!w),
                          (tS.direction = x > w ? 1 : -1),
                          (tS.progress = x),
                          p &&
                            !Q &&
                            ((s = x && !w ? 0 : 1 === x ? 1 : 1 === w ? 2 : 3),
                            tc &&
                              ((a =
                                (!d && "none" !== tO[s + 1] && tO[s + 1]) ||
                                tO[s]),
                              (v =
                                r &&
                                ("complete" === a ||
                                  "reset" === a ||
                                  a in r)))),
                          eQ &&
                            (d || v) &&
                            (v || ev || !r) &&
                            (eq(eQ)
                              ? eQ(tS)
                              : tS.getTrailing(eQ).forEach(function (e) {
                                  return e.endAnimation();
                                })),
                          !tc &&
                            (!j || Q || eM
                              ? r && r.totalProgress(x, !!(Q && (tY || e)))
                              : (j._dp._time - j._start !== j._time &&
                                  j.render(j._dp._time - j._start),
                                j.resetTo
                                  ? j.resetTo(
                                      "totalProgress",
                                      x,
                                      r._tTime / r._tDur
                                    )
                                  : ((j.vars.totalProgress = x),
                                    j.invalidate().restart()))),
                          ey)
                        ) {
                          if ((e && ew && (M.style[ew + ts.os2] = D), tb)) {
                            if (p) {
                              if (
                                ((g =
                                  !e &&
                                  x > w &&
                                  f + 1 > m &&
                                  m + 1 >= eL(tp, ts)),
                                eI)
                              ) {
                                if (!e && (i || g)) {
                                  var O = tr(ey, !0),
                                    C = m - u;
                                  tZ(
                                    ey,
                                    U,
                                    O.top + (ts === F ? C : 0) + "px",
                                    O.left + (ts === F ? 0 : C) + "px"
                                  );
                                } else tZ(ey, M);
                              }
                              tH(i || g ? _ : P),
                                (R && x < 1 && i) ||
                                  T(k + (1 !== x || g ? 0 : E));
                            }
                          } else T(eD(k + E * x));
                        }
                        !eX || o.tween || Q || eM || en.restart(!0),
                          ep &&
                            (d || (ez && x && (x < 1 || !eb))) &&
                            Z(ep.targets).forEach(function (e) {
                              return e.classList[i || ez ? "add" : "remove"](
                                ep.className
                              );
                            }),
                          !ef || tc || e || ef(tS),
                          p && !Q
                            ? (tc &&
                                (v &&
                                  ("complete" === a
                                    ? r.pause().totalProgress(1)
                                    : "reset" === a
                                    ? r.restart(!0).pause()
                                    : "restart" === a
                                    ? r.restart(!0)
                                    : r[a]()),
                                ef && ef(tS)),
                              (d || !eb) &&
                                (eh && d && eZ(tS, eh),
                                t_[s] && eZ(tS, t_[s]),
                                ez && (1 === x ? tS.kill(!1, 1) : (t_[s] = 0)),
                                !d &&
                                  t_[(s = 1 === x ? 1 : 3)] &&
                                  eZ(tS, t_[s])),
                              eJ &&
                                !i &&
                                Math.abs(tS.getVelocity()) >
                                  (eU(eJ) ? eJ : 2500) &&
                                (ej(tS.callbackAnimation),
                                j
                                  ? j.progress(1)
                                  : ej(r, "reverse" === a ? 1 : !x, 1)))
                            : tc && ef && !Q && ef(tS);
                      }
                      if (I) {
                        var S = eK
                          ? (m / eK.duration()) * (eK._caScrollDist || 0)
                          : m;
                        X(S + (h._isFlipped ? 1 : 0)), I(S);
                      }
                      el && el((-m / eK.duration()) * (eK._caScrollDist || 0));
                    }
                  }),
                  (tS.enable = function (t, r) {
                    tS.enabled ||
                      ((tS.enabled = !0),
                      ta(tp, "resize", tw),
                      ty || ta(tp, "scroll", tx),
                      tT && ta(e, "refreshInit", tT),
                      !1 !== t && ((tS.progress = tB = 0), (l = c = tF = tD())),
                      !1 !== r && tS.refresh());
                  }),
                  (tS.getTween = function (e) {
                    return e && o ? o.tween : j;
                  }),
                  (tS.setPositions = function (e, t, r, n) {
                    if (eK) {
                      var i = eK.scrollTrigger,
                        o = eK.duration(),
                        s = i.end - i.start;
                      (e = i.start + (s * e) / o), (t = i.start + (s * t) / o);
                    }
                    tS.refresh(
                      !1,
                      !1,
                      {
                        start: eA(e, r && !!tS._startClamp),
                        end: eA(t, r && !!tS._endClamp),
                      },
                      n
                    ),
                      tS.update();
                  }),
                  (tS.adjustPinSpacing = function (e) {
                    if (z && e) {
                      var t = z.indexOf(ts.d) + 1;
                      (z[t] = parseFloat(z[t]) + e + "px"),
                        (z[1] = parseFloat(z[1]) + e + "px"),
                        tH(z);
                    }
                  }),
                  (tS.disable = function (t, r) {
                    if (
                      tS.enabled &&
                      (!1 !== t && tS.revert(!0, !0),
                      (tS.enabled = tS.isActive = !1),
                      r || (j && j.pause()),
                      (ei = 0),
                      s && (s.uncache = 1),
                      tT && tl(e, "refreshInit", tT),
                      en &&
                        (en.pause(),
                        o.tween && o.tween.kill() && (o.tween = 0)),
                      !ty)
                    ) {
                      for (var n = tv.length; n--; )
                        if (tv[n].scroller === tp && tv[n] !== tS) return;
                      tl(tp, "resize", tw), ty || tl(tp, "scroll", tx);
                    }
                  }),
                  (tS.kill = function (e, n) {
                    tS.disable(e, n), j && !n && j.kill(), ed && delete tm[ed];
                    var i = tv.indexOf(tS);
                    i >= 0 && tv.splice(i, 1),
                      i === er && tz > 0 && er--,
                      (i = 0),
                      tv.forEach(function (e) {
                        return e.scroller === tS.scroller && (i = 1);
                      }),
                      i || e_ || (tS.scroll.rec = 0),
                      r &&
                        ((r.scrollTrigger = null),
                        e && r.revert({ kill: !1 }),
                        n || r.kill()),
                      p &&
                        [p, d, h, g].forEach(function (e) {
                          return e.parentNode && e.parentNode.removeChild(e);
                        }),
                      eP === tS && (eP = 0),
                      ey &&
                        (s && (s.uncache = 1),
                        (i = 0),
                        tv.forEach(function (e) {
                          return e.pin === ey && i++;
                        }),
                        i || (s.spacer = 0)),
                      t.onKill && t.onKill(tS);
                  }),
                  tv.push(tS),
                  tS.enable(!1, !1),
                  ec && ec(tS),
                  r && r.add && !b)
                ) {
                  var tL = tS.update;
                  (tS.update = function () {
                    (tS.update = tL), u || f || tS.refresh();
                  }),
                    W.delayedCall(0.01, tS.update),
                    (b = 0.01),
                    (u = f = 0);
                } else tS.refresh();
                ey && tA();
              }),
              (e.register = function (t) {
                return (
                  L ||
                    ((W = t || eX()),
                    ez() && window.document && e.enable(),
                    (L = ek)),
                  L
                );
              }),
              (e.defaults = function (e) {
                if (e) for (var t in e) tf[t] = e[t];
                return tf;
              }),
              (e.disable = function (e, t) {
                (ek = 0),
                  tv.forEach(function (r) {
                    return r[t ? "kill" : "disable"](e);
                  }),
                  tl(H, "wheel", tx),
                  tl(V, "scroll", tx),
                  clearInterval(J),
                  tl(V, "touchcancel", eB),
                  tl(U, "touchstart", eB),
                  ts(tl, V, "pointerdown,touchstart,mousedown", eF),
                  ts(tl, V, "pointerup,touchend,mouseup", eY),
                  j.kill(),
                  eH(tl);
                for (var r = 0; r < y.length; r += 3)
                  tc(tl, y[r], y[r + 1]), tc(tl, y[r], y[r + 2]);
              }),
              (e.enable = function () {
                if (
                  ((H = window),
                  (q = (V = document).documentElement),
                  (U = V.body),
                  W &&
                    ((Z = W.utils.toArray),
                    ($ = W.utils.clamp),
                    (eh = W.core.context || eB),
                    (ea = W.core.suppressOverwrites || eB),
                    (eg = H.history.scrollRestoration || "auto"),
                    (tD = H.pageYOffset),
                    W.core.globals("ScrollTrigger", e),
                    U))
                ) {
                  (ek = 1),
                    ((ev = document.createElement("div")).style.height =
                      "100vh"),
                    (ev.style.position = "absolute"),
                    tF(),
                    (function e() {
                      return ek && requestAnimationFrame(e);
                    })(),
                    N.register(W),
                    (e.isTouch = N.isTouch),
                    (ed =
                      N.isTouch &&
                      /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                    (eu = 1 === N.isTouch),
                    ta(H, "wheel", tx),
                    (G = [H, V, q, U]),
                    W.matchMedia
                      ? ((e.matchMedia = function (e) {
                          var t,
                            r = W.matchMedia();
                          for (t in e) r.add(t, e[t]);
                          return r;
                        }),
                        W.addEventListener("matchMediaInit", function () {
                          return tT();
                        }),
                        W.addEventListener("matchMediaRevert", function () {
                          return tS();
                        }),
                        W.addEventListener("matchMedia", function () {
                          tB(0, 1), tM("matchMedia");
                        }),
                        W.matchMedia("(orientation: portrait)", function () {
                          return tb(), tb;
                        }))
                      : console.warn("Requires GSAP 3.11.0 or later"),
                    tb(),
                    ta(V, "scroll", tx);
                  var t,
                    r,
                    n = U.style,
                    i = n.borderTopStyle,
                    o = W.core.Animation.prototype;
                  for (
                    o.revert ||
                      Object.defineProperty(o, "revert", {
                        value: function () {
                          return this.time(-0.01, !0);
                        },
                      }),
                      n.borderTopStyle = "solid",
                      t = tr(U),
                      F.m = Math.round(t.top + F.sc()) || 0,
                      A.m = Math.round(t.left + A.sc()) || 0,
                      i
                        ? (n.borderTopStyle = i)
                        : n.removeProperty("border-top-style"),
                      J = setInterval(ty, 250),
                      W.delayedCall(0.5, function () {
                        return (eM = 0);
                      }),
                      ta(V, "touchcancel", eB),
                      ta(U, "touchstart", eB),
                      ts(ta, V, "pointerdown,touchstart,mousedown", eF),
                      ts(ta, V, "pointerup,touchend,mouseup", eY),
                      et = W.utils.checkPrefix("transform"),
                      tI.push(et),
                      L = eC(),
                      j = W.delayedCall(0.2, tB).pause(),
                      eo = [
                        V,
                        "visibilitychange",
                        function () {
                          var e = H.innerWidth,
                            t = H.innerHeight;
                          V.hidden
                            ? ((en = e), (ei = t))
                            : (en !== e || ei !== t) && tw();
                        },
                        V,
                        "DOMContentLoaded",
                        tB,
                        H,
                        "load",
                        tB,
                        H,
                        "resize",
                        tw,
                      ],
                      eH(ta),
                      tv.forEach(function (e) {
                        return e.enable(0, 1);
                      }),
                      r = 0;
                    r < y.length;
                    r += 3
                  )
                    tc(tl, y[r], y[r + 1]), tc(tl, y[r], y[r + 2]);
                }
              }),
              (e.config = function (t) {
                "limitCallbacks" in t && (eb = !!t.limitCallbacks);
                var r = t.syncInterval;
                (r && clearInterval(J)) || ((J = r) && setInterval(ty, r)),
                  "ignoreMobileResize" in t &&
                    (eu = 1 === e.isTouch && t.ignoreMobileResize),
                  "autoRefreshEvents" in t &&
                    (eH(tl) || eH(ta, t.autoRefreshEvents || "none"),
                    (el = -1 === (t.autoRefreshEvents + "").indexOf("resize")));
              }),
              (e.scrollerProxy = function (e, t) {
                var r = Y(e),
                  n = y.indexOf(r),
                  i = eR(r);
                ~n && y.splice(n, i ? 6 : 2),
                  t && (i ? x.unshift(H, t, U, t, q, t) : x.unshift(r, t));
              }),
              (e.clearMatchMedia = function (e) {
                tv.forEach(function (t) {
                  return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
                });
              }),
              (e.isInViewport = function (e, t, r) {
                var n = (eV(e) ? Y(e) : e).getBoundingClientRect(),
                  i = n[r ? e0 : e1] * t || 0;
                return r
                  ? n.right - i > 0 && n.left + i < H.innerWidth
                  : n.bottom - i > 0 && n.top + i < H.innerHeight;
              }),
              (e.positionInViewport = function (e, t, r) {
                eV(e) && (e = Y(e));
                var n = e.getBoundingClientRect(),
                  i = n[r ? e0 : e1],
                  o =
                    null == t
                      ? i / 2
                      : t in tp
                      ? tp[t] * i
                      : ~t.indexOf("%")
                      ? (parseFloat(t) * i) / 100
                      : parseFloat(t) || 0;
                return r
                  ? (n.left + o) / H.innerWidth
                  : (n.top + o) / H.innerHeight;
              }),
              (e.killAll = function (e) {
                if (
                  (tv.slice(0).forEach(function (e) {
                    return "ScrollSmoother" !== e.vars.id && e.kill();
                  }),
                  !0 !== e)
                ) {
                  var t = t_.killAll || [];
                  (t_ = {}),
                    t.forEach(function (e) {
                      return e();
                    });
                }
              }),
              e
            );
          })();
        (tQ.version = "3.12.5"),
          (tQ.saveStyles = function (e) {
            return e
              ? Z(e).forEach(function (e) {
                  if (e && e.style) {
                    var t = tC.indexOf(e);
                    t >= 0 && tC.splice(t, 5),
                      tC.push(
                        e,
                        e.style.cssText,
                        e.getBBox && e.getAttribute("transform"),
                        W.core.getCache(e),
                        eh()
                      );
                  }
                })
              : tC;
          }),
          (tQ.revert = function (e, t) {
            return tT(!e, t);
          }),
          (tQ.create = function (e, t) {
            return new tQ(e, t);
          }),
          (tQ.refresh = function (e) {
            return e ? tw() : (L || tQ.register()) && tB(!0);
          }),
          (tQ.update = function (e) {
            return ++y.cache && tX(!0 === e ? 2 : 0);
          }),
          (tQ.clearScrollMemory = tk),
          (tQ.maxScroll = function (e, t) {
            return eL(e, t ? A : F);
          }),
          (tQ.getScrollFunc = function (e, t) {
            return B(Y(e), t ? A : F);
          }),
          (tQ.getById = function (e) {
            return tm[e];
          }),
          (tQ.getAll = function () {
            return tv.filter(function (e) {
              return "ScrollSmoother" !== e.vars.id;
            });
          }),
          (tQ.isScrolling = function () {
            return !!eT;
          }),
          (tQ.snapDirectional = to),
          (tQ.addEventListener = function (e, t) {
            var r = t_[e] || (t_[e] = []);
            ~r.indexOf(t) || r.push(t);
          }),
          (tQ.removeEventListener = function (e, t) {
            var r = t_[e],
              n = r && r.indexOf(t);
            n >= 0 && r.splice(n, 1);
          }),
          (tQ.batch = function (e, t) {
            var r,
              n = [],
              i = {},
              o = t.interval || 0.016,
              s = t.batchMax || 1e9,
              a = function (e, t) {
                var r = [],
                  n = [],
                  i = W.delayedCall(o, function () {
                    t(r, n), (r = []), (n = []);
                  }).pause();
                return function (e) {
                  r.length || i.restart(!0),
                    r.push(e.trigger),
                    n.push(e),
                    s <= r.length && i.progress(1);
                };
              };
            for (r in t)
              i[r] =
                "on" === r.substr(0, 2) && eq(t[r]) && "onRefreshInit" !== r
                  ? a(r, t[r])
                  : t[r];
            return (
              eq(s) &&
                ((s = s()),
                ta(tQ, "refresh", function () {
                  return (s = t.batchMax());
                })),
              Z(e).forEach(function (e) {
                var t = {};
                for (r in i) t[r] = i[r];
                (t.trigger = e), n.push(tQ.create(t));
              }),
              n
            );
          });
        var t0,
          t1 = function (e, t, r, n) {
            return (
              t > n ? e(n) : t < 0 && e(0),
              r > n ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
            );
          },
          t2 = function e(t, r) {
            !0 === r
              ? t.style.removeProperty("touch-action")
              : (t.style.touchAction =
                  !0 === r
                    ? "auto"
                    : r
                    ? "pan-" + r + (N.isTouch ? " pinch-zoom" : "")
                    : "none"),
              t === q && e(U, r);
          },
          t3 = { auto: 1, scroll: 1 },
          t5 = function (e) {
            var t,
              r = e.event,
              n = e.target,
              i = e.axis,
              o = (r.changedTouches ? r.changedTouches[0] : r).target,
              s = o._gsap || W.core.getCache(o),
              a = eC();
            if (!s._isScrollT || a - s._isScrollT > 2e3) {
              for (
                ;
                o &&
                o !== U &&
                ((o.scrollHeight <= o.clientHeight &&
                  o.scrollWidth <= o.clientWidth) ||
                  !(t3[(t = e7(o)).overflowY] || t3[t.overflowX]));

              )
                o = o.parentNode;
              (s._isScroll =
                o &&
                o !== n &&
                !eR(o) &&
                (t3[(t = e7(o)).overflowY] || t3[t.overflowX])),
                (s._isScrollT = a);
            }
            (s._isScroll || "x" === i) &&
              (r.stopPropagation(), (r._gsapAllow = !0));
          },
          t8 = function (e, t, r, n) {
            return N.create({
              target: e,
              capture: !0,
              debounce: !1,
              lockAxis: !0,
              type: t,
              onWheel: (n = n && t5),
              onPress: n,
              onDrag: n,
              onScroll: n,
              onEnable: function () {
                return r && ta(V, N.eventTypes[0], t6, !1, !0);
              },
              onDisable: function () {
                return tl(V, N.eventTypes[0], t6, !0);
              },
            });
          },
          t4 = /(input|label|select|textarea)/i,
          t6 = function (e) {
            var t = t4.test(e.target.tagName);
            (t || t0) && ((e._gsapAllow = !0), (t0 = t));
          },
          t9 = function (e) {
            eG(e) || (e = {}),
              (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
              e.type || (e.type = "wheel,touch"),
              (e.debounce = !!e.debounce),
              (e.id = e.id || "normalizer");
            var t,
              r,
              n,
              i,
              o,
              s,
              a,
              l,
              c = e,
              u = c.normalizeScrollX,
              f = c.momentum,
              p = c.allowNestedScroll,
              d = c.onRelease,
              h = Y(e.target) || q,
              g = W.core.globals().ScrollSmoother,
              v = g && g.get(),
              m =
                ed &&
                ((e.content && Y(e.content)) ||
                  (v && !1 !== e.content && !v.smooth() && v.content())),
              x = B(h, F),
              b = B(h, A),
              w = 1,
              _ =
                (N.isTouch && H.visualViewport
                  ? H.visualViewport.scale * H.visualViewport.width
                  : H.outerWidth) / H.innerWidth,
              O = 0,
              P = eq(f)
                ? function () {
                    return f(t);
                  }
                : function () {
                    return f || 2.8;
                  },
              M = t8(h, e.type, !0, p),
              C = function () {
                return (i = !1);
              },
              S = eB,
              T = eB,
              k = function () {
                (T = $(ed ? 1 : 0, (r = eL(h, F)))),
                  u && (S = $(0, eL(h, A))),
                  (n = tE);
              },
              E = function () {
                (m._gsap.y = eD(parseFloat(m._gsap.y) + x.offset) + "px"),
                  (m.style.transform =
                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                    parseFloat(m._gsap.y) +
                    ", 0, 1)"),
                  (x.offset = x.cacheID = 0);
              },
              D = function () {
                if (i) {
                  requestAnimationFrame(C);
                  var e = eD(t.deltaY / 2),
                    r = T(x.v - e);
                  if (m && r !== x.v + x.offset) {
                    x.offset = r - x.v;
                    var n = eD((parseFloat(m && m._gsap.y) || 0) - x.offset);
                    (m.style.transform =
                      "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                      n +
                      ", 0, 1)"),
                      (m._gsap.y = n + "px"),
                      (x.cacheID = y.cache),
                      tX();
                  }
                  return !0;
                }
                x.offset && E(), (i = !0);
              },
              z = function () {
                k(),
                  o.isActive() &&
                    o.vars.scrollY > r &&
                    (x() > r ? o.progress(1) && x(r) : o.resetTo("scrollY", r));
              };
            return (
              m && W.set(m, { y: "+=0" }),
              (e.ignoreCheck = function (e) {
                return (
                  (ed && "touchmove" === e.type && D()) ||
                  (w > 1.05 && "touchstart" !== e.type) ||
                  t.isGesturing ||
                  (e.touches && e.touches.length > 1)
                );
              }),
              (e.onPress = function () {
                i = !1;
                var e = w;
                (w = eD(
                  ((H.visualViewport && H.visualViewport.scale) || 1) / _
                )),
                  o.pause(),
                  e !== w && t2(h, w > 1.01 || (!u && "x")),
                  (s = b()),
                  (a = x()),
                  k(),
                  (n = tE);
              }),
              (e.onRelease = e.onGestureStart =
                function (e, t) {
                  if ((x.offset && E(), t)) {
                    y.cache++;
                    var n,
                      i,
                      s = P();
                    u &&
                      ((i = (n = b()) + -(0.05 * s * e.velocityX) / 0.227),
                      (s *= t1(b, n, i, eL(h, A))),
                      (o.vars.scrollX = S(i))),
                      (i = (n = x()) + -(0.05 * s * e.velocityY) / 0.227),
                      (s *= t1(x, n, i, eL(h, F))),
                      (o.vars.scrollY = T(i)),
                      o.invalidate().duration(s).play(0.01),
                      ((ed && o.vars.scrollY >= r) || n >= r - 1) &&
                        W.to({}, { onUpdate: z, duration: s });
                  } else l.restart(!0);
                  d && d(e);
                }),
              (e.onWheel = function () {
                o._ts && o.pause(), eC() - O > 1e3 && ((n = 0), (O = eC()));
              }),
              (e.onChange = function (e, t, r, i, o) {
                if (
                  (tE !== n && k(),
                  t &&
                    u &&
                    b(S(i[2] === t ? s + (e.startX - e.x) : b() + t - i[1])),
                  r)
                ) {
                  x.offset && E();
                  var l = o[2] === r,
                    c = l ? a + e.startY - e.y : x() + r - o[1],
                    f = T(c);
                  l && c !== f && (a += f - c), x(f);
                }
                (r || t) && tX();
              }),
              (e.onEnable = function () {
                t2(h, !u && "x"),
                  tQ.addEventListener("refresh", z),
                  ta(H, "resize", z),
                  x.smooth &&
                    ((x.target.style.scrollBehavior = "auto"),
                    (x.smooth = b.smooth = !1)),
                  M.enable();
              }),
              (e.onDisable = function () {
                t2(h, !0),
                  tl(H, "resize", z),
                  tQ.removeEventListener("refresh", z),
                  M.kill();
              }),
              (e.lockAxis = !1 !== e.lockAxis),
              ((t = new N(e)).iOS = ed),
              ed && !x() && x(1),
              ed && W.ticker.add(eB),
              (l = t._dc),
              (o = W.to(t, {
                ease: "power4",
                paused: !0,
                inherit: !1,
                scrollX: u ? "+=0.1" : "+=0",
                scrollY: "+=0.1",
                modifiers: {
                  scrollY: t$(x, x(), function () {
                    return o.pause();
                  }),
                },
                onUpdate: tX,
                onComplete: l.vars.onComplete,
              })),
              t
            );
          };
        (tQ.sort = function (e) {
          return tv.sort(
            e ||
              function (e, t) {
                return (
                  -1e6 * (e.vars.refreshPriority || 0) +
                  e.start -
                  (t.start + -1e6 * (t.vars.refreshPriority || 0))
                );
              }
          );
        }),
          (tQ.observe = function (e) {
            return new N(e);
          }),
          (tQ.normalizeScroll = function (e) {
            if (void 0 === e) return ec;
            if (!0 === e && ec) return ec.enable();
            if (!1 === e) {
              ec && ec.kill(), (ec = e);
              return;
            }
            var t = e instanceof N ? e : t9(e);
            return (
              ec && ec.target === t.target && ec.kill(),
              eR(t.target) && (ec = t),
              t
            );
          }),
          (tQ.core = {
            _getVelocityProp: D,
            _inputObserver: t8,
            _scrollers: y,
            _proxies: x,
            bridge: {
              ss: function () {
                eT || tM("scrollStart"), (eT = eC());
              },
              ref: function () {
                return Q;
              },
            },
          }),
          eX() && W.registerPlugin(tQ),
          (e.ScrollTrigger = tQ),
          (e.default = tQ),
          "undefined" == typeof window || window !== e
            ? Object.defineProperty(e, "__esModule", { value: !0 })
            : delete window.default;
      })(t);
    },
    990: function (e, t, r) {
      "use strict";
      r.d(t, {
        p8: function () {
          return eO;
        },
      });
      var n,
        i,
        o,
        s,
        a,
        l,
        c,
        u,
        f,
        p,
        d = r(5317),
        h = {},
        g = 180 / Math.PI,
        v = Math.PI / 180,
        m = Math.atan2,
        y = /([A-Z])/g,
        x = /(left|right|width|margin|padding|x)/i,
        b = /[\s,\(]\S/,
        w = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity",
        },
        _ = function (e, t) {
          return t.set(
            t.t,
            t.p,
            Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
            t
          );
        },
        O = function (e, t) {
          return t.set(
            t.t,
            t.p,
            1 === e ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
            t
          );
        },
        P = function (e, t) {
          return t.set(
            t.t,
            t.p,
            e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
            t
          );
        },
        M = function (e, t) {
          var r = t.s + t.c * e;
          t.set(t.t, t.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + t.u, t);
        },
        C = function (e, t) {
          return t.set(t.t, t.p, e ? t.e : t.b, t);
        },
        S = function (e, t) {
          return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
        },
        T = function (e, t, r) {
          return (e.style[t] = r);
        },
        k = function (e, t, r) {
          return e.style.setProperty(t, r);
        },
        E = function (e, t, r) {
          return (e._gsap[t] = r);
        },
        A = function (e, t, r) {
          return (e._gsap.scaleX = e._gsap.scaleY = r);
        },
        F = function (e, t, r, n, i) {
          var o = e._gsap;
          (o.scaleX = o.scaleY = r), o.renderTransform(i, o);
        },
        Y = function (e, t, r, n, i) {
          var o = e._gsap;
          (o[t] = r), o.renderTransform(i, o);
        },
        B = "transform",
        D = B + "Origin",
        z = function e(t, r) {
          var n = this,
            i = this.target,
            o = i.style,
            s = i._gsap;
          if (t in h && o) {
            if (((this.tfm = this.tfm || {}), "transform" === t))
              return w.transform.split(",").forEach(function (t) {
                return e.call(n, t, r);
              });
            if (
              (~(t = w[t] || t).indexOf(",")
                ? t.split(",").forEach(function (e) {
                    return (n.tfm[e] = ee(i, e));
                  })
                : (this.tfm[t] = s.x ? s[t] : ee(i, t)),
              t === D && (this.tfm.zOrigin = s.zOrigin),
              this.props.indexOf(B) >= 0)
            )
              return;
            s.svg &&
              ((this.svgo = i.getAttribute("data-svg-origin")),
              this.props.push(D, r, "")),
              (t = B);
          }
          (o || r) && this.props.push(t, r, o[t]);
        },
        X = function (e) {
          e.translate &&
            (e.removeProperty("translate"),
            e.removeProperty("scale"),
            e.removeProperty("rotate"));
        },
        R = function () {
          var e,
            t,
            r = this.props,
            n = this.target,
            i = n.style,
            o = n._gsap;
          for (e = 0; e < r.length; e += 3)
            r[e + 1]
              ? (n[r[e]] = r[e + 2])
              : r[e + 2]
              ? (i[r[e]] = r[e + 2])
              : i.removeProperty(
                  "--" === r[e].substr(0, 2)
                    ? r[e]
                    : r[e].replace(y, "-$1").toLowerCase()
                );
          if (this.tfm) {
            for (t in this.tfm) o[t] = this.tfm[t];
            o.svg &&
              (o.renderTransform(),
              n.setAttribute("data-svg-origin", this.svgo || "")),
              ((e = f()) && e.isStart) ||
                i[B] ||
                (X(i),
                o.zOrigin &&
                  i[D] &&
                  ((i[D] += " " + o.zOrigin + "px"),
                  (o.zOrigin = 0),
                  o.renderTransform()),
                (o.uncache = 1));
          }
        },
        I = function (e, t) {
          var r = { target: e, props: [], revert: R, save: z };
          return (
            e._gsap || d.p8.core.getCache(e),
            t &&
              t.split(",").forEach(function (e) {
                return r.save(e);
              }),
            r
          );
        },
        N = function (e, t) {
          var r = s.createElementNS
            ? s.createElementNS(
                (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
                e
              )
            : s.createElement(e);
          return r && r.style ? r : s.createElement(e);
        },
        W = function e(t, r, n) {
          var i = getComputedStyle(t);
          return (
            i[r] ||
            i.getPropertyValue(r.replace(y, "-$1").toLowerCase()) ||
            i.getPropertyValue(r) ||
            (!n && e(t, H(r) || r, 1)) ||
            ""
          );
        },
        L = "O,Moz,ms,Ms,Webkit".split(","),
        H = function (e, t, r) {
          var n = (t || c).style,
            i = 5;
          if (e in n && !r) return e;
          for (
            e = e.charAt(0).toUpperCase() + e.substr(1);
            i-- && !(L[i] + e in n);

          );
          return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? L[i] : "") + e;
        },
        V = function () {
          "undefined" != typeof window &&
            window.document &&
            ((a = (s = window.document).documentElement),
            (c = N("div") || { style: {} }),
            N("div"),
            (D = (B = H(B)) + "Origin"),
            (c.style.cssText =
              "border-width:0;line-height:0;position:absolute;padding:0"),
            (p = !!H("perspective")),
            (f = d.p8.core.reverting),
            (l = 1));
        },
        q = function e(t) {
          var r,
            n = N(
              "svg",
              (this.ownerSVGElement &&
                this.ownerSVGElement.getAttribute("xmlns")) ||
                "http://www.w3.org/2000/svg"
            ),
            i = this.parentNode,
            o = this.nextSibling,
            s = this.style.cssText;
          if (
            (a.appendChild(n),
            n.appendChild(this),
            (this.style.display = "block"),
            t)
          )
            try {
              (r = this.getBBox()),
                (this._gsapBBox = this.getBBox),
                (this.getBBox = e);
            } catch (e) {}
          else this._gsapBBox && (r = this._gsapBBox());
          return (
            i && (o ? i.insertBefore(this, o) : i.appendChild(this)),
            a.removeChild(n),
            (this.style.cssText = s),
            r
          );
        },
        U = function (e, t) {
          for (var r = t.length; r--; )
            if (e.hasAttribute(t[r])) return e.getAttribute(t[r]);
        },
        G = function (e) {
          var t;
          try {
            t = e.getBBox();
          } catch (r) {
            t = q.call(e, !0);
          }
          return (
            (t && (t.width || t.height)) ||
              e.getBBox === q ||
              (t = q.call(e, !0)),
            !t || t.width || t.x || t.y
              ? t
              : {
                  x: +U(e, ["x", "cx", "x1"]) || 0,
                  y: +U(e, ["y", "cy", "y1"]) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        j = function (e) {
          return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && G(e));
        },
        Z = function (e, t) {
          if (t) {
            var r,
              n = e.style;
            t in h && t !== D && (t = B),
              n.removeProperty
                ? (("ms" === (r = t.substr(0, 2)) ||
                    "webkit" === t.substr(0, 6)) &&
                    (t = "-" + t),
                  n.removeProperty(
                    "--" === r ? t : t.replace(y, "-$1").toLowerCase()
                  ))
                : n.removeAttribute(t);
          }
        },
        $ = function (e, t, r, n, i, o) {
          var s = new d.Fo(e._pt, t, r, 0, 1, o ? S : C);
          return (e._pt = s), (s.b = n), (s.e = i), e._props.push(r), s;
        },
        K = { deg: 1, rad: 1, turn: 1 },
        J = { grid: 1, flex: 1 },
        Q = function e(t, r, n, i) {
          var o,
            a,
            l,
            u,
            f = parseFloat(n) || 0,
            p = (n + "").trim().substr((f + "").length) || "px",
            g = c.style,
            v = x.test(r),
            m = "svg" === t.tagName.toLowerCase(),
            y = (m ? "client" : "offset") + (v ? "Width" : "Height"),
            b = "px" === i,
            w = "%" === i;
          if (i === p || !f || K[i] || K[p]) return f;
          if (
            ("px" === p || b || (f = e(t, r, n, "px")),
            (u = t.getCTM && j(t)),
            (w || "%" === p) && (h[r] || ~r.indexOf("adius")))
          )
            return (
              (o = u ? t.getBBox()[v ? "width" : "height"] : t[y]),
              (0, d.Pr)(w ? (f / o) * 100 : (f / 100) * o)
            );
          if (
            ((g[v ? "width" : "height"] = 100 + (b ? p : i)),
            (a =
              ~r.indexOf("adius") || ("em" === i && t.appendChild && !m)
                ? t
                : t.parentNode),
            u && (a = (t.ownerSVGElement || {}).parentNode),
            (a && a !== s && a.appendChild) || (a = s.body),
            (l = a._gsap) &&
              w &&
              l.width &&
              v &&
              l.time === d.xr.time &&
              !l.uncache)
          )
            return (0, d.Pr)((f / l.width) * 100);
          if (w && ("height" === r || "width" === r)) {
            var _ = t.style[r];
            (t.style[r] = 100 + i), (o = t[y]), _ ? (t.style[r] = _) : Z(t, r);
          } else
            (w || "%" === p) &&
              !J[W(a, "display")] &&
              (g.position = W(t, "position")),
              a === t && (g.position = "static"),
              a.appendChild(c),
              (o = c[y]),
              a.removeChild(c),
              (g.position = "absolute");
          return (
            v && w && (((l = (0, d.DY)(a)).time = d.xr.time), (l.width = a[y])),
            (0, d.Pr)(b ? (o * f) / 100 : o && f ? (100 / o) * f : 0)
          );
        },
        ee = function (e, t, r, n) {
          var i;
          return (
            l || V(),
            t in w &&
              "transform" !== t &&
              ~(t = w[t]).indexOf(",") &&
              (t = t.split(",")[0]),
            h[t] && "transform" !== t
              ? ((i = ep(e, n)),
                (i =
                  "transformOrigin" !== t
                    ? i[t]
                    : i.svg
                    ? i.origin
                    : ed(W(e, D)) + " " + i.zOrigin + "px"))
              : (!(i = e.style[t]) ||
                  "auto" === i ||
                  n ||
                  ~(i + "").indexOf("calc(")) &&
                (i =
                  (eo[t] && eo[t](e, t, r)) ||
                  W(e, t) ||
                  (0, d.Ok)(e, t) ||
                  ("opacity" === t ? 1 : 0)),
            r && !~(i + "").trim().indexOf(" ") ? Q(e, t, i, r) + r : i
          );
        },
        et = function (e, t, r, n) {
          if (!r || "none" === r) {
            var i = H(t, e, 1),
              o = i && W(e, i, 1);
            o && o !== r
              ? ((t = i), (r = o))
              : "borderColor" === t && (r = W(e, "borderTopColor"));
          }
          var s,
            a,
            l,
            c,
            u,
            f,
            p,
            h,
            g,
            v,
            m,
            y = new d.Fo(this._pt, e.style, t, 0, 1, d.Ks),
            x = 0,
            b = 0;
          if (
            ((y.b = r),
            (y.e = n),
            (r += ""),
            "auto" == (n += "") &&
              ((f = e.style[t]),
              (e.style[t] = n),
              (n = W(e, t) || n),
              f ? (e.style[t] = f) : Z(e, t)),
            (s = [r, n]),
            (0, d.kr)(s),
            (r = s[0]),
            (n = s[1]),
            (l = r.match(d.d4) || []),
            (n.match(d.d4) || []).length)
          ) {
            for (; (a = d.d4.exec(n)); )
              (p = a[0]),
                (g = n.substring(x, a.index)),
                u
                  ? (u = (u + 1) % 5)
                  : ("rgba(" === g.substr(-5) || "hsla(" === g.substr(-5)) &&
                    (u = 1),
                p !== (f = l[b++] || "") &&
                  ((c = parseFloat(f) || 0),
                  (m = f.substr((c + "").length)),
                  "=" === p.charAt(1) && (p = (0, d.cy)(c, p) + m),
                  (h = parseFloat(p)),
                  (v = p.substr((h + "").length)),
                  (x = d.d4.lastIndex - v.length),
                  v ||
                    ((v = v || d.Fc.units[t] || m),
                    x !== n.length || ((n += v), (y.e += v))),
                  m !== v && (c = Q(e, t, f, v) || 0),
                  (y._pt = {
                    _next: y._pt,
                    p: g || 1 === b ? g : ",",
                    s: c,
                    c: h - c,
                    m: (u && u < 4) || "zIndex" === t ? Math.round : 0,
                  }));
            y.c = x < n.length ? n.substring(x, n.length) : "";
          } else y.r = "display" === t && "none" === n ? S : C;
          return d.bQ.test(n) && (y.e = 0), (this._pt = y), y;
        },
        er = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%",
        },
        en = function (e) {
          var t = e.split(" "),
            r = t[0],
            n = t[1] || "50%";
          return (
            ("top" === r || "bottom" === r || "left" === n || "right" === n) &&
              ((e = r), (r = n), (n = e)),
            (t[0] = er[r] || r),
            (t[1] = er[n] || n),
            t.join(" ")
          );
        },
        ei = function (e, t) {
          if (t.tween && t.tween._time === t.tween._dur) {
            var r,
              n,
              i,
              o = t.t,
              s = o.style,
              a = t.u,
              l = o._gsap;
            if ("all" === a || !0 === a) (s.cssText = ""), (n = 1);
            else
              for (i = (a = a.split(",")).length; --i > -1; )
                h[(r = a[i])] &&
                  ((n = 1), (r = "transformOrigin" === r ? D : B)),
                  Z(o, r);
            n &&
              (Z(o, B),
              l &&
                (l.svg && o.removeAttribute("transform"),
                ep(o, 1),
                (l.uncache = 1),
                X(s)));
          }
        },
        eo = {
          clearProps: function (e, t, r, n, i) {
            if ("isFromStart" !== i.data) {
              var o = (e._pt = new d.Fo(e._pt, t, r, 0, 0, ei));
              return (
                (o.u = n), (o.pr = -10), (o.tween = i), e._props.push(r), 1
              );
            }
          },
        },
        es = [1, 0, 0, 1, 0, 0],
        ea = {},
        el = function (e) {
          return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e;
        },
        ec = function (e) {
          var t = W(e, B);
          return el(t) ? es : t.substr(7).match(d.SI).map(d.Pr);
        },
        eu = function (e, t) {
          var r,
            n,
            i,
            o,
            s = e._gsap || (0, d.DY)(e),
            l = e.style,
            c = ec(e);
          return s.svg && e.getAttribute("transform")
            ? "1,0,0,1,0,0" ===
              (c = [
                (i = e.transform.baseVal.consolidate().matrix).a,
                i.b,
                i.c,
                i.d,
                i.e,
                i.f,
              ]).join(",")
              ? es
              : c
            : (c !== es ||
                e.offsetParent ||
                e === a ||
                s.svg ||
                ((i = l.display),
                (l.display = "block"),
                ((r = e.parentNode) && e.offsetParent) ||
                  ((o = 1), (n = e.nextElementSibling), a.appendChild(e)),
                (c = ec(e)),
                i ? (l.display = i) : Z(e, "display"),
                o &&
                  (n
                    ? r.insertBefore(e, n)
                    : r
                    ? r.appendChild(e)
                    : a.removeChild(e))),
              t && c.length > 6 ? [c[0], c[1], c[4], c[5], c[12], c[13]] : c);
        },
        ef = function (e, t, r, n, i, o) {
          var s,
            a,
            l,
            c,
            u = e._gsap,
            f = i || eu(e, !0),
            p = u.xOrigin || 0,
            d = u.yOrigin || 0,
            h = u.xOffset || 0,
            g = u.yOffset || 0,
            v = f[0],
            m = f[1],
            y = f[2],
            x = f[3],
            b = f[4],
            w = f[5],
            _ = t.split(" "),
            O = parseFloat(_[0]) || 0,
            P = parseFloat(_[1]) || 0;
          r
            ? f !== es &&
              (a = v * x - m * y) &&
              ((l = O * (x / a) + P * (-y / a) + (y * w - x * b) / a),
              (c = O * (-m / a) + P * (v / a) - (v * w - m * b) / a),
              (O = l),
              (P = c))
            : ((O =
                (s = G(e)).x + (~_[0].indexOf("%") ? (O / 100) * s.width : O)),
              (P =
                s.y +
                (~(_[1] || _[0]).indexOf("%") ? (P / 100) * s.height : P))),
            n || (!1 !== n && u.smooth)
              ? ((b = O - p),
                (w = P - d),
                (u.xOffset = h + (b * v + w * y) - b),
                (u.yOffset = g + (b * m + w * x) - w))
              : (u.xOffset = u.yOffset = 0),
            (u.xOrigin = O),
            (u.yOrigin = P),
            (u.smooth = !!n),
            (u.origin = t),
            (u.originIsAbsolute = !!r),
            (e.style[D] = "0px 0px"),
            o &&
              ($(o, u, "xOrigin", p, O),
              $(o, u, "yOrigin", d, P),
              $(o, u, "xOffset", h, u.xOffset),
              $(o, u, "yOffset", g, u.yOffset)),
            e.setAttribute("data-svg-origin", O + " " + P);
        },
        ep = function (e, t) {
          var r = e._gsap || new d.l1(e);
          if ("x" in r && !t && !r.uncache) return r;
          var n,
            i,
            o,
            s,
            a,
            l,
            c,
            u,
            f,
            h,
            y,
            x,
            b,
            w,
            _,
            O,
            P,
            M,
            C,
            S,
            T,
            k,
            E,
            A,
            F,
            Y,
            z,
            X,
            R,
            I,
            N,
            L,
            H = e.style,
            V = r.scaleX < 0,
            q = getComputedStyle(e),
            U = W(e, D) || "0";
          return (
            (n = i = o = l = c = u = f = h = y = 0),
            (s = a = 1),
            (r.svg = !!(e.getCTM && j(e))),
            q.translate &&
              (("none" !== q.translate ||
                "none" !== q.scale ||
                "none" !== q.rotate) &&
                (H[B] =
                  ("none" !== q.translate
                    ? "translate3d(" +
                      (q.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                      ") "
                    : "") +
                  ("none" !== q.rotate ? "rotate(" + q.rotate + ") " : "") +
                  ("none" !== q.scale
                    ? "scale(" + q.scale.split(" ").join(",") + ") "
                    : "") +
                  ("none" !== q[B] ? q[B] : "")),
              (H.scale = H.rotate = H.translate = "none")),
            (w = eu(e, r.svg)),
            r.svg &&
              (r.uncache
                ? ((F = e.getBBox()),
                  (U = r.xOrigin - F.x + "px " + (r.yOrigin - F.y) + "px"),
                  (A = ""))
                : (A = !t && e.getAttribute("data-svg-origin")),
              ef(e, A || U, !!A || r.originIsAbsolute, !1 !== r.smooth, w)),
            (x = r.xOrigin || 0),
            (b = r.yOrigin || 0),
            w !== es &&
              ((M = w[0]),
              (C = w[1]),
              (S = w[2]),
              (T = w[3]),
              (n = k = w[4]),
              (i = E = w[5]),
              6 === w.length
                ? ((s = Math.sqrt(M * M + C * C)),
                  (a = Math.sqrt(T * T + S * S)),
                  (l = M || C ? m(C, M) * g : 0),
                  (f = S || T ? m(S, T) * g + l : 0) &&
                    (a *= Math.abs(Math.cos(f * v))),
                  r.svg &&
                    ((n -= x - (x * M + b * S)), (i -= b - (x * C + b * T))))
                : ((L = w[6]),
                  (I = w[7]),
                  (z = w[8]),
                  (X = w[9]),
                  (R = w[10]),
                  (N = w[11]),
                  (n = w[12]),
                  (i = w[13]),
                  (o = w[14]),
                  (c = (_ = m(L, R)) * g),
                  _ &&
                    ((A = k * (O = Math.cos(-_)) + z * (P = Math.sin(-_))),
                    (F = E * O + X * P),
                    (Y = L * O + R * P),
                    (z = -(k * P) + z * O),
                    (X = -(E * P) + X * O),
                    (R = -(L * P) + R * O),
                    (N = -(I * P) + N * O),
                    (k = A),
                    (E = F),
                    (L = Y)),
                  (u = (_ = m(-S, R)) * g),
                  _ &&
                    ((A = M * (O = Math.cos(-_)) - z * (P = Math.sin(-_))),
                    (F = C * O - X * P),
                    (Y = S * O - R * P),
                    (N = T * P + N * O),
                    (M = A),
                    (C = F),
                    (S = Y)),
                  (l = (_ = m(C, M)) * g),
                  _ &&
                    ((O = Math.cos(_)),
                    (P = Math.sin(_)),
                    (A = M * O + C * P),
                    (F = k * O + E * P),
                    (C = C * O - M * P),
                    (E = E * O - k * P),
                    (M = A),
                    (k = F)),
                  c &&
                    Math.abs(c) + Math.abs(l) > 359.9 &&
                    ((c = l = 0), (u = 180 - u)),
                  (s = (0, d.Pr)(Math.sqrt(M * M + C * C + S * S))),
                  (a = (0, d.Pr)(Math.sqrt(E * E + L * L))),
                  (f = Math.abs((_ = m(k, E))) > 2e-4 ? _ * g : 0),
                  (y = N ? 1 / (N < 0 ? -N : N) : 0)),
              r.svg &&
                ((A = e.getAttribute("transform")),
                (r.forceCSS = e.setAttribute("transform", "") || !el(W(e, B))),
                A && e.setAttribute("transform", A))),
            Math.abs(f) > 90 &&
              270 > Math.abs(f) &&
              (V
                ? ((s *= -1),
                  (f += l <= 0 ? 180 : -180),
                  (l += l <= 0 ? 180 : -180))
                : ((a *= -1), (f += f <= 0 ? 180 : -180))),
            (t = t || r.uncache),
            (r.x =
              n -
              ((r.xPercent =
                n &&
                ((!t && r.xPercent) ||
                  (Math.round(e.offsetWidth / 2) === Math.round(-n) ? -50 : 0)))
                ? (e.offsetWidth * r.xPercent) / 100
                : 0) +
              "px"),
            (r.y =
              i -
              ((r.yPercent =
                i &&
                ((!t && r.yPercent) ||
                  (Math.round(e.offsetHeight / 2) === Math.round(-i)
                    ? -50
                    : 0)))
                ? (e.offsetHeight * r.yPercent) / 100
                : 0) +
              "px"),
            (r.z = o + "px"),
            (r.scaleX = (0, d.Pr)(s)),
            (r.scaleY = (0, d.Pr)(a)),
            (r.rotation = (0, d.Pr)(l) + "deg"),
            (r.rotationX = (0, d.Pr)(c) + "deg"),
            (r.rotationY = (0, d.Pr)(u) + "deg"),
            (r.skewX = f + "deg"),
            (r.skewY = h + "deg"),
            (r.transformPerspective = y + "px"),
            (r.zOrigin =
              parseFloat(U.split(" ")[2]) || (!t && r.zOrigin) || 0) &&
              (H[D] = ed(U)),
            (r.xOffset = r.yOffset = 0),
            (r.force3D = d.Fc.force3D),
            (r.renderTransform = r.svg ? ey : p ? em : eg),
            (r.uncache = 0),
            r
          );
        },
        ed = function (e) {
          return (e = e.split(" "))[0] + " " + e[1];
        },
        eh = function (e, t, r) {
          var n = (0, d.Wy)(t);
          return (
            (0, d.Pr)(parseFloat(t) + parseFloat(Q(e, "x", r + "px", n))) + n
          );
        },
        eg = function (e, t) {
          (t.z = "0px"),
            (t.rotationY = t.rotationX = "0deg"),
            (t.force3D = 0),
            em(e, t);
        },
        ev = "0deg",
        em = function (e, t) {
          var r = t || this,
            n = r.xPercent,
            i = r.yPercent,
            o = r.x,
            s = r.y,
            a = r.z,
            l = r.rotation,
            c = r.rotationY,
            u = r.rotationX,
            f = r.skewX,
            p = r.skewY,
            d = r.scaleX,
            h = r.scaleY,
            g = r.transformPerspective,
            m = r.force3D,
            y = r.target,
            x = r.zOrigin,
            b = "",
            w = ("auto" === m && e && 1 !== e) || !0 === m;
          if (x && (u !== ev || c !== ev)) {
            var _,
              O = parseFloat(c) * v,
              P = Math.sin(O),
              M = Math.cos(O);
            (o = eh(y, o, -(P * (_ = Math.cos((O = parseFloat(u) * v))) * x))),
              (s = eh(y, s, -(-Math.sin(O) * x))),
              (a = eh(y, a, -(M * _ * x) + x));
          }
          "0px" !== g && (b += "perspective(" + g + ") "),
            (n || i) && (b += "translate(" + n + "%, " + i + "%) "),
            (w || "0px" !== o || "0px" !== s || "0px" !== a) &&
              (b +=
                "0px" !== a || w
                  ? "translate3d(" + o + ", " + s + ", " + a + ") "
                  : "translate(" + o + ", " + s + ") "),
            l !== ev && (b += "rotate(" + l + ") "),
            c !== ev && (b += "rotateY(" + c + ") "),
            u !== ev && (b += "rotateX(" + u + ") "),
            (f !== ev || p !== ev) && (b += "skew(" + f + ", " + p + ") "),
            (1 !== d || 1 !== h) && (b += "scale(" + d + ", " + h + ") "),
            (y.style[B] = b || "translate(0, 0)");
        },
        ey = function (e, t) {
          var r,
            n,
            i,
            o,
            s,
            a = t || this,
            l = a.xPercent,
            c = a.yPercent,
            u = a.x,
            f = a.y,
            p = a.rotation,
            h = a.skewX,
            g = a.skewY,
            m = a.scaleX,
            y = a.scaleY,
            x = a.target,
            b = a.xOrigin,
            w = a.yOrigin,
            _ = a.xOffset,
            O = a.yOffset,
            P = a.forceCSS,
            M = parseFloat(u),
            C = parseFloat(f);
          (p = parseFloat(p)),
            (h = parseFloat(h)),
            (g = parseFloat(g)) && ((h += g = parseFloat(g)), (p += g)),
            p || h
              ? ((p *= v),
                (h *= v),
                (r = Math.cos(p) * m),
                (n = Math.sin(p) * m),
                (i = -(Math.sin(p - h) * y)),
                (o = Math.cos(p - h) * y),
                h &&
                  ((g *= v),
                  (i *= s = Math.sqrt(1 + (s = Math.tan(h - g)) * s)),
                  (o *= s),
                  g &&
                    ((r *= s = Math.sqrt(1 + (s = Math.tan(g)) * s)),
                    (n *= s))),
                (r = (0, d.Pr)(r)),
                (n = (0, d.Pr)(n)),
                (i = (0, d.Pr)(i)),
                (o = (0, d.Pr)(o)))
              : ((r = m), (o = y), (n = i = 0)),
            ((M && !~(u + "").indexOf("px")) ||
              (C && !~(f + "").indexOf("px"))) &&
              ((M = Q(x, "x", u, "px")), (C = Q(x, "y", f, "px"))),
            (b || w || _ || O) &&
              ((M = (0, d.Pr)(M + b - (b * r + w * i) + _)),
              (C = (0, d.Pr)(C + w - (b * n + w * o) + O))),
            (l || c) &&
              ((s = x.getBBox()),
              (M = (0, d.Pr)(M + (l / 100) * s.width)),
              (C = (0, d.Pr)(C + (c / 100) * s.height))),
            (s =
              "matrix(" +
              r +
              "," +
              n +
              "," +
              i +
              "," +
              o +
              "," +
              M +
              "," +
              C +
              ")"),
            x.setAttribute("transform", s),
            P && (x.style[B] = s);
        },
        ex = function (e, t, r, n, i) {
          var o,
            s,
            a = (0, d.r9)(i),
            l = parseFloat(i) * (a && ~i.indexOf("rad") ? g : 1) - n,
            c = n + l + "deg";
          return (
            a &&
              ("short" === (o = i.split("_")[1]) &&
                (l %= 360) != l % 180 &&
                (l += l < 0 ? 360 : -360),
              "cw" === o && l < 0
                ? (l = ((l + 36e9) % 360) - 360 * ~~(l / 360))
                : "ccw" === o &&
                  l > 0 &&
                  (l = ((l - 36e9) % 360) - 360 * ~~(l / 360))),
            (e._pt = s = new d.Fo(e._pt, t, r, n, l, O)),
            (s.e = c),
            (s.u = "deg"),
            e._props.push(r),
            s
          );
        },
        eb = function (e, t) {
          for (var r in t) e[r] = t[r];
          return e;
        },
        ew = function (e, t, r) {
          var n,
            i,
            o,
            s,
            a,
            l,
            c,
            u = eb({}, r._gsap),
            f = r.style;
          for (i in (u.svg
            ? ((o = r.getAttribute("transform")),
              r.setAttribute("transform", ""),
              (f[B] = t),
              (n = ep(r, 1)),
              Z(r, B),
              r.setAttribute("transform", o))
            : ((o = getComputedStyle(r)[B]),
              (f[B] = t),
              (n = ep(r, 1)),
              (f[B] = o)),
          h))
            (o = u[i]) !== (s = n[i]) &&
              0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) &&
              ((a =
                (0, d.Wy)(o) !== (c = (0, d.Wy)(s))
                  ? Q(r, i, o, c)
                  : parseFloat(o)),
              (l = parseFloat(s)),
              (e._pt = new d.Fo(e._pt, n, i, a, l - a, _)),
              (e._pt.u = c || 0),
              e._props.push(i));
          eb(n, u);
        };
      (0, d.fS)("padding,margin,Width,Radius", function (e, t) {
        var r = "Right",
          n = "Bottom",
          i = "Left",
          o = (
            t < 3 ? ["Top", r, n, i] : ["Top" + i, "Top" + r, n + r, n + i]
          ).map(function (r) {
            return t < 2 ? e + r : "border" + r + e;
          });
        eo[t > 1 ? "border" + e : e] = function (e, t, r, n, i) {
          var s, a;
          if (arguments.length < 4)
            return 5 ===
              (a = (s = o.map(function (t) {
                return ee(e, t, r);
              })).join(" ")).split(s[0]).length
              ? s[0]
              : a;
          (s = (n + "").split(" ")),
            (a = {}),
            o.forEach(function (e, t) {
              return (a[e] = s[t] = s[t] || s[((t - 1) / 2) | 0]);
            }),
            e.init(t, a, i);
        };
      });
      var e_ = {
        name: "css",
        register: V,
        targetTest: function (e) {
          return e.style && e.nodeType;
        },
        init: function (e, t, r, n, i) {
          var o,
            s,
            a,
            c,
            u,
            f,
            p,
            g,
            v,
            m,
            y,
            x,
            O,
            C,
            S,
            T,
            k = this._props,
            E = e.style,
            A = r.vars.startAt;
          for (p in (l || V(),
          (this.styles = this.styles || I(e)),
          (T = this.styles.props),
          (this.tween = r),
          t))
            if (
              "autoRound" !== p &&
              ((s = t[p]), !(d.$i[p] && (0, d.if)(p, t, r, n, e, i)))
            ) {
              if (
                ((u = typeof s),
                (f = eo[p]),
                "function" === u && (u = typeof (s = s.call(r, n, e, i))),
                "string" === u && ~s.indexOf("random(") && (s = (0, d.UI)(s)),
                f)
              )
                f(this, e, p, s, r) && (S = 1);
              else if ("--" === p.substr(0, 2))
                (o = (getComputedStyle(e).getPropertyValue(p) + "").trim()),
                  (s += ""),
                  (d.GN.lastIndex = 0),
                  d.GN.test(o) || ((g = (0, d.Wy)(o)), (v = (0, d.Wy)(s))),
                  v ? g !== v && (o = Q(e, p, o, v) + v) : g && (s += g),
                  this.add(E, "setProperty", o, s, n, i, 0, 0, p),
                  k.push(p),
                  T.push(p, 0, E[p]);
              else if ("undefined" !== u) {
                if (
                  (A && p in A
                    ? ((o =
                        "function" == typeof A[p]
                          ? A[p].call(r, n, e, i)
                          : A[p]),
                      (0, d.r9)(o) &&
                        ~o.indexOf("random(") &&
                        (o = (0, d.UI)(o)),
                      (0, d.Wy)(o + "") ||
                        "auto" === o ||
                        (o += d.Fc.units[p] || (0, d.Wy)(ee(e, p)) || ""),
                      "=" === (o + "").charAt(1) && (o = ee(e, p)))
                    : (o = ee(e, p)),
                  (c = parseFloat(o)),
                  (m =
                    "string" === u && "=" === s.charAt(1) && s.substr(0, 2)) &&
                    (s = s.substr(2)),
                  (a = parseFloat(s)),
                  p in w &&
                    ("autoAlpha" === p &&
                      (1 === c &&
                        "hidden" === ee(e, "visibility") &&
                        a &&
                        (c = 0),
                      T.push("visibility", 0, E.visibility),
                      $(
                        this,
                        E,
                        "visibility",
                        c ? "inherit" : "hidden",
                        a ? "inherit" : "hidden",
                        !a
                      )),
                    "scale" !== p &&
                      "transform" !== p &&
                      ~(p = w[p]).indexOf(",") &&
                      (p = p.split(",")[0])),
                  (y = p in h))
                ) {
                  if (
                    (this.styles.save(p),
                    x ||
                      (((O = e._gsap).renderTransform && !t.parseTransform) ||
                        ep(e, t.parseTransform),
                      (C = !1 !== t.smoothOrigin && O.smooth),
                      ((x = this._pt =
                        new d.Fo(
                          this._pt,
                          E,
                          B,
                          0,
                          1,
                          O.renderTransform,
                          O,
                          0,
                          -1
                        )).dep = 1)),
                    "scale" === p)
                  )
                    (this._pt = new d.Fo(
                      this._pt,
                      O,
                      "scaleY",
                      O.scaleY,
                      (m ? (0, d.cy)(O.scaleY, m + a) : a) - O.scaleY || 0,
                      _
                    )),
                      (this._pt.u = 0),
                      k.push("scaleY", p),
                      (p += "X");
                  else if ("transformOrigin" === p) {
                    T.push(D, 0, E[D]),
                      (s = en(s)),
                      O.svg
                        ? ef(e, s, 0, C, 0, this)
                        : ((v = parseFloat(s.split(" ")[2]) || 0) !==
                            O.zOrigin && $(this, O, "zOrigin", O.zOrigin, v),
                          $(this, E, p, ed(o), ed(s)));
                    continue;
                  } else if ("svgOrigin" === p) {
                    ef(e, s, 1, C, 0, this);
                    continue;
                  } else if (p in ea) {
                    ex(this, O, p, c, m ? (0, d.cy)(c, m + s) : s);
                    continue;
                  } else if ("smoothOrigin" === p) {
                    $(this, O, "smooth", O.smooth, s);
                    continue;
                  } else if ("force3D" === p) {
                    O[p] = s;
                    continue;
                  } else if ("transform" === p) {
                    ew(this, s, e);
                    continue;
                  }
                } else p in E || (p = H(p) || p);
                if (
                  y ||
                  ((a || 0 === a) && (c || 0 === c) && !b.test(s) && p in E)
                )
                  (g = (o + "").substr((c + "").length)),
                    a || (a = 0),
                    (v = (0, d.Wy)(s) || (p in d.Fc.units ? d.Fc.units[p] : g)),
                    g !== v && (c = Q(e, p, o, v)),
                    (this._pt = new d.Fo(
                      this._pt,
                      y ? O : E,
                      p,
                      c,
                      (m ? (0, d.cy)(c, m + a) : a) - c,
                      y || ("px" !== v && "zIndex" !== p) || !1 === t.autoRound
                        ? _
                        : M
                    )),
                    (this._pt.u = v || 0),
                    g !== v &&
                      "%" !== v &&
                      ((this._pt.b = o), (this._pt.r = P));
                else if (p in E) et.call(this, e, p, o, m ? m + s : s);
                else if (p in e) this.add(e, p, o || e[p], m ? m + s : s, n, i);
                else if ("parseTransform" !== p) {
                  (0, d.lC)(p, s);
                  continue;
                }
                y || (p in E ? T.push(p, 0, E[p]) : T.push(p, 1, o || e[p])),
                  k.push(p);
              }
            }
          S && (0, d.JV)(this);
        },
        render: function (e, t) {
          if (t.tween._time || !f())
            for (var r = t._pt; r; ) r.r(e, r.d), (r = r._next);
          else t.styles.revert();
        },
        get: ee,
        aliases: w,
        getSetter: function (e, t, r) {
          var n = w[t];
          return (
            n && 0 > n.indexOf(",") && (t = n),
            t in h && t !== D && (e._gsap.x || ee(e, "x"))
              ? r && u === r
                ? "scale" === t
                  ? A
                  : E
                : ((u = r || {}), "scale" === t ? F : Y)
              : e.style && !(0, d.m2)(e.style[t])
              ? T
              : ~t.indexOf("-")
              ? k
              : (0, d.S5)(e, t)
          );
        },
        core: { _removeProperty: Z, _getMatrix: eu },
      };
      (d.p8.utils.checkPrefix = H),
        (d.p8.core.getStyleSaver = I),
        (n = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent"),
        (i = "rotation,rotationX,rotationY,skewX,skewY"),
        (o = (0, d.fS)(
          n +
            "," +
            i +
            ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
          function (e) {
            h[e] = 1;
          }
        )),
        (0, d.fS)(i, function (e) {
          (d.Fc.units[e] = "deg"), (ea[e] = 1);
        }),
        (w[o[13]] = n + "," + i),
        (0, d.fS)(
          "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
          function (e) {
            var t = e.split(":");
            w[t[1]] = o[t[0]];
          }
        ),
        (0, d.fS)(
          "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
          function (e) {
            d.Fc.units[e] = "px";
          }
        ),
        d.p8.registerPlugin(e_);
      var eO = d.p8.registerPlugin(e_) || d.p8;
      eO.core.Tween;
    },
  },
]);
