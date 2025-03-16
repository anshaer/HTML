// 畫面擷取功能
document.getElementById("startButton").addEventListener("click", async () => {
    try {
        const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        const videoElement = document.getElementById("screenVideo");
        videoElement.srcObject = stream;
        document.getElementById("startButton").style.display = "none";
    } catch (err) {
        console.error("擷取失敗:", err);
    }
});

// 即時參數調整功能
const screen = document.querySelector('.screen');
const inputs = {
    rotateY: document.getElementById('rotateY'),
    rotateX: document.getElementById('rotateX'),
    scale: document.getElementById('scale')
};

function updateTransform() {
    const rotateY = inputs.rotateY.value;
    const rotateX = inputs.rotateX.value;
    const scale = inputs.scale.value;
    
    screen.style.transform = `
        rotateY(${rotateY}deg) 
        rotateX(${rotateX}deg) 
        scale(${scale})
    `;

    // 更新數值顯示
    document.getElementById('rotateYValue').textContent = `${rotateY}°`;
    document.getElementById('rotateXValue').textContent = `${rotateX}°`;
    document.getElementById('scaleValue').textContent = scale;
}

// 綁定事件監聽
inputs.rotateY.addEventListener('input', updateTransform);
inputs.rotateX.addEventListener('input', updateTransform);
inputs.scale.addEventListener('input', updateTransform);
