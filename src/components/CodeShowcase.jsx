import { useState } from "react";
import { Copy, Check } from "lucide-react";

const snippets = {
  js: {
    label: "JavaScript",
    code: `// 1) Install\nnpm i @ghostauth/js\n\n// 2) One line to sign in\nimport { auth } from '@ghostauth/js'\nconst user = await auth()\nconsole.log(user)`,
  },
  python: {
    label: "Python",
    code: `# 1) Install\npip install ghostauth\n\n# 2) One line to verify\nfrom ghostauth import auth\nuser = auth()\nprint(user)`,
  },
  curl: {
    label: "cURL",
    code: `# Exchange a passkey assertion for a session\ncurl -X POST "$GHOSTAUTH_URL/v1/verify" \\\n  -H "Authorization: Bearer $GHOSTAUTH_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d '{"assertion": "..."}'`,
  },
};

export default function CodeShowcase() {
  const [active, setActive] = useState("js");
  const [copied, setCopied] = useState(false);

  const code = snippets[active].code;

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      const t = setTimeout(() => setCopied(false), 1200);
      return () => clearTimeout(t);
    } catch (e) {
      // noop
    }
  };

  return (
    <section id="code" className="relative bg-[#05060A] py-14 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(88,28,135,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Drop-in by design
            </h2>
            <p className="mt-1 text-white/60">
              Bring your own UI. We handle passkeys, device binding, and risk.
            </p>
          </div>
          <div className="hidden gap-2 sm:flex">
            {Object.entries(snippets).map(([k, v]) => (
              <button
                key={k}
                onClick={() => setActive(k)}
                className={`rounded-lg border px-3 py-1.5 text-sm transition ${
                  active === k
                    ? "border-indigo-400/40 bg-indigo-400/10 text-indigo-200"
                    : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0B0D14] shadow-2xl shadow-black/30">
          <div className="flex items-center justify-between border-b border-white/10 bg-black/20 px-4 py-2">
            <div className="flex items-center gap-2 text-xs text-white/60">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-rose-500" />
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <span className="ml-3 hidden sm:inline">ghostauth-example.{active}</span>
            </div>
            <button
              onClick={onCopy}
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition hover:bg-white/10"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" /> Copied
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" /> Copy
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr]">
            <div className="hidden border-r border-white/10 bg-black/10 p-3 sm:block">
              <div className="flex flex-col gap-1">
                {Object.entries(snippets).map(([k, v]) => (
                  <button
                    key={k}
                    onClick={() => setActive(k)}
                    className={`w-full rounded-md px-3 py-2 text-left text-sm transition ${
                      active === k
                        ? "bg-indigo-500/15 text-indigo-200"
                        : "text-white/70 hover:bg-white/5"
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            <pre className="relative max-h-[380px] overflow-auto p-4 text-sm leading-relaxed text-indigo-100">
{code}
            </pre>
          </div>
        </div>

        <p className="mt-4 text-center text-sm text-white/50">
          Works with React, Next.js, Python, and any backend over HTTP.
        </p>
      </div>
    </section>
  );
}
