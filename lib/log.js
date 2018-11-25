
const ora = require('ora');
const chalk = require('chalk');
const spinner = ora('Downloading Jet template.');
const log=console.log;
let isUd=function(o){return typeof o==='undefined'}


module.exports={
    n:function(txt){
        if(isUd(txt)){
            log();
            return
        }
        log(txt)
    },
    chalk:function(call){
        log(call(chalk));
    },
    green:function(txt){
        log(chalk.green(txt));
    },
    red:function(txt){
        log(chalk.red(txt));
    },
    blue:function(txt){
        log(chalk.blue(txt));
    },
    spin:function(){
        spinner.start();
    },
    spinStop:function(res){
        if(isUd(res)||res===true){
            spinner.succeed();
        }else{
            spinner.fail();
        }
    }

}
