import Spinner from "./Spinner";

export default function CommonLoading() {
  return (
    <div className="flex h-full min-h-48 w-full items-center justify-center">
      <Spinner />
    </div>
  );
}
