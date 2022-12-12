import React, { Suspense } from "react";
import Scene from "./Environment/Scene";
import Field from "./Field/Field";
import { Stats } from "@react-three/drei";
import Loki from "./Robot/Loki";

function Scena() {
    return (
        // <div className="wrapper">
        // <Canvas className="canvas">
        <Suspense fallback={null}>
            <Stats showPanel={2} />
            {/* <Physics
                    gravity={[0, -9.8, 0]}
                    broadphase="SAP"
                > */}
            <Field />
            <Scene />
            <Loki />
        </Suspense>
        /* </Physics> */
        /* </Canvas> */
    );
}

export default Scena;