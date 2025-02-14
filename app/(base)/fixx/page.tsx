import Loading from "@/app/loading";
import { CoActiveTemplate } from "@/components/templates/co-active";
import { Suspense } from "react";

export default function page() {
  return (
    <Suspense fallback={<Loading />}>
      <CoActiveTemplate />
    </Suspense>
  );
}
