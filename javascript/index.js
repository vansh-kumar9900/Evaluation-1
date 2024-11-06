const books = [
  {
    title: "Dune II",
    image:
      "https://cdn.kobo.com/book-images/2bd0e164-5c02-4e40-a43a-17d2fd5451b7/353/569/90/False/dune-2.jpg",
    discountedPrice: 800,
    originalPrice: 1000,
    category: "fiction",
    id: "1",
  },
  {
    title: "The Dark Wives",
    image:
      "https://images-us.bookshop.org/ingram/9781250836847.jpg?height=500&v=v2-256c542cfa295b0194feec6e04fa6365",
    discountedPrice: 800,
    originalPrice: 1000,
    category: "thriller",
    id: "2",
  },
  {
    title: "That Librarian",
    image:
      "https://images-us.bookshop.org/ingram/9781639733538.jpg?height=250&v=v2-b548b0a1fdf0c070e6d94c110f168c2e",
    discountedPrice: 800,
    originalPrice: 1000,
    category: "mystery",
    id: "3",
  },
  {
    title: "Long Live Evil",
    image:
      "https://images-us.bookshop.org/ingram/9780316568715.jpg?height=250&v=v2-bd4817d0674c2ba099ffe0783b44f55f",
    discountedPrice: 800,
    originalPrice: 1000,
    category: "fiction",
    id: "4",
  },
  {
    title: "Adim Kohram",
    image:
      "https://images-us.bookshop.org/ingram/9781538739525.jpg?height=250&v=v2-02eb76d9448f8da7a0cfbdba513f8eee",
    discountedPrice: 950,
    originalPrice: 1200,
    category: "romance",
    id: "5",
  },
  {
    title: "The Ghost Oat",
    image:
      "https://images-us.bookshop.org/ingram/9781335012333.jpg?height=250&v=v2-b42b228f18d5193ac343d36936ce09dd",
    discountedPrice: 950,
    originalPrice: 1200,
    category: "horror",
    id: "6",
  },
  {
    title: "Beautiful Dream",
    image:
      "https://images-us.bookshop.org/ingram/9798885740364.jpg?height=250&v=v2-72a44a8bbe2f545709a4d162f11d8ce5",
    discountedPrice: 950,
    originalPrice: 1200,
    category: "romance",
    id: "7",
  },
  {
    title: "Crimson Crow",
    image:
      "https://images-us.bookshop.org/ingram/9780593598368.jpg?height=250&v=v2-e4be5bfb639b402c7a270c46f96e3e69",
    discountedPrice: 950,
    originalPrice: 1200,
    category: "fiction",
    id: "8",
  },
  {
    title: "Foreign Agents",
    image:
      "https://images-us.bookshop.org/ingram/9781250286055.jpg?height=250&v=v2-7dcc44827d3fb7d612d4b4419cc6b5d6",
    discountedPrice: 800,
    originalPrice: 800,
    category: "thriller",
    id: "9",
  },
  {
    title: "Red River Road",
    image:
      "https://images-us.bookshop.org/ingram/9781250868015.jpg?height=250&v=v2-4b57350af1fe4de2dea34bd9bb4b0f8a",
    discountedPrice: 800,
    originalPrice: 800,
    category: "romance",
    id: "10",
  },
  {
    title: "It's You",
    image:
      "https://images-us.bookshop.org/ingram/9780063312036.jpg?height=250&v=v2-1f801eb6dc7b3761aa73d3b8bad1bf8a",
    discountedPrice: 800,
    originalPrice: 800,
    category: "romance",
    id: "11",
  },
  {
    title: "Dragon & Wrath",
    image:
      "https://images-us.bookshop.org/ingram/9780316417983.jpg?height=250&v=v2-adef546887ea100963002171033e296c",
    discountedPrice: 800,
    originalPrice: 800,
    category: "fiction",
    id: "12",
  },
  {
    title: "Desperate Glory",
    image:
      "https://images-us.bookshop.org/ingram/9781250835000.jpg?height=250&v=v2",
    discountedPrice: 1000,
    originalPrice: 1500,
    category: "fiction",
    id: "13",
  },
  {
    title: "Witch King",
    image:
      "https://images-us.bookshop.org/ingram/9781250826817.jpg?height=250&v=v2",
    discountedPrice: 1000,
    originalPrice: 1500,
    category: "mystery",
    id: "14",
  },
  {
    title: "Buried",
    image:
      "https://res.cloudinary.com/bookbub/image/upload/t_ci_ar_6:9_padded,f_auto,q_auto,dpr_1/v1714872074/pro_pbid_1203324.jpg",
    discountedPrice: 1000,
    originalPrice: 1500,
    category: "horror",
    id: "15",
  },
  {
    title: "Dac Biet",
    image:
      "https://images-us.bookshop.org/ingram/9780593535547.jpg?height=250&v=v2-dd0eeea1674e0ff5bc291b36180068e9",
    discountedPrice: 1000,
    originalPrice: 1500,
    category: "comedy",
    id: "16",
  },
];


let userData = [
  {
    email: "vansh@gmail.com",
    password: "vansh",
  },
  {
    email: "jj@gmail.com",
    password: "jj",
  },
];


if (!localStorage.getItem("user")) {
  localStorage.setItem("user", JSON.stringify(userData));
}


const Data = JSON.parse(localStorage.getItem("user"));

console.log(Data);

const form = document.querySelector(".signup-form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const Email = document.getElementById("email").value;
    const Password = document.getElementById("password").value;

    const userObject = {
      email: Email,
      password: Password,
    };
    Data.push(userObject);

    localStorage.setItem("user", JSON.stringify(Data));

    window.location.href = "shop.html";
  });
}

const signin = document.querySelector(".signinForm");

if (signin) {
  signin.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("clicked");

    const singinEmail = document.querySelector("#Email").value;
    const signinPassword = document.querySelector("#Password").value;

    let userFound = false;
    Data.forEach((data) => {
      if (data.email == singinEmail && data.password == signinPassword) {
        console.log("sucess");
        userFound = true;
      }
    });

    if (userFound === false) {
      alert("user not found . signup first ??");
      window.location.href = "signup.html";
    } else {
      window.location.href = "shop.html";
    }
  });
}


function addToCart(index) {

  console.log("index : ", index);
  let cart = [];
  const cartData = localStorage.getItem("cart");
  
  if (cartData !== null && cartData !== "undefined") {
    cart = JSON.parse(cartData);
  }

  const selectedBook = index;
  console.log("selectedBook", selectedBook);

  const bookInCart = cart.find((book) => book.title === selectedBook.title);

  if (!bookInCart) {
    cart.push(selectedBook);
    alert(`${selectedBook.title} has been added to your cart!`);

    localStorage.setItem("cart", JSON.stringify(cart));

  } else {
    alert(`${selectedBook.title} is already in your cart!`);
  }
}
 

const booksContainer = document.querySelector(".book-flex-container");

function displayBooks() {
  let booksHTML = '';

  books.forEach((book, index) => {
      let bookHTML = `
      <div class="book-item">
        <a href="${book.detailsLink}">
          <img src="${book.image}" alt="${book.title}">
        </a>
        <h3>${book.title}</h3>
        <p class="price">
          <span class="discounted-price">Rs. ${book.discountedPrice}</span> 
          <span class="original-price">Rs. ${book.originalPrice}</span>
        </p>
        <div class="buttons">
          <button class="get-deal" id="add-to-cart-${index}">Add to cart</button>
        </div>                
      </div>
    `;
    booksHTML += bookHTML;
  });

  booksContainer.innerHTML = booksHTML;

  books.forEach((book, index) => {
    const addToCartButton = document.getElementById(`add-to-cart-${index}`);
    addToCartButton.addEventListener("click", () => {
      console.log(`Button ${index} clicked`);
      addToCart(book);
    });
  });
}

displayBooks();




