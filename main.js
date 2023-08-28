// import { World } from './World/World.js';
<script type="text/javascript" src='https://rawcdn.githack.com/ToryBigFish/InstallationWeb/9be8b6553a2cd26fed61f6de6e74d272f7eeb98f/World/World.js'></script>
async function main() {
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');

  // create a new world
  const world = new World(container);

  // complete async tasks
  await world.init();

  // start the loop 
  world.start();
}


main().catch((err) => {
  console.error(err);
});
