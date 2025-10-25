(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    5069: (e, t, s) => {
      Promise.resolve().then(s.t.bind(s, 19324, 23)),
        Promise.resolve().then(s.bind(s, 43368)),
        Promise.resolve().then(s.bind(s, 14223)),
        Promise.resolve().then(s.bind(s, 14627)),
        Promise.resolve().then(s.t.bind(s, 26236, 23));
    },
    43368: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => p });
      var r = s(95155),
        n = s(12115),
        i = s(48173),
        a = s.n(i),
        o = s(98867),
        l = s(23920),
        d = s(14085),
        c = s(72687),
        x = s(29602);
      let m = c.Kq,
        h = c.bL,
        f = c.l9,
        u = n.forwardRef((e, t) => {
          let { className: s, sideOffset: n = 4, ...i } = e;
          return (0, r.jsx)(c.UC, {
            ref: t,
            sideOffset: n,
            className: (0, x.cn)(
              "z-50 overflow-hidden rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-200 shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              s
            ),
            ...i,
          });
        });
      function p() {
        let [e, t] = (0, n.useState)(!1),
          s = "tbd";
        return (0, r.jsx)("footer", {
          className: "border-t border-zinc-800 bg-[#111111] py-8",
          children: (0, r.jsx)("div", {
            className: "container mx-auto px-4",
            children: (0, r.jsxs)("div", {
              className:
                "flex flex-col items-center justify-between gap-6 md:flex-row",
              children: [
                (0, r.jsxs)("div", {
                  className: "flex items-center gap-4",
                  children: [
                    (0, r.jsxs)(a(), {
                      href: "https://twitter.com/1push_fun",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "text-zinc-400 hover:text-[#1d419d] transition-colors",
                      children: [
                        (0, r.jsx)("img", {
                          src: "https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg",
                          alt: "Twitter Logo",
                          className: "h-5 w-5",
                        }),
                        (0, r.jsx)("span", {
                          className: "sr-only",
                          children: "Twitter",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(a(), {
                      href: "https://pump.fun",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "text-zinc-400 hover:text-[#1d419d] transition-colors",
                      children: [
                        (0, r.jsx)("img", {
                          src: "/pump.png",
                          alt: "Discord Logo",
                          className: "h-5 w-5",
                        }),
                        (0, r.jsx)("span", {
                          className: "sr-only",
                          children: "Discord",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: "flex items-center",
                  children: (0, r.jsx)(m, {
                    children: (0, r.jsxs)(h, {
                      children: [
                        (0, r.jsx)(f, {
                          asChild: !0,
                          children: (0, r.jsxs)(d.$, {
                            variant: "outline",
                            size: "sm",
                            className:
                              "flex items-center gap-2 border-zinc-800 bg-zinc-900/50 font-light text-zinc-400 hover:bg-zinc-800 hover:text-white",
                            onClick: () => {
                              navigator.clipboard.writeText(s),
                                t(!0),
                                setTimeout(() => t(!1), 2e3);
                            },
                            children: [
                              (0, r.jsx)("span", {
                                className: "hidden sm:inline",
                                children: "Contract:",
                              }),
                              (0, r.jsxs)("span", {
                                className: "font-mono text-xs sm:text-sm",
                                children: [
                                  s.substring(0, 6),
                                  "...",
                                  s.substring(s.length - 4),
                                ],
                              }),
                              e
                                ? (0, r.jsx)(o.A, {
                                    className: "h-4 w-4 text-[#1d419d]",
                                  })
                                : (0, r.jsx)(l.A, { className: "h-4 w-4" }),
                            ],
                          }),
                        }),
                        (0, r.jsx)(u, {
                          children: (0, r.jsx)("p", {
                            children: e
                              ? "Copied!"
                              : "Click to copy contract address",
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, r.jsxs)("div", {
                  className: "text-sm text-zinc-500",
                  children: [
                    "\xa9 ",
                    new Date().getFullYear(),
                    " Grenly. All rights reserved.",
                  ],
                }),
              ],
            }),
          }),
        });
      }
      u.displayName = c.UC.displayName;
    },
    14223: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => d });
      var r = s(95155),
        n = s(48173),
        i = s.n(n),
        a = s(20853),
        o = s(14085),
        l = s(9955);
      function d() {
        return (0, r.jsx)("header", {
          className:
            "sticky top-0 z-50 border-b border-zinc-800 bg-[#111111]/90 backdrop-blur-md",
          children: (0, r.jsxs)("div", {
            className:
              "container mx-auto flex h-16 items-center justify-between px-4",
            children: [
              (0, r.jsxs)("div", {
                className: "flex items-center gap-6",
                children: [
                  (0, r.jsxs)(i(), {
                    href: "/",
                    className: "flex items-center gap-1.5",
                    children: [
                      (0, r.jsx)("span", {
                        className: "text-xl font-medium text-white",
                        children: "Grenly",
                      }),
                      (0, r.jsx)("span", {
                        className: "text-xl font-medium text-[#1d419d]",
                        children: ".",
                      }),
                      (0, r.jsx)("span", {
                        className: "text-[#1d419d]",
                        children: (0, r.jsxs)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          className: "h-7 w-7",
                          children: [
                            (0, r.jsx)("path", {
                              d: "M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
                            }),
                            (0, r.jsx)("path", {
                              fillRule: "evenodd",
                              d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .83.4 1.616 1.113 2.182.502.398 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a3.833 3.833 0 0 0 1.719-.756c.712-.566 1.112-1.35 1.112-2.178 0-.83-.4-1.616-1.113-2.182a3.835 3.835 0 0 0-1.718-.756V8.334c.29.03.563.129.79.28l.66.5a.75.75 0 1 0 .9-1.2l-.66-.5A3.031 3.031 0 0 0 12.75 6.81V6Z",
                              clipRule: "evenodd",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsxs)("nav", {
                    className: "hidden md:flex items-center space-x-6",
                    children: [
                      (0, r.jsx)(i(), {
                        href: "/how-it-works.html",
                        className:
                          "font-light text-zinc-400 transition-colors hover:text-white",
                        children: "How it Works",
                      }),
                      (0, r.jsx)(i(), {
                        href: "/explore.html",
                        className:
                          "font-light text-zinc-400 transition-colors hover:text-white",
                        children: "Explore",
                      }),
                      (0, r.jsx)(i(), {
                        href: "/leaderboard.html",
                        className:
                          "font-light text-zinc-400 transition-colors hover:text-white",
                        children: "Leaderboard",
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className: "hidden max-w-md flex-1 px-4 lg:block",
                children: (0, r.jsxs)("div", {
                  className: "relative",
                  children: [
                    (0, r.jsx)(a.A, {
                      className:
                        "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500",
                    }),
                    (0, r.jsx)(l.p, {
                      placeholder: "Search takes...",
                      className:
                        "w-full border-zinc-800 bg-zinc-900/50 pl-10 text-zinc-100 placeholder:text-zinc-500",
                    }),
                  ],
                }),
              }),
              (0, r.jsxs)("div", {
                className: "flex items-center gap-3",
                children: [
                  (0, r.jsxs)(o.$, {
                    variant: "outline",
                    className:
                      "hidden border-zinc-800 bg-zinc-900/50 font-normal text-zinc-100 hover:bg-zinc-800 hover:text-white sm:flex",
                 children: [
  (0, r.jsxs)("a", {
    href: "/create.html",
    className:
      "hidden border-zinc-800 bg-zinc-900/50 font-normal text-zinc-100 hover:bg-zinc-800 hover:text-white sm:flex items-center px-3 py-2 rounded-md",
    children: [
      (0, r.jsx)("span", {
        className: "mr-1 text-lg font-medium leading-none",
        children: "+"
      }),
      " Create Grenly"
    ]
  })
],
                  }),
                  (0, r.jsx)(o.$, {
                    onClick: () => {
                      let e = encodeURIComponent(
                        "Love sharing opinions? Join Grenly! Create takes, earn from trading fees, and build your reputation. Start today: Grenly.fun @1push_fun"
                      );
                      window.open(
                        "https://twitter.com/intent/tweet?text=".concat(e),
                        "_blank"
                      );
                    },
                    className:
                      "bg-[#1d419d] font-normal text-white transition-colors hover:bg-[#1d419d]/90",
                    children: "Early Acess",
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    14627: (e, t, s) => {
      "use strict";
      s.d(t, { ThemeProvider: () => i });
      var r = s(95155);
      s(12115);
      var n = s(67113);
      function i(e) {
        let { children: t, ...s } = e;
        return (0, r.jsx)(n.N, { ...s, children: t });
      }
    },
    14085: (e, t, s) => {
      "use strict";
      s.d(t, { $: () => d });
      var r = s(95155),
        n = s(12115),
        i = s(12317),
        a = s(31027),
        o = s(29602);
      let l = (0, a.F)(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            variants: {
              variant: {
                default:
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                  "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                  "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary:
                  "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
              },
              size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          }
        ),
        d = n.forwardRef((e, t) => {
          let { className: s, variant: n, size: a, asChild: d = !1, ...c } = e,
            x = d ? i.DX : "button";
          return (0, r.jsx)(x, {
            className: (0, o.cn)(l({ variant: n, size: a, className: s })),
            ref: t,
            ...c,
          });
        });
      d.displayName = "Button";
    },
    9955: (e, t, s) => {
      "use strict";
      s.d(t, { p: () => a });
      var r = s(95155),
        n = s(12115),
        i = s(29602);
      let a = n.forwardRef((e, t) => {
        let { className: s, type: n, ...a } = e;
        return (0, r.jsx)("input", {
          type: n,
          className: (0, i.cn)(
            "flex h-10 w-full rounded-md bg-[#1a1a24] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2),_inset_-1px_-1px_1px_rgba(255,255,255,0.02)] border-[#232336]",
            s
          ),
          ref: t,
          ...a,
        });
      });
      a.displayName = "Input";
    },
    29602: (e, t, s) => {
      "use strict";
      s.d(t, { cn: () => i });
      var r = s(43463),
        n = s(69795);
      function i() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return (0, n.QP)((0, r.$)(t));
      }
    },
    19324: () => {},
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [701, 780, 173, 95, 441, 517, 358], () => t(5069)), (_N_E = e.O());
  },
]);
