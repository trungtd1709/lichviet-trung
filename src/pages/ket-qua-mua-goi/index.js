import MetaHead from "@/components/MetaHead";
import ModalAfterPayment from "@/components/Modal/ModalAfterPayment";
import { onepayResult } from "@/const/const";
import _ from "lodash";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ChonNgayTot({}) {
  const router = useRouter();

  const [isRouterReady, setIsRouterReady] = useState(false);
  const [queryParams, setQueryParams] = useState({});

  useEffect(() => {
    if (router.isReady) {
      // if (_.isEmpty(router.query)) {
      //   router.push("/");
      // }
      setQueryParams(router.query);
      setIsRouterReady(true);
    }
  }, [router.isReady, router.query]);

  return (
    <>
      <MetaHead />
      {isRouterReady && (
        <div className="ket-qua-mua-goi-container ">
          <ModalAfterPayment show={true} queryParams={queryParams} />
        </div>
      )}
    </>
  );
}
