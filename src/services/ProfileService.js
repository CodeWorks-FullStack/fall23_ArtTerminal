import { AppState } from "../AppState.js";
import { Profile } from "../models/Profile.js";
import { Project } from "../models/Project.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class ProfileService {
  async getProfile(profileId) {
    AppState.profile = null;
    const res = await api.get(`api/profiles/${profileId}`);
    logger.log("[PROFILE SERVICE] getProfile() => res.data:", res.data);
    AppState.profile = new Profile(res.data);
  }

  async getProjectsByProfileId(profileId) {
    const res = await api.get(`api/projects?creatorId=${profileId}`);
    logger.log(
      "[PROFILE SERVICE] getProjectsByProfileId() => res.data:",
      res.data
    );
    AppState.projects = res.data.map((project) => new Project(project));
  }
}

export const profileService = new ProfileService();
