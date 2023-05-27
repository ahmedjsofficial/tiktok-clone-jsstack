import ReactLoading from "react-loading";

export const LoadingState = () => {
  return (
    <div className="flex items-center justify-center">
      <ReactLoading type="bubbles" height={25} width={35} color="#f23023" />
    </div>
  );
};

export const ErrorState = () => {
  return (
    <div className="text-lg flex items-center justify-center">
      Oops, an error occured
    </div>
  );
};
