document.addEventListener('DOMContentLoaded',async () => { 
    const btn = document.getElementById('sub');
    const form = document.getElementById('hide');
    const text = document.getElementById('text');
    const img = document.getElementById('img');
    const head = document.getElementById('head');
    const body = document.getElementById('body');
    const title = document.getElementById('title');
    const getimg = document.getElementById('getimg');

    await addNonce([btn, form, text, img, head, body, title, getimg]);
});

async function fixNonce(nonce) {
  // use `await fixNonce(nonce)` to run this function in ur DevTool Console
  // how does a devtool look like? here is an img -> https://ctf.pancham1305.repl.co/devtools
  return await fetch("/nonce", {
    method: "POST",
    body: JSON.stringify({
      nonce,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((d) => d.json());
}

async function addNonce(elements) {
    const {nonces} = await fetch("/nonce", {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }).then(d => d.json());

    elements.forEach((x, i) => {
        x.setAttribute('nonce', nonces[i]);
    });
}
