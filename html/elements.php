<?
$PAGE['meta_title'] = "Элементы";
include("../templates/main/header.tpl.php");
?>

    <div class="design-elements">
        <div class="design-elements__row">
            <div class="design-elements__item">
                <div class="ttl-base">Заголовки</div>
                <div class="content">
                    <h1>Заголовок h1</h1>
                    <h2>Заголовок h2</h2>
                    <h3>Заголовок h3</h3>
                    <h4>Заголовок h4</h4>
                    <h5>Заголовок h5</h5>
                    <h6>Заголовок h6</h6>
                </div>
            </div>
            <div class="design-elements__item">
                <div class="ttl-base">Элементы форм</div>
                <div class="grid">
                    <div class="grid__cell">
                        <div class="form-base">
                            <div class="form-base__field">
                                <input type="text" name="name" placeholder="Имя" class="inp-base">
                            </div>
                            <div class="form-base__field">
                                <input type="email" name="email" placeholder="Email" class="inp-base">
                            </div>
                            <div class="form-base__field">
                                <input type="text" name="phone" placeholder="Телефон" class="inp-base phone-mask">
                            </div>
                        </div>
                    </div>
                    <div class="grid__cell">
                        <textarea name="message" placeholder="Ваше сообщение" class="textarea-base"></textarea>
                    </div>
                </div>
                <div class="grid">
                    <div class="grid__cell">
                        <label class="switch"><input type="radio" name="radio" class="switch__inp" checked><span class="switch__el switch__el_radio"></span> radio 1</label>
                    </div>
                    <div class="grid__cell">
                        <label class="switch"><input type="radio" name="radio" class="switch__inp" checked><span class="switch__el switch__el_radio"></span> radio 2</label>
                    </div>
                    <div class="grid__cell">
                        <label class="switch"><input type="checkbox" name="checkbox" class="switch__inp" checked><span class="switch__el switch__el_checkbox"></span> checkbox</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="design-elements__row">
            <div class="design-elements__item">
                <div class="ttl-base">Кнопки</div>
                <a href="#dialog" class="open-dialog btn btn_base" data-title="Диалог">Открыть диалог</a>
                <button class="btn btn_primary">Кнопка</button>
                <button class="btn btn_secondary">Кнопка</button>
                <button class="btn btn_attention">Кнопка</button>
            </div>
            <div class="design-elements__item">
                <div class="ttl-base">
                    <div class="ttl-base__text">Иконки</div>
                </div>
                <div class="grid">
                    <div class="grid__cell">
                        <h4>svg</h4
                        <svg class="svg-icon icon-arrow">
                            <use xlink:href="/skin/images/svg-sprite.svg#arrow"></use>
                        </svg>
                        <svg class="svg-icon icon-phone">
                            <use xlink:href="/skin/images/svg-sprite.svg#phone"></use>
                        </svg>
                        <svg class="svg-icon icon-point">
                            <use xlink:href="/skin/images/svg-sprite.svg#point"></use>
                        </svg>
                        <svg class="svg-icon icon-search">
                            <use xlink:href="/skin/images/svg-sprite.svg#search"></use>
                        </svg>
                        <svg class="svg-icon icon-email">
                            <use xlink:href="/skin/images/svg-sprite.svg#email"></use>
                        </svg>
                        <svg class="svg-icon icon-facebook">
                            <use xlink:href="/skin/images/svg-sprite.svg#facebook"></use>
                        </svg>
                        <svg class="svg-icon icon-instagram">
                            <use xlink:href="/skin/images/svg-sprite.svg#instagram"></use>
                        </svg>
                        <svg class="svg-icon icon-vk">
                            <use xlink:href="/skin/images/svg-sprite.svg#vk"></use>
                        </svg>
                        <svg class="svg-icon icon-ok">
                            <use xlink:href="/skin/images/svg-sprite.svg#ok"></use>
                        </svg>
                        <svg class="svg-icon icon-twitter">
                            <use xlink:href="/skin/images/svg-sprite.svg#twitter"></use>
                        </svg>
                    </div>
                    <div class="grid__cell">
                        <h4>png</h4>
                        <span class="icon icon-checkbox"></span>
                        <span class="icon icon-wishlist"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="design-elements__row">
            <div class="design-elements__item">
                <div class="ttl-base">Контент</div>
                <div class="content">
                    <div class="grid">
                        <div class="grid__cell">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolores, eos illo magnam officia provident quod quos sapiente tenetur vel?</p>
                            <ul>
                                <li>Item 0</li>
                                <li>Item 1</li>
                                <li>Item 2</li>
                            </ul>
                            <ol>
                                <li>Item 0</li>
                                <li>Item 1</li>
                                <li>Item 2</li>
                            </ol>
                        </div>
                        <div class="grid__cell">
                            <table width="100%">
                                <tr>
                                    <th>th</th>
                                    <th>th</th>
                                    <th>th</th>
                                </tr>
                                <tr>
                                    <td>td</td>
                                    <td>td</td>
                                    <td>td</td>
                                </tr>
                                <tr>
                                    <td>td</td>
                                    <td>td</td>
                                    <td>td</td>
                                </tr>
                                <tr>
                                    <td>td</td>
                                    <td>td</td>
                                    <td>td</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="dialog" class="popup">
        <form method="post" name="" class="form-base">
            <div class="form-base__field">
                <input class="inp-base" type="text" name="name" value="" placeholder="Имя*" required>
            </div>
            <div class="form-base__field">
                <input class="inp-base phone-mask" type="text" name="phone" value="" placeholder="Номер телефона*" required>
            </div>
            <div class="form-base__btns">
                <button class="btn btn_primary" type="submit">Отправить</button>
            </div>
        </form>
    </div>

<?
include("../templates/main/footer.tpl.php");
?>