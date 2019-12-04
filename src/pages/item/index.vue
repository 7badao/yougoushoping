<template>
  <div>
    <swiper indicator-dots autoplay circular>
      <block v-for="(item,index) in 5" :key="index">
        <swiper-item>
          <img
            src="https://img11.360buyimg.com/cms/jfs/t1/85802/40/4492/18422/5de71243Ea9c532ac/0d5377f3de34353b.jpg!q95.webp"
            alt
          />
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>