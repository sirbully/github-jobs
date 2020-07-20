<template>
  <div class="home">
    <div class="search-wrap">
      <mdb-row class="w-100 justify-content-center">
        <mdb-col col="12" class="search-input-wrap search">
          <i class="material-icons">work_outline</i>
          <input
            v-model="search"
            type="text"
            name="search"
            placeholder="Title, company, expertise or benefits"
            @keyup.enter="handleSubmit"
          />
          <mdb-btn class="color-info search-btn" @click="handleSubmit">Search</mdb-btn>
        </mdb-col>
      </mdb-row>
    </div>

    <div class="job-list-wrap">
      <mdb-row>
        <mdb-col sm="4" class="filter-wrap">
          <checkbox v-model="fullTime" @input="handleSubmit" name="Full time" />
          <h6>Location</h6>
          <div class="search-input-wrap location">
            <i class="material-icons">public</i>
            <form @submit.stop.prevent="handleSubmit">
              <input
                v-model="location"
                type="text"
                name="location"
                placeholder="City, state, zip code or country"
              />
            </form>
          </div>
          <div class="filter-location">
            <checkbox v-model="remote" @input="handleSubmit" name="Remote" />
            <checkbox v-model="amsterdam" @input="handleSubmit" name="Amsterdam" />
            <checkbox v-model="germany" @input="handleSubmit" name="Germany" />
            <checkbox v-model="newYork" @input="handleSubmit" name="New York" />
          </div>
        </mdb-col>

        <mdb-col sm="8" class="jobs-wrap">
          <div v-if="loading" class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>

          <div v-if="!loading">
            <router-link
              v-for="job in jobPages"
              :key="job.id"
              :to="{ name: 'Job', params: { id: job.id }}"
            >
              <job-card
                :id="job.id"
                :company="job.company"
                :title="job.title"
                :logo="job.company_logo"
                :isFullTime="job.type === 'Full Time' ? true : false"
                :location="job.location"
                :created="job.created_at"
              />
            </router-link>

            <pagination :items="jobs" :pageSize="5" :maxPages="3" @changePage="goToPage" />
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
import Pagination from '@/components/Pagination.vue';

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
    Pagination,
  },
  data() {
    return {
      loading: false,
      jobs: [],
      jobPages: [],
      search: '',
      location: '',
    };
  },
  computed: {
    queryParams() {
      const queryStr = [];

      if (this.search) queryStr.push(`search=${this.search.split(' ').join('+')}`);

      if (this.location) queryStr.push(`location=${this.location.split(' ').join('+')}`);
      if (this.remote) queryStr.push('location=remote');
      if (this.amsterdam) queryStr.push('location=amsterdam');
      if (this.germany) queryStr.push('location=germany');
      if (this.newYork) queryStr.push('location=new+york');

      if (this.fullTime) queryStr.push('full_time=true');

      if (queryStr) return queryStr.join('&');
      return '';
    },
  },
  created() {
    this.fetchJobs();
  },
  methods: {
    fetchJobs() {
      this.loading = true;
      const noCors = 'https://cors-anywhere.herokuapp.com/';
      const API = 'https://jobs.github.com/positions.json?';

      fetch(`${noCors}${API}${this.queryParams}`, {
        headers: {
          Origin: null,
        },
      }).then((response) => response.json())
        .then((data) => {
          this.loading = false;
          this.jobs = data;
        });
    },
    handleSubmit() {
      this.fetchJobs();
    },
    goToPage(jobPages) {
      this.jobPages = jobPages;
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    },
  },
  setup() {
    const fullTime = ref(false);
    const remote = ref(false);
    const amsterdam = ref(false);
    const germany = ref(false);
    const newYork = ref(false);

    return {
      fullTime, remote, amsterdam, germany, newYork,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  flex: 1;
}

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

  form {
    flex: 1;
    display: flex;
  }

  input {
    flex: 1;
    margin-right: 10px;
    font-size: 12px;
    font-family: "Robot", sans-serif;
    border: none;
    color: $primary;

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
    margin: 25px 0 25px 5px;
  }
}

.jobs-wrap {
  margin-bottom: 4rem;
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
