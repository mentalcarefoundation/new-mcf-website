<template>
  <div class="page">
    <page-header class="wrapper first-section" :header-img-url="url" heading-text-bottom="8px">
      <template #heading>Introducing Fitila</template>
      <template #content>
        <p>Nigeria’s premier on-demand emotional support platform.</p>
      </template>
      <div class="btn">
        <btn>
          <a href="https://fitila.mentalcare.life">Join Now</a>
        </btn>  
      </div> 
      <div class="details">
        <h3 class="sub-head">A listening ear to your deepest troubles</h3>
        <p class="large-text">
          Fitila connects you with anonymous listeners who truly understand and are ready to give free emotional
           support until you are back on your feet.
        </p>
      </div>
    </page-header>
    <section class="wrapper ul-section">
      <div class="large-text">
          Fitila connects you with anonymous listeners who truly understand and are ready to give free 
          emotional support until you are back on your feet.
        </div>
        <div class="large-text">
          Do you need someone to talk to in a language that gives you the freedom to express yourself?
        </div>
        <ul class="large-text">
          <li>FITILA trained volunteer listeners are available 24 /7 to give emotional support over online chat.</li>
          <li>Our trained listeners don’t judge, they don't try to solve problems, neither do they tell you want to do. 
            They just listen and give you a safe space you need to say your mind.</li>
          <li>Your chat is anonymous and entirely free.</li>
        </ul>
        <div class="large-text">
          Read Our Terms and Conditions <NuxtLink to="/terms">here</NuxtLink>.
        </div>
    </section>
    <section class="wrapper pd-60 last-section">
        <h2 class="heading section-header">How It Works</h2>
        <p class="heading-desc large-text">
          Very simple! All you need is internet connection to get started. 
        </p>
        <div class="steps-group">
          <div class="steps">
            <h2 class="sub-head">Help Seeker</h2>
            <ol class="large-text">
              <li>Sign up.</li>
              <li>Connect with a listener. </li>
              <li>Say your mind anonymously.</li>
            </ol>
            <btn>
              <a href="https://fitila.mentalcare.life">Join Now</a>
            </btn>
          </div>
          <div class="steps">
            <h2 class="sub-head">Volunteer Listener</h2>
            <ol class="large-text">
              <li>Sign up. </li>
              <li>Take active listening training and test.</li>
              <li>Connect with a member.</li>
              <li>Chat anonymously. </li>
            </ol>
            <btn>
              <a href="https://fitila.mentalcare.life">Join Now</a>
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
      return client.getEntry('7Ixott1du6XLnHuQ6Easd9')
        .then((entry) => {
        return {
          url: entry.fields.headerImage.fields.file.url
        }
      })
    },
  head: {
    title: 'Fitila'
  },
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
