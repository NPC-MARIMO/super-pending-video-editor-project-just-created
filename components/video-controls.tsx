"use client";

import { Slider } from "@/components/ui/slider";
import { formatTime } from "@/lib/utils";

interface VideoControlsProps {
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
}

export function VideoControls({
  currentTime,
  duration,
  onSeek,
}: VideoControlsProps) {
  return (
    <div className="space-y-2">
      <Slider
        value={[currentTime]}
        max={duration}
        step={0.1}
        onValueChange={(value) => onSeek(value[0])}
      />
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
}