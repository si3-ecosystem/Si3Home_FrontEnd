import {
  DiversityTrackerFormData,
  NewMemberData,
} from "@/lib/types/interfaces";
import { client } from "@/utils/client";
import groq from "groq";

class ContentProviderService {
  async createMember(newMember: NewMemberData) {
    try {
      const data = await client.create({
        _type: "members",
        ...newMember,
      });
      return {
        data,
        error: null,
        message: "Member Created successfully",
      };
    } catch (error) {
      if (error instanceof Error) {
        return {
          data: null,
          error,
          message: error.message,
        };
      }
      return {
        data: null,
        error,
        message: (error as Error).message,
      };
    }
  }
  async addDiversityTracker(diversityTrackerData: DiversityTrackerFormData) {
    try {
      const data = await client.create({
        _type: "diversity-tracker",
        ...diversityTrackerData,
      });
      return {
        data,
        error: null,
        message: "Form submitted successfully",
      };
    } catch (error) {
      if (error instanceof Error) {
        return {
          data: null,
          error,
          message: error.message,
        };
      }
      return {
        data: null,
        error,
        message: (error as Error).message,
      };
    }
  }
  async getContent() {
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
      community,
      pricing,
      testimonials,
      register,
      sherExplorer,
      sheherBuildingweb3,
      partners,
      partnerTestimonials,
      joinBuildersTab,
      joinLeadersTab,
      joinExplorersTab,
      sheHerFixx,
      sheHerCoActive,
      sheHerGrowthNetworkContent,
      explorersPageContent,
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
      this.getCommunityCollaborators(),
      this.getPricing(),
      this.getTestimonials(),
      this.getRegister(),
      this.getSherExplorer(),
      this.getSheherBuildingweb3(),
      this.getPartners(),
      this.getPartnerTestimonials(),
      this.getJoinTab("joinBuilders"),
      this.getJoinTab("joinLeaders"),
      this.getJoinTab("joinExplorers"),
      this.getSherHerFixx(),
      this.getSheHerCoActive(),
      this.getSheHerGrowthNetworkContent(),
      this.getExplorersPageDetails(),
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
      community,
      pricing,
      testimonials,
      register,
      sherExplorer,
      sheherBuildingweb3,
      partners,
      partnerTestimonials,
      joinBuildersTab,
      joinExplorersTab,
      joinLeadersTab,
      sheHerFixx,
      sheHerCoActive,
      sheHerGrowthNetworkContent,
      explorersPageContent,
    };
  }

  async getJoinTabs() {
    const joinBuildersTab = await this.getJoinTab("joinBuilders");
    const joinLeadersTab = await this.getJoinTab("joinLeaders");
    const joinExplorersTab = await this.getJoinTab("joinExplorers");

    return { joinBuildersTab, joinExplorersTab, joinLeadersTab };
  }

  async getPartnerTabContent() {
    const header = await this.getPartnerTabHeader();
    const footer = await this.getPartnerTabFooter();
    const programs = await this.getPartnerPrograms();

    return { programs, header, footer };
  }

  private async getPartnerTabHeader() {
    const query = groq`*[_type == 'partnersTabHeader'][0]`;
    const data = await client.fetch(query);

    return data || {};
  }
  private async getPartnerTabFooter() {
    const query = groq`*[_type == 'partnersTabFooter']`;
    const data = await client.fetch(query);

    return data || {};
  }

  async getOnboardingPathways() {
    const onboardingPathWays = await this.getListData("onboarding_pathways");
    return onboardingPathWays;
  }

  async getCommunityCollaborators() {
    const community = await this.geCommunityListData("cards");
    return community;
  }

  async getExplorerPageData() {
    const explorerVideos = await this.getListData("explorer_videos");
    const explorerVideoCategories = await this.getListData(
      "explorer_videos_categories"
    );

    return {
      explorerVideos,
      explorerVideoCategories,
    };
  }

  async getProgramPageData() {
    const events = await this.getListData("program_events");
    const post = await this.getListData("program_posts");
    const replays = await this.getListData("program_replays");

    return { events, post, replays };
  }
  async getCoActivePageData() {
    const events = await this.getListData("events");
    const post = await this.getListData("posts");
    const replays = await this.getListData("educational_replays");

    return { events, post, replays };
  }

  private async getExplorersPage(): Promise<any | null> {
    try {
      const query = groq`*[_type == "siHerExplorerspage"][0] {
        _id,
        title,
        description,
        "replays": replays[]->{
          _id,
          title,
          category,
          subcategory,
         ...
        },
        "all_posts": all_posts[]->{
          _id,
          title,
          ...
        }
      }`;
      const data = await client.fetch(query);
      return data || null;
    } catch (error) {
      console.error("Error fetching SI Her Explorers page:", error);
      return null;
    }
  }
  async getWeb3EducationContent(subcategory?: string): Promise<any[]> {
    try {
      const page = await this.getExplorersPage();
      if (!page || !page.replays) return [];

      let replays = page.replays.filter(
        (video: any) =>
          Array.isArray(video.category) &&
          video.category.includes("Web3 Education")
      );

      if (subcategory) {
        replays = replays.filter(
          (video: any) => video.subcategory === subcategory
        );
      }

      return replays;
    } catch (error) {
      console.error("Error fetching Web3 Education content:", error);
      return [];
    }
  }

  async getGrantFundingContent(): Promise<any[]> {
    try {
      const page = await this.getExplorersPage();
      if (!page || !page.replays) return [];

      const replays = page.replays.filter(
        (video: any) =>
          Array.isArray(video.category) &&
          video.category.includes("Grant Funding")
      );

      return replays;
    } catch (error) {
      console.error("Error fetching Grant Funding content:", error);
      return [];
    }
  }

  async getSheHerGrowthNetworkContent(): Promise<any[]> {
    try {
      const page = await this.getExplorersPage();
      if (!page || !page.replays) return [];

      const replays = page.replays.filter(
        (video: any) =>
          Array.isArray(video.category) &&
          video.category.includes("SI Her Growth Network")
      );

      return replays;
    } catch (error) {
      console.error("Error fetching SI Her Growth Network content:", error);
      return [];
    }
  }

  async getAllVideos(): Promise<any[]> {
    try {
      const page = await this.getExplorersPage();
      return page?.replays || [];
    } catch (error) {
      console.error("Error fetching all videos:", error);
      return [];
    }
  }

  async getAllPosts(): Promise<any[]> {
    try {
      const page = await this.getExplorersPage();
      return page?.all_posts || [];
    } catch (error) {
      console.error("Error fetching all posts:", error);
      return [];
    }
  }

  async getExplorersPageDetails(): Promise<{
    title: string;
    description: string;
  } | null> {
    try {
      const page = await this.getExplorersPage();
      if (!page) return null;
      return {
        title: page.title || "",
        description: page.description || "",
      };
    } catch (error) {
      console.error("Error fetching SI Her Explorers page details:", error);
      return null;
    }
  }

  async getSherHerFixx() {
    const query = groq`*[_type == 'sheHerFixx'][0] {
    ...,
   "upcoming_sessions":upcoming_sessions[]-> {...,"partners":partners[]-> {...}},
   "fixx_intelligence":fixx_intelligence[]-> {...,"partners":partners[]-> {...}},
   "program_replays":program_replays[]-> {...,"partners":partners[]-> {...}}
   
    }`;
    const data = await client.fetch(query);
    return data;
  }

  async getSheHerCoActive() {
    const query = groq`*[_type == 'sheHerCoActive'][0]  {
    ...,
      "upcoming_events":upcoming_events[]-> {...,"partners":partners[]-> {...}},
   "latest_posts":latest_posts[]-> {...,"partners":partners[]-> {...}},
   "educational_replays":educational_replays[]-> {...,"partners":partners[]-> {...}}
    }
    
    `;
    const data = await client.fetch(query);
    return data;
  }

  private async getListData<T>(documentId: string) {
    try {
      const query = groq`*[_type == '${documentId}']`;
      const data: T[] = await client.fetch(query);

      return data || ([] as T[]);
    } catch (error) {
      return [] as T[];
    }
  }
  private async geCommunityListData<T>(documentId: string) {
    try {
      const query = groq`*[_type == '${documentId}'] | order(order asc)`;
      const data: T[] = await client.fetch(query);

      return data || ([] as T[]);
    } catch (error) {
      return [] as T[];
    }
  }
  private async getJoinTab(tab: string = "joinBuilders") {
    const query = groq`*[_type == '${tab}'][0]`;
    const data = await client.fetch(query);

    return data || {};
  }
  private async getPartnerPrograms() {
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
  private async getSheherBuildingweb3() {
    const query = groq`*[_type == 'sheherBuildingweb3'][0]`;
    const data = await client.fetch(query);
    return data || {};
  }
  private async getPartners() {
    const query = groq`*[_type == 'sortedPartners'][0] {...,"partners":partners[]->{...}}`;
    const data = await client.fetch(query);
    return data || {};
  }
  private async getEducationalProgramming() {
    const query = groq`*[_type == 'educationalProgramming'][0] {...,"Events":Events[]->{...,"presenters":presenters[]->{...}}}`;
    const data = await client.fetch(query);
    return data || {};
  }
  private async getMemberSpotlight() {
    const query = groq`*[_type == 'memberSpotlight'][0] {...,"teammembers":teammembers[]->{...}}`;
    const data = await client.fetch(query);
    return data || {};
  }
  private async getEcosystemSpotlight() {
    const query = groq`*[_type == 'ecosystemSpotlight'][0] {...,"spotlightList":spotlightList[]->{...,"teamMember":teamMember->{...}}}`;
    const data = await client.fetch(query);
    return data || {};
  }
  private async getBrand() {
    const query = groq`*[_type == 'web3brand'][0]`;
    const data = await client.fetch(query);
    return data || {};
  }
  private async getMission() {
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
  private async getTestimonials() {
    const query = groq`*[_type == 'testimonials']`;
    const data = await client.fetch(query);
    return data;
  }
  private async getPartnerTestimonials() {
    const query = groq`*[_type == 'partnerTestimonials']`;
    const data = await client.fetch(query);
    return data;
  }
}

const ContentProvider = new ContentProviderService();

export default ContentProvider;
