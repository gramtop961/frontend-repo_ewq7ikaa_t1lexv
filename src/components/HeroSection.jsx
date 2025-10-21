import { Fingerprint, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A0B0F] text-white">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(32,64,255,0.25),transparent_60%)]" />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/10 to-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            <span>Built for devs • SOC2-ready</span>
          </div>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            Auth that disappears.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-white/70 sm:text-xl">
            Passwordless auth SDK with biometric logins. Drop it in with one
            line and let us handle device-bound keys, passkeys, and risk.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#code"
              className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90"
            >
              <Zap className="h-4 w-4" />
              Try the 1‑line install
            </a>
            <a
              href="#trust"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
            >
              <Fingerprint className="h-4 w-4 text-indigo-300" />
              See how it works
            </a>
          </div>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { title: "Device-bound", desc: "Passkeys + WebAuthn", icon: Fingerprint },
            { title: "Drop-in", desc: "1 line, no flow UI", icon: Zap },
            { title: "Hardened", desc: "FIDO2 + risk scoring", icon: ShieldCheck },
          ].map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, desc, icon: Icon }) {
  return (
    <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
          <Icon className="h-5 w-5 text-indigo-300" />
        </span>
        <div>
          <p className="text-sm font-medium text-white">{title}</p>
          <p className="text-xs text-white/60">{desc}</p>
        </div>
      </div>
    </div>
  );
}
