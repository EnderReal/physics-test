import React from "react";
import { Canvas } from "react-three-fiber";
import { Physics } from "@react-three/cannon";
import Scena from "./Scena";

function Assembly() {
    return (
        <Canvas className="canvas">
            <Physics
                broadphase={'SAP'}
                gravity={[0, -9.8, 0]}
            >
                <Scena />
            </Physics>
        </Canvas>
    );
}

export default Assembly;