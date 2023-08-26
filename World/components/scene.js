import { Color, Scene } from '/vendor/three/build/three.module.js';

function createScene() {
  const scene = new Scene();

  scene.background = new Color('#C0C0C0');

  return scene;
}

export { createScene };
