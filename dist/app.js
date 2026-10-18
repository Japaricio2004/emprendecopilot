(()=>{
const menu=document.querySelector('.menu'),nav=document.querySelector('.site-header nav')||document.querySelector('nav'),dialog=document.getElementById('signup');
if(!menu||!nav||!dialog)return;
const form=dialog.querySelector('form'),success=dialog.querySelector('.success');let selectedPlan='Gratuito',opener=null;
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('click',e=>{if(nav.classList.contains('open')&&!nav.contains(e.target)&&!menu.contains(e.target))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus();}});
const desktop=matchMedia('(min-width:951px)');desktop.addEventListener('change',e=>{if(e.matches)closeMenu();});
document.querySelectorAll('[data-plan]').forEach(button=>button.addEventListener('click',()=>{selectedPlan=button.dataset.plan;opener=button.closest('nav')&&!desktop.matches?menu:button;closeMenu();document.getElementById('plan-label').textContent='Plan '+selectedPlan;form.hidden=false;success.hidden=true;success.replaceChildren();form.querySelectorAll('input').forEach(input=>input.setCustomValidity(''));dialog.showModal();}));
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();});
dialog.addEventListener('close',()=>{if(opener?.isConnected)opener.focus({preventScroll:true});});
form.querySelectorAll('input').forEach(input=>input.addEventListener('input',()=>input.setCustomValidity('')));
form.addEventListener('submit',e=>{e.preventDefault();const data=Object.fromEntries(new FormData(form));data.name=String(data.name||'').trim();data.business=String(data.business||'').trim();for(const [name,label]of [['name','tu nombre'],['business','el nombre de tu negocio']]){if(!data[name]){const input=form.elements.namedItem(name);input.setCustomValidity('Escribe '+label+'.');input.reportValidity();return;}}try{localStorage.setItem('emprendecopilot-demo',JSON.stringify({...data,plan:selectedPlan}));success.textContent='¡Listo, '+data.name+'! Guardamos la demo de '+data.business+' en este navegador. Tu plan seleccionado es '+selectedPlan+'.';}catch{success.textContent='La demo está lista, pero este navegador no permitió guardarla. Podrás configurar tu negocio al entrar a la plataforma.';}form.hidden=true;success.hidden=false;const a=document.createElement('a');a.className='btn';a.style.marginTop='18px';a.textContent='Ingresar a mi plataforma →';a.href='platform.html';success.append(document.createElement('br'),a);a.focus();});
})();
