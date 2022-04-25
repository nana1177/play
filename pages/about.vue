<template>
  <div>
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
      about
    </NuxtLink>
    <NuxtLink
    to="news"
    tag="div"
    class="news-button">
      news
    </NuxtLink>
  </header>
  <p>about</p>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>