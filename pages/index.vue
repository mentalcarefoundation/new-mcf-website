<template>
  <div class="page">
    <page-header class="wrapper" heading-text-bottom="24px" :header-img-url="url">
      <template #heading>Mental Care Foundation</template>
      <template #content>
        <p class="large-text">Mental Care Foundation offers basic, free, safe, and anonymous support to help you better manage the 
        psychological and social difficulties you might be facing.</p>
        <p class="sub-desc large-text">Our community is here to support you through anything, big or small.</p>
      </template>
      <div class="btn">
        <btn>
          <NuxtLink to="/about">Join Now</NuxtLink>
        </btn>  
      </div>    
    </page-header>
    <section class="first-section wrapper">
      <h2 class="heading section-header">Our Solutions</h2>
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
    <section class="second-section ul-section">
      <div class="wrapper">
        <h2 class="heading section-header colored">Introducing Fitila</h2>
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
          <li>Our trained listeners don’t judge, they don't try to solve problems, neither do they tell you what to do. 
            They just listen and give you a safe space you need to say your mind.</li>
          <li>Your chat is anonymous and entirely free.</li>
        </ul>
        <btn>
          <NuxtLink to="/fitila">Get started now</NuxtLink>
        </btn>
      </div>
    </section>
    <section class="third-section wrapper">
      <h2 class="heading section-header">Volunteers of the Month</h2>
      <div class="scroll-group">
        <div class="scroll-container">
          <div v-for="volunteer in volunteers" :key="volunteer.fields.volunteerId" class="volunteer-box">
            <div class="volunteer-img-box">
              <img v-if="volunteer.fields.image" :src="volunteer.fields.image.fields.file.url" alt="volunteer-img">
              <img v-else src="~/assets/img/anon.jpg" alt="no-image">
            </div>  
            <div class="volunteer-details">
              <h4>{{volunteer.fields.name}}</h4>
              <p class="job">{{volunteer.fields.job}}</p>
              <div class="bio">"{{volunteer.fields.bio}}"</div>
            </div>
            <img class="volunteer-icon" src="~/assets/img/arrow.svg" alt="arrow">   
          </div>
        </div>
      </div>
    </section>

    <section class="last-section wrapper">
      <h2 class="heading section-header">Help Us Do More</h2>
      <btn>
        <NuxtLink to="/donate">Learn how</NuxtLink>
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
        client.getEntry('4Xo2L7568c7fgij7OaSfLO'),
        client.getEntries({
          'content_type': 'volunteer'
        })
      ]).then(([entry, volunteers]) => {
        return {
          url: entry.fields.headerImage.fields.file.url,
          volunteers: volunteers.items
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
.second-section {
  padding: 60px 0;
  background-color: var(--color-blue-100);
}
.second-section .section-header, .third-section .section-header {
  margin-bottom: 40px;
}
.content {
  margin-bottom: 40px;
}
.third-section {
  margin-top: 60px;
  margin-bottom: 60px;
}
.volunteer-box {
  width: 655px;
  padding-right: 200px;
  display: flex;
  flex-shrink: 0;
  scroll-snap-align: start;
  z-index: 10;
  position: relative;
}
.volunteer-box:last-child {
  padding-right: 0
}
.volunteer-img-box {
  margin-right: 40px;
  border-radius: 50%;
}
.volunteer-img-box img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
}
.volunteer-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
.volunteer-details h4 {
  font-size: var(--text-24);
  font-weight: 700;
  font-family: Arial, sans-serif;
  color: var(--color-blue-dark);
}
.volunteer-details .job {
  font-size: var(--text-18);
  font-family: Verdana, sans-serif;
  color: var(--color-black-secondary);
  margin-bottom: var(--text-16);
}
.volunteer-details .bio {
  font-size: var(--text-24);
  line-height: 29px;
  font-family: Verdana, sans-serif;
  color: var(--color-black-primary);
  text-overflow: ellipsis;
  overflow: hidden;    
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  max-height: 58px;
}
.volunteer-icon {
  display: none;
}
.last-section {
  padding-top: 60px;
}
.last-section button {
  margin-top: 40px;
}
@media (max-width: 1200px) {
  .volunteer-box {
    padding-right: 100px;
  }
}
@media (max-width: 1024px) {
  .btn-group {
    flex-direction: column;
    align-items: flex-start;
  }
  .btn-group button {
    margin-bottom: 30px;
  }
  .content {
    margin-bottom: 20px;
  }
  .volunteer-box {
    width: 70vw;
    padding-right: 5vw;
  }
}
@media (max-width: 840px) {
  .volunteer-img-box {
    margin-right: 20px;
  }
  .volunteer-img-box img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  .volunteer-box {
    width: 80vw;
    padding-right: 10vw;
  }
  .volunteer-details h4 {
    font-size: var(--text-18);
  }
  .volunteer-details .job {
    font-size: var(--text-14);
    margin-bottom: 0;
  }
  .volunteer-details .bio {
    font-size: var(--text-14);
    font-weight: 700;
  }
  .volunteer-icon {
    display: inline-block;
    transform: rotate(90deg);
    width: 30px;
    height: 30px;
    align-self: center;
    position: absolute;
    right: 5%;
  }
  .volunteer-box:last-child .volunteer-icon {
    display: none;
  }
  .last-section {
    padding-top: 0;
  }
  .last-section button {
    margin: 20px 0;
  }
}
</style>
