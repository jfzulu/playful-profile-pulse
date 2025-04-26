
import { ArrowDown } from "lucide-react";

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <ArrowDown className="w-8 h-8 text-primary opacity-75" />
    </div>
  );
};

export default ScrollIndicator;
