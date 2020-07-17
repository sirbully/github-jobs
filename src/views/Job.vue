<template>
  <div class="job">
    <mdb-row>
      <mdb-col sm="3">
        <router-link to="/" class="go-back">
          <i class="material-icons">trending_flat</i> Back to search
        </router-link>
        <h6>How to apply</h6>
        <div class="job-apply" v-html="job.how_to_apply"></div>
      </mdb-col>

      <mdb-col v-if="!loading" sm="9">
        <div class="job-heading">
          <h2>{{job.title}}</h2>
          <pill v-if="job.type === 'Full Time'" class="pill" />
        </div>
        <span class="job-date">
          <i class="material-icons">access_time</i>
          {{posted_on}}
        </span>

        <div class="job-employer">
          <div v-if="job.company_logo" class="company-logo" :style="companyLogo"></div>
          <div v-else class="company-logo not-found">
            <span>n/a</span>
          </div>
          <div class="job-company">
            <h5>{{job.company}}</h5>
            <p>
              <i class="material-icons">public</i>
              {{job.location}}
            </p>
          </div>
        </div>

        <div class="job-desc" v-html="job.description"></div>
      </mdb-col>
    </mdb-row>

    <div v-if="loading" class="d-flex justify-content-center">
      <div class="spinner-border spinner-color" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mdbRow, mdbCol } from 'mdbvue';
import { formatDistanceToNow } from 'date-fns';
import Pill from '@/components/Pill.vue';

export default {
  name: 'Job',
  components: {
    mdbRow,
    mdbCol,
    Pill,
  },
  data() {
    return {
      loading: false,
      job: null,
      companyLogo: {},
    };
  },
  computed: {
    posted_on() {
      return formatDistanceToNow(new Date(this.job.created_at),
        { addSuffix: true });
    },
  },
  created() {
    this.fetchJob();
  },
  methods: {
    fetchJob() {
      this.loading = true;
      fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${this.$route.params.id}.json`, {
        headers: {
          Origin: null,
        },
      }).then((response) => response.json())
        .then((data) => {
          this.loading = false;
          this.job = data;
          this.companyLogo = {
            background: `url(${data.company_logo})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          };
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.job {
  flex: 1;
  margin-bottom: 96px;

  .go-back {
    display: flex;
    align-items: center;
    margin-bottom: 36px;
    font-family: Poppins, sans-serif;
    font-size: 14px;
    font-weight: 500;

    i {
      transform: matrix(-1, 0, 0, 1, 0, 0);
      margin-right: 15px;
    }
  }
}

.job-apply {
  width: 100%;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: 500;
  overflow-wrap: break-word;
  margin-top: 16px;
}

.job-heading {
  display: flex;
  align-items: center;

  h2 {
    font-size: 24px;
    font-weight: 700;
    margin: 0 18px 0 0;
    color: $primary;
  }
}

.job-date {
  font-size: 12px;
  font-weight: 500;
  color: $secondary;
  display: flex;
  align-items: center;
  margin: 10px 0 32px;

  i {
    margin-right: 8px;
  }
}

.job-employer {
  display: flex;
  margin-bottom: 32px;

  .company-logo {
    min-width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    overflow: hidden;
    margin-right: 12px;
    border-radius: 4px;

    &.not-found {
      background: #f2f2f2;
      color: #bdbdbd;
      font-size: 12px;
      font-weight: 500;
      display: flex;
      justify-content: center;
    }
  }

  .job-company {
    h5 {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 10px;
      color: $primary;
    }

    p {
      font-size: 12px;
      font-weight: 500;
      color: $secondary;
      display: flex;
      align-items: center;

      i {
        margin-right: 8px;
      }
    }
  }
}

.job-desc {
  color: $primary;
}
</style>
