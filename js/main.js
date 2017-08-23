
calculatorController.init();
calculatorModel.init();
calculatorView.init();

function Main(type) {
    var  name, that = this, controllerObject;
    init = function(){
        name = type;
        controllerObject = new calculatorController(name);
    }
    init();
}