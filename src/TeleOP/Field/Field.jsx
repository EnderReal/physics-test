import { usePlane } from "@react-three/cannon";
import React, { Suspense, useEffect, useRef } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Cone from "./Cone";

function Field() {

    const [ref] = usePlane(
        () => ({
            type: 'Static',
            rotation: [-Math.PI / 2, 0, 0]
        }),
        useRef(null)
    );

    return (
        <Suspense fallback={null}>
            <Cone />
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <planeBufferGeometry attach="geometry" args={[50, 50]} />
                {/* 0xf57af5 */}
                <meshPhongMaterial attach={"material"} color={0x000000} />
            </mesh>
        </Suspense>
    );
}

export default Field