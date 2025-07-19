import { Loader2 } from "lucide-react";
import React from "react";

function Loading() {
  return (
    <div className="flex gap-3 min-h-80 mt-10 justify-center items-center bg-gray-100 text-blue-600">
      <Loader2 className="w-5 h-5 animate-spin" />
      <span>Product is loading...</span>
    </div>
  );
}

export default Loading;
