<?php
/**
 * Services Block Template.
 *
 * @var array $attributes Block attributes.
 * @var array $block Block data.
 * @var string $context Preview context [editor,frontend].
 */
?>
<div class="services-block grid grid-cols-12 py-10 md:py-20">
    <div class="text-center col-span-12">
        <h2 class="text-center text-3xl font-medium"><?php echo $attributes['title']; ?></h2>
        <h3 class="text-xl"><?php echo $attributes['sub_heading']; ?></h3>
    </div>
    <?php foreach ($attributes['service'] as $inner) : ?>
        <div class="service col-span-4 md:col-span-3 text-center flex items-center justify-start flex-col">
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
            <p class="text-xs md:text-sm mb-0 relative -top-10">
                <?php echo $inner['service_name']; ?>
            </p>
        </div>
    <?php endforeach; ?>
</div>