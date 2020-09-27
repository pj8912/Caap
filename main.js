// 'use strict';
const videoPlayer = document.querySelector("#player");
const canvasElement = document.querySelector("#canvas");
const captureButton = document.querySelector("#capture-btn");
const imagePicker = document.querySelector("#image-picker");
const imagePickerArea = document.querySelector("#pick-image");
const newImages = document.querySelector("#newImages");
// ----------
const videoSelect = document.querySelector("select#videoSource");
const selectors = [videoSelect];

// --------------


canvasElement.style.display = "none";


const createImage = (src, alt, title, width, height, className) => {
    let newImg = document.createElement("img");

    if (src !== null) newImg.setAttribute("src", src);
    if (alt !== null) newImg.setAttribute("alt", alt);
    if (title !== null) newImg.setAttribute("title", title);
    if (width !== null) newImg.setAttribute("width", width);
    if (height !== null) newImg.setAttribute("height", height);
    if (className !== null) newImg.setAttribute("class", className);

    return newImg;
};




// gotDevices, for(), gotStream, constrains,  getUserMedia
function gotDevices(deviceInfos) {

    const values = selectors.map(select => select.value);
    selectors.forEach(select => {
        while (select.firstChild) {
            select.removeChild(select.firstChild);
        }
    });

    for (let i = 0; i !== deviceInfos.length; ++i) {
        const deviceInfo = deviceInfos[i];
        const option = document.createElement('option');
        option.value = deviceInfo.deviceId;
        if (deviceInfo.kind === 'videoinput') {
            option.text = deviceInfo.label || `camera ${videoSelect.length + 1}`;
            videoSelect.appendChild(option);
        } else {
            console.log('Some other kind of source/device: ', deviceInfo);
        }

    }
    selectors.forEach((select, selectorIndex) => {
        if (Array.prototype.slice.call(select.childNodes).some(n => n.value === values[selectorIndex])) {
            select.value = values[selectorIndex];
        }
    });
}
navigator.mediaDevices.enumerateDevices().then(gotDevices).catch(console.error);

function gotStream(stream) {
    window.stream = stream;
    videoPlayer.srcObject = stream;
    // videoPlayer.style.display = "block";

    return navigator.mediaDevices.enumerateDevices();
}

function start() {
    if (window.stream) {
        window.stream.getTracks().forEach(track => {
            track.stop();
        });
    }
    const videoSource = videoSelect.value;
    const constrains = {
        video: { deviceId: videoSource ? { exact: videoSource } : undefined }
    };

    navigator.mediaDevices.getUserMedia(constrains).then(gotStream).then(gotDevices);
}



// Capture the image, save it and then paste it to the DOM
captureButton.addEventListener("click", event => {
    // Draw the image from the video player on the canvas
    canvasElement.style.display = "none";
    const context = canvasElement.getContext("2d");
    context.drawImage(videoPlayer, 0, 0, canvas.width, canvas.height);

    videoPlayer.srcObject.getVideoTracks().forEach(track => {
        // track.stop();
    });

    // Convert the data so it can be saved as a file
    let picture = canvasElement.toDataURL();

    // Save the file by posting it to the server
    fetch("api/save_image.php", {
            method: "post",
            body: JSON.stringify({ data: picture })
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                // Create the image and give it the CSS style with a random tilt
                //  and a z-index which gets bigger
                //  each time that an image is added to the div
                let newImage = createImage(
                    data.path,
                    "new image",
                    "new image",
                    width,
                    height,
                    "masked"
                );
                console.log(newImage);
                // let tilt = -(20 + 60 * Math.random());
                // newImage.style.transform = "rotate(" + tilt + "deg)";
                // zIndex++;
                // newImage.style.zIndex = zIndex;
                newImages.appendChild(newImage);
                canvasElement.classList.add("masked");
            }
        })

    .catch(error => console.log(error));
});

// window.addEventListener("load", event => startMedia());
videoSelect.onchange = start;
window.onload = function() {

    start();
};