import Spinner from "./Spinner";

export default function Loading() {
  return (
    <div className="relative flex h-dvh w-dvw items-center justify-center bg-black bg-opacity-20">
      <Spinner />
    </div>
  );
}
