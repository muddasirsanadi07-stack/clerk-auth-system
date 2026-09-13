import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-black text-neutral-100">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-neutral-950/70 border-b border-neutral-800/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-[1.5px] shadow-lg shadow-indigo-500/20">
              <div className="h-full w-full bg-neutral-950 rounded-[10px] flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 text-lg">
                E
              </div>
            </div>
            <span className="font-semibold text-lg tracking-tight text-white">Echo</span>
            <span className="hidden sm:inline-block text-[11px] font-medium px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              Clerk Auth
            </span>
          </div>

          <nav className="flex items-center gap-3" id="auth-controls">
            <Show when="signed-out">
              <SignInButton mode="modal">
                <button
                  id="sign-in-btn"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/60 transition-all cursor-pointer"
                >
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button
                  id="sign-up-btn"
                  className="rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/20 hover:from-indigo-400 hover:to-purple-500 hover:shadow-indigo-500/30 transition-all cursor-pointer"
                >
                  Sign Up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <div className="flex items-center gap-3 bg-neutral-900/80 border border-neutral-800 px-3 py-1.5 rounded-full">
                <span className="text-xs text-neutral-300 font-medium">Account</span>
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "h-8 w-8 ring-2 ring-indigo-500/30",
                    },
                  }}
                />
              </div>
            </Show>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-6 py-16 flex flex-col items-center text-center justify-center">
        {/* Glow effect */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-6">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Clerk CLI Integration Ready
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white max-w-3xl leading-tight sm:leading-tight">
          Authentication made effortless with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Clerk & Next.js
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-neutral-400 max-w-xl leading-relaxed">
          Sign up with your first test account to verify session management, profile controls, and secure multi-session auth.
        </p>

        {/* Action / Callout banner */}
        <div className="mt-10 w-full max-w-lg">
          <Show when="signed-out">
            <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-xl shadow-2xl flex flex-col items-center gap-4">
              <p className="text-sm text-neutral-300">
                Ready to test? Create a test user or sign into your Clerk dashboard.
              </p>
              <div className="flex items-center gap-3 w-full justify-center">
                <SignUpButton mode="modal">
                  <button className="flex-1 max-w-[180px] rounded-xl bg-indigo-600 hover:bg-indigo-500 py-2.5 px-4 text-sm font-semibold text-white transition-all shadow-md shadow-indigo-600/25 cursor-pointer">
                    Get Started Free
                  </button>
                </SignUpButton>
                <SignInButton mode="modal">
                  <button className="flex-1 max-w-[180px] rounded-xl border border-neutral-700 hover:bg-neutral-800 py-2.5 px-4 text-sm font-medium text-neutral-200 transition-all cursor-pointer">
                    Sign In
                  </button>
                </SignInButton>
              </div>
            </div>
          </Show>

          <Show when="signed-in">
            <div className="p-6 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 backdrop-blur-xl shadow-2xl flex flex-col items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl font-bold">
                ✓
              </div>
              <h2 className="text-lg font-semibold text-emerald-300">You are securely signed in!</h2>
              <p className="text-xs text-neutral-400 max-w-sm">
                Your Clerk session is active. You can manage your user profile, security keys, and sessions using the avatar above.
              </p>
            </div>
          </Show>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full text-left">
          <div className="p-6 rounded-xl border border-neutral-800/80 bg-neutral-900/40 hover:border-neutral-700 transition-all group">
            <div className="h-10 w-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-lg font-semibold mb-4 group-hover:scale-105 transition-transform">
              🔒
            </div>
            <h3 className="font-semibold text-white text-base">Drop-in UI</h3>
            <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
              Pre-built Sign In, Sign Up, and User Profile components that can be fully customized with your brand theme.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-neutral-800/80 bg-neutral-900/40 hover:border-neutral-700 transition-all group">
            <div className="h-10 w-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center text-lg font-semibold mb-4 group-hover:scale-105 transition-transform">
              ⚡
            </div>
            <h3 className="font-semibold text-white text-base">Edge Middleware</h3>
            <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
              Global route protection and proxy matcher running at the edge with Next.js 16 and async authentication tokens.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-neutral-800/80 bg-neutral-900/40 hover:border-neutral-700 transition-all group">
            <div className="h-10 w-10 rounded-lg bg-pink-500/10 text-pink-400 flex items-center justify-center text-lg font-semibold mb-4 group-hover:scale-105 transition-transform">
              👥
            </div>
            <h3 className="font-semibold text-white text-base">Organizations & Roles</h3>
            <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
              Multi-tenant B2B support ready out-of-the-box with role-based access control and invitation flows.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800/60 py-6 px-6 text-center text-xs text-neutral-500">
        <p>Built with Next.js and Clerk Authentication.</p>
      </footer>
    </div>
  );
}
