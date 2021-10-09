<template>
  <div class="page">
    <page-header class="wrapper" :header-img-url="url">
      <template #heading>Introducing <span>JO</span>!</template>
      <template #content>
        <p>A free counseling helpline by Mental Care Foundation.</p>
      </template>
      <div class="help-section whatsapp page-desc">
        <h3 class="sub-head">
          Start a chat with JO on WhatsApp
          <a :href="helpDetails.whatsappLink" target="_blank">here</a>.
        </h3>
        <p class="subtext">({{helpDetails.whatsappHours}})</p>
      </div>
      <div class="help-section contact">
        <p>Or call</p>
        <div class="phone-group">
          <div class="phone">
            <div class="number">{{helpDetails.weekdayPhone}}</div>
            <p class="days">(Monday - Friday)</p>
          </div>
          <div class="phone">
            <div class="number">{{helpDetails.weekendPhone}}</div>
            <p class="days">(Weekends)</p>
          </div>
        </div>
      </div>
    </page-header>
    <section class="testimonials">
      <div class="wrapper">
        <h2 class="heading section-header">Testimonials</h2>
        <div class="scroll-group">
        <div class="scroll-container">
          <div v-for="testimonial in testimonials" :key="testimonial.fields.testimonialId" class="testimonial-box">
            <div class="testimonial-img-box">
              <img v-if="testimonial.fields.image" :src="testimonial.fields.image.fields.file.url" alt="testimonial-img">
              <img v-else src="~/assets/img/anon.jpg" alt="no-image">
            </div>  
            <div class="testimonial-details">
              <h4>{{testimonial.fields.name}}</h4>
              <div class="bio">"{{testimonial.fields.desc}}"</div>
            </div>   
          </div>
        </div>
      </div>
      </div>
    </section>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import {createClient} from '~/plugins/contentful.js'

const client = createClient()
export default {
  components: {
    PageHeader
  },
  asyncData () {
      return Promise.all([
        client.getEntry('4jIwYrvzHwCg5mbwF8h1qK'),
        client.getEntry('lcDeQdXARFIjTlahYRqyh'),
        client.getEntries({
          'content_type': 'testimonial'
        })
      ]).then(([header, details, testimonials]) => {
        return {
          url: header.fields.headerImage.fields.file.url,
          helpDetails: details.fields,
          testimonials: testimonials.items
        }
      })
    },
  head: {
    title: 'Get Help'
  },
}
</script>

<style scoped>
.page  {
  padding-bottom: 0;
}
.help-section {
  margin-top: 60px;  
  font-weight: 700;
}
.whatsapp h3 {
  margin: 0;
}
.whatsapp a {
  color: var(--color-blue-light);
}
.whatsapp .subtext {
  font-size: var(--text-24);
  color: var(--color-blue-dark);
}
.contact p {
  font-family: Arial, sans-serif;
  font-size: var(--text-24);
  margin-bottom: 5px;
  color: var(--color-black-primary);
}
.phone-group {
  display: flex;
  flex-wrap: wrap;
}
.phone {
  margin-right: 24px;
}
.phone .number {
  font-size: 32px;
  color: var(--color-blue-dark);
  margin-bottom: 5px;
  font-family: Arial, sans-serif;
}
.phone .days {
  font-size: var(--text-18);
  color: var(--color-black-primary);
}
.scroll-container {
  padding: 40px 40px 20px 0;
}
.testimonials {
  background-color: var(--color-blue-100);
}
.testimonials .wrapper {
  padding: 80px 0 120px;
  margin-right: 0;
}
.testimonial-box {
  width: 690px;
  padding: 38px 30px;
  margin-right: 80px;
  background: var(--color-white);
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  display: flex;
  flex-shrink: 0;
  scroll-snap-align: start;
  z-index: 10;
}
.testimonial-img-box {
  margin-right: 16px;
  border-radius: 50%;
}
.testimonial-img-box img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
}
.testimonial-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.testimonial-details h4 {
  font-size: var(--text-24);
  font-weight: 700;
  font-family: Arial, sans-serif;
  color: var(--color-blue-dark);
}
.testimonial-details .bio {
  font-size: var(--text-24);
  line-height: 29px;
  font-family: Verdana, sans-serif;
  color: var(--color-black-primary);
  text-overflow: ellipsis;
  overflow: hidden;    
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  max-height: 145px;
}
@media (max-width: 1024px) {
  .testimonials .wrapper {
    padding: 40px 0 80px;
  }
  .testimonial-box {
    width: 70vw;
    margin-right: 40px;
  }
}
@media (max-width: 840px) {
  .whatsapp .subtext {
    font-size: var(--text-18);
  }
  .phone {
    margin-right: 0;
    margin-bottom: 10px;
  }
  .phone .number{
    font-size: var(--text-24);
  }
  .scroll-container {
    padding: 20px 0;
  }
  .testimonial-box {
    padding: 20px;
  }
  .testimonial-img-box {
    margin-right: 10px;
  }
  .testimonial-img-box img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .testimonial-details h4 {
    font-size: var(--text-18);
  }
  .testimonial-details .bio {
    font-size: var(--text-14);
    -webkit-line-clamp: 4;
    max-height: 116px;
  }
}
</style>
