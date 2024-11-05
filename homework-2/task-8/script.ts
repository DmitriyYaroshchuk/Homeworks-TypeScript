function checkString() : void {
    const stringInput = document.querySelector('.js--string') as HTMLInputElement | null;
    const wordsInput = document.querySelector('.js--words') as HTMLInputElement | null;
    const button = document.querySelector('.js--button') as HTMLButtonElement | null;
    const out = document.querySelector('.js--out') as HTMLParagraphElement | null;

    if (!stringInput || !wordsInput || !button || !out) return;

    function highlightForbiddenWords(text : string, forbiddenWords : string[]) : string {
        for(let word of forbiddenWords) {
            if (text.includes(word)) {
                const regExp = new RegExp(word, 'g');
                text = text.replace(regExp, `<del>${word}</del>`);
            }
        }
        return text;
    }

    button.addEventListener('click', function (): void {
        out.innerHTML = '';
        const text : string = stringInput.value.trim();
        const forbiddenWords : string = wordsInput.value.trim();
        if (text !== '' && forbiddenWords !== '') {
            const arrForbiddenWords : string[] = forbiddenWords.split(',').map(word => word.trim());
            out.innerHTML = highlightForbiddenWords(text, arrForbiddenWords);
        }
    });

}
document.addEventListener('DOMContentLoaded', checkString);