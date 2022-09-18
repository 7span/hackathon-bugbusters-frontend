<template>
  <section class="py-12" id="how-it-works">
    <div class="container">
      <h2
        class="text-4xl lg:text-6xl font-extrabold text-primary-500 text-center"
      >
        <span class="text-2xl lg:text-3xl text-dark-500 italic">How</span> It
        Works
      </h2>

      <div class="max-w-3xl mx-auto p-4 rounded-xl shadow-2xl mt-10">
        <client-only>
          <video controls class="w-full" poster="/images/video-banner.jpeg">
            <source src="/images/tiny-miny-video.mp4" type="video/mp4" />
          </video>
        </client-only>
      </div>
    </div>
  </section>
</template>