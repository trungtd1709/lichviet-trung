import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { isEmpty } from "lodash";
import { getLoggedUserData } from "../utils";

const useAuth = () => {
  const router = useRouter();
  const [user, setUser] = useState({});

  useEffect(() => {
    const tempUser = getLoggedUserData();

    if (isEmpty(tempUser)) {
      router.push("/login");
    } else {
      setUser(tempUser);
    }
  }, [router]);

  return {
    user
  };
};

export default useAuth;
