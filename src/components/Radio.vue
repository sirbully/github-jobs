<template>
  <label>
    <input type="radio" :name="name" :value="label" v-model="radioButtonValue" />
    <div>
      <span></span>
      {{label}}
    </div>
  </label>
</template>

<script>
export default {
  name: 'Checkbox',
  props: ['name', 'label', 'value'],
  computed: {
    radioButtonValue: {
      get() {
        return this.value;
      },
      set() {
        this.$emit('toggle', this.label);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
label {
  position: relative;
  max-width: fit-content;
  cursor: pointer;
}

div {
  display: flex;
  align-items: center;
  color: $primary;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 500;
}

span {
  width: 17px;
  height: 17px;
  display: inline-block;
  border: 1px solid $secondary;
  border-radius: 2px;
  margin-right: 12px;

  &:after {
    content: "";
    position: absolute;
    top: 2px;
    left: 5px;
    border-bottom: 1.5px solid #fff;
    border-right: 1.5px solid #fff;
    height: 13px;
    width: 6px;
    transform: rotate(45deg);
    visibility: hidden;
  }
}

input {
  display: none;
  &:checked ~ div > span {
    background: $info;
    border: 1px solid $info;

    &:after {
      visibility: visible;
    }
  }
}
</style>
