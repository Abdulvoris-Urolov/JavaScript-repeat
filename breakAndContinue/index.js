let i = 0;
while(i <= 20){
    if( i === 7 )
    break;
  console.log(i);
  i++;
}

while(i <= 20){
    if( i%2 !==0 ){
        i++;
        continue;
    }
  console.log(i);
  i++;
}

