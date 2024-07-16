
for (let i = 0; i <= 100; i++)
{
    if (i % 2 != 0 && i % 5 != 0){
        console.log(i)
    } else
    {
        let output = '';
        if (i % 2 == 0)
        {
            output += "Baz";
        }
        if (i % 5 == 0)
        {
            output += "inga!"
        }
       console.log(output)
    }
}