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
    <div class="under" @click="under">
    </div>
    <div class="cover">
      <div class="detail">
        <h2 class="time">
          開催日
        </h2>
        <div class="cover-in">
          <p class="time-detail">
            9<span class="small">月</span>17<span class="small">日</span><span class="saturday small">(土)</span>･18<span class="small">日</span><span class="sunday small">(日)</span>
          </p>
          <p class="caution">
            本年度は、オフラインで校内にて一般公開する予定ではありますが、今後の状況によりやむを得ず変更する場合もあります。
          </p>
        </div>
        <div class="logo">
          <h2 class="logo-detail">
            ロゴ
          </h2>
          <div class="cover-in-logo">
            <img src="@/static/logo.png" class="logo-img">
          </div>
        </div>
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
    margin: calc(40vh - (min(8vh, 8vw) / 2)) 0;
  }
  .title{
    z-index: 7;
    color: white;
    font-size: min(8vh, 8vw);
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
  margin: auto;
  text-align: center;
  }
  .detail{
    width: min(95%,1000px);
    margin: 0 auto;
  }
  .cover-in{
    border-left: 3px solid white;
    padding: 1rem;
  }
  .time{
    font-size: min(7vh,7vw);
    z-index: 15;
    color: white;
    font-weight: 600;
  }
  .time-detail{
    font-size: min(7vh,7vw);
    color: white;
    margin: 1rem 0;
    font-weight: 600;
    letter-spacing: .2rem;
  }
  .small{
    font-size: min(4vh,4vw);
  }
  .saturday{
    color: rgb(0, 98, 255);
  }
  .sunday{
    color: #E91E63;
  }
  .caution{
    color: white;
    font-size: min(4vh,4vw);
  }
  .logo-detail{
    font-size: min(7vh,7vw);
    color: white;
  }
  .cover-in-logo{
    text-align: center;
  }
  .logo-img{
    width: 60vh;
  }
</style>