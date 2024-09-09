<template>
  <div class="relative">
    <img
      class="object-cover w-full h-52 max-h-52"
      src="../assets/Play-area-6.webp"
      alt="Play area with slide, kitchen, horse, and house"
    />
    <div class="mb-6 px-4 pb-12 md:px-10 lg:mx-8 lg:px-8">
      <div class="text-center my-6 relative">
        <div class="text-6xl">{{ WelcomeTitle }}</div>
        <p
          class="mt-0 py-6 line-height-5 font-bold text-xl text-center mx-auto text-seconadry"
          style="max-width: 500px"
        >
          {{WelcomeSubtitle}}
        </p>
      </div>

      <div class="flex flex-column flex-wrap gap-6 justify-center w-full">
        <div class="card md:max-w-md lg:max-w-lg">
          <div class="card-img">
            <img
              class="w-full h-44 object-cover"
              src="../assets/Rules-2.jpg"
              alt="Play Palace Rules"
            />
          </div>
          <div class="card-body">
            {{WelcomeCardOneBodyText}}
          </div>
          <div class="card-footer">
            <a href="/about">{{WelcomeCardOneLinkText}}</a>
          </div>
        </div>
        <div class="card md:max-w-md lg:max-w-lg">
          <div class="card-img">
            <img
              class="w-full h-44 object-cover"
              src="../assets/Birthday-3.webp"
              alt="Play Palace birthday setup"
            />
          </div>
          <div class="card-body">
            {{WelcomeCardTwoBodyText}}
          </div>
          <div class="card-footer">
            <a href="/pricing">{{WelcomeCardTwoLinkText}}</a>
          </div>
        </div>
        <div class="card md:max-w-md lg:max-w-lg">
          <div class="card-img">
            <img
              class="w-full h-44 object-cover"
              src="../assets/Play-area-6.webp"
              alt="Play Palace play area"
            />
          </div>
          <div class="card-body">{{WelcomeCardThreeBodyText}}</div>
          <div class="card-footer">
            <a href="/gallery">{{WelcomeCardThreeLinkText}}</a>
          </div>
        </div>
        <div class="card md:max-w-md lg:max-w-lg">
          <div class="card-img">
            <img
              class="w-full h-44 object-cover"
              src="../assets/Rules-3.JPG"
              alt="Play Palace infomation chart"
            />
          </div>
          <div class="card-body">
            {{WelcomeCardFourBodyText}}
          </div>
          <div class="card-footer">
            <a href="/contact"> <span>{{WelcomeCardFourLinkText}}</span></a>
          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center gap-6 mt-6 md:mx-4">
        <img class="max-w-80 md:max-w-96 lg:max-w-none xl:max-w-none" src="../assets/location.png" alt="Play Palace map location">

        <div>
          <div class="flex flex-col justify-center items-center md:justify-start md:items-start lg:justify-start lg:items-start xl:justify-start xl:items-start">
            <div class="text-3xl">{{ WelcomeName }}</div>
            <div class="text-xl">{{ WelcomeAddress }}</div>
          </div>
  
          <div class="flex flex-col justify-center items-center md:justify-start md:items-start lg:justify-start lg:items-start xl:justify-start xl:items-start">
            <div class="text-3xl">{{ WelcomeHours }}</div>
            <div class="flex flex-wrap gap-3 justify-center md:flex-col lg:flex-col xl:flex-col md:gap-1 lg:gap-1 xl:gap-1">
              <div>
                <div class="text-xl">
                  {{ WelcomeDayMon }}
                </div>
                <div class="time">
                  {{ WelcomeDayMonTime }}
                </div>
              </div>
              <div>
                <div class="text-xl">
                  {{ WelcomeDayTue }}
                </div>
                <div class="time">
                  {{ WelcomeDayTueTime }}
                </div>
              </div>
              <div>
                <div class="text-xl">
                  {{ WelcomeDayWed }}
                </div>
                <div class="time">
                  {{ WelcomeDayWedTime }}
                </div>
              </div>
              <div>
                <div class="text-xl">
                  {{ WelcomeDayThu }}
                </div>
                <div class="time">
                  {{ WelcomeDayThuTime }}
                </div>
              </div>
              <div>
                <div class="text-xl">
                  {{ WelcomeDayFri }}
                </div>
                <div class="time">
                  {{ WelcomeDayFriTime }}
                </div>
              </div>
              <div>
                <div class="text-xl">
                  {{ WelcomeDaySat }}
                </div>
                <div class="time">
                  {{ WelcomeDaySatTime }}
                </div>
              </div>
              <div>
                <div class="text-xl">
                  {{ WelcomeDaySun }}
                </div>
                <div class="time">
                  {{ WelcomeDaySunTime }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  WelcomeTitle,
  WelcomeSubtitle,
  WelcomeCardOneLinkText,
  WelcomeCardOneBodyText,
  WelcomeCardTwoLinkText,
  WelcomeCardTwoBodyText,
  WelcomeCardThreeLinkText,
  WelcomeCardThreeBodyText,
  WelcomeCardFourLinkText,
  WelcomeCardFourBodyText,
  WelcomeName,
  WelcomeAddress,
  WelcomeHours,
  WelcomeDayMon,
  WelcomeDayMonTime,
  WelcomeDayTue,
  WelcomeDayTueTime,
  WelcomeDayWed,
  WelcomeDayWedTime,
  WelcomeDayThu,
  WelcomeDayThuTime,
  WelcomeDayFri,
  WelcomeDayFriTime,
  WelcomeDaySat,
  WelcomeDaySatTime,
  WelcomeDaySun,
  WelcomeDaySunTime,
} from "../constants";
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  padding: 6px;
  max-height: 370px;
  border-radius: 0 0 8px 8px;

  .card-img,
  img {
    border-radius: 8px 8px 0 0;
  }

  .card-body,
  .card-footer {
    background-color: var(--colors-content_bg);
    padding: 6px 8px;
  }

  .card-footer {
    border-radius: 0 0 8px 8px;
    display: flex;
    font-size: 28px;

    a {
      margin-left: auto;
    }

    a:hover {
      color: var(--link-color);
      text-decoration: underline;
    }
  }
}
</style>
