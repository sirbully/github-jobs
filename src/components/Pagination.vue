<template>
  <ul v-if="pager.pages && pager.pages.length" class="pagination">
    <li class="page-item previous" :class="{'disabled': pager.currentPage === 1}">
      <a class="page-link" @click="setPage(pager.currentPage - 1)">
        <i class="material-icons">keyboard_arrow_left</i>
      </a>
    </li>
    <li
      v-for="page in pager.pages"
      :key="page"
      class="page-item page-number"
      :class="{'active': pager.currentPage === page}"
    >
      <a class="page-link" @click="setPage(page)">{{page}}</a>
    </li>
    <li class="page-item next" :class="{'disabled': pager.currentPage === pager.totalPages}">
      <a class="page-link" @click="setPage(pager.currentPage + 1)">
        <i class="material-icons">keyboard_arrow_right</i>
      </a>
    </li>
  </ul>
</template>

<script>
import paginate from 'jw-paginate';

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    initialPage: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 5,
    },
    maxPages: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      pager: {},
    };
  },
  created() {
    if (!this.$listeners.changePage) {
      // eslint-disable-next-line no-throw-literal
      throw 'Missing required event listener: "changePage"';
    }

    if (this.items && this.items.length) {
      this.setPage(this.initialPage);
    }
  },
  methods: {
    setPage(page) {
      const { items, pageSize, maxPages } = this;

      const pager = paginate(items.length, page, pageSize, maxPages);
      const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
      this.pager = pager;

      this.$emit('changePage', pageOfItems);
    },
  },
};
</script>

<style lang="scss">
.pagination {
  float: right;

  .page-item {
    &.first,
    &.last {
      display: none;
    }

    &.active {
      .page-link {
        background: $info !important;
        color: #fff !important;
        border: 1px solid $info !important;

        &:hover {
          color: #fff;
        }
      }
    }

    &.disabled {
      .page-link {
        background: transparent;
        color: $secondary;
      }
    }
  }

  .page-link {
    width: 36px;
    height: 36px;
    margin-right: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    color: $secondary;
    font-family: Roboto, sans-serif;
    border: 1px solid $secondary;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      color: $info;
      border: 1px solid $info;
      background: transparent;
    }
  }
}
</style>
