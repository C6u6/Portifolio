// Adding click events to redirect user to

function redirect(triggerCardClassNameWithoutDot, url) {
    document.querySelector(`.${triggerCardClassNameWithoutDot}`).addEventListener('click', () => {
        window.open(url, '_blank');
    })
}

// GitHub
redirect('first-project', 'https://github.com/C6u6/Scripts');
redirect('second-project', 'https://github.com/C6u6/mail');
redirect('third-project', 'https://github.com/C6u6/student');
redirect('forth-project', 'https://github.com/C6u6/scientia');