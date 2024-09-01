const getForcast = require("./utils/getForcast");
const chalk = require("chalk");

const address = process.argv[2];

if(!address){
    console.log(chalk.red.inverse("Please provide an address"));
} else {

    getForcast(address, (error, { description, temperature, feelslike, location}) => {
        if(error){
            console.log(chalk.red.inverse(error));
        }else{
            console.log(chalk.green.inverse(`${description}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees in ${location}.`));
        }
    })

}