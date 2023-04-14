import scene from "./basic/Scene.js";
import camera from "./basic/Camera.js";
import renderer from "./basic/Renderer.js";
import cube from "./basic/shapes/Cube.js";
import light from "./basic/shapes/Light.js";
import resize from "./basic/resize.js";
import plane from "./basic/shapes/Plane.js";
import loopMachine from "./basic/shapes/LoopMachine.js";
import keyListener from "./basic/KeyListener.js";
import keyCode from "./basic/Keycode.js";

scene.add(cube)
scene.add( light );
scene.add( plane );

camera.position.set(2,2,2);
camera.lookAt(cube.position)

loopMachine.addCallback(() => {
    if (keyListener.isPressed(keyCode.Enter)) cube.rotation.y += .01;
    renderer.render(scene, camera);  // take a picture of the scene
})



resize.start(renderer);

loopMachine.start()
keyListener.start()