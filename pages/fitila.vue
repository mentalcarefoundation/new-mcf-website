<template>
  <div>
    <page-header heading-text-bottom="8px">
      <template #heading>Introducing Fitila</template>
      <template #content>
        <p>Nigeria’s premier on-demand emotional support platform.</p>
      </template>
      <!-- editable content  -->
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
    title: 'Fitila'
  },
}
</script>
