import { PerspectiveCamera } from '/vendor/three/build/three.module.js';


function createCamera() {
  const camera = new PerspectiveCamera(
    75, // fov = Field Of View
    1, // aspect ratio (dummy value)
    0.1, // near clipping plane
    1000, // far clipping plane
  );

  // move the camera back so we can view the scene
  camera.position.set(2, 2, 2);


  return camera;
}

export { createCamera };
