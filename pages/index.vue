<template>
  <div>
    <page-header heading-text-bottom="24px" text-size="24px" >
      <template #heading>Mental Care Foundation</template>
      <template #content>
        <p>This platform offers basic, free, safe, and anonymous support to help you better manage the 
        psychological and social difficulties you might be facing.</p>
        <p class="sub-desc">Our community is here to support you through anything, big or small.</p>
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
    title: 'Home'
  },
}
</script>
