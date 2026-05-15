// Project Management — AERO page

function aeroInitPage() {
  const el = document.getElementById('page-aero');
  if (!el) return;
  el.innerHTML = `
   <div class="max-w-6xl mx-auto px-6">
    <button onclick="goToPage('projects-overview')" class="flex items-center gap-2 mb-6" style="color:#a855f7"><i data-lucide="arrow-left" style="width:16px;height:16px"></i> Back</button>
    <div class="card p-8 mb-8" style="background:linear-gradient(135deg,#a855f7,#e879f9)">
     <h1 class="font-heading font-bold text-4xl mb-3 text-white">AERO</h1>
     <p class="text-lg text-white/90">Airlangga Expanding &amp; Reach Opportunities Exhibition</p>
    </div>
    <div class="mb-8">
     <p class="text-lg max-w-4xl leading-relaxed" style="color:#64748B">AERO (Airlangga Expanding &amp; Reach Opportunities) is Universitas Airlangga's annual international education exhibition, showcasing global partnerships, exchange programs, and academic collaboration. As part of the Airlangga Global Engagement team, I contributed to full-cycle event management — including logistics, vendor coordination, and stakeholder communication — for this large-scale campus event.</p>
    </div>
    <div class="space-y-6 mb-6">
     <div class="card p-8 border-l-4" style="border-color:#a855f7">
      <div class="flex items-start gap-5">
       <div class="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(168,85,247,0.1)">
        <i data-lucide="calendar-check" style="width:28px;height:28px;color:#a855f7"></i>
       </div>
       <div>
        <h3 class="font-heading font-bold text-xl mb-2" style="color:#0F172A">1. Event Planning &amp; Logistics</h3>
        <p style="color:#64748B">Planned and coordinated end-to-end event logistics across 50+ stakeholders, including venue setup, scheduling, and operational readiness for a large-scale international education exhibition.</p>
       </div>
      </div>
     </div>
     <div class="card p-8 border-l-4" style="border-color:#ec4899">
      <div class="flex items-start gap-5">
       <div class="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(236,72,153,0.1)">
        <i data-lucide="receipt" style="width:28px;height:28px;color:#ec4899"></i>
       </div>
       <div>
        <h3 class="font-heading font-bold text-xl mb-2" style="color:#0F172A">2. Vendor Management &amp; Budgeting</h3>
        <p style="color:#64748B">Managed vendor relationships and procurement within an IDR 50–100M per-program budget, ensuring cost-efficient delivery of services and materials across all event components.</p>
       </div>
      </div>
     </div>
     <div class="card p-8 border-l-4" style="border-color:#8b5cf6">
      <div class="flex items-start gap-5">
       <div class="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(139,92,246,0.1)">
        <i data-lucide="building-2" style="width:28px;height:28px;color:#8b5cf6"></i>
       </div>
       <div>
        <h3 class="font-heading font-bold text-xl mb-2" style="color:#0F172A">3. Partner University &amp; Guest Coordination</h3>
        <p style="color:#64748B">Coordinated partner university booth logistics and facilitated international guest attendance, ensuring smooth communication and on-site experience for visiting institutions and delegates.</p>
       </div>
      </div>
     </div>
     <div class="card p-8 border-l-4" style="border-color:#d946ef">
      <div class="flex items-start gap-5">
       <div class="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(217,70,239,0.1)">
        <i data-lucide="megaphone" style="width:28px;height:28px;color:#d946ef"></i>
       </div>
       <div>
        <h3 class="font-heading font-bold text-xl mb-2" style="color:#0F172A">4. Promotion, Operations &amp; Reporting</h3>
        <p style="color:#64748B">Led pre-event promotion campaigns, managed on-site operations during the exhibition, and prepared comprehensive post-event completion reports for stakeholders and management.</p>
       </div>
      </div>
     </div>
    </div>
    <div class="card p-8 mt-6">
     <div class="flex items-center gap-3 mb-2"><span class="accent-line"></span><h2 class="font-heading font-semibold text-2xl" style="color:#0F172A">Program Documents</h2></div>
     <p class="text-sm mb-6" style="color:#64748B">Supporting documentation for AERO 2025 — including the program proposal and participant data.</p>
     <div class="grid sm:grid-cols-2 gap-4">
      <a href="./assets/data/AERO 2025.docx" download class="flex items-center gap-4 rounded-xl p-5 transition-all duration-200 hover:shadow-md" style="background:linear-gradient(135deg,#faf5ff,#f3e8ff);border:1px solid rgba(168,85,247,0.2);text-decoration:none">
       <div class="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(168,85,247,0.15)">
        <i data-lucide="file-text" style="width:24px;height:24px;color:#a855f7"></i>
       </div>
       <div class="flex-1 min-w-0">
        <p class="font-semibold text-sm" style="color:#0F172A">AERO 2025.docx</p>
        <p class="text-xs mt-0.5" style="color:#94A3B8">Program Proposal Document</p>
       </div>
       <i data-lucide="download" style="width:18px;height:18px;color:#a855f7;flex-shrink:0"></i>
      </a>
      <a href="./assets/data/AERO.xlsx" download class="flex items-center gap-4 rounded-xl p-5 transition-all duration-200 hover:shadow-md" style="background:linear-gradient(135deg,#faf5ff,#f3e8ff);border:1px solid rgba(168,85,247,0.2);text-decoration:none">
       <div class="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(168,85,247,0.15)">
        <i data-lucide="table-2" style="width:24px;height:24px;color:#a855f7"></i>
       </div>
       <div class="flex-1 min-w-0">
        <p class="font-semibold text-sm" style="color:#0F172A">AERO.xlsx</p>
        <p class="text-xs mt-0.5" style="color:#94A3B8">Participant Data Spreadsheet</p>
       </div>
       <i data-lucide="download" style="width:18px;height:18px;color:#a855f7;flex-shrink:0"></i>
      </a>
     </div>
    </div>
   </div>`;

  if (window.lucide) lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', function () {
  aeroInitPage();
});
