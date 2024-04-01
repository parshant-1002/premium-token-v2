import React from 'react';
import './loader.scss';
import { useSelector } from 'react-redux';

function Loader() {
  const isLoading = useSelector((state) => state?.loader?.isLoading);

  if (!isLoading) {
    return null;
  }
  return (
    <div className="loaderModal position-fixed">
      <div className="loader" />
    </div>
  );
}

export default Loader;
