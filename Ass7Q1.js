
const truncate = (str) => {
    if(str.length > 4){
        const res = str.replace(str.slice(4,str.length),'...');
        console.log(res);
        }
    else console.log(str);
}

truncate('divyprajapati');
