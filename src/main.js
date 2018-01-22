/*****************************************************

                    Main.js

*****************************************************/

var stage = new PIXI.Container();

function init()
{
    renderer.render(stage);
    loop();
}

function loop()
{
    requestAnimationFrame(loop);
    renderer.render(stage);
}
