<?php

/**
 * Services Block Template.
 *
 * @var array $attributes Block attributes.
 * @var array $block Block data.
 * @var string $context Preview context [editor,frontend].
 */
?>

<div class="services-block wp-container-core-columns-layout-1 flex justify-center flex-wrap md:my-24">
    <div class="flex flex-col justify-center text-center w-full">
        <h2 class="text-center text-4xl font-medium"><?php echo $attributes['title']; ?></h2>
        <h3 class="text-xl text-slate-600"><?php echo $attributes['sub_heading']; ?></h3>
    </div>
    <?php foreach ($attributes['service'] as $inner) : ?>
        <a href="<?php echo isset($inner['link']) ? esc_url($inner['link']) : '#'; ?>" class="services-link">
        <div class="service sparkle-container max-w-[7rem] md:max-w-[6rem] lg:min-w-[12rem] max-h-28 md:max-h-fit text-center flex items-center justify-start flex-col">
            <?php
            $icon_url = $inner['icon']['url'];
            $is_svg = pathinfo($icon_url, PATHINFO_EXTENSION) === 'svg';

            if ($is_svg) {
                echo '<div class="[&_svg]:w-12">';
                echo file_get_contents($icon_url);
                echo '</div>';
            } else {
                echo '<img src="' . $icon_url . '" class="w-36">';
            }
            ?>
            <p class="text-[0.6rem] md:text-md xl:text-lg mb-0 relative -top-10">
                <?php echo $inner['service_name']; ?>
            </p>
        </div>
        </a>
    <?php endforeach; ?>
</div>