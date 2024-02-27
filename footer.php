<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package tailwind
 */

?>

	<footer id="colophon" class="site-footer text-white bg-zinc-800 py-8">
		<div class="site-info col-span-8 col-start-3">
			<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'tailwind' ) ); ?>">
				<?php
				/* translators: %s: CMS name, i.e. WordPress. */
				printf( esc_html__( 'Proudly powered by %s', 'tailwind' ), 'WordPress' );
				?>
			</a>
			<span class="sep"> | </span>
				<?php
				/* translators: 1: Theme name, 2: Theme author. */
				printf( esc_html__( 'Theme: %1$s by %2$s.', 'cloudvertex' ), 'cloudvertex', '<a href="http://underscores.me/">CloudVertex</a>' );
				?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
