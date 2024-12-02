"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { VideoControls } from "@/components/video-controls";
import { VideoEffects } from "@/components/video-effects";
import { Card } from "@/components/ui/card";
import { Upload, Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

export function VideoEditor() {
  const [videoSrc, setVideoSrc] = useState<string>("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [brightness, setBrightness] = useState(100);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="space-y-4">
          {!videoSrc && (
            <div className="border-2 border-dashed rounded-lg p-8 text-center">
              <Input
                type="file"
                accept="video/*"
                onChange={handleFileChange}
                className="hidden"
                id="video-upload"
              />
              <label
                htmlFor="video-upload"
                className="flex flex-col items-center cursor-pointer"
              >
                <Upload className="h-12 w-12 mb-2 text-muted-foreground" />
                <p className="text-lg font-medium">Upload Video</p>
                <p className="text-sm text-muted-foreground">
                  Drag and drop or click to select
                </p>
              </label>
            </div>
          )}

          {videoSrc && (
            <div className="space-y-4">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                <video
                  ref={videoRef}
                  src={videoSrc}
                  className={cn("w-full h-full", `brightness-${brightness}`)}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={togglePlay}
                    className="rounded-full"
                  >
                    {isPlaying ? (
                      <Pause className="h-4 w-4" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <VideoControls
                currentTime={currentTime}
                duration={duration}
                onSeek={(time) => {
                  if (videoRef.current) {
                    videoRef.current.currentTime = time;
                  }
                }}
              />

              <VideoEffects
                brightness={brightness}
                onBrightnessChange={setBrightness}
              />
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}