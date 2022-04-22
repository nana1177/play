<template>
<div class=all>
  <header class="header">
    <h1>re:start</h1>
    <NuxtLink
    to="about"
    tag="div"
    class="about-button">
      about
    </NuxtLink>
    <NuxtLink
    to="news"
    tag="div"
    class="news-button">
      news
    </NuxtLink>
  </header>
  <div class="main">
    <img src='~@/static/sky.jpg' class="home">
    <div class="titleWrapper">
    <h1 class="title">
      -開催要項-
    </h1>
    </div>
    <p class="text">

    </p>
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
    background-color: rgba(255, 255, 255, 0.8);
    position: fixed;
    top: 0px;
    width: 100%;
    height: 90px;
    z-index: 5;
  }
  .about-button{
    color: rgb(0, 0, 0);
    font-size: 40px;
    position: absolute;
    display: inline-block;
    text-decoration: none;
    top: 30px;
    left: 800px;
    cursor: pointer;
    cursor: hand;
  }
  .about-button::after {
    position: absolute;
    bottom: 2px;
    left: 0;
    content: '';
    width: 100%;
    height: 2px;
    background: #333;
    opacity: 0;
    visibility: hidden;
    transition: .3s;
  }
  .about-button:hover::after {
    bottom: 5px;
    opacity: 1;
    visibility: visible;
  }
  .news-button{
    color: rgb(0, 0, 0);
    font-size: 40px;
    position: absolute;
    display: inline-block;
    text-decoration: none;
    top: 30px;
    left: 950px;
    cursor: pointer;
    cursor: hand;
  }
  .news-button::after {
    position: absolute;
    bottom: 2px;
    left: 0;
    content: '';
    width: 100%;
    height: 2px;
    background: #333;
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
     position: relative;
  }
  .home{
    width: 100%;
    height: 100%;
    position: relative;
    opacity: 0;
    z-index: 0;
  }
  .titleWrapper {
    text-align: center;
  }
  .title{
    z-index: 1;
    color: white;
    font-size: 5vw;
  }
</style>