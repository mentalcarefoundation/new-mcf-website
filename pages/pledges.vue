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
            <a href="http://bit.ly/mcfdp2" target="_blank">suicide free pledge</a>
          </btn>
          <btn>
            <a href="http://bit.ly/mcfdp1" target="_blank">mentally strong pledge</a>
          </btn>
        </div>
      </div>
    </page-header>
    <section class="last-section wrapper">
      <h2 class="sub-head">How well do you know mental health?</h2>
      <div class="modal-box" @click="openModal">
        <btn>
          <span>Take the quiz</span>
        </btn>
      </div>
      <modal :open-modal="modalOpen" :questions="questions" @close="closeModal($event)"></modal>
    </section>
    <section class="last-section wrapper">
      <h2 class="sub-head">Need resources?</h2>
      <btn>
        <a href="https://blog.fitila.life" target="_blank">visit the blog</a>
      </btn>
    </section>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import Btn from '~/components/Button.vue'
import Modal from '~/components/Modal.vue'
import {createClient} from '~/plugins/contentful.js'

const client = createClient()

export default {
  components: {
    PageHeader,
    Btn,
    Modal
  },
  asyncData () {
      return Promise.all([
        client.getEntry('71tkM2hK8fDs7ki7p9LXnA'),
        client.getEntries({'content_type': 'quiz', order: 'sys.createdAt'})
      ]).then(([entry, entries]) => {
        const result = entries.items.map((item) => ({...item.fields}))
        return {
          url: entry.fields.headerImage.fields.file.url,
          questions: result
        }
      })
  },
  data() {
    return {
      modalOpen: false
    }
  },
  head: {
    title: 'Be A Voice'
  },
  methods: {
    openModal() {
      this.modalOpen = true
    },
    closeModal(val) {
      this.modalOpen = val
    }
  },
}
</script>

<style scoped>
.sub-head {
  margin: 0 0 16px;
}
.header-group {
  margin-top: 80px;
  width: 150%;
}
.btn-group {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.btn-group button {
  margin-right: 80px;
}
.btn-group button:last-child {
  margin-right: 0;
}
.last-section.wrapper {
  margin-bottom: 80px;
}
.last-section.wrapper:last-child {
  margin-bottom: 0;
}
.last-section .sub-head {
  line-height: 41px;
}
.modal-box {
  width: fit-content;
}
@media (max-width: 1024px) {
  .btn-group {
    justify-content: space-between;
  }
  .btn-group button {
    margin-right: 0;
  }
}
@media (max-width: 840px) {
  .header-group {
    width: auto;
    margin-top: 40px;
  }
  .btn-group button {
    margin-bottom: 30px;
  }
  .btn-group button:last-child {
    margin-bottom: 0;
  }
  .last-section.wrapper {
    margin-bottom: 40px;
  }
}
@media (max-width: 425px) {
  .modal-box {
    width: 100%;
  }
}
</style>
