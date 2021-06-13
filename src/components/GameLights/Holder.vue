
<template>
  <div class="game-lights-holder">
    <slot />
  </div>
</template>

<script>
export default {
  name: "LightsHolder",
};
</script>

<style scoped lang="scss">
.game-lights-holder {
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: repeat(2, auto);
  width: 100%;
  padding: 40px;
  grid-gap: 40px;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}
</style>