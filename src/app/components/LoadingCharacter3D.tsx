
'use client';
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

interface LoadingCharacter3DProps {
  isLoading: boolean;
}

function BinaryRain() {
  const groupRef = useRef<THREE.Group>(null);
  
 
  const columns = useMemo(() => {
    const cols = [];
    const columnCount = Math.floor(window.innerWidth / 20); 
    
    for (let i = 0; i < columnCount; i++) {
      cols.push({
        id: i,
        characters: Array.from({ length: 30 }, () => Math.random() > 0.5 ? '1' : '0'),
        speed: 20 + Math.random() * 30, 
        delay: Math.random() * 2000 
      });
    }
    return cols;
  }, []);
  
  return null; 
}

function HTMLBinaryRain() {
  const [columns, setColumns] = React.useState<any[]>([]);
  
  React.useEffect(() => {
    const columnCount = Math.floor(window.innerWidth / 20);
    const newColumns = Array.from({ length: columnCount }, (_, i) => ({
      id: i,
      characters: Array.from({ length: 50 }, () => Math.random() > 0.5 ? '1' : '0'),
      position: Math.random() * -100,
      speed: 0.5 + Math.random() * 1,
      opacity: 0.3 + Math.random() * 0.7
    }));
    
    setColumns(newColumns);
    
    const interval = setInterval(() => {
      setColumns(prev => prev.map(col => ({
        ...col,
        position: col.position >= 100 ? -100 : col.position + col.speed,
        characters: col.position >= 100 
          ? Array.from({ length: 50 }, () => Math.random() > 0.5 ? '1' : '0')
          : col.characters,
        opacity: 0.2 + Math.random() * 0.6
      })));
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none'
      }}
    >
      {columns.map((col, index) => (
        <div
          key={col.id}
          style={{
            position: 'absolute',
            left: `${(index / columns.length) * 100}%`,
            top: `${col.position}%`,
            color: 'white',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '14px',
            lineHeight: '16px',
            opacity: col.opacity,
            textShadow: '0 0 5px rgba(255,255,255,0.5)',
            whiteSpace: 'pre'
          }}
        >
          {col.characters.join('\n')}
        </div>
      ))}
    </div>
  );
}

export default function LoadingCharacter3D({ isLoading }: LoadingCharacter3DProps) {
  if (!isLoading) return null;
  
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'linear-gradient(135deg, #FFE4E1 0%, #E6E6FA 25%, #F0F8FF 50%, #FFF0F5 75%, #F5FFFA 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        userSelect: 'none',
        overflow: 'hidden',
      }}
    >
      {/* lluvia de código binario  */}
      <HTMLBinaryRain />
      
      {/* canvas*/}
      
      {/* texto */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          background: 'rgba(255, 255, 255, 0.9)',
          padding: '20px 40px',
          borderRadius: '12px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div
          style={{
            color: '#333333',
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: '600',
            fontSize: '1.6rem',
            textAlign: 'center',
            userSelect: 'none',
          }}
        >
          Inicializando portfolio...
        </div>
        <div
          style={{
            color: '#666666',
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: '400',
            fontSize: '0.9rem',
            textAlign: 'center',
            marginTop: '8px',
            userSelect: 'none',
          }}
        >
          Loading system modules...
        </div>
      </div>
    </div>
  );
}