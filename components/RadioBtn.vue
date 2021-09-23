<template>
  <div class="radio-btns">      
    <label class="radio">
        <span class="radio__label">True</span>
        <span ref="btn1" class="radio__input" >
        <input id="btn1" type="radio" name="radio" @click="selectOption('true', $event)"/>
        <span class="radio__control"></span>
        </span>
    </label>
    <label class="radio">
        <span class="radio__label">False</span>
        <span ref="btn2" class="radio__input" >
            <input id="btn2" type="radio" name="radio" @click="selectOption('false', $event)"/>
            <span class="radio__control"></span>
        </span>
    </label>
  </div>
</template>

<script>

export default {
    props: {
        checkAnswer: {
          type: Function,
          default: ()=> {}
        },
        clearBtn: Boolean
  },
  watch: {
    clearBtn(newValue) {
      if(newValue === false) {
        document.getElementById('btn1').classList.remove('selected')
        document.getElementById('btn2').classList.remove('selected')
      }
    }
  },
  methods: {
    selectOption(val, e) {
      if (this.$refs.btn1.contains(e.target)) {
        document.getElementById('btn1').classList.add('selected')
      }
      if (this.$refs.btn2.contains(e.target)) {
        document.getElementById('btn2').classList.add('selected')
      }
      this.checkAnswer(val)
    }

  }
}
</script>

<style scoped>
.radio-btns {
    display: flex;
    flex-direction: column;
}
.radio {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  height: 40px;
  box-sizing: border-box;
  padding: 5px 10px;
  background: #FFFFFF;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 12px;  
  font-size: var(--text-18);
}
.radio__label {
    color: var(--color-black-secondary);   
    font-family: Verdana, sans-serif;
    font-size: var(--text-18);
    line-height: 161.9%;
}
.radio__input input {
    opacity: 0;
    width: 0;
    height: 0;
}
.radio__input {
  display: flex;
}
.radio__control {
  display: grid;
  place-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #888888;
  cursor: pointer;
}
input.selected + .radio__control::before {
    content: "";
    width: 20px;
    height: 20px;
    box-shadow: inset 20px 20px var(--color-blue-light);
    border-radius: 50%;
    transition: all 0.4s ease;
    transform: scale(0);
}
input.selected + .radio__control::before {
  transform: scale(1);
}
@media (max-width: 1024px) {
  
}
@media (max-width: 840px) {
    .radio__label{
        font-size: var(--text-14);
    }
}
</style>
