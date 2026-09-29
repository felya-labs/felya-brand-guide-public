// FELYA Brand Guide: exponent-4 superellipse, 24 samples per corner.
// Source: https://brand.felya.com/ (radii: 8 / 14 / 24 / 32 px).
// Presentation surfaces only; logo paths and source images remain unchanged.
const cornerTargets = document.querySelectorAll('.sketch-card, .website-comparison img, .application-comparison img, .wear-test img, .image-stage, .construction-frame, .version-overview .full-image, .evolution figure>div, .identity-grid, .study-pair, .prometheus-grid, .pattern-selection figure, .gallery img, .split, .motion-pair video, .motion-pair iframe, .slide>iframe, .slide:not(.complete)>video');
const borderStyles = new WeakMap();
function updateCorner(el) {
  const {width:w,height:h}=el.getBoundingClientRect();
  if(!w || !h)return;
  const small=el.matches('.gallery img, .pattern-selection figure');
  const r=Math.min(small?14:32,w/2,h/2), points=[];
  for(const [cx,cy,start] of [[w-r,r,-Math.PI/2],[w-r,h-r,0],[r,h-r,Math.PI/2],[r,r,Math.PI]]) {
    for(let i=0;i<=24;i++) {
      const a=start+Math.PI/2*i/24,c=Math.cos(a),s=Math.sin(a);
      const x=cx+r*Math.sign(c)*Math.abs(c)**.5,y=cy+r*Math.sign(s)*Math.abs(s)**.5;
      points.push(`${Math.round(x*1000)/1000}px ${Math.round(y*1000)/1000}px`);
    }
  }
  el.style.borderRadius='0';
  el.style.clipPath=`polygon(${points.join(',')})`;
  // A CSS rectangle border would be cut off by the superellipse at its corners.
  // Keep its layout space, but draw its visible contour from the SAME points.
  if(!borderStyles.has(el)) {
    const style=getComputedStyle(el);
    borderStyles.set(el,{width:parseFloat(style.borderTopWidth)||0,color:style.borderTopColor});
  }
  const border=borderStyles.get(el);
  if(border.width>0 && !el.matches('img,video,iframe')) {
    el.style.borderColor='transparent';
    if(getComputedStyle(el).position==='static')el.style.position='relative';
    let outline=el.querySelector(':scope > .continuous-outline');
    if(!outline) {
      outline=document.createElementNS('http://www.w3.org/2000/svg','svg');
      outline.classList.add('continuous-outline');
      outline.setAttribute('aria-hidden','true');
      outline.setAttribute('focusable','false');
      outline.appendChild(document.createElementNS('http://www.w3.org/2000/svg','path'));
      el.appendChild(outline);
    }
    outline.setAttribute('viewBox',`0 0 ${w} ${h}`);
    outline.style.cssText=`position:absolute;left:${-border.width}px;top:${-border.width}px;width:${w}px;height:${h}px;max-width:none;max-height:none;pointer-events:none;z-index:5;overflow:visible`;
    const path=outline.firstElementChild;
    path.setAttribute('d',points.map((p,i)=>(i?'L':'M')+p.replaceAll('px','').replace(' ',' ')).join(' ')+' Z');
    path.setAttribute('fill','none');
    path.setAttribute('stroke',border.color);
    path.setAttribute('stroke-width',border.width*2);
    path.setAttribute('stroke-linejoin','round');
  }
}
const observer=new ResizeObserver(entries=>entries.forEach(({target})=>updateCorner(target)));
cornerTargets.forEach(el=>{updateCorner(el);observer.observe(el)});
