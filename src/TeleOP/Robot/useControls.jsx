import { useEffect, useState } from "react";


export const useControls = (vehicleAPI, chassisAPI) => {

    let [controls, setControls] = useState({});

    useEffect(() => {

        const keyDown = (e) => {
            setControls((controls) => ({
                ...controls,
                [e.key.toLowerCase()]: true
            }));
        }

        const keyUp = (e) => {
            setControls((controls) => ({
                ...controls,
                [e.key.toLowerCase()]: false
            }));
        }

        window.addEventListener("keydown", keyDown);
        window.addEventListener("keyup", keyUp);
        return () => {
            window.removeEventListener("keydown", keyDown);
            window.removeEventListener("keyup", keyUp);
        };

    }, []);

    useEffect(() => {
        if (!vehicleAPI || !chassisAPI) return;

        if (controls.w) {
            vehicleAPI.applyEngineForce(150, 2);
            vehicleAPI.applyEngineForce(150, 3);
        } else if (controls.s) {
            vehicleAPI.applyEngineForce(-150, 2);
            vehicleAPI.applyEngineForce(-150, 3);
        } else {
            vehicleAPI.applyEngineForce(0, 2);
            vehicleAPI.applyEngineForce(0, 3);
        }

        if (controls.a) {
            vehicleAPI.setSteeringValue(0.35, 2);
            vehicleAPI.setSteeringValue(0.35, 3);
            vehicleAPI.setSteeringValue(-0.1, 0);
            vehicleAPI.setSteeringValue(-0.1, 1);
        } else if (controls.d) {
            vehicleAPI.setSteeringValue(-0.35, 2);
            vehicleAPI.setSteeringValue(-0.35, 3);
            vehicleAPI.setSteeringValue(0.1, 0);
            vehicleAPI.setSteeringValue(0.1, 1);
        } else {
            for (let i = 0; i < 4; i++) {
                vehicleAPI.setSteeringValue(0, i);
            }
        }

        if (controls.arrowdown) chassisAPI.applyLocalImpulse([0, -5, 0], [0, 0, +1]);
        if (controls.arrowup) chassisAPI.applyLocalImpulse([0, -5, 0], [0, 0, -1]);
        if (controls.arrowleft) chassisAPI.applyLocalImpulse([0, -5, 0], [-0.5, 0, 0]);
        if (controls.arrowright) chassisAPI.applyLocalImpulse([0, -5, 0], [+0.5, 0, 0]);

        // if (controls.r) {
        //     chassisAPI.position.set(-1.5, 0.5, 3);
        //     chassisAPI.velocity.set(0, 0, 0);
        //     chassisAPI.angularVelocity.set(0, 0, 0);
        //     chassisAPI.rotation.set(0, 0, 0);
        // }
    }, [controls, vehicleAPI, chassisAPI]);

    return controls;

};