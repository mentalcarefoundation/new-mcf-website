<template>
  <div>
    <section>
      <page-header>
        <template #heading>About Us</template>
        <template #content>
          <p>Founded in 2019, Mental Care Foundation (MCF) is one of Nigeria’s leading mental health organisations 
            dedicated to building better lives for millions of Nigerians affected by mental illness. Our organization
             owns and runs FITILA – Nigeria’s premier on-demand emotional health service that anonymously and securely
              connects individuals to real listener in one-on-one live chat.</p>
        </template>
      </page-header>
    </section> 
    <section id="vision"></section>
    <section id="mission"></section>
    <section id="team"></section>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'

export default {
  components: {
    PageHeader
  },
  head: {
    title: 'About Us'
  },
}
</script>
