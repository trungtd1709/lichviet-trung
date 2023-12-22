import ThanSoHocDetail from "@/components/ThanSoHocResult/components/ThanSoHocDetail";
import { getServerProps } from "@/shared/func";

const ThanSoHoc = (element) => {
  return <ThanSoHocDetail {...element} />;
};
export default ThanSoHoc;

export async function getServerSideProps(context) {
  return await getServerProps(context);
}

