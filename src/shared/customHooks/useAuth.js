const { AuthContext } = require("@/context/authContext");
const { isEmpty } = require("lodash");
const { useRouter } = require("next/router");
const { useContext, useEffect } = require("react");

export const useAuth = () => {
  const { userData } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (isEmpty(userData)) {
      router.push("/login");
    }
  }, []);
};
