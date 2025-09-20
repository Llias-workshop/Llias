<script>
  let papers = [
    { Aname: 'Sirui Zhu and Charlie Cheng', title:'Duel-RAG: Retrieval-Augmented Generation for Yu-Gi-Oh!'},
    { Aname: 'Hongliu Cao, Ilias Driouich, Robin Singh and Eoin Thomas', title:'Balancing Adaptivity and Alignment: A Multi-Agent System for Personalized LLM Judge design'},
    { Aname: 'Farzaneh Lashgari, Sebastião Pais, Mehran Pourvahab, António Sousa and Anilson Monteiro', title:'D-LEXI-LLM: A Depression-aware and Lexically-Guided Language Model for Analyzing Social Media Posts'},
    { Aname: 'Valentin Cuzin-Rambaud, Emilien Komlenovic, Alexandre Faure and Bruno Yun', title:'VIRAL: Vision-grounded Integration for Reward design And Learning'},
    { Aname: 'Nicola Aggio, Alberto De Lazzari and Teresa Scantamburlo', title:'A Graph-Enhanced LLM-Based Question Answering System for the AI Act'},
    { Aname: 'Daniel Platnick, Mohamed Elamine Bengueddache, Marjan Alirezaie, Dava J. Newman, Alex Sandy Pentland and Hossein Rahnama', title:'ID-RAG: Identity Retrieval-Augmented Generation for Long-Horizon Persona Coherence in Generative Agents'},
    { Aname: 'Lucrezia Laraspata, Giovanna Castellano and Gennaro Vessio', title:'Analyzing the Correlation Between Hallucinations and Knowledge Conflicts in Large Language Models'},
    { Aname: 'Saba Ghanbari Haez, Simone Magnolini, Monica Consolandi and Mauro Dragoni', title:'Evaluating Representational Fairness in Multilingual LLMs via Cloze-Based Trait Attribution'},
    { Aname: 'Narges Fardnia, Fatemeh Seyedin, Matthias Becker, Mahmoudreza Babaei and Adrian Weller', title:'Social Behavior Among Autonomous AI: How Large Language Models Interact in Dynamic Networks'},
    { Aname: 'Lajos Muzsai, David Imolai and András Lukács', title:'Improving LLM Agents with Reinforcement Learning on Cryptographic CTF Challenges'},
    { Aname: 'Anna Drab-Kurowska, Agnieszka Budziewicz-Guźlecka, Joanna Drobiazgiewicz, Piotr Gutowski, Michał Kuściński and Krzysztof Lorenz', title:'LLM-based intelligent agents for sustainable last-mile logistics: Insights from parcel locker use and expert evaluation'},
    { Aname: 'Sabera Jamila Zinia and Mahmoudreza Babaei', title:'Ranking Fairness in AI Hiring: A Benchmark of LLMs, Embeddings, and Classical Methods'},
    { Aname: 'Seyyed Jalal Tabatabaee and Mahmoudreza Babaei', title:'Benchmarking Persian LLMs for Sentiment Analysis'},
  ];
</script>

<section class="py-16 bg-gray-100">
  <div class="max-w-screen-lg mx-auto px-6">
    <ul class="divide-y divide-gray-200">
      {#each papers as paper}
        <li class="px-4 py-3 odd:bg-gray-50 even:bg-white">
          <strong><span style='font-size:15px; color:#2D8CD0'>{paper.title}</span></strong>
          <br/>
          <span class="text-gray-400"> Authors:</span>  <span class="text-gray-700" style="font-size: 15px;">{paper.Aname}</span>      
        </li>
      {/each}
    </ul>
  </div>
</section>