
// btn visibler


const categoryBtn = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
        .then((res) => res.json())
        .then((data) => displayCategory(data.categories))
        .catch(err => console.log(err))

}
function displayCategory(categories) {
    categories.forEach(item => {
        const btn = document.createElement("button")
        btn.innerHTML = `
        <button class="flex gap-5 active:scale-95 duration-150  items-center px-9 py-2 rounded-lg border-2 border border-gray-300 text-2xl font-semibold"><span><img src="${item.category_icon}" alt=""></span>${item.category}</button> 
        `
        btn.onclick = () => petByCategory(item.category.toLowerCase())


        document.getElementById("petSelector").appendChild(btn)

    });
}

// pet by category filter

const petByCategory = (name) => {

    document.getElementById("petShower").innerHTML = ""


    fetch(`https://openapi.programming-hero.com/api/peddy/category/${name}`)
        .then((res) => res.json())
        .then((data) => data.data.length != 0 ? displayPets(data.data) : document.getElementById("petShower").innerHTML = `
        <div class="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center items-center flex-col ">
                        <img class="mx-auto" src="images/error.webp" alt="">
                        <p class="text-center text-3xl font-semibold">No Information available</p>
                        <p class="text-gray-400">It is a long established fact that a reader will be distracted by the
                            readable content of a
                            page when looking at
                            its layout. The point of using Lorem Ipsum is that it has a.</p>
                    </div> 
        `)
        .catch(err => console.log(err))



}



// liked functon maker
function likedFunctionality(id) {
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
        .then((res) => res.json())
        .then((data) => likedDisplayer(data.petData))
        .catch(err => console.log(err))
}
// liked limit maker
let n = 1
const likedDisplayer = (petData) => {

    if (n <= 8) {
        const div = document.createElement("div")
        div.innerHTML = `
     <img class="rounded-lg w-full object-cover" src="${petData.image}" alt="">
    `
        div.classList = "p-3 "
        document.getElementById("likedImageDisplay").append(div)
        n++
    }
    else {
        alert("Liked Limit Exceeded")
    }



}


// pet visibler
const loadPets = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
        .then((res) => res.json())
        .then((data) => displayPets(data.pets))
        .catch(err => console.log(err))
}
function displayPets(pets) {

    pets.forEach(pet => {
        const card = document.createElement("div")
        card.innerHTML = `
         <figure class="px-5 pt-5">
                            <img src="${pet.image}"
                                alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">${pet.pet_name}</h2>
                            <p class="flex gap-2 font-semibold text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
</svg> Breed: ${pet.breed}
</p>
                            <p class="flex gap-2 font-semibold text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
</svg>Birth: ${pet.date_of_birth}</p>
                            <p class="flex gap-2 font-semibold text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg>
Gender: ${pet.gender}</p>
                            <p class="flex gap-2 font-semibold text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
Price: ${pet.price}</p>

                            <div class="card-actions flex justify-between">
                                <button onclick="likedFunctionality(${pet.petId})" class="p-3 active:scale-95 duration-100 border border-gray-300 rounded-lg"><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                                    </svg>

                                </button>
                                <button class="btn border bg-transparent text-[#0E7A81] border-gray-300">Adopt</button>
                                <button
                                    class="btn border bg-transparent text-[#0E7A81] border-gray-300">Details</button>
                            </div>
                        </div>
        `
        card.classList = "card border border-gray-300 bg-base-100 w-full shadow-xl"
        document.getElementById("petShower").append(card)


    })
}

// pet by category












// all fetched runned
loadPets()
categoryBtn()