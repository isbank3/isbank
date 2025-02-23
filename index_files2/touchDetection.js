/**
 *
 * Copyright 2003-2014 Monitise Group Limited. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Monitise Group Limited.
 * Any reproduction of this material must contain this notice.

 * User: basmacis
 * Date: 27/11/14
 * Time: 09:59
 */


(function touchDetection() {
    var touchEndEvent;
    var touchStartEvent;
    var touchMoveEvent;

    window.touchEvents = {
        enabled: true,
        hasHover: true,
        hasNativeTouchEvents: false,
        hasPointerEvents: false
    };


    if ( window.navigator ) {
        if ( window.navigator.pointerEnabled ) {
            touchEndEvent = "pointerup";
            touchStartEvent = "pointerdown";
            touchMoveEvent = "pointermove";
        } else if ( window.navigator.msPointerEnabled ) {
            touchEndEvent = "mspointerup";
            touchStartEvent = "mspointerdown";
            touchMoveEvent = "mspointermove";
        } else if ( 'ontouchstart' in window ) {
            touchEndEvent = "touchend";
            touchStartEvent = "touchstart";
            touchMoveEvent = "touchmove";
            window.touchEvents.hasHover = false;
            window.touchEvents.hasNativeTouchEvents = true;
        } else {
            window.touchEvents.enabled = false;
        }
    } else {
        window.touchEvents.enabled = false;
    }

    if ( window.touchEvents.enabled && !window.touchEvents.hasNativeTouchEvents ) {
        window.touchEvents.hasPointerEvents = true;
    }

    if ( window.touchEvents.enabled ) {
        window.touchEvents.touchMoveEvent = touchMoveEvent;
        window.touchEvents.touchStartEvent = touchStartEvent;
        window.touchEvents.touchEndEvent = touchEndEvent;
    }
})();
