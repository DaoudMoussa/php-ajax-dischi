<?php include './../dischi.php'; ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>php dischi</title>
    </head>
    <body>
        <?php
            foreach ($dischi as $disco) { ?>
                <div class="card">
                    <img src="<?php echo $disco['poster']; ?>" alt="<?php echo $disco['title']; ?>">
                    <h5 class="song-title"><?php echo $disco['title']; ?></h5>
                    <div class="song-author"><?php echo $disco['author']; ?></div>
                    <small><?php echo $disco['year']; ?></small>
                </div> <?php
            }
        ?>
    </body>
</html>
