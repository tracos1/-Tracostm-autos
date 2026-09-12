document.getElementById('year').textContent=new Date().getFullYear();
const form=document.getElementById('enquiry');
form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const text=`Hello Tracos Autos, I’d like to make an enquiry.%0A%0AName: ${encodeURIComponent(d.get('name'))}%0APhone/WhatsApp: ${encodeURIComponent(d.get('phone'))}%0ARequest: ${encodeURIComponent(d.get('need'))}%0AVehicle brief: ${encodeURIComponent(d.get('message')||'Not specified')}`;window.open(`https://wa.me/233540966267?text=${text}`,'_blank');document.getElementById('note').textContent='Opening WhatsApp…';});

// Vehicle gallery lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
document.querySelectorAll('.vehicle-gallery img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden','false');
  });
});
function closeLightbox(){ lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden','true'); lightboxImg.src=''; }
document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if(e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeLightbox(); });
