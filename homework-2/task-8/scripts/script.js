"use strict";
function checkString() {
    const stringInput = document.querySelector('.js--string');
    const wordsInput = document.querySelector('.js--words');
    const button = document.querySelector('.js--button');
    const out = document.querySelector('.js--out');
    if (!stringInput || !wordsInput || !button || !out)
        return;
    function highlightForbiddenWords(text, forbiddenWords) {
        for (let word of forbiddenWords) {
            if (text.includes(word)) {
                const regExp = new RegExp(word, 'g');
                text = text.replace(regExp, `<del>${word}</del>`);
            }
        }
        return text;
    }
    button.addEventListener('click', function () {
        out.innerHTML = '';
        const text = stringInput.value.trim();
        const forbiddenWords = wordsInput.value.trim();
        if (text !== '' && forbiddenWords !== '') {
            const arrForbiddenWords = forbiddenWords.split(',').map(word => word.trim());
            out.innerHTML = highlightForbiddenWords(text, arrForbiddenWords);
        }
    });
}
document.addEventListener('DOMContentLoaded', checkString);
//# sourceMappingURL=script.js.map