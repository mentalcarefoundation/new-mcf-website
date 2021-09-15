<template>
  <div>
    <page-header sub-heading>
      <template #heading>Give Mental Health a Voice</template>
      <template #content>
        <p>Lend your voice is MCF’s effort to end suicide and encourage people to pay attention to their mental 
            health while creating hope for those affected by mental illness. Through powerful words and actions, 
            we can shift the social barriers for those living with mental health conditions.</p>
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
    title: 'Be A Voice'
  },
}
</script>
