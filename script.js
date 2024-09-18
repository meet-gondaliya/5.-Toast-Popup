const horizontal = document.querySelector('#horizontal');
const vertical = document.querySelector('#vertical');
const toastType = document.querySelector('#toast-type');
const userStr = document.querySelector('#userStr');
const duration = document.querySelector('#duration');
const btn = document.querySelector('.btn');
const toastContainer = document.querySelector('.toast-container');

btn.addEventListener('click', () => {
    if (horizontal.value === 'right') {
        toastContainer.classList.add('right');
    } else {
        toastContainer.classList.remove('right');
    }

    if (vertical.value === 'bottom') {
        toastContainer.classList.add('bottom');
    } else {
        toastContainer.classList.remove('bottom');
    }

    const newToast = document.createElement('div');
    newToast.classList.add('toast');
    newToast.classList.add(toastType.value);
    newToast.textContent = ` ${userStr.value} `;

    const closeIcon = document.createElement('span');
    closeIcon.textContent = '✖';
    closeIcon.style = 'cursor: pointer';
    newToast.append(closeIcon);

    function removeToast() {
        if (toastContainer.classList.contains('right')) {
            newToast.classList.add('go-right');
        } else {
            newToast.classList.add('go-left');
        }

        setTimeout(() => {
            newToast.remove();
        }, 100);
    }

    closeIcon.addEventListener('click', () => {
        removeToast();
    })

    setTimeout(() => {
        removeToast();
    }, parseInt(duration.value * 1000));

    toastContainer.append(newToast);
});