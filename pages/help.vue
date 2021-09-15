<template>
  <div>
    <page-header>
      <template #heading>Introducing <span>JO</span>!</template>
      <template #content>
        <p>A free counseling helpline by Mental Care Foundation.</p>
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
    title: 'Get Help'
  },
}
</script>
