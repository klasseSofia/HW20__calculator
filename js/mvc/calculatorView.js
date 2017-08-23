calculatorView = function(){
    this.textbox = function(name, value){
        var textbox;
        textbox = document.createElement("input");
        textbox.type = "text";
        textbox.value = value;
        document.getElementById(name).appendChild(textbox);
        return textbox;
    }
    this.buttons = function(value,div, id) {
        var button;
        button = document.createElement("button");
        button.value = value
        button.id = id+value;
        button.appendChild(document.createTextNode(value));
        div.appendChild(button);
        return button;
    }
    this.div = function(divName){
        var div;
        div = document.createElement("div");
        div.id = divName;
        return div;
    }
    this.append = function(div, element){
        div.appendChild(element);
    }
    this.getElement = function(name){
        return document.getElementById(name);
    }
}