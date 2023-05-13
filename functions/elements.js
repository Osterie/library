function text_to_element(text, element){
    element.innerHTML = text
}

function animasjon(element, fromX, fromY, toX, toY, time=2000) {
    element.animate([
                    {left: `${fromX}px`, top: `${fromY}px`, opacity: 0}, // Fra
                    {left: `${toX}px`, top: `${toY}px`, opacity: 1}      // Til
                    ], 
                 time); // Tid
}