<template>
  <h1 v-show="false"> عنوان سایت </h1>
  <!-- -------------- start slider -------------- -->
  <!-- :modules="[$SwiperNavigation, $SwiperPagination]" -->
  <Swiper :slides-per-view="1" :space-between="0">
    <SwiperSlide>
      <sliderCard />
    </SwiperSlide>
  </Swiper>
  <!-- -------------- end slider -------------- -->
  <!-- -------------- start search -------------- -->
  <HomePageSearch />
  <!-- -------------- end search -------------- -->
  <!-- -------------- start why us -------------- -->
  <HomePageWhyUs :data="data?.features" />
  <!-- -------------- end why us -------------- -->
  <!-- -------------- start countries -------------- -->
  <HomePageCountries :data="data?.countries" />
  <!-- -------------- end countries -------------- -->
  <!-- -------------- start list passengers -------------- -->
  <ListPassengers :data="data?.passengers" />
  <!-- -------------- end list passengers -------------- -->
  <!-- -------------- start banner -------------- -->
  <HomePageBanner :data="data?.banners?.[0]" />
  <!-- -------------- end banner -------------- -->
  <!-- -------------- start product slider -------------- -->
  <ProductSlider :data="data?.products" />
  <!-- -------------- end product slider -------------- -->
  <!-- -------------- start banner -------------- -->
  <HomePageBanner :data="data?.banners?.[1]" />
  <!-- -------------- end banner -------------- -->
</template>
<script setup>
  import HomePageWhyUs from '@/components/HomePage/WhyUs/index.vue'
  import { reactive } from 'vue'

  const data = reactive({
    features: [
      {
        id: 1,
        image: '/images/why-us/1.svg',
        subTitle: 'ارسال',
        mainTitle: 'سریع سفارش'
      },
      {
        id: 2,
        image: '/images/why-us/2.svg',
        subTitle: 'تضمین',
        mainTitle: 'سلامت کالا'
      },
      {
        id: 3,
        image: '/images/why-us/3.svg',
        subTitle: 'پرداخت',
        mainTitle: 'امن و مطمئن'
      },
      {
        id: 4,
        image: '/images/why-us/4.svg',
        subTitle: 'خرید',
        mainTitle: 'از سایت های معتبر'
      }
    ],
    countries: [
      {
        id: 1,
        image: '/images/countries/USA.png',
        title: 'USA',
        col: 'col-12 col-sm-6 col-lg-3'
      },
      {
        id: 2,
        image: '/images/countries/China.png',
        title: 'China',
        col: 'col-12 col-sm-6 col-lg-3'
      },
      {
        id: 3,
        image: '/images/countries/Dubai.png',
        title: 'Dubai',
        col: 'col-12 col-lg-6'
      },
      {
        id: 4,
        image: '/images/countries/AU.png',
        title: 'AU',
        col: 'col-12 col-lg-6'
      },
      {
        id: 5,
        image: '/images/countries/GER.png',
        title: 'GER',
        col: 'col-12 col-lg-6'
      }
    ],
    passengers: {
      title: {
        MainTitle: 'لیست مسافرهای کاردرست ما',
        subTitle: 'Our features'
      },
      passengers: [
        {
          id: 1,
          fullName: 'YAHYA',
          image: '/images/users/1.png',
          rate: 4,
          time: {
            date: '2024.05.03',
            hour: '9:00 PM , Sunday'
          },
          origin: 'DBI',
          destination: 'Tehran'
        },
        {
          id: 2,
          fullName: 'YAHYA',
          image: '/images/users/2.png',
          rate: 3,
          time: {
            date: '2024.05.03',
            hour: '9:00 PM , Sunday'
          },
          origin: 'DBI',
          destination: 'Tehran'
        },
        {
          id: 3,
          fullName: 'YAHYA',
          image: '/images/users/3.png',
          rate: 4,
          time: {
            date: '2024.05.03',
            hour: '9:00 PM , Sunday'
          },
          origin: 'DBI',
          destination: 'Tehran'
        },
        {
          id: 4,
          fullName: 'YAHYA',
          image: '/images/users/4.png',
          rate: 5,
          time: {
            date: '2024.05.03',
            hour: '9:00 PM , Sunday'
          },
          origin: 'DBI',
          destination: 'Tehran'
        }
      ]
    },
    banners: [
      {
        id: 1,
        title: 'پرواز خود را ثبت کنید',
        subTitle: 'به اندازه ی هزینه ی سفر خود، کسب درآمد کنید.',
        image: '/images/banner/1.png',
        button: {
          isShow: 1,
          title: 'ثبـــــــــــــت پرواز',
          link: '/'
        }
      },
      {
        id: 2,
        title: 'خرید از فروشگاه بزرگ آمازون',
        subTitle: 'بیشترین تنوع و با کیفیت ترین محصولات',
        image: '/images/banner/2.png',
        button: {
          isShow: 1,
          title: 'ثبت سفارش',
          link: '/'
        }
      }
    ],
    products: [
      {
        id: 1,
        title: 'هدفون ریزر مدل کراکن',
        subTitle: 'Headphone Razer',
        image: '/images/products/1.png',
        discount: '50',
        price: '1.480.000',
        calculatedPrice: '1.380.000'
      },
      {
        id: 2,
        title: 'هدفون ریزر مدل کراکن',
        subTitle: 'Headphone Razer',
        image: '/images/products/2.png',
        discount: '50',
        price: '1.480.000',
        calculatedPrice: '1.380.000'
      },
      {
        id: 3,
        title: 'هدفون ریزر مدل کراکن',
        subTitle: 'Headphone Razer',
        image: '/images/products/3.png',
        discount: '50',
        price: '1.480.000',
        calculatedPrice: '1.380.000'
      },

      {
        id: 4,
        title: 'هدفون ریزر مدل کراکن',
        subTitle: 'Headphone Razer',
        image: '/images/products/4.png',
        discount: '50',
        price: '1.480.000',
        calculatedPrice: '1.380.000'
      },
      {
        id: 2,
        title: 'هدفون ریزر مدل کراکن',
        subTitle: 'Headphone Razer',
        image: '/images/products/2.png',
        discount: '50',
        price: '1.480.000',
        calculatedPrice: '1.380.000'
      }
    ]
  })
</script>
