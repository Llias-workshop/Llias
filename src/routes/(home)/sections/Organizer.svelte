<script>
  let organizers = [
    { name: 'Narjes Nikzad Khasmakhi', affiliation:'Gisma University of Applied Sciences', image: 'narjes.jpg', slug: 'narjes' },
    { name: 'Michael Färber', affiliation:'Technical University of Dresden, ScaDS.AI Center', image: 'michael.jpg', slug: 'michael' },
    { name: 'Mazhar Hameed', affiliation:'Gisma University of Applied Sciences', image: 'mazhar.jpg', slug: 'mazhar' },
    { name: 'Shirin Tahmasebi', affiliation:'PhD candidate in the Department of Computer Science at KTH Royal Institute of Technology', image: 'shirin.jpg', slug: 'shirin' },
    { name: 'Sahar Vahdati', affiliation:'LUH/TIB - Leibniz Information Centre for Science and Technology', image: 'sahar.jpg', slug: 'sahar' },
    { name: 'Nabiha Asghar', affiliation:'Senior Data and Applied Scientist at Microsoft USA', image: 'nabiha.jpg', slug: 'nabiha' },
    { name: 'Sanaz Alipour', affiliation:'Nature Inspired Machine Intelligence - The Institute for Applied Computer Science (NIMI-InfAI)', image: 'sanaz.jpg', slug: 'sanaz' },
  ];
</script>

<section class="py-16 bg-gray-100">
  <div class="max-w-screen-xl mx-auto px-6">
    <h2 class="text-3xl font-extrabold text-center text-gray-800 mb-12">Organizers</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each organizers as organizer}
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <a href={`/organizer?slug=${encodeURIComponent(organizer.slug)}`} class="block">
            <img src="{organizer.image}" alt={organizer.name} class="w-full h-64 object-cover">
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-gray-800">{organizer.name}</h3>
              <p class="text-gray-600 mb-4">{organizer.affiliation}</p>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>
