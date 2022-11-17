const button = document.querySelectorAll("button");
const result = document.querySelector("#result");

let concatText = "";

button.forEach(button => button.addEventListener(`click`,buttonPressed ));
//ボタン押下イベント&メイン処理
function buttonPressed(){
    const text = event.target.textContent;
    //concatTextが数値型の場合はスライス関数が使用できないためチェックを行う
    if(isNaN(concatText)){
        const endChar = concatText.slice(-1);
        if(checkOperator(text) && checkOperator(endChar)){
            return;
        }
    }
    
    if(text === "="){
      concatText = eval(concatText);
    }else if(text === "AC"){
          concatText = "";
    } else{
      concatText += text;
    }
    
    result.textContent = concatText;
  }

  //以下関数

//演算子チェック
function checkOperator(op){
    var result = false;
    if(op.endsWith("+")){
        result = true;
    }
    else if(op.endsWith("-")){
        result = true;
    }
    else if(op.endsWith("*")){
        result = true;
    }
    else if(op.endsWith("/")){
        result = true;
    }
    return result;
}
/*最初は”００”が入力できないようにする
function (){

}
//小数点は一度しか入力できないようにする処理
function (){

}
//”０１２”などの表記の制御
function (){

}
//最初の演算子は”ー”しか入力できないようにする
function checkFirstOperator(){

}*/