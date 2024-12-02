"use client";

import { VideoEditor } from "@/components/video-editor";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <VideoEditor />
      </div>
    </main>
  );
}