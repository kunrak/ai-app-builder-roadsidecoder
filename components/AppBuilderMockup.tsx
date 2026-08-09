"use client";

import {
  Bot,
  ChevronRight,
  Code2,
  Eye,
  FileCode2,
  FolderOpen,
  Globe,
  LayoutTemplate,
  Lock,
  MessageSquare,
  Plus,
  RefreshCw,
  Sparkles,
} from "lucide-react";

const PROJECT_FILES = [
  { name: "app", type: "folder", active: false, indent: 0 },
  { name: "page.tsx", type: "file", active: true, indent: 1 },
  { name: "layout.tsx", type: "file", active: false, indent: 1 },
  { name: "globals.css", type: "file", active: false, indent: 1 },
  { name: "components", type: "folder", active: false, indent: 0 },
  { name: "hero.tsx", type: "file", active: false, indent: 1 },
  { name: "navbar.tsx", type: "file", active: false, indent: 1 },
];

const CHAT_MESSAGES = [
  {
    role: "user" as const,
    content: "Add a hero section with a gradient background and a CTA button.",
  },
  {
    role: "assistant" as const,
    content:
      "I've updated `page.tsx` with a responsive hero section. The gradient uses a soft purple-to-blue palette, and the CTA includes a hover animation.",
    code: `export default function Home() {
  return (
    <section className="hero">
      <h1>Build faster with AI</h1>
      <Button>Get Started</Button>
    </section>
  );
}`,
  },
  {
    role: "assistant" as const,
    content:
      "Also added `globals.css` utility classes for the gradient and typography scale. Preview is live — try resizing the viewport.",
  },
];

function TrafficLights() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
    </div>
  );
}

function PreviewContent() {
  return (
    <div className="relative h-full overflow-hidden bg-[#0c0c12]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(139,92,246,0.18),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_100%,rgba(59,130,246,0.12),transparent)]" />

      <nav className="relative flex items-center justify-between border-b border-white/5 px-5 py-3">
        <span className="text-xs font-semibold tracking-wide text-white/80">
          Lumina
        </span>
        <div className="hidden items-center gap-5 text-[10px] text-white/40 sm:flex">
          <span>Features</span>
          <span>Pricing</span>
          <span>Docs</span>
        </div>
        <button className="rounded-full bg-linear-to-r from-violet-500 to-blue-500 px-3 py-1 text-[10px] font-medium text-white">
          Get Started
        </button>
      </nav>

      <div className="relative flex flex-col items-center px-6 py-10 text-center sm:py-14">
        <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-violet-500/20 bg-violet-500/10 px-2.5 py-0.5 text-[9px] text-violet-300">
          <Sparkles className="h-2.5 w-2.5" />
          AI-Powered Platform
        </div>
        <h1 className="max-w-[220px] text-balance text-lg font-semibold leading-tight tracking-tight text-white sm:text-xl">
          Ship products{" "}
          <span className="bg-linear-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            10× faster
          </span>
        </h1>
        <p className="mt-2 max-w-[200px] text-[10px] leading-relaxed text-white/40">
          Describe your idea. Watch it come to life in seconds with live preview
          and instant deploys.
        </p>
        <div className="mt-5 flex gap-2">
          <button className="rounded-lg bg-linear-to-r from-violet-600 to-blue-600 px-4 py-1.5 text-[10px] font-medium text-white shadow-lg shadow-violet-500/20">
            Start Building
          </button>
          <button className="rounded-lg border border-white/10 px-4 py-1.5 text-[10px] text-white/60">
            View Demo
          </button>
        </div>

        <div className="mt-8 grid w-full max-w-[280px] grid-cols-3 gap-2">
          {["Instant", "Responsive", "Deploy"].map((label) => (
            <div
              key={label}
              className="rounded-lg border border-white/5 bg-white/2 px-2 py-2 text-[8px] text-white/50"
            >
              <LayoutTemplate className="mx-auto mb-1 h-3 w-3 text-violet-400/70" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AppBuilderMockup() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-4 pb-32 pt-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="mb-10 text-center">
        <p className="mb-3 text-xs font-medium tracking-[0.2em] text-violet-400/80 uppercase">
          Workspace Preview
        </p>
        <h2 className="font-serif text-2xl tracking-tight text-white/90 sm:text-3xl">
          Your entire dev environment,{" "}
          <span className="bg-linear-to-r from-violet-400 via-blue-400 to-blue-500 bg-clip-text text-transparent">
            in one view
          </span>
        </h2>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-[#0d0d14] shadow-2xl shadow-violet-950/40">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-40 w-60 rounded-full bg-blue-600/8 blur-3xl" />

        <div className="flex h-[520px] min-h-0">
          {/* Left — Project sidebar */}
          <aside className="hidden w-[200px] shrink-0 flex-col border-r border-white/6 bg-[#0a0a10]/80 lg:flex">
            <div className="flex items-center justify-between border-b border-white/6 px-3 py-2.5">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-linear-to-br from-violet-600/30 to-blue-600/30">
                  <FolderOpen className="h-3 w-3 text-violet-300" />
                </div>
                <span className="text-[11px] font-medium text-white/70">
                  lumina-app
                </span>
              </div>
              <button className="rounded p-0.5 text-white/30 hover:bg-white/5 hover:text-white/60">
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="border-b border-white/6 px-3 py-2">
              <p className="mb-1.5 text-[9px] font-semibold tracking-wider text-white/25 uppercase">
                Explorer
              </p>
              <div className="space-y-0.5">
                {PROJECT_FILES.map((file) => (
                  <div
                    key={file.name}
                    className={`flex items-center gap-1.5 rounded-md px-2 py-1 text-[10px] ${
                      file.active
                        ? "bg-violet-500/15 text-violet-200"
                        : "text-white/45 hover:bg-white/4"
                    }`}
                    style={{ paddingLeft: `${8 + file.indent * 12}px` }}
                  >
                    {file.type === "folder" ? (
                      <FolderOpen className="h-3 w-3 shrink-0 opacity-60" />
                    ) : (
                      <FileCode2 className="h-3 w-3 shrink-0 opacity-60" />
                    )}
                    {file.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto border-t border-white/6 p-3">
              <div className="flex items-center gap-2 rounded-lg border border-white/6 bg-white/2 px-2.5 py-2">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-[9px] text-white/40">Synced · main</span>
              </div>
            </div>
          </aside>

          {/* Center — Browser preview */}
          <div className="flex min-w-0 flex-1 flex-col">
            <div className="flex items-center justify-between border-b border-white/6 px-4 py-2">
              <div className="flex items-center gap-3">
                <Eye className="h-3.5 w-3.5 text-violet-400/70" />
                <span className="text-[11px] font-medium text-white/60">
                  Live Preview
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="rounded-md p-1 text-white/30 hover:bg-white/5 hover:text-white/50">
                  <RefreshCw className="h-3 w-3" />
                </button>
                <button className="rounded-md p-1 text-white/30 hover:bg-white/5 hover:text-white/50">
                  <Globe className="h-3 w-3" />
                </button>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-4">
              <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-white/8 bg-[#14141c] shadow-inner">
                {/* macOS browser chrome */}
                <div className="flex items-center gap-3 border-b border-white/6 bg-[#1a1a24] px-3 py-2">
                  <TrafficLights />
                  <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-white/6 bg-[#0d0d14] px-3 py-1">
                    <Lock className="h-2.5 w-2.5 shrink-0 text-emerald-400/70" />
                    <span className="truncate text-[10px] text-white/40">
                      https://lumina-app.forge.dev
                    </span>
                  </div>
                </div>

                <div className="min-h-0 flex-1 overflow-hidden">
                  <PreviewContent />
                </div>
              </div>
            </div>
          </div>

          {/* Right — AI chat sidebar */}
          <aside className="hidden w-[260px] shrink-0 flex-col border-l border-white/6 bg-[#0a0a10]/80 md:flex">
            <div className="flex items-center justify-between border-b border-white/6 px-3 py-2.5">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-linear-to-br from-violet-600/40 to-blue-600/40">
                  <Bot className="h-3.5 w-3.5 text-violet-200" />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-white/70">
                    Forge Agent
                  </p>
                  <p className="text-[9px] text-emerald-400/80">Online</p>
                </div>
              </div>
              <MessageSquare className="h-3.5 w-3.5 text-white/25" />
            </div>

            <div className="flex-1 space-y-3 overflow-hidden px-3 py-3">
              {CHAT_MESSAGES.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                      msg.role === "user"
                        ? "bg-white/10"
                        : "bg-linear-to-br from-violet-600/50 to-blue-600/50"
                    }`}
                  >
                    {msg.role === "user" ? (
                      <span className="text-[8px] font-medium text-white/60">
                        U
                      </span>
                    ) : (
                      <Sparkles className="h-2.5 w-2.5 text-violet-200" />
                    )}
                  </div>
                  <div
                    className={`min-w-0 flex-1 space-y-1.5 ${
                      msg.role === "user" ? "text-right" : ""
                    }`}
                  >
                    <div
                      className={`inline-block max-w-full rounded-lg px-2.5 py-1.5 text-left text-[10px] leading-relaxed ${
                        msg.role === "user"
                          ? "bg-violet-600/20 text-violet-100/90"
                          : "bg-white/4 text-white/55"
                      }`}
                    >
                      {msg.content}
                    </div>
                    {"code" in msg && msg.code && (
                      <div className="overflow-hidden rounded-lg border border-white/6 bg-[#0d0d14]">
                        <div className="flex items-center gap-1.5 border-b border-white/6 px-2 py-1">
                          <Code2 className="h-2.5 w-2.5 text-violet-400/60" />
                          <span className="text-[8px] text-white/30">
                            page.tsx
                          </span>
                        </div>
                        <pre className="overflow-x-auto p-2 text-[8px] leading-relaxed text-violet-200/70">
                          <code>{msg.code}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/6 p-3">
              <div className="rounded-lg border border-white/8 bg-[#0d0d14] p-2">
                <p className="mb-2 text-[9px] text-white/25">
                  Ask Forge to refine your app…
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    <span className="rounded bg-violet-500/15 px-1.5 py-0.5 text-[8px] text-violet-300/80">
                      @page.tsx
                    </span>
                  </div>
                  <button className="flex h-5 w-5 items-center justify-center rounded-md bg-linear-to-r from-violet-600 to-blue-600">
                    <ChevronRight className="h-3 w-3 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
