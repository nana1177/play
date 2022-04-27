<template>
<div class=all>
  <header class="header">
    <NuxtLink
    to=""
    tag="div">
      <h1 class="sakae-home">
        栄東祭
      </h1>
    </NuxtLink>
    <NuxtLink
    to="about"
    tag="div"
    class="about-button">
      About
    </NuxtLink>
    <NuxtLink
    to="news"
    tag="div"
    class="news-button">
      News
    </NuxtLink>
  </header>
  <div class="main">
    <div class="titleWrapper">
    <h1 class="title">
      栄東中学・高等学校<br>
      <span class="color">栄東祭開催決定！</span>
    </h1>
    </div>
    <p class="text">

    </p>
    <div class="under">
    </div>
  </div>
</div>
</template>

<script>
import gsap from "gsap";
export default {
  name: 'NuxtTutorial',
  mounted(){
    gsap.to(".home", {
      duration: 2,
      opacity: 1
  })
  }
}
</script>

<style>
  .all{
    background-color: black;
    position: absolute;
    width: 100%;
  }
  .header{
    background-color: rgba(6, 12, 34, 0.8);
    position: fixed;
    top: 0px;
    width: 100%;
    height: 90px;
    z-index: 997;
  }
  .sakae-home{
    cursor: pointer;
    cursor: hand;
    color: rgb(255, 255, 255);
    font-size: 6.8vh;
    position: absolute;
    top: -4.3vh;
    left: 3vh;
  }
  .about-button{
    color: rgb(255, 255, 255);
    opacity: .5;
    font-size: 40px;
    position: absolute;
    display: inline-block;
    text-decoration: none;
    top: 4.3vh;
    left: 800px;
    cursor: pointer;
  }
  .about-button::after {
    position: absolute;
    bottom: 2px;
    left: 0;
    content: '';
    width: 100%;
    height: 2px;
    background: rgb(255, 255, 255);
    opacity: 0;
    transition: .3s;
  }
  .about-button:hover {
    opacity: 1;
  }
  .about-button:hover::after {
    bottom: 5px;
    opacity: 1;
  }
  .news-button{
    color: rgba(255, 255, 255, 0.8);
    font-size: 40px;
    position: absolute;
    display: inline-block;
    text-decoration: none;
    top: 4.3vh;
    left: 950px;
    cursor: pointer;
  }
  .news-button::after {
    position: absolute;
    bottom: 2px;
    left: 0;
    content: '';
    width: 100%;
    height: 2px;
    background: rgb(255, 255, 255);
    opacity: 0;
    visibility: hidden;
    transition: .3s;
  }
  .news-button:hover::after {
    bottom: 5px;
    opacity: 1;
    visibility: visible;
  }
  .main{
    position: absolute;
    background: url(~@/static/sky.jpg) top center;
    width: 100%;
    height: 100vh;
    background-size: cover;
    z-index: -10;
  }
  .main::before{
    content: "";
    background: rgba(6, 12, 34, 0.8);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: -5;
  }
  .titleWrapper {
    text-align: center;
  }
  .title{
    z-index: 7;
    color: white;
    font-size: 3.4vw;
    position: absolute;
    top: 35vh;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    letter-spacing: 0.01em;
    line-height: 1.3;
  }
  .color{
    color: #fd8caa;
  }
  .under{
  width: 3vh;
  height: 3vh;
  border: 5px solid;
  border-color:  transparent transparent #ffffff #ffffff;
  transform: rotate(-45deg);
  z-index: 7;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  top: 90vh;
  }
</style>