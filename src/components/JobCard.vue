<template>
  <div class="job-card">
    <div class="job-position-wrap">
      <div class="company-logo">
        <img :src="logo" :alt="company" />
      </div>
      <div class="job-position">
        <h5>{{company}}</h5>
        <h4>{{title}}</h4>
        <pill v-if="isFullTime" />
      </div>
    </div>

    <div class="job-details-wrap">
      <span>
        <i class="material-icons">public</i>
        <span>{{location}}</span>
      </span>
      <span>
        <i class="material-icons">access_time</i>
        <span>{{posted_on}}</span>
      </span>
    </div>
  </div>
</template>

<script>
import { formatDistanceToNow } from 'date-fns';
import Pill from '@/components/Pill.vue';

export default {
  name: 'JobCard',
  props: {
    id: String,
    company: String,
    title: String,
    logo: String,
    isFullTime: Boolean,
    location: String,
    created: String,
  },
  components: {
    Pill,
  },
  computed: {
    posted_on() {
      return formatDistanceToNow(new Date(this.created));
    },
  },
};
</script>

<style lang="scss" scoped>
.job-card {
  padding: 12px;
  display: flex;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  background: #fff;
  color: $primary;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  cursor: pointer;
}

.job-position-wrap {
  display: flex;

  .company-logo {
    width: 90px;
    height: 90px;
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    align-items: center;
    margin-right: 16px;

    img {
      width: 100%;
    }
  }

  .job-position {
    h4 {
      font-size: 18px;
      font-weight: 400;
      margin-bottom: 12px;
    }

    h5 {
      font-size: 12px;
      font-weight: 700;
      margin-bottom: 8px;
    }
  }
}

.job-details-wrap {
  color: $secondary;
  align-self: flex-end;
  display: flex;

  span {
    display: flex;
    align-items: center;
    font-size: 12px;

    i {
      margin-right: 8px;
    }

    &:first-child {
      margin-right: 28px;
    }
  }
}
</style>
