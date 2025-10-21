import { ArrowRight } from "lucide-react";

export default function FooterCTA() {
  return (
    <footer className="bg-[#05060A] pb-20 pt-12 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-cyan-400/10 p-6 md:p-10">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h4 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Go live in minutes
              </h4>
              <p className="mt-2 text-white/70">
                Create an account, drop in one line, and ship passwordless auth
                your users won’t notice—because it just works.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:justify-end">
              <a
                href="#code"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90"
              >
                Start free
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#trust"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
              >
                Security overview
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row">
          <span>© {new Date().getFullYear()} GhostAuth</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">
              Status
            </a>
            <a href="#" className="hover:text-white">
              Docs
            </a>
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
