(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    84176: (e, a, t) => {
      Promise.resolve().then(t.bind(t, 55823));
    },
    55823: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, { default: () => g });
      var r = t(95155),
        n = t(12115),
        s = t(38072),
        i = t(29602);
      function o() {
        let [e, a] = (0, n.useState)("for-you");
        return (0, r.jsx)("div", {
          className: "mb-6 border-b border-zinc-800",
          children: (0, r.jsx)("div", {
            className: "flex justify-center",
            children: [
              { id: "for-you", label: "For You" },
              { id: "following", label: "Following" },
            ].map((t) =>
              (0, r.jsxs)(
                "button",
                {
                  onClick: () => a(t.id),
                  className: (0, i.cn)(
                    "relative px-6 py-4 font-normal transition-colors",
                    e === t.id
                      ? "text-white"
                      : "text-zinc-500 hover:text-zinc-300"
                  ),
                  children: [
                    t.label,
                    e === t.id &&
                      (0, r.jsx)("span", {
                        className:
                          "absolute bottom-0 left-0 h-0.5 w-full bg-[#1d419d]",
                      }),
                  ],
                },
                t.id
              )
            ),
          }),
        });
      }
      function l() {
        let [e, a] = (0, n.useState)("featured");
        return (0, r.jsx)("div", {
          className: "mb-6 flex flex-wrap gap-2",
          children: [
            { id: "featured", label: "Featured", icon: "\uD83D\uDD25" },
            { id: "newest", label: "Newest" },
            { id: "last-trade", label: "Last Trade" },
            { id: "most-agreed", label: "Most Agreed" },
          ].map((t) =>
            (0, r.jsxs)(
              "button",
              {
                onClick: () => a(t.id),
                className: (0, i.cn)(
                  "flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-normal transition-colors",
                  e === t.id
                    ? "bg-[#1d419d] text-white"
                    : "bg-zinc-900/50 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
                ),
                children: [
                  t.icon && (0, r.jsx)("span", { children: t.icon }),
                  t.label,
                ],
              },
              t.id
            )
          ),
        });
      }
      var c = t(35007);
      function d() {
        return (0, r.jsxs)(c.Zp, {
          className: "border-zinc-800 bg-zinc-900/50 rounded-md",
          children: [
            (0, r.jsx)(c.aR, {
              className: "pb-3",
              children: (0, r.jsx)(c.ZB, {
                className: "text-xl font-normal",
                children: "Categories",
              }),
            }),
            (0, r.jsx)(c.Wu, {
              children: (0, r.jsx)("div", {
                className: "space-y-2",
                children: [
                  "Technical Analysis",
                  "Market Trend Predictions",
                  "Emerging Altcoin Opportunities",
                  "Passive Trading Strategies",
                  "News & Event-Based Analysis",
                  "Arbitrage Opportunities",
                  "Risk Management Strategies",
                  "NFT & Metaverse Integration",
                  "HODL & Long-Term Investment",
                  "DeFi & Yield Optimization",
                ].map((e, a) =>
                  (0, r.jsx)(
                    "div",
                    {
                      className:
                        "rounded-md border border-zinc-800 px-3 py-2 text-sm font-light text-zinc-300 hover:border-[#1d419d]/50 hover:bg-[#1d419d]/5 hover:text-white cursor-pointer transition-colors",
                      children: e,
                    },
                    a
                  )
                ),
              }),
            }),
          ],
        });
      }
      var h = t(13691),
        m = t(14085);
      function g() {
        let [e, a] = (0, n.useState)(10),
          t = [
            {
              id: "1",
              author: {
                name: "Alex Chen",
                avatar:
                  "https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1",
                username: "alexc",
              },
              content:
                "Grenly will be huge. Trading ideas are, by definition, counter-network effect. Grenly converts asset class into network effect driven by a fair market.",
              timeAgo: "1h ago",
              agreePercentage: 51.5,
              agreeCount: 267,
              commentCount: 1,
              solValue: "0.99 BNB",
              agreed: !0,
            },
            {
              id: "2",
              author: {
                name: "Sarah Kim",
                avatar: "/placeholder.svg?height=40&width=40",
                username: "sarahk",
              },
              content:
                "Grenly will be a viral app with its unique approach to content monetization",
              timeAgo: "38m ago",
              agreePercentage: 74.2,
              agreeCount: 189,
              commentCount: 5,
              solValue: "0.39 BNB",
              agreed: !0,
            },
            {
              id: "3",
              author: {
                name: "Louis Wang",
                avatar: "/placeholder.svg?height=40&width=40",
                username: "louisw",
              },
              content:
                "1000X It is the strongest community in the crypto space right now",
              timeAgo: "46m ago",
              agreePercentage: 62.8,
              agreeCount: 143,
              commentCount: 3,
              solValue: "0.30 BNB",
              agreed: !0,
            },
            {
              id: "4",
              author: {
                name: "Emma Johnson",
                avatar: "/placeholder.svg?height=40&width=40",
                username: "emmaj",
              },
              content:
                "Technical analysis suggests BTC will break $100k by end of year. The patterns are clear.",
              timeAgo: "1h 20m ago",
              agreePercentage: 68.3,
              agreeCount: 312,
              commentCount: 8,
              solValue: "0.45 BNB",
              agreed: !1,
            },
            {
              id: "5",
              author: {
                name: "Michael Torres",
                avatar: "/placeholder.svg?height=40&width=40",
                username: "michaelt",
              },
              content:
                "DeFi summer 2.0 is coming. Projects with real utility will thrive while others fade away.",
              timeAgo: "2h ago",
              agreePercentage: 81.7,
              agreeCount: 203,
              commentCount: 4,
              solValue: "0.52 BNB",
              agreed: !0,
            },
            {
              id: "6",
              author: {
                name: "Priya Patel",
                avatar: "/placeholder.svg?height=40&width=40",
                username: "priyap",
              },
              content:
                "Layer 2 solutions will be the backbone of mainstream crypto adoption. Scalability is key.",
              timeAgo: "3h ago",
              agreePercentage: 77.4,
              agreeCount: 189,
              commentCount: 6,
              solValue: "0.38 BNB",
              agreed: !0,
            },
            {
              id: "7",
              author: {
                name: "David Wilson",
                avatar: "/placeholder.svg?height=40&width=40",
                username: "davidw",
              },
              content:
                "NFTs are evolving beyond digital art into utility-focused applications. This is just the beginning.",
              timeAgo: "4h ago",
              agreePercentage: 59.2,
              agreeCount: 142,
              commentCount: 7,
              solValue: "0.27 BNB",
              agreed: !1,
            },
            {
              id: "8",
              author: {
                name: "Sophia Lee",
                avatar: "/placeholder.svg?height=40&width=40",
                username: "sophial",
              },
              content:
                "Passive income strategies in crypto will outperform traditional finance in the next decade.",
              timeAgo: "5h ago",
              agreePercentage: 84.6,
              agreeCount: 278,
              commentCount: 9,
              solValue: "0.61 BNB",
              agreed: !0,
            },
            {
              id: "9",
              author: {
                name: "James Rodriguez",
                avatar: "/placeholder.svg?height=40&width=40",
                username: "jamesr",
              },
              content:
                "Regulatory clarity will be the catalyst for the next bull market. Institutions are waiting.",
              timeAgo: "6h ago",
              agreePercentage: 72.1,
              agreeCount: 195,
              commentCount: 5,
              solValue: "0.43 BNB",
              agreed: !0,
            },
            {
              id: "10",
              author: {
                name: "Olivia Brown",
                avatar: "/placeholder.svg?height=40&width=40",
                username: "oliviab",
              },
              content:
                "Metaverse integration with DeFi will create entirely new economic models and opportunities.",
              timeAgo: "7h ago",
              agreePercentage: 63.8,
              agreeCount: 157,
              commentCount: 4,
              solValue: "0.35 BNB",
              agreed: !1,
            },
            {
              id: "11",
              author: {
                name: "Daniel Park",
                avatar: "/placeholder.svg?height=40&width=40",
                username: "danielp",
              },
              content:
                "Arbitrage opportunities between DEXs will diminish as cross-chain solutions improve.",
              timeAgo: "8h ago",
              agreePercentage: 69.4,
              agreeCount: 182,
              commentCount: 3,
              solValue: "0.41 BNB",
              agreed: !0,
            },
            {
              id: "12",
              author: {
                name: "Natalie Garcia",
                avatar: "/placeholder.svg?height=40&width=40",
                username: "natalieg",
              },
              content:
                "Risk management is the most underrated skill in crypto trading. Proper position sizing is key.",
              timeAgo: "9h ago",
              agreePercentage: 88.2,
              agreeCount: 301,
              commentCount: 11,
              solValue: "0.67 BNB",
              agreed: !0,
            },
            {
              id: "13",
              author: {
                name: "Ryan Thompson",
                avatar: "/placeholder.svg?height=40&width=40",
                username: "ryant",
              },
              content:
                "HODL strategies will outperform active trading for 90% of investors over a 5-year timeframe.",
              timeAgo: "10h ago",
              agreePercentage: 75.9,
              agreeCount: 213,
              commentCount: 8,
              solValue: "0.49 BNB",
              agreed: !0,
            },
            {
              id: "14",
              author: {
                name: "Aisha Khan",
                avatar: "/placeholder.svg?height=40&width=40",
                username: "aishak",
              },
              content:
                "Emerging markets will drive the next wave of crypto adoption due to currency instability.",
              timeAgo: "11h ago",
              agreePercentage: 79.3,
              agreeCount: 227,
              commentCount: 6,
              solValue: "0.53 BNB",
              agreed: !0,
            },
            {
              id: "15",
              author: {
                name: "Thomas Wright",
                avatar: "/placeholder.svg?height=40&width=40",
                username: "thomasw",
              },
              content:
                "Technical analysis works because enough people believe in it, creating a self-fulfilling prophecy.",
              timeAgo: "12h ago",
              agreePercentage: 54.7,
              agreeCount: 132,
              commentCount: 9,
              solValue: "0.29 BNB",
              agreed: !1,
            },
            {
              id: "16",
              author: {
                name: "Grace Martinez",
                avatar: "/placeholder.svg?height=40&width=40",
                username: "gracem",
              },
              content:
                "Yield optimization strategies will become increasingly complex as DeFi matures.",
              timeAgo: "13h ago",
              agreePercentage: 71.6,
              agreeCount: 187,
              commentCount: 5,
              solValue: "0.42 BNB",
              agreed: !0,
            },
            {
              id: "17",
              author: {
                name: "Kevin Zhang",
                avatar: "/placeholder.svg?height=40&width=40",
                username: "kevinz",
              },
              content:
                "Altcoin season will follow Bitcoin's next major rally, but with fewer winners than previous cycles.",
              timeAgo: "14h ago",
              agreePercentage: 66.2,
              agreeCount: 168,
              commentCount: 7,
              solValue: "0.37 BNB",
              agreed: !0,
            },
            {
              id: "18",
              author: {
                name: "Isabella Lopez",
                avatar: "/placeholder.svg?height=40&width=40",
                username: "isabellal",
              },
              content:
                "News-based trading requires faster execution than technical analysis to be profitable.",
              timeAgo: "15h ago",
              agreePercentage: 61.9,
              agreeCount: 154,
              commentCount: 4,
              solValue: "0.33 BNB",
              agreed: !1,
            },
            {
              id: "19",
              author: {
                name: "Brandon Taylor",
                avatar: "/placeholder.svg?height=40&width=40",
                username: "brandont",
              },
              content:
                "NFT integration with gaming will create sustainable economic models beyond speculation.",
              timeAgo: "16h ago",
              agreePercentage: 73.8,
              agreeCount: 198,
              commentCount: 6,
              solValue: "0.44 BNB",
              agreed: !0,
            },
            {
              id: "20",
              author: {
                name: "Zoe Anderson",
                avatar: "/placeholder.svg?height=40&width=40",
                username: "zoea",
              },
              content:
                "The most profitable trading strategy is the one that matches your personality and risk tolerance.",
              timeAgo: "17h ago",
              agreePercentage: 91.4,
              agreeCount: 324,
              commentCount: 12,
              solValue: "0.72 BNB",
              agreed: !0,
            },
          ];
        return (0, r.jsxs)("div", {
          className: "min-h-screen bg-[#111111] text-zinc-100",
          children: [
            (0, r.jsx)("section", {
              className:
                "border-b border-zinc-800/50 bg-gradient-to-b from-zinc-900 to-[#111111] py-16",
              children: (0, r.jsxs)("div", {
                className: "container mx-auto px-4 text-center",
                children: [
                  (0, r.jsxs)("h1", {
                    className:
                      "mx-auto max-w-4xl text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-6xl",
                    children: [
                      "Share your ",
                      (0, r.jsx)("span", {
                        className: "text-[#1d419d]",
                        children: "Grenly",
                      }),
                      " and",
                      " ",
                      (0, r.jsx)("span", {
                        className: "text-white",
                        children: "Take Profits on BNB",
                      }),
                    ],
                  }),
                  (0, r.jsx)("p", {
                    className:
                      "mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-zinc-400",
                    children:
                      "Become the next Grenly creator and earn 0.2% of the trading fees generated by your Push.",
                  }),
                ],
              }),
            }),
            (0, r.jsxs)("main", {
              className: "container mx-auto px-4 py-8",
              children: [
                (0, r.jsx)(o, {}),
                (0, r.jsx)(l, {}),
                (0, r.jsxs)("div", {
                  className: "mt-8 grid gap-8 md:grid-cols-3",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "md:col-span-2 space-y-6",
                      children: [
                        (0, r.jsxs)("h2", {
                          className: "flex items-center font-medium text-xl",
                          children: [
                            (0, r.jsx)("span", {
                              className: "mr-auto",
                              children: "Recent Grenly",
                            }),
                            (0, r.jsx)("span", {
                              className: "text-zinc-500",
                              children: (0, r.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                className: "w-5 h-5",
                                children: (0, r.jsx)("path", {
                                  fillRule: "evenodd",
                                  d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z",
                                  clipRule: "evenodd",
                                }),
                              }),
                            }),
                          ],
                        }),
                        t
                          .slice(0, e)
                          .map((e) => (0, r.jsx)(s.default, { take: e }, e.id)),
                        e < t.length &&
                          (0, r.jsx)("div", {
                            className: "flex justify-center pt-4",
                            children: (0, r.jsx)(m.$, {
                              onClick: () => {
                                a((e) => Math.min(e + 10, t.length));
                              },
                              className:
                                "bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white border border-zinc-800",
                              children: "Load More",
                            }),
                          }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      children: [(0, r.jsx)(h.default, {}), (0, r.jsx)(d, {})],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    13691: (e, a, t) => {
      "use strict";
      t.d(a, { default: () => g });
      var r = t(95155),
        n = t(12115),
        s = t(35007),
        i = t(63898),
        o = t(48173),
        l = t.n(o),
        c = t(99053),
        d = t(14085),
        h = t(29602);
      let m = [
        {
          id: "1",
          title: "Bitcoin Price Analysis: BTC Poised for Breakout",
          excerpt:
            "Technical indicators suggest Bitcoin is forming a bullish pattern that could lead to significant upside in the coming weeks.",
          author: {
            name: "Alex Chen",
            avatar: "/placeholder.svg?height=40&width=40",
            username: "alexc",
          },
          timeAgo: "2h ago",
        },
        {
          id: "2",
          title: "DeFi Summer 2.0: Projects to Watch",
          excerpt:
            "As DeFi activity heats up again, these protocols are showing promising innovations that could lead the next wave of adoption.",
          author: {
            name: "Sarah Kim",
            avatar: "/placeholder.svg?height=40&width=40",
            username: "sarahk",
          },
          timeAgo: "4h ago",
        },
        {
          id: "3",
          title: "NFT Market Recovery: Analysis and Predictions",
          excerpt:
            "After a prolonged downturn, the NFT market is showing signs of recovery with increased trading volume and new use cases emerging.",
          author: {
            name: "Michael Torres",
            avatar: "/placeholder.svg?height=40&width=40",
            username: "michaelt",
          },
          timeAgo: "6h ago",
        },
        {
          id: "4",
          title: "Layer 2 Solutions: Scaling the Future of Ethereum",
          excerpt:
            "As Ethereum continues to face scaling challenges, Layer 2 solutions are becoming increasingly important for the ecosystem's growth.",
          author: {
            name: "Emma Johnson",
            avatar: "/placeholder.svg?height=40&width=40",
            username: "emmaj",
          },
          timeAgo: "8h ago",
        },
        {
          id: "5",
          title: "Regulatory Developments: Impact on Crypto Markets",
          excerpt:
            "Recent regulatory announcements are reshaping the crypto landscape. Here's what traders and investors need to know.",
          author: {
            name: "David Wilson",
            avatar: "/placeholder.svg?height=40&width=40",
            username: "davidw",
          },
          timeAgo: "10h ago",
        },
      ];
      function g() {
        let [e, a] = (0, n.useState)(m[0]),
          [t, o] = (0, n.useState)(!1),
          g = (0, n.useRef)(null),
          u = () => {
            let e = Math.floor(Math.random() * m.length);
            a(m[e]), o(!0), setTimeout(() => o(!1), 1e3);
          };
        return (
          (0, n.useEffect)(() => {
            u();
            let e = setInterval(u, 12e4);
            return () => clearInterval(e);
          }, []),
          (0, r.jsxs)("div", {
            className: "relative mb-8",
            children: [
              (0, r.jsxs)(s.Zp, {
                ref: g,
                className: (0, h.cn)(
                  "border-zinc-800 bg-zinc-900/50 rounded-md overflow-hidden transition-all duration-500",
                  t
                    ? "ring-2 ring-[#1d419d] shadow-[0_0_15px_rgba(29,65,157,0.5)]"
                    : ""
                ),
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] overflow-hidden",
                    children: (0, r.jsx)("span", {
                      className:
                        "text-white text-[8rem] font-bold rotate-[-20deg] whitespace-nowrap",
                      children: "KING OF THE Grenly",
                    }),
                  }),
                  (0, r.jsxs)(s.Wu, {
                    className: "p-6 relative z-10",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "flex items-center mb-4",
                        children: [
                          (0, r.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                              (0, r.jsxs)(i.eu, {
                                className:
                                  "h-8 w-8 mr-2 border border-zinc-700",
                                children: [
                                  (0, r.jsx)(i.BK, {
                                    src: e.author.avatar,
                                    alt: e.author.name,
                                  }),
                                  (0, r.jsx)(i.q5, {
                                    children: e.author.name.charAt(0),
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                children: [
                                  (0, r.jsx)(l(), {
                                    href: "".concat(e.author.username),
                                    className:
                                      "text-sm font-normal hover:underline",
                                    children: e.author.name,
                                  }),
                                  (0, r.jsx)("p", {
                                    className: "text-xs text-zinc-500",
                                    children: e.timeAgo,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsx)("div", {
                            className: "ml-auto",
                            children: (0, r.jsx)("span", {
                              className:
                                "text-xs font-light px-2 py-1 bg-[#1d419d]/10 text-[#1d419d] rounded-full",
                              children: "Featured",
                            }),
                          }),
                        ],
                      }),
                      (0, r.jsx)("h3", {
                        className: "text-xl font-medium mb-2",
                        children: e.title,
                      }),
                      (0, r.jsx)("p", {
                        className: "text-zinc-400 font-light mb-4",
                        children: e.excerpt,
                      }),
                      (0, r.jsx)("div", {
                        className: "flex justify-end",
                        children: (0, r.jsx)(d.$, {
                          variant: "ghost",
                          size: "sm",
                          className: "text-[#1d419d] hover:bg-[#1d419d]/10",
                          asChild: !0,
                          children: (0, r.jsxs)(l(), {
                            href: "/article/".concat(e.id),
                            children: [
                              "Read more ",
                              (0, r.jsx)(c.A, { className: "ml-2 h-4 w-4" }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className:
                  "absolute -top-2 -right-2 bg-[#1d419d] text-white text-xs font-medium px-2 py-1 rounded-md",
                children: "King of the Grenly",
              }),
            ],
          })
        );
      }
    },
    38072: (e, a, t) => {
      "use strict";
      t.d(a, { default: () => x });
      var r = t(95155),
        n = t(12115),
        s = t(48173),
        i = t.n(s),
        o = t(84858),
        l = t(63348),
        c = t(11864),
        d = t(35765),
        h = t(63898),
        m = t(14085),
        g = t(89592),
        u = t(29602);
      function x(e) {
        let { take: a } = e,
          [t, s] = (0, n.useState)(a.agreed);
        return (0, r.jsxs)("div", {
          className:
            "rounded-md border border-zinc-800 bg-zinc-900/50 p-5 transition-all hover:border-zinc-700",
          children: [
            (0, r.jsxs)("div", {
              className: "mb-3 flex items-center",
              children: [
                (0, r.jsxs)(h.eu, {
                  className: "h-10 w-10 border border-zinc-700",
                  children: [
                    (0, r.jsx)(h.BK, {
                      src: "https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1",
                      alt: a.author.name,
                    }),
                    (0, r.jsx)(h.q5, { children: a.author.name.charAt(0) }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: "ml-3",
                  children: (0, r.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, r.jsx)(i(), {
                        href: "".concat(a.author.username),
                        className: "font-normal hover:underline",
                        children: a.author.name,
                      }),
                      (0, r.jsx)("span", {
                        className: "text-sm text-zinc-500",
                        children: "\xb7",
                      }),
                      (0, r.jsx)("span", {
                        className: "text-sm text-zinc-500",
                        children: a.timeAgo,
                      }),
                    ],
                  }),
                }),
                (0, r.jsx)(m.$, {
                  variant: "ghost",
                  size: "icon",
                  className:
                    "ml-auto rounded-full text-zinc-500 hover:bg-zinc-800 hover:text-white",
                  children: (0, r.jsx)(o.A, { className: "h-5 w-5" }),
                }),
              ],
            }),
            (0, r.jsx)("p", {
              className: "mb-4 font-light text-zinc-100",
              children: a.content,
            }),
            (0, r.jsxs)("div", {
              className: "mb-3 space-y-2",
              children: [
                (0, r.jsxs)("div", {
                  className: "flex justify-between text-sm",
                  children: [
                    (0, r.jsxs)("span", {
                      className: "font-normal text-white",
                      children: ["AGREE ", a.agreePercentage, "%"],
                    }),
                    (0, r.jsxs)("span", {
                      className: "text-zinc-500",
                      children: [a.agreeCount, " HOLDERS"],
                    }),
                  ],
                }),
                (0, r.jsx)(g.k, {
                  value: a.agreePercentage,
                  className: "h-1.5 bg-red-500/20",
                  indicatorClassName: "bg-[#1d419d]",
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className:
                "flex items-center justify-between border-t border-zinc-800 pt-3",
              children: [
                (0, r.jsxs)("div", {
                  className: "flex items-center gap-4",
                  children: [
                    (0, r.jsxs)(m.$, {
                      variant: "ghost",
                      size: "sm",
                      className:
                        "flex items-center gap-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white",
                      children: [
                        (0, r.jsx)(l.A, { className: "h-4 w-4" }),
                        (0, r.jsx)("span", { children: a.commentCount }),
                      ],
                    }),
                    (0, r.jsxs)(m.$, {
                      variant: "ghost",
                      size: "sm",
                      className: (0, u.cn)(
                        "flex items-center gap-1.5 hover:bg-zinc-800 hover:text-[#1d419d]",
                        t ? "text-[#1d419d]" : "text-zinc-400"
                      ),
                      onClick: () => s(!t),
                      children: [
                        (0, r.jsx)(c.A, { className: "h-4 w-4" }),
                        (0, r.jsx)("span", { children: "Agree" }),
                      ],
                    }),
                    (0, r.jsx)(m.$, {
                      variant: "ghost",
                      size: "sm",
                      className:
                        "flex items-center gap-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white",
                      asChild: !0,
                      children: (0, r.jsxs)(i(), {
                        href: "/trade/".concat(a.id),
                        children: [
                          (0, r.jsx)(d.A, { className: "h-4 w-4 mr-1" }),
                          "Details",
                        ],
                      }),
                    }),
                  ],
                }),
                (0, r.jsx)("span", {
                  className: "font-normal text-[#1d419d]",
                  children: a.solValue,
                }),
              ],
            }),
          ],
        });
      }
    },
    63898: (e, a, t) => {
      "use strict";
      t.d(a, { BK: () => l, eu: () => o, q5: () => c });
      var r = t(95155),
        n = t(12115),
        s = t(74920),
        i = t(29602);
      let o = n.forwardRef((e, a) => {
        let { className: t, ...n } = e;
        return (0, r.jsx)(s.Root, {
          ref: a,
          className: (0, i.cn)(
            "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
            t
          ),
          ...n,
        });
      });
      o.displayName = s.Root.displayName;
      let l = n.forwardRef((e, a) => {
        let { className: t, ...n } = e;
        return (0, r.jsx)(s.Image, {
          ref: a,
          className: (0, i.cn)("aspect-square h-full w-full", t),
          ...n,
        });
      });
      l.displayName = s.Image.displayName;
      let c = n.forwardRef((e, a) => {
        let { className: t, ...n } = e;
        return (0, r.jsx)(s.Fallback, {
          ref: a,
          className: (0, i.cn)(
            "flex h-full w-full items-center justify-center rounded-full bg-zinc-800 text-zinc-300",
            t
          ),
          ...n,
        });
      });
      c.displayName = s.Fallback.displayName;
    },
    14085: (e, a, t) => {
      "use strict";
      t.d(a, { $: () => c });
      var r = t(95155),
        n = t(12115),
        s = t(12317),
        i = t(31027),
        o = t(29602);
      let l = (0, i.F)(
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
        c = n.forwardRef((e, a) => {
          let { className: t, variant: n, size: i, asChild: c = !1, ...d } = e,
            h = c ? s.DX : "button";
          return (0, r.jsx)(h, {
            className: (0, o.cn)(l({ variant: n, size: i, className: t })),
            ref: a,
            ...d,
          });
        });
      c.displayName = "Button";
    },
    35007: (e, a, t) => {
      "use strict";
      t.d(a, {
        Wu: () => c,
        ZB: () => l,
        Zp: () => i,
        aR: () => o,
        wL: () => d,
      });
      var r = t(95155),
        n = t(12115),
        s = t(29602);
      let i = n.forwardRef((e, a) => {
        let { className: t, ...n } = e;
        return (0, r.jsx)("div", {
          ref: a,
          className: (0, s.cn)(
            "rounded-xl border bg-card text-card-foreground shadow",
            t
          ),
          ...n,
        });
      });
      i.displayName = "Card";
      let o = n.forwardRef((e, a) => {
        let { className: t, ...n } = e;
        return (0, r.jsx)("div", {
          ref: a,
          className: (0, s.cn)("flex flex-col space-y-1.5 p-6", t),
          ...n,
        });
      });
      o.displayName = "CardHeader";
      let l = n.forwardRef((e, a) => {
        let { className: t, ...n } = e;
        return (0, r.jsx)("h3", {
          ref: a,
          className: (0, s.cn)("font-semibold leading-none tracking-tight", t),
          ...n,
        });
      });
      (l.displayName = "CardTitle"),
        (n.forwardRef((e, a) => {
          let { className: t, ...n } = e;
          return (0, r.jsx)("p", {
            ref: a,
            className: (0, s.cn)("text-sm text-muted-foreground", t),
            ...n,
          });
        }).displayName = "CardDescription");
      let c = n.forwardRef((e, a) => {
        let { className: t, ...n } = e;
        return (0, r.jsx)("div", {
          ref: a,
          className: (0, s.cn)("p-6 pt-0", t),
          ...n,
        });
      });
      c.displayName = "CardContent";
      let d = n.forwardRef((e, a) => {
        let { className: t, ...n } = e;
        return (0, r.jsx)("div", {
          ref: a,
          className: (0, s.cn)("flex items-center p-6 pt-0", t),
          ...n,
        });
      });
      d.displayName = "CardFooter";
    },
    89592: (e, a, t) => {
      "use strict";
      t.d(a, { k: () => o });
      var r = t(95155),
        n = t(12115),
        s = t(16838),
        i = t(29602);
      let o = n.forwardRef((e, a) => {
        let { className: t, value: n, indicatorClassName: o, ...l } = e;
        return (0, r.jsx)(s.bL, {
          ref: a,
          className: (0, i.cn)(
            "relative h-2 w-full overflow-hidden rounded-full bg-zinc-800",
            t
          ),
          ...l,
          children: (0, r.jsx)(s.C1, {
            className: (0, i.cn)(
              "h-full w-full flex-1 bg-[#1d419d] transition-all",
              o
            ),
            style: { transform: "translateX(-".concat(100 - (n || 0), "%)") },
          }),
        });
      });
      o.displayName = s.bL.displayName;
    },
    29602: (e, a, t) => {
      "use strict";
      t.d(a, { cn: () => s });
      var r = t(43463),
        n = t(69795);
      function s() {
        for (var e = arguments.length, a = Array(e), t = 0; t < e; t++)
          a[t] = arguments[t];
        return (0, n.QP)((0, r.$)(a));
      }
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    e.O(0, [780, 173, 146, 441, 517, 358], () => a(84176)), (_N_E = e.O());
  },
]);
