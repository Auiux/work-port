import * as THREE from "three";
import { Vector3 } from "three";
import { degToRad } from "three/src/math/MathUtils";
import ProLang from "./ProLang";


export default class ProLangs {
    keys: Array<ProLang>;
    initialized: boolean;
    constructor(world: CANNON.World, scene: THREE.Scene) {
        this.keys = [
            new ProLang(world, scene, new Vector3(-25, -5, 100), "js"),
            new ProLang(world, scene, new Vector3(-25, -5, 120), "ts"),
            new ProLang(world, scene, new Vector3(-25, -5, 140), "golang"),
            new ProLang(world, scene, new Vector3(-25, -5, 160), "cs"),
            new ProLang(world, scene, new Vector3(-25, -5, 180), "python"),
            new ProLang(world, scene, new Vector3(-25, -5, 200), "php"),
            new ProLang(world, scene, new Vector3(-25, -5, 220), "cpp"),
            new ProLang(world, scene, new Vector3(-25, -5, 240), "bash"),
        ];

    }
    public async init() {
        for (let i = 0; i < this.keys.length; i++) {
            const key = this.keys[i];
            await key.init();
            key.mesh.rotateY(degToRad(-45));
            key.body.quaternion.copy(key.mesh.quaternion)
            key.mesh.receiveShadow = false
        }
        this.initialized = true;

    }
    update(deltatime: number) {
        this.keys.forEach(key => {
            key.update(deltatime);
        })
    }
}