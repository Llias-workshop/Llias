<script>
  let organizers = [
    { name: 'Narjes Nikzad Khasmakhi', affiliation:'Gisma University of Applied Sciences', image: 'narjes.jpg', slug: 'narjes' },
    { name: 'Michael Färber', affiliation:'Technical University of Dresden, ScaDS.AI Center', image: 'michael.jpg', slug: 'michael' },
    { name: 'Mazhar Hameed', affiliation:'Gisma University of Applied Sciences', image: 'mazhar.jpg', slug: 'mazhar' },
    { name: 'Sahar Vahdati', affiliation:'LUH/TIB - Leibniz Information Centre for Science and Technology', image: 'sahar.jpg', slug: 'sahar' },
    { name: 'Meysam Asgari-Chenaghlu', affiliation:'Staff Machine Learning Scientist, Zendesk, Germany', image: 'meysam.jpeg', slug: 'meysam' },
    { name: 'Philipp Schaer', affiliation:'Professor, Cologne University of Applied Sciences (TH Köln),Germany ', image: 'philip.jpeg', slug: 'philip' },
    { name: 'Klaus Berberich', affiliation:'Professor, Saarland University of Applied Sciences (htw saar), Germany ', image: 'klaus.jpeg', slug: 'klaus' },
    { name: 'Simon Razniewsky', affiliation:'Professor, Technical University Dresden, Germany', image: 'simon.jpg', slug: 'simon'},
    { name: 'Mohammad Ali Balafar', affiliation:'Professor, Tabriz University, Iran', image: 'mohammad.jpeg', slug: 'mohammad' },
    { name: 'Cassiano O. Becker', affiliation:'Senior Applied Scientist, Microsoft, Brazil', image: 'cassiano.jpeg', slug: 'cassiano' },
    { name: 'Purvanshi Mehta', affiliation:'Cofounder at lica.world, San Francisco, USA', image: 'purvanshi.jpeg', slug: 'purvanshi' },  
    { name: 'Nabiha Asghar', affiliation:'Senior Data and Applied Scientist at Microsoft USA', image: 'nabiha.jpg', slug: 'nabiha' },
  
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
