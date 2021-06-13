
<template>
  <div class="game-bg">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
  </div>
</template>

<script>
export default {
  name: "game-bg",
};
</script>

<style lang='scss' scoped>
.game-bg {
  $color1: #ffffff;
  $color2: #dddddd;
  background-size: 10px 10px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
}
</style>