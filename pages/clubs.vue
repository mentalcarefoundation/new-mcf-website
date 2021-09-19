<template>
  <div class="page">
    <page-header class="wrapper" :header-img-url="url">
      <template #heading>Campus Clubs</template>
      <template #content>
        <p>MCF Campus Clubs promote mental health awareness and education within universities. 
            Our aim is to provide an ongoing space for students to have a stigma-free place to discuss mental health
             and provide a bridge between community mental health resources and your school community. Joining or 
             starting a MCF Campus Club in your school gives you an opportunity to lead mental health related projects.
             MCF campus clubs are not support groups or therapy groups. They serve as a safe space where like minded 
             students can spearhead activities and discussions that combat stigma.</p>
      </template>
    </page-header>
    <section class="wrapper">
      <h3 class="sub-head">Find a club on your campus</h3>
      <div class="form-box">
        <p class="label">Search campus</p>
        <div class="select-group">
          <div class="select-box">
            <div class="custom-select">
              <div v-if="!selectedOption" class="select-header" @click="toggleSelect">Select a campus:</div>
              <div v-else class="select-header" @click="toggleSelect">{{selectedOption}}</div>
              <div v-show="isOpen" >
                  <ul class="options-list">
                    <li v-for="(option, index) in clubs" :key="index" class="option" @click="onOptionClicked(option)">
                        {{option.school}}
                      </li>
                  </ul>
              </div>
            </div>
          </div>
          <btn>
            <a :href="clubUrl">Join</a>
          </btn>
        </div>
      </div>
    </section>
    <section class="last-section wrapper">
      <h2 class="sub-head">No club in your school?</h2>
      <btn>
        <a href="https://bit.ly/2MON6UU">start a campus club</a>
      </btn>
    </section>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import Btn from '~/components/Button.vue'
import {createClient} from '~/plugins/contentful.js'

const client = createClient()

export default {
  components: {
    PageHeader,
    Btn
  },
  asyncData ({$axios}) {
      return Promise.all([
        $axios.$get('https://mcfapi.herokuapp.com/api/v1/admin/list?type=campus_club'),
        client.getEntry('24ja3DvYPxsse8kHytGXmY')
      ])
      .then(([res, entry]) => {
        return {
          clubs: res.data,
          url: entry.fields.headerImage.fields.file.url
        }
      })
    },
  data: () => ({
    isOpen: false,
    selectedOption: null,
    clubUrl: ""
  }),
  head: {
    title: 'Campus Clubs'
  },
  mounted () {
    document.addEventListener('click', this.closeSelect)
  },
  beforeDestroy () {
    document.removeEventListener('click',this.closeSelect)
  },
  methods : {
    toggleSelect() {
      this.isOpen = !this.isOpen
    },
    onOptionClicked(option) {
      this.selectedOption = option.school
      this.isOpen = false
      this.clubUrl = option.email
    },
    closeSelect (e) {
      if (!this.$el.contains(e.target)) {
        this.isOpen = false
      }
    }
  }
}
</script>

<style scoped>
  .form-box {
    margin-top: 40px;
  }
  .label {
    font-family: Verdana, sans-serif;
    font-size: var(--text-18);
    line-height: var(--text-28);
    color: var(--color-black-secondary);
    margin-bottom: 5px;
  }
  .select-group {
    display: flex;
  }
  .select-group button {
    z-index: 10;
  }
  .select-box {
    width: 580px;
    margin-bottom: 20px;
  }
  .custom-select {
    width: 100%;
    position: relative;
  }
  .select-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 12px 16px;
    margin-right: 20px;
    border: 1px solid transparent;
    background-color: var(--color-blue-100);
    font-family: Verdana, sans-serif;
    font-size: var(--text-16);
    line-height: var(--text-24);
    color: var(--color-black-primary);    
  }
  .select-header:focus {
      border: 1px solid var(--color-blue-dark);
  }
  .options-list {
    z-index: 999;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    max-height: 120px;
    overflow-y: scroll;
    background: var(--color-white);
    border: 1px solid transparent;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.06);
    color: var(--color-black-secondary);
    font-size: var(--text-16);
  }
  .options-list::-webkit-scrollbar {
		width: 5px;
	}	
	.options-list::-webkit-scrollbar-track {
		box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
		border-radius: 3px;
	}
	.options-list::-webkit-scrollbar-thumb {
		border-radius: 3px;
		box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
  }
  .option {
    list-style: none;
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid var(--color-grey);
  }
  .option:hover {
    background-color: var(--color-blue-100);
    font-weight: 700;
  }
  .error {
    color: red;
    font-size: var(--text-14);
  }
@media (max-width: 840px) {
  .select-header {
    margin-right: 10px;
      font-size: var(--text-14);
  }
  .label {
    font-size: var(--text-14);
  }
  .options-list {
    padding: 5px;
    font-size: var(--text-14)
  }
}
</style>
