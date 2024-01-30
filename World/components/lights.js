import { DirectionalLight, AmbientLight, HemisphereLight } from '/vendor/three/build/three.module.js';

function createLights() {
  const ambientLight = new HemisphereLight(
    'white', // bright sky color
    'darkslategrey', // dim ground color
    1, // intensity
  );

  // Create a directional light

  // Light intensity
  const Light_intensity = 2.5;

  const mainlight_1 = new DirectionalLight('white', Light_intensity);
  // move the light right, up, and towards us
  mainlight_1.position.set(3, 3, 3);

  const mainlight_2 = new DirectionalLight('white', Light_intensity);
  mainlight_2.position.set(-3, 3, -3);

  const mainlight_3 = new DirectionalLight('white', Light_intensity);
  mainlight_3.position.set(3, 3, -3);

  const mainlight_4 = new DirectionalLight('white', Light_intensity);
  mainlight_4.position.set(-3, 3, 3);

  return {mainlight_1, mainlight_2, mainlight_3, mainlight_4, ambientLight};
}

export { createLights };