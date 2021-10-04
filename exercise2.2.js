const path = require('path');
const fs = require('fs');

const dirSearch = loc => {
    fs.readdir(loc, function (err, files) {  
        if (err) {
            console.error(err);
        } 
        
        files.forEach(function (file) {
            if(fs.lstatSync(path.join(loc, file)).isDirectory())
                dirSearch(path.join(loc, file));
            if(path.extname(file) === '.js')
                console.log(path.join(loc, file));
        });
    });
};

dirSearch('./test');