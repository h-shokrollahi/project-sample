<template>
  <footer>
    <hr />
    <div class="footer">
      <img src="/images/logo/big-dark.png" alt="big-dark" />
      <section class="row align-items-start justify-content-start">
        <div class="col-lg-5 offset-1 text-justify mb-3 mb-lg-0 pt-3 about-us">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
          است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
          تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، این صورت می
          توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
          ...
        </div>

        <div class="col-sm-6 col-lg-2 mb-3 mb-lg-0">
          <p class="footer-title">صفحات</p>
          <ul class="footer-links">
            <li><NuxtLink to="/">صفحه اصلی</NuxtLink></li>
            <li><NuxtLink to="/">تماس با ما</NuxtLink></li>
            <li><NuxtLink to="/">درباره ما</NuxtLink></li>
          </ul>
        </div>

        <div class="col-sm-6 col-lg-2 mb-3 mb-lg-0">
          <p class="footer-title">خدمات ما</p>
          <ul class="footer-links">
            <li><NuxtLink to="/">ارسال سریع محصولات</NuxtLink></li>
            <li><NuxtLink to="/">لورم ایپسوم</NuxtLink></li>
            <li><NuxtLink to="/">لورم ایپسوم</NuxtLink></li>
          </ul>
        </div>

        <div class="col-sm-6 col-lg-2 mb-3 mb-lg-0">
          <p class="footer-title">راه های ارتباطی</p>
          <ul class="footer-links">
            <li><span>تهــــــــــــــران، بلوار نلسون مانـــــــدلا، کوچه ایرج</span></li>
            <li><NuxtLink to="tel:09121231245" class="numbers">09121231245</NuxtLink></li>
          </ul>
        </div>
        <hr />
        <div
          class="footer-bottom d-flex flex-column flex-lg-row align-items-center justify-content-between"
        >
          <div class="d-flex align-items-center mb-3 mb-lg-0">
            <img class="ms-3 d-none d-md-block" src="/icons/insta.svg" alt="" />
            <img class="ms-3 d-none d-md-block" src="/icons/whatsapp.svg" alt="" />
            <p class="mb-0 copy-right-text"
              >© تمامی حقوق مادی و معنوی این سایت متعلق به آمازون است.
            </p>
          </div>
          <ul class="footer-bottom-links d-none d-md-flex">
            <li><NuxtLink to="/">قوانین و مقررات</NuxtLink></li>
            <li><NuxtLink to="/">راهنمایی استفاده از سایت</NuxtLink></li>
            <li><NuxtLink to="/">درباره ما بیشتر بدانید</NuxtLink></li>
            <li><NuxtLink to="/">پیگیری سفارشات</NuxtLink></li>
          </ul>
        </div>
      </section>
    </div>
  </footer>
</template>
<style scoped lang="scss">
  .footer {
    padding: 44px 56px 0px;
    section {
      .about-us {
        color: #737373;
        font-size: 18px;
      }
      hr {
        margin: 36px 14px 47px;
      }
      .footer-title {
        font-size: 25px;
        color: #696969;
        font-family: IBMPlexSansArabicExtraLight;
      }
      .footer-links {
        font-size: 20px;
        li:not(:last-child) {
          margin-bottom: 9px;
        }
      }
      .footer-bottom {
        padding-bottom: 25px;
        .copy-right-text {
          font-size: 19px;
          color: #8f8f8f;
        }
        .footer-bottom-links {
          display: flex;
          li:nth-child(n):not(:last-child) {
            margin-left: 65px;
          }
          a {
            font-size: 18px;
            color: #8f8f8f;
          }
        }
      }
    }
  }
</style>
