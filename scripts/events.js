// Adding click events to redirect user to

function redirect(triggerCardClassNameWithoutDot, url) {
    document.querySelector(`.${triggerCardClassNameWithoutDot}`).addEventListener('click', () => {
        location.href = url;
    })
}

// GitHub
redirect('first-project', 'https://github.com/C6u6/notifications-service');
redirect('second-project', 'https://github.com/C6u6/mail');