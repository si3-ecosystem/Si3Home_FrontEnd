import { CoActiveTemplate } from "@/components/templates/co-active";
import { Suspense } from "react";
import Loading from "../loading";

export default function page() {
  return (
    <Suspense fallback={<Loading />}>
      <CoActiveTemplate />
    </Suspense>
  );
}
