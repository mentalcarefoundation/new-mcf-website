<template>
  <div class="page">
    <page-header class="wrapper" sub-heading :header-img-url="url">
      <template #heading>Give Mental Health a Voice</template>
      <template #content>
        <p>Lend your voice is MCF’s effort to end suicide and encourage people to pay attention to their mental 
            health while creating hope for those affected by mental illness. Through powerful words and actions, 
            we can shift the social barriers for those living with mental health conditions.</p>
      </template>
      <div class="header-group">
        <h3 class="sub-head">Take the Pledges</h3>
        <div class="btn-group">
          <btn>
            <a href="http://bit.ly/mcfdp2">suicide free pledge</a>
          </btn>
          <btn>
            <a href="http://bit.ly/mcfdp1">mentally strong pledge</a>
          </btn>
        </div>
      </div>
    </page-header>
    <section class="last-section wrapper">
      <h2 class="sub-head">How well do you know mental health?</h2>
      <!-- <btn>
        <a href="https://bit.ly/2MON6UU">start a campus club</a>
      </btn> -->
    </section>
    <section class="last-section wrapper">
      <h2 class="sub-head">Need resources?</h2>
      <btn>
        <a href="https://blog.fitila.life">visit the blog</a>
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
      return client.getEntry('71tkM2hK8fDs7ki7p9LXnA')
      .then((entry) => {
        return {
          url: entry.fields.headerImage.fields.file.url
        }
      })
  },
  head: {
    title: 'Be A Voice'
  },
}
</script>

<style scoped>
.header-group {
  margin-top: 80px;
}
.btn-group {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
