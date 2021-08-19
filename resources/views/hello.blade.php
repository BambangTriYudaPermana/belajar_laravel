<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            margin : 15%;
        }
    </style>
</head>
<body>
    <div id="app">
        <h1>hello world @{{ title }}</h1>
        <header-component></header-component>
        <example-component></example-component> 
        <footer-component></footer-component>
    </div>
    <div id="isi">
        <h1>ini isi @{{judul}} @{{nama}}</h1>
        <input type="text" name="nama" value="bambang">
    </div>

    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>