import { createCamera } from 'https://raw.githubusercontent.com/ToryBigFish/InstallationWeb/main/World/components/camera.js';
import { createLights } from 'https://raw.githubusercontent.com/ToryBigFish/InstallationWeb/main/World/components/lights.js';
import { createScene } from 'https://raw.githubusercontent.com/ToryBigFish/InstallationWeb/main/World/components/scene.js';

import { createControls } from 'https://raw.githubusercontent.com/ToryBigFish/InstallationWeb/main/World/systems/controls.js';
import { createRenderer } from 'https://raw.githubusercontent.com/ToryBigFish/InstallationWeb/main/World/systems/renderer.js';
import { Resizer } from 'https://raw.githubusercontent.com/ToryBigFish/InstallationWeb/main/World/systems/Resizer.js';
import { Loop } from 'https://raw.githubusercontent.com/ToryBigFish/InstallationWeb/main/World/systems/Loop.js';

import {Vector3} from 'https://raw.githubusercontent.com/ToryBigFish/InstallationWeb/main/vendor/three/build/three.module.js';

import { modelLoader } from 'https://raw.githubusercontent.com/ToryBigFish/InstallationWeb/main/World/components/Installation/modelLoad.js';
import { setting_button } from 'https://raw.githubusercontent.com/ToryBigFish/InstallationWeb/main/World/components/Installation/setting_buttons_with_animations.js';

let camera;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    const controls = createControls(camera, renderer.domElement);

    const {mainlight_1, mainlight_2, mainlight_3, mainlight_4, ambientLight} = createLights();

    // objects for updates
    loop.updatables.push(controls);


    scene.add(mainlight_1, mainlight_2, mainlight_3, mainlight_4, ambientLight);

    controls.target = new Vector3(0.5,0,-1);
    controls.update();

    const resizer = new Resizer(container, camera, renderer);
  }

  async init(){



    //--------------------------------------------------------------------
    
    const [Imported_animated_groups, Imported_not_animated_groups, actions]= await modelLoader();

    setting_button("#LEDs_background", actions.LEDs_background);
    setting_button("#LEDs_obj", actions.LEDs_obj);
    setting_button("#Channel_LEDs_obj", actions.Channel_LEDs_obj);
    setting_button("#Absorbing_filter", actions.Absorbing_filter);
    setting_button("#Color_filters", actions.Color_filters);
    setting_button("#Monochromator", actions.Monochromator);
    setting_button("#Shar", actions.Shar);


    document.querySelector("#Experiment").onclick = function(){

      actions.Experiment.forEach( vec_animations => vec_animations.forEach(animation => animation.play()) );
      Imported_animated_groups[15].children.forEach(element => element.material.opacity = 0.3);;

    }
    document.querySelector("#Experiment").oncontextmenu = function(){

      actions.Experiment.forEach( vec_animations => vec_animations.forEach(animation => animation.stop()) );
      Imported_animated_groups[15].children.forEach(element => element.material.opacity = 1);

      return false
    }

    Imported_not_animated_groups.forEach(object => scene.add(object));

    Imported_animated_groups.forEach(group => {scene.add(group); group.children.forEach(mesh => loop.updatables.push(mesh))});

    //---------------------------------------------------------------
    
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }


  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }


}

export { World };
