import { client } from "@/utils/client";
import groq from "groq";

interface ContentData{
    [key:string]:any;
}

class ContentProviderService{
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
            partners
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
          }
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
}

const ContentProvider = new ContentProviderService();

export default ContentProvider;