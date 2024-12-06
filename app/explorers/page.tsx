import { ExplorerPageTemplate } from "@/components/templates/explorers";
import { Suspense } from "react";
import Loading from "../loading";

export default function page() {
  return (
    <Suspense fallback={<Loading />}>
      <ExplorerPageTemplate />
    </Suspense>
  );
}
