let video;
let poseNet;
let poses = [];

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);

  // Teachable Machine Pose 모델 로드
  const poseModelURL = "./model";
  poseNet = ml5.poseNet(video, poseModelURL, modelLoaded);
}

function modelLoaded() {
  console.log("Teachable Machine Pose Model Loaded!");
}

function draw() {
  image(video, 0, 0, width, height);

  // 캡처된 프레임에서 손동작 감지
  if (poses.length > 0) {
    const keypoints = poses[0].pose.keypoints;

    // 여기에서 keypoints를 사용하여 손동작 처리 가능
    console.log(keypoints);
  }
}

function gotPoses(results) {
  poses = results;
}

// Teachable Machine Pose 이벤트 리스너 등록
poseNet.on("pose", gotPoses);
