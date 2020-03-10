import { Application, Container, Loader } from 'pixi.js'

// Create new PIXI application
const app = new Application({
  width: window.innerWidth,
  height: window.innerHeight,
  resolution: window.devicePixelRatio,
})

// Init game container (where objects are displayed)
const stage = new Container();

// Load assets (empty here), and then call init function below
const loader = Loader.shared;
loader.add([]).load(init);

// First function called after loading assets is done
function init()
{
    app.renderer.render(stage);

    loop();
}

// Looping function, called every frame
function loop()
{
    requestAnimationFrame(loop);

    app.renderer.render(stage);
}


document.body.appendChild(app.view)