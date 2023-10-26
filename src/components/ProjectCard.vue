<template>
  <div class="row">
    <div
      class="col-7 projectCard-coverImg p-3 d-flex align-items-center justify-content-center"
    >
      <p class="projectCard-title p-3 rounded-pill text-center">
        {{ projectProp.title }}
      </p>
    </div>
    <div class="col-5 d-flex flex-column justify-content-between text-center">
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
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { Project } from "../models/Project.js";

export default {
  props: { projectProp: { type: Project, required: true } },
  setup(props) {
    return {
      projectsCoverImg: computed(() => `url(${props.projectProp.coverImg})`),
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
</style>
