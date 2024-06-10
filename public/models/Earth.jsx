/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 Earth.glb 
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useControls } from "leva";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function EarthModel(props) {
  const group = useRef();
  useGSAP(() => {
    gsap.to(group.current.scale, {
      x: 6,
      y: 6,
      z: 6,
      duration: 0.001,
      scrollTrigger: {
        trigger: ".food-is-culture",
        start: "top bottom",
        toggleActions: "play none none reverse",
      },
    });
    gsap.to(group.current.position, {
      x: -2.3,
      scrollTrigger: {
        trigger: ".cuisines-of-the-world",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
    gsap.fromTo(
      group.current.scale,
      {
        x: 6,
        y: 6,
        z: 6,
      },
      {
        x: 8.3,
        y: 8.3,
        z: 8.3,
        scrollTrigger: {
          trigger: ".cuisines-of-the-world",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        immediateRender: false,
      }
    );
    gsap.fromTo(
      group.current.position,
      {
        x: -2.3,
      },
      {
        x: 2.2,
        y: 0.3,
        scrollTrigger: {
          trigger: ".cuisines-of-india",
          start: "top 80%",
          end: "bottom top",
          scrub: 1,
        },
        immediateRender: false,
      }
    );
    gsap.fromTo(
      group.current.scale,
      {
        x: 8.3,
        y: 8.3,
        z: 8.3,
      },
      {
        x: 17.5,
        y: 17.5,
        z: 17.5,
        scrollTrigger: {
          trigger: ".cuisines-of-india",
          start: "top 80%",
          end: "bottom top",
          scrub: 1,
        },
        immediateRender: false,
      }
    );
    gsap.to(group.current.rotation, {
      y: -0.6,
      scrollTrigger: {
        trigger: ".cuisines-of-india",
        start: "top 80%",
        end: "bottom top",
        scrub: 1,
      },
    });
    gsap.fromTo(
      group.current.position,
      {
        x: 2.2,
        y: 0.3,
      },
      {
        x: 2.2,
        y: 0.69,
        scrollTrigger: {
          trigger: ".cuisines-of-tn",
          start: "top 80%",
          end: "bottom top",
          scrub: 1,
        },
        immediateRender: false,
      }
    );
    gsap.fromTo(
      group.current.scale,
      {
        x: 17.5,
        y: 17.5,
        z: 17.5,
      },
      {
        x: 28,
        y: 28,
        z: 28,
        scrollTrigger: {
          trigger: ".cuisines-of-tn",
          start: "top 80%",
          end: "bottom top",
          scrub: 1,
        },
        immediateRender: false,
      }
    );
    gsap.fromTo(
      group.current.rotation,
      {
        y: -0.6,
      },
      {
        y: -0.63,
        x: -0.25,
        scrollTrigger: {
          trigger: ".cuisines-of-tn",
          start: "top 80%",
          end: "bottom top",
          scrub: 1,
        },
        immediateRender: false,
      }
    );
  });
  const { nodes, materials, animations } = useGLTF("/models/Earth.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null} position={[3, 0, 0]} scale={0}>
      <ambientLight />
      <group name="Scene">
        <mesh
          name="wiree002"
          geometry={nodes.wiree002.geometry}
          material={materials["instances grid.001"]}
          scale={0.305}
        >
          <mesh
            name="american"
            geometry={nodes.american.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="andra"
            geometry={nodes.andra.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="australian"
            geometry={nodes.australian.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="banglaa"
            geometry={nodes.banglaa.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="british"
            geometry={nodes.british.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="central_africa"
            geometry={nodes.central_africa.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="central_asia"
            geometry={nodes.central_asia.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="central_euro"
            geometry={nodes.central_euro.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="chinese"
            geometry={nodes.chinese.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="east_euro"
            geometry={nodes.east_euro.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="france"
            geometry={nodes.france.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="greek"
            geometry={nodes.greek.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="irania"
            geometry={nodes.irania.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="irish"
            geometry={nodes.irish.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Italian"
            geometry={nodes.Italian.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="japan"
            geometry={nodes.japan.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="karnataka"
            geometry={nodes.karnataka.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="kerala"
            geometry={nodes.kerala.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="korean"
            geometry={nodes.korean.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="mexican_and_carribian"
            geometry={nodes.mexican_and_carribian.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="middle_east"
            geometry={nodes.middle_east.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="nepal"
            geometry={nodes.nepal.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="northern_africa"
            geometry={nodes.northern_africa.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="pakistan"
            geometry={nodes.pakistan.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="papua"
            geometry={nodes.papua.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane345"
            geometry={nodes.Plane345.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane346"
            geometry={nodes.Plane346.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane347"
            geometry={nodes.Plane347.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane348"
            geometry={nodes.Plane348.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane349"
            geometry={nodes.Plane349.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane350"
            geometry={nodes.Plane350.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane351"
            geometry={nodes.Plane351.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane352"
            geometry={nodes.Plane352.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane353"
            geometry={nodes.Plane353.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane354"
            geometry={nodes.Plane354.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane355"
            geometry={nodes.Plane355.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane356"
            geometry={nodes.Plane356.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane357"
            geometry={nodes.Plane357.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane358"
            geometry={nodes.Plane358.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane359"
            geometry={nodes.Plane359.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane360"
            geometry={nodes.Plane360.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane361"
            geometry={nodes.Plane361.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane362"
            geometry={nodes.Plane362.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane363"
            geometry={nodes.Plane363.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane364"
            geometry={nodes.Plane364.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane365"
            geometry={nodes.Plane365.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane366"
            geometry={nodes.Plane366.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane367"
            geometry={nodes.Plane367.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane368"
            geometry={nodes.Plane368.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane369"
            geometry={nodes.Plane369.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane370"
            geometry={nodes.Plane370.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane371"
            geometry={nodes.Plane371.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane372"
            geometry={nodes.Plane372.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane373"
            geometry={nodes.Plane373.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane374"
            geometry={nodes.Plane374.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane375"
            geometry={nodes.Plane375.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane376"
            geometry={nodes.Plane376.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane377"
            geometry={nodes.Plane377.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane378"
            geometry={nodes.Plane378.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane379"
            geometry={nodes.Plane379.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane380"
            geometry={nodes.Plane380.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane382"
            geometry={nodes.Plane382.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane383"
            geometry={nodes.Plane383.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane384"
            geometry={nodes.Plane384.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane385"
            geometry={nodes.Plane385.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane386"
            geometry={nodes.Plane386.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane387"
            geometry={nodes.Plane387.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane388"
            geometry={nodes.Plane388.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane389"
            geometry={nodes.Plane389.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane391"
            geometry={nodes.Plane391.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane392"
            geometry={nodes.Plane392.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane393"
            geometry={nodes.Plane393.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane394"
            geometry={nodes.Plane394.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane395"
            geometry={nodes.Plane395.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane396"
            geometry={nodes.Plane396.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane397"
            geometry={nodes.Plane397.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane398"
            geometry={nodes.Plane398.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane401"
            geometry={nodes.Plane401.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane402"
            geometry={nodes.Plane402.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane403"
            geometry={nodes.Plane403.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane404"
            geometry={nodes.Plane404.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane405"
            geometry={nodes.Plane405.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane406"
            geometry={nodes.Plane406.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane407"
            geometry={nodes.Plane407.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane408"
            geometry={nodes.Plane408.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane412"
            geometry={nodes.Plane412.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane413"
            geometry={nodes.Plane413.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane416"
            geometry={nodes.Plane416.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane440"
            geometry={nodes.Plane440.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane447"
            geometry={nodes.Plane447.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane454"
            geometry={nodes.Plane454.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane455"
            geometry={nodes.Plane455.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane456"
            geometry={nodes.Plane456.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane457"
            geometry={nodes.Plane457.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="east_africa"
            geometry={nodes.east_africa.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane464"
            geometry={nodes.Plane464.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane474"
            geometry={nodes.Plane474.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="Plane494"
            geometry={nodes.Plane494.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="portugese"
            geometry={nodes.portugese.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="rajastan"
            geometry={nodes.rajastan.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="south_africa"
            geometry={nodes.south_africa.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="south_american"
            geometry={nodes.south_american.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="south_east_asia"
            geometry={nodes.south_east_asia.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="spanish"
            geometry={nodes.spanish.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="srilanka"
            geometry={nodes.srilanka.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="turkish"
            geometry={nodes.turkish.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
          <mesh
            name="west_african"
            geometry={nodes.west_african.geometry}
            material={materials["material.001"]}
            position={[-0.015, 0.051, 1.077]}
            scale={-3.412}
          />
        </mesh>
        <mesh
          name="wiree003"
          geometry={nodes.wiree003.geometry}
          material={materials["instances grid.001"]}
          scale={0.305}
        />
        <mesh name="wiree004" geometry={nodes.wiree004.geometry} scale={0.299}>
          <meshStandardMaterial color={0x000000} transparent opacity={0.3} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/Earth.glb");