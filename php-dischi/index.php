<?php include './../dischi.php'; ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>php dischi</title>
        <link rel="stylesheet" href="./../public/app.css">
    </head>
    <body>
        <header>
            <div class="container">
                <div class="logo-container">
                    <img src="https://www.pngkey.com/png/full/48-481733_spotify-logo-button-vector-spotify-white-logo-transparent.png" alt="spotify logo">
                </div>
            </div>
        </header>
        <main>
            <div class="container">
                <div class="card-container">
                    <?php
                    foreach ($dischi as $disco) { ?>
                        <div class="card">
                            <div class="poster-container">
                                <img src="<?php echo $disco['poster']; ?>" alt="<?php echo $disco['title']; ?>">
                            </div>
                            <h5 class="song-title"><?php echo $disco['title']; ?></h5>
                            <div class="song-author"><?php echo $disco['author']; ?></div>
                            <small class="song-year"><?php echo $disco['year']; ?></small>
                        </div> <?php
                    }
                    ?>
                </div>
            </div>
        </main>
    </body>
</html>
