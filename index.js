const data = async () => {
  try {
    const res = await fetch(`http://localhost:3000/posts`);

    const Data = await res.json();
    Display(Data);
  } catch (error) {
    console.log("error:", error);
  }
};

data();

const Catch_posts = document.getElementById("posts");

const Display = (DATA) => {
  Catch_posts.innerHTML = null;

  DATA.map(({ caption, image_url }) => {
    const div = document.createElement("div");

    const img = document.createElement("img");
    img.src = image_url;

    const cap = document.createElement("p");
    cap.innerText = caption;

    div.append(img, cap);

    Catch_posts.append(div);
  });
};

document.body.addEventListener("load", () => {
  window.location.reload();
});

