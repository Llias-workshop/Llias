<script>
  let organizers = [
    { name: 'Cassiano O. Becker', affiliation:'Senior Applied Scientist, Microsoft, Brazil', image: 'cassiano.jpeg', slug: 'cassiano' },
    { name: 'Philipp Schaer', affiliation:'Professor, Cologne University of Applied Sciences (TH Köln),Germany ', image: 'philip.jpeg', slug: 'philip' },
    { name: 'Purvanshi Mehta', affiliation:'Cofounder at lica.world, San Francisco, USA', image: 'purvanshi.jpeg', slug: 'purvanshi' },  
    // { name: 'Klaus Berberich', affiliation:'Professor, Saarland University of Applied Sciences (htw saar), Germany ', image: 'klaus.jpeg', slug: 'klaus' },
    { name: 'Mohammad Ali Balafar', affiliation:'Professor, Tabriz University, Iran', image: 'mohammad.jpeg', slug: 'mohammad' },
    // { name: 'Simon Razniewsky', affiliation:'Professor, Technical University Dresden, Germany', image: 'simon.jpg', slug: 'simon'},  
  ];
</script>

<section class="py-16 bg-gray-100">
  <div class="max-w-screen-md mx-auto px-6">
    <ul class="divide-y divide-gray-200">
      {#each organizers as organizer}
        <li class="px-4 py-3 odd:bg-gray-50 even:bg-white">
          <a href={`/about?slug=${encodeURIComponent(organizer.slug)}`} class="font-semibold text-blue-600 hover:underline">
            {organizer.name}
          </a>
          <span class="text-gray-700"> – {organizer.affiliation}</span>
        </li>
      {/each}
    </ul>
  </div>
</section>