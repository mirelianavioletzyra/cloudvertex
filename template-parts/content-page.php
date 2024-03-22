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
	<?php if ( ! is_front_page() ) : ?>
		<header class="entry-header grid grid-cols-12 mt-24">
			<?php the_title( '<h1 class="entry-title text-magenta text-2xl col-span-8 col-start-2 md:col-start-3">', '</h1>' ); ?>
		</header><!-- .entry-header -->
	<?php endif; ?>

	<?php tailwind_post_thumbnail(); ?>

	<div class="entry-content grid grid-cols-12">
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
