<template>
  <div class="page">
    <page-header class="wrapper" :header-img-url="url">
      <template #heading>Awareness Events</template>
      <template #content>
        <p class="large-text">We organize mental health national events by partnering with individuals, private organizations, 
            and public bodies. We particularly focus on giving hope and support to the vulnerable, while creating
             an avenue to discuss critical issues that affect the mental health of Nigerians. We are committed to 
             spreading relevant information and building a stigma-free society.</p>
      </template>
    </page-header>
    <section class="wrapper">
      <h2 class="heading section-header">Our Events</h2>
      <div class="events-box">
        <div v-for="event in events" :key="event.fields.id" class="event-group">
          <div class="img-box">
            <img :src="event.fields.banner.fields.file.url" alt="event-image">
          </div>
          <div class="content">
            <h4 class="title">{{event.fields.title}}</h4>
            <btn>
              <a :href="event.fields.link">register</a>
            </btn>
          </div>
        </div>
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
      return Promise.all([
        client.getEntry('2oru5DrMOUPdJfYxBbm269'),
        client.getEntries({
          'content_type': 'event'
        })
      ]).then(([entry, events]) => {
        return {
          url: entry.fields.headerImage.fields.file.url,
          events: events.items
        }
      })
    },
  // asyncData () {
  //     return client.getEntry('2oru5DrMOUPdJfYxBbm269')
  //       .then((entry) => {
  //       return {
  //         url: entry.fields.headerImage.fields.file.url
  //       }
  //     })
  //   },
  head: {
    title: 'Events'
  },
}
</script>

<style scoped>
.events-box {
  display: flex;
  flex-wrap: wrap;
  margin: 40px -10px 0;
}
.event-group {
  width: 30%;
  max-width: 380px;
  margin: 0 10px 80px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}
.img-box {
  width: 100%;
  height: 340px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border-bottom: 1px solid var(--color-grey);
}
.img-box img {
  width: 100%;
  height: 100%;
}
.content {
  padding: 20px 40px;
}
.content .title {
  font-family: Arial, sans-serif;
  font-size: var(--text-16);
  font-weight: 400;
  line-height: var(--text-18);
  color: var(--color-black-primary);
  margin-bottom: 30px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  max-height: 36px;

}
.content button {
  width: 100%;
}
.last-section {
  padding-top: 60px;
}
.last-section button {
  margin-top: 40px;
}
@media (max-width: 1200px) {
  .events-box {
    justify-content: space-between;
  }
  .event-group {
    width: 47%;
    max-width: none;
  }
  .img-box {
    height: 400px;
  }
}
@media (max-width: 1024px) {
  
}
@media (max-width: 840px) {
  .event-group {
    width: 100%;
  }
  .last-section {
    padding-top: 0;
  }
  .last-section button {
    margin: 20px 0;
  }
}
</style>
