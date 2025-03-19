<script>
  let organizers = [
    { name: 'Meysam Asgari-Chenaghlu', affiliation:'Staff Machine Learning Scientist, Zendesk, Germany', image: 'meysam.jpeg', slug: 'meysam' },
    { name: 'Vipul Agarwal', affiliation:'Principal Applied Science Manager - Microsoft, Redmond WA, USA', image: 'vipul.jpeg', slug: 'vipul' },
    { name: 'Mohammad Aliannejadi', affiliation:'Assistant Professor, University of Amsterdam, The Netherlands', image: 'alian.jpg', slug: 'alian'},
    // { name: 'Savas Yildirim', affiliation:'Professor, Istanbul Bilgi University, Turkey', image: 'savas.jpg', slug: 'savas' },
     
  ];
</script>

<section class="py-16 bg-gray-100">
  <div class="max-w-screen-xl mx-auto px-6">
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each organizers as organizer}
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="{organizer.image}" alt={organizer.name} class="w-full h-64 object-cover">
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-gray-800">{organizer.name}</h3>
              <p class="text-gray-600 mb-4">{organizer.affiliation}</p>
            </div>
        </div>
      {/each}
    </div>
  </div>
</section>
