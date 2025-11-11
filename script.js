document.getElementById('language-toggle').addEventListener('click', () => {
    const isEnglish = document.getElementById('language-toggle').innerText === 'español';

    if (isEnglish) {
        document.getElementById('language-toggle').innerText = 'english';
        document.getElementById('welcome-text').innerText = 'hola, bienvenido a mi sitio';
        document.getElementById('intro-text').innerText = 'este es mi rincón personal de internet';
        document.getElementById('about-title').innerText = 'sobre mí';
        document.getElementById('about-text').innerText = 'hola, mé llamo samhith. me encanta programar, crear y explorar cosas nuevas en general. este sitio es donde comparto mis proyectos e ideas.';
        document.getElementById('projects-title').innerText = 'mis proyectos';
        document.getElementById('projects-list').innerHTML = `
            <li>una teoría de la evolución (un juego que hice para un evento de hackclub, no relacionado con la ciencia).</li>
            <li>plataforma de blogs: escribiendo sobre mis experiencias (próximamente en este sitio web).</li>
            <li>ramsey: un asistente de escritorio que se come tus archivos (solo por diversión).</li>
            <li>combate celestial: un juego que hice usando python porque a quién no le gusta torturarse con python gamedev (esto fue antes de descubrir unity).</li>
        `;
        document.getElementById('contact-title').innerText = 'contáctame';
        document.getElementById('contact-text').innerHTML = `puedes contactarme en <a href="mailto:samhith.pola@gmail.com">samhith.pola@gmail.com</a> o encontrarme en el <a href="https://hackclub.com">slack de hackclub (una comunidad genial para programadores adolescentes!)</a>.`;
    } else {
        document.getElementById('language-toggle').innerText = 'español';
        document.getElementById('welcome-text').innerText = 'hey welcome to my site';
        document.getElementById('intro-text').innerText = 'this is my personal corner of the internet';
        document.getElementById('about-title').innerText = 'about me';
        document.getElementById('about-text').innerText = "hi, i'm samhith. i love coding, creating, and exploring new things in general. this site is where i share my projects and ideas.";
        document.getElementById('projects-title').innerText = 'my projects';
        document.getElementById('projects-list').innerHTML = `
            <li>a theory of evolution (a game i made for a hackclub event, not actually science related.)</li>
            <li>blog platform: writing about my experiences (soon to be on this website itself)</li>
            <li>ramsey: a desktop assistant that eats your files (mostly just for fun)</li>
            <li>celestial-combat: a game i made using python because who doesnt love torturing themselves with python gamedev (this was before i found out about unity)</li>
        `;
        document.getElementById('contact-title').innerText = 'contact me';
        document.getElementById('contact-text').innerHTML = `you can reach me at <a href="mailto:samhith.pola@gmail.com">samhith.pola@gmail.com</a> or find me on the <a href="https://hackclub.com">hackclub slack (cool community for teenage coders!)</a>.`;
    }
});