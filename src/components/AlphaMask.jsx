import {
  MeshTransmissionMaterial,
  OrbitControls,
  shaderMaterial,
} from "@react-three/drei";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import glsl from "glslify";
import { Suspense, useRef } from "react";
import * as THREE from "three";

const NewShaderMaterial = shaderMaterial(
  {
    uColor: new THREE.Color(0, 0.2, 0.4),
    uTime: 0,
  },
  // Vertex Shader
  glsl`
  varying vec3 vPos;
  varying vec2 vUv;
  varying vec3 vNormal;
  void main() {
    vPos = position;
    vUv = uv;
    vNormal = normal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `,
  // Fragment Shader
  glsl`
varying vec3 vPos;
varying vec2 vUv;
varying vec3 vNormal;
void main() {
  // Calculate alpha based on the x position
 // Adjust range as necessary
  vec3 viewDir = normalize(cameraPosition - vPos);
  float fres = dot(viewDir, vNormal);

  gl_FragColor = vec4(1.0,1.0,1.0,pow(fres,10.0));
}
`
);
