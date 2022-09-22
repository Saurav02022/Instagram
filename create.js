let btn = document.getElementById("create_btn");

btn.disabled = true;

let image_url;

//AddPost

const AddPost = async () => {
  try {
    const id = document.getElementById("id").value;

    const caption = document.getElementById("caption").value;

    const Send_Data = {
      caption,
      id,
      image_url,
    };

    let res = await fetch(`http://localhost:3000/posts`, {
      method: "POST",
      body: JSON.stringify(Send_Data),

      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();
    // console.log("data:", data);
    window.location.href = "index.html";
  } catch (error) {
    alert(error);
  }
};

const handleImage = async (event) => {
  try {
    const image = document.getElementById("image");

    const actual_image = image.files[0];

    const form = new FormData();

    form.append("image", actual_image);

    const apikey = `6aa6295dfca9aa8a53b4be26e24b620b`;

    let url = await fetch(`https://api.imgbb.com/1/upload?key=${apikey}`, {
      method: "POST",
      body: form,
    });

    let data = await url.json();

    //store image in global let
    image_url = data.data.display_url;

    btn.disabled = false;
  } catch (error) {
    alert(error);
  }
};

//Delete a Post

const delete_btn = async () => {
  try {
    const id_delete = document.getElementById("delete").value;

    const res = await fetch(` http://localhost:3000/posts/${id_delete}`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
      },
    });

    const conv = await res.json();
    console.log("conv:", conv);
  } catch (error) {
    console.log("error:", error);
  }
};

//update mean replace

const UpDate = async () => {
  try {
    const id_Update = document.getElementById("id_Update").value;

    const upDate_Cap = document.getElementById("Update_Caption").value;

    const send = {
      caption:upDate_Cap
    }

    const res = await fetch(`http://localhost:3000/posts/${id_Update}`, {
      method: "PATCH",
      body: JSON.stringify(send),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
  } catch (error) {
    console.log("error:", error);
  }
};

