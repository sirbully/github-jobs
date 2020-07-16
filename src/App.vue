<template>
  <mdb-container id="app">
    <h1 class="nav-brand">
      Github
      <span class="normal">Jobs</span>
    </h1>
    <router-view />
  </mdb-container>
</template>

<script>
import { mdbContainer } from 'mdbvue';

export default {
  name: 'App',
  components: {
    mdbContainer,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&family=Roboto:wght@400;500;700&display=swap");

body {
  font-size: 0.875rem;
  color: $primary;
  font-family: "Roboto", sans-serif;
}

h1,
h6 {
  font-family: "Poppins", sans-serif;
}

h1 {
  color: $dark;
}

h6 {
  color: $secondary;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
}

i {
  font-size: 1.25rem !important;
}

.btn {
  font-family: "Roboto", sans-serif;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 2rem 0;

  .normal {
    font-weight: 300;
  }
}

// COLORS
.color-info {
  background-color: $info !important;
  color: #fff !important;

  .alt {
    background-color: transparent !important;
    border: 1px solid $info !important;
    color: $info !important;
  }
}
</style>
