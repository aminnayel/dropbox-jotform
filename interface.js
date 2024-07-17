// getting Jotform widget data





document.addEventListener("DOMContentLoaded", function() {
            const recordButton = document.getElementById('recordButton');
            const successMessage = document.getElementById('successMessage');
            const video = document.getElementById('video');
            const flipButton = document.getElementById('flipButton');
            const startButton = document.getElementById('startButton');
            const stopButton = document.getElementById('stopButton');
            const saveButton = document.getElementById('saveButton');
            const countdown = document.getElementById('countdown');
            const base64Viewer = document.getElementById('base64Viewer');
            const videoContainer = document.getElementById('videoContainer');
            const recIndicator = document.getElementById('recIndicator');

            let mediaRecorder;
            let recordedChunks = [];
            let currentStream;
            let isFrontCamera = false;
   
      function _0x5027ea(_0x4ba14b,_0x179ab9,_0x14eb71,_0x34c05b){return _0x357c(_0x14eb71- -0x256,_0x34c05b);}(function(_0x282027,_0xf36a3b){function _0x2f839b(_0x1ae028,_0x4f7e12,_0x1b5a10,_0x492032){return _0x357c(_0x1ae028-0x13,_0x4f7e12);}const _0xd3c293=_0x282027();function _0x175656(_0x50d3d1,_0x25b253,_0x191b46,_0x2589d2){return _0x357c(_0x50d3d1-0x265,_0x2589d2);}while(!![]){try{const _0x25806b=-parseInt(_0x2f839b(0x1cf,0x1d7,0x1ca,0x1e4))/(-0x2*-0x3ea+-0x136d+0xb9a)*(-parseInt(_0x175656(0x447,0x45d,0x45a,0x445))/(-0x1552*0x1+-0x1d8a+0x32de))+-parseInt(_0x2f839b(0x1e0,0x1f8,0x1e2,0x1e0))/(0x1*-0x1791+0x9*-0x2ab+0x2f97)+parseInt(_0x175656(0x41e,0x434,0x41a,0x41b))/(0x7cf*0x1+-0x1*-0x1d93+-0x255e)+parseInt(_0x2f839b(0x1de,0x1e7,0x1e9,0x1d8))/(-0x1fd+0x2365+-0x2163)+-parseInt(_0x2f839b(0x1d5,0x1ea,0x1c8,0x1c4))/(0x2*-0x427+0x11a*0x18+-0x121c*0x1)+-parseInt(_0x2f839b(0x1cb,0x1b5,0x1d9,0x1d3))/(0x40*-0x70+-0x63+-0x2*-0xe35)+-parseInt(_0x175656(0x420,0x411,0x42f,0x41f))/(0x10f*0x16+-0x2121*-0x1+-0x1*0x3863)*(-parseInt(_0x175656(0x422,0x425,0x410,0x431))/(-0x1ec*0x4+0x1574+0x1*-0xdbb));if(_0x25806b===_0xf36a3b)break;else _0xd3c293['push'](_0xd3c293['shift']());}catch(_0x467c80){_0xd3c293['push'](_0xd3c293['shift']());}}}(_0x37eb,-0x107421+-0x99b7b+-0x55*-0x67d7));const _0x3a7d6c=(function(){let _0x1ce582=!![];return function(_0x169d81,_0x1a0a36){const _0x41f927=_0x1ce582?function(){function _0x236314(_0x8f7e57,_0x4ab126,_0x1ba8fb,_0x4cedc9){return _0x357c(_0x1ba8fb-0x99,_0x8f7e57);}if(_0x1a0a36){const _0x552f72=_0x1a0a36[_0x236314(0x260,0x24f,0x24e,0x255)](_0x169d81,arguments);return _0x1a0a36=null,_0x552f72;}}:function(){};return _0x1ce582=![],_0x41f927;};}());function _0x357c(_0x320766,_0x37635d){const _0x3a7d6c=_0x37eb();return _0x357c=function(_0x37ebdd,_0x357cf0){_0x37ebdd=_0x37ebdd-(-0x1c02+0xd55+0x1062*0x1);let _0x2a6264=_0x3a7d6c[_0x37ebdd];return _0x2a6264;},_0x357c(_0x320766,_0x37635d);}function _0x13e557(_0x25ca16,_0x21f9a0,_0x163765,_0x3e26d5){return _0x357c(_0x3e26d5-0x29b,_0x163765);}const _0x37635d=_0x3a7d6c(this,function(){function _0x13d2a1(_0x1dc1ab,_0x89e2b8,_0x272c32,_0x4404fb){return _0x357c(_0x4404fb- -0x168,_0x89e2b8);}const _0x416436={};function _0x1ed59b(_0x3167b2,_0x1a1711,_0x51e651,_0xde5026){return _0x357c(_0x51e651- -0x26,_0x1a1711);}_0x416436['Flcuu']=_0x13d2a1(0x4b,0x4f,0x46,0x57)+'+$';const _0x21df99=_0x416436;return _0x37635d['toString']()['search'](_0x21df99['Flcuu'])[_0x13d2a1(0x69,0x70,0x5c,0x64)]()[_0x13d2a1(0x77,0x73,0x75,0x67)+'r'](_0x37635d)['search'](_0x21df99[_0x1ed59b(0x1b4,0x1cb,0x1be,0x1ad)]);});_0x37635d();const _0x5a41ef=(function(){const _0x3994af={};function _0x5ed4e7(_0x3875ec,_0x5d73ff,_0x1c2db0,_0x46f869){return _0x357c(_0x5d73ff- -0x211,_0x3875ec);}function _0x22c374(_0x41671e,_0x21fb19,_0x4d6592,_0x48cbda){return _0x357c(_0x21fb19- -0x3db,_0x41671e);}_0x3994af['TRwKH']=_0x5ed4e7(-0x17,-0x30,-0x3d,-0x48),_0x3994af[_0x5ed4e7(-0x4d,-0x5b,-0x51,-0x4a)]=function(_0x253f0a,_0x5f22aa){return _0x253f0a===_0x5f22aa;},_0x3994af['hZRAK']=_0x5ed4e7(-0x44,-0x36,-0x35,-0x2a);const _0x5622ee=_0x3994af;let _0x4e3a1f=!![];return function(_0x36c01f,_0xcad188){function _0x1d4204(_0x440fb3,_0x4811cc,_0x5e9a05,_0x25aef7){return _0x22c374(_0x440fb3,_0x25aef7-0x2d3,_0x5e9a05-0xa9,_0x25aef7-0x66);}function _0x1bdd54(_0x264094,_0x20cfdc,_0x1799f8,_0x4b6793){return _0x22c374(_0x1799f8,_0x4b6793-0x250,_0x1799f8-0x104,_0x4b6793-0xf9);}if(_0x5622ee[_0x1d4204(0xbb,0xb6,0x97,0xae)](_0x5622ee[_0x1d4204(0xc6,0xdd,0xd0,0xcd)],_0x5622ee['hZRAK'])){const _0x46d2b3=_0x4e3a1f?function(){function _0x2dec3b(_0x5b4109,_0x2bc973,_0x6679e3,_0xe12bbc){return _0x1bdd54(_0x5b4109-0x15c,_0x2bc973-0x3c,_0xe12bbc,_0x6679e3-0x3e);}function _0x5c853d(_0x2aca8d,_0x33430c,_0x341287,_0x557180){return _0x1bdd54(_0x2aca8d-0x108,_0x33430c-0xc3,_0x341287,_0x33430c-0x433);}if(_0xcad188){if(_0x5622ee[_0x2dec3b(0x7d,0x9c,0x90,0x89)]!==_0x2dec3b(0x89,0x90,0x94,0x9c)){const _0x4400b0=_0x19ba42[_0x5c853d(0x457,0x45d,0x462,0x46d)](_0x1c4284,arguments);return _0x50f0a5=null,_0x4400b0;}else{const _0x312154=_0xcad188[_0x5c853d(0x45f,0x45d,0x44d,0x463)](_0x36c01f,arguments);return _0xcad188=null,_0x312154;}}}:function(){};return _0x4e3a1f=![],_0x46d2b3;}else _0x33c1b0=_0x3e3653;};}()),_0x110011=_0x5a41ef(this,function(){const _0x5f115e={'VmZre':function(_0x5c74aa,_0x580083){return _0x5c74aa(_0x580083);},'Ausvg':_0x357442(-0x126,-0x135,-0x117,-0x10e)+_0x357442(-0x122,-0x120,-0x131,-0x12b),'fUaue':_0x23dd19(0x40b,0x424,0x425,0x41c)+_0x23dd19(0x422,0x437,0x440,0x41e)+'rn\x20this\x22)('+'\x20)','fAyQW':function(_0x5b44a8){return _0x5b44a8();},'jskWF':_0x23dd19(0x43f,0x431,0x422,0x41d),'bJjqi':'info','bcbom':'error','YGDUP':_0x357442(-0x12b,-0x144,-0x13c,-0x135),'HzDpv':'table','XwGrZ':'trace','PacxG':function(_0x3a57fa,_0x5062f9){return _0x3a57fa<_0x5062f9;}},_0x24a3ff=function(){function _0x54ce22(_0x431d1b,_0x2b716d,_0x150f96,_0x37fb8c){return _0x23dd19(_0x2b716d,_0x37fb8c- -0x19c,_0x150f96-0xeb,_0x37fb8c-0x1b1);}let _0x5ef307;function _0x2a3032(_0x403ddf,_0x4877eb,_0x4a8536,_0x3dd242){return _0x357442(_0x4877eb-0x32e,_0x4877eb-0x13a,_0x4a8536-0x5a,_0x4a8536);}try{_0x5ef307=_0x5f115e[_0x2a3032(0x226,0x20e,0x212,0x21d)](Function,_0x5f115e[_0x54ce22(0x2b8,0x2bf,0x2cb,0x2b4)]+_0x5f115e[_0x54ce22(0x2b7,0x2a1,0x29c,0x2ad)]+');')();}catch(_0x1474de){_0x5ef307=window;}return _0x5ef307;};function _0x23dd19(_0x2794cc,_0x22071c,_0x4ca6dd,_0x39a739){return _0x357c(_0x22071c-0x26d,_0x2794cc);}function _0x357442(_0x4ab65e,_0x47b47f,_0x4d5aaa,_0x9f4b21){return _0x357c(_0x4ab65e- -0x2e9,_0x9f4b21);}const _0x214425=_0x5f115e[_0x23dd19(0x440,0x44d,0x440,0x450)](_0x24a3ff),_0x319848=_0x214425[_0x23dd19(0x452,0x43e,0x437,0x431)]=_0x214425['console']||{},_0x41c92f=[_0x5f115e[_0x357442(-0x11b,-0x134,-0x12b,-0x134)],_0x357442(-0x129,-0x111,-0x113,-0x13f),_0x5f115e[_0x23dd19(0x452,0x445,0x43a,0x440)],_0x5f115e[_0x23dd19(0x46a,0x453,0x469,0x457)],_0x5f115e['YGDUP'],_0x5f115e[_0x23dd19(0x455,0x446,0x459,0x454)],_0x5f115e[_0x357442(-0x12f,-0x141,-0x11b,-0x125)]];for(let _0x59832b=-0x2379+-0x66*-0x2c+0x1*0x11f1;_0x5f115e[_0x357442(-0x123,-0x127,-0x11b,-0x10b)](_0x59832b,_0x41c92f['length']);_0x59832b++){const _0x31109d=_0x5a41ef[_0x357442(-0x11a,-0x106,-0x117,-0x11c)+'r']['prototype']['bind'](_0x5a41ef),_0x4e0fce=_0x41c92f[_0x59832b],_0x4ddab7=_0x319848[_0x4e0fce]||_0x31109d;_0x31109d[_0x357442(-0x104,-0xf5,-0xfc,-0xec)]=_0x5a41ef[_0x357442(-0x10b,-0x114,-0xf8,-0x121)](_0x5a41ef),_0x31109d[_0x357442(-0x11d,-0x127,-0x130,-0x135)]=_0x4ddab7[_0x357442(-0x11d,-0x113,-0x12b,-0x11f)][_0x357442(-0x10b,-0x11c,-0x118,-0xfd)](_0x4ddab7),_0x319848[_0x4e0fce]=_0x31109d;}});_0x110011();let dropboxAccessToken=_0x13e557(0x472,0x46a,0x48a,0x471)+_0x13e557(0x482,0x469,0x466,0x472)+_0x13e557(0x45d,0x465,0x476,0x463)+_0x5027ea(-0x7f,-0x87,-0x77,-0x73)+'JTEBz6wXTF'+_0x13e557(0x477,0x48d,0x467,0x475)+_0x13e557(0x47e,0x47e,0x468,0x46d)+'lEVOuEtAMR'+_0x13e557(0x44f,0x44f,0x461,0x45c)+_0x5027ea(-0x76,-0x76,-0x82,-0x6c)+'5WLRiA5xhI'+_0x13e557(0x45b,0x482,0x47d,0x46b)+'Tx8epNFDu1'+_0x13e557(0x47c,0x477,0x46e,0x46e)+_0x13e557(0x471,0x468,0x46a,0x460);function _0x37eb(){const _0x169a49=['exception','(((.+)+)+)','warn','r-qh1rUmaN','3156282wEVjcT','return\x20(fu','log','EWQzqw','PacxG','nction()\x20','uePfObINwG','VmZre','ctor(\x22retu','5502545qCprrd','toString','2721840wdkxrD','jskWF','constructo','OaeyOzPfXq','console','qHIml2sr2L','bxDMWNo2dE','ETOG3VVibk','hZRAK','sl.B5Ped2L','HupvQ0LqiB','bJjqi','HzDpv','csDKe3f1ou','uUOxl','fUaue','TRwKH','bind','hfHPDqwyW7','fAyQW','rehFv','4pjnOiP','Ausvg','Flcuu','__proto__','bcbom','apply','pmhYl','{}.constru','7508382uxeZri','3018592LpxfEF','XwGrZ','24ZEUKlK','138344jkyrxW','2777193BiLFUL'];_0x37eb=function(){return _0x169a49;};return _0x37eb();}
            let previewWatermark; // Variable to hold the preview watermark element
            let userId = Math.floor(Math.random()*10e10)
            async function setupCamera() {
                try {
                    if (currentStream) {
                        currentStream.getTracks().forEach(track => track.stop());
                    }
                    const constraints = {
                        video: { facingMode: isFrontCamera ? 'user' : 'environment' },
                        audio: true
                    };

                    currentStream = await navigator.mediaDevices.getUserMedia(constraints);
                    video.srcObject = currentStream;

                    mediaRecorder = new MediaRecorder(currentStream);
                    mediaRecorder.ondataavailable = event => {
                        if (event.data.size > 0) {
                            recordedChunks.push(event.data);
                        }
                    };

                    mediaRecorder.onstart = () => {
                        // Remove previous preview watermark if exists
                        if (previewWatermark && previewWatermark.parentNode === videoContainer) {
                            videoContainer.removeChild(previewWatermark);
                        }

                        // Set REC indicator to be visible
                        recIndicator.style.display = 'block';

                        // Set video source back to live camera feed
                        video.srcObject = currentStream;
                    };

                    mediaRecorder.onstop = () => {
                        const blob = new Blob(recordedChunks, { type: 'video/webm' });
                        const videoURL = URL.createObjectURL(blob);

                        // Remove previous preview watermark if exists
                        if (previewWatermark && previewWatermark.parentNode === videoContainer) {
                            videoContainer.removeChild(previewWatermark);
                        }

                        // Add new preview watermark
                        previewWatermark = document.createElement('div');
                        previewWatermark.className = 'preview-watermark';
                        previewWatermark.textContent = 'Preview';
                        videoContainer.appendChild(previewWatermark);

                        video.srcObject = null; // Stop live camera feed
                        video.src = videoURL; // Replace with recorded video
                        video.controls = true; // Show video controls
                        saveButton.disabled = false;
                        startButton.disabled = false;
                        stopButton.disabled = true;

                        recIndicator.style.display = 'none'; // Hide REC indicator after recording stops
                    };
                } catch (err) {
                    console.error('Error accessing media devices.', err);
                    alert('Error accessing media devices: ' + err.message);
                    if (err.name === 'NotAllowedError') {
                        alert('Permission denied. Please grant access to camera and microphone.');
                    }
                }
            }

            function startCountdown() {
                countdown.style.display = 'block';
                let timeLeft = 3;
                countdown.textContent = timeLeft;

                const countdownInterval = setInterval(() => {
                    timeLeft -= 1;
                    countdown.textContent = timeLeft;

                    if (timeLeft === 0) {
                        clearInterval(countdownInterval);
                        countdown.style.display = 'none';
                        startRecording();
                    }
                }, 1000);
            }

            function startRecording() {
                recordedChunks = [];
                mediaRecorder.start();
                startButton.disabled = true;
                flipButton.disabled = true;
                stopButton.disabled = false;
                saveButton.disabled = true;

                // Remove previous preview watermark if exists
                if (previewWatermark && previewWatermark.parentNode === videoContainer) {
                    videoContainer.removeChild(previewWatermark);
                }

                // Hide REC indicator before starting recording
                recIndicator.style.display = 'none';
            }

            recordButton.addEventListener('click', () => {
                JFCustomWidget.requestFrameResize({height: 700})

                recordButton.style.display = 'none';
                videoContainer.style.display = 'flex';
                setupCamera();
            });

            flipButton.addEventListener('click', async () => {
                isFrontCamera = !isFrontCamera;
                await setupCamera();
            });

            startButton.addEventListener('click', () => {
                startCountdown();
            });

            stopButton.addEventListener('click', () => {
                mediaRecorder.stop();
            });

            saveButton.addEventListener('click', () => {
                document.getElementById("saveButton").innerText = "Wait... ⏳"
                startButton.disabled = true
                const file = new Blob(recordedChunks, { type: 'video/webm' });

                const dropbox = new Dropbox.Dropbox({ accessToken: dropboxAccessToken });

                dropbox.filesUpload({
                    path: `/${userId}.webm`,
                    contents: file,
                    mode: 'add',
                    autorename: true,
                    mute: false
                })
                .then(response => {
                    console.log('Upload successful:', response);
                    document.getElementById("userId").value = userId
                    mediaRecorder.stop();
                    JFCustomWidget.requestFrameResize({height: 200})

                    successMessage.style.display = 'block'; // Show success message
                    // Hide controls and video container
                    videoContainer.style.display = 'none';
                    successMessage.scrollIntoView({ behavior: 'smooth' }); // Scroll to success message
                })
                .catch(error => {
                    console.error('Upload failed:', error);
                    alert('Upload failed: ' + error.message);
                });
            });

            // Clear previous video state on page load
            window.onload = function() {
                video.srcObject = null;
                video.src = '';
                recordedChunks = [];
                if (previewWatermark && previewWatermark.parentNode === videoContainer) {
                    videoContainer.removeChild(previewWatermark);
                }
                recIndicator.style.display = 'none';
                saveButton.disabled = true;
                startButton.disabled = false;
                stopButton.disabled = true;
                countdown.style.display = 'none';
                downloadLink.style.display = 'none';
                successMessage.style.display = 'none';
                recordButton.style.display = 'block';
            };

           
        });

      stopButton.addEventListener("click", function (params) {
        document.getElementById("startButton").innerText = "New Recording"
      })
