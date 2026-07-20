const m="halalSunnah2025",r="hs_avis_pending",s="hs_avis_approved",c="#C8A951",x="#D1D5DB";document.getElementById("pwd-btn").addEventListener("click",u);document.getElementById("pwd-input").addEventListener("keydown",e=>{e.key==="Enter"&&u()});function u(){document.getElementById("pwd-input").value===m?(document.getElementById("auth-screen").classList.add("hidden"),document.getElementById("admin-panel").classList.remove("hidden"),p()):document.getElementById("pwd-error").classList.remove("hidden")}function y(e){const t=e==="pending";document.getElementById("list-pending").classList.toggle("hidden",!t),document.getElementById("list-approved").classList.toggle("hidden",t),document.getElementById("tab-pending").className=t?"px-5 py-2 rounded-full text-sm font-semibold bg-primary-900 text-white transition-all":"px-5 py-2 rounded-full text-sm font-semibold bg-white text-gray-500 border border-gray-200 transition-all",document.getElementById("tab-approved").className=t?"px-5 py-2 rounded-full text-sm font-semibold bg-white text-gray-500 border border-gray-200 transition-all":"px-5 py-2 rounded-full text-sm font-semibold bg-primary-900 text-white transition-all"}function o(e){try{return JSON.parse(localStorage.getItem(e)||"[]")}catch{return[]}}function l(e,t){localStorage.setItem(e,JSON.stringify(t))}function f(e){return[1,2,3,4,5].map(t=>`<svg width="16" height="16" viewBox="0 0 24 24" fill="${t<=e?c:"none"}" stroke="${t<=e?c:x}" stroke-width="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>`).join("")}function g(e,t){const n=new Date(e.date).toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}),i=e.nom.slice(0,2).toUpperCase(),d=t==="pending"?`<div style="display:flex;gap:8px;margin-top:12px;">
          <button onclick="approve(${e.id})"
            style="flex:1;background:#042650;color:white;border:none;border-radius:10px;padding:10px;font-size:12px;font-weight:700;cursor:pointer;letter-spacing:.05em;">
            ✓ Valider
          </button>
          <button onclick="reject(${e.id})"
            style="flex:1;background:#FEF2F2;color:#DC2626;border:1px solid #FCA5A5;border-radius:10px;padding:10px;font-size:12px;font-weight:700;cursor:pointer;">
            ✕ Rejeter
          </button>
        </div>`:`<div style="margin-top:12px;">
          <button onclick="remove(${e.id})"
            style="background:#FEF2F2;color:#DC2626;border:1px solid #FCA5A5;border-radius:10px;padding:8px 16px;font-size:12px;font-weight:600;cursor:pointer;">
            Supprimer
          </button>
        </div>`;return`<div id="card-${e.id}" style="background:white;border-radius:16px;padding:20px;margin-bottom:12px;border:1px solid #F3F4F6;box-shadow:0 1px 4px rgba(0,0,0,0.05);">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
        <div style="width:42px;height:42px;border-radius:50%;background:#042650;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <span style="color:#C8A951;font-weight:700;font-size:14px;">${i}</span>
        </div>
        <div style="flex:1;">
          <p style="font-weight:700;font-size:15px;color:#042650;margin:0;">${e.nom}</p>
          <p style="font-size:11px;color:#9CA3AF;margin:0;">${n}</p>
        </div>
        <div style="display:flex;gap:2px;">${f(e.note)}</div>
      </div>
      <p style="font-size:13px;color:#374151;line-height:1.6;margin:0;background:#F9FAFB;padding:12px;border-radius:10px;font-style:italic;">"${e.message}"</p>
      ${d}
    </div>`}function p(){const e=o(r),t=o(s),n=document.getElementById("badge-pending");n.textContent=e.length>0?`${e.length} en attente`:"Aucun en attente";const i=document.getElementById("list-pending");i.innerHTML=e.length===0?'<p style="text-align:center;color:#9CA3AF;padding:40px 0;">Aucun avis en attente.</p>':e.map(a=>g(a,"pending")).join("");const d=document.getElementById("list-approved");d.innerHTML=t.length===0?`<p style="text-align:center;color:#9CA3AF;padding:40px 0;">Aucun avis validé pour l'instant.</p>`:[...t].reverse().map(a=>g(a,"approved")).join("")}window.approve=e=>{const t=o(r),n=o(s),i=t.findIndex(d=>d.id===e);i!==-1&&(n.push(t.splice(i,1)[0]),l(r,t),l(s,n),p())};window.reject=e=>{if(!confirm("Rejeter et supprimer cet avis ?"))return;const t=o(r).filter(n=>n.id!==e);l(r,t),p()};window.remove=e=>{if(!confirm("Supprimer cet avis validé ?"))return;const t=o(s).filter(n=>n.id!==e);l(s,t),p()};window.showTab=y;
