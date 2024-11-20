import React, { useState } from "react";

type LoaderProps = {
  isVisible: boolean;
};

const Loader: React.FC<LoaderProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-indigo-600 border-t-transparent"></div>
    </div>
  );
};

export const useLoadingSpinner = (): [JSX.Element, () => void, () => void] => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoader = () => setIsLoading(true);
  const hideLoader = () => setIsLoading(false);

  return [<Loader isVisible={isLoading} />, showLoader, hideLoader];
};
