<template>
  <div class="page">
    <page-header  class="wrapper" :header-img-url="url">
      <template #heading>Awareness Events</template>
      <template #content>
        <p>We organize mental health national events by partnering with individuals, private organizations, 
            and public bodies. We particularly focus on giving hope and support to the vulnerable, while creating
             an avenue to discuss critical issues that affect the mental health of Nigerians. We are committed to 
             spreading relevant information and building a stigma-free society.</p>
      </template>
    </page-header>
    <section class="event-section wrapper">
      <h2 class="heading section-header">Our Events</h2>
      <div class="">
      </div>
    </section>
    <section class="last-section wrapper">
      <h2 class="heading section-header">Want to Organize an Event?</h2>
      <btn>
        <a href="https://bit.ly/2SM2aGD">create one</a>
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
  asyncData () {
      return client.getEntry('2oru5DrMOUPdJfYxBbm269')
        .then((entry) => {
        return {
          url: entry.fields.headerImage.fields.file.url
        }
      })
    },
  head: {
    title: 'Events'
  },
}
</script>

<style scoped>
.event-section {
  margin-top: 120px;
}

.last-section {
  padding-top: 60px;
}
.last-section button {
  margin-top: 40px;
}
@media (max-width: 1024px) {
  .event-section {
    margin-top: 60px;
  }
}
@media (max-width: 840px) {

  
  .last-section {
    padding-top: 0;
  }
  .last-section button {
    margin: 20px 0;
  }
}
</style>
