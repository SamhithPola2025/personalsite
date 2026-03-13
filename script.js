document.getElementById('language-toggle').addEventListener('click', () => {
    const isEnglish = document.getElementById('language-toggle').innerText.toLowerCase() === 'español';

    if (isEnglish) {
        document.getElementById('language-toggle').innerText = 'English';
        document.getElementById('welcome-text').innerText = 'Hola, bienvenido a mi sitio';
        document.getElementById('intro-text').innerText = 'Este es mi rincón personal de internet — un lugar donde comparto mis proyectos e ideas.';
        document.getElementById('about-title').innerText = 'Sobre Mí';
        document.getElementById('about-text').innerText = 'Hola, me llamo Samhith. Me encanta programar, crear y explorar cosas nuevas en general. Este sitio es donde comparto mis proyectos e ideas.';
        document.getElementById('projects-title').innerText = 'Mis Proyectos';
        document.getElementById('projects-list').innerHTML = `
            <li>
                <h3>A Theory of Evolution</h3>
                <p>Un juego que hice para un evento de Hack Club, no relacionado con la ciencia.</p>
                <a href="https://github.com/SamhithPola2025/A-Theory-Of-Evolution">Ver más</a>
            </li>
            <li>
                <h3>BitReactor</h3>
                <p>Una arquitectura/simulador de CPU que hice para un evento de Hack Club — ¡aprendí muchísimo! Mención especial a <a href="https://cpu.land" target="_blank">cpu.land</a>.</p>
                <a href="https://github.com/SamhithPola2025/BitReactor">Ver más</a>
            </li>
            <li>
                <h3>Blog Platform</h3>
                <p>Escribiendo sobre mis experiencias (próximamente en este mismo sitio).</p>
                <a href="https://github.com/SamhithPola2025/personalsite">Ver proyecto</a>
            </li>
            <li>
                <h3>Ramsey</h3>
                <p>Un asistente de escritorio que se come tus archivos (solo por diversión).</p>
                <a href="https://github.com/SamhithPola2025/Ramsey">Ver más</a>
            </li>
            <li>
                <h3>Celestial-Combat</h3>
                <p>Un juego hecho con Python — ¿a quién no le gusta torturarse con gamedev en Python? (Esto fue antes de descubrir Unity.)</p>
                <a href="https://github.com/SamhithPola2025/Celestial-Combat">Ver proyecto</a>
            </li>
            <li>
                <h3>IvoryScript</h3>
                <p>Un lenguaje de scripting que construí con Java usando el tutorial Crafting Interpreters y ¡2 semanas de dedicación!</p>
                <a href="https://github.com/SamhithPola2025/IvoryScript">Ver más</a>
            </li>
        `;
        document.getElementById('contact-title').innerText = 'Contáctame';
        document.getElementById('contact-text').innerHTML = `Puedes contactarme en <a href="mailto:samhith.pola@gmail.com">samhith.pola@gmail.com</a> o encontrarme en el <a href="https://hackclub.com">Slack de Hack Club (¡una comunidad genial para programadores adolescentes!)</a>.`;
    } else {
        document.getElementById('language-toggle').innerText = 'Español';
        document.getElementById('welcome-text').innerText = 'Hey, welcome to my site';
        document.getElementById('intro-text').innerText = 'This is my personal corner of the internet — a place where I share my projects and ideas.';
        document.getElementById('about-title').innerText = 'About Me';
        document.getElementById('about-text').innerText = "Hi, I'm Samhith. I love coding, creating, and exploring new things in general. This site is where I share my projects and ideas.";
        document.getElementById('projects-title').innerText = 'My Projects';
        document.getElementById('projects-list').innerHTML = `
            <li>
                <h3>A Theory of Evolution</h3>
                <p>A game I made for a Hack Club event, not actually science related.</p>
                <a href="https://github.com/SamhithPola2025/A-Theory-Of-Evolution">Learn More</a>
            </li>
            <li>
                <h3>BitReactor</h3>
                <p>A CPU architecture/simulator I made for a Hack Club event — I learnt a LOT from this. Shoutout to <a href="https://cpu.land" target="_blank">cpu.land</a> for teaching me how CPUs work!</p>
                <a href="https://github.com/SamhithPola2025/BitReactor">Learn More</a>
            </li>
            <li>
                <h3>Blog Platform</h3>
                <p>Writing about my experiences (soon to be on this website itself).</p>
                <a href="https://github.com/SamhithPola2025/personalsite">View Project</a>
            </li>
            <li>
                <h3>Ramsey</h3>
                <p>A desktop assistant that eats your files (mostly just for fun).</p>
                <a href="https://github.com/SamhithPola2025/Ramsey">Learn More</a>
            </li>
            <li>
                <h3>Celestial-Combat</h3>
                <p>A game I made with Python — because who doesn't love torturing themselves with Python gamedev? (This was before I discovered Unity.)</p>
                <a href="https://github.com/SamhithPola2025/Celestial-Combat">View Project</a>
            </li>
            <li>
                <h3>IvoryScript</h3>
                <p>A scripting language I built with Java using the Crafting Interpreters tutorial and 2 weeks of determination!</p>
                <a href="https://github.com/SamhithPola2025/IvoryScript">Learn More</a>
            </li>
        `;
        document.getElementById('contact-title').innerText = 'Contact Me';
        document.getElementById('contact-text').innerHTML = `You can reach me at <a href="mailto:samhith.pola@gmail.com">samhith.pola@gmail.com</a> or find me on the <a href="https://hackclub.com">Hack Club Slack (cool community for teenage coders!)</a>.`;
    }
});