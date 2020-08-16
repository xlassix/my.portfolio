import * as THREE from "three";

const createStormLight = (scene, assets_names) => {
  let flash = new THREE.PointLight(0x062d89, 40, 500, 1.7);
  flash.position.set(100, 650, 100);
  flash.rotation.x = Math.PI / 2;
  scene.add(flash);

  assets_names["scene1"].push(flash.uuid);

  return flash;
};

export default createStormLight;
