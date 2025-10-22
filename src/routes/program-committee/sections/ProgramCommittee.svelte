<script>
  let organizers = [
    { name: 'Philipp Schaer', affiliation:'TH Köln (University of Applied Sciences)', image: 'philip.jpeg', slug: 'philip' },
    { name: 'Purvanshi Mehta', affiliation:'lica.world', image: 'purvanshi.jpeg', slug: 'purvanshi' },
    { name: 'Cassiano O. Becker', affiliation:'Senior Applied Scientist, Microsoft', image: 'cassiano.jpeg', slug: 'cassiano' },
    { name: 'Mohammad Ali Balafar', affiliation:'Professor, Tabriz University, Iran', image: 'mohammad.jpeg', slug: 'mohammad' },
    { name: 'Hiba Khalid', affiliation:'Bertelsmann SE & Co.', image: '', slug: '' },
    { name: 'Sindri Magnusson', affiliation:'Stockholm University', image: '', slug: '' },
    { name: 'Dietlind Zühlke', affiliation:'TH Köln (University of Applied Sciences)', image: '', slug: '' },
    { name: 'Christin Kreutz', affiliation:'TH Mittelhessen', image: '', slug: '' },
    { name: 'Jalil Nourmohammadi Khiarak', affiliation:'Aptiv', image: '', slug: '' },
    { name: 'Javad Salimi', affiliation:'University of Kashan', image: '', slug: '' },
    { name: 'Sami Alsalamin', affiliation:'Gisma University of Applied Sciences', image: '', slug: '' },
    { name: 'Majid Ramezani', affiliation:'Institute for Advanced Studies in Basic Sciences', image: '', slug: '' },
    { name: 'Mehrdad Khadivi', affiliation:'University of Tabriz', image: '', slug: '' },
    { name: 'Nolwenn Bernard', affiliation:'TH Köln (University of Applied Sciences)', image: '', slug: '' },
    { name: 'Sayeh Sobhani', affiliation:'Stockholm University', image: '', slug: '' },
    { name: 'Nazila Pourhaji Aghayengejeh', affiliation:'University of Tabriz', image: '', slug: '' },
  ];
</script>

<section class="py-16 bg-gray-100">
  <div class="max-w-screen-lg mx-auto px-6">
    <ul class="divide-y divide-gray-200">
      {#each organizers as organizer}
        <li class="px-4 py-3 odd:bg-gray-50 even:bg-white">
          <strong><span style='font-size:15px; color:#2D8CD0'> {organizer.name}
         </span></strong>
          <span class="text-gray-700"> – {organizer.affiliation}</span>
        </li>
      {/each}
    </ul>
  </div>
</section>