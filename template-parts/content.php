<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package tailwind
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'mt-20 md:mt-44 grid grid-cols-12' ); ?>>
	<header class="entry-header col-span-10 col-start-2">
		<?php
		if ( is_singular() ) :
			the_title( '<h1 class="entry-title text-xl md:text-3xl text-fuchsia-500 font-medium mb-4">', '</h1>' );
		else :
			the_title( '<h2 class="entry-title text-xl md:text-3xl text-fuchsia-500 font-medium mb-4"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
		endif;

		if ( 'post' === get_post_type() ) :
			?>
			<div class="entry-meta text-sm">
				<?php
				tailwind_posted_on();
				tailwind_posted_by();
				?>
			</div><!-- .entry-meta -->
		<?php endif; ?>
	</header><!-- .entry-header -->

	<div class="thumbnail col-span-10 col-start-2 my-4">
	<?php tailwind_post_thumbnail(); ?>
	</div>

	<div class="entry-content col-span-10 col-start-2 md:col-span-8 md:mt-12 md:col-start-3">
		<?php
		the_content(
			sprintf(
				wp_kses(
					/* translators: %s: Name of current post. Only visible to screen readers */
					__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'tailwind' ),
					array(
						'span' => array(
							'class' => array(),
						),
					)
				),
				wp_kses_post( get_the_title() )
			)
		);

		wp_link_pages(
			array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'tailwind' ),
				'after'  => '</div>',
			)
		);
		?>
	</div><!-- .entry-content -->

	<footer class="entry-footer col-span-10 col-start-2 md:col-span-8 md:col-start-3">
		<?php tailwind_entry_footer(); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-<?php the_ID(); ?> -->
