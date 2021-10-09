<template>
  <div class="page">
    <div class="wrapper page-heading first-section">
        <h2 class="heading section-header">Where You Come In</h2>
        <span class="large-text">
          Your donation will help us connect people to hope and support, raise awareness, and improve access to needed 
          resources for people living with mental disorders, change the narrative and create a safe haven for all.
        </span>
        <btn class="heading-btn">
          <a href="https://forms.gle/yobYeHp92JXn7xJz5" target="_blank">Donate now</a>
        </btn>
    </div>
    <div class="wrapper page-heading">
        <h2 class="heading section-header">Our Impact So Far</h2>
        <div class="donate-group">
          <div v-for="donation in donations" :key="donation.fields.id" class="donate">
            <div class="img-box">
              <img v-if="donation.fields.icon" :src="donation.fields.icon.fields.file.url" alt="icon">
              <img v-else src="~/assets/img/404.svg" alt="no-icon">
            </div>
            <div class="value">{{donation.fields.value}}</div>
            <div class="details">{{donation.fields.desc}}</div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Btn from '~/components/Button.vue'
import {createClient} from '~/plugins/contentful.js'

const client = createClient()

export default {
  components: {
    Btn
  },
  asyncData () {
      return client.getEntries({
          'content_type': 'donation',
          order: 'sys.createdAt'
        })
      .then((donations) => {
        return {
          donations: donations.items
        }
      })
  },
  head: {
    title: 'Donate'
  },
}
</script>

<style scoped>
.first-section {
  padding-bottom: 120px;
}
.heading {
  margin-bottom: 40px;
}
.heading-btn {
  margin-top: 40px;
}
.donate-group {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}
.donate {
  width: 25%;
  margin-bottom: 60px;
  padding: 0 10px;
  text-align: center;
  box-sizing: border-box;

}
.donate .img-box {
  width: 120px;
  height: 120px;
  margin: 0 auto 16px;
  border-radius: 50%;
  border: 1px solid transparent;
  background-color: var(--color-pink-100);
  padding: 12px;
}
.donate .img-box img {
  width: 100%;
  height: 100%;
}
.donate .value {
  font-family: Arial, sans-serif;
  font-weight: 700;
  font-size: var(--text-24);
  color: var(--color-blue-dark);
}
.donate .details {
  font-family: Verdana, sans-serif;
  font-size: var(--text-18);
  color: #1D2125;
}
@media (max-width: 1024px) {
  .donate-group {
    justify-content: space-between;
  }
  .donate {
    width: 50%;
    margin-bottom: 40px;
  }
}
@media (max-width: 840px) {
  .first-section {
    padding-bottom: 80px;
  }
  .heading {
    margin-bottom: 20px;
  }
  .donate .img-box {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
  .donate .value {
    font-size: var(--text-18);
  }
  .donate .details {
    font-size: var(--text-14);
  }
}
@media (max-width: 425px) {
  .donate {
    width: 100%;
  }
}
</style>
