let video;
let score = 0;
let flippedVideo;

function setup() {
  createCanvas(1000, 1000);

  // 웹캠 접근
  video = createCapture(VIDEO);
  video.size(width, height);

  // 웹캠 영상을 좌우 반전시킵니다.
  
  flippedVideo = ml5.flipImage(video);

  // face-api.js 모델 로드
  faceapi.load().then(startFaceDetection);
}


function startFaceDetection() {
  // 얼굴 감지 시작
  // ...
}



function startFaceDetection() {
  // face-api.js를 사용하여 웹캠에서 얼굴 인식하기
  faceapi.detectSingleFace(video).withFaceLandmarks().then((result) => {
    if (result) {
      // 입 인식이 성공한 경우
      const mouth = result.landmarks.getMouth();
      const mouthOpenThreshold = 0.2; // 입을 벌렸다고 판단할 임계값
      const isMouthOpen = mouth[2].y - mouth[0].y > mouthOpenThreshold; // 입이 벌렸는지 여부를 판단합니다.

      if (isMouthOpen) {
        // 입을 벌렸을 때의 동작
        score++;
      }
    }

    // 다음 프레임에서도 얼굴 인식 계속하기
    startFaceDetection();
  }).catch((error) => {
    // 입 인식 중 오류가 발생한 경우
    console.error('Error detecting face:', error);
  });
}

function draw() {
  // 웹캠 영상 그리기
  image(video, 0, 0);

  // 점수 그리기
  fill(255);
  textSize(24);
  textAlign(CENTER, CENTER);
  text(`Score: ${score}`, width / 2, height - 30);
}
