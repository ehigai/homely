"use client";

import { useEffect, useState } from "react";
import { Progress as ProgressUi } from "./ui/progress";

export function Progress() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(40), 1000);
    return () => clearTimeout(timer);
  }, []);

  return <ProgressUi value={progress} className="w-[100%] rounded-full" />;
}
