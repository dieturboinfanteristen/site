const bgImg = document.querySelector("#bgImg");
const imgTitle = document.querySelector("#imgTitle");
const subtitle = document.querySelector(".subTitle");
const description = document.querySelector(".description");

document.addEventListener("DOMContentLoaded", async () => {
    const res = await fetch("../disneyPlusMoviesData.json");
    const required = await res.json();
    const data = required.movies;

    let movie = getData();

    if (movie === "Inside Out") {
        bgImg.src = data[1].backgroundImg;
        imgTitle.src = data[1].titleImg;
        subtitle.innerHTML = data[1].subTitle;
        description.innerHTML = data[1].description;
    } else if (movie === "A tail of two kitties") {
        bgImg.src = data[2].backgroundImg;
        imgTitle.src = data[2].titleImg;
        subtitle.innerHTML = data[2].subTitle;
        description.innerHTML = data[2].description;
    } else if (movie === "Bao") {
        bgImg.src = data[3].backgroundImg;
        imgTitle.src = data[3].titleImg;
        subtitle.innerHTML = data[3].subTitle;
        description.innerHTML = data[3].description;
    } else if (movie === "Tangled") {
        bgImg.src = data[4].backgroundImg;
        imgTitle.src = data[4].titleImg;
        subtitle.innerHTML = data[4].subTitle;
        description.innerHTML = data[4].description;
    } else if (movie === "Soul") {
        bgImg.src = data[5].backgroundImg;
        imgTitle.src = data[5].titleImg;
        subtitle.innerHTML = data[5].subTitle;
        description.innerHTML = data[5].description;
    } else if (movie === "Moana") {
        bgImg.src = data[6].backgroundImg;
        imgTitle.src = data[6].titleImg;
        subtitle.innerHTML = data[6].subTitle;
        description.innerHTML = data[6].description;
    } else if (movie === "Incredibles 2") {
        bgImg.src = data[7].backgroundImg;
        imgTitle.src = data[7].titleImg;
        subtitle.innerHTML = data[7].subTitle;
        description.innerHTML = data[7].description;
    } else if (movie === "Assembled") {
        bgImg.src = data[8].backgroundImg;
        imgTitle.src = data[8].titleImg;
        subtitle.innerHTML = data[8].subTitle;
        description.innerHTML = data[8].description;
    } else if (movie === "Burrow") {
        bgImg.src = data[9].backgroundImg;
        imgTitle.src = data[9].titleImg;
        subtitle.innerHTML = data[9].subTitle;
        description.innerHTML = data[9].description;
    } else if (movie === "The Simpsons") {
        bgImg.src = data[10].backgroundImg;
        imgTitle.src = data[10].titleImg;
        subtitle.innerHTML = data[10].subTitle;
        description.innerHTML = data[10].description;
    } else if (movie === "Legends") {
        bgImg.src = data[11].backgroundImg;
        imgTitle.src = data[11].titleImg;
        subtitle.innerHTML = data[11].subTitle;
        description.innerHTML = data[11].description;
    } else if (movie === "Raya") {
        bgImg.src = data[12].backgroundImg;
        imgTitle.src = data[12].titleImg;
        subtitle.innerHTML = data[12].subTitle;
        description.innerHTML = data[12].description;
    } else if (movie === "Auntie EDNA") {
        bgImg.src = data[13].backgroundImg;
        imgTitle.src = data[13].titleImg;
        subtitle.innerHTML = data[13].subTitle;
        description.innerHTML = data[13].description;
    } else if (movie === "Mickey mouse") {
        bgImg.src = data[14].backgroundImg;
        imgTitle.src = data[14].titleImg;
        subtitle.innerHTML = data[14].subTitle;
        description.innerHTML = data[14].description;
    } else if (movie === "The falcon and the winter soldier") {
        bgImg.src = data[15].backgroundImg;
        imgTitle.src = data[15].titleImg;
        subtitle.innerHTML = data[15].subTitle;
        description.innerHTML = data[15].description;
    } else if (movie === "My music story") {
        bgImg.src = data[16].backgroundImg;
        imgTitle.src = data[16].titleImg;
        subtitle.innerHTML = data[16].subTitle;
        description.innerHTML = data[16].description;
    }
});

const getData = () => {
    let movieData = JSON.parse(localStorage.getItem('movieData'));
    return movieData;
}


function closeVideoModal() {
    var modal = document.getElementById('videoModal');
    modal.style.display = 'none';
    // Stop video playback when closing the modal
    var videoIframe = document.getElementById('videoIframe');
    videoIframe.src = '';
}

function openVideoModal(videoUrl) {
    var videoModal = document.getElementById('videoModal');
    var videoIframe = document.getElementById('videoIframe');
    videoIframe.src = videoUrl;
    videoModal.style.display = 'block';
}

document.querySelectorAll('.button').forEach(button => {

    let duration = 3000,
        svg = button.querySelector('svg'),
        svgPath = new Proxy({
            y: null,
            smoothing: null
        }, {
            set(target, key, value) {
                target[key] = value;
                if(target.y !== null && target.smoothing !== null) {
                    svg.innerHTML = getPath(target.y, target.smoothing, null);
                }
                return true;
            },
            get(target, key) {
                return target[key];
            }
        });

    button.style.setProperty('--duration', duration);

    svgPath.y = 20;
    svgPath.smoothing = 0;

    button.addEventListener('click', e => {
        
        e.preventDefault();

        if(!button.classList.contains('loading')) {

            button.classList.add('loading');

            gsap.to(svgPath, {
                smoothing: .3,
                duration: duration * .065 / 1000
            });

            gsap.to(svgPath, {
                y: 12,
                duration: duration * .265 / 1000,
                delay: duration * .065 / 1000,
                ease: Elastic.easeOut.config(1.12, .4)
            });

            setTimeout(() => {
                svg.innerHTML = getPath(0, 0, [
                    [3, 14],
                    [8, 19],
                    [21, 6]
                ]);
            }, duration / 2);

        }

    });

});

function getPoint(point, i, a, smoothing) {
    let cp = (current, previous, next, reverse) => {
            let p = previous || current,
                n = next || current,
                o = {
                    length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)),
                    angle: Math.atan2(n[1] - p[1], n[0] - p[0])
                },
                angle = o.angle + (reverse ? Math.PI : 0),
                length = o.length * smoothing;
            return [current[0] + Math.cos(angle) * length, current[1] + Math.sin(angle) * length];
        },
        cps = cp(a[i - 1], a[i - 2], point, false),
        cpe = cp(point, a[i - 1], a[i + 1], true);
    return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
}

function getPath(update, smoothing, pointsNew) {
    let points = pointsNew ? pointsNew : [
            [4, 12],
            [12, update],
            [20, 12]
        ],
        d = points.reduce((acc, point, i, a) => i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${getPoint(point, i, a, smoothing)}`, '');
    return `<path d="${d}" />`;
}
