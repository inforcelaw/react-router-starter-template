import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Compass,
  Gamepad2,
  Map,
  Megaphone,
  Radio,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Users,
  Wrench,
} from "lucide-react";

const heroImages = [
  "/images/revival-banner-main.png",
  "/images/outback-vehicle-sunset.png",
  "/images/new-update-banner.png",
];

const games = [
  {
    title: "Outback Legends",
    status: "Live / In Development",
    category: "Off-road",
    tag: "Off-road adventure",
    image: "/images/outback-legends.png",
    description:
      "Explore rugged Australian tracks, tackle mud, climb rocky trails, and build your legacy with the community.",
    highlights: ["4WD trails", "Convoys", "Aussie maps", "Vehicle upgrades"],
    icon: Compass,
    robloxUrl: "https://www.roblox.com/games/135842330707358/Red-Dirt-Outback-4WD#!/about",
  }
];

const updates = [
  {
    title: "New Outback Regions",
    text: "Bigger tracks, new terrain layouts, scenic routes, and more places to explore.",
    icon: Map,
  },

];

function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-3 text-sm font-black uppercase tracking-[0.35em] text-orange-400">
        {eyebrow}
      </p>
      <h2 className="ri-metal-text text-4xl font-black uppercase tracking-tight md:text-6xl">
        {title}
      </h2>
      {children && <p className="mt-5 text-lg leading-8 text-zinc-300">{children}</p>}
    </div>
  );
}

function Feature({ icon: Icon, title, text }) {
  return (
    <div className="rounded-2xl border border-orange-500/20 bg-black/45 p-5 shadow-2xl shadow-black/30 backdrop-blur transition hover:-translate-y-1 hover:border-orange-400/50">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-orange-400/40 bg-orange-500/10 text-orange-400">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-black uppercase tracking-wider text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-300">{text}</p>
    </div>
  );
}

export default function App() {
  const [activeImage, setActiveImage] = useState(0);
  const [filter, setFilter] = useState("All");

  const filteredGames = useMemo(() => {
    if (filter === "All") return games;
    return games.filter((game) => game.category === filter);
  }, [filter]);

  return (
    <main className="ri-noise relative min-h-screen overflow-hidden bg-[#070707] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_75%_20%,rgba(249,115,22,0.24),transparent_34%),radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.08),transparent_22%),linear-gradient(135deg,#050505,#15100c_45%,#060606)]" />
      <div className="fixed inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(249,115,22,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,.12)_1px,transparent_1px)] [background-size:70px_70px]" />

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/images/revival-logo.png"
              alt="Revival Interactive logo"
              className="h-14 w-14 rounded-full object-cover shadow-lg shadow-orange-500/20"
            />
            <div>
              <p className="text-lg font-black uppercase tracking-[0.28em] text-zinc-100">Revival</p>
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-orange-400">Interactive</p>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-sm font-bold uppercase tracking-widest text-zinc-300 md:flex">
            <a className="hover:text-orange-400" href="#games">Games</a>
            <a className="hover:text-orange-400" href="#updates">Updates</a>
            <a className="hover:text-orange-400" href="#community">Community</a>
          </div>

          <a
            href="#games"
            className="rounded-full border border-orange-400/50 bg-orange-500 px-5 py-2 text-sm font-black uppercase tracking-widest text-black shadow-lg shadow-orange-500/25 transition hover:bg-orange-300"
          >
            Explore
          </a>
        </div>
      </nav>

      <section id="home" className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-[1.02fr_.98fr] md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="relative z-10"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-black uppercase tracking-[0.22em] text-orange-300">
            <Sparkles size={16} /> Aussie Outback Gaming
          </div>

          <h1 className="max-w-4xl text-6xl font-black uppercase leading-[0.9] tracking-tight text-zinc-100 md:text-8xl">
            Built for the
            <span className="block bg-gradient-to-r from-orange-300 via-orange-500 to-orange-700 bg-clip-text text-transparent">
              Outback.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
            Professional Roblox experiences with muddy tracks, convoy sessions, fresh updates, and a community-first Revival Interactive feel.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#games"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-orange-500 px-7 py-4 font-black uppercase tracking-widest text-black shadow-2xl shadow-orange-500/25 transition hover:bg-orange-300"
            >
              Showcase Games <ArrowRight className="transition group-hover:translate-x-1" size={20} />
            </a>
            <a
              href="#community"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-7 py-4 font-black uppercase tracking-widest text-white backdrop-blur transition hover:border-orange-400/50 hover:bg-orange-500/10"
            >
              Join the Community
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-5 rounded-[2rem] bg-orange-500/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-orange-400/25 bg-zinc-950 shadow-2xl shadow-black">
            <img
              src={heroImages[activeImage]}
              alt="Revival Interactive outback showcase"
              className="h-[430px] w-full object-cover opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/55 p-5 backdrop-blur-xl">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-300">Featured</p>
              <h3 className="mt-1 text-3xl font-black uppercase">Outback Legends</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">Mud, dust, convoys, updates, and proper Aussie off-road energy.</p>
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`h-2.5 rounded-full transition-all ${activeImage === index ? "w-12 bg-orange-400" : "w-2.5 bg-white/25 hover:bg-white/50"}`}
                aria-label={`Show hero image ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-10 md:grid-cols-4">
        <Feature icon={Map} title="Explore" text="Wide maps, dirt tracks, rocky climbs, hidden spots, and scenic outback routes." />
        <Feature icon={Wrench} title="Revive" text="We improve systems, polish gameplay, fix rough edges, and bring projects back stronger." />
        <Feature icon={Users} title="Community" text="A place for players to cruise, share feedback, join events, and build the future together." />
        <Feature icon={ShieldCheck} title="Quality" text="Professional UI, strong moderation, cleaner systems, and safer game experiences." />
      </section>

      <section id="games" className="mx-auto max-w-7xl px-5 py-20">
        <SectionTitle eyebrow="Our Games" title="
Revival Interactive">
          Check out our games!
        </SectionTitle>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {["All", "Off-road", "Social", "Private"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-full border px-5 py-2 text-sm font-black uppercase tracking-widest transition ${
                filter === item
                  ? "border-orange-400 bg-orange-500 text-black"
                  : "border-white/15 bg-white/5 text-zinc-300 hover:border-orange-400/40 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {filteredGames.map((game) => {
            const Icon = game.icon;
            return (
             <motion.a
  layout
  key={game.title}
  href={game.robloxUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="group block overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/30 backdrop-blur transition hover:-translate-y-1 hover:border-orange-400/50"
>
  <div className="relative h-56 overflow-hidden bg-zinc-900">
    <img
      src={game.image}
      alt={game.title}
      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
    <div className="absolute left-4 top-4 rounded-full border border-orange-400/40 bg-black/55 px-3 py-1 text-xs font-black uppercase tracking-widest text-orange-300 backdrop-blur">
      {game.status}
    </div>
    <div className="absolute bottom-4 right-4 grid h-12 w-12 place-items-center rounded-xl bg-orange-500 text-black">
      <Icon size={25} />
    </div>
  </div>

  <div className="p-6">
    <p className="text-xs font-black uppercase tracking-[0.28em] text-orange-400">
      {game.tag}
    </p>

    <h3 className="mt-2 text-3xl font-black uppercase text-white">
      {game.title}
    </h3>

    <p className="mt-4 min-h-24 text-sm leading-7 text-zinc-300">
      {game.description}
    </p>

    <div className="mt-5 flex flex-wrap gap-2">
      {game.highlights.map((highlight) => (
        <span
          key={highlight}
          className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-200"
        >
          {highlight}
        </span>
      ))}
    </div>

    <div className="mt-6 inline-flex items-center gap-2 font-black uppercase tracking-widest text-orange-400 transition group-hover:text-orange-200">
      Play on Roblox <ArrowRight size={18} />
    </div>
  </div>
</motion.a>
            );
          })}
        </div>
      </section>

      <section id="updates" className="relative border-y border-orange-400/10 bg-black/40 px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[.9fr_1.1fr] md:items-center">
          <div>
            <SectionTitle eyebrow="Fresh Content" title="New Updates" />

          </div>
          <div className="grid gap-4">
            {updates.map(({ title, text, icon: Icon }, index) => (
              <div key={title} className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-orange-500 font-black text-black">
                  <Icon size={23} />
                </div>
                <div>
                  <p className="text-lg font-black uppercase text-zinc-100">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-zinc-400">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="mx-auto max-w-7xl px-5 py-20">
        <div className="overflow-hidden rounded-[2rem] border border-orange-400/20 bg-gradient-to-br from-orange-500/15 via-white/[0.04] to-black p-8 shadow-2xl shadow-black/30 md:p-12">
          <div className="grid gap-10 md:grid-cols-[1.1fr_.9fr] md:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-300">More Than a Game</p>
              <h2 className="mt-4 text-5xl font-black uppercase leading-none text-white md:text-6xl">
                Build the Outback Together.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                A strong community hub for players, updates, events, feedback, and sneak peeks. Keep the vibe friendly, clean, and properly Revival.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                  <Gamepad2 className="text-orange-400" />
                  <p className="mt-3 font-black uppercase">Play</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                  <Megaphone className="text-orange-400" />
                  <p className="mt-3 font-black uppercase">Updates</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                  <Trophy className="text-orange-400" />
                  <p className="mt-3 font-black uppercase">Belong</p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-black/45 p-6">
              <Radio className="mb-5 text-orange-400" size={42} />
              <h3 className="text-2xl font-black uppercase">Revival Interactive</h3>
              <p className="mt-4 leading-7 text-zinc-300">
                Passion. Creativity. Community. Second chances. A proper home for off-road games and future Roblox projects.
              </p>
              <a
                href="https://discord.gg/fbYgdN2sDd"
                className="mt-7 inline-flex items-center gap-3 rounded-xl bg-orange-500 px-5 py-3 font-black uppercase tracking-widest text-black hover:bg-orange-300"
              >
                Join our discord <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 text-center">
        <p className="font-black uppercase tracking-[0.35em] text-zinc-400">Revival Interactive</p>
        <p className="mt-3 text-sm text-zinc-500">Good games deserve a second chance.</p>
      </footer>
    </main>
  );
}
