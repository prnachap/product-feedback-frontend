import React from "react";

type LoginProps = {
  handleGoogleLogin: () => void;
};
const Login: React.FC<LoginProps> = ({ handleGoogleLogin }) => {
  return (
    <div>
      <button onClick={handleGoogleLogin}>Login with google</button>
    </div>
  );
};

export default Login;
