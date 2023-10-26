<template>
  <div class="container-fluid">
    <div v-if="profile" class="row">
      <div class="col-12">
        <img :src="profile.coverImg" alt="" />
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-6">
            <img class="rounded-circle" :src="profile.picture" alt="" />
          </div>
          <div class="col-6">
            <p>{{ profile.name }}</p>
            <p>{{ profile.bio }}</p>
            <i
              v-if="profile.graduated == true"
              class="mdi fs-1 mdi-book"
              :title="`${profile.name} has graduated!`"
            ></i>
            <a
              v-if="profile.github != ''"
              :href="profile.github"
              :title="`${profile.name}'s GitHub'`"
              ><i class="mdi fs-1 mdi-github"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="row">
      <div class="col-12">Loading Profile....</div>
    </div>
    <div v-if="projects.length" class="row mt-5">
      <div
        v-for="project in projects"
        :key="project.id"
        class="col-12 col-lg-6 p-5"
      >
        <ProjectCard :projectProp="project" />
      </div>
    </div>
    <div v-else class="row">
      <div class="col-12">Loading Projects....</div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { computed, onMounted } from "vue";
import { profileService } from "../services/ProfileService.js";
import { AppState } from "../AppState.js";

export default {
  setup() {
    onMounted(() => {
      getProfile();
      getProjectsByProfileId();
    });
    const route = useRoute();
    async function getProfile() {
      try {
        const profileId = route.params.profileId;
        logger.log(profileId);
        await profileService.getProfile(profileId);
      } catch (error) {
        logger.error("[ERROR]", error);
        Pop.error("[ERROR]", error.message);
      }
    }

    async function getProjectsByProfileId() {
      try {
        const profileId = route.params.profileId;
        await profileService.getProjectsByProfileId(profileId);
      } catch (error) {
        logger.error("[ERROR]", error);
        Pop.error("[ERROR]", error.message);
      }
    }

    return {
      profile: computed(() => AppState.profile),
      // profileCoverImg: computed(() => `url(${AppState.profile.coverImg})`),
      projects: computed(() => AppState.projects),
    };
  },
};
</script>

<style></style>
