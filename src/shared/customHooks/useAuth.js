import { isEmpty } from "lodash";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    let userLocal = localStorage.getItem("user");

    if (isEmpty(userLocal)) {
      router.push("/login");
    }
  }, [router]);
};
