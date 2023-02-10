const $btn = document.querySelector('.btn');
const $area = document.querySelector('.area');

let action = false;

let boxes = [];

if (localStorage.getItem('coords')) {
    boxes = JSON.parse(localStorage.getItem('coords'));
    boxGenerator(boxes);
}

let $selectedBox = null;
let selectedBoxIndex = 0;

let startCoords = {
    x: 0,
    y: 0
}
let currentCoords = {
    x: 0,
    y: 0
}
let distance = {
    x: 0,
    y: 0
}

function boxGenerator(list) {
    let template = '';
    for (let i = 0; i < list.length; i++) {
        template += '<div class="box" style="left: ' + list[i].x + 'px; top: ' + list[i].y + 'px;" data-index="' + i + '">' + 
                        '<textarea class="field" data-index="' + i + '">' + list[i].note + '</textarea>' +
                    '</div>'
    }
    $area.innerHTML = template;
    document.querySelectorAll('.box .field').forEach(function (el) {
        el.addEventListener('input', function (e) {
            let targetText = e.target.value;
            let fieldIndex = e.target.getAttribute('data-index');
            boxes[fieldIndex].note = targetText;
            localStorage.setItem('coords', JSON.stringify(boxes));
        });
    });
}
function move(coords) {
    $selectedBox.style.left = coords.x + 'px';
    $selectedBox.style.top = coords.y + 'px';
}

$area.addEventListener('mousedown', function (e) {
    if (e.target.classList.contains('box')) {
        $selectedBox = e.target;
        selectedBoxIndex = e.target.getAttribute('data-index');
        action = true;
        startCoords.x = e.pageX;
        startCoords.y = e.pageY;
    }
});
$area.addEventListener('mouseup', function (e) {
    if (action) {
        action = false;
        boxes[selectedBoxIndex].x = distance.x;
        boxes[selectedBoxIndex].y = distance.y;
        localStorage.setItem('coords', JSON.stringify(boxes));
    }
});
$area.addEventListener('mousemove', function (e) {
    if (action) {
        currentCoords.x = e.pageX;
        currentCoords.y = e.pageY;

        distance.x = boxes[selectedBoxIndex].x + (currentCoords.x - startCoords.x);
        distance.y = boxes[selectedBoxIndex].y + (currentCoords.y - startCoords.y);

        move(distance);
    }
});
$btn.addEventListener('click', function () {
    boxes.push({
        x: 0,
        y: 0,
        note: ''
    });
    boxGenerator(boxes);
});