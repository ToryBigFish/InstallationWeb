import {  AnimationClip, AnimationMixer, LoopOnce } from '/vendor/three/build/three.module.js';



function animations_for_group(group_model,Clip, animate_once){

	var mixer_group_model = [];


	var action_group_model = [];

	for (let i=0;i<group_model.children.length;i++){

	  group_model.children[i].material.transparent = true;

	  mixer_group_model[i] = new AnimationMixer(group_model.children[i]);

	  group_model.children[i].tick = (delta) => mixer_group_model[i].update(delta);

	  action_group_model[i] = mixer_group_model[i].clipAction(Clip);

	  if (animate_once){
		  action_group_model[i].setLoop(LoopOnce);
		  action_group_model[i].clampWhenFinished = true;
		  action_group_model[i].enable = true;
		}
	}

	return action_group_model;
}

export { animations_for_group };
