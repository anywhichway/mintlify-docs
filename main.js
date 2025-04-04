document.addEventListener("DOMContentLoaded",event => {
  console.log(event);
  const audioEls= document.querySelectorAll("img");
  audioEls.forEach(el => {
    const url = new URL(el.src,"https://raw.githubusercontent.com/anywhichway/mintlify-docs/refs/heads/main/assets/audio/");
    url.pathname = url.pathname.split(".")[0] + ".mp3"
    console.log(url);
    const html = `<iframe srcdoc='<html><body style="margin:0;"><audio controls><source src="${url.href}" type="audio/mpeg" />Your browser does not support the audio element.</audio></body></html>' 
        width="300" 
        height="60" 
        frameborder="0">
      </iframe>`
  });
  el.insertAdjacentHTML("afterend",html);
})
console.log('Loaded ',window.location)