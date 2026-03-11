import { Text } from "@react-three/drei";


export default function Title() {
    //used Text component from drei to display 2D text in 3D space without it constantly facing the camera unlike R3F Html component
    //I wanted to add a specific font but couldn't get it to work...
    
    return (
        <>
            <Text color="white" anchorX="center" anchorY="middle" position={[0,-5,15.5]} rotation={[0.75,Math.PI ,0]} scale={[8,20,15]}>
                Cosmic Harmony
            </Text>

            <Text color="white" anchorX="center" anchorY="middle" position={[0,-15,10]} rotation={[Math.PI /2.5, Math.PI, 0]} scale={[1,1,1]}>
                Click on the planets to play notes continuously. Click again to stop. Getting closer to the planets makes the notes louder.
            </Text>
        </>
    )
}