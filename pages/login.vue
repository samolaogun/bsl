<template>
   <section class="section section--full" >
    <div id="dubois" transition="bounce"> </div>
    <div class="pattern--horizontal pattern--dot"></div>
    <div class="center-vertical">
      <div  class="margin-v-medium">
        <h1 class="text-center">You know what to do</h1>
        <form method="GET" action="" class="form">
          <input placeholder="Email" type="email" class="form__input" />
          <input placeholder="Password" type="password" class="form__input" />
          <input type="submit" value="Login" class="form__btn" />
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import Navigation from "~/components/Navigation.vue";
import Foot from "~/components/Footer.vue";

export default {
  components: {
    Navigation,
    Foot
  }
  ,
  transition: 'bounce'
};
</script>

<style scoped>
:root {
  --border: 4px solid black;
}

::selection {
  background-color: wheat;
}

* {
  box-sizing: border-box;
  font-family: monospace;
}

.flexCol {
  display: flex;
  flex-direction: column;
}

body {
  margin: 0;
  width: 100vw;
  min-height: 100vh;
  /* padding: 16px; */
}

.section {
  /* border: 4px solid black; */
  width: 100%;
  position: relative;
}

.section--full {
  height: 100vh;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.nav__list {
  display: flex;
  padding: 0;
  list-style-type: none;
}

.nav__item {
  position: relative;
  padding: 0;
  padding-right: 32px;
}

.nav__item:hover .nav__subnav,
.nav__subnav:hover {
  display: block;
}

.nav__link {
  text-decoration: none;
  color: black;
  font-weight: 600;
}

.nav__link::after {
  content: ".";
}

.nav__login {
  display: flex;
  align-items: center;
}

.nav__login__more {
  height: auto;
  margin-right: 16px;
}

.nav__login__btn {
  background-color: black;
  color: white;
  font-size: 12px;
  padding: 6px 16px;
  border: none;
}

.header {
  height: 32px;
  margin-bottom: 16px;
}

.header__logo {
  height: 100%;
}

.nav__subnav {
  position: absolute;
  top: 28px;
  font-weight: 600;
  display: none;
  padding: 16px;
  border: var(--border);
  background-color: white;
}

.nav__subnav__item {
  white-space: nowrap;
  list-style-type: none;
  padding-bottom: 16px;
}

.nav__subnav__item:last-child {
  padding-bottom: 0;
}

.pattern {
  background-repeat: repeat;
}

.pattern--dot {
  background-image: url(~/assets/dot.svg);
}

.pattern--horizontal {
  height: 200px;
  width: 100%;
}

.form {
  display: flex;
  flex-direction: column;
  width: 400px;
}

.form__input,
.form__btn {
  height: 40px;
  display: block;
}

.form__input {
  border: 2px solid black;
  margin-bottom: 10px;
  padding: 0 10px;
}

.form__btn {
  margin-top: 10px;
  color: white;
  text-align: center;
  background-color: black;
}

.full-height {
  height: 100%;
}

.center-vertical {
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  font-family: Athelas;
  font-weight: 100;
  font-size: 36px;
}

.text-center {
  text-align: center;
}

#dubois {
  position: absolute;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

#dubois::after {
  content: "";
  position: absolute;
  /* pointer-events: none; */
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: 200px;
  background-image: url(~/assets/Bitmap.png);
  transform: translateY(0px);
}

#dubois::after:hover {
  transform: translateY(100px);
}

.margin-v-medium {
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>
