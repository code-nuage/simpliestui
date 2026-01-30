const modalOpener = document.getElementById("modal-opener");

modalOpener.addEventListener("click", (e) => {
    e.preventDefault();

    if (document.getElementById("opened-modal")) {
        return;
    }

    const modal = document.createElement("div");
    modal.id = "opened-modal";
    modal.className = "modal";

    modal.innerHTML = `<div class="modal">
    <div class="container card big gap-regular">
        <h2 class="ts-hero tw-bold">Modal</h2>
        <p>You can set modals in Javascript with the <code>modal</code> class.</p>
        <pre><code>const modalOpener = document.getElementById("modal-opener");

modalOpener.addEventListener("click", (e) => {
    e.preventDefault();

    if (document.getElementById("opened-modal")) {
        return;
    }

    const modal = document.createElement("div");
    modal.id = "opened-modal";
    modal.className = "modal";

    modal.innerHTML = \`
&lt;div class="modal"&gt;
    &lt;div class="container card big gap-regular"&gt;
        &lt;h2 class="ts-hero tw-bold"&gt;Modal&lt;/h2&gt;
        &lt;p&gt;You can set modals in Javascript with the &lt;\code&gt;modal&lt;/code&gt; class.&lt;/p&gt;
        &lt;p class="tc-negative"&gt;We will avoid repeating indefinitely this modal
        so I will stop here.&lt;/p&gt;
        &lt;a id="modal-closer" class="btn negative"&gt;Close&lt;/a&gt;
    &lt;/div&gt;
&lt;/div&gt;
\`;

    document.body.appendChild(modal);

    const closer = modal.querySelector("#modal-closer");
    closer.addEventListener("click", (e) => {
        e.preventDefault();
        modal.remove();
    });
});</code></pre>
        <a id="modal-closer" class="btn negative">Close</a>
    </div>
</div>`;

    document.body.appendChild(modal);

    const closer = modal.querySelector("#modal-closer");
    closer.addEventListener("click", (e) => {
        e.preventDefault();
        modal.remove();
    });
});
