<template>
  <div>
    <page-header>
      <template #heading>Campus Clubs</template>
      <template #content>
        <p>MCF Campus Clubs promote mental health awareness and education within universities. 
            Our aim is to provide an ongoing space for students to have a stigma-free place to discuss mental health
             and provide a bridge between community mental health resources and your school community. Joining or 
             starting a MCF Campus Club in your school gives you an opportunity to lead mental health related projects.
             MCF campus clubs are not support groups or therapy groups. They serve as a safe space where like minded 
             students can spearhead activities and discussions that combat stigma.</p>
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
    title: 'Campus Clubs'
  },
}
</script>
