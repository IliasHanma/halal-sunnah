import{q as u,c as v,d,w as g,o as h,g as y,u as A,b as c,e as f}from"./firebase.Dk9qpZrv.js";function S(){const r="#C9A24B",L="#D1D5DB";function b(t){return[1,2,3,4,5].map(e=>`<svg width="14" height="14" viewBox="0 0 24 24" fill="${e<=t?r:"none"}" stroke="${e<=t?r:L}" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>`).join("")}function E(t){return new Date(t).toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric"})}function l(t,e){const n=t.nom.slice(0,2).toUpperCase(),s=E(t.date);return`
        <div class="avis-card">
          <div class="avis-avatar" style="background: #062B52;">${n}</div>
          <div class="avis-header">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
              <p style="font-weight: 700; color: #0b2647; margin: 0; font-size: 14px;">${t.nom}</p>
              <p style="font-size: 11px; color: #9ca3af; margin: 0;">${s}</p>
            </div>
            <div class="stars-display">${b(t.note)}</div>
            <p style="color: #374151; font-size: 13px; line-height: 1.6; margin: 12px 0 0 0; font-style: italic;">"${t.message}"</p>
          </div>
          <div class="avis-actions">
            ${e?`
              <button class="btn-small btn-approve" data-id="${t.id}" data-action="approve">Approuver</button>
              <button class="btn-small btn-reject" data-id="${t.id}" data-action="reject">Rejeter</button>
            `:`
              <button class="btn-small btn-delete" data-id="${t.id}" data-action="delete">Supprimer</button>
            `}
          </div>
        </div>
      `}async function p(){const t=document.getElementById("pending-list"),e=document.getElementById("pending-empty"),n=document.getElementById("approved-list"),s=document.getElementById("approved-empty");try{const m=u(v(d,"avis"),g("status","==","pending"),h("date","desc")),x=u(v(d,"avis"),g("status","==","approved"),h("date","desc")),[B,$]=await Promise.all([y(m),y(x)]),i=B.docs.map(a=>({id:a.id,...a.data()})),o=$.docs.map(a=>({id:a.id,...a.data()}));document.getElementById("pending-count").textContent=String(i.length),document.getElementById("approved-count").textContent=String(o.length),i.length===0?(t.innerHTML="",e.textContent="Aucun avis en attente.",e.classList.remove("hidden")):(e.classList.add("hidden"),t.innerHTML=i.map(a=>l(a,!0)).join("")),o.length===0?(n.innerHTML="",s.textContent="Aucun avis approuvé.",s.classList.remove("hidden")):(s.classList.add("hidden"),n.innerHTML=o.map(a=>l(a,!1)).join("")),w()}catch{e.textContent="Erreur de chargement.",s.textContent="Erreur de chargement."}}function w(){document.querySelectorAll("[data-action]").forEach(t=>{t.addEventListener("click",async()=>{const e=t.dataset.id,n=t.dataset.action;n==="approve"?await A(c(d,"avis",e),{status:"approved"}):n==="reject"?await f(c(d,"avis",e)):n==="delete"&&await f(c(d,"avis",e)),p()})})}document.querySelectorAll(".tab-btn").forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.tab;document.querySelectorAll(".tab-btn").forEach(n=>n.classList.remove("active")),t.classList.add("active"),document.querySelectorAll(".tab-content").forEach(n=>n.classList.add("hidden")),document.getElementById(`${e}-tab`)?.classList.remove("hidden")})}),p()}document.addEventListener("astro:page-load",S);
