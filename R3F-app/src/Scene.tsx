import { OrbitControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { useRef } from 'react';
import * as THREE from 'three';

import { planetGeometry } from "./assets/PlanetGeometry.ts";
import PlanetObject from "./assets/Planet.tsx"
import { orbitGeometry, orbitMaterial } from "./assets/OrbitGeometry.ts";

export function Scene() {

    const orbitRef1 = useRef<THREE.Mesh>(null);
    const orbitRef2 = useRef<THREE.Mesh>(null);
    const orbitRef3 = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if(orbitRef1.current){
            orbitRef1.current.rotation.y += delta *0.3;
        }
        if(orbitRef2.current){
            orbitRef2.current.rotation.y += delta *0.1;
        }
        if(orbitRef3.current){
            orbitRef3.current.rotation.y += delta *0.05;
        }
    })

    const { showPerf } = useControls('Debug', {
        showPerf: {
            label : 'Show perf',
            value : false
        }
    })

    return (
        <>
        {showPerf &&
                <Perf position="top-left" />}
            <OrbitControls />

            <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} geometry={planetGeometry} scale={[1.5, 1.5, 1.5]}>
                <meshBasicMaterial color="#ffcc00" />
            </mesh>

            <group ref={orbitRef1}>
                <PlanetObject position={[2,0,2]} scale={[0.25,0.25,0.25]} />
                <mesh rotation={[Math.PI / 2,0,0]} geometry={orbitGeometry} material={orbitMaterial} scale={[2.9,2.9,2.9]}></mesh>
            </group>

            <group ref={orbitRef2} rotation={[0.2,0,0]}>
                <PlanetObject position={[3.25,0,-3.25]} scale={[0.5,0.5,0.5]} />
                <mesh rotation={[Math.PI / 2,0,0]} geometry={orbitGeometry} material={orbitMaterial} scale={[4.75,4.75,4.75]}></mesh>
            </group>

            <group ref={orbitRef3} rotation={[0.1,0,0]}>
                <PlanetObject position={[-0.75,0,6.75]} scale={[1,1,1]} />
                <mesh rotation={[Math.PI / 2,0,0]} geometry={orbitGeometry} material={orbitMaterial} scale={[6.75,6.75,6.75]}></mesh>
            </group>
        </>
    )
}