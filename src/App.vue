<template>
  <mdb-container id="app">
    <h1 class="nav-brand">
      Github
      <span class="normal">Jobs</span>
    </h1>
    <router-view />
    <div class="footer">Nicole Bullecer @ DevChallenges.io</div>
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
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Poppins:wght@300;500;700&family=Roboto:wght@400;500;700&display=swap");

body {
  background: #f6f7fb !important;
  color: $primary;
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
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
  font-weight: 700 !important;
  text-transform: uppercase;
}

i {
  font-size: 1.25rem !important;
}

.btn {
  font-family: "Roboto", sans-serif;
}

#app {
  position: relative;
  min-height: calc(100vh + 70px);

  .nav-brand {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 2rem 0;

    .normal {
      font-weight: 300;
    }
  }

  .footer {
    margin-bottom: 70px;
    color: $secondary;
    font-family: Montserrat, sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
  }
}

// COLORS
.color-primary {
  background: transparent !important;
  border: 1px solid $primary;
  color: $primary;
}

.color-secondary {
  background-color: transparent;
  border: 1px solid $secondary !important;
  color: $secondary !important;
}

.color-info {
  background-color: $info !important;
  color: #fff !important;
  border: 1px solid $info !important;

  .alt {
    background-color: transparent !important;
    color: $info !important;
  }
}
</style>
