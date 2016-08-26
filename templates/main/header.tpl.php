<?include($_SERVER['DOCUMENT_ROOT']."/templates/header.tpl.php")?>
<header class="main-header">
    <div class="layout-main">
        header
    </div>
</header>

<main class="main-center">
    <?if ($page!='index') {?>
    <div class="layout-main">
        <h1 class="ttl-base"><?=$PAGE['meta_title']?></h1>
    <?}?>