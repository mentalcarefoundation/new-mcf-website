<template>
  <div class="page">
    <page-header class="wrapper first-section" :header-img-url="url" heading-text-bottom="8px">
      <template #heading>{{details.firstSectionHeading}}</template>
      <template #content>
        <p>{{details.firstSectionContent}}</p>
      </template>
      <div class="btn">
        <btn>
          <a :href="signupUrl" target="_blank">Join Now</a>
        </btn>  
      </div> 
      <div class="details">
        <h3 class="sub-head">{{details.secondSectionHeading}}</h3>
        <p class="large-text">
          {{firstCut}}
        </p>
      </div>
    </page-header>
    <section class="wrapper ul-section">
      <p 
        v-for="(section, index) in (details.secondSectionContent1.split('<br>').slice(1, details.secondSectionContent1.length))"
        :key="`2nd-section-1${index}`" 
        class="large-text"
      >
          {{section}}
      </p>
        
        <ul class="large-text">
          <li v-for="(section, index) in details.secondSectionHighlight.split('<br>')" :key="`second-section-list${index}`">
            {{section}}
          </li>
        </ul>
        <p class="large-text">
          {{secondCut}} <NuxtLink to="/terms"> here</NuxtLink>.
        </p>
        <p 
          v-for="(section, index) in details.secondSectionContent2.split('<br>').slice(1, details.secondSectionContent2.length)" 
          :key="`2nd-section-2${index}`" 
          class="large-text"
        >
            {{section}}
        </p>
    </section>
    <section class="wrapper pd-60 last-section">
        <h2 class="heading section-header">{{details.thirdSectionHeading}}</h2>
        <p class="heading-desc large-text">
          {{details.thirdSectionContent}}
        </p>
        <div class="steps-group">
          <div class="steps">
            <h2 class="sub-head">{{details.fourthSectionHeading}}</h2>
            <ol class="large-text">
              <li v-for="(section, index) in details.fourthSectionContent.split('<br>')" :key="`fourth-section-list${index}`">
                {{section}}
              </li>
            </ol>
            <btn>
              <a :href="signupUrl" target="_blank">Join Now</a>
            </btn>
          </div>
          <div class="steps">
            <h2 class="sub-head">{{details.fifthSectionHeading}}</h2>
            <ol class="large-text">
              <li v-for="(section, index) in details.fifthSectionContent.split('<br>')" :key="`fifth-section-list${index}`">
                {{section}}
              </li>
            </ol>
            <btn>
              <a :href="signupUrl" target="_blank">Join Now</a>
            </btn>
          </div>
        </div>
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
  asyncData () {
    return Promise.all([
        client.getEntry('7Ixott1du6XLnHuQ6Easd9'),
        client.getEntry('2WvyHteyDBxtWxhHI2OLae'),
      ]).then(([entry, details]) => {
        return {
          url: entry.fields.headerImage.fields.file.url,
          details: details.fields
        }
      })
  },
  data () {
    return {
      signupUrl: 'https://fitila.mentalcare.life/signup'
    }
  },
  head: {
    title: 'Fitila'
  },
  computed: {
    firstCut() {
      return this.details.secondSectionContent1.split('<br>')[0]
    },
    secondCut() {
      return this.details.secondSectionContent2.split('<br>')[0]
    }
  }
}
</script>

<style scoped>
p, .ul-section .large-text{
  color: var(--color-black-secondary);
}
.wrapper.first-section {
  padding-bottom: 0;
}
.details {
  margin: 40px 0 26px;
}
.details .sub-head {
  width: 70%;
}
.ul-section ul {
  margin-bottom: 40px;
}
.last-section {
  padding-bottom: 0;
}
.last-section .heading {
  margin-bottom: 40px;
}
.heading-desc {
  width: 50%;
  margin-bottom: 40px;
}
.steps-group {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}
.steps {
  width: 50%;
  box-sizing: border-box;
  padding-right: 20px;
}
.steps .sub-head {
  margin-top: 0;
  color: var(--color-blue-dark);
}
.steps ol {
  margin: 0 0 40px 35px;
}
.steps li {
  color: var(--color-black-secondary);
  list-style-type: auto;
}

@media (max-width:1200px) {
  .details .large-text {
    width: 110%;
  }
}
@media (max-width:1024px) {
  .details .sub-head {
    width: 100%;
  }
  .details .large-text {
    width: 150%;
  }
  .last-section .heading {
    margin-bottom: 20px;
  }
  .heading-desc {
    width: 100%;
  }
  .steps .sub-head {
    margin-bottom: 20px;
  }
}
@media (max-width:840px) {
  .details .large-text {
    width: 100%;
  }
  .heading-desc {
    margin-bottom: 20px;
  }
  .steps {
    width: 100%;
    margin-bottom: 40px;
    padding-right: 0;
  }
  .steps ol {
  margin-bottom: 20px;
}
}
</style>
