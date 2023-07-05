<script setup lang="ts">
import { onMounted } from "vue";
import { useProjectsStore } from '@/stores/projects'
import { mdiSortAscending, mdiSortDescending } from '@mdi/js'
import { storeToRefs } from "pinia";

const { projects, isOrderASC } = storeToRefs(useProjectsStore())
const { getProjects, newToOld, oldToNew } = useProjectsStore()

onMounted(() => {
  getProjects()
})

function pathToImage(imageString: String) {
  return `/portfolioImages/${imageString}`
}

</script>

<template>
  <div class="portfolio">
    <header>

      <h3>Dev Portfolio</h3>

      <v-btn @click="newToOld()" variant="flat" size="small" :prepend-icon="mdiSortAscending" aria-label="Newest First"
        :ripple="false" :active="isOrderASC ? true : false">
        New
      </v-btn>
      <v-btn @click="oldToNew()" variant="flat" size="small" :prepend-icon="mdiSortDescending" aria-label="Oldest First"
        :ripple="false" :active="isOrderASC ? false : true">
        Old
      </v-btn>

    </header>

    <div class="projects">

      <v-card v-for="{ title, domain, when, role, description, stack, image } in projects" key="title" class="project"
        variant="tonal">
        <div class="art">
          <img :src="pathToImage(image)" laoding="lazy" />
        </div>
        <v-card-item>
          <v-card-title>{{ title }}</v-card-title>
          <v-card-subtitle>{{ domain }}</v-card-subtitle>
        </v-card-item>
        <v-card-text>
          {{ description }}
        </v-card-text>
        <v-card-item class="meta">
          <h4>{{ role }}</h4>
          <h6 class="stack">{{ stack }}</h6>
          <h5>{{ when }}</h5>
        </v-card-item>
      </v-card>

    </div>
  </div>
</template>

<style scoped>
.portfolio {
  padding: 20px;
  width: 100%;

  & header {
    display: flex;
    align-items: center;
    margin-block: 20px;

    & h3 {
      margin-right: 20px;
      font-size: 26px;
    }

    & button {
      margin-right: 10px;
      font-size: 14px;
    }
  }


  & .projects {
    margin: 0 auto;
    width: 100%;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    & .project {
      position: relative;
      display: flex;
      flex-direction: column;
      margin: 0;
      padding: 0;

      & .art {
        position: relative;
        overflow: hidden;
        aspect-ratio: 680 / 394;

        & img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 50%;
          transform: scale(1);
          transition: all 200ms;
        }

        & img:hover {
          transform: scale(1.11);
          object-position: 50% 50%;
        }
      }

      & .meta {
        text-align: right;
        margin: auto 0 0 0;

        & .stack {
          font-size: 16px;
        }
      }

    }
  }
}
</style>
