<template>
  <div class="relative ">
    <img class="object-cover w-full h-52 max-h-52" src="../assets/Play-area-6.webp" alt="Play area with slide, kitchen, horse, and house">
    <div class="mb-8 px-4 pb-12 md:mx-6 md:px-6 lg:mx-8 lg:px-8">
      <div class="text-center my-6 relative">
        <div class="text-6xl">Welcome to Play Palace Alaska</div>
          <p
          class="mt-0 py-6 line-height-5 font-bold text-xl text-center mx-auto text-seconadry"
          style="max-width: 500px"
          >
            Lorem ipsum odor amet, consectetuer adipiscing elit. Congue sit lacinia maximus molestie egestas aliquet.
          </p>
      </div>
      <div class="flex flex-column flex-wrap gap-6 justify-center w-full ">
         <div class="card md:max-w-md lg:max-w-lg">
          <div class="card-img">
            <img class="w-full h-44 object-cover" src="../assets/Rules.jpg" alt="Play Palace Rules">
          </div>
          <div class="card-body">Lorem ipsum odor amet, consectetuer adipiscing elit. Porttitor inceptos molestie mauris rutrum aptent elementum aptent ad? Egestas orci semper aenean lacinia dictum accumsan; et viverra.</div>
          <!-- <div class="card-footer"></div> -->
          <div class="card-footer">
            <a href="/about">Rules and Safety</a>
          </div>
         </div>
         <div class="card md:max-w-md lg:max-w-lg">
          <div class="card-img">
            <img class="w-full h-44 object-cover" src="../assets/Birthday-3.webp" alt="Play Palace birthday setup">
          </div>
          <div class="card-body">Lorem ipsum odor amet, consectetuer adipiscing elit. Porttitor inceptos molestie mauris rutrum aptent elementum aptent ad? Egestas orci semper aenean lacinia dictum accumsan; et viverra.</div>
          <!-- <div class="card-footer"></div> -->
          <div class="card-footer">
            <a href="/pricing">Pricing</a>
          </div>
         </div>
         <div class="card md:max-w-md lg:max-w-lg">
          <div class="card-img">
            <img class="w-full h-44 object-cover" src="../assets/Play-area-6.webp" alt="Play Palace play area">
          </div>
          <div class="card-body">Lorem ipsum odor amet, consectetuer adipiscing elit. Porttitor inceptos molestie mauris rutrum aptent elementum aptent ad? Egestas orci semper aenean lacinia dictum accumsan; et viverra.</div>
          <!-- <div class="card-footer"></div> -->
          <div class="card-footer">
            <a href="/gallery">View our Palace</a>
          </div>
         </div>
         <div class="card md:max-w-md lg:max-w-lg">
          <div class="card-img">
            <img class="w-full h-44 object-cover" src="../assets/info-chart.JPG" alt="Play Palace infomation chart">
          </div>
          <div class="card-body">Lorem ipsum odor amet, consectetuer adipiscing elit. Porttitor inceptos molestie mauris rutrum aptent elementum aptent ad? Egestas orci semper aenean lacinia dictum accumsan; et viverra.</div>
          <!-- <div class="card-footer"></div> -->
          <div class="card-footer">
            <a href="/contact">
              <span>Get in touch</span></a>
          </div>
         </div>
         
      </div>

    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  padding: 6px;
  // max-width: 400px;
  max-height: 370px;
  border-radius: 0 0 8px 8px;

  .card-img, img {
    border-radius: 8px 8px 0 0;
  }
  
  .card-body, .card-footer {
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
