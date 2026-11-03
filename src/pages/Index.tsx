export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-xl font-bold">WarsaAI</div>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-slate-600 hover:text-slate-900">
              Features
            </a>
            <a href="#about" className="text-sm text-slate-600 hover:text-slate-900">
              About
            </a>
            <a href="#community" className="text-sm text-slate-600 hover:text-slate-900">
              Community
            </a>
          </div>

          <button className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
              AI Co-Founder for Entrepreneurs
            </div>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Turn ideas into{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                action
              </span>
              .
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 md:text-xl">
              Build plans, create content, automate work and grow your business
              faster with AI.
            </p>
          </div>

          {/* Prompt Box */}
          <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-2xl backdrop-blur-xl">
            <textarea
              rows={4}
              placeholder="What are you building?"
              className="w-full resize-none border-0 bg-transparent p-4 text-lg outline-none placeholder:text-slate-400"
            />

            <div className="flex flex-col gap-4 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                  Startup
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                  Marketing
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                  Automation
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                  AI Agents
                </span>
              </div>

              <button className="rounded-xl bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-800">
                Start Building →
              </button>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-slate-500">
            Built by Ahmed Warsame • 20 years in financial technology and
            operations
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold">What You Can Do</h2>
          <p className="mt-4 text-slate-600">
            Practical AI for real business outcomes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "🚀",
              title: "Validate Ideas",
              text: "Test opportunities before investing time and money.",
            },
            {
              icon: "📈",
              title: "Grow Faster",
              text: "Create marketing and growth plans in minutes.",
            },
            {
              icon: "⚡",
              title: "Save Time",
              text: "Automate repetitive tasks and workflows.",
            },
            {
              icon: "🤖",
              title: "Build AI Assistants",
              text: "Create AI agents for sales, support and operations.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 text-3xl">{item.icon}</div>

              <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>

              <p className="text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section id="about" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold">Built by Ahmed Warsame</h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            After nearly 20 years delivering technology solutions across
            Goldman Sachs, BNP Paribas and Rothesay, Ahmed now helps
            entrepreneurs use AI with clarity, structure and measurable
            results.
          </p>

          <button className="mt-8 rounded-xl border border-slate-300 bg-white px-6 py-3 font-medium transition hover:bg-slate-100">
            Learn More
          </button>
        </div>
      </section>

      {/* Final CTA */}
      <section id="community" className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-5xl font-bold tracking-tight md:text-6xl">
            Stop learning about AI.
            <br />
            Start using it.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Get practical AI support, strategies and systems to help your
            business grow.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-xl bg-slate-900 px-8 py-4 font-medium text-white transition hover:bg-slate-800">
              Get Started
            </button>

            <button className="rounded-xl border border-slate-300 px-8 py-4 font-medium transition hover:bg-slate-50">
              Join Community
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
