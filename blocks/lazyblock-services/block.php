<?php

/**
 * Services Block Template.
 *
 * @var  array  $attributes Block attributes.
 * @var  array  $block Block data.
 * @var  string $context Preview context [editor,frontend].
 */

?>
<div class="services-block wp-container-core-columns-layout-1 grid">
    <div class="flex flex-col justify-center text-center">
        <h2 class="text-center"><?php echo $attributes['title']; ?></h2>

        <h3><?php echo $attributes['sub_heading']; ?></h3>
    </div>

    <?php foreach ($attributes['service'] as $inner) : ?>
        <img src="<?php echo $inner['icon']['url']; ?>">
        <p>
            <?php echo $inner['service_name']; ?>
        </p>
    <?php endforeach; ?>
</div> 