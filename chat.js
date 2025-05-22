const head = document.querySelector("head");
const script = document.createElement("script");
script.setAttribute("defer", "");
script.setAttribute("type","module");
script.setAttribute("src","https://embeddables.p.mbirdcdn.net/v1/web-components.es.js");
head.appendChild(script);
setTimeout( () => {
    if(window.location.pathname.endsWith("/chat")) {
        const chat = document.createElement("messagebird-chat");
        chat.setAttribute("project-id", "4d74e764-1999-4c19-887b-a2aa814c91ee");
        chat.setAttribute("workspace-id", "6645e1bc-6b95-4955-a79f-573a0cb9f27b");
        document.body.appendChild(chat);
        const style = document.createElement("style");
        style.innerText = '[title="Attach file"] { display: none; }';
        setTimeout(() => {
            chat.shadowRoot.appendChild(style)
        },500);
    }
    // <messagebird-chat project-id="4d74e764-1999-4c19-887b-a2aa814c91ee" workspace-id="6645e1bc-6b95-4955-a79f-573a0cb9f27b"></messagebird-chat>
},2000);

(() => {
    const orginalFetch = window.fetch;
    window.fetch = async function(...args) {
        const url = typeof args[0]==="string" ? new URL(args[0]) : new URL(args[0].url);
        if(url.hostname==="api.bird.com") {
            console.log(args);
            const response = orginalFetch(...args);
            const clonedResponse = response.clone();
            clonedResponse.text().then(text => {
                console.log(url.href,text);
            })
            return response;
        }
        return orginalFetch(...args);
    }
})()

