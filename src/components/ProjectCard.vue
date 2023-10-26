<template>
  <div class="row project-background text-white p-3 selectable">
    <div
      class="col-7 projectCard-coverImg p-3 d-flex align-items-center justify-content-center"
    >
      <p class="projectCard-title p-3 rounded-pill text-center">
        {{ projectProp.title }}
      </p>
    </div>
    <div
      class="col-5 d-flex flex-column justify-content-between text-center fs-2"
    >
      <p>Projects Inside: {{ projectProp.projectImgs.length }}</p>
      <router-link
        :to="{ name: 'Profile', params: { profileId: projectProp.creator.id } }"
      >
        <div class="d-flex justify-content-center">
          <img
            class="projectCard-avatar rounded-circle"
            :src="projectProp.creator.picture"
            alt="Avatar Picture"
          />
          <p>
            {{ projectProp.creator.name }}
          </p>
        </div>
      </router-link>
      <i
        v-if="account.id == projectProp.creator.id"
        @click="destroyProject()"
        role="button"
        title="Delete Project"
        class="mdi text-danger fs-2 mdi-close-circle"
      ></i>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { Project } from "../models/Project.js";
import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { projectsService } from "../services/ProjectsService.js";

export default {
  props: { projectProp: { type: Project, required: true } },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      projectsCoverImg: computed(() => `url(${props.projectProp.coverImg})`),

      async destroyProject() {
        try {
          const yes = await Pop.confirm(
            "Are you sure you want to delete your project?"
          );
          if (!yes) {
            return;
          }
          const projectId = props.projectProp.id;
          logger.log(projectId);
          await projectsService.destroyProject(projectId);
        } catch (error) {
          logger.error("[ERROR]", error);
          Pop.error("[ERROR]", error.message);
        }
      },
    };
  },
};
</script>

<style>
.projectCard-coverImg {
  background-image: v-bind(projectsCoverImg);
  background-size: cover;
  background-position: center;
  height: 25rem;
  width: 25rem;
}

.projectCard-title {
  color: white;
  background-color: rgba(0, 0, 0, 0.363);
  backdrop-filter: blur(15px);
}

.projectCard-avatar {
  height: 5rem;
  width: 5rem;
}

.project-background {
  background-color: #353030;
  border-radius: 1rem;
}
</style>
