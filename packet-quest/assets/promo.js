import {escapeHtml as e, icon, mascot} from './ui.js';

const promotion = {
  heading: 'Your CN prep. My next builds.',
  introduction: 'Hey, I’m Shubham. I made Packet Quest for our CN prep. Explore what else I’m building, then jump into your exam quest.',
  projects: [
    {kind:'portfolio',label:'SHUBHAM SAHU · PORTFOLIO',title:'Beyond the syllabus.',description:'Explore my apps, robotics, and embedded systems projects.',cta:'View my portfolio',url:'https://shubham-sahu.me',glyph:'network'},
    {kind:'nosus',label:'NO SUS · PRIVATE SHARING',title:'Share notes. Keep control.',description:'Discover burn notes, viewer-email watermarks, and expiring shares for your notes and files.',cta:'Explore NO SUS',url:'https://nosus.foo',glyph:'shield'}
  ]
};

export function initCreatorPromotion({beforeOpen=()=>{}}={}) {
  const dialog=document.getElementById('creator-dialog');
  dialog.innerHTML=`
    <button class="creator-close quiet" data-creator-close aria-label="Close creator welcome">${icon('close')}</button>
    <header class="creator-hero">
      <div class="creator-mascot">${mascot('neutral')}</div>
      <div><p class="creator-eyebrow">BUILT BY YOUR CLASSMATE</p><h2 id="creator-heading" tabindex="-1">${e(promotion.heading)}</h2></div>
    </header>
    <p class="creator-intro" id="creator-introduction">${e(promotion.introduction)}</p>
    <div class="creator-cards">
      ${promotion.projects.map(project=>`<article class="creator-card creator-${project.kind}">
        <div class="creator-art" aria-hidden="true">${icon(project.glyph)}<span>${project.kind==='portfolio'?'SS':'NO SUS'}</span></div>
        <p class="creator-label">${project.label}</p>
        <h3>${e(project.title)}</h3><p class="creator-description">${e(project.description)}</p>
        <a class="creator-link" href="${project.url}" target="_blank" rel="noopener noreferrer">${project.cta} ${icon('arrow')}<span class="sr-only"> (opens in a new tab)</span></a>
      </article>`).join('')}
    </div>
    <footer class="creator-footer"><span>Your exam quest is ready.</span><button class="btn primary" data-creator-close>Start studying ${icon('arrow')}</button></footer>`;

  let returnFocus=null,previousOverflow='',backdropStarted=false;
  const outside=event=>{const bounds=dialog.getBoundingClientRect();return event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom};
  dialog.addEventListener('pointerdown',event=>{backdropStarted=event.target===dialog&&outside(event)});
  dialog.addEventListener('click',event=>{
    if(event.target.closest('[data-creator-close]')||(backdropStarted&&event.target===dialog&&outside(event)))dialog.close();
    backdropStarted=false;
  });
  dialog.addEventListener('keydown',event=>{
    if(event.key!=='Tab'||event.ctrlKey||event.metaKey||event.altKey)return;
    const controls=[...dialog.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])')].filter(element=>element.getClientRects().length);
    const first=controls[0],last=controls.at(-1),active=document.activeElement;
    if(!controls.includes(active)||(event.shiftKey&&active===first)||(!event.shiftKey&&active===last)){
      event.preventDefault();(event.shiftKey?last:first)?.focus();
    }
  });
  dialog.addEventListener('close',()=>{
    document.body.style.overflow=previousOverflow;
    const target=returnFocus?.id?document.getElementById(returnFocus.id):returnFocus;
    if(target?.isConnected&&target.getClientRects().length&&!target.closest('dialog:not([open])'))target.focus({preventScroll:true});
    else document.getElementById('main')?.focus({preventScroll:true});
  });
  const open=()=>{
    if(dialog.open)return;
    returnFocus=document.activeElement;
    beforeOpen();
    previousOverflow=document.body.style.overflow;
    document.body.style.overflow='hidden';
    dialog.showModal();
    dialog.scrollTop=0;
    document.getElementById('creator-heading').focus({preventScroll:true});
  };
  open();
  return open;
}
