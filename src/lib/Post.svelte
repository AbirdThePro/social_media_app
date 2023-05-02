<script>
  export let name;
  export let text;
</script>

<main>
  <div class="rounded-lg bg-slate-900 w-full p-5 sm:w-96">
    <p class="font-bold text-blue-500 text-lg">
      {name || "Loading name..."}
    </p>
    <br>
    <p>
      {text || "Loading content..."}
    </p>
  </div>
</main>
