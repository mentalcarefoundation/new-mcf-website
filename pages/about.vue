<template>
  <div class="page">
    <page-header class="wrapper first-section" :header-img-url="url">
        <template #heading>About Us</template>
        <template #content>
          <p class="large-text">Founded in 2019, Mental Care Foundation (MCF) is one of Nigeria’s leading mental health organisations 
            dedicated to building better lives for millions of Nigerians affected by mental illness. Our organization
             owns and runs 
             <NuxtLink to="/fitila">FITILA </NuxtLink>
             – Nigeria’s premier on-demand emotional health service that anonymously and securely
              connects individuals to real listener in one-on-one live chat.</p>
        </template>
    </page-header>
    <div class="wrapper description desc">
      <p class="large-text">
            MCF educates thousand of communities across Nigeria through 
            <NuxtLink to="/events">MCF awareness events </NuxtLink> and <NuxtLink to="/clubs">MCF campus clubs </NuxtLink> 
            to ensure that individuals get the information and support that they need to successfully fight stigma and 
            encourage understanding. <br>
            We work with <NuxtLink to="/fitila">volunteers </NuxtLink> in Nigeria to lead campaigns on national public policy
             for people with mental illness.
      </p>
    </div>
    <section class="second-section ul-section pd-60">
      <div class="wrapper">
        <h2 class="heading section-header">The Problem</h2>
        <div class="summary">
          <p class="large-text">
            December 26th of 2018, a Facebook friend took her own life and that incidence changed my opinion about 
            mental health - from just being curious about mental health to becoming an advocate.
          </p>
          <sub> – Balikis Abubakar, Co-founder and Executive Director, MCF</sub>
        </div>
        <ul class="summary">
          <li class="large-text">Close to 800 000 people die due to suicide every year, which is 
            <a href="https://www.who.int/mental_health/prevention/suicide/suicideprevent/en/">one person every 40 seconds</a>.
          </li>
          <li class="large-text">There are indications that for each adult who died by suicide there may have been
            <a href="https://www.who.int/mental_health/prevention/suicide/suicideprevent/en/">
             more than 20 others attempting suicide
            </a>.
          </li>
          <li class="large-text">About 
            <a href="http://saharareporters.com/2018/11/13/30-nigerians-suffer-mental-illness-%E2%80%93-fg">30% of Nigerians suffer mental illness</a>.
            </li>
        </ul>
        <div class="summary">
          <p class="large-text">
            Psychiatrists have linked the rising prevalence of mental health disorders in Nigeria particularly to stigma 
            and lack of public awareness. In Nigeria, people who attempt suicide are being arrested rather than being treated.<br>
            Many Nigerians still believe that mental illnesses like depression and schizophrenia are demonic and cant happen to 
            “holy people”. <br>
            People can’t talk freely about their mental health because of the fear of being stigmatized. 
            Even teens are expected to shake it off and what we see is more and more people take their lives.
          </p>
        </div>
        <NuxtLink to="/fitila" class="large-text summary-link">WE NEED TO PUT AN END TO THIS!</NuxtLink>
      </div>
    </section>
    <section id="mission" class="wrapper pd-60">
      <h2 class="sub-head">Our Mission</h2>
      <p class="large-text">
        Transform the understanding of mental illness through awareness programs and technology-centered solutions 
        that pave way for prevention, recovery, and a safe space for all.
      </p>
    </section>
    <section id="vision" class="wrapper pd-60">
      <h2 class="sub-head">Our Vision</h2>  
      <p class="large-text">
        MCF envisions a Nigeria in which mental illness is prevented, cured, and given attention at a national scale,
         to eventually kill the stigma, and promote mental wellness.
      </p>    
    </section>
    <section id="team" class="wrapper pd-60">    
      <h2 class="heading section-header">Meet The Team</h2>
      <div class="members">
        <div v-for="member in members" :key="member.fields.memberId" class="member">
          <div class="img-box">
            <img :src="member.fields.image.fields.file.url" alt="member-image">
          </div>
          <div class="name">{{member.fields.name}}</div>
          <div class="position">{{member.fields.position}}</div>
          <a :href="member.fields.bioUrl" class="link">Read Bio</a>
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
        client.getEntry('q590RiGyAEhCgX9WtMY8a'),
        client.getEntries({
          'content_type': 'teamMembers',
          order: 'sys.createdAt'
        })
      ]).then(([entry, members]) => {
        return {
          url: entry.fields.headerImage.fields.file.url,
          members: members.items
        }
      })
    },
  head: {
    title: 'About Us'
  },
}
</script>

<style scoped>
.page {
  padding-bottom: 0;
}
.first-section {
  padding-bottom: 20px;
}
.desc {
  margin-bottom: 60px;
}
.desc a, .summary-link {
  color: var(--color-blue-light);
  font-family: Verdana, sans-serif;
  transition: all 0.5s ease;
}
.desc a:hover, .summary-link:hover {
  color: var(--color-pink-dark);
}
.desc a, .summary-link{
  font-weight: 700;
}
.second-section {
  background-color: var(--color-blue-100);
}
.second-section .heading {
  color: var(--color-black-secondary);
}
.summary {
  margin-bottom: 40px;
}
.summary sub {
  color: var(--color-black-primary);
  font-family: Verdana, sans-serif;
  font-size: var(--text-18);
  margin-bottom: 25px;
}
#vision .sub-head, #mission .sub-head {
  margin: 0 0 16px;
}
#team .heading {
  margin-bottom: 40px;
}
.members {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 0 -10px;
}
.member {
  width: 25%;
  margin-bottom: 80px;
  padding: 0 10px;
  text-align: center;
  box-sizing: border-box;
}
.member .img-box {
  width: 200px;
  height: 200px;
  margin: 0 auto 24px;
  border-radius: 50%;
  border: 1px solid transparent;
}
.member .img-box img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.member .name {
  font-family: Arial, sans-serif;
  font-weight: 700;
  font-size: var(--text-24);
  color: var(--color-blue-dark);
}
.member .position {
  font-family: Verdana, sans-serif;
  font-size: var(--text-18);
  color: #1D2125;
}
.member .link {
  font-family: Verdana, sans-serif;
  font-weight: 700;
  font-size: var(--text-20);
  text-decoration-line: underline;
  color: var(--color-pink-dark);
  transition: all 0.5s ease;
}
.member .link:hover {
  color: var(--color-pink-light);
}
@media (max-width: 1024px) {
  .members {
    justify-content: space-between;
  }
  .member {
    width: 50%;
  }
}
@media (max-width: 840px) {
  #vision, #mission {
    padding-bottom: 0;
  }
  .member .img-box {
    width: 150px;
    height: 150px;
    margin-bottom: 10px;
  }
  .member .name {
    font-size: var(--text-18);
  }
  .member .position {
    font-size: var(--text-14);
  }
  .member .link {
    font-size: var(--text-16);
  }
}
@media (max-width: 425px) {
  .member {
    width: 100%;
  }
}
</style>
