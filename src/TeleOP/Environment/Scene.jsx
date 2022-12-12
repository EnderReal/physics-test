import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import React, { Suspense } from "react";
import { GridHelper } from "three";

function Scene()
{

    return(
        <Suspense fallback={null}>
            <Environment 
                preset={"sunset"}
                background={true}
                files={"./../../Geometries/hdri/HDR.hdr"}
            />
            <ambientLight position={[0, 4, 0]} intensity={.4} />
            <PerspectiveCamera 
                makeDefault
                position={[0, 1, -1]}
                fov={45}
            />
            <gridHelper args={[100, 100]} />
            <OrbitControls target={[0, 0.15, 0]} zoomSpeed={0.3}/>
        </Suspense>
    );
}

export default Scene;