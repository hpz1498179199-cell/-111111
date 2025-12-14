import React, { useState, useCallback } from 'react';
import { Scene } from './components/Scene';
import { UI } from './components/UI';
import { TreeState } from './types';

const App: React.FC = () => {
  const [treeState, setTreeState] = useState<TreeState>(TreeState.TREE_SHAPE);

  const toggleState = useCallback(() => {
    setTreeState((prev) => 
      prev === TreeState.TREE_SHAPE ? TreeState.SCATTERED : TreeState.TREE_SHAPE
    );
  }, []);

  return (
    <div className="relative w-full h-full bg-arix-dark overflow-hidden selection:bg-arix-gold/30">
      <Scene treeState={treeState} />
      <UI currentState={treeState} onToggle={toggleState} />
      
      {/* Sound Trigger (Optional, placeholder for audio context) */}
      <div className="absolute bottom-4 left-4 text-white/10 text-[10px] font-mono pointer-events-none">
        RENDER: THREE.JS R3F • SHADERS: PBR
      </div>
    </div>
  );
};

export default App;
