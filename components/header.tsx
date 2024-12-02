import { Video } from "lucide-react";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-2">
          <Video className="h-6 w-6" />
          <h1 className="text-2xl font-bold">Video Editor</h1>
        </div>
      </div>
    </header>
  );
}