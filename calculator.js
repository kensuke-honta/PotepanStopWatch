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
    
    if (text === "=") {
        concatText = eval(concatText);
      } else if (text === "AC") {
        concatText = "";
      } else if (concatText === "0" && text === "0") {
        concatText = "0";
      }  else if (concatText === "" && text === "0") {
        concatText = "0";
      } else if (concatText === "" && text === "00") {
        concatText = "0";
      } else if (concatText === "0" && text === ".") {
        concatText = "0.";
      } else if (concatText === "0" && text !== "0") {
        concatText = text;
      } else if (concatText === "" && text === ".") {
        concatText = "0.";
      } else {
        concatText += text;
      } result.textContent = concatText;
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



/*const point = document.getElementById(`point`);
point.addEventListener(`click`,() =>{

})
function check00(){
    if(text.slice( 0, 2 ) === "00"){
        text.disabled =true;
    }
     else 
       return result;
}*/

