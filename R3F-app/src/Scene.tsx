import { Html, OrbitControls, useHelper } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { useRef } from 'react';
import * as THREE from 'three';

export function Scene() {
    const directionalLightRef = useRef<THREE.DirectionalLightHelper>(null!);

    const boxRef = useRef<THREE.Mesh>(null);

    useHelper(directionalLightRef, THREE.DirectionalLightHelper);

    useFrame((state, delta) => {
        if(boxRef.current){
            boxRef.current.rotation.y += delta;
        }
    })

    const { showPerf } = useControls('Debug', {
        showPerf: {
            label : 'Show perf',
            value : false
        }
    })

    const { color, position, rotation, wireframe } = useControls('Cube', {
        color: {
            label : 'Cube color',
            value : '#ffffff'
        },
        position: {
            label : 'Position',
            value : {x:0, y:0, z:0},
            step : 0.1
        },
        rotation: {
            label : 'Rotation',
            value: {x:0, y:0, z:0},
            step : 0.1
        },
        wireframe: {
            label : 'Show wireframe',
            value : false
        }
    })

    return (
        <>
            {showPerf &&
                <Perf position="top-left" />}

            <OrbitControls />
            <ambientLight intensity={1} />
            <directionalLight ref={directionalLightRef} color="#ff1111" intensity={3} position={[0,5,-3]} />

            <mesh position={[-2, 2, 0]} rotation={[0.5, 0, 0]} ref={boxRef}>
                <boxGeometry />
                <meshStandardMaterial color="#ff00cd" />
            </mesh>

            <mesh position={[3, -1, -3]} rotation={[1, 0, 6]}>
                <torusKnotGeometry />
                <meshNormalMaterial />
            </mesh>

            <mesh position={[position.x, position.y, position.z]} rotation={[rotation.x, rotation.y, rotation.z]}>
                <boxGeometry />
                <meshStandardMaterial color={color} wireframe={wireframe} />
            </mesh>

            <mesh position={[0.5, 1, 0]}>
                <boxGeometry />
                <meshStandardMaterial color="orange" />
            </mesh>

            <mesh position={[1, 2, 0]}>
                <boxGeometry />
                <meshStandardMaterial color="yellow" />
            </mesh>
            
            <Html position={[2,2,2]}>
                <p>Hello</p>
            </Html>
        </>
    )
}