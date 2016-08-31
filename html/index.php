<?
$PAGE['meta_title'] = "Главная";
$page = 'index';
include("../templates/main/header.tpl.php");
?>

<div class="layout-main">
    <div class="main-slider__wrap">
        <div class="main-slider lg_album">
            <?for ($i=1; $i<=8; $i++) {?>
            <div class="main-slider__item">
                <a href="/uploads/images/slider/big/slide_img_<?=$i?>.jpg" data-exthumbimage="/uploads/images/slider/thumb/slide_img_<?=$i?>.jpg" class="lg_item">
                    <img src="/uploads/images/slider/prev/slide_img_<?=$i?>.jpg" alt="">
                </a>
            </div>
            <?}?>
        </div>
    </div>
</div>

<div class="parallax-window" data-parallax="scroll" data-image-src="/uploads/images/img_1.jpg">
    <div class="layout-main">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda at autem cupiditate debitis ducimus illo, ipsa ipsum magnam molestiae molestias nemo nisi nostrum placeat quaerat quam quas quasi similique suscipit tenetur? Ab animi aperiam architecto deserunt dicta dolorum ea ex fuga iure iusto labore mollitia natus neque, odio officia repudiandae rerum saepe! Autem debitis delectus ducimus enim ipsam iste, libero minima molestiae nobis quaerat quam quasi quibusdam repellendus repudiandae sequi vel vero voluptatum? Ab ad adipisci aliquam amet autem blanditiis, consectetur cupiditate dignissimos dolor dolorum eaque enim eos est et ex illo laborum magni modi molestias nemo nulla officia perspiciatis quas quidem quis repellendus reprehenderit saepe sapiente sequi sint sunt suscipit temporibus vero voluptas voluptate voluptatem voluptatibus. Adipisci alias aut autem consectetur error eum eveniet fugiat ipsam iste laborum magnam, nemo nesciunt nobis odit officia quas quo quod quos vel vitae! Aliquam amet animi consequatur deleniti, dignissimos enim error et eum excepturi facere fuga natus quas quia repellat reprehenderit, sapiente sequi veritatis. Architecto atque dolore neque odit quae quam, quas repellat rerum totam voluptates. Accusamus ad amet commodi consequatur corporis cupiditate dolore earum eius enim est eum exercitationem explicabo fugiat hic id impedit incidunt ipsa labore nisi, numquam obcaecati officia perspiciatis quis quo suscipit, tempore velit voluptas? Aut culpa cumque odio quam qui sunt vero voluptas voluptate? Amet doloremque dolorum eveniet itaque laudantium mollitia perspiciatis placeat quaerat quibusdam ratione reprehenderit sunt, tempore temporibus veniam veritatis. Adipisci cumque dolorum eum hic laudantium, necessitatibus non pariatur provident reiciendis sequi! Architecto atque consequatur cum, deleniti dolorem dolores doloribus eligendi error eum ex explicabo hic, impedit maxime minima quisquam saepe sed! Aliquid, dignissimos distinctio exercitationem molestiae non omnis pariatur quia saepe sit. Ea error impedit nihil pariatur. Animi expedita illum, magni perferendis placeat velit. Accusantium assumenda consequatur delectus eaque earum nam, officiis provident similique. Architecto consequatur culpa dolorem et eum illo magni maxime reprehenderit tempora. Commodi corporis doloremque eligendi minima pariatur quae repellendus suscipit. Dolorum eligendi, ex, excepturi harum in ipsum minus nam nisi quibusdam, reiciendis reprehenderit saepe similique sit ut voluptate. Ab alias blanditiis consequatur cumque, dignissimos ducimus expedita facere hic illo inventore laboriosam laudantium magnam magni nam nisi nulla odio odit omnis quas quia, repellat repellendus reprehenderit repudiandae rerum sed soluta vero vitae voluptate voluptatibus voluptatum. Alias beatae deserunt doloremque enim facilis laudantium maxime odit pariatur, quo reiciendis, repellat saepe sint unde ut vel. Autem cumque debitis ipsa labore libero reprehenderit, velit. Ad animi aperiam culpa dicta dolore dolores doloribus ex, expedita impedit laboriosam libero magnam minima non nulla obcaecati optio pariatur qui quo quod recusandae tempora temporibus ullam veniam? Aperiam consequatur debitis ex fuga laudantium libero modi necessitatibus nisi rem repellendus rerum, sapiente, velit, vero? Ad aliquam atque aut cumque deleniti deserunt dignissimos doloribus ducimus eos, et ex fugit inventore ipsum iure iusto laboriosam molestiae necessitatibus nesciunt numquam odio quas quasi quos rem repellendus saepe sunt temporibus vel. Asperiores, aspernatur cum dolore dolorem dolores, eius enim esse exercitationem facilis inventore ipsa nemo neque nobis pariatur quas ratione sed sunt suscipit!
    </div>
</div>

<?
include("../templates/main/footer.tpl.php");
?>