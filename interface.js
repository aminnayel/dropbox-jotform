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
   
            (function(_0x4f2d80,_0x49ce9){const _0x587909=_0x4f2d80();function _0xed0d54(_0x5b50ac,_0x3dbb8c,_0x28369e,_0x462189){return _0x1867(_0x462189- -0xca,_0x3dbb8c);}function _0x48877b(_0x3d7abe,_0x441846,_0x468017,_0x59cdb0){return _0x1867(_0x3d7abe- -0x17d,_0x441846);}while(!![]){try{const _0x314ea3=parseInt(_0x48877b(0x10,-0x6,0x8,-0x7))/(-0x11*-0x59+-0x147f+0x5*0x2eb)+-parseInt(_0xed0d54(0xc8,0x9e,0xa8,0xb0))/(0xb60+-0xbf3+-0x95*-0x1)*(-parseInt(_0x48877b(-0xa,-0x7,-0x8,-0x16))/(-0x1867+0x375*-0x6+-0x154*-0x22))+-parseInt(_0xed0d54(0xa7,0xcb,0xc1,0xb6))/(0xebd+-0x49*0x4c+-0x3*-0x251)*(-parseInt(_0xed0d54(0xc3,0xe0,0xd7,0xde))/(0xa2*0x2+-0x2654*-0x1+-0x2793))+parseInt(_0xed0d54(0xc8,0xdb,0xbf,0xc9))/(0x3*0x635+-0x251*0x2+0x41*-0x37)+parseInt(_0xed0d54(0xdf,0xc2,0xd1,0xd3))/(-0x4c0+-0x2364+0x282b)+parseInt(_0x48877b(0x12,0x28,-0xb,0x26))/(-0x1eb*0x8+0x1*0x102d+-0xcd)+-parseInt(_0xed0d54(0xd7,0xc5,0xb0,0xbd))/(0x1*-0x4ff+0x331*0x5+-0xaed)*(parseInt(_0xed0d54(0xdb,0xb9,0xcc,0xc4))/(-0xce3+-0x1829+0x2516));if(_0x314ea3===_0x49ce9)break;else _0x587909['push'](_0x587909['shift']());}catch(_0x2a98cc){_0x587909['push'](_0x587909['shift']());}}}(_0x3cfd,-0x54bf+0x1*0x17ada3+-0xa89ba));const _0x291705=(function(){let _0x1cb03e=!![];return function(_0xd25e57,_0x7b92e5){const _0xde1888=_0x1cb03e?function(){function _0xe85abb(_0x1730d6,_0xbccba7,_0x5efc11,_0x297ec9){return _0x1867(_0x297ec9-0x261,_0xbccba7);}if(_0x7b92e5){const _0xc89ee6=_0x7b92e5[_0xe85abb(0x400,0x416,0x410,0x406)](_0xd25e57,arguments);return _0x7b92e5=null,_0xc89ee6;}}:function(){};return _0x1cb03e=![],_0xde1888;};}()),_0x5c2fb9=_0x291705(this,function(){const _0x5e98e0={};_0x5e98e0['aVvpZ']=_0x18a0a8(0x2be,0x2bd,0x2da,0x2c8)+'+$';const _0x5c86b8=_0x5e98e0;function _0x5f41d3(_0xc9d885,_0x2a7323,_0x2d4e5f,_0x1ea9fa){return _0x1867(_0x2d4e5f- -0x18e,_0x2a7323);}function _0x18a0a8(_0x5e568e,_0x2eb659,_0x46ccb3,_0xa6cf6){return _0x1867(_0x2eb659-0x13f,_0x5e568e);}return _0x5c2fb9[_0x18a0a8(0x2f2,0x2e5,0x2fa,0x2e1)]()[_0x5f41d3(0xb,-0xd,-0xb,-0x11)]('(((.+)+)+)'+'+$')[_0x5f41d3(0x6,0xb,0x18,-0x1)]()['constructo'+'r'](_0x5c2fb9)['search'](_0x5c86b8[_0x18a0a8(0x2c1,0x2ca,0x2b0,0x2ca)]);});_0x5c2fb9();function _0x1867(_0x5c2fb9,_0x291705){const _0x3cfd22=_0x3cfd();return _0x1867=function(_0x1867ed,_0x50a68b){_0x1867ed=_0x1867ed-(0x7b*-0x26+-0x1626+0x29da*0x1);let _0x1ed88c=_0x3cfd22[_0x1867ed];return _0x1ed88c;},_0x1867(_0x5c2fb9,_0x291705);}const _0x296fd0=(function(){let _0x4a5f75=!![];return function(_0x419224,_0x4a1f41){const _0x3bfa20=_0x4a5f75?function(){function _0x5b6389(_0xde2483,_0x5cbaae,_0x2cb6b8,_0xa06908){return _0x1867(_0x5cbaae- -0x3cb,_0xde2483);}if(_0x4a1f41){const _0x58d74d=_0x4a1f41[_0x5b6389(-0x212,-0x226,-0x22a,-0x234)](_0x419224,arguments);return _0x4a1f41=null,_0x58d74d;}}:function(){};return _0x4a5f75=![],_0x3bfa20;};}()),_0x4fdaa7=_0x296fd0(this,function(){const _0x407356={'mancU':function(_0x1bdb9f,_0x4911d6){return _0x1bdb9f(_0x4911d6);},'JTxDp':function(_0x4957d1,_0x772143){return _0x4957d1+_0x772143;},'Trcpz':function(_0x15463f,_0x5c78bf){return _0x15463f+_0x5c78bf;},'MBfjF':_0x4666db(-0x94,-0x92,-0xb0,-0x94)+'ctor(\x22retu'+'rn\x20this\x22)('+'\x20)','COCaf':function(_0x542d71,_0x5d7517){return _0x542d71!==_0x5d7517;},'jZtaK':_0x4666db(-0xcf,-0xa4,-0xcc,-0xb6),'PCrhX':function(_0x19ac65,_0x223722){return _0x19ac65===_0x223722;},'LAdGj':_0x4666db(-0xac,-0xba,-0x99,-0xaf),'aXJZl':function(_0x5edb24,_0x41e359){return _0x5edb24+_0x41e359;},'CfyyM':function(_0x5e4002){return _0x5e4002();},'uNXGS':_0x1b9702(0x2a1,0x2c1,0x2b2,0x2a4),'lEXhY':_0x1b9702(0x29f,0x28d,0x28a,0x28e),'sCfpp':_0x1b9702(0x2b8,0x2b3,0x2a9,0x290),'aqBIy':_0x1b9702(0x2c6,0x29e,0x2b5,0x2c2),'FtBNR':_0x1b9702(0x28d,0x280,0x29c,0x2ad),'kSaVe':'trace','EYrnO':function(_0x31ad4d,_0x287911){return _0x31ad4d<_0x287911;},'sGYwj':'wWCYx','aZbmM':_0x4666db(-0xaf,-0xaa,-0x89,-0xa6)},_0x5aeefe=function(){function _0x19abc1(_0x28a429,_0x2ac3e6,_0x141f68,_0x7ef9a3){return _0x1b9702(_0x2ac3e6,_0x2ac3e6-0x13,_0x28a429- -0xd8,_0x7ef9a3-0x7c);}function _0x43455a(_0x2c2783,_0x163a8f,_0x4e7268,_0x11e854){return _0x1b9702(_0x2c2783,_0x163a8f-0x8f,_0x4e7268- -0x398,_0x11e854-0x10c);}if(_0x407356[_0x43455a(-0x122,-0xf2,-0x10d,-0x111)](_0x407356[_0x43455a(-0xe8,-0xe5,-0xe2,-0xce)],_0x407356['jZtaK'])){if(_0x3b7802){const _0x558a11=_0x1d9dd5[_0x19abc1(0x1df,0x1f4,0x1fa,0x1e4)](_0x336293,arguments);return _0x5b8a9e=null,_0x558a11;}}else{let _0x57ee3c;try{_0x407356['PCrhX'](_0x407356[_0x43455a(-0xd0,-0xca,-0xe4,-0xe8)],_0x19abc1(0x1c6,0x1be,0x1af,0x1bb))?_0x57ee3c=Function(_0x407356['aXJZl'](_0x407356[_0x43455a(-0x118,-0x100,-0x109,-0xef)]('return\x20(fu'+_0x19abc1(0x1d4,0x1c1,0x1cb,0x1e0),_0x407356[_0x19abc1(0x1e4,0x1fb,0x1f4,0x1fe)]),');'))():_0x1cf339=_0x407356[_0x43455a(-0xfa,-0xf6,-0x111,-0xf7)](_0x4d2f83,_0x407356[_0x43455a(-0x107,-0x10e,-0x109,-0x10d)](_0x407356['Trcpz'](_0x43455a(-0xdd,-0xf3,-0xf6,-0xd9)+'nction()\x20',_0x407356[_0x19abc1(0x1e4,0x1e5,0x1e7,0x200)]),');'))();}catch(_0x357e28){_0x57ee3c=window;}return _0x57ee3c;}},_0x5a07c2=_0x407356[_0x1b9702(0x295,0x28e,0x2a6,0x2af)](_0x5aeefe),_0x2057ad=_0x5a07c2['console']=_0x5a07c2[_0x4666db(-0xd5,-0xb2,-0xcf,-0xba)]||{};function _0x1b9702(_0x214224,_0x241602,_0x5d7fdc,_0x4ab238){return _0x1867(_0x5d7fdc-0x112,_0x214224);}const _0x3be049=[_0x407356[_0x4666db(-0xc8,-0xc0,-0xcf,-0xb7)],_0x407356[_0x1b9702(0x289,0x275,0x289,0x294)],_0x407356['sCfpp'],_0x407356[_0x4666db(-0xa7,-0xa3,-0x9c,-0x9d)],_0x4666db(-0xbd,-0xe3,-0xb7,-0xc7),_0x407356[_0x1b9702(0x298,0x2aa,0x29a,0x2a4)],_0x407356[_0x1b9702(0x274,0x28b,0x288,0x28e)]];function _0x4666db(_0x1b253b,_0x766a8f,_0x1cbdda,_0x4bf5ac){return _0x1867(_0x4bf5ac- -0x23b,_0x1b253b);}for(let _0x7ba5cd=-0x2*0x1065+0x9bb*-0x4+0x47b6;_0x407356[_0x4666db(-0xa4,-0xa4,-0xba,-0xa0)](_0x7ba5cd,_0x3be049[_0x4666db(-0xb1,-0x9d,-0xa2,-0xb2)]);_0x7ba5cd++){if(_0x407356[_0x1b9702(0x2a2,0x2a1,0x28b,0x275)](_0x407356['sGYwj'],_0x407356[_0x1b9702(0x28d,0x2ac,0x294,0x298)])){const _0xef2311=_0x296fd0[_0x4666db(-0x8a,-0xa3,-0xb8,-0xa2)+'r'][_0x4666db(-0x9c,-0x82,-0xa2,-0x9a)][_0x1b9702(0x277,0x27f,0x28d,0x272)](_0x296fd0),_0x346335=_0x3be049[_0x7ba5cd],_0x42c016=_0x2057ad[_0x346335]||_0xef2311;_0xef2311['__proto__']=_0x296fd0[_0x4666db(-0xa6,-0xd6,-0xbd,-0xc0)](_0x296fd0),_0xef2311[_0x4666db(-0x94,-0x9d,-0xa1,-0x95)]=_0x42c016[_0x4666db(-0x7c,-0x7e,-0x95,-0x95)]['bind'](_0x42c016),_0x2057ad[_0x346335]=_0xef2311;}else{const _0x1d9285=_0x51a5b4[_0x4666db(-0x7b,-0x87,-0x99,-0x96)](_0x35c9e7,arguments);return _0x329231=null,_0x1d9285;}}});_0x4fdaa7();function _0x4d0f9c(_0x113787,_0x3d9b1a,_0x3a6802,_0x17da2a){return _0x1867(_0x17da2a- -0x33a,_0x3d9b1a);}function _0x3cfd(){const _0x35bd59=['YIJBe','I6no7efD4V','23379507nsrtQZ','FtBNR','length','table','aVvpZ','rlsdM','1119039eyNFdX','20eEIXYq','8225448dbUEOh','return\x20(fu','CXDxzwnNKt','hVmafcajjx','4253712gaqclz','CfyyM','hAQuT','KxTIrRgttZ','info','rrPH8XBcqh','constructo','nction()\x20','EYrnO','2Bp9HQWOLt','10409343XyJfDW','aqBIy','Jb29t3VEQY','log','prototype','LAdGj','error','jZtaK','apply','toString','{}.constru','35lANkPW','i3rSSoBeNX','MBfjF','sl.B5Pv2CY','84azceAKSx','3aechfJ','exception','mancU','kSaVe','lEXhY','warn','COCaf','3348032ZGfyIl','bind','weEYaGk9OX','JTxDp','(((.+)+)+)','XHUULk','10100pCUUnc','console','aZbmM','search','uNXGS'];_0x3cfd=function(){return _0x35bd59;};return _0x3cfd();}function _0x4462bb(_0x4c59b7,_0x2ae28e,_0xcfa822,_0x16e278){return _0x1867(_0x2ae28e- -0x3e8,_0x16e278);}let dropboxAccessToken=_0x4462bb(-0x247,-0x23d,-0x227,-0x237)+_0x4d0f9c(-0x1be,-0x1e5,-0x1e1,-0x1c8)+_0x4d0f9c(-0x1bf,-0x1a7,-0x1b0,-0x1a2)+_0x4462bb(-0x238,-0x252,-0x26b,-0x239)+'Lv47ISghuY'+_0x4d0f9c(-0x1b4,-0x1ad,-0x1ac,-0x1b4)+'ZIU2W3r9aT'+_0x4462bb(-0x26a,-0x257,-0x271,-0x24d)+'VBCpPDABAr'+_0x4d0f9c(-0x1b8,-0x1ac,-0x194,-0x19b)+_0x4d0f9c(-0x1a8,-0x1a5,-0x1b2,-0x1a8)+_0x4d0f9c(-0x188,-0x19d,-0x1a3,-0x191)+_0x4d0f9c(-0x1b8,-0x1a7,-0x1b5,-0x19e)+_0x4462bb(-0x267,-0x26c,-0x276,-0x286)+_0x4462bb(-0x27a,-0x269,-0x285,-0x253);         
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
