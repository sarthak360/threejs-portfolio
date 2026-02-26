import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Globe = () => {
  const globeRef = useRef();

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002;
      globeRef.current.rotation.x += 0.001;
    }
  });

  return (
    <group ref={globeRef}>
      <mesh>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshStandardMaterial color="#0f1b29" roughness={0.7} />
      </mesh>
      
      <mesh>
        <sphereGeometry args={[2.55, 24, 24]} />
        <meshBasicMaterial color="#2ab8ff" wireframe transparent opacity={0.3} />
      </mesh>
    </group>
  );
};

export default Globe;