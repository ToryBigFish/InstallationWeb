import { OrbitControls } from '/vendor/three/build/OrbitControls.js';

function createControls(camera, canvas) {
	const controls = new OrbitControls(camera, canvas);

	controls.enableDamping = true;

	controls.minDistance = 0.1;
	controls.maxDistance = 20;

	controls.tick = () => controls.update();


	return controls;
}


export { createControls };