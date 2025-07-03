<script lang="ts">
  let { aboutText }: { aboutText: string } = $props();
</script>

<section id="about">
  <h2 class="text-3xl font-semibold border-b-2 border-gray-200 pb-2 mb-6">About Me</h2>
  <p class="text-lg">
    {aboutText}
  </p>
</section>