import Loading from "@/app/loading";
import { CoActiveTemplate } from "@/components/template/co-active";
import { Suspense } from "react";

export default function page() {
  return (
    <Suspense fallback={<Loading />}>
      <CoActiveTemplate />
    </Suspense>
  );
}
