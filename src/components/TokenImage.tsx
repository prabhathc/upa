import React from 'react';

export function TokenImage() {
  return (
    <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden bg-upa-brown/20 p-2 animate-float">
      <img 
        src="https://raw.githubusercontent.com/stackblitz/stackblitz-codeflow/main/examples/vite-react-typescript-starter/src/assets/upa-token.png"
        alt="UPA Token"
        className="w-full h-full object-contain pixelated"
      />
    </div>
  );
}