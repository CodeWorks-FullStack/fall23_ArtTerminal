<template>
  <div class="container-fluid">
    <div class="row">
      <div
        v-for="project in projects"
        :key="project.id"
        class="col-12 col-lg-6"
      >
        <ProjectCard :projectProp="project" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { projectsService } from "../services/ProjectsService.js";
import { AppState } from "../AppState.js";
import ProjectCard from "../components/ProjectCard.vue";

export default {
  setup() {
    onMounted(() => {
      getProjects();
    });
    async function getProjects() {
      try {
        await projectsService.getProjects();
      } catch (error) {
        logger.error("[ERROR]", error);
        Pop.error("[ERROR]", error.message);
      }
    }
    return {
      projects: computed(() => AppState.projects),
    };
  },
  components: { ProjectCard },
};
</script>

<style scoped lang="scss"></style>
