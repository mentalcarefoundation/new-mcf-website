<template>
  <div class="page">
    <page-header class="wrapper" heading-text-bottom="24px" :header-img-url="url">
      <template #heading>Mental Care Foundation</template>
      <template #content>
        <p>This platform offers basic, free, safe, and anonymous support to help you better manage the 
        psychological and social difficulties you might be facing.</p>
        <p class="sub-desc">Our community is here to support you through anything, big or small.</p>
      </template>
      <div class="btn">
        <btn>
          <NuxtLink to="/about">Join Now</NuxtLink>
        </btn>  
      </div>    
    </page-header>
    <section class="first-section wrapper">
      <h2 class="section-header">Our Solutions</h2>
      <div class="description">
        We are intrepidly putting a stop to the stigma. At Mental Care Foundation, we hold the opinion
         that everyone has a role to play to change the narrative of mental health in Nigeria. <br>Together, 
         we can help each other emotionally, we can stop the stigma, and be the most powerful instrument of change. <br>
         Here’s how:
      </div>
      <div class="btn-group">
        <btn>
          <NuxtLink to="/fitila">fitila</NuxtLink>
        </btn> 
        <btn>
          <NuxtLink to="/events">MCF events</NuxtLink>
        </btn> 
        <btn>
          <NuxtLink to="/clubs">MCF campus clubs</NuxtLink>
        </btn> 
      </div>
    </section>
    <section class="second-section">
      <div class="wrapper">
        <h2 class="section-header colored">Introducing Fitila</h2>
        <h3 class="sub-head">A listening ear to your deepest troubles</h3>
        <div class="description content">
          Fitila connects you with anonymous listeners who truly understand and are ready to give free 
          emotional support until you are back on your feet.
        </div>
        <div class="description content">
          Do you need someone to talk to in a language that gives you the freedom to express yourself?
        </div>
        <ul class="description content">
          <li>FITILA trained volunteer listeners are available 24 /7 to give emotional support over online chat.</li>
          <li>Our trained listeners don’t judge, they don't try to solve problems, neither do they tell you want to do. 
            They just listen and give you a safe space you need to say your mind.</li>
          <li>Your chat is anonymous and entirely free.</li>
        </ul>
        <btn>
          <NuxtLink to="/fitila">Get started now</NuxtLink>
        </btn>
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
  
  asyncData ({env}) {
    return client.getEntry('4Xo2L7568c7fgij7OaSfLO')
      .then(entry => {
          return {
            url: entry.fields.headerImage.fields.file.url
          }
        })
    },
  head: {
    title: 'Home'
  }
}
</script>

<style scoped>
.first-section {
  margin-bottom: 60px;
}
.first-section h2 {
  margin-bottom: 16px;
}
.btn-group {
  margin-top: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.btn {
  margin-top: 40px;
}
.second-section {
  padding: 60px 0;
  background-color: var(--color-blue-100);
}
.second-section ul {
  margin-left: 25px;
}
.second-section li {
  list-style-type: disc;
}
.sub-head {
  color: var(--color-black-primary);
  font-size: var(--text-36);
  margin: 40px 0;
}
.content {
  margin-bottom: 40px;
}
</style>
