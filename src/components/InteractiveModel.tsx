import { useState } from 'react';
import {
  Box,
  CubeCamera,
  Environment,
  OrbitControls,
  Sphere,
  useEnvironment,
} from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import { ReactNode, useRef } from 'react';
import { Group, Mesh, MeshStandardMaterial } from 'three';

function Rotator({
  children,
  boxColors,
}: {
  children: ReactNode;
  boxColors: string[];
}) {
  const groupRef = useRef<Group>(null!);

  useFrame(() => {
    groupRef.current.children.forEach((child, index) => {
      if ((child as Mesh).isMesh) {
        const boxMaterial = (child as Mesh).material as MeshStandardMaterial;
        child.rotateX(0.02);
        child.rotateY(0.02);
        boxMaterial.color.set(boxColors[index]);
      }
    });
  });

  return <group ref={groupRef}>{children}</group>;
}

function ReflectiveSphere() {
  const tweakableProperties = useControls({
    roughness: { value: 0.1, min: 0, max: 1 },
    metalness: { value: 1, min: 0, max: 1 },
  });

  return (
    <Sphere args={[1, 256, 256]}>
      <meshStandardMaterial {...tweakableProperties} />
    </Sphere>
  );
}

function ThreeScene({ boxColors }: { boxColors: string[] }) {
  const envMap = useEnvironment({ path: '/modern buildings' });

  return (
    <>
      <ambientLight />
      <pointLight position={[5, 5, 5]} />
      <pointLight position={[-3, -3, 2]} />
      <OrbitControls />

      <Environment map={envMap} background />

      <CubeCamera resolution={256} frames={Infinity}>
        {(texture) => (
          <>
            <Environment map={texture} />
            <ReflectiveSphere />
          </>
        )}
      </CubeCamera>

      <Rotator boxColors={boxColors}>
        <Box position={[0, 0, 5]}>
          <meshStandardMaterial color={boxColors[0]} />
        </Box>

        <Box position={[-1, 3, 2]}>
          <meshStandardMaterial color={boxColors[1]} />
        </Box>
      </Rotator>
    </>
  );
}

const generateRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export default function InteractiveModel() {
  const [boxColors, setBoxColors] = useState(['red', 'purple']);

  const handleCubeCameraClick = () => {
    const newColors = [generateRandomColor(), generateRandomColor()];
    setBoxColors(newColors);
  };

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas onClick={handleCubeCameraClick}>
        <ThreeScene boxColors={boxColors} />
      </Canvas>
    </div>
  );
}
