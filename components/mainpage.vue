<template>
<div class=all>
  <div class="main">
    <div class="titleWrapper">
    <h1 class="title">
      栄東中学・高等学校<br>
      <span class="color">栄東祭開催決定！</span>
    </h1>
    </div>
    <div id="target">
    <img src="@/static/logo.png" class="fes-logo">
    <div class="under" @click="under">
    </div>
    <div clas="cover">
      <div class="detail">
        <p class="time">
          開催日
        </p>
        <p class="time-detail">
          ９月１７日<span class="saturday">土</span>・１８日<span class="sunday">日</span>
        </p>
        <p class="caution">
          本年度は、オフラインで校内にて一般公開する予定ではありますが、今後の状況によりやむを得ず変更する場合もあります。
        </p>
        <div class="line"></div>
      </div>
    </div>
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
  },
  methods: {
    under(){
      window.scrollTo({
        top: 100,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style>
  .all{
    background-color: black;
    position: absolute;
    width: 100%;
  }
  .main{
    position: fixed;
    background: url(~@/static/school.jpg) top center;
    width: 100%;
    height: 100vh;
    background-size: cover;
    z-index: -10;
    overflow-y: scroll;
  }
  .main::before{
    content: "";
    background: rgba(6, 12, 34, 0.8);
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: -5;
  }
  .main::-webkit-scrollbar {
    z-index: 999;
  }
  .titleWrapper {
    text-align: center;
  }
  .title{
    z-index: 7;
    color: white;
    font-size: min(8vh, 8vw);
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
  cursor: pointer;
  }
  .cover{
    text-align: center;
  }
  .detail{
    width: min(100%,750px);
  }
  .time{
    font-size: 8.3vh;
    position: absolute;
    z-index: 15;
    color: white;
    top: 97vh;
    font-weight: 600;
  }
  .line{
    border-left: thick solid rgb(255, 255, 255);
    height: 50vh;
    top: 119vh;
    position: absolute;
  }
  .fes-logo{
    width: 30vh;
    position: absolute;
    top: 170vh;
    left: 80vh;
  }
  .time-detail{
    font-size: 5vh;
    color: white;
    position: absolute;
    top: 120vh;
  }
  .saturday{
    font-size: 3vh;
    color: rgb(0, 98, 255);
  }
  .sunday{
    font-size: 3vh;
    color: rgb(255, 0, 0);
  }
  .caution{
    color: white;
    font-size: 4vh;
    position: absolute;
    top: 138vh;
  }
</style>