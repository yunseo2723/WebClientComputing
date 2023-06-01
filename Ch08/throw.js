try{
    //예외 객체 만들기
    const error = new Error('메세지');
    error.name = '내맘대로 오류';
    error.message = '오류의 메세지'

    //예외발생
    throw error;
} catch(exception){
    //예외 객체 출력
    console.log(`${exception.name} 예외가 발생했습니다.`);
    console.log(exception.message);
}