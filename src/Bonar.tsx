import React from "react";
import { FileWarning, RefreshCw } from "lucide-react";

interface BonarProps {
  title?: string;
  domain?: string;
  errorCode?: string;
  errorMessage?: string;
  onReload?: () => void;
}

const Bonar: React.FC<BonarProps> = ({
  title = "This site can't be reached",
  domain = "www.bonar-autopartes.com",
  errorCode = "DNS_PROBE_POSSIBLE",
  errorMessage = "'s DNS address could not be found. Diagnosing the problem.",
  onReload = () => window.location.reload(),
}) => {
  return (
    <div className="min-h-screen bg-[#202124] text-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="flex items-center gap-4 mb-6">
          <FileWarning className="w-12 h-12 text-gray-400" />
          <h1 className="text-2xl font-light">{title}</h1>
        </div>

        <div className="text-[#9AA0A6] text-lg mb-6">
          <span className="font-medium text-gray-300">{domain}</span>
          {errorMessage}
        </div>

        <div className="text-[#9AA0A6] font-mono mb-8">{errorCode}</div>

        <button
          onClick={onReload}
          className="flex items-center gap-2 px-6 py-2 text-[#8AB4F8] hover:bg-[#313236] rounded-lg transition-colors duration-200"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Reload</span>
        </button>
      </div>
    </div>
  );
};

export default Bonar;
