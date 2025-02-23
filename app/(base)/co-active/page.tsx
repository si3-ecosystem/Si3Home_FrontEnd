import { CoActiveTemplate } from "@/components/template/co-active";
import { Suspense } from "react";
import Loading from "../../loading";

export default function page() {
  return (
    <Suspense fallback={<Loading />}>
      <CoActiveTemplate />
    </Suspense>
  );
}
