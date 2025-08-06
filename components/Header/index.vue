<template>
  <header class="header d-flex align-items-center justify-content-between">
    <img class="logo" src="/images/logo/big-dark.png" alt="logo" />
    <!-- -------------- start menu -------------- -->
    <nav class="main-menu">
      <ul class="d-flex align-items-center justify-content-between">
        <li>
          <NuxtLink to="/">صفحه اصلی</NuxtLink>
        </li>
        <li class="shop-link">
          <NuxtLink to="/shop">فروشگاه</NuxtLink>
          <img src="/icons/angle-down.svg" alt="angle-down" />
        </li>
        <li>
          <NuxtLink to="/about-us">درباره ما</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact-us">تماس با ما</NuxtLink>
        </li>
      </ul>
    </nav>
    <!-- -------------- end menu -------------- -->
    <!-- -------------- start Actions -------------- -->
    <ul class="actions d-flex align-items-center justify-content-between">
      <li class="d-block d-md-none">
        <img src="/icons/hamburger-menu.svg" alt="hamburger-menu" />
      </li>
      <li class="d-none d-md-block">
        <img @click.prevent="openSearch" src="/icons/search.svg" alt="search" />
      </li>
      <li class="d-none d-md-block"> <img src="/icons/box.svg" alt="box" /> </li>
      <li class="cart-action d-none d-md-block">
        <span class="cart-number">1</span>
        <img src="/icons/cart.svg" alt="cart" />
      </li>
      <li class="d-none d-md-block"> <span>حسن احمدی</span> </li>
      <li class="d-none d-md-block"> <img src="/icons/user.svg" alt="user" /> </li>
      <li class="d-none d-md-block"> <img src="/icons/off.svg" alt="off" /> </li>
    </ul>
    <!-- -------------- end Actions -------------- -->
  </header>
  <!-- -------------- start search -------------- -->
  <div class="search">
    <div class="first-section">
      <div class="search-card">
        <img src="/icons/search.svg" alt="" />
        <input type="text" placeholder="جست و جو کنید..." />
      </div>
    </div>
    <div @click.prevent="closeSearch" class="second-section"></div>
  </div>
  <!-- -------------- end search -------------- -->
</template>
<script setup>
  import { onMounted } from 'vue'

  const openSearch = () => {
    const searchElm = document.querySelector('.search')
    searchElm.style.visibility = 'visible'
    searchElm.style.opacity = 1
  }

  const closeSearch = () => {
    const searchElm = document.querySelector('.search')
    searchElm.style.visibility = 'hidden'
    searchElm.style.opacity = 0
  }

  onMounted(() => {
    window.addEventListener('keyup', (e) => {
      if (e.which == 27) closeSearch()
    })
  })
</script>
<style scoped lang="scss">
  .header {
    padding: 28px 75px 28px 65px;
    box-shadow: 0px 4px 33px 16px #0000000a;
    -webkit-box-shadow: 0px 4px 33px 16px #0000000a;
    -moz-box-shadow: 0px 4px 33px 16px #0000000a;

    @include mediaQuery(300px) {
      padding: 10px 34px 11px;
      .logo {
        width: 100px;
      }
    }
    @include mediaQuery(576px) {
      padding: 28px 40px 28px 35px;
      .logo {
        width: 120px;
      }
    }
    @include mediaQuery(1200px) {
      .logo {
        width: auto;
      }
    }
    .main-menu {
      font-size: 20px;
      list-style-type: none;
      font-weight: 200;
      ul {
        padding: 0;
        li {
          &:nth-child(n):not(:last-child) {
            @include mediaQuery(922px) {
              margin-left: 30px;
            }
            @include mediaQuery(1200px) {
              margin-left: 50px;
            }
          }
          a {
            font-family: IBMPlexSansArabicExtraLight;
            transition: all 0.5s ease 0;
          }
          .router-link-active {
            font-family: IBMPlexSansArabicLight;
            font-weight: 300;
            &::after {
              content: '';
              display: block;
              width: 64px;
              height: 1px;
              background-color: #a8a8a8;
              margin-top: 5px;
            }
          }
        }
      }
      .shop-link {
        a {
          margin-left: 5px;
        }
      }

      @include mediaQuery(300px) {
        display: none;
      }
      @include mediaQuery(922px) {
        display: block;
      }
    }
    .actions {
      li {
        cursor: pointer;
        &:nth-child(n):not(:last-child) {
          margin-left: 16px;
        }

        span {
          background-color: $gray;
          border-radius: 5px;
          padding: 1px 16px 3px 16px;
        }
      }
      .cart-action {
        position: relative;
        .cart-number {
          position: absolute;
          top: -3px;
          right: -13px;
          font-family: MontserratRegular;
          background-color: #ff9900;
          color: #fff;
          border-radius: 4px;
          font-size: 16px;
          padding: 1px 5px;
          line-height: 1;
          text-align: center;
        }
      }
    }
  }
  .search {
    opacity: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    z-index: 2;
    transition: all 0.3s ease 0s;
    visibility: hidden;
    .first-section {
      height: 70%;
      background-color: rgba(0, 0, 0, 0.7);
      // filter: blur(23.3px);
      .search-card {
        border-bottom: 1px solid white;
        padding-bottom: 20px;
        width: 50%;
        margin: auto;
        position: relative;
        padding-top: 20%;
        input {
          background: transparent;
          border: none;
          outline: none;
          color: white;
          &::placeholder {
            color: white;
            opacity: 50%;
          }
        }
        img {
          margin-left: 25px;
          filter: brightness(0) saturate(100%) invert(100%) sepia(94%) saturate(0%)
            hue-rotate(197deg) brightness(107%) contrast(107%);
        }
      }
    }
    .second-section {
      height: 30%;
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
</style>
