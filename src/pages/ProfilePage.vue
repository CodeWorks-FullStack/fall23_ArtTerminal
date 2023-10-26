<template>
  <div class="container-fluid"></div>
  {{ profile }}
  {{ projects }}
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
      projects: computed(() => AppState.projects),
    };
  },
};
</script>

<style></style>
