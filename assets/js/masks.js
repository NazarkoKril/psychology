document.addEventListener("DOMContentLoaded", () => {
    const phoneInput = document.getElementById("phone");

    Inputmask({
        mask: "+38 (999) 999 99 99",
        placeholder: "_",
        showMaskOnHover: false,
        clearIncomplete: false,
        clearMaskOnLostFocus: false,
    }).mask(phoneInput);

    const nicknameInput = document.getElementById("nickname");

    Inputmask({
        mask: "@*{4,32}",
        definitions: {
            "*": {
                validator: "[0-9A-Za-z_]",
                casing: "lower",
            },
        },
        placeholder: "_",
        greedy: false,
        clearIncomplete: false,
        showMaskOnHover: false,
        clearMaskOnLostFocus: false,
    }).mask(nicknameInput);
});
