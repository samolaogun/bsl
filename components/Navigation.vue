<template>
  <nav class="container">
    <ul class="list">
      <li class="list-item">
        <nuxt-link to="/about/">About</nuxt-link>
        <ul class="sublist">
          <li>
            <nuxt-link to="/about/meet-our-board">Meet Our Board</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about/mission">Mission</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about/constitution">Constitution</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about/contact">Contact</nuxt-link>
          </li>
        </ul>
      </li>
      <li class="list-item">
        <nuxt-link to="/whats-new/">What's New?</nuxt-link>
        <ul class="sublist">
          <li>
            <nuxt-link to="/whats-new/featured-work">Featured Work</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/whats-new/featured-students">Featured Students</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/whats-new/upcoming-events">Upcoming Events</nuxt-link>
          </li>
        </ul>
      </li>
      <li class="list-item">
        <nuxt-link to="/alumni/">Alumni</nuxt-link>
        <ul class="sublist">
          <li>
            <nuxt-link to="/alumni/donate">Donate</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/alumni/connect">Connect</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/alumni/programming">Programming</nuxt-link>
          </li>
        </ul>
      </li>
      <li class="list-item">
        <nuxt-link to="/programs/">Alumni</nuxt-link>
        <ul class="sublist">
          <li>
            <nuxt-link to="/programs/ubuntu">Donate</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/programs/bsl-conference">BSL Conference</nuxt-link>
          </li>
        </ul>
      </li>
      <li class="list-item">
        <nuxt-link to="/shop/">Shop</nuxt-link>
      </li>
      <li class="list-item">
        <nuxt-link to="/blog/">Blog</nuxt-link>
      </li>
    </ul>
    <div>
      <nuxt-link class="button" to="/login/">Login</nuxt-link>
    </div>
  </nav>
</template>

<style scoped>

.container {
  display: flex;
  justify-content: space-between;
}

.button {
  padding: 10px;
  background-color: black;
  color: white;
  text-decoration: none;
  display: block;
}

.list {
  position: relative;
  display: flex;
  list-style-type: none;
  padding: 0;
}

.list-item {
  padding: 10px 10px;
}

.list-item:hover .sublist {
  display: block;
}

.sublist {
  position: absolute;
  padding: 10px;
  list-style-type: none;
  display: none;
  background-color: white;
  border: 1px solid black;
}
</style>
