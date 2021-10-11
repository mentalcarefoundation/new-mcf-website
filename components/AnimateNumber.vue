<template>
    <span>{{animatedVal}}</span>   
</template>

<script>
export default {
    props: {
        'number': {
            type: String,
            default: '0' 
        }
    },
    data() {
        return {
            animatedVal: 0,
            interval: false,
            observer: null
        }
    },
    mounted() {
      this.observer = new IntersectionObserver(entries => {
        const item = entries[0];
          if (item.isIntersecting) {
            clearInterval(this.interval);
            if(this.number === this.animatedVal) {
              return;
            }
            this.interval = window.setInterval(() => {
              if(this.animatedVal !== this.number) {
                let change = (this.number - this.animatedVal) / 10;
                change = change >= 0 ? Math.ceil(change) : Math.floor(change);
                this.animatedVal = this.animatedVal + change;
              }
            }, 50)
            this.observer.disconnect();
        }
      });
      this.observer.observe(this.$el);
    },
    destroyed() {
      this.observer.disconnect();
    }
}
</script>