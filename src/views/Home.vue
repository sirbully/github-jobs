<template>
  <div class="home">
    <div class="search-wrap">
      <mdb-row class="w-100 justify-content-center">
        <mdb-col col="12" class="search-input-wrap search">
          <i class="material-icons">work_outline</i>
          <input type="text" name="search" placeholder="Title, company, expertise or benefits" />
          <mdb-btn class="color-info search-btn">Search</mdb-btn>
        </mdb-col>
      </mdb-row>
    </div>
    <div class="job-list-wrap">
      <mdb-row>
        <mdb-col sm="4" class="filter-wrap">
          <checkbox v-model="fullTime" name="Full time" />
          <h6>Location</h6>
          <div class="search-input-wrap location">
            <i class="material-icons">public</i>
            <input type="text" name="location" placeholder="City, state, zip code or country" />
          </div>
          <div class="filter-location">
            <checkbox v-model="london" name="London" />
            <checkbox v-model="amsterdam" name="Amsterdam" />
            <checkbox v-model="newYork" name="New York" />
            <checkbox v-model="berlin" name="Berlin" />
          </div>
        </mdb-col>

        <mdb-col sm="8" class="jobs-wrap">
          <div v-if="loading" class="d-flex justify-content-center">
            <div class="spinner-border spinner-color" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>

          <div v-if="!loading">
            <job-card
              v-for="job in jobs"
              :key="job.id"
              :id="job.id"
              :company="job.company"
              :title="job.title"
              :logo="job.company_logo"
              :isFullTime="job.type === 'Full Time' ? true : false"
              :location="job.location"
              :created="job.created_at"
            />

            <paginate
              :page-count="10"
              :page-range="3"
              :click-handler="goToPage"
              :prev-text="'<i class=\'material-icons\'>keyboard_arrow_left</i>'"
              :next-text="'<i class=\'material-icons\'>keyboard_arrow_right</i>'"
              :container-class="'pagination'"
              :page-link-class="'pagination-item'"
              :prev-link-class="'pagination-item'"
              :next-link-class="'pagination-item'"
              :hide-prev-next="true"
            ></paginate>
          </div>
        </mdb-col>
      </mdb-row>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import Checkbox from '@/components/Checkbox.vue';
import JobCard from '@/components/JobCard.vue';

import {
  mdbRow, mdbCol, mdbBtn,
} from 'mdbvue';

export default {
  name: 'Home',
  components: {
    mdbRow,
    mdbCol,
    mdbBtn,
    Checkbox,
    JobCard,
  },
  data() {
    return {
      loading: false,
      jobs: [],
      page: 1,
    };
  },
  created() {
    this.fetchJobs();
  },
  methods: {
    fetchJobs() {
      this.loading = true;
      fetch('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json', {
        headers: {
          Origin: null,
        },
      }).then((response) => response.json())
        .then((data) => {
          this.loading = false;
          this.jobs = data;
        });
    },
    goToPage(pageNum) {
      this.page = pageNum;
    },
  },
  setup() {
    const fullTime = ref(false);
    const london = ref(false);
    const amsterdam = ref(false);
    const newYork = ref(false);
    const berlin = ref(false);
    return {
      fullTime, london, amsterdam, newYork, berlin,
    };
  },
};
</script>

<style lang="scss" scoped>
.search-wrap {
  height: 54x;
  padding: 42px 18px;
  margin-bottom: 42px;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  background-image: url("~@/assets/img/backgroundImg.png");
  background-position: center;
  background-size: cover;

  .search-btn {
    border-radius: 4px !important;
    height: 47px;
    width: 146px;
    margin-left: auto;
  }
}

.search-input-wrap {
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 4px;

  &.search {
    max-width: 790px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  }

  &.location {
    height: 48px;
    margin-top: 14px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  }

  i {
    margin-left: 14px;
    margin-right: 10px;
    color: $secondary;
  }

  input {
    flex: 1;
    margin-right: 10px;
    font-size: 12px;
    font-family: "Robot", sans-serif;
    border: none;
    color: $secondary;

    &::placeholder {
      color: $secondary;
    }
  }
}

.filter-wrap {
  h6 {
    margin-top: 32px;
  }

  .filter-location {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    margin-left: 5px;
  }
}

.spinner-color {
  border: 0.25em solid $primary !important;
  border-right-color: transparent !important;
}

@media (max-width: 575px) {
  .search-input-wrap {
    &.search {
      max-width: 315px;
    }

    .search-btn {
      width: 104px;
    }
  }
}
</style>
