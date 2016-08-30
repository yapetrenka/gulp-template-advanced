<?
$PAGE['meta_title'] = "Главная";
$page = 'index';
include("../templates/main/header.tpl.php");
?>

<div class="layout-main">
    <div class="main-slider__wrap">
        <div class="main-slider">
            <?for ($i=1; $i<=8; $i++) {?>
            <div class="main-slider__item">
                <a href="/uploads/images/slider/big/slide_img_<?=$i?>.jpg" data-exthumbimage="/uploads/images/slider/thumb/slide_img_<?=$i?>.jpg"><img src="/uploads/images/slider/prev/slide_img_<?=$i?>.jpg" alt=""></a>
            </div>
            <?}?>
        </div>
    </div>
</div>

<?
include("../templates/main/footer.tpl.php");
?>