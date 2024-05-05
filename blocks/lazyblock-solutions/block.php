<?php

/**
 * Solutions Block Template.
 *
 * @var array $attributes Block attributes.
 * @var array $block Block data.
 * @var string $context Preview context [editor,frontend].
 */
?>
<div class="solutions-block wp-container-core-columns-layout-1 flex justify-center flex-wrap my-24 py-44 text-white" style="background: linear-gradient(180deg, #FFF 0%, #FEEAFE 6.5%, #FDD0FE 12.5%, #FA8BFC 20%, #F400F9 31%, #D800FB 39%, #9E00FF 48.5%, #4778F1 59.5%, #1DA1EB 66%, #00D9E6 74%, #32EED9 80%, #95FFDF 88%, #D7FFF3 93.5%, #FFF 100%), #FFF;">
    <div class="flex flex-col justify-center text-center w-full mb-16">
        <h2 class="text-center text-4xl font-medium"><?php echo $attributes['title']; ?></h2>
        <h3 class="text-xl"><?php echo $attributes['sub_heading']; ?></h3>
    </div>
    <div class="solutions flex flex-row flex-wrap justify-center gap-8">
    <?php 
    
    $attributes = array_merge(array(
        'gradient' => ''
    ), $attributes);

    foreach ($attributes['solution'] as $inner) :  ?>
        <a href="<?php echo isset($inner['link']) ? esc_url($inner['link']) : '#'; ?>" class="solution-link group bg-white text-gray-600 solution block transition-all duration-200 ease-in-out rounded-2xl max-w-[7rem] md:max-w-[6rem] lg:min-w-[12rem] max-h-28 md:max-h-fit text-center flex items-center justify-start flex-col <?php echo $inner['gradient']; ?>">
                <?php 
                $icon_url = $inner['icon']['url'];
                $is_svg = pathinfo($icon_url, PATHINFO_EXTENSION) === 'svg';
                if ($is_svg) {
                    echo '<div class="[&_svg]:w-12 group-hover:[&_svg]:fill-white sparkle-container">';
                    echo file_get_contents($icon_url);
                    echo '</div>';
                } else {
                    echo '<img src="' . $icon_url . '" class="w-36">';
                }
                ?>
                <p class="text text-[0.6rem] md:text-md xl:text-[0.8rem] mb-0 relative -top-5">
                    <?php echo $inner['solution_name']; ?>
                </p>
        </a>
    <?php endforeach; ?>
</div>
</div>