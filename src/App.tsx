import { cn } from "./lib/utils";
import Page from "./Page";

export default function GridBackgroundDemo() {
  return (
    <div className="relative flex min-h-screen w-full bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0", 
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      <div className="z-100 flex w-screen justify-center pt-10 lg:pt-20 overflow-x-hidden">
        <Page />
      </div>
    </div>
  );
}
