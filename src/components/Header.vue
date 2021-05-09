<template>
  <header class="header">
    <div class="logo">
      <router-link to="/">rogo</router-link>
    </div>
    <nav class="menu">
      <ul class="menu__nav">
        <li class="menu__item">
          <router-link to="/about">About</router-link>
        </li>
        <li class="menu__item">
          <router-link to="/article">Article</router-link>
        </li>
        <li class="menu__item">
          <router-link to="/option">Option</router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </header>
</template>
