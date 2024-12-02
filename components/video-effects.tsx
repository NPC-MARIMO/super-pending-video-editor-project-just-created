"use client";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Sun } from "lucide-react";

interface VideoEffectsProps {
  brightness: number;
  onBrightnessChange: (value: number) => void;
}

export function VideoEffects({
  brightness,
  onBrightnessChange,
}: VideoEffectsProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Sun className="h-4 w-4" />
          <Label>Brightness</Label>
        </div>
        <Slider
          value={[brightness]}
          min={0}
          max={200}
          step={1}
          onValueChange={(value) => onBrightnessChange(value[0])}
        />
      </div>
    </div>
  );
}