const display = document.getElementById("countdown");

setTimeout(() => {
    display.textContent = "10";
    setTimeout(() => {
        display.textContent = "9";
        setTimeout(() => {
            display.textContent = "8";
            setTimeout(() => {
                display.textContent = "7";
                setTimeout(() => {
                    display.textContent = "6";
                    setTimeout(() => {
                        display.textContent = "5";
                        setTimeout(() => {
                            display.textContent = "4";
                            setTimeout(() => {
                                display.textContent = "3";
                                setTimeout(() => {
                                    display.textContent = "2";
                                    setTimeout(() => {
                                        display.textContent = "1";
                                        setTimeout(() => {
                                            display.textContent = "Happy Independence Day!";
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
