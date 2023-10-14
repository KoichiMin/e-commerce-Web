# Expedition Essentials

Expedition Essentials is a e-commerce platform with a primary focus on utilizing Bootstrap for a fully responsive and visually appealing website. It includes 5 different pages that replicate the structure of a functional website, providing realistic user experience. 

***
# Website Images

![Home Page](/images/Screenshot%202023-10-14%20at%2015.22.00.png)

![Checkout Page](/images/Screenshot%202023-10-14%20at%2015.40.36.png)

![Products and Services Page](/images/Screenshot%202023-10-14%20at%2015.40.09.png)

![User Registration Page](/images/Screenshot%202023-10-14%20at%2015.41.47.png)

![User Login Page](/images/Screenshot%202023-10-14%20at%2015.41.29.png)

***
# Interesting Piece of Code

This code is interesting because it showcases the use of Bootstrap and modal components to create an interactive game interface. The modals are effectively employed to present different game-related content in a user-friendly and visually appealing manner. The code includes two modals: one for game instructions and the other for the actual game interface. This approach allows for a seamless transition between informational content and the interactive game itself. The utilization of Bootstrap classes for styling, centering, and responsiveness enhances the overall user experience. 

        <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Expedition Essentials</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="productPage.html">Shop</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="checkout.html">Checkout</a>
                        </li>
                        <li class="nav-item d-md-none d-sm-inline">
                            <a class="nav-link " href="loginPage.html">Login</a>
                        </li>
                    </ul>
                </div>

                <a class="nav-link  d-lg-inline d-none" href="loginPage.html">Login</a>

            </div>
        </nav>
