// ==UserScript==
// @name         Global Media Accelerator//全局媒体加速器
// @namespace    freirc.github.io
// @version      1.0
// @description  Skip some useless online cources to save your life//跳过视频水课，节省你宝贵的时间
// @author       frc
// @match        *://*/*
// @grant        none
// @downloadURL https://update.greasyfork.org/scripts/505157/Global%20Media%20Playback%20Speed%20Control.user.js
// @updateURL https://update.greasyfork.org/scripts/505157/Global%20Media%20Playback%20Speed%20Control.meta.js
// ==/UserScript==

(function() {
    'use strict';

    //This parametre controlls the times of acceleration added when you press[ or ]/在此输入按“[”或“]”增加的速度。
    const speedStep = 1;

    //This parametre controlls the seconds you skip when you press A or D/在此输入按A或D跳过的时间。
    const fastForwardDuration = 10;

    document.addEventListener('keydown', function(event) {
        if (event.target.tagName.toLowerCase() !== 'input' && event.target.tagName.toLowerCase() !== 'textarea') {
            let mediaElements = document.querySelectorAll('video, audio');

            if (event.key === '[') {
                mediaElements.forEach(media => {
                    media.playbackRate = Math.max(0.1, media.playbackRate - speedStep);
                    console.log(`Playback speed decreased to: ${media.playbackRate}`);
                });
            } else if (event.key === ']') {
                mediaElements.forEach(media => {
                    media.playbackRate += speedStep;
                    console.log(`Playback speed increased to: ${media.playbackRate}`);
                });
            } else if (event.key.toLowerCase() === 'd') {
                mediaElements.forEach(media => {
                    media.currentTime += fastForwardDuration;
                    console.log(`Fast forwarded ${fastForwardDuration} seconds. Current time: ${media.currentTime}`);
                });
           } else if (event.key.toLowerCase() === 'a') {
                mediaElements.forEach(media => {
                    media.currentTime -= fastForwardDuration;
                    console.log(`Fast forwarded ${fastForwardDuration} seconds. Current time: ${media.currentTime}`);
                });
            } else if (event.key.toLowerCase() === 'w') {
                mediaElements.forEach(media => {
                    if (media.duration) {
                        media.currentTime = media.duration;
                        console.log(`Fast forwarded to end. Current time: ${media.currentTime}`);
                    }
                });
            }
        }
    });

})();
