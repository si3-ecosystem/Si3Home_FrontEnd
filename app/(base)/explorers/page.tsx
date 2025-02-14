import Loading from "@/app/loading";
import { ExplorerPageTemplate } from "@/components/templates/explorers";
import { Suspense } from "react";

export default function page() {
  return (
    <Suspense fallback={<Loading />}>
      <ExplorerPageTemplate />
    </Suspense>
  );
}
