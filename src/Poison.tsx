import React from "react";

interface PoisonProps {
  title?: string;
}

const Poison: React.FC<PoisonProps> = () => {
  return (
    <div className="min-h-screen bg-[#202124] text-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-2xl font-light">Poison</h1>
        </div>
      </div>
    </div>
  );
};

export default Poison;
