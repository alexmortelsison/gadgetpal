import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function YoutubeDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          className="rounded-sm bg-white text-accent-foreground  hover:bg-white cursor-pointer"
        >
          Watch Video
        </Button>
      </DialogTrigger>
      <DialogTitle></DialogTitle>
      <DialogContent className="max-w-4xl w-full">
        {" "}
        <video
          src="/mb.mp4"
          autoPlay={true}
          loop
          className="w-full h-auto max-w-[100vh] rounded-lg"
        />
      </DialogContent>
    </Dialog>
  );
}
