    <?if ($page!='index') {?></div><?}//.layout-main?>
</main><?//.main-center?>

    <footer class="main-footer">
        <div class="layout-main">
            <div class="main-footer__layout">
                <div class="footer-copy">Copyright&nbsp;<?=date('Y')?></div>
                <div class="footer-social">
                    <ul class="social">
                        <li class="social__item os-animation" data-os-animation="flipInX" data-os-animation-delay="0s">
                            <a href="" target="_blank" rel="nofollow" class="social__link">
                                <svg class="svg-icon icon-email">
                                    <use xlink:href="/skin/images/svg-sprite.svg#email"></use>
                                </svg>
                            </a>
                        </li>
                        <li class="social__item os-animation" data-os-animation="flipInX" data-os-animation-delay=".05s">
                            <a href="" target="_blank" rel="nofollow" class="social__link">
                                <svg class="svg-icon icon-facebook">
                                    <use xlink:href="/skin/images/svg-sprite.svg#facebook"></use>
                                </svg>
                            </a>
                        </li>
                        <li class="social__item os-animation" data-os-animation="flipInX" data-os-animation-delay=".1s">
                            <a href="" target="_blank" rel="nofollow" class="social__link">
                                <svg class="svg-icon icon-instagram">
                                    <use xlink:href="/skin/images/svg-sprite.svg#instagram"></use>
                                </svg>
                            </a>
                        </li>
                        <li class="social__item os-animation" data-os-animation="flipInX" data-os-animation-delay=".15s">
                            <a href="" target="_blank" rel="nofollow" class="social__link">
                                <svg class="svg-icon icon-vk">
                                    <use xlink:href="/skin/images/svg-sprite.svg#vk"></use>
                                </svg>
                            </a>
                        </li>
                        <li class="social__item os-animation" data-os-animation="flipInX" data-os-animation-delay=".2s">
                            <a href="" target="_blank" rel="nofollow" class="social__link">
                                <svg class="svg-icon icon-ok">
                                    <use xlink:href="/skin/images/svg-sprite.svg#ok"></use>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="footer-contacts">
                    <div class="footer-phone">
                        <svg class="svg-icon icon-phone footer-phone__icon">
                            <use xlink:href="/skin/images/svg-sprite.svg#phone"></use>
                        </svg>
                        <a href="tel:+88008880000" class="footer-phone__link">8 800 888 00 00</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

<?include($_SERVER['DOCUMENT_ROOT']."/templates/footer.tpl.php")?>