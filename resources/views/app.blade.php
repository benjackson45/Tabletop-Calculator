<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @inertiaHead
    <title>Document</title>
</head>
<body>
    @inertia
    <h1>Welcome to Julysixth Park!</h1>
    <p>This is a test</p>
</body>
</html>