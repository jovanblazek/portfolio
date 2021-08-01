const typewriterElm = document.getElementById("typewriter");
const typewriter = new Typewriter(typewriterElm);

typewriter.pauseFor(200)
    .typeString('a Web Developer')
    .pauseFor(2500)
    .deleteChars(13)
    .typeString('Student')
    .pauseFor(2500)
    .deleteAll()
    .typeString('here for you.')
    .pauseFor(500)
    .callFunction(() => document.querySelector(".Typewriter__cursor").style.display = "none")
    .start();