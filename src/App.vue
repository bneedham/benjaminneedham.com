<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { mdiLinkedin, mdiGithub, mdiThemeLightDark } from '@mdi/js'

// global theme switch setup and logic
import { useTheme } from 'vuetify'
const theme = useTheme()
const toggleTheme = () => {
  if (theme.global.current.value.dark) {
    theme.global.name.value = 'light'
    localStorage.setItem('theme', 'light')
  } else {
    theme.global.name.value = 'dark'
    localStorage.setItem('theme', 'dark')
  }
}

if (localStorage.getItem('theme')) {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    theme.global.name.value = savedTheme
  }
}

</script>

<template>
  <v-app>
    <div class="main">
      <header>
        <h1>BENJAMIN NEEDHAM</h1>
        <div class="links-out">
          <v-btn icon="true" variant="plain" href="https://www.linkedin.com/in/ben-needham-a6886826/" target="_blank"
            title="LinkedIn" :ripple="false"><v-icon :icon="mdiLinkedin" /></v-btn>
          <v-btn icon="true" variant="plain" href="https://github.com/bneedham" target="_blank" title="GitHub"
            :ripple="false"><v-icon :icon="mdiGithub" /></v-btn>
          <v-btn icon="true" variant="plain" @click="toggleTheme" title="Dark or Light" color="primary"
            :ripple="false"><v-icon :icon="mdiThemeLightDark" /></v-btn>
        </div>
      </header>
      <RouterView />
    </div>
  </v-app>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box
}

html:focus-within {
  scroll-behavior: smooth
}

body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

img,
picture {
  max-width: 100%;
  display: block
}

@font-face {
  font-family: 'Supreme';
  src: url('/fonts/futura_std_heavy_oblique-webfont.woff2') format('woff2'),
    url('/fonts/futura_std_heavy_oblique-webfont.woff') format('woff');
  font-display: auto;
}

h1,
h2,
h3,
h4,
.v-card-title {
  font-family: Supreme;
}

.v-theme--light {
  color: #000;

  & .v-btn,
  & a {
    color: #577200;
  }
}

.v-theme--dark {
  color: #fff;

  & .v-btn,
  & a {
    color: #bada55;
  }
}
</style>

<style scoped>
.main {
  margin-block: 0;

  &>header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px;

    & h1 {
      line-height: 1;
      margin: 0;
    }

    & .links-out {
      white-space: nowrap;

      & .v-btn--icon {
        cursor: pointer;
        color: #bada55;
      }
    }
  }
}
</style>
