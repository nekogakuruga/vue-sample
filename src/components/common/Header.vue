<template>
    <header
    class="header flex p-3 justify-between border-b-2 border-black border-solid">
    <div class="logo">
      <router-link to="/">rogo</router-link>
    </div>
    <nav class="">
      <ul class="flex gap-4">
        <li class="">
          <router-link to="/about">About</router-link>
        </li>
        <li class="">
          <router-link to="/article">Article</router-link>
        </li>
      </ul>
    </nav>
        

  </header>
</template>