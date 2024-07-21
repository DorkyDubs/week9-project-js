"use client";

import React from "react";
import * as Progress from "@radix-ui/react-progress";
import "./progress.css";

const ProgressBar = (percentage) => {
  const [progress, setProgress] = React.useState(100);

  React.useEffect((percentage) => {
    const timer = setTimeout(() => setProgress(100), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress.Root className="ProgressRoot" value={progress}>
      <Progress.Indicator
        className="ProgressIndicator"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  );
};

export default ProgressBar;
