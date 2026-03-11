import * as THREE from 'three';

//create geometry for planets as component so that it's reusable, to limit amount of geometries on scene for more efficient rendering
const planetGeometry = new THREE.SphereGeometry();

export  { planetGeometry } 