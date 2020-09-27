<!doctype html>
<html>

<head>
    <meta charset="utf-8" />
    <title>Caapp</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <div class="container-fluid">
        <br>

        <!-- <select id="videoSource"></select> -->
        <video id="player" playsinline width="100%" autoplay></video>
        <!-- <div class="cell"></div> -->
        <canvas id="canvas"></canvas>
        <br>
        <!-- gallery link -->
        <div class="card text-center card-body" style="margin-left:50px;margin-top:20px; border:none;display:grid; grid-template-columns:1fr 1fr 1fr ;">

            <a href="gallery.php" style="border:solid 1px;width:200px;height:200px;border-radius: 100px; ">
                <!-- <a href="gallery.php" class="btn btn-danger bg-danger p-3" style="width:140px;height:80px">View Gallery</a> -->
                <svg style="border-radius:inherit;width:inherit;height:inherit;color:green" viewBox="0 0 16 16" class="p-4 bi bi-card-image" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M14.5 3h-13a.5.5 0 0 0-.5.5v9c0 .013 0 .027.002.04V12l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094L15 9.499V3.5a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm4.502 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>

            </a>

            <button class="btn btn-light  " id="capture-btn">

                <svg style="width:inherit;height:inherit;" viewBox="0 0 16 16" class="m-auto  bi bi-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="8" />
                </svg>
            </button>

            <select id="videoSource">

            </select>
            <!-- <a href="gallery.php" class="btn btn-danger bg-danger p-3" style="grid-column:3;width:140px;height:80px">View Gallery</a> -->

        </div>

    </div>

    <script src="main.js" async></script>
    <!-- <script src="script.js "></script> -->
</body>

</html>
<!-- <img src=""  alt=""> -->