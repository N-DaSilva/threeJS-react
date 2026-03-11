import * as THREE from 'three';

//create geometry and material as a component for the orbit discs so they can be reused multiple times

const orbitGeometry = new THREE.RingGeometry(0.99,1,64);
const orbitMaterial = new THREE.MeshBasicMaterial({ color: 'white', side: THREE.DoubleSide });

export  { orbitGeometry, orbitMaterial } 