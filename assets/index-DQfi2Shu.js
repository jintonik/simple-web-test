(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function d(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=d(n);fetch(n.href,r)}})();const c=document.getElementById("theme-toggle"),i=document.body,h=localStorage.getItem("theme"),v=window.matchMedia("(prefers-color-scheme: dark)").matches;(h==="dark"||!h&&v)&&(i.classList.add("dark-theme"),c.checked=!0);c.addEventListener("change",()=>{c.checked?(i.classList.add("dark-theme"),localStorage.setItem("theme","dark")):(i.classList.remove("dark-theme"),localStorage.setItem("theme","light"))});window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{const t=e.matches;localStorage.getItem("theme")||(t?(i.classList.add("dark-theme"),c.checked=!0):(i.classList.remove("dark-theme"),c.checked=!1))});const l=document.getElementById("quiz-container");let s=[],o=0,u={};async function L(){try{const t=await fetch("/simple-web-test/questions.json");if(!t.ok)throw new Error(`HTTP ${t.status}`);s=await t.json(),f()}catch(e){l.innerHTML=`<p style="color:red">Ошибка загрузки: ${e.message}</p>`}}function f(){const e=s[o];l.innerHTML=`
    <div class="question-card">
      <h2>Вопрос ${o+1} из ${s.length}</h2>
      <p><strong>${e.text}</strong></p>
      ${e.options.map(t=>`
        <label class="option">
          <input type="radio" name="current-answer" value="${t.id}"
            ${u[e.id]===t.id?"checked":""}>
          ${t.text}
        </label>
      `).join("")}
      <div class="controls">
				<button id="btn-next" type="button" >Далее →</button>
      </div>
    </div>
  `,setTimeout(()=>{l.querySelector("input")?.focus()},0),document.getElementById("btn-next")?.addEventListener("click",()=>{o<s.length-1?k():b()})}function g(){const e=document.querySelector("input[name='current-answer']:checked");if(e){const t=s[o];u[t.id]=e.value}}function k(){if(!y()){p();return}g(),o<s.length-1&&(o++,f())}function p(){const e=document.querySelector(".question-card");e.classList.remove("shake"),e.offsetWidth,e.classList.add("shake")}function b(){if(!y()){p();return}g();let e=0;s.forEach(t=>{const d=u[t.id],a=t.options.find(n=>n.correct);d===a?.id&&e++}),l.innerHTML=`
    <div class="result">
      <h1>🎉 Тест завершён!</h1>
      <p>Ваш результат: <strong>${e} из ${s.length}</strong></p>
      <button id="btn-restart" type="button">Пройти снова</button>
    </div>
  `,document.getElementById("btn-restart")?.addEventListener("click",E)}function E(){o=0,u={},f()}function y(){return document.querySelector("input[name='current-answer']:checked")!=null}document.addEventListener("DOMContentLoaded",L);
