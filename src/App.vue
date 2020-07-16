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

.nav-brand {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 2rem 0;

  .normal {
    font-weight: 300;
  }
}

.pagination {
  float: right;
  margin-top: 32px;

  li {
    &.active {
      .pagination-item {
        background: $info !important;
        color: #fff !important;
        border: 1px solid $info !important;

        &:hover {
          color: #fff;
        }
      }
    }
  }

  .pagination-item {
    width: 36px;
    height: 36px;
    margin-right: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $secondary;
    font-family: Roboto, sans-serif;
    border: 1px solid $secondary;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      color: $info;
      border: 1px solid $info;
    }
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
