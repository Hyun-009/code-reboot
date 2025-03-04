document.addEventListener('DOMContentLoaded', function () {
    //  1. 계산기 화면(디스플레이)와 버튼 목록 가져오기
    const screen = document.querySelector('#display')
    const btns = document.querySelectorAll('#buttons button')

    let expression = ''// 사용자가 입력한 수식을 저장하는 변수



    //  2. 모든 버튼에 클릭 이벤트 추가
    btns.forEach(btn => {
        btn.addEventListener('click', () => handleInput(btn.textContent))
    })

    //  3. 버튼 클릭 시 동작을 처리하는 함수
    function handleInput(val) {

        const lastChar = expression.slice(-1)// 현재 입력된 수식의 마지막 문자 가져오기
        // console.log(val);

        if (isNumberOrDot(val)) {
            // 숫자 또는 '.'이면 그대로 추가
            appendToExpression(val)
        } else if (isOperator(val)) {
            // 연산자가 연속으로 입력되지 않도록 방지
            if (!isOperator(lastChar)) appendToExpression(val)
        } else if (val === 'C') {
            clearExpression()
        } else if (val === '=') {
            calculateResult()
        }

    }

    //  4. 입력값이 숫자 '.' 확인하는 함수
    function isNumberOrDot(val) {
        return !isNaN(val) || val === '.'// 숫자이거나 '.'이면 true 반환
    }
    //  5. 입력값이 연산자('+', '-', '*', '/')인지 확인하는 함수
    function isOperator(val) {
        return "+-*/".includes(val)
    }


    //  6. 수식(expression)에 값을 추가하고 화면에 표시하는 함수

    function appendToExpression(val) {
        expression += val
        screen.value = expression

    }

    //  7. 'C' 버튼을 눌렀을 때 계산기를 초기화하는 함수
    function clearExpression() {
        expression = ''
        screen.value = '0'
    }

    //  8. '=' 버튼을 눌렀을 때 계산 결과를 표시하는 함수
    /*
            try {
           // 오류가 발생할 가능성이 있는 코드
        } catch (error) {
           // 오류 발생 시 실행할 코드
        }
        try 블록: 오류가 발생할 가능성이 있는 코드를 실행하는 부분입니다.
        catch 블록: try에서 오류가 발생하면 실행되며, 오류 정보를 처리할 수 있습니다.


*/
    function calculateResult() {
        try {
            const result = eval(expression)// eval()을 사용해 계산 수행
            if(isFinite(result)){
                expression=String(result)
                screen.value=expression
            } else{
                throw new Error('계산 오류 입니다.')
            }

        }catch{
            clearExpression()
            screen.value = 'Error'
        }



    }
})//end