import { ShieldCheck, CheckCircle, Lock } from "lucide-react";

export default function SocialProof() {
  return (
    <section id="trust" className="bg-[#0A0B0F] py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Built for security teams, loved by developers
            </h3>
            <ul className="mt-6 space-y-4 text-white/70">
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                <span>Device-bound keys with Passkeys and WebAuthn</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                <span>Risk signals: device posture, velocity, and anomaly scoring</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                <span>Compliance ready: SOC2 Type II, GDPR, regional data residency</span>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-white/60">
              <Badge icon={ShieldCheck} label="FIDO2" />
              <Badge icon={Lock} label="Origin-bound" />
              <Badge icon={ShieldCheck} label="TLS attestation" />
              <Badge icon={Lock} label="Key isolation" />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
            <div className="grid grid-cols-2 gap-4">
              {[
                { k: "99.99%", v: "Uptime" },
                { k: "<50ms", v: "Verify latency" },
                { k: "10min", v: "Avg. time to live" },
                { k: "3x", v: "Faster signup" },
              ].map((s) => (
                <Stat key={s.v} k={s.k} v={s.v} />
              ))}
            </div>
            <p className="mt-4 text-sm text-white/60">
              Numbers from production deployments across cloud regions.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <p className="mb-4 text-center text-xs uppercase tracking-wider text-white/40">
            Trusted by product and security teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-80">
            {[
              "Velora",
              "Nimbus Cloud",
              "PixelPath",
              "Forge AI",
              "Northwind",
            ].map((logo) => (
              <span
                key={logo}
                className="text-sm font-semibold tracking-wide text-white/60"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon: Icon, label }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
      <Icon className="h-3.5 w-3.5 text-indigo-300" />
      <span className="text-xs text-white/70">{label}</span>
    </span>
  );
}

function Stat({ k, v }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-4 text-center">
      <div className="text-2xl font-semibold text-white">{k}</div>
      <div className="text-xs text-white/60">{v}</div>
    </div>
  );
}
