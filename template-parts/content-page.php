<?php
/**
 * Template part for displaying page content in page.php (displays content for index template)
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package tailwind
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<!-- <?php // the_title( '<h1 class="entry-title text-magenta text-2xl">', '</h1>' ); ?> -->
	</header><!-- .entry-header -->

	<?php tailwind_post_thumbnail(); ?>

	<div class="entry-content pt-20">
		<?php
		the_content();

		wp_link_pages(
			array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'tailwind' ),
				'after'  => '</div>',
			)
		);
		?>
	</div><!-- .entry-content -->
</article><!-- #post-<?php the_ID(); ?> -->
