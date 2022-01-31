import * as THREE from "three";
import { Vector3 } from "three";
import { degToRad } from "three/src/math/MathUtils";
import Billboard from "./Billboard";


export default class Billboards {
    keys: Array<Billboard>;
    initialized: boolean;
    constructor(world: CANNON.World, scene: THREE.Scene, camera: THREE.PerspectiveCamera) {
        this.keys = [
            new Billboard(world, scene, camera, new Vector3(50, 0, 40), "miles madness", new Vector3(0.5, 0.5, 0.5), 100, [`/app/Miles Madness.rar`], 0.15, "download"),
            new Billboard(world, scene, camera, new Vector3(100, 0, 40), "tokopedia integration", new Vector3(0.5, 0.5, 0.5), 100, [`https://www.tokopedia.com/hartono-m`, `https://www.tokopedia.com/kasri-motor`, `https://shopee.co.id/shop/151664583/`], 0.15, "open"),
        ];

    }
    public async init() {
        for (let i = 0; i < this.keys.length; i++) {
            const key = this.keys[i];
            await key.init();
            // key.body.quaternion.copy(key.mesh.quaternion)
        }
        this.initialized = true;

    }

    update(deltatime: number, characterBody: CANNON.Body, intersects: THREE.Intersection<THREE.Object3D<THREE.Event>>[]) {
        this.keys.forEach(key => {
            key.update(deltatime, characterBody, intersects);
        })
    }
}