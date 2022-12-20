import { useBox, usePlane } from "@react-three/cannon";
import React, { Suspense, useEffect, useRef } from "react";
import { useLoader } from "react-three-fiber";
import { Texture, TextureLoader } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { PereteBox } from "./PereteBox";
import Cone from "./Cone";
import { Junction } from './Junction';

import FieldTexture from './light_field.jpg';
import Ground from "./Ground";

function Field() {

    const [ref] = usePlane(
        () => ({
            type: 'Static',
            rotation: [-Math.PI / 2, 0, 0]
        }),
        useRef(null)
    );

    const textureMap = useLoader(TextureLoader, FieldTexture);
    textureMap.repeat.set(1, 1);

    // const pereteTexture = useLoader(TextureLoader, pereteTexture);

    return (
        <Suspense fallback={null}>
            <Cone position={[3 * 3 / 4, 1, 3 * 3 / 4]} />
            <Cone position={[-3 * 3 / 4, 1, 3 * 3 / 4]} />

            <Cone position={[3 * 3 / 4, 1, -3 * 3 / 4]} />
            <Cone position={[-3 * 3 / 4, 1, -3 * 3 / 4]} />

            <Ground position={[0, 0, 0]} />
            <Ground position={[3, 0, 0]} />
            <Ground position={[-3, 0, 0]} />
            <Ground position={[0, 0, 3]} />
            <Ground position={[0, 0, -3]} />
            <Ground position={[3, 0, 3]} />
            <Ground position={[3, 0, -3]} />
            <Ground position={[-3, 0, 3]} />
            <Ground position={[-3, 0, -3]} />

            <Junction height={2} position={[1.48, 0, 0]} planeRef={ref} />
            <Junction height={2} position={[-1.48, 0, 0]} planeRef={ref} />
            <Junction height={2} position={[0, 0, 1.48]} planeRef={ref} />
            <Junction height={2} position={[0, 0, -1.48]} planeRef={ref} />

            <Junction height={1.2} position={[1.48, 0, 1.48]} planeRef={ref} />
            <Junction height={1.2} position={[1.48, 0, -1.48]} planeRef={ref} />
            <Junction height={1.2} position={[-1.48, 0, 1.48]} planeRef={ref} />
            <Junction height={1.2} position={[-1.48, 0, -1.48]} planeRef={ref} />

            <Junction height={.8} position={[-1.48 * 2, 0, 1.48]} planeRef={ref} />
            <Junction height={.8} position={[-1.48, 0, 1.48 * 2]} planeRef={ref} />
            <Junction height={.8} position={[1.48 * 2, 0, 1.48]} planeRef={ref} />
            <Junction height={.8} position={[1.48, 0, 1.48 * 2]} planeRef={ref} />

            <Junction height={.8} position={[1.48 * 2, 0, -1.48]} planeRef={ref} />
            <Junction height={.8} position={[1.48, 0, -1.48 * 2]} planeRef={ref} />
            <Junction height={.8} position={[-1.48 * 2, 0, -1.48]} planeRef={ref} />
            <Junction height={.8} position={[-1.48, 0, -1.48 * 2]} planeRef={ref} />

            <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry attach="geometry" args={[9, 9]} />
                {/* 0xf57af5 */}
                {/* <meshPhongMaterial attach={"material"} color={0x000000} /> */}
                <meshBasicMaterial attach={"material"} map={textureMap} />
            </mesh>

            <PereteBox position={[4.5, .25, 0]} scale={[0.1, .5, 9.1]} />
            <PereteBox position={[-4.5, .25, 0]} scale={[0.1, .5, 9.1]} />
            <PereteBox position={[0, .25, 4.5]} scale={[9.1, .5, .1]} />
            <PereteBox position={[0, .25, -4.5]} scale={[9.1, .5, .1]} />
        </Suspense>
    );
}

export default Field