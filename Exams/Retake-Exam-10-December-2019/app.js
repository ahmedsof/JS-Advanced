function solution() {
    const [gifts, send, discarded] = document.querySelectorAll('section ul');
    const input = document.querySelector('input');
    document.querySelector('button').addEventListener('click', addGift);

    function addGift() {

        const name = input.value;
        const element = e('li', name, 'gift');
        const sendBtn = e('button', 'Send', 'sendButton');
        const discardBtn = e('button', 'Discard', 'discardButton');

        element.appendChild(sendBtn);
        element.appendChild(discardBtn);

        gifts.appendChild(element);
        sortGifts();
        input.value = '';

        sendBtn.addEventListener('click', () => sendGifts(name, element));
        discardBtn.addEventListener('click', () => discardGift(name, element));

    }

    function sendGifts(name, gift) {
        gift.remove();
        const element = e('li', name, 'gift');
        send.appendChild(element);
    }

    function discardGift(name, gift) {
        gift.remove();
        const element = e('li', name, 'gift');
        discarded.appendChild(element);

    }

    function sortGifts() {
        Array.from(gifts.children)
            .sort((a, b) => a.childNodes[0].textContent.localeCompare(b.childNodes[0].textContent))
            .forEach(g => gifts.appendChild(g));
    }

    function e(type, content, className) {
        const result = document.createElement(type);
        result.textContent = content;
        if (className) {
            result.className = className
        };
        return result;
    }

}