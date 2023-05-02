<script>
  const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

  let adjective = randomItem([
    "Crazy",
    "Cool",
    "Amazing",
    "Awesome",
    "Super",
    "Ultimate",
    "Better",
    "Insane",
    "Drippy",
    "Treacherous",
    "Dank",
  ]);

  let noun = randomItem([
    "Bobert",
    "Gamer",
    "Noob",
    "Pro",
    "Nerd",
    "Person",
    "Dinosaur",
    "Bozo",
    "Quandale",
    "Robot",
    "Ohio",
    "Pancake",
    "Memer",
  ]);

  let number = Math.floor(Math.random() * 1000);

  let username = `${adjective}${noun}${number}`;

  let text = "";

  const noNewLine = (e) => {
    e.target.value = e.target.value.replace("\n", "");
    text = e.target.value;
  };

  let canPost = true;
  const post = (e) => {
    if (canPost) {
      fetch("/send", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: username || "Anonymous",
          message: text || "",
        }),
      });
      document.querySelector("textarea").value = "";
      canPost = false;
      setTimeout(() => (canPost = true), 3000);
    } else {
      let warning = document.querySelector("#warning");
      warning.classList.remove("hidden");
      setTimeout(() => warning.classList.add("hidden"), 1000);
    }
  };
</script>

<main class="fixed bottom-0">
  <p id="warning" class="text-lg text-center text-red-400 hidden">
    Please wait
  </p>
  <div class="flex w-96">
    <textarea
      maxlength="100"
      placeholder="Type your message"
      rows="3"
      on:input={noNewLine}
      class="resize-none text-white bg-slate-700 placeholder:text-neutral-300 p-3 rounded-l-lg w-96"
    />
    <br />
    <button
      class="rounded-r-lg p-5 bg-blue-500 active:bg-blue-300"
      on:click={post}>Post!</button
    >
  </div>
</main>
