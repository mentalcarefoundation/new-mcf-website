<template>
    <section>
        <div class="content">
            <h1 class="heading" :style="{marginBottom: headingTextBottom}">
                <slot name="heading"></slot>
            </h1>
            <h3 v-if="subHeading" class="sub-heading">lend your voice</h3>
            <div class="description page-desc sub-page">
                <slot name="content"></slot>
            </div>
            <slot></slot>
        </div>
        <div class="round-img-box">
            <img :src="headerImgUrl" alt="header-img" >
        </div>
    </section>
</template>

<script>
export default {
    props: {
        headingTextBottom: {
            type: String,
            default: '16px'
        },
        subHeading: Boolean,
        headerImgUrl: {
            type: String,
            default: "~/assets/img/logo.svg"
        }
    }
}
</script>

<style scoped>
section {
    display: flex;
    align-items: flex-start;
    padding-bottom: 120px;
}
p {
    font-family: Verdana, sans-serif;
}
.content {
    width: 60%;
}
.btn {
  margin-top: 40px;
}
.heading span {
    color: var(--color-pink-dark);
}
.sub-heading {
    text-transform: uppercase;
    font-size: var(--text-24);
    color: var(--color-blue-dark);
    margin-bottom: 16px;
}
.page-desc {
   width: 80%;
}
.page-desc a {
    color: var(--color-blue-light);
    font-weight: 700;
    font-family: Verdana, sans-serif;
}
.sub-page .large-text {
    font-size: var(--text-24);
}
.sub-page p {
    font-size: var(--text-18);
}
.sub-desc {
    margin-top: 20px;
}
.round-img-box {
    max-width: 480px;
    max-height: 480px;
    width: 40vw;
    height: 40vw;
    border: 1px solid transparent;
    border-radius: 50%;
}
.round-img-box img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

@media (max-width: 1200px) {
    .page-desc {
        width: 85%;
    }
}
@media (max-width: 1024px) {
    .sub-desc {
        margin-top: 10px;
    }
}
@media (max-width: 840px) {
    .page-desc {
        width: 100%;
    }
    section {
        display: block;
        padding-bottom: 50px;
    }
    .content {
        width: 100%;
    }
    .sub-heading {
        font-size: var(--text-18);
    }
    .sub-page .large-text {
        font-size: var(--text-16);
    }
    .sub-page p {
        font-size: var(--text-14);
    }
    .round-img-box {
        display: none;
    }
}
</style>