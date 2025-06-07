<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { page } from '$app/stores';
  import { get } from 'svelte/store';
  import mammoth from 'mammoth';

  let slug = '';
  let content = '';

  onMount(async () => {
    const urlParams = get(page).url.searchParams;
    slug = urlParams.get('slug') || '';

    if (!slug) {
      console.error("Slug not found in URL");
      return;
    }

    try {
      const response = await fetch(`/files/${slug}.docx`);
      if (!response.ok) throw new Error(`Failed to fetch file: ${response.statusText}`);

      const arrayBuffer = await response.arrayBuffer();
      const result = await mammoth.convertToHtml({ arrayBuffer });

      content = result.value;
      await tick();
    } catch (err) {
      console.error('Error reading .docx file:', err);
      content = '<p style="color: red;">Error loading document. Please try again.</p>';
    }
  });
</script>

<div class="doc-wrapper">
  <div class="max-w-screen-xl mx-auto px-6 py-16">
    <div class="bg-white p-8 rounded-lg shadow-lg">
      <div class="doc-content">{@html content}</div>
    </div>
  </div>
</div>

<style>
  .doc-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 16px;
  }
  
  :global(.doc-content) {
    max-width: 100%;
    overflow-x: auto;
    word-wrap: break-word;
  }
  
  :global(.doc-content table) {
    width: 100%;
    border-collapse: collapse;
    overflow-x: auto;
  }
  
  :global(.doc-content th, .doc-content td) {
    padding: 8px;
    text-align: left;
    word-break: break-word;
  }
  
  :global(.doc-content img) {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    border-radius: 8px;
  }

  @media (min-width: 769px) {
    :global(.doc-content img) {
      width: 300px;
      min-width: 300px;
      border-radius: 8px;
    }
  }

  :global(.doc-content h1) {
    font-size: 22px;
    color: #2d8cd0;
    font-weight: bold;
  }
  
  :global(.doc-content h2) {
    padding-top: 10px;
    color: #2d8cd0;
  }

  @media (max-width: 768px) {
    :global(.doc-content table) {
      display: block;
      width: 100%;
      overflow-x: auto;
    }
    :global(.doc-content tr), :global(.doc-content th), :global(.doc-content td) {
      display: block;
      width: 100%;
      text-align: left;
    }
    :global(.doc-content td)::before {
      content: attr(data-label);
      font-weight: bold;
      display: block;
      margin-bottom: 5px;
    }
  }
</style>
