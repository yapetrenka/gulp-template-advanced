<?header ("Content-Type: text/html;charset=utf-8"); ?>
<!DOCTYPE html>
<head>
    <meta charset="utf-8">
	<title><?=trim($PAGE['meta_title'])?></title>
<?if(!empty($PAGE['meta_keywords'])){?>
    <meta name="keywords" content="<?=$PAGE['meta_keywords']?>">
<?}?>
<?if(!empty($PAGE['meta_description'])){?>
    <meta name="description" content="<?=$PAGE['meta_description']?>">
<?}?>
    <meta content="width=device-width, initial-scale=1" name="viewport">
	<link rel="stylesheet" href="/skin/styles/foundation.css" type="text/css" media="screen">
	<link rel="stylesheet" href="/skin/styles/app.css" type="text/css" media="screen">
</head>

<body>
    <div class="main-container<?=$page=='index' ? ' index-page' : ''?>">