<script>
  const schedule = [
     {
      time: "09:00 – 9:10",
      session: "Introduction",
      papers: [
        { title: "Welcome and overview by organizers", authors: "" }
     ]
    },
    {
      time: "09:10 – 9:35",
      session: "Keynote Talk (1)",
      papers: [
        { title: "Meysam Asgarichenaghlou", authors: "Invited Speaker" }
     ]
    },
    {
      time: "09:35 – 10:10",
      session: "Two Full Paper Presentations",
      des:"15 min each (includes a 5-minute transition)",
      papers: [
        { title: "Duel-RAG: Retrieval-Augmented Generation for Yu-Gi-Oh!", authors: "Sirui Zhu and Charlie Cheng" },
        {title:"Improving LLM Agents with Reinforcement Learning on Cryptographic CTF Challenges", authors:"Lajos Muzsai, David Imolai and András Lukács"}
      ]
    },
    {
      time: "10:10 – 10:30",
      session: "Poster Flash Talks (3)",
      des:"5 min each Lightning Talks I (includes a 5-minute transition)",
      papers: [
        { title: "D-LEXI-LLM: A Depression-aware and Lexically-Guided Language Model for Analyzing Social Media Posts", authors: "Farzaneh Lashgari, Sebastião Pais, Mehran Pourvahab, António Sousa and Anilson Monteiro" },
        { title: "VIRAL: Vision-grounded Integration for Reward design And Learning", authors: "Valentin Cuzin-Rambaud, Emilien Komlenovic, Alexandre Faure and Bruno Yun" },
        { title: "LLM-based intelligent agents for sustainable last-mile logistics: Insights from parcel locker use and expert evaluation", authors: "Anna Drab-Kurowska, Agnieszka Budziewicz-Guźlecka, Joanna Drobiazgiewicz, Piotr Gutowski, Michał Kuściński and Krzysztof Lorenz" }
      ]
    },
    {
      time: "10:30 – 10:45",
      session: "Coffee Break",
      
    },
    {
      time: "10:45 – 11:15",
      session: "Keynote Talk (2)",
      papers: [
        { title: "Purvanshi Mehta ", authors: "Invited Speaker" }
     ]
    },
    {
      time: "11:15 – 12:22",
      session: "Four Full Paper Presentations",
      des:"15 min each (includes a 7-minute transition)",
      papers: [
        { title: "ID-RAG: Identity Retrieval-Augmented Generation for Long-Horizon Persona Coherence in Generative Agents", authors: "Daniel Platnick, Mohamed Elamine Bengueddache, Marjan Alirezaie, Dava J. Newman, Alex Sandy Pentland and Hossein Rahnama" },
        { title: "Analyzing the Correlation Between Hallucinations and Knowledge Conflicts in Large Language Models", authors: "Lucrezia Laraspata, Giovanna Castellano and Gennaro Vessio" },
        { title: "A Graph-Enhanced LLM-Based Question Answering System for the AI Act", authors: "Nicola Aggio, Alberto De Lazzari and Teresa Scantamburlo" },
        { title: "D-LEXI-LLM: A Depression-aware and Lexically-Guided Language Model for Analyzing Social Media Posts", authors: "Farzaneh Lashgari, Sebastião Pais, Mehran Pourvahab, António Sousa and Anilson Monteiro" }
      ]
    },
    {
      time: "12:22 – 12:30",
      session: "Poster Flash Talks (2)",
      des:"5 min each Poster 15",
      papers: [
        { title: "Evaluating Representational Fairness in Multilingual LLMs via Cloze-Based Trait Attribution", authors: "Saba Ghanbari Haez, Simone Magnolini, Monica Consolandi and Mauro Dragoni" },
        { title: "Ranking Fairness in AI Hiring: A Benchmark of LLMs, Embeddings, and Classical Methods", authors: "Sabera Jamila Zinia and Mahmoudreza Babaei" }
      ]
    },
    {
      time: "12:30 – 12:35",
      session: "Closing Remarks",
      papers: [
        { title: "Summary, acknowledgments, and announcements", authors: "" }
      ]
    }
  ];
</script>


<section>
    <div class="relative z-10 max-w-screen-xl mx-auto p-4 py-12 space-y-6">
    {#each schedule as session}
        <div class="flex flex-col md:flex-row border border-gray-300 rounded-lg bg-white overflow-hidden">
        
        <!-- ساعت سمت چپ -->
        <div class="text-white md:w-48 text-center py-4 font-bold flex-shrink-0" style="background-color: #2E8DD0;">
            <p>{session.time}</p>
        </div>

        <!-- مقالات سمت راست -->
        <div class="flex-1 p-4 space-y-4">
            <div class="text-center">
                <b class="text-lg mt-1" style="color: #2E8DD0;">{session.session}</b>
                <p class="text-gray-600 text-sm">{session.des}</p>
            </div>
            {#each session.papers as paper}
            
            <div class="text-center md:text-left border-b border-dashed pb-2 last:border-b-0">
               
                <p class="font-semibold">{paper.title}</p>
                {#if paper.authors}
                <p class="text-gray-600 text-sm">{paper.authors}</p>
                {/if}
            </div>
            {/each}
        </div>
        </div>
    {/each}
    </div>
</section>