if(!window.watchContent) {
    let prevLocation;
    window.watchContent = setInterval(() => {
        const currentLocation = new URL(window.location);
        if(currentLocation.href==prevLocation?.href) return;
        prevLocation = currentLocation;
        if(["/speech","/empathy","/introduction"].some(page => currentLocation.pathname.includes(page))) {
            const audioEls= document.querySelectorAll(".icendant-example");
            debugger;
            audioEls.forEach(el => {
                if(el.nextElementSibling?.tagName=="IFRAME") return;
                const url = new URL(el.getAttribute("src"));
                const filename = (url.pathname.split(".")[0] + ".mp3").split("/").pop();
                const href = "https://raw.githubusercontent.com/anywhichway/mintlify-docs/refs/heads/main/assets/audio/" +  filename;
                const html = `<iframe srcdoc='<html><body style="margin:0;"><audio controls><source src="${href}" type="audio/mpeg" />Your browser does not support the audio element.</audio></body></html>' 
          width="300" 
          height="60" 
          frameborder="0">
        </iframe>`;
                el.insertAdjacentHTML("afterend",html);
            })
        }
    },1000)
}