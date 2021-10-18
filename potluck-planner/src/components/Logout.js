import React, { useEffect } from "react";
import { useHistory } from "react-router";

const Logout = () => {
  const { push } = useHistory();

  useEffect(() => {
    push("/");
  }, []);

  return <div></div>;
};

export default Logout;