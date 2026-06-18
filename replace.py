import sys

with open("index.html", "r") as f:
    lines = f.readlines()

new_content = """    <!-- Project Domains Grid -->
    <section id="sectors" class="py-24 border-b border-slate-200/60 relative bg-[#F8FAFC]">
      <div class="container mx-auto px-6 max-w-6xl">

        <!-- Section Heading -->
        <div class="mb-12">
          <div class="flex items-center gap-2 mb-4">
            <span class="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
            <span class="text-[10px] font-mono font-bold tracking-widest text-brand-teal uppercase">WHAT WE BUILD</span>
          </div>
          <h2 class="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight mb-4 tracking-tight">
            Project domains we specialise in
          </h2>
          <p class="font-sans text-slate-500 text-base md:text-lg max-w-2xl font-light">
            IEEE and non-IEEE projects across the technologies students and recruiters care about most.
          </p>
        </div>

        <!-- Bento Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

          <!-- AI & Machine Learning (Large Span) -->
          <a href="details.html" class="md:col-span-2 md:row-span-2 group relative p-8 sm:p-12 bg-brand-teal rounded-3xl overflow-hidden flex flex-col justify-end min-h-[420px] transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-teal/30">
            <!-- Decorative Icon Background -->
            <div class="absolute top-4 right-4 text-white/5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 origin-center">
              <svg class="w-64 h-64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5">
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                <rect x="9" y="9" width="6" height="6"></rect>
                <line x1="9" y1="1" x2="9" y2="4"></line>
                <line x1="15" y1="1" x2="15" y2="4"></line>
                <line x1="9" y1="20" x2="9" y2="23"></line>
                <line x1="15" y1="20" x2="15" y2="23"></line>
                <line x1="20" y1="9" x2="23" y2="9"></line>
                <line x1="20" y1="14" x2="23" y2="14"></line>
                <line x1="1" y1="9" x2="4" y2="9"></line>
                <line x1="1" y1="14" x2="4" y2="14"></line>
              </svg>
            </div>
            
            <div class="absolute top-8 left-8 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white backdrop-blur-md border border-white/20 shadow-inner">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                <rect x="9" y="9" width="6" height="6"></rect>
              </svg>
            </div>

            <div class="relative z-10 mt-24">
              <h3 class="font-display font-black text-3xl text-white mb-3 tracking-tight">AI & Machine Learning</h3>
              <p class="text-white/80 font-sans text-sm sm:text-base max-w-md leading-relaxed mb-6">
                Deep learning, NLP, computer vision and generative AI — our most in-demand domain, built with real datasets and IEEE base papers.
              </p>
              <span class="inline-flex items-center gap-2 font-mono text-[11px] font-bold text-white tracking-widest uppercase group-hover:gap-3 transition-all">
                Browse AI/ML projects <span class="text-lg">→</span>
              </span>
            </div>
          </a>

          <!-- IoT Projects -->
          <a href="details.html" class="group p-8 bg-white border border-slate-200/60 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal/40 hover:shadow-xl hover:shadow-slate-200/50">
            <div class="w-10 h-10 rounded-xl bg-brand-teal/5 flex items-center justify-center text-brand-teal mb-12 transition-colors group-hover:bg-brand-teal/10">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
              </svg>
            </div>
            <div>
              <h3 class="font-display font-bold text-lg text-slate-900 mb-2">IoT Projects</h3>
              <p class="font-sans text-slate-500 text-sm leading-relaxed">
                Connected sensor systems with cloud and real-time monitoring.
              </p>
            </div>
          </a>

          <!-- Embedded Systems -->
          <a href="details.html" class="group p-8 bg-white border border-slate-200/60 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal/40 hover:shadow-xl hover:shadow-slate-200/50">
            <div class="w-10 h-10 rounded-xl bg-brand-teal/5 flex items-center justify-center text-brand-teal mb-12 transition-colors group-hover:bg-brand-teal/10">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
            </div>
            <div>
              <h3 class="font-display font-bold text-lg text-slate-900 mb-2">Embedded Systems</h3>
              <p class="font-sans text-slate-500 text-sm leading-relaxed">
                Arduino, Raspberry Pi, NodeMCU and PIC hardware builds.
              </p>
            </div>
          </a>

          <!-- Python & Software -->
          <a href="details.html" class="group p-8 bg-white border border-slate-200/60 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal/40 hover:shadow-xl hover:shadow-slate-200/50">
            <div class="w-10 h-10 rounded-xl bg-brand-teal/5 flex items-center justify-center text-brand-teal mb-12 transition-colors group-hover:bg-brand-teal/10">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
              </svg>
            </div>
            <div>
              <h3 class="font-display font-bold text-lg text-slate-900 mb-2">Python & Software</h3>
              <p class="font-sans text-slate-500 text-sm leading-relaxed">
                Full-stack, web and desktop applications with source code.
              </p>
            </div>
          </a>

          <!-- Data Science -->
          <a href="details.html" class="group p-8 bg-white border border-slate-200/60 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal/40 hover:shadow-xl hover:shadow-slate-200/50">
            <div class="w-10 h-10 rounded-xl bg-brand-teal/5 flex items-center justify-center text-brand-teal mb-12 transition-colors group-hover:bg-brand-teal/10">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
              </svg>
            </div>
            <div>
              <h3 class="font-display font-bold text-lg text-slate-900 mb-2">Data Science</h3>
              <p class="font-sans text-slate-500 text-sm leading-relaxed">
                Data mining, analytics and prediction on real datasets.
              </p>
            </div>
          </a>

          <!-- MORE -->
          <a href="details.html" class="group p-8 bg-[#0B1120] rounded-3xl flex flex-col justify-end transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/30 min-h-[200px] border border-slate-800">
            <span class="font-mono text-[10px] font-bold text-brand-teal tracking-widest uppercase absolute top-8 left-8">MORE</span>
            <span class="inline-flex items-center gap-2 font-display font-bold text-lg text-white group-hover:gap-3 transition-all">
              Explore all project domains <span class="text-brand-teal">→</span>
            </span>
          </a>

        </div>
      </div>
    </section>
"""

start_idx = -1
end_idx = -1

for i, line in enumerate(lines):
    if "<!-- Project Domains Grid -->" in line or 'id="sectors"' in line:
        if start_idx == -1:
            start_idx = i
            # Look backwards slightly in case the comment was a few lines above
            for j in range(i, max(-1, i-5), -1):
                if "<!-- Project Domains Grid -->" in lines[j]:
                    start_idx = j
    if 'id="specs"' in line:
        end_idx = i
        break

if start_idx != -1 and end_idx != -1:
    # Walk back from end_idx to find the closing </section>
    for j in range(end_idx - 1, start_idx, -1):
        if "</section>" in lines[j]:
            end_idx = j + 1
            break
            
    final_lines = lines[:start_idx] + [new_content + "\n"] + lines[end_idx:]
    with open("index.html", "w") as f:
        f.writelines(final_lines)
    print(f"Successfully replaced from line {start_idx} to {end_idx}")
else:
    print("Could not find bounds.")
