<?include($_SERVER['DOCUMENT_ROOT']."/templates/header.tpl.php")?>

    <header class="main-header">
        <div class="layout-main">
            <div class="main-header__layout">
                <div class="header-logo">
                    <a href="/" class="header-logo__link">
                        <svg class="header-logo__svg">
                            <use xlink:href="/skin/images/logo.svg#logo"></use>
                        </svg>
                    </a>
                </div>
                <nav class="header-nav">
                    <ul class="menu">
                        <li class="menu__item"><a href="" class="menu__link active">О компании</a></li>
                        <li class="menu__item"><a href="" class="menu__link">Портфолио</a></li>
                        <li class="menu__item"><a href="" class="menu__link">Акции</a></li>
                        <li class="menu__item"><a href="" class="menu__link">Контакты</a></li>
                    </ul>
                </nav>
                <div class="header-phone os-animation" data-os-animation="fadeInRight" data-os-animation-delay=".5s">
                    <svg class="svg-icon icon-phone header-phone__icon">
                        <use xlink:href="/skin/images/svg-sprite.svg#phone"></use>
                    </svg>
                    <a href="tel:+88008880000" class="header-phone__link">8 800 888 00 00</a>
                </div>
            </div>
        </div>
    </header>

    <main class="main-center">
        <?if ($page!='index') {?>
        <div class="layout-main">
            <h1 class="ttl-base"><?=$PAGE['meta_title']?></h1>
        <?}?>