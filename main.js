document.addEventListener("DOMContentLoaded",event => {
  console.log(event);
})
window.addEventListener('urlchange', () => {
  console.log('URL changed:', window.location.href);
});
window.addEventListener('hashchange', (event) => {
  console.log('Hash changed:', window.location.hash);
});
window.addEventListener('popstate', (event) => {
  console.log('State changed:', window.location.hash);
});
console.log('Loaded ',window.location);
if(!window.watchContent) {
  let prevLocation;
  window.watchContent = setInterval(() => {
      const currentLocation = new URL(window.location);
    if(currentLocation.href==prevLocation?.href) return;
    debugger;
    prevLocation = currentLocation;
    if(currentLocation.pathname=="/introduction") {
      const audioEls= document.querySelectorAll("img.icendant-example");
    audioEls.forEach(el => {
      if(el.nextElementSibling?.tagName==IFRAME") return;
        const url = new URL(el.src,"https://raw.githubusercontent.com/anywhichway/mintlify-docs/refs/heads/main/assets/audio/");
      url.pathname = url.pathname.split(".")[0] + ".mp3"
      console.log(url);
      const html = `<iframe srcdoc='<html><body style="margin:0;"><audio controls><source src="${url.href}" type="audio/mpeg" />Your browser does not support the audio element.</audio></body></html>' 
          width="300" 
          height="60" 
          frameborder="0">
        </iframe>`;
      el.insertAdjacentHTML("afterend",html);
      }
    }
      
    });
  },1000)
}
