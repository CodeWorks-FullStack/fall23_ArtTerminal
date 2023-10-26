<template>
  <div class="about text-center row">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
  </div>
  <div class="row">
    <form @submit.prevent="editAccount()" class="p-5">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          v-model="editable.name"
          class="form-control"
          id="name"
          aria-describedby="name"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your name with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="picture" class="form-label">Picture</label>
        <input
          v-model="editable.picture"
          type="url"
          class="form-control"
          id="picture"
        />
      </div>
      <div class="mb-3">
        <label for="coverImg" class="form-label">Cover Image</label>
        <input
          v-model="editable.coverImg"
          type="url"
          class="form-control"
          id="coverImg"
        />
      </div>
      <div class="mb-3">
        <label for="github" class="form-label">GitHub</label>
        <input
          v-model="editable.github"
          type="url"
          class="form-control"
          id="github"
        />
      </div>
      <div class="mb-3">
        <label for="bio" class="form-label">Bio</label>
        <textarea
          v-model="editable.bio"
          type="text"
          class="form-control"
          id="bio"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<!-- {
    "_id": "653955ee270c9d4bb743829b",
    "subs": [
        "auth0|653955ed24ee6ee2b5f99de3"
    ],
    "email": "neonblizzard@twitch.tv",
    "name": "Neon Blizzard",
    "picture": "https://media.tenor.com/OTvrvx1CQfwAAAAC/azuki-ashchild.gif",
    "bio": "Neon Blizzard, a master katana wielder and cryomancer, is a legendary warrior whose true identity remains a secret. Born in a remote, snow-covered village, she wields an enchanted ice crystal katana, her blade glowing with an eerie blue light, and possesses the unique ability to command blizzards. When snow falls and winds howl, she becomes an unstoppable force, using her cryomantic powers to conceal her movements, disorient her foes, and freeze them with her chilling energy. Beyond combat, she shapes ice sculptures and protective barriers and heals with her powers. Neon Blizzard is a protector of the weak, a mysterious figure whose legend grows with each blizzard she conjures, and a formidable force for justice and peace.",
    "coverImg": "https://img.wattpad.com/8c505fbd0546bcf4008ecd060828a9b8e8a74717/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f2d364e45736b54746e56426449673d3d2d313033333533363438382e313636613362616565353961363339663139363336323138383934332e676966",
    "github": "",
    "linkedin": "",
    "resume": "",
    "class": "",
    "graduated": false,
    "createdAt": "2023-10-25T17:52:55.787Z",
    "updatedAt": "2023-10-25T17:56:12.258Z",
    "__v": 0,
    "id": "653955ee270c9d4bb743829b"
} -->

<script>
import { computed, ref, watchEffect } from "vue";
import { AppState } from "../AppState";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { accountService } from "../services/AccountService.js";
export default {
  setup() {
    const editable = ref({});
    const count = ref(1);

    watchEffect(() => {
      // logger.log(count.value);
      logger.log("Watch Effect go!!");
      editable.value = AppState.account;
    });

    return {
      editable,
      count,
      account: computed(() => AppState.account),

      async editAccount() {
        try {
          const accountData = editable.value;
          logger.log("[EDITING PROFILE] profileData:", accountData);
          await accountService.editAccount(accountData);
        } catch (error) {
          logger.error("[ERROR]", error);
          Pop.error("[ERROR]", error.message);
        }
      },

      clickMe() {
        count.value++;
      },
    };
  },
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
