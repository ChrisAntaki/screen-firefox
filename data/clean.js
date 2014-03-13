(function() { // :)



    // Clear `screen` indentifiers.
    Object.defineProperty(unsafeWindow, 'screen', {
        value: void 0
    });
    
    Object.defineProperty(unsafeWindow, 'screenX', {
        value: void 0
    });

    Object.defineProperty(unsafeWindow, 'screenY', {
        value: void 0
    });



})(); // :)
