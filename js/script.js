const loadCategory = async () => {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/phero-tube/categories"
    );
    const data = await res.json();
    displayCategory(data.categories);
  } catch (error) {
    console.log(error);
  }
};

const loadVideos = async () => {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/phero-tube/videos"
    );
    const data = await res.json();
    displayVideos(data.videos);
  } catch (error) {
    console.log(error);
  }
};

// time converter
function getTimestring(time) {
  const hour = parseInt(time / 3600);
  let remainingSecond = time % 3600;
  const minute = parseInt(remainingSecond / 60);
  remainingSecond = remainingSecond % 60;
  
  return `${hour} hours, ${minute} minutes, ${remainingSecond} seconds`;
}

const displayVideos = (videos) => {
  console.log(videos);
  const videoContainer = document.getElementById("videos");

  videos.forEach((item) => {
    console.log(item);

    const card = document.createElement("div");
    card.innerHTML = `
    <figure class='h-[200px] relative'>
      <img class='object-cover w-full h-full' src="${item.thumbnail}" alt="Thumbnail" />
      ${
        item.others.posted_date && item.others.posted_date.length !== 0
          ? `<span class='absolute text-white text-xs p-1 rounded-t-sm bg-black rounded-sm right-2 bottom-2'>${getTimestring(item.others.posted_date)}</span>`
          : ''
      }
    </figure>
    <div class="px-0 py-2 flex gap-2">
      <div>
        <img class='w-10 h-10 rounded-full object-cover' src="${item.authors[0].profile_picture}" alt="Author Profile" />
      </div>
      <div>
        <h2 class='font-bold'>${item.title}</h2>
        <div class='flex items-center gap-2'>
          <p>${item.authors[0].profile_name}</p>
          ${
            item.authors[0].verified
              ? `<img class='h-6 w-6 object-cover' src='https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png' alt="Verified Icon"/>`
              : ''
          }
        </div>
        <p>${item.others.views ? item.others.views + " views" : ""}</p>
      </div>
    </div>
  `;
    videoContainer.append(card);
  });
};

const displayCategory = (categories) => {
  const categoryContainer = document.getElementById("category");

  categories.forEach((item) => {
    const buttonContainer = document.createElement("button");
    buttonContainer.innerHTML = `
     <button class='btn border-2 border-red-600'>${item.category}</button>
     `;
    categoryContainer.append(buttonContainer);
  });
};

loadCategory();
loadVideos();
