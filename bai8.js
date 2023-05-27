// pt: ax + b = 0
var a = prompt('nhap so a: ');
var b = prompt('nhap so b: ');
if(Number(a) == 0)
{
    if(Number(b) == 0)
    {
        console.log('phương trình vô số nghiệm');
    }
    else
    {
        console.log('phương trình vô nghiệm');
    }
}
else
{
    console.log('phương trình có nghiệm duy nhất là:', - b / a);
}

