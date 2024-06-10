/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 clcok.glb 
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function ClockModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/clock.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group name="Obj_Clock">
              <group
                name="Obj_Hand"
                position={[0, -0.022, 0.029]}
                rotation={[0, 0.314, 0]}
              >
                <mesh
                  name="Obj_Hand_0"
                  geometry={nodes.Obj_Hand_0.geometry}
                  material={materials.WhiteAndBlack}
                />
              </group>
              <group
                name="Obj_Hand001"
                position={[0, -0.022, 0.029]}
                rotation={[0, 0.026, 0]}
              >
                <mesh
                  name="Obj_Hand001_0"
                  geometry={nodes.Obj_Hand001_0.geometry}
                  material={materials.WhiteAndBlack}
                />
              </group>
              <mesh
                name="Obj_Clock_0"
                geometry={nodes.Obj_Clock_0.geometry}
                material={materials.WhiteAndBlack}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/clcok.glb");
