import ContentProvider from "@/utils/ContentProvider";
import ClientPage from "./ClientPage";

export default async function Page(){

   const onboardingPathways = await ContentProvider.getOnboardingPathways()

    return (
        <main >
           <ClientPage onboardingPathways={onboardingPathways}/>
        </main>
    )
}