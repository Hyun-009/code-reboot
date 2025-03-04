const timeDisplay = document.querySelector('.time')
const startBtn = document.querySelector('.start')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')


let timer = null;
let seconds = 0;

function updateTime() {

    
    
    const hour = Math.floor(seconds / 3600) // 시간 계산
    const mins = Math.floor((seconds % 3600) / 60) // 분 계산 
    const secs = seconds % 60 // 초 계산
    
    
    //console.log(hour, mins, secs);
    // padStart(2, '0')를 사용하여 한 자리 숫자인 경우 앞에 0을 추가합니다
    
    timeDisplay.textContent=   
    `${String(hour).padStart(2,'0')}:
    ${String(mins).padStart(2,'0')}:
    ${String(secs).padStart(2,'0')}`
    
}

function startTimer() {

    if (!timer) {

        timer = setInterval(function () {
            seconds++
            updateTime()
        }, 1000)
    }
}
function stopTimer() {

    clearInterval(timer)
    timer = null

}
function resetTimer() {

    clearInterval(timer)
    timer = null
    seconds = 0;
    updateTime()
}

startBtn.addEventListener('click', startTimer)
stopBtn.addEventListener('click', stopTimer)
resetBtn.addEventListener('click', resetTimer)

updateTime()