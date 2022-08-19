//callback function
function  receivesAFunction(callback){
    callback();
}

//returning a function
function returnsANamedFunction(){
    return function callback(){

    }

}
//returning anonymous function
function returnsAnAnonymousFunction(){
    return function(){

    }
}
