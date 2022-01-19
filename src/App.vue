<template>
  <div id="app">
    <div v-if="false">
      <fotografie-menu
        logoText="Björn Hoffmann Fotografie"
        :items="[
          { text: 'Hochzeit', link: '#Hochzeit Fotos' },
          {
            text: 'Facebook',
            link: 'https://www.facebook.com/bjoernscheklingtgut',
          },
          { text: 'asd', link: '#' },
          { text: 'asd', link: '#' },
        ]"
      />

      <fotografie-header
        :items="[
          {
            heading: 'Familienbilder',
            text: 'Wenn aus Liebe Leben wird',
            backgroundImage:
              'https://jacquelinekokott.de/wp-content/uploads/2021/01/008A9495-1-scaled.jpg',
            buttons: [
              {
                text: 'Zu den Bildern',
                layout: 'normal',
                link: '#Hochzeit Fotos',
              },
            ],
          },
          {
            heading: 'Newborn',
            text: 'Wenn aus Liebe Leben wird',
            backgroundImage:
              'https://images.pexels.com/photos/50601/brothers-boys-kids-baby-50601.jpeg',
            buttons: [
              {
                text: 'Zu den Bildern',
              },
            ],
          },
          {
            heading: 'Newborn',
            text: 'Wenn aus Liebe Leben wird',
            backgroundImage:
              'https://images.pexels.com/photos/50601/brothers-boys-kids-baby-50601.jpeg',
            buttons: [
              {
                text: 'Zu den Bildern',
              },
            ],
          },
          {
            heading: 'Newborn',
            text: 'Wenn aus Liebe Leben wird',
            backgroundImage:
              'https://images.pexels.com/photos/50601/brothers-boys-kids-baby-50601.jpeg',
            buttons: [
              {
                text: 'Zu den Bildern',
              },
            ],
          },
        ]"
      />

      <fotografie-image-with-text
        imagePosition="left"
        width="lg"
        heading="Björnsche mein Name, Gude!"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Plane
                  idem, inquit, et maxima quidem, qua fieri nulla maior potest.
                  Istam voluptatem perpetuam quis potest praestare sapienti?
                  Semper enim ita adsumit aliquid, ut ea, quae prima dederit,
                  non deserat."
        image="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg"
        :buttons="[
          { text: 'Button', layout: 'bold' },
          { text: 'Button' },
          { text: 'Button', layout: 'thin' },
        ]"
      />

      <fotografie-gallery
        heading="Hochzeit Fotos"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Plane
                  idem, inquit, et maxima quidem, qua fieri nulla maior potest.
                  Istam voluptatem perpetuam quis potest praestare sapienti?
                  Semper enim ita adsumit aliquid, ut ea, quae prima dederit,
                  non deserat."
        :images="imgs"
        :buttons="[
          { text: 'Button', layout: 'bold' },
          { text: 'Button' },
          { text: 'Button', layout: 'thin' },
        ]"
      />

      <fotografie-teaser
        width="md"
        heading="Lorem Ipsum dollor met"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tertium autem omnibus aut maximis rebus iis, quae secundum naturam sint"
        :buttons="[
          { text: 'Button', layout: 'bold' },
          { text: 'Button' },
          { text: 'Button', layout: 'thin' },
        ]"
      />
    </div>

    <!-- DJ Seite -->
    <div v-if="true">
      <dj-menu
        logoText="Björnsche Klingtgut"
        :items="[
          { text: 'Hochzeit', link: '#Hochzeit Fotos' },
          {
            text: 'Facebook',
            link: 'https://www.facebook.com/bjoernscheklingtgut',
          },
          { text: 'asd', link: '#' },
          { text: 'asd', link: '#' },
        ]"
      />

      <dj-header
        :logo="require('./assets/dj-logo.png')"
        :video="require('./assets/dj-video.mp4')"
        text="Deine DJ im Odenwald"
        :buttons="[
          { text: 'Button', layout: 'bold' },
          { text: 'Button' },
          { text: 'Button', layout: 'thin' },
        ]"
      />

      <fotografie-paragraph heading="asdasda" text="asdasd" />

      <dj-gallery
        heading="Bilder"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Plane
                  idem, inquit, et maxima quidem, qua fieri nulla maior potest.
                  Istam voluptatem perpetuam quis potest praestare sapienti?
                  Semper enim ita adsumit aliquid, ut ea, quae prima dederit,
                  non deserat."
        :images="imgs"
        :buttons="[{ text: 'Mehr Bilder', layout: 'thin' }]"
      />

      <dj-image-with-text
        imagePosition="left"
        width="xl"
        heading="Björnsche mein Name, Gude!"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Plane
                  idem, inquit, et maxima quidem, qua fieri nulla maior potest.
                  Istam voluptatem perpetuam quis potest praestare sapienti?
                  Semper enim ita adsumit aliquid, ut ea, quae prima dederit,
                  non deserat."
        image="https://images.pexels.com/photos/1649691/pexels-photo-1649691.jpeg"
        :buttons="[
          { text: 'Button', layout: 'bold' },
          { text: 'Button' },
          { text: 'Button', layout: 'thin' },
        ]"
      />

      <dj-image-with-text
        imagePosition="right"
        width="lg"
        heading="Fotobox"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Plane
                  idem, inquit, et maxima quidem, qua fieri nulla maior potest.
                  Istam voluptatem perpetuam quis potest praestare sapienti?
                  Semper enim ita adsumit aliquid, ut ea, quae prima dederit,
                  non deserat."
        image="https://images.pexels.com/photos/1812527/pexels-photo-1812527.jpeg"
      />

      <dj-teaser
        heading="Kontakt"
        text="Dein Fotograf im Odenwald für Hochzeiten, Newborn-Shooting, Babybauch uvm."
        :buttons="[{ text: 'Instagram' }, { text: 'Kontakt' }]"
      />

      <div class="py-32 bg-dark"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    imgs: [
      {
        description: "Foo",
        url: "https://images.pexels.com/photos/1649691/pexels-photo-1649691.jpeg",
      },
      {
        description: "Foo",
        url: "https://images.pexels.com/photos/1812527/pexels-photo-1812527.jpeg",
      },
      {
        description: "Foo",
        url: "https://images.pexels.com/photos/1812527/pexels-photo-1812527.jpeg",
      },
      {
        description: "Foo",
        url: "https://images.pexels.com/photos/1812527/pexels-photo-1812527.jpeg",
      },
      {
        description: "Foo",
        url: "https://images.pexels.com/photos/1812527/pexels-photo-1812527.jpeg",
      },
      {
        description: "Foo",
        url: "https://images.pexels.com/photos/1812527/pexels-photo-1812527.jpeg",
      },
    ],
  }),
};
</script>
