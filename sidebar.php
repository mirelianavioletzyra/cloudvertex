<?php

/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package tailwind
 */

if (!is_active_sidebar('sidebar-1')) {
	return;
}
?>

<aside id="secondary" class="widget-area grid grid-cols-12">
	<div class="col-span-8 col-start-3">
		<?php dynamic_sidebar('sidebar-1'); ?>
	</div>
</aside><!-- #secondary -->