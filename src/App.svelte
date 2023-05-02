<script>
  import Post from "./lib/Post.svelte";
  import PostMenu from "./lib/PostMenu.svelte";

  // stores messages
  let posts = [];

  // gets messages from server
  const fetchMessages = async () => {
    fetch("/messages")
      .then((res) => res.json())
      .then((json) => {
        posts = json.data[0];
      });
  };

  // fetches messages on startup
  fetchMessages();

  // starts update loop
  setInterval(fetchMessages, 5000);
</script>

<main class="grid place-items-center line">
  {#each posts as post}
    <Post name={post["name"]} text={post["message"]} />
    <br>
  {/each}
  <br>
  <br>
  <br>
  <br>
  <PostMenu />
</main>
