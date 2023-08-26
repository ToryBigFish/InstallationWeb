import { GLTFLoader } from '/vendor/three/build/GLTFLoader.js';

import { Color, MathUtils, AnimationClip, VectorKeyframeTrack, NumberKeyframeTrack, Group, MeshStandardMaterial, MeshPhongMaterial, MeshPhysicalMaterial, DoubleSide } from '/vendor/three/build/three.module.js';

import { animations_for_group } from './animate_group_model.js';


async function modelLoader() {

  const loader = new GLTFLoader();


  // Загрузка моделей
  const [data_Plane, data_Led_system1, data_Led_system2, data_Led_system3, data_Led_system4, data_Filters, data_Installation_for_LEDs,
  data_LEDs, data_Monohrom, data_Optic_for_vision, data_Optical_channel_1, data_Optical_channel_2, data_Optical_channel_3, data_Optical_channel_4,
  data_Ray_channel_left, data_Ray_channel_right, data_Shar, data_Spin_me, data_Spin_system, data_Visible_rectangle, data_Glasses, data_Mirror, data_Light] = await Promise.all([
      loader.loadAsync('/assets/models/Plane.glb'),
      loader.loadAsync('/assets/models/Led_system_1_2.glb'),
      loader.loadAsync('/assets/models/Led_system_2_4.glb'),
      loader.loadAsync('/assets/models/Led_system_3_2.glb'),
      loader.loadAsync('/assets/models/Led_system_4_1.glb'),
      loader.loadAsync('/assets/models/Filters.glb'),
      loader.loadAsync('/assets/models/Installation_for_LEDs_1.glb'),
      loader.loadAsync('/assets/models/LEDs.glb'),

      loader.loadAsync('/assets/models/Monohrom_3.glb'),
      loader.loadAsync('/assets/models/Optic_for_vision.glb'),
      loader.loadAsync('/assets/models/Optical_channel_1.glb'),
      loader.loadAsync('/assets/models/Optical_channel_2.glb'),
      loader.loadAsync('/assets/models/Optical_channel_3.glb'),
      loader.loadAsync('/assets/models/Optical_channel_4.glb'),
      loader.loadAsync('/assets/models/Ray_channel_left.glb'),
      loader.loadAsync('/assets/models/Ray_channel_right_1.glb'),

      loader.loadAsync('/assets/models/Shar_6.glb'),
      loader.loadAsync('/assets/models/Spin_me.glb'),
      loader.loadAsync('/assets/models/Spin_system.glb'),
      loader.loadAsync('/assets/models/Visible_rectangle.glb'),
      loader.loadAsync('/assets/models/Glasses.glb'),
      loader.loadAsync('/assets/models/Mirror.glb'),
      loader.loadAsync('/assets/models/Light.glb'),
    ]);

  	// Configuring models
    const scale = 0.05

    const Plane = data_Plane.scene;
    Plane.scale.set(scale,scale,scale);

    const Led_system1 = data_Led_system1.scene;
    Led_system1.scale.set(scale,scale,scale);

    const Led_system2 = data_Led_system2.scene;
    Led_system2.scale.set(scale,scale,scale);

    const Led_system3 = data_Led_system3.scene;
    Led_system3.scale.set(scale,scale,scale);

    const Led_system4 = data_Led_system4.scene;
    Led_system4.scale.set(scale,scale,scale);

    var Filters = data_Filters.scene;
    Filters.scale.set(scale,scale,scale);

    const Installation_for_LEDs = data_Installation_for_LEDs.scene;
    Installation_for_LEDs.scale.set(scale,scale,scale);

    const LEDs = data_LEDs.scene;
    LEDs.scale.set(scale,scale,scale);

    const Monohrom = data_Monohrom.scene;
    Monohrom.scale.set(scale,scale,scale);

    const Optic_for_vision = data_Optic_for_vision.scene;
    Optic_for_vision.scale.set(scale,scale,scale);

    const Optical_channel_1 = data_Optical_channel_1.scene;
    Optical_channel_1.scale.set(scale,scale,scale);

    const Optical_channel_2 = data_Optical_channel_2.scene;
    Optical_channel_2.scale.set(scale,scale,scale);

    const Optical_channel_3 = data_Optical_channel_3.scene;
    Optical_channel_3.scale.set(scale,scale,scale);

    const Optical_channel_4 = data_Optical_channel_4.scene;
    Optical_channel_4.scale.set(scale,scale,scale);

    const Ray_channel_left = data_Ray_channel_left.scene;
    Ray_channel_left.scale.set(scale,scale,scale);

    const Ray_channel_right = data_Ray_channel_right.scene;
    Ray_channel_right.scale.set(scale,scale,scale);

    const Shar = data_Shar.scene;
    Shar.scale.set(scale,scale,scale);


    const Spin_me = data_Spin_me.scene;
    Spin_me.scale.set(scale,scale,scale);
    

    const Spin_system = data_Spin_system.scene;
    Spin_system.scale.set(scale,scale,scale);
    


    const Visible_rectangle = data_Visible_rectangle.scene;
    Visible_rectangle.scale.set(scale,scale,scale);

    const Glasses = data_Glasses.scene;
    Glasses.scale.set(scale,scale,scale);

    const Mirror = data_Mirror.scene;
    Mirror.scale.set(scale,scale,scale);



    // Корректировка
    Spin_me.children.forEach(mesh => mesh.position.y-=0.4);
    Spin_me.children.forEach(mesh => mesh.position.x+=0.2);
    Spin_system.children.forEach(mesh => mesh.position.y-=0.4);
    Glasses.children[10].position.y-=0.4;


    const Light = data_Light.scene;
    Light.scale.set(scale,scale,scale);
    var material_Light = new MeshPhongMaterial({
      color : "yellow",
      opacity : 0.2,
      transparent :true,
      side: DoubleSide,
    });
    Light.children.forEach(mesh => mesh.material = material_Light);


    var material_Mirror = new MeshPhysicalMaterial({
      color : "white",
      clearcoat : 1,
      clearcoatRoughness : 0,
      transparent : true,
    })
    Mirror.children[0].material = material_Mirror;


    var little_rectangle_material = new MeshStandardMaterial({
      color: "yellow",
      metalness: 0,
      roughness: 0.9,
    });

    var big_rectangle_material = new MeshStandardMaterial({
      color: "green",
      metalness: 0,
      roughness: 0.9,
    });
    const Color_1 = new Color(0xe6fa0a); 
    const Color_1b = new Color(0xfad20a); 
    const Color_2 = new Color(0xfaaa0a);
    const Color_2b = new Color(0xda0afa);
    const Color_3 = new Color(0x0afaa2);
    const Color_3b = new Color(0x0ced66);

    Visible_rectangle.children[0].material = little_rectangle_material;
    Visible_rectangle.children[1].material = big_rectangle_material;

    Light.children.forEach(mesh => mesh.material.color = Color_1);
    Visible_rectangle.children[0].material.color = Color_1;
    Visible_rectangle.children[1].material.color = Color_2;
    



    
    // Plastic_material
    
    const material_plane = new MeshStandardMaterial({
      color: 0x525252,
      metalness: 0,
      roughness: 0.9,
    });


    const material_Glass = new MeshPhongMaterial({
      color : "white",
      opacity : 0.2,
      transparent :true,
      side: DoubleSide,
    });

    const material_Glass_red = new MeshPhongMaterial({
      color : "red",
      opacity : 0.3,
      transparent :true,
      side: DoubleSide,
    });
    const material_Glass_green = new MeshPhongMaterial({
      color : "green",
      opacity : 0.3,
      transparent :true,
      side: DoubleSide,
    });
    const material_Glass_blue = new MeshPhongMaterial({
      color : "blue",
      opacity : 0.3,
      transparent :true,
      side: DoubleSide,
    })


    Glasses.children.forEach((element) => {element.material = material_Glass});

    for (let i=0;i<12;i+=3){

      Filters.children[i].material = material_Glass_red;
      Filters.children[i+1].material = material_Glass_green;
      Filters.children[i+2].material = material_Glass_blue;
    }

    var Filters1 = new Group();
    var Filters2 = new Group();
    var Filters3 = new Group();

    Filters1.add(Filters.children[0]);
    Filters1.add(Filters.children[2]);
    Filters1.add(Filters.children[4]);
    Filters1.add(Filters.children[6]);

    Filters2.add(Filters.children[0]);
    Filters2.add(Filters.children[1]);
    Filters2.add(Filters.children[2]);
    Filters2.add(Filters.children[3]);

    Filters3.add(Filters.children[0]);
    Filters3.add(Filters.children[0]);
    Filters3.add(Filters.children[0]);
    Filters3.add(Filters.children[0]);

    //Filters = Filters3;
    Filters1.scale.set(scale,scale,scale);
    Filters2.scale.set(scale,scale,scale);
    Filters3.scale.set(scale,scale,scale);


    // Настройка анимаций


    // Blink opacity
    const times_blink = [0, 1, 2, 3, 4];
    const values_blink = [1, 0, 1, 0, 1];
    const opacityKF = new NumberKeyframeTrack('.material.opacity', times_blink, values_blink);
    const tracks_blink = [opacityKF];
    const clip_blink = new AnimationClip('blink', -1, tracks_blink);


    // Filters clip

    // 1
    const times_filters = [0, 3, 6];

    const values_filters = [Filters.position.x, Filters.position.y, Filters.position.z,
    Filters.position.x, Filters.position.y + 5, Filters.position.z,
    Filters.position.x, Filters.position.y, Filters.position.z];

    const positionKF = new VectorKeyframeTrack('.position', times_filters, values_filters);

    const tracks_filters = [positionKF];
    const clip_filters = new AnimationClip('filters1', -1, tracks_filters);


    //2
    const times_filters2 = [0, 6, 9];
    const positionKF2 = new VectorKeyframeTrack('.position', times_filters2, values_filters);
    const tracks_filters2 = [positionKF2];
    const clip_filters2 = new AnimationClip('filters1', -1, tracks_filters2);

    //3
    const times_filters3 = [0, 9, 12];
    const positionKF3 = new VectorKeyframeTrack('.position', times_filters3, values_filters);
    const tracks_filters3 = [positionKF3];
    const clip_filters3 = new AnimationClip('filters1', -1, tracks_filters3);



    // Button animation


    // LED system 1-3
    const action_Led_system1 = animations_for_group(Led_system1,clip_blink,true);
    const action_Led_system2 = animations_for_group(Led_system2,clip_blink,true);
    const action_Led_system3 = animations_for_group(Led_system3,clip_blink,true);
    const action_Led_system4 = animations_for_group(Led_system4,clip_blink,true);
    // Optical channels 1-3
    const action_Optical_channel_1 = animations_for_group(Optical_channel_1,clip_blink,true);
    const action_Optical_channel_2 = animations_for_group(Optical_channel_2,clip_blink,true);
    const action_Optical_channel_3 = animations_for_group(Optical_channel_3,clip_blink,true);
    const action_Optical_channel_4 = animations_for_group(Optical_channel_4,clip_blink,true);
    // Installation_for_LEDs, LEDs
    const action_Installation_for_LEDs = animations_for_group(Installation_for_LEDs,clip_blink,true);
    const action_LEDs = animations_for_group(LEDs,clip_blink,true);
    // Ray_channels
    const action_Ray_channel_left = animations_for_group(Ray_channel_left,clip_blink,true);
    const action_Ray_channel_right = animations_for_group(Ray_channel_right,clip_blink,true);
    // Spin
    const action_Spin_me = animations_for_group(Spin_me,clip_blink,true);
    const action_Spin_system = animations_for_group(Spin_system,clip_blink,true);
    // Filters
    const action_Filters1 = animations_for_group(Filters1,clip_filters,false);
    const action_Filters2 = animations_for_group(Filters2,clip_filters2,false);
    const action_Filters3 = animations_for_group(Filters3,clip_filters3,false);
    // Monohrom
    const action_Monohrom = animations_for_group(Monohrom,clip_blink,true);
    // Shar
    const action_Shar = animations_for_group(Shar,clip_blink,true);
    // Experiment
    const action_Optic_for_vision = animations_for_group(Optic_for_vision,clip_blink,false);

    const action_Light = animations_for_group(Light,clip_blink,false);





    const animated_groups = [
    Led_system1,
    Led_system2,
    Led_system3,
    Led_system4,
    Filters,
    Installation_for_LEDs,
    LEDs,
    Monohrom,
    Optic_for_vision,
    Optical_channel_1,
    Optical_channel_2,
    Optical_channel_3,
    Optical_channel_4,
    Ray_channel_left,
    Ray_channel_right,
    Shar,
    Spin_me,
    Spin_system,
    Filters1,
    Filters2,
    Filters3,
    Light];


    const not_animated_groups = [Plane, Visible_rectangle, Glasses,Mirror];
   


    const actions = {
      LEDs_background : [action_Led_system1, action_Led_system2, action_Led_system3, action_Led_system4,
       action_Optical_channel_1, action_Optical_channel_2, action_Optical_channel_3, action_Optical_channel_4],
      LEDs_obj : [action_Installation_for_LEDs, action_LEDs],
      Channel_LEDs_obj : [action_Ray_channel_left, action_Ray_channel_right],
      Absorbing_filter : [action_Spin_me, action_Spin_system],
      Color_filters : [action_Filters1, action_Filters2, action_Filters3],
      Monochromator : [action_Monohrom],
      Shar : [action_Shar],
      Experiment : [action_Optic_for_vision, action_Light]
    }
    
  return [
  animated_groups,
  not_animated_groups,
  actions
  ];
}

export { modelLoader };