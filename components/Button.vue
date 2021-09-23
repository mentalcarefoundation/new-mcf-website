<template>
  <button :class="{colorless: colorless}">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    colorless: Boolean
  }
}
</script>

<style scoped>
    button {
        width: 300px;
        height: 48px;
        outline: none;
        cursor: pointer;
        border: 1px solid transparent;
        border-radius: 4px;
        background-color: var(--color-blue-dark);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .2s ease-in;
    }
    .colorless {
      width: 100px;
      height: 40px;
      border: 2px solid var(--color-white);
      background-color: transparent;
    }
    button:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(122, 122, 122, 0.2);
    }
    a, span {
        font-family: 'Arial', sans-serif;
        font-weight: 700;
        font-size: var(--text-16);
        color: var(--color-white);
        width: 100%;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
@media (max-width: 425px) {
  button {
    width: 100%;
  }
  a, span {
    font-size: var(--text-14);
  }
}
</style>