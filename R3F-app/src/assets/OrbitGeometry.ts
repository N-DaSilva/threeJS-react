import * as THREE from 'three';

const orbitGeometry = new THREE.RingGeometry(0.99,1,64);
const orbitMaterial = new THREE.MeshBasicMaterial({ color: 'white', side: THREE.DoubleSide });

export  { orbitGeometry, orbitMaterial } 