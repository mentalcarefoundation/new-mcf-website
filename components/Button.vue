<template>
  <button>
    <slot></slot>
  </button>
</template>


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
    button:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(122, 122, 122, 0.2);
    }
    a {
        font-family: 'Arial', sans-serif;
        font-weight: 700;
        font-size: var(--text-16);
        line-height: var(--text-24);
        color: var(--color-white);
        width: 100%;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
@media (max-width: 425px) {
  button {
    width: 100%;
  }
  a {
    font-size: var(--text-14);
    line-height: var(--text-18);
  }
}
</style>