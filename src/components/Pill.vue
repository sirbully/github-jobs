<template>
  <div class="pill">Full time</div>
</template>

<style lang="scss" scoped>
.pill {
  padding: 4px 8px;
  width: max-content;
  background: transparent;
  color: $primary;
  font-size: 12px;
  font-weight: 700;
  border: 1px solid $primary;
  border-radius: 4px;
}

@media (max-width: 575px) {
  .pill {
    margin-bottom: 38px;
  }
}
</style>
