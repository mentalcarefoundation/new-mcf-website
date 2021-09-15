<template>
    <section>
        <div class="content">
            <h1 class="heading" :style="{marginBottom: headingTextBottom}">
                <slot name="heading"></slot>
            </h1>
            <h3 v-if="subHeading" class="sub-heading">lend your voice</h3>
            <div class="description" :style="{fontSize: textSize}">
                <slot name="content"></slot>
            </div>
            <slot></slot>
        </div>
        <div class="round-img-box">
            <!-- <img :src="headerImgUrl" alt="header-img" /> -->
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
        textSize: {
            type: String,
            default:  '18px'
        },
    }
}
</script>

<style scoped>
section {
    display: flex;
    align-items: flex-start;
    padding: 120px 0;
}
p {
    font-family: Verdana, sans-serif;
}
.content {
    width: 60%;
}
.heading {
    color: var(--color-black-primary);
    font-size: var(--text-48);
    margin-bottom: var(--text-16);
    line-height: 56px;
}
.heading span {
    color: var(--color-pink-dark);
}
.sub-heading {
    text-transform: uppercase;
    line-height: 38px;
    font-size: var(--text-24);
    color: var(--color-blue-dark);
    margin-bottom: 16px;
}
.description {
    font-size: var(--text-18);
    color: var(--color-black-secondary);
    line-height: 38px;
    max-width: 70%;
}
.sub-desc {
    margin-top: 20px;
}
.round-img-box {
    width: 40%;
    border: 1px solid transparent;
    border-radius: 50%;
}
.round-img-box img {
    width: 100%;
}
@media (max-width: 768px) {
    section {
        display: block;
    }
    .content {
        width: 100%;
    }
    .heading {
        font-size: var(--text-28);
    }
    .sub-heading {
        font-size: var(--text-18);
    }
    .description {
        font-size: var(--text-14);
    }
    .round-img-box {
        display: none;
    }
}
</style>