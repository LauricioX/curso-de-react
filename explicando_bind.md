<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
      function carro(){
        let nome = "ferrari"
        console.log(this.cor)
      }

     const info = {
        nome:"ferrari01",
        cor:"preto",
        modelo:"534=22",
        ano:"2022"
     }


     let carroInfo = carro.bind(info);
     carroInfo()

    </script>
</body>
</html>
