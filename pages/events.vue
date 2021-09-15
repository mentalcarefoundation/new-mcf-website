<template>
  <div>
    <page-header>
      <template #heading>Awareness Events</template>
      <template #content>
        <p>We organize mental health national events by partnering with individuals, private organizations, 
            and public bodies. We particularly focus on giving hope and support to the vulnerable, while creating
             an avenue to discuss critical issues that affect the mental health of Nigerians. We are committed to 
             spreading relevant information and building a stigma-free society.</p>
      </template>
    </page-header>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'

export default {
  components: {
    PageHeader
  },
  head: {
    title: 'Events'
  },
}
</script>
