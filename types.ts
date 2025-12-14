import * as THREE from 'three';

export enum TreeState {
  SCATTERED = 'SCATTERED',
  TREE_SHAPE = 'TREE_SHAPE'
}

export interface ParticleData {
  // The target position in the Christmas tree shape
  treePosition: THREE.Vector3;
  treeRotation: THREE.Euler;
  
  // The target position in the scattered/chaos state
  scatterPosition: THREE.Vector3;
  scatterRotation: THREE.Euler;

  // Visual properties
  scale: number;
  color: THREE.Color;
  type: 'NEEDLE' | 'ORNAMENT' | 'STAR';
}
