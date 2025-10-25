(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [15],
  {
    1241: (e, s, a) => {
      Promise.resolve().then(a.bind(a, 13747));
    },
    13747: (e, s, a) => {
      "use strict";
      a.r(s), a.d(s, { default: () => R });
      var t = a(95155),
        r = a(12115),
        i = a(87364),
        l = a(63348),
        n = a(54947),
        c = a(92823),
        d = a(48173),
        o = a.n(d),
        m = a(14085),
        f = a(63898),
        x = a(31641),
        u = a(35007),
        g = a(58581),
        p = a(29844),
        h = a(12800),
        b = a(66963),
        j = a(27112),
        v = a(90518);
      let N = [
        { time: "06:50", agree: 2e-4, disagree: 198e-6 },
        { time: "06:51", agree: 202e-6, disagree: 198e-6 },
        { time: "06:52", agree: 204e-6, disagree: 1975e-7 },
        { time: "06:53", agree: 208e-6, disagree: 197e-6 },
        { time: "06:54", agree: 212e-6, disagree: 1965e-7 },
        { time: "06:55", agree: 216e-6, disagree: 196e-6 },
        { time: "06:56", agree: 218e-6, disagree: 1955e-7 },
        { time: "06:57", agree: 22e-5, disagree: 195e-6 },
        { time: "06:58", agree: 222e-6, disagree: 1945e-7 },
      ];
      function y() {
        return (0, t.jsxs)("div", {
          className: "h-[400px] w-full",
          children: [
            (0, t.jsxs)("div", {
              className: "mb-4 flex items-center gap-4 text-sm",
              children: [
                (0, t.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    (0, t.jsx)("span", {
                      className: "h-3 w-3 rounded-full bg-[#00ffa3]",
                    }),
                    (0, t.jsx)("span", { children: "Agree Position" }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    (0, t.jsx)("span", {
                      className: "h-3 w-3 rounded-full bg-[#ff5757]",
                    }),
                    (0, t.jsx)("span", { children: "Disagree Position" }),
                  ],
                }),
              ],
            }),
            (0, t.jsx)(g.u, {
              width: "100%",
              height: "100%",
              children: (0, t.jsxs)(p.Q, {
                data: N,
                margin: { top: 10, right: 10, left: 0, bottom: 0 },
                children: [
                  (0, t.jsxs)("defs", {
                    children: [
                      (0, t.jsxs)("linearGradient", {
                        id: "agreeGradient",
                        x1: "0",
                        y1: "0",
                        x2: "0",
                        y2: "1",
                        children: [
                          (0, t.jsx)("stop", {
                            offset: "5%",
                            stopColor: "#00ffa3",
                            stopOpacity: 0.3,
                          }),
                          (0, t.jsx)("stop", {
                            offset: "95%",
                            stopColor: "#00ffa3",
                            stopOpacity: 0,
                          }),
                        ],
                      }),
                      (0, t.jsxs)("linearGradient", {
                        id: "disagreeGradient",
                        x1: "0",
                        y1: "0",
                        x2: "0",
                        y2: "1",
                        children: [
                          (0, t.jsx)("stop", {
                            offset: "5%",
                            stopColor: "#ff5757",
                            stopOpacity: 0.3,
                          }),
                          (0, t.jsx)("stop", {
                            offset: "95%",
                            stopColor: "#ff5757",
                            stopOpacity: 0,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsx)(h.W, {
                    dataKey: "time",
                    axisLine: !1,
                    tickLine: !1,
                    tick: { fill: "#666", fontSize: 12 },
                  }),
                  (0, t.jsx)(b.h, {
                    axisLine: !1,
                    tickLine: !1,
                    tick: { fill: "#666", fontSize: 12 },
                    domain: ["dataMin", "dataMax"],
                    tickFormatter: (e) => e.toFixed(7),
                  }),
                  (0, t.jsx)(j.m, {
                    contentStyle: {
                      backgroundColor: "#1a1a1a",
                      border: "1px solid #333",
                      borderRadius: "4px",
                    },
                    itemStyle: { color: "#fff" },
                  }),
                  (0, t.jsx)(v.G, {
                    type: "monotone",
                    dataKey: "agree",
                    stroke: "#00ffa3",
                    fill: "url(#agreeGradient)",
                    strokeWidth: 2,
                  }),
                  (0, t.jsx)(v.G, {
                    type: "monotone",
                    dataKey: "disagree",
                    stroke: "#ff5757",
                    fill: "url(#disagreeGradient)",
                    strokeWidth: 2,
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var w = a(27934),
        z = a(1895),
        k = a(9955),
        C = a(29602);
      function S() {
        let [e, s] = (0, r.useState)(""),
          [a, i] = (0, r.useState)(null),
          l = (e) => {
            s("max" === e ? "1" : e);
          };
        return (0, t.jsx)(u.Zp, {
          className: "border-zinc-800 bg-zinc-900/50",
          children: (0, t.jsxs)(u.Wu, {
            className: "p-6",
            children: [
              (0, t.jsxs)("div", {
                className: "mb-6 grid grid-cols-2 gap-4",
                children: [
                  (0, t.jsxs)(m.$, {
                    variant: "outline",
                    className: (0, C.cn)(
                      "border-zinc-700 bg-zinc-800/50",
                      "agree" === a &&
                        "border-[#00ffa3] bg-[#00ffa3]/10 text-[#00ffa3]"
                    ),
                    onClick: () => i("agree"),
                    children: [
                      (0, t.jsx)(w.A, { className: "mr-2 h-4 w-4" }),
                      "Buy",
                    ],
                  }),
                  (0, t.jsxs)(m.$, {
                    variant: "outline",
                    className: (0, C.cn)(
                      "border-zinc-700 bg-zinc-800/50",
                      "disagree" === a &&
                        "border-[#ff5757] bg-[#ff5757]/10 text-[#ff5757]"
                    ),
                    onClick: () => i("disagree"),
                    children: [
                      (0, t.jsx)(z.A, { className: "mr-2 h-4 w-4" }),
                      "Sell",
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "mb-6",
                children: [
                  (0, t.jsxs)("div", {
                    className: "mb-2 flex items-center justify-between text-sm",
                    children: [
                      (0, t.jsx)("span", {
                        className: "text-zinc-400",
                        children: "Market Sentiment",
                      }),
                      (0, t.jsx)("span", {
                        className: "text-zinc-400",
                        children: "Based on Liquidity",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "flex items-center justify-between text-sm",
                    children: [
                      (0, t.jsxs)("span", {
                        className: "text-[#00ffa3]",
                        children: ["$AGREE ", "20.99 BNB"],
                      }),
                      (0, t.jsxs)("span", {
                        className: "text-[#ff5757]",
                        children: ["$DISAGREE ", "19.80 BNB"],
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "mb-6 space-y-4",
                children: [
                  (0, t.jsxs)("div", {
                    className: "flex items-center justify-between text-sm",
                    children: [
                      (0, t.jsx)("span", { children: "Amount (BNB)" }),
                      (0, t.jsx)("span", { children: "Slippage: 5%" }),
                    ],
                  }),
                  (0, t.jsx)(k.p, {
                    type: "number",
                    value: e,
                    onChange: (e) => s(e.target.value),
                    className: "border-zinc-700 bg-zinc-800/50",
                    placeholder: "0",
                  }),
                  (0, t.jsx)("div", {
                    className: "grid grid-cols-4 gap-2",
                    children: [
                      { label: "0.1 BNB", value: "0.1" },
                      { label: "0.5 BNB", value: "0.5" },
                      { label: "1 BNB", value: "1" },
                      { label: "max", value: "max" },
                    ].map((e) =>
                      (0, t.jsx)(
                        m.$,
                        {
                          variant: "outline",
                          size: "sm",
                          className: "border-zinc-700 bg-zinc-800/50 text-sm",
                          onClick: () => l(e.value),
                          children: e.label,
                        },
                        e.value
                      )
                    ),
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "mb-6 space-y-2 text-sm",
                children: [
                  (0, t.jsxs)("div", {
                    className: "flex justify-between",
                    children: [
                      (0, t.jsx)("span", {
                        className: "text-zinc-400",
                        children: "You Pay",
                      }),
                      (0, t.jsxs)("span", {
                        children: [e || "0.0000", " BNB"],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "flex justify-between",
                    children: [
                      (0, t.jsx)("span", {
                        className: "text-zinc-400",
                        children: "You Receive",
                      }),
                      (0, t.jsx)("span", { children: e ? "≈ " + e : "0.00" }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "flex justify-between",
                    children: [
                      (0, t.jsx)("span", {
                        className: "text-zinc-400",
                        children: "Liquidity removed from $DISAGREE",
                      }),
                      (0, t.jsxs)("span", {
                        children: [e || "0.0000", " BNB"],
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)(m.$, {
                className: (0, C.cn)(
                  "w-full",
                  "agree" === a &&
                    "bg-[#00ffa3] text-zinc-900 hover:bg-[#00ffa3]/90",
                  "disagree" === a &&
                    "bg-[#ff5757] text-white hover:bg-[#ff5757]/90",
                  !a && "bg-zinc-700 text-zinc-300"
                ),
                disabled: !a || !e,
                onClick: () => {
                  console.log("Trading", { position: a, amount: e });
                },
                children: a
                  ? "Buy $".concat(a.toUpperCase())
                  : "Select Position",
              }),
            ],
          }),
        });
      }
      var T = a(89592);
      function R(e) {
        let { params: s } = e,
          [a, d] = (0, r.useState)("comments"),
          g = {
            id: s.id,
            content:
              "My take is simple: Takes.fun will be huge. Trading ideas are, by definition, counter-network effect. Takes.fun converts asset class into network effect driven by a fair market. Had similar thoughts a while back. Tremendously glad to see the takes.fun team building this out!",
            author: {
              name: "SPvt...EojD",
              avatar:
                "https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1",
            },
            stats: {
              agree: "0.042282 BNB",
              disagree: "0.041980 BNB",
              volume: "0.99 BNB",
              agreement: "51.45%",
            },
            progress: { current: 40.79, target: 100, unit: "BNB" },
          };
        return (0, t.jsx)("div", {
          className: "min-h-screen bg-[#111111] text-zinc-100",
          children: (0, t.jsxs)("div", {
            className: "container mx-auto px-4 py-8",
            children: [
              (0, t.jsx)("div", {
                className: "mb-6 flex items-center justify-between",
                children: (0, t.jsx)(m.$, {
                  variant: "ghost",
                  className: "text-zinc-400 hover:text-white",
                  asChild: !0,
                  children: (0, t.jsxs)(o(), {
                    href: "/",
                    children: [
                      (0, t.jsx)(i.A, { className: "mr-2 h-4 w-4" }),
                      "Back",
                    ],
                  }),
                }),
              }),
              (0, t.jsxs)("div", {
                className: "grid gap-8 lg:grid-cols-3",
                children: [
                  (0, t.jsxs)("div", {
                    className: "lg:col-span-2",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "mb-8 flex items-start gap-4",
                        children: [
                          (0, t.jsxs)(f.eu, {
                            className: "h-12 w-12 border border-zinc-700",
                            children: [
                              (0, t.jsx)(f.BK, {
                                src: g.author.avatar,
                                alt: g.author.name,
                              }),
                              (0, t.jsx)(f.q5, { children: g.author.name[0] }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "flex-1",
                            children: [
                              (0, t.jsx)("div", {
                                className: "mb-2 flex items-center gap-2",
                                children: (0, t.jsx)("span", {
                                  className: "font-medium",
                                  children: g.author.name,
                                }),
                              }),
                              (0, t.jsx)("p", {
                                className: "text-lg font-light text-zinc-200",
                                children: g.content,
                              }),
                              (0, t.jsxs)("div", {
                                className:
                                  "mt-4 flex flex-wrap gap-4 text-sm text-zinc-400",
                                children: [
                                  (0, t.jsxs)("span", {
                                    children: ["AGREE: ", g.stats.agree],
                                  }),
                                  (0, t.jsxs)("span", {
                                    children: ["DISAGREE: ", g.stats.disagree],
                                  }),
                                  (0, t.jsxs)("span", {
                                    children: [
                                      "Total Volume: ",
                                      g.stats.volume,
                                    ],
                                  }),
                                  (0, t.jsxs)("span", {
                                    children: [
                                      "Agreement: ",
                                      g.stats.agreement,
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsx)(u.Zp, {
                        className: "mb-8 border-zinc-800 bg-zinc-900/50 p-6",
                        children: (0, t.jsx)(y, {}),
                      }),
                      (0, t.jsxs)("div", {
                        className: "mb-8",
                        children: [
                          (0, t.jsxs)("div", {
                            className: "mb-2 flex items-center justify-between",
                            children: [
                              (0, t.jsxs)("h3", {
                                className:
                                  "flex items-center gap-2 text-sm font-medium",
                                children: [
                                  "Hot Take Progress",
                                  (0, t.jsx)("span", {
                                    className: "rounded-full bg-zinc-800 p-1",
                                    children: (0, t.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 24 24",
                                      fill: "currentColor",
                                      className: "h-3 w-3",
                                      children: (0, t.jsx)("path", {
                                        fillRule: "evenodd",
                                        d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z",
                                        clipRule: "evenodd",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("span", {
                                className: "text-sm text-zinc-400",
                                children: [
                                  "Progress to Hot Take: ",
                                  g.progress.current,
                                  "/",
                                  g.progress.target,
                                  " ",
                                  g.progress.unit,
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsx)(T.k, {
                            value:
                              (g.progress.current / g.progress.target) * 100,
                            className: "h-2",
                          }),
                        ],
                      }),
                      (0, t.jsxs)(x.Tabs, {
                        defaultValue: "comments",
                        className: "w-full",
                        onValueChange: d,
                        children: [
                          (0, t.jsxs)(x.TabsList, {
                            className: "grid w-full grid-cols-3 bg-zinc-900/50",
                            children: [
                              (0, t.jsxs)(x.TabsTrigger, {
                                value: "comments",
                                className: "flex items-center gap-2",
                                children: [
                                  (0, t.jsx)(l.A, { className: "h-4 w-4" }),
                                  "Comments",
                                ],
                              }),
                              (0, t.jsxs)(x.TabsTrigger, {
                                value: "history",
                                className: "flex items-center gap-2",
                                children: [
                                  (0, t.jsx)(n.A, { className: "h-4 w-4" }),
                                  "Transaction History",
                                ],
                              }),
                              (0, t.jsxs)(x.TabsTrigger, {
                                value: "holders",
                                className: "flex items-center gap-2",
                                children: [
                                  (0, t.jsx)(c.A, { className: "h-4 w-4" }),
                                  "Top Holders",
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsx)(x.TabsContent, {
                            value: "comments",
                            className: "mt-4",
                            children: (0, t.jsx)(u.Zp, {
                              className: "border-zinc-800 bg-zinc-900/50 p-6",
                              children: (0, t.jsx)("p", {
                                className: "text-center text-zinc-400",
                                children: "You need tokens to comment",
                              }),
                            }),
                          }),
                          (0, t.jsx)(x.TabsContent, {
                            value: "history",
                            className: "mt-4",
                            children: (0, t.jsx)(u.Zp, {
                              className: "border-zinc-800 bg-zinc-900/50 p-6",
                              children: (0, t.jsx)("p", {
                                className: "text-center text-zinc-400",
                                children: "No transactions yet",
                              }),
                            }),
                          }),
                          (0, t.jsx)(x.TabsContent, {
                            value: "holders",
                            className: "mt-4",
                            children: (0, t.jsx)(u.Zp, {
                              className: "border-zinc-800 bg-zinc-900/50 p-6",
                              children: (0, t.jsx)("p", {
                                className: "text-center text-zinc-400",
                                children: "No holders yet",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: "lg:sticky lg:top-8",
                    children: (0, t.jsx)(S, {}),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    63898: (e, s, a) => {
      "use strict";
      a.d(s, { BK: () => c, eu: () => n, q5: () => d });
      var t = a(95155),
        r = a(12115),
        i = a(74920),
        l = a(29602);
      let n = r.forwardRef((e, s) => {
        let { className: a, ...r } = e;
        return (0, t.jsx)(i.Root, {
          ref: s,
          className: (0, l.cn)(
            "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
            a
          ),
          ...r,
        });
      });
      n.displayName = i.Root.displayName;
      let c = r.forwardRef((e, s) => {
        let { className: a, ...r } = e;
        return (0, t.jsx)(i.Image, {
          ref: s,
          className: (0, l.cn)("aspect-square h-full w-full", a),
          ...r,
        });
      });
      c.displayName = i.Image.displayName;
      let d = r.forwardRef((e, s) => {
        let { className: a, ...r } = e;
        return (0, t.jsx)(i.Fallback, {
          ref: s,
          className: (0, l.cn)(
            "flex h-full w-full items-center justify-center rounded-full bg-zinc-800 text-zinc-300",
            a
          ),
          ...r,
        });
      });
      d.displayName = i.Fallback.displayName;
    },
    14085: (e, s, a) => {
      "use strict";
      a.d(s, { $: () => d });
      var t = a(95155),
        r = a(12115),
        i = a(12317),
        l = a(31027),
        n = a(29602);
      let c = (0, l.F)(
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
        d = r.forwardRef((e, s) => {
          let { className: a, variant: r, size: l, asChild: d = !1, ...o } = e,
            m = d ? i.DX : "button";
          return (0, t.jsx)(m, {
            className: (0, n.cn)(c({ variant: r, size: l, className: a })),
            ref: s,
            ...o,
          });
        });
      d.displayName = "Button";
    },
    35007: (e, s, a) => {
      "use strict";
      a.d(s, {
        Wu: () => d,
        ZB: () => c,
        Zp: () => l,
        aR: () => n,
        wL: () => o,
      });
      var t = a(95155),
        r = a(12115),
        i = a(29602);
      let l = r.forwardRef((e, s) => {
        let { className: a, ...r } = e;
        return (0, t.jsx)("div", {
          ref: s,
          className: (0, i.cn)(
            "rounded-xl border bg-card text-card-foreground shadow",
            a
          ),
          ...r,
        });
      });
      l.displayName = "Card";
      let n = r.forwardRef((e, s) => {
        let { className: a, ...r } = e;
        return (0, t.jsx)("div", {
          ref: s,
          className: (0, i.cn)("flex flex-col space-y-1.5 p-6", a),
          ...r,
        });
      });
      n.displayName = "CardHeader";
      let c = r.forwardRef((e, s) => {
        let { className: a, ...r } = e;
        return (0, t.jsx)("h3", {
          ref: s,
          className: (0, i.cn)("font-semibold leading-none tracking-tight", a),
          ...r,
        });
      });
      (c.displayName = "CardTitle"),
        (r.forwardRef((e, s) => {
          let { className: a, ...r } = e;
          return (0, t.jsx)("p", {
            ref: s,
            className: (0, i.cn)("text-sm text-muted-foreground", a),
            ...r,
          });
        }).displayName = "CardDescription");
      let d = r.forwardRef((e, s) => {
        let { className: a, ...r } = e;
        return (0, t.jsx)("div", {
          ref: s,
          className: (0, i.cn)("p-6 pt-0", a),
          ...r,
        });
      });
      d.displayName = "CardContent";
      let o = r.forwardRef((e, s) => {
        let { className: a, ...r } = e;
        return (0, t.jsx)("div", {
          ref: s,
          className: (0, i.cn)("flex items-center p-6 pt-0", a),
          ...r,
        });
      });
      o.displayName = "CardFooter";
    },
    9955: (e, s, a) => {
      "use strict";
      a.d(s, { p: () => l });
      var t = a(95155),
        r = a(12115),
        i = a(29602);
      let l = r.forwardRef((e, s) => {
        let { className: a, type: r, ...l } = e;
        return (0, t.jsx)("input", {
          type: r,
          className: (0, i.cn)(
            "flex h-10 w-full rounded-md bg-[#1a1a24] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2),_inset_-1px_-1px_1px_rgba(255,255,255,0.02)] border-[#232336]",
            a
          ),
          ref: s,
          ...l,
        });
      });
      l.displayName = "Input";
    },
    89592: (e, s, a) => {
      "use strict";
      a.d(s, { k: () => n });
      var t = a(95155),
        r = a(12115),
        i = a(16838),
        l = a(29602);
      let n = r.forwardRef((e, s) => {
        let { className: a, value: r, indicatorClassName: n, ...c } = e;
        return (0, t.jsx)(i.bL, {
          ref: s,
          className: (0, l.cn)(
            "relative h-2 w-full overflow-hidden rounded-full bg-zinc-800",
            a
          ),
          ...c,
          children: (0, t.jsx)(i.C1, {
            className: (0, l.cn)(
              "h-full w-full flex-1 bg-[#1d419d] transition-all",
              n
            ),
            style: { transform: "translateX(-".concat(100 - (r || 0), "%)") },
          }),
        });
      });
      n.displayName = i.bL.displayName;
    },
    31641: (e, s, a) => {
      "use strict";
      a.d(s, {
        Tabs: () => n,
        TabsContent: () => o,
        TabsList: () => c,
        TabsTrigger: () => d,
      });
      var t = a(95155),
        r = a(12115),
        i = a(11125),
        l = a(29602);
      let n = i.bL,
        c = r.forwardRef((e, s) => {
          let { className: a, ...r } = e;
          return (0, t.jsx)(i.B8, {
            ref: s,
            className: (0, l.cn)(
              "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
              a
            ),
            ...r,
          });
        });
      c.displayName = i.B8.displayName;
      let d = r.forwardRef((e, s) => {
        let { className: a, ...r } = e;
        return (0, t.jsx)(i.l9, {
          ref: s,
          className: (0, l.cn)(
            "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
            a
          ),
          ...r,
        });
      });
      d.displayName = i.l9.displayName;
      let o = r.forwardRef((e, s) => {
        let { className: a, ...r } = e;
        return (0, t.jsx)(i.UC, {
          ref: s,
          className: (0, l.cn)(
            "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            a
          ),
          ...r,
        });
      });
      o.displayName = i.UC.displayName;
    },
    29602: (e, s, a) => {
      "use strict";
      a.d(s, { cn: () => i });
      var t = a(43463),
        r = a(69795);
      function i() {
        for (var e = arguments.length, s = Array(e), a = 0; a < e; a++)
          s[a] = arguments[a];
        return (0, r.QP)((0, t.$)(s));
      }
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(0, [780, 173, 756, 340, 441, 517, 358], () => s(1241)), (_N_E = e.O());
  },
]);
