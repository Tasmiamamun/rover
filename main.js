canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
marsImages=["mars.jpg",
"https://media.istockphoto.com/photos/martian-texture-picture-id507280516?k=20&m=507280516&s=612x612&w=0&h=qiqEd21T9G4oycAG2N1u1e8hQgMWb78297gS2ww9eZk=",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ZpqZFPI2RQJI1GzEccowYUq1ZmdifHzLTstkd9gK0izKb4XcXwneWH7wFp2PT84zxm8&usqp=CAU",
"https://cdna.artstation.com/p/assets/images/images/016/778/554/large/jeremy-nelson-mars.jpg?1553448688"]
random_number=Math.floor(Math.random()*4)
console.log(random_number)
rover_width=100 
rover_height=100
rover_x=10
rover_y=10
background_image=marsImages[random_number]
rover_image="rover.png"
function add(){
    background_imagetag=new Image()
    background_imagetag.onload=upload_background
    background_imagetag.src=background_image

    rover_imagetag=new Image()
    rover_imagetag.onload=upload_rover
    rover_imagetag.src=rover_image
}
function upload_background(){
    ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height)
}
function upload_rover(){
    ctx.drawImage(rover_imagetag,rover_x,rover_y,rover_width,rover_height)
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keypressed=e.keyCode
    if (keypressed=='38') {
        up()
    }

    if (keypressed=='40') {
        down()
    }

    if (keypressed=='37') {
        left()
    }

    if (keypressed=='39') {
        right()
    }
}
function up() {
    if(rover_y>0){
        rover_y=rover_y-10
        upload_background()
        upload_rover()
    }
}

function down() {
    if(rover_y<700){
        rover_y=rover_y+10
        upload_background()
        upload_rover()
    }
}

function left() {
    if(rover_x>0){
        rover_x=rover_x-10
        upload_background()
        upload_rover()
    }
}

function right() {
    if(rover_x<1000){
        rover_x=rover_x+10
        upload_background()
        upload_rover()
    }
}