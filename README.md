# Expedition Essentials

Expedition Essentials is a e-commerce platform with a primary focus on utilizing Bootstrap for a fully responsive and visually appealing website. It includes 5 different pages that replicate the structure of a functional website, providing realistic user experience. 

***
# Website Images
***
### Home Page
![Home Page](/images/Screenshot%202023-10-14%20at%2015.22.00.png)
***
### Checkout Page
![Checkout Page](/images/Screenshot%202023-10-14%20at%2015.40.36.png)
***
### Products Page
![Products Page](/images/Screenshot%202023-10-14%20at%2015.40.09.png)
***
### User Registration Page
![User Registration Page](/images/Screenshot%202023-10-14%20at%2015.41.47.png)
***
### User Login Page
![User Login Page](/images/Screenshot%202023-10-14%20at%2015.41.29.png)

***
# Interesting Piece of Code

This code is interesting because it showcases the use of Bootstrap and modal components to create an interactive game interface. The modals are effectively employed to present different game-related content in a user-friendly and visually appealing manner. The code includes two modals: Game information and start button, and the other for the actual game interface. This approach allows for a seamless transition between informational content and the interactive game itself. The utilization of Bootstrap classes for styling, centering, and responsiveness enhances the overall user experience. 

        <h1 class="text-center mt-5">Game</h1>
        <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
            tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Easiest Game Ever</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        This game was created by a Youtuber called Knife Circus. Github link:
                        https://github.com/Beat0154/easiest-game-ever/blob/master/index.html
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2"
                            data-bs-toggle="modal">Start Game</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2"
            tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-dialog ">
                    <div class="modal-content ">
                        <div class="game">
                            <div id="character"></div>
                            <div id="block"></div>
                        </div>
                        <p>Score: <span id="scoreSpan"></span></p>
                    </div>
                </div>
            </div>
        </div>


        <!-- Button trigger modal -->
        <div class="text-center p-5 m-5">
            <button class="btn btn-primary p-5" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Play
                Now!</button>
        </div>

