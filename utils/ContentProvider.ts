import { DiversityTrackerFormData, NewMemberData } from "@/lib/types/interfaces";
import { client } from "@/utils/client";
import groq from "groq";



class ContentProviderService{
    async createMember(newMember:NewMemberData){
        try {
            const data = await client.create({
                _type: "members",
                ...newMember,
            })
            return {
                data,
                error:null,
                message:"Member Created successfully"
            }
        } catch (error) {
            if(error instanceof Error){
                return {
                    data:null,
                    error,
                    message:error.message
                }
            }
            return {
                data:null,
                error,
                message:(error as Error).message,
            }
        }
    }
    async addDiversityTracker(diversityTrackerData:DiversityTrackerFormData){
        try {
            const data = await client.create({
                _type: "diversity-tracker",
                ...diversityTrackerData,
            })
            return {
                data,
                error:null,
                message:"Form submitted successfully"
            }
        } catch (error) {
            if(error instanceof Error){
                return {
                    data:null,
                    error,
                    message:error.message
                }
            }
            return {
                data:null,
                error,
                message:(error as Error).message,
            }
        }
    }
    async getContent(){
        const [
            hero,
            sheHerLive,
            granting,
            sherCoActive,
            educationalProgramming,
            memberSpotlight,
            ecosystemSpotlight,
            brand,
            mission,
            onboard,
            pricing,
            testimonials,
            register,
            sherExplorer,
            partners,
            partnerTestimonials,
            joinBuildersTab,
            joinLeadersTab,
            joinExplorersTab,
          ] = await Promise.all([
            this.getBanner(),
            this.getSherLive(),
            this.getGranting(),
            this.getSherCoActive(),
            this.getEducationalProgramming(),
            this.getMemberSpotlight(),
            this.getEcosystemSpotlight(),
            this.getBrand(),
            this.getMission(),
            this.getOnboard(),
            this.getPricing(),
            this.getTestimonials(),
            this.getRegister(),
            this.getSherExplorer(),
            this.getPartners(),
            this.getPartnerTestimonials(),
            this.getJoinTab("joinBuilders"),
            this.getJoinTab("joinLeaders"),
            this.getJoinTab("joinExplorers"),
          ]);

          return {
            hero,
            sheHerLive,
            granting,
            sherCoActive,
            educationalProgramming,
            memberSpotlight,
            ecosystemSpotlight,
            brand,
            mission,
            onboard,
            pricing,
            testimonials,
            register,
            sherExplorer,
            partners,
            partnerTestimonials,
            joinBuildersTab,
            joinExplorersTab,
            joinLeadersTab,
        }
    }

    async getJoinTabs(){
        const joinBuildersTab = await this.getJoinTab("joinBuilders")
        const joinLeadersTab = await this.getJoinTab("joinLeaders")
        const joinExplorersTab  = await this.getJoinTab("joinExplorers")

        return {joinBuildersTab,joinExplorersTab,joinLeadersTab}

    }

    async getPartnerTabContent(){
        const header = await this.getPartnerTabHeader();
        const footer = await this.getPartnerTabFooter();
        const programs = await this.getPartnerPrograms()

        return {programs,header,footer}
    }

    private async getPartnerTabHeader(){
        const query = groq`*[_type == 'partnersTabHeader'][0]`;
        const data = await client.fetch(query);

        return data || {};
    }
    private async getPartnerTabFooter(){
        const query = groq`*[_type == 'partnersTabFooter']`;
        const data = await client.fetch(query);

        return data || {};
    }

    async getExplorerPageData(){
        const explorerVideos = await this.getListData("explorer_videos")
        const explorerVideoCategories = await this.getListData("explorer_videos_categories")

        return {
            explorerVideos,
            explorerVideoCategories
        }
    }

    async getProgramPageData(){
        const events = await this.getListData("program_events")
        const post = await this.getListData("program_posts")
        const replays = await this.getListData("program_replays")

        return {events, post, replays}
    }
    async getCoActivePageData(){
        const events = await this.getListData("events")
        const post = await this.getListData("posts")
        const replays = await this.getListData("educational_replays")

        return {events, post, replays}
    }

    private async getListData<T>(documentId:string){
       try {
        const query = groq`*[_type == '${documentId}']`;
        const data:T[] = await client.fetch(query);

        return data || [] as T[];
       } catch (error) {
        return [] as T[];
       }
    }
    private async getJoinTab(tab:string="joinBuilders"){
        const query = groq`*[_type == '${tab}'][0]`;
        const data = await client.fetch(query);

        return data || {};
    }
    private async getPartnerPrograms(){
        const query = groq`*[_type == 'partner_programs']`;
        const data = await client.fetch(query);

        return data || {};
    }

    private async getBanner() {
        const query = groq`*[_type == 'hero'][0]`;
        const data = await client.fetch(query);

        return data || {};
    }
    private async getRegister() {
        const query = groq`*[_type == 'register'][0]`;
        const data = await client.fetch(query);
        return data || {};
    }

    private async getSherLive() {
        const query = groq`*[_type == 'about'][0]`;
        const data = await client.fetch(query);
        return data || {};
    }
    private async getGranting() {
        const query = groq`*[_type == 'grantingAccess'][0] {..., "builders":builders[]->{...}}`;
        const data = await client.fetch(query);

        return data || {};
    }
    private async getSherCoActive() {
        const query = groq`*[_type == 'sihercoactive'][0]`;
        const data = await client.fetch(query);
        return data || {};
    }
    private async getSherExplorer() {
        const query = groq`*[_type == 'sihercoexplorer'][0]`;
        const data = await client.fetch(query);
        return data || {};
    }
    private async getPartners() {
        const query = groq`*[_type == 'partners']`;
        const data = await client.fetch(query);
        return data || {};
    }
    private async  getEducationalProgramming() {
        const query = groq`*[_type == 'educationalProgramming'][0] {...,"Events":Events[]->{...,"presenters":presenters[]->{...}}}`;
        const data = await client.fetch(query);
        return data || {};
    }
    private async  getMemberSpotlight() {
        const query = groq`*[_type == 'memberSpotlight'][0] {...,"teammembers":teammembers[]->{...}}`;
        const data = await client.fetch(query);
        return data || {};
    }
    private async  getEcosystemSpotlight() {
        const query = groq`*[_type == 'ecosystemSpotlight'][0] {...,"spotlightList":spotlightList[]->{...,"teamMember":teamMember->{...}}}`;
        const data = await client.fetch(query);
        return data || {};
    }
    private async  getBrand() {
        const query = groq`*[_type == 'web3brand'][0]`;
        const data = await client.fetch(query);
        return data || {};
    }
    private async  getMission() {
        const query = groq`*[_type == 'ourMission'][0]`;
        const data = await client.fetch(query);
        return data || {};
    }
    private async getOnboard() {
        const query = groq`*[_type == 'onboard'][0]`;
        const data = await client.fetch(query);

        return data || {};
    }
    private async getPricing() {
        const query = groq`*[_type == 'pricing']`;
        const data = await client.fetch(query);
        return data;
    }
    private async  getTestimonials() {
        const query = groq`*[_type == 'testimonials']`;
        const data = await client.fetch(query);
        return data;
    }
    private async  getPartnerTestimonials() {
        const query = groq`*[_type == 'partnerTestimonials']`;
        const data = await client.fetch(query);
        return data;
    }
}

const ContentProvider = new ContentProviderService();

export default ContentProvider;