function setting_button(button_id, actions) {

	document.querySelector(button_id).onclick = function(){

	  actions.forEach(vec_animations => vec_animations.forEach(animation => animation.play()) );
	  

    }
    document.querySelector(button_id).oncontextmenu = function(){
      actions.forEach(vec_animations => vec_animations.forEach(animation => animation.stop()) );
      return false
    }

}

export { setting_button }