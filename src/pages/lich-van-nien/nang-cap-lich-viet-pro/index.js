import MetaHead from "@/components/MetaHead";
import { LichVietProServices } from "@/components/NangCapLichVietPro/LichVietProServices";
import { NangCapProContact } from "@/components/NangCapLichVietPro/NangCapProContact";
import { imgSrc } from "@/const/AppResource";
import useAuth from "@/shared/customHooks/useAuth";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";

export default function Home({}) {
  const router = useRouter();

  const { user } = useAuth();

  return (
    <>
      <MetaHead />
      <Container className="mt-4">
        <img src={imgSrc.muaLichVietProBanner} className="w-100" />
        <LichVietProServices />
        <NangCapProContact />
      </Container>
    </>
  );
}
