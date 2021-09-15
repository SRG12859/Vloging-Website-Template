const place_mountain_pic = document.getElementById("tagline");

const images_mountain = ["https://images.unsplash.com/photo-1613310023042-ad79320c00ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", "https://images.unsplash.com/photo-1610809027249-86c649feacd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"];

const random_mountain = () => {
  let randomizer_mountain_pic = Math.floor(
    Math.random() * images_mountain.length
  );
  let selected_mountain_pic = images_mountain[randomizer_mountain_pic];
  place_mountain_pic.setAttribute(
    "style",
    "background-image: url(" + selected_mountain_pic + ")"
  );
};

// Making A Mobile Nav Ham-Burger Menu Working

const ham_burger = document.getElementById('ham_burger');

ham_burger.addEventListener("click", () => {
  let ul = document.getElementById('nav-ul');
  ham_burger.classList.toggle('animate-ham');
  ul.classList.toggle('open');
});

// Making an event for font-awesome icon change after it is hovered on social media
const hoverer = document.getElementById("socialmedia-opener");
const change_FontAwesome_Social_Media_Hover = () => {
  console.log("You Have Hovered On ", hoverer);
};
hoverer.addEventListener("mouseenter", () => {
  change_FontAwesome_Social_Media_Hover();
});

// All the function are necess to run after the page is loaded
// setInterval(()=>{console.clear()},10000);
random_mountain();
