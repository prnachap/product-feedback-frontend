import React, { useEffect } from "react";

const Success = () => {
  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 500);
  }, []);
  return <div>Logged in Successfull</div>;
};

export default Success;
