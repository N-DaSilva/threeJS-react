import { OrbitControls} from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { useRef } from 'react';
import * as THREE from 'three';

import { planetGeometry } from "./assets/PlanetGeometry.ts";
import PlanetObject from "./assets/Planet.tsx"
import { orbitGeometry, orbitMaterial } from "./assets/OrbitGeometry.ts";
import Title from "./assets/Title.tsx";


export function Scene() {

    const orbitRefs = useRef<THREE.Group[]>([]);

    useFrame((state, delta) => {
        if (!orbitRefs.current){
            return;
        }
        orbitRefs.current[0].rotation.y += delta *0.3;
        orbitRefs.current[1].rotation.y += delta *0.1;
        orbitRefs.current[2].rotation.y += delta *0.05;
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
            <OrbitControls enablePan={false} />

            <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} geometry={planetGeometry} scale={[1.5, 1.5, 1.5]}>
                <meshBasicMaterial color="#ffcc00" />
            </mesh>

            <group ref={(ref) => orbitRefs.current[0] = ref!}>
                <PlanetObject position={[2,0,2]} scale={[0.25,0.25,0.25]} note="C" />
                <mesh rotation={[Math.PI / 2,0,0]} geometry={orbitGeometry} material={orbitMaterial} scale={[2.9,2.9,2.9]}></mesh>
            </group>

            <group ref={(ref) => orbitRefs.current[1] = ref!} rotation={[0.2,0,0]}>
                <PlanetObject position={[3.25,0,-3.25]} scale={[0.5,0.5,0.5]} note="G"/>
                <mesh rotation={[Math.PI / 2,0,0]} geometry={orbitGeometry} material={orbitMaterial} scale={[4.75,4.75,4.75]}></mesh>
            </group>

            <group ref={(ref) => orbitRefs.current[2] = ref!} rotation={[0.1,0,0]}>
                <PlanetObject position={[-0.75,0,6.75]} scale={[1,1,1]} note="E"/>
                <mesh rotation={[Math.PI / 2,0,0]} geometry={orbitGeometry} material={orbitMaterial} scale={[6.75,6.75,6.75]}></mesh>
            </group>

            <Title position={[0,-5,15.5]} rotation={[0.75,Math.PI ,0]} scale={[8,20,15]} />
        </>
    )
}