<?php
/**
 * Services Block Template.
 *
 * @var array $attributes Block attributes.
 * @var array $block Block data.
 * @var string $context Preview context [editor,frontend].
 */
?>
<div class="services-block wp-container-core-columns-layout-1 flex justify-center flex-wrap">
    <div class="flex flex-col justify-center text-center w-full">
        <h2 class="text-center"><?php echo $attributes['title']; ?></h2>

        <h3><?php echo $attributes['sub_heading']; ?></h3>
    </div>
    <?php foreach ($attributes['service'] as $inner) : ?>
        <div class="max-w-[3.6rem] md:max-w-xs justify-center text-center services">
            <img src="<?php echo $inner['icon']['url']; ?>">
            <p class="text-[0.6rem] md:text-md xl:text-lg">
                <?php echo $inner['service_name']; ?>
            </p>
        </div>
    <?php endforeach; ?>
</div>