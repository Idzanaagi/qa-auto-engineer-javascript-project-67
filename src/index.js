import axios from 'axios';
import { writeFile } from 'node:fs';

const pageLoader = (path = process.cwd(), address = 'https://ru.hexlet.io/courses') => {
  const name = address.split('//')[1].replace(/\W/gm, '-');
  axios.get(address)
    .then((response) => {
      writeFile(`${path}/${name}.html`, response.data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

pageLoader();
