import Loading from "@/app/loading";
import { FixxTemplate } from "@/components/template/fixx";
import ContentProvider from "@/utils/ContentProvider";
import { Suspense } from "react";

export default async function page() {
  return (
    <Suspense fallback={<Loading />}>
      <FixxTemplate />
    </Suspense>
  );
}
