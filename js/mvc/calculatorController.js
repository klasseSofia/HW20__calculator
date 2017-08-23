function calculatorController(name){
    var modelObject = new calculatorModel(),
        viewObject = new calculatorView(),
        controllerScope = this,textbox;

    this.calculatorController = function (){
        var  index = 0,mainDiv, numberDiv, operatorDiv, numberButton, operatorButton, htmlElementObject, initialTextboxValue = 0, numberValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], operatorValues = ["+", "-", "*", "/","=", "C"];
        mainDiv = viewObject.getElement(name);
        textbox = viewObject.textbox(name, initialTextboxValue);
        numberDiv = viewObject.div(name+"numberDiv");
        while(index < numberValues.length) {
            numberButton = viewObject.buttons(numberValues[index], numberDiv,"number");
            numberButton.onclick = function(){controllerScope.append(this.value);}
            index++;
        }
        index = 0;
        operatorDiv = viewObject.div(name+"operatorDiv");
        while(index < operatorValues.length){
            operatorButton = viewObject.buttons(operatorValues[index], operatorDiv,"operator");
            operatorButton.onclick = function(){controllerScope.compute(this.value);}
            index++;
        }
        viewObject.append(mainDiv,textbox);
        viewObject.append(mainDiv, numberDiv);
        viewObject.append(mainDiv, operatorDiv);
        return textbox;
    }
    this.append = function(value){
        var input = modelObject.getInput();
        if(input === 0 ){
            input = value;
        }
        else
        {
            input += value;
        }
        textbox.value = input;
        modelObject.setInput(input);
    }
    this.compute = function(buttonValue){
        var input, result, value, inputText, length, operator, operand, textboxValue;
        value = buttonValue;
        input = modelObject.getInput();
        result = modelObject.getResult();
        operator = modelObject.getOperator();
        textboxValue = textbox.value;
        if(value === "C"){
            input = 0;
            result = 0;
            textbox.value = input;
        } else {
            length = input.length;

            if(result === 0 ) {
                result = Number(input);
                operator = value;
            } else {
                operand = Number(input);

                switch (operator) {
                    case '+':result += operand;
                        break;
                    case '-':result -= operand;
                        break;
                    case '*':result *= operand;
                        break;
                    case '/':result /= operand;
                        break;
                }
                operator = value;
            }
            if(operator !== "")
                input = 0;
            textbox.value = result;
        }
        modelObject.setInput(input);
        modelObject.setResult(result);
        modelObject.setOperator(operator);
    }
    textbox = controllerScope.calculatorController();
}