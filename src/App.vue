<template>
  <router-view/>
</template>

<style lang="scss">
#app {
  width: 100vw;
  height: 100%;
  min-height: 100%;
  background-color: $background-page;

  @media screen and (max-width: 768px){
    height: auto;
  }
}
</style>
