

calculatorModel = function () {
    var input = 0, result = 0, operator = "";
    this.getInput = function () {
        return input;
    }
    this.setInput = function(receivedInput){
        input = receivedInput;
    }
    this.getResult = function(){
        return result;
    }
    this.setResult = function(receivedResult){
        result = receivedResult;
    }
    this.getOperator = function(){
        return operator;
    }
    this.setOperator = function(receivedOperator){
        operator = receivedOperator;
    }
}