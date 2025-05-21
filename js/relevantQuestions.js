const searchInput = document.getElementById('searchInput');
const questions = document.querySelectorAll('.question');
const filterButtons = document.querySelectorAll('.filters button');

let activeFilter = '';

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
/*
function updateDisplay() {
    const searchText = searchInput.value.trim().toLowerCase();

    questions.forEach(question => {
        const qn = question.querySelector('.qn');
        // // // // //const as = question.querySelector('.as');

        // Unificar contenido completo de texto visible (pregunta + respuesta)
        // // // // //const combinedText = (qn.textContent + ' ' + as.textContent).toLowerCase();
        // >>>>>>
        const asParagraphs = question.querySelectorAll('.as');
        let asCombinedText = '';
        asParagraphs.forEach(p => {
            asCombinedText += ' ' + p.textContent;
        });
        const combinedText = (qn.textContent + ' ' + asCombinedText).toLowerCase();
        // <<<<<<
        //
        //
        //
        const questionCategory = question.getAttribute('data-category');

        const matchesSearch = !searchText || combinedText.includes(searchText);
        const matchesFilter = !activeFilter || questionCategory === activeFilter;

        if (matchesSearch && matchesFilter) {
            question.classList.remove('hidden');

            // Restaurar y resaltar
            qn.innerHTML = qn.textContent;
            //as.innerHTML = as.textContent;
            // >>>>>>

            // <<<<<<

            if (searchText) {
                const regex = new RegExp(`(${escapeRegExp(searchText)})`, 'gi');
                qn.innerHTML = qn.textContent.replace(regex, '<span class="highlight">$1</span>');
                //as.innerHTML = as.textContent.replace(regex, '<span class="highlight">$1</span>');
                // >>>>>>
                // <<<<<<
            }

        } else {
            question.classList.add('hidden');
            qn.innerHTML = qn.textContent;
            //as.innerHTML = as.textContent;
            // >>>>>>
            // <<<<<<
            question.classList.remove('selected');
        }
    });
}
*/





function updateDisplay() {
    const searchText = searchInput.value.trim().toLowerCase();

    questions.forEach(question => {
        const qn = question.querySelector('.qn');
        const asParagraphs = question.querySelectorAll('.as');

        // Concatenate all answer paragraphs
        let asCombinedText = '';
        asParagraphs.forEach(p => {
            asCombinedText += ' ' + p.textContent;
        });

        const combinedText = (qn.textContent + ' ' + asCombinedText).toLowerCase();
        const questionCategory = question.getAttribute('data-category');

        const matchesSearch = !searchText || combinedText.includes(searchText);
        const matchesFilter = !activeFilter || questionCategory === activeFilter;

        if (matchesSearch && matchesFilter) {
            question.classList.remove('hidden');

            // Restore and highlight
            qn.innerHTML = qn.textContent;
            asParagraphs.forEach(p => {
                p.innerHTML = p.textContent;
            });

            if (searchText) {
                const regex = new RegExp(`(${escapeRegExp(searchText)})`, 'gi');
                qn.innerHTML = qn.textContent.replace(regex, '<span class="highlight">$1</span>');
                asParagraphs.forEach(p => {
                    p.innerHTML = p.textContent.replace(regex, '<span class="highlight">$1</span>');
                });
            }

        } else {
            question.classList.add('hidden');
            qn.innerHTML = qn.textContent;
            asParagraphs.forEach(p => {
                p.innerHTML = p.textContent;
            });
            question.classList.remove('selected');
        }
    });
}








searchInput.addEventListener('input', updateDisplay);

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    activeFilter = button.dataset.filter;
    updateDisplay();
    });
});

questions.forEach(question => {
    question.addEventListener('click', () => {
    questions.forEach(i => i.classList.remove('selected'));
    question.classList.add('selected');
    question.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
    });
});