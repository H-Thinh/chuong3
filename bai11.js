var check = true;
var a = prompt('nhap a:');
var b = prompt('nhap b:');
var c = prompt('nhap c:');
a = Number(a);
b = Number(b);
c = Number(c);
if(a <= 0 && b <= 0 && c <= 0, (a + b < c || b + c < a || c + a < b))
{
    console.log("Không tạo ra tam giác"); 
    check = false;
}

if (check) 
{
    if (a === b || b === c) 
    {
        console.log("Đây là tam giác đều.");
    } 
    else if (a === b || b === c || c === a) 
    {
        console.log("Đây là tam giác cân.");
    } 
    else if (a * a + b * b === c * c || b * b + c * c === a * a || c * c + a * a === b * b) 
    {
        console.log("Đây là tam giác vuông.");
    } 
    else 
    {
        console.log("Đây là tam giác thường.");
    }
}
else
{
    console.log('vui long nhap lai');
}