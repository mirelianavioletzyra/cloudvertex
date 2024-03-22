<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package tailwind
 */

get_header();
?>

	<main id="primary" class="site-main mb-10 md:mb-20 mt-20">

		<?php
		while ( have_posts() ) :
			the_post();

			get_template_part( 'template-parts/content', get_post_type() );
			
			ob_start();

			get_template_part( 'template-parts/post-navigation', get_post_type() );


			$navigation = ob_get_clean();

			echo '<div class="post-navigation grid grid-cols-12">' . $navigation . '</div>';
	

			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;

		endwhile; // End of the loop.
		?>

	</main><!-- #main -->

<?php
get_sidebar();
get_footer();
