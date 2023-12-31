import { AppState } from "../AppState.js";
import { Project } from "../models/Project.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class ProjectsService {
  async getProjects() {
    const res = await api.get("api/projects");
    logger.log("[PROJECTS SERVICE] getProjects() => res.data:", res.data);
    AppState.projects = res.data.map((project) => new Project(project));
    logger.log(AppState.projects);
  }

  async destroyProject(projectId) {
    const res = await api.delete(`api/projects/${projectId}`);
    logger.log("[DELETING PROJECT]", res.data);
    AppState.projects = AppState.projects.filter(
      (project) => project.id != projectId
    );
  }
}

export const projectsService = new ProjectsService();
