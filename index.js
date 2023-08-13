import inquirer from 'inquirer';
import qr from 'qr-image';
import fs, { writeFile } from 'fs';

inquirer
  .prompt([
    /* Pass your questions in here */{
        message:"Type in URL",
        name:"URL",
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url =answers.URL;
    //console.log(answers);
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile("URL.txt",url,(err)=>{
        if(err) throw err;
        console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
