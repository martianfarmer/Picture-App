const  fs = require('fs'),
       path = require('path'),
       JSZip = require('jszip'),
       request = require('request'),
       Emitter = require('events');

class MyEmitter extends Emitter{}

module.exports = {
  showHome : (req,res) => {

      const controller = new MyEmitter();

      let zip = new JSZip();
      zip.folder('Pictures');

      download('https://www.google.com/images/srpr/logo3w.png', 'google.png', function(){
          zip.file("Pictures/google.png", (path.join(__dirname,'../', 'google.png')));
          controller.emit('done');
      });

      controller.on('done', () =>{

         zip.generateNodeStream({type: 'nodebuffer', streamFiles:true})
             .pipe(fs.createWriteStream('out.zip'))
             .on('finish', () =>{
                 let file = path.join(__dirname, '../','out.zip');
                 res.sendFile(file)
                     /*.then(() => {
                         console.log('file sent');
                         fs.unlink(file);
                     })*/
             })

      })
  }
};

const download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);

    });
};
