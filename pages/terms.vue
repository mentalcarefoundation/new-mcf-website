<template>
  <div class="page">
    <div class="wrapper page-heading">
        <h2 class="heading section-header">Fitila Terms & Conditions</h2>
        <span class="large-text">Last updated: {{terms.lastUpdated}}</span>
    </div>
    <div class="wrapper ">
        <h2 class="sub-head">{{terms.firstSectionHeading}}</h2>
        <p v-for="(section, index) in terms.firstSectionContent.split('<br>')" :key="`1st-section${index}`" class="large-text">
            {{section}}
        </p>
    </div>
    <div class="wrapper ">
        <h2 class="sub-head">{{terms.secondSectionHeading}}</h2>
        <p v-for="(section, index) in terms.secondSectionContent.split('<br>')" :key="`2nd-section${index}`" class="large-text">
            {{section}}
        </p>
    </div>
    <div class="wrapper ">
        <h2 class="sub-head">{{terms.thirdSectionHeading}}</h2>
        <p v-for="(section, index) in terms.thirdSectionContent.split('<br>')" :key="`2nd-section${index}`" class="large-text">
            {{section}}
        </p>
    </div>
    <div>
        <h2 class="sub-head wrapper">{{terms.fourthSectionHeading}}</h2>
        <p v-for="(section, index) in terms.fourthSectionContent1.split('<br>')" :key="`4th-section-1${index}`" class="large-text wrapper">
            {{section}}
        </p>
        <div class="bg-colored">
            <p v-for="(section, index) in terms.fourthSectionHighlight.split('<br>')" :key="`4th-section-highlight${index}`" class="large-text wrapper">
                {{section}}
            </p>
        </div>
        <p v-for="(section, index) in terms.fourthSectionContent2.split('<br>')" :key="`4th-section-2${index}`" class="large-text wrapper">
            {{section}}
        </p>
    </div>
    <div class="bg-colored">
        <div class="wrapper">
            <h2 class="sub-head">{{terms.fifthSectionHeading}}</h2>
            <p v-for="(section, index) in terms.fifthSectionContent.split('<br>')" :key="`5th-section${index}`" class="large-text">
                {{section}}
            </p>
        </div>
    </div>
    <div class="wrapper ">
        <h2 class="sub-head">{{terms.sixthSectionHeading}}</h2>
        <p v-for="(section, index) in terms.sixthSectionContent.split('<br>')" :key="`6th-section${index}`" class="large-text">
            {{section}}
        </p>
    </div>
    <div class="wrapper ">
        <h2 class="sub-head">{{terms.seventhSectionHeading}}</h2>
        <p v-for="(section, index) in terms.seventhSectionContent.split('<br>')" :key="`7th-section${index}`" class="large-text">
            {{section}}
        </p>
    </div>
    <div class="wrapper ">
        <h2 class="sub-head">{{terms.eighthSectionHeading}}</h2>
        <p v-for="(section, index) in terms.eighthSectionContent.split('<br>')" :key="`8th-section${index}`" class="large-text">
            {{section}}
        </p>
    </div>
  </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'

const client = createClient()

export default {
  asyncData () {
      return client.getEntry('4ZEwO3mxo1oTUb25sBiw3E')
      .then((entry) => {
        return {
          terms: entry.fields
        }
      })
  },
  head: {
    title: 'Terms of Service'
  },
}
</script>

<style scoped>
.page {
    padding-bottom: 80px;
}
.heading {
    margin-bottom: 0;
}
.sub-head, .large-text {
    color: var(--color-black-secondary);
}
.sub-head {
    margin: 30px 0 0;
}
.wrapper.sub-head {
    margin: 30px 95px 0;
}
.large-text, .bg-colored {
    margin-bottom: 40px;
}
.bg-colored {
    background-color: var(--color-blue-100);
    padding: 20px 0;
}
.bg-colored .sub-head{
    margin-top: 0;
}
.bg-colored .large-text:last-child {
    margin-bottom: 0;
}

@media (max-width: 1200px) {
  .wrapper {
    margin: 20px 5%;
  }
  .wrapper.sub-head {
    margin: 20px 5% 0;
  }
  .large-text, .bg-colored {
        margin-bottom: 20px;
    }
  .bg-colored .large-text {
      margin-top: 0;
  }
}
</style>
