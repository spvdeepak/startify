import { CompassIcon } from "lucide-react";

const Loader = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <CompassIcon className="size-16 animate-spin text-blue-600"/>
      <p className="text-xl mt-2 text-blue-600">
        Loading...
      </p>
    </div>
  );
};

export default Loader;
