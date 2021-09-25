function encodeAndDecodeMessages() {
    let textareas = document.querySelectorAll('textarea');
    let buttons = document.querySelectorAll('button');

    let map = {
        encode: {
            text: textareas[0],
            btn: buttons[0],
            func: (char) => String.fromCharCode(char.charCodeAt(0) + 1)
           
        },
        decode: {
            text: textareas[1],
            btn: buttons[1],
            func: (char) => String.fromCharCode(char.charCodeAt(0) - 1)
        }
    }

    document.getElementById('main').addEventListener('click', function(e) {
        if (e.target.tagName !== 'BUTTON') {
    
    return;
        }
        
        let type = e.target.textContent.toLowerCase().trim().includes('encode') ? 'encode' : 'decode';
        
        let massage = map[type].text.value.split('').map(map[type].func).join('');

        map.encode.text.value = '';
        map.decode.text.value = massage

        console.log(massage);
    })
}